import Header from '../components/Header';
import {
  Title,
  LinkRoute,
  FlexContainer,
  Container,
  Subtitle,
  ContentContainer,
  Content,
  SubtitleLevel3,
} from '../style/style';

const Technologies = () => {
  return (
    <>
      <Header />
      <main>
        <Title>Tecnologias</Title>
        <Container>
          <Subtitle>Por baixo dos panos</Subtitle>
          <ContentContainer>
            <Content>
              Compreender as principais tecnologias que alimentam o Docker irão
              te ajudar a ter entendimento de como o Docker funciona e te
              ajudará a ter uma plataforma mais eficiente.
            </Content>
          </ContentContainer>
        </Container>
        <Container background='main-blue'>
          <ContentContainer>
            <SubtitleLevel3 color='white'>
              Linux Containers (LXC)
            </SubtitleLevel3>
            <Content color='white'>
              Linux Containers (LXC) é uma fundação para o Docker. LXC é uma
              solução de virtualização mais leve que permite isolar múltiplos
              sistemas para rodar em um único hospedeiro sem a necessidade de
              ter um hipervisor completo. LXC efetivamente isola as aplicações e
              suas dependências em de uma forma otimizada.
            </Content>
          </ContentContainer>
        </Container>
        <Container>
          <ContentContainer>
            <SubtitleLevel3>
              Grupos de Controle / Control Groups (cgroups)
            </SubtitleLevel3>
            <Content>
              Control Groups (cgroups) é uma ferramenta kernel do Linux que
              permite a alocação e gerenciamento de recursos de sistema, como
              CPU, memória, e I/O para os processos. Docker aproveita cgrouos no
              limite de recursos utilizados pelos containers e garante que um
              container não monopolize os recursos do sistema hospedeiro.
            </Content>
          </ContentContainer>
        </Container>
        <Container background='main-blue'>
          <ContentContainer>
            <SubtitleLevel3 color='white'>
              Sistema de União de Arquivos | Union File Systems (UnionFS)
            </SubtitleLevel3>
            <Content color='white'>
              UnionFS é um serviço de sistema de arquivos que permite a
              sobreposição de múltiplos arquivos de sistema em um único, visão
              unificada. Docker utiliza UnionFS para criar uma abordagem de
              camadas para imagens e containers, que permite um melhor
              compartilhamento de arquivos em comum e mais rápido para a criação
              de containers.
            </Content>
          </ContentContainer>
        </Container>
        <Container>
          <ContentContainer>
            <SubtitleLevel3>Espaços para nome | Namespace</SubtitleLevel3>
            <Content>
              Namespaces são outra característica do kernel do Linux que fornece
              processos de isolamento. Eles permitem o Docker a criar espaços de
              trabalhos isolados chamados containers. Namespaces garantem o
              processo dentro de um container não interfere com outros processos
              em outros containers ou no sistema hospedeiro. Existem diversos
              tipos de namespaces, como, PID, NET, MNT e USER, cada um
              responsável por isolar um aspecto diferente do sistema.
            </Content>
          </ContentContainer>
        </Container>
      </main>
      <footer>
        <FlexContainer>
          <LinkRoute to='/introduction' prev='<< '>
            Anterior
          </LinkRoute>
          <LinkRoute to='/installation' next=' >>'>
            Próximo
          </LinkRoute>
        </FlexContainer>
      </footer>
    </>
  );
};

export default Technologies;
