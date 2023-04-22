import styled from 'styled-components';
import { StButton } from './StButton.styles';

export const StDiaryForm = styled.form`
  min-height: calc(100vh - 80px - 1vh - 1vw);
  padding: 2.25rem;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const StDiaryFormHeader = styled.div`
  position: relative;
  display: flex;
  height: 2rem;
  margin-bottom: 1.25rem;
  svg {
    position: absolute;
    width: 2rem;
    height: 2rem;
    cursor: pointer;
  }
`;

export const StDiaryFormButton = styled(StButton)`
  margin: 0;
  font-size: 1.5rem;
  box-shadow: ${({ theme, disabled }) => !disabled && theme.boxShadow.normal};
`;
