import './SkillsList.scss';
import Skills from '../../data/Skills';
import SkillCard from '../SkillCard/SkillCard';



const SkillList = () => {
    return (
        <div className='skill-list'>
            <div className='skill-list__card-container'>
            <h4 className='skill-list__card-container__header'>&lt;TECH STACK&gt;</h4>
            <div className='skill-list__card-container__skills'>
                {Skills.map((skill) => {
                    return (
                        <SkillCard key={skill.id} skill={skill} />
                    )
                }
            )}
            </div>
            </div>
        </div>
    );
}
export default SkillList;