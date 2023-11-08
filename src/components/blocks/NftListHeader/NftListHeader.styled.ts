import styled from 'styled-components';

export const StTitle = styled.div`
  font-size: 2rem;
  font-weight: bold;
`;

export const StToolkitContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.15rem;
  margin-top: 1.25rem;
`;

export const StToolBox = styled.div`
  display: flex;

  .emotion {
    min-width: 190px;
  }
`;

export const StSearchForm = styled.form`
  margin: 0 1rem;
  padding-left: 0.75rem;
  border-radius: 0.75rem;
  border: 2px solid ${({ theme }) => theme.borderclr.base};
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.clr.quaternary};
`;

export const StSearchInput = styled.input`
  border: none;
  outline: none;
  width: 380px;
  margin-left: 0.5rem;
  &::placeholder {
    color: ${({ theme }) => theme.clr.quaternary};
  }
`;

export const StSearchBtn = styled.button`
  height: 100%;
  padding: 0 0.75rem;
  background-color: ${({ theme }) => theme.bgclr.base};
  color: ${({ theme }) => theme.clr.tertiary};
  border-radius: 0 0.75rem 0.75rem 0;
`;

export const StTimeBox = styled.div`
  border: 2px solid ${({ theme }) => theme.borderclr.base};
  border-radius: 0.75rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;

export const StTime = styled.div<{ isSelected: boolean }>`
  padding: 0.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme, isSelected }) =>
    isSelected ? theme.bgclr.secondary : theme.bgclr.primary};
  color: ${({ theme, isSelected }) =>
    isSelected ? theme.clr.base : theme.clr.eighth};
  &:first-child {
    border-radius: 0.5rem 0 0 0.5rem;
  }
  &:last-child {
    border-radius: 0 0.5rem 0.5rem 0;
  }
  &:hover {
    background-color: ${({ theme }) => theme.bgclr.secondary};
    color: ${({ theme }) => theme.clr.base};
  }
`;

export const StNumOfResults = styled.div`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.clr.secondary};
  span {
    color: ${({ theme }) => theme.clr.base};
    font-weight: bold;
  }
`;
