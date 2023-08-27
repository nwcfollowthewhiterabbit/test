import React, { useEffect, useState } from "react";
import {
  Box,
  Btn,
  SpanEl,
  Text,
  WrapBtn,
  WrapText,
} from "./DownLoadBtn.styled";
import { useSelector } from "react-redux";
import { getProgressSelector } from "../../redux/frameSlice/selectors";

export default function DownLoadBtn({ dataSetItem }) {
  const [full, setFull] = useState(null);
  const progress = useSelector(getProgressSelector);

  useEffect(() => {
    setFull(progress.totalFramesCount / progress.processedFramesCount);
  }, [progress]);

  return (
    <Box>
      <WrapBtn>
        <Btn href={dataSetItem.videosegmentsArchivePath} full={full}>
          Відео
        </Btn>
        <Btn href={dataSetItem.framesArchivePath} full={full}>
          Кадри
        </Btn>
        <Btn href={dataSetItem.jsonLinesPath} full={full}>
          Json
        </Btn>
      </WrapBtn>
      <WrapText>
        <Text>
          Оброблені кадри:
          <SpanEl>
            {Math.round(
              (progress.processedFramesCount / progress.totalFramesCount) * 100
            )}
            %
          </SpanEl>
        </Text>
        <Text>
          З них реклами:
          <SpanEl>
            {Math.round(
              (progress.isAdFramesCount / progress.processedFramesCount) *
                100 || 0
            )}
            %
          </SpanEl>
        </Text>
      </WrapText>
    </Box>
  );
}
