"use strict";(self.webpackChunkmithkal_qviple=self.webpackChunkmithkal_qviple||[]).push([[88687],{64499:(e,t,n)=>{n.d(t,{Ex:()=>d,KY:()=>a,oU:()=>s});var o=n(69721);function i(e){return function(e){return"object"===typeof e}(e)&&!function(e){return"[object Date]"===Object.prototype.toString.call(e)}(e)?JSON.stringify(e):e}function l(e){let{action:t,params:n}=e;const o=document.createElement("form");return o.setAttribute("method","post"),o.setAttribute("action",t),Object.keys(n).forEach((e=>{const t=document.createElement("input");t.setAttribute("type","hidden"),t.setAttribute("name",e),t.setAttribute("value",i(n[e])),o.appendChild(t)})),o}function a(e){const t=l(e);document.body.appendChild(t),t.submit(),t.remove()}const d=e=>fetch("".concat(o.FH,"/api/v1/paytm/generateTxnToken"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e)}).then((e=>e.json())).catch((e=>console.log(e))),s=e=>fetch("".concat(o.FH,"/api/v2/paytm/generateTxnToken"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e)}).then((e=>e.json())).catch((e=>console.log(e)))},49384:(e,t,n)=>{n.d(t,{Z:()=>l});n(72791);var o=n(6307),i=n(80184);const l=()=>(0,i.jsx)(o.iT,{ariaLabel:"loading-indicator",height:20,width:20,color:"white",secondaryColor:"#1c023b"})},51376:(e,t,n)=>{n.d(t,{Z:()=>v});var o=n(72791),i=n(11932),l=n(65379),a=n(32804),d=n(11105),s=n(45145),u=n(72310),r=n(98734),c=n(80184);const v=e=>{var t;let{viewAs:n,sudentAdmissionFeesList:v,sudentAdmissionFeesListRefetch:_,feesQueryRefetch:m,showingDataLoading:y,isFeesEditable:h}=e;const[p,g]=(0,o.useState)(!1),[f,x]=(0,o.useState)(""),[b,F]=(0,o.useState)(!1),[j,w]=(0,o.useState)({msg:"",run:!1}),[k]=(0,s.fB)(),C=e=>{var t;F((e=>!e)),k({fid:null===e||void 0===e?void 0:e.financeId,aid:null===e||void 0===e||null===(t=e.install)||void 0===t?void 0:t.appId,flow:"Department"===(null===e||void 0===e?void 0:e.collectFlow)?"BY_DEPARTMENT":"BY_HOSTEL"}).then((t=>{var o,i;(F((e=>!e)),null!==t&&void 0!==t&&null!==(o=t.data)&&void 0!==o&&o.denied)?w({msg:"Before initiating payment. you must have a valid bank account to receive payment.",run:!0}):"STUDENT"===n&&null!==e&&void 0!==e&&null!==(i=e.install)&&void 0!==i&&i.isEnable&&(g(!0),x(e))})).catch({})};return(0,c.jsxs)("div",{className:a.Z.student_admission_fees_container,children:[null===v||void 0===v||null===(t=v.array)||void 0===t?void 0:t.map((e=>(0,c.jsx)(i.Z,{admission:e,viewAs:n,onAdmissionPaid:C,onAdmissionFeesRefetch:_,renderPageAs:"STUDENT_PROFILE",is_feesdata:!0}))),p&&(0,c.jsx)(l.Z,{installment:f,onAdmissionFeesRefetch:_,onFeesRefetch:m,hideModal:g,addDisplay:p,isFeesEditable:h}),y&&(0,c.jsx)(d.Z,{}),(0,c.jsx)(u.Ch,{msg:j.msg,run:j.run,setRun:()=>w({msg:"",run:!1}),postiton:"bottom",type:"error"}),b&&(0,c.jsx)(r.Z,{})]})}},88687:(e,t,n)=>{n.r(t),n.d(t,{default:()=>f});var o=n(72791),i=n(32804),l=n(39230),a=n(4195),d=n(80184);const s=e=>{let{value:t,onTabHandler:n,padiFees:o,remainingFees:s,applicableRemainingFees:u,scholarshipFees:r}=e;const{t:c}=(0,l.$G)();return(0,d.jsxs)("div",{className:i.Z.student_fees_header_container,children:[(0,d.jsxs)("div",{children:[(0,d.jsxs)("div",{className:i.Z.student_fees_row_amount,children:[(0,d.jsxs)("h5",{children:[c("rs"),". ",null!==o&&void 0!==o?o:0]}),(0,d.jsx)("h6",{children:c("total_fees_paid")})]}),(0,d.jsxs)("div",{className:i.Z.student_fees_row_amount,style:{marginTop:"1rem"},children:[(0,d.jsxs)("h5",{children:[c("rs"),". ",null!==r&&void 0!==r?r:0]}),(0,d.jsx)("h6",{children:c("by_scholarship")})]})]}),(0,d.jsxs)("div",{className:i.Z.student_fees_header_column,children:[(0,d.jsx)(a.Z,{label:"admission_fees",currentValue:0,value:t,onClick:n,customStyleContainer:{marginRight:"2rem"}}),(0,d.jsx)(a.Z,{label:"department_fees",currentValue:1,value:t,onClick:n})]}),(0,d.jsxs)("div",{children:[(0,d.jsxs)("div",{className:i.Z.student_fees_row_amount,style:{alignItems:"flex-end"},children:[(0,d.jsxs)("h5",{style:{color:"#121212"},children:[c("rs"),". ",null!==s&&void 0!==s?s:0]}),(0,d.jsx)("h6",{children:c("remaining_fees")})]}),(0,d.jsxs)("div",{className:i.Z.student_fees_row_amount,style:{alignItems:"flex-end",marginTop:"1rem"},children:[(0,d.jsxs)("h5",{style:{color:"#121212"},children:[c("rs"),". ",null!==u&&void 0!==u?u:0]}),(0,d.jsx)("h6",{children:c("applicable_remaining")}),(0,d.jsx)("div",{children:c("to_be_paid_by_student")})]})]})]})};var u=n(91007),r=n(80214),c=n(45145),v=n(87932),_=n(28497),m=n(51376),y=n(75615),h=n(71439),p=n(64499),g=n(16871);const f=e=>{var t,n,l,a,f,x,b,F,j,w,k,C,A,S;let{viewAs:N,sid:T,isFeesEditable:P}=e;const I=(0,g.UO)(),[Z,R]=(0,o.useState)(0),[D,M]=(0,o.useState)(!1),[L,z]=(0,o.useState)({amount:0,feesId:"",insId:"",type:"",bookId:""}),[E,Y]=(0,o.useState)(!0),{data:O,refetch:B}=(0,u.$J)("".concat(T),{skip:!T}),{data:G}=(0,r.Rg)(),[H]=(0,r.gt)(),{sudentAdmissionFeesList:W,sudentAdmissionFeesListRefetch:J}=(0,c.Y$)({sid:T,skip:!T}),{merchantId:K,merchantIdRefetch:U}=(0,v.Vc)({id:null===O||void 0===O||null===(t=O.student)||void 0===t||null===(n=t.institute)||void 0===n?void 0:n._id,skip:!(null!==O&&void 0!==O&&null!==(l=O.student)&&void 0!==l&&null!==(a=l.institute)&&void 0!==a&&a._id)});(0,o.useEffect)((()=>{T&&(B(),J(),Y(!0))}),[T,J,B]),(0,o.useEffect)((()=>{var e,t;null!==O&&void 0!==O&&null!==(e=O.student)&&void 0!==e&&null!==(t=e.institute)&&void 0!==t&&t._id&&U()}),[null===O||void 0===O||null===(f=O.student)||void 0===f||null===(x=f.institute)||void 0===x?void 0:x._id,U]),(0,o.useEffect)((()=>{var e;(null!==W&&void 0!==W&&W.array||0===(null===W||void 0===W||null===(e=W.array)||void 0===e?void 0:e.length))&&Y(!1)}),[null===W||void 0===W?void 0:W.array]),(0,o.useEffect)((()=>{var e;(null!==O&&void 0!==O&&O.mergePay||0===(null===O||void 0===O||null===(e=O.mergePay)||void 0===e?void 0:e.length))&&Y(!1)}),[null===O||void 0===O?void 0:O.mergePay]);const $=(e,t,n)=>e+t+n;return(0,d.jsxs)("div",{className:i.Z.student_alll_fees_data,children:[(0,d.jsx)(s,{onTabHandler:e=>{R(e)},value:Z,padiFees:$((null===O||void 0===O||null===(b=O.student)||void 0===b?void 0:b.studentPaidFeeCount)||0,(null===O||void 0===O||null===(F=O.student)||void 0===F?void 0:F.admissionPaidFeeCount)||0,(null===O||void 0===O||null===(j=O.student)||void 0===j?void 0:j.hostelPaidFeeCount)||0),remainingFees:$((null===O||void 0===O||null===(w=O.student)||void 0===w?void 0:w.studentRemainingFeeCount)||0,(null===O||void 0===O||null===(k=O.student)||void 0===k?void 0:k.admissionRemainFeeCount)||0,(null===O||void 0===O||null===(C=O.student)||void 0===C?void 0:C.hostelRemainFeeCount)||0),applicableRemainingFees:null===O||void 0===O||null===(A=O.student)||void 0===A?void 0:A.applicable_fees_pending,scholarshipFees:null!==(S=null===O||void 0===O?void 0:O.paid_by_government)&&void 0!==S?S:0}),0===Z&&(0,d.jsx)(m.Z,{viewAs:N,sudentAdmissionFeesList:W,sudentAdmissionFeesListRefetch:J,feesQueryRefetch:B,showingDataLoading:E,isFeesEditable:P}),1===Z&&(0,d.jsx)(y.Z,{setAllContent:z,setCharges:M,showingDataLoading:E,sid:T,viewAs:N}),D&&(0,d.jsx)(h.Z,{onClose:()=>M(!1),allContent:L,checkoutHandler:e=>{let t=2.1*+(null===L||void 0===L?void 0:L.amount)/100,n=t+18*+t/100;const o=parseInt(null===L||void 0===L?void 0:L.amount);var i,l,a,d={amount:Math.ceil(o+ +n.toFixed(2))};"PAYTM"===e?(0,p.Ex)({amount:+(null===L||void 0===L?void 0:L.amount),amount_nocharges:+d.amount,type:"Fees",paidBy:"".concat(null===O||void 0===O||null===(i=O.student)||void 0===i?void 0:i._id),paidTo:"".concat(null===O||void 0===O||null===(l=O.student)||void 0===l||null===(a=l.institute)||void 0===a?void 0:a._id),moduleId:"".concat(null===L||void 0===L?void 0:L.feesId),ad_status_id:null,payment_installment:null,ad_install:null,month:null,payment_remain_1:null,payment_card_type:null,payment_book_id:null,name:I.username,isApk:"web",payment_card_id:null}).then((e=>{var t,n;window.onScriptLoad(null===e||void 0===e||null===(t=e.response)||void 0===t||null===(n=t.body)||void 0===n?void 0:n.txnToken,null===e||void 0===e?void 0:e.order,null===e||void 0===e?void 0:e.amount)})).catch((e=>{console.info(e)})):null!==G&&void 0!==G&&G.Key&&null!==d&&void 0!==d&&d.amount?H({amount:null===d||void 0===d?void 0:d.amount}).then((e=>{var t,n,o,i,l,a;null!==(t=e.data)&&void 0!==t&&t.success&&(0,_.r)({key:null===G||void 0===G?void 0:G.Key,oid:null===(n=e.data)||void 0===n?void 0:n.order.id,amount_nocharge:100*(null===L||void 0===L?void 0:L.amount),amount:null===(o=e.data)||void 0===o?void 0:o.order.amount,type:"Fees",pay_by:"".concat(null===O||void 0===O||null===(i=O.student)||void 0===i?void 0:i._id),pay_to:"".concat(null===O||void 0===O||null===(l=O.student)||void 0===l||null===(a=l.institute)||void 0===a?void 0:a._id),mid:"".concat(null===L||void 0===L?void 0:L.feesId),razor_key:null===K||void 0===K?void 0:K.key,razor_author:null===K||void 0===K?void 0:K.bool,status:null,installment_type:null,is_install:null,h_month:null})})).catch((e=>{})):console.log("error")},checkoutBacklogHandler:e=>{let t=2.1*+(null===L||void 0===L?void 0:L.amount)/100,n=t+18*+t/100;const o=parseInt(null===L||void 0===L?void 0:L.amount);var i,l,a,d={amount:Math.ceil(o+ +n.toFixed(2))};"PAYTM"===e?(0,p.Ex)({amount:+(null===L||void 0===L?void 0:L.amount),amount_nocharges:+d.amount,type:"Backlog",paidBy:"".concat(null===O||void 0===O||null===(i=O.student)||void 0===i?void 0:i._id),paidTo:"".concat(null===O||void 0===O||null===(l=O.student)||void 0===l||null===(a=l.institute)||void 0===a?void 0:a._id),moduleId:"".concat(null===L||void 0===L?void 0:L.feesId),ad_status_id:null,payment_installment:null,ad_install:null,month:null,payment_remain_1:null,payment_card_type:null,payment_book_id:null,name:I.username,isApk:"web",payment_card_id:null}).then((e=>{var t,n;window.onScriptLoad(null===e||void 0===e||null===(t=e.response)||void 0===t||null===(n=t.body)||void 0===n?void 0:n.txnToken,null===e||void 0===e?void 0:e.order,null===e||void 0===e?void 0:e.amount)})).catch((e=>{console.info(e)})):null!==G&&void 0!==G&&G.Key&&null!==d&&void 0!==d&&d.amount?H({amount:null===d||void 0===d?void 0:d.amount}).then((e=>{var t,n,o,i,l,a;null!==(t=e.data)&&void 0!==t&&t.success&&(0,_.r)({key:null===G||void 0===G?void 0:G.Key,oid:null===(n=e.data)||void 0===n?void 0:n.order.id,amount_nocharge:100*(null===L||void 0===L?void 0:L.amount),amount:null===(o=e.data)||void 0===o?void 0:o.order.amount,type:"Backlog",pay_by:"".concat(null===O||void 0===O||null===(i=O.student)||void 0===i?void 0:i._id),pay_to:"".concat(null===O||void 0===O||null===(l=O.student)||void 0===l||null===(a=l.institute)||void 0===a?void 0:a._id),mid:"".concat(null===L||void 0===L?void 0:L.feesId),razor_key:null===K||void 0===K?void 0:K.key,razor_author:null===K||void 0===K?void 0:K.bool,status:null,installment_type:null,is_install:null,h_month:null})})).catch((e=>{})):console.log("error")},checkoutLibraryHandler:e=>{let t=2.1*+(null===L||void 0===L?void 0:L.amount)/100,n=t+18*+t/100;const o=parseInt(null===L||void 0===L?void 0:L.amount);var i,l,a,d={amount:Math.ceil(o+ +n.toFixed(2))};"PAYTM"===e?(0,p.Ex)({amount:+(null===L||void 0===L?void 0:L.amount),amount_nocharges:+d.amount,type:"Library Fees",paidBy:"".concat(null===O||void 0===O||null===(i=O.student)||void 0===i?void 0:i._id),paidTo:"".concat(null===O||void 0===O||null===(l=O.student)||void 0===l||null===(a=l.institute)||void 0===a?void 0:a._id),moduleId:"".concat(null===L||void 0===L?void 0:L.feesId),ad_status_id:null,payment_installment:null,ad_install:null,month:null,payment_remain_1:null,payment_card_type:null,payment_book_id:null===L||void 0===L?void 0:L.bookId,name:I.username,isApk:"web",payment_card_id:null}).then((e=>{var t,n;window.onScriptLoad(null===e||void 0===e||null===(t=e.response)||void 0===t||null===(n=t.body)||void 0===n?void 0:n.txnToken,null===e||void 0===e?void 0:e.order,null===e||void 0===e?void 0:e.amount)})).catch((e=>{console.info(e)})):null!==G&&void 0!==G&&G.Key&&null!==d&&void 0!==d&&d.amount?H({amount:null===d||void 0===d?void 0:d.amount}).then((e=>{var t,n,o,i,l,a;null!==(t=e.data)&&void 0!==t&&t.success&&(0,_.r)({key:null===G||void 0===G?void 0:G.Key,oid:null===(n=e.data)||void 0===n?void 0:n.order.id,amount_nocharge:100*(null===L||void 0===L?void 0:L.amount),amount:null===(o=e.data)||void 0===o?void 0:o.order.amount,type:"Library Fees",pay_by:"".concat(null===O||void 0===O||null===(i=O.student)||void 0===i?void 0:i._id),pay_to:"".concat(null===O||void 0===O||null===(l=O.student)||void 0===l||null===(a=l.institute)||void 0===a?void 0:a._id),mid:"".concat(null===L||void 0===L?void 0:L.feesId),razor_key:null===K||void 0===K?void 0:K.key,razor_author:null===K||void 0===K?void 0:K.bool,status:null,installment_type:null,is_install:null,h_month:null,book_id:null===L||void 0===L?void 0:L.bookId})})).catch((e=>{})):console.log("error")}})]})}},4195:(e,t,n)=>{n.d(t,{Z:()=>a});n(72791);var o=n(32804),i=n(39230),l=n(80184);const a=e=>{let{label:t,value:n,currentValue:a,onClick:d,customStyleContainer:s}=e;const{t:u}=(0,i.$G)();return(0,l.jsxs)("div",{className:n===a?"".concat(o.Z.student_fees_btn_container," ").concat(o.Z.student_fees_btn_container_active):o.Z.student_fees_btn_container,onClick:()=>d(a),style:s,children:[(0,l.jsx)("h6",{children:u(t)}),(0,l.jsx)("img",{src:"/images/studentclass/fees/fees_arrow_right.svg",alt:"arrow"})]})}},47735:(e,t,n)=>{n.d(t,{Z:()=>u});var o=n(72791),i=(n(32804),n(45145)),l=n(98734),a=n(62732),d=n(69721),s=n(80184);const u=e=>{let{rid:t}=e;const[n,u]=(0,o.useState)(!1),[r,c]=(0,o.useState)(""),[v,_]=(0,o.useState)(""),{internalFeeReceipt:m,internalFeeReceiptRefetch:y}=(0,i.H0)({rid:r,skip:!r});(0,o.useEffect)((()=>{r&&y()}),[r,y]);return(0,o.useEffect)((()=>{null!==m&&void 0!==m&&m.receipt&&null!==m&&void 0!==m&&m.one_account&&_(m)}),[m]),(0,o.useEffect)((()=>{if(v){var e,t,n,o,i,l,s,r;u((e=>!e));let c=null===v||void 0===v?void 0:v.one_account,m=null===v||void 0===v?void 0:v.receipt;const y=null!==m&&void 0!==m&&null!==(e=m.finance)&&void 0!==e&&null!==(t=e.institute)&&void 0!==t&&t.insProfilePhoto?"".concat(d.Yz,"/").concat(null===m||void 0===m||null===(n=m.finance)||void 0===n||null===(o=n.institute)||void 0===o?void 0:o.insProfilePhoto):"/images/certificate/logodemo.jpg",h=null!==m&&void 0!==m&&null!==(i=m.finance)&&void 0!==i&&null!==(l=i.institute)&&void 0!==l&&l.affliatedLogo?"".concat(d.Yz,"/").concat(null===m||void 0===m||null===(s=m.finance)||void 0===s||null===(r=s.institute)||void 0===r?void 0:r.affliatedLogo):"/images/certificate/logodemo.jpg";c&&m&&((0,a.Z)(c,m,y,h),u(!1)),_(""),window.location.reload()}}),[v]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("img",{src:"/images/members/receipt-icon.svg",onClick:()=>{var e;(e=t)&&(u((e=>!e)),c(e))},alt:"receipt icon"}),n&&(0,s.jsx)(l.Z,{})]})}},75615:(e,t,n)=>{n.d(t,{Z:()=>c});var o=n(72791),i=n(59227),l=n(32804),a=n(11105),d=n(34219),s=n(23441),u=n(45145),r=n(80184);const c=e=>{let{setAllContent:t,setCharges:n,sid:c,viewAs:v}=e;const[_,m]=(0,o.useState)(!0),[y,h]=(0,o.useState)(1),[p,g]=(0,s.YD)(),[f,x]=(0,o.useState)([]),[b,F]=(0,o.useState)(!1),[j,w]=(0,o.useState)(!0),{studentDepartmentFees:k,studentDepartmentFeesRefetch:C}=(0,u.d9)({data:{sid:c,page:y,limit:10},skip:!c});return(0,o.useEffect)((()=>{g&&_&&h((e=>e+1))}),[g,_]),(0,o.useEffect)((()=>{c&&(C(),w(!0))}),[y,c,C]),(0,o.useEffect)((()=>{var e,t;b?(x(null===k||void 0===k?void 0:k.all_internal),F(!1),w(!1)):null!==k&&void 0!==k&&k.all_internal?(x((e=>[...new Set([...e,...null===k||void 0===k?void 0:k.all_internal].map(JSON.stringify))].map(JSON.parse))),w(!1)):0===(null===k||void 0===k||null===(t=k.all_internal)||void 0===t?void 0:t.length)&&w(!1);10===(null===k||void 0===k||null===(e=k.all_internal)||void 0===e?void 0:e.length)?m(!0):m(!1)}),[null===k||void 0===k?void 0:k.all_internal]),(0,r.jsxs)("div",{className:l.Z.student_admission_fees_container,children:[null===f||void 0===f?void 0:f.map(((e,o)=>{var a,d,s,u,_,m,y,h,g,x,b,F,j,w,k,C,A,S;return(null===f||void 0===f?void 0:f.length)===o+1?(0,r.jsx)("div",{className:l.Z.student_internal_card,ref:p,children:(0,r.jsx)(i.Z,{feesName:null===e||void 0===e?void 0:e.internal_fee_reason,amount:null===e||void 0===e?void 0:e.internal_fee_amount,dateOffCreation:null===e||void 0===e||null===(a=e.fees)||void 0===a?void 0:a.feeDate,is_paid:null===e||void 0===e?void 0:e.internal_fee_status,feesId:null===e||void 0===e?void 0:e._id,setAllContent:t,setCharges:n,is_checklist:"Checklist"===(null===e||void 0===e?void 0:e.internal_fee_type)||"Backlog"===(null===e||void 0===e?void 0:e.internal_fee_type)||"Library Fees"===(null===e||void 0===e?void 0:e.internal_fee_type),rid:null===e||void 0===e||null===(d=e.fee_receipt)||void 0===d?void 0:d._id,transactionDate:null===e||void 0===e||null===(s=e.fee_receipt)||void 0===s?void 0:s.created_at,transactionMode:null===e||void 0===e||null===(u=e.fee_receipt)||void 0===u?void 0:u.fee_payment_mode,moduleType:null===e||void 0===e?void 0:e.internal_fee_type,sid:c,viewAs:v,bookId:null!==(_=null===e||void 0===e?void 0:e.book)&&void 0!==_?_:"",validateId:null===e||void 0===e||null===(m=e.library)||void 0===m?void 0:m._id,financeId:null===e||void 0===e||null===(y=e.library)||void 0===y||null===(h=y.institute)||void 0===h||null===(g=h.financeDepart)||void 0===g?void 0:g[0]})},null===e||void 0===e?void 0:e._id):(0,r.jsx)("div",{className:l.Z.student_internal_card,children:(0,r.jsx)(i.Z,{feesName:null===e||void 0===e?void 0:e.internal_fee_reason,amount:null===e||void 0===e?void 0:e.internal_fee_amount,dateOffCreation:null===e||void 0===e||null===(x=e.fees)||void 0===x?void 0:x.feeDate,is_paid:null===e||void 0===e?void 0:e.internal_fee_status,feesId:null===e||void 0===e?void 0:e._id,setAllContent:t,setCharges:n,is_checklist:"Checklist"===(null===e||void 0===e?void 0:e.internal_fee_type)||"Backlog"===(null===e||void 0===e?void 0:e.internal_fee_type)||"Library Fees"===(null===e||void 0===e?void 0:e.internal_fee_type),rid:null===e||void 0===e||null===(b=e.fee_receipt)||void 0===b?void 0:b._id,transactionDate:null===e||void 0===e||null===(F=e.fee_receipt)||void 0===F?void 0:F.created_at,transactionMode:null===e||void 0===e||null===(j=e.fee_receipt)||void 0===j?void 0:j.fee_payment_mode,moduleType:null===e||void 0===e?void 0:e.internal_fee_type,sid:c,viewAs:v,bookId:null!==(w=null===e||void 0===e?void 0:e.book)&&void 0!==w?w:"",validateId:null===e||void 0===e||null===(k=e.library)||void 0===k?void 0:k._id,financeId:null===e||void 0===e||null===(C=e.library)||void 0===C||null===(A=C.institute)||void 0===A||null===(S=A.financeDepart)||void 0===S?void 0:S[0]})},null===e||void 0===e?void 0:e._id)})),j&&(0,r.jsx)(a.Z,{}),!j&&0===(null===f||void 0===f?void 0:f.length)&&(0,r.jsx)(d.Z,{title:"No department fees created yet.",customStyleContainer:{height:"15rem"}})]})}},59227:(e,t,n)=>{n.d(t,{Z:()=>h});var o=n(72791),i=n(32804),l=n(39230),a=n(72426),d=n.n(a),s=n(47735),u=n(64499),r=n(69721),c=n(45145),v=n(72310),_=n(98734),m=n(80184);const y=["STUDENT"],h=e=>{let{amount:t,feesName:n,dateOffCreation:a,is_paid:h,is_checklist:p,feesId:g,setAllContent:f,setCharges:x,moduleType:b,rid:F,transactionDate:j,transactionMode:w,viewAs:k,is_static:C,bookId:A,validateId:S,financeId:N}=e;const{t:T}=(0,l.$G)(),[P,I]=(0,o.useState)(!1),[Z,R]=(0,o.useState)({msg:"",run:!1}),[D]=(0,c.fB)(),M={amount:10,moduleId:"38965823534u5t23y",paidBy:"34532h423424f4g5f23j",name:"Shreya_1540"};return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)("h5",{children:[T("rs"),".",null!==t&&void 0!==t?t:0," "]}),(0,m.jsx)("h6",{children:null!==n&&void 0!==n?n:"Static"}),j?(0,m.jsxs)("p",{children:[T("paid_on"),d()(j).format("DD MMMM yyyy")]}):p?"":(0,m.jsxs)("p",{children:[T("pay_by"),d()(a).format("DD MMMM yyyy")]}),"Not Paid"!==h?(0,m.jsxs)("button",{className:i.Z.student_internal_card_btn_paid,children:[T("internal_paid")," ",null!==w&&void 0!==w?w:""]}):C?(0,m.jsx)("button",{className:i.Z.student_internal_card_btn_pay,onClick:()=>{(0,u.Ex)(M).then((e=>{var t={action:r.FX,params:e};(0,u.KY)(t)})).catch((e=>{console.info(e)}))},children:T("pay_now")}):null!==y&&void 0!==y&&y.includes(k)?(0,m.jsx)("button",{className:i.Z.student_internal_card_btn_pay,onClick:()=>{"Library Fees"===b?(I((e=>!e)),D({fid:N,aid:S,flow:"BY_LIBRARY"}).then((e=>{var n;I((e=>!e)),null!==e&&void 0!==e&&null!==(n=e.data)&&void 0!==n&&n.denied?R({msg:"Before initiating payment. you must have a valid bank account to receive payment.",run:!0}):(f((e=>({...e,amount:t,feesId:g,type:"Backlog"===b?"Backlog":"Library Fees"===b?"Library Fees":"Fees",bookId:null!==A&&void 0!==A?A:""}))),x(!0))})).catch({})):(f((e=>({...e,amount:t,feesId:g,type:"Backlog"===b?"Backlog":"Library Fees"===b?"Library Fees":"Fees",bookId:null!==A&&void 0!==A?A:""}))),x(!0))},children:T("pay_now")}):(0,m.jsx)("button",{className:i.Z.student_internal_card_btn_pay,children:T("unpaid")}),"Not Paid"!==h?(0,m.jsx)(s.Z,{rid:F}):"",(0,m.jsx)(v.Ch,{msg:Z.msg,run:Z.run,setRun:()=>R({msg:"",run:!1}),postiton:"bottom",type:"error"}),P&&(0,m.jsx)(_.Z,{})]})}},71439:(e,t,n)=>{n.d(t,{Z:()=>w});var o=n(72791);const i="PaymentGatewayConfig_gateway_container__nrTUY",l="PaymentGatewayConfig_gateway_upi__AJ6Eb",a="PaymentGatewayConfig_gateway_other__RxfCt",d="PaymentGatewayConfig_gateway_upi_text__OV6Zf",s="PaymentGatewayConfig_gateway_other_text__EVLNL",u="PaymentGatewayConfig_gateway_upi_text_inner__SB-Kf",r="PaymentGatewayConfig_gateway_other_text_inner__Pd5BQ",c="PaymentGatewayConfig_gateway_upi_icons__EAxoi",v="PaymentGatewayConfig_gateway_upi_icons_inner__N+sfo",_="PaymentGatewayConfig_gateway_other_icons__kqTO+",m="PaymentGatewayConfig_gateway_other_icons_inner__MGmma",y="PaymentGatewayConfig_gateway_btn__2Xo3a",h="PaymentGatewayConfig_gateway_border__gjI8+",p="PaymentGatewayConfig_gateway_summary__Rbg+6",g="PaymentGatewayConfig_gateway_summary_text__b6PzX";var f=n(36665),x=n(39230),b=n(49384),F=n(80184);const j=e=>{var t,n;let{onClose:o,allContent:l,onNext:a,isLoading:d,selected:s,isOptimzed:u}=e;const{t:r}=(0,x.$G)();let c=2.1*+(null===l||void 0===l?void 0:l.amount)/100,v=c+18*+c/100;const _=parseInt(null===l||void 0===l?void 0:l.amount);Math.ceil(_+ +v.toFixed(2));var m=1*parseInt(null===l||void 0===l?void 0:l.amount)/100,j=m>=100?100:m;let w=18*+j/100;Math.ceil(parseInt(null===l||void 0===l?void 0:l.amount)+parseInt(j)+parseInt(w));return(0,F.jsx)(f.Z,{onClose:o,children:(0,F.jsxs)("div",{className:i,children:[(0,F.jsx)("div",{className:h,children:(0,F.jsx)("img",{src:"/images/member_tab/gateway/gateway-border-icon.svg",alt:"gateway icon"})}),(0,F.jsx)("h6",{children:r("Payment_Summary")}),(0,F.jsxs)("section",{className:p,children:[u&&(0,F.jsx)("div",{className:g,children:(0,F.jsxs)("h6",{style:{fontSize:"14px",fontWeight:"500"},children:[r("plateform_fees_rs")," ",null!==(t=null===(n=(null===l||void 0===l?void 0:l.amount)*(null===l||void 0===l?void 0:l.platform_charges)/100)||void 0===n?void 0:n.toFixed(2))&&void 0!==t?t:0]})}),(0,F.jsx)("div",{className:g,children:(0,F.jsx)("h6",{style:{fontSize:"14px",fontWeight:"500"},children:r(u?"pg_convenience_o":"pg_convenience")})}),(0,F.jsx)("div",{className:g,children:(0,F.jsx)("p",{children:r(u?"pg_convenience_note_o":"pg_convenience_note")})}),(0,F.jsx)("div",{className:g,children:(0,F.jsxs)("p",{style:{fontSize:"12px"},children:[(0,F.jsx)("img",{src:"/images/checkbox-icon.svg",alt:"icon",style:{height:"0.8rem",marginRight:"0.5rem"}}),r(u?"pg_convenience_forward_o":"pg_convenience_forward")]})}),(0,F.jsxs)("button",{onClick:a,className:y,style:{marginTop:"1rem"},children:[r("Make_Payment"),d&&(0,F.jsx)("span",{style:{marginLeft:"10px",marginTop:"13px"},children:(0,F.jsx)(b.Z,{})})]})]})]})})},w=e=>{let{onClose:t,allContent:n,checkoutHandler:y,checkoutAdmissionHandler:p,checkoutParticipate:g,checkoutBacklogHandler:b,checkoutAdmissionDirectHandler:w,checkoutLibraryHandler:k,isOptimzed:C}=e;const{t:A}=(0,x.$G)(),[S,N]=(0,o.useState)(0),[T,P]=(0,o.useState)("PAYTM"),[I,Z]=(0,o.useState)(!1),R=e=>{N(e),P(0===e?"PAYTM":"RAZOR")};return(0,F.jsx)(F.Fragment,{children:T?(0,F.jsx)(j,{onClose:t,allContent:n,onNext:()=>{Z(!0),"Fees"===n.type?y(0===S?"PAYTM":"RAZOR"):"Admission"===n.type?p(0===S?"PAYTM":"RAZOR"):"Participate"===n.type?g(0===S?"PAYTM":"RAZOR"):"Backlog"===n.type?b(0===S?"PAYTM":"RAZOR"):"Library Fees"===n.type?k(0===S?"PAYTM":"RAZOR"):"ADMISSION_DIRECT_APPLY"===n.type?w(0===S?"PAYTM":"RAZOR"):"Other"===n.type&&p(0===S?"PAYTM":"RAZOR")},isLoading:I,selected:S,isOptimzed:C}):(0,F.jsx)(f.Z,{onClose:t,children:(0,F.jsxs)("div",{className:i,children:[(0,F.jsx)("div",{className:h,children:(0,F.jsx)("img",{src:"/images/member_tab/gateway/gateway-border-icon.svg",alt:"gateway icon"})}),(0,F.jsx)("h6",{children:A("Payment_Mode")}),(0,F.jsx)("p",{children:A("Pay_via_UPI_Less_transaction_charges_by_Payment_Gateway")}),(0,F.jsxs)("section",{className:l,onClick:()=>R(0),style:{boxShadow:0===S&&"0px 4px 4px 0px #00000040",backgroundColor:0===S&&"rgb(156 136 179 / 10%)"},children:[(0,F.jsxs)("div",{className:d,children:[(0,F.jsx)("img",{src:"/images/member_tab/gateway/gateway-bheem-icon.svg",alt:"gateway icon"}),(0,F.jsxs)("div",{className:u,children:[(0,F.jsx)("p",{children:A("Payment_Mode")}),(0,F.jsx)("h6",{children:A("payment_upi")})]})]}),(0,F.jsxs)("div",{className:c,children:[(0,F.jsx)("img",{src:"/images/member_tab/gateway/gateway-recomended-icon.svg",alt:"gateway icon"}),(0,F.jsxs)("div",{className:v,children:[(0,F.jsx)("img",{src:"/images/member_tab/gateway/gateway-phone-icon.svg",alt:"gateway icon"}),(0,F.jsx)("img",{src:"/images/member_tab/gateway/gateway-paytm-icon.svg",alt:"gateway icon"}),(0,F.jsx)("img",{src:"/images/member_tab/gateway/gateway-google-icon.svg",alt:"gateway icon"})]})]})]}),(0,F.jsxs)("section",{className:a,onClick:()=>R(1),style:{boxShadow:1===S&&"0px 4px 4px 0px #00000040",backgroundColor:1===S&&"rgb(156 136 179 / 10%)"},children:[(0,F.jsxs)("div",{className:s,children:[(0,F.jsx)("img",{src:"/images/member_tab/gateway/gateway-other-icon.svg",alt:"gateway icon"}),(0,F.jsxs)("div",{className:r,children:[(0,F.jsx)("p",{children:A("Payment_Mode")}),(0,F.jsx)("h6",{children:A("payment_other")})]})]}),(0,F.jsxs)("div",{className:_,children:[(0,F.jsxs)("div",{className:m,children:[(0,F.jsx)("img",{src:"/images/member_tab/gateway/gateway-debit-icon.svg",alt:"gateway icon"}),(0,F.jsxs)("p",{children:[A("debit_credit"),(0,F.jsx)("br",{}),A("cards")]})]}),(0,F.jsxs)("div",{className:m,children:[(0,F.jsx)("img",{src:"/images/member_tab/gateway/gateway-bank-icon.svg",alt:"gateway icon"}),(0,F.jsx)("p",{children:A("net_banking")})]})]})]})]})})})}},62732:(e,t,n)=>{n.d(t,{Z:()=>r});var o=n(51355),i=n(72426),l=n.n(i),a=n(62906),d=n.n(a),s=new o.ZP({format:[270,210]}),u=s.internal.pageSize.getWidth();const r=function(e,t,n,o){var i,a,r,c,v,_,m,y,h,p,g,f,x,b,F,j,w;let k=arguments.length>4&&void 0!==arguments[4]&&arguments[4],C=null===t||void 0===t||null===(i=t.finance)||void 0===i?void 0:i.institute,A=null===t||void 0===t||null===(a=t.finance)||void 0===a?void 0:a.financeHead,S=null===t||void 0===t?void 0:t.student,N=null===t||void 0===t?void 0:t.internal_fees,T=null===t||void 0===t?void 0:t.order_history;s.addImage(n,"JPEG",9,3,25,25),s.addImage(o,"JPEG",u-34,2.4,25,25),s.setLineWidth(8),s.setDrawColor(255,255,255),s.circle(21.4,15,16),s.setLineWidth(0),s.setLineWidth(8),s.setDrawColor(255,255,255),s.circle(u-21.4,15,16),s.setLineWidth(0);const P=s.splitTextToSize(null===C||void 0===C?void 0:C.insName,146);if(s.setFont(void 0,"normal"),P.length>1){let e=10;s.setFont("700"),s.setTextColor(18,18,18),s.setFontSize(16),s.text(107,e,P,"center"),e=P.length+145}else{let e=10;s.setFont("700"),s.setTextColor(18,18,18),s.setFontSize(18),s.text(107,e,P,"center"),e=P.length+145}s.setFont("Arial","normal","400"),s.setTextColor(18,18,18),s.setFontSize(10),s.text(u/2,P.length>1?23:19,null===C||void 0===C?void 0:C.insAddress,"center"),s.setFont("WorkSans"),s.setTextColor(18,18,18),s.setFontSize(10),s.text(u/2,P.length>1?29:25,"Mob No : ".concat(null===C||void 0===C?void 0:C.insPhoneNumber," , Mail: ").concat(null===C||void 0===C?void 0:C.insEmail),"center"),s.setFont("WorkSans"),s.setTextColor(0,0,0),s.setFontSize(18),s.text(u/2,37,"Fee Receipt","center"),s.setLineWidth(.7),s.setDrawColor(18,18,18),s.line(0,46,u,46),s.setTextColor(0,0,0),s.setFont(void 0,"bold"),s.setFontSize(10),s.text(9,54,"Invoice No :"),s.setFont(void 0,"normal"),s.setTextColor(0,0,0),s.setFontSize(10),s.text(32,54,null===t||void 0===t?void 0:t.invoice_count),s.setTextColor(0,0,0),s.setFont(void 0,"bold"),s.setFontSize(10),s.text(u-32,54,"Dated:",{align:"right"}),s.setFont(void 0,"normal"),s.setTextColor(0,0,0),s.setFontSize(10),s.text(u-12,54,l()(null===t||void 0===t?void 0:t.created_at).format("DD-MMM-YYYY"),{align:"right"}),s.setTextColor(0,0,0),s.setFont(void 0,"bold"),s.setFontSize(10),s.text(9,61,"Purpose:"),s.setFont(void 0,"normal"),s.setTextColor(0,0,0),s.setFontSize(10),s.text(32,61,"".concat(null!==(r=null===N||void 0===N?void 0:N.internal_fee_reason)&&void 0!==r?r:"N/A")),s.setTextColor(0,0,0),s.setFont(void 0,"bold"),s.setFontSize(10),s.text(9,68,"Amount: "),s.setFont(void 0,"normal"),s.setTextColor(0,0,0),s.setFontSize(10),s.text(32,68,"Rs. ".concat(null===t||void 0===t?void 0:t.fee_payment_amount)),s.setTextColor(0,0,0),s.setFont(void 0,"bold"),s.setFontSize(11),s.text(9,97," ".concat(k?"Received Through: ":"Paid Through: ")),s.setFont(void 0,"normal"),s.text(44,97,"".concat(null===e||void 0===e?void 0:e.finance_bank_name,", ").concat(null===e||void 0===e?void 0:e.finance_bank_account_name,", A/c No:  ").concat(null===e||void 0===e?void 0:e.finance_bank_account_number)),s.setTextColor(0,0,0),s.setFont(void 0,"bold"),s.text(9,107," On Account of: ");const I="Being money ".concat(k?"received":"paid"," by ").concat(null===t||void 0===t?void 0:t.fee_payment_mode,", Transaction ID: ").concat(null!==(c=null===T||void 0===T?void 0:T.razorpay_order_id)&&void 0!==c?c:"N/A"," ,  Dated: ").concat(l()(null===t||void 0===t?void 0:t.created_at).format("DD-MMM-YYYY"),"  for Rs. ").concat(null===t||void 0===t?void 0:t.fee_payment_amount,".").concat(k?"From":"To"," ","".concat(null!==(v=null===S||void 0===S?void 0:S.studentFirstName)&&void 0!==v?v:""," ").concat(null!==(_=null===S||void 0===S?void 0:S.studentMiddleName)&&void 0!==_?_:""," ").concat(null!==(m=null===S||void 0===S?void 0:S.studentLastName)&&void 0!==m?m:""," "),", towards ").concat(null!==(y=null===N||void 0===N?void 0:N.internal_fee_reason)&&void 0!==y?y:"N/A","."),Z=s.splitTextToSize(I,u-20);if(Z.length>1){let e=113,t=10;s.setFont(void 0,"normal"),s.setFontSize(11),s.setTextColor(18,18,18),s.text(t,e,Z,"left"),e=Z.length+151}else{let e=113,t=10;s.setFontSize(11),s.setFont(void 0,"normal"),s.setTextColor(18,18,18),s.setFontSize(12),s.text(t,e,Z,"left"),e=Z.length+151}var R,D,M,L;(s.setTextColor(0,0,0),s.setFont(void 0,"bold"),s.setFontSize(11),s.text(9,131,"Bank Transaction Details: "),s.setFont(void 0,"normal"),s.text(9,138,"Payment Mode:  ".concat(null===t||void 0===t?void 0:t.fee_payment_mode)),null!==T&&void 0!==T&&T.razorpay_order_id)?s.text(9,144,"Transaction ID: ".concat(null!==(R=null===T||void 0===T?void 0:T.razorpay_order_id)&&void 0!==R?R:"N/A")):(s.text(9,144,"Bank Name: ".concat(null!==(D=null===e||void 0===e?void 0:e.fee_bank_name)&&void 0!==D?D:"N/A")),s.text(9,150,"Bank Holder Name: ".concat(null!==(M=null===e||void 0===e?void 0:e.finance_bank_account_name)&&void 0!==M?M:"N/A")),s.text(9,156,"UTR / Ref No.: ".concat(null!==(L=null===e||void 0===e?void 0:e.fee_utr_reference)&&void 0!==L?L:"N/A")),s.text(9,162,"Date: ".concat(l()(null===t||void 0===t?void 0:t.created_at).format("DD-MMM-YYYY"))),s.text(9,168,"Amount: ".concat(null===t||void 0===t?void 0:t.fee_payment_amount)),s.text(9,174,"Amount in Words: ".concat((d().toWords(t.fee_payment_amount.toString()).match(/[a-zA-Z0-9]+/g)||[]).map((e=>"".concat(e.charAt(0).toUpperCase()).concat(e.slice(1)))).join(" ")," only.")));s.setFontSize(9),s.text(40,240,"".concat(A.staffFirstName," ").concat(null!==(h=A.staffMiddleName)&&void 0!==h?h:""," ").concat(A.staffLastName),{align:"center"}),s.setFont(void 0,"bold"),s.setFontSize(10),s.text(40,245,"Finance Manager",{align:"center"}),s.setFont(void 0,"normal"),s.setFontSize(9),s.text(153,240,"".concat(null!==(p=null===C||void 0===C||null===(g=C.displayPersonList)||void 0===g||null===(f=g[0])||void 0===f||null===(x=f.displayUser)||void 0===x?void 0:x.userLegalName)&&void 0!==p?p:"N/A"),{align:"center"}),s.setFont(void 0,"bold"),s.setFontSize(10),s.text(153,245,"".concat(null!==(b=null===C||void 0===C||null===(F=C.displayPersonList)||void 0===F||null===(j=F[0])||void 0===j?void 0:j.displayTitle)&&void 0!==b?b:"N/A"),{align:"center"}),s.setTextColor(0,0,255),s.setFontSize(7),s.text(u-20,243,"Online Automated",null,50),s.text(u-18,244,"Generated fee receipt",null,50),s.text(u-14,246,"Through Qviple",null,50),s.setLineWidth(.2),s.setDrawColor(18,18,18),s.line(0,251,u,251),s.setTextColor(18,18,18),s.setFontSize(8),s.setFont(void 0,"normal"),s.text(u/2,259,"Note : No one except one who is making this certificate should interfere with any details of this invoice, othewise students will be expelled and legal action will be taken.","center"),window.open(s.output("bloburl",{filename:"".concat(null===S||void 0===S?void 0:S.studentFirstName," ").concat(null!==(w=null===S||void 0===S?void 0:S.studentMiddleName)&&void 0!==w?w:""," ").concat(null===S||void 0===S?void 0:S.studentLastName," -Internal Fee Receipt.pdf")}),"_blank")}},32804:(e,t,n)=>{n.d(t,{Z:()=>o});const o={student_fees_header_container:"StudentAllFeesData_student_fees_header_container__06J8F",student_fees_header_column:"StudentAllFeesData_student_fees_header_column__7WxL2",student_fees_row_amount:"StudentAllFeesData_student_fees_row_amount__2QSk8",student_fees_btn_container:"StudentAllFeesData_student_fees_btn_container__rcsyt",student_fees_btn_container_active:"StudentAllFeesData_student_fees_btn_container_active__LiRxa",student_alll_fees_data:"StudentAllFeesData_student_alll_fees_data__CBPmP",student_admission_fees_container:"StudentAllFeesData_student_admission_fees_container__Fs6dX",student_internal_card:"StudentAllFeesData_student_internal_card__QP2oz",student_internal_card_btn_pay:"StudentAllFeesData_student_internal_card_btn_pay__CzvCh",student_internal_card_btn_paid:"StudentAllFeesData_student_internal_card_btn_paid__KP8Jd"}}}]);
//# sourceMappingURL=88687.eec24369.chunk.js.map