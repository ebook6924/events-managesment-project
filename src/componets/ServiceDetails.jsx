import { Link } from "react-router-dom";


const ServiceDetails = ({ service }) => {
    const { name, description, price, image, id } = service;
    return (
        <div className=" card-compact w-96 bg-base-100 shadow-xl absulute" data-aos="fade-up"
            data-aos-duration="2000">
            <figure><img src={image} alt="Shoes" className="w-full h-40 border-2 border-green-500 scale-95 duration-300 hover:scale-100" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <h4 className="card-title">Price: ${price}</h4>
                <p>{description.slice(0, 150)}...</p>
                <div className="relative ">
                    <Link to={`/book/${id}`}>
                        <button className="btn btn-primary bottom-0 w-full">Book Buy Now</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;