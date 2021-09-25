//action = {type:string,payload:any}
export const reducer = (state, action) => {
  switch (action.type) {
    case "incrementar":
      return { ...state, contador: state.contador + 1 };
    case "decrementar":
      return { ...state, contador: state.contador - 1 };
    case "set":
      return { ...state, contador: action.payload };
    default:
      return state;
  }
};
