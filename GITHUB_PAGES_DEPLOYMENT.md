# 部署到 GitHub Pages

要将此代码编辑器应用部署到 GitHub Pages，请按照以下步骤操作：

## 1. 推送到 GitHub

首先，将你的项目推送到 GitHub 仓库：

```bash
# 初始化 git 仓库（如果还没有）
git init

# 添加所有文件
git add .

# 提交更改
git commit -m "Initial commit"

# 添加远程仓库（将 YOUR_USERNAME 和 REPO_NAME 替换为你的 GitHub 用户名和仓库名）
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git

# 推送到 GitHub
git branch -M main
git push -u origin main
```

## 2. 配置 GitHub Pages

1. 在 GitHub 上打开你的仓库
2. 点击 "Settings" 选项卡
3. 在左侧菜单中，向下滚动并点击 "Pages"
4. 在 "Source" 部分，从下拉菜单中选择 "Deploy from a branch"
5. 选择 `main` 分支和 `/docs` 文件夹，或者选择 `gh-pages` 分支
6. 点击 "Save"

## 3. 部署到 GitHub Pages

有两种方式可以部署：

### 方式一：使用 gh-pages 包（推荐）

```bash
# 构建项目
npm run build

# 部署到 GitHub Pages
npm run deploy
```

注意：首次运行时，你可能需要配置 git 用户信息：
```bash
git config --global user.name "YOUR_USERNAME"
git config --global user.email "YOUR_EMAIL@example.com"
```

### 方式二：手动部署

1. 将 `dist` 目录中的内容复制到仓库的 `docs` 文件夹中
2. 提交并推送更改

```bash
# 复制构建文件到 docs 目录
mkdir -p docs
cp -r dist/* docs/

# 提交更改
git add .
git commit -m "Add built files for GitHub Pages"
git push origin main
```

## 4. 访问你的应用

部署完成后，你的应用将在以下 URL 可用：
`https://YOUR_USERNAME.github.io/REPO_NAME`

例如，如果用户名是 `exampleuser`，仓库名是 `vs`，则 URL 为：
`https://exampleuser.github.io/vs`

## 注意事项

- 确保在 `vite.config.ts` 中的 `base` 选项与你的仓库名称匹配
- 如果你的仓库名称不是 `vs`，请将 `vite.config.ts` 中的 `base: '/vs'` 更改为 `base: '/YOUR_REPO_NAME'`
- GitHub Pages 需要几分钟时间来部署新版本
- 如果遇到问题，请检查控制台错误和网络请求