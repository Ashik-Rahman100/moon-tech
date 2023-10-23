import React from "react";
import { useProducts } from "../context/ProductProvider";

const Home = () => {
const {data} = useProducts()
console.log(data);
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10'>
      {/* {content} */}
    </div>
  );
};

export default Home;
