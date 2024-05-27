import {
  WorkingImg,
  FlexContainer,
  Title,
  Content,
  ContentContainer,
  InfiniteRotate,
} from '../style/style';

const Working = () => {
  const img = `${window.location.origin}/docker.svg`;
  return (
    <>
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
        <InfiniteRotate>
          <WorkingImg src={img} alt='Estamos trabalhando' />
        </InfiniteRotate>
      </FlexContainer>
    </>
  );
};

export default Working;
