"use strict";(self.webpackChunkmithkal_qviple=self.webpackChunkmithkal_qviple||[]).push([[89733,81663,85303],{63162:function(n,e,t){var i=t(39230),l=t(51416),a=t(43504),o=t(72791),s=t(80184),d=function(n){var e=n.tab,t=n.isActive,o=n.isLink,d=n.parentState,c=n.onAction,r=n.url,u=(0,i.$G)().t;return o?(0,s.jsx)(a.rU,{className:t?l.Z.horizontal_tab_card_active:l.Z.horizontal_tab_card,to:r,state:d,children:(0,s.jsx)("h6",{children:u(null===e||void 0===e?void 0:e.label)})}):(0,s.jsx)("div",{className:t?l.Z.horizontal_tab_card_active:l.Z.horizontal_tab_card,onClick:function(){c(null===e||void 0===e?void 0:e.id)},children:(0,s.jsx)("h6",{children:u(null===e||void 0===e?void 0:e.label)})})};e.Z=(0,o.memo)(d)},98967:function(n,e,t){var i=t(51416),l=t(80184);e.Z=function(n){var e=n.children;return(0,l.jsx)("div",{className:i.Z.horizontal_tab_wrapper,children:e})}},63687:function(n,e,t){var i=t(59393),l=t(80184);e.Z=function(n){var e=n.customStyle,t=n.children;return(0,l.jsx)("div",{className:i.Z.user_member_container_wrapper,style:e,children:t})}},67477:function(n,e,t){t.r(e),t.d(e,{default:function(){return L}});var i=t(29439),l=t(43504),a=t(16871),o=t(63687),s=t(85303),d=t(21348),c=t(72791),r=t(23441),u=t(43317),_=t(91427),v=t(57588),m=t(56959),f=t(79110),h=t(55336),p=t(1669),x=t(2651),g=t(98684),j=t(39230),Z=t(93638),y=t(93433),b=t(1413),A=t(95048),N=t(33992),S=t(87932),I=t(41233),C=t(59965),k=t(98734),O=t(36665),w=t(50484),U=t(80184),P=function(n){var e,t,l,o,s,d,r,_=n.onClose,v=n.aid,m=n.instituteId,f=(0,j.$G)().t,h=(0,a.UO)(),p=(0,a.s0)(),x=(0,a.TH)(),g=(0,A.v9)((function(n){return n.financeChange})),Z=(0,c.useState)(!1),P=(0,i.Z)(Z,2),F=P[0],R=P[1],E=(0,c.useState)({timeline:"false",timeline_content:"",from:"",to:"",depart:"",batch:"",master:[],bank:""}),T=(0,i.Z)(E,2),L=T[0],D=T[1],G=(0,c.useState)(""),z=(0,i.Z)(G,2),B=z[0],M=z[1],q=(0,u.PJ)(),V=(0,i.Z)(q,1)[0],H=(0,N.Zi)({id:g.insId?g.insId:m,skip:g.insId?!g.insId:!m}),K=H.allDepartment,Y=H.allDepartmentRefetch,J=(0,N.tx)({data:{id:m,did:L.depart},skip:"All"===L.depart||!L.depart}),$=J.allClassMaster,W=J.allClassMasterRefetch,Q=(0,N._C)({did:L.depart,skip:"All"===L.depart||!L.depart}),X=Q.oneDepartment,nn=Q.oneDepartmentRefetch,en=(0,S.o9)({data:{fid:g.fid,page:1,limit:1e3,search:""},skip:!g.fid}),tn=en.getAllBankByFinance,ln=en.getAllBankByFinanceRefetch;(0,c.useEffect)((function(){g.fid&&ln()}),[g.fid,ln]),(0,c.useEffect)((function(){(g.insId||m)&&Y()}),[g.insId,m,Y]),(0,c.useEffect)((function(){L.depart&&"All"!==L.depart&&W()}),[L.depart,W]),(0,c.useEffect)((function(){L.depart&&"All"!==L.depart&&nn()}),[L.depart,nn]);return(0,U.jsxs)(O.Z,{onClose:_,children:[(0,U.jsxs)("div",{className:w.Z.transaction_container,children:[(0,U.jsx)("h6",{children:f("filter_by_fee_head")}),(0,U.jsx)(I.Z,{selectLabel:f("select_department"),selectedValue:f("all_select_particular_department"),options:null!==K&&void 0!==K&&null!==(e=K.institute)&&void 0!==e&&e.depart?["All"].concat((0,y.Z)(null===K||void 0===K||null===(t=K.institute)||void 0===t?void 0:t.depart)):["All"],onClick:function(n){D((function(e){return(0,b.Z)((0,b.Z)({},e),{},{depart:n})}))},errorShow:B.depart}),(0,U.jsx)(I.Z,{selectLabel:"All"===L.depart?f("select_current_batch"):f("select_batch"),selectedValue:"All"===L.depart?f("select_pref"):f("all_time_select_batch"),options:"All"===L.depart?["Current","All"]:null!==X&&void 0!==X&&null!==(l=X.department)&&void 0!==l&&l.batches?(0,y.Z)(null===X||void 0===X||null===(o=X.department)||void 0===o?void 0:o.batches):[],onClick:function(n){D((function(e){return(0,b.Z)((0,b.Z)({},e),{},{batch:n})}))},errorShow:B.batch}),"All"===L.depart?"":(0,U.jsx)(I.Z,{selectLabel:f("select_standard_year"),selectedValue:f("select_standard_year_placeholder"),options:null!==$&&void 0!==$&&$.classMaster?(0,y.Z)(null===$||void 0===$?void 0:$.classMaster):[],onClick:function(n){D((function(e){return(0,b.Z)((0,b.Z)({},e),{},{master:[].concat((0,y.Z)(e.master),[n])})}))},viewAs:"NORMAL_FILTER",defalutValue:(null===(s=L.master)||void 0===s?void 0:s.length)<2?"":"".concat(null===(d=L.master)||void 0===d?void 0:d.length," standard")}),(0,U.jsx)(I.Z,{selectLabel:"Select Bank (Optional)",selectedValue:"Please select Bank",options:null!==(r=null===tn||void 0===tn?void 0:tn.all_accounts)&&void 0!==r?r:[],value:"",onClick:function(n){D((function(e){return(0,b.Z)((0,b.Z)({},e),{},{bank:null===n||void 0===n?void 0:n._id})}))},openAs:"PROMOTE"}),(0,U.jsxs)("div",{className:w.Z.row_field,children:[(0,U.jsx)(C.Z,{labelText:f("filter_from"),placeholder:f("select_date"),name:"from",value:L.from,onDateFunction:function(n){var e=null===n||void 0===n?void 0:n.split("/"),t="".concat(e[2],"-").concat(e[1],"-").concat(e[0]);D((function(n){return(0,b.Z)((0,b.Z)({},n),{},{from:t})}))},customStyleContainer:{position:"relative",width:"48%"},datePickerPosition:{top:"-1rem"}}),(0,U.jsx)(C.Z,{labelText:f("filter_to"),placeholder:f("select_date"),name:"from",value:L.to,onDateFunction:function(n){var e=null===n||void 0===n?void 0:n.split("/"),t="".concat(e[2],"-").concat(e[1],"-").concat(e[0]);D((function(n){return(0,b.Z)((0,b.Z)({},n),{},{to:t})}))},customStyleContainer:{position:"relative",width:"48%"},datePickerPosition:{top:"-1rem",left:"-7rem"}})]}),(0,U.jsx)("button",{className:w.Z.filter_data_btn,onClick:function(){var n=function(n){var e={};for(var t in n)n[t]||(e[t]="".concat(t," is required!"));return e}({batch:L.batch,depart:L.depart}),e=!1;for(var t in n)if(t){e=!0;break}e?M(n):(R((function(n){return!n})),V((0,b.Z)((0,b.Z)({aid:v},L),{},{all_depart:"All"===L.depart?"All":"Particular",batch_status:L.batch,pendingData:{depart:"All"===L.depart?"":L.depart,batch:"All"===L.depart?"":L.batch,master:"All"===L.depart?[]:L.master}})).then((function(){R((function(n){return!n})),p("/q/".concat(h.username,"/member/staff/admission?type=export"),{state:x.state}),_()})).catch({}))},children:f("filter_data")})]}),F&&(0,U.jsx)(k.Z,{})]})},F=function(n){var e,t,l,a,o=n.aid,s=n.instituteId,d=(0,j.$G)().t,y=(0,c.useState)(""),b=(0,i.Z)(y,2),A=b[0],N=b[1],S=(0,c.useState)(1),I=(0,i.Z)(S,2),C=I[0],k=I[1],O=(0,c.useState)(!0),w=(0,i.Z)(O,2),F=w[0],R=w[1],E=(0,r.YD)({skip:A}),T=(0,i.Z)(E,2),L=T[0],D=T[1],G=(0,c.useState)(!1),z=(0,i.Z)(G,2),B=z[0],M=z[1],q=(0,u.W0)({data:{aid:o,page:C,limit:10,search:A},skip:!o}),V=q.admissionApplicantCancelledList,H=q.admissionApplicantCancelledListLoading;(0,c.useEffect)((function(){D&&F&&k((function(n){return n+1}))}),[D,F]),(0,c.useEffect)((function(){var n;if(null!==V&&void 0!==V&&null!==(n=V.list)&&void 0!==n&&n.length){var e,t=(0,_.f)(null===V||void 0===V||null===(e=V.list)||void 0===e?void 0:e.length);R((function(){return t}))}}),[null===V||void 0===V||null===(e=V.list)||void 0===e?void 0:e.length]);var K=(0,c.useCallback)((0,v.J)((function(n){k((function(){return 1})),N(n)}),1500),[]),Y=function(){M((function(n){return!n}))};return(0,U.jsxs)(U.Fragment,{children:[(0,U.jsxs)("div",{className:m.Z.fm_search_full,style:{marginBottom:"0.7rem"},children:[(0,U.jsx)("section",{className:m.Z.fm_search_full_container,children:(0,U.jsxs)("div",{className:m.Z.fm_search_full_container_inner,children:[(0,U.jsx)("img",{className:m.Z.fm_search_full_icon,alt:"search icon",src:"".concat(g.dB,"/navbar-search.svg")}),(0,U.jsx)("input",{type:"text",placeholder:d("search"),onChange:function(n){n.target.value?K(n.target.value):(k((function(){return 1})),N(""))},name:"search"})]})}),(0,U.jsx)(Z.Z,{label:"export",customStyle:{paddingBlock:"0.4rem",margin:"0"},onAction:Y})]}),null===V||void 0===V||null===(t=V.list)||void 0===t?void 0:t.map((function(n,e){var t;return(null===V||void 0===V||null===(t=V.list)||void 0===t?void 0:t.length)===e+1?(0,U.jsx)("div",{ref:L,children:(0,U.jsx)(f.Z,{applicant:n,instituteId:s})},null===n||void 0===n?void 0:n._id):(0,U.jsx)(f.Z,{applicant:n,instituteId:s},null===n||void 0===n?void 0:n._id)})),H?A?(0,U.jsx)(h.Z,{}):(0,U.jsx)(p.Z,{}):A?0===(null===V||void 0===V||null===(l=V.list)||void 0===l?void 0:l.length)&&(0,U.jsx)(x.Z,{customStyleContainer:{marginTop:"1.5rem"},title:"No admission cancelled found related this search."}):0===(null===V||void 0===V||null===(a=V.list)||void 0===a?void 0:a.length)&&(0,U.jsx)(x.Z,{customStyleContainer:{marginTop:"1.5rem"},title:"No admission cancelled list."}),B&&(0,U.jsx)(P,{onClose:Y,aid:o,instituteId:s})]})},R=t(90904),E=t(98967),T=t(63162),L=function(n){var e=n.instituteId,t=n.studentAlias,c=n.aid,r=(0,j.$G)().t,u=(0,l.lr)(),_=(0,i.Z)(u,1)[0],v=(0,a.TH)(),f=(0,a.UO)();return(0,U.jsxs)(o.Z,{children:[(0,U.jsx)(d.Z,{children:(0,U.jsx)("div",{className:m.Z.fm_header_container,children:(0,U.jsx)("h6",{children:r("cancel_admission")})})}),(0,U.jsx)(R.Z,{}),(0,U.jsx)(E.Z,{children:G.map((function(n){var e,t;return(0,U.jsx)(T.Z,{tab:n,isLink:!0,isActive:null===(e=n.groupIs)||void 0===e?void 0:e.includes(_.get("n")),parentState:v.state,url:"Institute"===(null===(t=v.state)||void 0===t?void 0:t.urlOffSet)?"/q/".concat(f.username,"/institute/member/admission?type=cancel-admission").concat(n.urlKey):"/q/".concat(f.username,"/member/staff/admission?type=cancel-admission").concat(n.urlKey)},null===n||void 0===n?void 0:n.id)}))}),(0,U.jsx)(R.Z,{customStyleBorder:{marginTop:"0"}}),_.get("n")?"cancelled"===_.get("n")?(0,U.jsx)(d.Z,{children:(0,U.jsx)(F,{aid:c,instituteId:e})}):null:(0,U.jsx)(s.default,{instituteId:e,studentAlias:t,invalidateAccess:"unAuthorized",allStudentControl:D})]})},D={collectAccess:"Other",govtAccess:"Other",cancelAccess:!0,editStructureControl:"authorized",editGovtNumberContorl:"unauthorized",editInstallmentControl:"unauthorized",editGovtInstallmentControl:"unauthorized"},G=[{label:"all_students",id:"student",urlKey:"",groupIs:["",null]},{label:"cancelled",id:"cancelled",urlKey:"&n=cancelled",groupIs:["cancelled"]}]},79110:function(n,e,t){var i=t(16871),l=t(75285),a=t(1095),o=t(98684),s=t(39230),d=t(66239),c=t(80184);e.Z=function(n){var e,t,r,u,_,v,m,f,h,p,x,g,j,Z,y,b,A,N,S,I,C,k,O,w,U,P,F,R,E=n.applicant,T=n.instituteId,L=(0,s.$G)().t,D=(0,i.UO)(),G=(0,i.s0)();return(0,c.jsx)(c.Fragment,{children:(0,c.jsxs)("div",{className:l.Z.oac_container,onClick:function(){var n;G("/q/".concat(D.username,"/student/profile"),{state:{sid:null===E||void 0===E||null===(n=E.student)||void 0===n?void 0:n._id,instituteId:T,viewAs:"ADMISSION_ADMIN",collectAccess:"Other"}})},title:"View Profile",children:[(0,c.jsxs)("div",{className:l.Z.oac_container_inner,children:[(0,c.jsx)("img",{alt:"Student Request Avatar",src:null!==E&&void 0!==E&&null!==(e=E.student)&&void 0!==e&&e.studentProfilePhoto?"".concat(a.yI,"/").concat(null===E||void 0===E||null===(t=E.student)||void 0===t?void 0:t.studentProfilePhoto):"".concat(o.p3,"/feed-user-avatar.svg"),loading:"lazy"}),(0,c.jsxs)("div",{className:l.Z.oac_container_inner_info,children:[(0,c.jsx)("h6",{children:"".concat(null!==(r=null===E||void 0===E||null===(u=E.student)||void 0===u?void 0:u.studentFirstName)&&void 0!==r?r:""," ").concat(null!==E&&void 0!==E&&null!==(_=E.student)&&void 0!==_&&_.studentMiddleName?null===E||void 0===E||null===(v=E.student)||void 0===v?void 0:v.studentMiddleName:""," ").concat(null!==(m=null===E||void 0===E||null===(f=E.student)||void 0===f?void 0:f.studentLastName)&&void 0!==m?m:"")}),(0,c.jsxs)("p",{children:[L("rs_only")," ",null===E||void 0===E?void 0:E.refund_amount," ","Refund"===(null===E||void 0===E?void 0:E.payment_status)&&"Refunded"]})]})]}),(0,c.jsxs)("div",{className:l.Z.oac_container_contact,children:[(0,c.jsxs)("div",{className:l.Z.oac_container_contact_inner,children:[(0,c.jsx)("img",{src:"".concat(o.U_,"/gender.svg"),alt:"email icon"}),(0,c.jsx)("p",{children:null===E||void 0===E||null===(h=E.student)||void 0===h?void 0:h.studentGender})]}),(0,c.jsxs)("div",{className:l.Z.oac_container_contact_inner,children:[(0,c.jsx)("img",{src:"".concat(o.U_,"/phone.svg"),alt:"phone icon"}),(0,c.jsx)("p",{children:null!==E&&void 0!==E&&null!==(p=E.student)&&void 0!==p&&null!==(x=p.user)&&void 0!==x&&x.userPhoneNumber?null===E||void 0===E||null===(g=E.student)||void 0===g||null===(j=g.user)||void 0===j?void 0:j.userPhoneNumber:null!==E&&void 0!==E&&null!==(Z=E.student)&&void 0!==Z&&null!==(y=Z.user)&&void 0!==y&&y.userEmail?null===E||void 0===E||null===(b=E.student)||void 0===b||null===(A=b.user)||void 0===A?void 0:A.userEmail:null!==E&&void 0!==E&&null!==(N=E.student)&&void 0!==N&&N.studentPhoneNumber?null===E||void 0===E||null===(S=E.student)||void 0===S?void 0:S.studentPhoneNumber:null!==E&&void 0!==E&&null!==(I=E.student)&&void 0!==I&&I.studentParentsPhoneNumber?null===E||void 0===E||null===(C=E.student)||void 0===C?void 0:C.studentParentsPhoneNumber:null!==(k=null===E||void 0===E||null===(O=E.student)||void 0===O?void 0:O.studentEmail)&&void 0!==k?k:""})]})]}),(0,c.jsxs)("div",{className:l.Z.oac_container_stuff,children:[(0,c.jsx)("a",{href:"".concat(a.q2,"/").concat(null===E||void 0===E||null===(w=E.student)||void 0===w||null===(U=w.application_print)||void 0===U||null===(P=U[0])||void 0===P?void 0:P.value),target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"none",marginTop:"-3px"},onClick:function(n){n.stopPropagation()},children:(0,c.jsx)("img",{src:"".concat(o.U_,"/download.svg"),alt:"receipt icon",title:"View Application Form"})}),null===E||void 0===E||null===(F=E.student)||void 0===F||null===(R=F.fee_receipt)||void 0===R?void 0:R.map((function(n,e){return e>2?"":(0,c.jsx)(d.Z,{rid:n},n)}))]})]})})}},85303:function(n,e,t){t.r(e),t.d(e,{default:function(){return R}});var i=t(29439),l=t(63687),a=t(21348),o=t(72791),s=t(39230),d=t(23441),c=t(56959),r=t(90904),u=t(98684),_=t(57588),v=t(91427),m=t(6758),f="FinanceAllStudent_student_table__Y3uXE",h="FinanceAllStudent_student_table_header__4fuiU",p="FinanceAllStudent_student_table_header_label__4x6eY",x="FinanceAllStudent_student_table_content_card__3KWaE",g="FinanceAllStudent_student_table_profile__QUIFN",j="FinanceAllStudent_student_table_header_name__x4ZNJ",Z="FinanceAllStudent_student_table_header_label_text__lny-H",y="FinanceAllStudent_student_table_contact__f4eB5",b="FinanceAllStudent_student_table_contact_email__dV19L",A="FinanceAllStudent_student_table_contact_number__r7HNK",N=t(80184),S=function(n){var e=n.studentAlias,t=(0,s.$G)().t;return(0,N.jsx)("div",{className:f,children:(0,N.jsxs)("div",{className:h,children:[(0,N.jsx)("p",{className:p,style:{flex:"1"},children:null!==e&&void 0!==e?e:t("gr_no")}),(0,N.jsx)("p",{className:p,style:{flex:"3"},children:t("name")}),(0,N.jsx)("p",{className:p,style:{flex:"2"},children:t("contact_number")}),(0,N.jsx)("p",{className:p,style:{flex:"1"},children:t("applicable_outs")}),(0,N.jsx)("p",{className:p,style:{flex:"0.7"},children:t("govt_oustanding")})]})})},I=t(1413),C=t(1095),k=t(16871),O=t(43504),w=function(n){var e,t,i,l,a,o,s,d,c,_=n.student,v=n.messageId,m=n.headId,f=n.instituteId,h=n.allStudentControl,S=(0,k.UO)(),w=(0,k.TH)();return(0,N.jsx)(N.Fragment,{children:(0,N.jsxs)(O.rU,{to:"/q/".concat(S.username,"/member/student/admission/profile"),state:(0,I.Z)((0,I.Z)({},w.state),{},{sid:null===_||void 0===_?void 0:_._id,messageId:v,headId:m,instituteId:f,collectAccess:null===h||void 0===h?void 0:h.collectAccess,govtAccess:null===h||void 0===h?void 0:h.govtAccess,cancelAccess:null===h||void 0===h?void 0:h.cancelAccess,editStructureControl:null===h||void 0===h?void 0:h.editStructureControl,editGovtNumberContorl:null===h||void 0===h?void 0:h.editGovtNumberContorl,editInstallmentControl:null===h||void 0===h?void 0:h.editInstallmentControl,editGovtInstallmentControl:null===h||void 0===h?void 0:h.editGovtInstallmentControl}),allStudentControl:!0,children:[(0,N.jsxs)("div",{className:x,style:{cursor:"pointer"},children:[(0,N.jsx)("p",{className:p,style:{flex:"1"},children:null!==(e=null===_||void 0===_?void 0:_.studentGRNO)&&void 0!==e?e:""}),(0,N.jsxs)("div",{className:g,style:{flex:"3"},children:[(0,N.jsx)("img",{src:null!==_&&void 0!==_&&_.studentProfilePhoto?"".concat(C.yI,"/").concat(null===_||void 0===_?void 0:_.studentProfilePhoto):"".concat(u.p3,"/feed-user-avatar.svg"),loading:"lazy",alt:"avatar"}),(0,N.jsxs)("div",{children:[(0,N.jsxs)("p",{className:j,children:["".concat(null!==(t=null===_||void 0===_?void 0:_.studentFirstName)&&void 0!==t?t:""," ").concat(null!==(i=null===_||void 0===_?void 0:_.studentMiddleName)&&void 0!==i?i:""," ").concat(null!==(l=null===_||void 0===_?void 0:_.studentLastName)&&void 0!==l?l:""),"100"===(null===_||void 0===_?void 0:_.profile_percentage)||100===(null===_||void 0===_?void 0:_.profile_percentage)?(0,N.jsx)("img",{src:"".concat(u.Fk,"/complete.svg"),loading:"lazy",alt:"avatar",style:{marginLeft:"0.6rem",height:"1rem"}}):null]}),(0,N.jsx)("p",{className:Z,children:null!==(a=null===_||void 0===_||null===(o=_.studentClass)||void 0===o?void 0:o.classTitle)&&void 0!==a?a:""})]})]}),(0,N.jsxs)("div",{className:p,style:{flex:"2"},children:[(0,N.jsxs)("div",{className:y,children:[(0,N.jsx)("img",{src:"".concat(u.Fk,"/gender.svg"),alt:"gender icon"}),(0,N.jsx)("p",{className:b,children:null===_||void 0===_?void 0:_.studentGender})]}),(0,N.jsxs)("div",{className:y,style:{marginTop:"0.4rem"},children:[(0,N.jsx)("img",{src:"".concat(u.Fk,"/phone.svg"),alt:"phone icon"}),(0,N.jsx)("p",{className:A,children:null!==_&&void 0!==_&&_.user.userPhoneNumber?null===_||void 0===_?void 0:_.user.userPhoneNumber:null!==(s=null===_||void 0===_?void 0:_.user.userEmail)&&void 0!==s?s:""})]})]}),(0,N.jsx)("p",{className:p,style:{flex:"1",textAlign:"right"},children:null!==(d=null===_||void 0===_?void 0:_.applicable_fees_pending)&&void 0!==d?d:0}),(0,N.jsx)("p",{className:p,style:{flex:"0.7",textAlign:"right"},children:null!==(c=null===_||void 0===_?void 0:_.government_fees_pending)&&void 0!==c?c:0})]}),(0,N.jsx)(r.Z,{customStyleBorder:{margin:"0"}})]})})},U=t(55336),P=t(1669),F=t(2651),R=function(n){var e,t,f,h,p,x=n.instituteId,g=n.studentAlias,j=n.headId,Z=n.messageId,y=n.invalidateAccess,b=n.allStudentControl,A=(0,s.$G)().t,I=(0,o.useState)(""),C=(0,i.Z)(I,2),k=C[0],O=C[1],R=(0,o.useState)(1),T=(0,i.Z)(R,2),L=T[0],D=T[1],G=(0,o.useState)(!0),z=(0,i.Z)(G,2),B=z[0],M=z[1],q=(0,d.YD)({skip:k}),V=(0,i.Z)(q,2),H=V[0],K=V[1],Y=(0,m.Cp)({data:{id:x,page:L,limit:10,search:k},skip:!x}),J=Y.instituteAllStudent,$=Y.instituteAllStudentLoading;(0,o.useEffect)((function(){K&&B&&D((function(n){return n+1}))}),[K,B]),(0,o.useEffect)((function(){if(null!==J&&void 0!==J&&J.list){var n,e=(0,v.f)(null===J||void 0===J||null===(n=J.list)||void 0===n?void 0:n.length);M((function(){return e}))}}),[null===J||void 0===J?void 0:J.list]);var W=(0,o.useCallback)((0,_.J)((function(n){D((function(){return 1})),O(n)}),1500),[]),Q=function(n){n.target.value?$||W(n.target.value):(D((function(){return 1})),O(""))};return(0,N.jsx)(N.Fragment,{children:(0,N.jsxs)(l.Z,{customStyle:{border:E[y]?"none":"0.5px solid #cacaca"},children:[E[y]?(0,N.jsx)(a.Z,{children:(0,N.jsx)("div",{className:c.Z.fm_search_full,children:(0,N.jsx)("section",{className:c.Z.fm_search_full_container,children:(0,N.jsxs)("div",{className:c.Z.fm_search_full_container_inner,children:[(0,N.jsx)("img",{className:c.Z.fm_search_full_icon,alt:"search icon",src:"".concat(u.dB,"/navbar-search.svg")}),(0,N.jsx)("input",{type:"text",placeholder:A("search"),onChange:Q,disabled:!(k||(null===J||void 0===J||null===(e=J.list)||void 0===e?void 0:e.length)>0)})]})})})}):(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(a.Z,{children:(0,N.jsxs)("div",{className:c.Z.fm_header_container,children:[(0,N.jsx)("h6",{children:A("all_students")}),(0,N.jsx)("div",{className:c.Z.fm_both_filter,children:(0,N.jsx)("div",{className:c.Z.fm_search,children:(0,N.jsx)("section",{className:c.Z.fm_search_container,children:(0,N.jsxs)("div",{className:c.Z.fm_search_container_inner,children:[(0,N.jsx)("img",{className:c.Z.fm_search_icon,alt:"search icon",src:"".concat(u.dB,"/navbar-search.svg")}),(0,N.jsx)("input",{type:"text",placeholder:A("search"),onChange:Q,style:{minWidth:"300px"},disabled:!(k||(null===J||void 0===J||null===(t=J.list)||void 0===t?void 0:t.length)>0)})]})})})})]})}),(0,N.jsx)(r.Z,{})]}),(0,N.jsx)(a.Z,{children:(0,N.jsx)(S,{studentAlias:g})}),(0,N.jsx)(r.Z,{}),(0,N.jsxs)(a.Z,{children:[null===J||void 0===J||null===(f=J.list)||void 0===f?void 0:f.map((function(n,e){var t;return(null===J||void 0===J||null===(t=J.list)||void 0===t?void 0:t.length)===e+1?(0,N.jsx)("div",{ref:H,children:(0,N.jsx)(w,{student:n,instituteId:x,messageId:Z,headId:j,allStudentControl:b})},null===n||void 0===n?void 0:n._id):(0,N.jsx)(w,{student:n,instituteId:x,messageId:Z,headId:j,allStudentControl:b},null===n||void 0===n?void 0:n._id)})),$?k?(0,N.jsx)(U.Z,{}):(0,N.jsx)(P.Z,{}):k?0===(null===J||void 0===J||null===(h=J.list)||void 0===h?void 0:h.length)&&(0,N.jsx)(F.Z,{title:"No student found related this search."}):0===(null===J||void 0===J||null===(p=J.list)||void 0===p?void 0:p.length)&&(0,N.jsx)(F.Z,{title:"No students added in institute."})]})]})})},E={unAuthorized:!0,govt:!0}},66239:function(n,e,t){var i=t(29439),l=t(72791),a=t(98684),o=t(6758),s=t(37782),d=t(55336),c=t(80184);e.Z=function(n){var e=n.rid,r=(0,l.useState)(""),u=(0,i.Z)(r,2),_=u[0],v=u[1],m=(0,l.useState)(!1),f=(0,i.Z)(m,2),h=f[0],p=f[1],x=(0,l.useState)(""),g=(0,i.Z)(x,2),j=g[0],Z=g[1],y=(0,o.Nw)({rid:_,skip:!_}),b=y.financeReceipt,A=y.financeReceiptRefetch;(0,l.useEffect)((function(){_&&A()}),[_,A]),(0,l.useEffect)((function(){null!==b&&void 0!==b&&b.receipt&&null!==b&&void 0!==b&&b.all_remain&&Z(b)}),[b]),(0,l.useEffect)((function(){if(j){var n,e=new Worker(new URL(t.p+t.u(33649),t.b));if("Hostel Application"===(null===j||void 0===j||null===(n=j.all_remain)||void 0===n?void 0:n.remaining_flow)){var i=(0,s.sp)(null===j||void 0===j?void 0:j.all_remain,null===j||void 0===j?void 0:j.receipt),l=i.institute,a=i.studentInfo,o=i.paymentReceiptInfo;e.postMessage({institute:l,studentInfo:a,paymentReceiptInfo:o,printReceiptType:"Refunded"===(null===o||void 0===o?void 0:o.transactonRefund)?"HOSTEL_REFUND":"HOSTEL"})}else{var d=(0,s.Hs)(null===j||void 0===j?void 0:j.all_remain,null===j||void 0===j?void 0:j.receipt),c=d.institute,r=d.studentInfo,u=d.paymentReceiptInfo;e.postMessage({institute:c,studentInfo:r,paymentReceiptInfo:u,printReceiptType:"Refunded"===(null===u||void 0===u?void 0:u.transactonRefund)?"ADMISSION_REFUND":"ADMISSION"})}e.onmessage=function(n){n&&(window.open(n.data,"_blank"),p((function(n){return!n})),Z(""),e.terminate())}}}),[j]);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("img",{src:"".concat(a.J7,"/receipt.svg"),alt:"receipt icon",title:"Download Fees Receipt",onClick:function(n){return function(n){n.stopPropagation(),p((function(n){return!n})),v(e),_===e&&Z(b)}(n)}}),h&&(0,c.jsx)(d.Z,{})]})}},2651:function(n,e,t){var i=t(15783),l=t(80184);e.Z=function(n){var e=n.title,t=n.subtitle,a=n.customStyleContainer,o=n.costomTextTitleStyle,s=n.costomTextSubtitleStyle;return(0,l.jsxs)("div",{className:i.Z.empty_container,style:a,children:[e&&(0,l.jsx)("h6",{style:o,children:e}),t&&(0,l.jsx)("p",{style:s,children:t})]})}},57588:function(n,e,t){t.d(e,{J:function(){return i}});var i=function(n,e){var t;return function(){var i=this,l=arguments;clearTimeout(t),t=setTimeout((function(){n.apply(i,l)}),e)}}},91427:function(n,e,t){t.d(e,{f:function(){return i}});var i=function(n){return n%10===0}},75285:function(n,e){e.Z={content2:"OneOngoingAdmission_content2__UrY-4",content3:"OneOngoingAdmission_content3__wmxHl",appinforow:"OneOngoingAdmission_appinforow__SS5D4",appinforow1:"OneOngoingAdmission_appinforow1__nwEXk",appinforow2:"OneOngoingAdmission_appinforow2__KSPRj",appinforowred:"OneOngoingAdmission_appinforowred__EJthG",oac_container:"OneOngoingAdmission_oac_container__oeabB",oac_container_inner:"OneOngoingAdmission_oac_container_inner__Ki5D9",oac_container_inner_info:"OneOngoingAdmission_oac_container_inner_info__cm-xm",oac_container_contact:"OneOngoingAdmission_oac_container_contact__swjup",oac_container_contact_inner:"OneOngoingAdmission_oac_container_contact_inner__Ppdbl",oac_container_stuff:"OneOngoingAdmission_oac_container_stuff__+CGpg",admission_confirm_batch_card:"OneOngoingAdmission_admission_confirm_batch_card__AtVzz",admission_confirm_batch_card_active:"OneOngoingAdmission_admission_confirm_batch_card_active__V8p66"}},15783:function(n,e){e.Z={notify_backdrop:"Utils_notify_backdrop__saL0O",notify_overlay:"Utils_notify_overlay__GtPc5",notify_hide_overlay:"Utils_notify_hide_overlay__MYvkC",notify_overlay_animation:"Utils_notify_overlay_animation__pcASm",notify_hide_overlay_animation:"Utils_notify_hide_overlay_animation__UKRcG",notify_container:"Utils_notify_container__O8DBA",notify_message:"Utils_notify_message__PHwKo",notify_close:"Utils_notify_close__IwjyA",modal_backdrop:"Utils_modal_backdrop__WBquw",modal_overlay:"Utils_modal_overlay__Yy-AV",modal_hide_overlay:"Utils_modal_hide_overlay__elt3A",navbar_modal_hide_overlay:"Utils_navbar_modal_hide_overlay__yqj5q",navbar_modal_overlay:"Utils_navbar_modal_overlay__6ub8g",modal_hide_overlay_animation:"Utils_modal_hide_overlay_animation__d3TNp",navbar_modal_overlay_animation:"Utils_navbar_modal_overlay_animation__Ypk9u",navbar_modal_hide_overlay_animation:"Utils_navbar_modal_hide_overlay_animation__QLEse",empty_container:"Utils_empty_container__-VyCI",modal_overlay_animation:"Utils_modal_overlay_animation__zkjsk"}}}]);
//# sourceMappingURL=89733.79b517d7.chunk.js.map