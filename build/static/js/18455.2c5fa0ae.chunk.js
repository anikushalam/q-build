"use strict";(self.webpackChunkmithkal_qviple=self.webpackChunkmithkal_qviple||[]).push([[18455],{34219:(e,t,i)=>{i.d(t,{Z:()=>l});i(72791);var n=i(11575),o=i(80184);const l=e=>{let{customStyleContainer:t,title:i,subtitle:l,costomTextTitleStyle:s,costomTextSubtitleStyle:d}=e;return(0,o.jsxs)("div",{className:n.Z.empty_container,style:t,children:[i&&(0,o.jsx)("h6",{style:s,children:i}),l&&(0,o.jsx)("p",{style:d,children:l})]})}},47167:(e,t,i)=>{i.d(t,{Z:()=>a});i(72791);var n=i(16871),o=i(43504),l=i(23769),s=i(45639),d=i(80184);const a=e=>{let{tabList:t,activeIndexTab:i,setActiveIndexTab:a,customStyleTab:r,carryParentState:c,showAs:v,customStyleLink:u}=e;const _=(0,n.UO)();return(0,d.jsx)("div",{className:s.Z.universal_container,children:v?null===t||void 0===t?void 0:t.map(((e,t)=>"disabled"===(null===e||void 0===e?void 0:e.is_active)?(0,d.jsx)("div",{className:i===(null===e||void 0===e?void 0:e.id)?"".concat(s.Z.universal_container_item," ").concat(s.Z.universal_container_item_active):s.Z.universal_container_item,style:{...u,opacity:"0.5"},children:(0,d.jsx)(l.Z,{children:null===e||void 0===e?void 0:e.name})},t):(0,d.jsx)(o.rU,{to:"/q/".concat(_.username,"/").concat(null===e||void 0===e?void 0:e.url),state:{...c},style:{...u},children:(0,d.jsx)("div",{className:i===(null===e||void 0===e?void 0:e.id)?"".concat(s.Z.universal_container_item," ").concat(s.Z.universal_container_item_active):s.Z.universal_container_item,style:{...r},children:(0,d.jsx)(l.Z,{children:null===e||void 0===e?void 0:e.name})})},t))):null===t||void 0===t?void 0:t.map(((e,t)=>(0,d.jsx)("div",{className:i===(null===e||void 0===e?void 0:e.id)?"".concat(s.Z.universal_container_item," ").concat(s.Z.universal_container_item_active):s.Z.universal_container_item,onClick:()=>a(null===e||void 0===e?void 0:e.id),style:{...r},children:(0,d.jsx)(l.Z,{children:null===e||void 0===e?void 0:e.name})},t)))})}},23769:(e,t,i)=>{i.d(t,{Z:()=>l});var n=i(72791),o=i(80184);const l=function(e){let{children:t,onclick:i}=e;const[l,s]=(0,n.useState)(!1),[d,a]=(0,n.useState)({x:-1,y:-1});return(0,n.useEffect)((()=>{-1!==d.x&&-1!==d.y?(s(!0),setTimeout((()=>s(!1)),1e3)):s(!1)}),[d]),(0,n.useEffect)((()=>{l||a({x:-1,y:-1})}),[l]),(0,o.jsxs)("div",{className:"ripple_btn",onClick:e=>{a({x:e.clientX-e.target.offsetLeft,y:e.clientY-e.target.offsetTop}),i&&i(e)},children:[l?(0,o.jsx)("span",{className:"ripple"}):"",(0,o.jsx)("span",{className:"content",children:t})]})}},18455:(e,t,i)=>{i.r(t),i.d(t,{default:()=>H});var n=i(72791),o=i(33965),l=i(39230),s=i(23441),d=i(95048),a=i(87932),r=i(65543),c=i(72426),v=i.n(c),u=i(80184);const _=function(e){var t,i;let{detailview:n,setDetailView:s,onClickValue:d}=e;const{t:a}=(0,l.$G)();return(0,u.jsx)(u.Fragment,{children:(0,u.jsx)("div",{className:o.Z.incomeRightt,children:n?(0,u.jsxs)("div",{className:o.Z.detail,children:[(0,u.jsxs)("div",{className:o.Z.detailTop,children:[(0,u.jsx)("div",{className:o.Z.detailTopLeft,children:(0,u.jsx)("h6",{onClick:()=>s(!1),children:a("back")})}),(0,u.jsx)("div",{className:o.Z.detailTopMid,children:(0,u.jsx)("h6",{children:null!==(t=null===d||void 0===d||null===(i=d.payment_by_end_user_id)||void 0===i?void 0:i.userLegalName)&&void 0!==t?t:null===d||void 0===d?void 0:d.payment_by_end_user_id_name})}),(0,u.jsxs)("div",{className:o.Z.detailTopRight,children:["Rs. ",null===d||void 0===d?void 0:d.payment_amount]})]}),(0,u.jsxs)("div",{className:o.Z.detailContent,children:[(0,u.jsx)("p",{children:a("transaction_mode")}),(0,u.jsx)("h6",{children:null===d||void 0===d?void 0:d.payment_mode})]}),(0,u.jsxs)("div",{className:o.Z.detailContent,children:[(0,u.jsx)("p",{children:a("day_date")}),(0,u.jsxs)("h6",{children:[v()(null===d||void 0===d?void 0:d.created_at).format("DD MMM yyyy")," ",v()(null===d||void 0===d?void 0:d.created_at).format("LT")]})]})]}):""})})},m=e=>{var t,i,n,s,d,a,r,c;let{history:_,setOnClickValue:m,setDetailView:p}=e;const{t:h}=(0,l.$G)();return(0,u.jsx)(u.Fragment,{children:(0,u.jsxs)("div",{className:o.Z.sidebarheader,onClick:()=>{m(_),p(!0)},children:[(0,u.jsxs)("div",{className:o.Z.text,children:[(0,u.jsx)("p",{className:o.Z.rcv,children:h("paid_to")}),(0,u.jsx)("h6",{children:null!==(t=null===_||void 0===_||null===(i=_.payment_by_end_user_id)||void 0===i?void 0:i.userLegalName)&&void 0!==t?t:null===_||void 0===_?void 0:_.payment_by_end_user_id_name}),(0,u.jsxs)("p",{className:o.Z.rcv,children:[v()(null===_||void 0===_?void 0:_.created_at).format("DD MMM yyyy")," ",v()(null===_||void 0===_?void 0:_.created_at).format("LT")]})]}),(0,u.jsxs)("div",{className:o.Z.text,style:{marginTop:"0.9rem"},children:[(0,u.jsx)("p",{className:o.Z.rcv}),(0,u.jsxs)("h6",{children:["Rs. ",null===_||void 0===_?void 0:_.payment_amount]}),(0,u.jsx)("p",{className:o.Z.rcv,children:"offline"===(null===(n=_.payment_mode)||void 0===n?void 0:n.toLowerCase())?null!==_&&void 0!==_&&null!==(s=_.fee_receipt)&&void 0!==s&&s.fee_payment_mode?"".concat(null===_||void 0===_||null===(d=_.fee_receipt)||void 0===d?void 0:d.fee_payment_mode):"Offline - No Receipt":"online"===(null===(a=_.payment_mode)||void 0===a?void 0:a.toLowerCase())?null!==_&&void 0!==_&&null!==(r=_.fee_receipt)&&void 0!==r&&r.fee_payment_mode?"".concat(null===_||void 0===_||null===(c=_.fee_receipt)||void 0===c?void 0:c.fee_payment_mode):"Online - No Receipt":null===_||void 0===_?void 0:_.payment_mode})]})]})})};var p=i(763),h=i(11105),y=i(34219);const f=e=>{let{insId:t}=e;const{t:i}=(0,l.$G)(),c=(0,d.v9)((e=>e.financeChange)),[v,f]=n.useState([]),[x,g]=(0,n.useState)(""),[j,N]=(0,s.YD)({skip:x}),[T,b]=n.useState(!0),[S,Z]=n.useState(1),[C,F]=n.useState(!1),[w,I]=n.useState(""),[R,L]=(0,n.useState)(!0),{financeAllHistory:k,financeAllHistoryRefetch:H}=(0,a.j2)({data:{uid:null!==c&&void 0!==c&&c.insId?null===c||void 0===c?void 0:c.insId:t,page:S,limit:10,filter:"Expense",search:x},skip:null!==c&&void 0!==c&&c.insId?!(null!==c&&void 0!==c&&c.insId):!t}),{scrollToTop:A}=(0,r.u)();n.useEffect((()=>{A()}),[]),n.useEffect((()=>{(null!==c&&void 0!==c&&c.insId||t)&&H()}),[null===c||void 0===c?void 0:c.insId,t,S,x,H]),n.useEffect((()=>{N&&T&&Z((e=>e+1))}),[N,T]),n.useEffect((()=>{if(null!==k&&void 0!==k&&k.history)if(x)f((()=>null===k||void 0===k?void 0:k.history)),L(!1);else{const e=[...v,...null===k||void 0===k?void 0:k.history],t=[...new Set(e.map(JSON.stringify))].map(JSON.parse);f(t),L(!1)}10===(null===k||void 0===k?void 0:k.history.length)?b(!0):b(!1)}),[null===k||void 0===k?void 0:k.history]);const D=(0,n.useCallback)((0,p.debounce)((e=>g(e)),500),[]);return(0,u.jsx)("div",{className:o.Z.incomeContainer,children:(0,u.jsxs)("div",{className:o.Z.income,style:{display:"flex",gap:"2%"},children:[(0,u.jsxs)("div",{className:o.Z.incomeLeft,style:{width:C?"50%":"100%"},children:[(0,u.jsx)("div",{className:o.Z.searchContainerr,children:(0,u.jsxs)("div",{className:o.Z.searchContainer,children:[(0,u.jsx)("img",{alt:"",src:"/images/search-dept-icon.svg"}),(0,u.jsx)("input",{type:"text",placeholder:i("search"),onChange:e=>{D(e.target.value)}})]})}),(0,u.jsxs)("div",{className:o.Z.itemsContainer,children:[null===v||void 0===v?void 0:v.map(((e,t)=>(null===v||void 0===v?void 0:v.length)===t+1?(0,u.jsx)("div",{ref:j,children:(0,u.jsx)(m,{history:e,setDetailView:F,setOnClickValue:I})},t):(0,u.jsx)(m,{history:e,setDetailView:F,setOnClickValue:I},t))),R&&(0,u.jsx)(h.Z,{}),!R&&!v.length&&(0,u.jsx)(y.Z,{customStyleContainer:{marginTop:"9rem"},title:"No search found."})]})]}),C&&(0,u.jsx)("div",{className:o.Z.incomeRight,children:(0,u.jsx)(_,{setDetailView:F,detailview:C,onClickValue:w})})]})})};var x=i(62732),g=i(29017),j=i(69721),N=i(98734),T=i(37782),b=i(16871),S=i(43504);const Z=e=>{var t,s,d,a,r,c,_,m,p,h,y,f,Z,C,F,w,I,R,L,k,H,A,D,M;let{history:z,insId:E}=e;const{t:Y}=(0,l.$G)(),O=(0,b.UO)(),[P,U]=(0,n.useState)(""),[W,V]=(0,n.useState)(!1),[G,J]=(0,n.useState)(""),[q,B]=(0,n.useState)(""),[$,K]=(0,n.useState)(""),{getFeeReceiptDetail:X,getFeeReceiptDetailRefetch:Q}=(0,g.$d)({rid:P,skip:!P});(0,n.useEffect)((()=>{P&&Q()}),[P,Q]),(0,n.useEffect)((()=>{null!==X&&void 0!==X&&X.receipt&&null!==X&&void 0!==X&&X.all_remain&&J(X)}),[X]),(0,n.useEffect)((()=>{if(G){var e;const t=new Worker(new URL(i.p+i.u(4647),i.b));if("Hostel Application"===(null===G||void 0===G||null===(e=G.all_remain)||void 0===e?void 0:e.remaining_flow)){const{institute:e,studentInfo:i,paymentReceiptInfo:n}=(0,T.sp)(null===G||void 0===G?void 0:G.all_remain,null===G||void 0===G?void 0:G.receipt);t.postMessage({institute:e,studentInfo:i,paymentReceiptInfo:n,printReceiptType:"Refunded"===(null===n||void 0===n?void 0:n.transactonRefund)?"HOSTEL_REFUND":"HOSTEL"})}else{const{institute:e,studentInfo:i,paymentReceiptInfo:n}=(0,T.Hs)(null===G||void 0===G?void 0:G.all_remain,null===G||void 0===G?void 0:G.receipt);t.postMessage({institute:e,studentInfo:i,paymentReceiptInfo:n,printReceiptType:"Refunded"===(null===n||void 0===n?void 0:n.transactonRefund)?"ADMISSION_REFUND":"ADMISSION"})}t.onmessage=e=>{e&&(window.open(e.data,"_blank"),V((e=>!e)),J(""),t.terminate())}}}),[G]);const{internalFeeReceipt:ee,internalFeeReceiptRefetch:te}=(0,g.H0)({rid:q,skip:!q});(0,n.useEffect)((()=>{q&&te()}),[q,te]);(0,n.useEffect)((()=>{null!==ee&&void 0!==ee&&ee.receipt&&null!==ee&&void 0!==ee&&ee.one_account&&K(ee)}),[ee]),(0,n.useEffect)((()=>{if($){var e,t,i,n,o,l,s,d;V((e=>!e));let a=null===$||void 0===$?void 0:$.one_account,r=null===$||void 0===$?void 0:$.receipt;const c=null!==r&&void 0!==r&&null!==(e=r.finance)&&void 0!==e&&null!==(t=e.institute)&&void 0!==t&&t.insProfilePhoto?"".concat(j.Yz,"/").concat(null===r||void 0===r||null===(i=r.finance)||void 0===i||null===(n=i.institute)||void 0===n?void 0:n.insProfilePhoto):"/images/certificate/logodemo.jpg",v=null!==r&&void 0!==r&&null!==(o=r.finance)&&void 0!==o&&null!==(l=o.institute)&&void 0!==l&&l.affliatedLogo?"".concat(j.Yz,"/").concat(null===r||void 0===r||null===(s=r.finance)||void 0===s||null===(d=s.institute)||void 0===d?void 0:d.affliatedLogo):"/images/certificate/logodemo.jpg";a&&r&&((0,x.Z)(a,r,c,v),V(!1)),K(""),window.location.reload()}}),[$]);return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)("div",{className:o.Z.sidebarheader,style:{gap:"1%"},title:"Income"===(null===z||void 0===z?void 0:z.payment_module_type)?"":"View Receipt",children:[(0,u.jsxs)("div",{className:o.Z.history_image_container,style:{width:"50%"},children:[null!==z&&void 0!==z&&null!==(t=z.payment_student)&&void 0!==t&&t.studentProfilePhoto?(0,u.jsx)(S.rU,{to:"/q/".concat(O.username,"/student/profile"),state:{sid:null===z||void 0===z||null===(s=z.payment_student)||void 0===s?void 0:s._id,viewAs:"FINANCE_MANAGER",instituteId:E},children:(0,u.jsx)("img",{src:"".concat(j.yI,"/").concat(null===z||void 0===z||null===(d=z.payment_student)||void 0===d?void 0:d.studentProfilePhoto),alt:"qr code",style:{width:"60px",height:"60px",borderRadius:"12px"}})}):null,(0,u.jsxs)("div",{className:o.Z.text,children:[(0,u.jsx)("p",{className:o.Z.rcv,children:Y("recived_from")}),(0,u.jsx)("h6",{children:null!==z&&void 0!==z&&z.payment_student?"".concat(null===z||void 0===z||null===(a=z.payment_student)||void 0===a?void 0:a.studentFirstName," ").concat(null===z||void 0===z||null===(r=z.payment_student)||void 0===r?void 0:r.studentMiddleName," ").concat(null===z||void 0===z||null===(c=z.payment_student)||void 0===c?void 0:c.studentLastName):null!==(_=null===z||void 0===z||null===(m=z.payment_by_end_user_id)||void 0===m?void 0:m.userLegalName)&&void 0!==_?_:null===z||void 0===z?void 0:z.payment_by_end_user_id_name}),(0,u.jsxs)("p",{className:o.Z.rcv,children:[Y("gr_number")," ",null!==(p=null===z||void 0===z||null===(h=z.payment_student)||void 0===h?void 0:h.studentGRNO)&&void 0!==p?p:""]}),(0,u.jsx)("p",{className:o.Z.rcv,children:null!==(y=null===z||void 0===z||null===(f=z.payment_student)||void 0===f||null===(Z=f.fee_structure)||void 0===Z?void 0:Z.unique_structure_name)&&void 0!==y?y:""})]})]}),(0,u.jsxs)("div",{className:o.Z.text,style:{width:"27%"},children:[(0,u.jsx)("p",{className:o.Z.rcv,style:{width:"100%"},children:Y("transaction_id")}),(0,u.jsx)("h6",{style:{width:"100%",wordWrap:"break-word"},children:null!==z&&void 0!==z&&z.razorpay_payment_id?null===z||void 0===z?void 0:z.razorpay_payment_id:null!==z&&void 0!==z&&null!==(C=z.fee_receipt)&&void 0!==C&&C.fee_utr_reference?null===z||void 0===z||null===(F=z.fee_receipt)||void 0===F?void 0:F.fee_utr_reference:"N/A"}),(0,u.jsxs)("p",{className:o.Z.rcv,style:{width:"100%"},children:[v()(null===z||void 0===z?void 0:z.created_at).format("DD MMM yyyy"),", ",v()(null===z||void 0===z?void 0:z.created_at).format("LT")]})]}),(0,u.jsxs)("div",{className:o.Z.text,style:{width:"20%"},children:[(0,u.jsxs)("p",{className:o.Z.rcv,style:{width:"100%",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[Y("invoice_no")," ",null!==(w=null!==(I=null===z||void 0===z||null===(R=z.fee_receipt)||void 0===R?void 0:R.invoice_count)&&void 0!==I?I:null===z||void 0===z?void 0:z.payment_invoice_number)&&void 0!==w?w:"N/A",(0,u.jsx)("img",{src:"/images/member_tab/admission/admission-receipt-download.svg",onClick:()=>{var e,t,i;"Admission"===(null===z||void 0===z?void 0:z.payment_module_type)||"Admission Fees"===(null===z||void 0===z?void 0:z.payment_module_type)||"Hostel"===(null===z||void 0===z?void 0:z.payment_module_type)||"Hostel Fees"===(null===z||void 0===z?void 0:z.payment_module_type)?(i=null===z||void 0===z||null===(e=z.fee_receipt)||void 0===e?void 0:e._id)&&(V((e=>!e)),U(i),P===i&&J(X)):"Income"===(null===z||void 0===z?void 0:z.payment_module_type)||(e=>{e&&(V((e=>!e)),B(e))})(null===z||void 0===z||null===(t=z.fee_receipt)||void 0===t?void 0:t._id)},alt:"receipt icon",title:"Download Fees Receipt"})]}),(0,u.jsxs)("h6",{style:{width:"100%"},children:["Rs. ",null===z||void 0===z?void 0:z.payment_amount]}),(0,u.jsx)("p",{className:o.Z.rcv,style:{width:"100%"},children:"offline"===(null===(L=z.payment_mode)||void 0===L?void 0:L.toLowerCase())?null!==z&&void 0!==z&&null!==(k=z.fee_receipt)&&void 0!==k&&k.fee_payment_mode?"".concat(null===z||void 0===z||null===(H=z.fee_receipt)||void 0===H?void 0:H.fee_payment_mode):"Offline - No Receipt":"online"===(null===(A=z.payment_mode)||void 0===A?void 0:A.toLowerCase())?null!==z&&void 0!==z&&null!==(D=z.fee_receipt)&&void 0!==D&&D.fee_payment_mode?"".concat(null===z||void 0===z||null===(M=z.fee_receipt)||void 0===M?void 0:M.fee_payment_mode):"Online - No Receipt":null===z||void 0===z?void 0:z.payment_mode})]})]}),W&&(0,u.jsx)(N.Z,{})]})},C=e=>{let{insId:t}=e;const i=(0,d.v9)((e=>e.financeChange)),[l,c]=n.useState([]),[v,_]=(0,n.useState)(""),[m,f]=(0,s.YD)({skip:v}),[x,g]=n.useState(!0),[j,N]=n.useState(1),[T,b]=(0,n.useState)(!0),{financeAllHistory:S,financeAllHistoryRefetch:C}=(0,a.j2)({data:{uid:null!==i&&void 0!==i&&i.insId?null===i||void 0===i?void 0:i.insId:t,page:j,limit:10,filter:"",search:v},skip:null!==i&&void 0!==i&&i.insId?!(null!==i&&void 0!==i&&i.insId):!t}),{scrollToTop:F}=(0,r.u)();(0,n.useEffect)((()=>{F()}),[]),n.useEffect((()=>{(null!==i&&void 0!==i&&i.insId||t)&&(b(!0),C())}),[null===i||void 0===i?void 0:i.insId,t,j,v,C]),n.useEffect((()=>{f&&x&&N((e=>e+1))}),[f,x]),n.useEffect((()=>{null!==S&&void 0!==S&&S.history&&(v?(c((()=>null===S||void 0===S?void 0:S.history)),b(!1)):(c((e=>[...new Set([...e,...null===S||void 0===S?void 0:S.history].map(JSON.stringify))].map(JSON.parse))),b(!1))),10===(null===S||void 0===S?void 0:S.history.length)?g(!0):g(!1)}),[null===S||void 0===S?void 0:S.history]);const w=(0,n.useCallback)((0,p.debounce)((e=>_(e)),500),[]);return(0,u.jsxs)("div",{className:o.Z.incomeContainer,children:[(0,u.jsx)("div",{className:o.Z.searchContainerr,children:(0,u.jsxs)("div",{className:o.Z.searchContainer,children:[(0,u.jsx)("img",{alt:"",src:"/images/search-dept-icon.svg"}),(0,u.jsx)("input",{type:"text",placeholder:"Search",onChange:e=>{w(e.target.value)}})]})}),(0,u.jsxs)("div",{className:o.Z.itemsContainer,children:[null===l||void 0===l?void 0:l.map(((e,i)=>(null===l||void 0===l?void 0:l.length)===i+1?(0,u.jsx)("div",{ref:m,children:(0,u.jsx)(Z,{history:e,insId:t})},i):(0,u.jsx)(Z,{history:e,insId:t},i))),T&&(0,u.jsx)(h.Z,{}),!T&&!l.length&&(0,u.jsx)(y.Z,{customStyleContainer:{marginTop:"9rem"},title:"No search found."})]})]})};var F=i(98094),w=i(47167),I=i(14304);const R={dueList:"Repayment_dueList__VxmM4",settle_card:"Repayment_settle_card__2OblX",settle_card_container:"Repayment_settle_card_container__HtUKu",settle_card_text:"Repayment_settle_card_text__y9C6+",settle_paragraph:"Repayment_settle_paragraph__GU5Cp"};function L(e){var t,i,n,o,s,d,a;let{repay:r}=e;const{t:c}=(0,l.$G)();return(0,u.jsxs)("div",{className:R.settle_card,children:[(0,u.jsxs)("div",{className:R.settle_card_container,children:[(0,u.jsx)("img",{src:"/images/career/newLogo.svg",alt:"logo",style:{width:"60px",height:"60px",borderRadius:"12px"}}),(0,u.jsxs)("div",{className:R.settle_card_text,children:[(0,u.jsxs)("h6",{children:[c("settlement_date")," "," : ",null!==(t=null===r||void 0===r?void 0:r.settlement_date)&&void 0!==t?t:""]}),(0,u.jsxs)("p",{className:R.settle_paragraph,children:[c("message")," "," : "," ",null!==(i=null===r||void 0===r?void 0:r.message)&&void 0!==i?i:""]}),(0,u.jsxs)("p",{className:R.settle_paragraph,children:[c("transition_id")," : "," ",null!==(n=null===r||void 0===r?void 0:r.txnId)&&void 0!==n?n:""]}),(0,u.jsxs)("p",{className:R.settle_paragraph,children:[c("bank_name")," : ",null!==(o=null===r||void 0===r||null===(s=r.bank_account)||void 0===s||null===(d=s[0])||void 0===d?void 0:d.finance_bank_account_name)&&void 0!==o?o:""]})]})]}),(0,u.jsxs)("div",{className:R.settle_card_text,style:{alignItems:"flex-end"},children:[null!==r&&void 0!==r&&r.excel_attach?(0,u.jsx)("a",{title:"Download File",href:"".concat(j.yI,"/").concat(null===r||void 0===r?void 0:r.excel_attach),target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"none"},children:(0,u.jsx)("img",{src:"/images/member_tab/subject/subject-excel-icon.svg",alt:"excel icon",style:{cursor:"pointer",height:"1.5rem"}})}):null,(0,u.jsxs)("h6",{children:["Rs. ",null!==(a=null===r||void 0===r?void 0:r.repayAmount)&&void 0!==a?a:""]}),(0,u.jsx)("p",{className:R.settle_paragraph,children:"".concat(v()(null===r||void 0===r?void 0:r.createdAt).format("DD MMM, yyyy"),", ").concat(v()(null===r||void 0===r?void 0:r.createdAt).format("LT"))})]})]})}const k=function(e){let{insId:t}=e;const i=(0,d.v9)((e=>e.financeChange)),[o,l]=(0,s.YD)(),[a,c]=(0,n.useState)(1),[v,_]=(0,n.useState)(!0),[m,p]=(0,n.useState)(!0),[f,x]=(0,n.useState)([]),{data:g,refetch:j}=(0,I.K0)({info:{page:a,limit:10,fid:null!==i&&void 0!==i&&i.insId?null===i||void 0===i?void 0:i.insId:t},skip:null!==i&&void 0!==i&&i.insId?!(null!==i&&void 0!==i&&i.insId):!t});(0,n.useEffect)((()=>{(t||null!==i&&void 0!==i&&i.insId)&&(p(!0),j())}),[t,null===i||void 0===i?void 0:i.insId,a,j]),(0,n.useEffect)((()=>{l&&v&&c((e=>e+1))}),[l,v]);const{scrollToTop:N}=(0,r.u)();return(0,n.useEffect)((()=>{N()}),[]),(0,n.useEffect)((()=>{var e,t;null!==g&&void 0!==g&&g.repay?(x((e=>{var t,i;return null===(t=[...new Set(null===(i=[...e,...null===g||void 0===g?void 0:g.repay])||void 0===i?void 0:i.map(JSON.stringify))])||void 0===t?void 0:t.map(JSON.parse)})),p(!1)):0===(null===g||void 0===g||null===(e=g.repay)||void 0===e?void 0:e.length)&&p(!1),10===(null===g||void 0===g||null===(t=g.repay)||void 0===t?void 0:t.length)?_(!0):_(!1)}),[null===g||void 0===g?void 0:g.repay]),(0,u.jsxs)("div",{className:R.dueList,children:[null===f||void 0===f?void 0:f.map(((e,t)=>(null===f||void 0===f?void 0:f.length)===t+1?(0,u.jsx)("div",{ref:o,children:(0,u.jsx)(L,{repay:e})},null===e||void 0===e?void 0:e._id):(0,u.jsx)(L,{repay:e},null===e||void 0===e?void 0:e._id))),m&&(0,u.jsx)(h.Z,{}),!m&&!f.length&&(0,u.jsx)(y.Z,{customStyleContainer:{marginTop:"9rem"},title:"No due payment."})]})};const H=function(e){let{insId:t}=e;const{t:i}=(0,l.$G)(),s=(0,b.s0)(),[d,a]=(0,n.useState)(0),r=[{name:i("payment_receipts"),id:0},{name:i("payments"),id:1},{name:i("finance_settlement"),id:2}];return(0,u.jsxs)("div",{className:o.Z.history,children:[(0,u.jsxs)("section",{className:o.Z.moderator_container_title,children:[(0,u.jsx)("img",{src:"/images/arrow-left-fees-icon.svg",onClick:()=>{s(-1)},alt:"go to previous tab",title:"Go Back",style:{cursor:"pointer"}}),(0,u.jsx)("div",{className:o.Z.moderator_container_title_filter,children:(0,u.jsx)("h6",{children:i("finance_transaction_hisotry")})})]}),(0,u.jsx)(F.Z,{customStyle:{width:"100%"}}),(0,u.jsx)(w.Z,{tabList:r,activeIndexTab:d,setActiveIndexTab:e=>{a(e)},showAs:!1,customStyleTab:{width:"33.3%"}}),(0,u.jsx)(F.Z,{customStyle:{width:"100%",marginBottom:"0.5rem"}}),0===d&&(0,u.jsx)(C,{insId:t}),1===d&&(0,u.jsx)(f,{insId:t}),2===d&&(0,u.jsx)(k,{insId:t})]})}},62732:(e,t,i)=>{i.d(t,{Z:()=>c});var n=i(35125),o=i(72426),l=i.n(o),s=i(62906),d=i.n(s),a=new n.ZP({format:[270,210]}),r=a.internal.pageSize.getWidth();const c=function(e,t,i,n){var o,s,c,v,u,_,m,p,h,y,f,x,g,j,N,T,b;let S=arguments.length>4&&void 0!==arguments[4]&&arguments[4],Z=null===t||void 0===t||null===(o=t.finance)||void 0===o?void 0:o.institute,C=null===t||void 0===t||null===(s=t.finance)||void 0===s?void 0:s.financeHead,F=null===t||void 0===t?void 0:t.student,w=null===t||void 0===t?void 0:t.internal_fees,I=null===t||void 0===t?void 0:t.order_history;a.addImage(i,"JPEG",9,3,25,25),a.addImage(n,"JPEG",r-34,2.4,25,25),a.setLineWidth(8),a.setDrawColor(255,255,255),a.circle(21.4,15,16),a.setLineWidth(0),a.setLineWidth(8),a.setDrawColor(255,255,255),a.circle(r-21.4,15,16),a.setLineWidth(0);const R=a.splitTextToSize(null===Z||void 0===Z?void 0:Z.insName,146);if(a.setFont(void 0,"normal"),R.length>1){let e=10;a.setFont("700"),a.setTextColor(18,18,18),a.setFontSize(16),a.text(107,e,R,"center"),e=R.length+145}else{let e=10;a.setFont("700"),a.setTextColor(18,18,18),a.setFontSize(18),a.text(107,e,R,"center"),e=R.length+145}a.setFont("Arial","normal","400"),a.setTextColor(18,18,18),a.setFontSize(10),a.text(r/2,R.length>1?23:19,null===Z||void 0===Z?void 0:Z.insAddress,"center"),a.setFont("WorkSans"),a.setTextColor(18,18,18),a.setFontSize(10),a.text(r/2,R.length>1?29:25,"Mob No : ".concat(null===Z||void 0===Z?void 0:Z.insPhoneNumber," , Mail: ").concat(null===Z||void 0===Z?void 0:Z.insEmail),"center"),a.setFont("WorkSans"),a.setTextColor(0,0,0),a.setFontSize(18),a.text(r/2,37,"Fee Receipt","center"),a.setLineWidth(.7),a.setDrawColor(18,18,18),a.line(0,46,r,46),a.setTextColor(0,0,0),a.setFont(void 0,"bold"),a.setFontSize(10),a.text(9,54,"Invoice No :"),a.setFont(void 0,"normal"),a.setTextColor(0,0,0),a.setFontSize(10),a.text(32,54,null===t||void 0===t?void 0:t.invoice_count),a.setTextColor(0,0,0),a.setFont(void 0,"bold"),a.setFontSize(10),a.text(r-32,54,"Dated:",{align:"right"}),a.setFont(void 0,"normal"),a.setTextColor(0,0,0),a.setFontSize(10),a.text(r-12,54,l()(null===t||void 0===t?void 0:t.created_at).format("DD-MMM-YYYY"),{align:"right"}),a.setTextColor(0,0,0),a.setFont(void 0,"bold"),a.setFontSize(10),a.text(9,61,"Purpose:"),a.setFont(void 0,"normal"),a.setTextColor(0,0,0),a.setFontSize(10),a.text(32,61,"".concat(null!==(c=null===w||void 0===w?void 0:w.internal_fee_reason)&&void 0!==c?c:"N/A")),a.setTextColor(0,0,0),a.setFont(void 0,"bold"),a.setFontSize(10),a.text(9,68,"Amount: "),a.setFont(void 0,"normal"),a.setTextColor(0,0,0),a.setFontSize(10),a.text(32,68,"Rs. ".concat(null===t||void 0===t?void 0:t.fee_payment_amount)),a.setTextColor(0,0,0),a.setFont(void 0,"bold"),a.setFontSize(11),a.text(9,97," ".concat(S?"Received Through: ":"Paid Through: ")),a.setFont(void 0,"normal"),a.text(44,97,"".concat(null===e||void 0===e?void 0:e.finance_bank_name,", ").concat(null===e||void 0===e?void 0:e.finance_bank_account_name,", A/c No:  ").concat(null===e||void 0===e?void 0:e.finance_bank_account_number)),a.setTextColor(0,0,0),a.setFont(void 0,"bold"),a.text(9,107," On Account of: ");const L="Being money ".concat(S?"received":"paid"," by ").concat(null===t||void 0===t?void 0:t.fee_payment_mode,", Transaction ID: ").concat(null!==(v=null===I||void 0===I?void 0:I.razorpay_order_id)&&void 0!==v?v:"N/A"," ,  Dated: ").concat(l()(null===t||void 0===t?void 0:t.created_at).format("DD-MMM-YYYY"),"  for Rs. ").concat(null===t||void 0===t?void 0:t.fee_payment_amount,".").concat(S?"From":"To"," ","".concat(null!==(u=null===F||void 0===F?void 0:F.studentFirstName)&&void 0!==u?u:""," ").concat(null!==(_=null===F||void 0===F?void 0:F.studentMiddleName)&&void 0!==_?_:""," ").concat(null!==(m=null===F||void 0===F?void 0:F.studentLastName)&&void 0!==m?m:""," "),", towards ").concat(null!==(p=null===w||void 0===w?void 0:w.internal_fee_reason)&&void 0!==p?p:"N/A","."),k=a.splitTextToSize(L,r-20);if(k.length>1){let e=113,t=10;a.setFont(void 0,"normal"),a.setFontSize(11),a.setTextColor(18,18,18),a.text(t,e,k,"left"),e=k.length+151}else{let e=113,t=10;a.setFontSize(11),a.setFont(void 0,"normal"),a.setTextColor(18,18,18),a.setFontSize(12),a.text(t,e,k,"left"),e=k.length+151}var H,A,D,M;(a.setTextColor(0,0,0),a.setFont(void 0,"bold"),a.setFontSize(11),a.text(9,131,"Bank Transaction Details: "),a.setFont(void 0,"normal"),a.text(9,138,"Payment Mode:  ".concat(null===t||void 0===t?void 0:t.fee_payment_mode)),null!==I&&void 0!==I&&I.razorpay_order_id)?a.text(9,144,"Transaction ID: ".concat(null!==(H=null===I||void 0===I?void 0:I.razorpay_order_id)&&void 0!==H?H:"N/A")):(a.text(9,144,"Bank Name: ".concat(null!==(A=null===e||void 0===e?void 0:e.fee_bank_name)&&void 0!==A?A:"N/A")),a.text(9,150,"Bank Holder Name: ".concat(null!==(D=null===e||void 0===e?void 0:e.finance_bank_account_name)&&void 0!==D?D:"N/A")),a.text(9,156,"UTR / Ref No.: ".concat(null!==(M=null===e||void 0===e?void 0:e.fee_utr_reference)&&void 0!==M?M:"N/A")),a.text(9,162,"Date: ".concat(l()(null===t||void 0===t?void 0:t.created_at).format("DD-MMM-YYYY"))),a.text(9,168,"Amount: ".concat(null===t||void 0===t?void 0:t.fee_payment_amount)),a.text(9,174,"Amount in Words: ".concat((d().toWords(t.fee_payment_amount.toString()).match(/[a-zA-Z0-9]+/g)||[]).map((e=>"".concat(e.charAt(0).toUpperCase()).concat(e.slice(1)))).join(" ")," only.")));a.setFontSize(9),a.text(40,240,"".concat(C.staffFirstName," ").concat(null!==(h=C.staffMiddleName)&&void 0!==h?h:""," ").concat(C.staffLastName),{align:"center"}),a.setFont(void 0,"bold"),a.setFontSize(10),a.text(40,245,"Finance Manager",{align:"center"}),a.setFont(void 0,"normal"),a.setFontSize(9),a.text(153,240,"".concat(null!==(y=null===Z||void 0===Z||null===(f=Z.displayPersonList)||void 0===f||null===(x=f[0])||void 0===x||null===(g=x.displayUser)||void 0===g?void 0:g.userLegalName)&&void 0!==y?y:"N/A"),{align:"center"}),a.setFont(void 0,"bold"),a.setFontSize(10),a.text(153,245,"".concat(null!==(j=null===Z||void 0===Z||null===(N=Z.displayPersonList)||void 0===N||null===(T=N[0])||void 0===T?void 0:T.displayTitle)&&void 0!==j?j:"N/A"),{align:"center"}),a.setTextColor(0,0,255),a.setFontSize(7),a.text(r-20,243,"Online Automated",null,50),a.text(r-18,244,"Generated fee receipt",null,50),a.text(r-14,246,"Through Qviple",null,50),a.setLineWidth(.2),a.setDrawColor(18,18,18),a.line(0,251,r,251),a.setTextColor(18,18,18),a.setFontSize(8),a.setFont(void 0,"normal"),a.text(r/2,259,"Note : No one except one who is making this certificate should interfere with any details of this invoice, othewise students will be expelled and legal action will be taken.","center"),window.open(a.output("bloburl",{filename:"".concat(null===F||void 0===F?void 0:F.studentFirstName," ").concat(null!==(b=null===F||void 0===F?void 0:F.studentMiddleName)&&void 0!==b?b:""," ").concat(null===F||void 0===F?void 0:F.studentLastName," -Internal Fee Receipt.pdf")}),"_blank")}},45639:(e,t,i)=>{i.d(t,{Z:()=>n});const n={universal_container:"UniversalTab_universal_container__uxTOR",universal_container_item:"UniversalTab_universal_container_item__M0pS7",universal_container_item_active:"UniversalTab_universal_container_item_active__3u3Wt"}},33965:(e,t,i)=>{i.d(t,{Z:()=>n});const n={history:"History_history__zT0JY",moderator_container_title:"History_moderator_container_title__zlgYe",moderator_container_title_filter:"History_moderator_container_title_filter__nIFhU",dueListTop:"History_dueListTop__yIMKg",dueListTopleft:"History_dueListTopleft__F5lTL",dueListTopbuttons:"History_dueListTopbuttons__qD9fX",dueListTopbtn:"History_dueListTopbtn__-wm1S",dueListTopbtnActive:"History_dueListTopbtnActive__y10iy",incomeContainer:"History_incomeContainer__kbyvR",income:"History_income__p0sbk",incomeLeft:"History_incomeLeft__xc+1W",incomeRight:"History_incomeRight__0WXJK",incomeLeftt:"History_incomeLeftt__TXgr0",itemsContainer:"History_itemsContainer__Y5tqY",rcv:"History_rcv__i+r3c",sidebarheader:"History_sidebarheader__kMTZv",text:"History_text__y3bAE",btn:"History_btn__b-XxZ",incomeRightt:"History_incomeRightt__oi53y",incomeTop:"History_incomeTop__7YSzU",right:"History_right__iZ36A",rightHead:"History_rightHead__0VEiK",rightBody:"History_rightBody__p-a0H",detail:"History_detail__r12VC",detailTop:"History_detailTop__zShgR",detailTopLeft:"History_detailTopLeft__AcJSZ",detailTopMid:"History_detailTopMid__A5imZ",detailTopRight:"History_detailTopRight__8-HlA",detailContent:"History_detailContent__lYofn",imagediv:"History_imagediv__z3cqD",backh:"History_backh__teYCR",searchContainer:"History_searchContainer__5KBm-",noData:"History_noData__0-f5b",history_image_container:"History_history_image_container__cfLZp"}}}]);
//# sourceMappingURL=18455.2c5fa0ae.chunk.js.map