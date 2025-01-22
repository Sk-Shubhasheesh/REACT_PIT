import { useEffect, useState } from 'react'

const useGetSingleProduct= (productId) => {
    const [singleProduct, setSingeProduct] = useState(null);
    useEffect(() => {
        fetchSingleProduct();
    }, [])

    const fetchSingleProduct = async () => {
        const data = await fetch(`https://fakestoreapi.com/products/${productId}`)
        const jsonData = await data.json()
        setSingeProduct(jsonData)
    
    }
    return singleProduct;
}


export default useGetSingleProduct