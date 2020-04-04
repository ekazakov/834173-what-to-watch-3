import * as React from "react";
import {connect} from "react-redux";
import FilmsList from "../films-list/films-list";
import {ActionCreator} from "../../reducer/state/state";
import {getGenre, getGenres, getLimitedFilms} from "../../reducer/state/selectors";
import {SHOWN_FILMS_DEFAULT} from "../../consts";
import {Film} from "../../types";

interface GenresListProps {
  genre: string,
  changeGenre: (string) => void,
  genres: string[],
  onFilmClick: () => void,
  resetFilmsAmount: (number) => void,
  limitedFilms: Film[],
}

const GenresList: React.FunctionComponent<GenresListProps> = (props: GenresListProps) => {
  const {genre, genres, changeGenre, onFilmClick, resetFilmsAmount, limitedFilms} = props;

  const onGenreClick = (availableGenre) => {
    changeGenre(availableGenre);
    resetFilmsAmount(SHOWN_FILMS_DEFAULT);
  };

  return (
    <React.Fragment>
      <ul className="catalog__genres-list">
        {genres.map((availableGenre, index) => (
          <li
            className={`catalog__genres-item ${genre === availableGenre ? `catalog__genres-item--active` : ``}`}
            key={availableGenre + index}>
            <a className="catalog__genres-link" onClick={() => onGenreClick(availableGenre)}>
              {availableGenre}
            </a>
          </li>
        ))}
      </ul>

      <FilmsList
        films={limitedFilms}
        onFilmClick={onFilmClick}
      />
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  genre: getGenre(state),
  genres: getGenres(state),
  limitedFilms: getLimitedFilms(state),
});

const mapDispatchToProps = (dispatch) => ({
  changeGenre(genre) {
    dispatch(ActionCreator.changeGenre(genre));
  },
  resetFilmsAmount(shownFilms) {
    dispatch(ActionCreator.resetFilmsAmount(shownFilms));
  },
});

export {GenresList};
export default connect(mapStateToProps, mapDispatchToProps)(GenresList);
