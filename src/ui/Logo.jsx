import styled from "styled-components";

const PersonalBrand = styled.h1`
  display: flex;
  width: 94.5rem;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  font-size: 1.3rem;
`;

function Logo() {
  return (
    <>
      <PersonalBrand>
        <a href="/">byronpantoja.com</a>
      </PersonalBrand>
    </>
  );
}

export default Logo;
