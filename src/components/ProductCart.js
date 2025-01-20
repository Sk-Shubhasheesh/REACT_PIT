import { useState } from "react"
import { productList } from "../utils/constant"
import Product from "./Product"
// Named export
export const ProductCard = () => {
    const [listOfProduct, setlistOfProduct] = useState(productList)


    const topRatedProducts = () => {
        const filterProduct = listOfProduct.filter(product => product.rating.rate >= 4);
        setlistOfProduct(filterProduct);
        

    }
    return (
        <div>
            <button onClick={topRatedProducts} style={{ "marginTop": "10px" }}>Top rated product</button>
            <div className='product_card'>

                {
                    listOfProduct.map((product, index) => {
                        return (
                            <Product key={product.id} product={product} />
                        )
                    })
                }

            </div>
        </div>
    )
}

