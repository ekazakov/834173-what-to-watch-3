import React from "react";
import PropTypes from "prop-types";
import GenresList from "../genres-list/genres-list.jsx";
import ShowMore from "../show-more/show-more.jsx";
import UserBlock from "../user-block/user-block.jsx";
import PromoFilm from "../promo-film/promo-film.jsx";
import {filmProps} from "../../consts";

const Main = (props) => {
  const {onTitleOfFilmClick, promoFilm, onActivePlayerButtonClick} = props;

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
            <a className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
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

          <GenresList onTitleOfFilmClick={onTitleOfFilmClick}/>

          <ShowMore />
        </section>

        <footer className="page-footer">
          <div className="logo">
            <a className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </React.Fragment>
  );
};

Main.propTypes = {
  onTitleOfFilmClick: PropTypes.func.isRequired,
  onActivePlayerButtonClick: PropTypes.func.isRequired,
  promoFilm: filmProps,
};

export default Main;
