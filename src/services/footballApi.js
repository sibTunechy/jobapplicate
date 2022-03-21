import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const footballApiHeaders = {
    'x-response-control': 'api.football-data.org',
    'x-auth-token' : '2808db6455914db68d88d31dcbfc8b07'
}

const baseUrl = 'https://api.football-data.org';

const createRequest = (url) => ({ url, headers: footballApiHeaders})

export const footballApi = createApi({
    reducerPath: 'footballApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getFootball : builder.query({
            query: () => createRequest('/v2/competitions/')
        })
    })
})

export const {
    useGetFootballQuery,
} = footballApi;