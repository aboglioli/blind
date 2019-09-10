import { Cell } from './cell';

describe('Cell', () => {
    test('create', () => {
        const cell = new Cell(1, 1);
        expect(cell).toBeDefined();
    });
})