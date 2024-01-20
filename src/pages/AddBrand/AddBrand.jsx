import Swal from "sweetalert2";


const AddBrand = () => {
    
    const handleAdded = (event) =>{
        event.preventDefault();
        const from = event.target
        const name = from.name.value;
        const photo = from.photo.value;
        const brand = {name, photo}
        
        fetch('https://brand-shop-server-a2tw.onrender.com/brand', {
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(brand)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)

            if(data.insertedId){
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "successfully added",
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })

    }


    return (
        <div className="hero pb-32 pt-10 bg-slate-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <h1 className="text-center pt-8 text-3xl">Add Brand</h1>
            <form className="card-body" onSubmit={handleAdded}>
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="Name" className="input input-bordered" required name="name"/>
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Photo URL</span>
                </label>
                <input type="text" placeholder="photo" className="input input-bordered" required name="photo" />
                </div>
                <div className="form-control mt-6">
                    <input type="submit" value="Added" className="btn text-white hover:text-black bg-red-400"/>
                
                </div>
            </form>
            </div>
        </div>
        </div>
    );
};

export default AddBrand;