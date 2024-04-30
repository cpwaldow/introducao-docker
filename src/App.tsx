import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/introduction' element={<h1>Introdução</h1>} />
        <Route path='/technologies' element={<h1>Tecnologias</h1>} />
        <Route path='/installation' element={<h1>Instalação / Setup</h1>} />
        <Route path='/basics-of-docker' element={<h1>Básico do Docker</h1>} />
        <Route
          path='/data-persistence'
          element={<h1>Persistência de Dados</h1>}
        />
        <Route
          path='/third-party-images'
          element={<h1>Utilizando Imagens de Terceiros</h1>}
        />
        <Route
          path='/building-container-images'
          element={<h1>Construir Container Imagens</h1>}
        />
        <Route
          path='/container-registries'
          element={<h1>Registros de Container</h1>}
        />
        <Route
          path='/running-containers'
          element={<h1>Rodando Containers</h1>}
        />
        <Route
          path='/container-security'
          element={<h1>Segurança de Container</h1>}
        />
        <Route path='/docker-cli' element={<h1>Docker CLI</h1>} />
        <Route
          path='/developer-experience'
          element={<h1>Experiência de Desenvolvedor(a)</h1>}
        />
        <Route
          path='/deploying-containers'
          element={<h1>Deploying Containers</h1>}
        />
      </Routes>
    </>
  );
}

export default App;
