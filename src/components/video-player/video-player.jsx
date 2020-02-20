import React, {PureComponent, createRef} from "react";
import PropTypes from "prop-types";

export default class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);

    this._videoRef = createRef();

    this.state = {
      isPlaying: props.isPlaying,
    };
  }

  componentDidMount() {
    const {src, poster} = this.props;
    const video = this._videoRef.current;

    video.src = src;
    video.poster = poster;

    video.onmouseover = () => this.setState({
      isPlaying: true,
    });

    video.onmouseout = () => this.setState({
      isPlaying: false,
    });
  }

  componentWillUnmount() {
    const video = this._videoRef.current;

    video.src = ``;
    video.onmousover = null;
    video.onmouseout = null;
  }

  render() {
    return (
      <video
        ref={this._videoRef}
        width="280"
        height="175"
        muted
      />
    );
  }

  componentDidUpdate() {
    const video = this._videoRef.current;

    if (this.props.isPlaying) {
      video.play();
    } else {
      video.pause();
    }
  }
}

VideoPlayer.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  src: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};
