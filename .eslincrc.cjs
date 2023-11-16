module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        "plugin:@next/next/recommended",
        "plugin:react/recommended",
        "plugin:prettier/recommended",
        "prettier",
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: "module",
    },
    plugins: ["react", "prettier", "unused-imports"],
    rules: {
        "react/jsx-uses-react": "off",
        "unused-imports/no-unused-imports": "warn",
        "unused-imports/no-unused-vars": [
            "warn",
            {
                vars: "all",
                varsIgnorePattern: "^_",
                args: "after-used",
                argsIgnorePattern: "^_",
            },
        ],
        "react/react-in-jsx-scope": "off",
        "react/prop-types": 0,
        "react/jsx-no-target-blank": 0,
        "react/no-unknown-property": ["error", { ignore: ["jsx"] }],
        quotes: [2, "single", { avoidEscape: true }],
        "prettier/prettier": [
            "warn",
            {
                singleQuote: true,
                semi: true,
            },
        ],
    },
    settings: {
        react: {
            version: "detect",
        },
    },
};
