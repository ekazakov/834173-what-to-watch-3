import * as React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {Route, Redirect} from "react-router-dom";
import {AuthorizationStatus, AppRoute} from "../../consts";
import {getAuthorizationStatus} from "../../reducer/user/selectors";

const PrivateRoute = (props) => {
  const {isAuthorized, render, path, exact} = props;

  return (
    <Route
      path={path}
      exact={exact}
      render={() => {
        return (
          isAuthorized ?
            render()
            :
            <Redirect to={AppRoute.LOGIN}/>
        );
      }}
    />
  );
};

PrivateRoute.propTypes = {
  isAuthorized: PropTypes.bool.isRequired,
  exact: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  render: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthorized: getAuthorizationStatus(state) === AuthorizationStatus.AUTH,
});

export {PrivateRoute};
export default connect(mapStateToProps)(PrivateRoute);
