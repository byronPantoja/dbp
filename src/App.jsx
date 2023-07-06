import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";

const StyledHeader = styled.header`
  display: flex;
  width: 100%;
  height: 6.5rem;
  padding: 0rem 9.375rem;
  justify-content: center;
  align-items: center;
  background: var(--fill-accent);
`;
function App() {
  return (
    <>
      <GlobalStyles />
      <StyledHeader>
        <h1>Logo</h1>
        <ul>
          <li>Projects</li>
          <li>Notes</li>
        </ul>
      </StyledHeader>
    </>
  );
}

export default App;
