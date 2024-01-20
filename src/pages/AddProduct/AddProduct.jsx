import Swal from "sweetalert2";

const AddProduct = () => {
    const handleSubmit = (event) =>{
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

        fetch('https://brand-shop-server-a2tw.onrender.com/products',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(productDetails)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
            Swal.fire({
                position: "center",
                icon: "success",
                title: "successfully product added",
                showConfirmButton: false,
                timer: 1500
              });
            }
        })

    }
  return (
    <div className="bg-slate-50 py-10">
        <div className="container mx-auto px-5">
            <h1 className="text-center">Add Product </h1>
            <form onSubmit={handleSubmit}>

            <label className='form-control w-full '>
            <span className='label-text text-lg mb-3'>Name</span>
                <input
                type='text'
                placeholder='Name'
                className='input input-bordered w-full'
                required
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
                />
            </label>
            <label className='form-control w-full '>
            <span className='label-text text-lg mb-3'>Category</span>
                <input
                type='text'
                placeholder='Category'
                className='input input-bordered w-full'
                required
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
                name="price"
                />
            </label>
            <label className='form-control w-full '>
            <span className='label-text text-lg mb-3'>Rating</span>
                <input
                type='number'
                placeholder='Price'
                className='input input-bordered w-full'
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
                name="photo"
                />
            </label>
            <input type="submit" className="btn bg-red-400 w-full text-white hover:text-black mt-9" value="Add Product" />
            </form>
        </div>
    </div>
  )
}

export default AddProduct
