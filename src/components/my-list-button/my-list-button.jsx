import React from "react";
import {filmProps} from "../../consts.js";
import PropTypes from "prop-types";
import {Operation as DataOperation} from "../../reducer/data/data.js";
import {connect} from "react-redux";

const MyListButton = (props) => {
  const {film, addFilmToFavorite} = props;

  console.log(film);

  return (
    <button type="button" className="btn btn--list movie-card__button" onClick={() => addFilmToFavorite(film)}>
      {film.favorite ? (
        <svg viewBox="0 0 18 14" width="18" height="14">
          <use xlinkHref="#in-list"/>
        </svg>
      ) : (
        <svg viewBox="0 0 19 20" width="19" height="20">
          <use xlinkHref="#add" />
        </svg>
      )}
      <span>My list</span>
    </button>
  );
};

MyListButton.propTypes = {
  film: filmProps,
  addFilmToFavorite: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  addFilmToFavorite(film) {
    dispatch(DataOperation.addFilmToFavorite(film));
  },
});

export {MyListButton};
export default connect(null, mapDispatchToProps)(MyListButton);
