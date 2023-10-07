import Banner from "../componets/Banner";
import Carosel from "../componets/Carosel";
import Contact from "../componets/Contact";
import Section from "../componets/Section";
import Service from "../componets/Service";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Section></Section>
            <Service></Service>
            <Carosel></Carosel>
            <Contact></Contact>
        </div>
    );
};

export default Home;