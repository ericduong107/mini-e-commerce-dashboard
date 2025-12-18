import { configureStore } from '@reduxjs/toolkit'
// Import các reducer ở đây (ví dụ sau này bạn tạo productSlice)
// import productReducer from '@/features/products/productSlice'

export const store = configureStore({
  reducer: {
    // products: productReducer,
  },
})

// Types cho TS
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch