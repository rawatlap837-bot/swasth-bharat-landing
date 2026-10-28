# Google Sheets order capture

## Apps Script setup

1. Create or open the Google Sheet that should receive website orders.
2. Open **Extensions > Apps Script**. Replace the editor contents with `Code.gs` from this folder and save.
3. Choose **Deploy > New deployment > Web app**. Set **Execute as** to your account and access to **Anyone**, then deploy and authorize it.
4. Copy the web app URL ending in `/exec`.
5. Create `.env.local` in the project root with:

   ```env
   VITE_GOOGLE_SHEETS_URL=https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec
   ```

6. Restart the Vite dev server (and rebuild/redeploy the site after setting the production environment variable).

The order form sends name, mobile, address, product, page URL, and Apps Script submission time to an `Orders` tab. It continues to open the existing WhatsApp order message. The browser uses a `no-cors` POST, so it cannot read the Apps Script response; check the Sheet to confirm entries.
