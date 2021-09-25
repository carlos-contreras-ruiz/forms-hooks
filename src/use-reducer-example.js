//import { Component } from "react";
import { useReducer, useState } from "react";
import { reducer } from "./hooks/UseReducer";

const inicial = { contador: 1 };
const App = () => {
  const [state, dispatch] = useReducer(reducer, inicial);
  const [valor, setValor] = useState(0);

  return (
    <div>
      Contador: {state.contador}
      <input value={valor} onChange={(e) => setValor(e.target.value)} />
      <button onClick={() => dispatch({ type: "incrementar" })}>Mas</button>
      <button onClick={() => dispatch({ type: "decrementar" })}>Menos</button>
      <button onClick={() => dispatch({ type: "set", payload: valor })}>
        set
      </button>
    </div>
  );
};

export default App;
