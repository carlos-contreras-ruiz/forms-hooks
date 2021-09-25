//import { Component } from "react";
import { useRef, useState } from "react";

const App = () => {
  //const [value, setvalue] = useState("");
  const [value, setvalue] = useState({
    campo: "",
    texto: "",
    select: "",
    checkbox: false,
    radio: "feliz",
  });

  const handleChange = ({ target }) => {
    setvalue({
      ...value,
      [target.name]: target.type === "checkbox" ? target.checked : target.value,
    });
  };
  console.log(value);
  return (
    <div>
      <div>
        <span>lala</span>

        <input
          name="campo"
          type="text"
          value={value.campo}
          onChange={handleChange}
        />
      </div>
      <div>
        <textarea name="texto" onChange={handleChange} value={value.texto} />
      </div>
      <div>
        <select value={value.select} name="select" onChange={handleChange}>
          <option value="">-- Seleccione --</option>
          <option value="feliz">Feliz</option>
          <option value="triste">Triste</option>
          <option value="enojado">Enojado</option>
        </select>
      </div>
      <div>
        <label>1</label>
        <input
          type="checkbox"
          name="checkbox"
          checked={value.checkbox}
          onChange={handleChange}
        />
      </div>
      {/*<div onChange={handleChange}>
        <label>Radio button</label>
        <input type="radio" name="radio" value="feliz" />
        <input type="radio" name="radio" value="triste" />
        <input type="radio" name="radio" value="enojado" />
  </div>*/}

      <div>
        <label>Radio button</label>
        <input
          onChange={handleChange}
          type="radio"
          name="radio"
          value="feliz"
          checked={value.radio === "feliz"}
        />
        <input
          onChange={handleChange}
          type="radio"
          name="radio"
          value="triste"
          checked={value.radio === "triste"}
        />
        <input
          onChange={handleChange}
          type="radio"
          name="radio"
          value="enojado"
          checked={value.radio === "enojado"}
        />
      </div>
      <div>
        <input type="submit" value="enviar" />
      </div>
    </div>
  );
};

export default App;
