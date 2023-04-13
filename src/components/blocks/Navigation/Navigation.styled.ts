import styled from 'styled-components';

export const StNav = styled.div`
  ${({ theme }) => theme.mixins.flexBox('row')};
  font-size: 1.3rem;
`;

export const StNavItem = styled.div<{ current?: boolean }>`
  cursor: pointer;
  margin-right: 3.25rem;
  text-decoration: ${({ current }) => (current ? 'underline' : 'none')};
`;
