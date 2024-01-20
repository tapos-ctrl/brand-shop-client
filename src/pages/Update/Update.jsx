import { useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const Update = () => {
    const product = useLoaderData()
    const { name, brand,category,price, description,photo, rating} = product
    const {id} = useParams()
    console.log(id)
    
    const handleUpdate = () =>{

        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const brand = (form.brand.value).toUpperCase();
        const category = form.category.value;
        const price = form.price.value;
        const description = form.description.value;
        const photo = form.photo.value;
        const rating = form.rating.value;
        console.log(brand)

        const productDetails = {name, brand,category,price, description,photo, rating}


        fetch(`https://brand-shop-server-a2tw.onrender.com/products/${id}`, {
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(productDetails)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.matchedCount > 0){
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "successfully product updated",
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })


    }


    return (
        <div className="bg-slate-50 py-10">
        <div className="container mx-auto px-5">
            <h1 className="text-center">Update Product </h1>
            <form onSubmit={handleUpdate}>

            <label className='form-control w-full '>
            <span className='label-text text-lg mb-3'>Name</span>
                <input
                type='text'
                placeholder='Name'
                className='input input-bordered w-full'
                required
                defaultValue={name}
                name="name"
                />
            </label>
            <label className='form-control w-full '>
            <span className='label-text text-lg mb-3'>Brand Name</span>
                <input
                type='text'
                placeholder='Brand Name'
                className='input input-bordered w-full'
                required
                name="brand"
                defaultValue={brand}
                />
            </label>
            <label className='form-control w-full '>
            <span className='label-text text-lg mb-3'>Category</span>
                <input
                type='text'
                placeholder='Category'
                className='input input-bordered w-full'
                required
                defaultValue={category}
                name="category"
                />
            </label>
            <label className='form-control w-full '>
            <span className='label-text text-lg mb-3'>Price</span>
                <input
                type='number'
                placeholder='Price'
                className='input input-bordered w-full'
                required
                defaultValue={price}
                name="price"
                />
            </label>
            <label className='form-control w-full '>
            <span className='label-text text-lg mb-3'>Rating</span>
                <input
                type='number'
                placeholder='Price'
                className='input input-bordered w-full'
                defaultValue={rating}
                name="rating"
                />
            </label>
            <label className='form-control w-full '>
            <span className='label-text text-lg mb-3'>Short description</span>
                <input
                type='text'
                placeholder='Short description'
                className='input input-bordered w-full'
                required
                defaultValue={description}
                name="description"
                />
            </label>
            <label className='form-control w-full '>
            <span className='label-text text-lg mb-3'>Photo</span>
                <input
                type='text'
                placeholder='photo'
                className='input input-bordered w-full'
                required
                defaultValue={photo}
                name="photo"
                />
            </label>
            <input type="submit" className="btn bg-red-400 w-full text-white hover:text-black mt-9" value="Update Product" />
            </form>
        </div>
    </div>
    );
};

export default Update;