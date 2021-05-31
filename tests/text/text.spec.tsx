import React from "react";
import faker from "faker";

import { Text } from "src/text/text";

import { render, screen } from "#/helpers/test-helpers";

describe("Text Web", () => {
  test("renders correctly.", () => {
    const text = faker.random.word();

    render(<Text>{text}</Text>);

    const textComponent = screen.getByText(new RegExp(text, "i"));

    expect(textComponent).toBeDefined();
  });
});
