import * as React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {AppRoute} from "../../consts";

const SignIn = (props) => {
  const {onSubmit, onChange, errorMessage, validEmail, validPassword} = props;

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <div className="logo">
          <Link to={AppRoute.ROOT} className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </Link>
        </div>

        <h1 className="page-title user-page__title">Sign in</h1>
      </header>
      <div className="sign-in user-page__content">
        <form action="#" className="sign-in__form" onSubmit={onSubmit}>
          {errorMessage ? (
            <div className="sign-in__message">
              <p>{errorMessage}</p>
            </div>
          ) : null}
          <div className="sign-in__fields">
            <div className={`sign-in__field ${validEmail ? `` : `sign-in__field--error`}`}>
              <input className="sign-in__input" type="email" placeholder="Email address" name="user-email" id="user-email" onChange={onChange}/>
              <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
            </div>
            <div className={`sign-in__field ${validPassword ? `` : `sign-in__field--error`}`}>
              <input className="sign-in__input" type="password" placeholder="Password" name="user-password" id="user-password" onChange={onChange}/>
              <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button className="sign-in__btn" type="submit">Sign in</button>
          </div>
        </form>
      </div>
      <footer className="page-footer">
        <div className="logo">
          <Link to={AppRoute.ROOT} className="logo__link logo__link--light">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </Link>
        </div>

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
};

SignIn.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errorMessage: PropTypes.string.isRequired,
  validEmail: PropTypes.bool.isRequired,
  validPassword: PropTypes.bool.isRequired,
};

export default SignIn;
