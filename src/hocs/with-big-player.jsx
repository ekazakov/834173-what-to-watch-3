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

      this._handleVideoPlayClick = this._handleVideoPlayClick.bind(this);
      this._handleFullScreenButtonClick = this._handleFullScreenButtonClick.bind(this);
      this._handleLoadMetadata = this._handleLoadMetadata.bind(this);
      this._handleTimeUpdate = this._handleTimeUpdate.bind(this);
      this._handleFullScreenControlChange = this._handleFullScreenControlChange.bind(this);
    }

    componentDidMount() {
      const player = this._playerRef.current;

      player.addEventListener(`fullscreenchange`, this._handleFullScreenControlChange);
    }

    componentWillUnmount() {
      const player = this._playerRef.current;

      player.src = ``;
      player.poster = ``;
      player.play = null;
      player.pause = null;

      player.removeEventListener(`fullscreenchange`, this._handleFullScreenControlChange);
    }

    _handleFullScreenControlChange() {
      const player = this._playerRef.current;

      if (document.fullscreenElement !== null) {
        player.controls = true;
      }

      if (document.fullscreenElement === null) {
        player.controls = false;
      }
    }

    _handleVideoPlayClick() {
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

    _handleFullScreenButtonClick() {
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
          onPlayClick={this._handleVideoPlayClick}
          onFullScreenClick={this._handleFullScreenButtonClick}
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
