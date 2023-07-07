import styled, { css } from "styled-components";

const Heading = styled.h1`
  ${(props) =>
    props.type === "h1" &&
    css`
      font-size: 4.375rem;
      line-height: 6.25rem;
      letter-spacing: -0.0625rem;
    `}

  ${(props) =>
    props.as === "h2" &&
    css`
      font-size: 3.75rem;
      line-height: 4.75rem;
      letter-spacing: -0.03125rem;
    `}

  ${(props) =>
    props.as === "h3" &&
    css`
      font-size: 3rem;
      line-height: 4.375rem;
    `}

  font-weight: 400;
`;

export default Heading;
