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

export const StHeader = styled.div`
  width: 100vw;
  max-width: 1024px;
  height: calc(100px + 1vh + 1vw);
  padding: 0 2.25rem;
  position: sticky;
  top: 0;
  z-index: 100;
  color: ${({ theme }) => theme.clr.tertiary};
  background-color: ${({ theme }) => theme.bgclr.base};
  box-shadow: ${({ theme }) => theme.boxShadow.normal};
  ${({ theme }) => theme.mixins.flexBox('row', 'center', 'space-between')}
`;

export const StLogo = styled.div`
  font-size: 3rem;
`;

export const StNav = styled.div`
  ${({ theme }) => theme.mixins.flexBox('row')}
`;

export const StNavItem = styled.div<{ current?: boolean }>`
  cursor: pointer;
  text-decoration: ${({ current }) => (current ? 'underline' : 'none')};
  margin-left: 3rem;
  font-size: 1.4rem;
`;

export const StContent = styled.div`
  min-height: 100vh;
  padding: 2.25rem;
`;
