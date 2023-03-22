import styled from 'styled-components';

export const StProgressBar = styled.div`
  background-color: ${({ theme }) => theme.bgclr.secondary};
  height: 24px;
  border-radius: 1rem;
  box-shadow: ${({ theme }) => theme.boxShadow.normal};
`;

export const StProgress = styled.div<{ progress: number }>`
  width: ${({ progress }) => `${progress}%`};
  background-color: ${({ theme }) => theme.bgclr.tertiary};
  height: 24px;
  border-radius: 1rem;
`;
