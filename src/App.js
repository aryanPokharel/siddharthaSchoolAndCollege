
import './App.css';
import Navbar from './components/Navbar';
import Home from './screens/Home';
import Footer from './components/Footer';
import About from './screens/About';
import { BrowserRouter,Route, Routes } from "react-router-dom";
import Gallery from './screens/Gallery';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/gallery' element={<Gallery />} />
         
        </Routes>
        <Footer />
      </BrowserRouter>

     

    </div>
  );
}

export default App;
