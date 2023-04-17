// write unit tests for all the methods in the validator.js file

import { validateName, validateDescription, validatePrice, validateSKU, validateQuantity } from './validator';

describe('validator', () => {
  describe('validateName', () => {
    it('should return true for valid name', () => {
      expect(validateName('name')).toBe(true);
    });

    it('should return false for invalid name', () => {
      expect(validateName('name'.repeat(100))).toBe(false);
    });
  });

  describe('validateDescription', () => {
    it('should return true for valid description', () => {
      expect(validateDescription('description')).toBe(true);
    });

    it('should return false for invalid description', () => {
      expect(validateDescription('description'.repeat(100))).toBe(false);
    });
  });

  describe('validatePrice', () => {
    it('should return true for valid price', () => {
      expect(validatePrice(100)).toBe(true);
    });

    it('should return false for invalid price', () => {
      expect(validatePrice(10000.1)).toBe(false);
    });
  });

  describe('validateSKU', () => {
    it('should return true for valid SKU', () => {
      expect(validateSKU('SKU')).toBe(true);
    });

    it('should return false for invalid SKU', () => {
      expect(validateSKU('SKU'.repeat(100))).toBe(false);
    });
  });

  describe('validateQuantity', () => {
    it('should return true for valid quantity', () => {
      expect(validateQuantity(100)).toBe(true);
    });

    it('should return false for invalid quantity', () => {
      expect(validateQuantity(100.1)).toBe(false);
    });
  });
});
