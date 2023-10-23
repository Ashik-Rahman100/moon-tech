import React, { createContext, useContext, useEffect, useReducer } from 'react';
import { initialState, productReducer } from '../state/ProductReducer/ProductReducer';
import { actionTypes } from '../state/ProductReducer/actionTypes';

const PRODUCT_CONTEXT = createContext();

const ProductProvider = ({children}) => {
    // const [data, setData ] = useState([]);
    const [state, dispatch] = useReducer(productReducer, initialState);

console.log(state);
    useEffect(() =>{
        dispatch({type:actionTypes.FETCHING_START})
        fetch('http://localhost:5000/data')
        .then((res) => res.json())
        .then((data) => dispatch({type:actionTypes.FETCHING_SUCCESS, payload:data}, ))
        .catch(() => dispatch({type:actionTypes.FETCHING_ERROR}) )
    },[])
    const value = {
        state ,
        dispatch
    }
    return (
        <div>
            <PRODUCT_CONTEXT.Provider value={value}>
                {children}
            </PRODUCT_CONTEXT.Provider>
        </div>
    );
};

export const useProduct = () =>{
    const context = useContext(PRODUCT_CONTEXT);
    return context;
}
export default ProductProvider;