import { Link } from 'react-router-dom';
import ContentBox from '../components/ContentBox';
import Title from '../components/Title';

const Introduction = () => {
  return (
    <>
      <header>
        <Link to='/'>Home</Link>
      </header>
      <main>
        <Title title='Docker e Containers' />
        <ContentBox background='var(--main-blue)' color='white'>
          <p>
            Docker é uma plataforma que simplifica o processo de criar,
            implantar, e gerenciar containers. Isso garante a desenvolvedores e
            administradores em definir as ferramentas e APIs para gerenciar
            aplicativos de containers. Com Docker, você pode construir e
            empacotar códigos, bibliotecas e dependências na imagem do
            container, que podem ser distribuídos e rodar consistentemente em
            qualquer ambiente que suporta Docker.
          </p>
        </ContentBox>
        <ContentBox background='var(--main-blue)' color='white'>
          <p>
            Docker é uma plataforma que simplifica o processo de criar,
            implantar, e gerenciar containers. Isso garante a desenvolvedores e
            administradores em definir as ferramentas e APIs para gerenciar
            aplicativos de containers. Com Docker, você pode construir e
            empacotar códigos, bibliotecas e dependências na imagem do
            container, que podem ser distribuídos e rodar consistentemente em
            qualquer ambiente que suporta Docker.
          </p>
        </ContentBox>

        <ContentBox subtitle='O que são Containers?'>
          <p>
            Containers são leves, portáteis e ambientes de softwares isolados
            que permitem desenvolvedores rodar e empacotar aplicações com suas
            dependências, consistentemente entre diferentes plataformas.
            Containers ajudam a agilizar o desenvolvimento de aplicações,
            deploys e gerenciamento de processos enquanto garante que a
            aplicação rode consistentemente, independente da infra-estrutura.
          </p>
        </ContentBox>

        <ContentBox
          background='var(--main-blue)'
          color='white'
          subtitle='Como containers funcionam?'
        >
          <p>
            Ao contrário da virtualização tradicional, que emula uma operação
            completa de um sistema operacional com recursos de hardware,
            containers compartilham o kernel do sistema operacional de seu
            hospedeiro e aproveitam uma técnica leve de virtualização para criar
            processos isolados. Esta abordagem lida com diversos benefícios,
            incluindo:
          </p>
          <ul>
            <li>
              <b>Eficiência:</b> Containers tem menos sobrecarga e podem
              compartilhar bibliotecas em comum e executar arquivos, sendo
              possível executar mais containers em um único hospedeiro, similar
              a uma máquina virtual (VM).
            </li>
            <li>
              <b>Portabilidade:</b> Containers encapsulam aplicações e suas
              dependências, então podem movimentar e rodar com uma maios
              facilidade entre diferentes ambientes e plataformas
              consistentemente.
            </li>
            <li>
              <b>Rápida configuração:</b> À partir do momento que containers não
              precisam de uma inicialização completa de sistema operacional,
              podem inicializar e finalizar processos mais rápidos que VMs.
            </li>
            <li>
              <b>Consistência:</b> Containers garantem um ambiente de
              desenvolvimento consistente, testável, e estados de produção de
              uma aplicação, reduzindo o problema "mas na minha máquina
              funciona".
            </li>
          </ul>
        </ContentBox>
        <ContentBox subtitle='Por que precisamos de Containers?'>
          <p>
            No mundo de desenvolvimento de software e deploy, consistência e
            eficiência são cruciais. Antes de containers existirem,
            desenvolvedores costumavam encarar desafios quando deploy de
            aplicações entre diferentes ambientes incluíam:
          </p>
          <ul>
            <li>
              <b>Inconsistência de ambientes:</b> Desenvolvedores costumam
              trabalhar em diferentes ambientes de desenvolvimento que podem ter
              diferentes configurações e bibliotecas comparando com ambientes de
              produção.
            </li>
            <li>
              <b>Recursos ineficientes de utilização:</b> Máquinas Virtuais
              (VMs) foram amplamente utilizados para superar ambientes
              inconsistentes. Entretanto, VMs precisam de sistemas operacionais
              completos para rodar cada aplicação, fazendo o recurso de
              utilização ineficiente.
            </li>
            <li>
              <b>Processos lentos e problemas de escalabilidade:</b>{' '}
              Tradicionalmente os métodos de deploy tem um tempo de lançamento
              no mercado mais lentos e a dificuldade em escalar, o que atrapalha
              a entrega e atualização de software.
            </li>
          </ul>

          <p>Com containers endereçamos esses desafios à seguir:</p>

          <ul>
            <li>
              <b>Ambiente constante:</b> Containers resolvem inconsistências de
              ambientes de desenvolvimento agrupando uma aplicação e suas
              dependências.
            </li>
            <li>
              <b>Recursos eficientes de utilização:</b> Diferente das VMs,
              containers compartilham os recursos kernel do sistema operacional,
              que os fazem mais leves e eficientes. Containers são designados
              para utilizar poucos recursos e inicializar mais rápido,
              otimizandos os recursos utilizados.
            </li>
            <li>
              <b>Processos rápidos e escalabilidade:</b> Containers podem ser
              facilmente criados, desmontados e substituídos, permitindo
              desenvolvimento mais rápido e ciclos de deploy. Escalar aplicações
              se tornam mais simples com múltiplos containers para serem
              deployados sem consumir recursos significantes.
            </li>
          </ul>
          <p>
            Em geral, containers tem se tornado uma ferramenta essencial para
            organização para responder as rápidas mudanças do mercado, tendo uma
            melhora mais eficiente sobre os recursos, e garantindo a entrega de
            softwares mais confiáveis e consistentes.
          </p>
        </ContentBox>
      </main>
      <footer>
        <Link to='/technologies'>Próximo</Link>
      </footer>
    </>
  );
};

export default Introduction;
