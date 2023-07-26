
import { Link } from "react-scroll";

/*--------------------
* About Section
----------------------*/
export default function About() {
    return (
        <>
            <section className="section">
                <div className="container">
                    <div className="grid lg:grid-cols-12 grid-cols-1 items-center">
                        <div className="lg:col-span-6 text-center mb-[50px] lg:mb-0">
                            <img className="mx-auto" src="img/aboutme-banner.png" title="Banner" alt="Banner" />
                        </div>
                        <div className="lg:col-span-6 lg:pl-12">
                            <h3 className="font-[600] text-[26px] md:text-[40px] leading-[1.2] text-black mb-[25px]">I'm a Freelancer Front-end Developer with over 3 years of experience.</h3>
                            <p className="text-[16px] md:text-[18px]">I'm a Freelancer Front-end Developer with over 3 years of experience. I'm from San Francisco. I code and create web elements for amazing people around the world. I like work with new people. New people new Experiences.</p>
                            <div className="grid grid-cols-12 pt-5">
                                <div className="col-span-6 sm:col-span-4">
                                    <h5 className="text-[26px] text-orange-600 font-[600]">285+</h5>
                                    <span>Projet Completed</span>
                                </div>
                                <div className="col-span-6 sm:col-span-4">
                                    <h5 className="text-[26px] text-orange-600 font-[600]">190+</h5>
                                    <span>Happy Clients</span>
                                </div>
                            </div>
                            <div className="pt-6">
                                <Link className="px-btn px-btn-theme mr-4" to="contactus">Contact Me</Link>
                                <Link className="px-btn px-btn-dark" to="portfolio">Portfolio</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
