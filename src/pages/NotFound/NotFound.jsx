import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <div className="flex justify-center text-center mt-20 container mx-auto px-5">
      <div >
        <img src='https://i.ibb.co/BZh0n13/page-not-found.png' alt='' />
        <Link to={'/'} className="btn text-xl px-12 bg-red-400 text-white hover:text-black">Go Home</Link>
      </div>
    </div>
  )
}

export default NotFound
