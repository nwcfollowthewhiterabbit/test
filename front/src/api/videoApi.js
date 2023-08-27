import axios from "axios";
import { toast } from "react-toastify";

export const backend = axios.create({
  baseURL: "https://api.sysadmin-beginner-2.duckwing.in/",
});

export const getDataSetList = async () => {
  try {
    const { data } = await backend.get("/v1/datasets");

    return data;
  } catch (error) {
    return error;
  }
};

export const getDataSetListProgres = async (id) => {
  try {
    const { data } = await backend.post(`/v1/datasets/${id}/progress`);
    return data;
  } catch (error) {
    return error;
  }
};

export const getDataSetItem = async (id) => {
  try {
    const { data } = await backend.get(`/v1/datasets/${id}`);
    return data;
  } catch (error) {
    return error;
  }
};

export const getVideoSigment = async (id) => {
  try {
    const { data } = await backend.get(`/v1/videosegments/${id}`);
    return data;
  } catch (error) {
    return error;
  }
};

export const markFrame = async (id, body) => {
  try {
    const { data } = await backend.patch(`/v1/frames/${id}`, body);
    return data;
  } catch (error) {
    return error;
  }
};

export const postDataSet = async (data) => {
  const formData = new FormData();
  formData.append("file", data.selectedFile);
  formData.append("name", data.name);
  formData.append("description", data.description);
  formData.append("channel_id", data.channelId);

  try {
    const { data } = await backend.post("/v1/datasets", formData);
    toast.success("Dataset успішно доданий");
  } catch (error) {
    return error;
  }
};

export const generateDataSet = async (query) => {
  try {
    const { data } = await backend.post(
      `/v1/datasets/generate?${new URLSearchParams(query)}`
    );

    toast.success("Dataset успішно доданий");
    return data;
  } catch (error) {
    return error;
  }
};
