import React from "react";
import {connect} from "react-redux";
import {getTextScore, formatDate} from "../../utils.js";
import {TabsName, commentsProps, filmProps} from "../../consts.js";
import {getComments, getTab} from "../../reducer/state/selectors.js";
import {ActionCreator} from "../../reducer/state/state.js";
import PropTypes from "prop-types";

const Tabs = (props) => {
  const {film, comments, changeTab, currentTab} = props;

  return (
    <React.Fragment>
      <nav className="movie-nav movie-card__nav">
        <ul className="movie-nav__list">
          {Object.values(TabsName).map((tabName, index) => (
            <li key={tabName + index} className={`movie-nav__item ${currentTab === tabName ? `movie-nav__item--active` : ``}`}>
              <a href="#" className="movie-nav__link"
                onClick={(evt) => {
                  evt.preventDefault();
                  changeTab(tabName);
                }}>
                {tabName}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {currentTab === TabsName.OVERVIEW && (
        <React.Fragment>
          <div className="movie-rating">
            <div className="movie-rating__score">{film.rating}</div>
            <p className="movie-rating__meta">
              <span className="movie-rating__level">{getTextScore(film.rating)}</span>
              <span className="movie-rating__count">{film.score} ratings</span>
            </p>
          </div>

          <div className="movie-card__text">
            <p>{film.description}</p>

            <p className="movie-card__director"><strong>Director: {film.director}</strong></p>

            <p className="movie-card__starring">
              <strong>Starring: {film.starring.join(`, `)} and other</strong></p>
          </div>
        </React.Fragment>
      )}

      {currentTab === TabsName.DETAILS && (
        <React.Fragment>
          <div className="movie-card__text movie-card__row">
            <div className="movie-card__text-col">
              <p className="movie-card__details-item">
                <strong className="movie-card__details-name">Director</strong>
                <span className="movie-card__details-value">{film.director}</span>
              </p>
              <p className="movie-card__details-item">
                <strong className="movie-card__details-name">Starring</strong>
                <span className="movie-card__details-value">
                  {film.starring.map((actor, index) => (
                    <React.Fragment key={actor + index}>
                      {actor} <br />
                    </React.Fragment>
                  ))}
                </span>
              </p>
            </div>
            <div className="movie-card__text-col">
              <p className="movie-card__details-item">
                <strong className="movie-card__details-name">Run Time</strong>
                <span className="movie-card__details-value">{film.duration}</span>
              </p>
              <p className="movie-card__details-item">
                <strong className="movie-card__details-name">Genre</strong>
                <span className="movie-card__details-value">{film.genre}</span>
              </p>
              <p className="movie-card__details-item">
                <strong className="movie-card__details-name">Released</strong>
                <span className="movie-card__details-value">{film.year}</span>
              </p>
            </div>
          </div>
        </React.Fragment>
      )}

      {currentTab === TabsName.REVIEWS && (
        <React.Fragment>
          <div className="movie-card__reviews movie-card__row">
            <div className="movie-card__reviews-col">
              {comments.map((comment, index) => (
                <div className="review" key={comment + index}>
                  <blockquote className="review__quote">
                    <p className="review__text">{comment.comment}</p>

                    <footer className="review__details">
                      <cite className="review__author">{comment.user.name}</cite>
                      <time className="review__date" dateTime={comment.date}>{formatDate(comment.date)}</time>
                    </footer>
                  </blockquote>

                  <div className="review__rating">{comment.rating}</div>
                </div>
              ))}
            </div>
          </div>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

Tabs.propTypes = {
  film: filmProps,
  comments: commentsProps,
  changeTab: PropTypes.func.isRequired,
  currentTab: PropTypes.string.isRequired,
};

const mapStateTopProps = (state) => ({
  comments: getComments(state),
  currentTab: getTab(state),
});

const mapDispatchToProps = (dispatch) => ({
  changeTab(tab) {
    dispatch(ActionCreator.changeTab(tab));
  }
});

export {Tabs};

export default connect(mapStateTopProps, mapDispatchToProps)(Tabs);
