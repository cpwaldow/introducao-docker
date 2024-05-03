import styled from 'styled-components';
import { ContentBoxType } from '../types';

export const Container = styled.section<ContentBoxType>`
  background-color: ${(props) => props.background};
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
