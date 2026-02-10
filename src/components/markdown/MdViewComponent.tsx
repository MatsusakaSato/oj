"use client";

import gfm from "@bytemd/plugin-gfm";
import highlight from "@bytemd/plugin-highlight";
import { Viewer } from "@bytemd/react";

import math from "@bytemd/plugin-math";

export default function MdViewComponent({ value }: { value: string }) {
  const plugins = [gfm(), highlight(), math()];
  return (
    <div className="bytemd-body markdown-body">
      <Viewer value={value} plugins={plugins} />
    </div>
  );
}
