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
  padding: 0 2.5rem;
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
  position: relative;
  cursor: pointer;

  text-decoration: ${({ current }) => (current ? 'underline' : 'none')};
  margin-left: 3.5rem;
  font-size: 1.4rem;
`;

export const StDropdown = styled.ul`
  font-size: 1.2rem;
  position: absolute;
  right: -1rem;
  color: ${({ theme }) => theme.clr.base};
  background-color: ${({ theme }) => theme.bgclr.primary};
  box-shadow: ${({ theme }) => theme.boxShadow.normal};
  margin-top: 1rem;
`;

export const StDropdownItem = styled.li`
  ${({ theme }) => theme.mixins.flexBox('row', 'center', 'flex-start')};
  padding: 1rem;
  border-bottom: 2px solid ${({ theme }) => theme.borderclr.base};
  &:last-child {
    color: ${({ theme }) => theme.clr.danger};
    border: none;
  }
  &:hover {
    background-color: ${({ theme }) => theme.bgclr.secondary};
  }
  svg {
    margin-right: 0.75rem;
  }
`;

export const StPageContainer = styled.div`
  padding: 2.5rem;
  min-height: calc(100vh - 100px - 1vh - 1vw);
  display: flex;
  flex-direction: column;
`;
