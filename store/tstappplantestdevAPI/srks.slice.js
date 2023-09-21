import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_srk_list = createAsyncThunk(
  "srks/api_v1_srk_list",
  async payload => {
    const response = await apiService.api_v1_srk_list(payload)
    return response.data
  }
)
export const api_v1_srk_create = createAsyncThunk(
  "srks/api_v1_srk_create",
  async payload => {
    const response = await apiService.api_v1_srk_create(payload)
    return response.data
  }
)
export const api_v1_srk_retrieve = createAsyncThunk(
  "srks/api_v1_srk_retrieve",
  async payload => {
    const response = await apiService.api_v1_srk_retrieve(payload)
    return response.data
  }
)
export const api_v1_srk_update = createAsyncThunk(
  "srks/api_v1_srk_update",
  async payload => {
    const response = await apiService.api_v1_srk_update(payload)
    return response.data
  }
)
export const api_v1_srk_partial_update = createAsyncThunk(
  "srks/api_v1_srk_partial_update",
  async payload => {
    const response = await apiService.api_v1_srk_partial_update(payload)
    return response.data
  }
)
export const api_v1_srk_destroy = createAsyncThunk(
  "srks/api_v1_srk_destroy",
  async payload => {
    const response = await apiService.api_v1_srk_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const srksSlice = createSlice({
  name: "srks",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(api_v1_srk_list.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_srk_list.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = action.payload
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_srk_list.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_srk_create.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_srk_create.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities.push(action.payload)
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_srk_create.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_srk_retrieve.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_srk_retrieve.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = [
            ...state.entities.filter(record => record.id !== action.payload.id),
            action.payload
          ]
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_srk_retrieve.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_srk_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_srk_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_srk_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_srk_partial_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_srk_partial_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_srk_partial_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_srk_destroy.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_srk_destroy.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.filter(
            record => record.id !== action.meta.arg?.id
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_srk_destroy.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
  }
})
export default {
  api_v1_srk_list,
  api_v1_srk_create,
  api_v1_srk_retrieve,
  api_v1_srk_update,
  api_v1_srk_partial_update,
  api_v1_srk_destroy,
  slice: srksSlice
}
