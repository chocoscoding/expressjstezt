import './App.css';
import { Routes, Route } from "react-router-dom";
import { Home,Guides } from './routes';
import { Navbar } from './components';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/guides' element={<Guides />} />
      </Routes>
    </div>
  );
}

export default App;
