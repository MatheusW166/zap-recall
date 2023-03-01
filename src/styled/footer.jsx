import styled from "styled-components";

const Footer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  height: 70px;
  width: 100%;
  background: ${({ theme }) => theme.overBackground};
  font-size: ${({ theme }) => theme.lg};
  display: grid;
  place-content: center;
  box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);
`;

export default Footer;
