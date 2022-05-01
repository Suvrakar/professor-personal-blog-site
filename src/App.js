import logo from './logo.svg';
import './App.css';
import SideNav from "./Components/SideNav/SideNav"
import Footer from './Components/Footer/Footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import About from './Components/About/About';
import { HashRouter } from 'react-router-dom/cjs/react-router-dom.min';
import Home from './Components/Home/Home';
import Research from './Components/Research/Research';
import RGroup from './Components/Research Group/RGroup';
import Pub from './Components/Publications/Pub';

function App() {
  return (
    <div className="">
      <div>
        <SideNav></SideNav>
      </div>
      <div>
        <HashRouter>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/research" component={Research} />
          <Route exact path="/researchgroup" component={RGroup} />
          <Route exact path="/publication" component={Pub} />
        </HashRouter>
      </div>
      <div>
        {/* <Footer /> */}
      </div>

    </div>
  );
}

export default App;
