import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    ignores: ["node_modules/"],
  },
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    rules: {
      "react/no-unescaped-entities": "off", // 따옴표 관련 경고 끄기
    },
  },
];

export default eslintConfig;
