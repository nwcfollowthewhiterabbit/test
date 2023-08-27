import React from "react";
import { LinkEl, PlayIcon } from "./VideoList.styled";

const VideoList = React.memo(({ item, isChecked }) => {
  return (
    <li>
      <LinkEl to={`${item.id}`} checked={isChecked}>
        {item.name} <PlayIcon />
      </LinkEl>
    </li>
  );
});

export default VideoList;
