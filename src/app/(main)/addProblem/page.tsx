"use client";
import { Button } from "@/components/ui/button";
import dynamic from "next/dynamic";
import { useState, useEffect } from "react";

const MarkdownEditor = dynamic(
  () => import("@/components/MarkdownEditorComponent"),
  { ssr: false },
);
export default function AddProblemPage() {
  const [content, setContent] = useState("");
  return (
    <>
      <div className="mt-3">
        <MarkdownEditor value={content} onChange={(v) => setContent(v)} />
      </div>
    </>
  );
}
