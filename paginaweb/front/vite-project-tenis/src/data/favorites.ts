const FAVORITOS_STORAGE_KEY = 'jugadores-favoritos';

export function leerFavoritos(
  storage: Pick<Storage, 'getItem'>,
  jugadorIds: readonly number[]
): number[] {
  const guardados = storage.getItem(FAVORITOS_STORAGE_KEY);
  if (!guardados) return [];

  const idsValidos = new Set(jugadorIds);
  return guardados
    .split(',')
    .map(Number)
    .filter((id) => Number.isInteger(id) && idsValidos.has(id));
}

export function guardarFavoritos(
  storage: Pick<Storage, 'setItem'>,
  favoritos: readonly number[]
): void {
  storage.setItem(FAVORITOS_STORAGE_KEY, favoritos.join(','));
}

export function alternarFavorito(favoritos: readonly number[], jugadorId: number): number[] {
  return favoritos.includes(jugadorId)
    ? favoritos.filter((id) => id !== jugadorId)
    : [...favoritos, jugadorId];
}
