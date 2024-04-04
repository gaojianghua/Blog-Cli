// .eslintrc.js

process.env.ESLINT_TSCONFIG = 'tsconfig.json';

module.exports = {
    env: {
        browser: true,
        es2022: true
    },
    extends: [
        'plugin:prettier/recommended',
        'plugin:vue/recommended', // Changed to support Vue 2 and Vue 3
        'plugin:@typescript-eslint/recommended',
        'plugin:nuxt/recommended',
        'plugin:tailwindcss/recommended'
    ],
    parserOptions: {
        ecmaVersion: 2023, // Updated ECMAScript version
        parser: '@typescript-eslint/parser',
        sourceType: 'module'
    },
    plugins: ['@typescript-eslint', 'tailwindcss'],
    rules: {
        indent: ['error', 4],
        '@typescript-eslint/no-unused-vars': 'off',
        'tailwindcss/no-custom-classname': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        'vue/multi-word-component-names': 0,
        'vue/singleline-html-element-content-newline': 'off',
        'vue/multiline-html-element-content-newline': 'off',
        'vue/max-attributes-per-line': 0,
        'no-console': 'off',
        'no-debugger': 'off',
        // Remove conflicting rules with Prettier
        'prettier/prettier': 'off',
        'vue/html-indent': [
            'error',
            4,
            {
                attribute: 1,
                baseIndent: 1,
                closeBracket: 0,
                alignAttributesVertically: true,
                ignores: []
            }
        ]
    },
    settings: {
        tailwindcss: {
            includeLanguages: ['html', 'vue', 'js', 'jsx', 'tsx'] // Specify which file types Tailwind CSS should be checked against
        }
    }
};
