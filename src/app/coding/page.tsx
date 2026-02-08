import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import CodeEditor from "@/components/CodeEditor";
export default function CodingPage() {
  return (
    <ResizablePanelGroup
      orientation="horizontal"
      className="h-screen border-collapse"
    >
      <ResizablePanel defaultSize="50%">
        hello world
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize="50%">
        <CodeEditor/>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
