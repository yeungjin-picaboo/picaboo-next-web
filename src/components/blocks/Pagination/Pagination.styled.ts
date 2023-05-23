import styled from 'styled-components';

export const PageContainer = styled.div`
  margin-top: 1.75rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ControlBox = styled.div`
  position: relative;
  border: 2px solid ${({ theme }) => theme.borderclr.base};
  border-radius: 50%;
  padding: 0.25rem;
  width: 3rem;
  height: 3rem;
  margin: 0.5rem;
  cursor: pointer;

  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    width: 1.5rem;
    height: 1.5rem;
  }
`;

export const PageNumBox = styled.div<{ isCurrentPage: boolean }>`
  position: relative;
  margin: 0.5rem;
  font-size: 1.5rem;
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  cursor: pointer;

  background-color: ${({ theme, isCurrentPage }) =>
    isCurrentPage ? theme.bgclr.secondary : '#FFFFFF'};

  &:hover {
    background-color: ${({ theme }) => theme.bgclr.secondary};
  }
`;

export const PageNum = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
`;
