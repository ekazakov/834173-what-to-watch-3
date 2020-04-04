import * as React from "react";
import {connect} from "react-redux";
import {getAuthorizationStatus} from "../../reducer/user/selectors";
import {AuthorizationStatus, AppRoute} from "../../consts";
import {Link} from "react-router-dom";

interface UserBlockProps {
  isAuthorized: boolean;
}

const UserBlock: React.FunctionComponent<UserBlockProps> = (props: UserBlockProps) => {
  const {isAuthorized} = props;

  return (
    <div className="user-block">
      {
        isAuthorized ?
          <div className="user-block__avatar">
            <Link to={AppRoute.FAVORITE}>
              <img src="/img/avatar.jpg" alt="User avatar" width="63" height="63"/>
            </Link>
          </div>
          :
          <Link to={AppRoute.LOGIN} className="user-block__link">Sign in</Link>
      }
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthorized: getAuthorizationStatus(state) === AuthorizationStatus.AUTH,
});

export {UserBlock};
export default connect(mapStateToProps)(UserBlock);
