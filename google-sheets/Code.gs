const SHEET_NAME = "Orders";
const HEADERS = ["Submitted At", "Name", "Mobile", "Address", "Product"];
// Spreadsheet ID from the Google Sheet URL: /spreadsheets/d/<ID>/edit
const SPREADSHEET_ID = "1ZeFOhCOFLtRmuVED3zpr2Ht1EsAnbutwed3vqdPavg8";

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

    const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
    let sheet = spreadsheet.getSheetByName(SHEET_NAME);
    if (!sheet) sheet = spreadsheet.insertSheet(SHEET_NAME);
    if (sheet.getLastRow() === 0) sheet.appendRow(HEADERS);

    // Remove the old Page URL column from sheets created by earlier versions.
    const pageUrlColumn = sheet.getRange(1, 1, 1, sheet.getLastColumn())
      .getValues()[0]
      .indexOf("Page URL");
    if (pageUrlColumn !== -1) sheet.deleteColumn(pageUrlColumn + 1);

    sheet.appendRow([
      new Date(),
      safeCell(name),
      safeCell(mobile),
      safeCell(address),
      safeCell(clean(payload.product))
    ]);
    return json({ ok: true });
  } catch (error) {
    console.error(error);
    return json({ ok: false, error: String(error && error.message || error) });
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
