import api from "~/http/api.js";

const resource = "/users"

export const allUsers = () => api.get(resource)
// export const creatTasks = (task) => api.post(resource, task)