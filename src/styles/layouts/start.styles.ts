import styled from 'styled-components';

export const Layout = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 2rem;
  overflow: hidden;
  ${({ theme }) => theme.mixins.flexBox('column', 'center', 'flex-end')}
  @media ${({ theme }) => theme.media.md} {
    ${({ theme }) => theme.mixins.flexBox('column')}
  }
`;

export const ImageBox = styled.div`
  position: relative;
  width: 100vw;
  height: 45vh;
  @media ${({ theme }) => theme.media.md} {
    max-width: 480px;
    min-height: 50vh;
    height: 60vh;
  }
  @media ${({ theme }) => theme.media.lg} {
    min-width: 480px;
    max-width: none;
    width: 42vw;
  }
`;

export const LinkGroup = styled.div`
  width: 100%;
  ${({ theme }) => theme.mixins.flexBox('column')};
  @media ${({ theme }) => theme.media.md} {
    ${({ theme }) => theme.mixins.flexBox('row')};
    position: absolute;
    width: auto;
    top: 2.5rem;
    right: 2.5rem;
  }
`;

export const LinkBox = styled.div`
  width: 100%;
  font-weight: bold;
  margin-top: 1.3rem;
  color: ${({ theme }) => theme.clr.fifth};
  background-color: ${({ theme }) => theme.bgclr.base};
  box-shadow: ${({ theme }) => theme.boxShadow.normal};
  .link {
    padding: 1.3rem 1rem;
    ${({ theme }) =>
      theme.mixins.flexBox('columns', 'center', 'space-between')};
  }
  &:hover {
    transform: scale(0.98);
  }
  @media ${({ theme }) => theme.media.md} {
    margin-top: 0;
    margin-left: 1.5rem;
    color: ${({ theme }) => theme.clr.fifth};
    border: 2px solid ${({ theme }) => theme.borderclr.base};
    opacity: 1;
    border-radius: 0.8rem;
    .link {
      padding: 1.1rem;
    }
    &:hover {
      transform: scale(1.1);
    }
  }
`;
