import styled from 'styled-components';

export const StButton = styled.button`
  width: 100%;
  padding: 1rem;
  margin-top: 1.25rem;
  font-size: 1.25rem;
  border: none;
  color: ${({ disabled, theme }) =>
    disabled ? theme.clr.disabled : theme.clr.enabled};
  background-color: ${({ disabled, theme }) =>
    disabled ? theme.bgclr.disabled : theme.bgclr.enabled};
  transition: all 150ms linear;
  &:hover {
    transition: all 250ms linear;
    background-color: ${({ disabled, theme }) =>
      disabled ? theme.bgclr.disabled : theme.bgclr.focused};
  }
`;
