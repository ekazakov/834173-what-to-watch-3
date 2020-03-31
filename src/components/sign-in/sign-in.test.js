import React from "react";
import renderer from "react-test-renderer";
import SignIn from "./sign-in.jsx";
import {MemoryRouter} from "react-router-dom";

it(`SignIn render correctly`, () => {
  const tree = renderer.create(
      <MemoryRouter>
        <SignIn
          onSubmit={()=>{}}
          onChange={() => {}}
          errorMessage={``}
          validEmail={true}
          validPassword={true}
        />
      </MemoryRouter>
  );

  expect(tree).toMatchSnapshot();
});
