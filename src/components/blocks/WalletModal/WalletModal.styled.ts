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

export const StModalHeader = styled.div`
  padding-bottom: 1.25rem;
  border-bottom: 2px solid ${({ theme }) => theme.borderclr.base};
  text-align: center;
`;

export const StModalTitle = styled.h1`
  font-weight: bold;
  font-size: 1.75rem;
  margin-bottom: 1rem;
`;

export const StModalSubTitle = styled.h2`
  font-size: 1.5rem;
  line-height: 2rem;
  width: 360px;
  margin: 0 auto;
  color: ${({ theme }) => theme.clr.primary};
`;

export const StModalWalletBtn = styled.button`
  width: 380px;
  border-radius: 1rem;
  margin-top: 1.25rem;
  padding: 0.75rem 1rem;
  display: flex;
  align-items: center;
  font-size: 1.25rem;
  background-color: ${({ theme }) => theme.bgclr.secondary};
  box-shadow: ${({ theme }) => theme.boxShadow.button};
  transition: all 0.5s;
  span {
    margin-left: 0.75rem;
  }
  &:hover {
    background-color: ${({ theme }) => theme.bgclr.base};
    color: ${({ theme }) => theme.clr.tertiary};
    transition: all 0.5s;
  }
`;
