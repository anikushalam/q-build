"use strict";(self.webpackChunkmithkal_qviple=self.webpackChunkmithkal_qviple||[]).push([[71870],{71870:(e,i,n)=>{n.r(i),n.d(i,{default:()=>z});var t=n(56959),l=n(63687),a=n(21348),o=n(39230),s=n(90904),r=n(43504),d=n(16871),c=n(98967),_=n(63162),u=n(72791),v=n(55336),m=n(23441),h=n(91427),p=n(57588),f=n(98684),j=n(1669),x=n(2651),g=n(43317);const y="PaymentVerification_request_card_info_name__F217G",Z="PaymentVerification_request_card_container__kdJMq",C="PaymentVerification_request_card_info__4dTd3",N="PaymentVerification_request_card_info_date__kvaK6",b="PaymentVerification_request_card_utr__PDrya",k="PaymentVerification_request_card_info_image__SzKv7",S="PaymentVerification_fee_request_detail__XPezI",E="PaymentVerification_fee_request_detail_name__9jdBC",q="PaymentVerification_fee_request_detail_amount__-SBvM",P="PaymentVerification_fee_request_detail_date__0hGfn",T="PaymentVerification_reason_for_rejection__xoM3S",L="PaymentVerification_payment_acknowledge_btn__quTx1";var I=n(1095),R=n(97892),V=n.n(R),A=n(93638),D=n(48293),B=n(16925),J=n(53277),M=n(23558),F=n(61055),Y=n(99183),w=n(80184);const G=e=>{var i,n,t,l,r,d,c,_,m,h,p,j,x,y,Z,C;let{onClose:N,aid:b,onRefetch:k,receipt:T,isAccess:R}=e;const{t:G}=(0,o.$G)(),[K,U]=(0,u.useState)(!1),[Q,$]=(0,u.useState)(1),[z,O]=(0,u.useState)(""),[X,H]=(0,u.useState)(""),[W]=(0,g.Wl)(),ee=()=>{},ie=(0,u.useCallback)((()=>{var e;const i=window.open("".concat(I.LS,"/").concat(null===T||void 0===T||null===(e=T.receipt)||void 0===e?void 0:e.fee_payment_acknowledge),"_blank","noopener,noreferrer");i&&(i.opener=null)}),[I.LS,null===T||void 0===T||null===(i=T.receipt)||void 0===i?void 0:i.fee_payment_acknowledge]);return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(D.Z,{onClose:N,children:(0,w.jsxs)("div",{className:B.Z.modal_container,children:[(0,w.jsx)(a.Z,{children:(0,w.jsxs)("div",{className:B.Z.modal_container_outer_header,children:[(0,w.jsx)("div",{className:B.Z.modal_container_header,children:(0,w.jsxs)("h6",{children:[" ",G("fee_receipt_request")]})}),(0,w.jsx)("img",{src:"".concat(f.J7,"/close.svg"),alt:"close icon",onClick:N})]})}),(0,w.jsx)(s.Z,{}),(0,w.jsxs)(a.Z,{customStyle:{paddingTop:"0",marginBottom:"1rem"},children:[(0,w.jsxs)(J.Z,{children:[(0,w.jsx)(M.Z,{label:"accept",onClick:()=>{$(1)},isActive:1===Q}),(0,w.jsx)(M.Z,{label:"reject",onClick:()=>{$(2)},isActive:2===Q})]}),(0,w.jsxs)("section",{className:S,children:[(0,w.jsxs)("h6",{className:E,children:[G("name")," "," : "," ","".concat(null===T||void 0===T||null===(n=T.receipt)||void 0===n||null===(t=n.student)||void 0===t?void 0:t.studentFirstName," ").concat(null!==T&&void 0!==T&&null!==(l=T.receipt)&&void 0!==l&&null!==(r=l.student)&&void 0!==r&&r.studentMiddleName?null===T||void 0===T||null===(d=T.receipt)||void 0===d||null===(c=d.student)||void 0===c?void 0:c.studentMiddleName:""," ").concat(null===T||void 0===T||null===(_=T.receipt)||void 0===_||null===(m=_.student)||void 0===m?void 0:m.studentLastName)]}),(0,w.jsxs)("h6",{className:q,children:[G("amount")," "," : "," ",G("rs")," ",null!==(h=null===T||void 0===T||null===(p=T.receipt)||void 0===p?void 0:p.fee_payment_amount)&&void 0!==h?h:0]}),(0,w.jsx)("h6",{className:P,children:V()(null===T||void 0===T||null===(j=T.receipt)||void 0===j?void 0:j.created_at).format("DD MMM YYYY")})]}),1===Q?(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(F.Z,{label:G("bank_name_collect"),name:"fee_bank_name",type:"tel",value:null===T||void 0===T||null===(x=T.receipt)||void 0===x?void 0:x.fee_bank_name,onChange:ee,placeholder:G("please_enter_bank_name"),customStyleLabel:{marginTop:"6px",marginBottom:"7px"}}),(0,w.jsx)(F.Z,{label:G("banke_holder_name"),name:"fee_bank_holder",type:"tel",value:null===T||void 0===T||null===(y=T.receipt)||void 0===y?void 0:y.fee_bank_holder,onChange:ee,placeholder:G("please_enter_name_of_bank_holder"),customStyleLabel:{marginTop:"6px",marginBottom:"7px"}}),(0,w.jsx)(F.Z,{label:G("cheque_dd_neft"),name:"fee_utr_reference",type:"tel",value:null===T||void 0===T||null===(Z=T.receipt)||void 0===Z?void 0:Z.fee_utr_reference,onChange:ee,placeholder:G("please_enter_utr_ref_number"),customStyleLabel:{marginTop:"6px",marginBottom:"7px"}}),null!==T&&void 0!==T&&null!==(C=T.receipt)&&void 0!==C&&C.fee_payment_acknowledge?(0,w.jsx)("button",{className:L,onClick:ie,children:G("payment_acknowledge")}):null]}):(0,w.jsx)(F.Z,{label:G("reason_for_rejection_receipt"),name:"reason",type:"text",value:z,onChange:e=>O(e.target.value),placeholder:G("please_reason_for_rejection_receipt"),errorShow:X.reason}),(0,w.jsx)(A.Z,{label:1===Q?"confirm":"confirm_reject",onAction:()=>{let e=!0;var i,n;(2===Q&&(e=(0,Y.l)({reason:z},[])),(0,Y.x)(e))?b&&null!==T&&void 0!==T&&null!==(i=T.receipt)&&void 0!==i&&i._id&&null!==T&&void 0!==T&&T._id&&(U((e=>!e)),W({aid:b,rid:null===T||void 0===T||null===(n=T.receipt)||void 0===n?void 0:n._id,reqId:null===T||void 0===T?void 0:T._id,status:"REJECTED"===R?1===Q?"Over_Rejection":"Rejection_Notify":1===Q?"Approved":"Rejected",receiptAction:{reason:z}}).then((()=>{k(),U((e=>!e)),N()})).catch({})):H(e)}})]})]})}),K&&(0,w.jsx)(v.Z,{})]})},K=e=>{var i,n,t,l,a,s,r,d,c,_,v,m,h,p,j,x,g,S,E,q,P;let{receipt:L,isAccess:R,aid:D,onRefetch:B}=e;const{t:J}=(0,o.$G)(),[M,F]=(0,u.useState)(!1),Y=(0,u.useCallback)((()=>{var e;("REQUEST"===R||"REJECTED"===R&&null!==L&&void 0!==L&&null!==(e=L.receipt)&&void 0!==e&&e.re_apply)&&F((e=>!e))}),[R,null===L||void 0===L||null===(i=L.receipt)||void 0===i?void 0:i.re_apply]);return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsxs)("section",{className:Z,onClick:null!==L&&void 0!==L&&null!==(n=L.receipt)&&void 0!==n&&n.re_apply?()=>{}:Y,style:{cursor:"REQUEST"===R?"pointer":"default"},children:[(0,w.jsxs)("div",{className:C,children:[(0,w.jsx)("img",{src:null!==L&&void 0!==L&&null!==(t=L.receipt)&&void 0!==t&&null!==(l=t.student)&&void 0!==l&&l.studentProfilePhoto?"".concat(I.yI,"/").concat(null===L||void 0===L||null===(a=L.receipt)||void 0===a||null===(s=a.student)||void 0===s?void 0:s.studentProfilePhoto):"".concat(f.p3,"/feed-user-avatar.svg"),alt:"avatar",className:k}),(0,w.jsxs)("div",{children:[(0,w.jsx)("h6",{className:y,children:"".concat(null!==(r=null===L||void 0===L||null===(d=L.receipt)||void 0===d||null===(c=d.student)||void 0===c?void 0:c.studentFirstName)&&void 0!==r?r:""," ").concat(null!==L&&void 0!==L&&null!==(_=L.receipt)&&void 0!==_&&null!==(v=_.student)&&void 0!==v&&v.studentMiddleName?null===L||void 0===L||null===(m=L.receipt)||void 0===m||null===(h=m.student)||void 0===h?void 0:h.studentMiddleName:""," ").concat(null!==(p=null===L||void 0===L||null===(j=L.receipt)||void 0===j||null===(x=j.student)||void 0===x?void 0:x.studentLastName)&&void 0!==p?p:"")}),(0,w.jsxs)("p",{className:y,children:[J("amount")," : ",J("rs_only")," ",(null===L||void 0===L||null===(g=L.receipt)||void 0===g?void 0:g.fee_payment_amount)||0]}),(0,w.jsx)("p",{className:N,children:V()(null===L||void 0===L?void 0:L.created_at).format("DD MMM YYYY")})]})]}),(0,w.jsxs)("h6",{className:b,children:[J("utr_number")," ",null===L||void 0===L||null===(S=L.receipt)||void 0===S?void 0:S.fee_utr_reference]}),"REJECTED"===R&&(0,w.jsxs)(w.Fragment,{children:[(0,w.jsxs)("h6",{className:T,children:[J("reason_for_rejection")," ",null!==(E=null===L||void 0===L||null===(q=L.receipt)||void 0===q?void 0:q.reason)&&void 0!==E?E:null===L||void 0===L?void 0:L.reason]}),(null===L||void 0===L||null===(P=L.receipt)||void 0===P?void 0:P.re_apply)&&(0,w.jsx)(A.Z,{label:"re_requested",onAction:Y})]})]}),M&&(0,w.jsx)(G,{onClose:Y,aid:D,receipt:L,onRefetch:B,isAccess:R})]})},U=e=>{var i,n,l;let{aid:a,requestedCount:s}=e;const{t:r}=(0,o.$G)(),[d,c]=(0,u.useState)(""),[_,y]=(0,u.useState)(1),[Z,C]=(0,u.useState)(!0),[N,b]=(0,m.YD)({skip:d}),{admissionPaymentVerifyList:k,admissionPaymentVerifyListLoading:S,admissionPaymentVerifyListRefetch:E}=(0,g.jD)({data:{aid:a,page:_,limit:10,search:d,filterBy:"ALL_REQUEST",over_filter:""},skip:!a});(0,u.useEffect)((()=>{b&&Z&&y((e=>e+1))}),[b,Z]),(0,u.useEffect)((()=>{var e;if(null!==k&&void 0!==k&&null!==(e=k.list)&&void 0!==e&&e.length){var i;let e=(0,h.f)(null===k||void 0===k||null===(i=k.list)||void 0===i?void 0:i.length);C((()=>e))}}),[null===k||void 0===k?void 0:k.list]);const q=(0,u.useCallback)((0,p.J)((e=>{y((()=>1)),c(e)}),1500),[]),P=(0,u.useCallback)((()=>{y((()=>1)),E()}),[E]);return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsxs)("div",{className:t.Z.fm_header_container,children:[(0,w.jsxs)("h6",{children:[r("total_request")," : "," ",null!==s&&void 0!==s?s:0]}),(0,w.jsx)("div",{className:t.Z.fm_search,children:(0,w.jsx)("section",{className:t.Z.fm_search_container,children:(0,w.jsxs)("div",{className:t.Z.fm_search_container_inner,children:[(0,w.jsx)("img",{className:t.Z.fm_search_icon,alt:"search icon",src:"".concat(f.dB,"/navbar-search.svg")}),(0,w.jsx)("input",{type:"text",placeholder:r("search"),onChange:e=>{e.target.value?q(e.target.value):(y((()=>1)),c(""))}})]})})})]}),null===k||void 0===k||null===(i=k.list)||void 0===i?void 0:i.map(((e,i)=>{var n;return(null===k||void 0===k||null===(n=k.list)||void 0===n?void 0:n.length)===i+1?(0,w.jsx)("div",{ref:N,children:(0,w.jsx)(K,{receipt:e,isAccess:"REQUEST",aid:a,onRefetch:P})},null===e||void 0===e?void 0:e._id):(0,w.jsx)(K,{receipt:e,isAccess:"REQUEST",aid:a,onRefetch:P},null===e||void 0===e?void 0:e._id)})),S?d?(0,w.jsx)(v.Z,{}):(0,w.jsx)(j.Z,{}):d?0===(null===k||void 0===k||null===(n=k.list)||void 0===n?void 0:n.length)&&(0,w.jsx)(x.Z,{customStyleContainer:{marginTop:"1.5rem"},title:"No request found related this search."}):0===(null===k||void 0===k||null===(l=k.list)||void 0===l?void 0:l.length)&&(0,w.jsx)(x.Z,{customStyleContainer:{marginTop:"1.5rem"},title:"No request found."})]})},Q=e=>{var i,n,l;let{aid:a,rejectCount:s}=e;const{t:r}=(0,o.$G)(),[d,c]=(0,u.useState)(""),[_,y]=(0,u.useState)(1),[Z,C]=(0,u.useState)(!0),[N,b]=(0,m.YD)({skip:d}),{admissionPaymentVerifyList:k,admissionPaymentVerifyListLoading:S,admissionPaymentVerifyListRefetch:E}=(0,g.jD)({data:{aid:a,page:_,limit:10,search:d,filterBy:"ALL_REJECT",over_filter:""},skip:!a});(0,u.useEffect)((()=>{b&&Z&&y((e=>e+1))}),[b,Z]),(0,u.useEffect)((()=>{var e;if(null!==k&&void 0!==k&&null!==(e=k.list)&&void 0!==e&&e.length){var i;let e=(0,h.f)(null===k||void 0===k||null===(i=k.list)||void 0===i?void 0:i.length);C((()=>e))}}),[null===k||void 0===k?void 0:k.list]);const q=(0,u.useCallback)((0,p.J)((e=>{y((()=>1)),c(e)}),1500),[]),P=(0,u.useCallback)((()=>{y((()=>1)),E()}),[E]);return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsxs)("div",{className:t.Z.fm_header_container,children:[(0,w.jsxs)("h6",{children:[r("total_rejected")," : "," ",null!==s&&void 0!==s?s:0]}),(0,w.jsx)("div",{className:t.Z.fm_search,children:(0,w.jsx)("section",{className:t.Z.fm_search_container,children:(0,w.jsxs)("div",{className:t.Z.fm_search_container_inner,children:[(0,w.jsx)("img",{className:t.Z.fm_search_icon,alt:"search icon",src:"".concat(f.dB,"/navbar-search.svg")}),(0,w.jsx)("input",{type:"text",placeholder:r("search"),onChange:e=>{e.target.value?q(e.target.value):(y((()=>1)),c(""))}})]})})})]}),null===k||void 0===k||null===(i=k.list)||void 0===i?void 0:i.map(((e,i)=>{var n;return(null===k||void 0===k||null===(n=k.list)||void 0===n?void 0:n.length)===i+1?(0,w.jsx)("div",{ref:N,children:(0,w.jsx)(K,{receipt:e,isAccess:"REJECTED",aid:a,onRefetch:P})},null===e||void 0===e?void 0:e._id):(0,w.jsx)(K,{receipt:e,isAccess:"REJECTED",aid:a,onRefetch:P},null===e||void 0===e?void 0:e._id)})),S?d?(0,w.jsx)(v.Z,{}):(0,w.jsx)(j.Z,{}):d?0===(null===k||void 0===k||null===(n=k.list)||void 0===n?void 0:n.length)&&(0,w.jsx)(x.Z,{customStyleContainer:{marginTop:"1.5rem"},title:"No receipts found related this search."}):0===(null===k||void 0===k||null===(l=k.list)||void 0===l?void 0:l.length)&&(0,w.jsx)(x.Z,{customStyleContainer:{marginTop:"1.5rem"},title:"No receipts found."})]})},$=e=>{var i,n,l;let{aid:a,approvedCount:s}=e;const{t:r}=(0,o.$G)(),[d,c]=(0,u.useState)(""),[_,y]=(0,u.useState)(1),[Z,C]=(0,u.useState)(!0),[N,b]=(0,m.YD)({skip:d}),{admissionPaymentVerifyList:k,admissionPaymentVerifyListLoading:S}=(0,g.jD)({data:{aid:a,page:_,limit:10,search:d,filterBy:"ALL_APPROVE",over_filter:""},skip:!a});(0,u.useEffect)((()=>{b&&Z&&y((e=>e+1))}),[b,Z]),(0,u.useEffect)((()=>{var e;if(null!==k&&void 0!==k&&null!==(e=k.list)&&void 0!==e&&e.length){var i;let e=(0,h.f)(null===k||void 0===k||null===(i=k.list)||void 0===i?void 0:i.length);C((()=>e))}}),[null===k||void 0===k?void 0:k.list]);const E=(0,u.useCallback)((0,p.J)((e=>{y((()=>1)),c(e)}),1500),[]);return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsxs)("div",{className:t.Z.fm_header_container,children:[(0,w.jsxs)("h6",{children:[r("total_accepted")," "," : "," ",null!==s&&void 0!==s?s:0]}),(0,w.jsx)("div",{className:t.Z.fm_search,children:(0,w.jsx)("section",{className:t.Z.fm_search_container,children:(0,w.jsxs)("div",{className:t.Z.fm_search_container_inner,children:[(0,w.jsx)("img",{className:t.Z.fm_search_icon,alt:"search icon",src:"".concat(f.dB,"/navbar-search.svg")}),(0,w.jsx)("input",{type:"text",placeholder:r("search"),onChange:e=>{e.target.value?E(e.target.value):(y((()=>1)),c(""))}})]})})})]}),null===k||void 0===k||null===(i=k.list)||void 0===i?void 0:i.map(((e,i)=>{var n;return(null===k||void 0===k||null===(n=k.list)||void 0===n?void 0:n.length)===i+1?(0,w.jsx)("div",{ref:N,children:(0,w.jsx)(K,{receipt:e})},null===e||void 0===e?void 0:e._id):(0,w.jsx)(K,{receipt:e},null===e||void 0===e?void 0:e._id)})),S?d?(0,w.jsx)(v.Z,{}):(0,w.jsx)(j.Z,{}):d?0===(null===k||void 0===k||null===(n=k.list)||void 0===n?void 0:n.length)&&(0,w.jsx)(x.Z,{customStyleContainer:{marginTop:"1.5rem"},title:"No receipts found related this search."}):0===(null===k||void 0===k||null===(l=k.list)||void 0===l?void 0:l.length)&&(0,w.jsx)(x.Z,{customStyleContainer:{marginTop:"1.5rem"},title:"No receipts found."})]})},z=e=>{let{aid:i,requestedCount:n,approvedCount:m,rejectCount:h}=e;const{t:p}=(0,o.$G)(),[j]=(0,r.lr)(),x=(0,d.TH)(),g=(0,d.UO)();return(0,w.jsx)(w.Fragment,{children:(0,w.jsxs)(l.Z,{children:[(0,w.jsx)(a.Z,{children:(0,w.jsxs)("div",{className:t.Z.fm_header_container,children:[(0,w.jsx)("h6",{children:p("fee_receipts_request")}),(0,w.jsx)("img",{src:"".concat(f.J7,"/filter.svg"),alt:"filter icon"})]})}),(0,w.jsx)(s.Z,{}),(0,w.jsxs)(a.Z,{customStyle:{paddingTop:"0"},children:[(0,w.jsx)(c.Z,{children:O.map((e=>{var i;return(0,w.jsx)(_.Z,{tab:e,isLink:!0,isActive:"requested"===e.id&&!j.get("n")||j.get("n")===e.id,parentState:x.state,url:"Institute"===(null===(i=x.state)||void 0===i?void 0:i.urlOffSet)?"/q/".concat(g.username,"/institute/member/finance?type=verification").concat(e.urlKey):"/q/".concat(g.username,"/member/staff/finance?type=verification").concat(e.urlKey)},null===e||void 0===e?void 0:e.id)}))}),(0,w.jsx)(s.Z,{customStyleBorder:{marginTop:"0"}})]}),(0,w.jsx)(a.Z,{customStyle:{paddingTop:"0"},children:(0,w.jsx)(u.Suspense,{fallback:(0,w.jsx)(v.Z,{}),children:"accepted"===j.get("n")?(0,w.jsx)($,{aid:i,approvedCount:m}):"rejected"===j.get("n")?(0,w.jsx)(Q,{aid:i,rejectCount:h}):(0,w.jsx)(U,{aid:i,requestedCount:n})})})]})})},O=[{label:"all_request",id:"requested",urlKey:""},{label:"accepted",id:"accepted",urlKey:"&n=accepted"},{label:"rejected",id:"rejected",urlKey:"&n=rejected"}]},16925:(e,i,n)=>{n.d(i,{Z:()=>t});const t={right:"Income_right__XnzYj",rightHead:"Income_rightHead__1rLc6",rightBody:"Income_rightBody__fGEC5",income_detail:"Income_income_detail__IWoJa",detailTop:"Income_detailTop__4JXuu",detailTopMid:"Income_detailTopMid__yc2yv",modal_container:"Income_modal_container__HiGr+",modal_container_outer_header:"Income_modal_container_outer_header__F9c7X",modal_container_header:"Income_modal_container_header__td-Fb",card_container:"Income_card_container__ewKhQ",card_container_image:"Income_card_container_image__5XloP",card_container_inner:"Income_card_container_inner__JBmxr",admission_fees_row:"Income_admission_fees_row__MPJCs",close_icon:"Income_close_icon__Ozq4u",student_message_container:"Income_student_message_container__8KnPc",student_message_container_inner:"Income_student_message_container_inner__mRYpD",usm_institute_container:"Income_usm_institute_container__4LkYt",usm_institute:"Income_usm_institute__hlzdF",date_select:"Income_date_select__D3VkU",gsf_star_container:"Income_gsf_star_container__7gdUs"}}}]);
//# sourceMappingURL=71870.8c370e47.chunk.js.map