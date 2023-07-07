import { BrowserRouter, Routes, Route } from "react-router-dom";

import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Logo from "./ui/Logo";
import MainNav from "./ui/MainNav";
import PageNotFound from "./pages/PageNotFound";

const StyledHeader = styled.header`
  display: flex;
  width: 100%;
  height: 6.5rem;
  padding: 0rem 5rem;
  justify-content: space-between;
  align-items: center;
  background: var(--fill-white);
`;

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<PageNotFound />} />
        <GlobalStyles />
        <StyledHeader>
          <Logo />
          <MainNav />
        </StyledHeader>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
