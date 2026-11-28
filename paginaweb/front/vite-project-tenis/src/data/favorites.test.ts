import { describe, expect, it } from 'vitest';
import { alternarFavorito, guardarFavoritos, leerFavoritos } from './favorites';

function createStorage(initialValue: string | null = null) {
  let value = initialValue;
  return {
    getItem: () => value,
    setItem: (_key: string, nextValue: string) => {
      value = nextValue;
    },
  };
}

describe('favoritos de jugadores', () => {
  it('carga solo IDs enteros que existen en la lista de jugadores', () => {
    const storage = createStorage('1,2,99,abc,3.5');

    expect(leerFavoritos(storage, [1, 2, 3])).toEqual([1, 2]);
  });

  it('persiste los favoritos para poder cargarlos nuevamente', () => {
    const storage = createStorage();

    guardarFavoritos(storage, [2, 4]);

    expect(leerFavoritos(storage, [1, 2, 3, 4])).toEqual([2, 4]);
  });

  it('agrega y quita un jugador sin cambiar los otros favoritos', () => {
    expect(alternarFavorito([1, 3], 2)).toEqual([1, 3, 2]);
    expect(alternarFavorito([1, 2, 3], 2)).toEqual([1, 3]);
  });
});
