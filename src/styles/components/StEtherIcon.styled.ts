import styled from 'styled-components';

const StEtherIcon = styled.div`
  position: absolute;
  top: 0.75rem;
  left: 0.75rem; 
  padding: 0.1rem;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.bgclr.coin};
  color: ${({ theme }) => theme.clr.base};
  border: 2px solid ${({ theme }) => theme.borderclr.focus};
`;

export default StEtherIcon;
