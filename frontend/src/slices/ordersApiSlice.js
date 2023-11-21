import { ORDERS_URL, PAYPAL_URL } from "../constant";
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
    }),
    getMyOrders: builder.query({
      query: () => ({
        url: `${ORDERS_URL}/mine`,
      }),
      keepUnusedDataFor: 5,
    }),

    // Paypal 
    payOrder: builder.mutation({
      query: ({ orderId, details }) => ({
        url: `${ORDERS_URL}/${orderId}/pay`,
        method: 'PUT',
        body: details,
    }),
    }),
    getPaypalClientId: builder.query({
      query: () => ({
        url: PAYPAL_URL,
      }),
      keepUnusedDataFor: 5,
    }),

  })
});

export const { useCreateOrderMutation, useGetOrderDetailsQuery, useGetOrdersQuery, useDeliverOrderMutation, useGetMyOrdersQuery, usePayOrderMutation, useGetPaypalClientIdQuery } = ordersApiSlice;