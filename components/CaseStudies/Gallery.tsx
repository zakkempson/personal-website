import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface GalleryI {
  children?: ReactNode;
}

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Gallery = (props: GalleryI) => {
  return <Wrapper>{props.children}</Wrapper>;
};

export default Gallery;
