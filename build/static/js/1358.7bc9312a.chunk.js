/*! For license information please see 1358.7bc9312a.chunk.js.LICENSE.txt */
(self.webpackChunkmithkal_qviple=self.webpackChunkmithkal_qviple||[]).push([[1358],{31358:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return k}});var o=n(29439),i=n(93405),l=n(63687),a=n(21348),d=n(39230),r=n(90904),s=n(43504),c=n(16871),u=n(63162),v=n(98967),f=n(84975),m=n(72791),_=n(23441),p=n(91427),h=n(57588),y=n(1413),x=n(55552),g=n(97892),F=n.n(g),N=n(82824),b=n(1095),T=n(98684),M=n(55336),w=n(37782),j=n(29017),S=n(69721),Z=n(62732),z=n(80184),Y=function(e){var t,i,l,a,r,u,v,_,p,h,g,Y,L,C,D,R,A,I,k,H,P,E,W,O,U=e.history,$=(0,d.$G)().t,q=(0,c.UO)(),G=(0,c.TH)(),B=(0,m.useState)(""),J=(0,o.Z)(B,2),K=J[0],Q=J[1],V=(0,m.useState)(!1),X=(0,o.Z)(V,2),ee=X[0],te=X[1],ne=(0,m.useState)(""),oe=(0,o.Z)(ne,2),ie=oe[0],le=oe[1],ae=(0,m.useState)(""),de=(0,o.Z)(ae,2),re=de[0],se=de[1],ce=(0,m.useState)(""),ue=(0,o.Z)(ce,2),ve=ue[0],fe=ue[1],me=(0,f.Nw)({rid:K,skip:!K}),_e=me.financeReceipt,pe=me.financeReceiptRefetch;(0,m.useEffect)((function(){K&&pe()}),[K,pe]),(0,m.useEffect)((function(){null!==_e&&void 0!==_e&&_e.receipt&&null!==_e&&void 0!==_e&&_e.all_remain&&le(_e)}),[_e]),(0,m.useEffect)((function(){if(ie){var e,t=new Worker(new URL(n.p+n.u(4473),n.b));if("Hostel Application"===(null===ie||void 0===ie||null===(e=ie.all_remain)||void 0===e?void 0:e.remaining_flow)){var o=(0,w.sp)(null===ie||void 0===ie?void 0:ie.all_remain,null===ie||void 0===ie?void 0:ie.receipt),i=o.institute,l=o.studentInfo,a=o.paymentReceiptInfo;t.postMessage({institute:i,studentInfo:l,paymentReceiptInfo:a,printReceiptType:"Refunded"===(null===a||void 0===a?void 0:a.transactonRefund)?"HOSTEL_REFUND":"HOSTEL"})}else{var d=(0,w.Hs)(null===ie||void 0===ie?void 0:ie.all_remain,null===ie||void 0===ie?void 0:ie.receipt),r=d.institute,s=d.studentInfo,c=d.paymentReceiptInfo;t.postMessage({institute:r,studentInfo:s,paymentReceiptInfo:c,printReceiptType:"Refunded"===(null===c||void 0===c?void 0:c.transactonRefund)?"ADMISSION_REFUND":"ADMISSION"})}t.onmessage=function(e){e&&(window.open(e.data,"_blank"),te((function(e){return!e})),le(""),t.terminate())}}}),[ie]);var he=(0,j.H0)({rid:re,skip:!re}),ye=he.internalFeeReceipt,xe=he.internalFeeReceiptRefetch;(0,m.useEffect)((function(){re&&xe()}),[re,xe]),(0,m.useEffect)((function(){null!==ye&&void 0!==ye&&ye.receipt&&null!==ye&&void 0!==ye&&ye.one_account&&fe(ye)}),[ye]),(0,m.useEffect)((function(){if(ve){var e,t,n,o,i,l,a,d;te((function(e){return!e}));var r=null===ve||void 0===ve?void 0:ve.one_account,s=null===ve||void 0===ve?void 0:ve.receipt,c=null!==s&&void 0!==s&&null!==(e=s.finance)&&void 0!==e&&null!==(t=e.institute)&&void 0!==t&&t.insProfilePhoto?"".concat(S.Yz,"/").concat(null===s||void 0===s||null===(n=s.finance)||void 0===n||null===(o=n.institute)||void 0===o?void 0:o.insProfilePhoto):"/images/certificate/logodemo.jpg",u=null!==s&&void 0!==s&&null!==(i=s.finance)&&void 0!==i&&null!==(l=i.institute)&&void 0!==l&&l.affliatedLogo?"".concat(S.Yz,"/").concat(null===s||void 0===s||null===(a=s.finance)||void 0===a||null===(d=a.institute)||void 0===d?void 0:d.affliatedLogo):"/images/certificate/logodemo.jpg";r&&s&&((0,Z.Z)(r,s,c,u),te(!1)),fe(""),window.location.reload()}}),[ve]);return(0,z.jsxs)(z.Fragment,{children:[(0,z.jsxs)("div",{className:x.Z.sidebarheader,style:{gap:"1%"},title:"Income"===(null===U||void 0===U?void 0:U.payment_module_type)?"":"View Receipt",children:[(0,z.jsxs)("div",{className:x.Z.history_image_container,style:{width:"50%"},children:[null!==U&&void 0!==U&&null!==(t=U.payment_student)&&void 0!==t&&t.studentProfilePhoto?(0,z.jsx)(s.rU,{to:"/".concat(q.username,"/student/profile"),state:(0,y.Z)((0,y.Z)({},G.state),{},{sid:null===U||void 0===U||null===(i=U.payment_student)||void 0===i?void 0:i._id}),children:(0,z.jsx)("img",{src:"".concat(b.yI,"/").concat(null===U||void 0===U||null===(l=U.payment_student)||void 0===l?void 0:l.studentProfilePhoto),alt:"qr code",style:{width:"60px",height:"60px",borderRadius:"12px"}})}):null,(0,z.jsxs)("div",{className:x.Z.text,children:[(0,z.jsx)("p",{className:x.Z.rcv,children:$("recived_from")}),(0,z.jsx)("h6",{children:null!==U&&void 0!==U&&U.payment_student?"".concat(null===U||void 0===U||null===(a=U.payment_student)||void 0===a?void 0:a.studentFirstName," ").concat(null===U||void 0===U||null===(r=U.payment_student)||void 0===r?void 0:r.studentMiddleName," ").concat(null===U||void 0===U||null===(u=U.payment_student)||void 0===u?void 0:u.studentLastName):null!==(v=null===U||void 0===U||null===(_=U.payment_by_end_user_id)||void 0===_?void 0:_.userLegalName)&&void 0!==v?v:null===U||void 0===U?void 0:U.payment_by_end_user_id_name}),(0,z.jsxs)("p",{className:x.Z.rcv,children:[$("gr_number")," ",null!==(p=null===U||void 0===U||null===(h=U.payment_student)||void 0===h?void 0:h.studentGRNO)&&void 0!==p?p:""]}),(0,z.jsx)("p",{className:x.Z.rcv,children:null!==(g=null===U||void 0===U||null===(Y=U.payment_student)||void 0===Y||null===(L=Y.fee_structure)||void 0===L?void 0:L.unique_structure_name)&&void 0!==g?g:""})]})]}),(0,z.jsxs)("div",{className:x.Z.text,style:{width:"27%"},children:[(0,z.jsx)("p",{className:x.Z.rcv,style:{width:"100%"},children:$("transaction_id")}),(0,z.jsx)("h6",{style:{width:"100%",wordWrap:"break-word"},children:null!==U&&void 0!==U&&U.razorpay_payment_id?null===U||void 0===U?void 0:U.razorpay_payment_id:null!==U&&void 0!==U&&null!==(C=U.fee_receipt)&&void 0!==C&&C.fee_utr_reference?null===U||void 0===U||null===(D=U.fee_receipt)||void 0===D?void 0:D.fee_utr_reference:"N/A"}),(0,z.jsxs)("p",{className:x.Z.rcv,style:{width:"100%"},children:[F()(null===U||void 0===U?void 0:U.created_at).format("DD MMM YYYY"),", ",(0,N.J)(null===U||void 0===U?void 0:U.created_at,"LT")]})]}),(0,z.jsxs)("div",{className:x.Z.text,style:{width:"20%"},children:[(0,z.jsxs)("p",{className:x.Z.rcv,style:{width:"100%",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[$("invoice_no")," ",null!==(R=null!==(A=null===U||void 0===U||null===(I=U.fee_receipt)||void 0===I?void 0:I.invoice_count)&&void 0!==A?A:null===U||void 0===U?void 0:U.payment_invoice_number)&&void 0!==R?R:"N/A",(0,z.jsx)("img",{src:"".concat(T.J7,"/receipt.svg"),alt:"receipt icon",title:"Download Fees Receipt",onClick:function(){var e,t,n;"Admission"===(null===U||void 0===U?void 0:U.payment_module_type)||"Admission Fees"===(null===U||void 0===U?void 0:U.payment_module_type)||"Hostel"===(null===U||void 0===U?void 0:U.payment_module_type)||"Hostel Fees"===(null===U||void 0===U?void 0:U.payment_module_type)?function(){var e,t,n;null!==U&&void 0!==U&&null!==(e=U.fee_receipt)&&void 0!==e&&e._id&&(te((function(e){return!e})),Q(null===U||void 0===U||null===(t=U.fee_receipt)||void 0===t?void 0:t._id),K===(null===U||void 0===U||null===(n=U.fee_receipt)||void 0===n?void 0:n._id)&&le(_e))}(null===U||void 0===U||null===(e=U.fee_receipt)||void 0===e||e._id):"Income"===(null===U||void 0===U?void 0:U.payment_module_type)||(n=null===U||void 0===U||null===(t=U.fee_receipt)||void 0===t?void 0:t._id)&&(te((function(e){return!e})),se(n))}})]}),(0,z.jsxs)("h6",{style:{width:"100%"},children:[$("rs_only")," ",null===U||void 0===U?void 0:U.payment_amount]}),(0,z.jsx)("p",{className:x.Z.rcv,style:{width:"100%"},children:"offline"===(null===(k=U.payment_mode)||void 0===k?void 0:k.toLowerCase())?null!==U&&void 0!==U&&null!==(H=U.fee_receipt)&&void 0!==H&&H.fee_payment_mode?"".concat(null===U||void 0===U||null===(P=U.fee_receipt)||void 0===P?void 0:P.fee_payment_mode):"Offline - No Receipt":"online"===(null===(E=U.payment_mode)||void 0===E?void 0:E.toLowerCase())?null!==U&&void 0!==U&&null!==(W=U.fee_receipt)&&void 0!==W&&W.fee_payment_mode?"".concat(null===U||void 0===U||null===(O=U.fee_receipt)||void 0===O?void 0:O.fee_payment_mode):"Online - No Receipt":null===U||void 0===U?void 0:U.payment_mode})]})]}),ee&&(0,z.jsx)(M.Z,{})]})},L=n(1669),C=n(2651),D=function(e){var t,n,l,a=e.instituteId,r=(0,d.$G)().t,s=(0,m.useState)(""),c=(0,o.Z)(s,2),u=c[0],v=c[1],y=(0,m.useState)(1),x=(0,o.Z)(y,2),g=x[0],F=x[1],N=(0,m.useState)(!0),b=(0,o.Z)(N,2),w=b[0],j=b[1],S=(0,_.YD)({skip:u}),Z=(0,o.Z)(S,2),D=Z[0],R=Z[1],A=(0,f.XN)({data:{uid:a,page:g,limit:10,search:u,filter:""},skip:!a}),I=A.financeAllTransaction,k=A.financeAllTransactionLoading;(0,m.useEffect)((function(){R&&w&&F((function(e){return e+1}))}),[R,w]),(0,m.useEffect)((function(){var e;if(null!==I&&void 0!==I&&null!==(e=I.list)&&void 0!==e&&e.length){var t,n=(0,p.f)(null===I||void 0===I||null===(t=I.list)||void 0===t?void 0:t.length);j((function(){return n}))}}),[null===I||void 0===I?void 0:I.list]);var H=(0,m.useCallback)((0,h.J)((function(e){F((function(){return 1})),v(e)}),1500),[]);return(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)("div",{className:i.Z.fm_search_full,children:(0,z.jsx)("section",{className:i.Z.fm_search_full_container,children:(0,z.jsxs)("div",{className:i.Z.fm_search_full_container_inner,children:[(0,z.jsx)("img",{className:i.Z.fm_search_full_icon,alt:"search icon",src:"".concat(T.dB,"/navbar-search.svg")}),(0,z.jsx)("input",{type:"text",placeholder:r("search"),onChange:function(e){e.target.value?H(e.target.value):(F((function(){return 1})),v(""))}})]})})}),null===I||void 0===I||null===(t=I.list)||void 0===t?void 0:t.map((function(e,t){var n;return(null===I||void 0===I||null===(n=I.list)||void 0===n?void 0:n.length)===t+1?(0,z.jsx)("div",{ref:D,children:(0,z.jsx)(Y,{history:e})},null===e||void 0===e?void 0:e._id):(0,z.jsx)(Y,{history:e},null===e||void 0===e?void 0:e._id)})),k?u?(0,z.jsx)(M.Z,{}):(0,z.jsx)(L.Z,{}):u?!(null!==I&&void 0!==I&&null!==(n=I.list)&&void 0!==n&&n.length)&&(0,z.jsx)(C.Z,{customStyleContainer:{marginTop:"1.5rem"},title:"No receipts fuond related this search."}):!(null!==I&&void 0!==I&&null!==(l=I.list)&&void 0!==l&&l.length)&&(0,z.jsx)(C.Z,{customStyleContainer:{marginTop:"1.5rem"},title:"No receipts added."})]})},R=(0,m.lazy)((function(){return n.e(3219).then(n.bind(n,33219))})),A=(0,m.lazy)((function(){return n.e(5850).then(n.bind(n,65850))})),I=[{label:"receipts",id:"receipt",urlKey:""},{label:"payments",id:"payment",urlKey:"&n=payment"},{label:"settlement_history",id:"settlement",urlKey:"&n=settlement"}],k=function(e){e.fid;var t=e.instituteId,n=(0,d.$G)().t,f=(0,s.lr)(),_=(0,o.Z)(f,1)[0],p=(0,c.TH)(),h=(0,c.UO)();return(0,z.jsxs)(l.Z,{children:[(0,z.jsx)(a.Z,{children:(0,z.jsx)("div",{className:i.Z.fm_header_container,children:(0,z.jsx)("h6",{children:n("transaction_history")})})}),(0,z.jsx)(r.Z,{}),(0,z.jsxs)(a.Z,{customStyle:{paddingTop:"0"},children:[(0,z.jsx)(v.Z,{children:I.map((function(e){return(0,z.jsx)(u.Z,{tab:e,isLink:!0,isActive:"receipt"===e.id&&!_.get("n")||_.get("n")===e.id,parentState:p.state,url:"/q/".concat(h.username,"/member/staff/finance?type=history").concat(e.urlKey)},null===e||void 0===e?void 0:e.id)}))}),(0,z.jsx)(r.Z,{customStyleBorder:{marginTop:"0"}})]}),(0,z.jsx)(a.Z,{customStyle:{paddingTop:"0"},children:(0,z.jsx)(m.Suspense,{fallback:(0,z.jsx)(M.Z,{}),children:"payment"===_.get("n")?(0,z.jsx)(A,{instituteId:t}):"settlement"===_.get("n")?(0,z.jsx)(R,{instituteId:t}):(0,z.jsx)(D,{instituteId:t})})})]})}},82824:function(e,t,n){"use strict";n.d(t,{J:function(){return d}});var o=n(99893),i=n.n(o),l=n(97892),a=n.n(l),d=function(e,t){return a().extend(i()),a()(e).format(t)}},62732:function(e,t,n){"use strict";var o=n(35125),i=n(72426),l=n.n(i),a=n(62906),d=n.n(a),r=new o.ZP({format:[270,210]}),s=r.internal.pageSize.getWidth();t.Z=function(e,t,n,o){var i,a,c,u,v,f,m,_,p,h,y,x,g,F,N,b,T,M=arguments.length>4&&void 0!==arguments[4]&&arguments[4],w=null===t||void 0===t||null===(i=t.finance)||void 0===i?void 0:i.institute,j=null===t||void 0===t||null===(a=t.finance)||void 0===a?void 0:a.financeHead,S=null===t||void 0===t?void 0:t.student,Z=null===t||void 0===t?void 0:t.internal_fees,z=null===t||void 0===t?void 0:t.order_history;r.addImage(n,"JPEG",9,3,25,25),r.addImage(o,"JPEG",s-34,2.4,25,25),r.setLineWidth(8),r.setDrawColor(255,255,255),r.circle(21.4,15,16),r.setLineWidth(0),r.setLineWidth(8),r.setDrawColor(255,255,255),r.circle(s-21.4,15,16),r.setLineWidth(0);var Y=r.splitTextToSize(null===w||void 0===w?void 0:w.insName,146);if(r.setFont(void 0,"normal"),Y.length>1){var L=10;r.setFont("700"),r.setTextColor(18,18,18),r.setFontSize(16),r.text(107,L,Y,"center"),L=Y.length+145}else{var C=10;r.setFont("700"),r.setTextColor(18,18,18),r.setFontSize(18),r.text(107,C,Y,"center"),C=Y.length+145}r.setFont("Arial","normal","400"),r.setTextColor(18,18,18),r.setFontSize(10),r.text(s/2,Y.length>1?23:19,null===w||void 0===w?void 0:w.insAddress,"center"),r.setFont("WorkSans"),r.setTextColor(18,18,18),r.setFontSize(10),r.text(s/2,Y.length>1?29:25,"Mob No : ".concat(null===w||void 0===w?void 0:w.insPhoneNumber," , Mail: ").concat(null===w||void 0===w?void 0:w.insEmail),"center"),r.setFont("WorkSans"),r.setTextColor(0,0,0),r.setFontSize(18),r.text(s/2,37,"Fee Receipt","center"),r.setLineWidth(.7),r.setDrawColor(18,18,18),r.line(0,46,s,46),r.setTextColor(0,0,0),r.setFont(void 0,"bold"),r.setFontSize(10),r.text(9,54,"Invoice No :"),r.setFont(void 0,"normal"),r.setTextColor(0,0,0),r.setFontSize(10),r.text(32,54,null===t||void 0===t?void 0:t.invoice_count),r.setTextColor(0,0,0),r.setFont(void 0,"bold"),r.setFontSize(10),r.text(s-32,54,"Dated:",{align:"right"}),r.setFont(void 0,"normal"),r.setTextColor(0,0,0),r.setFontSize(10),r.text(s-12,54,l()(null===t||void 0===t?void 0:t.created_at).format("DD-MMM-YYYY"),{align:"right"}),r.setTextColor(0,0,0),r.setFont(void 0,"bold"),r.setFontSize(10),r.text(9,61,"Purpose:"),r.setFont(void 0,"normal"),r.setTextColor(0,0,0),r.setFontSize(10),r.text(32,61,"".concat(null!==(c=null===Z||void 0===Z?void 0:Z.internal_fee_reason)&&void 0!==c?c:"N/A")),r.setTextColor(0,0,0),r.setFont(void 0,"bold"),r.setFontSize(10),r.text(9,68,"Amount: "),r.setFont(void 0,"normal"),r.setTextColor(0,0,0),r.setFontSize(10),r.text(32,68,"Rs. ".concat(null===t||void 0===t?void 0:t.fee_payment_amount)),r.setTextColor(0,0,0),r.setFont(void 0,"bold"),r.setFontSize(11),r.text(9,97," ".concat(M?"Received Through: ":"Paid Through: ")),r.setFont(void 0,"normal"),r.text(44,97,"".concat(null===e||void 0===e?void 0:e.finance_bank_name,", ").concat(null===e||void 0===e?void 0:e.finance_bank_account_name,", A/c No:  ").concat(null===e||void 0===e?void 0:e.finance_bank_account_number)),r.setTextColor(0,0,0),r.setFont(void 0,"bold"),r.text(9,107," On Account of: ");var D="Being money ".concat(M?"received":"paid"," by ").concat(null===t||void 0===t?void 0:t.fee_payment_mode,", Transaction ID: ").concat(null!==(u=null===z||void 0===z?void 0:z.razorpay_order_id)&&void 0!==u?u:"N/A"," ,  Dated: ").concat(l()(null===t||void 0===t?void 0:t.created_at).format("DD-MMM-YYYY"),"  for Rs. ").concat(null===t||void 0===t?void 0:t.fee_payment_amount,".").concat(M?"From":"To"," ","".concat(null!==(v=null===S||void 0===S?void 0:S.studentFirstName)&&void 0!==v?v:""," ").concat(null!==(f=null===S||void 0===S?void 0:S.studentMiddleName)&&void 0!==f?f:""," ").concat(null!==(m=null===S||void 0===S?void 0:S.studentLastName)&&void 0!==m?m:""," "),", towards ").concat(null!==(_=null===Z||void 0===Z?void 0:Z.internal_fee_reason)&&void 0!==_?_:"N/A","."),R=r.splitTextToSize(D,s-20);if(R.length>1){var A=113;r.setFont(void 0,"normal"),r.setFontSize(11),r.setTextColor(18,18,18),r.text(10,A,R,"left"),A=R.length+151}else{var I=113;r.setFontSize(11),r.setFont(void 0,"normal"),r.setTextColor(18,18,18),r.setFontSize(12),r.text(10,I,R,"left"),I=R.length+151}var k,H,P,E;(r.setTextColor(0,0,0),r.setFont(void 0,"bold"),r.setFontSize(11),r.text(9,131,"Bank Transaction Details: "),r.setFont(void 0,"normal"),r.text(9,138,"Payment Mode:  ".concat(null===t||void 0===t?void 0:t.fee_payment_mode)),null!==z&&void 0!==z&&z.razorpay_order_id)?r.text(9,144,"Transaction ID: ".concat(null!==(k=null===z||void 0===z?void 0:z.razorpay_order_id)&&void 0!==k?k:"N/A")):(r.text(9,144,"Bank Name: ".concat(null!==(H=null===e||void 0===e?void 0:e.fee_bank_name)&&void 0!==H?H:"N/A")),r.text(9,150,"Bank Holder Name: ".concat(null!==(P=null===e||void 0===e?void 0:e.finance_bank_account_name)&&void 0!==P?P:"N/A")),r.text(9,156,"UTR / Ref No.: ".concat(null!==(E=null===e||void 0===e?void 0:e.fee_utr_reference)&&void 0!==E?E:"N/A")),r.text(9,162,"Date: ".concat(l()(null===t||void 0===t?void 0:t.created_at).format("DD-MMM-YYYY"))),r.text(9,168,"Amount: ".concat(null===t||void 0===t?void 0:t.fee_payment_amount)),r.text(9,174,"Amount in Words: ".concat((d().toWords(t.fee_payment_amount.toString()).match(/[a-zA-Z0-9]+/g)||[]).map((function(e){return"".concat(e.charAt(0).toUpperCase()).concat(e.slice(1))})).join(" ")," only.")));r.setFontSize(9),r.text(40,240,"".concat(j.staffFirstName," ").concat(null!==(p=j.staffMiddleName)&&void 0!==p?p:""," ").concat(j.staffLastName),{align:"center"}),r.setFont(void 0,"bold"),r.setFontSize(10),r.text(40,245,"Finance Manager",{align:"center"}),r.setFont(void 0,"normal"),r.setFontSize(9),r.text(153,240,"".concat(null!==(h=null===w||void 0===w||null===(y=w.displayPersonList)||void 0===y||null===(x=y[0])||void 0===x||null===(g=x.displayUser)||void 0===g?void 0:g.userLegalName)&&void 0!==h?h:"N/A"),{align:"center"}),r.setFont(void 0,"bold"),r.setFontSize(10),r.text(153,245,"".concat(null!==(F=null===w||void 0===w||null===(N=w.displayPersonList)||void 0===N||null===(b=N[0])||void 0===b?void 0:b.displayTitle)&&void 0!==F?F:"N/A"),{align:"center"}),r.setTextColor(0,0,255),r.setFontSize(7),r.text(s-20,243,"Online Automated",null,50),r.text(s-18,244,"Generated fee receipt",null,50),r.text(s-14,246,"Through Qviple",null,50),r.setLineWidth(.2),r.setDrawColor(18,18,18),r.line(0,251,s,251),r.setTextColor(18,18,18),r.setFontSize(8),r.setFont(void 0,"normal"),r.text(s/2,259,"Note : No one except one who is making this certificate should interfere with any details of this invoice, othewise students will be expelled and legal action will be taken.","center"),window.open(r.output("bloburl",{filename:"".concat(null===S||void 0===S?void 0:S.studentFirstName," ").concat(null!==(T=null===S||void 0===S?void 0:S.studentMiddleName)&&void 0!==T?T:""," ").concat(null===S||void 0===S?void 0:S.studentLastName," -Internal Fee Receipt.pdf")}),"_blank")}},99893:function(e){e.exports=function(){"use strict";var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"};return function(t,n,o){var i=n.prototype,l=i.format;o.en.formats=e,i.format=function(t){void 0===t&&(t="YYYY-MM-DDTHH:mm:ssZ");var n=this.$locale().formats,o=function(t,n){return t.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,o,i){var l=i&&i.toUpperCase();return o||n[i]||e[i]||n[l].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,n){return t||n.slice(1)}))}))}(t,void 0===n?{}:n);return l.call(this,o)}}}()},62906:function(e,t,n){!function(){"use strict";"object"==typeof self&&self.self===self&&self||"object"==typeof n.g&&n.g.global===n.g&&n.g;var o=9007199254740991;function i(e){return!("number"!=typeof e||e!=e||e===1/0||e===-1/0)}function l(e){return"number"==typeof e&&Math.abs(e)<=o}var a=/(hundred|thousand|(m|b|tr|quadr)illion)$/,d=/teen$/,r=/y$/,s=/(zero|one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve)$/,c={zero:"zeroth",one:"first",two:"second",three:"third",four:"fourth",five:"fifth",six:"sixth",seven:"seventh",eight:"eighth",nine:"ninth",ten:"tenth",eleven:"eleventh",twelve:"twelfth"};function u(e){return a.test(e)||d.test(e)?e+"th":r.test(e)?e.replace(r,"ieth"):s.test(e)?e.replace(s,v):e}function v(e,t){return c[t]}var f=1e3,m=1e6,_=1e9,p=1e12,h=1e15,y=["zero","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"],x=["zero","ten","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"];function g(e,t){var n,o=parseInt(e,10);if(!i(o))throw new TypeError("Not a finite number: "+e+" ("+typeof e+")");if(!l(o))throw new RangeError("Input is not a safe number, it\u2019s either too large or too small.");return n=function e(t){var n,o,i=arguments[1];return 0===t?i?i.join(" ").replace(/,$/,""):"zero":(i||(i=[]),t<0&&(i.push("minus"),t=Math.abs(t)),t<20?(n=0,o=y[t]):t<100?(n=t%10,o=x[Math.floor(t/10)],n&&(o+="-"+y[n],n=0)):t<f?(n=t%100,o=e(Math.floor(t/100))+" hundred"):t<m?(n=t%f,o=e(Math.floor(t/f))+" thousand,"):t<_?(n=t%m,o=e(Math.floor(t/m))+" million,"):t<p?(n=t%_,o=e(Math.floor(t/_))+" billion,"):t<h?(n=t%p,o=e(Math.floor(t/p))+" trillion,"):t<=9007199254740992&&(n=t%h,o=e(Math.floor(t/h))+" quadrillion,"),i.push(o),e(n,i))}(o),t?u(n):n}var F={toOrdinal:function(e){var t=parseInt(e,10);if(!i(t))throw new TypeError("Not a finite number: "+e+" ("+typeof e+")");if(!l(t))throw new RangeError("Input is not a safe number, it\u2019s either too large or too small.");var n=String(t),o=Math.abs(t%100),a=11<=o&&o<=13,d=n.charAt(n.length-1);return n+(a?"th":"1"===d?"st":"2"===d?"nd":"3"===d?"rd":"th")},toWords:g,toWordsOrdinal:function(e){return u(g(e))}};e.exports&&(t=e.exports=F),t.numberToWords=F}()},55552:function(e,t){"use strict";t.Z={settle_card:"TransactionHistory_settle_card__oS-7g",settle_card_container:"TransactionHistory_settle_card_container__rPPq5",settle_card_text:"TransactionHistory_settle_card_text__ZDryo",settle_paragraph:"TransactionHistory_settle_paragraph__D8Roi",sidebarheader:"TransactionHistory_sidebarheader__iPFiM",text:"TransactionHistory_text__rOBuW",rcv:"TransactionHistory_rcv__GKc7C",history_image_container:"TransactionHistory_history_image_container__Mr0vW"}}}]);
//# sourceMappingURL=1358.7bc9312a.chunk.js.map