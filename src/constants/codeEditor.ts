import { Language, LanguageOption, CodeTemplate, MonacoDiagnosticsOptions, EditorOptions } from "@/types/codeEditor";

export const LANGUAGE_OPTIONS: LanguageOption[] = [
  { value: "cpp", label: "C++" },
  { value: "java", label: "Java" },
  { value: "python", label: "Python" },
  { value: "javascript", label: "JavaScript" },
  { value: "typescript", label: "TypeScript" },
];

export const CODE_TEMPLATES: CodeTemplate = {
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

export const MONACO_DIAGNOSTICS_OPTIONS: MonacoDiagnosticsOptions = {
  noSuggestionDiagnostics: true,
  noSemanticValidation: true,
  noSyntaxValidation: true,
};

export const EDITOR_OPTIONS: EditorOptions = {
  fontSize: 16,
  minimap: { enabled: false },
  scrollBeyondLastLine: false,
  automaticLayout: true,
  renderValidationDecorations: "off",
  hover: { enabled: false },
};

export const DEFAULT_LANGUAGE: Language = "cpp";
