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

    'no-unused-vars': 0,

    // 关闭命名检测
    'vue/multi-word-component-names': 'off',

    'prettier/prettier': [
      'error',
      {
        semi: false,
        htmlWhitespaceSensitivity: 'ignore', //对HTML全局空白不敏感
        vueIndentScriptAndStyle: false, //不对vue中的script及style标签缩进
        singleAttributePerLine: true,
        endOfLine: 'auto',

        singleQuote: true, // 保持单引号
        quoteProps: 'as-needed', // 按需使用引号
        useTabs: false
      }
    ]
  },
  settings: {
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
