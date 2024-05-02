import { Link } from 'react-router-dom';

const Introduction = () => {
  return (
    <>
      <header>
        <Link to='/'>Home</Link>
      </header>
      <main>
        <h1>Docker e Containers</h1>

        <p>
          Docker é uma plataforma que simplifica o processo de criar, implantar,
          e gerenciar containers. Isso garante a desenvolvedores e
          administradores em definir as ferramentas e APIs para gerenciar
          aplicativos de containers. Com Docker, você pode construir e empacotar
          códigos, bibliotecas e dependências na imagem do container, que podem
          ser distribuídos e rodar consistentemente em qualquer ambiente que
          suporta Docker.
        </p>

        <h2>O que são Containers?</h2>
        <p>
          Containers são leves, portáteis e ambientes de softwares isolados que
          permitem desenvolvedores rodar e empacotar aplicações com suas
          dependências, consistentemente entre diferentes plataformas.
          Containers ajudam a agilizar o desenvolvimento de aplicações, deploys
          e gerenciamento de processos enquanto garante que a aplicação rode
          consistentemente, independente da infra-estrutura.
        </p>

        <h2>Como containers funcionam?</h2>

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
            possível executar mais containers em um único hospedeiro, similar a
            uma máquina virtual (VM).
          </li>
          <li>
            <b>Portabilidade:</b> Containers encapsulam aplicações e suas
            dependências, então podem movimentar e rodar com uma maios
            facilidade entre diferentes ambientes e plataformas
            consistentemente.
          </li>
          <li>
            <b>Rápida configuração:</b> À partir do momento que containers não
            precisam de uma inicialização completa de sistema operacional, podem
            inicializar e finalizar processos mais rápidos que VMs.
          </li>
          <li>
            <b>Consistência:</b> Containers garantem um ambiente de
            desenvolvimento consistente, testável, e estados de produção de uma
            aplicação, reduzindo o problema "mas na minha máquina funciona".
          </li>
        </ul>
      </main>
      <footer>
        <Link to='/technologies'>Próximo</Link>
      </footer>
    </>
  );
};

export default Introduction;
