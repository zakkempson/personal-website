import React from 'react';
import styled from 'styled-components';
import { ResponsiveContext } from '../../pages/_app';
import { Paragraph, H3, Title } from '../../styles/styles';
import Button from '../Button/Button';
import Wave from '../Button/Wave';
import Name from '../Name';

const Intro = styled.section`
  display: flex;
  flex-wrap: wrap;
  min-height: 60vh;
  padding: 1rem 1rem 0 1rem;
`;

const IntroLeft = styled.div`
  flex: 1;
  position: relative;
  display: flex;
  align-items: center;
  min-height: 60vh;

  @media (max-width: 630px) {
    align-items: start;
    flex-basis: 100%;
  }

  @media (max-width: 500px) {
    min-height: 90vw;
  }
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
  max-width: 230px;

  @media (max-width: 630px) {
    left: 50%;
    transform: translateX(-50%);
  }

  @media (max-width: 600px) {
    width: 45%;
  }
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
  const { isMobile } = React.useContext(ResponsiveContext);

  return (
    <Intro>
      <IntroLeft>
        {!isMobile && <Spacer />}
        <IntroName>
          <Title> Hey, i'm</Title>
          <Name />
        </IntroName>
        <ZakImage src='/images/zak.png' alt={`Picture of Zak`} />
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
            <Button
              onClick={() => window.$crisp.push(['do', 'chat:open'])}
              secondary
              fluid={isMobile}
            >
              <Wave />
              <Paragraph style={{ margin: '0' }}>Send a message</Paragraph>
            </Button>
          </div>
        </IntoRightContent>
      </IntroRight>
    </Intro>
  );
};

export default IntroComponent;
