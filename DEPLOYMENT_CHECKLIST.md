# ✅ Quick Deployment Checklist

## Before Deploying

- [ ] Code is committed and pushed to Git
- [ ] All environment variables are ready
- [ ] `@vercel/node` is installed (`npm install --save-dev @vercel/node`)
- [ ] `api/zoho-lead.ts` exists and is correct
- [ ] `vercel.json` exists with correct configuration

## During Deployment

### Via Vercel Dashboard:

1. [ ] Go to [vercel.com/dashboard](https://vercel.com/dashboard)
2. [ ] Click "Add New Project"
3. [ ] Import your Git repository
4. [ ] Set Framework: **Vite**
5. [ ] Set Build Command: `npm run build`
6. [ ] Set Output Directory: `dist`
7. [ ] **Add Environment Variables** (see below)
8. [ ] Click "Deploy"

### Via Vercel CLI:

1. [ ] Run `vercel login`
2. [ ] Run `vercel` in project directory
3. [ ] Add environment variables (see below)
4. [ ] Run `vercel --prod`

## Environment Variables to Add

Add these in Vercel Dashboard → Settings → Environment Variables:

### For Serverless Functions (without VITE_):
- [ ] `ZOHO_CLIENT_ID`
- [ ] `ZOHO_CLIENT_SECRET`
- [ ] `ZOHO_REFRESH_TOKEN`
- [ ] `ZOHO_API_DOMAIN` (default: `https://www.zohoapis.com`)
- [ ] `ZOHO_REGION` (default: `com`)

### For Client-Side (with VITE_):
- [ ] `VITE_ZOHO_CLIENT_ID`
- [ ] `VITE_ZOHO_CLIENT_SECRET`
- [ ] `VITE_ZOHO_REFRESH_TOKEN`
- [ ] `VITE_ZOHO_API_DOMAIN`
- [ ] `VITE_ZOHO_REGION`

### If Using Supabase:
- [ ] `VITE_SUPABASE_URL`
- [ ] `VITE_SUPABASE_PUBLISHABLE_KEY`

**Important**: Enable for **Production**, **Preview**, and **Development** environments!

## After Deployment

- [ ] Visit your live site URL
- [ ] Test the contact form
- [ ] Check browser console (F12) for errors
- [ ] Verify lead appears in Zoho CRM
- [ ] Test API endpoint: `https://your-site.vercel.app/api/zoho-lead`
- [ ] Check Vercel Function Logs for any errors

## Troubleshooting Quick Fixes

| Issue | Quick Fix |
|-------|-----------|
| "Credentials not configured" | Add env vars in Vercel Dashboard → Redeploy |
| "404 on /api/zoho-lead" | Check `api/zoho-lead.ts` exists → Redeploy |
| "CORS error" | Check serverless function has CORS headers |
| Build fails | Check Vercel build logs → Fix errors → Redeploy |

---

**📖 For detailed instructions, see `DEPLOYMENT_GUIDE.md`**
