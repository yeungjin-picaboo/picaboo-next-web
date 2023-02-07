import styled from 'styled-components';

export const Layout = styled.div`
  width: 100vw;
  min-height: 100vh;
  padding: 2.5rem;
  ${({ theme }) => theme.mixins.flexBox('column', 'baseline')}

  @media ${({ theme }) => theme.media.lg} {
    justify-content: space-between;
    padding: 4rem;
  }
`;

export const Content = styled.div`
  width: 100%;
`;

export const Logo = styled.div`
  font-size: 3rem;
  color: ${({ theme }) => theme.clr.tertiary};
  span {
    color: ${({ theme }) => theme.clr.accent};
  }

  @media ${({ theme }) => theme.media.md} {
    font-size: 4.5rem;
  }
  @media ${({ theme }) => theme.media.lg} {
    font-size: 2.3rem;
  }
`;

export const Title = styled.div`
  font-size: 2rem;
  line-height: 2.7rem;
  margin: 2rem 0 3.5rem 0;
  color: ${({ theme }) => theme.clr.tertiary};

  @media ${({ theme }) => theme.media.md} {
    font-size: 2.8rem;
    line-height: 3.5rem;
    width: 412px;
  }
  @media ${({ theme }) => theme.media.lg} {
    margin: 8rem 0 0 0;
    font-weight: bold;
    width: calc(767px - 8rem);
    font-size: 3.8rem;
    line-height: 4.5rem;
  }
  @media ${({ theme }) => theme.media.xl} {
    width: 712px;
  }
`;

export const SubTitle = styled.div`
  @media ${({ theme }) => theme.media.md} {
    font-size: 2.8rem;
    line-height: 3.2rem;
    color: ${({ theme }) => theme.clr.quaternary};
    margin: 1.5rem 0 3.5rem 0;
    width: 530px;
  }
`;

export const LinkGroup = styled.div`
  font-size: 1.3rem;
  ${({ theme }) => theme.mixins.flexBox('column', 'baseline', 'baseline')}

  @media ${({ theme }) => theme.media.md} {
    font-size: 1.5rem;
  }
  @media ${({ theme }) => theme.media.lg} {
    flex-direction: row;
  }
`;

export const LinkBox = styled.div`
  background-color: ${({ theme }) => theme.bgclr.secondary};
  color: ${({ theme }) => theme.clr.base};
  width: 100%;
  .link {
    padding: 0.9em;
    ${({ theme }) => theme.mixins.flexBox('row', 'center', 'space-between')}
  }
  &:first-child {
    margin-bottom: 2rem;
  }

  @media ${({ theme }) => theme.media.lg} {
    width: 12em;
    &:first-child {
      margin-bottom: 0;
      margin-right: 2rem;
    }
  }
`;
