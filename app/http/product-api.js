import api from "~/http/api.js";

const resource = "/products";

export const allProducts = () => api.get(resource)
export const creatProducts = (task) => api.post(resource, task)