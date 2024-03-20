import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import ViewItems from './pages/viewItems';
import DetailItem from './pages/detailItem';
import PostItems from './pages/postItem';
import DelteItem from './pages/deleteItem';

import './App.css'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/viewItems" element={<ViewItems />} />
        <Route path="/viewItems/:id" element={<DetailItem />} />
        <Route path="/postItems" element={<PostItems />} />
        <Route path="/delteItem" element={<DelteItem />} />
      </Routes>
    </>
  );
}

export default App;
