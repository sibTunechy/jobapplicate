import { configureStore } from '@reduxjs/toolkit';

import { footballApi } from '../services/footballApi';

export default configureStore({
    reducer: {
        [footballApi.reducerPath]: footballApi.reducer,
    },
})