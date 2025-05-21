# NPM设置淘宝镜像：

```bash
npm config set registry https://registry.npmmirror.com
npm config get registry
```


# NPM 查看安装了哪些包

#### npm 安装包的位置

当使用 npm 安装软件包时，可以执行两种安装类型：**本地安装** 和 **全局安装 。**

**本地安装：**

默认情况下，当输入 `npm install` 命令时，例如：

```bash
npm install lodash
```

软件包会被安装到当前文件树中的 `node_modules` 子文件下。在这种情况下，npm 还会在当前文件夹中存在的 `package.json` 文件的 `dependencies` 属性中添加 `lodash` 条目。

**全局安装：**

 使用 `-g` 标志可以执行全局安装

> npm install -g lodash

在这种情况下，npm 不会将软件包安装到本地文件夹下，而是使用全局的位置。

要找出全局位置，可以使用以下命令：

> npm root -g

**查看已安装的包：**

***查看全局已安装的包：***

> npm ls -g --depth 0  // 加上层级控制显示深度
>
> npm ls -g        // 查看全局已经安装，会把包的所有依赖也会显示出来（`-g` 的意思是 `gloabl` 全局的意思）

***查看项目中已安装的包：***

> npm ls  // 项目根目录必须有 `package.json` 文件
>
> npm ls --depth 0

***如果只想显示生产环境依赖的包：***

> npm ls --depth 0 --prod

***只显示开发环境依赖的包：***

> npm ls --depth 0 --dev
