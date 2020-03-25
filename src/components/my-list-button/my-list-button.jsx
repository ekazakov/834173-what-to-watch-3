import React from "react";
import {filmProps} from "../../consts.js";

const MyListButton = (props) => {
  const {film} = props;

  return (
    <button type="button" className="btn btn--list movie-card__button">
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
};

export default MyListButton;
