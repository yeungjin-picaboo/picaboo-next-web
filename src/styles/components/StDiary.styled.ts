import styled from 'styled-components';

export const StDiaryContainer = styled.div`
  min-height: calc(100vh - 80px);
  display: flex;
  flex-direction: column;
`;

export const StDiaryTitle = styled.div`
  margin-top: 0.75rem;
  margin-bottom: 0.75rem;
  font-size: 1.75rem;
  font-weight: bold;
  color: ${({ theme }) => theme.clr.primary};
`;

export const StDiaryInfo = styled.div`
  color: ${({ theme }) => theme.clr.secondary};
  padding: 0 0.25rem;
  ${({ theme }) => theme.mixins.flexBox('row', 'center', 'space-between')};
`;

export const StDiaryMetaIcon = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 0.75rem;
  svg {
    cursor: pointer;
    width: 2rem;
    height: 2rem;
  }
`;

export const StDiaryDate = styled.div`
  font-size: 1.25rem;
`;

export const StDiaryContent = styled.div`
  padding: 1rem 0 2.25rem 0;
  font-size: 1.5rem;
  line-height: 2rem;
  color: ${({ theme }) => theme.clr.secondary};
`;
