import styled from 'styled-components';

export const StModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 289;
  background-color: rgba(0, 0, 0, 0.7);
  ${({ theme }) => theme.mixins.flexBox()};
`;
