import api from "~/http/api.js";

const resource = "/users"

export const allTasks = () => api.get(resource)
export const creatTasks = (task) => api.post(resource, task)