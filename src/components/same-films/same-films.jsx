import React from "react";
import FilmsList from "../films-list/films-list.jsx";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {getFilms} from "../../reducer/state/selectors.js";
import {filmsProps} from "../../consts";

const SameFilms = (props) => {
  const {onTitleOfFilmClick, films} = props;

  return (
    <FilmsList onTitleOfFilmClick={onTitleOfFilmClick} films={films}/>
  );
};

SameFilms.propTypes = {
  onTitleOfFilmClick: PropTypes.func.isRequired,
  films: filmsProps,
};

const mapStateToProps = (state) => ({
  films: getFilms(state),
});

export {SameFilms};
export default connect(mapStateToProps)(SameFilms);
