import styled from 'styled-components'

import { media } from '../styles/media'

const HeadingCommons = `
  font-family: Roboto;
  display: block;
  width: 100%;
`

export const H1 = styled.h1`
  ${HeadingCommons}
  
  text-align: ${(props) => (props.align ? props.align : 'center')};
  font-size: 3.5em; 
  font-weight: ${(props) => (props.bold ? '500' : '100')};

  ${media.largePhone`
    font-size: 2em;
  `}
`

export const H2 = styled.h2`
  ${HeadingCommons} font-size: 2.5em;
  font-weight: ${(props) => (props.bold ? '400' : '100')};
  margin: 0;

  ${media.largePhone`
    font-size: 2em; 
  `};
`