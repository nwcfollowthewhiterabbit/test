import styled from "@emotion/styled";

export const Box = styled.div`
  position: sticky;
  z-index: 10;
  top: 0;
  left: 0;

  padding: 8px 15px;
  width: 100%;

  background-color: #fff;
`;

export const WrapBtn = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Btn = styled.a`
  padding: 5px;

  border: 1px solid #727679;
  border-radius: 3px;

  color: #727679;
  opacity: ${(props) => (props.full !== 1 ? "0.3" : "1")};
  text-decoration: none;

  background-color: transparent;
  cursor: ${(props) => (props.full !== 1 ? "not-allowed" : "pointer")};
  pointer-events: ${(props) => (props.full !== 1 ? "none" : "auto")};

  &:hover {
    border: 1px solid #eba11a;
    color: #eba11a;
  }
`;

export const WrapText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  margin-top: 10px;
`;

export const Text = styled.p`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  font-size: 14px;
`;

export const SpanEl = styled.span`
  color: #eba11a;
`;
