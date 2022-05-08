export function mapper(array) {
  return array.map(({ backdrop_path: img, id, title }) => ({
    img,
    id,
    title,
    isWatched: false,
  }));
}
