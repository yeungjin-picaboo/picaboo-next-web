import styled from 'styled-components';

export const Label = styled.label`
  display: block;
  margin-bottom: 0.6em;
  font-size: calc(0.75rem + 1vw);
  color: ${({ theme }) => theme.clr.primary};
  @media ${({ theme }) => theme.media.lg} {
    font-size: calc(0.25rem + 1vw);
  }
`;

export const InputBox = styled.div`
  position: relative;
  svg {
    position: absolute;
    top: 0.6rem;
    right: 0.6rem;
    color: ${({ theme }) => theme.clr.quaternary};
    width: calc(0.5rem + 1vw);
  }
`;

export const InputField = styled.input`
  font-size: calc(0.5rem + 1vw);
  display: block;
  width: 100%;
  margin-bottom: 1rem;
  padding: 0.75rem;
  border: 1.5px solid ${({ theme }) => theme.borderclr.base};
  border-radius: 0.5rem;
  &::placeholder {
    color: ${({ theme }) => theme.clr.quaternary};
  }
  @media ${({ theme }) => theme.media.lg} {
    font-size: calc(0.15rem + 1vw);
  }
`;
