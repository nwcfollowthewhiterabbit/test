import styled from "@emotion/styled";

export const Box = styled.div`
  position: relative;
  width: 175px;
  height: 175px;
  cursor: pointer;
  ${({ isImageClicked }) =>
    isImageClicked
      ? `
        border: 2px solid #727679;
      `
      : `
        border: none;
      `}
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
`;

export const BackgroundOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  ${({ isImageClicked }) =>
    isImageClicked
      ? `
      background: linear-gradient(
      to bottom,
    rgba(235, 162, 26, 0.514),
    rgba(235, 162, 26, 0.774)
    )
    `
      : `
        background: none;
    `}
`;

export const TextOverlay = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;

  font-size: 20px;
  color: #fff;
  transform: translate(-50%, -50%);
  ${({ isImageClicked }) =>
    isImageClicked
      ? `
      display: block
    `
      : `
        display: none;
    `}
`;
