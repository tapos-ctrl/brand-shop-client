

const PopularBrand = () => {
    return (
        <div className="container mx-auto px-5 py-10 ">
            <h1 className="text-center text-3xl text-red-400 font-semibold">Popular Brand</h1>
            <div className="lg:flex lg:justify-between justify-center lg:px-56 text-center mt-10">
                <div className="flex justify-center">
                <img src="https://i.ibb.co/G3dgK7t/apple.png" className="w-40" alt="" />
                </div>
                <div  className="flex justify-center">
                <img src="https://i.ibb.co/gJ6P9js/hp.png"  className="w-40"alt="" />
                </div>
                <div  className="flex justify-center">
                <img src="https://i.ibb.co/3CvLWCS/google.png"  className="w-40"alt="" />
                </div>
                <div  className="flex justify-center">
                <img src="https://i.ibb.co/3MSGXt1/dell.png"  className="w-40"alt="" />
                </div>
            </div>
            
        </div>
    );
};

export default PopularBrand;