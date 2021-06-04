import React from "react";
import faker from "faker";

import { TextField } from "src/text-field/text-field.native";

import { render, fireEvent, waitFor } from "#/helpers/test-helpers.native";

const noop = jest.fn();

describe("Textfield native", () => {
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

    expect(getByTestId("textfield-test")).toBeDefined();
  });
  test("call onChange correctly", async () => {
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
    fireEvent.changeText(getByTestId("textfield-test"), text);
    await waitFor(() => {
      expect(noop).toHaveBeenCalledWith(text);
    });
  });
});
