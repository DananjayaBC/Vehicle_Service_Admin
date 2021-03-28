import { NavLink } from 'react-router-dom'

const SingedOutLinks = () => {
    return (
        <ul className="right">
            <li><NavLink to="/">Signup</NavLink></li>
            <li><NavLink to="/">Login</NavLink></li>
        </ul>
    )
}

export default SingedOutLinks