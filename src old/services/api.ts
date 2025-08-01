import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Food2 } from '../pages/Home'

type Product = {
  id: number
  price: number
}

type PurchasePayload = {
  products: Product[]
  delivery: {
    receiver: string
    address: {
      description: string
      city: string
      zipCode: string
      number: string
      complement?: string
    }
  }
  payment: {
    card: {
      name: string
      number: string
      code: string
      expires: {
        month: number
        year: number
      }
    }
  }
}

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
    }),
    purchase: builder.mutation<any, PurchasePayload>({
      query: (body) => ({
        url: 'checkout',
        method: 'POST',
        body
      })
    })
  })
})

// Exporte os hooks gerados automaticamente
export const {
  useGetFeatureRestaurantsQuery,
  useGetMenuFoodsQuery,
  usePurchaseMutation
} = api

export default api
