"use strict";(self.webpackChunkmithkal_qviple=self.webpackChunkmithkal_qviple||[]).push([[13244],{45100:(e,l,n)=>{n.d(l,{Z:()=>t});var i=n(39230),a=n(80476),o=n(80184);const t=e=>{let{label:l,count:n,onAction:t,customStyle:d,isTranslate:s,showZero:r,children:u}=e;const{t:c}=(0,i.$G)();return s?(0,o.jsxs)("div",{className:a.Z.ccb_button,onClick:t,style:d,children:[u,r?(0,o.jsx)("span",{style:{marginRight:"0.3rem"},children:n}):n>0?(0,o.jsxs)("span",{style:{marginRight:"0.3rem"},children:[n," "]}):null,l]}):(0,o.jsxs)("div",{className:a.Z.ccb_button,onClick:t,style:d,children:[u,r?(0,o.jsx)("span",{style:{marginRight:"0.3rem"},children:n}):n>0?(0,o.jsxs)("span",{style:{marginRight:"0.3rem"},children:[n," "]}):null,c(l)]})}},63281:(e,l,n)=>{n.d(l,{Z:()=>x});var i=n(39230),a=n(38857),o=n(21348),t=n(16925),d=n(90904),s=n(72791),r=n(98684),u=n(43317),c=n(55336),v=n(93638),m=n(16871),_=n(1669),p=n(2651),h=n(49806),f=n(80184);const g=e=>{var l;let{docs:n,selectList:i,onMultiSelect:a}=e;return(0,f.jsx)(f.Fragment,{children:(0,f.jsxs)("div",{className:h.Z.assign_show_list_each,onClick:()=>{a(n)},style:{width:"46%",paddingInline:"0"},children:[null!==i&&void 0!==i&&i.includes(null===n||void 0===n?void 0:n._id)?(0,f.jsx)("img",{src:"".concat(r.U_,"/check.svg"),alt:"icon",style:{height:"1.3rem",width:"1.3rem",borderRadius:"0",cursor:"pointer"}}):(0,f.jsx)("img",{style:{height:"1.3rem",width:"1.3rem",borderRadius:"0",cursor:"pointer"},src:"".concat(r.U_,"/uncheck.svg"),alt:"icon"}),(0,f.jsx)("div",{className:h.Z.assign_each_paragraph,children:(0,f.jsx)("h6",{children:null!==(l=null===n||void 0===n?void 0:n.document_name)&&void 0!==l?l:""})})]})})},y=e=>{var l,n;let{aid:i,onMultiSelect:a,selectList:o}=e;const{admissionDocumentList:t,admissionDocumentListLoading:d}=(0,u.cR)({data:{aid:i,page:1,limit:1e3,search:""},skip:!i});return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("div",{style:{display:"flex",width:"100%",flexWrap:"wrap",gap:"8%"},children:null===t||void 0===t||null===(l=t.list)||void 0===l?void 0:l.map((e=>(0,f.jsx)(g,{docs:e,selectList:o,onMultiSelect:a},null===e||void 0===e?void 0:e._id)))}),d?(0,f.jsx)(_.Z,{}):0===(null===t||void 0===t||null===(n=t.list)||void 0===n?void 0:n.length)&&(0,f.jsx)(p.Z,{title:"No document."})]})},x=e=>{var l,n,_,p,h,g;let{onClose:x,applicant:j,appId:b,onRefetch:Z,admissionDocsCollect:k,aid:C}=e;const{t:S}=(0,i.$G)(),N=(0,m.TH)(),[I,A]=(0,s.useState)({listId:[],lsit:[]}),[w,T]=(0,s.useState)(!1),[F]=(0,u.O1)();return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(a.Z,{onClose:x,children:(0,f.jsxs)("div",{className:t.Z.modal_container,style:{minWidth:"48rem",maxWidth:"48rem"},children:[(0,f.jsx)(o.Z,{children:(0,f.jsxs)("div",{className:t.Z.modal_container_outer_header,children:[(0,f.jsx)("div",{className:t.Z.modal_container_header,children:(0,f.jsx)("h6",{children:S("collect_required_document")})}),(0,f.jsx)("img",{src:"".concat(r.J7,"/close.svg"),alt:"close icon",onClick:x})]})}),(0,f.jsx)(d.Z,{}),(0,f.jsxs)(o.Z,{customStyle:{paddingTop:"0"},children:[k?(0,f.jsxs)(o.Z,{customStyle:{paddingTop:"0.3rem",marginBottom:"1rem"},children:[(0,f.jsx)("div",{className:t.Z.modal_container_header,style:{marginBottom:"0.5rem"},children:(0,f.jsx)("h6",{children:S("required_document_not_submitted")})}),(0,f.jsx)(y,{aid:C,selectList:I.listId,onMultiSelect:e=>{var l;null!==(l=I.listId)&&void 0!==l&&l.includes(null===e||void 0===e?void 0:e._id)?A((l=>{var n,i;return{...l,listId:null===(n=l.listId)||void 0===n?void 0:n.filter((l=>l!==(null===e||void 0===e?void 0:e._id))),lsit:null===(i=l.lsit)||void 0===i?void 0:i.filter((l=>(null===l||void 0===l?void 0:l.docs)!==(null===e||void 0===e?void 0:e._id)))}})):A((l=>({...l,lsit:[...l.lsit,{docs:null===e||void 0===e?void 0:e._id,not_filled:"Yes"}],listId:[...l.listId,null===e||void 0===e?void 0:e._id]})))}})]}):null,(0,f.jsxs)("div",{className:t.Z.modal_container_header,style:{flexDirection:"column"},children:[(0,f.jsx)("p",{children:S("collecting_documents_of_student")}),(0,f.jsx)("h6",{children:"".concat(null!==(l=null===j||void 0===j||null===(n=j.student)||void 0===n?void 0:n.studentFirstName)&&void 0!==l?l:""," ").concat(null!==j&&void 0!==j&&null!==(_=j.student)&&void 0!==_&&_.studentMiddleName?null===j||void 0===j||null===(p=j.student)||void 0===p?void 0:p.studentMiddleName:""," ").concat(null!==(h=null===j||void 0===j||null===(g=j.student)||void 0===g?void 0:g.studentLastName)&&void 0!==h?h:"")})]}),(0,f.jsx)(v.Z,{label:"confirm",onAction:()=>{var e;if(null!==j&&void 0!==j&&null!==(e=j.student)&&void 0!==e&&e._id&&b&&null!==j&&void 0!==j&&j._id&&null!==j&&void 0!==j&&j.revert_request_status){var l,n;T((e=>!e));let e=[];k&&(e=I.lsit),F({sid:null===j||void 0===j||null===(l=j.student)||void 0===l?void 0:l._id,appId:b,document:{nest:null===j||void 0===j?void 0:j._id,revert_status:null===j||void 0===j?void 0:j.revert_request_status,staffId:null===(n=N.state)||void 0===n?void 0:n.sid,collect_docs:e}}).then((()=>{Z(),T((e=>!e)),x()})).catch((()=>{T((e=>!e))}))}}})]})]})}),w&&(0,f.jsx)(c.Z,{})]})}},98951:(e,l,n)=>{n.d(l,{Z:()=>w});var i=n(39230),a=n(38857),o=n(21348),t=n(16925),d=n(90904),s=n(72791),r=n(98684),u=n(55336),c=n(93638),v=n(61055),m=n(60924),_=n(43997),p=n(50518),h=n(43317),f=n(99183),g=n(20659),y=n(26071),x=n(7562),j=n(16871),b=n(60307),Z=n(71439),k=n(64499),C=n(85794),S=n(45100),N=n(1095),I=n(80184);const A=e=>{var l,n,u,c,v,m,_,p;let{onClose:h,applicant:f,appId:g,onRefetch:y}=e;const{t:x}=(0,i.$G)(),[j,Z]=(0,s.useState)({open:!1,msg:"",variant:"error"}),[k,A]=(0,s.useState)(null),{studentAdmissionFeeList:w,studentAdmissionFeeListRefetch:T}=(0,b.Wb)({sid:null===f||void 0===f||null===(l=f.student)||void 0===l?void 0:l._id,skip:!(null!==f&&void 0!==f&&null!==(n=f.student)&&void 0!==n&&n._id)});(0,s.useEffect)((()=>{if(w)for(let r of w){var e,l,n,i,a,o,t,d,s;if((null===r||void 0===r||null===(e=r.appId)||void 0===e?void 0:e._id)===g)if(null!==r&&void 0!==r&&null!==(l=r.applicable_card)&&void 0!==l&&null!==(n=l.remaining_array)&&void 0!==n&&null!==(i=n[0])&&void 0!==i&&null!==(a=i.fee_receipt)&&void 0!==a&&a.receipt_file)A(null===r||void 0===r||null===(o=r.applicable_card)||void 0===o||null===(t=o.remaining_array)||void 0===t||null===(d=t[0])||void 0===d||null===(s=d.fee_receipt)||void 0===s?void 0:s.receipt_file),Z({open:!1,msg:"",variant:"error"})}}),[w]);return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(a.Z,{onClose:()=>{},children:(0,I.jsxs)("div",{className:t.Z.modal_container,children:[(0,I.jsx)(o.Z,{children:(0,I.jsxs)("div",{className:t.Z.modal_container_outer_header,children:[(0,I.jsx)("div",{className:t.Z.modal_container_header,children:(0,I.jsx)("h6",{children:x("collect_fees_successfully")})}),(0,I.jsx)("img",{src:"".concat(r.J7,"/close.svg"),alt:"close icon",onClick:h})]})}),(0,I.jsx)(d.Z,{}),(0,I.jsxs)(o.Z,{customStyle:{paddingTop:"0"},children:[(0,I.jsxs)("div",{className:t.Z.modal_container_header,style:{flexDirection:"column",gap:"0"},children:[(0,I.jsx)("p",{style:{marginBottom:"0.5rem"},children:x("payment_of_student")}),(0,I.jsx)("h6",{children:"".concat(null!==(u=null===f||void 0===f||null===(c=f.student)||void 0===c?void 0:c.studentFirstName)&&void 0!==u?u:""," ").concat(null!==f&&void 0!==f&&null!==(v=f.student)&&void 0!==v&&v.studentMiddleName?null===f||void 0===f||null===(m=f.student)||void 0===m?void 0:m.studentMiddleName:""," ").concat(null!==(_=null===f||void 0===f||null===(p=f.student)||void 0===p?void 0:p.studentLastName)&&void 0!==_?_:"")})]}),k?(0,I.jsx)("a",{href:"".concat(N.q2,"/").concat(k),target:"_blank",rel:"noopener noreferrer",onClick:y,children:(0,I.jsx)(S.Z,{label:x("view_receipt"),customStyle:{"--ccb-bg":"#def3e1","--ccb-b":"#008000","--ccb-text":"#008000","--ccb-bg-h":"#def3e1","--ccb-text-h":"#008000",justifyContent:"Center",marginBlock:"1rem"}})}):(0,I.jsx)(S.Z,{label:x("view_receipt"),onAction:()=>{k||(Z({open:!0,msg:"Fee receipt generating in process. Please try after some time.",variant:"error"}),T())},customStyle:{"--ccb-bg":"#def3e1","--ccb-b":"#008000","--ccb-text":"#008000","--ccb-bg-h":"#def3e1","--ccb-text-h":"#008000",justifyContent:"Center",marginBlock:"1rem"}})]})]})}),(0,I.jsx)(C.Z,{eventState:j,eventStateHandler:Z})]})},w=e=>{var l,n,S,N,w,T,F,L,R,M,B,H,q,P,D;let{onClose:E,applicant:O,appId:V,onRefetch:G,financeId:J}=e;const{t:U}=(0,i.$G)(),W=(0,j.TH)(),[Y,$]=(0,s.useState)(!1),z=(0,j.UO)(),[K,Q]=(0,s.useState)({amount:"",mode:"",fee_payment_mode:"",fee_payment_amount:"",transaction_date:"",fee_bank_name:"",fee_bank_holder:"",fee_utr_reference:"",pay_remain:!1}),[X,ee]=(0,s.useState)(0),[le,ne]=(0,s.useState)(""),[ie,ae]=(0,s.useState)({open:!1,msg:"",variant:"error"}),[oe,te]=(0,s.useState)(0),[de,se]=(0,s.useState)({amount:0,type:"Admission",isTransaction:!1,pay_remain:!1}),{studentInstituteCharges:re}=(0,b.xY)({data:{id:null===O||void 0===O||null===(l=O.app_card)||void 0===l||null===(n=l.remaining_array)||void 0===n||null===(S=n[0])||void 0===S?void 0:S.instituteId},skip:!(null!==O&&void 0!==O&&null!==(N=O.app_card)&&void 0!==N&&null!==(w=N.remaining_array)&&void 0!==w&&null!==(T=w[0])&&void 0!==T&&T.instituteId)}),[ue]=(0,h.VO)(),[ce]=(0,b.zJ)();(0,s.useEffect)((()=>{var e,l,n;null!==O&&void 0!==O&&null!==(e=O.app_card)&&void 0!==e&&e.applicable_fee&&(Q((e=>{var l,n;return{...e,amount:+(null===O||void 0===O||null===(l=O.app_card)||void 0===l?void 0:l.applicable_fee),fee_payment_amount:+(null===O||void 0===O||null===(n=O.app_card)||void 0===n?void 0:n.applicable_fee)}})),se({amount:null!==(l=+(null===O||void 0===O||null===(n=O.app_card)||void 0===n?void 0:n.applicable_fee))&&void 0!==l?l:0,type:"Admission",isTransaction:!1,pay_remain:!1}))}),[null===O||void 0===O||null===(F=O.app_card)||void 0===F?void 0:F.applicable_fee]);const ve=e=>{Q((l=>({...l,[e.target.name]:e.target.value})))},me=e=>{Q((l=>({...l,pay_remain:e})));let l=0;if(e){let e=0;for(let l of null===O||void 0===O||null===(n=O.app_card)||void 0===n?void 0:n.remaining_array){var n;"Paid"!==(null===l||void 0===l?void 0:l.status)&&(e+=null===l||void 0===l?void 0:l.remainAmount)}ee(e),l=e}se(l>0?n=>({...n,pay_remain:e,amount:l}):l=>({...l,pay_remain:e}))};return(0,I.jsx)(I.Fragment,{children:1===oe?(0,I.jsx)(A,{applicant:O,onClose:E,appId:V,onRefetch:G}):(0,I.jsxs)(I.Fragment,{children:[de.isTransaction?(0,I.jsx)(Z.Z,{onClose:E,allContent:{...de,platform_charges:null===re||void 0===re||null===(L=re.platform_charges)||void 0===L?void 0:L.percentage},checkoutAdmissionHandler:()=>{var e,l,n,i,a,o,t,d,s,r,u,c,v,m,_,p,h,f,g,y,x,j,b,Z,C,S;let N=2.1*+(null===de||void 0===de?void 0:de.amount)/100,I=N+18*+N/100;const A=parseInt(null===de||void 0===de?void 0:de.amount);var w=Math.ceil(A+ +I.toFixed(2));(0,k.oU)({amount:null!==(e=+(null===de||void 0===de?void 0:de.amount))&&void 0!==e?e:10,amount_nocharges:null!==(l=+w)&&void 0!==l?l:0,type:"Admission",paidBy:"".concat(null===O||void 0===O||null===(n=O.student)||void 0===n?void 0:n._id),paidTo:"".concat(null===O||void 0===O||null===(i=O.app_card)||void 0===i||null===(a=i.remaining_array)||void 0===a||null===(o=a[0])||void 0===o?void 0:o.instituteId),moduleId:"".concat(null===O||void 0===O||null===(t=O.app_card)||void 0===t||null===(d=t.remaining_array)||void 0===d||null===(s=d[0])||void 0===s?void 0:s.appId),ad_status_id:null,payment_installment:null===O||void 0===O||null===(r=O.app_card)||void 0===r||null===(u=r.remaining_array)||void 0===u||null===(c=u[0])||void 0===c?void 0:c.installmentValue,ad_install:null,month:null,payment_remain_1:null,payment_card_type:null,payment_book_id:null,name:z.username,isApk:"web",payment_card_id:null!==(v=null===O||void 0===O||null===(m=O.app_card)||void 0===m?void 0:m.parent_card)&&void 0!==v?v:null,payment_remain_fees:de.pay_remain,charge:{num_platform_percent:null!==(_=null===re||void 0===re||null===(p=re.platform_charges)||void 0===p?void 0:p.percentage)&&void 0!==_?_:0,num_platform_max:null!==(h=null===re||void 0===re||null===(f=re.platform_charges)||void 0===f?void 0:f.maximum)&&void 0!==h?h:0,num_trans_pecent:null!==(g=null===re||void 0===re||null===(y=re.transaction_charges)||void 0===y?void 0:y.percentage)&&void 0!==g?g:0,num_trans_max:null!==(x=null===re||void 0===re||null===(j=re.transaction_charges)||void 0===j?void 0:j.maximum)&&void 0!==x?x:0,num_app_max:null!==(b=null===re||void 0===re?void 0:re.application_charges)&&void 0!==b?b:0},nsid:null===O||void 0===O||null===(Z=O.app_card)||void 0===Z||null===(C=Z.remaining_array)||void 0===C||null===(S=C[0])||void 0===S?void 0:S._id}).then((e=>{var l,n;window.onScriptLoad(null===e||void 0===e||null===(l=e.response)||void 0===l||null===(n=l.body)||void 0===n?void 0:n.txnToken,null===e||void 0===e?void 0:e.order,null===e||void 0===e?void 0:e.amount)})).catch((e=>{console.info(e)}))},isOptimzed:!0}):(0,I.jsx)(a.Z,{onClose:E,children:(0,I.jsxs)("div",{className:t.Z.modal_container,children:[(0,I.jsx)(o.Z,{children:(0,I.jsxs)("div",{className:t.Z.modal_container_outer_header,children:[(0,I.jsx)("div",{className:t.Z.modal_container_header,children:(0,I.jsx)("h6",{children:U("collect_fees")})}),(0,I.jsx)("img",{src:"".concat(r.J7,"/close.svg"),alt:"close icon",onClick:E})]})}),(0,I.jsx)(d.Z,{}),(0,I.jsxs)(o.Z,{customStyle:{paddingTop:"0"},children:[(0,I.jsxs)("div",{className:t.Z.admission_fees_row,children:[(0,I.jsxs)("h6",{children:[U("applicable_amount")," :"]}),(0,I.jsxs)("h6",{children:[U("rs_only")," ",null!==(R=null===O||void 0===O||null===(M=O.app_card)||void 0===M?void 0:M.applicable_fee)&&void 0!==R?R:0]})]}),null!==O&&void 0!==O&&null!==(B=O.fee_struct)&&void 0!==B&&B.total_installments&&+(null===O||void 0===O||null===(H=O.fee_struct)||void 0===H?void 0:H.total_installments)>1?(0,I.jsx)(g.Z,{label:"pay_rest_remaining_fees",children:null===x.nj||void 0===x.nj?void 0:x.nj.map((e=>(0,I.jsx)(y.Z,{tile:e,onTile:me,activeTile:K.pay_remain},null===e||void 0===e?void 0:e.id)))}):null,(0,I.jsx)(v.Z,{label:"".concat(U(K.pay_remain?"amount_remain_installment":"amount_first_installment")," ").concat(K.pay_remain?X:null===O||void 0===O||null===(q=O.app_card)||void 0===q||null===(P=q.remaining_array)||void 0===P||null===(D=P[0])||void 0===D?void 0:D.remainAmount),placeholder:U("amoute_details_collect"),name:"amount",value:K.amount,type:"tel",onChange:e=>{Q((l=>({...l,amount:+e.target.value,fee_payment_amount:+e.target.value}))),se((l=>({...l,amount:+e.target.value})))},errorShow:le.amount,msg:le.rest_issue}),(0,I.jsx)(p.Z,{paymentHeading:U("payment_type_mode"),selectLabel:U("mode_placeholder"),onClick:e=>{Q((l=>({...l,mode:"Online",fee_payment_mode:e})))},errorShow:le.fee_payment_mode,defalutValue:K.fee_payment_mode,selectedValue:U("please_select_payment_mode"),isAuthority:"admissionCollectModePg",customLabelStyle:{marginTop:"0"}}),"Payment Gateway"===K.fee_payment_mode?(0,I.jsx)(c.Z,{label:"collect",onAction:()=>{let e=(0,f.l)({amount:de.amount});var l,n,i,a;(0,f.x)(e)?de.pay_remain&&de.amount<X?ne({rest_issue:"Amount should not be less than total remaining fees"}):!de.pay_remain&&de.amount>(null===O||void 0===O||null===(l=O.app_card)||void 0===l||null===(n=l.remaining_array)||void 0===n||null===(i=n[0])||void 0===i?void 0:i.remainAmount)&&+(null===O||void 0===O||null===(a=O.fee_struct)||void 0===a?void 0:a.total_installments)>1?ne({rest_issue:"Amount should not be greater than remaining fees"}):null!==re&&void 0!==re&&re.institute?V&&J&&($((e=>!e)),ce({fid:J,appId:V,flow:"BY_DEPARTMENT"}).then((e=>{var l;$((e=>!e)),null!==e&&void 0!==e&&null!==(l=e.data)&&void 0!==l&&l.denied?ae({open:!0,msg:"Account is not activated",variant:"error"}):se((e=>({...e,isTransaction:!0})))})).catch({})):ae({open:!0,msg:"Online Payment Not Activated",variant:"error"}):ne(e)}}):(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(m.Z,{label:U("select_date_of_transaction"),placeholder:U("please_select_date"),name:"transaction_date",value:K.transaction_date,onChange:e=>{Q((l=>({...l,transaction_date:(0,_.jh)(e)})))},errorShow:le.transaction_date}),"Cash"===K.fee_payment_mode?null:(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(v.Z,{label:U("bank_name_collect"),placeholder:U("please_enter_bank_name"),name:"fee_bank_name",value:K.fee_bank_name,type:"text",onChange:ve}),(0,I.jsx)(v.Z,{label:U("banke_holder_name"),placeholder:U("please_enter_name_of_bank_holder"),name:"fee_bank_holder",value:K.fee_bank_holder,type:"text",onChange:ve}),(0,I.jsx)(v.Z,{label:U("cheque_dd_neft"),placeholder:U("please_enter_utr_ref_number"),name:"fee_utr_reference",value:K.fee_utr_reference,type:"text",onChange:ve})]}),(0,I.jsx)(c.Z,{label:"collect",onAction:()=>{let e=(0,f.l)(K,["mode","fee_payment_amount","fee_bank_name","fee_bank_holder","fee_utr_reference","pay_remain"]);var l,n,i,a;(0,f.x)(e)?K.pay_remain&&K.amount<X?ne({rest_issue:"Amount should not be less than total remaining fees"}):!K.pay_remain&&K.amount>(null===O||void 0===O||null===(l=O.app_card)||void 0===l||null===(n=l.remaining_array)||void 0===n||null===(i=n[0])||void 0===i?void 0:i.remainAmount)&&+(null===O||void 0===O||null===(a=O.fee_struct)||void 0===a?void 0:a.total_installments)>1?ne({rest_issue:"Amount should not be greater than remaining fees"}):V&&J&&($((e=>!e)),ce({fid:J,appId:V,flow:"BY_DEPARTMENT"}).then((e=>{var l,n,i,a,o,t,d,s,r,u,c,v,m,p,h,f,g,y,x,j,b,Z,k,C,S,N;null!==e&&void 0!==e&&null!==(l=e.data)&&void 0!==l&&l.denied?(ae({open:!0,msg:"Account is not activated",variant:"error"}),$((e=>!e))):null!==O&&void 0!==O&&null!==(n=O.student)&&void 0!==n&&n._id&&V&&ue({sid:null===O||void 0===O||null===(i=O.student)||void 0===i?void 0:i._id,appId:V,collect:{card_id:null===O||void 0===O||null===(a=O.app_card)||void 0===a?void 0:a._id,rid:null===O||void 0===O||null===(o=O.payment_flow)||void 0===o?void 0:o._id,raid:null===O||void 0===O||null===(t=O.app_card)||void 0===t||null===(d=t.remaining_array)||void 0===d||null===(s=d[0])||void 0===s?void 0:s._id,nsid:null===O||void 0===O||null===(r=O.app_card)||void 0===r||null===(u=r.remaining_array)||void 0===u||null===(c=u[0])||void 0===c?void 0:c._id,type:null===O||void 0===O||null===(v=O.app_card)||void 0===v||null===(m=v.remaining_array)||void 0===m||null===(p=m[0])||void 0===p?void 0:p.installmentValue,raid_1:null!==(h=null===O||void 0===O||null===(f=O.app_card)||void 0===f||null===(g=f.remaining_array)||void 0===g||null===(y=g[1])||void 0===y?void 0:y._id)&&void 0!==h?h:"",amount:null!==(x=null===K||void 0===K?void 0:K.amount)&&void 0!==x?x:"",mode:"Cash"===(null===K||void 0===K?void 0:K.fee_payment_mode)?"Offline":null!==(j=null===K||void 0===K?void 0:K.mode)&&void 0!==j?j:"",fee_payment_mode:"Cash"===(null===K||void 0===K?void 0:K.fee_payment_mode)?"By Cash":null===K||void 0===K?void 0:K.fee_payment_mode,fee_payment_amount:null!==(b=null===K||void 0===K?void 0:K.fee_payment_amount)&&void 0!==b?b:"",transaction_date:null!==(Z=(0,_._1)(K.transaction_date))&&void 0!==Z?Z:"",fee_bank_name:null!==(k=null===K||void 0===K?void 0:K.fee_bank_name)&&void 0!==k?k:"",fee_bank_holder:null!==(C=null===K||void 0===K?void 0:K.fee_bank_holder)&&void 0!==C?C:"",fee_utr_reference:null!==(S=null===K||void 0===K?void 0:K.fee_utr_reference)&&void 0!==S?S:"",pay_remain:K.pay_remain,staffId:null===(N=W.state)||void 0===N?void 0:N.sid}}).then((e=>{var l,n;"Already Fee Collected "===(null===e||void 0===e||null===(l=e.data)||void 0===l?void 0:l.message)?(ae({open:!0,msg:null===e||void 0===e||null===(n=e.data)||void 0===n?void 0:n.message,variant:"error"}),$((e=>!e))):(te(1),$((e=>!e)))})).catch({})})).catch({})):ne(e)}})]})]})]})}),Y&&(0,I.jsx)(u.Z,{}),(0,I.jsx)(C.Z,{eventState:ie,eventStateHandler:ae})]})})}},85794:(e,l,n)=>{n.d(l,{Z:()=>u});var i=n(72791),a=n(54164),o=n(15783),t=n(98684),d=n(80184);const s=e=>{let{onClose:l,isVariant:n,isHide:i,children:s}=e;return a.createPortal((0,d.jsx)("div",{children:(0,d.jsx)("div",{className:i?o.Z.notify_hide_overlay:o.Z.notify_overlay,children:(0,d.jsxs)("div",{className:o.Z.notify_container,style:{"--notify-bg-color":n},children:[s,(0,d.jsx)("img",{src:"".concat(t.Fk,"/close-white.svg"),alt:"close icon",onClick:l,className:o.Z.notify_close})]})})}),document.getElementById("notify-alert"))},r={success:"green",error:"#ed4a4a",warning:"orange"},u=e=>{var l;let{eventState:n,eventStateHandler:a}=e;const[t,u]=(0,i.useState)(!1);return null!==n&&void 0!==n&&n.open?(0,d.jsx)(s,{onClose:()=>{u(!0);let e=setTimeout((()=>{a((e=>({...e,open:!1,msg:"",variant:"success"}))),u(!1)}),500);return()=>clearTimeout(e)},isVariant:r[null===n||void 0===n?void 0:n.variant],isHide:t,children:(0,d.jsx)("h6",{className:o.Z.notify_message,children:null!==(l=null===n||void 0===n?void 0:n.msg)&&void 0!==l?l:""})}):null}}}]);
//# sourceMappingURL=13244.885b5aa7.chunk.js.map