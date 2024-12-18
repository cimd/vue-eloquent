import js from '@eslint/js'
import stylisticJs from '@stylistic/eslint-plugin-js'
import vitest from '@vitest/eslint-plugin'
import prettierSkipFormatting from '@vue/eslint-config-prettier/skip-formatting'
import vueTsEslintConfig from '@vue/eslint-config-typescript'
import pluginVue from 'eslint-plugin-vue'
import globals from 'globals'

export default [
  {
    /**
     * Ignore the following files.
     * Please note that pluginQuasar.configs.recommended already ignores
     * the "node_modules" folder for you (and all other Quasar project
     * relevant folders and files).
     *
     * ESLint requires "ignores" key to be the only one in this object
     */
    // ignores: []
    files: ['**/*.js', '**/*.ts', '**/*.vue']
  },

  // ...pluginQuasar.configs.recommended(),
  js.configs.recommended,

  /**
   * https://eslint.vuejs.org
   *
   * pluginVue.configs.base
   *   -> Settings and rules to enable correct ESLint parsing.
   * pluginVue.configs[ 'flat/essential']
   *   -> base, plus rules to prevent errors or unintended behavior.
   * pluginVue.configs["flat/strongly-recommended"]
   *   -> Above, plus rules to considerably improve code readability and/or dev experience.
   * pluginVue.configs["flat/recommended"]
   *   -> Above, plus rules to enforce subjective community defaults to ensure consistency.
   */
  ...pluginVue.configs['flat/recommended'],

  // https://github.com/vuejs/eslint-config-typescript
  ...vueTsEslintConfig({
    // Optional: extend additional configurations from typescript-eslint'.
    // Supports all the configurations in
    // https://typescript-eslint.io/users/configs#recommended-configurations
    extends: [
      // By default, only the recommended rules are enabled.
      'recommended',
      // You can also manually enable the stylistic rules.
      'stylistic'

      // Other utility configurations, such as 'eslintRecommended', (note that it's in camelCase)
      // are also extendable here. But we don't recommend using them directly.
    ]
  }),

  {
    plugins: {
      '@stylistic/js': stylisticJs
    },
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',

      globals: {
        ...globals.browser,
        ...globals.node, // SSR, Electron, config files
        process: 'readonly', // process.env.*
        ga: 'readonly', // Google Analytics
        cordova: 'readonly',
        Capacitor: 'readonly',
        chrome: 'readonly', // BEX related
        browser: 'readonly' // BEX related
      }
    },

    // add your custom rules here
    rules: {
      'prefer-promise-reject-errors': 'warn',
      '@typescript-eslint/consistent-type-imports': ['error', { prefer: 'type-imports' }],
      '@typescript-eslint/no-explicit-any': 'off',
      // this rule, if on, would require explicit return type on the `render` function
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@stylistic/js/semi': ['warn', 'never'],

      // in plain CommonJS modules, you can't use `import foo = require('foo')` to pass this rule, so it has to be disabled
      '@typescript-eslint/no-var-requires': 'warn',
      '@typescript-eslint/no-this-alias': 'error',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_'
        }
      ],
      '@typescript-eslint/no-unused-expressions': 'warn',
      '@typescript-eslint/no-require-imports': 'warn',
      // 'unused-imports/no-unused-imports': 'warn',

      // allow async-await
      'generator-star-spacing': ['error', { before: true, after: false }],
      // allow paren-less arrow functions
      'arrow-parens': 'off',
      'one-var': 'off',
      '@stylistic/js/object-curly-spacing': [
        'warn',
        'always',
        { arraysInObjects: false, objectsInObjects: false }
      ],
      'object-curly-spacing': [
        'warn',
        'always',
        { arraysInObjects: false, objectsInObjects: false }
      ],

      'array-bracket-spacing': ['warn', 'never'],
      'computed-property-spacing': ['warn', 'always'],

      '@stylistic/js/comma-spacing': ['warn', { before: false, after: true }],
      'comma-spacing': ['warn', { before: false, after: true }],

      'space-in-parens': ['warn', 'never'],
      'default-case-last': 'warn',
      'dot-notation': 'warn',

      'arrow-spacing': ['warn', { before: true, after: true }],
      'block-spacing': 'warn',
      'key-spacing': ['warn', { beforeColon: false, afterColon: true }],
      'no-multi-spaces': 'warn',
      'space-before-function-paren': [
        'warn',
        { anonymous: 'always', named: 'never', asyncArrow: 'always' }
      ],
      'template-curly-spacing': 'warn',
      'import/first': 'off',
      // 'import/named': 'error',
      // 'import/namespace': 'error',
      // 'import/default': 'error',
      // 'import/export': 'error',
      'import/extensions': 'off',
      'import/no-unresolved': 'off',
      'import/no-extraneous-dependencies': 'off',

      // allow debugger during development only
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',

      // My Custom
      'sort-imports': [
        'error',
        {
          ignoreCase: true,
          ignoreDeclarationSort: true,
          ignoreMemberSort: false,
          memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
          allowSeparatedGroups: false
        }
      ],
      'vue/html-indent': [
        'error',
        2,
        {
          attribute: 1,
          baseIndent: 1,
          closeBracket: 0,
          alignAttributesVertically: true,
          ignores: []
        }
      ],

      indent: ['warn', 2],

      'vue/html-quotes': ['error', 'single', { avoidEscape: true }],
      quotes: ['warn', 'single', { avoidEscape: true }],
      'vue/component-options-name-casing': ['error', 'PascalCase'],
      'vue/html-comment-content-spacing': ['error', 'always'],
      'vue/no-this-in-before-route-enter': ['error'],
      'vue/no-unused-properties': [
        'error',
        {
          groups: ['props'],
          deepData: false,
          ignorePublicMembers: false
        }
      ],
      'vue/padding-line-between-blocks': ['error', 'always'],
      'vue/component-definition-name-casing': ['error', 'PascalCase'],
      'vue/no-multi-spaces': [
        'error',
        {
          ignoreProperties: true
        }
      ],
      'vue/prop-name-casing': ['error', 'camelCase'],
      'vue/v-bind-style': ['error', 'shorthand'],
      'vue/v-on-style': ['error', 'shorthand'],
      'vue/v-slot-style': [
        'error',
        {
          atComponent: 'longform',
          default: 'longform',
          named: 'longform'
        }
      ],
      'vue/mustache-interpolation-spacing': ['error', 'always'],
      'vue/no-spaces-around-equal-signs-in-attribute': ['error'],
      'vue/v-on-event-hyphenation': [
        'error',
        'always',
        {
          autofix: true,
          ignore: []
        }
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
            'renderError'
          ]
        }
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
            'CONTENT'
          ],
          alphabetical: true
        }
      ],
      'vue/html-closing-bracket-spacing': [
        'error',
        {
          startTag: 'never',
          endTag: 'never',
          selfClosingTag: 'always'
        }
      ],
      'vue/component-tags-order': [
        'error',
        {
          order: [['template', 'script'], 'style']
        }
      ],
      'vue/max-attributes-per-line': [
        'error',
        {
          singleline: {
            max: 5
          },
          multiline: {
            max: 1
          }
        }
      ],
      'vue/valid-v-for': 0
    }
  },
  {
    files: ['**/*.vitest.test.js'],
    plugins: {
      vitest
    },
    rules: {
      ...vitest.configs.recommended.rules,
      '@typescript-eslint/no-explicit-any': 'off',
      'vitest/no-commented-out-tests': 'warn'
    }
  },
  {
    files: ['src-pwa/custom-service-worker.ts'],
    languageOptions: {
      globals: {
        ...globals.serviceworker
      }
    }
  },

  prettierSkipFormatting
]
