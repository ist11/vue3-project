/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,

  env: {
    node: true // 添加 Node.js 环境
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-prettier/skip-formatting',
    //下面两个是设置eslint-plugin-import的
    'plugin:import/errors',
    'plugin:import/warnings'
  ],
  //这个也是设置eslint-plugin-import的
  plugins: ['import'],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',

    //关闭prettier
    // 'prettier/prettier': 'off',

    //单引号
    // 允许字符串中使用转义字符
    quotes: ['error', 'single', { avoidEscape: true }],
    // 代码尾部不使用分号（`never`，或使用 `always`），否则将会抛出错误
    semi: ['error', 'never'],

    /**
     * 'no-unused-vars': 这是 ESLint 中的一个规则，用来检测代码中声明了但没有使用的变量。
     *  未使用的变量通常是代码中冗余的部分，可能会导致代码混乱或性能问题。
     *  0: 这个值表示关闭这个规则的检查。在 ESLint 配置中：
     *  0 表示禁用该规则。
     *  1 或 'warn' 表示将其设置为警告。
     *  2 或 'error' 表示将其设置为错误（即代码检查失败）。 */
    'no-unused-vars': 0,

    // 关闭命名检测
    'vue/multi-word-component-names': 'off',

    'prettier/prettier': [
      'error',
      {
        // 代码尾部不使用分号
        semi: false,
        //对HTML全局空白不敏感
        htmlWhitespaceSensitivity: 'ignore',
        //不对vue中的script及style标签缩进
        vueIndentScriptAndStyle: false,
        singleAttributePerLine: true,
        endOfLine: 'auto',
        // 保持单引号
        singleQuote: true,
        // 按需使用引号
        quoteProps: 'as-needed',
        //不使用tab符号,会把tab转化成空格
        useTabs: false
      }
    ]
  },
  settings: {
    //eslint-import-resolver-alias的配置项
    'import/resolver': {
      alias: {
        //设置路径别名
        map: [['@', './src']]
        //vite官方不推荐忽略文件拓展名，不搞喽
        //设置以下三种文件可以忽略文件拓展名
        // extensions: ['.js', '.vue', '.json']
      },
      //调整模块解析行为， extends中的plugin:import/errors会对node:url这种node环境的属性报错，需要设置这个属性
      node: {
        extensions: ['.js', '.json']
      }
    }
  }
}
