import { useEffect, useState } from "react"
// import { productList } from "../utils/constant"
import Product from "./Product"
import Skeleton from "./skeleton"
// Named export
export const ProductCard = () => {
    const [listOfProduct, setlistOfProduct] = useState([])

    const [serchText, setSerchText] = useState("")

    const [filterProduct, setFilterProduct] = useState([]);

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const data = await fetch('https://fakestoreapi.com/products/')
        const resData = await data.json();
        setlistOfProduct(resData)
        // console.log(resData);
        setFilterProduct(resData)

    }

    // conditional rendering
    // if(listOfProduct.length===0){
    //     return <Skeleton/>
    // }


    const topRatedProducts = () => {
        const filterProduct = listOfProduct.filter(product => product.rating.rate >= 4);
        setlistOfProduct(filterProduct);


    }
    return listOfProduct.length === 0 ? <Skeleton /> : (
        <div>
            <div style={{ "marginTop": "10px" }}>
                <input type="text" onChange={(e)=>setSerchText(e.target.value)} value={serchText} />
                <button onClick={()=>{
                    const fiteredData = listOfProduct.filter((product)=>{
                        return product.title.toLowerCase().includes(serchText.toLowerCase())

                    })
                    setFilterProduct(fiteredData)
                }}>Search</button>
            </div>
            <button onClick={topRatedProducts} style={{ "marginTop": "10px" }}>Top rated product</button>
            <div className='product_card'>

                {
                    filterProduct.map((product, index) => {
                        return (
                            <Product key={product.id} product={product} />
                        )
                    })
                }

            </div>
        </div>
    )
}

