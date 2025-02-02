import React, {  useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "../utils/axios"
import Loading from "./Loading";

function Detail() {
  const [product,setProduct] =  useState(null)
  const {id} = useParams();
  const getsingleproduct =   async ()=>{
    try{
        const {data} = await axios.get(`/products/${id}`)
        setProduct(data);
    }catch(error){
      console.log("Error fetching product", error);
    }
  }

  useEffect(()=>{
      getsingleproduct();
  },[])
  
  return ( product ?
    <div className="w-[70%] h-full bg-white m-auto flex">
      <div className="left w-[50%] h-full  flex justify-center items-center">
        <img
          className="w-[80%] h-[70%] object-contain"
          src={`${product.image}`}
          alt="Heyy"
        />
      </div>
      <div className="right w-[50%] h-full flex flex-col pt-[15%] text-left">
        <h1 className="text-4xl font-semibold my-2">{product.title}</h1>
        <h3 className="text-2xl text-zinc-300 ">Category : {product.category}</h3>
        <h2 className="text-xl ">Price : ${product.price}</h2>
        <p className="text-xs my-2"><span className="font-semibold">Description : </span>{product.description}</p>
        <div className="flex  items-center  p-2">
        <Link className="px-4 py-2 bg-blue-200 rounded-md m-4">Edit</Link>
        <Link className="px-4 py-2 bg-red-200 rounded-md m-4">Delete</Link>
        </div>
        
      </div>
    </div> : <Loading />
  );
}

export default Detail;
