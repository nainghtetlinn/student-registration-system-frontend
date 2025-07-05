import { EmployeeLoginSuccessData } from '@/api/types/auth.type'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface UserState {
  isLoggedIn: boolean
  user: { name: string; email: string; department: string; role: string }
}

const initialState: UserState = {
  isLoggedIn: false,
  user: { name: '', email: '', department: '', role: '' },
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<EmployeeLoginSuccessData>) => {
      state.isLoggedIn = true
      state.user = action.payload.data.currentUser
    },
    logout: state => {
      state.isLoggedIn = false
      state.user = { name: '', email: '', department: '', role: '' }
    },
  },
})

export const { login, logout } = userSlice.actions
export default userSlice.reducer
