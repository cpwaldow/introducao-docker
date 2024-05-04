import Summary from '../components/Summary';
import dockerIcon from '/docker.svg';
import {
  Container,
  Content,
  ContentContainer,
  FlexContainer,
  Title,
} from '../style/style';

const Home = () => {
  return (
    <>
      <FlexContainer>
        <img src={dockerIcon} alt='Docker icon' className='home--icon' />
        <Title>Introdução ao Docker</Title>
      </FlexContainer>

      <Container>
        <ContentContainer>
          <Content>
            Aprender Docker não é apenas uma habilidade valiosa para
            desenvolvedores e engenheiros de DevOps, mas também pode transformar
            a maneira como você desenvolve, implanta e gerencia aplicativos. Com
            sua portabilidade, consistência, eficiência e facilidade de uso,
            Docker é uma ferramenta essencial para qualquer pessoa que trabalhe
            com desenvolvimento de software moderno.
          </Content>
          <Summary />
        </ContentContainer>
      </Container>
    </>
  );
};

export default Home;
