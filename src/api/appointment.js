import api from "./axios";

export const getAllPagination = async (page, sortBy) => {
  const res = await api.get(
    `/appointment/all-pageable?pageNumber=${page}&pageSize=5&sortBy=${sortBy}`
  );

  return res.data;
};

export const create = async (body) => {
  const res = await api.post("/appointment/add", body);

  return res.data;
};

export const deleteAppointment = async (id) => {
  await api.delete(`/appointment/delete/${id}`);
};
