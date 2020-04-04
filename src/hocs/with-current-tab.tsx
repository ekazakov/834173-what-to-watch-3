import * as React from "react";
import {TabsName} from "../consts";
import {Subtract} from "utility-types";

interface State {
  currentTab: string,
}

interface Props {
  comments: {
    id: number,
    user: {
      id: number,
      name: string,
    },
    rating: number,
    comment: string,
    date: string,
  }[],
}

interface InjectedProps {
  currentTab: string,
  changeTab: () => void,
  comments: {
    id: number,
    user: {
      id: number,
      name: string,
    },
    rating: number,
    comment: string,
    date: string,
  }[],
}

const withCurrentTab = (Component) => {
  type P = React.ComponentProps<typeof Component>;
  type T = Props & Subtract<P, InjectedProps>;

  class WithCurrentTab extends React.PureComponent<T, State> {
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

  return WithCurrentTab;
};

export default withCurrentTab;
