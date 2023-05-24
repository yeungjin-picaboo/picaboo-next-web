import styled from 'styled-components';

export const StDropdownContainer = styled.div`
  position: relative;
`;

export const StSelectedEmotionBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem;
  border-radius: 0.5rem;
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
`;

export const StEmotionItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.65rem 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.borderclr.base};
  color: ${({ theme }) => theme.clr.eighth};
  &:last-child {
    border-bottom: none;
  }
  &:hover {
    background-color: ${({ theme }) => theme.bgclr.secondary};
    color: ${({ theme }) => theme.clr.base};
  }
`;
