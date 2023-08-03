// eslint-disable-next-line @typescript-eslint/no-var-requires,no-undef
const { generateTemplateFiles } = require('generate-template-files')
// const config = require('../package.json')
/*
 * Generate the model files
 * https://github.com/codeBelt/generate-template-files
 */
generateTemplateFiles([
  {
    option: 'Create Interface',
    defaultCase: '(pascalCase)',
    entry: {
      folderPath: './tools/templates/interface',
    },
    stringReplacers: ['__model__'],
    output: {
      path: './src/modules/models/',
      pathAndFileNameDefaultCase: '(pascalCase)',
      overwrite: true,
    },
  },
  {
    option: 'Create API',
    defaultCase: '(pascalCase)',
    entry: {
      folderPath: './tools/templates/api',
    },
    stringReplacers: ['__model__'],
    output: {
      path: './src/modules/models/',
      pathAndFileNameDefaultCase: '(pascalCase)',
      overwrite: true,
    },
  },
  {
    option: 'Create Model',
    defaultCase: '(pascalCase)',
    entry: {
      folderPath: './tools/templates/model',
    },
    stringReplacers: ['__model__'],
    output: {
      path: './src/modules/models/',
      pathAndFileNameDefaultCase: '(pascalCase)',
      overwrite: true,
    },
  },
  {
    option: 'Create Collection',
    defaultCase: '(pascalCase)',
    entry: {
      folderPath: './tools/templates/collection',
    },
    stringReplacers: ['__model__'],
    output: {
      path: './src/modules/models/',
      pathAndFileNameDefaultCase: '(pascalCase)',
      overwrite: true,
    },
  }
])
