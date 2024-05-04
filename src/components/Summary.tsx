import { Subtitle, LinkRoute } from '../style/style';

const Summary = () => {
  return (
    <>
      <Subtitle>Sumário</Subtitle>
      <ul>
        <li>
          <LinkRoute to='/introduction'>Introdução</LinkRoute>
        </li>
        <ul>
          <li>Docker e Containers</li>
          <li>Por que precisamos de Containers?</li>
          <li>Máquina Física vs Máquina Virtual vs Containers</li>
          <li>Docker e OCI</li>
        </ul>
        <li>
          <LinkRoute to='/technologies'>Tecnologias</LinkRoute>
        </li>
        <ul>
          <li>Namespaces</li>
          <li>cgroups</li>
          <li>Sistemas de arquivos de união</li>
        </ul>
        <li>
          <LinkRoute to='/installation'>Instalação / Setup</LinkRoute>
        </li>
        <ul>
          <li>Docker Desktop (Windows / Mac / Linux)</li>
          <li>Docker Engine (Linux)</li>
        </ul>
        <li>
          <LinkRoute to='/basics-of-docker'>Básico do Docker</LinkRoute>
        </li>
        <li>
          <LinkRoute to='/data-persistence'>Persistência de Dados</LinkRoute>
        </li>
        <ul>
          <li>Sistema de arquivos de Contêiner Efêmero</li>
          <li>Montar Volumes</li>
          <li>Montar Vínculos</li>
        </ul>
        <li>
          <LinkRoute to='/third-party-images'>
            Utilizando Imagens de Terceiros
          </LinkRoute>
        </li>
        <ul>
          <li>Banco de Dados</li>
          <li>Teste de Ambientes Interativos</li>
          <li>Utilitários de Linha de Comando</li>
        </ul>
        <li>
          <LinkRoute to='/building-container-images'>
            Construir Container Imagens
          </LinkRoute>
        </li>
        <ul>
          <li>Dockerfile</li>
          <li>Cache de Camada Eficiente</li>
          <li>Tamanho de Imagem e Segurança</li>
        </ul>
        <li>
          <LinkRoute to='/container-registries'>
            Registros de Container
          </LinkRoute>
        </li>
        <ul>
          <li>Melhores Práticas de Versionar Imagens</li>
          <li>Outros (ghcr, ecr, gcr, act, etc)</li>
          <li>Dockerhub</li>
        </ul>
        <li>
          <LinkRoute to='/running-containers'>Rodando Containers</LinkRoute>
        </li>
        <ul>
          <li>docker run</li>
          <li>docker compose</li>
          <li>Configurando Opções de Runtime</li>
        </ul>
        <li>
          <LinkRoute to='/container-security'>Segurança de Container</LinkRoute>
        </li>
        <ul>
          <li>Segurança de Imagem</li>
          <li>Segurança de Runtime</li>
        </ul>
        <li>
          <LinkRoute to='/docker-cli'>Docker CLI</LinkRoute>
        </li>
        <ul>
          <li>Containers</li>
          <li>Imagens</li>
          <li>Volumes</li>
          <li>Networks</li>
        </ul>
        <li>
          <LinkRoute to='/developer-experience'>
            Experiência de Desenvolvedor(a)
          </LinkRoute>
        </li>
        <ul>
          <li>Hot Reloading</li>
          <li>Debbugers</li>
          <li>Testes</li>
          <li>Integração Contínua</li>
        </ul>
        <li>
          <LinkRoute to='/deploying-containers'>Deploy Containers</LinkRoute>
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
