"use strict";(self.webpackChunkmithkal_qviple=self.webpackChunkmithkal_qviple||[]).push([[1663],{63687:function(e,l,s){var n=s(59393),t=s(80184);l.Z=function(e){var l=e.customStyle,s=e.children;return(0,t.jsx)("div",{className:n.Z.user_member_container_wrapper,style:l,children:s})}},85303:function(e,l,s){s.r(l),s.d(l,{default:function(){return H}});var n=s(29439),t=s(63687),i=s(21348),a=s(72791),d=s(39230),c=s(23441),r=s(56959),o=s(90904),u=s(98684),v=s(57588),h=s(91427),_=s(6758),m="FinanceAllStudent_student_table__Y3uXE",x="FinanceAllStudent_student_table_header__4fuiU",f="FinanceAllStudent_student_table_header_label__4x6eY",j="FinanceAllStudent_student_table_content_card__3KWaE",g="FinanceAllStudent_student_table_profile__QUIFN",p="FinanceAllStudent_student_table_header_name__x4ZNJ",N="FinanceAllStudent_student_table_header_label_text__lny-H",A="FinanceAllStudent_student_table_contact__f4eB5",Z="FinanceAllStudent_student_table_contact_email__dV19L",b="FinanceAllStudent_student_table_contact_number__r7HNK",y=s(80184),F=function(e){var l=e.studentAlias,s=(0,d.$G)().t;return(0,y.jsx)("div",{className:m,children:(0,y.jsxs)("div",{className:x,children:[(0,y.jsx)("p",{className:f,style:{flex:"1"},children:null!==l&&void 0!==l?l:s("gr_no")}),(0,y.jsx)("p",{className:f,style:{flex:"3"},children:s("name")}),(0,y.jsx)("p",{className:f,style:{flex:"2"},children:s("contact_number")}),(0,y.jsx)("p",{className:f,style:{flex:"1"},children:s("applicable_outs")}),(0,y.jsx)("p",{className:f,style:{flex:"0.7"},children:s("govt_oustanding")})]})})},I=s(1413),S=s(1095),k=s(16871),z=s(43504),w=function(e){var l,s,n,t,i,a,d,c,r,v=e.student,h=e.messageId,_=e.headId,m=e.instituteId,x=e.invalidateAccess,F=e.cancelledAuthorized,w=e.otherFlow,O=e.accessAs,B=(0,k.UO)(),G=(0,k.TH)();return(0,y.jsx)(y.Fragment,{children:(0,y.jsxs)(z.rU,{to:"/q/".concat(B.username,"/member/student/admission/profile"),state:(0,I.Z)((0,I.Z)({},G.state),{},{sid:null===v||void 0===v?void 0:v._id,messageId:h,headId:_,instituteId:m,collectAccess:C[x]?"ADMISSION_ADMIN":"OTHER",govtAccess:E[x]?"Finance_scholarship":"Other",cancelAccess:P[F],otherFlow:w,scholarNumberEdit:O}),children:[(0,y.jsxs)("div",{className:j,style:{cursor:"pointer"},children:[(0,y.jsx)("p",{className:f,style:{flex:"1"},children:null!==(l=null===v||void 0===v?void 0:v.studentGRNO)&&void 0!==l?l:""}),(0,y.jsxs)("div",{className:g,style:{flex:"3"},children:[(0,y.jsx)("img",{src:null!==v&&void 0!==v&&v.studentProfilePhoto?"".concat(S.yI,"/").concat(null===v||void 0===v?void 0:v.studentProfilePhoto):"".concat(u.p3,"/feed-user-avatar.svg"),loading:"lazy",alt:"avatar"}),(0,y.jsxs)("div",{children:[(0,y.jsxs)("p",{className:p,children:["".concat(null!==(s=null===v||void 0===v?void 0:v.studentFirstName)&&void 0!==s?s:""," ").concat(null!==(n=null===v||void 0===v?void 0:v.studentMiddleName)&&void 0!==n?n:""," ").concat(null!==(t=null===v||void 0===v?void 0:v.studentLastName)&&void 0!==t?t:""),"100"===(null===v||void 0===v?void 0:v.profile_percentage)||100===(null===v||void 0===v?void 0:v.profile_percentage)?(0,y.jsx)("img",{src:"".concat(u.Fk,"/complete.svg"),loading:"lazy",alt:"avatar",style:{marginLeft:"0.6rem",height:"1rem"}}):null]}),(0,y.jsx)("p",{className:N,children:null!==(i=null===v||void 0===v||null===(a=v.studentClass)||void 0===a?void 0:a.classTitle)&&void 0!==i?i:""})]})]}),(0,y.jsxs)("div",{className:f,style:{flex:"2"},children:[(0,y.jsxs)("div",{className:A,children:[(0,y.jsx)("img",{src:"".concat(u.Fk,"/gender.svg"),alt:"gender icon"}),(0,y.jsx)("p",{className:Z,children:null===v||void 0===v?void 0:v.studentGender})]}),(0,y.jsxs)("div",{className:A,style:{marginTop:"0.4rem"},children:[(0,y.jsx)("img",{src:"".concat(u.Fk,"/phone.svg"),alt:"phone icon"}),(0,y.jsx)("p",{className:b,children:null!==v&&void 0!==v&&v.user.userPhoneNumber?null===v||void 0===v?void 0:v.user.userPhoneNumber:null!==(d=null===v||void 0===v?void 0:v.user.userEmail)&&void 0!==d?d:""})]})]}),(0,y.jsx)("p",{className:f,style:{flex:"1",textAlign:"right"},children:null!==(c=null===v||void 0===v?void 0:v.applicable_fees_pending)&&void 0!==c?c:0}),(0,y.jsx)("p",{className:f,style:{flex:"0.7",textAlign:"right"},children:null!==(r=null===v||void 0===v?void 0:v.government_fees_pending)&&void 0!==r?r:0})]}),(0,y.jsx)(o.Z,{customStyleBorder:{margin:"0"}})]})})},C={unAuthorized:!0},E={govt:!0},P={authorized:!0},O=s(55336),B=s(1669),G=s(2651),H=function(e){var l,s,m,x,f,j=e.instituteId,g=e.studentAlias,p=e.headId,N=e.messageId,A=e.accessAs,Z=e.invalidateAccess,b=e.cancelledAuthorized,I=e.otherFlow,S=(0,d.$G)().t,k=(0,a.useState)(""),z=(0,n.Z)(k,2),C=z[0],E=z[1],P=(0,a.useState)(1),H=(0,n.Z)(P,2),T=H[0],U=H[1],q=(0,a.useState)(!0),D=(0,n.Z)(q,2),M=D[0],Y=D[1],J=(0,c.YD)({skip:C}),K=(0,n.Z)(J,2),R=K[0],W=K[1],$=(0,_.Cp)({data:{id:j,page:T,limit:10,search:C},skip:!j}),Q=$.instituteAllStudent,V=$.instituteAllStudentLoading;(0,a.useEffect)((function(){W&&M&&U((function(e){return e+1}))}),[W,M]),(0,a.useEffect)((function(){if(null!==Q&&void 0!==Q&&Q.list){var e,l=(0,h.f)(null===Q||void 0===Q||null===(e=Q.list)||void 0===e?void 0:e.length);Y((function(){return l}))}}),[null===Q||void 0===Q?void 0:Q.list]);var X=(0,a.useCallback)((0,v.J)((function(e){U((function(){return 1})),E(e)}),1500),[]),ee=function(e){e.target.value?V||X(e.target.value):(U((function(){return 1})),E(""))};return(0,y.jsx)(y.Fragment,{children:(0,y.jsxs)(t.Z,{customStyle:{border:L[Z]?"none":"0.5px solid #cacaca"},children:[L[Z]?(0,y.jsx)(i.Z,{children:(0,y.jsx)("div",{className:r.Z.fm_search_full,children:(0,y.jsx)("section",{className:r.Z.fm_search_full_container,children:(0,y.jsxs)("div",{className:r.Z.fm_search_full_container_inner,children:[(0,y.jsx)("img",{className:r.Z.fm_search_full_icon,alt:"search icon",src:"".concat(u.dB,"/navbar-search.svg")}),(0,y.jsx)("input",{type:"text",placeholder:S("search"),onChange:ee,disabled:!(C||(null===Q||void 0===Q||null===(l=Q.list)||void 0===l?void 0:l.length)>0)})]})})})}):(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(i.Z,{children:(0,y.jsxs)("div",{className:r.Z.fm_header_container,children:[(0,y.jsx)("h6",{children:S("all_students")}),(0,y.jsx)("div",{className:r.Z.fm_both_filter,children:(0,y.jsx)("div",{className:r.Z.fm_search,children:(0,y.jsx)("section",{className:r.Z.fm_search_container,children:(0,y.jsxs)("div",{className:r.Z.fm_search_container_inner,children:[(0,y.jsx)("img",{className:r.Z.fm_search_icon,alt:"search icon",src:"".concat(u.dB,"/navbar-search.svg")}),(0,y.jsx)("input",{type:"text",placeholder:S("search"),onChange:ee,style:{minWidth:"300px"},disabled:!(C||(null===Q||void 0===Q||null===(s=Q.list)||void 0===s?void 0:s.length)>0)})]})})})})]})}),(0,y.jsx)(o.Z,{})]}),(0,y.jsx)(i.Z,{children:(0,y.jsx)(F,{studentAlias:g})}),(0,y.jsx)(o.Z,{}),(0,y.jsxs)(i.Z,{children:[null===Q||void 0===Q||null===(m=Q.list)||void 0===m?void 0:m.map((function(e,l){var s;return(null===Q||void 0===Q||null===(s=Q.list)||void 0===s?void 0:s.length)===l+1?(0,y.jsx)("div",{ref:R,children:(0,y.jsx)(w,{student:e,instituteId:j,messageId:N,headId:p,invalidateAccess:Z,cancelledAuthorized:b,otherFlow:I,accessAs:A})},null===e||void 0===e?void 0:e._id):(0,y.jsx)(w,{student:e,instituteId:j,messageId:N,headId:p,invalidateAccess:Z,cancelledAuthorized:b,otherFlow:I,accessAs:A},null===e||void 0===e?void 0:e._id)})),V?C?(0,y.jsx)(O.Z,{}):(0,y.jsx)(B.Z,{}):C?0===(null===Q||void 0===Q||null===(x=Q.list)||void 0===x?void 0:x.length)&&(0,y.jsx)(G.Z,{title:"No student found related this search."}):0===(null===Q||void 0===Q||null===(f=Q.list)||void 0===f?void 0:f.length)&&(0,y.jsx)(G.Z,{title:"No students added in institute."})]})]})})},L={unAuthorized:!0,govt:!0}}}]);
//# sourceMappingURL=1663.22b7a240.chunk.js.map