import { useEffect, useState } from 'react'
import ProductBrand from '../ProductBrand/ProductBrand'
import { FaPlus } from "react-icons/fa";

const ProductBrands = () => {
  const [brands, setBrands] = useState([])

  useEffect(() => {
    fetch('https://brand-shop-server-a2tw.onrender.com/brand')
      .then(res => res.json())
      .then(data => setBrands(data))
  }, [])
  return (
    <div className='container mx-auto my-24 px-5'>
        <h1 className='text-center mb-10 text-4xl text-red-400'>Product Brand Name</h1>
      <div className='grid lg:grid-cols-3 md:grid-cols-2  gap-20 '>
        {brands.map(brand => (
          <ProductBrand brand={brand} key={brand._id}></ProductBrand>
        ))}
        <div className="card bg-slate-200  p-4 shadow-xl">
            <div className="card-body text-center">
            <div className='flex justify-center text-6xl text-red-400'>
            <FaPlus className='text-center' />
            </div>
                <div className="flex justify-center">
                
                <h2 className="card-title">New brand coming soon</h2>
                </div>
            </div>
            
        </div>
      </div>
    </div>
  )
}

export default ProductBrands
