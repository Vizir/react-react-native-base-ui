import React from "react";
import {
  render,
  RenderOptions,
  RenderAPI,
} from "@testing-library/react-native";
import { ThemeProvider } from "styled-components/native";
import { buildTheme } from "@naturacosmeticos/natds-rn";

interface CustomRender {
  <T>(ui: React.ReactElement<T>, options?: RenderOptions): RenderAPI;
}

const WithTheme = ({ children }: {children: React.ReactNode}): React.ReactElement => (
  <ThemeProvider theme={buildTheme("natura", "dark")}>{children}</ThemeProvider>
);

const customRender: CustomRender = (ui, options) =>
  render(ui, { wrapper: WithTheme, ...options });

export * from "@testing-library/react-native";

export { customRender as render };
