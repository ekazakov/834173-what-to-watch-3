import React, {PureComponent} from "react";
import {VIDEO_TIMER_HOVER} from "../consts.js";
import VideoPlayer from "../components/video-player/video-player.jsx";

const withVideoPlayer = (Component) => {
  class WithActivePlayer extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isPlaying: false,
      };

      this.timerId = null;
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

  return WithActivePlayer;
};

export default withVideoPlayer;