import styled from "@emotion/styled";

export const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100vh;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 35px;

  padding: 40px 20px;

  width: 350px;

  border: 1px solid #727679;
  border-radius: 15px;
`;

export const Label = styled.label`
  display: block;
  position: relative;
  width: 100%;
`;

export const Span = styled.span`
  position: absolute;
  top: 50%;
  left: 10px;

  font-size: 13px;
  color: #727679;

  transform: translateY(-50%);
  transition: all 0.5s ease;
`;

export const SpanStar = styled.span`
  font-size: 15px;
  color: red;
`;

export const InputText = styled.input`
  padding-left: 20px;

  width: 100%;
  height: 40px;

  outline: none;
  border: 1px solid #727679;
  border-radius: 5px;

  &:focus {
    border: 1px solid #eba11a;
  }

  &:focus-within + Span {
    transform: translateY(-50px);
    color: #eba11a;
  }

  &:not(:placeholder-shown) + Span {
    transform: translateY(-50px);
    color: #eba11a;
  }
`;

export const InputTextAre = styled.textarea`
  padding-top: 10px;
  padding-left: 20px;

  height: 90px;
  width: 100%;

  resize: none;

  outline: none;
  border: 1px solid #727679;
  border-radius: 5px;

  &:focus {
    border: 1px solid #eba11a;
  }
`;

export const Btn = styled.button`
  height: 40px;

  background: transparent;

  border: 1px solid #727679;
  border-radius: 5px;

  font-family: "Roboto", sans-serif;

  color: #727679;
  cursor: pointer;

  transition: border 0.3s ease, background 0.3s ease, color 0.3s ease;

  &:hover {
    border: 1px solid #eba11a;

    background: #eba11a;

    color: #f9f9fa;
  }
`;
