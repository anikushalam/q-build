export const getPaymentKeys = (builder) => {
  return builder.query({
    query: () => `/pay/get/keys`,
  });
};

export const paymentCheckout = (builder) => {
  return builder.mutation({
    query: (pay) => ({
      url: `/pay/checkout`,
      method: "POST",
      body: pay,
    }),
  });
};
