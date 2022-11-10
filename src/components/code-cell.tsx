import { useState } from "react";
import CodeEditor from "./code-editor";
import Preview from "./preview";
import bundle from "../bundler";

const CodeCell = () => {
  const [input, setInput] = useState("");
  const [code, setCode] = useState("");

  const onClick = async () => {
    const output = await bundle(input);
    setCode(output);
  };

  return (
    <div>
      <CodeEditor
        initialValue='console.log("hello World!");'
        onChange={(value) => setInput(value)}
      />
      {/* <textarea
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
          console.log(e.target.value);
        }}
      ></textarea> */}
      <div>
        <button onClick={onClick}>Submit</button>
      </div>
      <Preview code={code} />
    </div>
  );
};

export default CodeCell;
