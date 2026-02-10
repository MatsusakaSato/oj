'use client'
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import CodeEditor from "@/components/editor/CodeEditor";
import MdViewComponent from "@/components/markdown/MdViewComponent";
import { useParams } from "next/navigation";
import { getProblemByIdAction } from "@/action/problem.action";
import { useEffect, useState } from "react";

export default function ProblemDetailPage() {
  const { id } = useParams();
  const [problemContent, setProblemContent] = useState("");
  useEffect(() => {
    const _ = async () => {
      const problem = await getProblemByIdAction(Number(id));
      setProblemContent(problem?.content || "");
    };
    _();
  }, []);
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
          <MdViewComponent value={problemContent} />
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
