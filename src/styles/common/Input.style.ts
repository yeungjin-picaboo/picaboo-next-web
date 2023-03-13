import styled from 'styled-components';

export const StFieldSet = styled.fieldset`
  margin-bottom: 0.75rem;
`;

export const StLabel = styled.label<{ error: boolean }>`
  display: block;
  margin-left: 0.1rem;
  margin-bottom: 0.5em;
  font-size: 1.25rem;
  color: ${({ theme: { clr }, error }) => (error ? clr.error : clr.primary)};
`;

export const StInputBox = styled.div`
  position: relative;
  svg {
    position: absolute;
    top: 50%;
    right: 0;
    margin-right: 0.75rem;
    transform: translateY(-50%);
    width: 1.25rem;
    color: ${({ theme }) => theme.clr.quaternary};
  }
`;

export const StInputField = styled.input<{ error: boolean }>`
  font-size: 1rem;
  display: block;
  width: 100%;
  margin-bottom: 0.5rem;
  padding: 0.75rem 1rem;
  border: 1.5px solid
    ${({ theme: { borderclr }, error }) =>
      error ? borderclr.error : borderclr.base};
  border-radius: 0.5rem;
  &::placeholder {
    color: ${({ theme }) => theme.clr.quaternary};
  }
  &:focus {
    outline: ${({ theme: { borderclr }, error }) =>
      error && `1px solid${borderclr.error}`};
  }
`;

export const StMsgBox = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  align-items: flex-start;
  justify-content: flex-start;
  grid-gap: 0.25rem;
  color: ${({ theme }) => theme.clr.error};
  margin-left: 0.25rem;
  margin-bottom: 0.25rem;
  svg {
    width: 1.25rem;
    height: 1.25rem;
  }
`;

export const StErrorMsg = styled.div`
  width: 100%;
  line-height: 1.25rem;
  font-size: 1rem;
`;
