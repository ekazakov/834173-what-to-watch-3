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

      this._handleSubmit = this._handleSubmit.bind(this);
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

    activateForm() {
      this.setState({
        formIsAvailable: true,
        buttonIsAvailable: true,
      });
    }

    deactivateForm() {
      this.setState({
        formIsAvailable: false,
        buttonIsAvailable: false,
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

    _handleSubmit(evt) {
      const {onSubmit, film} = this.props;
      const {rating, comment} = this.state;

      evt.preventDefault();

      this.deactivateForm();

      onSubmit({
        id: film.id,
        rating,
        comment,
      },
      () => {
        this.activateForm();
        history.push(`${AppRoute.FILM}/${film.id}`);
      },
      () => {
        this.activateForm();
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
          onSubmit={this._handleSubmit}
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
