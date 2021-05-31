import React from "react";
import faker from "faker";

import { View } from "src/view/view";
import { Text } from "src/text/text";

import { render, screen } from "#/helpers/test-helpers";

describe("View Web", () => {
  test("renders child correctly.", () => {
    const text = faker.random.word();

    render(
      <View testID="view">
        <Text>{text}</Text>
      </View>
    );

    const view = screen.getByTestId("view");
    const textComponent = screen.getByText(text);

    expect(view).toContainElement(textComponent);
  });
});
