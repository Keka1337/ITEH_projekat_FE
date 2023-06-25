import api from "./axios";

export const getAllPagination = async (page, filter, sortBy) => {
  const res = await api.get(
    `/team/all-pageable?pageNumber=${page}&pageSize=5&filter=${filter}&sortBy=${sortBy}`
  );

  return res.data;
};

export const getAllTeams = async () => {
  const res = await api.get("/team/all");

  return res.data;
};

export const getTeam = async (id) => {
  const res = await api.get(`/team/find/${id}`);

  return res.data;
};

export const create = async (body) => {
  const res = await api.post("/team/add", body);

  return res.data;
};

export const edit = async (id, body) => {
  const res = await api.put(`/team/edit/${id}`, body);

  return res.data;
};
