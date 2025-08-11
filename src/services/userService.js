import api from "./api";

export const userService = {
  getUsers: () => api.get("/users"),
  createUser: (data) => api.post("/users", data),
  updateUser: (id, data) => api.patch(`/users/${id}`, data),
  deleteUser: (id) => api.delete(`/users/${id}`),
};
