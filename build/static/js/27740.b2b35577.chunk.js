"use strict";(self.webpackChunkmithkal_qviple=self.webpackChunkmithkal_qviple||[]).push([[27740,81221,58936],{16894:(e,t,n)=>{n.r(t),n.d(t,{default:()=>K});var l=n(39230),i=n(63687),o=n(56959),a=n(16871),d=n(43504),s=n(72791),r=n(23441),u=n(6758),c=n(91427),v=n(98684),m=n(2651),_=n(55336),h=n(1669),f=n(21348),p=n(90904),x=n(1095),j=n(9228),g=n(93638),y=n(38857),b=n(16925),S=n(61055),Z=n(60924),I=n(43997),C=n(50518),k=n(99183),N=n(60307),F=n(71439),O=n(64499),T=n(85794),R=n(80184);const E=e=>{var t,n,i;let{onClose:o,financeId:d,onRefetch:r,otherFeesId:c,student:m,instituteId:h,isNonExisting:x}=e;const{t:j}=(0,l.$G)(),[E,P]=(0,s.useState)(!1),w=(0,a.UO)(),[L,A]=(0,s.useState)({amount:"",mode:"",fee_payment_mode:"",fee_payment_amount:"",transaction_date:"",fee_bank_name:"",fee_bank_holder:"",fee_utr_reference:""}),[G,q]=(0,s.useState)(""),[D,H]=(0,s.useState)({open:!1,msg:"",variant:"error"}),[U,B]=(0,s.useState)({amount:0,type:"Other",isTransaction:!1}),{studentInstituteCharges:M}=(0,N.xY)({data:{id:h},skip:!h}),[$]=(0,u.iJ)();(0,s.useEffect)((()=>{var e,t;null!==m&&void 0!==m&&null!==(e=m.other_fees_obj)&&void 0!==e&&e.price&&(A((e=>{var t,n;return{...e,amount:+(null===m||void 0===m||null===(t=m.other_fees_obj)||void 0===t?void 0:t.price),fee_payment_amount:+(null===m||void 0===m||null===(n=m.other_fees_obj)||void 0===n?void 0:n.price)}})),B({amount:+(null===m||void 0===m||null===(t=m.other_fees_obj)||void 0===t?void 0:t.price),type:"Other",isTransaction:!1}))}),[m]);const J=e=>{A((t=>({...t,[e.target.name]:e.target.value})))};return(0,R.jsxs)(R.Fragment,{children:[U.isTransaction?(0,R.jsx)(F.Z,{onClose:o,allContent:{...U,platform_charges:null===M||void 0===M||null===(t=M.platform_charges)||void 0===t?void 0:t.percentage},checkoutAdmissionHandler:()=>{var e,t,n,l,i,o,a,d,s,r,u;let v=2.1*+(null===U||void 0===U?void 0:U.amount)/100,_=v+18*+v/100;const f=parseInt(null===U||void 0===U?void 0:U.amount);var p=Math.ceil(f+ +_.toFixed(2));(0,O.oU)({amount:null!==(e=+(null===L||void 0===L?void 0:L.amount))&&void 0!==e?e:10,amount_nocharges:null!==(t=+p)&&void 0!==t?t:0,type:"Other",paidBy:null===m||void 0===m?void 0:m._id,paidTo:h,moduleId:c,ad_status_id:null,payment_installment:null,ad_install:null,month:null,payment_remain_1:null,payment_card_type:null,payment_book_id:null,name:w.username,isApk:"web",payment_card_id:null,payment_remain_fees:null,charge:{num_platform_percent:null!==(n=null===M||void 0===M||null===(l=M.platform_charges)||void 0===l?void 0:l.percentage)&&void 0!==n?n:0,num_platform_max:null!==(i=null===M||void 0===M||null===(o=M.platform_charges)||void 0===o?void 0:o.maximum)&&void 0!==i?i:0,num_trans_pecent:null!==(a=null===M||void 0===M||null===(d=M.transaction_charges)||void 0===d?void 0:d.percentage)&&void 0!==a?a:0,num_trans_max:null!==(s=null===M||void 0===M||null===(r=M.transaction_charges)||void 0===r?void 0:r.maximum)&&void 0!==s?s:0,num_app_max:null!==(u=null===M||void 0===M?void 0:M.application_charges)&&void 0!==u?u:0},nsid:null}).then((e=>{var t,n;window.onScriptLoad(null===e||void 0===e||null===(t=e.response)||void 0===t||null===(n=t.body)||void 0===n?void 0:n.txnToken,null===e||void 0===e?void 0:e.order,null===e||void 0===e?void 0:e.amount)})).catch((e=>{console.info(e)}))},isOptimzed:!0}):(0,R.jsx)(y.Z,{onClose:o,children:(0,R.jsxs)("div",{className:b.Z.modal_container,children:[(0,R.jsx)(f.default,{children:(0,R.jsxs)("div",{className:b.Z.modal_container_outer_header,children:[(0,R.jsx)("div",{className:b.Z.modal_container_header,children:(0,R.jsx)("h6",{children:j("collect_fees")})}),(0,R.jsx)("img",{src:"".concat(v.J7,"/close.svg"),alt:"close icon",onClick:o})]})}),(0,R.jsx)(p.Z,{}),(0,R.jsxs)(f.default,{customStyle:{paddingTop:"0"},children:[(0,R.jsxs)("div",{className:b.Z.admission_fees_row,children:[(0,R.jsxs)("h6",{children:[j("applicable_amount")," :"]}),(0,R.jsxs)("h6",{children:[j("rs_only")," ",null!==(n=null===m||void 0===m||null===(i=m.other_fees_obj)||void 0===i?void 0:i.price)&&void 0!==n?n:0]})]}),(0,R.jsx)(S.Z,{label:j("amount"),placeholder:j("amoute_details_collect"),name:"amount",value:L.amount,type:"tel",onChange:e=>{A((t=>({...t,amount:+e.target.value,fee_payment_amount:+e.target.value}))),B((t=>({...t,amount:+e.target.value})))},errorShow:G.amount,msg:G.rest_issue}),(0,R.jsx)(C.Z,{paymentHeading:j("payment_type_mode"),selectLabel:j("mode_placeholder"),onClick:e=>{A((t=>({...t,mode:"Online",fee_payment_mode:e})))},errorShow:G.fee_payment_mode,defalutValue:L.fee_payment_mode,selectedValue:j("please_select_payment_mode"),isAuthority:x?"admissionCollectMode":"admissionCollectModePg",customLabelStyle:{marginTop:"0"}}),"Payment Gateway"===L.fee_payment_mode?(0,R.jsx)(g.Z,{label:"collect",onAction:()=>{let e=(0,k.l)({amount:U.amount});(0,k.x)(e)?null!==M&&void 0!==M&&M.institute?d&&c&&null!==m&&void 0!==m&&m._id&&!x&&B((e=>({...e,isTransaction:!0}))):H({open:!0,msg:"Online Payment Not Activated",variant:"error"}):q(e)}}):(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(Z.Z,{label:j("select_date_of_transaction"),placeholder:j("please_select_date"),name:"transaction_date",value:L.transaction_date,onChange:e=>{A((t=>({...t,transaction_date:(0,I.jh)(e)})))},errorShow:G.transaction_date}),"Cash"===L.fee_payment_mode?null:(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(S.Z,{label:j("bank_name_collect"),placeholder:j("please_enter_bank_name"),name:"fee_bank_name",value:L.fee_bank_name,type:"text",onChange:J}),(0,R.jsx)(S.Z,{label:j("banke_holder_name"),placeholder:j("please_enter_name_of_bank_holder"),name:"fee_bank_holder",value:L.fee_bank_holder,type:"text",onChange:J}),(0,R.jsx)(S.Z,{label:j("cheque_dd_neft"),placeholder:j("please_enter_utr_ref_number"),name:"fee_utr_reference",value:L.fee_utr_reference,type:"text",onChange:J})]}),(0,R.jsx)(g.Z,{label:"collect",onAction:()=>{let e=(0,k.l)(L,["mode","fee_payment_amount","fee_bank_name","fee_bank_holder","fee_utr_reference"]);var t,n,l,i,a,s,u;(0,k.x)(e)&&null!==m&&void 0!==m&&m._id&&c?(P((e=>!e)),$({fid:d,bodyParameter:{ofid:c,sid:null===m||void 0===m?void 0:m._id,amount:null!==(t=null===L||void 0===L?void 0:L.amount)&&void 0!==t?t:0,mode:"Cash"===(null===L||void 0===L?void 0:L.fee_payment_mode)?"Offline":null!==(n=null===L||void 0===L?void 0:L.mode)&&void 0!==n?n:"",fee_payment_mode:"Cash"===(null===L||void 0===L?void 0:L.fee_payment_mode)?"By Cash":null===L||void 0===L?void 0:L.fee_payment_mode,fee_payment_amount:null!==(l=null===L||void 0===L?void 0:L.fee_payment_amount)&&void 0!==l?l:0,transaction_date:null!==(i=(0,I._1)(L.transaction_date))&&void 0!==i?i:"",fee_bank_name:null!==(a=null===L||void 0===L?void 0:L.fee_bank_name)&&void 0!==a?a:"",fee_bank_holder:null!==(s=null===L||void 0===L?void 0:L.fee_bank_holder)&&void 0!==s?s:"",fee_utr_reference:null!==(u=null===L||void 0===L?void 0:L.fee_utr_reference)&&void 0!==u?u:""}}).then((()=>{r(),P((e=>!e)),o()})).catch({})):q(e)}})]})]})]})}),E&&(0,R.jsx)(_.default,{}),(0,R.jsx)(T.Z,{eventState:D,eventStateHandler:H})]})};var P=n(89064);const w=e=>{let{ofid:t,onClose:n,menuData:i,onRefetch:o}=e;const{t:a}=(0,l.$G)(),[d,r]=(0,s.useState)(!1),[c,v]=(0,s.useState)({open:!1,msg:"",variant:"error"}),[m]=(0,u.M0)();return(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(P.Z,{onClose:n,disabled:d,children:(0,R.jsx)("h6",{onClick:()=>{null!==i&&void 0!==i&&i._id&&t&&(r((e=>!e)),m({ofid:t,bodyParameter:{students:[null===i||void 0===i?void 0:i._id]}}).then((e=>{v({open:!0,msg:"Time out of request...",variant:"error"}),o(),r((e=>!e)),n()})).catch({}))},children:a("remove")})}),(0,R.jsx)(T.Z,{eventState:c,eventStateHandler:v})]})},L=e=>{var t,n,i,o,a,d,r,u,c,m,_;let{student:h,financeId:f,onRefetch:p,otherFeesId:y,instituteId:b,ofid:S}=e;const{t:Z}=(0,l.$G)(),[I,C]=(0,s.useState)(""),k=()=>{C("")};return(0,R.jsxs)(R.Fragment,{children:[(0,R.jsxs)("div",{className:j.Z.iadcc_card_hover,children:[(0,R.jsxs)("div",{className:j.Z.sf_card_contatiner,children:[(0,R.jsx)("img",{src:null!==h&&void 0!==h&&h.studentProfilePhoto?"".concat(x.yI,"/").concat(h.studentProfilePhoto):"".concat(v.p3,"/feed-user-avatar.svg"),loading:"lazy",alt:"avatar",style:{width:"2.5rem",height:"2.5rem"}}),(0,R.jsxs)("div",{className:j.Z.sf_card_contatiner_inner,children:[(0,R.jsx)("h6",{children:"".concat(null!==(t=null===h||void 0===h?void 0:h.studentFirstName)&&void 0!==t?t:""," ").concat(null!==(n=null===h||void 0===h?void 0:h.studentMiddleName)&&void 0!==n?n:""," ").concat(null!==(i=null===h||void 0===h?void 0:h.studentLastName)&&void 0!==i?i:"")}),(0,R.jsxs)("p",{children:[Z("gr_number")," ",": ",null!==(o=null===h||void 0===h?void 0:h.studentGRNO)&&void 0!==o?o:""]})]})]}),"Paid"===(null===h||void 0===h||null===(a=h.other_fees_obj)||void 0===a?void 0:a.status)?(0,R.jsxs)("div",{style:{display:"flex",alignItems:"flex-start",gap:"1rem"},children:[(0,R.jsxs)("div",{className:j.Z.sf_card_contatiner_inner,children:[(0,R.jsxs)("h6",{children:["Rs. ",null!==(d=null===h||void 0===h||null===(r=h.other_fees_obj)||void 0===r?void 0:r.price)&&void 0!==d?d:0]}),(0,R.jsx)("p",{children:Z("amount")})]}),(0,R.jsx)("div",{className:j.Z.sf_card_contatiner_inner,children:null!==h&&void 0!==h&&null!==(u=h.other_fees_obj)&&void 0!==u&&u.receipt_file?(0,R.jsx)("a",{href:"".concat(x.q2,"/").concat(null===h||void 0===h||null===(c=h.other_fees_obj)||void 0===c?void 0:c.receipt_file),target:"_blank",rel:"noopener noreferrer",children:(0,R.jsx)("img",{src:"".concat(v.J7,"/receipt.svg"),alt:"receipt icon",style:{height:"1.5rem"}})}):null})]}):(0,R.jsxs)("div",{style:{display:"flex",alignItems:"flex-start",gap:"1rem"},children:[(0,R.jsxs)("div",{className:j.Z.sf_card_contatiner_inner,children:[(0,R.jsxs)("h6",{children:["Rs. ",null!==(m=null===h||void 0===h||null===(_=h.other_fees_obj)||void 0===_?void 0:_.price)&&void 0!==m?m:0]}),(0,R.jsx)("p",{children:Z("amount")})]}),(0,R.jsx)(g.Z,{label:"collect_fees",onAction:()=>{C(1)},customStyle:{margin:"0",padding:"0.4rem 1rem"}}),(0,R.jsx)("img",{src:"".concat(v.J7,"/menu.svg"),alt:"menu icon",onClick:e=>{C(2)}})]})]}),1===I?(0,R.jsx)(E,{financeId:f,onClose:k,onRefetch:p,student:h,otherFeesId:y,instituteId:b}):2===I?(0,R.jsx)(w,{onClose:k,onRefetch:p,menuData:h,ofid:S}):null]})};var A=n(43172),G=n(13182),q=n(73711);const D=e=>{var t,n,i,d,x,j;let{ofid:y,instituteId:b,financeId:S}=e;const{t:Z}=(0,l.$G)(),I=(0,a.TH)(),C=(0,a.UO)(),k=(0,a.s0)(),[N,F]=(0,s.useState)(""),[O,T]=(0,s.useState)(""),[E,P]=(0,s.useState)(1),[w,D]=(0,s.useState)(!0),[H,U]=(0,r.YD)({skip:N}),[B,M]=(0,s.useState)(""),[$,J]=(0,s.useState)([]),[K,Y]=(0,s.useState)(null),[z,V]=(0,s.useState)(!1),[W]=(0,u.YC)(),[Q]=(0,u.VF)(),[X]=(0,u.zY)(),{financeOneOtherFeesStudentList:ee,financeOneOtherFeesStudentListLoading:te,financeOneOtherFeesStudentListRefetch:ne}=(0,u.Jo)({data:{ofid:y,page:E,limit:10,search:N,type:""},skip:!y});(0,s.useEffect)((()=>{U&&w&&P((e=>e+1))}),[U,w]),(0,s.useEffect)((()=>{var e;if(null!==ee&&void 0!==ee&&null!==(e=ee.list)&&void 0!==e&&e.length){var t;let e=(0,c.f)(null===ee||void 0===ee||null===(t=ee.list)||void 0===t?void 0:t.length);D((()=>e))}}),[null===ee||void 0===ee||null===(t=ee.list)||void 0===t?void 0:t.length]);const le=(0,s.useCallback)((()=>{P((()=>1)),ne()}),[]),ie=()=>{M("")};return(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(f.default,{children:(0,R.jsxs)("div",{className:o.Z.fm_search_full,children:[(0,R.jsx)("section",{className:o.Z.fm_search_full_container,children:(0,R.jsxs)("div",{className:o.Z.fm_search_full_container_inner,children:[(0,R.jsx)("img",{className:o.Z.fm_search_full_icon,alt:"search icon",src:"".concat(v.dB,"/navbar-search.svg")}),(0,R.jsx)("input",{type:"text",placeholder:Z("search"),onChange:e=>{var t;!te&&(null===ee||void 0===ee||null===(t=ee.list)||void 0===t?void 0:t.length)>=0&&T(e.target.value)},onKeyUp:e=>{"Enter"===e.key&&(P((()=>1)),F(O))},value:O})]})}),(0,R.jsx)(g.Z,{label:"add_single_student",customStyle:{paddingBlock:"0.4rem",margin:"0",minWidth:"fit-content"},onAction:()=>{M(2)}}),(0,R.jsx)(g.Z,{label:"add_student",customStyle:{paddingBlock:"0.4rem",margin:"0",minWidth:"fit-content"},onAction:()=>{M(1)}}),(0,R.jsx)(g.Z,{label:"export",customStyle:{margin:"0",padding:"0.4rem 1rem",width:"fit-content"},onAction:()=>{y&&(V((e=>!e)),Q({ofid:y}).then((()=>{var e;let t="Institute"===(null===(e=I.state)||void 0===e?void 0:e.urlOffSet)?"/q/".concat(C.username,"/institute/member/finance?type=export"):"/q/".concat(C.username,"/member/staff/finance?type=export");k(t,{state:I.state})})).catch({}))}})]})}),(0,R.jsx)(p.Z,{}),(0,R.jsxs)(f.default,{customStyle:{paddingTop:"0"},children:[null===ee||void 0===ee||null===(n=ee.list)||void 0===n?void 0:n.map(((e,t)=>{var n;return(null===ee||void 0===ee||null===(n=ee.list)||void 0===n?void 0:n.length)===t+1?(0,R.jsx)("div",{ref:H,children:(0,R.jsx)(L,{student:e,financeId:S,instituteId:b,otherFeesId:y,onRefetch:le,ofid:y})},null===e||void 0===e?void 0:e._id):(0,R.jsx)(L,{student:e,financeId:S,instituteId:b,otherFeesId:y,onRefetch:le,ofid:y},null===e||void 0===e?void 0:e._id)})),te?N?(0,R.jsx)(_.default,{}):(0,R.jsx)(R.Fragment,{children:1===E?(0,R.jsx)(_.default,{}):(0,R.jsx)(h.Z,{})}):N?0===(null===ee||void 0===ee||null===(i=ee.list)||void 0===i?void 0:i.length)&&(0,R.jsx)(m.Z,{title:"No student found related this search.",customStyleContainer:{marginTop:"1.5rem"}}):0===(null===ee||void 0===ee||null===(d=ee.list)||void 0===d?void 0:d.length)&&(0,R.jsx)(m.Z,{title:"No student.",customStyleContainer:{marginTop:"1.5rem"}})]}),1===B?(0,R.jsx)(A.Z,{title:Z("select_student"),onClose:ie,instituteId:b,isMultiSelect:!0,onMultiSelect:e=>{null!==$&&void 0!==$&&$.includes(null===e||void 0===e?void 0:e._id)?J((t=>null===t||void 0===t?void 0:t.filter((t=>t!==(null===e||void 0===e?void 0:e._id))))):J((t=>[...t,null===e||void 0===e?void 0:e._id]))},onDone:()=>{S&&(null===$||void 0===$?void 0:$.length)>0&&y&&(V((e=>!e)),W({fid:S,bodyParameter:{students:$,ofid:y}}).then((()=>{le(),V((e=>!e)),ie()})).catch({}))},selectList:$,buttonTitle:"add"}):2===B?(0,R.jsx)(A.Z,{title:Z("select_student"),onClose:ie,instituteId:b,onSelectStudent:e=>{Y(e),M(3)},selectedId:null===K||void 0===K?void 0:K._id}):3===B?(0,R.jsx)(G.Z,{onClose:ie,onParentClose:()=>{},instituteId:b,onGrabCollectFees:e=>{S&&null!==K&&void 0!==K&&K._id&&y&&(V((e=>!e)),X({fid:S,bodyParameter:{students:[null===K||void 0===K?void 0:K._id],ofid:y,...e}}).then((e=>{M(4),V((e=>!e))})).catch({}))},singleStudent:K,isOtherFees:"OTHER_FEES",applicant:{head:null===(x=I.state)||void 0===x||null===(j=x.otherData)||void 0===j?void 0:j.payable_amount},ofid:y,financeId:S}):4===B?(0,R.jsx)(q.Z,{applicant:K,onClose:()=>{le(),Y(null),ie()},ofid:y}):null,z&&(0,R.jsx)(_.default,{})]})};var H=n(98967),U=n(63162);const B=e=>{let{ofid:t,onClose:n,menuData:i,onRefetch:o}=e;const{t:a}=(0,l.$G)(),[d,r]=(0,s.useState)(!1),[c]=(0,u.M0)();return(0,R.jsx)(R.Fragment,{children:(0,R.jsx)(P.Z,{onClose:n,disabled:d,children:(0,R.jsx)("h6",{onClick:()=>{null!==i&&void 0!==i&&i._id&&t&&(r((e=>!e)),c({ofid:t,bodyParameter:{students:[]}}).then((()=>{o(),r((e=>!e)),n()})).catch({}))},children:a("remove")})})})},M=e=>{var t,n,i,o,a,d,r;let{student:u,financeId:c,onRefetch:m,otherFeesId:_,instituteId:h,ofid:f}=e;const{t:p}=(0,l.$G)(),[g,y]=(0,s.useState)(""),b=()=>{y("")};return(0,R.jsxs)(R.Fragment,{children:[(0,R.jsxs)("div",{className:j.Z.iadcc_card_hover,children:[(0,R.jsxs)("div",{className:j.Z.sf_card_contatiner,children:[(0,R.jsx)("img",{src:"".concat(v.p3,"/feed-user-avatar.svg"),loading:"lazy",alt:"avatar",style:{width:"2.5rem",height:"2.5rem"}}),(0,R.jsxs)("div",{className:j.Z.sf_card_contatiner_inner,children:[(0,R.jsx)("h6",{children:null!==(t=null===u||void 0===u?void 0:u.student)&&void 0!==t?t:""}),(0,R.jsxs)("p",{children:[p("batch")," ",": ",null!==(n=null===u||void 0===u?void 0:u.batch)&&void 0!==n?n:"",", ",p("student_class"),": ",null===u||void 0===u?void 0:u.classes,", ",p("roll_number")," ",": ",null!==(i=null===u||void 0===u?void 0:u.roll_no)&&void 0!==i?i:""]})]})]}),(0,R.jsxs)("div",{style:{display:"flex",alignItems:"flex-start",gap:"1rem"},children:[(0,R.jsxs)("div",{className:j.Z.sf_card_contatiner_inner,children:[(0,R.jsxs)("h6",{children:["Rs. ",null!==(o=null===u||void 0===u||null===(a=u.fee_receipt)||void 0===a?void 0:a.fee_payment_amount)&&void 0!==o?o:0]}),(0,R.jsx)("p",{children:p("amount")})]}),null!==u&&void 0!==u&&null!==(d=u.fee_receipt)&&void 0!==d&&d.receipt_file?(0,R.jsx)("div",{className:j.Z.sf_card_contatiner_inner,children:(0,R.jsx)("a",{href:"".concat(x.q2,"/").concat(null===u||void 0===u||null===(r=u.fee_receipt)||void 0===r?void 0:r.receipt_file),target:"_blank",rel:"noopener noreferrer",children:(0,R.jsx)("img",{src:"".concat(v.J7,"/receipt.svg"),alt:"receipt icon",style:{height:"1.5rem"}})})}):null]})]}),1===g?(0,R.jsx)(E,{financeId:c,onClose:b,onRefetch:m,student:u,otherFeesId:_,instituteId:h}):2===g?(0,R.jsx)(B,{onClose:b,onRefetch:m,menuData:u,ofid:f}):null]})};var $=n(27976);const J=e=>{var t,n,i,d,x,j;let{ofid:y,instituteId:b,financeId:S}=e;const{t:Z}=(0,l.$G)(),I=(0,a.TH)(),C=(0,a.UO)(),k=(0,a.s0)(),[N,F]=(0,s.useState)(""),[O,T]=(0,s.useState)(""),[E,P]=(0,s.useState)(1),[w,L]=(0,s.useState)(!0),[A,q]=(0,r.YD)({skip:N}),[D,H]=(0,s.useState)(""),[U,B]=(0,s.useState)(null),[J,K]=(0,s.useState)(!1),[Y]=(0,u.UG)(),[z]=(0,u.UX)(),{financeOtherFeesNonExistingStudentList:V,financeOtherFeesNonExistingStudentListLoading:W,financeOtherFeesNonExistingStudentListRefetch:Q}=(0,u.vQ)({data:{ofid:y,page:E,limit:10,search:N,type:""},skip:!y});(0,s.useEffect)((()=>{q&&w&&P((e=>e+1))}),[q,w]),(0,s.useEffect)((()=>{var e;if(null!==V&&void 0!==V&&null!==(e=V.list)&&void 0!==e&&e.length){var t;let e=(0,c.f)(null===V||void 0===V||null===(t=V.list)||void 0===t?void 0:t.length);L((()=>e))}}),[null===V||void 0===V||null===(t=V.list)||void 0===t?void 0:t.length]);const X=(0,s.useCallback)((()=>{P((()=>1)),Q()}),[]),ee=()=>{H("")};return(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(f.default,{children:(0,R.jsxs)("div",{className:o.Z.fm_search_full,children:[(0,R.jsx)("section",{className:o.Z.fm_search_full_container,children:(0,R.jsxs)("div",{className:o.Z.fm_search_full_container_inner,children:[(0,R.jsx)("img",{className:o.Z.fm_search_full_icon,alt:"search icon",src:"".concat(v.dB,"/navbar-search.svg")}),(0,R.jsx)("input",{type:"text",placeholder:Z("search"),onChange:e=>{var t;!W&&(null===V||void 0===V||null===(t=V.list)||void 0===t?void 0:t.length)>=0&&T(e.target.value)},onKeyUp:e=>{"Enter"===e.key&&(P((()=>1)),F(O))},value:O})]})}),(0,R.jsx)(g.Z,{label:"add_student",customStyle:{paddingBlock:"0.4rem",margin:"0",minWidth:"fit-content"},onAction:()=>{H(1)}}),(0,R.jsx)(g.Z,{label:"export",customStyle:{margin:"0",padding:"0.4rem 1rem",width:"fit-content"},onAction:()=>{y&&(K((e=>!e)),z({ofid:y}).then((()=>{var e;let t="Institute"===(null===(e=I.state)||void 0===e?void 0:e.urlOffSet)?"/q/".concat(C.username,"/institute/member/finance?type=export"):"/q/".concat(C.username,"/member/staff/finance?type=export");k(t,{state:I.state})})).catch({}))}})]})}),(0,R.jsx)(p.Z,{}),(0,R.jsxs)(f.default,{customStyle:{paddingTop:"0"},children:[null===V||void 0===V||null===(n=V.list)||void 0===n?void 0:n.map(((e,t)=>{var n;return(null===V||void 0===V||null===(n=V.list)||void 0===n?void 0:n.length)===t+1?(0,R.jsx)("div",{ref:A,children:(0,R.jsx)(M,{student:e,financeId:S,instituteId:b,otherFeesId:y,onRefetch:X,ofid:y})},null===e||void 0===e?void 0:e._id):(0,R.jsx)(M,{student:e,financeId:S,instituteId:b,otherFeesId:y,onRefetch:X,ofid:y},null===e||void 0===e?void 0:e._id)})),W?N?(0,R.jsx)(_.default,{}):(0,R.jsx)(R.Fragment,{children:1===E?(0,R.jsx)(_.default,{}):(0,R.jsx)(h.Z,{})}):N?0===(null===V||void 0===V||null===(i=V.list)||void 0===i?void 0:i.length)&&(0,R.jsx)(m.Z,{title:"No student found related this search.",customStyleContainer:{marginTop:"1.5rem"}}):0===(null===V||void 0===V||null===(d=V.list)||void 0===d?void 0:d.length)&&(0,R.jsx)(m.Z,{title:"No student.",customStyleContainer:{marginTop:"1.5rem"}})]}),1===D?(0,R.jsx)($.Z,{onClose:ee,singleStudent:U,onNext:e=>{B(e),H(2)}}):2===D?(0,R.jsx)(G.Z,{onClose:()=>H(1),onParentClose:()=>{},instituteId:b,onGrabCollectFees:e=>{S&&null!==U&&void 0!==U&&U.student_name&&y&&(K((e=>!e)),Y({fid:S,bodyParameter:{...U,ofid:y,...e}}).then((()=>{X(),B(null),K((e=>!e)),ee()})).catch({}))},singleStudent:U,isOtherFees:"OTHER_FEES",isNonExisting:!0,applicant:{head:null===(x=I.state)||void 0===x||null===(j=x.otherData)||void 0===j?void 0:j.payable_amount}}):null,J&&(0,R.jsx)(_.default,{})]})},K=e=>{var t,n,s,r,u,c,v,m;let{fid:_,instituteId:h}=e;const{t:x}=(0,l.$G)(),j=(0,a.TH)(),g=(0,a.UO)(),[y]=(0,d.lr)();return(0,R.jsx)(R.Fragment,{children:(0,R.jsxs)(i.default,{children:[(0,R.jsx)(f.default,{children:(0,R.jsx)("div",{className:o.Z.fm_header_container,children:(0,R.jsxs)("h6",{children:[null!==(t=null===(n=j.state)||void 0===n?void 0:n.feesName)&&void 0!==t?t:""," ","(",(0,R.jsx)("span",{style:{color:"#00f"},children:null===(s=j.state)||void 0===s||null===(r=s.otherData)||void 0===r?void 0:r.paid}),"/",null===(u=j.state)||void 0===u||null===(c=u.otherData)||void 0===c?void 0:c.rmaining,")"]})})}),(0,R.jsx)(p.Z,{}),(0,R.jsx)(H.Z,{children:Y.map((e=>{var t,n;return(0,R.jsx)(U.Z,{tab:e,isLink:!0,isActive:null===(t=e.groupIs)||void 0===t?void 0:t.includes(y.get("n")),parentState:j.state,url:"Institute"===(null===(n=j.state)||void 0===n?void 0:n.urlOffSet)?"/q/".concat(g.username,"/institute/member/finance?type=other-fees-detail").concat(e.urlKey):"/q/".concat(g.username,"/member/staff/finance?type=other-fees-detail").concat(e.urlKey)},null===e||void 0===e?void 0:e.id)}))}),(0,R.jsx)(p.Z,{customStyleBorder:{marginTop:"0"}}),"non-existing"===y.get("n")?(0,R.jsx)(J,{ofid:null===(v=j.state)||void 0===v?void 0:v.feesId,instituteId:h,financeId:_}):(0,R.jsx)(D,{ofid:null===(m=j.state)||void 0===m?void 0:m.feesId,instituteId:h,financeId:_})]})})},Y=[{label:"existing_student",id:"existing",urlKey:"",groupIs:["",null]},{label:"non_existing_student",id:"non-existing",urlKey:"&n=non-existing",groupIs:["non-existing"]}]}}]);
//# sourceMappingURL=27740.b2b35577.chunk.js.map