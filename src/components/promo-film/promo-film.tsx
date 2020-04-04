import * as React from "react";
import {AppRoute} from "../../consts";
import {Link} from "react-router-dom";
import MyListButton from "../my-list-button/my-list-button";
import {Film} from "../../types";

interface PromoFilmProps {
  promoFilm: Film,
  onActivePlayerButtonClick: () => void,
}

const PromoFilm: React.FunctionComponent<PromoFilmProps> = (props: PromoFilmProps) => {
  const {promoFilm, onActivePlayerButtonClick} = props;

  return (
    <div className="movie-card__wrap">
      <div className="movie-card__info">
        <div className="movie-card__poster">
          <img src={promoFilm.posterBig} alt={promoFilm.name} width="218" height="327"/>
        </div>

        <div className="movie-card__desc">
          <h2 className="movie-card__title">{promoFilm.name}</h2>
          <p className="movie-card__meta">
            <span className="movie-card__genre">{promoFilm.genre}</span>
            <span className="movie-card__year">{promoFilm.year}</span>
          </p>

          <div className="movie-card__buttons">
            <Link to={`${AppRoute.PLAYER}/${promoFilm.id}`} className="btn btn--play movie-card__button" onClick={onActivePlayerButtonClick}>
              <svg viewBox="0 0 19 19" width="19" height="19">
                <use xlinkHref="#play-s" />
              </svg>
              <span>Play</span>
            </Link>
            <MyListButton film={promoFilm}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromoFilm;
