import styled from 'styled-components';

export const StCalendar = styled.div`
  position: absolute;
  z-index: 10;
  margin-top: 0.75rem;
  box-shadow: ${({ theme }) => theme.boxShadow.normal};
`;
