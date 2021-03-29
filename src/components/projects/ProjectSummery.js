
const ProjectSummery = ({project}) =>{
    return(
        <div className="card z-depth-0 project-summery">
                <div className="card-content grey-text text-darken-3">
                    <span className="card-title">{project.title}</span>
                    <p>Posted by the Vehicle Owners</p>
                    <p className="grey-text">28th March, 11am</p>
                </div>
            </div>
    )
}

export default ProjectSummery