import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Main from './components/Main';
import { Features } from './components/Features';
import Contact from './components/Contact';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Main/>
      <Features/>
      <Contact/>
    </BrowserRouter>
  );
}

export default App;
