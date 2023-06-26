import api from "./axios";

export const getAllPagination = async (page, filter, sortBy) => {
  const res = await api.get(
    `/hunter/all-pageable?pageNumber=${page}&pageSize=5&filter=${filter}&sortBy=${sortBy}`
  );

  return res.data;
};

export const getHunter = async (id) => {
  const res = await api.get(`/hunter/find/${id}`);

  return res.data;
};

export const create = async (body) => {
  const res = await api.post("/hunter/add", body);

  return res.data;
};

export const edit = async (body) => {
  const res = await api.patch("/hunter/edit", body);

  return res.data;
};
