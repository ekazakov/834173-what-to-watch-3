import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {getShownFilms, getHaveMoreFilms} from "../../reducer/state/selectors.js";
import {ActionCreator} from "../../reducer/state/state.js";

const ShowMore = (props) => {
  const {shownFilms, showMoreFilms, haveMoreFilms} = props;

  return haveMoreFilms ? (
    <div className="catalog__more">
      <button className="catalog__button" type="button" onClick={() => showMoreFilms(shownFilms)}>Show more</button>
    </div>
  ) : null;
};

ShowMore.propTypes = {
  shownFilms: PropTypes.number.isRequired,
  showMoreFilms: PropTypes.func.isRequired,
  haveMoreFilms: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  shownFilms: getShownFilms(state),
  haveMoreFilms: getHaveMoreFilms(state),
});

const mapDispatchToProps = (dispatch) => ({
  showMoreFilms(shownFilms) {
    dispatch(ActionCreator.showMoreFilms(shownFilms));
  },
});

export {ShowMore};
export default connect(mapStateToProps, mapDispatchToProps)(ShowMore);
