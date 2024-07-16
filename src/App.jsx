// import "./App.css";
// import Recipepage from './pages/recipepage';
// import { Routes, Route } from "react-router-dom";
import {BrowserRouter as Router , Route,Routes} from 'react-router-dom'
import  Navbar  from "./navbar";
import Food from "./food";
// import Home  from "./pages/home";
import  About  from "./pages/about";
import  Contact  from "./pages/contact";
import Recipepage from './pages/recipepage';
import Notfound from './pages/notfound';
function App() {
  return (
    <div className="">
      <Router>
        {/* <Navbar /> */}
        {/* <Recipepage /> */}
        <Routes>
          <Route element={<Navbar />} path='/'>
          
          <Route path="/food" element={<Food />} />
          {/* <Route path="/home" exact element={<Home />} /> */}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/recipe/:recipeName" element={<Recipepage />} />
          </Route>
          <Route path="*" element={<Notfound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;