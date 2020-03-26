import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {getAuthorizationStatus} from "../../reducer/user/selectors.js";
import {AuthorizationStatus} from "../../consts";
import {Link} from "react-router-dom";

const UserBlock = (props) => {
  const {isAuthorized} = props;

  return (
    <div className="user-block">
      {
        isAuthorized ?
          <div className="user-block__avatar">
            <img src="img/avatar.jpg" alt="User avatar" width="63" height="63"/>
          </div>
          :
          <Link to="login" className="user-block__link">Sign in</Link>
      }
    </div>
  );
};

UserBlock.propTypes = {
  isAuthorized: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthorized: getAuthorizationStatus(state) === AuthorizationStatus.AUTH,
});

export {UserBlock};
export default connect(mapStateToProps)(UserBlock);
