import styled from 'styled-components';

export const Layout = styled.div`
  width: 100vw;
  min-height: 100vh;
  ${({ theme }) => theme.mixins.flexBox()}
`;

export const Container = styled.div`
  padding: 4rem 2rem 3rem 2rem;
  width: 100vw;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.bgclr.primary};
  ${({ theme }) => theme.mixins.flexBox('column', 'baseline', 'space-between')}
  a {
    color: ${({ theme }) => theme.clr.secondary};
    font-weight: bold;
    float: right;
  }
  @media ${({ theme }) => theme.media.lg} {
    padding: 3.5rem 2rem 3rem 2rem;
    width: 540px;
    min-height: auto;
    justify-content: flex-start;
  }
`;

export const Form = styled.form`
  width: 100%;
`;

export const Title = styled.div`
  font-size: calc(1.75rem + 0.2vw);
  margin-bottom: 2rem;
`;

export const Text = styled.p`
  font-size: calc(0.8rem + 0.2vw);
  margin-top: 1.5rem;
  width: 100%;
  color: ${({ theme }) => theme.clr.quaternary};
  text-align: center;
  a {
    float: none;
  }
`;
