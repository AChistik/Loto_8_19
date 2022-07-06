import { configureStore } from '@reduxjs/toolkit'

import rootReducer from './reducers'

const stores = configureStore({ reducer: rootReducer })


export default stores;