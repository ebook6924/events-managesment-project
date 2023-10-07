

const CaroselData = ({ items }) => {
    const { name, title, description, image } = items;
    return (
        <div className="card h-72 bg-rose-100 mr-8">
            <div className="avatar pt-4">
                <div className="w-28 rounded-full mx-auto ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src={image} />
                </div>
            </div>
            <div className="card-body">
                <div className="text-center">
                    <h2 className="text-xl font-medium">{name}</h2>
                    <p>{title}</p>
                </div>
                <p>{description}</p>

            </div>
        </div>
    );
};

export default CaroselData;