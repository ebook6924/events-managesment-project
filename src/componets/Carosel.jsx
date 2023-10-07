
import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import CaroselData from "./CaroselData";
const Carosel = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('feedback.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    return (
        <div className="mt-12">
            <h2 className="text-center text-3xl font-semibold bg-gradient-to-r from-primary to-danger bg-clip-text text-transparent">Our Feedback </h2>
            <Marquee pauseOnHover={true} speed={80} className="mt-8">
                {
                    data.map(items => <CaroselData
                        key={items.id}
                        items={items}
                    ></CaroselData>)
                }
            </Marquee>
        </div>
    );
};

export default Carosel;