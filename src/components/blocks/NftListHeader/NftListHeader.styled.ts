import styled from 'styled-components';

export const StNftListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StTitle = styled.div`
  font-size: 2rem;
  font-weight: bold;
`;

export const StSearchContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const StNumOfResults = styled.div`
  margin-right: 1rem;
  font-size: 1.25rem;
  color: ${({ theme }) => theme.clr.secondary};
  span {
    color: ${({ theme }) => theme.clr.base};
    font-weight: bold;
  }
`;

export const StSearchForm = styled.form`
  border-radius: 0.75rem;
  border: 2px solid ${({ theme }) => theme.borderclr.base};
  display: flex;
  padding: 0.75rem;
  align-items: center;
`;

export const StSearchInput = styled.input`
  border: none;
  outline: none;
  margin-left: 0.5rem;
  font-size: 1rem;
  width: 320px;
  &::placeholder {
    color: ${({ theme }) => theme.clr.quaternary};
  }
`;
