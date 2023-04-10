import Link from "next/link";
import styled from "styled-components";

export const StDiaryCreateBtn = styled(Link)`
  position: fixed;
  padding: 1rem;
  background-color: ${({ theme }) => theme.bgclr.secondary};
  box-shadow: ${({ theme }) => theme.boxShadow.normal};
  border-radius: 2.5rem;
  bottom: 1.5rem;
  right: calc((100vw - 1024px) / 2 + 1.5rem);
  cursor: pointer;
  &:hover {
    transform: scale(0.94);
  }
  svg {
    color: ${({ theme }) => theme.clr.primary};
  }
`;
