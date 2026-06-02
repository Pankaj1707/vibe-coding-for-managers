const REQUIRED_HEADERS = ["timestamp", "email", "source"];

function doPost(event) {
  const lock = LockService.getScriptLock();
  let hasLock = false;

  try {
    lock.waitLock(10000);
    hasLock = true;

    const payload = JSON.parse(event.postData.contents || "{}");
    const expectedSecret = PropertiesService.getScriptProperties().getProperty("WEBHOOK_SECRET");
    const spreadsheetId = PropertiesService.getScriptProperties().getProperty("SPREADSHEET_ID");
    const sheetName = PropertiesService.getScriptProperties().getProperty("SHEET_NAME") || "Signups";

    if (!expectedSecret || !spreadsheetId) {
      return jsonResponse({ ok: false, error: "Script properties are not configured." });
    }

    if (payload.secret !== expectedSecret) {
      return jsonResponse({ ok: false, error: "Unauthorized." });
    }

    if (!isValidEmail(payload.email)) {
      return jsonResponse({ ok: false, error: "Invalid email." });
    }

    const spreadsheet = SpreadsheetApp.openById(spreadsheetId);
    const sheet = getOrCreateSheet(spreadsheet, sheetName);
    ensureHeaders(sheet);

    sheet.appendRow([
      String(payload.timestamp || new Date().toISOString()),
      String(payload.email).trim().toLowerCase(),
      String(payload.source || "unknown"),
    ]);

    return jsonResponse({ ok: true });
  } catch (error) {
    return jsonResponse({ ok: false, error: error.message || "Unexpected error." });
  } finally {
    if (hasLock) {
      lock.releaseLock();
    }
  }
}

function getOrCreateSheet(spreadsheet, sheetName) {
  return spreadsheet.getSheetByName(sheetName) || spreadsheet.insertSheet(sheetName);
}

function ensureHeaders(sheet) {
  const firstRow = sheet.getRange(1, 1, 1, REQUIRED_HEADERS.length).getValues()[0];
  const hasHeaders = REQUIRED_HEADERS.every((header, index) => firstRow[index] === header);

  if (!hasHeaders) {
    sheet.getRange(1, 1, 1, REQUIRED_HEADERS.length).setValues([REQUIRED_HEADERS]);
  }
}

function isValidEmail(email) {
  return typeof email === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

function jsonResponse(payload) {
  return ContentService.createTextOutput(JSON.stringify(payload)).setMimeType(ContentService.MimeType.JSON);
}
