import './ProjectsList.scss';
import ProjectCard from "../ProjectCard/ProjectCard";
import Projects from '../../data/Projects';


const ProjectsList = () => {
    return (
        <div className='projects-list'>
            <div className="projects-list__card-container">
                {Projects.map((project) => {
                    return <ProjectCard key={project.id} project={project} />;
                })}
            </div>
        </div>
    );
}

export default ProjectsList;