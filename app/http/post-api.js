import api from "~/http/api.js";

const resource = "/posts"

export const allPost = () => api.get(resource)
// export const creatPost = (task) => api.post(resource, task)