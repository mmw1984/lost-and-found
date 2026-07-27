# Contact form Worker

This Cloudflare Worker validates submissions from the GitHub Pages frontend
and forwards them server-to-server to the configured Telegram Notify API.

## Telegram setup

1. Check `ALLOWED_ORIGINS` contains the exact GitHub Pages/custom-domain
   origin.
2. Install dependencies, save both the Notify API URL and API key as
   Cloudflare secrets, and deploy:

   ```sh
   npm install
   npx wrangler secret put NOTIFY_API_URL
   npx wrangler secret put NOTIFY_API_KEY
   npm run deploy
   ```

3. Copy the deployed Worker URL into `CONTACT_API_URL` in the root
   `config.js`, including the full `https://` URL.

Never put the Notify API key in `wrangler.jsonc`, `config.js`, or Git. The
submitted name, contact details, location, message, and page URL will be sent
to the Telegram chat fixed by the Notify API.

For local development, run `npm run dev` here and set the frontend endpoint
temporarily in the browser console or a local-only copy of `config.js`.
