export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const normalizeFilmData = (film) => {
  return {
    id: film.id,
    name: film.name,
    poster: film.preview_image,
    preview: film.preview_video_link,
    genre: film.genre,
  };
};

export const normalizeFilmsData = (films) => films.map(normalizeFilmData);
