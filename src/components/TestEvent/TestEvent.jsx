import "./TestEvent.css";
import { useState } from "react";

export function TestEvent() {
  function handleButtonClick() {
    console.log("bouton cliqué");
  }

  function handleButtonDoubleClick() {
    console.log("bouton double cliqué");
  }

  function handleCopy(e) {
    const start = e.target.selectionStart;
    const stop = e.target.selectionEnd;
    setTestPaste(testCopy.slice(start, stop));
  }

  const [testPaste, setTestPaste] = useState("");
  const [testCopy, setTestCopy] = useState("Hello John");

  return (
    <>
      <button onClick={handleButtonClick}>click</button>
      <button onDoubleClick={handleButtonDoubleClick}>double click</button>
      <input
        type="text"
        name="test-copy"
        value={testCopy}
        onCopy={handleCopy}
        onChange={(e) => setTestCopy(e.target.value)}
      />
      <input type="text" name="test-paste" value={testPaste} readOnly />
      <div className="eventMessage">
        La valeur de test-paste <span>{testPaste}</span>
      </div>
    </>
  );
}
