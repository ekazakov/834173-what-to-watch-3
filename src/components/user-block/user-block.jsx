import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {getAuthorizationStatus} from "../../reducer/user/selectors.js";
import {AuthorizationStatus} from "../../consts";
import {Link} from "react-router-dom";

const UserBlock = (props) => {
  const {authorizationStatus} = props;

  return (
    <div className="user-block">
      {
        authorizationStatus === AuthorizationStatus.NO_AUTH ?
          <Link to="login" className="user-block__link">Sign in</Link>
          :
          <div className="user-block__avatar">
            <img src="img/avatar.jpg" alt="User avatar" width="63" height="63"/>
          </div>
      }
    </div>
  );
};

UserBlock.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
});

export {UserBlock};
export default connect(mapStateToProps)(UserBlock);
