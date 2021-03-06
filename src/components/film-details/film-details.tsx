import * as React from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import Tabs from "../tabs/tabs";
import FilmsList from "../films-list/films-list";
import MyListButton from "../my-list-button/my-list-button";
import UserBlock from "../user-block/user-block";
import withCurrentTab from "../../hocs/with-current-tab";
import {getSimilarFilms, getComments} from "../../reducer/state/selectors";
import {getAuthorizationStatus} from "../../reducer/user/selectors";
import {AuthorizationStatus, AppRoute} from "../../consts";
import {Film} from "../../types";

const TabsWrapper = withCurrentTab(Tabs);

interface FilmDetailsProps {
  film: Film;
  similarFilms: Film[];
  onFilmClick: () => void;
  comments: {
    id: number;
    user: {
      id: number;
      name: string;
    };
    rating: number;
    comment: string;
    date: string;
  }[];
  onActivePlayerButtonClick: () => void;
  onAddReviewButtonClick: () => void;
  isAuthorized: boolean;
}

const FilmDetails: React.FunctionComponent<FilmDetailsProps> = (props: FilmDetailsProps) => {
  const {film, onFilmClick, similarFilms, comments, onActivePlayerButtonClick, onAddReviewButtonClick, isAuthorized} = props;

  return (
    <React.Fragment>
      <section className="movie-card movie-card--full">
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src={film.background} alt={film.name}/>
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

          <div className="movie-card__wrap">
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{film.name}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{film.genre}</span>
                <span className="movie-card__year">{film.year}</span>
              </p>

              <div className="movie-card__buttons">
                <Link to={`${AppRoute.PLAYER}/${film.id}`} className="btn btn--play movie-card__button" onClick={onActivePlayerButtonClick}>
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s" />
                  </svg>
                  <span>Play</span>
                </Link>
                <MyListButton film={film}/>
                {isAuthorized ? (
                  <Link to={`${AppRoute.FILM}/${film.id}${AppRoute.REVIEW}`} className="btn movie-card__button" onClick={onAddReviewButtonClick}>Add review</Link>
                ) : null}
              </div>
            </div>
          </div>
        </div>

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img src={film.posterBig} alt={film.name} width="218" height="327"/>
            </div>

            <div className="movie-card__desc">

              <TabsWrapper film={film} key={film.id} comments={comments}/>

            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <FilmsList onFilmClick={onFilmClick} films={similarFilms} shownFilms={similarFilms.length}/>
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
  similarFilms: getSimilarFilms(state),
  comments: getComments(state),
  isAuthorized: getAuthorizationStatus(state) === AuthorizationStatus.AUTH,
});

export {FilmDetails};
export default connect(mapStateToProps)(FilmDetails);
