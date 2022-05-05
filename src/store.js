import {configureStore} from '@reduxjs/toolkit';
import searchRobotsSlice from './reducers';
import logger from 'redux-logger';


export default configureStore({
    reducer: {
        roboSearch: searchRobotsSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})