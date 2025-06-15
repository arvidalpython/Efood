import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Food2 } from '../pages/Home'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood'
  }),
  endpoints: (builder) => ({
    getFeatureRestaurants: builder.query<Food2[], void>({
      query: () => 'restaurantes'
    }),
    getMenuFoods: builder.query<Food2, string>({
      // Alterado para retornar um único restaurante
      query: (id) => `restaurantes/${id}`
    })
  })
})

// Exporte os hooks gerados automaticamente
export const { useGetFeatureRestaurantsQuery, useGetMenuFoodsQuery } = api

export default api
