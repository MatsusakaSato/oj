"use client";

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import CodeEditor from "@/components/editor/CodeEditor";
import MdViewComponent from "@/components/markdown/MdViewComponent";

interface ProblemDetailClientProps {
  content: string;
}

export default function ProblemDetailClient({
  content,
}: ProblemDetailClientProps) {
  return (
    <div className="h-screen bg-muted p-4">
      <ResizablePanelGroup
        orientation="horizontal"
        className="h-full border-collapse"
      >
        <ResizablePanel
          defaultSize="50%"
          className="rounded-xl bg-card shadow-lg overflow-hidden"
        >
          <MdViewComponent value={content} />
        </ResizablePanel>
        <ResizableHandle className="w-2 bg-transparent" />
        <ResizablePanel
          defaultSize="50%"
          className="rounded-xl bg-card shadow-lg overflow-hidden"
        >
          <CodeEditor />
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}
