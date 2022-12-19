import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Header from './components/Header';
import Home from './components/Home';
import Notfound from './components/extrajs/Notfound';
function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
