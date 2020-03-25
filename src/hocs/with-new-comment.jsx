import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {filmProps, TextCommentLength} from "../consts.js";

const withNewComment = (Component) => {
  class WithNewComment extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        id: null,
        rating: 0,
        comment: ``,
        buttonIsAvailable: false,
        formIsAvailable: true,
      };

      this._handleSubmit = this._handleSubmit.bind(this);
      this._handleTextChange = this._handleTextChange.bind(this);
      this._handleRatingChange = this._handleRatingChange.bind(this);
    }

    checkValidForm() {
      const {rating, comment} = this.state;

      this.setState({
        buttonIsAvailable: comment.length >= TextCommentLength.MIN && comment.length <= TextCommentLength.MAX && rating !== 0,
      });
    }

    activateForm() {
      this.setState({
        buttonIsAvailable: true,
        formIsAvailable: true,
      });
    }

    deactivateForm() {
      this.setState({
        buttonIsAvailable: false,
        formIsAvailable: false,
      });
    }

    _handleRatingChange(evt) {
      this.setState({
        rating: evt.target.value,
      });

      this.checkValidForm();
    }

    _handleTextChange(evt) {
      this.setState({
        comment: evt.target.value,
      });

      this.checkValidForm();
    }

    _handleSubmit(evt) {
      const {onSubmit, film} = this.props;

      evt.preventDefault();

      this.deactivateForm();

      onSubmit({
        id: film.id,
        rating: this.state.rating,
        comment: this.state.comment,
      },
      () => {
        this.activateForm();
      },
      () => {
        this.activateForm();
      }
      );
    }

    render() {
      const {buttonIsAvailable, formIsAvailable} = this.state;

      return (
        <Component
          {...this.props}
          onTextChange={this._handleTextChange}
          onRatingChange={this._handleRatingChange}
          onSubmit={this._handleSubmit}
          buttonIsAvailable={buttonIsAvailable}
          formIsAvailable={formIsAvailable}
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
