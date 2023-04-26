import Link from 'next/link';
import styled from 'styled-components';

export const StHeader = styled.div`
  width: 100vw;
  height: 80px;
  padding: 0 4rem;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;
  color: ${({ theme }) => theme.clr.tertiary};
  background-color: ${({ theme }) => theme.bgclr.base};
  box-shadow: ${({ theme }) => theme.boxShadow.normal};
  ${({ theme }) => theme.mixins.flexBox('row', 'center', 'space-between')}
`;

export const StHeaderLeft = styled.div`
  ${({ theme }) => theme.mixins.flexBox()};
`;

export const StLogo = styled(Link)`
  ${({ theme }) => theme.mixins.flexBox()};
  padding-right: 2rem;
  margin-right: 2rem;
  border-right: 2px solid ${({ theme }) => theme.borderclr.primary};
`;

export const StLogoText = styled.div`
  font-weight: bold;
  font-size: 2.25rem;
  margin-left: 0.75rem;
`;

export const StHeaderRight = styled.div`
  ${({ theme }) => theme.mixins.flexBox()};
  border: 2px solid ${({ theme }) => theme.borderclr.primary};
  border-radius: 1rem;
`;

export const StWalletBox = styled.div`
  ${({ theme }) => theme.mixins.flexBox()};
  padding: 0.25rem 0.75rem;
  border-radius: 1rem 0rem 0rem 1rem;
  border-right: 2px solid ${({ theme }) => theme.borderclr.primary};
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    transition: 0.2s;
  }
`;

export const StWalletText = styled.span`
  margin-left: 0.5rem;
  font-size: 1.25rem;
`;

export const StUserDropdown = styled.div<{ isOpen: boolean }>`
  cursor: pointer;
  position: relative;
  padding: 0.25rem 0.75rem;
  border-radius: 0 1rem 1rem 0;
  background-color: ${({ isOpen, theme }) =>
    isOpen && 'rgba(255, 255, 255, 0.1)'};
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    transition: 0.2s;
  }
`;

export const StDropdown = styled.ul`
  font-size: 1.25rem;
  position: absolute;
  right: 0;
  color: ${({ theme }) => theme.clr.base};
  background-color: ${({ theme }) => theme.bgclr.primary};
  box-shadow: ${({ theme }) => theme.boxShadow.normal};
  margin-top: 0.75rem;
  border-radius: 1rem;
`;

export const StDropdownItem = styled.li`
  ${({ theme }) => theme.mixins.flexBox('row', 'center', 'flex-start')};
  padding: 1rem 1.25rem;
  border-bottom: 2px solid ${({ theme }) => theme.borderclr.base};
  &:first-child {
    border-radius: 1rem 1rem 0 0;
  }
  &:last-child {
    color: ${({ theme }) => theme.clr.danger};
    border: none;
    border-radius: 0 0 1rem 1rem;
  }
  &:hover {
    background-color: ${({ theme }) => theme.bgclr.secondary};
  }
  svg {
    margin-right: 1rem;
  }
`;
