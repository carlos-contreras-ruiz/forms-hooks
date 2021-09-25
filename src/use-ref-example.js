//import { Component } from "react";
import { useRef } from "react";

const App = () => {
  const ref = useRef();
  const inputRef = useRef();
  const click = () => {
    console.log(ref);
    inputRef.current.focus();
  };
  return (
    <div ref={ref}>
      <button onClick={click}>Focus</button>
      <input ref={inputRef} />
    </div>
  );
};

export default App;
