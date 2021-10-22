import React from "react";
import faker from "faker";

import { View } from "src/view/view.native";
import { Text } from "src/text/text.native";

import { render } from "#/helpers/test-helpers.native";

describe("View Native", () => {
  test("renders child correctly.", () => {
    const text = faker.random.word();

    const { getByA11yLabel } = render(
      <View testID="view">
        <Text testID={text}>{text}</Text>
      </View>
    );

    const view = getByA11yLabel("view");
    const textComponent = getByA11yLabel(text);

    expect(view).toContainElement(textComponent);
  });
});
