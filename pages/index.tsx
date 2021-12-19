import Navbar from "../components/Navbar";

function Homepage() {
    return (

        <div>
            <Navbar/>
            <div className="text-xl mt-20 m-auto w-fit">
                <div> Our submission for MapHacks! </div>
            </div>
            <div className=" m-auto w-fit mt-5">
                <a href="/view" className="border border-gray-200 font-bold bg-sky-500 hover:bg-sky-600 rounded-full py-1 px-2 text-white">View stories</a>
            </div>
        </div>
    )
  }
  
  export default Homepage
  