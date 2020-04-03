import React, {createRef} from "react";
import renderer from "react-test-renderer";
import BigVideoPlayer from "./big-video-player.js";
import {films} from "../../mock-for-tests.js";
import {MemoryRouter} from "react-router-dom";

it(`Should BigVideoPlayer render correctly`, () => {
  const tree = renderer.create(
      <MemoryRouter>
        <BigVideoPlayer
          isPlaying={false}
          playerRef={createRef()}
          onPlayClick={() => {}}
          onFullScreenClick={() => {}}
          onLoadMetadata={() => {}}
          onTimeUpdate={() => {}}
          progress={`10`}
          remainingTime={`00:00:00`}
          film={films[0]}
        />
      </MemoryRouter>
      , {
        createNodeMock: () => {
          return {};
        }
      }

  ).toJSON();

  expect(tree).toMatchSnapshot();
});
