import styled from 'styled-components';

export const StSpinnerContainer = styled.div`
  ${({ theme }) => theme.mixins.flexBox('column')};
  position: absolute;
  top: 1rem;
  left: 0rem;
  right: 0rem;
  bottom: 0rem;
`;

export const Message = styled.h1`
  font-size: 1.25rem;
  margin-top: 2rem;
  color: ${({ theme }) => theme.clr.quaternary};
`;
