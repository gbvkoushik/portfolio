const fs = require('fs');

const path = "C:\\Users\\G.B.V.Koushik\\.gemini\\antigravity-ide\\brain\\9c350e7b-6d4d-4313-a043-3ec02e88611b\\.system_generated\\steps\\682\\content.md";
const html = fs.readFileSync(path, 'utf8');

const regex = /FB_PUBLIC_LOAD_DATA_\s*=\s*([\s\S]*?);\s*<\/script>/;
const match = html.match(regex);

let out = "";
if (match) {
  try {
    const data = JSON.parse(match[1]);
    const fields = data[1][1];
    fields.forEach((f) => {
      if (f) {
        const title = f[1];
        const entryId = f[4] ? f[4][0][0] : "N/A";
        out += `TITLE: "${title}" -> entry.${entryId}\n`;
      }
    });
  } catch (e) {
    out = "Error parsing JSON: " + e.message;
  }
} else {
  out = "No match found for FB_PUBLIC_LOAD_DATA_";
}

fs.writeFileSync("d:\\Portfolio\\entries_found.txt", out);
console.log(out);
