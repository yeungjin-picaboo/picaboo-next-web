import styled from 'styled-components';

export const StDiaryContainer = styled.div`
  width: calc(500px + 5rem);
  min-height: calc(100vh - 100px - 1vh - 1vw);
  display: flex;
  flex-direction: column;
`;

export const StDiaryHeader = styled.div`
  padding: 2.5rem 2.5rem 1.25rem 2.5rem;
  position: sticky;
  top: calc(100px + 1vh + 1vw);
  z-index: 10;
  background-color: ${({ theme }) => theme.bgclr.primary};
  ${({ theme }) => theme.mixins.flexBox('row', 'center', 'space-between')};
  svg {
    width: 2rem;
    height: 2rem;
    cursor: pointer;
  }
`;

export const StDiaryIconBox = styled.div`
  ${({ theme }) => theme.mixins.flexBox()};
  svg {
    margin-left: 1.25rem;
  }
`;

export const StDiaryPictureBox = styled.div`
  position: relative;
  width: 500px;
  height: 500px;
  margin: 0 auto;
  border-radius: 1rem;
  box-shadow: ${({ theme }) => theme.boxShadow.image};
  img {
    border-radius: 1rem;
  }
`;

export const StDiaryInfo = styled.div`
  color: ${({ theme }) => theme.clr.secondary};
  margin-top: 1.25rem;
  padding: 0 2.75rem;
  ${({ theme }) => theme.mixins.flexBox('row', 'center', 'space-between')};
`;

export const StDiaryMetaData = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 0.75rem;
  svg {
    cursor: pointer;
    width: 1.75rem;
    height: 1.75rem;
  }
`;

export const StDiaryDate = styled.div`
  font-size: 1.25rem;
`;

export const StDiaryTitle = styled.div`
  padding: 0 2.75rem;
  margin-top: 1rem;
  font-size: 1.75rem;
  font-weight: bold;
  color: ${({ theme }) => theme.clr.primary};
`;

export const StDiaryContent = styled.div`
  padding: 1rem 2.75rem 2.75rem 2.75rem;
  font-size: 1.5rem;
  line-height: 2rem;
  color: ${({ theme }) => theme.clr.secondary};
`;
