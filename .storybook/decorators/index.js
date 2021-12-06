import * as React from "react";
import { Provider, buildTheme, CssBaseline } from "@naturacosmeticos/natds-web";

const getTheme = (themeKey) => {
  const themesMap = {
    avonDark: { brand: "avon", mode: "dark" },
    avonLight: { brand: "avon", mode: "light" },
    naturaDark: { brand: "natura", mode: "dark" },
    naturaLight: { brand: "natura", mode: "light" },
    theBodyShopDark: { brand: "theBodyShop", mode: "dark" },
    theBodyShopLight: { brand: "theBodyShop", mode: "light" },
    aesopDark: { brand: "aesop", mode: "dark" },
    aesopLight: { brand: "aesop", mode: "light" },
    biomeLight: { brand: "biome", mode: "light" },
    biomeDark: { brand: "biome", mode: "dark" },
  };

  if (Object.keys(themesMap).includes(themeKey)) {
    return themesMap[themeKey];
  }

  return themesMap.naturaLight;
};

export const ThemeProviderDecorator = (Story, context) => {
  const { brand, mode } = getTheme(context.globals.theme);
  const theme = buildTheme(brand, mode, context.globals.custom);

  return (
    <Provider theme={theme}>
      <CssBaseline />
      <Story {...context} />
    </Provider>
  );
};

export default ThemeProviderDecorator;
