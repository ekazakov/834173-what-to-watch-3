import * as React from "react";
import * as renderer from "react-test-renderer";
import Tabs from "./tabs.js";
import {TabsName} from "../../consts";
import {films, comments} from "../../mock-for-tests";

it(`Should Tabs render correctly`, () => {
  const tree = renderer.create(
      <Tabs film={films[0]} changeTab={() => {}} currentTab={TabsName.OVERVIEW} comments={comments}/>
  )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
