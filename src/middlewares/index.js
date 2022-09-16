//cada vez que se dispare una accion se pueda obtener la informacion de esa accion y hacer consol log
//funcion que retona otra funcion que


export const logger = (store) => (next) => (action) => {
    console.log(action);
    next(action);
}


//agrega un pokemon que yo quiero //modifica pokemon personalizado
export const featuring = (store) => (next) => (actionInfo) => {
    const featured = [{ name: 'eddie' }, ...actionInfo.action.payload];
    const updatedActionInfo = {
      ...actionInfo,
      action: { ...actionInfo.action, payload: featured },
    };
    next(updatedActionInfo);
  };
