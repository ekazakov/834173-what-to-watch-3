import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {filmProps} from "../../consts.js";
import {AppRoute} from "../../consts";

const FilmCard = (props) => {
  const {film, onFilmCardHover, onFilmCardLeave, renderPlayer, onTitleOfFilmClick} = props;

  return (
    <article className="small-movie-card catalog__movies-card" onMouseEnter={() => onFilmCardHover(film)} onMouseLeave={() => onFilmCardLeave(film)}>
      <div className="small-movie-card__image">
        {renderPlayer(film.preview, film.poster, film.id)}
      </div>
      <h3 className="small-movie-card__title">
        <Link className="small-movie-card__link" to={`${AppRoute.FILM}/${film.id}`} onClick={onTitleOfFilmClick}>
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
  onTitleOfFilmClick: PropTypes.func.isRequired,
};

export default FilmCard;
