// Vercel Serverless Function for Zoho CRM Integration
// This function handles Zoho API calls server-side to avoid CORS issues

import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  // CORS headers
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };

  // Handle preflight
  if (req.method === 'OPTIONS') {
    return res.status(200).setHeader(corsHeaders).send(null);
  }

  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).setHeader(corsHeaders).json({ error: 'Method not allowed' });
  }

  try {
    const formData = req.body;

    // Get environment variables (try both with and without VITE_ prefix for flexibility)
    const zohoClientId = process.env.ZOHO_CLIENT_ID || process.env.VITE_ZOHO_CLIENT_ID;
    const zohoClientSecret = process.env.ZOHO_CLIENT_SECRET || process.env.VITE_ZOHO_CLIENT_SECRET;
    const zohoRefreshToken = process.env.ZOHO_REFRESH_TOKEN || process.env.VITE_ZOHO_REFRESH_TOKEN;
    const zohoApiDomain = process.env.ZOHO_API_DOMAIN || process.env.VITE_ZOHO_API_DOMAIN || 'https://www.zohoapis.com';
    const zohoRegion = process.env.ZOHO_REGION || process.env.VITE_ZOHO_REGION || 'com';

    if (!zohoClientId || !zohoClientSecret || !zohoRefreshToken) {
      return res.status(500).setHeader(corsHeaders).json({ 
        success: false,
        error: 'Zoho CRM credentials not configured' 
      });
    }

    // Step 1: Get access token
    const tokenUrl = `https://accounts.zoho.${zohoRegion}/oauth/v2/token`;
    const tokenParams = new URLSearchParams({
      refresh_token: zohoRefreshToken,
      client_id: zohoClientId,
      client_secret: zohoClientSecret,
      grant_type: 'refresh_token',
    });

    const tokenResponse = await fetch(tokenUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: tokenParams,
    });

    if (!tokenResponse.ok) {
      const errorText = await tokenResponse.text();
      throw new Error(`Zoho token request failed: ${tokenResponse.statusText} - ${errorText}`);
    }

    const tokenData = await tokenResponse.json();
    const accessToken = tokenData.access_token;

    if (!accessToken) {
      throw new Error('Failed to get access token from Zoho');
    }

    // Step 2: Create lead in Zoho CRM
    const apiUrl = `${zohoApiDomain}/crm/v3/Leads`;
    
    // Map form data to Zoho CRM Lead fields
    const leadData = {
      Last_Name: formData.name?.trim() || '',
      Email: formData.email?.trim() || '',
      Phone: formData.phone?.trim() || undefined,
      City: formData.location?.trim() || undefined,
      Description: formData.message?.trim() || '',
      Lead_Source: 'Website Contact Form',
      Lead_Status: formData.subject === 'franchise' ? 'Franchise Inquiry' : 
                   formData.subject === 'corporate' ? 'Corporate Inquiry' : 
                   formData.subject === 'support' ? 'Support Request' : 'General Inquiry',
    };

    const leadResponse = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Authorization': `Zoho-oauthtoken ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        data: [leadData],
      }),
    });

    if (!leadResponse.ok) {
      const errorData = await leadResponse.json().catch(() => ({}));
      throw new Error(`Zoho API error: ${leadResponse.statusText} - ${JSON.stringify(errorData)}`);
    }

    const result = await leadResponse.json();
    
    return res.status(200).setHeader(corsHeaders).json({
      success: true,
      data: result.data?.[0],
      message: 'Lead created successfully in Zoho CRM',
    });

  } catch (error: any) {
    console.error('Zoho CRM API error:', error);
    return res.status(500).setHeader(corsHeaders).json({
      success: false,
      error: error.message || 'Failed to create lead in Zoho CRM',
    });
  }
}
