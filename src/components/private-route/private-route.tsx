import * as React from "react";
import {connect} from "react-redux";
import {Route, Redirect, RouteProps} from "react-router-dom";
import {getAuthorizationStatus} from "../../reducer/user/selectors";
import {AuthorizationStatus, AppRoute} from "../../consts";

type PrivateRouteProps = RouteProps & {
  isAuthorized: boolean;
  render: () => React.ReactNode;
}

const PrivateRoute: React.FunctionComponent<PrivateRouteProps> = (props: PrivateRouteProps) => {
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

const mapStateToProps = (state) => ({
  isAuthorized: getAuthorizationStatus(state) === AuthorizationStatus.AUTH,
});

export {PrivateRoute};
export default connect(mapStateToProps)(PrivateRoute);
