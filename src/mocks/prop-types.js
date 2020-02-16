import PropTypes from "prop-types";

export const filmProps = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
});

export const filmsProps = PropTypes.arrayOf(filmProps).isRequired;
