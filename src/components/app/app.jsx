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
import {getFilms, getChosenFilm, getPromoFilm} from "../../reducer/state/selectors.js";
import {ActionCreator} from "../../reducer/state/state.js";
import BigVideoPlayer from "../big-video-player/big-video-player.jsx";
import withBigVideoPlayer from "../../hocs/with-big-player.jsx";
import AddReview from "../add-review/add-review.jsx";
import {Operation as DataOperation} from "../../reducer/data/data.js";
import withNewComment from "../../hocs/with-new-comment.jsx";

const SignInWrapper = withAuthInformation(SignIn);
const BigPlayerWrapper = withBigVideoPlayer(BigVideoPlayer);
const AddReviewWrapper = withNewComment(AddReview);

class App extends PureComponent {

  constructor(props) {
    super(props);

    this.onTitleOfFilmClick = this.onTitleOfFilmClick.bind(this);
    this.onChoseFilmButtonClick = this.onChoseFilmButtonClick.bind(this);
  }

  onTitleOfFilmClick(id) {
    const {chooseFilmId, getComments} = this.props;

    chooseFilmId(id);
    getComments(id);
  }

  onChoseFilmButtonClick(id) {
    const {chooseFilmId} = this.props;

    chooseFilmId(id);
  }


  _renderSignIn() {
    const {login} = this.props;

    return (
      <SignInWrapper onSubmit={login}/>
    );
  }

  _renderMain() {
    const {promoFilm} = this.props;

    return (
      <Main promoFilm={promoFilm} onTitleOfFilmClick={this.onTitleOfFilmClick} onActivePlayerButtonClick={() => this.onChoseFilmButtonClick(promoFilm.id)}/>
    );
  }

  _renderFilmDetails() {
    const {films, chosenFilm} = this.props;

    return (
      <FilmDetails film={chosenFilm} films={films} onTitleOfFilmClick={this.onTitleOfFilmClick} onActivePlayerButtonClick={() => this.onChoseFilmButtonClick(chosenFilm.id)} onAddReviewButtonClick={() => this.onChoseFilmButtonClick(chosenFilm.id)}/>
    );
  }

  _renderBigPlayer() {
    const {chosenFilm} = this.props;

    return (
      <BigPlayerWrapper film={chosenFilm} />
    );
  }

  _renderAddReview() {
    const {chosenFilm, postComment} = this.props;

    return (
      <AddReviewWrapper onSubmit={postComment} film={chosenFilm}/>
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
          <Route exact path="/login">
            {authorizationStatus === AuthorizationStatus.NO_AUTH ?
              this._renderSignIn()
              :
              this._renderMain()
            }
          </Route>
          <Route exact path="/dev-film">
            {this._renderFilmDetails()}
          </Route>
          <Route exact path="/dev-player">
            {this._renderBigPlayer()}
          </Route>
          <Route exact path="/dev-review">
            {this._renderAddReview()}
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  login: PropTypes.func.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  films: filmsProps,
  chooseFilmId: PropTypes.func.isRequired,
  chosenFilm: filmProps,
  getComments: PropTypes.func.isRequired,
  promoFilm: filmProps,
  postComment: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
  films: getFilms(state),
  chosenFilm: getChosenFilm(state),
  promoFilm: getPromoFilm(state),
});

const mapDispatchToProps = (dispatch) => ({
  login(authData) {
    dispatch(UserOperation.login(authData));
  },
  chooseFilmId(id) {
    dispatch(ActionCreator.chooseFilmId(id));
  },
  postComment(commentData, onSuccess, onError) {
    dispatch(DataOperation.postComment(commentData, onSuccess, onError));
  }
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
