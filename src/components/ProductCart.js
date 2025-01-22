import { useEffect, useState } from "react"
// import { productList } from "../utils/constant"
import Product from "./Product"
import Skeleton from "./skeleton"
import { Link } from "react-router-dom"
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
            <div className="mt-10 flex mx-5 space-x-10">
                <div>
                    <input className="border border-gray-7 p-3" type="text" onChange={(e) => setSerchText(e.target.value)} value={serchText} />
                    <button onClick={() => {
                    const fiteredData = listOfProduct.filter((product) => {
                        return product.title.toLowerCase().includes(serchText.toLowerCase())

                    })
                    setFilterProduct(fiteredData)
                }} className="bg-purple-600 px-6 py-2 rounded-md text-[#f0f0f0f0]">Search</button>
                </div>
                

                <button onClick={topRatedProducts} className="bg-purple-600 px-6 py-2 rounded-md text-[#f0f0f0f0]">Top rated product</button>
            </div>

            <div className='max-w-7xl mx-auto grid grid-cols-5 gap-4 mt-10'>

                {
                    filterProduct.map((product, index) => {
                        return (
                            <Link key={product.id} to={`/product/${product.id}`}><Product product={product} /></Link>
                        )
                    })
                }

            </div>
        </div>
    )
}

