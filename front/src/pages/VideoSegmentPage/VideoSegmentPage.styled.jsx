import styled from "@emotion/styled";
import {
  BsFillArrowLeftSquareFill,
  BsFillArrowRightSquareFill,
  BsFillCheckSquareFill,
} from "react-icons/bs";

export const VideoPageWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Box = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 200px); /* Изменили на repeat(5, 200px) */
  grid-gap: 10px;
  justify-items: center;
  justify-content: center;

  padding: 20px;
`;

export const WrapBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const WrapArrow = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;

  margin-top: 30px;
`;

export const Btn = styled.button`
  padding: 5px 10px;
  margin-bottom: 10px;

  background: transparent;

  border: transparent;
  border-radius: 5px;

  color: #727679;
  fill: #727679;

  cursor: pointer;
  transition: background 0.3s ease, color 0.3s ease;

  &:hover {
    fill: #eba11a;
    color: #eba11a;
  }
`;

export const LeftArrow = styled(BsFillArrowLeftSquareFill)`
  fill: inherit;
  width: 40px;
  height: 40px;
`;

export const RightArrow = styled(BsFillArrowRightSquareFill)`
  fill: inherit;
  width: 40px;
  height: 40px;
`;

export const SaveIcon = styled(BsFillCheckSquareFill)`
  fill: inherit;
  width: 40px;
  height: 40px;
`;
