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

      this._handlePlayButtonClick = this._handlePlayButtonClick.bind(this);
      this._handleFullScreenButtonClick = this._handleFullScreenButtonClick.bind(this);
      this._handleLoadMetadata = this._handleLoadMetadata.bind(this);
      this._handleTimeUpdate = this._handleTimeUpdate.bind(this);
      this._handleDefaultControlsChange = this._handleDefaultControlsChange.bind(this);
      this._handleIsPlayingTrueToggle = this._handleIsPlayingTrueToggle.bind(this);
      this._handleIsPlayingFalseToggle = this._handleIsPlayingFalseToggle.bind(this);
    }

    componentDidMount() {
      const player = this._playerRef.current;

      player.addEventListener(`fullscreenchange`, this._handleDefaultControlsChange);

      player.addEventListener(`play`, this._handleIsPlayingTrueToggle);

      player.addEventListener(`pause`, this._handleIsPlayingFalseToggle);
    }

    componentWillUnmount() {
      const player = this._playerRef.current;

      player.src = ``;
      player.poster = ``;
      player.play = null;
      player.pause = null;

      player.removeEventListener(`fullscreenchange`, this._handleDefaultControlsChange);

      player.removeEventListener(`play`, this._handleIsPlayingTrueToggle);

      player.removeEventListener(`pause`, this._handleIsPlayingFalseToggle);
    }

    _handleDefaultControlsChange() {
      const player = this._playerRef.current;

      if (document.fullscreenElement !== null) {
        player.controls = true;
      } else {
        player.controls = false;
      }
    }

    _handleIsPlayingTrueToggle() {
      this.setState({
        isPlaying: true,
      });
    }

    _handleIsPlayingFalseToggle() {
      this.setState({
        isPlaying: false,
      });
    }

    _handlePlayButtonClick() {
      const player = this._playerRef.current;

      if (player.paused) {
        player.play();
        this._handleIsPlayingTrueToggle();
      } else {
        player.pause();
        this._handleIsPlayingFalseToggle();
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
          onPlayClick={this._handlePlayButtonClick}
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
