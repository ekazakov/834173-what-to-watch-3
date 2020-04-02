import PropTypes from "prop-types";

export const VIDEO_TIMER_HOVER = 1000;

export const SAME_FILMS_COUNT = 4;

export const SHOWN_FILMS_DEFAULT = 8;

export const Genres = {
  ALL: `All-genres`,
  HORROR: `horrors`,
};

export const TextCommentLength = {
  MIN: 40,
  MAX: 400,
};

export const MINUTES_IN_HOUR = 60;

export const filmProps = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  posterBig: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  background: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  video: PropTypes.string.isRequired,
  preview: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
  director: PropTypes.string.isRequired,
  starring: PropTypes.arrayOf(PropTypes.string).isRequired,
  duration: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  favorite: PropTypes.bool.isRequired,
});

export const commentProps = PropTypes.shape({
  id: PropTypes.number.isRequired,
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  rating: PropTypes.number.isRequired,
  comment: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
});

export const filmsProps = PropTypes.arrayOf(filmProps).isRequired;
export const commentsProps = PropTypes.arrayOf(commentProps).isRequired;

export const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

export const ServerStatus = {
  AVAILABLE: `AVAILABLE`,
  NO_AVAILABLE: `NO_AVAILABLE`,
};

export const TabsName = {
  OVERVIEW: `Overview`,
  DETAILS: `Details`,
  REVIEWS: `Reviews`,
};

export const AppRoute = {
  ROOT: `/`,
  LOGIN: `/login`,
  FAVORITE: `/mylist`,
  FILM: `/films`,
  REVIEW: `/review`,
  PLAYER: `/player`,
};

export const FavoriteStatus = {
  ADD: 1,
  DELETE: 0,
};
