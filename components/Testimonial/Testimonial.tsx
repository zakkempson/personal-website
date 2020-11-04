import React from 'react';
import { BrandI } from '../../pages/case-studies/[slug]';
import { H3, Paragraph } from '../../styles/styles';

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
}

const Testimonial = (props: TestimonialI) => {
  return (
    <div style={{ padding: '3rem' }}>
      <H3>{props.name}</H3>
      <Paragraph>{props.role}</Paragraph>
      <Paragraph>{props.description}</Paragraph>
    </div>
  );
};

export default Testimonial;
