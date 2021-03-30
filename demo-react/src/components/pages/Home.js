import Navbar from "../Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function Home() {
  return (
    <div className="Home">
      <Router>
      <Navbar/>
      </Router>
    </div>
  );
}

export default Home;