import Image from 'next/image';
import styled from 'styled-components';

export const StBackgroundImage = styled(Image)`
  width: 100vw;
  height: 100vh;
  background-image: url('background.png');
  position: fixed;
  top: 0;
  left: 0;
  z-index: -100;
  background-size: cover;
  background-repeat: no-repeat;
`;
