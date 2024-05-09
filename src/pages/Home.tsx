import Summary from '../components/Summary';
import dockerIcon from '/docker.svg';
import {
  Anchor,
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
      <footer>
        <Container background='main-blue'>
          <ContentContainer>
            <Content color='white'>
              Conteúdo original em:{' '}
              <Anchor
                href='https://roadmap.sh/docker'
                target='_blank'
                rel='noopener noreferrer'
                color='white'
                fontweight='bold'
              >
                Roadmap - Docker
              </Anchor>
            </Content>
          </ContentContainer>
        </Container>
      </footer>
    </>
  );
};

export default Home;
