import { baseUrl } from "../services/configApi";

export const payment_initiating_set = async (args) => {
  // console.info("sadasgdfkas", args);
  var options = {
    key: args.key,
    amount: args.amount,
    currency: "INR",
    name: "Qviple Payment",
    order_id: args.oid,
    callback_url: `${baseUrl}/pay/verify?payment_module_id=${
      args.mid
    }&payment_module_type=${args.type}&payment_by_end_user_id=${
      args.pay_by
    }&payment_to_end_user_id=${args.pay_to}&payment_amount=${
      args.amount
    }&ad_status_id=${args.status}&payment_amount_charges=${
      args.amount_nocharge
    }&payment_installment=${args.installment_type}&razor_key=${
      args.razor_key ?? null
    }&razor_author=${args.razor_author}&ad_install=${args.is_install}&month=${
      args.h_month
    }&payment_card_type=${args.payment_type_as}&payment_remain_1=${
      args?.is_remain_payment ?? null
    }&payment_book_id=${args?.book_id ?? ""}&payment_card_id=${
      args?.payment_card_id ?? null
    }&student_data=${args?.student_data ?? null}`,
    notes: {
      address: "Razorpay Corporate Office",
    },
    theme: {
      color: "#f05151",
    },
  };
  var razorPayment = new window.Razorpay(options);
  razorPayment.open();
};
// key,
// oid,
// amount_nocharge,
// amount,
// type,
// pay_by,
// pay_to,
// mid,
// razor_key,
// razor_author,
// status = "",
// installment_type = "",
// is_install = "",
// h_month = "",
