import styled from 'styled-components';

const STitle = styled.h1`
  text-align: center;
  margin: 3rem 0;
`;

const Title = ({ title }: { title: string }) => {
  return <STitle>{title}</STitle>;
};

export default Title;
