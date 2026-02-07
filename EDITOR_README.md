# 前端代码编辑器应用

这是一个纯前端的 JavaScript/TypeScript 代码编辑器和运行时输出网站，具有以下特性：

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

## 注意事项

- 由于是在浏览器中运行，某些 Node.js 特定功能不可用
- TypeScript 代码会经过简化处理以移除类型注解，然后作为 JavaScript 执行
- 为了安全起见，执行的代码被限制在沙箱环境中

## 开发

```bash
# 安装依赖
pnpm install

# 启动开发服务器
pnpm dev

# 构建生产版本
pnpm build
```

## 示例代码

你可以尝试以下示例代码：

### JavaScript 示例
```javascript
console.log("Hello, JavaScript!");
const arr = [1, 2, 3];
console.log(arr.map(x => x * 2));
```

### TypeScript 示例
```typescript
interface Person {
  name: string;
  age: number;
}

const person: Person = { name: "Alice", age: 30 };
console.log(person);
```