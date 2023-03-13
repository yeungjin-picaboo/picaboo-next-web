import Link from 'next/link';
import styled from 'styled-components';

export const StButton = styled.button`
  width: 100%;
  padding: 1rem;
  margin-top: 1.25rem;
  font-size: 1.25rem;
  border: none;
  color: ${({ disabled, theme }) =>
    disabled ? theme.clr.disabled : theme.clr.enabled};
  background-color: ${({ disabled, theme }) =>
    disabled ? theme.bgclr.disabled : theme.bgclr.enabled};
  transition: all 150ms linear;
  &:hover {
    transition: all 250ms linear;
    background-color: ${({ disabled, theme }) =>
      disabled ? theme.bgclr.disabled : theme.bgclr.focused};
  }
`;

export const StPictureList = styled.div`
  margin-top: 1.5rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 2rem;
  grid-template-rows: auto;
`;

export const StPictureItem = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.bgclr.secondary};
  box-shadow: ${({ theme }) => theme.boxShadow.image};
  border-radius: 1rem;
  width: 100%;
  padding-bottom: 100%;
  ${({ theme }) => theme.mixins.flexBox()};
  &:hover {
    background-color: black;
    opacity: 0.5;
    transition: 0.2s;
  }

  img {
    cursor: pointer;
    border-radius: 1rem;
  }
`;

export const StCreateBtn = styled(Link)`
  position: fixed;
  padding: 1rem;
  background-color: ${({ theme }) => theme.bgclr.tertiary};
  box-shadow: ${({ theme }) => theme.boxShadow.normal};
  border-radius: 2.5rem;
  bottom: 1.5rem;
  right: calc((100% - 1024px) / 2 + 1.5rem);
  cursor: pointer;
  &:hover {
    transform: scale(0.94);
  }
  svg {
    color: ${({ theme }) => theme.clr.tertiary};
  }
`;
