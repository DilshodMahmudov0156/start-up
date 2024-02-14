import {createContext, useReducer} from "react";

const myValues = {
    dataForUsing: [],
    dark: false,
}


export const Context = createContext();

const Provider = ({children}) => {
    const [ state, dispatch ] = useReducer();
    return(
        <Context.Provider value={}>
            {children}
        </Context.Provider>
    );
}