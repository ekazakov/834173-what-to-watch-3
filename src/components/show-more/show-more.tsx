import * as React from "react";
import {connect} from "react-redux";
import {getShownFilms, getHaveMoreFilms} from "../../reducer/state/selectors";
import {ActionCreator} from "../../reducer/state/state";

interface ShowMoreProps {
  shownFilms: number;
  showMoreFilms: (number) => void;
  haveMoreFilms: boolean;
}

const ShowMore: React.FunctionComponent<ShowMoreProps> = (props: ShowMoreProps) => {
  const {shownFilms, showMoreFilms, haveMoreFilms} = props;

  return haveMoreFilms ? (
    <div className="catalog__more">
      <button className="catalog__button" type="button" onClick={() => showMoreFilms(shownFilms)}>Show more</button>
    </div>
  ) : null;
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
