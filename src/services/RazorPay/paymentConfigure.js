import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { baseUrl, prepareHeaders } from "../configApi";
import { getPaymentKeys, paymentCheckout } from "./paymentConfigureBuilder";

export const paymentConfigureAPI = createApi({
  reducerPath: "paymentConfigureAPI",
  baseQuery: fetchBaseQuery({ baseUrl, prepareHeaders: prepareHeaders }),
  endpoints: (builder) => ({
    renderPaymentAPIKeys: getPaymentKeys(builder),
    paymentCheckout: paymentCheckout(builder),
  }),
});

export const { useRenderPaymentAPIKeysQuery, usePaymentCheckoutMutation } =
  paymentConfigureAPI;
