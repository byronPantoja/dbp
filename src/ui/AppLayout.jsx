import { Outlet } from "react-router-dom";
import MainNav from "./MainNav";
import { styled } from "styled-components";

const StyledAppLayout = styled.div``;

const Main = styled.main``;

const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

function AppLayout() {
  return (
    <StyledAppLayout>
      <MainNav />
      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>
    </StyledAppLayout>
  );
}

export default AppLayout;
