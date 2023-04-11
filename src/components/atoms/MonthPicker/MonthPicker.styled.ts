import styled from 'styled-components';

export const StMonthPickerBox = styled.div`
  position: absolute;
  z-index: 10;
  left: -1rem;
  margin-top: 1rem;
  background-color: ${({ theme }) => theme.bgclr.primary};
  box-shadow: ${({ theme }) => theme.boxShadow.normal};
`;

export const StMonthPickerHeader = styled.div`
  padding: 0.75rem 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.borderclr.base};
  ${({ theme }) => theme.mixins.flexBox()};
  svg {
    cursor: pointer;
  }
`;

export const StMonthPickerYear = styled.div`
  width: 100%;
  font-size: 1.25rem;
  color: ${({ theme }) => theme.clr.primary};
  text-align: center;
`;

export const StMonthPickerContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;

export const StMonthPickerMonth = styled.button`
  text-align: center;
  font-size: 1rem;
  padding: 1.25rem;
  &:hover {
    background-color: ${({ theme }) => theme.bgclr.tertiary};
    color: ${({ theme }) => theme.clr.tertiary};
  }
`;