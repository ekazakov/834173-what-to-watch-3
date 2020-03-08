import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {Genres} from "../../consts.js";
import {ActionCreator} from "../../reducer/reducer";
import FilmsList from "../films-list/films-list.jsx";
import {filmsProps} from "../../consts.js";

const GenresList = (props) => {
  const {films, genre, genres, changeGenre} = props;

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
  genre: state.genre,
  genres: [Genres.ALL, ...new Set(state.films.map((film) => film.genre))],
  films: state.genre === Genres.ALL ? state.films : state.films.filter((film) => film.genre === state.genre)
});

const mapDispatchToProps = (dispatch) => ({
  changeGenre(genre) {
    dispatch(ActionCreator.changeGenre(genre));
  },
});

export {GenresList};
export default connect(mapStateToProps, mapDispatchToProps)(GenresList);
