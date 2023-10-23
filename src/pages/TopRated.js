import React from "react";
import ProductCart from "../components/ProductCard";
import { useProduct } from "../context/ProductProvider";

const TopRated = () => {
  const {state:{products,loading,error}} = useProduct()
  // console.log(products);
  let content;
  
  if(loading===true){
    content = <p>Loading ...</p>
  }
  if(error === true){
    content = <p>Someting went wrong</p>
  }
  if(!error && !loading && products.length){
    content = products.filter(product => product.rating>=4).map((product)=> <ProductCart key={product._id} product={product} /> )
  }
  if(!error && !loading && !products.length){
    content = <p>Nothing to show product list </p>
  }
    return (
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10'>
        {
          content
        }
      </div>
    );
  };

export default TopRated;
