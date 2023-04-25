import styled from 'styled-components';

export const StAuthFormLayout = styled.div`
  width: 100vw;
  min-height: 100vh;
  ${({ theme }) => theme.mixins.flexBox()}
`;

export const StAuthFormContainer = styled.div`
  padding: 4rem 2.5rem 3rem 2.5rem;
  width: 100vw;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.bgclr.primary};
  box-shadow: ${({ theme }) => theme.boxShadow.normal};
  ${({ theme }) => theme.mixins.flexBox('column', 'center', 'space-between')}
  a {
    color: ${({ theme }) => theme.clr.secondary};
    font-weight: bold;
    float: right;
  }
  @media ${({ theme }) => theme.media.lg} {
    padding: 3rem 2.5rem 2.5rem 2.5rem;
    width: 540px;
    min-height: auto;
    justify-content: center;
    align-items: center;
  }
`;

export const StAuthForm = styled.form`
  width: 100%;
`;

export const StAuthFormTitle = styled.div`
  font-size: 2rem;
  margin-bottom: 2.25rem;
`;

export const StAuthFormText = styled.p`
  font-size: 1rem;
  margin-top: 1.75rem;
  width: 100%;
  color: ${({ theme }) => theme.clr.quaternary};
  text-align: center;
  a {
    float: none;
  }
`;
