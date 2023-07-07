import styled from "styled-components";

const StyledMainNav = styled.ul`
  display: flex;

  li {
    padding: 0 14px;
    font-size: 1.3rem;
  }
`;

function MainNav() {
  return (
    <StyledMainNav>
      <li>Projects</li>
      <li>Notes</li>
    </StyledMainNav>
  );
}

export default MainNav;
