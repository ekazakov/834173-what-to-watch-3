import * as React from "react";
import {Subtract} from "utility-types";
import history from "../history";
import {AppRoute} from "../consts";

interface State {
  email?: string,
  password?: string,
  errorMessage?: string,
}

interface Props {
  onSubmit: (
    {
      email,
      password
    } : {
      email: string,
      password: string,
    },
    onSuccess: () => void,
    onError: () => void,
    ) => void,
}

interface InjectedProps {
  onChange: () => void,
  onSubmit: () => void,
  errorMessage: string,
  validEmail: boolean,
  validPassword: boolean,
}

const withAuthInformation = (Component) => {
  type P = React.ComponentProps<typeof Component>;
  type T = Props & Subtract<P, InjectedProps>;

  class WithAuthInformation extends React.PureComponent<T, State> {
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

  return WithAuthInformation;
};

export default withAuthInformation;
