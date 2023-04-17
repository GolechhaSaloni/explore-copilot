// create a utility function to parse data from an excel file to a json object
import * as fs from 'fs';
function parseExcel(file) {
    const workbook = xlsx.readFile(file);
  const sheetName = workbook.SheetNames[0];
  const sheet = workbook.Sheets[sheetName];
  const data = xlsx.utils.sheet_to_json(sheet);
  return data;
}
// create a utility function to write data to a json file
function writeJson(data, file) {
    fs.writeFileSync(file, JSON.stringify(data));
}

