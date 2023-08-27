import { useEffect, useMemo } from "react";
import { Outlet, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { fetchDataSetItem } from "../../redux/dataSetListSlice/operations";
import { getDataSetItem } from "../../redux/dataSetListSlice/selectors";

import VideoList from "../../components/VideoList/VideoList";

import { Navigation, UlList } from "./DataSetItemPage.styled";
import DownLoadBtn from "../../components/DownLoadBtn/DownLoadBtn";
import { getProgress } from "../../redux/frameSlice/operations";

export default function DataSetItemPage() {
  const dataSetItem = useSelector(getDataSetItem);

  const { datasetId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDataSetItem(datasetId));
    dispatch(getProgress(datasetId));
  }, [datasetId, dispatch]);

  const videoSegments = useMemo(
    () => dataSetItem?.videosegments || [],
    [dataSetItem]
  );

  return (
    <Navigation>
      <UlList>
        <DownLoadBtn dataSetItem={dataSetItem} />
        {videoSegments?.map((item) => (
          <VideoList key={item.id} item={item} isChecked={item.isChecked} />
        ))}
      </UlList>
      <Outlet />
      <ToastContainer />
    </Navigation>
  );
}
