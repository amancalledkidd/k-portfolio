import './Home.scss';
import LandingSection from '../LandingSection/LandingSection';
import AboutMe from '../AboutMe/AboutMe';
import ProjectSection from '../ProjectSection/ProjectSection';
import Navbar from '../Navbar/Navbar';
import ContactSection from '../ContactSection/ContactSection';


const Home = () => {
    return (
        <div className="home">
            <Navbar />
            <LandingSection />
            <AboutMe />
            <ProjectSection />
            <ContactSection />
        </div>
    );
};

export default Home;
