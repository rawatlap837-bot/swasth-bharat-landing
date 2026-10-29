const SHEETS_WEB_APP_URL = process.env.GOOGLE_SHEETS_URL ||
  'https://script.google.com/macros/s/AKfycbwpDvRx-cLh_9zZR8fV_njGNO1s9L3aLFDaBHecDwCh7OpIYKIDK6bxg4cCrI1YgvhGUQ/exec';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ ok: false, error: 'Method not allowed' });
  }

  const { name, mobile, address, product, source, createdAt } = req.body || {};
  const normalizedMobile = String(mobile || '').replace(/\D/g, '');
  if (!String(name || '').trim() || !/^[6-9]\d{9}$/.test(normalizedMobile) || !String(address || '').trim()) {
    return res.status(400).json({ ok: false, error: 'Enter your name, valid mobile number, and full address.' });
  }

  try {
    const upstream = await fetch(SHEETS_WEB_APP_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain;charset=UTF-8' },
      body: JSON.stringify({ name, mobile: normalizedMobile, address, product, source, createdAt }),
      redirect: 'follow',
      signal: AbortSignal.timeout(15000),
    });
    const responseText = await upstream.text();
    let result;
    try { result = JSON.parse(responseText); } catch { result = null; }

    if (!upstream.ok || result?.ok !== true) {
      console.error('Google Sheets rejected lead:', upstream.status, responseText.slice(0, 500));
      return res.status(502).json({ ok: false, error: 'Your details could not be saved. Please try again.' });
    }
    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error('Google Sheets request failed:', error);
    return res.status(502).json({ ok: false, error: 'Could not connect to Google Sheets. Please try again.' });
  }
}
