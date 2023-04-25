import Link from 'next/link';
import styled from 'styled-components';

export const StDiaryCreateBtn = styled(Link)`
  position: fixed;
  padding: 1rem;
  background-color: ${({ theme }) => theme.bgclr.base};
  box-shadow: ${({ theme }) => theme.boxShadow.normal};
  border-radius: 50%;
  bottom: 2rem;
  right: 2rem;
  cursor: pointer;
  &:hover {
    transform: scale(0.94);
  }
  svg {
    color: ${({ theme }) => theme.clr.tertiary};
  }
`;
