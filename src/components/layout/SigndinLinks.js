import { NavLink } from 'react-router-dom'

const SingedInLinks = () =>{
    return(
       <ul className="right">
           <li><NavLink to="/create">New Project</NavLink></li>
           <li><NavLink to="/">Log Out</NavLink></li>
           <li><NavLink to="/" className='btn btn-floating pink lighten-1'>VA</NavLink></li>
       </ul>
    )
}

export default SingedInLinks