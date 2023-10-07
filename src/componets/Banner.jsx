

const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://c4.wallpaperflare.com/wallpaper/168/226/504/bible-book-event-lecture-wallpaper-preview.jpg)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md" data-aos="fade-up"
                    data-aos-duration="3000">
                    <h1 className="mb-5 text-4xl font-bold w-full">Education is Backbone of Nation</h1>
                    <p className="mb-5">Education is a fundamental process that equips individuals with knowledge, skills, and critical thinking abilities. It empowers them to pursue careers, make informed decisions, and contribute positively to society growth and development.</p>
                    <button className="btn btn-primary border-2 border-green-500 ">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;