import styled from 'styled-components';
import { ContentBoxType } from '../types';

const Container = styled.section<ContentBoxType>`
  background-color: ${(props) => props.background};
  padding: 2rem;
`;

const Content = styled.section<ContentBoxType>`
  width: var(--margin-content);
  margin: 0 auto;
  color: ${(props) => props.color};

  > h3 {
    margin-bottom: 1rem;
  }

  > p {
    margin-bottom: 1rem;
  }

  > ul > li {
    margin-bottom: 1rem;
  }
`;

const Subtitle = styled.h2`
  text-align: center;
  margin-bottom: 2rem;
  color: ${(props) => props.color};
`;

const ContentBox = ({
  background,
  color,
  children,
  subtitle,
}: ContentBoxType) => {
  return (
    <Container background={background}>
      {subtitle && <Subtitle color={color}>{subtitle}</Subtitle>}
      <Content color={color}>{children}</Content>
    </Container>
  );
};

export default ContentBox;
