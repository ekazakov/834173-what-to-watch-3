import React, {PureComponent} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {Genres} from "../../consts.js";
import {ActionCreator} from "../../reducer";
import FilmsList from "../films-list/films-list.jsx";
import {filmsProps} from "../../mocks/prop-types.js";

class GenresList extends PureComponent {

  getGenresList(films) {
    return [Genres.ALL, ...new Set(films.map((film) => film.genre))];
  }

  getFilmsByGenre(films, genre) {
    return genre === Genres.ALL ? films : films.filter((film) => film.genre === genre);
  }

  render() {
    const {films, genre, changeGenre} = this.props;

    return (
      <React.Fragment>
        <ul className="catalog__genres-list">
          {this.getGenresList(films).map((availableGenre, index) => (
            <li
              className={`catalog__genres-item ${genre === availableGenre ? `catalog__genres-item--active` : ``}`}
              key={availableGenre + index}>
              <a className="catalog__genres-link" onClick={() => changeGenre(availableGenre)}>
                {availableGenre}
              </a>
            </li>
          ))}
        </ul>

        <FilmsList films={this.getFilmsByGenre(films, genre)}/>
      </React.Fragment>
    );
  }
}

GenresList.propTypes = {
  films: filmsProps,
  genre: PropTypes.string.isRequired,
  changeGenre: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  genre: state.genre,
  films: state.films,
});

const mapDispatchToProps = (dispatch) => ({
  changeGenre(genre) {
    dispatch(ActionCreator.changeGenre(genre));
  }
});

export {GenresList};
export default connect(mapStateToProps, mapDispatchToProps)(GenresList);
