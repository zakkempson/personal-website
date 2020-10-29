import styled from 'styled-components';

export const Title = styled.h1`
  font-family: 'Work Sans', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 80px;
  color: #3a3441;
  margin: 0;
`;

export interface TextI {
  inverted?: boolean;
}

export const SubTitle = styled.h2<TextI>`
  font-family: 'Work Sans', sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 32px;
  line-height: 38px;
  color: ${(props) => (props.inverted ? 'white' : '#3a3441')};
  margin-bottom: 1rem;

  transition: color 0.1s ease-out;
`;

export const Paragraph = styled.p<TextI>`
  font-family: 'Work Sans', sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 1.2rem;
  line-height: 1.8rem;
  color: #3a3441;
  color: ${(props) => (props.inverted ? 'white' : '#3a3441')};
  margin-bottom: 0.4rem;

  transition: color 0.1s ease-out;
`;

export const Detail = styled.p<TextI>`
  font-family: 'Work Sans', sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 1rem;
  line-height: 1.3rem;
  color: #3a3441;
  color: ${(props) => (props.inverted ? 'white' : '#3a3441')};
  margin-bottom: 0.2rem;

  transition: color 0.1s ease-out;
`;
