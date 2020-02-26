import React, {PureComponent} from "react";
import {PropTypes} from "prop-types";
import {Genres} from "../../consts.js";
import {filmsProps} from "../../mocks/prop-types.js";

class GenresList extends PureComponent {

  getGenresList(films) {
    return [Genres.ALL, ...new Set(films.map((film) => film.genre))];
  }

  render() {
    const {films, genre} = this.props;

    return (
      <ul className="catalog__genres-list">
        {this.getGenresList(films).map((availableGenre, index) => (
          <li
            className={`catalog__genres-item ${genre === availableGenre ? `catalog__genres-item--active` : ``}`}
            key={availableGenre + index}>
            <a className="catalog__genres-link">
              {availableGenre}
            </a>
          </li>
        ))}
      </ul>
    );
  }
}

GenresList.propTypes = {
  films: filmsProps,
  genre: PropTypes.string.isRequired,
};

export default GenresList;
