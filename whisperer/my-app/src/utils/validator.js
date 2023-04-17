// create a utility function to validate the parsed data with the following helper methods.

// write a method to validate that name is a string with a max length of 50
function  validateName(name) {
    if (typeof name !== 'string') {
        return false;
    }
    if (name.length > 50) {
        return false;
    }
    return true;
}

// write a method to validate that description is alphanumeric with a max length of 50
function validateDescription(description) {
    if (typeof description !== 'string') {
        return false;
    }
    if (description.length > 50) {
        return false;
    }
    return true;
}

// write a method to validate that price is a non-negative number with a max value of 10000
function validatePrice(price) {
    if (typeof price !== 'number') {
        return false;
    }
    if (price < 0) {
        return false;
    }
    if (price > 10000) {
        return false;
    }
    return true;
}

// write a method to validate that SKU is a string with a max length of 10
function validateSKU(sku) {
    if (typeof sku !== 'string') {
        return false;
    }
    if (sku.length > 10) {
        return false;
    }
    return true;
}

// write a method to validate that quantity is a non-negative integer with a max value of 100
function validateQuantity(quantity) {
    if (typeof quantity !== 'number') {
        return false;
    }
    if (quantity < 0) {
        return false;
    }
    if (quantity > 100) {
        return false;
    }
    return true;
}