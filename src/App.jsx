import './App.scss';
import Search from './pages/Search/Search'
import Results from './pages/Results/Results'

import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Search />} />
          <Route path='/results' element={<Results />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
