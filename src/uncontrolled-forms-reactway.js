//import { Component } from "react";
import { useRef } from "react";

const App = () => {
  const input1 = useRef();
  const file = useRef();
  const submit = (e) => {
    console.log(input1.current.value);
    console.log(file.current.files);
    const form = new FormData();
    form.append("archivo", file.current.files[0]);
    form.append("campo", input1.current.value);
    fetch("/lala", {
      method: "POST",
      body: form,
    });
  };
  return (
    <div>
      <div>
        <span>lala</span>
        <input name="campo" ref={input1} />
      </div>
      <div>
        <span>lala2</span>
        <input type="file" name="campo2" ref={file} />
      </div>
      <div>
        <input type="submit" value="enviar" onClick={submit} />
      </div>
    </div>
  );
};

export default App;
