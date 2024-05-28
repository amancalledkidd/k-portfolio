/// <reference types="vite-plugin-svgr/client" />
import './LandingSection.scss'
import SkillList from '../SkillsList/SkillsList';
import HexLattice from '../../assets/images/HEXAGONAL LATTICE Landing.svg?react';

const LandingSection = () => {
    return (
        <div className="landing-section">
            <div className='landing-section__img'>
                <HexLattice />
            </div>
            <div className='landing-section__info'>
                <h1 className='landing-section__info__dev-name'>KUMANI KIDD</h1>
                <p className='landing-section__info__dev-role'>JUNIOR SOFTWARE ENGINEER</p>
            </div>
            <div className='landing-section__tech-stack'>
                <SkillList />
            </div>
        </div>
    );
};

export default LandingSection;