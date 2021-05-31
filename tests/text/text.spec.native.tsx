import React from "react";
import faker from "faker";

import { Text } from "src/text/text.native";

import { render } from "#/helpers/test-helpers.native";

describe("Text Native", () => {
  test("renders correctly.", () => {
    const text = faker.random.word();

    const { getByText } = render(<Text>{text}</Text>);

    const textComponent = getByText(new RegExp(text, "i"));

    expect(textComponent).toBeDefined();
  });
});
