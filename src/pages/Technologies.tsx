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
            <SubtitleLevel3>Linux Containers (LXC)</SubtitleLevel3>
            <Content>
              Linux Containers (LXC) é uma fundação para o Docker. LXC é uma
              solução de virtualização mais leve que permite isolar múltiplos
              sistemas para rodar em um único hospedeiro sem a necessidade de
              ter um hipervisor completo. LXC efetivamente isola as aplicações e
              suas dependências em de uma forma otimizada.
            </Content>
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
