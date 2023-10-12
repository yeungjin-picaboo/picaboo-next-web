import styled from 'styled-components';

export const StNftContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const StNftHeader = styled.div`
  padding: 2.25rem 0 0.75rem 0;
  position: sticky;
  top: 80px;
  z-index: 1;
  background-color: ${({ theme }) => theme.bgclr.primary};
  ${({ theme }) => theme.mixins.flexBox('row', 'center', 'space-between')};
  svg {
    width: 2rem;
    height: 2rem;
    cursor: pointer;
  }
`;

export const StGrid = styled.div`
  padding: 1.5rem 0;
  border-bottom: 2px solid ${({ theme }) => theme.borderclr.base};
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: 2rem;
`;

export const StGridLeft = styled.div`
  font-size: 1.25rem;
  display: flex;
  flex-direction: column;
`;

export const StNftTitle = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  font-weight: bold;

  svg {
    margin-right: 0.5rem;
  }
`;

export const StNftInfo = styled.div`
  margin: 1.25rem 0 1rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StNftOwner = styled.div` 
  display: flex;
  span {
    color: ${({ theme }) => theme.clr.accent};
  }
`;

export const StCreatedAt = styled.div`
  color: ${({ theme }) => theme.clr.eighth};
`;

export const StNftDesc = styled.div`
  word-break: break-all;
  line-height: 2rem;
  letter-spacing: 1px;
`;

export const StGridRight = styled.div`
  border: 2px solid ${({ theme }) => theme.borderclr.base};
  margin-top: 1rem;
  height: fit-content;
  border-radius: 0.75rem;
  padding: 1rem;
`;

export const StBoxTitle = styled.div`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.clr.secondary};
`;

export const StPriceBox = styled.div`
  margin: 1rem 0;
  display: flex;
  align-items: end;
`;

export const StEtherPrice = styled.div`
  font-size: 1.75rem;
  font-weight: bold;
  color: ${({ theme }) => theme.clr.primary};
`;

export const StPrice = styled.div`
  margin-left: 0.75rem;
  margin-bottom: 2px;
  color: ${({ theme }) => theme.clr.quaternary};
`;

export const StBuyBtn = styled.button`
  width: 100%;
  padding: 0.75rem;
  border-radius: 0.75rem;
  color: ${({ theme }) => theme.clr.tertiary};
  background-color: ${({ theme }) => theme.bgclr.enabled};
  transition: 0.5s;
  &:hover {
    transition: 0.5s;
    background-color: ${({ theme }) => theme.bgclr.focused};
  }
`;
