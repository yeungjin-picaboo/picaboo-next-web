import styled from 'styled-components';

export const Layout = styled.div`
  width: 100vw;
  height: 100vh;
  ${({ theme }) => theme.mixins.flexBox()}
`;

export const Container = styled.div`
  padding: 4rem 2rem 3rem 2rem;
  width: 100vw;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.bgclr.primary};
  ${({ theme }) => theme.mixins.flexBox('column', 'baseline', 'space-between')}
  @media ${({ theme }) => theme.media.lg} {
    padding: 4rem 3rem 3rem 3rem;
  }
  @media ${({ theme }) => theme.media.lg} {
    padding: 3rem 2rem;
    width: 35vw;
    min-width: 480px;
    min-height: auto;
    justify-content: flex-start;
  }
`;

export const Form = styled.form`
  width: 100%;
`;

export const Title = styled.div`
  font-size: calc(1.5rem + 1vw);
  margin-bottom: 2rem;
  @media ${({ theme }) => theme.media.lg} {
    font-size: calc(1.1rem + 1vw);
  }
`;

export const Text = styled.p`
  font-size: calc(0.5rem + 1vw);
  width: 100%;
  color: ${({ theme }) => theme.clr.quaternary};
  text-align: center;
  a {
    color: ${({ theme }) => theme.clr.secondary};
    font-weight: bold;
  }
  @media ${({ theme }) => theme.media.lg} {
    margin-top: 1.5rem;
    font-size: calc(0.1rem + 1vw);
  }
`;
