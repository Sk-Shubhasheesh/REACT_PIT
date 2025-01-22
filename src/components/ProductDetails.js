import { useEffect, useState } from "react"
import Skeleton from "./skeleton";
import { useParams } from "react-router-dom";
import useGetSingleProduct from "../hook/useGetSingleProduct";

function ProductDetails() {
  const {productId} =useParams();
  const singleProduct = useGetSingleProduct(productId);

 
  if(singleProduct===null){
    return <Skeleton />
  }

  return  (
    <div className='product'>
    <img className='product_img' src={singleProduct.image} />

    <h1>{singleProduct.title}</h1>
    <p>{singleProduct.rating.rate} rating</p>
    <p>Price: {singleProduct.price}</p>
 </div>
  )
}

export default ProductDetails