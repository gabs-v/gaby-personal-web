import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route element={<Home/>} path='/' />
          <Route element={<About/>} path='/about'/>
          <Route element={< Projects/>} path='/projects'/>
          <Route element={<Contact/>} path='/contact' />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
