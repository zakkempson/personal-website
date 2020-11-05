import React from 'react';
import styled from 'styled-components';
import { Paragraph, H3, Title } from '../../styles/styles';
import Button from '../Button/Button';
import Wave from '../Button/Wave';
import Name from '../Name';

const Intro = styled.section`
  display: flex;
  height: 60vh;
`;

const IntroLeft = styled.div`
  flex: 1;
  position: relative;
  display: flex;
  align-items: center;
`;

const Spacer = styled.div`
  flex: 0.2;
`;

const IntroName = styled.div`
  flex: 1;
  max-width: 380px;
`;

const ZakImage = styled.img`
  position: absolute;
  bottom: 0;
  left: 60%;
  z-index: -1;
  width: 230px;
`;

const IntroRight = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const IntoRightContent = styled.div`
  max-width: 580px;
`;

const IntroComponent = () => {
  return (
    <Intro>
      <IntroLeft>
        <Spacer />
        <IntroName>
          <Title> Hey, i'm</Title>
          <Name />
        </IntroName>
        <ZakImage src='/images/zak.png' alt={`Picture of Zak's ugly face`} />
      </IntroLeft>
      <IntroRight>
        <IntoRightContent>
          <H3>
            I’m Zak Kempson, a <strong>product designer</strong> with{' '}
            <strong>4 years</strong> of experience.
          </H3>
          <Paragraph>
            Remarkable products pave the way to a better future, so I get stuck
            in and help bring them to life.
          </Paragraph>
          <Paragraph>
            Along the way I’ve started a company, lead product teams and created
            successful user interfaces for businesses and customers.
          </Paragraph>
          <div style={{ paddingTop: '1rem' }}>
            <Button onClick={() => window.$crisp.push(['do', 'chat:open'])}>
              <Wave />
              Send a message
            </Button>
          </div>
        </IntoRightContent>
      </IntroRight>
    </Intro>
  );
};

export default IntroComponent;
