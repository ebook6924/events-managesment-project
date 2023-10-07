import { useLoaderData, useNavigate } from "react-router-dom";


const SingleNews = () => {
    const data = useLoaderData()
    //console.log(data)
    const navigate = useNavigate()

    const handleBack =()=>{
       navigate(-1)
    }
    return (
        <div className="block w-9/12 mx-auto rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
            <div className="relative overflow-hidden bg-cover bg-no-repeat">
                <img
                    className="rounded w-full h-80"
                    src={data?.image}
                    alt="" />
            </div>
            <div className="p-6">
                <h3
                    className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                    {data?.title}
                </h3>
                <h5
                    className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                    {data?.authors}
                </h5>
                <div className="badge badge-info gap-2">
                    
                <p className="">Price:{data.price}</p>
                </div>
                
                <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                    {data?.desc}
                </p>
                <p className="text-base text-neutral-600 dark:text-neutral-200">
                    <small className="text-neutral-500 dark:text-neutral-400">Last updated {data.year} ago</small>
                </p>
                <button onClick={handleBack} className="btn btn-sm">Back now</button> 
            </div>
            
        </div>
    );
};

export default SingleNews;