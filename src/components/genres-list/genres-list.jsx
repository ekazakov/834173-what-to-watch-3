import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {ActionCreator} from "../../reducer";
import FilmsList from "../films-list/films-list.jsx";
import {filmsProps} from "../../mocks/prop-types.js";
import {getGenre, getGenres, getFilteredFilms} from "./selectors.js";

const GenresList = (props) => {
  const {genres, films, genre, changeGenre} = props;

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

      <FilmsList films={films}/>
    </React.Fragment>
  );
};

GenresList.propTypes = {
  films: filmsProps,
  genre: PropTypes.string.isRequired,
  changeGenre: PropTypes.func.isRequired,
  genres: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  genre: getGenre(state),
  genres: getGenres(state),
  films: getFilteredFilms(state),
});

const mapDispatchToProps = (dispatch) => ({
  changeGenre(genre) {
    dispatch(ActionCreator.changeGenre(genre));
  },
});

export {GenresList};
export default connect(mapStateToProps, mapDispatchToProps)(GenresList);
