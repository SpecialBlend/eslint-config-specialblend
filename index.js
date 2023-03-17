module.exports = {
  "extends": [
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking"
  ],
  "parserOptions": {
    "project": [
      "tsconfig.json"
    ]
  },
  "plugins": [
    "import",
    "prettier"
  ],
  "rules": {
    "camelcase": "off",
    "@typescript-eslint/no-redeclare": "warn",
    "@typescript-eslint/no-shadow": "warn",
    "@typescript-eslint/consistent-type-imports": [
      "error",
      {
        "prefer": "type-imports"
      }
    ],
    "prettier/prettier": [
      "error",
      {
        "singleQuote": false,
        "trailingComma": "all"
      }
    ],
    "import/order": [
      2,
      {
        "groups": [
          "type",
          "external",
          "builtin",
          "internal",
          "parent",
          "sibling",
          "index",
          "object",
          "unknown"
        ],
        "pathGroups": [
          {
            "pattern": ".*/__mocks__/**",
            "group": "unknown",
            "position": "after"
          },
          {
            "pattern": ".*/config**",
            "group": "object",
            "position": "after"
          }
        ],
        "newlines-between": "always",
        "alphabetize": {
          "order": "desc",
          "caseInsensitive": true
        }
      }
    ]
  }
}
