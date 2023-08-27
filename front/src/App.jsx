import { Routes, Route } from "react-router-dom";

import LayOutPage from "./pages/LayOutPage/LayOutPage";
import DataSetItemPage from "./pages/DataSetItemPage/DataSetItemPage";
import VideoSegmentPage from "./pages/VideoSegmentPage/VideoSegmentPage";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import AddDataSetPage from "./pages/AddDataSetPage/AddDataSetPage";
import DownloadDataSetPage from "./pages/DownloadDataSetPage/DownloadDataSetPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<PrivateRoute />}>
          <Route path="/" element={<LayOutPage />}>
            <Route path=":datasetId" element={<DataSetItemPage />}>
              <Route path=":frameId" element={<VideoSegmentPage />} />
            </Route>
            <Route path="/add-data-set" element={<AddDataSetPage />} />
            <Route path="/down-data-set" element={<DownloadDataSetPage />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
