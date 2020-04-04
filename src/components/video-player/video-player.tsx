import * as React from "react";

interface VideoPlayerProps {
  isPlaying: boolean;
  src: string;
  poster: string;
}

export default class VideoPlayer extends React.PureComponent<VideoPlayerProps, {}> {
  private videoRef: React.RefObject<HTMLVideoElement>;

  constructor(props) {
    super(props);

    this.videoRef = React.createRef();
  }

  componentDidMount() {
    const {src, poster} = this.props;
    const video = this.videoRef.current;

    video.src = src;
    video.poster = poster;
  }

  componentWillUnmount() {
    const video = this.videoRef.current;

    video.src = ``;
    video.poster = ``;
  }

  componentDidUpdate() {
    const video = this.videoRef.current;

    if (this.props.isPlaying) {
      video.play();
    } else {
      video.load();
    }
  }

  render() {
    return (
      <video
        ref={this.videoRef}
        width="100%"
        height="175"
        muted
      />
    );
  }
}
