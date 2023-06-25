import api from "./axios";

export const getAllPagination = async (page, filter, sortBy) => {
  const res = await api.get(
    `/venison/all-pageable?pageNumber=${page}&pageSize=5&filter=${filter}&sortBy=${sortBy}`
  );
  return res.data;
};

export const getAllVensions = async () => {
  const res = await api.get("/venison/all");

  return res.data;
};

export const create = async (body) => {
  const res = await api.post("/venison/add", body);

  return res.data;
};
