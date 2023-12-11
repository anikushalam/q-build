import { baseUrl } from "../services/BaseUrl";

// function isDate(val) {
//   // Cross realm comptatible
//   return Object.prototype.toString.call(val) === "[object Date]";
// }

// function isObj(val) {
//   return typeof val === "object";
// }

// function stringifyValue(val) {
//   if (isObj(val) && !isDate(val)) {
//     return JSON.stringify(val);
//   } else {
//     return val;
//   }
// }

// function buildForm({ action, params }) {
//   const form = document.createElement("form");
//   form.setAttribute("method", "post");
//   form.setAttribute("action", action);

//   Object.keys(params).forEach((key) => {
//     const input = document.createElement("input");
//     input.setAttribute("type", "hidden");
//     input.setAttribute("name", key);
//     input.setAttribute("value", stringifyValue(params[key]));
//     form.appendChild(input);
//   });

//   return form;
// }

function isDate(val) {
  // Cross realm comptatible
  return Object.prototype.toString.call(val) === "[object Date]";
}

function isObj(val) {
  return typeof val === "object";
}

function stringifyValue(val) {
  if (isObj(val) && !isDate(val)) {
    return JSON.stringify(val);
  } else {
    return val;
  }
}

function buildForm({ action, params }) {
  const form = document.createElement("form");
  form.setAttribute("method", "post");
  form.setAttribute("action", action);

  Object.keys(params).forEach((key) => {
    const input = document.createElement("input");
    input.setAttribute("type", "hidden");
    input.setAttribute("name", key);
    input.setAttribute("value", stringifyValue(params[key]));
    form.appendChild(input);
  });

  return form;
}

function post(details) {
  const form = buildForm(details);
  document.body.appendChild(form);
  form.submit();
  form.remove();
}
const getData = (data) => {
  return fetch(`${baseUrl}/api/v1/paytm/generateTxnToken`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .catch((err) => console.log(err));
};

function paytmPostInfo(details) {
  const form = buildForm(details);
  document.body.appendChild(form);
  form.submit();
  form.remove();
}

const get_initiate_paytm = (data) => {
  return fetch(`${baseUrl}/api/v1/paytm/generateTxnToken`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .catch((err) => console.log(err));
};

export { paytmPostInfo, get_initiate_paytm, getData, post };
// const { data } = await axios.post(
//   `${baseUrl}/api/v1/paytm/generateTxnToken`,
//   paymentData,
//   config
// );
// console.info("thismdnsfas", data);
// let info = {
//   action: "https://securegw-stage.paytm.in/order/process",
//   // action: "https://securegw.paytm.in/order/process",

//   params: data.paytmParams,
// };

// post(info);
