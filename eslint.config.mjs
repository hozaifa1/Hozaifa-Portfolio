import next from "eslint-config-next";

const eslintConfig = [
  {
    ignores: [".next/*", "node_modules/*"],
  },
  ...next,
  {
    rules: {
      "react-hooks/purity": "off",
    },
  },
];

export default eslintConfig;
