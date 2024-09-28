/// <reference types="vite-plugin-svgr/client" />
import './LandingSection.scss'
import HexLattice from '../../assets/images/HEXAGONAL LATTICE Landing.svg?react';
import 'react-multi-carousel/lib/styles.css';
import NewSkillCarousel from '../NewSkillCarousel/NewSkillCarousel';

const LandingSection = () => {

    return (
        <div className="landing-section">
            <div className='landing-section__img'>
                <HexLattice />
            </div>
            <div className='landing-section__info'>
                <h1 className='landing-section__info__dev-name'>KUMANI KIDD</h1>
                <p className='landing-section__info__dev-role'>WEB DEVELOPER</p>
            </div>
            <div className='landing-section__tech-stack'>
                <NewSkillCarousel />
            </div>
        </div>
    );
};

export default LandingSection;