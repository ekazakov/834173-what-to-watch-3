import React from "react";
import {filmProps, AppRoute} from "../../consts.js";
import UserBlock from "../user-block/user-block.jsx";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

const AddReview = (props) => {
  const {film, onSubmit, onTextChange, onRatingChange, buttonIsAvailable, formIsAvailable, errorMessage} = props;

  return (
    <section className="movie-card movie-card--full">
      <div className="movie-card__header">
        <div className="movie-card__bg">
          <img src={film.background} alt={film.name}/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <div className="logo">
            <Link to={AppRoute.ROOT} className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </Link>
          </div>

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={`${AppRoute.FILM}/${film.id}`} className="breadcrumbs__link">{film.name}</Link>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>

          <UserBlock />
        </header>

        <div className="movie-card__poster movie-card__poster--small">
          <img src={film.posterBig} alt={film.name} width="218" height="327"/>
        </div>
      </div>

      <div className="add-review">
        <form action="#" className="add-review__form" onSubmit={onSubmit}>
          <div className="rating">
            <div className="rating__stars">
              <input className="rating__input" id="star-1" type="radio" name="rating" value="1" onChange={onRatingChange} disabled={formIsAvailable ? `` : `disabled`}/>
              <label className="rating__label" htmlFor="star-1">Rating 1</label>

              <input className="rating__input" id="star-2" type="radio" name="rating" value="2" onChange={onRatingChange} disabled={formIsAvailable ? `` : `disabled`}/>
              <label className="rating__label" htmlFor="star-2">Rating 2</label>

              <input className="rating__input" id="star-3" type="radio" name="rating" value="3" onChange={onRatingChange} disabled={formIsAvailable ? `` : `disabled`}/>
              <label className="rating__label" htmlFor="star-3">Rating 3</label>

              <input className="rating__input" id="star-4" type="radio" name="rating" value="4" onChange={onRatingChange} disabled={formIsAvailable ? `` : `disabled`}/>
              <label className="rating__label" htmlFor="star-4">Rating 4</label>

              <input className="rating__input" id="star-5" type="radio" name="rating" value="5" onChange={onRatingChange} disabled={formIsAvailable ? `` : `disabled`}/>
              <label className="rating__label" htmlFor="star-5">Rating 5</label>
            </div>
          </div>

          <div className="add-review__text">
            <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text" onChange={onTextChange} disabled={formIsAvailable ? `` : `disabled`}/>
            <div className="add-review__submit">
              <button className="add-review__btn" type="submit" disabled={buttonIsAvailable ? `` : `disabled`} >Post</button>
            </div>

          </div>
          {errorMessage ? (
            <p>{errorMessage}</p>
          ) : null}
        </form>
      </div>

    </section>
  );
};

AddReview.propTypes = {
  film: filmProps,
  onSubmit: PropTypes.func.isRequired,
  onTextChange: PropTypes.func.isRequired,
  onRatingChange: PropTypes.func.isRequired,
  buttonIsAvailable: PropTypes.bool.isRequired,
  formIsAvailable: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string.isRequired,
};

export default AddReview;
