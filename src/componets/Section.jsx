import AOS from 'aos';
import 'aos/dist/aos.css';
import pic from '../assets/jangkar.jpg'

const Section = () => {
    AOS.init();
    return (
        <div className="hero min-h-screen bg-base-200 pt-4">
            <div className="hero-content flex-col lg:flex-row">
                <img src={pic} className="w-[50%] rounded-lg  border-2 border-green-500" data-aos="fade-right" data-aos-duration="1000" />
                <div className="w-[50%] " data-aos="fade-left" data-aos-duration="1000"
                >
                    <h1 className="text-3xl font-semibold">Research by the book fair suggests that there has been a surge in serial reading among young adults who read regularly.</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Section;