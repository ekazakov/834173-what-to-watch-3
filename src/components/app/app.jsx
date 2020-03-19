import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import Main from "../main/main.jsx";
import {getAuthorizationStatus} from "../../reducer/user/selectors";
import {connect} from "react-redux";
import {Operation as UserOperation} from "../../reducer/user/user.js";
import {AuthorizationStatus} from "../../consts.js";
import SignIn from "../sign-in/sign-in.jsx";
import withAuthInformation from "../../hocs/with-auth-information.jsx";
import FilmDetails from "../film-details/film-details.jsx";
import {filmProps, filmsProps} from "../../consts";
import {getFilms, getChosenFilm} from "../../reducer/state/selectors.js";
import {ActionCreator} from "../../reducer/state/state.js";

const SignInWrapper = withAuthInformation(SignIn);

class App extends PureComponent {

  constructor(props) {
    super(props);

    this.onTitleOfFilmClick = this.onTitleOfFilmClick.bind(this);
  }

  onTitleOfFilmClick(id) {
    const {chooseFilmIndex, getComments} = this.props;

    chooseFilmIndex(id);
    getComments(id);
  }

  _renderSignIn() {
    const {login} = this.props;

    return (
      <SignInWrapper onSubmit={login}/>
    );
  }

  _renderMain() {
    return (
      <Main onTitleOfFilmClick={this.onTitleOfFilmClick}/>
    );
  }

  _renderFilmDetails() {
    const {films, chosenFilm} = this.props;

    return (
      <FilmDetails film={chosenFilm} films={films} onTitleOfFilmClick={this.onTitleOfFilmClick}/>
    );
  }

  render() {

    const {authorizationStatus} = this.props;

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderMain()}
          </Route>
          <Route exact path="/sign-in">
            {authorizationStatus === AuthorizationStatus.NO_AUTH ?
              this._renderSignIn()
              :
              this._renderMain()
            }
          </Route>
          <Route exact path="/dev-film">
            {this._renderFilmDetails()}
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  login: PropTypes.func.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  film: filmProps,
  films: filmsProps,
  chooseFilmIndex: PropTypes.func.isRequired,
  chosenFilm: filmProps,
  getComments: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
  films: getFilms(state),
  chosenFilm: getChosenFilm(state),
});

const mapDispatchToProps = (dispatch) => ({
  login(authData) {
    dispatch(UserOperation.login(authData));
  },
  chooseFilmIndex(id) {
    dispatch(ActionCreator.chooseFilmIndex(id));
  },
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
