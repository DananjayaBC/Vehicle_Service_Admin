import React from 'react'

const ProjectDetails = (props) => {
    const id = props.match.params.id;
    return (
       <div className="container section project-details">
           <div className="card z-depth-0">
               <div className="card-content">
                   <span className="card-title">Project Title - {id}</span>
                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis rem illo sequi modi ad, maxime blanditiis explicabo assumenda cumque earum ratione nihil accusantium obcaecati nemo at? Porro ipsum aut facilis.</p>
               </div>
               <div className="card-action gret lghten-4 grye-text">
                   <div>Posted by the Dana</div>
                   <div>28th March</div>
               </div>
           </div>
       </div>
    )
}
export default ProjectDetails