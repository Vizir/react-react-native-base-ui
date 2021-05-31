import React from "react";
import faker from "faker";

import { Button } from "src/button/button";

import { screen, render, fireEvent, waitFor } from "#/helpers/test-helpers";

const noop = (): null => null;

describe("Button Web", () => {
  test("renders text prop correctly.", () => {
    const text = faker.random.word();

    render(<Button onPress={noop} text={text} />);

    const button = screen.getByText(new RegExp(text, "i"));

    expect(button).toBeInTheDocument();
  });

  test("call onPress when pressed.", async () => {
    const text = faker.random.word();
    const onPress = jest.fn();

    render(<Button onPress={onPress} text={text} />);

    fireEvent.click(screen.getByText(text));

    await waitFor(() => {
      expect(onPress).toHaveBeenCalledTimes(1);
    });
  });
});
