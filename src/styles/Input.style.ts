import styled from 'styled-components';

export const FieldSet = styled.fieldset`
  margin-bottom: 0.7rem;
`;

export const Label = styled.label<{ error: boolean }>`
  display: block;
  margin-bottom: 0.6em;
  font-size: calc(0.9rem + 0.2vw);
  color: ${({ theme: { clr }, error }) => (error ? clr.error : clr.primary)};
`;

export const InputBox = styled.div`
  position: relative;
  svg {
    position: absolute;
    top: 50%;
    right: 0;
    margin-right: 0.6rem;
    transform: translateY(-50%);
    width: calc(1.2rem + 0.2vw);
    color: ${({ theme }) => theme.clr.quaternary};
  }
`;

export const InputField = styled.input<{ error: boolean }>`
  font-size: calc(0.8rem + 0.2vw);
  display: block;
  width: 100%;
  margin-bottom: 0.3rem;
  padding: 0.75rem 0.9rem;
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

export const MsgBox = styled.div`
  ${({ theme }) => theme.mixins.flexBox('row', 'center', 'flex-start')}
  color: ${({ theme }) => theme.clr.error};
  margin-bottom: 0.3rem;
  svg {
    width: calc(0.9rem + 0.2vw);
    margin: 0 0.3rem 0 0.4rem;
  }
`;

export const ErrorMsg = styled.span`
  font-size: calc(0.8rem + 0.2vw);
`;
