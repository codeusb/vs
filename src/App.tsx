import { useState, useRef } from 'react';
import Editor from '@monaco-editor/react';
import './App.css';

// 定义 TerminalOutput 组件
const TerminalOutput = ({ output }: { output: string[] }) => {
  const outputEndRef = useRef<HTMLDivElement>(null);

  // 自动滚动到底部
  const scrollToBottom = () => {
    outputEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // 每次输出更新时滚动到底部
  useState(() => {
    scrollToBottom();
  });

  return (
    <div className="terminal-container">
      <div className="terminal-header">
        <span>Terminal Output</span>
      </div>
      <div className="terminal-output">
        {output.map((line, index) => (
          <div key={index} className="terminal-line">
            {line}
          </div>
        ))}
        <div ref={outputEndRef} />
      </div>
    </div>
  );
};

function App() {
  const [code, setCode] = useState<string>('console.log("Hello, World!");\n// Write your JavaScript/TypeScript code here');
  const [output, setOutput] = useState<string[]>([]);
  const [language, setLanguage] = useState<'javascript' | 'typescript'>('javascript');

  const handleEditorChange = (value: string | undefined) => {
    if (value !== undefined) {
      setCode(value);
    }
  };

  const executeCode = async () => {
    try {
      // 清空之前的输出
      setOutput([]);

      // 重定向 console.log 到我们的终端
      const originalLog = console.log;
      const newOutput: string[] = [];

      console.log = (...args) => {
        newOutput.push(args.map(arg =>
          typeof arg === 'object' ? JSON.stringify(arg) : String(arg)
        ).join(' '));

        setOutput(prev => [...prev, ...newOutput.slice(prev.length)]);
      };

      // 如果是 TypeScript 代码，需要先编译成 JavaScript
      let jsCode = code;
      if (language === 'typescript') {
        // 在浏览器环境中，我们不能直接使用 tsc，所以这里只是简单地移除类型注解
        // 实际上，在生产环境中，你可能需要引入 TypeScript 编译器库
        jsCode = removeTypeScriptTypes(code);
      }

      // 执行代码
      new Function(jsCode)();

      // 恢复原始 console.log
      console.log = originalLog;
    } catch (error: any) {
      setOutput([`Error: ${error.message || error}`]);
    }
  };

  // 简单的 TypeScript 类型移除函数（实际应用中应使用 TypeScript 编译器）
  const removeTypeScriptTypes = (tsCode: string): string => {
    // 这是一个简化的版本，实际的 TypeScript 转换需要更复杂的逻辑
    // 在实际项目中，你可能需要使用像 ts.transpile 或者引入 TypeScript 编译器
    return tsCode
      // 移除类型注解，如 :string, :number, :boolean 等
      .replace(/:\s*(string|number|boolean|any|void|\{\}|Array<[^>]+>|[^,;]+)\s*([,\)])/g, '$2')
      // 移除接口和类型定义
      .replace(/(interface|type)\s+\w+\s+[^;}]*(\}|;)/g, '')
      // 移除 import type 语句
      .replace(/import\s+type\s+[^;]+;/g, '')
      // 移除 export 关键字（保留导出的内容）
      .replace(/export\s+(default\s+)?/g, '');
  };

  return (
    <div className="app-container">
      <div className="editor-container">
        <div className="editor-header">
          <span>Code Editor</span>
          <div className="language-selector">
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value as 'javascript' | 'typescript')}
            >
              <option value="javascript">JavaScript</option>
              <option value="typescript">TypeScript</option>
            </select>
          </div>
        </div>
        <Editor
          height="calc(100% - 60px)"
          language={language}
          value={code}
          onChange={handleEditorChange}
          theme="vs-dark"
          options={{
            minimap: { enabled: false },
            fontSize: 14,
            scrollBeyondLastLine: false,
            automaticLayout: true,
            tabSize: 2,
          }}
        />
        <div className="editor-controls">
          <button onClick={executeCode}>Run Code</button>
        </div>
      </div>
      <TerminalOutput output={output} />
    </div>
  );
}

export default App;
