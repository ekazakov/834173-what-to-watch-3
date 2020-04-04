import * as React from "react";
import {AppRoute} from "../../consts";
import {Link} from "react-router-dom";
import {Film} from "../../types";

interface BigVideoPlayerProps {
  film: Film,
  isPlaying: boolean,
  playerRef: React.RefObject<HTMLVideoElement>,
  onPlayClick: () => void,
  onFullScreenClick: () => void,
  onLoadMetadata: () => void,
  onTimeUpdate: () => void,
  progress: string,
  remainingTime: string,
}

const BigVideoPlayer: React.FunctionComponent<BigVideoPlayerProps> = (props: BigVideoPlayerProps) => {
  const {playerRef, film, isPlaying, onPlayClick, onFullScreenClick, onLoadMetadata, onTimeUpdate, progress, remainingTime} = props;

  return (
    <div className="player">
      <video className="player__video" ref={playerRef} onLoadedMetadata={onLoadMetadata} onTimeUpdate={onTimeUpdate} src={film.video} poster={film.background} width="100%" />

      <Link to={`${AppRoute.FILM}/${film.id}`} className="player__exit">Exit</Link>

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
          <div className="player__name">{film.name}</div>

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

export default BigVideoPlayer;
