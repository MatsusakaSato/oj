import gfm from "@bytemd/plugin-gfm";
import { Editor, Viewer } from "@bytemd/react";
const plugins = [gfm()];

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
