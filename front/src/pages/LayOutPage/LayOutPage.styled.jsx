import styled from "@emotion/styled";

export const Layout = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 200px 1fr;
  overflow: hidden;
`;

export const BtnLogOut = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;

  padding: 5px 10px;
  margin-bottom: 10px;
  margin-left: 10px;

  background: transparent;

  border: 1px solid #eba11a;
  border-radius: 5px;

  color: #727679;
  cursor: pointer;
  transition: background 0.3s ease, color 0.3s ease;

  &:hover {
    background: #eba11a;
    color: #fff;
  }
`;
