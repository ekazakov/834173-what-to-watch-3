import React, {PureComponent, createRef} from "react";
import PropTypes from "prop-types";
import {filmProps} from "../consts";

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

      //  Обработчики:
      //  обновление времени
      //  перехода в полноэкранный режим

      this._handleVideoPlay = this._handleVideoPlay.bind(this);
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
    };

    componentWillUnmount() {
      const player = this._playerRef.current;

      player.src = ``;
      player.poster = ``;
      player.play = null;
      player.pause = null;
    }

    render() {
      const {isPlaying, isActive} = this.state;

      return (
        <Component
          {...this.props}
          playerRef={this._playerRef}
          isPlaying={isPlaying}
          isActivePlayer={isActive}
          onPlayClick={this._handleVideoPlay}
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
