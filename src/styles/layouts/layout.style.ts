import styled from 'styled-components';

export const StLayout = styled.div`
  width: 100vw;
  max-width: 1024px;
  height: 100vh;
`;

export const StHeader = styled.div`
  width: 100vw;
  max-width: 1024px;
  height: calc(120px + 1vh);
  padding: 0 3.5rem;
  position: fixed;
  color: ${({ theme }) => theme.clr.tertiary};
  background-color: ${({ theme }) => theme.bgclr.base};
  box-shadow: ${({ theme }) => theme.boxShadow.normal};
  ${({ theme }) => theme.mixins.flexBox('row', 'center', 'space-between')}
`;

export const StLogo = styled.div`
  font-size: calc(2.5rem + 0.2vw);
`;

export const StNav = styled.div`
  ${({ theme }) => theme.mixins.flexBox('row')}
`;

export const StNavItem = styled.div<{ current?: boolean }>`
  cursor: pointer;
  text-decoration: ${({ current }) => (current ? 'underline' : 'none')};
  margin-left: 3rem;
  font-size: calc(1.2rem + 0.2vw);
`;

export const StContent = styled.div`
  min-height: 100%;
  background-color: ${({ theme }) => theme.bgclr.primary};
  box-shadow: ${({ theme }) => theme.boxShadow.normal};
`;
