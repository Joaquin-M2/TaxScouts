import styled from 'styled-components';

const StyledNavBar = styled.nav`
  background-color: var(--grey-light);
  position: sticky;
  top: 0;
  width: 100%;
  padding: 1rem 0;
  display: flex;
  font-size: 2rem;
`;

const NavBar = props => {
  return <StyledNavBar>{props.children}</StyledNavBar>;
};

export default NavBar;
