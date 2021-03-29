import { Component } from "react";
import Notification from './Notification'
import ProjectList from '../projects/ProjectList'
import { connect } from 'react-redux'

class Dashboard extends Component {
    render() {
        //console.log(this.props);
        const { projects } = this.props;
        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <ProjectList projects={projects}/>
                    </div>
                    <div className="col s12 m5 offset-m1">
                        <Notification />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToPRops = (state) =>{
    return {
        projects:state.project.projects
    }
}

export default connect(mapStateToPRops)(Dashboard)