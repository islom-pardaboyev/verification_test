import { api } from ".";

export const createUser = api.injectEndpoints({
    endpoints: (build) => ({
        createUser: build.mutation({
            query: (body) => ({
                url: '/users',
                method: 'POST',
                body
            })
        })
    }) 
})

export const {useCreateUserMutation} = createUser