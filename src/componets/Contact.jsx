import contact from "../assets/auth.png"

const Contact = () => {
    return (
        <div className="mt-6">
            <h2 className="text-center text-3xl font-semibold bg-gradient-to-r from-primary to-danger bg-clip-text text-transparent">Contact me </h2>
            <div className="md:flex min-h-screen bg-base-100 mt-10">
                <div className=" sm:w-full md:w-[45%] mx-auto" data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000">
                    <img src={contact} alt="" className="w-full" />
                </div>
                <form className="space-y-4 px-4 sm:w-full md:w-[55%]" data-aos="zoom-in-up" data-aos-duration="3000">
                    <div>
                        <label className="block mb-2 text-xl font-medium text-gray-900 dark:text-gray-300">Your email</label>
                        <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="your email" required />
                    </div>
                    <div>
                        <label className="block mb-2 font-medium text-gray-900 dark:text-gray-300 text-xl">Subject</label>
                        <input type="text" id="subject" className="block p-3 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required />
                    </div>
                    <div className="sm:col-span-2">
                        <label className="block mb-2 font-medium text-gray-900 dark:text-gray-400 text-xl">Your message</label>
                        <textarea id="message" rows="6" className="block p-2.5 w-full text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
                    </div>
                    <button type="submit" className="py-3 px-5 font-medium text-center text-black rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 border-2 border-green-500">Send message</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;

 