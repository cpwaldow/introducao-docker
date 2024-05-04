import styled from 'styled-components';
import { ContentBoxType, LinkRouteType } from '../types';
import { Link } from 'react-router-dom';

export const Container = styled.section<ContentBoxType>`
  background-color: ${(props) =>
    props.background === 'main-blue' ? '#066da5' : props.background};
  padding: 2rem;
`;

export const ContentContainer = styled.section`
  width: 75%;
  margin: 0 auto;
`;

export const Subtitle = styled.h2`
  text-align: center;
  margin-bottom: 2rem;
  color: ${(props) => props.color};
`;

export const List = styled.ul`
  margin-bottom: 1rem;
  > li {
    margin-bottom: 1rem;
    color: ${(props) => props.color};
  }
`;

export const Content = styled.p`
  margin-bottom: 1rem;
  color: ${(props) => props.color};
`;

export const SubtitleLevel3 = styled.h3`
  margin-bottom: 1rem;
  color: ${(props) => props.color};
`;

export const FlexContainer = styled.section`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;
`;

export const LinkRoute = styled(Link)<LinkRouteType>`
  display: ${(props) => props.display};
  text-align: ${(props) => props.textalign};
  color: ${(props) => (props.color ? props.color : '#066da5')};
  text-decoration: underline;
  cursor: pointer;
  padding: ${(props) => props.padding};
  font-size: 1.2rem;
  &:hover {
    color: var(--main-dark-blue);
  }
  &::after {
    content: ${(props) => JSON.stringify(props.next)};
  }
  &::before {
    content: ${(props) => JSON.stringify(props.prev)};
  }
`;

export const HeaderContainer = styled.header`
  background-color: #066da5;
  text-align: center;
  padding: 1rem;
`;

export const Title = styled.h1`
  text-align: center;
  margin: 3rem 0;
`;
