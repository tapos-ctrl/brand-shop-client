const Header = () => {

 
  return (
    <div className='bg-slate-200 '>
      <div className="container mx-auto px-5">
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full pt-16">
            <div className="flex md:flex-row flex-col-reverse items-center w-full">
              <div className=" px-28 py-7">
                  <h1 className="lg:text-4xl text-black font-bold mb-6">Brand New Product</h1>
                  <p>If you love shopping, you probably get a rush when you have the chance to try out the <br/>latest and greatest items on the market </p>
                  <button className="btn bg-red-400 text-white hover:text-black mt-5">Go Shoping</button>
              </div>
              <div className="">
                <img src="https://i.postimg.cc/Y2ZrfQzV/1.png" className=" opacity-85 md:h-[90vh]" />
              </div>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">❮</a> 
            <a href="#slide2" className="btn btn-circle">❯</a>
            </div>
        </div> 
        <div id="slide2" className="carousel-item relative w-full pt-16">

            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a> 
            <a href="#slide3" className="btn btn-circle">❯</a>
            </div>
            <div className="flex md:flex-row flex-col-reverse items-center   w-full">
              <div className=" px-28 py-7">
                  <h1 className="lg:text-4xl text-black font-bold mb-6">Brand New Product</h1>
                  <p>If you love shopping, you probably get a rush when you have the chance to try out the <br/>latest and greatest items on the market </p>
                  <button className="btn bg-red-400 text-white hover:text-black mt-5">Go Shoping</button>
              </div>
              <div className=" ">

                <img src="https://i.postimg.cc/BQFqhthv/3.png" className="w-full   md:h-[90vh]" />
              </div>
            </div>
        </div> 
        <div id="slide3" className="carousel-item relative w-full pt-16">
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">❮</a> 
            <a href="#slide4" className="btn btn-circle">❯</a>
            </div>
            <div className="flex md:flex-row flex-col-reverse items-center w-full">
              <div className=" px-28 py-7">
                  <h1 className="lg:text-4xl text-black font-bold mb-6">Brand New Product</h1>
                  <p>If you love shopping, you probably get a rush when you have the chance to try out the <br/>latest and greatest items on the market </p>
                  <button className="btn bg-red-400 text-white hover:text-black mt-5">Go Shoping</button>
              </div>
              <div className="">

                <img src="https://i.postimg.cc/K8rm2whS/2.png" className="w-full   md:h-[90vh]" />
              </div>
            </div>
        </div> 
        <div id="slide4" className="carousel-item relative w-full pt-16">
   
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">❮</a> 
            <a href="#slide1" className="btn btn-circle">❯</a>
            </div>
            <div className="flex md:flex-row flex-col-reverse items-center   w-full">
              <div className=" px-28 py-7">
                  <h1 className="lg:text-4xl text-black font-bold mb-6">Brand New Product</h1>
                  <p>If you love shopping, you probably get a rush when you have the chance to try out the <br/>latest and greatest items on the market </p>
                  <button className="btn bg-red-400 text-white hover:text-black mt-5">Go Shoping</button>
              </div>
              <div className="">

                <img src="https://i.postimg.cc/NjwQZYVk/4.png" className="w-full   md:h-[90vh]" />
              </div>
            </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Header
