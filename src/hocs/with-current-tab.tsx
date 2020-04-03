import * as React from "react";
import {TabsName, commentsProps} from "../consts";

const withCurrentTab = (Component) => {
  class WithCurrentTab extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        currentTab: TabsName.OVERVIEW,
      };

      this._handleTabClick = this._handleTabClick.bind(this);
    }

    _handleTabClick(evt, tabName) {
      evt.preventDefault();

      this.setState({
        currentTab: tabName,
      });
    }

    render() {
      const {currentTab} = this.state;
      const {comments} = this.props;

      return (
        <Component
          {...this.props}
          currentTab={currentTab}
          changeTab={this._handleTabClick}
          comments={comments}
        />
      );
    }
  }

  WithCurrentTab.propTypes = {
    comments: commentsProps,
  };

  return WithCurrentTab;
};

export default withCurrentTab;
