import { Route, Routes } from 'react-router';

import './App.css';
import Cars from './components/Cars';
import Car from './components/Car';
import Search from './components/Search';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="App">
      <Navigation />
      <h4>Contenfull Cars</h4>
      <Routes>
        <Route strict exact path='/' element={<Cars />} /> 
        <Route strict exact path='/search' element={<Search />} /> 
        <Route strict exact path='/:id' element={<Car />} /> 
      </Routes>
    </div>
  );
}

export default App;
