import Image from 'next/image';
import styled from 'styled-components';

export const BackgroundImage = styled(Image)`
  width: 100vw;
  height: 100vh;
  background-image: url('background.png');
  position: fixed;
  z-index: -100;
  background-size: cover;
  background-repeat: no-repeat;
`;
