import { useLoaderData, useNavigation } from "react-router-dom";
import ServiceDetails from "./ServiceDetails";
import LoadingSpainer from "./LoadingSpainer";

const Service = () => {
    const data = useLoaderData()
    //console.log(data)
    const navigation = useNavigation()
    if (navigation.state === "loading") {
        return <LoadingSpainer></LoadingSpainer>
    }
    return (
        <div className="mt-10">
            <h2 className="text-center text-3xl font-semibold bg-gradient-to-r from-primary to-danger bg-clip-text text-transparent">Our Service </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-3 gap-3 mt-8">
                {data.map(service =><ServiceDetails
                key={service.id}
                service={service}
                ></ServiceDetails>)}
            </div>
        </div>
    );
};

export default Service;