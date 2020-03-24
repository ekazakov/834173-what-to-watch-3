import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {filmProps} from "../consts.js";

const withNewComment = (Component) => {
  class WithNewComment extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        rating: null,
        comment: null,
      };

      this._handleSubmit = this._handleSubmit.bind(this);
      this._handleTextChange = this._handleTextChange.bind(this);
      this._handleRatingChange = this._handleRatingChange.bind(this);
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
      const {onSubmit} = this.props;

      evt.preventDefault();

      onSubmit({
        rating: this.state.rating,
        comment: this.state.comment,
      });
    }

    render() {
      return (
        <Component
          {...this.props}
          onTextChange={this._handleTextChange}
          onRatingChange={this._handleRatingChange}
          onSubmit={this._handleSubmit}
        />
      );
    }
  }

  WithNewComment.propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  return WithNewComment;
};

export default withNewComment;
