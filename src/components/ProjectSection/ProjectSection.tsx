/// <reference types="vite-plugin-svgr/client" />
import ProjectsList from '../ProjectsList/ProjectsList'
import './ProjectSection.scss'
import HexLattice from '../../assets/images/PROJECT HEX LATTICE.svg?react';



const ProjectSection = () => {
    return (
        <div id="projects" className='project-section'>
            <div className='project-section__header'>
                <h2 className='project-section__header__title'>PROJECTS</h2>
                <div className='project-section__header__img'>
                    <HexLattice />
                </div>
            </div>
            <div className='project-section__main'>
                <ProjectsList />
            </div>
        </div>
    )
}

export default ProjectSection
