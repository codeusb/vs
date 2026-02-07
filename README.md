# 前端代码编辑器应用

这是一个纯前端的 JavaScript/TypeScript 代码编辑器和运行时输出网站。

## 功能特点

- 左侧为代码编辑区，支持 JavaScript 和 TypeScript
- 右侧为终端输出区，显示代码执行结果
- 支持实时切换语言（JavaScript/TypeScript）
- 提供语法高亮和代码提示
- 点击 "Run Code" 按钮执行代码

## 技术栈

- React
- Monaco Editor
- TypeScript
- Vite

## 如何使用

1. 在左侧编辑器中编写 JavaScript 或 TypeScript 代码
2. 选择相应的编程语言
3. 点击 "Run Code" 按钮执行代码
4. 查看右侧终端中的输出结果

## 开发

```bash
# 安装依赖
pnpm install

# 启动开发服务器
pnpm dev

# 构建生产版本
pnpm build
```

## 部署到 GitHub Pages

要将此应用部署到 GitHub Pages，请参考 [GITHUB_PAGES_DEPLOYMENT.md](./GITHUB_PAGES_DEPLOYMENT.md) 文件中的详细说明。

## 本地预览构建

构建完成后，你可以使用以下命令预览生产版本：

```bash
pnpm preview
```

更多详细信息请参阅 EDITOR_README.md。
