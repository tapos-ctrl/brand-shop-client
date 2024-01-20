
import PropTypes from "prop-types"
import { useNavigate } from "react-router-dom"
const ProductBrand = ({ brand }) => {
  const {_id, name, photo } = brand
  const navigate = useNavigate()

    const handleNavigate = (id) => {
        navigate(`/product/${id}`)
    } 

  return (
    <div>
        <div className="card bg-slate-200  p-4 shadow-xl hover:cursor-pointer" onClick={() =>handleNavigate(_id)}>
            <figure><img src={photo} alt="Shoes" className="h-28" /></figure>
            <div className="card-body flex justify-center text-center">
                <div className="flex justify-center">
                <h2 className="card-title">{name}</h2>
                </div>
            </div>
            
        </div>
    </div>
  )
}

ProductBrand.propTypes = {
  brand: PropTypes.shape({
    _id: PropTypes.any,
    name: PropTypes.any,
    photo: PropTypes.any
  })
}


export default ProductBrand
