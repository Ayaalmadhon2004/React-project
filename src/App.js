import './App.css';
import Home from './components/home/Home';
import About from './components/about/About'; 
import Service from "./components/service/Service"
import Contact from "./components/contact/Contact"
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
function App() {
  return (
  <Router>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/service" element={<Service/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
  </Router>
  );
}

export default App;
