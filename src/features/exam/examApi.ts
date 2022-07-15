import { fetchBaseQuery } from "@reduxjs/toolkit/query"
import { createApi } from "@reduxjs/toolkit/query/react"

import { io } from "socket.io-client"

export const examApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "/",
  }),
  endpoints: (builder) => ({
    getExamData: builder.query({
      queryFn: () => ({ data: [] }),
      async onCacheEntryAdded(
        arg,
        { cacheDataLoaded, updateCachedData, cacheEntryRemoved }
      ) {
        console.log("ws query", process.env.REACT_APP_API_URL)
        try {
          console.log(`The endpoint 123123`)
          const response = await cacheDataLoaded
          console.log(`The endpoint answered`, response)

          const socket = io(process.env.REACT_APP_API_URL || "")

          socket.on("data", (payload) => {
            console.log("From socket:", payload)
            updateCachedData((draft) => {
              draft[0] = payload as never
            })
          })
        } catch {
          console.log("CATCHED")
          // if cacheEntryRemoved resolves before cacheDataLoaded,
          // cacheDataLoaded throws an error
        }
        await cacheEntryRemoved
      },
    }),
  }),
})

export const { useGetExamDataQuery } = examApi
