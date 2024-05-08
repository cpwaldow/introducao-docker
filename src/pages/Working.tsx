import Header from '../components/Header';
import {
  WorkingImg,
  FlexContainer,
  Title,
  Content,
  ContentContainer,
} from '../style/style';

const Working = () => {
  const img = `${window.location.origin}/docker.svg`;
  return (
    <>
      <Header />
      <FlexContainer>
        <div>
          <Title>Pode não parecer, mas estamos trabalhando </Title>
          <ContentContainer>
            <Content>
              Em breve este conteúdo estará disponível para você, volte
              novamente mais tarde.
            </Content>
            <Content>Tenha paciência.</Content>
            <Content>Obrigado por nunca mais não voltar 😁</Content>
          </ContentContainer>
        </div>
        <WorkingImg src={img} alt='Estamos trabalhando' />
      </FlexContainer>
    </>
  );
};

export default Working;
