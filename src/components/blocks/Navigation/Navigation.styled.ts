import styled from 'styled-components';

export const StNav = styled.div`
  ${({ theme }) => theme.mixins.flexBox('row')};
  font-size: 1.25rem;
  font-weight: bold;
`;

export const StNavItem = styled.div<{ current?: boolean }>`
  cursor: pointer;
  margin-right: 3rem;
  color: ${({ theme, current }) => current && theme.clr.disabled};
  &:hover {
    color: ${({ theme }) => theme.clr.disabled};
    transition: 0.2s;
  }
`;
