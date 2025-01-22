import { useEffect, useState } from "react"
import Skeleton from "./skeleton";
import { useParams } from "react-router-dom";

function ProductDetails() {
  const [singleProduct, setSingleProduct] = useState(null);
  const {productId} =useParams();

  useEffect(()=>{
    fetchData();
  }, [])

  const fetchData = async ()=>{
    const data = await fetch(`https://fakestoreapi.com/products/${productId}`);
    const resData = await data.json();
    setSingleProduct(resData);
  }

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