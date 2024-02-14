import {createContext, useReducer} from "react";

const myValues = {
    dataForUsing: [],
    dark: false,
}


export const Context = createContext();

const reducer = (state = myValues, action) => {

    const { type, payload } = action;
    switch (type) {
        case "ON_LOG":
            break
        default:
            return {state}
    }
}

const Provider = ({children}) => {

    const [ state, dispatch ] = useReducer(reducer, myValues)

    return(
        <Context.Provider value={{ state, dispatch }}>
            {children}
        </Context.Provider>
    );
};

export default Provider;