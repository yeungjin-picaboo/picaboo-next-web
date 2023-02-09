import styled from 'styled-components';

export const AccountBtn = styled.button`
  width: 100%;
  padding: 1rem;
  margin-top: 1rem;
  font-size: calc(0.75rem + 1vw);
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
  @media ${({ theme }) => theme.media.lg} {
    font-size: calc(0.3rem + 1vw);
    margin-top: 0.75rem;
    padding: 0.8em;
  }
`;
