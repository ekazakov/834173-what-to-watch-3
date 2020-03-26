import React from "react";
import {filmProps, FavoriteStatus} from "../../consts.js";
import PropTypes from "prop-types";
import {Operation as DataOperation} from "../../reducer/data/data.js";
import {connect} from "react-redux";

const MyListButton = (props) => {
  const {film, changeFavorite} = props;

  return (
    <button type="button" className="btn btn--list movie-card__button" onClick={film.favorite ? () => changeFavorite(film, FavoriteStatus.DELETE) : () => changeFavorite(film, FavoriteStatus.ADD)}>
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

MyListButton.propTypes = {
  film: filmProps,
  changeFavorite: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  changeFavorite(film, status) {
    dispatch(DataOperation.changeFavorite(film, status));
  },
});

export {MyListButton};
export default connect(null, mapDispatchToProps)(MyListButton);
