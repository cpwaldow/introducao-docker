import { NavLink, Outlet } from 'react-router-dom';
import { NavbarContainer } from '../style/style';

const Navbar = () => {
  return (
    <NavbarContainer>
      <nav>
        <NavLink to='/'>Home</NavLink>
        <NavLink
          to='/introduction'
          className={({ isActive, isPending }) =>
            isPending ? 'pending' : isActive ? 'active' : ''
          }
        >
          Introdução
        </NavLink>
        <NavLink to='/technologies'>Tecnologias</NavLink>
        <NavLink to='/installation'>Instalação / Setup</NavLink>
        <NavLink to='/basics-of-docker'>Básico do Docker</NavLink>
        <NavLink to='/data-persistence'>Persistência de Dados</NavLink>
        <NavLink to='/third-party-images'>
          Utilizando Imagens de Terceiros
        </NavLink>
        <NavLink to='/building-container-images'>
          Construir Container Imagens
        </NavLink>
        <NavLink to='/container-registries'>Registros de Container</NavLink>
        <NavLink to='/running-containers'>Rodando Containers</NavLink>
        <NavLink to='/container-security'>Segurança de Container</NavLink>
        <NavLink to='/docker-cli'>Docker CLI</NavLink>
        <NavLink to='/developer-experience'>
          Experiência de Desenvolvedor(a)
        </NavLink>
        <NavLink to='/deploying-containers'>Deploy Containers</NavLink>
      </nav>
      <div>
        <Outlet />
      </div>
    </NavbarContainer>
  );
};

export default Navbar;
