# Google Sheets order capture

## Apps Script setup

1. Create or open the Google Sheet that should receive website orders.
2. Open **Extensions > Apps Script** from that Sheet. Replace the editor contents with `Code.gs` from this folder and save. The script is configured to open the Sheet by ID.
3. Choose **Deploy > New deployment > Web app**. Set **Execute as** to your account and access to **Anyone**, then deploy and authorize it.
4. Keep the web app deployment URL in the order form source (`src/App.jsx`) and make sure it matches the deployment ending in `/exec`.
5. Update the existing web app deployment to use the new version. In Apps Script, choose **Deploy > Manage deployments**, edit the deployment, select **New version**, and deploy. If you create a new deployment instead, replace the URL in `src/App.jsx` and rebuild/redeploy the site.

The order form sends name, mobile, address, product, page URL, and Apps Script submission time to an `Orders` tab. It continues to open the existing WhatsApp order message. The browser uses a `no-cors` POST, so it cannot read the Apps Script response; check the Sheet to confirm entries.
