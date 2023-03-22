import styled from 'styled-components';
import { StButton } from '../common/Common.styled';

export const StDiaryForm = styled.div`
  width: calc(500px + 5rem);
  min-height: calc(100vh - 100px - 1vh - 1vw);
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
`;

export const StDiaryFormButton = styled(StButton)`
  margin: 0;
  font-size: 1.5rem;
  box-shadow: ${({ theme, disabled }) => !disabled && theme.boxShadow.normal};
`;

export const StDiaryEntryFormHeader = styled.div`
  margin-bottom: 1.5rem;
  svg {
    width: 2rem;
    height: 2rem;
    cursor: pointer;
    position: absolute;
  }
`;

export const StDiaryFormDateBox = styled.div`
  height: 2rem;
  ${({ theme }) => theme.mixins.flexBox()};
  svg {
    position: static;
    width: 1.5rem;
    height: 1.5rem;
    margin-left: 0.25rem;
  }
`;

export const StDiaryFormDate = styled.div`
  ${({ theme }) => theme.mixins.flexBox()};
  font-size: 1.25rem;
  font-weight: bold;
  line-height: 2rem;
  cursor: pointer;
`;

export const StDiaryEntryBox = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin: 1.5rem 0;
  padding: 2rem;
  box-shadow: ${({ theme }) => theme.boxShadow.inset};
`;

export const StDiaryTitleInput = styled.input`
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
  flex: 1;
  width: 100%;
  font-size: 1.25rem;
  font-weight: bold;
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

export const StDiaryMetaPickerHeader = styled.div`
  height: 2rem;
  margin-bottom: 1.5rem;
  svg {
    width: 2rem;
    height: 2rem;
    cursor: pointer;
    position: absolute;
  }
`;

export const StDiaryMetaFormBox = styled.div`
  flex: 1;
`;
