import styled from 'styled-components';

export const StNftContainer = styled.div`
  padding: 2.25rem;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const StNftInfo = styled.div`
  padding: 1.5rem 2.5rem 0 2.5rem;
`;

export const StFieldset = styled.div`
  margin-bottom: 1.75rem;
  display: flex;
  align-items: end;
`;

export const StLabel = styled.div`
  font-size: 1.5rem;
  margin-right: 2rem;
  font-weight: bold;
`;

export const StValue = styled.div`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.clr.primary};
`;

export const StEth = styled.div`
  margin-left: 0.5rem;
  color: ${({ theme }) => theme.clr.primary};
`;

export const StBuyBtn = styled.button`
  padding: 1.5rem;
  margin: 1rem 2.25rem 0 2.25rem;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.clr.tertiary};
  background-color: ${({ theme }) => theme.bgclr.enabled};
  transition: 0.5s;
  &:hover {
    transition: 0.5s;
    background-color: ${({ theme }) => theme.bgclr.focused};
  }
`;
