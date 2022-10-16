import { createSlice } from "@reduxjs/toolkit"


const initialState = {
  isNavModalOpen : false,
  isSidebarOpen: true
}

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    openNavModal: (state)=>{
      state.isNavModalOpen = true
    },
    closeNavModal: (state)=>{
      state.isNavModalOpen = false
    },
    sidebarToggle : (state)=>{
      state.isSidebarOpen = !state.isSidebarOpen
    }
  }
})

export const { openNavModal,closeNavModal, sidebarToggle} = uiSlice.actions

export default uiSlice.reducer