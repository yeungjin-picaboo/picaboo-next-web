import styled from 'styled-components';

export const StMetaPickerBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1.5rem 0;
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
  grid-gap: 2rem;
`;

export const StMetaPickerItem = styled.div`
  text-align: center;
`;

export const StMetaPickerIcon = styled.div`
  position: relative;
  width: 100%;
  padding-top: 100%;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.bgclr.secondary};
  margin-bottom: 0.75rem;
  svg {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    width: 2rem;
    height: 2rem;
  }
`;
