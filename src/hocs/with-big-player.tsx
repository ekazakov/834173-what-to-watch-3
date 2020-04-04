import * as React from "react";
import {getProgress, getRemainingTime} from "../utils";
import {Film} from "../types";
import {Subtract} from "utility-types";

interface State {
  isPlaying: boolean,
  duration: number,
  progress: number,
}

interface Props {
  film: Film,
}

interface InjectedProps {
  playerRef: React.RefObject<HTMLVideoElement>;
  isPlaying: boolean,
  onPlayClick: () => void,
  onFullScreenClick: () => void,
  onLoadMetadata: () => void,
  onTimeUpdate: () => void,
  progress: string,
  remainingTime: string,
}

const withBigPlayer = (Component) => {
  type P = React.ComponentProps<typeof Component>;
  type T = Props & Subtract<P, InjectedProps>;

  class WithBigPlayer extends React.PureComponent<T, State> {
    private playerRef: React.RefObject<HTMLVideoElement>;

    constructor(props) {
      super(props);

      this.state = {
        isPlaying: false,
        duration: 0,
        progress: 0,
      };

      this.playerRef = React.createRef();

      this._handlePlayButtonClick = this._handlePlayButtonClick.bind(this);
      this._handleFullScreenButtonClick = this._handleFullScreenButtonClick.bind(this);
      this._handleLoadMetadata = this._handleLoadMetadata.bind(this);
      this._handleTimeUpdate = this._handleTimeUpdate.bind(this);
      this._handleDefaultControlsChange = this._handleDefaultControlsChange.bind(this);
      this._handleIsPlayingTrueToggle = this._handleIsPlayingTrueToggle.bind(this);
      this._handleIsPlayingFalseToggle = this._handleIsPlayingFalseToggle.bind(this);
    }

    componentDidMount() {
      const player = this.playerRef.current;

      player.addEventListener(`fullscreenchange`, this._handleDefaultControlsChange);

      player.addEventListener(`play`, this._handleIsPlayingTrueToggle);

      player.addEventListener(`pause`, this._handleIsPlayingFalseToggle);
    }

    componentWillUnmount() {
      const player = this.playerRef.current;

      player.src = ``;
      player.poster = ``;
      player.play = null;
      player.pause = null;

      player.removeEventListener(`fullscreenchange`, this._handleDefaultControlsChange);

      player.removeEventListener(`play`, this._handleIsPlayingTrueToggle);

      player.removeEventListener(`pause`, this._handleIsPlayingFalseToggle);
    }

    _handleDefaultControlsChange() {
      const player = this.playerRef.current;

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
      const player = this.playerRef.current;

      if (player.paused) {
        player.play();
        this._handleIsPlayingTrueToggle();
      } else {
        player.pause();
        this._handleIsPlayingFalseToggle();
      }
    }

    _handleFullScreenButtonClick() {
      const player = this.playerRef.current;

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
          playerRef={this.playerRef}
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

  return WithBigPlayer;
};

export default withBigPlayer;
