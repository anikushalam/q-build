"use strict";(self.webpackChunkmithkal_qviple=self.webpackChunkmithkal_qviple||[]).push([[86801],{21625:(e,t,i)=>{i.d(t,{Dr:()=>c,Dv:()=>v,FL:()=>o,J9:()=>p,KB:()=>x,Ne:()=>u,OF:()=>r,Pv:()=>a,b5:()=>h,bB:()=>m,d4:()=>l,gS:()=>d,rY:()=>_,vM:()=>g,xk:()=>s});var n=i(63950);const o=()=>{const[e]=(0,n.rk)();return[e]},s=()=>{const[e]=(0,n.Zz)();return[e]},a=()=>{const[e]=(0,n.Sm)();return[e]},l=()=>{const[e]=(0,n.G1)();return[e]},r=()=>{const[e]=(0,n.lI)();return[e]},c=()=>{const[e]=(0,n.CT)();return[e]},d=()=>{const[e]=(0,n.b)();return[e]},u=()=>{const[e]=(0,n.x0)();return[e]},h=()=>{const[e]=(0,n.kA)();return[e]},m=()=>{const[e]=(0,n.rz)();return[e]},p=()=>{const[e]=(0,n.Pi)();return[e]},v=()=>{const[e]=(0,n.qz)();return[e]},_=()=>{const[e]=(0,n._C)();return[e]},x=()=>{const[e]=(0,n.qG)();return[e]},g=e=>{const{data:t,refetch:i,isLoading:o}=(0,n.tz)(null===e||void 0===e?void 0:e.phoneKey,{skip:e.skip});return{authGetAccountWithMobileNumber:t,authGetAccountWithMobileNumberRefetch:i,authGetAccountWithMobileNumberLoading:o}}},63950:(e,t,i)=>{i.d(t,{qG:()=>T,tz:()=>z,qz:()=>E,_C:()=>O,rz:()=>G,Pi:()=>P,Zz:()=>U,YY:()=>D,x0:()=>M,kA:()=>I,lI:()=>k,CT:()=>w,Sm:()=>q,G1:()=>S,b:()=>F,rk:()=>C});var n=i(28328),o=i(94811);const s=e=>e.mutation({query:e=>({url:"/all-images/onefile/web",method:o.Q0,body:e.fileUpload})}),a=e=>e.query({query:e=>"/auth/username/search?u_name=".concat(e)}),l=e=>e.query({query:e=>"/auth/email/check/redundant?email=".concat(e)}),r=e=>e.mutation({query:e=>({url:"/auth/login",method:o.a4,body:e.login})}),c=e=>e.mutation({query:e=>({url:"/auth/user-detail",method:o.a4,body:e})}),d=e=>e.mutation({query:e=>{var t;return{url:"/auth/user-detail-verify/".concat(e.userPhoneNumber,"?u_name=").concat(null!==(t=null===e||void 0===e?void 0:e.u_name)&&void 0!==t?t:""),method:o.a4,body:e}}}),u=e=>e.mutation({query:e=>({url:"/auth/user/forgot",method:o.a4,body:e.forgot})}),h=e=>e.mutation({query:e=>({url:"/auth/user/forgot/".concat(e.uid),method:o.a4,body:e.otp})}),m=e=>e.mutation({query:e=>({url:"/auth/user/reset/password/".concat(e.uid),method:o.a4,body:e.password})}),p=(e,t)=>e.mutation({query:e=>({url:"/auth/profile-creation/".concat(e.userPhoneNumber),method:o.a4,body:e.profileCreation})}),v=(e,t)=>e.mutation({query:e=>({url:"/auth/create-user-password/".concat(e.uid),method:o.a4,body:e.password})}),_=(e,t)=>e.mutation({query:e=>({url:"/auth/ins-detail",method:o.a4,body:e.phone})}),x=(e,t)=>e.mutation({query:e=>({url:"/auth/ins-detail-verify/".concat(e.insPhoneNumber),method:o.a4,body:e.verify})}),g=(e,t)=>e.mutation({query:e=>({url:"/auth/ins/register",method:o.a4,body:e.profileCreation})}),y=(e,t)=>e.mutation({query:e=>({url:"/auth/ins/create-password/".concat(e.id),method:o.a4,body:e.password})}),j=e=>e.mutation({query:e=>({url:"/auth/direct/confirm/join/".concat(e.phoneNumber,"/apply/").concat(e.aid,"?existingUser=").concat(e.uid),method:o.a4,body:e.addStudent})}),f=e=>e.query({query:e=>"/auth/select/account?phoneKey=".concat(e),transformResponse:e=>null===e||void 0===e?void 0:e.all_account,serializeQueryArgs:e=>{let{endpointName:t}=e;return t},forceRefetch(e){let{currentArg:t,previousArg:i}=e;return t!==i}}),b=e=>e.mutation({query:e=>({url:"/admission/".concat(e.uid,"/user/").concat(e.aid,"/apply"),method:"POST",body:e.apply_data})}),A=n.i.injectEndpoints({endpoints:e=>({fileUpload:s(e),authUniqueUsername:a(e),authUniqueEmail:l(e),authLogin:r(e),authUserNumber:c(e),authUserNumberVerify:d(e),authUserForget:u(e),authUserForgetOtp:h(e),authUserSetPassword:m(e),authUserCreateAccount:p(e),authUserCreatePassword:v(e),authInstituteNumber:_(e),authInstituteNumberVerify:x(e),authInstituteCreateAccount:g(e),authInstituteCreatePassword:y(e),authDirectJoinFormAdmissionApplication:j(e),authGetAccountWithMobileNumber:f(e),authUserApplyOneApplication:b(e)})}),{useFileUploadMutation:C,useAuthUniqueUsernameQuery:N,useAuthUniqueEmailQuery:Z,useAuthLoginMutation:U,useAuthUserNumberMutation:q,useAuthUserNumberVerifyMutation:S,useAuthUserForgetMutation:k,useAuthUserForgetOtpMutation:w,useAuthUserSetPasswordMutation:F,useAuthUserCreateAccountMutation:M,useAuthUserCreatePasswordMutation:I,useAuthInstituteNumberMutation:G,useAuthInstituteNumberVerifyMutation:P,useAuthInstituteCreateAccountMutation:E,useAuthInstituteCreatePasswordMutation:O,useAuthDirectJoinFormAdmissionApplicationMutation:T,useAuthGetAccountWithMobileNumberQuery:z,useAuthUserApplyOneApplicationMutation:D}=A},44226:(e,t,i)=>{i.d(t,{Z:()=>l});var n=i(39230),o=i(98684),s=i(80476),a=i(80184);const l=e=>{let{onExcelFileUpload:t,acceptType:i,label:l,dynamicKey:r,title:c,assestUrl:d,customStyle:u,customStyleLabel:h,dummyExcel:m}=e;const{t:p}=(0,n.$G)();return(0,a.jsxs)(a.Fragment,{children:[m?(0,a.jsxs)("label",{className:s.Z.upload_excel_file,style:u,children:[(0,a.jsx)("img",{src:d||"".concat(o.J7,"/upload-xslx.svg"),alt:"add student icon",title:null!==c&&void 0!==c?c:"Upload excel file"}),l&&(0,a.jsx)("h6",{style:h,children:p(l)})]}):(0,a.jsxs)("label",{className:s.Z.upload_excel_file,htmlFor:null!==r&&void 0!==r?r:"uploadExcel",style:u,children:[(0,a.jsx)("img",{src:d||"".concat(o.J7,"/upload-xslx.svg"),alt:"add student icon",title:null!==c&&void 0!==c?c:"Upload excel file"}),l&&(0,a.jsx)("h6",{style:h,children:p(l)})]}),(0,a.jsx)("input",{type:"file",id:null!==r&&void 0!==r?r:"uploadExcel",accept:i,onChange:t,style:{display:"none"}})]})}},86801:(e,t,i)=>{i.r(t),i.d(t,{default:()=>k});var n=i(72791),o=i(1669),s=i(55336),a=i(98684),l=i(63687),r=i(21348),c=i(2651),d=i(56959),u=i(39230),h=i(23441),m=i(91427),p=i(90904),v=i(43317),_=i(91389),x=i(38857),g=i(16925),y=i(26192),j=i(80184);const f=e=>{let{onSelectType:t}=e;const{t:i}=(0,u.$G)(),n=e=>{t(e)};return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsxs)("div",{className:y.Z.application_card,onClick:()=>n("Direct_Admission"),children:[(0,j.jsxs)("div",{className:y.Z.application_card_title,children:[(0,j.jsx)("img",{src:"".concat(a.J7,"/category.svg"),alt:"staff profile avatar"}),(0,j.jsx)("h6",{children:i("direct_admission")})]}),(0,j.jsxs)("section",{className:y.Z.application_card_info,children:[(0,j.jsx)("div",{children:i("only_two_steps")}),(0,j.jsxs)("div",{children:["1. ",i("online_filling_form")]}),(0,j.jsxs)("div",{children:["2. ",i("online_admission_fees_payments")]}),(0,j.jsx)("h6",{children:i("online_note_suitable")})]})]}),(0,j.jsxs)("div",{className:y.Z.application_card,onClick:()=>n("Complete_Step_Wise_Admission"),children:[(0,j.jsxs)("div",{className:y.Z.application_card_title,children:[(0,j.jsx)("img",{src:"".concat(a.J7,"/category.svg"),alt:"staff profile avatar"}),(0,j.jsx)("h6",{children:i("complete_step_wise_admission")})]}),(0,j.jsxs)("section",{className:y.Z.application_card_info,children:[(0,j.jsx)("div",{children:i("steps_involved")}),(0,j.jsxs)("div",{children:["1. ",i("online_filling_form1")]}),(0,j.jsxs)("div",{children:["2. ",i("online_admission_fees_payments1")]}),(0,j.jsxs)("div",{children:["3. ",i("online_admission_fees_payments2")]}),(0,j.jsxs)("div",{children:["4. ",i("online_admission_fees_payments3")]}),(0,j.jsxs)("div",{children:["5. ",i("online_admission_fees_payments4")]}),(0,j.jsx)("h6",{children:i("offile_note_suitable")})]})]})]})};var b=i(38921),A=i(29760);const C=e=>{let{onClose:t,onRefetch:i,aid:o,fid:s,instituteId:l}=e;const{t:c}=(0,u.$G)(),[d,h]=(0,n.useState)("");return(0,j.jsx)(j.Fragment,{children:d?"Complete_Step_Wise_Admission"===d?(0,j.jsx)(b.Z,{onClose:()=>h(""),aid:o,onRefetch:i,instituteId:l,fid:s,onParentClose:t}):"Direct_Admission"===d?(0,j.jsx)(A.Z,{onClose:()=>h(""),aid:o,onRefetch:i,instituteId:l,fid:s,onParentClose:t}):null:(0,j.jsx)(x.Z,{children:(0,j.jsxs)("div",{className:g.Z.modal_container,children:[(0,j.jsx)(r.Z,{children:(0,j.jsxs)("div",{className:g.Z.modal_container_outer_header,children:[(0,j.jsx)("div",{className:g.Z.modal_container_header,children:(0,j.jsx)("h6",{children:c("select_admission_application_type")})}),(0,j.jsx)("img",{src:"".concat(a.J7,"/close.svg"),alt:"close icon",onClick:t})]})}),(0,j.jsx)(p.Z,{}),(0,j.jsx)(r.Z,{customStyle:{paddingTop:"0",marginBottom:"1rem"},children:(0,j.jsx)(f,{onSelectType:e=>{h(e)}})})]})})})};var N=i(16871),Z=i(93638),U=i(44226),q=i(21625);const S=e=>{var t,i,n,o,s,l,r,c,d,h,m,p,_,x;let{aid:g}=e;const{t:f}=(0,u.$G)(),{admissionMergedApplicationTotalCount:b}=(0,v.r_)({data:{aid:g},skip:!g});return(0,j.jsx)(j.Fragment,{children:(0,j.jsxs)("div",{className:y.Z.ongoing_card,style:{position:"relative",boxShadow:"0 4px 4px 1px rgba(0, 0, 0, 0.4)"},children:[(0,j.jsxs)("div",{className:y.Z.ongoing_card_inner,children:[(0,j.jsx)("img",{alt:"Ongoing App",src:"".concat(a.U_,"/application.svg")}),(0,j.jsx)("div",{className:y.Z.ongoing_card_text,children:(0,j.jsx)("h6",{children:f("total")})})]}),(0,j.jsx)("div",{className:y.Z.ongoing_card_count_date,children:(0,j.jsxs)("div",{className:y.Z.ongoing_card_count_container,children:[(0,j.jsx)("h6",{title:"Application",children:null!==(t=null===b||void 0===b||null===(i=b.custom_obj)||void 0===i?void 0:i.receievedCount)&&void 0!==t?t:0}),(0,j.jsx)("h6",{title:"Docs Collect",children:null!==(n=null===b||void 0===b||null===(o=b.custom_obj)||void 0===o?void 0:o.selectCount)&&void 0!==n?n:0}),(0,j.jsx)("h6",{title:"Fees Collection",children:null!==(s=null===b||void 0===b||null===(l=b.custom_obj)||void 0===l?void 0:l.fee_collect_count)&&void 0!==s?s:0}),(0,j.jsx)("h6",{title:"Confirmed",children:null!==(r=null===b||void 0===b||null===(c=b.custom_obj)||void 0===c?void 0:c.confirmCount)&&void 0!==r?r:0}),(0,j.jsx)("h6",{title:"Review",children:null!==(d=null===b||void 0===b||null===(h=b.custom_obj)||void 0===h?void 0:h.review_count)&&void 0!==d?d:0}),(0,j.jsx)("h6",{title:"Allottment",children:null!==(m=null===b||void 0===b||null===(p=b.custom_obj)||void 0===p?void 0:p.allotCount)&&void 0!==m?m:0}),(0,j.jsx)("h6",{title:"Cancelled",children:null!==(_=null===b||void 0===b||null===(x=b.custom_obj)||void 0===x?void 0:x.cancelCount)&&void 0!==_?_:0})]})})]})})},k=e=>{var t,i,x,g,y,f,b,A;let{aid:k,instituteId:w,fid:F}=e;const{t:M}=(0,u.$G)(),I=(0,N.TH)(),G=(0,N.UO)(),P=(0,N.s0)(),[E,O]=(0,n.useState)(""),[T,z]=(0,n.useState)(""),[D,R]=(0,n.useState)(1),[W,J]=(0,n.useState)(!0),[K,L]=(0,h.YD)({skip:E}),[B,Q]=(0,n.useState)(!1),[V]=(0,q.FL)(),[$,Y]=(0,n.useState)(!1),[H]=(0,v.q7)(),{admissionOngoingApplication:X,admissionOngoingApplicationLoading:ee,admissionOngoingApplicationRefetch:te}=(0,v.s5)({data:{aid:k,page:D,limit:1e3,search:E},skip:!k});(0,n.useEffect)((()=>{L&&W&&R((e=>e+1))}),[L,W]),(0,n.useEffect)((()=>{var e;if(null!==X&&void 0!==X&&null!==(e=X.list)&&void 0!==e&&e.length){var t;let e=(0,m.f)(null===X||void 0===X||null===(t=X.list)||void 0===t?void 0:t.length);J((()=>e))}}),[null===X||void 0===X||null===(t=X.list)||void 0===t?void 0:t.length]);const ie=()=>{Q((e=>!e))},ne=()=>{R((()=>1)),O(""),te()},oe=(0,n.useCallback)((()=>{var e;let t="Institute"===(null===(e=I.state)||void 0===e?void 0:e.urlOffSet)?"/q/".concat(G.username,"/institute/member/admission"):"/q/".concat(G.username,"/member/staff/admission");P(t,{state:I.state})}),[P,I.state,G.username]);return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsxs)(l.Z,{children:[(0,j.jsx)(r.Z,{children:(0,j.jsxs)("div",{className:d.Z.fm_header_container,children:[(0,j.jsxs)("div",{className:d.Z.fm_header_start_container,style:{gap:"0.5rem"},children:[(0,j.jsx)("img",{alt:"search icon",src:"".concat(a.Fk,"/back.svg"),style:{height:"2rem",width:"2rem"},onClick:oe}),(0,j.jsx)("h6",{children:M("ongoing_applications")})]}),(0,j.jsxs)("div",{className:d.Z.fm_search,children:[(0,j.jsx)("section",{className:d.Z.fm_search_container,children:(0,j.jsxs)("div",{className:d.Z.fm_search_container_inner,children:[(0,j.jsx)("img",{className:d.Z.fm_search_icon,alt:"search icon",src:"".concat(a.dB,"/navbar-search.svg")}),(0,j.jsx)("input",{type:"text",placeholder:M("search"),onChange:e=>{var t;!ee&&(null===X||void 0===X||null===(t=X.list)||void 0===t?void 0:t.length)>=0&&(e.target.value?z(e.target.value):(z(""),O("")))},style:{minWidth:"220px"},onKeyUp:e=>{"Enter"===e.key&&(R((()=>1)),O(T))},value:T})]})}),"ONGOING_VIEW_ACCESS"===(null===(i=I.state)||void 0===i?void 0:i.role)?null:(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(U.Z,{onExcelFileUpload:e=>{var t,i;if(null!==(t=e.target)&&void 0!==t&&null!==(i=t.files)&&void 0!==i&&i.length&&k){Y((e=>!e));const t=new FormData;t.append("file",e.target.files[0]),V({fileUpload:t}).then((e=>{var t,i;null!==(t=e.data)&&void 0!==t&&t.imageKey?H({aid:k,bodyParameter:{excel_file:null===(i=e.data)||void 0===i?void 0:i.imageKey}}).then((()=>{Y((e=>!e))})).catch({}):Y((e=>!e))})).catch({})}},dynamicKey:"direct_application",title:"Direct Application Excel",label:"Direct Application Excel"}),(0,j.jsx)(Z.Z,{label:"create_new_application",customStyle:{paddingBlock:"0.4rem",margin:"0"},onAction:ie})]})]})]})}),(0,j.jsx)(p.Z,{}),(0,j.jsxs)(r.Z,{customStyle:{paddingTop:"0.2rem",position:"relative"},children:[(0,j.jsx)(S,{aid:k}),(null===(x=I.state)||void 0===x||null===(g=x.authorizedApplication)||void 0===g?void 0:g.length)>0?null===X||void 0===X||null===(y=X.list)||void 0===y?void 0:y.map((e=>{var t,i;return null!==(t=I.state)&&void 0!==t&&null!==(i=t.authorizedApplication)&&void 0!==i&&i.includes(null===e||void 0===e?void 0:e._id)?(0,j.jsx)(_.Z,{application:e,aid:k,instituteId:w,onRefetch:ne},null===e||void 0===e?void 0:e._id):null})):null===X||void 0===X||null===(f=X.list)||void 0===f?void 0:f.map((e=>(0,j.jsx)(_.Z,{application:e,aid:k,instituteId:w,onRefetch:ne},null===e||void 0===e?void 0:e._id))),ee?E?(0,j.jsx)(s.Z,{}):(0,j.jsx)(o.Z,{}):E?0===(null===X||void 0===X||null===(b=X.list)||void 0===b?void 0:b.length)&&(0,j.jsx)(c.Z,{customStyleContainer:{marginTop:"1.5rem"},title:"No ongoing application found related this search."}):0===(null===X||void 0===X||null===(A=X.list)||void 0===A?void 0:A.length)&&(0,j.jsx)(c.Z,{customStyleContainer:{marginTop:"1.5rem"},title:"No application created."})]})]}),B&&(0,j.jsx)(C,{onClose:ie,onRefetch:ne,aid:k,instituteId:w,fid:F}),$&&(0,j.jsx)(s.Z,{})]})}}}]);
//# sourceMappingURL=86801.e71efd54.chunk.js.map