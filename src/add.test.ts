import { add } from '@src/math/add';

describe('Teste da função de soma do src: ', () => {
  it('Deve passar', () => {
    expect(add(1, 2)).toBe(3);
  });
});
