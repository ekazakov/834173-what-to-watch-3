import * as React from "react";
import * as renderer from "react-test-renderer";
import BigVideoPlayer from "./big-video-player.js";
import {films} from "../../mock-for-tests";
import {MemoryRouter} from "react-router-dom";
import {noop} from "../../utils";

it(`Should BigVideoPlayer render correctly`, () => {
  const tree = renderer.create(
      <MemoryRouter>
        <BigVideoPlayer
          isPlaying={false}
          playerRef={React.createRef()}
          onPlayClick={noop}
          onFullScreenClick={noop}
          onLoadMetadata={noop}
          onTimeUpdate={noop}
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
