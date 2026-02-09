import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import CodeEditor from "@/components/editor/CodeEditor";

export default function CodingPage() {
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
          hello world
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
