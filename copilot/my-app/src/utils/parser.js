// write a method to parse the data from the excel file
// return the parsed data
export function parseData(data) {
  return data.map((row) => {
    return {
      name: row[0],
      description: row[1],
      price: row[2],
      SKU: row[3],
      quantity: row[4],
    };
  });
}

//import the validate methods from "./validator.js"
const validateName = require('./validator').validateName;
const validateDescription = require('./validator').validateDescription;
const validatePrice = require('./validator').validatePrice;
const validateSKU = require('./validator').validateSKU;
const validateQuantity = require('./validator').validateQuantity;

// write a function validateData that validates data using methods written in "./validator.js"
// return the result of the validation
function validateData(data) {
    return data.every((row) => {
        return validateName(row.name) && validateDescription(row.description) && validatePrice(row.price) && validateSKU(row.SKU) && validateQuantity(row.quantity);
    });
}

// call the parseData method with the data from the excel file
// call the validateData method with the parsed data
// return the result of the validation
export function validateExcelFile(data) {
  const parsedData = parseData(data);
  return validateData(parsedData);
}
