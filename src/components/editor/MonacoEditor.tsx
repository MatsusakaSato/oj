import Editor from "@monaco-editor/react";
import { Language, EditorOptions } from "@/types/codeEditor";
import { EDITOR_OPTIONS } from "@/constants/codeEditor";

interface MonacoEditorProps {
  language: Language;
  value: string;
  onChange: (value: string | undefined) => void;
  onMount: (editor: any, monaco: any) => void;
}

export function MonacoEditor({
  language,
  value,
  onChange,
  onMount,
}: MonacoEditorProps) {
  return (
    <div className="flex-1 overflow-hidden">
      <Editor
        height="100%"
        language={language}
        value={value}
        theme="light"
        onChange={onChange}
        onMount={onMount}
        options={EDITOR_OPTIONS}
      />
    </div>
  );
}
