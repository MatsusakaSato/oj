import gfm from "@bytemd/plugin-gfm";
import { Editor, Viewer } from "@bytemd/react";
import math from "@bytemd/plugin-math";
import highlight from "@bytemd/plugin-highlight";
const plugins = [gfm(), math(), highlight()];

export default function MdEditorComponent({
  value,
  onChange,
}: {
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <Editor
      value={value}
      plugins={plugins}
      onChange={(v) => {
        onChange(v);
      }}
    />
  );
}
