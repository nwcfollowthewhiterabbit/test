import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import {
  BsFillBoxSeamFill,
  BsFileEarmarkPlus,
  BsFileEarmarkArrowDown,
} from "react-icons/bs";

export const Header = styled.header`
  height: 100vh;
  border-right: 2px solid #727679;
`;

export const Navigation = styled.nav`
  height: 100%;
`;

export const UlList = styled.ul`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 15px;

  height: 100vh;
  overflow: auto;

  scrollbar-width: thin;
  scrollbar-color: transparent transparent;

  padding: 0 15px 25px;

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #999;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #eba11a;
  }

  &::-webkit-scrollbar-track {
    background-color: #eee;
  }
`;

export const Box = styled.div`
  position: sticky;
  z-index: 10;
  top: 0;
  left: 0;

  display: flex;
  justify-content: space-between;

  padding: 8px 15px;
  width: 100%;

  background-color: #fff;
`;

export const LiItemAdd = styled.li`
  width: 30px;
  height: 30px;
`;

export const LinkAdd = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  border: 2px solid #727679;
  border-radius: 5px;

  color: #727679;
  fill: #727679;

  &:hover {
    border: 1px solid #eba11a;
    fill: #eba11a;
  }

  &.active {
    color: #eba11a;
    fill: #eba11a;
    border: 2px solid #eba11a;
  }
`;

export const LiItem = styled.li`
  position: relative;
`;

// ---- Icon
export const AddIcon = styled(BsFileEarmarkPlus)`
  fill: inherit;
  width: 20px;
  height: 20px;
`;

export const DownIcon = styled(BsFileEarmarkArrowDown)`
  fill: inherit;
  width: 20px;
  height: 20px;
`;

export const ListIcon = styled(BsFillBoxSeamFill)`
  fill: inherit;
  width: 15px;
  height: 15px;
`;
// ---- Icon

export const LinkEl = styled(NavLink)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 5px;

  border: 1px solid transparent;
  border-radius: 5px;

  font-size: 20px;
  font-weight: 500;
  text-decoration: none;
  transition: color 0.2s ease, fill 0.2s ease, border 0.2s ease;

  color: #727679;
  fill: #727679;

  &:hover {
    border: 1px solid #727679;
  }

  &.active {
    color: #eba11a;
    fill: #eba11a;
  }
`;

export const AdMarker = styled.span`
  position: absolute;
  bottom: 2px;
  left: 0;

  width: ${(props) => (props.processed / props.total) * 100}%;
  height: 5px;

  background-color: #2ceb1a;

  border-radius: 5px;
`;

export const CtMarker = styled.span`
  position: absolute;
  bottom: 2px;
  width: 100%;
  height: 5px;
  background-color: #727679;
  z-index: -1;
  border-radius: 5px;
`;
