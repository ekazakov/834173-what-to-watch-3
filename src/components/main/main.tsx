import * as React from "react";
import {connect} from "react-redux";
import {getServerStatus} from "../../reducer/state/selectors";
import GenresList from "../genres-list/genres-list";
import ShowMore from "../show-more/show-more";
import UserBlock from "../user-block/user-block";
import PromoFilm from "../promo-film/promo-film";
import {AppRoute, ServerStatus} from "../../consts";
import {Link} from "react-router-dom";
import {Film} from "../../types";

interface MainProps  {
  onFilmClick: () => void,
  onActivePlayerButtonClick: () => void,
  promoFilm: Film,
  serverStatusIsAvailable: boolean,
}

const Main: React.FunctionComponent<MainProps> = (props: MainProps) => {
  const {onFilmClick, promoFilm, onActivePlayerButtonClick, serverStatusIsAvailable} = props;

  return (
    <React.Fragment>
      <section className="movie-card">
        <div className="movie-card__bg">
          {
            promoFilm ? (
              <img src={promoFilm.background} alt={promoFilm.name}/>
            ) : null
          }
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header movie-card__head">
          <div className="logo">
            <Link to={AppRoute.ROOT} className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </Link>
          </div>

          <UserBlock/>
        </header>

        {
          promoFilm ? (
            <PromoFilm onActivePlayerButtonClick={onActivePlayerButtonClick} promoFilm={promoFilm} />
          ) : null
        }
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          {
            serverStatusIsAvailable ? (
              <React.Fragment>
                <GenresList onFilmClick={onFilmClick}/>

                <ShowMore />
              </React.Fragment>
            ) : (
              <div>
                <p>Can`t load the films</p>
              </div>
            )
          }
        </section>

        <footer className="page-footer">
          <div className="logo">
            <Link to={AppRoute.ROOT} className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </Link>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  serverStatusIsAvailable: getServerStatus(state) === ServerStatus.AVAILABLE,
});

export {Main};
export default connect(mapStateToProps)(Main);
