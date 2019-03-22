# koa-demo

#### 项目介绍 
koa-demo

## 文档位置
* doc 文件夹

数据库使用 typeorm

使用typescript编写的koa2示例，不包含 `view` 及 `session` 功能

## 使用前准备

- 开发工具建议使用 `VSCode`
- `VSCode` 插件请安装
    - TSLint

- 依赖请使用 `yarn` 进行管理和安装，[传送门](https://yarnpkg.com/zh-Hans)


- 全局安装 `typescript`
`nodemon`
`better-npm-run`
`tslint`
`gulp-cli`

    ```
    $ yarn global add typescript nodemon better-npm-run tslint gulp-cli
    ```

- 安装依赖包
    ```
    $ yarn install
    ```

## 如何使用

- #### 开发

    ```
    $ yarn run dev
    ```
    开发环境将会编译typescript代码到`dev`文件夹，默认运行`http://localhost:6896`站点进行浏览，同时会监视源代码改变自动进行重新编译并重新启动站点
    
    *可能会存在编译失败导致站点无法正确重启，请注意结束当前监视任务并重新运行*

- ### 调试

    ```
    $ yarn run compile
    ```
    运行以上命令进行编译后，使用`VSCode`的调试功能进行调试，同样会启动`http://localhost:6896`站点已供调试
    
    调试断点请打在`.ts`代码上。
    
- ### 编译生产环境
    ```
    $ yarn run build
    ```


## 建议
- JS相关类型的增强方法，在自行编写或度娘寻找前，建议查找 [`lodash`](http://lodashjs.com/docs/)
- Map、List、Stack 建议使用 [`ImmutableJS`](http://facebook.github.io/immutable-js/) 
- Koa 中向其他Web请求时，请使用 `isomorphic-fetch`（已加入依赖包），使用参考
    
    - [https://github.com/matthew-andrews/isomorphic-fetch](https://github.com/matthew-andrews/isomorphic-fetch)
    - [https://github.com/github/fetch](https://github.com/github/fetch) 1