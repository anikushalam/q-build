"use strict";(self.webpackChunkmithkal_qviple=self.webpackChunkmithkal_qviple||[]).push([[79348],{51376:(n,l,e)=>{e.d(l,{Z:()=>c});var o=e(72791),i=e(11932),d=e(65379),t=e(32804),a=e(11105),s=e(73032),u=e(51561),v=e(98734),r=e(80184);const c=n=>{var l;let{viewAs:e,sudentAdmissionFeesList:c,sudentAdmissionFeesListRefetch:m,feesQueryRefetch:_,showingDataLoading:h,isFeesEditable:p}=n;const[y,f]=(0,o.useState)(!1),[g,b]=(0,o.useState)(""),[x,k]=(0,o.useState)(!1),[F,j]=(0,o.useState)({msg:"",run:!1}),[w]=(0,s.fB)(),I=n=>{var l;k((n=>!n)),w({fid:null===n||void 0===n?void 0:n.financeId,aid:null===n||void 0===n||null===(l=n.install)||void 0===l?void 0:l.appId,flow:"Department"===(null===n||void 0===n?void 0:n.collectFlow)?"BY_DEPARTMENT":"BY_HOSTEL"}).then((l=>{var o,i;(k((n=>!n)),null!==l&&void 0!==l&&null!==(o=l.data)&&void 0!==o&&o.denied)?j({msg:"Before initiating payment. you must have a valid bank account to receive payment.",run:!0}):"STUDENT"===e&&null!==n&&void 0!==n&&null!==(i=n.install)&&void 0!==i&&i.isEnable&&(f(!0),b(n))})).catch({})};return(0,r.jsxs)("div",{className:t.Z.student_admission_fees_container,children:[null===c||void 0===c||null===(l=c.array)||void 0===l?void 0:l.map((n=>(0,r.jsx)(i.Z,{admission:n,viewAs:e,onAdmissionPaid:I,onAdmissionFeesRefetch:m,renderPageAs:"STUDENT_PROFILE",is_feesdata:!0}))),y&&(0,r.jsx)(d.Z,{installment:g,onAdmissionFeesRefetch:m,onFeesRefetch:_,hideModal:f,addDisplay:y,isFeesEditable:p}),h&&(0,r.jsx)(a.Z,{}),(0,r.jsx)(u.Ch,{msg:F.msg,run:F.run,setRun:()=>j({msg:"",run:!1}),postiton:"bottom",type:"error"}),x&&(0,r.jsx)(v.Z,{})]})}},88687:(n,l,e)=>{e.r(l),e.d(l,{default:()=>g});var o=e(72791),i=e(32804),d=e(39230),t=e(4195),a=e(80184);const s=n=>{let{value:l,onTabHandler:e,padiFees:o,remainingFees:s,applicableRemainingFees:u,scholarshipFees:v}=n;const{t:r}=(0,d.$G)();return(0,a.jsxs)("div",{className:i.Z.student_fees_header_container,children:[(0,a.jsxs)("div",{children:[(0,a.jsxs)("div",{className:i.Z.student_fees_row_amount,children:[(0,a.jsxs)("h5",{children:[r("rs"),". ",null!==o&&void 0!==o?o:0]}),(0,a.jsx)("h6",{children:r("total_fees_paid")})]}),(0,a.jsxs)("div",{className:i.Z.student_fees_row_amount,style:{marginTop:"1rem"},children:[(0,a.jsxs)("h5",{children:[r("rs"),". ",null!==v&&void 0!==v?v:0]}),(0,a.jsx)("h6",{children:r("by_scholarship")})]})]}),(0,a.jsxs)("div",{className:i.Z.student_fees_header_column,children:[(0,a.jsx)(t.Z,{label:"admission_fees",currentValue:0,value:l,onClick:e,customStyleContainer:{marginRight:"2rem"}}),(0,a.jsx)(t.Z,{label:"department_fees",currentValue:1,value:l,onClick:e})]}),(0,a.jsxs)("div",{children:[(0,a.jsxs)("div",{className:i.Z.student_fees_row_amount,style:{alignItems:"flex-end"},children:[(0,a.jsxs)("h5",{style:{color:"#121212"},children:[r("rs"),". ",null!==s&&void 0!==s?s:0]}),(0,a.jsx)("h6",{children:r("remaining_fees")})]}),(0,a.jsxs)("div",{className:i.Z.student_fees_row_amount,style:{alignItems:"flex-end",marginTop:"1rem"},children:[(0,a.jsxs)("h5",{style:{color:"#121212"},children:[r("rs"),". ",null!==u&&void 0!==u?u:0]}),(0,a.jsx)("h6",{children:r("applicable_remaining")}),(0,a.jsx)("div",{children:r("to_be_paid_by_student")})]})]})]})};var u=e(91007),v=e(80214),r=e(73032),c=e(87932),m=e(28497),_=e(51376),h=e(75615),p=e(71439),y=e(64499),f=e(16871);const g=n=>{var l,e,d,t,g,b,x,k,F,j,w,I,A,Z;let{viewAs:T,sid:C,isFeesEditable:R}=n;const E=(0,f.UO)(),[L,S]=(0,o.useState)(0),[P,N]=(0,o.useState)(!1),[B,D]=(0,o.useState)({amount:0,feesId:"",insId:"",type:"",bookId:""}),[M,z]=(0,o.useState)(!0),{data:H,refetch:K}=(0,u.$J)("".concat(C),{skip:!C}),{data:Y}=(0,v.Rg)(),[V]=(0,v.gt)(),{sudentAdmissionFeesList:$,sudentAdmissionFeesListRefetch:O}=(0,r.Y$)({sid:C,skip:!C}),{merchantId:U,merchantIdRefetch:q}=(0,c.Vc)({id:null===H||void 0===H||null===(l=H.student)||void 0===l||null===(e=l.institute)||void 0===e?void 0:e._id,skip:!(null!==H&&void 0!==H&&null!==(d=H.student)&&void 0!==d&&null!==(t=d.institute)&&void 0!==t&&t._id)});(0,o.useEffect)((()=>{C&&(K(),O(),z(!0))}),[C,O,K]),(0,o.useEffect)((()=>{var n,l;null!==H&&void 0!==H&&null!==(n=H.student)&&void 0!==n&&null!==(l=n.institute)&&void 0!==l&&l._id&&q()}),[null===H||void 0===H||null===(g=H.student)||void 0===g||null===(b=g.institute)||void 0===b?void 0:b._id,q]),(0,o.useEffect)((()=>{var n;(null!==$&&void 0!==$&&$.array||0===(null===$||void 0===$||null===(n=$.array)||void 0===n?void 0:n.length))&&z(!1)}),[null===$||void 0===$?void 0:$.array]),(0,o.useEffect)((()=>{var n;(null!==H&&void 0!==H&&H.mergePay||0===(null===H||void 0===H||null===(n=H.mergePay)||void 0===n?void 0:n.length))&&z(!1)}),[null===H||void 0===H?void 0:H.mergePay]);const G=(n,l,e)=>n+l+e;return(0,a.jsxs)("div",{className:i.Z.student_alll_fees_data,children:[(0,a.jsx)(s,{onTabHandler:n=>{S(n)},value:L,padiFees:G((null===H||void 0===H||null===(x=H.student)||void 0===x?void 0:x.studentPaidFeeCount)||0,(null===H||void 0===H||null===(k=H.student)||void 0===k?void 0:k.admissionPaidFeeCount)||0,(null===H||void 0===H||null===(F=H.student)||void 0===F?void 0:F.hostelPaidFeeCount)||0),remainingFees:G((null===H||void 0===H||null===(j=H.student)||void 0===j?void 0:j.studentRemainingFeeCount)||0,(null===H||void 0===H||null===(w=H.student)||void 0===w?void 0:w.admissionRemainFeeCount)||0,(null===H||void 0===H||null===(I=H.student)||void 0===I?void 0:I.hostelRemainFeeCount)||0),applicableRemainingFees:null===H||void 0===H||null===(A=H.student)||void 0===A?void 0:A.applicable_fees_pending,scholarshipFees:null!==(Z=null===H||void 0===H?void 0:H.paid_by_government)&&void 0!==Z?Z:0}),0===L&&(0,a.jsx)(_.Z,{viewAs:T,sudentAdmissionFeesList:$,sudentAdmissionFeesListRefetch:O,feesQueryRefetch:K,showingDataLoading:M,isFeesEditable:R}),1===L&&(0,a.jsx)(h.Z,{setAllContent:D,setCharges:N,showingDataLoading:M,sid:C,viewAs:T}),P&&(0,a.jsx)(p.Z,{onClose:()=>N(!1),allContent:B,checkoutHandler:n=>{let l=2.1*+(null===B||void 0===B?void 0:B.amount)/100,e=l+18*+l/100;const o=parseInt(null===B||void 0===B?void 0:B.amount);var i,d,t,a={amount:Math.ceil(o+ +e.toFixed(2))};"PAYTM"===n?(0,y.Ex)({amount:+(null===B||void 0===B?void 0:B.amount),amount_nocharges:+a.amount,type:"Fees",paidBy:"".concat(null===H||void 0===H||null===(i=H.student)||void 0===i?void 0:i._id),paidTo:"".concat(null===H||void 0===H||null===(d=H.student)||void 0===d||null===(t=d.institute)||void 0===t?void 0:t._id),moduleId:"".concat(null===B||void 0===B?void 0:B.feesId),ad_status_id:null,payment_installment:null,ad_install:null,month:null,payment_remain_1:null,payment_card_type:null,payment_book_id:null,name:E.username,isApk:"web",payment_card_id:null}).then((n=>{var l,e;window.onScriptLoad(null===n||void 0===n||null===(l=n.response)||void 0===l||null===(e=l.body)||void 0===e?void 0:e.txnToken,null===n||void 0===n?void 0:n.order,null===n||void 0===n?void 0:n.amount)})).catch((n=>{console.info(n)})):null!==Y&&void 0!==Y&&Y.Key&&null!==a&&void 0!==a&&a.amount?V({amount:null===a||void 0===a?void 0:a.amount}).then((n=>{var l,e,o,i,d,t;null!==(l=n.data)&&void 0!==l&&l.success&&(0,m.r)({key:null===Y||void 0===Y?void 0:Y.Key,oid:null===(e=n.data)||void 0===e?void 0:e.order.id,amount_nocharge:100*(null===B||void 0===B?void 0:B.amount),amount:null===(o=n.data)||void 0===o?void 0:o.order.amount,type:"Fees",pay_by:"".concat(null===H||void 0===H||null===(i=H.student)||void 0===i?void 0:i._id),pay_to:"".concat(null===H||void 0===H||null===(d=H.student)||void 0===d||null===(t=d.institute)||void 0===t?void 0:t._id),mid:"".concat(null===B||void 0===B?void 0:B.feesId),razor_key:null===U||void 0===U?void 0:U.key,razor_author:null===U||void 0===U?void 0:U.bool,status:null,installment_type:null,is_install:null,h_month:null})})).catch((n=>{})):console.log("error")},checkoutBacklogHandler:n=>{let l=2.1*+(null===B||void 0===B?void 0:B.amount)/100,e=l+18*+l/100;const o=parseInt(null===B||void 0===B?void 0:B.amount);var i,d,t,a={amount:Math.ceil(o+ +e.toFixed(2))};"PAYTM"===n?(0,y.Ex)({amount:+(null===B||void 0===B?void 0:B.amount),amount_nocharges:+a.amount,type:"Backlog",paidBy:"".concat(null===H||void 0===H||null===(i=H.student)||void 0===i?void 0:i._id),paidTo:"".concat(null===H||void 0===H||null===(d=H.student)||void 0===d||null===(t=d.institute)||void 0===t?void 0:t._id),moduleId:"".concat(null===B||void 0===B?void 0:B.feesId),ad_status_id:null,payment_installment:null,ad_install:null,month:null,payment_remain_1:null,payment_card_type:null,payment_book_id:null,name:E.username,isApk:"web",payment_card_id:null}).then((n=>{var l,e;window.onScriptLoad(null===n||void 0===n||null===(l=n.response)||void 0===l||null===(e=l.body)||void 0===e?void 0:e.txnToken,null===n||void 0===n?void 0:n.order,null===n||void 0===n?void 0:n.amount)})).catch((n=>{console.info(n)})):null!==Y&&void 0!==Y&&Y.Key&&null!==a&&void 0!==a&&a.amount?V({amount:null===a||void 0===a?void 0:a.amount}).then((n=>{var l,e,o,i,d,t;null!==(l=n.data)&&void 0!==l&&l.success&&(0,m.r)({key:null===Y||void 0===Y?void 0:Y.Key,oid:null===(e=n.data)||void 0===e?void 0:e.order.id,amount_nocharge:100*(null===B||void 0===B?void 0:B.amount),amount:null===(o=n.data)||void 0===o?void 0:o.order.amount,type:"Backlog",pay_by:"".concat(null===H||void 0===H||null===(i=H.student)||void 0===i?void 0:i._id),pay_to:"".concat(null===H||void 0===H||null===(d=H.student)||void 0===d||null===(t=d.institute)||void 0===t?void 0:t._id),mid:"".concat(null===B||void 0===B?void 0:B.feesId),razor_key:null===U||void 0===U?void 0:U.key,razor_author:null===U||void 0===U?void 0:U.bool,status:null,installment_type:null,is_install:null,h_month:null})})).catch((n=>{})):console.log("error")},checkoutLibraryHandler:n=>{let l=2.1*+(null===B||void 0===B?void 0:B.amount)/100,e=l+18*+l/100;const o=parseInt(null===B||void 0===B?void 0:B.amount);var i,d,t,a={amount:Math.ceil(o+ +e.toFixed(2))};"PAYTM"===n?(0,y.Ex)({amount:+(null===B||void 0===B?void 0:B.amount),amount_nocharges:+a.amount,type:"Library Fees",paidBy:"".concat(null===H||void 0===H||null===(i=H.student)||void 0===i?void 0:i._id),paidTo:"".concat(null===H||void 0===H||null===(d=H.student)||void 0===d||null===(t=d.institute)||void 0===t?void 0:t._id),moduleId:"".concat(null===B||void 0===B?void 0:B.feesId),ad_status_id:null,payment_installment:null,ad_install:null,month:null,payment_remain_1:null,payment_card_type:null,payment_book_id:null===B||void 0===B?void 0:B.bookId,name:E.username,isApk:"web",payment_card_id:null}).then((n=>{var l,e;window.onScriptLoad(null===n||void 0===n||null===(l=n.response)||void 0===l||null===(e=l.body)||void 0===e?void 0:e.txnToken,null===n||void 0===n?void 0:n.order,null===n||void 0===n?void 0:n.amount)})).catch((n=>{console.info(n)})):null!==Y&&void 0!==Y&&Y.Key&&null!==a&&void 0!==a&&a.amount?V({amount:null===a||void 0===a?void 0:a.amount}).then((n=>{var l,e,o,i,d,t;null!==(l=n.data)&&void 0!==l&&l.success&&(0,m.r)({key:null===Y||void 0===Y?void 0:Y.Key,oid:null===(e=n.data)||void 0===e?void 0:e.order.id,amount_nocharge:100*(null===B||void 0===B?void 0:B.amount),amount:null===(o=n.data)||void 0===o?void 0:o.order.amount,type:"Library Fees",pay_by:"".concat(null===H||void 0===H||null===(i=H.student)||void 0===i?void 0:i._id),pay_to:"".concat(null===H||void 0===H||null===(d=H.student)||void 0===d||null===(t=d.institute)||void 0===t?void 0:t._id),mid:"".concat(null===B||void 0===B?void 0:B.feesId),razor_key:null===U||void 0===U?void 0:U.key,razor_author:null===U||void 0===U?void 0:U.bool,status:null,installment_type:null,is_install:null,h_month:null,book_id:null===B||void 0===B?void 0:B.bookId})})).catch((n=>{})):console.log("error")}})]})}},4195:(n,l,e)=>{e.d(l,{Z:()=>t});e(72791);var o=e(32804),i=e(39230),d=e(80184);const t=n=>{let{label:l,value:e,currentValue:t,onClick:a,customStyleContainer:s}=n;const{t:u}=(0,i.$G)();return(0,d.jsxs)("div",{className:e===t?"".concat(o.Z.student_fees_btn_container," ").concat(o.Z.student_fees_btn_container_active):o.Z.student_fees_btn_container,onClick:()=>a(t),style:s,children:[(0,d.jsx)("h6",{children:u(l)}),(0,d.jsx)("img",{src:"/images/studentclass/fees/fees_arrow_right.svg",alt:"arrow"})]})}}}]);
//# sourceMappingURL=79348.c1639e34.chunk.js.map