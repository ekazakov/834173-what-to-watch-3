import * as React from "react";
import {TextCommentLength, AppRoute} from "../consts";
import history from "../history";
import {Film} from "../types";
import {Subtract} from "utility-types";

interface State {
  id: number | string,
  rating: number,
  comment: string,
  formIsAvailable: boolean,
  errorMessage: string,
}

interface Props {
  onSubmit: () => void,
  film: Film,
}

interface InjectedProps {
  onTextChang: () => void,
  onRatingChange: () => void,
  onSubmit: () => void,
  buttonIsAvailable: boolean,
  formIsAvailable: boolean,
  errorMessage: string,
}

const withNewComment = (Component) => {
  type P = React.ComponentProps<typeof Component>;
  type T = Props & Subtract<P, InjectedProps>;

  class WithNewComment extends React.PureComponent<T, State> {
    constructor(props) {
      super(props);

      this.state = {
        id: null,
        rating: 0,
        comment: ``,
        formIsAvailable: true,
        errorMessage: ``,
      };

      this._handleFormSubmit = this._handleFormSubmit.bind(this);
      this._handleTextChange = this._handleTextChange.bind(this);
      this._handleRatingChange = this._handleRatingChange.bind(this);
    }

    checkError(rating, comment) {
      if (rating === 0) {
        this.setState({
          errorMessage: `Необходимо проставить рейтинг`,
        });
      } else if (comment.length < TextCommentLength.MIN) {
        this.setState({
          errorMessage: `Длина комментария не может быть меньше ${TextCommentLength.MIN}`,
        });
      } else if (comment.length > TextCommentLength.MAX) {
        this.setState({
          errorMessage: `Длина комментария не может быть больше ${TextCommentLength.MAX}`,
        });
      } else if (rating !== 0 && comment.length >= TextCommentLength.MIN && comment.length <= TextCommentLength.MAX) {
        this.setState({
          errorMessage: ``,
        });
      }
    }

    _handleFormActivate() {
      this.setState({
        formIsAvailable: true,
      });
    }

    _handleFormDeactivate() {
      this.setState({
        formIsAvailable: false,
      });
    }

    _handleRatingChange(evt) {
      this.setState({
        rating: evt.target.value,
      });

      this.checkError(evt.target.value, this.state.comment);
    }

    _handleTextChange(evt) {
      this.setState({
        comment: evt.target.value,
      });

      this.checkError(this.state.rating, evt.target.value);
    }

    _handleFormSubmit(evt) {
      const {onSubmit, film} = this.props;
      const {rating, comment} = this.state;

      evt.preventDefault();

      this._handleFormDeactivate();

      onSubmit({
        id: film.id,
        rating,
        comment,
      },
      () => {
        this._handleFormActivate();
        history.push(`${AppRoute.FILM}/${film.id}`);
      },
      () => {
        this._handleFormActivate();
        this.checkError(rating, comment);
      });
    }

    render() {
      const {formIsAvailable, rating, comment, errorMessage} = this.state;

      const buttonIsAvailable =
        formIsAvailable &&
        comment.length >= TextCommentLength.MIN &&
        comment.length <= TextCommentLength.MAX && rating !== 0;

      return (
        <Component
          {...this.props}
          onTextChange={this._handleTextChange}
          onRatingChange={this._handleRatingChange}
          onSubmit={this._handleFormSubmit}
          buttonIsAvailable={buttonIsAvailable}
          formIsAvailable={formIsAvailable}
          errorMessage={errorMessage}
        />
      );
    }
  }

  return WithNewComment;
};

export default withNewComment;
