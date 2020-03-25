import React from "react";
import {filmProps, FavoriteStatus} from "../../consts.js";
import PropTypes from "prop-types";
import {Operation as DataOperation} from "../../reducer/data/data.js";
import {connect} from "react-redux";

const MyListButton = (props) => {
  const {film, changeFavorite} = props;

  return film.favorite ? (
    <button type="button" className="btn btn--list movie-card__button" onClick={() => changeFavorite(film, FavoriteStatus.DELETE)}>
      <svg viewBox="0 0 18 14" width="18" height="14">
        <use xlinkHref="#in-list"/>
      </svg>
      <span>My list</span>
    </button>
  ) : (
    <button type="button" className="btn btn--list movie-card__button" onClick={() => changeFavorite(film, FavoriteStatus.ADD)}>
      <svg viewBox="0 0 19 20" width="19" height="20">
        <use xlinkHref="#add" />
      </svg>
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
