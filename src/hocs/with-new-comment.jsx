import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {filmProps, TextCommentLength, AppRoute} from "../consts.js";
import history from "../history.js";

const withNewComment = (Component) => {
  class WithNewComment extends PureComponent {
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
    }

    _handleTextChange(evt) {
      this.setState({
        comment: evt.target.value,
      });
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

  WithNewComment.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    film: filmProps,
  };

  return WithNewComment;
};

export default withNewComment;
