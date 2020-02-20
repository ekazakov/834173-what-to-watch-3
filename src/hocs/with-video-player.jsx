import React, {PureComponent} from "react";
import VideoPlayer from "../components/video-player/video-player.jsx";

const withVideoPlayer = (Component) => {
  class WithActivePlayer extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeFilmId: 0,
      };
    }

    render() {
      const {activeFilmId} = this.state;

      return (
        <Component
          {...this.props}
          renderPlayer={(preview, poster, id) => {
            return (
              <VideoPlayer
                isPlaying={activeFilmId === id}
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
