import { Link } from 'react-router-dom';

const Summary = () => {
  return (
    <>
      <h2>Sumário</h2>
      <ul>
        <li>
          <Link to='/introduction'>Introdução</Link>
        </li>
        <ul>
          <li>Docker e Containers</li>
          <li>Por que precisamos de Containers?</li>
          <li>Bare Metal vs Máquina Virtual vs Containers</li>
          <li>Docker e OCI</li>
        </ul>
        <li>
          <Link to='/technologies'>Tecnologias</Link>
        </li>
        <ul>
          <li>Namespaces</li>
          <li>cgroups</li>
          <li>Sistemas de arquivos de união</li>
        </ul>
        <li>
          <Link to='/installation'>Instalação / Setup</Link>
        </li>
        <ul>
          <li>Docker Desktop (Windows / Mac / Linux)</li>
          <li>Docker Engine (Linux)</li>
        </ul>
        <li>
          <Link to='/basics-of-docker'>Básico do Docker</Link>
        </li>
        <li>
          <Link to='/data-persistence'>Persistência de Dados</Link>
        </li>
        <ul>
          <li>Sistema de arquivos de Contêiner Efêmero</li>
          <li>Montar Volumes</li>
          <li>Montar Vínculos</li>
        </ul>
        <li>
          <Link to='/third-party-images'>Utilizando Imagens de Terceiros</Link>
        </li>
        <ul>
          <li>Banco de Dados</li>
          <li>Teste de Ambientes Interativos</li>
          <li>Utilitários de Linha de Comando</li>
        </ul>
        <li>
          <Link to='/building-container-images'>
            Construir Container Imagens
          </Link>
        </li>
        <ul>
          <li>Dockerfile</li>
          <li>Cache de Camada Eficiente</li>
          <li>Tamanho de Imagem e Segurança</li>
        </ul>
        <li>
          <Link to='/container-registries'>Registros de Container</Link>
        </li>
        <ul>
          <li>Melhores Práticas de Versionar Imagens</li>
          <li>Outros (ghcr, ecr, gcr, act, etc)</li>
          <li>Dockerhub</li>
        </ul>
        <li>
          <Link to='/running-containers'>Rodando Containers</Link>
        </li>
        <ul>
          <li>docker run</li>
          <li>docker compose</li>
          <li>Configurando Opções de Runtime</li>
        </ul>
        <li>
          <Link to='/container-security'>Segurança de Container</Link>
        </li>
        <ul>
          <li>Segurança de Imagem</li>
          <li>Segurança de Runtime</li>
        </ul>
        <li>
          <Link to='/docker-cli'>Docker CLI</Link>
        </li>
        <ul>
          <li>Containers</li>
          <li>Imagens</li>
          <li>Volumes</li>
          <li>Networks</li>
        </ul>
        <li>
          <Link to='/developer-experience'>
            Experiência de Desenvolvedor(a)
          </Link>
        </li>
        <ul>
          <li>Hot Reloading</li>
          <li>Debbugers</li>
          <li>Testes</li>
          <li>Integração Contínua</li>
        </ul>
        <li>
          <Link to='/deploying-containers'>Deploy Containers</Link>
        </li>
        <ul>
          <li>Opções PaaS</li>
          <li>Kubernetes</li>
          <li>Docker Swarm</li>
          <li>Nomad</li>
        </ul>
      </ul>
    </>
  );
};

export default Summary;
