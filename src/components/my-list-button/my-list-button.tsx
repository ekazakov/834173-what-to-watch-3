import * as React from "react";
import {connect} from "react-redux";
import {Operation as DataOperation} from "../../reducer/data/data";
import {FavoriteStatus} from "../../consts";
import {Film} from "../../types";

interface MyListButtonProps {
  film: Film,
  changeFavorite: (Film, number) => void,
}

const MyListButton: React.FunctionComponent<MyListButtonProps> = (props: MyListButtonProps) => {
  const {film, changeFavorite} = props;

  const checkFavoriteHandler = () => {
    return film.favorite ? changeFavorite(film, FavoriteStatus.DELETE) : changeFavorite(film, FavoriteStatus.ADD);
  };

  return (
    <button type="button" className="btn btn--list movie-card__button" onClick={() => checkFavoriteHandler()}>
      {film.favorite ? (
        <svg viewBox="0 0 19 20" width="19" height="20">
          <use xlinkHref="#in-list" />
        </svg>
      ) : (
        <svg viewBox="0 0 18 14" width="18" height="14">
          <use xlinkHref="#add"/>
        </svg>
      )}
      <span>My list</span>
    </button>

  );
};

const mapDispatchToProps = (dispatch) => ({
  changeFavorite(film, status) {
    dispatch(DataOperation.changeFavorite(film, status));
  },
});

export {MyListButton};
export default connect(null, mapDispatchToProps)(MyListButton);
