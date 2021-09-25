//import { Component } from "react";

const App = () => {
  const submit = (e) => {
    e.preventDefault();
    const data = Array.from(new FormData(e.target));
    console.log(Object.fromEntries(data));
  };
  return (
    <form onSubmit={submit}>
      <div>
        <span>lala</span>
        <input name="campo" />
      </div>
      <div>
        <span>lala2</span>
        <input name="campo2" />
      </div>
      <div>
        <input type="submit" value="enviar" />
      </div>
    </form>
  );
};

export default App;
