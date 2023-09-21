import axios from "axios"
const tstappplantestdevAPI = axios.create({
  baseURL: "https://tstappplantest1-de-117521.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_docs_schema_retrieve(payload) {
  return tstappplantestdevAPI.get(`/api-docs/schema/`, {
    params: { lang: payload.lang }
  })
}
function api_v1_login_create(payload) {
  return tstappplantestdevAPI.post(`/api/v1/login/`, payload)
}
function api_v1_signup_create(payload) {
  return tstappplantestdevAPI.post(`/api/v1/signup/`, payload)
}
function api_v1_srk_list(payload) {
  return tstappplantestdevAPI.get(`/api/v1/srk/`)
}
function api_v1_srk_create(payload) {
  return tstappplantestdevAPI.post(`/api/v1/srk/`, payload)
}
function api_v1_srk_retrieve(payload) {
  return tstappplantestdevAPI.get(`/api/v1/srk/${payload.id}/`)
}
function api_v1_srk_update(payload) {
  return tstappplantestdevAPI.put(`/api/v1/srk/${payload.id}/`, payload)
}
function api_v1_srk_partial_update(payload) {
  return tstappplantestdevAPI.patch(`/api/v1/srk/${payload.id}/`, payload)
}
function api_v1_srk_destroy(payload) {
  return tstappplantestdevAPI.delete(`/api/v1/srk/${payload.id}/`)
}
function rest_auth_login_create(payload) {
  return tstappplantestdevAPI.post(`/rest-auth/login/`, payload)
}
function rest_auth_logout_retrieve(payload) {
  return tstappplantestdevAPI.get(`/rest-auth/logout/`)
}
function rest_auth_logout_create(payload) {
  return tstappplantestdevAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(payload) {
  return tstappplantestdevAPI.post(`/rest-auth/password/change/`, payload)
}
function rest_auth_password_reset_create(payload) {
  return tstappplantestdevAPI.post(`/rest-auth/password/reset/`, payload)
}
function rest_auth_password_reset_confirm_create(payload) {
  return tstappplantestdevAPI.post(
    `/rest-auth/password/reset/confirm/`,
    payload
  )
}
function rest_auth_registration_create(payload) {
  return tstappplantestdevAPI.post(`/rest-auth/registration/`, payload)
}
function rest_auth_registration_verify_email_create(payload) {
  return tstappplantestdevAPI.post(
    `/rest-auth/registration/verify-email/`,
    payload
  )
}
function rest_auth_user_retrieve(payload) {
  return tstappplantestdevAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return tstappplantestdevAPI.put(`/rest-auth/user/`, payload)
}
function rest_auth_user_partial_update(payload) {
  return tstappplantestdevAPI.patch(`/rest-auth/user/`, payload)
}
export const apiService = {
  api_docs_schema_retrieve,
  api_v1_login_create,
  api_v1_signup_create,
  api_v1_srk_list,
  api_v1_srk_create,
  api_v1_srk_retrieve,
  api_v1_srk_update,
  api_v1_srk_partial_update,
  api_v1_srk_destroy,
  rest_auth_login_create,
  rest_auth_logout_retrieve,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
