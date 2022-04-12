import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    firstName: '',
    lastName: '',
    email: '',
    token: '',
  },
  reducers: {
    setFirstName: (state, action) => {
      state.firstName = action.payload
    },
    setLastName: (state, action) => {
      state.lastName = action.payload
    },
    setEmail: (state, action) => {
      state.email = action.payload
    },
    setToken: (state, action) => {
      state.token = action.payload
    },
  },
})

export const { setFirstName, setLastName, setEmail, setToken } = userSlice.actions

export const userReducer = userSlice.reducer
