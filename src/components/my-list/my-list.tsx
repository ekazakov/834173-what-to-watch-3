import * as React from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import FilmsList from "../films-list/films-list";
import UserBlock from "../user-block/user-block";
import {AppRoute} from "../../consts";
import {getFavoriteFilms} from "../../reducer/state/selectors";
import {Film} from "../../types";

interface MyListProps {
  favoriteFilms: Film[];
  onFilmClick: () => void;
}

const MyList: React.FunctionComponent<MyListProps> = (props: MyListProps) => {
  const {favoriteFilms, onFilmClick} = props;

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <div className="logo">
          <Link to={AppRoute.ROOT} className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </Link>
        </div>

        <h1 className="page-title user-page__title">My list</h1>

        <UserBlock/>
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <FilmsList onFilmClick={onFilmClick} films={favoriteFilms}/>
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
  );
};

const mapStateToProps = (state) => ({
  favoriteFilms: getFavoriteFilms(state),
});

export {MyList};
export default connect(mapStateToProps)(MyList);
