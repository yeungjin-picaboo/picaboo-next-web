import styled from 'styled-components';

export const StPickerLayout = styled.div`
  position: relative;
  display: inline-block;
`;

export const StDateBox = styled.div`
  ${({ theme }) => theme.mixins.flexBox('row', 'center', 'flex-start')};
  font-weight: 700;
  font-size: 1.75rem;
  cursor: pointer;
`;

export const StYear = styled.span`
  margin: 0 0.4rem;
  color: ${({ theme }) => theme.clr.quaternary};
`;

export const StPickerBox = styled.div`
  position: absolute;
  z-index: 10;
  left: -1rem;
  margin-top: 1rem;
  background-color: ${({ theme }) => theme.bgclr.primary};
  box-shadow: ${({ theme }) => theme.boxShadow.normal};
`;

export const StPickerHeader = styled.div`
  padding: 0.75rem 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.borderclr.base};
  ${({ theme }) => theme.mixins.flexBox()};

  svg {
    cursor: pointer;
  }
`;

export const StPickerYear = styled.div`
  width: 100%;
  font-size: 1.25rem;
  color: ${({ theme }) => theme.clr.primary};
  text-align: center;
`;

export const StPickerContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;

export const StPickerMonth = styled.button`
  text-align: center;
  font-size: 1rem;
  padding: 1.25rem;
  &:hover {
    background-color: ${({ theme }) => theme.bgclr.tertiary};
    color: ${({ theme }) => theme.clr.tertiary};
  }
`;
