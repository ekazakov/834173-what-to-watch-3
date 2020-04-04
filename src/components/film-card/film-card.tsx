import * as React from "react";
import {Link} from "react-router-dom";
import {AppRoute} from "../../consts";
import {Film} from "../../types";

interface FilmCardProps {
  film: Film,
  onFilmCardHover: () => void,
  onFilmCardLeave: () => void,
  renderPlayer: () => void,
  onFilmClick: (evt: React.SyntheticEvent<HTMLElement>) => void,
}

const FilmCard: React.FunctionComponent<FilmCardProps> = (props: FilmCardProps) => {
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

export default FilmCard;
