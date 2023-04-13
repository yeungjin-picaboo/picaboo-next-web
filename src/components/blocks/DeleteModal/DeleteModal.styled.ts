import styled from 'styled-components';

export const StModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.5);
  ${({ theme }) => theme.mixins.flexBox()}
`;

export const StModal = styled.div`
  padding: 2rem 2rem 1.5rem 2rem;
  background-color: white;
  border-radius: 1.25rem;
  box-shadow: ${({ theme }) => theme.boxShadow.normal};
`;

export const StModalBody = styled.div`
  display: flex;
  margin-bottom: 1.25rem;
`;

export const StModalIconBox = styled.div`
  padding: 12px;
  background-color: ${({ theme }) => theme.bgclr.secondary};
  border-radius: 50%;
  margin-right: 1.5rem;
`;

export const StModalMsgBox = styled.div`
  width: 210px;
  ${({ theme }) => theme.mixins.flexBox('column', 'baseline', 'center')}
`;

export const StModalTitleMsg = styled.h2`
  font-weight: bold;
  font-size: 1.75rem;
  margin-bottom: 0.5rem;
`;

export const StModalSubMsg = styled.p`
  font-size: 1.25rem;
  line-height: 1.75rem;
  color: ${({ theme }) => theme.clr.secondary};
`;

export const StModalFooter = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1.25rem;
`;

const StModalBtn = styled.button`
  border-radius: 1.25rem;
  font-size: 1.25rem;
  height: 2.75rem;
`;

export const StCancelBtn = styled(StModalBtn)`
  background-color: ${({ theme }) => theme.bgclr.secondary};
  color: ${({ theme }) => theme.clr.secondary};
`;

export const StDeleteBtn = styled(StModalBtn)`
  background-color: ${({ theme }) => theme.bgclr.danger};
  color: ${({ theme }) => theme.clr.tertiary};
`;
