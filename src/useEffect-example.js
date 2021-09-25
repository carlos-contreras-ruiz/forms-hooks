//import { Component } from "react";
import { useEffect } from "react";
import { useContador } from "./hooks/useContador";

const Interval = ({ contador }) => {
  useEffect(() => {
    const i = setInterval(() => console.log(contador), 1000);
    return () => clearInterval(i);
  }, [contador]);
  return <p>Interval</p>;
};
const App = () => {
  //No se deben llamar dentro de un for if while etc
  //Se debe llamar en componentes de react o en custom hooks
  //const [contador, setContador] = useState(0);
  const { contador, incremetar } = useContador(0);
  useEffect(() => {
    document.title = `Pagina numero ${contador}`;
  }, [contador]);

  //Se ejecuta cada vez que se rerenderiza el componenete
  //Sin dependencias
  /*useEffect(() => {
    console.log("efecto");
  });*/

  return (
    <div>
      Contador: {contador}
      <button onClick={incremetar}>Incrementar</button>
      <Interval contador={contador} />
    </div>
  );
};

/*class App extends Component {
  state = {
    contador: 0,
  };
  incrementar = () => {
    this.setState({
      contador: this.state.contador + 1,
    });
  };
  render() {
    return (
      <div>
        contador: {this.state.contador}
        <button onClick={this.incrementar}>Incrementar</button>
      </div>
    );
  }
}*/
export default App;
