import './ProjectCard.scss';
import Project from "../../types/Project";
import Button from "../Button/Button";


type ProjectCardProps = {
    project: Project;
    }



const ProjectCard = ({ project }: ProjectCardProps) => {

    const handleLiveClick = () => {
        window.open(project.live_url, '_blank', 'noopener,noreferrer');
    }
    
    const handleCodeClick = () => {
        window.open(project.github_url, '_blank', 'noopener,noreferrer');
    }
    


    return (
        <div  className="project-card">
            <div className="project-card__image">
                <img src={project.image} alt={project.name} />
            </div>
            <div className="project-card__content">
                <h3 className="project-card__title">{project.name}</h3>
                <p className="project-card__description">{project.description}</p>
            </div>
            <div className="project-card__buttons">
                <div onClick={handleCodeClick}>
                    <Button label="Code" />
                </div>
                <div onClick={handleLiveClick}>
                    <Button label="Preview" />
                </div>
                
            </div>
        </div>
    );
    }

    export default ProjectCard;