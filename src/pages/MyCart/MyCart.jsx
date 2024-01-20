import { useEffect, useState } from "react";
import Cart from "./Cart";

const MyCart = () => {

    const [carts , setCarts] = useState([])


    useEffect(() => {
        fetch('https://brand-shop-server-a2tw.onrender.com/cart')
        .then(res => res.json())
        .then(data => setCarts(data))
    },[])

    console.log(carts)
    let price = [0]

    for (const cart of carts) {
        // console.log(cart.price)/
        price = Number(price) + Number(cart.price)
    }

    console.log(price)
    return (
        <div className="container mx-auto px-5 ">
           <div className="grid grid-cols-5 lg:grid-cols-4 ">
                <div className="col-span-3 mx-auto lg:w-full">
                    {
                        carts.map(cart => <Cart cart={cart} key={cart._id} carts={carts} setCarts={setCarts}></Cart>)
                    }
                </div>
                <div className="text-center mt-10 h-60 col-span-1 relative pb-[550px]">
                   <div className="fixed text-center bg-slate-200   col-span-1 lg:p-4 rounded-lg">
                   <div className="p-4 lg:p-10 text-start">
                   <h1 className="lg:text-2xl pb-4">Total Product {carts.length}</h1>
                   <p>Total price: {price}Tk</p>
                   </div>
                   <button className="btn w-full bg-red-400 text-white hover:text-black">By now</button>
                   </div>
                </div>
           </div>
        </div>
    );
};

export default MyCart;