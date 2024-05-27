import {
  Container,
  Content,
  ContentContainer,
  Subtitle,
  List,
  SubtitleLevel3,
  LinkRoute,
  Title,
  FlexContainer,
} from '../style/style';

const Introduction = () => {
  return (
    <>
      <main>
        <Title>Docker e Containers</Title>
        <Container background='main-blue'>
          <ContentContainer>
            <Content color='white'>
              Docker é uma plataforma que simplifica o processo de criar,
              implantar, e gerenciar containers. Isso garante a desenvolvedores
              e administradores em definir as ferramentas e APIs para gerenciar
              aplicativos de containers. Com Docker, você pode construir e
              empacotar códigos, bibliotecas e dependências na imagem do
              container, que podem ser distribuídos e rodar consistentemente em
              qualquer ambiente que suporta Docker.
            </Content>
          </ContentContainer>
        </Container>

        <Container>
          <ContentContainer>
            <Subtitle>O que são Containers?</Subtitle>
            <Content>
              Containers são leves, portáteis e ambientes de softwares isolados
              que permitem desenvolvedores rodar e empacotar aplicações com suas
              dependências, consistentemente entre diferentes plataformas.
              Containers ajudam a agilizar o desenvolvimento de aplicações,
              deploys e gerenciamento de processos enquanto garante que a
              aplicação rode consistentemente, independente da infra-estrutura.
            </Content>
          </ContentContainer>
        </Container>

        <Container background='main-blue'>
          <ContentContainer>
            <Subtitle color='white'>Como containers funcionam?</Subtitle>
            <Content color='white'>
              Ao contrário da virtualização tradicional, que emula uma operação
              completa de um sistema operacional com recursos de hardware,
              containers compartilham o kernel do sistema operacional de seu
              hospedeiro e aproveitam uma técnica leve de virtualização para
              criar processos isolados. Esta abordagem lida com diversos
              benefícios, incluindo:
            </Content>
            <List color='white'>
              <li>
                <b>Eficiência:</b> Containers tem menos sobrecarga e podem
                compartilhar bibliotecas em comum e executar arquivos, sendo
                possível executar mais containers em um único hospedeiro,
                similar a uma máquina virtual (VM).
              </li>
              <li>
                <b>Portabilidade:</b> Containers encapsulam aplicações e suas
                dependências, então podem movimentar e rodar com uma maios
                facilidade entre diferentes ambientes e plataformas
                consistentemente.
              </li>
              <li>
                <b>Rápida configuração:</b> À partir do momento que containers
                não precisam de uma inicialização completa de sistema
                operacional, podem inicializar e finalizar processos mais
                rápidos que VMs.
              </li>
              <li>
                <b>Consistência:</b> Containers garantem um ambiente de
                desenvolvimento consistente, testável, e estados de produção de
                uma aplicação, reduzindo o problema "mas na minha máquina
                funciona".
              </li>
            </List>
          </ContentContainer>
        </Container>

        <Container>
          <Subtitle>Por que precisamos de Containers?</Subtitle>
          <ContentContainer>
            <Content>
              No mundo de desenvolvimento de software e deploy, consistência e
              eficiência são cruciais. Antes de containers existirem,
              desenvolvedores costumavam encarar desafios quando deploy de
              aplicações entre diferentes ambientes incluíam:
            </Content>
            <List>
              <li>
                <b>Inconsistência de ambientes:</b> Desenvolvedores costumam
                trabalhar em diferentes ambientes de desenvolvimento que podem
                ter diferentes configurações e bibliotecas comparando com
                ambientes de produção.
              </li>
              <li>
                <b>Recursos ineficientes de utilização:</b> Máquinas Virtuais
                (VMs) foram amplamente utilizados para superar ambientes
                inconsistentes. Entretanto, VMs precisam de sistemas
                operacionais completos para rodar cada aplicação, fazendo o
                recurso de utilização ineficiente.
              </li>
              <li>
                <b>Processos lentos e problemas de escalabilidade:</b>{' '}
                Tradicionalmente os métodos de deploy tem um tempo de lançamento
                no mercado mais lentos e a dificuldade em escalar, o que
                atrapalha a entrega e atualização de software.
              </li>
            </List>
            <Content>
              Com containers endereçamos esses desafios à seguir:
            </Content>
            <List>
              <li>
                <b>Ambiente constante:</b> Containers resolvem inconsistências
                de ambientes de desenvolvimento agrupando uma aplicação e suas
                dependências.
              </li>
              <li>
                <b>Recursos eficientes de utilização:</b> Diferente das VMs,
                containers compartilham os recursos kernel do sistema
                operacional, que os fazem mais leves e eficientes. Containers
                são designados para utilizar poucos recursos e inicializar mais
                rápido, otimizandos os recursos utilizados.
              </li>
              <li>
                <b>Processos rápidos e escalabilidade:</b> Containers podem ser
                facilmente criados, desmontados e substituídos, permitindo
                desenvolvimento mais rápido e ciclos de deploy. Escalar
                aplicações se tornam mais simples com múltiplos containers para
                serem deployados sem consumir recursos significantes.
              </li>
            </List>
            <Content>
              Em geral, containers tem se tornado uma ferramenta essencial para
              organização para responder as rápidas mudanças do mercado, tendo
              uma melhora mais eficiente sobre os recursos, e garantindo a
              entrega de softwares mais confiáveis e consistentes.
            </Content>
          </ContentContainer>
        </Container>

        <Container background='main-blue'>
          <Subtitle color='white'>
            Máquina Física vs Máquina Virtual vs Containers
          </Subtitle>
          <ContentContainer>
            <Content color='white'>
              Abordaremos de forma rápida sobre as diferenças entre máquina
              física, máquina virtual e containers.
            </Content>
            <SubtitleLevel3 color='white'>Máquina Física</SubtitleLevel3>
            <Content color='white'>
              Máquina física é um termo utilizado para descrever um computador
              que roda diretamente em seu hardware sem qualquer virtualização. É
              a forma mais performática de rodar uma aplicação, mas é uma forma
              que existe pouca flexibilidade. Você pode rodar apenas uma
              aplicação por servidor, e não pode mudar a aplicação para outro
              servidor de uma forma simples.
            </Content>
            <SubtitleLevel3 color='white'>Máquinas Virtual</SubtitleLevel3>
            <Content color='white'>
              Máquinas virtuais (VMs) são uma forma de rodar múltiplas
              aplicações em um único servidor. Cada máquina virtual roda no topo
              do hipervisor, cada pedaço do software que emula o hardware do
              computador. O hipervisor te permite rodar múltiplos sistemas
              operacionais em um único servidor, e isso permite isolamento entre
              aplicações rodando em diferentes VMs.
            </Content>
            <Content color='white'>
              <i>
                Um hipervisor é um software que você pode usar para executar
                várias máquinas virtuais em uma única máquina física.
              </i>
            </Content>
            <SubtitleLevel3 color='white'>Containers</SubtitleLevel3>
            <Content color='white'>
              Containers são uma forma de rodar múltiplas aplicações em um único
              servidor sem a sobrecarga de um hipervisor. Cada container roda no
              topo do motos do container. O motor do container te permite rodar
              múltiplas aplicações em um único servidor, e também permite
              isolamento entre as aplicações rodando em diferentes containers.
            </Content>
          </ContentContainer>
        </Container>

        <Container>
          <Subtitle>Docker e OCI</Subtitle>
          <ContentContainer>
            <Content>
              <a href='https://opencontainers.org/'>
                Iniciativa de Containers Abertos
              </a>{' '}
              ou <i>Open Container Initiative (OCI)</i>, é um Projeto da
              Fundação Linux que mira a criar padrões de mercado para formato de
              containers e tempos de execução. Seu objetivo principal é garantir
              a compatibilidade e interoperabilidade dos containers entre
              ambientes através de especificações técnicas definidas.
            </Content>
            <SubtitleLevel3>Papel do Docker na OCI</SubtitleLevel3>
            <Content>
              Docker é um dos membros fundadores da OCI, e desempenhou um papel
              fundamental na definição dos padrões para formatos de containers e
              tempos de execução. Inicialmente, Docker desenvolveu que tempos de
              execução de containers (Docker Engine) e formato de imagem (Docker
              Image) que serve como base para as especificações da OCI.
            </Content>
            <SubtitleLevel3>Especificações OCI</SubtitleLevel3>
            <Content>OCI tem duas especificaçÕes principais:</Content>
            <List>
              <li>
                <b>Especificação de Tempo de Execução (runtime-spec):</b> Isso
                define as especificações para executar um container com uma
                tecnologia isolada, similar a um motor de container. O tempo de
                execução do container construindo pelo Docker, chamado
                "conteinerização", tem guiado o desenvolvimento do runtime-spec
                OCI.
              </li>
              <li>
                <b>Especificação de imagem (image-spec):</b> Isso define a o
                formato da imagem do container, que descreve os conteúdos do
                container e podem ser rodados pelo tempo de execução compatível
              </li>
            </List>
            <SubtitleLevel3>Compatibilidade entre Docker e OCI</SubtitleLevel3>
            <Content>
              Docker continua comprometido a dar suporte às especificações do
              OCI e, desde o envolvimento na OCI, tem seu software continuamente
              atualizadas para ser compilado com os padrões OCI. Tempo de
              execução e formato da imagem nos containers Docker são
              completamente compatíveis com as especificações OCI, permitindo
              containers Docker serem rodados por tempo de execução de outros
              compiladores de containers OCI e vice e versa.
            </Content>
            <Content>
              Em resumo, Docker e OCI trabalham juntos para manter a qualidade e
              compatibilidade com os padrões do mercado. Docker tem mantido um
              papel importante no desenvolvimento das especificações da OCI,
              garantindo que o ecossistema permanece saudável, operante, e
              acessível para uma ampla variedade de usuários e plataformas no
              mercado.
            </Content>
          </ContentContainer>
        </Container>
      </main>
      <footer>
        <FlexContainer>
          <LinkRoute
            to='/technologies'
            display='block'
            textalign='end'
            padding='1rem'
            next=' >>'
          >
            Próximo
          </LinkRoute>
        </FlexContainer>
      </footer>
    </>
  );
};

export default Introduction;
