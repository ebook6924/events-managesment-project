import { useNavigate } from "react-router-dom";


const SigleServiceCart = ({ readingBook }) => {
    
    const { image,description } = readingBook || {};
    const navigate = useNavigate();
    const handleBack=()=>{
       navigate(-1)
    }
    return (
        <div className="mt-8 relative w-9/12 mx-auto block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
            <img
                className="rounded-lg h-80 w-full"
                src={image}
                alt="" />
            <div className="absolute top-28 bottom-0">   
                <p className=" bg-orange-300 mb-2 mt-4 px-4 text-base text-white">
                    {description}
                </p>
               <div className="text-center">
               <button onClick={handleBack} className="btn btn-error">back</button>
               </div>
            </div>
            
        </div>
    );
};

export default SigleServiceCart;