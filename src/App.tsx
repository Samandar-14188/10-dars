import { Routes, Route,   BrowserRouter } from 'react-router-dom';

import Home from './page/home';
import './App.css';
import Info from './page/information';
import Play from './page/PLay';

function App() {
  
  return (
    <div >
      <BrowserRouter>
  
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/info' element={<Info />} />
          <Route path='/play' element={<Play />} />

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App