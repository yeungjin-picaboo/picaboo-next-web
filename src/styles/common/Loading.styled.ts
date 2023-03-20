import styled from 'styled-components';

export const StSpinnerContainer = styled.div`
  ${({ theme }) => theme.mixins.flexBox('column')};
  flex-grow: 1;
`;

export const LoadingText = styled.h1`
  font-size: 1.25rem;
  margin-top: 3rem;
`;
