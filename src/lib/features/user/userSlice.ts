import { EmployeeLoginSuccessData } from '@/api/types/auth.type'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface UserState {
  isLoggedIn: boolean
  token: string | null
  user: { name: string; email: string; department: string; role: string } | null
}

const initialState: UserState = {
  isLoggedIn: false,
  token: null,
  user: null,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<EmployeeLoginSuccessData>) => {
      state.isLoggedIn = true
      state.user = action.payload.data.currentUser
      state.token = action.payload.data.accessToken
    },
    logout: state => {
      state.isLoggedIn = false
      state.user = null
      state.token = null
    },
  },
})

export const { login, logout } = userSlice.actions
export default userSlice.reducer
