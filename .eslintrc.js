module.exports = {
  root: true,
  extends: ["eslint:recommended", "plugin:react/recommended"],
  parserOptions: {
    project: "tsconfig.json",
    tsconfigRootDir: __dirname,
    sourceType: "module",
    ecmaVersion: 2015,
  },
  settings: {
    next: {
      rootDir: ["."],
    },
  },
  rules: {
    "react/react-in-jsx-scope": "off",
    "react/jsx-uses-react": "off",
  },
};
