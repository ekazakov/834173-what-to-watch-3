import PropTypes from "prop-types";

export const VIDEO_TIMER_HOVER = 1000;

export const Genres = {
  ALL: `all-genres`,
  HORROR: `horrors`,
};

export const filmProps = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
});

export const filmsProps = PropTypes.arrayOf(filmProps).isRequired;
