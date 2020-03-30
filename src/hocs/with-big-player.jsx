import React, {PureComponent, createRef} from "react";
import {filmProps} from "../consts";
import {getProgress, getRemainingTime} from "../utils.js";

const withBigPlayer = (Component) => {
  class WithBigPlayer extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isPlaying: false,
        duration: 0,
        progress: 0,
      };

      this._playerRef = createRef();

      this._handleVideoPlay = this._handleVideoPlay.bind(this);
      this._handleFullScreen = this._handleFullScreen.bind(this);
      this._handleLoadMetadata = this._handleLoadMetadata.bind(this);
      this._handleTimeUpdate = this._handleTimeUpdate.bind(this);
    }

    componentWillUnmount() {
      const player = this._playerRef.current;

      player.src = ``;
      player.poster = ``;
      player.play = null;
      player.pause = null;
    }

    _handleVideoPlay() {
      const player = this._playerRef.current;

      if (player.paused) {
        player.play();
        this.setState({
          isPlaying: true,
        });
      } else {
        player.pause();
        this.setState({
          isPlaying: false,
        });
      }
    }

    _handleFullScreen() {
      const player = this._playerRef.current;

      player.requestFullscreen();
    }

    _handleLoadMetadata(evt) {

      this.setState({
        duration: Math.floor(evt.target.duration),
      });
    }

    _handleTimeUpdate(evt) {

      this.setState({
        progress: Math.floor(evt.target.currentTime),
      });
    }

    render() {
      const {isPlaying} = this.state;

      return (
        <Component
          {...this.props}
          playerRef={this._playerRef}
          isPlaying={isPlaying}
          onPlayClick={this._handleVideoPlay}
          onFullScreenClick={this._handleFullScreen}
          onLoadMetadata={this._handleLoadMetadata}
          onTimeUpdate={this._handleTimeUpdate}
          progress={getProgress(this.state.duration, this.state.progress)}
          remainingTime={getRemainingTime(this.state.duration, this.state.progress)}
        />
      );
    }
  }


  WithBigPlayer.propTypes = {
    film: filmProps,
  };

  return WithBigPlayer;
};

export default withBigPlayer;
