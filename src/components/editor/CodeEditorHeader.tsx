import { Language, LanguageOption } from "@/types/codeEditor";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface CodeEditorHeaderProps {
  selectedLanguage: Language;
  onLanguageChange: (language: Language) => void;
  languageOptions: LanguageOption[];
}

export function CodeEditorHeader({
  selectedLanguage,
  onLanguageChange,
  languageOptions,
}: CodeEditorHeaderProps) {
  return (
    <div className="flex items-center justify-between px-4 py-1 border-b bg-white">
      <Tabs
        value={selectedLanguage}
        onValueChange={(value) => onLanguageChange(value as Language)}
      >
        <TabsList>
          {languageOptions.map((option) => (
            <TabsTrigger key={option.value} value={option.value}>
              {option.label}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
    </div>
  );
}
