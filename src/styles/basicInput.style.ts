import styled from 'styled-components';

export const Label = styled.label`
  display: block;
  margin-bottom: 0.6em;
  font-size: calc(1rem + 0.2vw);
  color: ${({ theme }) => theme.clr.primary};
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

export const InputField = styled.input`
  font-size: calc(0.8rem + 0.2vw);
  display: block;
  width: 100%;
  margin-bottom: 1rem;
  padding: 0.75rem 0.9rem;
  border: 1.5px solid ${({ theme }) => theme.borderclr.base};
  border-radius: 0.5rem;
  &::placeholder {
    color: ${({ theme }) => theme.clr.quaternary};
  }
`;
