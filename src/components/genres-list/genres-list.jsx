import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {ActionCreator} from "../../reducer/state/state.js";
import FilmsList from "../films-list/films-list.jsx";
import {filmsProps, SHOWN_FILMS_DEFAULT} from "../../consts.js";
import {getGenre, getGenres, getLimitedFilms} from "../../reducer/state/selectors.js";

const GenresList = (props) => {
  const {genre, genres, changeGenre, onFilmClick, resetFilmsAmount, limitedFilms} = props;

  const onGenreClick = (availableGenre) => {
    changeGenre(availableGenre);
    resetFilmsAmount(SHOWN_FILMS_DEFAULT);
  };

  return (
    <React.Fragment>
      <ul className="catalog__genres-list">
        {genres.map((availableGenre, index) => (
          <li
            className={`catalog__genres-item ${genre === availableGenre ? `catalog__genres-item--active` : ``}`}
            key={availableGenre + index}>
            <a className="catalog__genres-link" onClick={() => onGenreClick(availableGenre)}>
              {availableGenre}
            </a>
          </li>
        ))}
      </ul>

      <FilmsList
        films={limitedFilms}
        onFilmClick={onFilmClick}
      />
    </React.Fragment>
  );
};

GenresList.propTypes = {
  genre: PropTypes.string.isRequired,
  changeGenre: PropTypes.func.isRequired,
  genres: PropTypes.array.isRequired,
  onFilmClick: PropTypes.func.isRequired,
  resetFilmsAmount: PropTypes.func.isRequired,
  limitedFilms: filmsProps,
};

const mapStateToProps = (state) => ({
  genre: getGenre(state),
  genres: getGenres(state),
  limitedFilms: getLimitedFilms(state),
});

const mapDispatchToProps = (dispatch) => ({
  changeGenre(genre) {
    dispatch(ActionCreator.changeGenre(genre));
  },
  resetFilmsAmount(shownFilms) {
    dispatch(ActionCreator.resetFilmsAmount(shownFilms));
  },
});

export {GenresList};
export default connect(mapStateToProps, mapDispatchToProps)(GenresList);
