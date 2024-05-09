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
  List,
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
            <Subtitle>Namespace</Subtitle>
            <Content>
              Namespaces são outra característica do kernel do Linux que fornece
              processos de isolamento. Eles permitem o Docker a criar espaços de
              trabalhos isolados chamados containers. Namespaces garantem o
              processo dentro de um container não interfere com outros processos
              em outros containers ou no sistema hospedeiro. Existem diversos
              tipos de namespaces, como, PID, NET, MNT e USER, cada um
              responsável por isolar um aspecto diferente do sistema.
            </Content>
            <Content>
              Os namespaces são uma das principais tecnologias que o Docker
              utiliza para fornecer isolamento entre containers. Nesta seção,
              discutiremos brevemente o que são os namespaces e como funcionam.
            </Content>
            <SubtitleLevel3>O que são namespaces?</SubtitleLevel3>
            <Content>
              No kernel do Linux, os namespaces são um recurso que permite o
              isolamento de vários recursos do sistema, possibilitando que um
              processo e seus filhos tenham uma visão de um subconjunto do
              sistema que é separado de outros processos. Os namespaces ajudam a
              criar uma camada de abstração para manter os processos em
              containers separados uns dos outros e do sistema host.
            </Content>
            <Content>
              Existem vários tipos de namespaces no Linux, incluindo:
            </Content>
            <List>
              <li>
                <b>PID (Process IDs)</b>: Isola o espaço numérico do ID do
                processo, o que significa que os processos dentro de um
                container só veem seus próprios processos, e não os do host ou
                de outros containers.
              </li>
              <li>
                <b>Rede (NET)</b>: Fornece a cada container uma visão separada
                da pilha de rede, incluindo suas próprias interfaces de rede,
                tabelas de roteamento e regras de firewall.
              </li>
              <li>
                <b>Montagem (MNT)</b>: Isola os pontos de montagem do sistema de
                arquivos de forma que cada container tenha seu próprio sistema
                de arquivos raiz, e os recursos montados apareçam apenas dentro
                desse container.
              </li>
              <li>
                <b>UTS (UNIX Time Sharing System)</b>: Permite que cada
                container tenha seu próprio nome de host e nome de domínio,
                separado de outros containers e do sistema host.
              </li>
              <li>
                <b>Usuário (USER)</b>: Mapeia os identificadores de usuário e
                grupo entre o container e o host, para que diferentes permissões
                possam ser definidas para recursos dentro do container.
              </li>
              <li>
                <b>IPC (Comunicação entre processos)</b>: Permite ou restringe a
                comunicação entre processos em diferentes containers.
              </li>
            </List>
            <SubtitleLevel3>Como o Docker usa Namespaces</SubtitleLevel3>
            <Content>
              O Docker utiliza namespaces para criar ambientes isolados para
              containers. Quando um container é iniciado, o Docker cria um novo
              conjunto de namespaces para esse container. Estes namespaces só se
              aplicam dentro do container, pelo que todos os processos
              executados dentro do container têm acesso a um subconjunto de
              recursos do sistema que estão isolados de outros containers, bem
              como do sistema anfitrião.
            </Content>
            <Content>
              Ao aproveitar os namespaces, o Docker garante que os containers
              são verdadeiramente portáteis e podem ser executados em qualquer
              sistema sem conflitos ou interferência de outros processos ou
              containers em execução no mesmo anfitrião.
            </Content>
            <Content>
              Em resumo, os namespaces fornecem um nível de isolamento de
              recursos que permite a execução de vários containers com recursos
              de sistema separados no mesmo anfitrião, sem que interfiram uns
              com os outros. Esta é uma caraterística crítica que forma a
              espinha dorsal da tecnologia de container do Docker.
            </Content>
          </ContentContainer>
        </Container>
        <Container background='main-blue'>
          <ContentContainer>
            <Subtitle color='white'>cgroups</Subtitle>
            <Content color='white'>
              <b>cgroups</b> ou <b>grupos de controle</b> é uma funcionalidade
              do kernel do Linux que lhe permite atribuir e gerir recursos, como
              CPU, memória, largura de banda de rede e I/O, entre grupos de
              processos em execução num sistema. Ele desempenha um papel crucial
              no fornecimento de isolamento de recursos e na limitação dos
              recursos que um container em execução pode usar.
            </Content>
            <Content color='white'>
              O Docker utiliza cgroups para impor restrições de recursos aos
              containers, permitindo-lhes ter um comportamento consistente e
              previsível. Abaixo estão alguns dos principais recursos e
              benefícios dos cgroups no contexto dos containers do Docker:
            </Content>
            <SubtitleLevel3 color='white'>
              Isolamento de recursos
            </SubtitleLevel3>
            <Content color='white'>
              O cgroups ajuda a confinar cada container a um conjunto específico
              de recursos, assegurando uma partilha justa dos recursos do
              sistema entre vários containers. Isto permite um melhor isolamento
              entre diferentes containers, de modo a que um container com mau
              comportamento não consuma todos os recursos disponíveis, afetando
              negativamente os outros containers.
            </Content>
            <SubtitleLevel3 color='white'>Recursos Limitados</SubtitleLevel3>
            <Content color='white'>
              Com os cgroups, pode definir limites para vários recursos do
              sistema utilizados por um container, tais como CPU, memória e I/O.
              Isto ajuda a evitar que um único container consuma recursos
              excessivos e cause problemas de desempenho a outros containers ou
              ao sistema anfitrião.
            </Content>
            <SubtitleLevel3 color='white'>
              Containers Prioritários
            </SubtitleLevel3>
            <Content color='white'>
              Ao atribuir diferentes compartilhamentos de recursos, o cgroups
              permite-lhe dar preferência ou prioridade a determinados
              containers. Isto pode ser útil em cenários onde alguns containers
              são mais críticos do que outros, ou durante situações de elevada
              contenção de recursos.
            </Content>
            <SubtitleLevel3 color='white'>Monitoramento</SubtitleLevel3>
            <Content color='white'>
              O cgroups também oferece mecanismos para monitorizar a utilização
              de recursos de containers individuais, o que ajuda a obter
              informações sobre o desempenho dos containers e a identificar
              potenciais estrangulamentos de recursos.
            </Content>
            <Content color='white'>
              Em geral, o cgroups é uma tecnologia subjacente essencial no
              Docker. Ao aproveitar os cgroups, o Docker fornece um ambiente de
              tempo de execução de containers robusto e eficiente, garantindo
              que os containers têm os recursos necessários e mantendo um bom
              desempenho geral do sistema.
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
