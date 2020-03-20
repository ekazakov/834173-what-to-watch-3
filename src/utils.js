import moment from "moment";

export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const normalizeFilmData = (film) => {
  return {
    id: film.id,
    name: film.name,
    posterBig: film.poster_image,
    poster: film.preview_image,
    background: film.background_image,
    backgroundColor: film.background_color,
    video: film.video_link,
    preview: film.preview_video_link,
    description: film.description,
    genre: film.genre,
    rating: film.rating,
    score: film.scores_count,
    director: film.director,
    starring: film.starring,
    duration: film.run_time,
    year: film.released,
    favorite: film.is_favorite,
  };
};

export const getTextScore = (score) => {
  if (score < 3) {
    return (`Bad`);
  } else if (score >= 3 && score < 5) {
    return (`Normal`);
  } else if (score >= 5 && score < 8) {
    return (`Good`);
  } else if (score >= 8 && score < 10) {
    return (`Very good`);
  } else if (score === 10) {
    return (`Awesome`);
  }

  return ``;
};

export const formatDate = (date) => {
  return moment(date).format(`MMMM D, YYYY`);
};

export const normalizeFilmsData = (films) => films.map(normalizeFilmData);
