import styled from 'styled-components';

export const StDiary = styled.div`
  width: 500px;
  min-height: calc(100vh - 100px - 1vh - 1vw - 5rem);
  color: ${({ theme }) => theme.clr.primary};
`;

export const StDiaryHeader = styled.div`
  ${({ theme }) => theme.mixins.flexBox('row', 'center', 'space-between')};
  svg {
    width: 2rem;
    height: 2rem;
  }
`;

export const StDiaryIconBox = styled.div`
  ${({ theme }) => theme.mixins.flexBox()};
  svg {
    margin-left: 1rem;
  }
`;

export const StDiaryPictureBox = styled.div`
  position: relative;
  width: 500px;
  height: 500px;
  border-radius: 1rem;
  margin: 1.25rem 0;
  box-shadow: ${({ theme }) => theme.boxShadow.image};
  img {
    border-radius: 1rem;
  }
`;

export const StDiaryInfo = styled.div`
  padding: 0 0.5rem;
  ${({ theme }) => theme.mixins.flexBox('row', 'center', 'space-between')};
`;

export const StDiaryMetaData = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 0.75rem;
  margin-top: 0.25rem;
  color: ${({ theme }) => theme.clr.secondary};
`;

export const StDiaryDate = styled.div`
  font-size: 1.25rem;
  span {
    font-size: 1.75rem;
    text-decoration: underline;
    color: ${({ theme }) => theme.clr.accent};
  }
`;

export const StDiaryTitle = styled.div`
  padding: 0 0.5rem;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
  font-size: 1.75rem;
  font-weight: bold;
`;

export const StDiaryContent = styled.div`
  padding: 0 0.5rem;
  font-size: 1.5rem;
  line-height: 1.75rem;
  word-break: break-all;
`;
