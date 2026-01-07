const gts = require('gts');
const globals = require('globals');

module.exports = [
    ...gts,
    {
        languageOptions: {
            globals: {
                ...globals.node,
            },
        },
    },
    {
        files: ['**/*.js', '**/*.cjs'],
        languageOptions: {
            sourceType: 'commonjs',
            globals: {
                ...globals.node,
            },
        },
    },
    {
        ignores: ['build/', 'vitest.config.ts', 'eslint.config.js'],
    },
];
