import { defineConfig } from "eslint/config";

export default defineConfig([
	{
		files: ["**/*.js"],
		languageOptions: {
			ecmaVersion: "latest",
			sourceType: "module",
		},
		rules: {
			"no-console": "warn",
			"no-unused-vars": "warn",
			"semi": ["error", "always"],
			"quotes": ["error", "double"],
		},
	},
]);
