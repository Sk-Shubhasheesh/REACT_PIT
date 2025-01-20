const Product = ({product})=>{
// destructuring the props
const {image, title, price, rating} = product
    return (
        <div className='product'>
           <img className='product_img' src={image} />

           <h1>{title}</h1>
           <p>{rating.rate} rating</p>
           <p>Price: {price}</p>
        </div>
    )
}

export default Product;