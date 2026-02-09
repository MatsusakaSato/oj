import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

interface CodeEditorFooterProps {
  onSubmit: () => void;
}

export function CodeEditorFooter({ onSubmit }: CodeEditorFooterProps) {
  return (
    <div className="flex items-center justify-end px-4 py-3 border-t bg-white">
      <Button onClick={onSubmit} className="gap-2" variant="outline">
        <Play className="h-4 w-4" />
        提交代码
      </Button>
    </div>
  );
}
