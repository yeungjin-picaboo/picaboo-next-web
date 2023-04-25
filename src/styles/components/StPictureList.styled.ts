import styled from 'styled-components';

export const StPictureListContainer = styled.div`
  padding: 2.25rem;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const StPictureList = styled.div`
  margin-top: 1.75rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 2.25rem;
  grid-template-rows: auto;
`;
