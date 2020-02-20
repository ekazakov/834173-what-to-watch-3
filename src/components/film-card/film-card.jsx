import React, {PureComponent} from "react";
import PropTypes from "prop-types";

import {filmProps} from "../../mocks/prop-types.js";

class FilmCard extends PureComponent {

  render() {
    const {film, onFilmCardHover, onTitleOfMovieClick, renderPlayer} = this.props;

    return (
      <article className="small-movie-card catalog__movies-card" onMouseEnter={() => onFilmCardHover(film)}>
        <div className="small-movie-card__image">
          {renderPlayer(film.preview, film.poster, film.id)}
        </div>
        <h3 className="small-movie-card__title">
          <a className="small-movie-card__link" href="movie-page.html" onClick={onTitleOfMovieClick}>
            {film.name}
          </a>
        </h3>
      </article>
    );
  }
}

FilmCard.propTypes = {
  film: filmProps,
  onFilmCardHover: PropTypes.func.isRequired,
  onTitleOfMovieClick: PropTypes.func.isRequired,
  renderPlayer: PropTypes.func.isRequired,
};

export default FilmCard;
