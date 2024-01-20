import { useEffect, useState } from 'react';
import {  useParams } from 'react-router-dom';

const ProductDetails = () => {

    const {id} = useParams()
    const [details, setDetails] = useState([])
    const {name,brand,category,description,photo,price,rating} = details
    const cart = {name,brand,category,description,photo,price,rating}
    useEffect(() => {
        fetch(`https://brand-shop-server-a2tw.onrender.com/details/${id}`)
        .then(res => res.json())
        .then(data => setDetails(data))
    },[])

    console.log(details)


    console.log(name)
    const handleAddToCart = () =>{
        fetch('https://brand-shop-server-a2tw.onrender.com/cart',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(cart)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
    }

    return (
        <div className='container mx-auto px-5 py-10'>
           <div className="card bg-slate-200 shadow-xl">
            <figure><img src={details.photo} alt="Shoes" className='p-10' /></figure>
            <div className="card-body">
                <h2 className="card-title">{details.name}</h2>
                <p>{details.description}</p>
                <p>Price: {details.price}Tk</p>
                <div className="card-actions justify-end">
                <button className="btn bg-red-400 px-10 text-white text-xl hover:text-black" onClick={handleAddToCart}>Add Cart</button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default ProductDetails;