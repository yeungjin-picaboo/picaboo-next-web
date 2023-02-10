import styled from 'styled-components';

export const BasicBtn = styled.button`
  width: 100%;
  padding: 0.8rem;
  margin-top: 1rem;
  font-size: calc(1rem + 0.2vw);
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
