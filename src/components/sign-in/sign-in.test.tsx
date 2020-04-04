import * as React from "react";
import * as renderer from "react-test-renderer";
import SignIn from "./sign-in";
import {MemoryRouter} from "react-router-dom";
import {noop} from "../../utils";

it(`SignIn render correctly`, () => {
  const tree = renderer.create(
      <MemoryRouter>
        <SignIn
          onSubmit={noop}
          onChange={noop}
          errorMessage={``}
          validEmail={true}
          validPassword={true}
        />
      </MemoryRouter>
  );

  expect(tree).toMatchSnapshot();
});
