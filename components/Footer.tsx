import React from 'react';
import { Detail, H3, Paragraph } from '../styles/styles';
import styled from 'styled-components';
import Name from './Name';
import { SocialIcon } from './Icons/SocialIcons';
import Button from './Button/Button';
import Wave from './Button/Wave';

const LogoWrapper = styled.div`
  padding: 7rem 0;
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #eeeeee;
`;

const LogoLeft = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  border-right: 1px solid #eeeeee;
  text-align: right;
  padding: 1rem;
`;

const LogoRight = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  padding: 1rem;
`;

const Icons = styled.div`
  display: flex;
`;

const Copy = styled.div`
  text-align: center;
  padding: 0.4rem 0;
`;

const Footer = () => {
  return (
    <div>
      <LogoWrapper>
        <LogoLeft>
          <div style={{ width: '164px' }}>
            <Name />
          </div>
        </LogoLeft>
        <LogoRight>
          <div>
            <div>
              <H3>Zak Kempson</H3>
            </div>
            <Icons>
              <SocialIcon name='github' url='https://github.com/zakkempson' />
              <SocialIcon name='twitter' url='https://twitter.com/ZakKempson' />
              <SocialIcon
                name='linkedin'
                url='https://www.linkedin.com/in/zak-kempson/'
              />
              <Button onClick={() => window.$crisp.push(['do', 'chat:open'])}>
                <Wave />
                <Paragraph style={{ margin: '0' }}>Send a message</Paragraph>
              </Button>
            </Icons>
          </div>
        </LogoRight>
      </LogoWrapper>
      <Copy>
        <Detail>© {new Date().getFullYear()} Zak Kempson</Detail>
      </Copy>
    </div>
  );
};

export default Footer;
