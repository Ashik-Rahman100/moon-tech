import React, { createContext, useContext, useEffect, useState } from 'react';

const PRODUCT_CONTEXT = createContext()

const ProductProvider = ({children}) => {
  const [data , setData] = useState([])
  useEffect(()=>{
    fetch('http://localhost:5000/data')
    .then(res => res.json())
    .then(data => setData(data))
  },[])

  const value = {
    data
  }
  return (
    <div>
      <PRODUCT_CONTEXT.Provider value={value}>
        {children}
      </PRODUCT_CONTEXT.Provider>
    </div>
  );
};

export const useProducts = () =>{
  const context = useContext(PRODUCT_CONTEXT);
  return context
}

export default ProductProvider;