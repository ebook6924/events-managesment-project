import AOS from 'aos';
import 'aos/dist/aos.css';
import pic from '../assets/jangkar.jpg'

const Section = () => {
    AOS.init();
    return (
        <div className='bg-base-200 pt-4' >
              <h2 className="text-center text-3xl pt-10 font-semibold bg-gradient-to-r from-primary to-danger bg-clip-text text-transparent">About us </h2>
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={pic} className="sm:w-full md:w-[50%] rounded-lg  border-2 border-green-500" data-aos="fade-right" data-aos-duration="1000" />
                    <div className="sm:w-full md:w-[50%] " data-aos="fade-left" data-aos-duration="1000"
                    >
                        <h1 className="sm:text-2xl md:text-3xl font-semibold">Research by the book fair suggests that there has been a surge in serial reading among young adults who read regularly.</h1>
                        <p className="py-4">Education is a fundamental pillar of personal and societal development. It is a lifelong journey that empowers individuals with knowledge, skills, and values necessary to navigate the complexities of the world. Education encompasses formal schooling, informal learning, and experiential knowledge acquisition..</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section;