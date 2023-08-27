import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import DatePickerElement from "../../components/DatePicker/DatePicker";
import { LoadingOutlined } from "@ant-design/icons";

import { refreshUser } from "../../redux/dataSetListSlice/operations";
import { generateDataSet } from "../../api/videoApi";

import {
  Box,
  Btn,
  Form,
  InputText,
  InputTextAre,
  Label,
  Span,
  SpanStar,
} from "./DownloadDataSetPage.styled";

export default function DownloadDataSetPage() {
  const [channelId, setChannelId] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [timeStart, setTimeStart] = useState("");
  const [timeEnd, setTimeEnd] = useState("");
  const [shiftStart, setShiftStart] = useState("");
  const [shiftEnd, setShiftEnd] = useState("");
  const [density, setDensity] = useState("");
  const [isLoad, setIsLoad] = useState(true);

  const dispatch = useDispatch();

  const handleGenerateDataSet = async (e) => {
    e.preventDefault();
    setIsLoad(false);
    await generateDataSet({
      channelId,
      name,
      description,
      timeStart,
      timeEnd,
      shiftStart,
      shiftEnd,
      density,
    });
    await dispatch(refreshUser());
    setIsLoad(true);
  };

  return (
    <Box>
      <Form onSubmit={handleGenerateDataSet}>
        <Label>
          <InputText
            type="text"
            name="id"
            value={channelId}
            required
            placeholder=" "
            onChange={(e) => {
              setChannelId(e.target.value);
            }}
          />
          <Span>
            Введіть Channel ID <SpanStar>*</SpanStar>
          </Span>
        </Label>
        <Label>
          <InputText
            type="text"
            name="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            placeholder=" "
            required
          />
          <Span>
            Введіть Ім'я <SpanStar>*</SpanStar>
          </Span>
        </Label>
        <DatePickerElement
          setTimestart={setTimeStart}
          setTimeend={setTimeEnd}
        />
        <Label>
          <InputText
            type="text"
            name="shiftstart"
            value={shiftStart}
            onChange={(e) => {
              setShiftStart(e.target.value);
            }}
            placeholder=" "
          />
          <Span>
            Приблизний час реклами після початку програми, у секундах(default
            300)
          </Span>
        </Label>
        <Label>
          <InputText
            type="text"
            name="shiftend"
            value={shiftEnd}
            onChange={(e) => {
              setShiftEnd(e.target.value);
            }}
            placeholder=" "
          />
          <Span>
            Приблизний час реклами перед завершенням програми, у
            секундах(default 300)
          </Span>
        </Label>
        <Label>
          <InputText
            type="text"
            name="density"
            value={density}
            onChange={(e) => {
              setDensity(e.target.value);
            }}
            placeholder=" "
          />
          <Span>Щільність кадрів одного Dataset, у % (default 100)</Span>
        </Label>
        <InputTextAre
          value={description}
          name="description"
          onChange={(event) => setDescription(event.target.value)}
          placeholder="Опис"
        />
        <Btn>
          {isLoad ? (
            "Завантажити"
          ) : (
            <LoadingOutlined
              style={{
                fontSize: 24,
              }}
              spin
            />
          )}
        </Btn>
        <ToastContainer />
      </Form>
    </Box>
  );
}
