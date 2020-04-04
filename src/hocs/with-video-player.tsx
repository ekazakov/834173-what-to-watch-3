import * as React from "react";
import {VIDEO_TIMER_HOVER} from "../consts";
import VideoPlayer from "../components/video-player/video-player";
import {Subtract} from "utility-types";

interface State {
  isPlaying: boolean,
}

interface InjectedProps {
  onFilmCardHover: () => void,
  onFilmCardLeave: () => void,
  renderPlayer: () => void,
}

const withVideoPlayer = (Component) => {
  type P = React.ComponentProps<typeof Component>;
  type T = Subtract<P, InjectedProps>;

  class WithVideoPlayer extends React.PureComponent<T, State> {
    private timerId: ReturnType<typeof setTimeout>;

    constructor(props) {
      super(props);

      this.state = {
        isPlaying: false,
      };

      this.timerId = null;
    }

    componentWillUnmount() {
      clearTimeout(this.timerId);
    }

    render() {

      return (
        <Component
          {...this.props}

          onFilmCardHover={() => {
            this.timerId = setTimeout(() => {
              this.setState({
                isPlaying: true,
              });
            }, VIDEO_TIMER_HOVER);
          }}

          onFilmCardLeave={() => {
            clearTimeout(this.timerId);

            this.setState({
              isPlaying: false,
            });
          }}

          renderPlayer={(preview, poster) => {
            const {isPlaying} = this.state;

            return (
              <VideoPlayer
                isPlaying={isPlaying}
                src={preview}
                poster={poster}
              />
            );
          }}
        />
      );
    }
  }

  return WithVideoPlayer;
};

export default withVideoPlayer;
