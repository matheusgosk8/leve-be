import { add } from '@src/math/add';

describe('Teste da função de soma: ', () => {
  it('Deve passar', () => {
    expect(add(1, 2)).toBe(3);
  });
});
