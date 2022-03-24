import { configureStore } from '@reduxjs/toolkit'
import CounterReducer from './reducers/counterReducer'

const Store = configureStore({
    reducer: CounterReducer
})
  
export default Store