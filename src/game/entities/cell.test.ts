import { Cell } from './cell';

describe('Cell', () => {
  test('create', () => {
    const c = new Cell(1, 1);
    expect(c).toBeDefined();
  });
});
