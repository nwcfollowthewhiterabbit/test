import styled from "@emotion/styled";

export const Navigation = styled.nav`
  position: relative;
  display: grid;
  grid-template-columns: 310px 1fr;
  height: 100vh;
`;

export const UlList = styled.ul`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 5px;

  height: 100vh;
  overflow: auto;

  scrollbar-width: thin;
  scrollbar-color: transparent transparent;

  padding: 0 10px 25px;
  border-right: 2px solid #727679;

  /* Стилизация скролла */
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
