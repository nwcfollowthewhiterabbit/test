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
  gap: 30px;

  padding: 30px 20px;

  width: 300px;
  height: 500px;

  border: 1px solid #727679;
  border-radius: 15px;
`;

export const LabelInput = styled.label`
  display: block;
  position: relative;
  width: 100%;
`;

export const SpanInput = styled.span`
  position: absolute;
  top: 50%;
  left: 10px;

  font-size: 13px;
  color: #727679;

  transform: translateY(-50%);
  transition: all 0.5s ease;
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

  &:focus {
    border: 1px solid #eba11a;
  }

  &:focus-within + Span {
    transform: translateY(-40px);
    color: #eba11a;
  }

  &:not(:placeholder-shown) + Span {
    transform: translateY(-40px);
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

export const WrapInput = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;
`;

export const Label = styled.label`
  display: block;
  padding: 8px 16px;
  background-color: #e6e6e6;
  color: #333;
  cursor: pointer;
  border-radius: 4px;
  width: 100%;
  box-sizing: border-box;
`;

export const Spantext = styled.span`
  display: block;
  margin-bottom: 4px;
`;

export const SpanSelected = styled.span`
  font-size: 12px;
  color: #666;
`;

export const SpanStar = styled.span`
  font-size: 15px;
  color: red;
`;

export const InputFile = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
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
