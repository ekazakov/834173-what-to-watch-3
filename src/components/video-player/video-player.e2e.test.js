import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import VideoPlayer from "./video-player.jsx";

const film = {
  preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  poster: `https://unsplash.it/280/175/`,
};

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should video-player has two states: “play” and “pause”`, () => {
  const videoPlayer = (isPlaying) => {
    return mount(
        <VideoPlayer
          isPlaying={isPlaying}
          src={film.preview}
          poster={film.poster}
        />
    );
  };

  expect(videoPlayer(true).state(`isPlaying`)).toBe(true);
  expect(videoPlayer(false).state(`isPlaying`)).toBe(false);
});
