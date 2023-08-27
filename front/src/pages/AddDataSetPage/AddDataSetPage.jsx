import React, { useState } from "react";
import { postDataSet } from "../../api/videoApi";
import { useDispatch } from "react-redux";
import { refreshUser } from "../../redux/dataSetListSlice/operations";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { LoadingOutlined } from "@ant-design/icons";

import {
  Box,
  Btn,
  Form,
  InputFile,
  InputText,
  InputTextAre,
  Label,
  LabelInput,
  SpanInput,
  SpanSelected,
  SpanStar,
  Spantext,
  WrapInput,
} from "./AddDataSetPage.styled";

export default function AddDataSetPage() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [channelId, setChannelId] = useState("");
  const [isLoad, setIsLoad] = useState(true);

  const dispatch = useDispatch();

  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleFileUpload = async (e) => {
    e.preventDefault();
    setIsLoad(false);
    await postDataSet({ selectedFile, name, description, channelId });
    await dispatch(refreshUser());
    setIsLoad(true);
    setSelectedFile(null);
    setName("");
    setDescription("");
    setChannelId("");
  };

  return (
    <Box>
      <Form onSubmit={handleFileUpload}>
        <LabelInput>
          <InputText
            type="text"
            name="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder=" "
          />
          <SpanInput>Введіть Ім'я</SpanInput>
        </LabelInput>
        <LabelInput>
          <InputText
            type="text"
            name="id"
            value={channelId}
            onChange={(event) => setChannelId(event.target.value)}
            placeholder=" "
            required
          />
          <SpanInput>
            Введіть Channel ID <SpanStar>*</SpanStar>
          </SpanInput>
        </LabelInput>
        <InputTextAre
          value={description}
          name="description"
          onChange={(event) => setDescription(event.target.value)}
          placeholder="Опис"
        />
        <WrapInput className="file-input-container">
          <Label htmlFor="file-input" className="file-input-label">
            <Spantext className="file-input-label-text">
              Оберіть файл <SpanStar>*</SpanStar>
            </Spantext>
            <SpanSelected className="file-input-selected">
              {selectedFile ? selectedFile.name : "No file selected"}
            </SpanSelected>
          </Label>
          <InputFile
            id="file-input"
            type="file"
            onChange={handleFileSelect}
            required
            className="file-input"
          />
        </WrapInput>
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
      </Form>
      <ToastContainer />
    </Box>
  );
}
