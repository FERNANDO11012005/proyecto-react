import api from "./api";

export const contactService = {
  sendContact: (data) => api.post("/contact", data),
};
