import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import history from "../history.js";

const withAuthInformation = (Component) => {
  class WithAuthInformation extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        email: null,
        password: null,
      };

      this._handleSubmit = this._handleSubmit.bind(this);
      this._handleInputChange = this._handleInputChange.bind(this);
    }

    _handleInputChange(evt) {
      const target = evt.target;
      const value = target.value;
      let name = target.name.replace(/user-/, ``);

      this.setState({
        [name]: value
      });
    }

    _handleSubmit(evt) {
      const {onSubmit} = this.props;

      evt.preventDefault();

      onSubmit({
        email: this.state.email,
        password: this.state.password,
      });

      history.goBack();
    }

    render() {

      return (
        <Component
          {...this.props}
          onChange={this._handleInputChange}
          onSubmit={this._handleSubmit}
        />
      );
    }
  }

  WithAuthInformation.propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  return WithAuthInformation;
};

export default withAuthInformation;
