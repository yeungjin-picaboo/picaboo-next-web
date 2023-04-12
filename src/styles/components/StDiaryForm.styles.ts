import styled from 'styled-components';
import { StButton } from './StButton.styles';

export const StDiaryForm = styled.form`
  width: calc(480px + 5rem);
  min-height: calc(100vh - 90px - 1vh - 1vw);
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
`;

export const StDiaryFormHeader = styled.div`
  position: relative;
  display: flex;
  height: 2rem;
  margin-bottom: 1.5rem;
  svg {
    position: absolute;
    width: 2rem;
    height: 2rem;
    cursor: pointer;
  }
`;

export const StDiaryFormContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 1.5rem 0;
  box-shadow: ${({ theme }) => theme.boxShadow.inset};
`;

export const StDiaryFormButton = styled(StButton)`
  margin: 0;
  font-size: 1.5rem;
  box-shadow: ${({ theme, disabled }) => !disabled && theme.boxShadow.normal};
`;
