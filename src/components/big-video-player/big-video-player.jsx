import React from "react";
import PropTypes from "prop-types";
import {filmProps} from "../../consts";
import {Link} from "react-router-dom";

const BigVideoPlayer = (props) => {
  const {playerRef, film, isPlaying, onPlayClick, onFullScreenClick, onLoadMetadata, onTimeUpdate, progress, remainingTime} = props;

  return (
    <div className="player">
      <video className="player__video" ref={playerRef} onLoadedMetadata={onLoadMetadata} onTimeUpdate={onTimeUpdate} src={film.video} poster={film.background} width="100%" />

      <Link to="dev-film" className="player__exit">Exit</Link>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value={progress} max="100"/>
            <div className="player__toggler" style={{left: `${progress}` + `%`}}>Toggler</div>
          </div>
          <div className="player__time-value">{remainingTime}</div>
        </div>

        <div className="player__controls-row">
          <button type="button" className="player__play" onClick={onPlayClick}>
            {isPlaying ? (
              <React.Fragment>
                <svg viewBox="0 0 14 21" width="14" height="21">
                  <use xlinkHref="#pause"/>
                </svg>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"/>
                </svg>
                <span>Play</span>
              </React.Fragment>
            )}
          </button>
          <div className="player__name">Transpotting</div>

          <button type="button" className="player__full-screen" onClick={onFullScreenClick}>
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"/>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
};

BigVideoPlayer.propTypes = {
  film: filmProps,
  isPlaying: PropTypes.bool.isRequired,
  playerRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({current: PropTypes.instanceOf(Element)})
  ]).isRequired,
  onPlayClick: PropTypes.func.isRequired,
  onFullScreenClick: PropTypes.func.isRequired,
  onLoadMetadata: PropTypes.func.isRequired,
  onTimeUpdate: PropTypes.func.isRequired,
  progress: PropTypes.string.isRequired,
  remainingTime: PropTypes.string.isRequired,
};

export default BigVideoPlayer;
