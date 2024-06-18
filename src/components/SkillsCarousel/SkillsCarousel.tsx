import './SkillsCarousel.scss';
import SkillCard from '../SkillCard/SkillCard';
import Skills from '../../data/Skills';
import arrow from '../../assets/icons/arrow.png';
import useScreenSize from '../UseScreenSize/UseScreenSize';
import { useEffect, useState } from 'react';

const SkillsCarousel = () => {
    const [skillIndex, setSkillIndex]= useState<number>(0);
    const [skillsToShow, setSkillsToShow] = useState<number>(11);
    const { width } = useScreenSize();

    
    useEffect(() => {
        if (width < 1700 && width > 1340) {
                setSkillsToShow(8)
        } else if (width < 1339 && width > 1081) {
                setSkillsToShow(6)
        } else if (width < 1081 && width > 471) {
                setSkillsToShow(5)
        } else if (width < 470 && width > 376) {
                setSkillsToShow(4)
        } else if (width < 375) {
                setSkillsToShow(3)
        } else {
                setSkillsToShow(11)
        }
    }
    , [width]);


    const handleBackClick = () => {
        if (skillIndex > 0) {
            setSkillIndex(skillIndex - 1);
        } 
    }

    const handleFrontClick = () => {
        if (skillIndex + skillsToShow < Skills.length ) {
            setSkillIndex(skillIndex + 1);
        }

    }

    const skillTitle = width < 1700 ? 'TECH STACK': '< TECH STACK >';
    const skillsOnShow = Skills.slice(skillIndex, skillIndex + skillsToShow);
    
    


    return (
        <>
            <div className='skills-carousel'>
                <div className='skills-carousel__header'>
                    <h4 className='skills-carousel__header__title'>{skillTitle}</h4>
                </div>
                
                <div className='skills-carousel__card-container'>

                    <div className='skills-carousel__card-container__back-img'>
                        <img src={arrow} alt='back' onClick={handleBackClick} />
                    </div>
                    <div className='skills-carousel__card-container__cards'>
                        {skillsOnShow.map((skill) => (
                            <div className='skills-carousel__card-container__cards__card'>
                                <SkillCard key={skill.id} skill={skill} />
                            </div>
                        ))}
                    </div>

                    <div className='skills-carousel__card-container__front-img'>
                        <img src={arrow} alt='front' onClick={handleFrontClick}/>
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default SkillsCarousel;
