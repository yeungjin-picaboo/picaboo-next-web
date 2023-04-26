import styled from 'styled-components';

export const StModal = styled.div`
  position: relative;
  padding: 2.25rem;
  background-color: white;
  border-radius: 1.25rem;
  box-shadow: ${({ theme }) => theme.boxShadow.normal};

  svg {
    position: absolute;
    top: 1rem;
    right: 1rem;
    width: 3rem;
    height: 3rem;
    cursor: pointer;
    padding: 0.5rem;
  }
`;

export const StImageBox = styled.div`
  border: 2px solid ${({ theme }) => theme.borderclr.base};
  position: relative;
  width: 150px;
  height: 150px;
  border-radius: 0.5rem;
  overflow: hidden;
`;

export const StTitle = styled.div`
  text-align: center;
  font-size: 1.75rem;
  padding-bottom: 1.25rem;
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

const StInput = styled.input`
  font-size: 1rem;
  padding: 0.75rem;
  border-radius: 0.5rem;
  border: 2px solid ${({ theme }) => theme.borderclr.base};
  &::placeholder {
    color: ${({ theme }) => theme.clr.quaternary};
  }
`;

export const StNameInput = styled(StInput)`
  width: 400px;
`;

export const StPriceBox = styled.div``;

export const StPriceInput = styled(StInput)`
  width: 100px;
  margin-right: 0.75rem;
`;

export const StCreateBtn = styled.button`
  padding: 1rem;
  font-size: 1.25rem;
  width: 100%;
  margin-top: 2rem;
  background-color: ${({ theme }) => theme.bgclr.tertiary};
  color: ${({ theme }) => theme.clr.tertiary};
  transition: 0.5s;
  &:hover {
    transition: 0.5s;
    background-color: ${({ theme }) => theme.bgclr.focused};
  }
`;
