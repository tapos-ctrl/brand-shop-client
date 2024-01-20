import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Product from '../Product/Product';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import './Products.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';



const Products = () => {
  const [brand, setBrand] = useState([])
  const [products, setProducts] = useState([])
  const { id } = useParams()
  useEffect(() => {
    fetch(`https://brand-shop-server-a2tw.onrender.com/brand/${id}`, {
      method: 'GET'
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)

      })
  }, [])

  useEffect(() => {
    fetch(`https://brand-shop-server-a2tw.onrender.com/brand/${id}`)
      .then(res => res.json())
      .then(data => setBrand(data))
  }, [])

  useEffect(() => {
    fetch(`https://brand-shop-server-a2tw.onrender.com/products${id}`, {
      method: 'GET'
    })
      .then(res => res.json())
      .then(data => {
        setProducts(data)
      })
  }, [])





  return (
    <div className=''>
      
      <div className='bg-slate-200'>
      <div className='container mx-auto '>
      <Swiper
      spaceBetween={30}
      centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper "
        
      >
      <SwiperSlide>
        <div className='flex justify-center'><img src="https://i.postimg.cc/yxw2h1Kx/VNAcombofamily52600x1000.jpg" className='w-full h-[400px]' alt="" /></div>
      </SwiperSlide>
      <SwiperSlide>
      <div className='flex justify-center'><img src="https://i.postimg.cc/7PdvrVz4/barnner-3.png" className='w-full h-[400px]' alt="" /></div>
      </SwiperSlide>
      <SwiperSlide>
      <div className='flex justify-center'><img src="https://i.postimg.cc/ZRsGRPDr/46291-removebg-preview.png" className='w-full h-[400px]' alt="" /></div>
      </SwiperSlide>
    </Swiper>
      </div>
      </div>



      <h1 className='text-center text-3xl pt-16 font-bold text-red-400'>Products</h1>
      <div className='container mx-auto grid lg:grid-cols-4 md:grid-cols-2 px-5 gap-10 py-20'>
        {products.map(product => (
          <Product product={product} key={product._id}></Product>
        ))}
      </div>
    </div>
  )
}

export default Products
