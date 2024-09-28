import './NewSkillCarousel.scss'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import SkillCard from '../SkillCard/SkillCard';
import skills from '../../data/Skills';

const NewSkillCarousel = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 10
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 7
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 5
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 3
        }
      };

    return (
        <div className='new-skill-carousel'>
            <div className='new-skill-carousel__header'>
                <h4 className='new-skill-carousel__header__title'> &lt; TECH STACK &gt;</h4>
            </div>
            <div className='new-skill-carousel__body'>
                <Carousel 
                    responsive={responsive}
                    customTransition="transform 0.4s ease-in-out" 
                    transitionDuration={300}
                    infinite={true}
                    autoPlay={true}
                    swipeable={true}
                    arrows={false}
                    containerClass='new-skill-carousel__body__carousel-container'
                    itemClass="new-skill-carousel__body__carousel-container__item"
                >
                    {skills.map((skill, index) => {
                        return (
                            <SkillCard key={index} skill={skill} />
                        )
                    })}
                </Carousel>
            </div>
        </div>
    )
}

export default NewSkillCarousel