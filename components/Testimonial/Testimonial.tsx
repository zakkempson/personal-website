import React from 'react';
import { BrandI } from '../../pages/case-studies/[slug]';
import { Detail, H3, Paragraph } from '../../styles/styles';
import QuotationMark from './QuotationMark';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';

export interface TestimonialI {
  name: string;
  description: string;
  role: string;
  brand: BrandI;
  linkedInUrl: string;
  twitterUrl: string;
  avatar: {
    url: string;
  };
  color: string;
}

interface TestimonialsContentI {
  color: string;
}

const TestimonialWrapper = styled.div`
  display: flex;
  padding-bottom: 3rem;
`;

const TestiomonialContent = styled.div<TestimonialsContentI>`
  padding-left: 3rem;

  mark {
    font-weight: 600;
    background: none;
    color: ${(props) => props.color};
  }
`;

const AvatarWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0.7rem 0;
`;

const Avatar = styled.img`
  object-fit: cover;
  border-radius: 100%;
  width: 96px;
  height: 96px;
  margin-right: 1rem;
`;

const Testimonial = (props: TestimonialI) => {
  if (!props.name) {
    return null;
  }

  return (
    <TestimonialWrapper>
      <div style={{ minWidth: '140px' }}>
        <QuotationMark color={props.color} />
      </div>
      <TestiomonialContent color={props.color}>
        <ReactMarkdown allowDangerousHtml className='testimonial markdown'>
          {props.description}
        </ReactMarkdown>
        <AvatarWrapper>
          <Avatar src={props.avatar?.url} />
          <div>
            <H3 compact>{props?.name}</H3>
            <Detail>
              {props.role}, {props.brand.name}
            </Detail>
          </div>
        </AvatarWrapper>
      </TestiomonialContent>
    </TestimonialWrapper>
  );
};

export default Testimonial;
