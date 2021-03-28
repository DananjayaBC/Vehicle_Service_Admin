import { Link } from 'react-router-dom'
import SignedInLinks from './SigndinLinks'
import SignedOutLinks from './SIgnOutLinks'


const Navbar = () =>{
    return(
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
             <Link to='/' className="brand-logo">Vehicle Admin</Link>
             <SignedInLinks />  
             <SignedOutLinks />
            </div>
        </nav>
    )
}

export default Navbar