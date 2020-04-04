import * as React from "react";
import {Switch, Route, Router} from "react-router-dom";
import {connect} from "react-redux";
import history from "../../history";
import Main from "../main/main";
import SignIn from "../sign-in/sign-in";
import AddReview from "../add-review/add-review";
import BigVideoPlayer from "../big-video-player/big-video-player";
import FilmDetails from "../film-details/film-details";
import MyList from "../my-list/my-list";
import PrivateRoute from "../private-route/private-route";
import withAuthInformation from "../../hocs/with-auth-information";
import withBigVideoPlayer from "../../hocs/with-big-player";
import withNewComment from "../../hocs/with-new-comment";
import {Operation as UserOperation} from "../../reducer/user/user";
import {getFilms, getChosenFilm, getPromoFilm} from "../../reducer/state/selectors";
import {ActionCreator} from "../../reducer/state/state";
import {Operation as DataOperation} from "../../reducer/data/data";
import {AppRoute} from "../../consts";
import {Film} from "../../types";

const SignInWrapper = withAuthInformation(SignIn);
const BigPlayerWrapper = withBigVideoPlayer(BigVideoPlayer);
const AddReviewWrapper = withNewComment(AddReview);

interface AppProps {
  login: () => void;
  films: Film[];
  chooseFilmId: (number) => void;
  chosenFilm: Film;
  getComments: (number) => void;
  promoFilm: Film;
  postComment: () => void;
}

class App extends React.PureComponent<AppProps, {}> {

  constructor(props) {
    super(props);

    this._handleFilmClick = this._handleFilmClick.bind(this);
    this._handleChoseFilmButtonClick = this._handleChoseFilmButtonClick.bind(this);
  }

  _handleFilmClick(id) {
    const {chooseFilmId, getComments} = this.props;

    chooseFilmId(id);
    getComments(id);
  }

  _handleChoseFilmButtonClick(id) {
    const {chooseFilmId} = this.props;

    chooseFilmId(id);
  }

  render() {
    const {postComment, login, promoFilm, chosenFilm} = this.props;

    return (
      <Router history={history}>
        <Switch>
          <Route exact path={AppRoute.ROOT}>
            <Main
              promoFilm={promoFilm}
              onFilmClick={this._handleFilmClick}
              onActivePlayerButtonClick={() => this._handleChoseFilmButtonClick(promoFilm.id)}
            />
          </Route>
          <Route exact path={AppRoute.LOGIN}>
            <SignInWrapper onSubmit={login}/>
          </Route>
          <Route
            exact
            path={`${AppRoute.FILM}/:id`}
          >
            <FilmDetails
              film={chosenFilm}
              onFilmClick={this._handleFilmClick}
              onActivePlayerButtonClick={() => this._handleChoseFilmButtonClick(chosenFilm.id)}
              onAddReviewButtonClick={() => this._handleChoseFilmButtonClick(chosenFilm.id)}
            />
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
                <MyList onFilmClick={this._handleFilmClick}/>
              );
            }}
          />
        </Switch>
      </Router>
    );
  }
}

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
