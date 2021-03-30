import Navbar from "./components/Navbar/Navbar.js";
import "./App.scss"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignUp from './components/pages/Signup';
import Home from './components/pages/Home';
import Login from './components/pages/Login';

function App() {
  return (
    <div className="App">
      <Router>
        
      <Navbar/>
      <Switch>
        <Route path='/Home'  component={Home} />
        <Route path='/sign-up' component={SignUp} />
        <Route path='/login' component={Login} />
      </Switch>
      </Router>
    </div>
  );
}

export default App;
