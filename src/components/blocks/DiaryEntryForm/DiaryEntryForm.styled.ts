import styled from 'styled-components';

export const StDiaryDateContainer = styled.div`
  flex: 1;
  height: 2rem;
  display: flex;
  justify-content: center;
`;

export const StDiaryDateSelector = styled.div`
  position: relative;
`;

export const StSelectedDate = styled.div`
  position: relative;
  width: fit-content;
  ${({ theme }) => theme.mixins.flexBox()};
  font-size: 1.25rem;
  font-weight: bold;
  line-height: 2rem;
  cursor: pointer;
  & > svg {
    position: static;
    width: 1.5rem;
    height: 1.5rem;
    margin-left: 0.25rem;
  }
`;

export const StDiaryEntryBox = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin: 1.5rem 0;
  padding: 2rem;
  border-radius: 1.25rem;
  box-shadow: ${({ theme }) => theme.boxShadow.inset};
  min-height: 534px;
`;

export const StDiaryTitleInput = styled.input`
  font: inherit;
  width: 100%;
  font-size: 1.5rem;
  font-weight: bold;
  border: none;
  outline: none;
  margin-bottom: 0.75rem;
  &::placeholder {
    color: ${({ theme }) => theme.clr.quaternary};
  }
`;

export const StDiaryContentTextarea = styled.textarea`
  font: inherit;
  flex: 1;
  width: 100%;
  font-size: 1.25rem;
  line-height: 2rem;
  letter-spacing: 1.5px;
  word-break: break-all;
  resize: none;
  border: none;
  outline: none;
  &::placeholder {
    color: ${({ theme }) => theme.clr.quaternary};
  }
`;
