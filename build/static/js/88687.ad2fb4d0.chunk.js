"use strict";(self.webpackChunkmithkal_qviple=self.webpackChunkmithkal_qviple||[]).push([[88687],{64499:(e,n,t)=>{t.d(n,{Ex:()=>d,KY:()=>l,oU:()=>s});var i=t(69721);function o(e){return function(e){return"object"===typeof e}(e)&&!function(e){return"[object Date]"===Object.prototype.toString.call(e)}(e)?JSON.stringify(e):e}function a(e){let{action:n,params:t}=e;const i=document.createElement("form");return i.setAttribute("method","post"),i.setAttribute("action",n),Object.keys(t).forEach((e=>{const n=document.createElement("input");n.setAttribute("type","hidden"),n.setAttribute("name",e),n.setAttribute("value",o(t[e])),i.appendChild(n)})),i}function l(e){const n=a(e);document.body.appendChild(n),n.submit(),n.remove()}const d=e=>fetch("".concat(i.FH,"/api/v1/paytm/generateTxnToken"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e)}).then((e=>e.json())).catch((e=>console.log(e))),s=e=>fetch("".concat(i.FH,"/api/v2/paytm/generateTxnToken"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e)}).then((e=>e.json())).catch((e=>console.log(e)))},49384:(e,n,t)=>{t.d(n,{Z:()=>a});t(72791);var i=t(6307),o=t(80184);const a=()=>(0,o.jsx)(i.iT,{ariaLabel:"loading-indicator",height:20,width:20,color:"white",secondaryColor:"#1c023b"})},88687:(e,n,t)=>{t.r(n),t.d(n,{default:()=>x});var i=t(72791),o=t(32804),a=t(39230),l=t(4195),d=t(80184);const s=e=>{let{value:n,onTabHandler:t,padiFees:i,remainingFees:s,applicableRemainingFees:u,scholarshipFees:c}=e;const{t:r}=(0,a.$G)();return(0,d.jsxs)("div",{className:o.Z.student_fees_header_container,children:[(0,d.jsxs)("div",{children:[(0,d.jsxs)("div",{className:o.Z.student_fees_row_amount,children:[(0,d.jsxs)("h5",{children:[r("rs"),". ",null!==i&&void 0!==i?i:0]}),(0,d.jsx)("h6",{children:r("total_fees_paid")})]}),(0,d.jsxs)("div",{className:o.Z.student_fees_row_amount,style:{marginTop:"1rem"},children:[(0,d.jsxs)("h5",{children:[r("rs"),". ",null!==c&&void 0!==c?c:0]}),(0,d.jsx)("h6",{children:r("by_scholarship")})]})]}),(0,d.jsxs)("div",{className:o.Z.student_fees_header_column,children:[(0,d.jsx)(l.Z,{label:"admission_fees",currentValue:0,value:n,onClick:t,customStyleContainer:{marginRight:"2rem"}}),(0,d.jsx)(l.Z,{label:"department_fees",currentValue:1,value:n,onClick:t})]}),(0,d.jsxs)("div",{children:[(0,d.jsxs)("div",{className:o.Z.student_fees_row_amount,style:{alignItems:"flex-end"},children:[(0,d.jsxs)("h5",{style:{color:"#121212"},children:[r("rs"),". ",null!==s&&void 0!==s?s:0]}),(0,d.jsx)("h6",{children:r("remaining_fees")})]}),(0,d.jsxs)("div",{className:o.Z.student_fees_row_amount,style:{alignItems:"flex-end",marginTop:"1rem"},children:[(0,d.jsxs)("h5",{style:{color:"#121212"},children:[r("rs"),". ",null!==u&&void 0!==u?u:0]}),(0,d.jsx)("h6",{children:r("applicable_remaining")}),(0,d.jsx)("div",{children:r("to_be_paid_by_student")})]})]})]})};var u=t(91007),c=t(80214),r=t(29017),v=t(87932),m=t(28497),_=t(51376),y=t(75615),h=t(71439),g=t(64499),p=t(16871);const x=e=>{var n,t,a,l,x,b,j,w,f,k,C,P,A,N;let{viewAs:T,sid:F,isFeesEditable:I}=e;const R=(0,p.UO)(),[S,Z]=(0,i.useState)(0),[L,M]=(0,i.useState)(!1),[O,G]=(0,i.useState)({amount:0,feesId:"",insId:"",type:"",bookId:""}),[E,Y]=(0,i.useState)(!0),{data:z,refetch:H}=(0,u.$J)("".concat(F),{skip:!F}),{data:B}=(0,c.Rg)(),[K]=(0,c.gt)(),{sudentAdmissionFeesList:D,sudentAdmissionFeesListRefetch:J}=(0,r.Y$)({sid:F,skip:!F}),{merchantId:V,merchantIdRefetch:$}=(0,v.Vc)({id:null===z||void 0===z||null===(n=z.student)||void 0===n||null===(t=n.institute)||void 0===t?void 0:t._id,skip:!(null!==z&&void 0!==z&&null!==(a=z.student)&&void 0!==a&&null!==(l=a.institute)&&void 0!==l&&l._id)});(0,i.useEffect)((()=>{F&&(H(),J(),Y(!0))}),[F,J,H]),(0,i.useEffect)((()=>{var e,n;null!==z&&void 0!==z&&null!==(e=z.student)&&void 0!==e&&null!==(n=e.institute)&&void 0!==n&&n._id&&$()}),[null===z||void 0===z||null===(x=z.student)||void 0===x||null===(b=x.institute)||void 0===b?void 0:b._id,$]),(0,i.useEffect)((()=>{var e;(null!==D&&void 0!==D&&D.array||0===(null===D||void 0===D||null===(e=D.array)||void 0===e?void 0:e.length))&&Y(!1)}),[null===D||void 0===D?void 0:D.array]),(0,i.useEffect)((()=>{var e;(null!==z&&void 0!==z&&z.mergePay||0===(null===z||void 0===z||null===(e=z.mergePay)||void 0===e?void 0:e.length))&&Y(!1)}),[null===z||void 0===z?void 0:z.mergePay]);const U=(e,n,t)=>e+n+t;return(0,d.jsxs)("div",{className:o.Z.student_alll_fees_data,children:[(0,d.jsx)(s,{onTabHandler:e=>{Z(e)},value:S,padiFees:U((null===z||void 0===z||null===(j=z.student)||void 0===j?void 0:j.studentPaidFeeCount)||0,(null===z||void 0===z||null===(w=z.student)||void 0===w?void 0:w.admissionPaidFeeCount)||0,(null===z||void 0===z||null===(f=z.student)||void 0===f?void 0:f.hostelPaidFeeCount)||0),remainingFees:U((null===z||void 0===z||null===(k=z.student)||void 0===k?void 0:k.studentRemainingFeeCount)||0,(null===z||void 0===z||null===(C=z.student)||void 0===C?void 0:C.admissionRemainFeeCount)||0,(null===z||void 0===z||null===(P=z.student)||void 0===P?void 0:P.hostelRemainFeeCount)||0),applicableRemainingFees:null===z||void 0===z||null===(A=z.student)||void 0===A?void 0:A.applicable_fees_pending,scholarshipFees:null!==(N=null===z||void 0===z?void 0:z.paid_by_government)&&void 0!==N?N:0}),0===S&&(0,d.jsx)(_.Z,{viewAs:T,sudentAdmissionFeesList:D,sudentAdmissionFeesListRefetch:J,feesQueryRefetch:H,showingDataLoading:E,isFeesEditable:I}),1===S&&(0,d.jsx)(y.Z,{setAllContent:G,setCharges:M,showingDataLoading:E,sid:F,viewAs:T}),L&&(0,d.jsx)(h.Z,{onClose:()=>M(!1),allContent:O,checkoutHandler:e=>{let n=2.1*+(null===O||void 0===O?void 0:O.amount)/100,t=n+18*+n/100;const i=parseInt(null===O||void 0===O?void 0:O.amount);var o,a,l,d={amount:Math.ceil(i+ +t.toFixed(2))};"PAYTM"===e?(0,g.Ex)({amount:+(null===O||void 0===O?void 0:O.amount),amount_nocharges:+d.amount,type:"Fees",paidBy:"".concat(null===z||void 0===z||null===(o=z.student)||void 0===o?void 0:o._id),paidTo:"".concat(null===z||void 0===z||null===(a=z.student)||void 0===a||null===(l=a.institute)||void 0===l?void 0:l._id),moduleId:"".concat(null===O||void 0===O?void 0:O.feesId),ad_status_id:null,payment_installment:null,ad_install:null,month:null,payment_remain_1:null,payment_card_type:null,payment_book_id:null,name:R.username,isApk:"web",payment_card_id:null}).then((e=>{var n,t;window.onScriptLoad(null===e||void 0===e||null===(n=e.response)||void 0===n||null===(t=n.body)||void 0===t?void 0:t.txnToken,null===e||void 0===e?void 0:e.order,null===e||void 0===e?void 0:e.amount)})).catch((e=>{console.info(e)})):null!==B&&void 0!==B&&B.Key&&null!==d&&void 0!==d&&d.amount?K({amount:null===d||void 0===d?void 0:d.amount}).then((e=>{var n,t,i,o,a,l;null!==(n=e.data)&&void 0!==n&&n.success&&(0,m.r)({key:null===B||void 0===B?void 0:B.Key,oid:null===(t=e.data)||void 0===t?void 0:t.order.id,amount_nocharge:100*(null===O||void 0===O?void 0:O.amount),amount:null===(i=e.data)||void 0===i?void 0:i.order.amount,type:"Fees",pay_by:"".concat(null===z||void 0===z||null===(o=z.student)||void 0===o?void 0:o._id),pay_to:"".concat(null===z||void 0===z||null===(a=z.student)||void 0===a||null===(l=a.institute)||void 0===l?void 0:l._id),mid:"".concat(null===O||void 0===O?void 0:O.feesId),razor_key:null===V||void 0===V?void 0:V.key,razor_author:null===V||void 0===V?void 0:V.bool,status:null,installment_type:null,is_install:null,h_month:null})})).catch((e=>{})):console.log("error")},checkoutBacklogHandler:e=>{let n=2.1*+(null===O||void 0===O?void 0:O.amount)/100,t=n+18*+n/100;const i=parseInt(null===O||void 0===O?void 0:O.amount);var o,a,l,d={amount:Math.ceil(i+ +t.toFixed(2))};"PAYTM"===e?(0,g.Ex)({amount:+(null===O||void 0===O?void 0:O.amount),amount_nocharges:+d.amount,type:"Backlog",paidBy:"".concat(null===z||void 0===z||null===(o=z.student)||void 0===o?void 0:o._id),paidTo:"".concat(null===z||void 0===z||null===(a=z.student)||void 0===a||null===(l=a.institute)||void 0===l?void 0:l._id),moduleId:"".concat(null===O||void 0===O?void 0:O.feesId),ad_status_id:null,payment_installment:null,ad_install:null,month:null,payment_remain_1:null,payment_card_type:null,payment_book_id:null,name:R.username,isApk:"web",payment_card_id:null}).then((e=>{var n,t;window.onScriptLoad(null===e||void 0===e||null===(n=e.response)||void 0===n||null===(t=n.body)||void 0===t?void 0:t.txnToken,null===e||void 0===e?void 0:e.order,null===e||void 0===e?void 0:e.amount)})).catch((e=>{console.info(e)})):null!==B&&void 0!==B&&B.Key&&null!==d&&void 0!==d&&d.amount?K({amount:null===d||void 0===d?void 0:d.amount}).then((e=>{var n,t,i,o,a,l;null!==(n=e.data)&&void 0!==n&&n.success&&(0,m.r)({key:null===B||void 0===B?void 0:B.Key,oid:null===(t=e.data)||void 0===t?void 0:t.order.id,amount_nocharge:100*(null===O||void 0===O?void 0:O.amount),amount:null===(i=e.data)||void 0===i?void 0:i.order.amount,type:"Backlog",pay_by:"".concat(null===z||void 0===z||null===(o=z.student)||void 0===o?void 0:o._id),pay_to:"".concat(null===z||void 0===z||null===(a=z.student)||void 0===a||null===(l=a.institute)||void 0===l?void 0:l._id),mid:"".concat(null===O||void 0===O?void 0:O.feesId),razor_key:null===V||void 0===V?void 0:V.key,razor_author:null===V||void 0===V?void 0:V.bool,status:null,installment_type:null,is_install:null,h_month:null})})).catch((e=>{})):console.log("error")},checkoutLibraryHandler:e=>{let n=2.1*+(null===O||void 0===O?void 0:O.amount)/100,t=n+18*+n/100;const i=parseInt(null===O||void 0===O?void 0:O.amount);var o,a,l,d={amount:Math.ceil(i+ +t.toFixed(2))};"PAYTM"===e?(0,g.Ex)({amount:+(null===O||void 0===O?void 0:O.amount),amount_nocharges:+d.amount,type:"Library Fees",paidBy:"".concat(null===z||void 0===z||null===(o=z.student)||void 0===o?void 0:o._id),paidTo:"".concat(null===z||void 0===z||null===(a=z.student)||void 0===a||null===(l=a.institute)||void 0===l?void 0:l._id),moduleId:"".concat(null===O||void 0===O?void 0:O.feesId),ad_status_id:null,payment_installment:null,ad_install:null,month:null,payment_remain_1:null,payment_card_type:null,payment_book_id:null===O||void 0===O?void 0:O.bookId,name:R.username,isApk:"web",payment_card_id:null}).then((e=>{var n,t;window.onScriptLoad(null===e||void 0===e||null===(n=e.response)||void 0===n||null===(t=n.body)||void 0===t?void 0:t.txnToken,null===e||void 0===e?void 0:e.order,null===e||void 0===e?void 0:e.amount)})).catch((e=>{console.info(e)})):null!==B&&void 0!==B&&B.Key&&null!==d&&void 0!==d&&d.amount?K({amount:null===d||void 0===d?void 0:d.amount}).then((e=>{var n,t,i,o,a,l;null!==(n=e.data)&&void 0!==n&&n.success&&(0,m.r)({key:null===B||void 0===B?void 0:B.Key,oid:null===(t=e.data)||void 0===t?void 0:t.order.id,amount_nocharge:100*(null===O||void 0===O?void 0:O.amount),amount:null===(i=e.data)||void 0===i?void 0:i.order.amount,type:"Library Fees",pay_by:"".concat(null===z||void 0===z||null===(o=z.student)||void 0===o?void 0:o._id),pay_to:"".concat(null===z||void 0===z||null===(a=z.student)||void 0===a||null===(l=a.institute)||void 0===l?void 0:l._id),mid:"".concat(null===O||void 0===O?void 0:O.feesId),razor_key:null===V||void 0===V?void 0:V.key,razor_author:null===V||void 0===V?void 0:V.bool,status:null,installment_type:null,is_install:null,h_month:null,book_id:null===O||void 0===O?void 0:O.bookId})})).catch((e=>{})):console.log("error")}})]})}},71439:(e,n,t)=>{t.d(n,{Z:()=>k});var i=t(72791);const o="PaymentGatewayConfig_gateway_container__nrTUY",a="PaymentGatewayConfig_gateway_upi__AJ6Eb",l="PaymentGatewayConfig_gateway_other__RxfCt",d="PaymentGatewayConfig_gateway_upi_text__OV6Zf",s="PaymentGatewayConfig_gateway_other_text__EVLNL",u="PaymentGatewayConfig_gateway_upi_text_inner__SB-Kf",c="PaymentGatewayConfig_gateway_other_text_inner__Pd5BQ",r="PaymentGatewayConfig_gateway_upi_icons__EAxoi",v="PaymentGatewayConfig_gateway_upi_icons_inner__N+sfo",m="PaymentGatewayConfig_gateway_other_icons__kqTO+",_="PaymentGatewayConfig_gateway_other_icons_inner__MGmma",y="PaymentGatewayConfig_gateway_btn__2Xo3a",h="PaymentGatewayConfig_gateway_border__gjI8+",g="PaymentGatewayConfig_gateway_summary__Rbg+6",p="PaymentGatewayConfig_gateway_summary_text__b6PzX";var x=t(36665),b=t(39230),j=t(49384),w=t(80184);const f=e=>{var n,t;let{onClose:i,allContent:a,onNext:l,isLoading:d,selected:s,isOptimzed:u}=e;const{t:c}=(0,b.$G)();let r=2.1*+(null===a||void 0===a?void 0:a.amount)/100,v=r+18*+r/100;const m=parseInt(null===a||void 0===a?void 0:a.amount);Math.ceil(m+ +v.toFixed(2));var _=1*parseInt(null===a||void 0===a?void 0:a.amount)/100,f=_>=100?100:_;let k=18*+f/100;Math.ceil(parseInt(null===a||void 0===a?void 0:a.amount)+parseInt(f)+parseInt(k));return(0,w.jsx)(x.Z,{onClose:i,children:(0,w.jsxs)("div",{className:o,children:[(0,w.jsx)("div",{className:h,children:(0,w.jsx)("img",{src:"/images/member_tab/gateway/gateway-border-icon.svg",alt:"gateway icon"})}),(0,w.jsx)("h6",{children:c("Payment_Summary")}),(0,w.jsxs)("section",{className:g,children:[u&&(0,w.jsx)("div",{className:p,children:(0,w.jsxs)("h6",{style:{fontSize:"14px",fontWeight:"500"},children:[c("plateform_fees_rs")," ",null!==(n=null===(t=(null===a||void 0===a?void 0:a.amount)*(null===a||void 0===a?void 0:a.platform_charges)/100)||void 0===t?void 0:t.toFixed(2))&&void 0!==n?n:0]})}),(0,w.jsx)("div",{className:p,children:(0,w.jsx)("h6",{style:{fontSize:"14px",fontWeight:"500"},children:c(u?"pg_convenience_o":"pg_convenience")})}),(0,w.jsx)("div",{className:p,children:(0,w.jsx)("p",{children:c(u?"pg_convenience_note_o":"pg_convenience_note")})}),(0,w.jsx)("div",{className:p,children:(0,w.jsxs)("p",{style:{fontSize:"12px"},children:[(0,w.jsx)("img",{src:"/images/checkbox-icon.svg",alt:"icon",style:{height:"0.8rem",marginRight:"0.5rem"}}),c(u?"pg_convenience_forward_o":"pg_convenience_forward")]})}),(0,w.jsxs)("button",{onClick:l,className:y,style:{marginTop:"1rem"},children:[c("Make_Payment"),d&&(0,w.jsx)("span",{style:{marginLeft:"10px",marginTop:"13px"},children:(0,w.jsx)(j.Z,{})})]})]})]})})},k=e=>{let{onClose:n,allContent:t,checkoutHandler:y,checkoutAdmissionHandler:g,checkoutParticipate:p,checkoutBacklogHandler:j,checkoutAdmissionDirectHandler:k,checkoutLibraryHandler:C,isOptimzed:P}=e;const{t:A}=(0,b.$G)(),[N,T]=(0,i.useState)(0),[F,I]=(0,i.useState)("PAYTM"),[R,S]=(0,i.useState)(!1),Z=e=>{T(e),I(0===e?"PAYTM":"RAZOR")};return(0,w.jsx)(w.Fragment,{children:F?(0,w.jsx)(f,{onClose:n,allContent:t,onNext:()=>{S(!0),"Fees"===t.type?y(0===N?"PAYTM":"RAZOR"):"Admission"===t.type?g(0===N?"PAYTM":"RAZOR"):"Participate"===t.type?p(0===N?"PAYTM":"RAZOR"):"Backlog"===t.type?j(0===N?"PAYTM":"RAZOR"):"Library Fees"===t.type?C(0===N?"PAYTM":"RAZOR"):"ADMISSION_DIRECT_APPLY"===t.type&&k(0===N?"PAYTM":"RAZOR")},isLoading:R,selected:N,isOptimzed:P}):(0,w.jsx)(x.Z,{onClose:n,children:(0,w.jsxs)("div",{className:o,children:[(0,w.jsx)("div",{className:h,children:(0,w.jsx)("img",{src:"/images/member_tab/gateway/gateway-border-icon.svg",alt:"gateway icon"})}),(0,w.jsx)("h6",{children:A("Payment_Mode")}),(0,w.jsx)("p",{children:A("Pay_via_UPI_Less_transaction_charges_by_Payment_Gateway")}),(0,w.jsxs)("section",{className:a,onClick:()=>Z(0),style:{boxShadow:0===N&&"0px 4px 4px 0px #00000040",backgroundColor:0===N&&"rgb(156 136 179 / 10%)"},children:[(0,w.jsxs)("div",{className:d,children:[(0,w.jsx)("img",{src:"/images/member_tab/gateway/gateway-bheem-icon.svg",alt:"gateway icon"}),(0,w.jsxs)("div",{className:u,children:[(0,w.jsx)("p",{children:A("Payment_Mode")}),(0,w.jsx)("h6",{children:A("payment_upi")})]})]}),(0,w.jsxs)("div",{className:r,children:[(0,w.jsx)("img",{src:"/images/member_tab/gateway/gateway-recomended-icon.svg",alt:"gateway icon"}),(0,w.jsxs)("div",{className:v,children:[(0,w.jsx)("img",{src:"/images/member_tab/gateway/gateway-phone-icon.svg",alt:"gateway icon"}),(0,w.jsx)("img",{src:"/images/member_tab/gateway/gateway-paytm-icon.svg",alt:"gateway icon"}),(0,w.jsx)("img",{src:"/images/member_tab/gateway/gateway-google-icon.svg",alt:"gateway icon"})]})]})]}),(0,w.jsxs)("section",{className:l,onClick:()=>Z(1),style:{boxShadow:1===N&&"0px 4px 4px 0px #00000040",backgroundColor:1===N&&"rgb(156 136 179 / 10%)"},children:[(0,w.jsxs)("div",{className:s,children:[(0,w.jsx)("img",{src:"/images/member_tab/gateway/gateway-other-icon.svg",alt:"gateway icon"}),(0,w.jsxs)("div",{className:c,children:[(0,w.jsx)("p",{children:A("Payment_Mode")}),(0,w.jsx)("h6",{children:A("payment_other")})]})]}),(0,w.jsxs)("div",{className:m,children:[(0,w.jsxs)("div",{className:_,children:[(0,w.jsx)("img",{src:"/images/member_tab/gateway/gateway-debit-icon.svg",alt:"gateway icon"}),(0,w.jsxs)("p",{children:[A("debit_credit"),(0,w.jsx)("br",{}),A("cards")]})]}),(0,w.jsxs)("div",{className:_,children:[(0,w.jsx)("img",{src:"/images/member_tab/gateway/gateway-bank-icon.svg",alt:"gateway icon"}),(0,w.jsx)("p",{children:A("net_banking")})]})]})]})]})})})}}}]);
//# sourceMappingURL=88687.ad2fb4d0.chunk.js.map