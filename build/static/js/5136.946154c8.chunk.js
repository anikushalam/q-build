"use strict";(self.webpackChunkmithkal_qviple=self.webpackChunkmithkal_qviple||[]).push([[5136],{15136:function(t,e,n){n.d(e,{Z:function(){return h}});var o=n(1413),i=n(29439),a=n(72791),l=n(32804),d=n(39230),s=n(72426),r=n.n(s),c=n(29017),u=n(98734),v=n(62732),_=n(69721),f=n(80184),m=function(t){var e=t.rid,n=(0,a.useState)(!1),o=(0,i.Z)(n,2),l=o[0],d=o[1],s=(0,a.useState)(""),r=(0,i.Z)(s,2),m=r[0],F=r[1],x=(0,a.useState)(""),p=(0,i.Z)(x,2),h=p[0],g=p[1],b=(0,c.H0)({rid:m,skip:!m}),y=b.internalFeeReceipt,S=b.internalFeeReceiptRefetch;(0,a.useEffect)((function(){m&&S()}),[m,S]);return(0,a.useEffect)((function(){null!==y&&void 0!==y&&y.receipt&&null!==y&&void 0!==y&&y.one_account&&g(y)}),[y]),(0,a.useEffect)((function(){if(h){var t,e,n,o,i,a,l,s;d((function(t){return!t}));var r=null===h||void 0===h?void 0:h.one_account,c=null===h||void 0===h?void 0:h.receipt,u=null!==c&&void 0!==c&&null!==(t=c.finance)&&void 0!==t&&null!==(e=t.institute)&&void 0!==e&&e.insProfilePhoto?"".concat(_.Yz,"/").concat(null===c||void 0===c||null===(n=c.finance)||void 0===n||null===(o=n.institute)||void 0===o?void 0:o.insProfilePhoto):"/images/certificate/logodemo.jpg",f=null!==c&&void 0!==c&&null!==(i=c.finance)&&void 0!==i&&null!==(a=i.institute)&&void 0!==a&&a.affliatedLogo?"".concat(_.Yz,"/").concat(null===c||void 0===c||null===(l=c.finance)||void 0===l||null===(s=l.institute)||void 0===s?void 0:s.affliatedLogo):"/images/certificate/logodemo.jpg";r&&c&&((0,v.Z)(r,c,u,f),d(!1)),g(""),window.location.reload()}}),[h]),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("img",{src:"/images/members/receipt-icon.svg",onClick:function(){return t=e,d((function(t){return!t})),void F(t);var t},alt:"receipt icon"}),l&&(0,f.jsx)(u.Z,{})]})},F=n(64499),x=n(36721),p=["STUDENT"],h=function(t){var e=t.amount,n=t.feesName,s=t.dateOffCreation,v=t.is_paid,h=t.is_checklist,g=t.feesId,b=t.setAllContent,y=t.setCharges,S=t.moduleType,C=t.rid,N=t.transactionDate,T=t.transactionMode,z=t.viewAs,k=t.is_static,A=t.bookId,D=t.validateId,M=t.financeId,w=(0,d.$G)().t,L=(0,a.useState)(!1),Z=(0,i.Z)(L,2),j=Z[0],P=Z[1],Y=(0,a.useState)({msg:"",run:!1}),I=(0,i.Z)(Y,2),B=I[0],R=I[1],W=(0,c.fB)(),E=(0,i.Z)(W,1)[0],G={amount:10,moduleId:"38965823534u5t23y",paidBy:"34532h423424f4g5f23j",name:"Shreya_1540"};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)("h5",{children:[w("rs"),".",null!==e&&void 0!==e?e:0," "]}),(0,f.jsx)("h6",{children:null!==n&&void 0!==n?n:"Static"}),N?(0,f.jsxs)("p",{children:[w("paid_on"),r()(N).format("DD MMMM yyyy")]}):h?"":(0,f.jsxs)("p",{children:[w("pay_by"),r()(s).format("DD MMMM yyyy")]}),"Not Paid"!==v?(0,f.jsxs)("button",{className:l.Z.student_internal_card_btn_paid,children:[w("internal_paid")," ",null!==T&&void 0!==T?T:""]}):k?(0,f.jsx)("button",{className:l.Z.student_internal_card_btn_pay,onClick:function(){(0,F.Ex)(G).then((function(t){var e={action:_.FX,params:t};(0,F.KY)(e)})).catch((function(t){console.info(t)}))},children:w("pay_now")}):null!==p&&void 0!==p&&p.includes(z)?(0,f.jsx)("button",{className:l.Z.student_internal_card_btn_pay,onClick:function(){"Library Fees"===S?(P((function(t){return!t})),E({fid:M,aid:D,flow:"BY_LIBRARY"}).then((function(t){var n;P((function(t){return!t})),null!==t&&void 0!==t&&null!==(n=t.data)&&void 0!==n&&n.denied?R({msg:"Before initiating payment. you must have a valid bank account to receive payment.",run:!0}):(b((function(t){return(0,o.Z)((0,o.Z)({},t),{},{amount:e,feesId:g,type:"Backlog"===S?"Backlog":"Library Fees"===S?"Library Fees":"Fees",bookId:null!==A&&void 0!==A?A:""})})),y(!0))})).catch({})):(b((function(t){return(0,o.Z)((0,o.Z)({},t),{},{amount:e,feesId:g,type:"Backlog"===S?"Backlog":"Library Fees"===S?"Library Fees":"Fees",bookId:null!==A&&void 0!==A?A:""})})),y(!0))},children:w("pay_now")}):(0,f.jsx)("button",{className:l.Z.student_internal_card_btn_pay,children:w("unpaid")}),"Not Paid"!==v?(0,f.jsx)(m,{rid:C}):"",(0,f.jsx)(x.Ch,{msg:B.msg,run:B.run,setRun:function(){return R({msg:"",run:!1})},postiton:"bottom",type:"error"}),j&&(0,f.jsx)(u.Z,{})]})}},62732:function(t,e,n){var o=n(35125),i=n(72426),a=n.n(i),l=new o.ZP({format:[270,210]}),d=l.internal.pageSize.getWidth();e.Z=function(t,e,o,i){var s,r,c,u,v,_,f,m,F,x,p,h,g,b,y,S,C,N=arguments.length>4&&void 0!==arguments[4]&&arguments[4],T=n(62906),z=null===e||void 0===e||null===(s=e.finance)||void 0===s?void 0:s.institute,k=null===e||void 0===e||null===(r=e.finance)||void 0===r?void 0:r.financeHead,A=null===e||void 0===e?void 0:e.student,D=null===e||void 0===e?void 0:e.internal_fees,M=null===e||void 0===e?void 0:e.order_history;l.addImage(o,"JPEG",9,3,25,25),l.addImage(i,"JPEG",d-34,2.4,25,25),l.setLineWidth(8),l.setDrawColor(255,255,255),l.circle(21.4,15,16),l.setLineWidth(0),l.setLineWidth(8),l.setDrawColor(255,255,255),l.circle(d-21.4,15,16),l.setLineWidth(0);var w=l.splitTextToSize(null===z||void 0===z?void 0:z.insName,146);if(l.setFont(void 0,"normal"),w.length>1){var L=10;l.setFont("700"),l.setTextColor(18,18,18),l.setFontSize(16),l.text(107,L,w,"center"),L=w.length+145}else{var Z=10;l.setFont("700"),l.setTextColor(18,18,18),l.setFontSize(18),l.text(107,Z,w,"center"),Z=w.length+145}l.setFont("Arial","normal","400"),l.setTextColor(18,18,18),l.setFontSize(10),l.text(d/2,w.length>1?23:19,null===z||void 0===z?void 0:z.insAddress,"center"),l.setFont("WorkSans"),l.setTextColor(18,18,18),l.setFontSize(10),l.text(d/2,w.length>1?29:25,"Mob No : ".concat(null===z||void 0===z?void 0:z.insPhoneNumber," , Mail: ").concat(null===z||void 0===z?void 0:z.insEmail),"center"),l.setFont("WorkSans"),l.setTextColor(0,0,0),l.setFontSize(18),l.text(d/2,37,"Fee Receipt","center"),l.setLineWidth(.7),l.setDrawColor(18,18,18),l.line(0,46,d,46),l.setTextColor(0,0,0),l.setFont(void 0,"bold"),l.setFontSize(10),l.text(9,54,"Invoice No :"),l.setFont(void 0,"normal"),l.setTextColor(0,0,0),l.setFontSize(10),l.text(32,54,null===e||void 0===e?void 0:e.invoice_count),l.setTextColor(0,0,0),l.setFont(void 0,"bold"),l.setFontSize(10),l.text(d-32,54,"Dated:",{align:"right"}),l.setFont(void 0,"normal"),l.setTextColor(0,0,0),l.setFontSize(10),l.text(d-12,54,a()(null===e||void 0===e?void 0:e.created_at).format("DD-MMM-YYYY"),{align:"right"}),l.setTextColor(0,0,0),l.setFont(void 0,"bold"),l.setFontSize(10),l.text(9,61,"Purpose:"),l.setFont(void 0,"normal"),l.setTextColor(0,0,0),l.setFontSize(10),l.text(32,61,"".concat(null!==(c=null===D||void 0===D?void 0:D.internal_fee_reason)&&void 0!==c?c:"N/A")),l.setTextColor(0,0,0),l.setFont(void 0,"bold"),l.setFontSize(10),l.text(9,68,"Amount: "),l.setFont(void 0,"normal"),l.setTextColor(0,0,0),l.setFontSize(10),l.text(32,68,"Rs. ".concat(null===e||void 0===e?void 0:e.fee_payment_amount)),l.setTextColor(0,0,0),l.setFont(void 0,"bold"),l.setFontSize(11),l.text(9,97," ".concat(N?"Received Through: ":"Paid Through: ")),l.setFont(void 0,"normal"),l.text(44,97,"".concat(null===t||void 0===t?void 0:t.finance_bank_name,", ").concat(null===t||void 0===t?void 0:t.finance_bank_account_name,", A/c No:  ").concat(null===t||void 0===t?void 0:t.finance_bank_account_number)),l.setTextColor(0,0,0),l.setFont(void 0,"bold"),l.text(9,107," On Account of: ");var j="Being money ".concat(N?"received":"paid"," by ").concat(null===e||void 0===e?void 0:e.fee_payment_mode,", Transaction ID: ").concat(null!==(u=null===M||void 0===M?void 0:M.razorpay_order_id)&&void 0!==u?u:"N/A"," ,  Dated: ").concat(a()(null===e||void 0===e?void 0:e.created_at).format("DD-MMM-YYYY"),"  for Rs. ").concat(null===e||void 0===e?void 0:e.fee_payment_amount,".").concat(N?"From":"To"," ","".concat(null!==(v=null===A||void 0===A?void 0:A.studentFirstName)&&void 0!==v?v:""," ").concat(null!==(_=null===A||void 0===A?void 0:A.studentMiddleName)&&void 0!==_?_:""," ").concat(null!==(f=null===A||void 0===A?void 0:A.studentLastName)&&void 0!==f?f:""," "),", towards ").concat(null!==(m=null===D||void 0===D?void 0:D.internal_fee_reason)&&void 0!==m?m:"N/A","."),P=l.splitTextToSize(j,d-20);if(P.length>1){var Y=113;l.setFont(void 0,"normal"),l.setFontSize(11),l.setTextColor(18,18,18),l.text(10,Y,P,"left"),Y=P.length+151}else{var I=113;l.setFontSize(11),l.setFont(void 0,"normal"),l.setTextColor(18,18,18),l.setFontSize(12),l.text(10,I,P,"left"),I=P.length+151}var B,R,W,E;(l.setTextColor(0,0,0),l.setFont(void 0,"bold"),l.setFontSize(11),l.text(9,131,"Bank Transaction Details: "),l.setFont(void 0,"normal"),l.text(9,138,"Payment Mode:  ".concat(null===e||void 0===e?void 0:e.fee_payment_mode)),null!==M&&void 0!==M&&M.razorpay_order_id)?l.text(9,144,"Transaction ID: ".concat(null!==(B=null===M||void 0===M?void 0:M.razorpay_order_id)&&void 0!==B?B:"N/A")):(l.text(9,144,"Bank Name: ".concat(null!==(R=null===t||void 0===t?void 0:t.fee_bank_name)&&void 0!==R?R:"N/A")),l.text(9,150,"Bank Holder Name: ".concat(null!==(W=null===t||void 0===t?void 0:t.finance_bank_account_name)&&void 0!==W?W:"N/A")),l.text(9,156,"UTR / Ref No.: ".concat(null!==(E=null===t||void 0===t?void 0:t.fee_utr_reference)&&void 0!==E?E:"N/A")),l.text(9,162,"Date: ".concat(a()(null===e||void 0===e?void 0:e.created_at).format("DD-MMM-YYYY"))),l.text(9,168,"Amount: ".concat(null===e||void 0===e?void 0:e.fee_payment_amount)),l.text(9,174,"Amount in Words: ".concat((T.toWords(e.fee_payment_amount.toString()).match(/[a-zA-Z0-9]+/g)||[]).map((function(t){return"".concat(t.charAt(0).toUpperCase()).concat(t.slice(1))})).join(" ")," only.")));l.setFontSize(9),l.text(40,240,"".concat(k.staffFirstName," ").concat(null!==(F=k.staffMiddleName)&&void 0!==F?F:""," ").concat(k.staffLastName),{align:"center"}),l.setFont(void 0,"bold"),l.setFontSize(10),l.text(40,245,"Finance Manager",{align:"center"}),l.setFont(void 0,"normal"),l.setFontSize(9),l.text(153,240,"".concat(null!==(x=null===z||void 0===z||null===(p=z.displayPersonList)||void 0===p||null===(h=p[0])||void 0===h||null===(g=h.displayUser)||void 0===g?void 0:g.userLegalName)&&void 0!==x?x:"N/A"),{align:"center"}),l.setFont(void 0,"bold"),l.setFontSize(10),l.text(153,245,"".concat(null!==(b=null===z||void 0===z||null===(y=z.displayPersonList)||void 0===y||null===(S=y[0])||void 0===S?void 0:S.displayTitle)&&void 0!==b?b:"N/A"),{align:"center"}),l.setTextColor(0,0,255),l.setFontSize(7),l.text(d-20,243,"Online Automated",null,50),l.text(d-18,244,"Generated fee receipt",null,50),l.text(d-14,246,"Through Qviple",null,50),l.setLineWidth(.2),l.setDrawColor(18,18,18),l.line(0,251,d,251),l.setTextColor(18,18,18),l.setFontSize(8),l.setFont(void 0,"normal"),l.text(d/2,259,"Note : No one except one who is making this certificate should interfere with any details of this invoice, othewise students will be expelled and legal action will be taken.","center"),window.open(l.output("bloburl",{filename:"".concat(null===A||void 0===A?void 0:A.studentFirstName," ").concat(null!==(C=null===A||void 0===A?void 0:A.studentMiddleName)&&void 0!==C?C:""," ").concat(null===A||void 0===A?void 0:A.studentLastName," -Internal Fee Receipt.pdf")}),"_blank")}},32804:function(t,e){e.Z={student_fees_header_container:"StudentAllFeesData_student_fees_header_container__06J8F",student_fees_header_column:"StudentAllFeesData_student_fees_header_column__7WxL2",student_fees_row_amount:"StudentAllFeesData_student_fees_row_amount__2QSk8",student_fees_btn_container:"StudentAllFeesData_student_fees_btn_container__rcsyt",student_fees_btn_container_active:"StudentAllFeesData_student_fees_btn_container_active__LiRxa",student_alll_fees_data:"StudentAllFeesData_student_alll_fees_data__CBPmP",student_admission_fees_container:"StudentAllFeesData_student_admission_fees_container__Fs6dX",student_internal_card:"StudentAllFeesData_student_internal_card__QP2oz",student_internal_card_btn_pay:"StudentAllFeesData_student_internal_card_btn_pay__CzvCh",student_internal_card_btn_paid:"StudentAllFeesData_student_internal_card_btn_paid__KP8Jd"}}}]);
//# sourceMappingURL=5136.946154c8.chunk.js.map