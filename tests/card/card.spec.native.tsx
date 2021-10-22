import React from "react";
import faker from "faker";

import {Card} from 'src/card/card.native';
import { View } from "src/view/view.native";
import { Text } from "src/text/text.native";

import { render } from "#/helpers/test-helpers.native";

describe("Card Native", () => {
  test("renders child correctly.", () => {
    const text = faker.random.word();

    const { getByTestId, getByA11yLabel } = render(
      <Card testID="card">
        <View testID="view">
          <Text testID={text}>{text}</Text>
        </View>
      </Card>

    );

    const card = getByTestId("card");
    const viewComponent = getByA11yLabel("view");

    expect(card).toContainElement(viewComponent);
  });
});
