import React from "react";

import { ErrorWrapper } from "src/errorWrapper/error-wrapper";

import { screen, render, fireEvent, waitFor } from "#/helpers/test-helpers";

const text = "No results in moment";
const description = "Please try again in other moments";
const textButton = "return to home";
const actionButton = jest.fn();

describe("ErrorWrapper Web", () => {
  test("renders ErrorWrapper prop correctly.", () => {
    render(
      <ErrorWrapper
        title={text}
        description={description}
        textButton={textButton}
        actionButton={actionButton}
      />
    );

    const erroText = screen.getByText(new RegExp(text, "i"));

    expect(erroText).toBeInTheDocument();
  });

  test("call actionButton when pressed.", async () => {
    render(
      <ErrorWrapper
        title={text}
        description={description}
        textButton={textButton}
        actionButton={actionButton}
      />
    );

    fireEvent.click(screen.getByText(textButton));

    await waitFor(() => {
      expect(actionButton).toHaveBeenCalledTimes(1);
    });
  });
});
