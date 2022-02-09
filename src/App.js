import Annonces from './components/Annonces';
import { Routes, Route } from 'react-router-dom'
import './style.css';
import Home from './components/Home'
import Footer from './components/Footer';
import Ragnar from './components/Ragnar';


function App() {
  return (
    <div className="main">
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Ragnar />
      <Footer />
    </div>
  );
}

export default App;
