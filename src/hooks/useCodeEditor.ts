import { useState, useEffect, useCallback } from "react";
import {
  Language,
  CodeEditorState,
  CodeEditorHandlers,
} from "@/types/codeEditor";
import {
  CODE_TEMPLATES,
  DEFAULT_LANGUAGE,
  MONACO_DIAGNOSTICS_OPTIONS,
} from "@/constants/codeEditor";

export function useCodeEditor(): CodeEditorState & CodeEditorHandlers {
  const [selectedLanguage, setSelectedLanguage] =
    useState<Language>(DEFAULT_LANGUAGE);
  const [code, setCode] = useState<string>(CODE_TEMPLATES[DEFAULT_LANGUAGE]);
  const [editorMounted, setEditorMounted] = useState(false);

  const handleEditorChange = useCallback((value: string | undefined) => {
    setCode(value ?? "");
  }, []);

  const handleLanguageChange = useCallback((language: Language) => {
    setSelectedLanguage(language);
    setCode(CODE_TEMPLATES[language]);
  }, []);

  const handleSubmit = useCallback(() => {
    console.log("提交代码，语言:", selectedLanguage, "代码:", code);
  }, [selectedLanguage, code]);

  const handleEditorMount = useCallback((editor: any, monaco: any) => {
    monaco.languages.typescript.typescriptDefaults.setDiagnosticsOptions(
      MONACO_DIAGNOSTICS_OPTIONS,
    );
    monaco.languages.typescript.javascriptDefaults.setDiagnosticsOptions(
      MONACO_DIAGNOSTICS_OPTIONS,
    );
    setEditorMounted(true);
  }, []);

  useEffect(() => {
    if (editorMounted) {
      window.dispatchEvent(new Event("resize"));
    }
  }, [editorMounted]);

  return {
    selectedLanguage,
    code,
    editorMounted,
    handleEditorChange,
    handleLanguageChange,
    handleSubmit,
    handleEditorMount,
  };
}
