import { FlatCompat } from '@eslint/eslintrc'
import js from '@eslint/js'
import eslintPluginUnusedImports from 'eslint-plugin-unused-imports'
import path from 'path'
import { fileURLToPath } from 'url'
import 'dotenv/config'

const __filename = fileURLToPath(import.meta.url) // get the resolved path to the file
const __dirname = path.dirname(__filename) // get the name of the directory

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended
})

export default [
  js.configs.recommended,
  ...compat.extends(
    'plugin:vue/vue3-essential',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting',
  ),
  { plugins: {
    // '@typescript-eslint',
    'unused-imports': eslintPluginUnusedImports
  }},
  { languageOptions: { parserOptions: { ecmaVersion: 'latest' }}},
  {
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      // this rule, if on, would require explicit return type on the `render` function
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/semi': ['warn', 'never'],

      // in plain CommonJS modules, you can't use `import foo = require('foo')` to pass this rule, so it has to be disabled
      '@typescript-eslint/no-var-requires': 'warn',
      '@typescript-eslint/no-this-alias': 'error',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          'vars': 'all',
          'varsIgnorePattern': '^_',
          'args': 'after-used',
          'argsIgnorePattern': '^_'
        }
      ],

      // 'brace-style': [2, 'stroustrup', { allowSingleLine: true }],
      'unused-imports/no-unused-imports': 'warn',

      // allow async-await
      'generator-star-spacing': ['error', { before: true, after: false }],
      // allow paren-less arrow functions
      'arrow-parens': 'off',
      'one-var': 'off',
      '@typescript-eslint/object-curly-spacing': ['warn', 'always', { 'arraysInObjects': false, 'objectsInObjects': false }],
      'object-curly-spacing': ['warn', 'always', { 'arraysInObjects': false, 'objectsInObjects': false }],

      'array-bracket-spacing': ['warn', 'never'],
      'computed-property-spacing': ['warn', 'always'],

      '@typescript-eslint/comma-spacing': ['warn', { 'before': false, 'after': true }],
      'comma-spacing': ['warn', { 'before': false, 'after': true }],

      'space-in-parens': ['warn', 'never'],

      'default-case-last': 'warn',
      'dot-notation': 'warn',

      'arrow-spacing': ['warn', { 'before': true, 'after': true }],
      'block-spacing': 'warn',
      'key-spacing': ['warn', { 'beforeColon': false, 'afterColon': true }],
      'no-multi-spaces': 'warn',
      'space-before-function-paren': ['warn', { 'anonymous': 'always', 'named': 'never', 'asyncArrow': 'always' }],
      'template-curly-spacing': 'warn',

      'import/first': 'off',
      // 'import/named': 'error',
      // 'import/namespace': 'error',
      // 'import/default': 'error',
      // 'import/export': 'error',
      'import/extensions': 'off',
      'import/no-unresolved': 'off',
      'import/no-extraneous-dependencies': 'off',
      'prefer-promise-reject-errors': 'error',

      // allow debugger during development only
      // eslint-disable-next-line no-undef
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',

      // My Custom
      'sort-imports': [
        'error',
        {
          ignoreCase: true,
          ignoreDeclarationSort: true,
          ignoreMemberSort: false,
          memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
          allowSeparatedGroups: false,
        },
      ],
      'vue/html-indent': [
        'error',
        2,
        {
          attribute: 1,
          baseIndent: 1,
          closeBracket: 0,
          alignAttributesVertically: true,
          ignores: [],
        },
      ],

      'indent': ['warn', 2],

      'vue/html-quotes': ['error', 'single', { avoidEscape: true }],
      'quotes': ['warn', 'single', { 'avoidEscape': true }],
      'vue/component-options-name-casing': ['error', 'PascalCase'],
      'vue/html-comment-content-spacing': ['error', 'always'],
      'vue/no-this-in-before-route-enter': ['error'],
      'vue/no-unused-properties': [
        'error',
        {
          groups: ['props'],
          deepData: false,
          ignorePublicMembers: false,
        },
      ],
      'vue/padding-line-between-blocks': ['error', 'always'],
      'vue/component-definition-name-casing': ['error', 'PascalCase'],
      'vue/no-multi-spaces': [
        'error',
        {
          ignoreProperties: true,
        },
      ],
      'vue/prop-name-casing': ['error', 'camelCase'],
      'vue/v-bind-style': ['error', 'shorthand'],
      'vue/v-on-style': ['error', 'shorthand'],
      'vue/v-slot-style': [
        'error',
        {
          atComponent: 'longform',
          default: 'longform',
          named: 'longform',
        },
      ],
      'vue/mustache-interpolation-spacing': ['error', 'always'],
      'vue/no-spaces-around-equal-signs-in-attribute': ['error'],
      'vue/v-on-event-hyphenation': [
        'error',
        'always',
        {
          autofix: true,
          ignore: [],
        },
      ],
      'vue/order-in-components': [
        'error',
        {
          order: [
            'el',
            'name',
            'key',
            'parent',
            'functional',
            ['delimiters', 'comments'],
            ['components', 'directives', 'filters'],
            'extends',
            'mixins',
            ['provide', 'inject'],
            'ROUTER_GUARDS',
            'layout',
            'middleware',
            'validate',
            'scrollToTop',
            'transition',
            'loading',
            'inheritAttrs',
            'model',
            ['props', 'propsData'],
            'emits',
            'setup',
            'asyncData',
            'data',
            'fetch',
            'head',
            'computed',
            'watch',
            'watchQuery',
            'LIFECYCLE_HOOKS',
            'methods',
            ['template', 'render'],
            'renderError',
          ],
        },
      ],
      'vue/this-in-template': ['error', 'never'],
      'vue/attributes-order': [
        'error',
        {
          order: [
            'DEFINITION',
            'LIST_RENDERING',
            'CONDITIONALS',
            'RENDER_MODIFIERS',
            'GLOBAL',
            ['UNIQUE', 'SLOT'],
            'TWO_WAY_BINDING',
            'OTHER_DIRECTIVES',
            'OTHER_ATTR',
            'EVENTS',
            'CONTENT',
          ],
          alphabetical: true,
        },
      ],
      'vue/html-closing-bracket-spacing': [
        'error',
        {
          startTag: 'never',
          endTag: 'never',
          selfClosingTag: 'always',
        },
      ],
      'vue/component-tags-order': [
        'error',
        {
          order: [['template', 'script'], 'style'],
        },
      ],
      'vue/max-attributes-per-line': [
        'error',
        {
          singleline: {
            max: 10,
          },
          multiline: {
            max: 1,
          },
        },
      ],
      'vue/valid-v-for': 0,
    },
  },
  {
    files: ['**/*.vue', '**/*.js', '**/*.jsx', '**/*.cjs', '**/*.mjs', '**/*.ts', '**/*.tsx', '**/*.cts', '**/*.mts', '**/*.d.ts', '**/*.cy.{js,jsx,ts,tsx}']
  },
  {
    ignores: ['.gitignore']
  }
]
