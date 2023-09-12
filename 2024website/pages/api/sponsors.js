import { google } from "googleapis";
import {
  SPREADSHEET_ID,
  GOOGLE_SHEETS_CLIENT_EMAIL,
  GOOGLE_SHEETS_PRIVATE_KEY,
} from "../../config";

export async function getSponsors(req) {
  // Check if we are running on the server (Node.js)
  if (req) {
    console.log("this works");
    const target = ["https://www.googleapis.com/auth/spreadsheets.readonly"];
    const jwt = new google.auth.JWT(
      GOOGLE_SHEETS_CLIENT_EMAIL,
      null,
      (GOOGLE_SHEETS_PRIVATE_KEY || "").replace(/\\n/g, "\n"),
      target
    );
    const sheets = google.sheets({ version: "v4", auth: jwt });
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: SPREADSHEET_ID,
      range: "3. Sponsors!A1:E17",
    });
    const rows = response.data.values;
    if (rows.length) {
      return rows.map((row) => ({
        title: row[0],
        url: row[1],
        imageUrl: row[2],
        sponsorTier: row[3],
      }));
    }
  }

  // Return an empty array or handle client-side behavior here
  return [];
}

export default async function handler(req, res) {
  if (typeof window === "undefined") {
    // This code only runs on the server-side
    const sponsors = await getSponsors(req);
    res.json(sponsors);
  } else {
    // Handle client-side behavior here
    res.json([]);
  }
}
