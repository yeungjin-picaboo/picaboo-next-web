import styled from 'styled-components';

export const StDiaryListContainer = styled.div`
  padding: 2.25rem;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const StDiaryPictureList = styled.div`
  margin-top: 1.75rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 2.25rem;
  grid-template-rows: auto;
`;

export const StDiaryPictureItem = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.bgclr.secondary};
  box-shadow: ${({ theme }) => theme.boxShadow.image};
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
