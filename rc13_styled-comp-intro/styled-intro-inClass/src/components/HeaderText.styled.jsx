import styled from "styled-components";

const HeaderText = styled.h1`
  color: ${({ color }) => color || "black"};
  fonts-size: 2.5rem;
`;

export default HeaderText;
