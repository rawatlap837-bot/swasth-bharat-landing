const SHEET_NAME = "Orders";
const HEADERS = ["Submitted At", "Name", "Mobile", "Address", "Product", "Page URL"];

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const payload = JSON.parse((e && e.postData && e.postData.contents) || "{}");
    const name = clean(payload.name);
    const mobile = String(payload.mobile || "").replace(/\D/g, "");
    const address = clean(payload.address);
    if (!name || !/^[6-9]\d{9}$/.test(mobile) || !address) {
      return json({ ok: false, error: "Invalid order details" });
    }

    const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    let sheet = spreadsheet.getSheetByName(SHEET_NAME);
    if (!sheet) sheet = spreadsheet.insertSheet(SHEET_NAME);
    if (sheet.getLastRow() === 0) sheet.appendRow(HEADERS);

    sheet.appendRow([
      new Date(),
      safeCell(name),
      safeCell(mobile),
      safeCell(address),
      safeCell(clean(payload.product)),
      safeCell(clean(payload.source))
    ]);
    return json({ ok: true });
  } catch (error) {
    console.error(error);
    return json({ ok: false, error: "Could not save order" });
  } finally {
    lock.releaseLock();
  }
}

function clean(value) {
  return String(value || "").trim().slice(0, 1000);
}

function safeCell(value) {
  const text = String(value || "");
  return /^[=+@-]/.test(text) ? "'" + text : text;
}

function json(value) {
  return ContentService.createTextOutput(JSON.stringify(value))
    .setMimeType(ContentService.MimeType.JSON);
}
