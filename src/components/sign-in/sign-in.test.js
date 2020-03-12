import React from "react";
import renderer from "react-test-renderer";
import SignIn from "./sign-in.jsx";

it(`SignIn render correctly`, () => {
  const tree = renderer.create(
      <SignIn onSubmit={()=>{}} />
  );

  expect(tree).toMatchSnapshot();
});
