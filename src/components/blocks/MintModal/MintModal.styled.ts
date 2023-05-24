import styled from 'styled-components';

export const StModal = styled.div`
  width: 500px;
  position: relative;
  padding: 2rem;
  background-color: white;
  border-radius: 1.5rem;
  box-shadow: ${({ theme }) => theme.boxShadow.normal};
  & > svg {
    position: absolute;
    top: 1rem;
    right: 1rem;
    width: 3rem;
    height: 3rem;
    cursor: pointer;
    padding: 0.5rem;
  }
`;

export const StTitle = styled.div`
  text-align: center;
  font-size: 1.75rem;
  padding-bottom: 1.5rem;
  border-bottom: 2px solid ${({ theme }) => theme.borderclr.base};
  font-weight: bold;
`;

export const StFieldset = styled.div`
  margin-top: 1.25rem;
`;

export const StLabel = styled.div`
  margin-bottom: 0.75rem;
  font-size: 1.25rem;
`;

export const StGridBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1.25rem;
`;

const StInput = styled.input`
  padding: 0.75rem;
  border-radius: 0.5rem;
  border: 2px solid ${({ theme }) => theme.borderclr.base};
  &::placeholder {
    color: ${({ theme }) => theme.clr.quaternary};
  }
`;

export const StNameInput = styled(StInput)`
  width: 100%;
`;

export const StPriceInputBox = styled.div`
  display: flex;
  align-items: center;
`;

export const StPriceInput = styled(StInput)`
  margin-right: 0.75rem;
  width: 70%;
`;

export const StDescTextarea = styled.textarea`
  width: 100%;
  height: 130px;
  font-size: 1rem;
  padding: 0.75rem;
  border-radius: 0.5rem;
  resize: none;
  border: 2px solid ${({ theme }) => theme.borderclr.base};
  &::placeholder {
    color: ${({ theme }) => theme.clr.quaternary};
  }
`;

export const StCreateBtn = styled.button`
  padding: 1rem;
  font-size: 1.25rem;
  width: 100%;
  margin-top: 1.5rem;
  background-color: ${({ theme }) => theme.bgclr.tertiary};
  color: ${({ theme }) => theme.clr.tertiary};
  transition: 0.5s;
  &:hover {
    transition: 0.5s;
    background-color: ${({ theme }) => theme.bgclr.focused};
  }
`;
