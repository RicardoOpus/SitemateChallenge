import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import ViewItems from './pages/viewItems';
import DetailItem from './pages/detailItem';

import './App.css'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/viewItems" element={<ViewItems />} />
        <Route path="/viewItems/:id" element={<DetailItem />} />

      </Routes>
    </>
  );
}

export default App;
