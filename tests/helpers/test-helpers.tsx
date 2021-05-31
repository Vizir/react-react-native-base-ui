import React from "react";
import { render, RenderOptions, RenderResult } from "@testing-library/react";
import { Provider, themes } from "@naturacosmeticos/natds-web";

interface CustomRender {
  <T>(ui: React.ReactElement<T>, options?: RenderOptions): RenderResult;
}

const WithTheme = ({ children }: {children: React.ReactNode}): React.ReactElement => (
  <Provider theme={themes.natura.light}>{children}</Provider>
);

const customRender: CustomRender = (ui, options) =>
  render(ui, { wrapper: WithTheme as React.FC, ...options });

export * from "@testing-library/react";

export { customRender as render };
