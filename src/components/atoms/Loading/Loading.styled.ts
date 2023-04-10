import styled from 'styled-components';

export const StSpinnerContainer = styled.div`
  ${({ theme }) => theme.mixins.flexBox('column')};
  flex: 1;
`;

export const Message = styled.h1`
  font-size: 1.25rem;
  margin-top: 3rem;
`;
