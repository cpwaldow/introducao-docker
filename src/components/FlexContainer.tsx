import styled from 'styled-components';

const Container = styled.section`
  display: flex;
  gap: 1rem;
`;

const FlexContainer = ({ children }: { children: any }) => {
  return <Container>{children}</Container>;
};

export default FlexContainer;
