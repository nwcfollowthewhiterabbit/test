import styled from "@emotion/styled";

export const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100vw;
  height: 100vh;
`;

export const BoxForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 15px;

  padding: 10px;

  width: 350px;
  height: 200px;

  border: 2px solid #727679;
  border-radius: 10px;

  box-shadow: 0 0 30px rgba(#000000, 0.1);
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const Input = styled.input`
  width: 100%;
  height: 30px;

  border: 1px solid #727679;
  border-radius: 5px;
  outline: transparent;

  &:focus {
    border: 1px solid #eba11a;
  }
`;

export const Btn = styled.button`
  width: 100%;
  height: 30px;

  background: transparent;
  border: 1px solid #727679;
  border-radius: 5px;
  outline: transparent;
  transition: color 0.3s ease, background 0.3s ease;

  &:hover {
    color: white;
    background: #eba11a;
  }
`;
