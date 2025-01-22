import { useEffect, useState } from "react"
import Skeleton from "./skeleton";
import { useParams } from "react-router-dom";
import useGetSingleProduct from "../hook/useGetSingleProduct";

function ProductDetails() {
  const { productId } = useParams();
  const singleProduct = useGetSingleProduct(productId);


  if (singleProduct === null) {
    return <Skeleton />
  }

  return (
    <div className="max-w-5xl mx-auto mt-10">
      <div className='border border-gray-600 rounded-md p-5'>
        <img className='w-32' src={singleProduct.image} />

        <h1 className="font-bold text-xl">{singleProduct.title}</h1>
        <p className="font-bold text-gray-700">{singleProduct.rating.rate} rating</p>
        <p className="font-bold text-gray-700">Price: {singleProduct.price}</p>
        <p>{singleProduct.description}</p>
      </div>
    </div>

  )
}

export default ProductDetails