import styled from 'styled-components';

export const StLayout = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  top: 0;
  left: 0;
`;

export const StContent = styled.div`
  padding: 0 4rem;
  width: 1280px;
  margin: 0 auto;
  min-height: calc(100vh - 80px - 1vh - 1vw);
  display: flex;
  flex-direction: column;
`;

export const StSmallContent = styled(StContent)`
  max-width: 980px;
`;
