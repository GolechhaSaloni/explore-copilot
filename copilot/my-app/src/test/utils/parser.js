// write unit tests for all the methods in the parser.js file

import { parseData, validateExcelFile } from './parser';

describe('parser', () => {
    describe('parseData', () => {
        it('should return parsed data', () => {
        expect(parseData([['name', 'description', 100, 'SKU', 100]])).toEqual([
            {
            name: 'name',
            description: 'description',
            price: 100,
            SKU: 'SKU',
            quantity: 100,
            },
        ]);
        });
    });
    
    describe('validateExcelFile', () => {
        it('should return true for valid data', () => {
        expect(
            validateExcelFile([
            ['name', 'description', 100, 'SKU', 100],
            ['name', 'description', 100, 'SKU', 100],
            ])
        ).toBe(true);
        });
    
        it('should return false for invalid data', () => {
        expect(
            validateExcelFile([
            ['name', 'description', 100, 'SKU', 100],
            ['name', 'description', 100, 'SKU', 100.1],
            ])
        ).toBe(false);
        });
    });
    }
);