import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {filmProps} from "../../consts.js";
import {AppRoute} from "../../consts";

const FilmCard = (props) => {
  const {film, onFilmCardHover, onFilmCardLeave, renderPlayer, onFilmClick} = props;

  return (
    <article className="small-movie-card catalog__movies-card" onMouseEnter={() => onFilmCardHover(film)} onMouseLeave={() => onFilmCardLeave(film)}>
      <Link to={`${AppRoute.FILM}/${film.id}`} className="small-movie-card__image" onClick={onFilmClick}>
        {renderPlayer(film.preview, film.poster, film.id)}
      </Link>
      <h3 className="small-movie-card__title">
        <Link className="small-movie-card__link" to={`${AppRoute.FILM}/${film.id}`} onClick={onFilmClick}>
          {film.name}
        </Link>
      </h3>
    </article>
  );
};

FilmCard.propTypes = {
  film: filmProps,
  onFilmCardHover: PropTypes.func.isRequired,
  onFilmCardLeave: PropTypes.func.isRequired,
  renderPlayer: PropTypes.func.isRequired,
  onFilmClick: PropTypes.func.isRequired,
};

export default FilmCard;
