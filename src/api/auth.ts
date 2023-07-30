import instance from "./instance";

interface login_data {
  username: string | null
  password: string | null
}

interface login_google_data {
  code: string | null
}

interface signup_data {
  username: string | null
  password: string | null
  password2: string | null
  email: string | null
}

interface refresh_access_token_data {
  refresh: string | null
}


export const auth_api = {
  login: (data:login_data) => instance.post(`/login`, data),
  login_google: (data:login_google_data) => instance.post(`/login/google`, data),
  signup: (data:signup_data) => instance.post(`/signup`, data),
  refresh_access_token: (data:refresh_access_token_data) => instance.post(`/token-refresh`, data),
  forgot_password: (data: any) => instance.post(`/forgot-password`, data),
  forgot_password_check_optional: (data: any) => instance.post(`/forgot-password-check-optional`, data),
  forgot_password_confirm: (data: any) => instance.put(`/forgot-password-confirm`, data),
};
