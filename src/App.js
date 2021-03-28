import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import ProjectDetails from './components/projects/ProjectDetails'
import signin from './components/auth/SignIn'
import signUp from './components/auth/SignUp'
import CreateProject from './components/projects/CreateProject'


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/' component={Dashboard} />
          <Route path='/project/:id' component={ProjectDetails} />
          <Route path='/signin' component={signin} />
          <Route path='/signUp' component={signUp} />
          <Route path='/create' component={CreateProject} />

        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
