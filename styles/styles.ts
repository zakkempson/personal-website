import styled from 'styled-components';

export const Title = styled.h1`
  font-family: 'Work Sans', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 80px;
  color: #3a3441;
  margin: 0;

  @media (max-width: 630px) {
    font-size: 50px;
  }
`;

export interface TextI {
  inverted?: boolean;
  compact?: boolean;
}

interface Paragraph extends TextI {
  size?: 'small' | 'medium' | 'large';
}

export const SubTitle = styled.h2<TextI>`
  font-family: 'Work Sans', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 48px;
  line-height: 60px;
  color: ${(props) => (props.inverted ? 'white' : '#3a3441')};
  margin-bottom: 1rem;

  transition: color 0.1s ease-out;

  @media (max-width: 630px) {
    font-size: 38px;
  }
`;

export const H3 = styled.h3<TextI>`
  font-family: 'Work Sans', sans-serif;
  font-weight: 300;
  font-size: 30px;
  line-height: 38px;
  color: ${(props) => (props.inverted ? 'white' : '#3a3441')};
  margin-bottom: ${(props) => (props.compact ? '0.2rem' : '1rem')};
  letter-spacing: 0.08rem;

  transition: color 0.1s ease-out;

  @media (max-width: 630px) {
    font-size: 24px;
    line-height: 30px;
  }
`;

export const Paragraph = styled.p<Paragraph>`
  font-family: 'Work Sans', sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: ${(props) =>
    !props.size || props.size === 'medium'
      ? '1.2rem'
      : props.size === 'small'
      ? '1rem'
      : '1.4rem'};
  line-height: ${(props) =>
    !props.size || props.size === 'medium'
      ? '1.8rem'
      : props.size === 'small'
      ? '1.2rem'
      : '2.2rem'};
  letter-spacing: ${(props) =>
    props.size === 'large' ? '0.06rem' : 'inherit'};
  color: ${(props) => (props.inverted ? 'white' : '#3a3441')};
  margin-bottom: 0.4rem;

  transition: color 0.1s ease-out;

  @media (max-width: 630px) {
    font-size: ${(props) =>
      !props.size || props.size === 'medium'
        ? '1.1rem'
        : props.size === 'small'
        ? '0.9rem'
        : '1.3rem'};
    line-height: ${(props) =>
      !props.size || props.size === 'medium'
        ? '1.6rem'
        : props.size === 'small'
        ? '1rem'
        : '2rem'};
  }
`;

export const Detail = styled.p<TextI>`
  font-family: 'Work Sans', sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 0.9rem;
  line-height: 1.3rem;
  color: #3a3441;
  color: ${(props) => (props.inverted ? 'white' : '#3a3441')};
  margin-bottom: 0.2rem;
  text-transform: uppercase;
  letter-spacing: 0.14em;

  transition: color 0.1s ease-out;
`;

interface ContainerI {
  width?: 'normal' | 'narrow';
}

export const Container = styled.div<ContainerI>`
  max-width: ${(props) =>
    !props.width || props.width === 'normal' ? '1300px' : '1000px'};
  margin: auto;
  padding: 0 1rem;
`;
