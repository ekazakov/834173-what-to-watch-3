import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {filmsProps, SHOWN_FILMS_DEFAULT} from "../../consts.js";
import {getFilms, getShownFilms} from "../../reducer/state/selectors.js";
import {ActionCreator} from "../../reducer/state/state.js";

const ShowMore = (props) => {
  const {films, shownFilms, showMoreFilms} = props;

  console.log(shownFilms);

  return (
    films.length > shownFilms ?
      <div className="catalog__more">
        <button className="catalog__button" type="button" onClick={() => showMoreFilms(shownFilms)}>Show more</button>
      </div>
      :
      null
  );
};

ShowMore.propTypes = {
  films: filmsProps,
  shownFilms: PropTypes.number.isRequired,
  showMoreFilms: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  films: getFilms(state),
  shownFilms: getShownFilms(state),
});

const mapDispatchToProps = (dispatch) => ({
  showMoreFilms(shownFilms) {
    dispatch(ActionCreator.showMoreFilms(shownFilms));
  },
});

export {ShowMore};
export default connect(mapStateToProps, mapDispatchToProps)(ShowMore);
