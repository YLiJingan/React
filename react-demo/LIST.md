使用create-react-app脚手架创建的项目工程。
create-react-app集成了webpack,生成的项目目录看不到webpack的配置文件。执行npm run eject使配置文件暴露出来，我们可以进行相关的配置。
1. 执行npm run eject报错,是git的问题
2. 配置webpack.config.dev.js webpack.config.prod.js 这两个文件没有抽出公共的配置
    SASS-loader：`npm install sass-loader node-sass --save-dev`
3. 配置代码检查工具，eslint.根目录下添加 eslintrc文件