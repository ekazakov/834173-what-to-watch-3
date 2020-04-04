import * as React from "react";
import * as renderer from "react-test-renderer";
import Tabs from "./tabs";
import {TabsName} from "../../consts";
import {films, comments} from "../../mock-for-tests";
import {noop} from "../../utils";

it(`Should Tabs render correctly`, () => {
  const tree = renderer.create(
      <Tabs film={films[0]} changeTab={noop} currentTab={TabsName.OVERVIEW} comments={comments}/>
  )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
