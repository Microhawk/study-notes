const head = require('./config/head.js');
const plugins = require('./config/plugins.js');
const themeConfig = require('./config/themeConfig.js');

module.exports = {
  theme: require.resolve('../../theme'),
  title: "Eric's Study Notes",
  description: "Eric's 的学习笔记",
  // base: '/',
  markdown: {
    lineNumbers: true, // 代码行号
  },
  locales: {
    '/zh/': {
      lang: 'zh-CN',
      title: "Eric's Study Notes",
      description: "Eric's 的学习笔记",
    }
  },

  head,
  plugins,
  themeConfig,
}
