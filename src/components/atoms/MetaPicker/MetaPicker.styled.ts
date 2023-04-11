import styled from 'styled-components';

export const StMetaPicker = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  box-shadow: ${({ theme }) => theme.boxShadow.inset};
  color: ${({ theme }) => theme.clr.sixth};
`;

export const StMetaPickerTitle = styled.h1`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
`;

export const StMetaPickerList = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: auto;
  grid-gap: 1.3rem;
`;

export const StMetaPickerItem = styled.div`
  text-align: center;
`;

export const StMetaPickerIconBox = styled.div<{ clicked: boolean }>`
  position: relative;
  width: 100%;
  padding-top: 100%;
  border-radius: 50%;
  background-color: ${({ theme, clicked }) =>
    clicked ? theme.bgclr.tertiary : theme.bgclr.secondary};
  color: ${({ theme, clicked }) =>
    clicked ? theme.clr.tertiary : theme.clr.sixth};
  margin-bottom: 0.75rem;
  svg {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    width: 2.5rem;
    height: 2.5rem;
  }
`;
