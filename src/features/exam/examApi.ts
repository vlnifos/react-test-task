import { fetchBaseQuery } from "@reduxjs/toolkit/query"
import { createApi } from "@reduxjs/toolkit/query/react"

import { io } from "socket.io-client"
import { setExamData } from "./examSlice"

export type ExamData = {
  course: string
  grade: string
  subject: string
  time: string
  schools: string[]
}

export const examApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "/",
  }),
  endpoints: (builder) => ({
    getExamData: builder.query({
      queryFn: () => {
        return {
          data: {} as ExamData,
        }
      },

      async onCacheEntryAdded(
        arg,
        { cacheDataLoaded, updateCachedData, dispatch, cacheEntryRemoved }
      ) {
        try {
          await cacheDataLoaded

          const socket = io(process.env.REACT_APP_API_URL || "")

          const updateState = (payload: any) => {
            updateCachedData((state) => {
              Object.assign(state, payload)

              dispatch(setExamData(payload))
            })
          }

          socket.emit("get data", updateState)

          socket.on("data", updateState)
        } catch {
          // if cacheEntryRemoved resolves before cacheDataLoaded,
          // cacheDataLoaded throws an error
        }
        await cacheEntryRemoved
      },
    }),
  }),
})

export const { useGetExamDataQuery } = examApi
