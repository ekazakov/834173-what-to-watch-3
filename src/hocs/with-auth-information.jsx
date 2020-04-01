import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import history from "../history.js";
import {AppRoute} from "../consts.js";

const withAuthInformation = (Component) => {
  class WithAuthInformation extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        email: ``,
        password: ``,
        errorMessage: ``,
      };

      this._handleFormSubmit = this._handleFormSubmit.bind(this);
      this._handleInputChange = this._handleInputChange.bind(this);
    }

    _checkError(email, password) {
      if (email.length === 0 || password.length === 0) {
        this.setState({
          errorMessage: `Поля не должны быть пустыми`,
        });
      } else if (email.indexOf(`@`) === -1) {
        this.setState({
          errorMessage: `Введите валиндый email`,
        });
      }
    }

    _checkEmail() {
      const {email} = this.state;

      return email.length !== 0 && email.indexOf(`@`) !== -1;
    }

    _checkPassword() {
      const {password} = this.state;

      return password.length !== 0;
    }

    _handleInputChange(evt) {
      const target = evt.target;
      const value = target.value;
      let name = target.name.replace(/user-/, ``);

      this.setState({
        [name]: value
      });
    }

    _handleFormSubmit(evt) {
      const {onSubmit} = this.props;
      const {email, password} = this.state;

      evt.preventDefault();

      onSubmit({
        email: this.state.email,
        password: this.state.password,
      },
      () => {
        history.push(AppRoute.ROOT);
      },
      () => {
        this._checkError(email, password);
      });
    }

    render() {
      const {errorMessage} = this.state;

      return (
        <Component
          {...this.props}
          onChange={this._handleInputChange}
          onSubmit={this._handleFormSubmit}
          errorMessage={errorMessage}
          validEmail={this._checkEmail()}
          validPassword={this._checkPassword()}
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
