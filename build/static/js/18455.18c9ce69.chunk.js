/*! For license information please see 18455.18c9ce69.chunk.js.LICENSE.txt */
(self.webpackChunkmithkal_qviple=self.webpackChunkmithkal_qviple||[]).push([[18455],{34219:(e,t,i)=>{"use strict";i.d(t,{Z:()=>l});i(72791);var n=i(11575),o=i(80184);const l=e=>{let{customStyleContainer:t,title:i,subtitle:l,costomTextTitleStyle:s,costomTextSubtitleStyle:a}=e;return(0,o.jsxs)("div",{className:n.Z.empty_container,style:t,children:[i&&(0,o.jsx)("h6",{style:s,children:i}),l&&(0,o.jsx)("p",{style:a,children:l})]})}},11105:(e,t,i)=>{"use strict";i.d(t,{Z:()=>l});i(72791);var n=i(11575),o=i(80184);const l=e=>{let{status:t}=e;return(0,o.jsx)("div",{className:n.Z.loaderGif,children:(0,o.jsx)("img",{src:"white"===t?"/images/loader/loader-bg-white.gif":"/images/loader/loader.gif",alt:"for load an items"})})}},47167:(e,t,i)=>{"use strict";i.d(t,{Z:()=>d});i(72791);var n=i(16871),o=i(43504),l=i(23769),s=i(45639),a=i(80184);const d=e=>{let{tabList:t,activeIndexTab:i,setActiveIndexTab:d,customStyleTab:r,carryParentState:c,showAs:v,customStyleLink:u}=e;const _=(0,n.UO)();return(0,a.jsx)("div",{className:s.Z.universal_container,children:v?null===t||void 0===t?void 0:t.map(((e,t)=>"disabled"===(null===e||void 0===e?void 0:e.is_active)?(0,a.jsx)("div",{className:i===(null===e||void 0===e?void 0:e.id)?"".concat(s.Z.universal_container_item," ").concat(s.Z.universal_container_item_active):s.Z.universal_container_item,style:{...u,opacity:"0.5"},children:(0,a.jsx)(l.Z,{children:null===e||void 0===e?void 0:e.name})},t):(0,a.jsx)(o.rU,{to:"/q/".concat(_.username,"/").concat(null===e||void 0===e?void 0:e.url),state:{...c},style:{...u},children:(0,a.jsx)("div",{className:i===(null===e||void 0===e?void 0:e.id)?"".concat(s.Z.universal_container_item," ").concat(s.Z.universal_container_item_active):s.Z.universal_container_item,style:{...r},children:(0,a.jsx)(l.Z,{children:null===e||void 0===e?void 0:e.name})})},t))):null===t||void 0===t?void 0:t.map(((e,t)=>(0,a.jsx)("div",{className:i===(null===e||void 0===e?void 0:e.id)?"".concat(s.Z.universal_container_item," ").concat(s.Z.universal_container_item_active):s.Z.universal_container_item,onClick:()=>d(null===e||void 0===e?void 0:e.id),style:{...r},children:(0,a.jsx)(l.Z,{children:null===e||void 0===e?void 0:e.name})},t)))})}},23769:(e,t,i)=>{"use strict";i.d(t,{Z:()=>l});var n=i(72791),o=i(80184);const l=function(e){let{children:t,onclick:i}=e;const[l,s]=(0,n.useState)(!1),[a,d]=(0,n.useState)({x:-1,y:-1});return(0,n.useEffect)((()=>{-1!==a.x&&-1!==a.y?(s(!0),setTimeout((()=>s(!1)),1e3)):s(!1)}),[a]),(0,n.useEffect)((()=>{l||d({x:-1,y:-1})}),[l]),(0,o.jsxs)("div",{className:"ripple_btn",onClick:e=>{d({x:e.clientX-e.target.offsetLeft,y:e.clientY-e.target.offsetTop}),i&&i(e)},children:[l?(0,o.jsx)("span",{className:"ripple"}):"",(0,o.jsx)("span",{className:"content",children:t})]})}},18455:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>M});var n=i(72791),o=i(33965),l=i(39230),s=i(23441),a=i(95048),d=i(87932),r=i(65543),c=i(72426),v=i.n(c),u=i(80184);const _=function(e){var t,i;let{detailview:n,setDetailView:s,onClickValue:a}=e;const{t:d}=(0,l.$G)();return(0,u.jsx)(u.Fragment,{children:(0,u.jsx)("div",{className:o.Z.incomeRightt,children:n?(0,u.jsxs)("div",{className:o.Z.detail,children:[(0,u.jsxs)("div",{className:o.Z.detailTop,children:[(0,u.jsx)("div",{className:o.Z.detailTopLeft,children:(0,u.jsx)("h6",{onClick:()=>s(!1),children:d("back")})}),(0,u.jsx)("div",{className:o.Z.detailTopMid,children:(0,u.jsx)("h6",{children:null!==(t=null===a||void 0===a||null===(i=a.payment_by_end_user_id)||void 0===i?void 0:i.userLegalName)&&void 0!==t?t:null===a||void 0===a?void 0:a.payment_by_end_user_id_name})}),(0,u.jsxs)("div",{className:o.Z.detailTopRight,children:["Rs. ",null===a||void 0===a?void 0:a.payment_amount]})]}),(0,u.jsxs)("div",{className:o.Z.detailContent,children:[(0,u.jsx)("p",{children:d("transaction_mode")}),(0,u.jsx)("h6",{children:null===a||void 0===a?void 0:a.payment_mode})]}),(0,u.jsxs)("div",{className:o.Z.detailContent,children:[(0,u.jsx)("p",{children:d("day_date")}),(0,u.jsxs)("h6",{children:[v()(null===a||void 0===a?void 0:a.created_at).format("DD MMM yyyy")," ",v()(null===a||void 0===a?void 0:a.created_at).format("LT")]})]})]}):""})})},m=e=>{var t,i,n,s,a,d,r,c;let{history:_,setOnClickValue:m,setDetailView:h}=e;const{t:p}=(0,l.$G)();return(0,u.jsx)(u.Fragment,{children:(0,u.jsxs)("div",{className:o.Z.sidebarheader,onClick:()=>{m(_),h(!0)},children:[(0,u.jsxs)("div",{className:o.Z.text,children:[(0,u.jsx)("p",{className:o.Z.rcv,children:p("paid_to")}),(0,u.jsx)("h6",{children:null!==(t=null===_||void 0===_||null===(i=_.payment_by_end_user_id)||void 0===i?void 0:i.userLegalName)&&void 0!==t?t:null===_||void 0===_?void 0:_.payment_by_end_user_id_name}),(0,u.jsxs)("p",{className:o.Z.rcv,children:[v()(null===_||void 0===_?void 0:_.created_at).format("DD MMM yyyy")," ",v()(null===_||void 0===_?void 0:_.created_at).format("LT")]})]}),(0,u.jsxs)("div",{className:o.Z.text,style:{marginTop:"0.9rem"},children:[(0,u.jsx)("p",{className:o.Z.rcv}),(0,u.jsxs)("h6",{children:["Rs. ",null===_||void 0===_?void 0:_.payment_amount]}),(0,u.jsx)("p",{className:o.Z.rcv,children:"offline"===(null===(n=_.payment_mode)||void 0===n?void 0:n.toLowerCase())?null!==_&&void 0!==_&&null!==(s=_.fee_receipt)&&void 0!==s&&s.fee_payment_mode?"".concat(null===_||void 0===_||null===(a=_.fee_receipt)||void 0===a?void 0:a.fee_payment_mode):"Offline - No Receipt":"online"===(null===(d=_.payment_mode)||void 0===d?void 0:d.toLowerCase())?null!==_&&void 0!==_&&null!==(r=_.fee_receipt)&&void 0!==r&&r.fee_payment_mode?"".concat(null===_||void 0===_||null===(c=_.fee_receipt)||void 0===c?void 0:c.fee_payment_mode):"Online - No Receipt":null===_||void 0===_?void 0:_.payment_mode})]})]})})};var h=i(763),p=i(11105),f=i(34219);const y=e=>{let{insId:t}=e;const{t:i}=(0,l.$G)(),c=(0,a.v9)((e=>e.financeChange)),[v,y]=n.useState([]),[x,g]=(0,n.useState)(""),[j,b]=(0,s.YD)({skip:x}),[N,T]=n.useState(!0),[w,S]=n.useState(1),[Z,C]=n.useState(!1),[F,I]=n.useState(""),[R,k]=(0,n.useState)(!0),{financeAllHistory:L,financeAllHistoryRefetch:M}=(0,d.j2)({data:{uid:null!==c&&void 0!==c&&c.insId?null===c||void 0===c?void 0:c.insId:t,page:w,limit:10,filter:"Expense",search:x},skip:null!==c&&void 0!==c&&c.insId?!(null!==c&&void 0!==c&&c.insId):!t}),{scrollToTop:A}=(0,r.u)();n.useEffect((()=>{A()}),[]),n.useEffect((()=>{(null!==c&&void 0!==c&&c.insId||t)&&M()}),[null===c||void 0===c?void 0:c.insId,t,w,x,M]),n.useEffect((()=>{b&&N&&S((e=>e+1))}),[b,N]),n.useEffect((()=>{if(null!==L&&void 0!==L&&L.history)if(x)y((()=>null===L||void 0===L?void 0:L.history)),k(!1);else{const e=[...v,...null===L||void 0===L?void 0:L.history],t=[...new Set(e.map(JSON.stringify))].map(JSON.parse);y(t),k(!1)}10===(null===L||void 0===L?void 0:L.history.length)?T(!0):T(!1)}),[null===L||void 0===L?void 0:L.history]);const H=(0,n.useCallback)((0,h.debounce)((e=>g(e)),500),[]);return(0,u.jsx)("div",{className:o.Z.incomeContainer,children:(0,u.jsxs)("div",{className:o.Z.income,style:{display:"flex",gap:"2%"},children:[(0,u.jsxs)("div",{className:o.Z.incomeLeft,style:{width:Z?"50%":"100%"},children:[(0,u.jsx)("div",{className:o.Z.searchContainerr,children:(0,u.jsxs)("div",{className:o.Z.searchContainer,children:[(0,u.jsx)("img",{alt:"",src:"/images/search-dept-icon.svg"}),(0,u.jsx)("input",{type:"text",placeholder:i("search"),onChange:e=>{H(e.target.value)}})]})}),(0,u.jsxs)("div",{className:o.Z.itemsContainer,children:[null===v||void 0===v?void 0:v.map(((e,t)=>(null===v||void 0===v?void 0:v.length)===t+1?(0,u.jsx)("div",{ref:j,children:(0,u.jsx)(m,{history:e,setDetailView:C,setOnClickValue:I})},t):(0,u.jsx)(m,{history:e,setDetailView:C,setOnClickValue:I},t))),R&&(0,u.jsx)(p.Z,{}),!R&&!v.length&&(0,u.jsx)(f.Z,{customStyleContainer:{marginTop:"9rem"},title:"No search found."})]})]}),Z&&(0,u.jsx)("div",{className:o.Z.incomeRight,children:(0,u.jsx)(_,{setDetailView:C,detailview:Z,onClickValue:F})})]})})};var x=i(62732),g=i(45145),j=i(69721),b=i(98734),N=i(37782),T=i(16871),w=i(43504);const S=e=>{var t,s,a,d,r,c,_,m,h,p,f,y,S,Z,C,F,I,R,k,L,M,A,H,z;let{history:D,insId:E}=e;const{t:O}=(0,l.$G)(),V=(0,T.UO)(),[Y,W]=(0,n.useState)(""),[P,U]=(0,n.useState)(!1),[G,$]=(0,n.useState)(""),[q,B]=(0,n.useState)(""),[J,K]=(0,n.useState)(""),{getFeeReceiptDetail:X,getFeeReceiptDetailRefetch:Q}=(0,g.$d)({rid:Y,skip:!Y});(0,n.useEffect)((()=>{Y&&Q()}),[Y,Q]),(0,n.useEffect)((()=>{null!==X&&void 0!==X&&X.receipt&&null!==X&&void 0!==X&&X.all_remain&&$(X)}),[X]),(0,n.useEffect)((()=>{if(G){var e;const t=new Worker(new URL(i.p+i.u(4647),i.b));if("Hostel Application"===(null===G||void 0===G||null===(e=G.all_remain)||void 0===e?void 0:e.remaining_flow)){const{institute:e,studentInfo:i,paymentReceiptInfo:n}=(0,N.sp)(null===G||void 0===G?void 0:G.all_remain,null===G||void 0===G?void 0:G.receipt);t.postMessage({institute:e,studentInfo:i,paymentReceiptInfo:n,printReceiptType:"Refunded"===(null===n||void 0===n?void 0:n.transactonRefund)?"HOSTEL_REFUND":"HOSTEL"})}else{const{institute:e,studentInfo:i,paymentReceiptInfo:n}=(0,N.Hs)(null===G||void 0===G?void 0:G.all_remain,null===G||void 0===G?void 0:G.receipt);t.postMessage({institute:e,studentInfo:i,paymentReceiptInfo:n,printReceiptType:"Refunded"===(null===n||void 0===n?void 0:n.transactonRefund)?"ADMISSION_REFUND":"ADMISSION"})}t.onmessage=e=>{e&&(window.open(e.data,"_blank"),U((e=>!e)),$(""),t.terminate())}}}),[G]);const{internalFeeReceipt:ee,internalFeeReceiptRefetch:te}=(0,g.H0)({rid:q,skip:!q});(0,n.useEffect)((()=>{q&&te()}),[q,te]);(0,n.useEffect)((()=>{null!==ee&&void 0!==ee&&ee.receipt&&null!==ee&&void 0!==ee&&ee.one_account&&K(ee)}),[ee]),(0,n.useEffect)((()=>{if(J){var e,t,i,n,o,l,s,a;U((e=>!e));let d=null===J||void 0===J?void 0:J.one_account,r=null===J||void 0===J?void 0:J.receipt;const c=null!==r&&void 0!==r&&null!==(e=r.finance)&&void 0!==e&&null!==(t=e.institute)&&void 0!==t&&t.insProfilePhoto?"".concat(j.Yz,"/").concat(null===r||void 0===r||null===(i=r.finance)||void 0===i||null===(n=i.institute)||void 0===n?void 0:n.insProfilePhoto):"/images/certificate/logodemo.jpg",v=null!==r&&void 0!==r&&null!==(o=r.finance)&&void 0!==o&&null!==(l=o.institute)&&void 0!==l&&l.affliatedLogo?"".concat(j.Yz,"/").concat(null===r||void 0===r||null===(s=r.finance)||void 0===s||null===(a=s.institute)||void 0===a?void 0:a.affliatedLogo):"/images/certificate/logodemo.jpg";d&&r&&((0,x.Z)(d,r,c,v),U(!1)),K(""),window.location.reload()}}),[J]);return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)("div",{className:o.Z.sidebarheader,style:{gap:"1%"},title:"Income"===(null===D||void 0===D?void 0:D.payment_module_type)?"":"View Receipt",children:[(0,u.jsxs)("div",{className:o.Z.history_image_container,style:{width:"50%"},children:[null!==D&&void 0!==D&&null!==(t=D.payment_student)&&void 0!==t&&t.studentProfilePhoto?(0,u.jsx)(w.rU,{to:"/q/".concat(V.username,"/student/profile"),state:{sid:null===D||void 0===D||null===(s=D.payment_student)||void 0===s?void 0:s._id,viewAs:"FINANCE_MANAGER",instituteId:E},children:(0,u.jsx)("img",{src:"".concat(j.yI,"/").concat(null===D||void 0===D||null===(a=D.payment_student)||void 0===a?void 0:a.studentProfilePhoto),alt:"qr code",style:{width:"60px",height:"60px",borderRadius:"12px"}})}):null,(0,u.jsxs)("div",{className:o.Z.text,children:[(0,u.jsx)("p",{className:o.Z.rcv,children:O("recived_from")}),(0,u.jsx)("h6",{children:null!==D&&void 0!==D&&D.payment_student?"".concat(null===D||void 0===D||null===(d=D.payment_student)||void 0===d?void 0:d.studentFirstName," ").concat(null===D||void 0===D||null===(r=D.payment_student)||void 0===r?void 0:r.studentMiddleName," ").concat(null===D||void 0===D||null===(c=D.payment_student)||void 0===c?void 0:c.studentLastName):null!==(_=null===D||void 0===D||null===(m=D.payment_by_end_user_id)||void 0===m?void 0:m.userLegalName)&&void 0!==_?_:null===D||void 0===D?void 0:D.payment_by_end_user_id_name}),(0,u.jsxs)("p",{className:o.Z.rcv,children:[O("gr_number")," ",null!==(h=null===D||void 0===D||null===(p=D.payment_student)||void 0===p?void 0:p.studentGRNO)&&void 0!==h?h:""]}),(0,u.jsx)("p",{className:o.Z.rcv,children:null!==(f=null===D||void 0===D||null===(y=D.payment_student)||void 0===y||null===(S=y.fee_structure)||void 0===S?void 0:S.unique_structure_name)&&void 0!==f?f:""})]})]}),(0,u.jsxs)("div",{className:o.Z.text,style:{width:"27%"},children:[(0,u.jsx)("p",{className:o.Z.rcv,style:{width:"100%"},children:O("transaction_id")}),(0,u.jsx)("h6",{style:{width:"100%",wordWrap:"break-word"},children:null!==D&&void 0!==D&&D.razorpay_payment_id?null===D||void 0===D?void 0:D.razorpay_payment_id:null!==D&&void 0!==D&&null!==(Z=D.fee_receipt)&&void 0!==Z&&Z.fee_utr_reference?null===D||void 0===D||null===(C=D.fee_receipt)||void 0===C?void 0:C.fee_utr_reference:"N/A"}),(0,u.jsxs)("p",{className:o.Z.rcv,style:{width:"100%"},children:[v()(null===D||void 0===D?void 0:D.created_at).format("DD MMM yyyy"),", ",v()(null===D||void 0===D?void 0:D.created_at).format("LT")]})]}),(0,u.jsxs)("div",{className:o.Z.text,style:{width:"20%"},children:[(0,u.jsxs)("p",{className:o.Z.rcv,style:{width:"100%",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[O("invoice_no")," ",null!==(F=null!==(I=null===D||void 0===D||null===(R=D.fee_receipt)||void 0===R?void 0:R.invoice_count)&&void 0!==I?I:null===D||void 0===D?void 0:D.payment_invoice_number)&&void 0!==F?F:"N/A",(0,u.jsx)("img",{src:"/images/member_tab/admission/admission-receipt-download.svg",onClick:()=>{var e,t,i;"Admission"===(null===D||void 0===D?void 0:D.payment_module_type)||"Admission Fees"===(null===D||void 0===D?void 0:D.payment_module_type)||"Hostel"===(null===D||void 0===D?void 0:D.payment_module_type)||"Hostel Fees"===(null===D||void 0===D?void 0:D.payment_module_type)?(i=null===D||void 0===D||null===(e=D.fee_receipt)||void 0===e?void 0:e._id)&&(U((e=>!e)),W(i),Y===i&&$(X)):"Income"===(null===D||void 0===D?void 0:D.payment_module_type)||(e=>{e&&(U((e=>!e)),B(e))})(null===D||void 0===D||null===(t=D.fee_receipt)||void 0===t?void 0:t._id)},alt:"receipt icon",title:"Download Fees Receipt"})]}),(0,u.jsxs)("h6",{style:{width:"100%"},children:["Rs. ",null===D||void 0===D?void 0:D.payment_amount]}),(0,u.jsx)("p",{className:o.Z.rcv,style:{width:"100%"},children:"offline"===(null===(k=D.payment_mode)||void 0===k?void 0:k.toLowerCase())?null!==D&&void 0!==D&&null!==(L=D.fee_receipt)&&void 0!==L&&L.fee_payment_mode?"".concat(null===D||void 0===D||null===(M=D.fee_receipt)||void 0===M?void 0:M.fee_payment_mode):"Offline - No Receipt":"online"===(null===(A=D.payment_mode)||void 0===A?void 0:A.toLowerCase())?null!==D&&void 0!==D&&null!==(H=D.fee_receipt)&&void 0!==H&&H.fee_payment_mode?"".concat(null===D||void 0===D||null===(z=D.fee_receipt)||void 0===z?void 0:z.fee_payment_mode):"Online - No Receipt":null===D||void 0===D?void 0:D.payment_mode})]})]}),P&&(0,u.jsx)(b.Z,{})]})},Z=e=>{let{insId:t}=e;const i=(0,a.v9)((e=>e.financeChange)),[l,c]=n.useState([]),[v,_]=(0,n.useState)(""),[m,y]=(0,s.YD)({skip:v}),[x,g]=n.useState(!0),[j,b]=n.useState(1),[N,T]=(0,n.useState)(!0),{financeAllHistory:w,financeAllHistoryRefetch:Z}=(0,d.j2)({data:{uid:null!==i&&void 0!==i&&i.insId?null===i||void 0===i?void 0:i.insId:t,page:j,limit:10,filter:"",search:v},skip:null!==i&&void 0!==i&&i.insId?!(null!==i&&void 0!==i&&i.insId):!t}),{scrollToTop:C}=(0,r.u)();(0,n.useEffect)((()=>{C()}),[]),n.useEffect((()=>{(null!==i&&void 0!==i&&i.insId||t)&&(T(!0),Z())}),[null===i||void 0===i?void 0:i.insId,t,j,v,Z]),n.useEffect((()=>{y&&x&&b((e=>e+1))}),[y,x]),n.useEffect((()=>{null!==w&&void 0!==w&&w.history&&(v?(c((()=>null===w||void 0===w?void 0:w.history)),T(!1)):(c((e=>[...new Set([...e,...null===w||void 0===w?void 0:w.history].map(JSON.stringify))].map(JSON.parse))),T(!1))),10===(null===w||void 0===w?void 0:w.history.length)?g(!0):g(!1)}),[null===w||void 0===w?void 0:w.history]);const F=(0,n.useCallback)((0,h.debounce)((e=>_(e)),500),[]);return(0,u.jsxs)("div",{className:o.Z.incomeContainer,children:[(0,u.jsx)("div",{className:o.Z.searchContainerr,children:(0,u.jsxs)("div",{className:o.Z.searchContainer,children:[(0,u.jsx)("img",{alt:"",src:"/images/search-dept-icon.svg"}),(0,u.jsx)("input",{type:"text",placeholder:"Search",onChange:e=>{F(e.target.value)}})]})}),(0,u.jsxs)("div",{className:o.Z.itemsContainer,children:[null===l||void 0===l?void 0:l.map(((e,i)=>(null===l||void 0===l?void 0:l.length)===i+1?(0,u.jsx)("div",{ref:m,children:(0,u.jsx)(S,{history:e,insId:t})},i):(0,u.jsx)(S,{history:e,insId:t},i))),N&&(0,u.jsx)(p.Z,{}),!N&&!l.length&&(0,u.jsx)(f.Z,{customStyleContainer:{marginTop:"9rem"},title:"No search found."})]})]})};var C=i(98094),F=i(47167),I=i(14304);const R={dueList:"Repayment_dueList__VxmM4",settle_card:"Repayment_settle_card__2OblX",settle_card_container:"Repayment_settle_card_container__HtUKu",settle_card_text:"Repayment_settle_card_text__y9C6+",settle_paragraph:"Repayment_settle_paragraph__GU5Cp"};function k(e){var t,i,n,o,s,a,d;let{repay:r}=e;const{t:c}=(0,l.$G)();return(0,u.jsxs)("div",{className:R.settle_card,children:[(0,u.jsxs)("div",{className:R.settle_card_container,children:[(0,u.jsx)("img",{src:"/images/career/newLogo.svg",alt:"logo",style:{width:"60px",height:"60px",borderRadius:"12px"}}),(0,u.jsxs)("div",{className:R.settle_card_text,children:[(0,u.jsxs)("h6",{children:[c("settlement_date")," "," : ",null!==(t=null===r||void 0===r?void 0:r.settlement_date)&&void 0!==t?t:""]}),(0,u.jsxs)("p",{className:R.settle_paragraph,children:[c("message")," "," : "," ",null!==(i=null===r||void 0===r?void 0:r.message)&&void 0!==i?i:""]}),(0,u.jsxs)("p",{className:R.settle_paragraph,children:[c("transition_id")," : "," ",null!==(n=null===r||void 0===r?void 0:r.txnId)&&void 0!==n?n:""]}),(0,u.jsxs)("p",{className:R.settle_paragraph,children:[c("bank_name")," : ",null!==(o=null===r||void 0===r||null===(s=r.bank_account)||void 0===s||null===(a=s[0])||void 0===a?void 0:a.finance_bank_account_name)&&void 0!==o?o:""]})]})]}),(0,u.jsxs)("div",{className:R.settle_card_text,style:{alignItems:"flex-end"},children:[null!==r&&void 0!==r&&r.excel_attach?(0,u.jsx)("a",{title:"Download File",href:"".concat(j.yI,"/").concat(null===r||void 0===r?void 0:r.excel_attach),target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"none"},children:(0,u.jsx)("img",{src:"/images/member_tab/subject/subject-excel-icon.svg",alt:"excel icon",style:{cursor:"pointer",height:"1.5rem"}})}):null,(0,u.jsxs)("h6",{children:["Rs. ",null!==(d=null===r||void 0===r?void 0:r.repayAmount)&&void 0!==d?d:""]}),(0,u.jsx)("p",{className:R.settle_paragraph,children:"".concat(v()(null===r||void 0===r?void 0:r.createdAt).format("DD MMM, yyyy"),", ").concat(v()(null===r||void 0===r?void 0:r.createdAt).format("LT"))})]})]})}const L=function(e){let{insId:t}=e;const i=(0,a.v9)((e=>e.financeChange)),[o,l]=(0,s.YD)(),[d,c]=(0,n.useState)(1),[v,_]=(0,n.useState)(!0),[m,h]=(0,n.useState)(!0),[y,x]=(0,n.useState)([]),{data:g,refetch:j}=(0,I.K0)({info:{page:d,limit:10,fid:null!==i&&void 0!==i&&i.insId?null===i||void 0===i?void 0:i.insId:t},skip:null!==i&&void 0!==i&&i.insId?!(null!==i&&void 0!==i&&i.insId):!t});(0,n.useEffect)((()=>{(t||null!==i&&void 0!==i&&i.insId)&&(h(!0),j())}),[t,null===i||void 0===i?void 0:i.insId,d,j]),(0,n.useEffect)((()=>{l&&v&&c((e=>e+1))}),[l,v]);const{scrollToTop:b}=(0,r.u)();return(0,n.useEffect)((()=>{b()}),[]),(0,n.useEffect)((()=>{var e,t;null!==g&&void 0!==g&&g.repay?(x((e=>{var t,i;return null===(t=[...new Set(null===(i=[...e,...null===g||void 0===g?void 0:g.repay])||void 0===i?void 0:i.map(JSON.stringify))])||void 0===t?void 0:t.map(JSON.parse)})),h(!1)):0===(null===g||void 0===g||null===(e=g.repay)||void 0===e?void 0:e.length)&&h(!1),10===(null===g||void 0===g||null===(t=g.repay)||void 0===t?void 0:t.length)?_(!0):_(!1)}),[null===g||void 0===g?void 0:g.repay]),(0,u.jsxs)("div",{className:R.dueList,children:[null===y||void 0===y?void 0:y.map(((e,t)=>(null===y||void 0===y?void 0:y.length)===t+1?(0,u.jsx)("div",{ref:o,children:(0,u.jsx)(k,{repay:e})},null===e||void 0===e?void 0:e._id):(0,u.jsx)(k,{repay:e},null===e||void 0===e?void 0:e._id))),m&&(0,u.jsx)(p.Z,{}),!m&&!y.length&&(0,u.jsx)(f.Z,{customStyleContainer:{marginTop:"9rem"},title:"No due payment."})]})};const M=function(e){let{insId:t}=e;const{t:i}=(0,l.$G)(),s=(0,T.s0)(),[a,d]=(0,n.useState)(0),r=[{name:i("payment_receipts"),id:0},{name:i("payments"),id:1},{name:i("finance_settlement"),id:2}];return(0,u.jsxs)("div",{className:o.Z.history,children:[(0,u.jsxs)("section",{className:o.Z.moderator_container_title,children:[(0,u.jsx)("img",{src:"/images/arrow-left-fees-icon.svg",onClick:()=>{s(-1)},alt:"go to previous tab",title:"Go Back",style:{cursor:"pointer"}}),(0,u.jsx)("div",{className:o.Z.moderator_container_title_filter,children:(0,u.jsx)("h6",{children:i("finance_transaction_hisotry")})})]}),(0,u.jsx)(C.Z,{customStyle:{width:"100%"}}),(0,u.jsx)(F.Z,{tabList:r,activeIndexTab:a,setActiveIndexTab:e=>{d(e)},showAs:!1,customStyleTab:{width:"33.3%"}}),(0,u.jsx)(C.Z,{customStyle:{width:"100%",marginBottom:"0.5rem"}}),0===a&&(0,u.jsx)(Z,{insId:t}),1===a&&(0,u.jsx)(y,{insId:t}),2===a&&(0,u.jsx)(L,{insId:t})]})}},62732:(e,t,i)=>{"use strict";i.d(t,{Z:()=>c});var n=i(51355),o=i(72426),l=i.n(o),s=i(62906),a=i.n(s),d=new n.ZP({format:[270,210]}),r=d.internal.pageSize.getWidth();const c=function(e,t,i,n){var o,s,c,v,u,_,m,h,p,f,y,x,g,j,b,N,T;let w=arguments.length>4&&void 0!==arguments[4]&&arguments[4],S=null===t||void 0===t||null===(o=t.finance)||void 0===o?void 0:o.institute,Z=null===t||void 0===t||null===(s=t.finance)||void 0===s?void 0:s.financeHead,C=null===t||void 0===t?void 0:t.student,F=null===t||void 0===t?void 0:t.internal_fees,I=null===t||void 0===t?void 0:t.order_history;d.addImage(i,"JPEG",9,3,25,25),d.addImage(n,"JPEG",r-34,2.4,25,25),d.setLineWidth(8),d.setDrawColor(255,255,255),d.circle(21.4,15,16),d.setLineWidth(0),d.setLineWidth(8),d.setDrawColor(255,255,255),d.circle(r-21.4,15,16),d.setLineWidth(0);const R=d.splitTextToSize(null===S||void 0===S?void 0:S.insName,146);if(d.setFont(void 0,"normal"),R.length>1){let e=10;d.setFont("700"),d.setTextColor(18,18,18),d.setFontSize(16),d.text(107,e,R,"center"),e=R.length+145}else{let e=10;d.setFont("700"),d.setTextColor(18,18,18),d.setFontSize(18),d.text(107,e,R,"center"),e=R.length+145}d.setFont("Arial","normal","400"),d.setTextColor(18,18,18),d.setFontSize(10),d.text(r/2,R.length>1?23:19,null===S||void 0===S?void 0:S.insAddress,"center"),d.setFont("WorkSans"),d.setTextColor(18,18,18),d.setFontSize(10),d.text(r/2,R.length>1?29:25,"Mob No : ".concat(null===S||void 0===S?void 0:S.insPhoneNumber," , Mail: ").concat(null===S||void 0===S?void 0:S.insEmail),"center"),d.setFont("WorkSans"),d.setTextColor(0,0,0),d.setFontSize(18),d.text(r/2,37,"Fee Receipt","center"),d.setLineWidth(.7),d.setDrawColor(18,18,18),d.line(0,46,r,46),d.setTextColor(0,0,0),d.setFont(void 0,"bold"),d.setFontSize(10),d.text(9,54,"Invoice No :"),d.setFont(void 0,"normal"),d.setTextColor(0,0,0),d.setFontSize(10),d.text(32,54,null===t||void 0===t?void 0:t.invoice_count),d.setTextColor(0,0,0),d.setFont(void 0,"bold"),d.setFontSize(10),d.text(r-32,54,"Dated:",{align:"right"}),d.setFont(void 0,"normal"),d.setTextColor(0,0,0),d.setFontSize(10),d.text(r-12,54,l()(null===t||void 0===t?void 0:t.created_at).format("DD-MMM-YYYY"),{align:"right"}),d.setTextColor(0,0,0),d.setFont(void 0,"bold"),d.setFontSize(10),d.text(9,61,"Purpose:"),d.setFont(void 0,"normal"),d.setTextColor(0,0,0),d.setFontSize(10),d.text(32,61,"".concat(null!==(c=null===F||void 0===F?void 0:F.internal_fee_reason)&&void 0!==c?c:"N/A")),d.setTextColor(0,0,0),d.setFont(void 0,"bold"),d.setFontSize(10),d.text(9,68,"Amount: "),d.setFont(void 0,"normal"),d.setTextColor(0,0,0),d.setFontSize(10),d.text(32,68,"Rs. ".concat(null===t||void 0===t?void 0:t.fee_payment_amount)),d.setTextColor(0,0,0),d.setFont(void 0,"bold"),d.setFontSize(11),d.text(9,97," ".concat(w?"Received Through: ":"Paid Through: ")),d.setFont(void 0,"normal"),d.text(44,97,"".concat(null===e||void 0===e?void 0:e.finance_bank_name,", ").concat(null===e||void 0===e?void 0:e.finance_bank_account_name,", A/c No:  ").concat(null===e||void 0===e?void 0:e.finance_bank_account_number)),d.setTextColor(0,0,0),d.setFont(void 0,"bold"),d.text(9,107," On Account of: ");const k="Being money ".concat(w?"received":"paid"," by ").concat(null===t||void 0===t?void 0:t.fee_payment_mode,", Transaction ID: ").concat(null!==(v=null===I||void 0===I?void 0:I.razorpay_order_id)&&void 0!==v?v:"N/A"," ,  Dated: ").concat(l()(null===t||void 0===t?void 0:t.created_at).format("DD-MMM-YYYY"),"  for Rs. ").concat(null===t||void 0===t?void 0:t.fee_payment_amount,".").concat(w?"From":"To"," ","".concat(null!==(u=null===C||void 0===C?void 0:C.studentFirstName)&&void 0!==u?u:""," ").concat(null!==(_=null===C||void 0===C?void 0:C.studentMiddleName)&&void 0!==_?_:""," ").concat(null!==(m=null===C||void 0===C?void 0:C.studentLastName)&&void 0!==m?m:""," "),", towards ").concat(null!==(h=null===F||void 0===F?void 0:F.internal_fee_reason)&&void 0!==h?h:"N/A","."),L=d.splitTextToSize(k,r-20);if(L.length>1){let e=113,t=10;d.setFont(void 0,"normal"),d.setFontSize(11),d.setTextColor(18,18,18),d.text(t,e,L,"left"),e=L.length+151}else{let e=113,t=10;d.setFontSize(11),d.setFont(void 0,"normal"),d.setTextColor(18,18,18),d.setFontSize(12),d.text(t,e,L,"left"),e=L.length+151}var M,A,H,z;(d.setTextColor(0,0,0),d.setFont(void 0,"bold"),d.setFontSize(11),d.text(9,131,"Bank Transaction Details: "),d.setFont(void 0,"normal"),d.text(9,138,"Payment Mode:  ".concat(null===t||void 0===t?void 0:t.fee_payment_mode)),null!==I&&void 0!==I&&I.razorpay_order_id)?d.text(9,144,"Transaction ID: ".concat(null!==(M=null===I||void 0===I?void 0:I.razorpay_order_id)&&void 0!==M?M:"N/A")):(d.text(9,144,"Bank Name: ".concat(null!==(A=null===e||void 0===e?void 0:e.fee_bank_name)&&void 0!==A?A:"N/A")),d.text(9,150,"Bank Holder Name: ".concat(null!==(H=null===e||void 0===e?void 0:e.finance_bank_account_name)&&void 0!==H?H:"N/A")),d.text(9,156,"UTR / Ref No.: ".concat(null!==(z=null===e||void 0===e?void 0:e.fee_utr_reference)&&void 0!==z?z:"N/A")),d.text(9,162,"Date: ".concat(l()(null===t||void 0===t?void 0:t.created_at).format("DD-MMM-YYYY"))),d.text(9,168,"Amount: ".concat(null===t||void 0===t?void 0:t.fee_payment_amount)),d.text(9,174,"Amount in Words: ".concat((a().toWords(t.fee_payment_amount.toString()).match(/[a-zA-Z0-9]+/g)||[]).map((e=>"".concat(e.charAt(0).toUpperCase()).concat(e.slice(1)))).join(" ")," only.")));d.setFontSize(9),d.text(40,240,"".concat(Z.staffFirstName," ").concat(null!==(p=Z.staffMiddleName)&&void 0!==p?p:""," ").concat(Z.staffLastName),{align:"center"}),d.setFont(void 0,"bold"),d.setFontSize(10),d.text(40,245,"Finance Manager",{align:"center"}),d.setFont(void 0,"normal"),d.setFontSize(9),d.text(153,240,"".concat(null!==(f=null===S||void 0===S||null===(y=S.displayPersonList)||void 0===y||null===(x=y[0])||void 0===x||null===(g=x.displayUser)||void 0===g?void 0:g.userLegalName)&&void 0!==f?f:"N/A"),{align:"center"}),d.setFont(void 0,"bold"),d.setFontSize(10),d.text(153,245,"".concat(null!==(j=null===S||void 0===S||null===(b=S.displayPersonList)||void 0===b||null===(N=b[0])||void 0===N?void 0:N.displayTitle)&&void 0!==j?j:"N/A"),{align:"center"}),d.setTextColor(0,0,255),d.setFontSize(7),d.text(r-20,243,"Online Automated",null,50),d.text(r-18,244,"Generated fee receipt",null,50),d.text(r-14,246,"Through Qviple",null,50),d.setLineWidth(.2),d.setDrawColor(18,18,18),d.line(0,251,r,251),d.setTextColor(18,18,18),d.setFontSize(8),d.setFont(void 0,"normal"),d.text(r/2,259,"Note : No one except one who is making this certificate should interfere with any details of this invoice, othewise students will be expelled and legal action will be taken.","center"),window.open(d.output("bloburl",{filename:"".concat(null===C||void 0===C?void 0:C.studentFirstName," ").concat(null!==(T=null===C||void 0===C?void 0:C.studentMiddleName)&&void 0!==T?T:""," ").concat(null===C||void 0===C?void 0:C.studentLastName," -Internal Fee Receipt.pdf")}),"_blank")}},62906:(e,t,i)=>{!function(){"use strict";"object"==typeof self&&self.self===self&&self||"object"==typeof i.g&&i.g.global===i.g&&i.g;var n=9007199254740991;function o(e){return!("number"!=typeof e||e!=e||e===1/0||e===-1/0)}function l(e){return"number"==typeof e&&Math.abs(e)<=n}var s=/(hundred|thousand|(m|b|tr|quadr)illion)$/,a=/teen$/,d=/y$/,r=/(zero|one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve)$/,c={zero:"zeroth",one:"first",two:"second",three:"third",four:"fourth",five:"fifth",six:"sixth",seven:"seventh",eight:"eighth",nine:"ninth",ten:"tenth",eleven:"eleventh",twelve:"twelfth"};function v(e){return s.test(e)||a.test(e)?e+"th":d.test(e)?e.replace(d,"ieth"):r.test(e)?e.replace(r,u):e}function u(e,t){return c[t]}var _=1e3,m=1e6,h=1e9,p=1e12,f=1e15,y=["zero","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"],x=["zero","ten","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"];function g(e,t){var i,n=parseInt(e,10);if(!o(n))throw new TypeError("Not a finite number: "+e+" ("+typeof e+")");if(!l(n))throw new RangeError("Input is not a safe number, it\u2019s either too large or too small.");return i=function e(t){var i,n,o=arguments[1];return 0===t?o?o.join(" ").replace(/,$/,""):"zero":(o||(o=[]),t<0&&(o.push("minus"),t=Math.abs(t)),t<20?(i=0,n=y[t]):t<100?(i=t%10,n=x[Math.floor(t/10)],i&&(n+="-"+y[i],i=0)):t<_?(i=t%100,n=e(Math.floor(t/100))+" hundred"):t<m?(i=t%_,n=e(Math.floor(t/_))+" thousand,"):t<h?(i=t%m,n=e(Math.floor(t/m))+" million,"):t<p?(i=t%h,n=e(Math.floor(t/h))+" billion,"):t<f?(i=t%p,n=e(Math.floor(t/p))+" trillion,"):t<=9007199254740992&&(i=t%f,n=e(Math.floor(t/f))+" quadrillion,"),o.push(n),e(i,o))}(n),t?v(i):i}var j={toOrdinal:function(e){var t=parseInt(e,10);if(!o(t))throw new TypeError("Not a finite number: "+e+" ("+typeof e+")");if(!l(t))throw new RangeError("Input is not a safe number, it\u2019s either too large or too small.");var i=String(t),n=Math.abs(t%100),s=11<=n&&n<=13,a=i.charAt(i.length-1);return i+(s?"th":"1"===a?"st":"2"===a?"nd":"3"===a?"rd":"th")},toWords:g,toWordsOrdinal:function(e){return v(g(e))}};e.exports&&(t=e.exports=j),t.numberToWords=j}()},45639:(e,t,i)=>{"use strict";i.d(t,{Z:()=>n});const n={universal_container:"UniversalTab_universal_container__uxTOR",universal_container_item:"UniversalTab_universal_container_item__M0pS7",universal_container_item_active:"UniversalTab_universal_container_item_active__3u3Wt"}},33965:(e,t,i)=>{"use strict";i.d(t,{Z:()=>n});const n={history:"History_history__zT0JY",moderator_container_title:"History_moderator_container_title__zlgYe",moderator_container_title_filter:"History_moderator_container_title_filter__nIFhU",dueListTop:"History_dueListTop__yIMKg",dueListTopleft:"History_dueListTopleft__F5lTL",dueListTopbuttons:"History_dueListTopbuttons__qD9fX",dueListTopbtn:"History_dueListTopbtn__-wm1S",dueListTopbtnActive:"History_dueListTopbtnActive__y10iy",incomeContainer:"History_incomeContainer__kbyvR",income:"History_income__p0sbk",incomeLeft:"History_incomeLeft__xc+1W",incomeRight:"History_incomeRight__0WXJK",incomeLeftt:"History_incomeLeftt__TXgr0",itemsContainer:"History_itemsContainer__Y5tqY",rcv:"History_rcv__i+r3c",sidebarheader:"History_sidebarheader__kMTZv",text:"History_text__y3bAE",btn:"History_btn__b-XxZ",incomeRightt:"History_incomeRightt__oi53y",incomeTop:"History_incomeTop__7YSzU",right:"History_right__iZ36A",rightHead:"History_rightHead__0VEiK",rightBody:"History_rightBody__p-a0H",detail:"History_detail__r12VC",detailTop:"History_detailTop__zShgR",detailTopLeft:"History_detailTopLeft__AcJSZ",detailTopMid:"History_detailTopMid__A5imZ",detailTopRight:"History_detailTopRight__8-HlA",detailContent:"History_detailContent__lYofn",imagediv:"History_imagediv__z3cqD",backh:"History_backh__teYCR",searchContainer:"History_searchContainer__5KBm-",noData:"History_noData__0-f5b",history_image_container:"History_history_image_container__cfLZp"}},23441:(e,t,i)=>{"use strict";i.d(t,{YD:()=>u});var n=i(72791),o=Object.defineProperty,l=(e,t,i)=>(((e,t,i)=>{t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i})(e,"symbol"!==typeof t?t+"":t,i),i),s=new Map,a=new WeakMap,d=0,r=void 0;function c(e){return Object.keys(e).sort().filter((t=>void 0!==e[t])).map((t=>{return"".concat(t,"_").concat("root"===t?(i=e.root)?(a.has(i)||(d+=1,a.set(i,d.toString())),a.get(i)):"0":e[t]);var i})).toString()}function v(e,t){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:r;if("undefined"===typeof window.IntersectionObserver&&void 0!==n){const o=e.getBoundingClientRect();return t(n,{isIntersecting:n,target:e,intersectionRatio:"number"===typeof i.threshold?i.threshold:0,time:0,boundingClientRect:o,intersectionRect:o,rootBounds:o}),()=>{}}const{id:o,observer:l,elements:a}=function(e){let t=c(e),i=s.get(t);if(!i){const n=new Map;let o;const l=new IntersectionObserver((t=>{t.forEach((t=>{var i;const l=t.isIntersecting&&o.some((e=>t.intersectionRatio>=e));e.trackVisibility&&"undefined"===typeof t.isVisible&&(t.isVisible=l),null==(i=n.get(t.target))||i.forEach((e=>{e(l,t)}))}))}),e);o=l.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),i={id:t,observer:l,elements:n},s.set(t,i)}return i}(i);let d=a.get(e)||[];return a.has(e)||a.set(e,d),d.push(t),l.observe(e),function(){d.splice(d.indexOf(t),1),0===d.length&&(a.delete(e),l.unobserve(e)),0===a.size&&(l.disconnect(),s.delete(o))}}n.Component;function u(){let{threshold:e,delay:t,trackVisibility:i,rootMargin:o,root:l,triggerOnce:s,skip:a,initialInView:d,fallbackInView:r,onChange:c}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};var u;const[_,m]=n.useState(null),h=n.useRef(),[p,f]=n.useState({inView:!!d,entry:void 0});h.current=c,n.useEffect((()=>{if(a||!_)return;let n;return n=v(_,((e,t)=>{f({inView:e,entry:t}),h.current&&h.current(e,t),t.isIntersecting&&s&&n&&(n(),n=void 0)}),{root:l,rootMargin:o,threshold:e,trackVisibility:i,delay:t},r),()=>{n&&n()}}),[Array.isArray(e)?e.toString():e,_,l,o,s,a,i,r,t]);const y=null==(u=p.entry)?void 0:u.target,x=n.useRef();_||!y||s||a||x.current===y||(x.current=y,f({inView:!!d,entry:void 0}));const g=[m,p.inView,p.entry];return g.ref=g[0],g.inView=g[1],g.entry=g[2],g}}}]);
//# sourceMappingURL=18455.18c9ce69.chunk.js.map