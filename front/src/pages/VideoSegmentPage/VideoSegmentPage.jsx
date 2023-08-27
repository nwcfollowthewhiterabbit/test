import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { fetchVideoSigment } from "../../redux/videoSegmentSlice/operations";
import { getVideoSegment } from "../../redux/videoSegmentSlice/selectors";

import { getProgress, patchFrames } from "../../redux/frameSlice/operations";
import { getColorChecked } from "../../redux/dataSetListSlice/dataSetListSlice";
import { getDataSetItem } from "../../redux/dataSetListSlice/selectors";

import ImageLine from "../../components/ImageLine/ImageLine";

import {
  Box,
  Btn,
  LeftArrow,
  RightArrow,
  SaveIcon,
  VideoPageWrap,
  WrapArrow,
  WrapBtn,
} from "./VideoSegmentPage.styled";

export default function VideoSegment() {
  const [frame, setFrame] = useState([]);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { frameId, datasetId } = useParams();

  const videoSegment = useSelector(getVideoSegment);
  const item = useSelector(getDataSetItem);

  useEffect(() => {
    dispatch(fetchVideoSigment(frameId));
  }, [frameId]);

  const idx = item.videosegments?.findIndex((item) => item?.id == frameId);

  const patchFrame = async () => {
    await dispatch(patchFrames(frame));
    dispatch(getColorChecked(frameId));
    dispatch(getProgress(datasetId));

    if (idx === item.videosegments.length - 1) {
      return;
    }

    navigate(`/${datasetId}/${item.videosegments[idx + 1].id}`, {
      replace: false,
    });
  };

  const saveFrame = async () => {
    await dispatch(patchFrames(frame));
    dispatch(getColorChecked(frameId));
    dispatch(getProgress(datasetId));
  };

  const handleBack = () => {
    if (idx === 0) {
      return;
    }

    navigate(`/${datasetId}/${item.videosegments[idx - 1].id}`, {
      replace: false,
    });
  };

  return (
    <VideoPageWrap>
      <div>
        <Box style={{ position: "relative" }}>
          {videoSegment.frames?.map((item) => (
            <ImageLine
              key={item.id}
              item={item}
              setFrame={setFrame}
              isAd={item.isAd}
              frameId={frameId}
            />
          ))}
        </Box>
      </div>
      <WrapBtn>
        <WrapArrow>
          <Btn onClick={handleBack}>
            <LeftArrow />
          </Btn>
          <Btn onClick={saveFrame}>
            <SaveIcon />
          </Btn>
          <Btn onClick={patchFrame}>
            <RightArrow />
          </Btn>
        </WrapArrow>
      </WrapBtn>
    </VideoPageWrap>
  );
}
