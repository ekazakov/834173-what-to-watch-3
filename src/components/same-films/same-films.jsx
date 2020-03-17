import React from "react";
import FilmsList from "../films-list/films-list.jsx";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {getFilms} from "../../reducer/state/selectors.js";
import {filmsProps, filmProps, SAME_FILMS} from "../../consts.js";

const getSameFilms = (films, film) => {
  return films.filter(
      (sameFilm) => sameFilm.genre === film.genre && sameFilm.name !== film.name)
    .slice(0, SAME_FILMS);
};

const SameFilms = (props) => {
  const {onTitleOfFilmClick, films, film} = props;

  return (
    <FilmsList onTitleOfFilmClick={onTitleOfFilmClick} films={getSameFilms(films, film)}/>
  );
};

SameFilms.propTypes = {
  onTitleOfFilmClick: PropTypes.func.isRequired,
  films: filmsProps,
  film: filmProps,
};

const mapStateToProps = (state) => ({
  films: getFilms(state),
});

export {SameFilms};
export default connect(mapStateToProps)(SameFilms);
