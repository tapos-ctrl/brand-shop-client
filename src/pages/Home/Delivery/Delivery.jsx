
const Delivery = () => {



    return (
       <div className="">
         <div className="container mx-auto ">
            <h1 className="text-center text-4xl text-red-400 py-10">Currently Delivering</h1>
            <div className="lg:flex w-full justify-between">
                    <div className="w-full">
                        <img src="https://i.postimg.cc/T1yZWyZB/delivery1.png" className="" alt="" />
                    </div>
                <div className="flex items-center w-full">
                <div className="w-full">
                    <h1 className="text-3xl font-semibold">Common Questions</h1>
                    <div className="collapse collapse-plus bg-base-200 my-6">
                        <input type="radio" name="my-accordion-3" checked="checked" /> 
                        <div className="collapse-title text-xl font-medium">
                        What are your delivery hours?
                        </div>
                        <div className="collapse-content"> 
                            <p>We deliver from 7.30 am to 11 pm every day. </p>
                        </div>
                        </div>
                        <div className="collapse collapse-plus bg-base-200 my-6">
                        <input type="radio" name="my-accordion-3" /> 
                        <div className="collapse-title text-xl font-medium">
                            Click to open this one and close others
                        </div>
                        <div className="collapse-content"> 
                            <p>hello</p>
                        </div>
                        </div>
                        <div className="collapse collapse-plus bg-base-200 my-6">
                        <input type="radio" name="my-accordion-3" /> 
                        <div className="collapse-title text-xl font-medium">
                            Click to open this one and close others
                        </div>
                        <div className="collapse-content"> 
                            <p>hello</p>
                        </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
       </div>
    );
};

export default Delivery;