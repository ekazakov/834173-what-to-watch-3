import React, {PureComponent} from "react";
import FilmCard from "../film-card/film-card.jsx";
import {filmsProps} from "../../mocks/prop-types.js";

const titleOfMovieHandler = () => {};

class FilmsList extends PureComponent {
  constructor(...args) {
    super(...args);

    this.state = {
      activeFilmId: null,
    };
  }

  _handleFilmCardHover(film) {
    this.setState({
      activeFilmId: film.id,
    });
  }

  render() {
    const {films} = this.props;

    return (
      <div className="catalog__movies-list">

        {films.map((movie) => (
          <FilmCard
            key={`${movie.id}-${movie.name}`}
            film={movie}
            onFilmCardHover={(film) => this._handleFilmCardHover(film)}
            onTitleOfMovieClick={titleOfMovieHandler}
          />
        ))}

      </div>
    );
  }
}

FilmsList.propTypes = {
  films: filmsProps,
};

export default FilmsList;
