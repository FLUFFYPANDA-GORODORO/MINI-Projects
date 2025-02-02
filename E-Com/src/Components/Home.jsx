import React, { useContext, useEffect, useState } from "react";
import Nav from "./Nav";
import { Link, useLocation } from "react-router-dom";
import { ProductContext } from "../utils/Context";
import Loading from "./Loading";
import axios from "../utils/axios"

function Home() {
  const [products] = useContext(ProductContext);
  const {search} = useLocation();
  const category = decodeURIComponent(search.split ("=")[1])

  
  const [filteredProducts,setfilteredProducts] = useState(null)
  

  const getproductCategory = async () => {
    try{
      const {data} = await axios.get(`/products/category/${category}`)
      setfilteredProducts(data)
    }catch(err){
      console.log("Error fetching products", err);
    }
  };

  useEffect(()=>{
    if(!filteredProducts || category == "undefined") setfilteredProducts(products)
    if(category != "undefined") getproductCategory();

  },[category,products])
  

  console.log(products);
  return products ? (
    <>
      <Nav />
      <div className="h-full w-[85%]  p-5 pt-[5%] flex flex-wrap overflow-x-hidden">
        {filteredProducts && filteredProducts.map((p, i) => (
          <Link key={p.id}
            to={`/details/${p.id}`}
            className="mr-3 mb-3 card p-3 border shadow rounded w-[15%] h-[40vh] flex-col flex justify-center items-center"
          >
            <div
              className="hover:scale-110 mb-2 w-full h-[70%] bg-contain bg-no-repeat bg-center "
              style={{
                backgroundImage:
                  `url(${p.image})`,
              }}
            ></div>
            <h1 className="hover:text-blue-300 text-xs h-[20%] overflow-hidden">{p.title}</h1>
          </Link>
        ))}
      </div>
    </>
  ) : (
    <Loading />
  );
}

export default Home;
