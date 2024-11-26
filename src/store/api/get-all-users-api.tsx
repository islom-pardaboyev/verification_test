import { api } from ".";

export const getAllUser = api.injectEndpoints({
  endpoints: (build) => ({
    getAllUser: build.query({
      query: () => ({
        url: "/users",
      }),
      providesTags: [{type: 'Create'}]
    }),
  }),
});

export const {useGetAllUserQuery} = getAllUser