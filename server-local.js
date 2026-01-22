// Simple Express server for local development
// Install dependencies: npm install express cors
// Run with: node server-local.js
// This allows the Zoho API endpoint to work locally

import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Load environment variables
dotenv.config({ path: '.env.local' });

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// Proxy to handle Zoho CRM API calls
app.post('/api/zoho-lead', async (req, res) => {
  try {
    const formData = req.body;

    // Get environment variables
    const zohoClientId = process.env.ZOHO_CLIENT_ID || process.env.VITE_ZOHO_CLIENT_ID;
    const zohoClientSecret = process.env.ZOHO_CLIENT_SECRET || process.env.VITE_ZOHO_CLIENT_SECRET;
    const zohoRefreshToken = process.env.ZOHO_REFRESH_TOKEN || process.env.VITE_ZOHO_REFRESH_TOKEN;
    const zohoApiDomain = process.env.ZOHO_API_DOMAIN || process.env.VITE_ZOHO_API_DOMAIN || 'https://www.zohoapis.com';
    const zohoRegion = process.env.ZOHO_REGION || process.env.VITE_ZOHO_REGION || 'com';

    if (!zohoClientId || !zohoClientSecret || !zohoRefreshToken) {
      return res.status(500).json({ 
        error: 'Zoho CRM credentials not configured. Check your .env.local file.' 
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
    
    return res.status(200).json({
      success: true,
      data: result.data?.[0],
      message: 'Lead created successfully in Zoho CRM',
    });

  } catch (error) {
    console.error('Zoho CRM API error:', error);
    return res.status(500).json({
      success: false,
      error: error.message || 'Failed to create lead in Zoho CRM',
    });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Local API server running on http://localhost:${PORT}`);
  console.log(`📝 Zoho CRM endpoint: http://localhost:${PORT}/api/zoho-lead`);
  console.log(`💡 Make sure your .env.local file has Zoho credentials configured.`);
});
