import styled, { css } from "styled-components";

const Container = styled.div`
  background: ${({ bg }) => bg || "white"};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem;
  ${(props) =>
    props.secondary &&
    css`
      background: "lighblue";
      color: "crimson";
      padding: 0.3rem;
    `}
`;

export default Container;
