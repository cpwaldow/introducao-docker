import FlexContainer from '../components/FlexContainer';
import Summary from '../components/Summary';
import Title from '../components/Title';

const Home = () => {
  return (
    <>
      <Title title='Introdução ao Docker' />
      <FlexContainer>
        <p>
          Aprender Docker não é apenas uma habilidade valiosa para
          desenvolvedores e engenheiros de DevOps, mas também pode transformar a
          maneira como você desenvolve, implanta e gerencia aplicativos. Com sua
          portabilidade, consistência, eficiência e facilidade de uso, Docker é
          uma ferramenta essencial para qualquer pessoa que trabalhe com
          desenvolvimento de software moderno.
        </p>
      </FlexContainer>
      <Summary />
    </>
  );
};

export default Home;
