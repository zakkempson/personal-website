import React from "react";
import styled from "styled-components";
import { ResponsiveContext } from "../../pages/_app";
import { Paragraph, H3, Title } from "../../styles/styles";
import { getExperienceYears } from "../../util/dates";
import Button from "../Button/Button";
import Wave from "../Button/Wave";
import Name from "../Name";
import Link from "next/link";

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

const ButtonWrapper = styled.div`
  padding-top: 1rem;
  display: flex;
  flex-wrap: wrap;
`;

const SingleButtonWrapper = styled.div`
  margin-right: 1rem;

  @media (max-width: 630px) {
    flex-basis: 100%;
    margin-top: 10px;
  }
`;

const Highlight = styled.strong`
  color: #ff9e52;
  text-decoration: none;
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
        <ZakImage src="/images/zak.png" alt={`Picture of Zak`} />
      </IntroLeft>
      <IntroRight>
        <IntoRightContent>
          <H3>
            I’m Zak Kempson, senior product designer at{" "}
            <Link
              href="https://shopar.ai"
              target="_blank"
              style={{ textDecoration: "none" }}
            >
              <Highlight>ShopAR</Highlight>
            </Link>
          </H3>
          <Paragraph>
            I design and build tools for 3D and AR on the web.
          </Paragraph>
          <ButtonWrapper>
            <SingleButtonWrapper>
              <Button
                secondary
                fluid={isMobile}
                url="mailto:zakkempson@gmail.com"
              >
                <Wave />
                <Paragraph style={{ margin: "0" }}>Contact me</Paragraph>
              </Button>
            </SingleButtonWrapper>
            <SingleButtonWrapper>
              <Button
                url="/files/Zak Kempson - Resumé.pdf"
                secondary
                fluid={isMobile}
                openInNewTab
              >
                <Paragraph style={{ margin: "0" }}>See my resumé</Paragraph>
              </Button>
            </SingleButtonWrapper>
          </ButtonWrapper>
        </IntoRightContent>
      </IntroRight>
    </Intro>
  );
};

export default IntroComponent;
