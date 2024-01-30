import styled from 'styled-components';

export const TextComponent = styled.p<{
  size: string;
  color: string;
  family: string;
  weight: string;
  line:string;
}>`
  font-family: ${(props) => props.family};
  font-size: ${(props) => props.size};
  color: ${(props) => props.color};
  font-weight: ${(props) => props.weight};
  line-height: ${(props) => props.line};
`;
