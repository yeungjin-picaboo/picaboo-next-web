import styled from 'styled-components';

export const StDatePicker = styled.div`
  position: absolute;
  z-index: 10;
  right: 0;
  margin-top: 0.5rem;
  box-shadow: ${({ theme }) => theme.boxShadow.button};
`;
