import "@naturacosmeticos/natds-icons/dist/natds-icons.css";
import { ThemeProviderDecorator } from "./decorators";

export { globalTypes } from "./globalTypes";

export const decorators = [ThemeProviderDecorator];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
    expanded: true,
  },
};
