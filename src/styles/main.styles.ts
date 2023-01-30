import styled from 'styled-components';

export const Layout = styled.div`
  width: 100vw;
  height: 100vh;
  color: ${props => props.theme.clr.primary};
  ${props => props.theme.mixins.flexBox('column')};
`;

export const Title = styled.div`
  font-size: 5rem;
`;

export const SubTitle = styled.div`
  font-size: 2rem;
  padding: 20px;
`;

export const LinkGroup = styled.div`
  display: flex;
  margin-top: 20px;
  color: ${props => props.theme.clr.base};
`;

export const LinkBox = styled.div`
  ${props => props.theme.mixins.flexBox()};
  background-color: ${props => props.theme.bgclr.secondary};
  margin: 0 15px;
  width: 180px;
  height: 60px;
  font-size: 1.3rem;
`;
