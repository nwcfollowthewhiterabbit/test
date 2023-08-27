import { useEffect, useState } from "react";
import { BackgroundOverlay, Box, Img, TextOverlay } from "./ImageLine.styled";

export default function ImageLine({ item, setFrame, isAd }) {
  const [isImageClicked, setIsImageClicked] = useState(isAd);
  const [isAdv, setIsAdv] = useState(isAd);

  useEffect(() => {
    setFrame((prev) => [...prev, { id: item.id, isAd: isAd, isChecked: true }]);

    return () => {
      setFrame([]);
    };
  }, []);

  const handleClick = () => {
    setIsImageClicked(!isImageClicked);
    setFrame((prev) => {
      return prev.map((frame) => {
        if (frame.id === item.id) {
          return { ...frame, isAd: !frame.isAd };
        }
        return frame;
      });
    });
  };

  return (
    <Box isImageClicked={isImageClicked} onClick={handleClick}>
      <Img src={item.path} alt="image from tv" />
      <BackgroundOverlay isImageClicked={isImageClicked} isAd={isAdv} />
      <TextOverlay isImageClicked={isImageClicked}>Реклама</TextOverlay>
    </Box>
  );
}
