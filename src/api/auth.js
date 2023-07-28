import instance from "./instance";

export const auth_api = {
  login: (data) => instance.post(`/login`, data),
  login_google: (data) => instance.post(`/login/google`, data),
  signup: (data) => instance.post(`/signup`, data),
  refresh_access_token: (data) => instance.post(`/token-refresh`, data),
  forgot_password: (data) => instance.post(`/forgot-password`, data),
  forgot_password_check_optional: (data) => instance.post(`/forgot-password-check-optional`, data),
  forgot_password_confirm: (data) => instance.put(`/forgot-password-confirm`, data),
};
