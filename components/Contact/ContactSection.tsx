import React from 'react';
import styled from 'styled-components';
import { Container, H3 } from '../../styles/styles';

const Wrapper = styled.section`
  padding: 5rem 0;
  border-top: 1px solid #eeeeee;
`;

const ContactSection = () => {
  return (
    <Wrapper>
      <Container style={{ display: 'flex' }}>
        <div style={{ flex: 2 }}>
          <H3>
            <strong>Need design help?</strong> Fellow designer just dropping by?
            (hi!) <strong>Founder building something cool?</strong> Spotted a
            problem with my site? <strong>Just wanna chat?</strong> I’d love to
            hear from you.
          </H3>
        </div>
        <div style={{ flex: 1 }}>
          <a>Contact me</a>
        </div>
      </Container>
    </Wrapper>
  );
};

export default ContactSection;
