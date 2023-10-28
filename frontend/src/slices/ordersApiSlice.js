import { ORDERS_URL } from "../constant";
import apiSlice from "./apiSlice";

export const ordersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createOrder : builder.mutation({
      query : (order) => ({
        url: `${ORDERS_URL}`,
        method: 'POST',
        body: order
      }),
    }),
    getOrderDetails : builder.query({
      query: (id) => ({
        url: `${ORDERS_URL}/${id}`,
      }),
      keepUnusedDataFor: 5,
    }),
    getOrders: builder.query({
      query: () => ({
        url: ORDERS_URL,
      }),
      keepUnusedDataFor: 5,
    }),
    deliverOrder: builder.mutation({
      query: (orderId) => ({
        url: `${ORDERS_URL}/${orderId}/deliver`,
        method: 'PUT',
      }),
    })

  })
});

export const { useCreateOrderMutation, useGetOrderDetailsQuery, useGetOrdersQuery, useDeliverOrderMutation } = ordersApiSlice;