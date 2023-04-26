import styled from 'styled-components';

export const StPictureItem = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.bgclr.secondary};
  box-shadow: ${({ theme }) => theme.boxShadow.normal};
  border-radius: 1.25rem;
  width: 100%;
  padding-bottom: 100%;
  ${({ theme }) => theme.mixins.flexBox()};
  &:hover {
    background-color: black;
    opacity: 0.8;
    transition: 0.2s;
    box-shadow: none;
  }

  img {
    cursor: pointer;
    border-radius: 1rem;
  }
`;
