"use strict";(self.webpackChunkmithkal_qviple=self.webpackChunkmithkal_qviple||[]).push([[6647],{68747:function(n,e,t){t.d(e,{Z:function(){return g}});var i=t(29439),l=t(72791),o=t(53277),a=t(23558),d=t(56988),_=t(32804),c=t(91007),r=t(80214),u=t(87932),s=t(28497),v=t(75615),f=t(71439),m=t(64499),h=t(16871),p=t(80184),x=function(n){var e,t,o,a,d,x,y=n.viewAs,g=n.sid,k=(0,h.UO)(),b=(0,l.useState)(!1),j=(0,i.Z)(b,2),C=j[0],Z=j[1],S=(0,l.useState)({amount:0,feesId:"",insId:"",type:"",bookId:""}),E=(0,i.Z)(S,2),w=E[0],N=E[1],A=(0,l.useState)(!0),I=(0,i.Z)(A,2),P=I[0],F=I[1],T=(0,c.$J)("".concat(g),{skip:!g}),z=T.data,D=T.refetch,K=(0,r.Rg)().data,L=(0,r.gt)(),B=(0,i.Z)(L,1)[0],M=(0,u.Vc)({id:null===z||void 0===z||null===(e=z.student)||void 0===e||null===(t=e.institute)||void 0===t?void 0:t._id,skip:!(null!==z&&void 0!==z&&null!==(o=z.student)&&void 0!==o&&null!==(a=o.institute)&&void 0!==a&&a._id)}),U=M.merchantId,Y=M.merchantIdRefetch;(0,l.useEffect)((function(){g&&(D(),F(!0))}),[g,D]),(0,l.useEffect)((function(){var n,e;null!==z&&void 0!==z&&null!==(n=z.student)&&void 0!==n&&null!==(e=n.institute)&&void 0!==e&&e._id&&Y()}),[null===z||void 0===z||null===(d=z.student)||void 0===d||null===(x=d.institute)||void 0===x?void 0:x._id,Y]),(0,l.useEffect)((function(){var n;(null!==z&&void 0!==z&&z.mergePay||0===(null===z||void 0===z||null===(n=z.mergePay)||void 0===n?void 0:n.length))&&F(!1)}),[null===z||void 0===z?void 0:z.mergePay]);return(0,p.jsxs)("div",{className:_.Z.student_alll_fees_data,children:[(0,p.jsx)(v.Z,{setAllContent:N,setCharges:Z,showingDataLoading:P,sid:g,viewAs:y}),C&&(0,p.jsx)(f.Z,{onClose:function(){return Z(!1)},allContent:w,checkoutHandler:function(n){var e,t,i,l=2.1*+(null===w||void 0===w?void 0:w.amount)/100,o=l+18*+l/100,a=parseInt(null===w||void 0===w?void 0:w.amount),d={amount:Math.ceil(a+ +o.toFixed(2))};"PAYTM"===n?(0,m.Ex)({amount:+(null===w||void 0===w?void 0:w.amount),amount_nocharges:+d.amount,type:"Fees",paidBy:"".concat(null===z||void 0===z||null===(e=z.student)||void 0===e?void 0:e._id),paidTo:"".concat(null===z||void 0===z||null===(t=z.student)||void 0===t||null===(i=t.institute)||void 0===i?void 0:i._id),moduleId:"".concat(null===w||void 0===w?void 0:w.feesId),ad_status_id:null,payment_installment:null,ad_install:null,month:null,payment_remain_1:null,payment_card_type:null,payment_book_id:null,name:k.username,isApk:"web",payment_card_id:null}).then((function(n){var e,t;window.onScriptLoad(null===n||void 0===n||null===(e=n.response)||void 0===e||null===(t=e.body)||void 0===t?void 0:t.txnToken,null===n||void 0===n?void 0:n.order,null===n||void 0===n?void 0:n.amount)})).catch((function(n){console.info(n)})):null!==K&&void 0!==K&&K.Key&&null!==d&&void 0!==d&&d.amount?B({amount:null===d||void 0===d?void 0:d.amount}).then((function(n){var e,t,i,l,o,a;null!==(e=n.data)&&void 0!==e&&e.success&&(0,s.r)({key:null===K||void 0===K?void 0:K.Key,oid:null===(t=n.data)||void 0===t?void 0:t.order.id,amount_nocharge:100*(null===w||void 0===w?void 0:w.amount),amount:null===(i=n.data)||void 0===i?void 0:i.order.amount,type:"Fees",pay_by:"".concat(null===z||void 0===z||null===(l=z.student)||void 0===l?void 0:l._id),pay_to:"".concat(null===z||void 0===z||null===(o=z.student)||void 0===o||null===(a=o.institute)||void 0===a?void 0:a._id),mid:"".concat(null===w||void 0===w?void 0:w.feesId),razor_key:null===U||void 0===U?void 0:U.key,razor_author:null===U||void 0===U?void 0:U.bool,status:null,installment_type:null,is_install:null,h_month:null})})).catch((function(n){})):console.log("error")},checkoutBacklogHandler:function(n){var e,t,i,l=2.1*+(null===w||void 0===w?void 0:w.amount)/100,o=l+18*+l/100,a=parseInt(null===w||void 0===w?void 0:w.amount),d={amount:Math.ceil(a+ +o.toFixed(2))};"PAYTM"===n?(0,m.Ex)({amount:+(null===w||void 0===w?void 0:w.amount),amount_nocharges:+d.amount,type:"Backlog",paidBy:"".concat(null===z||void 0===z||null===(e=z.student)||void 0===e?void 0:e._id),paidTo:"".concat(null===z||void 0===z||null===(t=z.student)||void 0===t||null===(i=t.institute)||void 0===i?void 0:i._id),moduleId:"".concat(null===w||void 0===w?void 0:w.feesId),ad_status_id:null,payment_installment:null,ad_install:null,month:null,payment_remain_1:null,payment_card_type:null,payment_book_id:null,name:k.username,isApk:"web",payment_card_id:null}).then((function(n){var e,t;window.onScriptLoad(null===n||void 0===n||null===(e=n.response)||void 0===e||null===(t=e.body)||void 0===t?void 0:t.txnToken,null===n||void 0===n?void 0:n.order,null===n||void 0===n?void 0:n.amount)})).catch((function(n){console.info(n)})):null!==K&&void 0!==K&&K.Key&&null!==d&&void 0!==d&&d.amount?B({amount:null===d||void 0===d?void 0:d.amount}).then((function(n){var e,t,i,l,o,a;null!==(e=n.data)&&void 0!==e&&e.success&&(0,s.r)({key:null===K||void 0===K?void 0:K.Key,oid:null===(t=n.data)||void 0===t?void 0:t.order.id,amount_nocharge:100*(null===w||void 0===w?void 0:w.amount),amount:null===(i=n.data)||void 0===i?void 0:i.order.amount,type:"Backlog",pay_by:"".concat(null===z||void 0===z||null===(l=z.student)||void 0===l?void 0:l._id),pay_to:"".concat(null===z||void 0===z||null===(o=z.student)||void 0===o||null===(a=o.institute)||void 0===a?void 0:a._id),mid:"".concat(null===w||void 0===w?void 0:w.feesId),razor_key:null===U||void 0===U?void 0:U.key,razor_author:null===U||void 0===U?void 0:U.bool,status:null,installment_type:null,is_install:null,h_month:null})})).catch((function(n){})):console.log("error")},checkoutLibraryHandler:function(n){var e,t,i,l=2.1*+(null===w||void 0===w?void 0:w.amount)/100,o=l+18*+l/100,a=parseInt(null===w||void 0===w?void 0:w.amount),d={amount:Math.ceil(a+ +o.toFixed(2))};"PAYTM"===n?(0,m.Ex)({amount:+(null===w||void 0===w?void 0:w.amount),amount_nocharges:+d.amount,type:"Library Fees",paidBy:"".concat(null===z||void 0===z||null===(e=z.student)||void 0===e?void 0:e._id),paidTo:"".concat(null===z||void 0===z||null===(t=z.student)||void 0===t||null===(i=t.institute)||void 0===i?void 0:i._id),moduleId:"".concat(null===w||void 0===w?void 0:w.feesId),ad_status_id:null,payment_installment:null,ad_install:null,month:null,payment_remain_1:null,payment_card_type:null,payment_book_id:null===w||void 0===w?void 0:w.bookId,name:k.username,isApk:"web",payment_card_id:null}).then((function(n){var e,t;window.onScriptLoad(null===n||void 0===n||null===(e=n.response)||void 0===e||null===(t=e.body)||void 0===t?void 0:t.txnToken,null===n||void 0===n?void 0:n.order,null===n||void 0===n?void 0:n.amount)})).catch((function(n){console.info(n)})):null!==K&&void 0!==K&&K.Key&&null!==d&&void 0!==d&&d.amount?B({amount:null===d||void 0===d?void 0:d.amount}).then((function(n){var e,t,i,l,o,a;null!==(e=n.data)&&void 0!==e&&e.success&&(0,s.r)({key:null===K||void 0===K?void 0:K.Key,oid:null===(t=n.data)||void 0===t?void 0:t.order.id,amount_nocharge:100*(null===w||void 0===w?void 0:w.amount),amount:null===(i=n.data)||void 0===i?void 0:i.order.amount,type:"Library Fees",pay_by:"".concat(null===z||void 0===z||null===(l=z.student)||void 0===l?void 0:l._id),pay_to:"".concat(null===z||void 0===z||null===(o=z.student)||void 0===o||null===(a=o.institute)||void 0===a?void 0:a._id),mid:"".concat(null===w||void 0===w?void 0:w.feesId),razor_key:null===U||void 0===U?void 0:U.key,razor_author:null===U||void 0===U?void 0:U.bool,status:null,installment_type:null,is_install:null,h_month:null,book_id:null===w||void 0===w?void 0:w.bookId})})).catch((function(n){})):console.log("error")}})]})},y=t(37669),g=function(n){var e,t,_=n.isEditable,c=(0,h.TH)(),r=(0,l.useState)(1),u=(0,i.Z)(r,2),s=u[0],v=u[1];return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)(o.Z,{children:[(0,p.jsx)(a.Z,{label:"admission_fees",onClick:function(){return v(1)},isActive:1===s}),(0,p.jsx)(a.Z,{label:"department_fees",onClick:function(){return v(2)},isActive:2===s})]}),1===s?(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("div",{style:{marginTop:"0.7rem"},children:(0,p.jsx)(y.Z,{accessAs:"student"})}),(0,p.jsx)(d.Z,{isEditable:_})]}):2===s?(0,p.jsx)(x,{sid:null===(e=c.state)||void 0===e?void 0:e.sid,viewAs:null===(t=c.state)||void 0===t?void 0:t.viewAs}):null]})}},75615:function(n,e,t){var i=t(93433),l=t(29439),o=t(72791),a=t(59227),d=t(32804),_=t(11105),c=t(34219),r=t(23441),u=t(29017),s=t(80184);e.Z=function(n){var e=n.setAllContent,t=n.setCharges,v=n.sid,f=n.viewAs,m=(0,o.useState)(!0),h=(0,l.Z)(m,2),p=h[0],x=h[1],y=(0,o.useState)(1),g=(0,l.Z)(y,2),k=g[0],b=g[1],j=(0,r.YD)(),C=(0,l.Z)(j,2),Z=C[0],S=C[1],E=(0,o.useState)([]),w=(0,l.Z)(E,2),N=w[0],A=w[1],I=(0,o.useState)(!1),P=(0,l.Z)(I,2),F=P[0],T=P[1],z=(0,o.useState)(!0),D=(0,l.Z)(z,2),K=D[0],L=D[1],B=(0,u.d9)({data:{sid:v,page:k,limit:10},skip:!v}),M=B.studentDepartmentFees,U=B.studentDepartmentFeesRefetch;return(0,o.useEffect)((function(){S&&p&&b((function(n){return n+1}))}),[S,p]),(0,o.useEffect)((function(){v&&(U(),L(!0))}),[k,v,U]),(0,o.useEffect)((function(){var n,e;F?(A(null===M||void 0===M?void 0:M.all_internal),T(!1),L(!1)):null!==M&&void 0!==M&&M.all_internal?(A((function(n){return(0,i.Z)(new Set([].concat((0,i.Z)(n),(0,i.Z)(null===M||void 0===M?void 0:M.all_internal)).map(JSON.stringify))).map(JSON.parse)})),L(!1)):0===(null===M||void 0===M||null===(e=M.all_internal)||void 0===e?void 0:e.length)&&L(!1);10===(null===M||void 0===M||null===(n=M.all_internal)||void 0===n?void 0:n.length)?x(!0):x(!1)}),[null===M||void 0===M?void 0:M.all_internal]),(0,s.jsxs)("div",{className:d.Z.student_admission_fees_container,children:[null===N||void 0===N?void 0:N.map((function(n,i){var l,o,_,c,r,u,m,h,p,x,y,g,k,b,j,C,S,E;return(null===N||void 0===N?void 0:N.length)===i+1?(0,s.jsx)("div",{className:d.Z.student_internal_card,ref:Z,children:(0,s.jsx)(a.Z,{feesName:null===n||void 0===n?void 0:n.internal_fee_reason,amount:null===n||void 0===n?void 0:n.internal_fee_amount,dateOffCreation:null===n||void 0===n||null===(l=n.fees)||void 0===l?void 0:l.feeDate,is_paid:null===n||void 0===n?void 0:n.internal_fee_status,feesId:null===n||void 0===n?void 0:n._id,setAllContent:e,setCharges:t,is_checklist:"Checklist"===(null===n||void 0===n?void 0:n.internal_fee_type)||"Backlog"===(null===n||void 0===n?void 0:n.internal_fee_type)||"Library Fees"===(null===n||void 0===n?void 0:n.internal_fee_type),rid:null===n||void 0===n||null===(o=n.fee_receipt)||void 0===o?void 0:o._id,transactionDate:null===n||void 0===n||null===(_=n.fee_receipt)||void 0===_?void 0:_.created_at,transactionMode:null===n||void 0===n||null===(c=n.fee_receipt)||void 0===c?void 0:c.fee_payment_mode,moduleType:null===n||void 0===n?void 0:n.internal_fee_type,sid:v,viewAs:f,bookId:null!==(r=null===n||void 0===n?void 0:n.book)&&void 0!==r?r:"",validateId:null===n||void 0===n||null===(u=n.library)||void 0===u?void 0:u._id,financeId:null===n||void 0===n||null===(m=n.library)||void 0===m||null===(h=m.institute)||void 0===h||null===(p=h.financeDepart)||void 0===p?void 0:p[0]})},null===n||void 0===n?void 0:n._id):(0,s.jsx)("div",{className:d.Z.student_internal_card,children:(0,s.jsx)(a.Z,{feesName:null===n||void 0===n?void 0:n.internal_fee_reason,amount:null===n||void 0===n?void 0:n.internal_fee_amount,dateOffCreation:null===n||void 0===n||null===(x=n.fees)||void 0===x?void 0:x.feeDate,is_paid:null===n||void 0===n?void 0:n.internal_fee_status,feesId:null===n||void 0===n?void 0:n._id,setAllContent:e,setCharges:t,is_checklist:"Checklist"===(null===n||void 0===n?void 0:n.internal_fee_type)||"Backlog"===(null===n||void 0===n?void 0:n.internal_fee_type)||"Library Fees"===(null===n||void 0===n?void 0:n.internal_fee_type),rid:null===n||void 0===n||null===(y=n.fee_receipt)||void 0===y?void 0:y._id,transactionDate:null===n||void 0===n||null===(g=n.fee_receipt)||void 0===g?void 0:g.created_at,transactionMode:null===n||void 0===n||null===(k=n.fee_receipt)||void 0===k?void 0:k.fee_payment_mode,moduleType:null===n||void 0===n?void 0:n.internal_fee_type,sid:v,viewAs:f,bookId:null!==(b=null===n||void 0===n?void 0:n.book)&&void 0!==b?b:"",validateId:null===n||void 0===n||null===(j=n.library)||void 0===j?void 0:j._id,financeId:null===n||void 0===n||null===(C=n.library)||void 0===C||null===(S=C.institute)||void 0===S||null===(E=S.financeDepart)||void 0===E?void 0:E[0]})},null===n||void 0===n?void 0:n._id)})),K&&(0,s.jsx)(_.Z,{}),!K&&0===(null===N||void 0===N?void 0:N.length)&&(0,s.jsx)(c.Z,{title:"No department fees created yet.",customStyleContainer:{height:"15rem"}})]})}},23558:function(n,e,t){var i=t(39230),l=t(51416),o=t(72791),a=t(43504),d=t(80184),_=function(n){var e=n.label,t=n.onClick,_=n.isActive,c=n.isLink,r=n.url,u=n.parentState,s=n.isAuthorized,v=(0,i.$G)().t,f=(0,o.useCallback)((function(){return t&&t(),null}),[t]);return(0,d.jsx)(d.Fragment,{children:c?(0,d.jsx)(d.Fragment,{children:s?(0,d.jsx)(a.rU,{className:_?l.Z.rectangle_tab_card_active:l.Z.rectangle_tab_card,to:r,state:u,children:v(e)}):(0,d.jsx)("div",{className:l.Z.rectangle_tab_card,style:{opacity:"0.5"},children:v(e)})}):(0,d.jsx)("div",{className:_?l.Z.rectangle_tab_card_active:l.Z.rectangle_tab_card,onClick:f,children:v(e)})})};e.Z=(0,o.memo)(_)},53277:function(n,e,t){var i=t(51416),l=t(80184);e.Z=function(n){var e=n.children;return(0,l.jsx)("div",{className:i.Z.rectangle_tab_wrapper,children:e})}},37669:function(n,e,t){var i=t(39230),l=t(37371),o=t(16871),a=t(72791),d=t(98684),_=t(60307),c=t(80184);e.Z=function(n){var e,t,u,s,v,f,m,h,p,x,y,g=n.accessAs,k=(0,i.$G)().t,b=(0,o.TH)(),j=(0,o.s0)(),C=(0,o.UO)(),Z=(0,_.Ys)({sid:null===(e=b.state)||void 0===e?void 0:e.sid,skip:!(null!==(t=b.state)&&void 0!==t&&t.sid)}).studentAdmissionFeeCount,S=(0,a.useCallback)((function(){j("/q/".concat(C.username,"/student/profile"),{state:b.state})}),[b.state,j,C.username]);return(0,c.jsxs)("div",{className:l.Z.sataf_container,children:[r[g]?null:(0,c.jsxs)("div",{className:l.Z.card_hold_container,onClick:S,children:[(0,c.jsx)("img",{src:"".concat(d.Fk,"/profile-view.svg"),alt:"forword link"}),(0,c.jsx)("h6",{children:k("view_profile")})]}),(0,c.jsxs)("section",{className:l.Z.sataf_container_count,children:[(0,c.jsxs)("div",{className:l.Z.sataf_container_count_inner,style:{gap:"0.8rem"},children:[(0,c.jsx)("h6",{style:{fontWeight:"300",fontSize:"12px",marginTop:"-0.4rem"},children:k("in_inr")}),(0,c.jsxs)("div",{className:l.Z.satafcci_text,style:{marginTop:"-0.2rem"},children:[(0,c.jsx)("img",{src:"".concat(d.U_,"/student.svg"),alt:"gov icon"}),(0,c.jsx)("h6",{children:k("student")})]}),(0,c.jsxs)("div",{className:l.Z.satafcci_text,style:{marginTop:"0.2rem"},children:[(0,c.jsx)("img",{src:"".concat(d.U_,"/govt.svg"),alt:"gov icon"}),(0,c.jsx)("h6",{children:k("govt")})]}),(0,c.jsxs)("div",{className:l.Z.satafcci_text,children:[(0,c.jsx)("img",{src:"".concat(d.U_,"/total.svg"),alt:"gov icon"}),(0,c.jsx)("h6",{children:k("o_total")})]})]}),(0,c.jsxs)("div",{className:l.Z.sataf_container_count_inner,children:[(0,c.jsx)("h6",{style:{textAlign:"center"},children:k("o_total")}),(0,c.jsx)("div",{className:l.Z.satafcci_amount,children:(0,c.jsx)("h6",{children:null!==(u=null===Z||void 0===Z?void 0:Z.total_app_fees)&&void 0!==u?u:0})}),(0,c.jsx)("div",{className:l.Z.satafcci_amount,children:(0,c.jsx)("h6",{children:null!==(s=null===Z||void 0===Z?void 0:Z.total_gov_fees)&&void 0!==s?s:0})}),(0,c.jsx)("div",{className:l.Z.satafcci_amount,children:(0,c.jsx)("h6",{children:null!==(v=null===Z||void 0===Z?void 0:Z.total_fees)&&void 0!==v?v:0})})]}),(0,c.jsxs)("div",{className:l.Z.sataf_container_count_inner,children:[(0,c.jsx)("h6",{style:{textAlign:"center"},children:k("paid")}),(0,c.jsx)("div",{className:l.Z.satafcci_amount,children:(0,c.jsx)("h6",{children:null!==(f=null===Z||void 0===Z?void 0:Z.total_app_paid_fees)&&void 0!==f?f:0})}),(0,c.jsx)("div",{className:l.Z.satafcci_amount,children:(0,c.jsx)("h6",{children:null!==(m=null===Z||void 0===Z?void 0:Z.total_gov_paid_fees)&&void 0!==m?m:0})}),(0,c.jsx)("div",{className:l.Z.satafcci_amount,children:(0,c.jsx)("h6",{children:null!==(h=null===Z||void 0===Z?void 0:Z.total_paid_fees)&&void 0!==h?h:0})})]}),(0,c.jsxs)("div",{className:l.Z.sataf_container_count_inner,children:[(0,c.jsx)("h6",{style:{textAlign:"center"},children:k("os")}),(0,c.jsx)("div",{className:l.Z.satafcci_amount,children:(0,c.jsx)("h6",{style:{fontWeight:"600"},children:null!==(p=null===Z||void 0===Z?void 0:Z.total_app_os_fees)&&void 0!==p?p:0})}),(0,c.jsx)("div",{className:l.Z.satafcci_amount,children:(0,c.jsx)("h6",{children:null!==(x=null===Z||void 0===Z?void 0:Z.total_gov_os_fees)&&void 0!==x?x:0})}),(0,c.jsx)("div",{className:l.Z.satafcci_amount,children:(0,c.jsx)("h6",{style:{fontWeight:"600"},children:null!==(y=null===Z||void 0===Z?void 0:Z.total_os_fees)&&void 0!==y?y:0})})]})]})]})};var r={student:!0}},32510:function(n,e){e.Z={election_card_container:"ElectionCard_election_card_container__zrdnl",elections_container:"ElectionCard_elections_container__U2XlZ",create_new_elections:"ElectionCard_create_new_elections__RO93k",create_new_elections_hr:"ElectionCard_create_new_elections_hr__8cPQ2",election_input:"ElectionCard_election_input__aT80U",election_info:"ElectionCard_election_info__rU0M2",take_elections_btn:"ElectionCard_take_elections_btn__9CvMc",election_card_title:"ElectionCard_election_card_title__twA3Y",election_card_info:"ElectionCard_election_card_info__2lKnt",candidate_member:"ElectionCard_candidate_member__QZG+t",candidate_member_normal:"ElectionCard_candidate_member_normal__CtfQX",candidate_member_result:"ElectionCard_candidate_member_result__jZot-",create_new_elections_hr1:"ElectionCard_create_new_elections_hr1__4nxw2",candidate:"ElectionCard_candidate__QKcEu",candidate_container:"ElectionCard_candidate_container__YKXiy",candidate_member_selected:"ElectionCard_candidate_member_selected__ZpWvV",candidate_member_active_normal:"ElectionCard_candidate_member_active_normal__v7ITj",candidate_gr:"ElectionCard_candidate_gr__6kbQP",candiate_heading:"ElectionCard_candiate_heading__5KWoN",candiate_paragraph:"ElectionCard_candiate_paragraph__pr7G1",result_count:"ElectionCard_result_count__RLxSx",result_count_paragraph:"ElectionCard_result_count_paragraph__57fhe",result_candidate:"ElectionCard_result_candidate__pQxU6",result_vote_count:"ElectionCard_result_vote_count__AGXFz",candidate_action:"ElectionCard_candidate_action__XyDwJ",result_container:"ElectionCard_result_container__U3Bzb",result_container_box:"ElectionCard_result_container_box__9NFJV",result_container_box_item:"ElectionCard_result_container_box_item__Njwrr",result_container_box_vertical:"ElectionCard_result_container_box_vertical__dZPNP",candidate_alignment:"ElectionCard_candidate_alignment__Z5J3L",candidate_name:"ElectionCard_candidate_name__92Fig",extra_skill_election_detail_container:"ElectionCard_extra_skill_election_detail_container__p3Yzi",extra_skill_election_detail_container_padding:"ElectionCard_extra_skill_election_detail_container_padding__A+jTd",extra_skill_election_result:"ElectionCard_extra_skill_election_result__gTSFI",extra_skill_election_result_winner:"ElectionCard_extra_skill_election_result_winner__krqtA",set_fees_structure_btn:"ElectionCard_set_fees_structure_btn__FjB0v",electionsContainer:"ElectionCard_electionsContainer__spaYe",electionleftFull:"ElectionCard_electionleftFull__nmYgh",electionleftHalf:"ElectionCard_electionleftHalf__msGkq",electionsRight:"ElectionCard_electionsRight__nXO-t"}},37371:function(n,e){e.Z={goback_container:"StaffStudentProfile_goback_container__ujSak",goback_container_text:"StaffStudentProfile_goback_container_text__YumHh",goback_container_text_go:"StaffStudentProfile_goback_container_text_go__KImuv",student_from_container:"StaffStudentProfile_student_from_container__XirC9",staff_header_container:"StaffStudentProfile_staff_header_container__T0tjm",staff_header_text:"StaffStudentProfile_staff_header_text__rqHvT",staff_profile_photo_container:"StaffStudentProfile_staff_profile_photo_container__jkVeQ",staff_profile_photo_container_inner:"StaffStudentProfile_staff_profile_photo_container_inner__RlghK",staff_profile_photo_image:"StaffStudentProfile_staff_profile_photo_image__wGRLi",staff_profile_photo_info:"StaffStudentProfile_staff_profile_photo_info__leE4S",staff_profile_photo_name:"StaffStudentProfile_staff_profile_photo_name__zSMjq",staff_profile_photo_index:"StaffStudentProfile_staff_profile_photo_index__nKKs7",card_hold_container:"StaffStudentProfile_card_hold_container__DqWAD",sataf_container:"StaffStudentProfile_sataf_container__dx01S",sataf_container_count:"StaffStudentProfile_sataf_container_count__EB7hD",sataf_container_count_inner:"StaffStudentProfile_sataf_container_count_inner__Sykk5",satafcci_text:"StaffStudentProfile_satafcci_text__z9fpa",satafcci_amount:"StaffStudentProfile_satafcci_amount__smGsB"}}}]);
//# sourceMappingURL=6647.da00246a.chunk.js.map