// create a utility function to validate the parsed data with the following helper methods.

// write a method to validate that name is a string with a max length of 50
function validateName(name) {
  return typeof name === 'string' && name.length <= 50;
}

// write a method to validate that description is alphanumeric with a max length of 50
function validateDescription(description) {
  return /^[a-zA-Z0-9]+$/.test(description) && description.length <= 50;
}

// write a method to validate that price is a non-negative number with a max value of 10000
function validatePrice(price) {
  return typeof price === 'number' && price >= 0 && price <= 10000;
}

// write a method to validate that SKU is a string with a max length of 10
function validateSKU(SKU) {
  return typeof SKU === 'string' && SKU.length <= 10;
}

// write a method to validate that quantity is a non-negative integer with a max value of 100
function validateQuantity(quantity) {
  return Number.isInteger(quantity) && quantity >= 0 && quantity <= 100;
}