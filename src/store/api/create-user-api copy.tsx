import { api } from ".";

export const createUserApi = api.injectEndpoints({
  endpoints: (build) => ({
    createUser: build.mutation({
      query: (body) => ({
        url: "/users",
        method: "POST",
        body,
      }),
      invalidatesTags: [{type: 'Create'}]
    }),
  }),
});

export const {useCreateUserMutation} = createUserApi