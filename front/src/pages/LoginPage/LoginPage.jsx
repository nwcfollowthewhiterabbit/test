import { useState } from "react";
import { useDispatch } from "react-redux";

import { fetchDataSets } from "../../redux/dataSetListSlice/operations";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Box, BoxForm, Btn, Input, Label } from "./LoginPage.styled";

export default function Login() {
  const [key, setKey] = useState("");
  const dispatch = useDispatch();

  const handleClick = async () => {
    dispatch(fetchDataSets(key));
  };
  return (
    <Box>
      <BoxForm>
        <Label>
          <span>Введіть ключ API</span>
          <Input
            type="text"
            onChange={(e) => {
              setKey(e.target.value);
            }}
          />
        </Label>
        <Btn type="button" onClick={handleClick}>
          Вхід
        </Btn>
      </BoxForm>
      <ToastContainer />
    </Box>
  );
}
