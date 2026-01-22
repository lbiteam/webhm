# Zoho CRM API Integration

This serverless function handles Zoho CRM lead creation to avoid CORS issues.

## Setup Instructions

### 1. Environment Variables

Add these to your `.env.local` file (for local development) and Vercel environment variables (for production):

```env
VITE_ZOHO_CLIENT_ID=your_client_id
VITE_ZOHO_CLIENT_SECRET=your_client_secret
VITE_ZOHO_REFRESH_TOKEN=your_refresh_token
VITE_ZOHO_API_DOMAIN=https://www.zohoapis.com
VITE_ZOHO_REGION=com
```

**Note:** In Vercel, add these as environment variables (without the `VITE_` prefix for serverless functions, but keep `VITE_` for client-side access).

### 2. Local Development

**Option A: Using Vercel CLI (Recommended)**
```bash
npm install -g vercel
vercel dev
```
This will run your app with serverless functions at `http://localhost:3000`

**Option B: Using a Local Proxy Server**
Create a simple Express server or use the Vite proxy configuration.

### 3. Production Deployment

When deploying to Vercel:
1. Add environment variables in Vercel Dashboard → Settings → Environment Variables
2. The serverless function will automatically be available at `/api/zoho-lead`

## Getting Zoho Refresh Token

1. Go to https://api-console.zoho.com/
2. Create a new "Server-based Applications" client
3. Generate authorization code
4. Exchange code for refresh token using:
   ```bash
   curl -X POST https://accounts.zoho.com/oauth/v2/token \
     -d "grant_type=authorization_code" \
     -d "client_id=YOUR_CLIENT_ID" \
     -d "client_secret=YOUR_CLIENT_SECRET" \
     -d "redirect_uri=YOUR_REDIRECT_URI" \
     -d "code=YOUR_AUTHORIZATION_CODE"
   ```
