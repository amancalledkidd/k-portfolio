/// <reference types="vite-plugin-svgr/client" />
import './AboutMe.scss'
import Me from '../../data/Me';
import HexLattice from '../../assets/images/MY JOURNEY HEX LATTICE.svg?react';

const AboutMe = () => {
    const splitDescription = Me.description.split('()');

    return (
        <div id='my-journey' className="about-me">
            <div className="about-me__header">
                <h2 className="about-me__header__title" >MY JOURNEY</h2>
                <div className='about-me__header__img'>
                    <HexLattice />
                </div>
            </div>
            <div className="about-me__main">
                <div className="about-me__main__img">
                    <img src={Me.image} alt="profile" />
                </div>
                <div className="about-me__main__info">
                    <h4 className='about-me__main__info__title'>
                        HI, I AM KUMANI
                    </h4>
                        {splitDescription.map((content, index) => (
                            <p className='about-me__main__info__content' key={index}>
                                {content}
                            </p>
                        ))}
                </div>
                
            </div>
        </div>
    );
};

export default AboutMe;