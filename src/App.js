import {BrowserRouter,Routes, Route } from 'react-router-dom'
import HomeMain from './homeMain';
import Navbar from './navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<HomeMain />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
