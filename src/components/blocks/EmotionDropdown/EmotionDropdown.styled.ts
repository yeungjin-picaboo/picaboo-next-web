import styled from 'styled-components';

export const StDropdownContainer = styled.div`
  position: relative;
`;

export const StSelectedEmotionBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem;
  border-radius: 0.75rem;
  border: 2px solid ${({ theme }) => theme.borderclr.base};
  color: ${({ theme }) => theme.clr.primary};
  svg {
    position: static;
  }
`;

export const StEmotionDropdown = styled.div`
  width: 100%;
  position: absolute;
  background-color: ${({ theme }) => theme.bgclr.primary};
  box-shadow: ${({ theme }) => theme.boxShadow.button};
  border-radius: 0.75rem;
  margin-top: 0.75rem;
  z-index: 100;
`;

export const StEmotionItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.65rem 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.borderclr.base};
  color: ${({ theme }) => theme.clr.eighth};
  &:first-child {
    border-radius: 0.75rem 0.75rem 0 0;
  }
  &:last-child {
    border: none;
    border-radius: 0 0 0.75rem 0.75rem;
  }
  &:hover {
    background-color: ${({ theme }) => theme.bgclr.secondary};
    color: ${({ theme }) => theme.clr.base};
  }
`;
