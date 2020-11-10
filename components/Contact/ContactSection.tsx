import React from 'react';
import styled from 'styled-components';
import { Container, H3, Paragraph } from '../../styles/styles';
import Button from '../Button/Button';
import Wave from '../Button/Wave';

const Wrapper = styled.section`
  padding: 5rem 0;
  border-top: 1px solid #eeeeee;
`;

const TextWrapper = styled.div`
  flex: 2;

  @media (max-width: 630px) {
    flex-basis: 100%;
  }
`;

const Highlight = styled.strong`
  color: #ff9e52;
`;

const C2AWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 0;
`;

const ContactSection = () => {
  return (
    <Wrapper>
      <Container style={{ display: 'flex', flexWrap: 'wrap' }}>
        <TextWrapper>
          <H3>
            <strong>Need design help?</strong> Fellow designer just dropping by?
            (hi!) <strong>Founder building something cool?</strong> Spotted a
            problem with my site? <strong>Just wanna chat?</strong>
            <br />
            <Highlight>I’d love to hear from you.</Highlight>
          </H3>
        </TextWrapper>
        <C2AWrapper>
          <Button onClick={() => window.$crisp.push(['do', 'chat:open'])}>
            <Wave />
            <Paragraph style={{ margin: '0' }}>Send a message</Paragraph>
          </Button>
        </C2AWrapper>
      </Container>
    </Wrapper>
  );
};

export default ContactSection;
