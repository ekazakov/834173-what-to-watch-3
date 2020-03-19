import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {filmsProps, SHOWN_FILMS_DEFAULT} from "../../consts.js";
import {getFilms} from "../../reducer/state/selectors.js";

const ShowMore = (props) => {
  const {films} = props;

  const onShowMoreButtonClick = () => {};

  return (
    films.length > SHOWN_FILMS_DEFAULT ?
      <div className="catalog__more">
        <button className="catalog__button" type="button" onClick={onShowMoreButtonClick}>Show more</button>
      </div>
      :
      null
  );
};

ShowMore.propTypes = {
  films: filmsProps,
};

const MapStateToProps = (state) => ({
  films: getFilms(state),
});

export {ShowMore};

export default connect(MapStateToProps)(ShowMore);
