import styled from 'styled-components';

export const StLayout = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const StContainer = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.bgclr.primary};
  box-shadow: ${({ theme }) => theme.boxShadow.normal};
`;

export const StContent = styled.div`
  min-height: calc(100vh - 80px - 1vh - 1vw);
  display: flex;
  flex-direction: column;
`;
