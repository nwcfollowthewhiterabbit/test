import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

import SideBar from "../../components/SideBar/SideBar";

import { logOutUser } from "../../redux/dataSetListSlice/operations";
import { isLogedIn } from "../../redux/dataSetListSlice/selectors";
import { persistor } from "../../redux/store";

import { BtnLogOut, Layout } from "./LayOutPage.styled";

export default function LayOutPage() {
  const dispatch = useDispatch(persistor);
  const isLogedInUs = useSelector(isLogedIn);

  const logOut = () => {
    dispatch(logOutUser(persistor));
  };
  return (
    <Layout>
      <SideBar />
      <main>
        <Outlet />
      </main>
      {isLogedInUs && <BtnLogOut onClick={logOut}>Вийти</BtnLogOut>}
    </Layout>
  );
}
