import React from 'react';
import styled from 'styled-components';

interface GalleryImageI {
  src: string;
}

const Wrapper = styled.div`
  flex: 1;
  border-radius: 4px;
  max-height: 300px;
  box-shadow: 0px 3px 8px 1px rgba(0, 0, 0, 0.3);
  margin: 0.4rem;

  @media (max-width: 630px) {
    max-width: 100%;
    flex-basis: 100%;
  }
`;

const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

const GalleryImage = (props: GalleryImageI) => {
  return (
    <Wrapper>
      <Image src={props.src} alt='Gallery image' />
    </Wrapper>
  );
};

export default GalleryImage;
