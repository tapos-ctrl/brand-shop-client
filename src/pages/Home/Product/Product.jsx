import PropTypes from "prop-types";
import { Link } from "react-router-dom";



const Product = ({product}) => {
    const { _id, name, price, description,photo,category} = product
    console.log(product)

    const handleDetails = () => {
      fetch(`https://brand-shop-server-a2tw.onrender.com/details/${_id}`,{
        method:'GET'
      })
      .then(res => res.json())
      .then(data => {
        console.log(data)
      })
    }


    return (
        <div>
            <div className="card card-compact  bg-slate-200 shadow-xl">
            <figure><img src={photo} alt="Shoes" className="h-64 p-4"  /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p className="text-xl"><span className=" font-semibold">Types:</span> {category}</p>
                <p>{description}</p>
                <p className="text-xl">Price: {price}Tk</p>
                <div className="card-actions flex justify-between mt-5">
                  <Link to={`/update/${_id}`}><button onClick={handleDetails} className="btn bg-rose-400 text-white hover:text-black">Update</button></Link>
                  <Link to={`/details/${_id}`}><button onClick={handleDetails} className="btn bg-rose-400 text-white hover:text-black">Show Details</button></Link>
                </div>
            </div>
            </div>
        </div>
    );
};

Product.propTypes = {
  product: PropTypes.shape({
    _id: PropTypes.any,
    brand: PropTypes.any,
    category: PropTypes.any,
    description: PropTypes.any,
    name: PropTypes.any,
    photo: PropTypes.any,
    price: PropTypes.any
  })
}



export default Product;