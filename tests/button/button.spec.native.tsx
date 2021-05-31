import React from "react";
import faker from "faker";

import { Button } from "src/button/button.native";

import { render, fireEvent, waitFor } from "#/helpers/test-helpers.native";

const noop = (): null => null;

describe("Button native", (): void => {
  test("renders text prop correctly.", (): void => {
    const { getByA11yLabel } = render(
      <Button onPress={noop} text="teste" testID="teste" />
    );
    const button = getByA11yLabel(/teste/i);

    expect(button).toBeDefined();
  });

  test("call onPress when pressed.", async () => {
    const text = faker.random.word();
    const onPress = jest.fn();

    const { getByTestId } = render(
      <Button onPress={onPress} text={text} testID="button" />
    );

    fireEvent.press(getByTestId("button"));

    await waitFor(() => {
      expect(onPress).toHaveBeenCalledTimes(1);
    });
  });
});
