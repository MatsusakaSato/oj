"use client";

import { CodeEditorHeader } from "@/components/editor/CodeEditorHeader";
import { CodeEditorFooter } from "@/components/editor/CodeEditorFooter";
import { MonacoEditor } from "@/components/editor/MonacoEditor";
import { useCodeEditor } from "@/hooks/useCodeEditor";
import { LANGUAGE_OPTIONS } from "@/constants/codeEditor";
import { useEffect } from "react";

export default function CodeEditor() {
  const {
    selectedLanguage,
    code,
    handleEditorChange,
    handleLanguageChange,
    handleSubmit,
    handleEditorMount,
  } = useCodeEditor();
  useEffect(() => {
    console.log(code);
  }, [code]);
  return (
    <div className="flex flex-col h-full bg-card overflow-hidden border">
      <CodeEditorHeader
        selectedLanguage={selectedLanguage}
        onLanguageChange={handleLanguageChange}
        languageOptions={LANGUAGE_OPTIONS}
      />
      <MonacoEditor
        language={selectedLanguage}
        value={code}
        onChange={handleEditorChange}
        onMount={handleEditorMount}
      />
      <CodeEditorFooter onSubmit={handleSubmit} />
    </div>
  );
}
