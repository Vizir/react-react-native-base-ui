import React from "react";
import faker from "faker";

import { TextField } from "src/text-field/text-field";

import { render } from "#/helpers/test-helpers";

const noop = jest.fn();

describe("Textfield web", () => {
  test("render correctly", () => {
    const text = faker.random.word();
    const { getByTestId } = render(
      <TextField
        testID="textfield-test"
        onChangeText={noop}
        type="text"
        value=""
        label={text}
        placeholder={text}
      />
    );

    expect(getByTestId("textfield-test")).toBeInTheDocument();
  });
});
