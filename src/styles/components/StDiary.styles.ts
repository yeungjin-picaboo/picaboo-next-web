import styled from 'styled-components';

export const StDiary = styled.div`
  width: calc(480px + 4.5rem);
  min-height: calc(100vh - 80px - 1vh - 1vw);
  display: flex;
  flex-direction: column;
`;

export const StDiaryHeader = styled.div`
  padding: 2.25rem 2.25rem 0.75rem 2.25rem;
  margin-bottom: 0.5rem;
  position: sticky;
  top: calc(80px + 1vh + 1vw);
  z-index: 10;
  background-color: ${({ theme }) => theme.bgclr.primary};
  ${({ theme }) => theme.mixins.flexBox('row', 'center', 'space-between')};
  svg {
    width: 2rem;
    height: 2rem;
    cursor: pointer;
  }
`;

export const StDiaryIconContainer = styled.div`
  ${({ theme }) => theme.mixins.flexBox()};
  svg {
    margin-left: 1.25rem;
  }
`;

export const StCalendarBox = styled.div`
  position: relative;
`;

export const StDiaryPictureBox = styled.div`
  position: relative;
  width: 480px;
  height: 480px;
  margin: 0 auto;
  border-radius: 1.25rem;
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

export const StDiaryMetaIcon = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 0.5rem;
  svg {
    cursor: pointer;
    width: 2rem;
    height: 2rem;
  }
`;

export const StDiaryDate = styled.div`
  font-size: 1.25rem;
`;

export const StDiaryTitle = styled.div`
  padding: 0 2.5rem;
  margin-top: 1rem;
  font-size: 1.75rem;
  font-weight: bold;
  color: ${({ theme }) => theme.clr.primary};
`;

export const StDiaryContent = styled.div`
  padding: 1rem 2.5rem 2.25rem 2.5rem;
  font-size: 1.5rem;
  line-height: 2rem;
  color: ${({ theme }) => theme.clr.secondary};
`;
