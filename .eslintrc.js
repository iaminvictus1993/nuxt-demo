module.exports = {
  root: true,
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true
  },
  // https://github.com/standard/standard/blob/master/docs/RULES-en.md
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  rules: {

    // 空格四格
    indent: ['error', 4],

    // 函数名与括号之间不需要空格
    'space-before-function-paren': ['error', 'never'],

    // 必须使用单引号
    'quotes': ['error', 'single'],
    
    // 要求注释前面需要有空行
    'lines-around-comment': ['error', {
      'beforeBlockComment': true,
      'beforeLineComment': true
    }]
  },
  globals: {}
}
