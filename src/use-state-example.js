//import { Component } from "react";
import { useContador } from "./hooks/useContador";

const App = () => {
  //No se deben llamar dentro de un for if while etc
  //Se debe llamar en componentes de react o en custom hooks
  //const [contador, setContador] = useState(0);
  const { contador, incremetar } = useContador(0);

  return (
    <div>
      Contador: {contador}
      <button onClick={incremetar}>Incrementar</button>
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
