"use client";

import React, { useState } from "react";
import Editor from "@monaco-editor/react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

type Language = "cpp" | "java" | "python" | "javascript" | "typescript";

const LANGUAGE_OPTIONS: { value: Language; label: string }[] = [
  { value: "cpp", label: "C++" },
  { value: "java", label: "Java" },
  { value: "python", label: "Python" },
  { value: "javascript", label: "JavaScript" },
  { value: "typescript", label: "TypeScript" },
];

const CODE_TEMPLATES: Record<Language, string> = {
  cpp: `#include <iostream>
using namespace std;

int main() {
    int a, b;
    cin >> a >> b;
    cout << a + b << endl;
    return 0;
}`,
  java: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int a = scanner.nextInt();
        int b = scanner.nextInt();
        System.out.println(a + b);
    }
}`,
  python: `def main():
    a, b = map(int, input().split())
    print(a + b)`,

  javascript: `const readline = require('readline');

function main() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.on('line', (line) => {
    const [a, b] = line.split(' ').map(Number);
    console.log(a + b);
  });
}`,
  typescript: `const readline = require('readline');

function main(): void {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.on('line', (line: string) => {
    const [a, b] = line.split(' ').map(Number);
    console.log(a + b);
  });
}`,
};

export default function CodeEditor() {
  const [selectedLanguage, setSelectedLanguage] = useState<Language>("cpp");
  const [code, setCode] = useState<string>(CODE_TEMPLATES.cpp);

  function handleEditorChange(value: string | undefined) {
    setCode(value ?? "");
  }

  function handleLanguageChange(language: Language) {
    setSelectedLanguage(language);
    setCode(CODE_TEMPLATES[language]);
  }

  function handleSubmit() {
    console.log("提交代码，语言:", selectedLanguage, "代码:", code);
  }

  return (
    <div className="flex flex-col h-full bg-card overflow-hidden border">
      {/* Header: 语言选择 */}
      <div className="flex items-center justify-between px-4 py-1 border-b bg-muted">
        <Tabs
          value={selectedLanguage}
          onValueChange={(value) => handleLanguageChange(value as Language)}
        >
          <TabsList>
            {LANGUAGE_OPTIONS.map((option) => (
              <TabsTrigger key={option.value} value={option.value}>
                {option.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>

      {/* Editor: 代码编辑器 */}
      <div className="flex-1 overflow-hidden">
        <Editor
          height="100%"
          language={selectedLanguage}
          value={code}
          theme="light"
          onChange={handleEditorChange}
          onMount={(editor, monaco) => {
            const options = {
              noSuggestionDiagnostics: true, // 关掉“require 变 import”这类建议
              noSemanticValidation: true, // 关掉变量未定义等逻辑检查
              noSyntaxValidation: true, // 关掉语法错误检查
            };

            monaco.languages.typescript.typescriptDefaults.setDiagnosticsOptions(
              options,
            );
            monaco.languages.typescript.javascriptDefaults.setDiagnosticsOptions(
              options,
            );
          }}
          options={{
            fontSize: 16,
            minimap: { enabled: false },
            scrollBeyondLastLine: false,
            automaticLayout: true,
            renderValidationDecorations: "off", // 不渲染验证装饰
            hover: { enabled: false }, // 禁用悬停提示
          }}
        />
      </div>

      {/* Footer: 提交按钮 */}
      <div className="flex items-center justify-end px-4 py-3 border-t bg-muted">
        <Button onClick={handleSubmit} className="gap-2" variant="outline">
          <Play className="h-4 w-4" />
          提交代码
        </Button>
      </div>
    </div>
  );
}
