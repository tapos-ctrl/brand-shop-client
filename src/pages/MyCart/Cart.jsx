
import PropTypes from "prop-types"
const Cart = ({cart,carts, setCarts}) => {
    const {_id ,photo, name,price} = cart
    
    const handleDelate = () =>{
        fetch(`https://brand-shop-server-a2tw.onrender.com/cart/${_id}`,{
            method:'DELETE',
            
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            const remaining = carts.filter(findProduct => findProduct._id !== _id)
            setCarts(remaining)
        })
    }


    return (
        <div className="flex justify-between bg-slate-200 m-10 lg:py-10 p-5 rounded-2xl items-center">
            <div>
                <img src={photo} alt="" className="h-20 pr-5" />
            </div>
            <div className="lg:pl-5">
                <p className="text-xs lg:text-2xl pb-2">{name}</p>
                <p className="lg:text-xl text-xs">{price}TK</p>
            </div>
            <div>
                <button onClick={ handleDelate} className="btn bg-red-400 text-xl lg:text-3xl text-white hover:text-black">x</button>
            </div>
        </div>
    );
};

Cart.propTypes = {
  cart: PropTypes.shape({
    _id: PropTypes.any,
    name: PropTypes.any,
    photo: PropTypes.any,
    price: PropTypes.any
  }),
  carts: PropTypes.shape({
    filter: PropTypes.func
  }),
  setCarts: PropTypes.func
}



export default Cart;