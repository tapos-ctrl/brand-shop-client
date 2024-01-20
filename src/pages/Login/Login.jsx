import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const Login = () => {

    const {signInUser,signInGoogle,googleSignUp} = useContext(AuthContext)

    const [error, setError] = useState()
    const [success, setSuccess] = useState()

    const navigate = useNavigate()

    const location = useLocation()
    // console.log('user location',location)


    const handleSignIn = (e) =>{
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        
        if(password.length < 6){
            setError('Your password must be at least 6 characters')
            return
        } else if(!/[A-Z]/.test(password)){
            setError('Your password must be at least a capital letter')
            return
        } else if(!/([a-zA-Z >>!#$%&? "<<])[a-zA-Z0-9 >>!#$%&?<< ]/.test(password)){
            setError('Your password must be at least a special character')
            return
        }
        
        setError('')

        signInUser(email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user)
            setError('')
            setSuccess('successfully login user')
            setTimeout(() => {
                setSuccess('')
            }, 2000);
            // ...

            navigate(location?.state ? location.state : '/');
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setError(errorMessage)
            // console.log(errorMessage)
            console.log(errorCode)

            
          });
        
    }
    
    const handleGoogleSignIn = () =>{
        googleSignUp()
        .then((result) => {
     
            const user = result.user;
            // navigate('/')
            signInGoogle()
            if(user.email){
                navigate(location?.state ? location.state : '/');
            }
            // console.log(user)
            // ...
          }).catch((error) => {
            // Handle Errors here.
            const errorMessage = error.message;
            setError(errorMessage)
     
            // ...
          });
    }




    return (
        <div>
            <div className="hero py-20 bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSignIn} className="card-body">
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" className="input input-bordered" name="email" required />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                        {
                            error ? <div className="alert bg-red-400 text-white my-3">
                            <span>{error}</span>
                            </div>: success && <div className="alert alert-success text-white my-3">
                            <span>{success}</span>
                            </div>

                        }
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                        </div>
                        <div className="form-control mt-6">
                        <input type="submit" value="Login" className="btn bg-red-400 text-white hover:text-black" />
                        </div>
                        
                    </form>
                    <div className="flex justify-center border-t-2">
                        <div className="py-5">
                            <button onClick={handleGoogleSignIn}><FcGoogle className="text-4xl"/></button>
                        </div>
                    </div>
                    
                    </div>
                    
                </div>

                </div>
        </div>
    );
};

export default Login;