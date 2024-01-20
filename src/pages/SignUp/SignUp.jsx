import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const SignUp = () => {

    const {createUser,setUser,googleSignUp} = useContext(AuthContext)

    const [error, setError] = useState()
    const [success, setSuccess] = useState()
    const navigate = useNavigate()

    const handleSignUp = (e) =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;


        if(password.length < 6){
          setError('Your password must be at least 6 characters')
          return
      } else if(!/[A-Z]/.test(password)){
          setError('Your password must be at least a capital letter')
          return
      } else if(!/[!#$%&?<< ]/.test(password)){
          setError('Your password must be at least a special character')
          return
      }
      
      setError('')




        createUser(email, password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            console.log(user)
            setUser(user)
            setSuccess('successfully create user')
            setTimeout(() => {
                setSuccess('')
            }, 2000);

            navigate('/login')
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setError(errorMessage)
            // ..
          });

    }



    const handleGoogleSignUp = () =>{
      googleSignUp()
      .then((result) => {
   
          const user = result.user;
          // navigate('/')
          
          if(user.email){
              navigate(location?.state ? location.state : '/');
          }
          // ...
        }).catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          // The email of the user's account used.
          const email = error.customData.email;
          // The AuthCredential type that was used.
          const credential = GoogleAuthProvider.credentialFromError(error);
          // ...
        });
  }


  return (
    <div>
      <div className='hero py-20 bg-base-200'>
        <div className='hero-content flex-col'>
          <div className='text-center lg:text-left'>
            <h1 className='text-5xl font-bold'>Sig up now!</h1>
          </div>
          <div className='card shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
            <form className='card-body' onSubmit={handleSignUp}>
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Name</span>
                </label>
                <input
                  type='text'
                  placeholder='Name'
                  className='input input-bordered'
                  required
                  name="name"
                />
              </div>
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Email</span>
                </label>
                <input
                  type='email'
                  placeholder='email'
                  className='input input-bordered'
                  required
                  name="email"
                />
              </div>
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Password</span>
                </label>
                <input
                  type='password'
                  placeholder='password'
                  className='input input-bordered'
                  required
                  name="password"
                />
                {
                            error ? <div className="alert bg-red-400 text-white my-3">
                            <span>{error}</span>
                            </div>: success && <div className="alert alert-success text-white my-3">
                            <span>{success}</span>
                            </div>

                        }
                <label className='label'>
                  <a href='#' className='label-text-alt link link-hover'>
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className='form-control mt-6'>
                <input type="submit" value="Sign Up" className='btn bg-red-400 hover:text-black text-white' />

              </div>
            </form>
            <div className="flex justify-center border-t-2">
                <div className="py-5">
                    <button onClick={handleGoogleSignUp}><FcGoogle className="text-4xl"/></button>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp
