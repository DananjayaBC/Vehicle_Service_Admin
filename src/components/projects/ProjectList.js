import ProjectSummery from './ProjectSummery'


const ProjectList = ({projects}) => {
    return (
        <div className="project-list section">
            { projects && projects.map(project=>{
                return(
                    <ProjectSummery project={project} key={project.id} />
                )
            })}
        </div>
    )
}

export default ProjectList