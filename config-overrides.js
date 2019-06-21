const { override, fixBabelImports, addLessLoader } = require('customize-cra');
const path = require('path');

// const defaultLess = require('./src/styles/default.less');
module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true
  }),
  addLessLoader({
    modifyVars: {
      'ant-theme-file': `; @import '${path.resolve(__dirname, './src/styles/default.less')}'`
    },
    javascriptEnabled: true
  })
);
