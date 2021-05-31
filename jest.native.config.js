module.exports = {
  preset: "react-native",
  transform: {
    "^.+\\.js$": "<rootDir>/node_modules/react-native/jest/preprocessor.js",
    "^.+\\.tsx?$": "ts-jest"
  },
  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.json"
    }
  },
  testRegex: "(tests/.*spec.native)\\.(ts|tsx)$",
  moduleDirectories: ["<rootDir>/src", "node_modules", "<rootDir>/tests"],
  setupFilesAfterEnv: ["./tests/setup.native.js"],
  moduleNameMapper: {
    "^src/(.*)$": "<rootDir>/src/$1",
    "^#/(.*)$": "<rootDir>/tests/$1",
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|css)$":
      "identity-obj-proxy",
    "^react$": "<rootDir>/node_modules/react",
    "^styled-components$": "<rootDir>/node_modules/styled-components",
    "^styled-components/native$":
      "<rootDir>/node_modules/styled-components/native",
    "^@naturacosmeticos/natds-rn$":
      "<rootDir>/node_modules/@naturacosmeticos/natds-rn"
  }
};
