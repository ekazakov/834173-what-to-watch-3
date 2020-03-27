import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {Switch, Route, Router} from "react-router-dom";
import Main from "../main/main.jsx";
import {connect} from "react-redux";
import {Operation as UserOperation} from "../../reducer/user/user.js";
import SignIn from "../sign-in/sign-in.jsx";
import withAuthInformation from "../../hocs/with-auth-information.jsx";
import FilmDetails from "../film-details/film-details.jsx";
import {filmProps, filmsProps, AppRoute} from "../../consts";
import {getFilms, getChosenFilm, getPromoFilm} from "../../reducer/state/selectors.js";
import {ActionCreator} from "../../reducer/state/state.js";
import BigVideoPlayer from "../big-video-player/big-video-player.jsx";
import withBigVideoPlayer from "../../hocs/with-big-player.jsx";
import history from "../../history.js";
import AddReview from "../add-review/add-review.jsx";
import {Operation as DataOperation} from "../../reducer/data/data.js";
import withNewComment from "../../hocs/with-new-comment.jsx";
import MyList from "../my-list/my-list.jsx";
import PrivateRoute from "../private-route/private-route.jsx";

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

  render() {
    const {chosenFilm, postComment, login, promoFilm} = this.props;

    return (
      <Router history={history}>
        <Switch>
          <Route exact path={AppRoute.ROOT}>
            <Main
              promoFilm={promoFilm}
              onTitleOfFilmClick={this.onTitleOfFilmClick}
              onActivePlayerButtonClick={() => this.onChoseFilmButtonClick(promoFilm.id)}
            />
          </Route>
          <Route exact path={AppRoute.LOGIN}>
            <SignInWrapper onSubmit={login}/>
          </Route>
          <Route exact path={`${AppRoute.FILM}/:id`}>
            <FilmDetails
              film={chosenFilm}
              onTitleOfFilmClick={this.onTitleOfFilmClick}
              onActivePlayerButtonClick={() => this.onChoseFilmButtonClick(chosenFilm.id)}
              onAddReviewButtonClick={() => this.onChoseFilmButtonClick(chosenFilm.id)}/>
          </Route>
          <Route exact path={`${AppRoute.PLAYER}/:id`}>
            <BigPlayerWrapper film={chosenFilm} />
          </Route>
          <PrivateRoute
            exact
            path={`${AppRoute.FILM}/:id${AppRoute.REVIEW}`}
            render={() => {
              return (
                <AddReviewWrapper onSubmit={postComment} film={chosenFilm}/>
              );
            }}
          />
          <PrivateRoute
            exact
            path={AppRoute.FAVORITE}
            render={() => {
              return (
                <MyList onTitleOfFilmClick={this.onTitleOfFilmClick}/>
              );
            }}
          />
        </Switch>
      </Router>
    );
  }
}

App.propTypes = {
  login: PropTypes.func.isRequired,
  films: filmsProps,
  chooseFilmId: PropTypes.func.isRequired,
  chosenFilm: filmProps,
  getComments: PropTypes.func.isRequired,
  promoFilm: filmProps,
  postComment: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  films: getFilms(state),
  chosenFilm: getChosenFilm(state),
  promoFilm: getPromoFilm(state),
});

const mapDispatchToProps = (dispatch) => ({
  login(authData, onSuccess, onError) {
    dispatch(UserOperation.login(authData, onSuccess, onError));
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
