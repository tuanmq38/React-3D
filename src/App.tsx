import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Main from './components/Main';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Main/>
      {/* <Hero /> */}
    </BrowserRouter>
  );
}

export default App;
