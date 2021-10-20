import React from "react";
import faker from "faker";

import {Card} from 'src/card/card';
import { View } from "src/view/view";
import { Text } from "src/text/text";

import { render, screen } from "#/helpers/test-helpers";

describe("Card Web", () => {
  test("renders child correctly.", () => {
    const text = faker.random.word();

    render(
      <Card testID="card">
        <View testID="view">
          <Text testID={text}>{text}</Text>
        </View>
      </Card>

    );

    const view = screen.getByTestId("view");
    const textComponent = screen.getByText(text);

    expect(view).toContainElement(textComponent);
  });
});
