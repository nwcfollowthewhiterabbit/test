import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import { BsFillCaretRightFill } from "react-icons/bs";

export const PlayIcon = styled(BsFillCaretRightFill)`
  display: inline-block;
  fill: inherit;
  width: 15px;
  height: 15px;
`;

export const LinkEl = styled(NavLink)`
  display: inline-block;
  display: flex;
  gap: 10px;
  align-items: center;
  padding: 5px;

  border: 1px solid transparent;
  border-radius: 5px;

  font-size: 20px;
  text-decoration: none;
  transition: color 0.2s ease, fill 0.2s ease, border 0.2s ease;

  ${({ checked }) =>
    checked
      ? `
      color: #2ceb1a;

      `
      : `
      color: #727679;

      `}

  &:hover {
    border: 1px solid #727679;
  }

  &.active {
    color: #eba11a;
    fill: #eba11a;
    border: 1px solid #eba11a;
  }
`;
