import instance from "./instance";

const config = {
  headers: { "content-type": "multipart/form-data" },
};

const post = {
  get_list: (filters_string: string) => instance.get(`/app/posts${filters_string}`),
  get_detail: (id: number) => instance.get(`/app/post/${id}`),
  create: (data: {}) => instance.post("/app/posts", JSON.stringify(data), config),
  update: (id: number, data: {}) => instance.put(`/app/post/${id}`, JSON.stringify(data), config),
  delete: (id: number) => instance.delete(`/app/post/${id}`),
};

const comment = {
  get_list: (post_id: number, filters_string: string) => instance.get(`/app/post/${post_id}/comments${filters_string}`),
  create: (post_id: number, data: {}) => instance.post(`/app/post/${post_id}/comments`, JSON.stringify(data)),
  update: (id: number, data: {}) => instance.put(`/app/comment/${id}`, JSON.stringify(data)),
  delete: (id: number) => instance.delete(`/app/comment/${id}`),
};

const user = {
  get_list: () => instance.get(`/user-list`),
  get_detail: (id: number) => instance.get(`/user-detail/${id}`),
};

const my = {
  get_user: () => instance.get(`/my/user`),
  get_profile: () => instance.get(`my/profile`),
  update_user: (data: {}) => instance.put(`/my/user`, JSON.stringify(data), config),
  update_profile: (data: {}) => instance.put(`/my/profile`, JSON.stringify(data), config),
};

export { post, comment, user, my };
