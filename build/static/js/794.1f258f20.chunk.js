"use strict";(self.webpackChunkmithkal_qviple=self.webpackChunkmithkal_qviple||[]).push([[794],{48846:function(e,n,t){var i=t(29439),o=t(72791),a=t(10406),l=t(98094),_=t(67923),r=t(72426),s=t.n(r),d=t(39230),c=t(16871),u=t(74289),m=t(20859),v=t(80184);n.Z=function(e){var n,t,r,p,f,h,g,x,b,y,A,Z,q,j,w,S,k,R,H,N,T,M,C=e.queryFlow,E=(0,d.$G)().t,F=(0,c.s0)(),B=(0,c.TH)(),D=(0,o.useState)(""),P=(0,i.Z)(D,2),I=P[0],L=P[1],U=(0,u.Do)({meid:null===(n=B.state)||void 0===n?void 0:n.meid,skip:!(null!==(t=B.state)&&void 0!==t&&t.meid)}),G=U.getOneMeetingDetail,V=U.getOneMeetingDetailRefetch;(0,o.useEffect)((function(){var e;null!==(e=B.state)&&void 0!==e&&e.meid&&V()}),[null===(r=B.state)||void 0===r?void 0:r.qid,V]);var O=function(e){L(e===I?"":e)};return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)("div",{className:a.Z.with_search,style:{justifyContent:"flex-start",gap:"1rem"},children:[(0,v.jsx)("img",{src:"/images/arrow-left-fees-icon.svg",onClick:function(){F(-1)},alt:"go to previous tab",title:"Go Back",style:{cursor:"pointer"}}),(0,v.jsx)("h6",{children:E("meeting_detail")})]}),(0,v.jsx)(l.Z,{customStyle:{width:"100%",marginBottom:"0.5rem"}}),(0,v.jsx)(_.Z,{labelText:"".concat(E("agenda"),": "),value:null!==(p=null===G||void 0===G||null===(f=G.all_meet)||void 0===f?void 0:f.agenda)&&void 0!==p?p:""}),(0,v.jsx)(_.Z,{labelText:"".concat(E("summary"),": "),value:null!==(h=null===G||void 0===G||null===(g=G.all_meet)||void 0===g?void 0:g.summary)&&void 0!==h?h:"",customStyleValue:{width:"100%",whiteSpace:"break-spaces"},customStyleContainer:{alignItems:"flex-start"}}),(0,v.jsx)(_.Z,{labelText:"".concat(E("discussion"),": "),value:null!==(x=null===G||void 0===G||null===(b=G.all_meet)||void 0===b?void 0:b.discussion)&&void 0!==x?x:"",customStyleValue:{width:"100%",whiteSpace:"break-spaces"},customStyleContainer:{alignItems:"flex-start"}}),(0,v.jsx)(_.Z,{labelText:"".concat(E("date"),": "),value:s()(null===G||void 0===G||null===(y=G.all_meet)||void 0===y?void 0:y.created_at).format("DD MMM,yyyy")}),"By_Student"===C?null:(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)("div",{className:a.Z.mentor_attendance_container,children:[(0,v.jsxs)("div",{className:"PRESENT"===I?"".concat(a.Z.mentor_attendance_btn," ").concat(a.Z.mentor_attendance_btn_active):a.Z.mentor_attendance_btn,onClick:function(){return O("PRESENT")},children:[(0,v.jsxs)("h6",{children:["".concat(E("present"),": "),null!==(A=null===G||void 0===G||null===(Z=G.all_meet)||void 0===Z?void 0:Z.mentees_present_count)&&void 0!==A?A:0]}),(0,v.jsx)("img",{src:"/images/forward-right-icon.svg",alt:"view academics"})]}),(0,v.jsxs)("div",{className:"ABSENT"===I?"".concat(a.Z.mentor_attendance_btn," ").concat(a.Z.mentor_attendance_btn_active):a.Z.mentor_attendance_btn,onClick:function(){return O("ABSENT")},children:[(0,v.jsxs)("h6",{children:["".concat(E("absent"),": "),null!==(q=null===G||void 0===G||null===(j=G.all_meet)||void 0===j?void 0:j.mentees_absent_count)&&void 0!==q?q:0]}),(0,v.jsx)("img",{src:"/images/forward-right-icon.svg",alt:"view academics"})]})]}),"PRESENT"===I?(0,v.jsxs)("div",{style:{marginTop:"1rem"},children:[(0,v.jsx)("p",{children:(null===G||void 0===G||null===(w=G.all_meet)||void 0===w||null===(S=w.present_mentees)||void 0===S?void 0:S.length)>0?E("present_mentee_list"):E("no_present_mentee_list")}),null===G||void 0===G||null===(k=G.all_meet)||void 0===k||null===(R=k.present_mentees)||void 0===R?void 0:R.map((function(e){return(0,v.jsx)(m.Z,{mentee:e,viewAs:"MEETING_DETAIL",isPresent:!0},null===e||void 0===e?void 0:e._id)}))]}):"ABSENT"===I?(0,v.jsxs)("div",{style:{marginTop:"1rem"},children:[(0,v.jsx)("p",{children:(null===G||void 0===G||null===(H=G.all_meet)||void 0===H||null===(N=H.absent_mentees)||void 0===N?void 0:N.length)>0?E("absent_mentee_list"):E("no_absent_mentee_list")}),null===G||void 0===G||null===(T=G.all_meet)||void 0===T||null===(M=T.absent_mentees)||void 0===M?void 0:M.map((function(e){return(0,v.jsx)(m.Z,{mentee:e,viewAs:"MEETING_DETAIL"},null===e||void 0===e?void 0:e._id)}))]}):null]})]})}},37435:function(e,n,t){var i=t(1413),o=t(29439),a=t(72791),l=t(10406),_=t(98094),r=t(67923),s=t(72426),d=t.n(s),c=t(72952),u=t(39230),m=t(16871),v=t(74289),p=t(98734),f=t(30510),h=t(80184);n.Z=function(e){var n,t,s,g,x,b,y,A,Z,q,j,w,S,k,R,H,N,T,M,C,E,F,B,D,P,I,L,U,G,V,O,z,Q,W,K,Y,X,$,J,ee,ne,te,ie,oe,ae,le,_e,re,se,de,ce,ue,me,ve,pe,fe=e.queryFlow,he=(0,u.$G)().t,ge=(0,m.s0)(),xe=(0,m.TH)(),be=(0,a.useState)(!1),ye=(0,o.Z)(be,2),Ae=ye[0],Ze=ye[1],qe=(0,a.useState)({remark:"",forward:""}),je=(0,o.Z)(qe,2),we=je[0],Se=je[1],ke=(0,v.LL)({qid:null===(n=xe.state)||void 0===n?void 0:n.qid,skip:!(null!==(t=xe.state)&&void 0!==t&&t.qid)}),Re=ke.getQueryDetail,He=ke.getQueryDetailRefetch,Ne=(0,v.I4)(),Te=(0,o.Z)(Ne,1)[0],Me=(0,f.hp)(),Ce=(0,o.Z)(Me,1)[0];(0,a.useEffect)((function(){var e;null!==(e=xe.state)&&void 0!==e&&e.qid&&He()}),[null===(s=xe.state)||void 0===s?void 0:s.qid,He]);return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)("div",{className:l.Z.with_search,style:{justifyContent:"flex-start",gap:"1rem"},children:[(0,h.jsx)("img",{src:"/images/arrow-left-fees-icon.svg",onClick:function(){ge(-1)},alt:"go to previous tab",title:"Go Back",style:{cursor:"pointer"}}),(0,h.jsx)("h6",{children:he("query")})]}),(0,h.jsx)(_.Z,{customStyle:{width:"100%",marginBottom:"0.5rem"}}),(0,h.jsx)(r.Z,{labelText:he("mentor"),value:"".concat(null!==(g=null===Re||void 0===Re||null===(x=Re.query)||void 0===x||null===(b=x.mentor)||void 0===b||null===(y=b.mentor_head)||void 0===y?void 0:y.staffFirstName)&&void 0!==g?g:""," ").concat(null!==(A=null===Re||void 0===Re||null===(Z=Re.query)||void 0===Z||null===(q=Z.mentor)||void 0===q||null===(j=q.mentor_head)||void 0===j?void 0:j.staffMiddleName)&&void 0!==A?A:""," ").concat(null!==(w=null===Re||void 0===Re||null===(S=Re.query)||void 0===S||null===(k=S.mentor)||void 0===k||null===(R=k.mentor_head)||void 0===R?void 0:R.staffLastName)&&void 0!==w?w:"")}),"By_Student"===fe?(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(r.Z,{labelText:he("raised_on"),value:d()(null===Re||void 0===Re||null===(H=Re.query)||void 0===H?void 0:H.raised_on).format("DD MMM,yyyy")}),(0,h.jsx)(r.Z,{labelText:"".concat(he("query"),": "),value:null!==(N=null===Re||void 0===Re||null===(T=Re.query)||void 0===T?void 0:T.query)&&void 0!==N?N:"",customStyleContainer:{alignItems:"flex-start"}}),(0,h.jsx)(r.Z,{labelText:he("replied_on"),value:d()(null===Re||void 0===Re||null===(M=Re.query)||void 0===M?void 0:M.report_on).format("DD MMM,yyyy")}),(0,h.jsx)(r.Z,{labelText:he("remark_by_mentor_if_any"),value:null!==(C=null===Re||void 0===Re||null===(E=Re.query)||void 0===E?void 0:E.remark)&&void 0!==C?C:"",customStyleContainer:{alignItems:"flex-start"}}),"Reported"===(null===Re||void 0===Re||null===(F=Re.query)||void 0===F?void 0:F.report_by)?(0,h.jsx)("p",{className:l.Z.mentor_status_card_paragraph,style:{color:"#E2C318"},children:he("reported")}):"Solved"===(null===Re||void 0===Re||null===(B=Re.query)||void 0===B?void 0:B.query_status)?(0,h.jsx)("p",{className:l.Z.mentor_status_card_paragraph,style:{color:"#20B038"},children:he("solved")}):"UnSolved"===(null===Re||void 0===Re||null===(D=Re.query)||void 0===D?void 0:D.query_status)?(0,h.jsx)("p",{className:l.Z.mentor_status_card_paragraph,style:{color:"#EE3833"},children:he("not_solved")}):null,"Reported"===(null===Re||void 0===Re||null===(P=Re.query)||void 0===P?void 0:P.report_by)?null:(0,h.jsxs)("p",{className:l.Z.mentor_status_card_paragraph,children:[he("if_query_not_resolved"),":","  ",(0,h.jsx)("span",{style:{color:"#EE3833",cursor:"pointer"},onClick:function(){var e,n;null!==(e=xe.state)&&void 0!==e&&e.qid&&(Ze((function(e){return!e})),Ce({qid:null===(n=xe.state)||void 0===n?void 0:n.qid}).then((function(){He(),Ze((function(e){return!e}))})).catch({}))},children:he("report")})]}),"Solved"===(null===Re||void 0===Re||null===(I=Re.query)||void 0===I?void 0:I.query_status)&&(0,h.jsx)(r.Z,{labelText:he("remark_by_me"),value:null!==(L=null===Re||void 0===Re||null===(U=Re.query)||void 0===U?void 0:U.remark_by_depart)&&void 0!==L?L:"",customStyleContainer:{alignItems:"flex-start"}})]}):(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(r.Z,{labelText:he("mentee"),value:"".concat(null!==(G=null===Re||void 0===Re||null===(V=Re.query)||void 0===V||null===(O=V.student)||void 0===O?void 0:O.studentFirstName)&&void 0!==G?G:""," ").concat(null!==(z=null===Re||void 0===Re||null===(Q=Re.query)||void 0===Q||null===(W=Q.student)||void 0===W?void 0:W.studentMiddleName)&&void 0!==z?z:""," ").concat(null!==(K=null===Re||void 0===Re||null===(Y=Re.query)||void 0===Y||null===(X=Y.student)||void 0===X?void 0:X.studentLastName)&&void 0!==K?K:"")}),(0,h.jsx)(r.Z,{labelText:"".concat(he("mobile_number"),"/").concat(he("email"),": "),value:null!==($=null!==(J=null===Re||void 0===Re||null===(ee=Re.query)||void 0===ee||null===(ne=ee.student)||void 0===ne||null===(te=ne.user)||void 0===te?void 0:te.userPhoneNumber)&&void 0!==J?J:null===Re||void 0===Re||null===(ie=Re.query)||void 0===ie||null===(oe=ie.student)||void 0===oe||null===(ae=oe.user)||void 0===ae?void 0:ae.userEmail)&&void 0!==$?$:""}),(0,h.jsx)(r.Z,{labelText:he("raised_on"),value:d()(null===Re||void 0===Re||null===(le=Re.query)||void 0===le?void 0:le.raised_on).format("DD MMM,yyyy")}),(0,h.jsx)(r.Z,{labelText:he("reported_on"),value:d()(null===Re||void 0===Re||null===(_e=Re.query)||void 0===_e?void 0:_e.report_on).format("DD MMM,yyyy")}),(0,h.jsx)(r.Z,{labelText:"".concat(he("query"),": "),value:null!==(re=null===Re||void 0===Re||null===(se=Re.query)||void 0===se?void 0:se.query)&&void 0!==re?re:"",customStyleContainer:{alignItems:"flex-start"}}),(0,h.jsx)(r.Z,{labelText:he("remark_by_mentor_if_any"),value:null!==(de=null===Re||void 0===Re||null===(ce=Re.query)||void 0===ce?void 0:ce.remark)&&void 0!==de?de:"",customStyleContainer:{alignItems:"flex-start"}}),"Solved"===(null===Re||void 0===Re||null===(ue=Re.query)||void 0===ue?void 0:ue.query_status)&&(0,h.jsx)(r.Z,{labelText:he("remark_by_me"),value:null!==(me=null===Re||void 0===Re||null===(ve=Re.query)||void 0===ve?void 0:ve.remark_by_depart)&&void 0!==me?me:"",customStyleContainer:{alignItems:"flex-start"}}),"Solved"!==(null===Re||void 0===Re||null===(pe=Re.query)||void 0===pe?void 0:pe.query_status)&&(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(c.Z,{labelText:he("remark"),name:"remark",type:"text",value:we.remark,onChange:function(e){return Se((function(n){return(0,i.Z)((0,i.Z)({},n),{},{remark:e.target.value})}))},placeholder:he("follow_up_details")}),(0,h.jsx)("button",{className:l.Z.student_renewal_confirm_btn,style:{width:"100%",marginTop:"1rem"},onClick:function(){var e;(we.remark||we.forward)&&(Ze((function(e){return!e})),Te({qid:null===(e=xe.state)||void 0===e?void 0:e.qid,flow:fe,mark_query:we}).then((function(){He(),Ze((function(e){return!e}))})).catch({}))},children:he("send")})]})]}),Ae&&(0,h.jsx)(p.Z,{})]})}},47401:function(e,n,t){var i=t(1413),o=(t(72791),t(16871)),a=t(43504),l=t(80184);n.Z=function(e){var n=e.carryParentState,t=e.activeTab,_=e.children,r=(0,o.UO)();return(0,l.jsx)(a.rU,{to:"/q/".concat(r.username,"/member/mentor?a=").concat(t),state:(0,i.Z)({},n),children:_})}},20859:function(e,n,t){t(72791);var i=t(15961),o=t(39230),a=t(69721),l=t(80184);n.Z=function(e){var n,t=e.mentee,_=e.viewAs,r=e.onPresent,s=e.onAbsent,d=e.isVisible,c=e.absent,u=e.present,m=e.isPresent,v=(0,o.$G)().t;return(0,l.jsxs)("div",{className:i.Z.applicant_card_container,children:[(0,l.jsxs)("div",{className:i.Z.applicant_card_inner,style:{width:"90%"},children:[(0,l.jsx)("img",{alt:"Student Request Avatar",src:null!==t&&void 0!==t&&t.studentProfilePhoto?"".concat(a.yI,"/").concat(null===t||void 0===t?void 0:t.studentProfilePhoto):"/images/member_tab/class/default_avatar.svg",loading:"lazy"}),(0,l.jsxs)("div",{className:i.Z.applicant_card_inner_info,children:[(0,l.jsx)("h6",{children:"".concat(null===t||void 0===t?void 0:t.studentFirstName," ").concat(null!==t&&void 0!==t&&t.studentMiddleName?null===t||void 0===t?void 0:t.studentMiddleName:""," ").concat(null===t||void 0===t?void 0:t.studentLastName)}),"ATTENDANCE"===_||"MEETING_DETAIL"===_?null:(0,l.jsxs)("p",{children:["".concat(null!==(n=null===t||void 0===t?void 0:t.total_query)&&void 0!==n?n:0," ")," ",v("pending")]})]})]}),"ATTENDANCE"===_?"PRESENT"===d?null!==u&&void 0!==u&&u.includes(null===t||void 0===t?void 0:t._id)?(0,l.jsx)("img",{src:"/images/members/radio-btn-green.svg",alt:"radio",onClick:function(){return r(null===t||void 0===t?void 0:t._id)}}):(0,l.jsx)("img",{src:"/images/members/radio-btn.svg",alt:"radio",onClick:function(){return r(null===t||void 0===t?void 0:t._id)}}):null!==c&&void 0!==c&&c.includes(null===t||void 0===t?void 0:t._id)?(0,l.jsx)("img",{src:"/images/members/radio-btn-red.svg",alt:"radio",onClick:function(){return s(null===t||void 0===t?void 0:t._id)}}):(0,l.jsx)("img",{src:"/images/members/radio-btn.svg",alt:"radio",onClick:function(){return s(null===t||void 0===t?void 0:t._id)}}):"MEETING_DETAIL"===_?m?(0,l.jsx)("img",{src:"/images/members/radio-btn-green.svg",alt:"radio"}):(0,l.jsx)("img",{src:"/images/members/radio-btn-red.svg",alt:"radio"}):null]})}},29829:function(e,n,t){t.d(n,{Z:function(){return M}});var i=t(93433),o=t(29439),a=t(72791),l=t(15961),_=t(39230),r=t(11105),s=t(23441),d=t(74289),c=t(4942),u=t(1413),m=t(36665),v=t(98094),p=t(72952),f=t(98734),h=t(60163),g=t(97655),x=t(90865),b=t(20859),y=t(47167),A=t(80184),Z=function(e){var n=e.onPresentHandler,t=e.onAbsentHandler,i=(0,_.$G)().t,l=(0,a.useState)(0),r=(0,o.Z)(l,2),s=r[0],d=r[1],c=[{name:i("present"),id:0},{name:i("absent"),id:1}];return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(y.Z,{tabList:c,activeIndexTab:s,customStyleTab:{width:"100%"},customStyleLink:{width:"50%"},setActiveIndexTab:function(e){1===e?t():n(),d(e)}}),(0,A.jsx)(v.Z,{customStyle:{width:"100%",marginBottom:"0.7rem"}})]})},q=function(e){var n,t=e.mid,l=e.onClose,s=e.onAddMeeting,c=(0,_.$G)().t,u=(0,a.useState)(!0),m=(0,o.Z)(u,2),p=m[0],f=m[1],g=(0,a.useState)([]),x=(0,o.Z)(g,2),y=x[0],q=x[1],j=(0,a.useState)([]),w=(0,o.Z)(j,2),S=w[0],k=w[1],R=(0,a.useState)("PRESENT"),H=(0,o.Z)(R,2),N=H[0],T=H[1],M=(0,d.Gu)({data:{mid:t,page:1,limit:1e3},skip:!t}),C=M.getOneMentorMenteeList,E=M.getOneMentorMenteeListRefetch;(0,a.useEffect)((function(){t&&(f(!0),E())}),[t,E]);var F=function(){for(var e=[],n=0;n<(null===C||void 0===C||null===(t=C.all_mentees)||void 0===t?void 0:t.length);n++){var t,i;e.push(null===C||void 0===C||null===(i=C.all_mentees[n])||void 0===i?void 0:i._id)}k(e),q([]),T("PRESENT")};(0,a.useEffect)((function(){var e;null!==C&&void 0!==C&&C.all_mentees?(F(),f(!1)):0===(null===C||void 0===C||null===(e=C.all_mentees)||void 0===e?void 0:e.length)&&f(!1)}),[null===C||void 0===C?void 0:C.all_mentees]);var B=function(e){null!==y&&void 0!==y&&y.includes(e)?(q((function(n){return null===n||void 0===n?void 0:n.filter((function(n){return n!==e}))})),k((function(n){return[].concat((0,i.Z)(n),[e])}))):(q((function(n){return[].concat((0,i.Z)(n),[e])})),k((function(n){return null===n||void 0===n?void 0:n.filter((function(n){return n!==e}))})))},D=function(e){null!==S&&void 0!==S&&S.includes(e)?(k((function(n){return null===n||void 0===n?void 0:n.filter((function(n){return n!==e}))})),q((function(n){return[].concat((0,i.Z)(n),[e])}))):(k((function(n){return[].concat((0,i.Z)(n),[e])})),q((function(n){return null===n||void 0===n?void 0:n.filter((function(n){return n!==e}))})))};return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsxs)("section",{className:h.Z.seating_modal_title_left,style:{width:"100%",justifyContent:"space-between"},children:[(0,A.jsxs)("div",{className:h.Z.attendance_text,children:[(0,A.jsx)("img",{src:"/images/arrow-left-fees-icon.svg",onClick:l,alt:""}),(0,A.jsx)("h6",{children:c("mark_attendance")})]}),(0,A.jsx)("div",{className:h.Z.attendance_next_btn,style:{marginTop:"0",width:"80px",padding:"0.5rem",height:"auto",cursor:"pointer"},onClick:function(){s({present:y,absent:S})},children:c("add")})]}),(0,A.jsx)(v.Z,{customStyle:{width:"100%",marginBottom:"1rem"}}),(0,A.jsx)(Z,{onPresentHandler:F,onAbsentHandler:function(){for(var e=[],n=0;n<(null===C||void 0===C||null===(t=C.all_mentees)||void 0===t?void 0:t.length);n++){var t,i;e.push(null===C||void 0===C||null===(i=C.all_mentees[n])||void 0===i?void 0:i._id)}k([]),q(e),T("ABSENT")}}),null===C||void 0===C||null===(n=C.all_mentees)||void 0===n?void 0:n.map((function(e){return(0,A.jsx)(b.Z,{mentee:e,viewAs:"ATTENDANCE",isVisible:N,absent:S,present:y,onPresent:B,onAbsent:D},null===e||void 0===e?void 0:e._id)})),p&&(0,A.jsx)(r.Z,{})]})},j=function(e){var n=e.onRefetch,t=e.onClose,i=e.mid,l=(0,_.$G)().t,r=(0,a.useState)(""),s=(0,o.Z)(r,2),b=s[0],y=(s[1],(0,a.useState)(!1)),Z=(0,o.Z)(y,2),j=Z[0],w=Z[1],S=(0,a.useState)(!1),k=(0,o.Z)(S,2),R=k[0],H=k[1],N=(0,a.useState)({agenda:"",discussion:"",summary:"",meeting_alert:!0}),T=(0,o.Z)(N,2),M=T[0],C=T[1],E=(0,d.aC)(),F=(0,o.Z)(E,1)[0],B=function(e){C((function(n){return(0,u.Z)((0,u.Z)({},n),{},(0,c.Z)({},e.target.name,e.target.value))}))},D=function(){H((function(e){return!e}))};return(0,A.jsx)(m.Z,{onClose:t,children:(0,A.jsxs)("div",{className:h.Z.seating_modal,style:{width:"40rem"},children:[R?(0,A.jsx)(q,{mid:i,onClose:D,onAddMeeting:function(e){i&&(w((function(e){return!e})),F({meetingData:(0,u.Z)((0,u.Z)({},M),{},{mid:i,p_array:null===e||void 0===e?void 0:e.present,a_array:null===e||void 0===e?void 0:e.absent})}).then((function(){n(),t()})).catch({}))}}):(0,A.jsxs)(A.Fragment,{children:[(0,A.jsxs)("section",{className:h.Z.seating_modal_title_left,style:{position:"relative"},children:[(0,A.jsx)("img",{src:"/images/arrow-left-fees-icon.svg",onClick:t,alt:""}),(0,A.jsx)("h6",{children:l("add_meeting")})]}),(0,A.jsx)(v.Z,{customStyle:{width:"100%",marginBottom:"1rem"}}),(0,A.jsx)(x.Z,{labelHeading:l("add_meeting_alert"),labelDescription:"",defaultLabel:!1,customContainer:{padding:"0"},checkedToggle:M.meeting_alert,onToggleHandler:function(e){return C((function(n){return(0,u.Z)((0,u.Z)({},n),{},{meeting_alert:e.target.checked})}))}}),(0,A.jsx)(g.Z,{labelText:l("agenda"),placeholder:l("agenda_placeholder"),name:"agenda",value:M.agenda,type:"text",onChange:B,errorShow:b.agenda}),(0,A.jsx)(p.Z,{labelText:l("summary"),placeholder:l("summary_placeholder"),name:"summary",value:M.summary,type:"text",onChange:B,customStyleContainer:{width:"100%"},errorShow:b.summary}),(0,A.jsx)(p.Z,{labelText:l("discussion"),placeholder:l("discussion_placeholder"),name:"discussion",value:M.discussion,type:"text",onChange:B,customStyleContainer:{width:"100%"},errorShow:b.discussion}),(0,A.jsx)("button",{className:h.Z.start_arrangement_btn,onClick:D,children:l("mark_attendance")})]}),j&&(0,A.jsx)(f.Z,{})]})})},w=t(72426),S=t.n(w),k=t(12143),R=t(47401),H=t(16871),N=t(43504),T=function(e){var n,t,i=e.meeting_detail,o=e.carryParentState,a=e.queryFlow,l=(0,H.UO)();return(0,A.jsx)(A.Fragment,{children:"By_Mentor"===a?(0,A.jsx)(R.Z,{carryParentState:(0,u.Z)((0,u.Z)({},o),{},{meid:null===i||void 0===i?void 0:i._id}),activeTab:"meeting-detail",children:(0,A.jsxs)("div",{className:k.Z.mentor_card_container,style:{marginBottom:"0.7rem"},children:[(0,A.jsx)("img",{src:"/images/member_tab/student/student-query-icon.svg",style:{borderRadius:"50%"},alt:"mentor avatar"}),(0,A.jsxs)("div",{className:k.Z.mentor_container_inner,style:{gap:"0.6rem"},children:[(0,A.jsx)("h6",{children:null!==(n=null===i||void 0===i?void 0:i.agenda)&&void 0!==n?n:""}),(0,A.jsxs)("p",{children:[S()(null===i||void 0===i?void 0:i.created_at).format("DD MMM yyyy"),",",S()(null===i||void 0===i?void 0:i.created_at).format("LT")]})]})]})}):(0,A.jsx)(N.rU,{to:"/q/".concat(l.username,"/member/student/class?a=mentor&n=meeting-detail"),state:(0,u.Z)((0,u.Z)({},o),{},{meid:null===i||void 0===i?void 0:i._id}),activeTab:"mentor&n=queries&query",children:(0,A.jsxs)("div",{className:k.Z.mentor_card_container,style:{marginBottom:"0.7rem"},children:[(0,A.jsx)("img",{src:"/images/member_tab/student/student-query-icon.svg",style:{borderRadius:"50%"},alt:"mentor avatar"}),(0,A.jsxs)("div",{className:k.Z.mentor_container_inner,style:{gap:"0.6rem"},children:[(0,A.jsx)("h6",{children:null!==(t=null===i||void 0===i?void 0:i.agenda)&&void 0!==t?t:""}),(0,A.jsxs)("p",{children:[S()(null===i||void 0===i?void 0:i.created_at).format("DD MMM yyyy"),",",S()(null===i||void 0===i?void 0:i.created_at).format("LT")]})]})]})})})},M=function(e){var n=e.mid,t=e.carryParentState,c=e.queryFlow,u=(0,_.$G)().t,m=(0,a.useState)(!1),v=(0,o.Z)(m,2),p=v[0],f=v[1],h=(0,a.useState)(""),g=(0,o.Z)(h,2),x=g[0],b=(g[1],(0,s.YD)({skip:x})),y=(0,o.Z)(b,2),Z=y[0],q=y[1],w=(0,a.useState)(1),S=(0,o.Z)(w,2),k=S[0],R=S[1],H=(0,a.useState)(!0),N=(0,o.Z)(H,2),M=N[0],C=N[1],E=(0,a.useState)(!0),F=(0,o.Z)(E,2),B=F[0],D=F[1],P=(0,a.useState)(!1),I=(0,o.Z)(P,2),L=I[0],U=I[1],G=(0,a.useState)([]),V=(0,o.Z)(G,2),O=V[0],z=V[1],Q=(0,d.J4)({data:{mid:n,limit:10,search:x,page:k},skip:!n}),W=Q.getAllMeetingByMentor,K=Q.getAllMeetingByMentorRefetch;(0,a.useEffect)((function(){n&&(D(!0),K())}),[n,k,x,K]),(0,a.useEffect)((function(){q&&M&&R((function(e){return e+1}))}),[q,M]),(0,a.useEffect)((function(){var e,n;L?(z(null===W||void 0===W?void 0:W.all_meet),D(!1),U(!1)):x?(z(null===W||void 0===W?void 0:W.all_meet),D(!1)):null!==W&&void 0!==W&&W.all_meet?(z((function(e){var n,t;return null===(n=(0,i.Z)(new Set(null===(t=[].concat((0,i.Z)(e),(0,i.Z)(null===W||void 0===W?void 0:W.all_meet)))||void 0===t?void 0:t.map(JSON.stringify))))||void 0===n?void 0:n.map(JSON.parse)})),D(!1)):0===(null===W||void 0===W||null===(n=W.all_meet)||void 0===n?void 0:n.length)&&D(!1);10===(null===W||void 0===W||null===(e=W.all_meet)||void 0===e?void 0:e.length)?C(!0):C(!1)}),[null===W||void 0===W?void 0:W.all_meet]);var Y=function(){f((function(e){return!e}))};return(0,A.jsxs)(A.Fragment,{children:["By_Student"===c?null:(0,A.jsx)("div",{style:{display:"flex",justifyContent:"flex-end",alignItems:"center"},children:(0,A.jsx)("p",{className:l.Z.add_new_category,onClick:Y,children:u("add_new_meeting")})}),null===O||void 0===O?void 0:O.map((function(e,n){return(null===O||void 0===O?void 0:O.length)===n+1?(0,A.jsx)("div",{ref:Z,children:(0,A.jsx)(T,{queryFlow:c,meeting_detail:e,carryParentState:t})},null===e||void 0===e?void 0:e._id):(0,A.jsx)(T,{queryFlow:c,meeting_detail:e,carryParentState:t},null===e||void 0===e?void 0:e._id)})),B&&(0,A.jsx)(r.Z,{}),p&&(0,A.jsx)(j,{onClose:Y,mid:n,onRefetch:function(){R(1),U(!0),D(!0),K()}})]})}},90865:function(e,n,t){var i=t(1413),o=(t(72791),t(89891)),a=t(39320),l=t(80184),_={inputProps:{"aria-label":"Switch demo"}};n.Z=function(e){var n=e.customContainer,t=e.customLabel,r=e.labelDescription,s=e.labelHeading,d=e.defaultLabel,c=e.checkedToggle,u=e.onToggleHandler,m=e.children;return(0,l.jsxs)("div",{className:a.Z.form_toggle_container,style:(0,i.Z)({},n),children:[(0,l.jsxs)("div",{className:a.Z.form_toggle_label,children:[d?(0,l.jsx)(o.Z,(0,i.Z)((0,i.Z)({},_),{},{defaultChecked:!0,disabled:!0})):(0,l.jsx)(o.Z,(0,i.Z)((0,i.Z)({},_),{},{checked:c,onChange:u})),(0,l.jsx)("span",{style:(0,i.Z)({},t),children:s})]}),(0,l.jsx)("div",{className:a.Z.form_toggle_description,children:r}),m]})}},12143:function(e,n){n.Z={mentor_card_container:"Mentor_mentor_card_container__05bPk",mentor_container_inner:"Mentor_mentor_container_inner__kxUWv",student_container_inner:"Mentor_student_container_inner__2fDwu",mentor_rating:"Mentor_mentor_rating__FHWQG",student_inner_bottom:"Mentor_student_inner_bottom__zhsin",student_card_container:"Mentor_student_card_container__+UobV",feedback_question_container:"Mentor_feedback_question_container__YqWeu",feedback_question_heading:"Mentor_feedback_question_heading__FdGSW",feedback_question_option:"Mentor_feedback_question_option__Axxci",option_selected_cover:"Mentor_option_selected_cover__Ygo7Z",remove_btn:"Mentor_remove_btn__Waxwz"}},10406:function(e,n){n.Z={hostel_container:"Hostel_hostel_container__mWxpf",moderator_container_title:"Hostel_moderator_container_title__DHglE",with_search:"Hostel_with_search__f5WON",search_container:"Hostel_search_container__uShHd",search_container_input:"Hostel_search_container_input__zwGLQ",searchIcon:"Hostel_searchIcon__x1CGz",search_container_filter:"Hostel_search_container_filter__HHOHi",add_new_category:"Hostel_add_new_category__4wi4R",rules_card:"Hostel_rules_card__CQp2X",rules_card_title:"Hostel_rules_card_title__dF+vA",download_attachment:"Hostel_download_attachment__Si3Or",menu_icon:"Hostel_menu_icon__lcZzz",unit_room_container:"Hostel_unit_room_container__7UtbF",unit_room_card_container:"Hostel_unit_room_card_container__Kp0n3",unit_room_card_lines:"Hostel_unit_room_card_lines__0fMZq",unit_room_container_box:"Hostel_unit_room_container_box__ZyOBC",unit_room_container_box_inner:"Hostel_unit_room_container_box_inner__xV4l4",hostelite_container:"Hostel_hostelite_container__s+iLw",hostelite_container_inner:"Hostel_hostelite_container_inner__55Vvd",hostelite_container_inner_text:"Hostel_hostelite_container_inner_text__rVUi9",announcement_card:"Hostel_announcement_card__B6Mf3",upload_excel_file:"Hostel_upload_excel_file__rm6Kk",student_renewal_card:"Hostel_student_renewal_card__4GLAW",student_renewal_date:"Hostel_student_renewal_date__jkFEO",student_renewal_btn_group:"Hostel_student_renewal_btn_group__bEhWE",student_renewal_cancel_btn:"Hostel_student_renewal_cancel_btn__FweAs",student_renewal_confirm_btn:"Hostel_student_renewal_confirm_btn__SrCfT",take_admission:"Hostel_take_admission__bLvfX",vehical_card_container:"Hostel_vehical_card_container__9+Xlp",vehical_card_text:"Hostel_vehical_card_text__L81rs",vehicle_list:"Hostel_vehicle_list__7KSVv",transpotation_container:"Hostel_transpotation_container__0ZRwk",transpotation_head:"Hostel_transpotation_head__bpQL4",transpotation_card:"Hostel_transpotation_card__awZ3a",transpotation_card_detail:"Hostel_transpotation_card_detail__SR+h7",transpotation_card_detail_text:"Hostel_transpotation_card_detail_text__V+znO",joining_date:"Hostel_joining_date__KU7m1",transpotation_card_detail_other:"Hostel_transpotation_card_detail_other__qQyz8",transpotation_card_detail_other_inner:"Hostel_transpotation_card_detail_other_inner__tkjuA",add_plus_icon:"Hostel_add_plus_icon__3Goaz",hostel_batch_container:"Hostel_hostel_batch_container__+B8sL",hostel_batch_container_hover:"Hostel_hostel_batch_container_hover__2rElc",hostel_batch_container_text:"Hostel_hostel_batch_container_text__w3JHe",hostel_batch_image:"Hostel_hostel_batch_image__fpTGv",hostel_batch_menu:"Hostel_hostel_batch_menu__xSgqR",add_container:"Hostel_add_container__KgZLe",mentor_status_card_paragraph:"Hostel_mentor_status_card_paragraph__b+ePZ",mentor_attendance_container:"Hostel_mentor_attendance_container__KAxwN",mentor_attendance_btn:"Hostel_mentor_attendance_btn__yX+++",mentor_attendance_btn_active:"Hostel_mentor_attendance_btn_active__JUY7m",selectBtn:"Hostel_selectBtn__w2fQe",passenger_fees_button:"Hostel_passenger_fees_button__VaNk-",linked_institute_btn:"Hostel_linked_institute_btn__p8os7"}},15961:function(e,n){n.Z={admission_application_container:"AdmissionApplicationRequest_admission_application_container__iMsyZ",moderator_container_title:"AdmissionApplicationRequest_moderator_container_title__5WiPB",with_search:"AdmissionApplicationRequest_with_search__mm0Q+",search_container:"AdmissionApplicationRequest_search_container__3swMB",search_container_input:"AdmissionApplicationRequest_search_container_input__InEPj",searchIcon:"AdmissionApplicationRequest_searchIcon__RdABM",search_container_filter:"AdmissionApplicationRequest_search_container_filter__fEHEF",remainingFees:"AdmissionApplicationRequest_remainingFees__X9g5z",ongoing_card:"AdmissionApplicationRequest_ongoing_card__1TVLc",ongoing_card_inner:"AdmissionApplicationRequest_ongoing_card_inner__1Gato",ongoing_card_text:"AdmissionApplicationRequest_ongoing_card_text__AKxnS",menu_icon:"AdmissionApplicationRequest_menu_icon__F3nQo",add_new_category:"AdmissionApplicationRequest_add_new_category__ZTInw",applicant_card_container:"AdmissionApplicationRequest_applicant_card_container__7UN2C",applicant_card_container_hover:"AdmissionApplicationRequest_applicant_card_container_hover__mP-Wa",applicant_card_container_active:"AdmissionApplicationRequest_applicant_card_container_active__5VW5x",applicant_card_inner:"AdmissionApplicationRequest_applicant_card_inner__kSbmI",applicant_card_inner_info:"AdmissionApplicationRequest_applicant_card_inner_info__8POe8",applicant_card_contact:"AdmissionApplicationRequest_applicant_card_contact__Ipapl",applicant_card_contact_inner:"AdmissionApplicationRequest_applicant_card_contact_inner__dDeFH",application_button:"AdmissionApplicationRequest_application_button__a2s6z",selectAppBtnContainer:"AdmissionApplicationRequest_selectAppBtnContainer__d0wD6",selectBtnContainer:"AdmissionApplicationRequest_selectBtnContainer__Si3QU",selectBtn:"AdmissionApplicationRequest_selectBtn__A0SVG",cancelledBtn:"AdmissionApplicationRequest_cancelledBtn__wEX7V",notConfirmedBtn:"AdmissionApplicationRequest_notConfirmedBtn__wZb02",onlineBtn:"AdmissionApplicationRequest_onlineBtn__v+gwq",cancelStatus:"AdmissionApplicationRequest_cancelStatus__qYDFg",checkbox:"AdmissionApplicationRequest_checkbox__tlbdN",back_icon:"AdmissionApplicationRequest_back_icon__gIdbd",receipt_requested_btn:"AdmissionApplicationRequest_receipt_requested_btn__stgcE",not_confirm_container:"AdmissionApplicationRequest_not_confirm_container__+r4pJ",applicant_profile:"AdmissionApplicationRequest_applicant_profile__kHoFd",applicant_profile_text:"AdmissionApplicationRequest_applicant_profile_text__wgySz",button_group:"AdmissionApplicationRequest_button_group__LKrUN",admission_collect_docs:"AdmissionApplicationRequest_admission_collect_docs__+-jUT",confirm_btn:"AdmissionApplicationRequest_confirm_btn__njvM8",admission_modal:"AdmissionApplicationRequest_admission_modal__a3Dx6",admission_modal_heading:"AdmissionApplicationRequest_admission_modal_heading__7i6gM",admission_fees_row:"AdmissionApplicationRequest_admission_fees_row__Ykj39",admission_confirm_class_card:"AdmissionApplicationRequest_admission_confirm_class_card__Ytr77",admission_confirm_batch_card:"AdmissionApplicationRequest_admission_confirm_batch_card__Cuven",admission_confirm_class_count:"AdmissionApplicationRequest_admission_confirm_class_count__P-bt1",admission_class_confirm:"AdmissionApplicationRequest_admission_class_confirm__SMLDh",mulitple_select_btn:"AdmissionApplicationRequest_mulitple_select_btn__WOWDd",end_btn:"AdmissionApplicationRequest_end_btn__vgxwG",admission_mulit_select:"AdmissionApplicationRequest_admission_mulit_select__ggFWa",admission_mulit_select_right:"AdmissionApplicationRequest_admission_mulit_select_right__K51Rw",os_reminder:"AdmissionApplicationRequest_os_reminder__AHp8F",os_filter_container:"AdmissionApplicationRequest_os_filter_container__Ck0gz",ongoing_card_count_date:"AdmissionApplicationRequest_ongoing_card_count_date__xi1+1",ongoing_card_count_container:"AdmissionApplicationRequest_ongoing_card_count_container__af9uG",applicant_card_reciept:"AdmissionApplicationRequest_applicant_card_reciept__QR+Ho",transfer_container:"AdmissionApplicationRequest_transfer_container__y5X5q",transfer_select_btn:"AdmissionApplicationRequest_transfer_select_btn__u8NkN"}},39320:function(e,n){n.Z={staff_form_container:"UniversalForm_staff_form_container__QRs6I",staff_form_header_container:"UniversalForm_staff_form_header_container__+cQn3",form_header_container:"UniversalForm_form_header_container__GVVNM",form_header_list:"UniversalForm_form_header_list__fHs8S",form_header_code:"UniversalForm_form_header_code__LsmbM",form_toggle_description:"UniversalForm_form_toggle_description__281dv",form_toggle_label:"UniversalForm_form_toggle_label__mbisD",form_header_content:"UniversalForm_form_header_content__Y3p2k",form_toggle_container:"UniversalForm_form_toggle_container__D0bu0",form_checkbox_container:"UniversalForm_form_checkbox_container__bxzuK",staff_form_header_container_actions:"UniversalForm_staff_form_header_container_actions__2Ynt9",staff_header_text:"UniversalForm_staff_header_text__dQvPP"}}}]);
//# sourceMappingURL=794.1f258f20.chunk.js.map