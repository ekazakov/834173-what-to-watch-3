import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {ActionCreator} from "../../reducer/state/state.js";
import FilmsList from "../films-list/films-list.jsx";
import {filmsProps} from "../../consts.js";
import {getGenre, getGenres, getFilteredFilms} from "../../reducer/state/selectors.js";

const GenresList = (props) => {
  const {genre, genres, changeGenre, filteredFilms, onTitleOfFilmClick} = props;

  return (
    <React.Fragment>
      <ul className="catalog__genres-list">
        {genres.map((availableGenre, index) => (
          <li
            className={`catalog__genres-item ${genre === availableGenre ? `catalog__genres-item--active` : ``}`}
            key={availableGenre + index}>
            <a className="catalog__genres-link" onClick={() => changeGenre(availableGenre)}>
              {availableGenre}
            </a>
          </li>
        ))}
      </ul>

      <FilmsList
        films={filteredFilms}
        onTitleOfFilmClick={onTitleOfFilmClick}
      />
    </React.Fragment>
  );
};

GenresList.propTypes = {
  filteredFilms: filmsProps,
  genre: PropTypes.string.isRequired,
  changeGenre: PropTypes.func.isRequired,
  genres: PropTypes.array.isRequired,
  onTitleOfFilmClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  genre: getGenre(state),
  genres: getGenres(state),
  filteredFilms: getFilteredFilms(state),
});

const mapDispatchToProps = (dispatch) => ({
  changeGenre(genre) {
    dispatch(ActionCreator.changeGenre(genre));
  },
});

export {GenresList};
export default connect(mapStateToProps, mapDispatchToProps)(GenresList);
