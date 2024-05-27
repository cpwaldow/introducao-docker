import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Introduction from './pages/Introduction';
import Technologies from './pages/Technologies';
import Working from './pages/Working';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route element={<Navbar />}>
          <Route path='/introduction' element={<Introduction />} />
          <Route path='/technologies' element={<Technologies />} />
          <Route path='/installation' element={<Working />} />
          <Route path='/basics-of-docker' element={<Working />} />
          <Route path='/data-persistence' element={<Working />} />
          <Route path='/third-party-images' element={<Working />} />
          <Route path='/building-container-images' element={<Working />} />
          <Route path='/container-registries' element={<Working />} />
          <Route path='/running-containers' element={<Working />} />
          <Route path='/container-security' element={<Working />} />
          <Route path='/docker-cli' element={<Working />} />
          <Route path='/developer-experience' element={<Working />} />
          <Route path='/deploying-containers' />
        </Route>
      </Routes>
    </>
  );
}

export default App;
