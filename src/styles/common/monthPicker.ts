import styled from 'styled-components';

export const StDateBox = styled.div`
  ${({ theme }) => theme.mixins.flexBox('row', 'center', 'flex-start')};
  font-weight: 700;
  font-size: 1.75rem;
  margin-bottom: 1.5rem;
  cursor: pointer;
`;

export const StYear = styled.span`
  margin: 0 0.4rem;
  color: ${({ theme }) => theme.clr.quaternary};
`;
