import styled from 'styled-components';

export const Layout = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 4rem 2rem;
  ${({ theme }) => theme.mixins.flexBox('column', 'center', 'flex-start')};
  @media ${({ theme }) => theme.media.md} {
    justify-content: center;
  }
`;

export const Title = styled.div`
  max-width: 340px;
  font-size: 2.5rem;
  line-height: 3.5rem;
  margin-bottom: 2rem;
  text-align: center;
  color: ${({ theme }) => theme.clr.tertiary};
  span {
    color: ${({ theme }) => theme.clr.accent};
  }
  @media ${({ theme }) => theme.media.md} {
    font-size: 3rem;
  }
  @media ${({ theme }) => theme.media.lg} {
    margin-bottom: 1rem;
    font-size: 3.5rem;
    max-width: 700px;
  }
`;

export const SubTitle = styled.div`
  color: ${({ theme }) => theme.clr.quaternary};
  text-align: center;
  margin-bottom: 3rem;
  @media ${({ theme }) => theme.media.lg} {
    font-size: 2.5rem;
  }
`;

export const LinkGroup = styled.div`
  width: 100%;
  @media ${({ theme }) => theme.media.md} {
    ${({ theme }) => theme.mixins.flexBox('row', 'center', 'center')}
  }
  @media ${({ theme }) => theme.media.lg} {
    font-size: 1.25rem;
  }
`;

export const LinkBox = styled.div`
  width: 100%;
  font-weight: bold;
  background-color: ${({ theme }) => theme.bgclr.secondary};
  box-shadow: ${({ theme }) => theme.boxShadow.normal};
  .link {
    padding: 1.1em 1.5em;
    ${({ theme }) => theme.mixins.flexBox('row', 'center', 'space-between')}
  }
  &:first-child {
    margin-bottom: 1.5rem;
  }
  &:hover {
    box-shadow: none;
    transform: scale(0.98);
  }
  @media ${({ theme }) => theme.media.md} {
    width: 12em;
    &:first-child {
      margin-bottom: 0;
      margin-right: 2rem;
    }
  }
`;
