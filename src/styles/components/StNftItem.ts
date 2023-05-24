import styled from 'styled-components';

export const StNftItem = styled.div`  
  position: relative;
  box-shadow: ${({ theme }) => theme.boxShadow.normal};
  border-radius: 1.25rem;
  width: 100%;
  padding-bottom: 100%;
  ${({ theme }) => theme.mixins.flexBox()};
  & > img {
    cursor: pointer;
    border-radius: 1.25rem;
  }
`;

export const StNftMouseover = styled(StNftItem)`
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100%;
  top: 0;
  box-shadow: none;
`;

export const StMouseoverIcon = styled.div`
  position: absolute;
  top: 0.75rem;
  left: 0.75rem; 
  padding: 0.1rem;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.bgclr.coin};
  color: ${({ theme }) => theme.clr.base};
  border: 2px solid ${({ theme }) => theme.borderclr.focus};
`;

export const StMouseoverFooter = styled.div`
  position: absolute;
  border-radius: 0 0 1.25rem 1.25rem;
  padding: 1rem;
  bottom: 0rem;
  left: 0rem; 
  right: 0rem;
  background: ${({ theme }) => theme.bgclr.primary};
  border-top: 2px solid ${({ theme }) => theme.borderclr.primary};
  display: flex;
  align-items: end;
`;

export const StEtherPrice = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.clr.primary};
`;

export const StPrice = styled.div`
  margin-left: 0.75rem;
  margin-bottom: 2px;
  color: ${({ theme }) => theme.clr.quaternary};
`;
