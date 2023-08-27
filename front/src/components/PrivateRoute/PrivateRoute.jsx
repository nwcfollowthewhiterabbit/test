import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

import Login from "../../pages/LoginPage/LoginPage";
import { isLogedIn } from "../../redux/dataSetListSlice/selectors";
import { refreshUser } from "../../redux/dataSetListSlice/operations";

export default function PrivateRoute() {
  const isLogin = useSelector(isLogedIn);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isLogin ? <Outlet /> : <Login />;
}
