import React, {PureComponent} from "react";
import {TabsName} from "../consts.js";
import Tabs from "../components/tabs/tabs.jsx";

const withCurrentTab = (Component) => {
  class WithCurrentTab extends PureComponent {
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
      return (
        <Component
          {...this.props}
          currentTab={this.state.currentTab}
          changeTab={this._handleTabClick}
        >
          <Tabs />
        </Component>
      );
    }
  }

  WithCurrentTab.propTypes = {};

  return WithCurrentTab;
};

export default withCurrentTab;
