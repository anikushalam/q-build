"use strict";(self.webpackChunkmithkal_qviple=self.webpackChunkmithkal_qviple||[]).push([[19540],{21625:(e,t,i)=>{i.d(t,{Dr:()=>c,Dv:()=>v,FL:()=>o,J9:()=>p,KB:()=>x,Ne:()=>u,OF:()=>r,Pv:()=>l,b5:()=>h,bB:()=>m,d4:()=>a,gS:()=>d,rY:()=>_,vM:()=>g,xk:()=>s});var n=i(63950);const o=()=>{const[e]=(0,n.rk)();return[e]},s=()=>{const[e]=(0,n.Zz)();return[e]},l=()=>{const[e]=(0,n.Sm)();return[e]},a=()=>{const[e]=(0,n.G1)();return[e]},r=()=>{const[e]=(0,n.lI)();return[e]},c=()=>{const[e]=(0,n.CT)();return[e]},d=()=>{const[e]=(0,n.b)();return[e]},u=()=>{const[e]=(0,n.x0)();return[e]},h=()=>{const[e]=(0,n.kA)();return[e]},m=()=>{const[e]=(0,n.rz)();return[e]},p=()=>{const[e]=(0,n.Pi)();return[e]},v=()=>{const[e]=(0,n.qz)();return[e]},_=()=>{const[e]=(0,n._C)();return[e]},x=()=>{const[e]=(0,n.qG)();return[e]},g=e=>{const{data:t,refetch:i,isLoading:o}=(0,n.tz)(null===e||void 0===e?void 0:e.phoneKey,{skip:e.skip});return{authGetAccountWithMobileNumber:t,authGetAccountWithMobileNumberRefetch:i,authGetAccountWithMobileNumberLoading:o}}},63950:(e,t,i)=>{i.d(t,{qG:()=>T,tz:()=>D,qz:()=>G,_C:()=>R,rz:()=>O,Pi:()=>P,Zz:()=>q,YY:()=>E,x0:()=>M,kA:()=>I,lI:()=>w,CT:()=>S,Sm:()=>U,G1:()=>k,b:()=>F,rk:()=>C});var n=i(28328),o=i(94811);const s=e=>e.mutation({query:e=>({url:"/all-images/onefile/web",method:o.Q0,body:e.fileUpload})}),l=e=>e.query({query:e=>"/auth/username/search?u_name=".concat(e)}),a=e=>e.query({query:e=>"/auth/email/check/redundant?email=".concat(e)}),r=e=>e.mutation({query:e=>({url:"/auth/login",method:o.a4,body:e.login})}),c=e=>e.mutation({query:e=>({url:"/auth/user-detail",method:o.a4,body:e})}),d=e=>e.mutation({query:e=>{var t;return{url:"/auth/user-detail-verify/".concat(e.userPhoneNumber,"?u_name=").concat(null!==(t=null===e||void 0===e?void 0:e.u_name)&&void 0!==t?t:""),method:o.a4,body:e}}}),u=e=>e.mutation({query:e=>({url:"/auth/user/forgot",method:o.a4,body:e.forgot})}),h=e=>e.mutation({query:e=>({url:"/auth/user/forgot/".concat(e.uid),method:o.a4,body:e.otp})}),m=e=>e.mutation({query:e=>({url:"/auth/user/reset/password/".concat(e.uid),method:o.a4,body:e.password})}),p=(e,t)=>e.mutation({query:e=>({url:"/auth/profile-creation/".concat(e.userPhoneNumber),method:o.a4,body:e.profileCreation})}),v=(e,t)=>e.mutation({query:e=>({url:"/auth/create-user-password/".concat(e.uid),method:o.a4,body:e.password})}),_=(e,t)=>e.mutation({query:e=>({url:"/auth/ins-detail",method:o.a4,body:e.phone})}),x=(e,t)=>e.mutation({query:e=>({url:"/auth/ins-detail-verify/".concat(e.insPhoneNumber),method:o.a4,body:e.verify})}),g=(e,t)=>e.mutation({query:e=>({url:"/auth/ins/register",method:o.a4,body:e.profileCreation})}),j=(e,t)=>e.mutation({query:e=>({url:"/auth/ins/create-password/".concat(e.id),method:o.a4,body:e.password})}),y=e=>e.mutation({query:e=>({url:"/auth/direct/confirm/join/".concat(e.phoneNumber,"/apply/").concat(e.aid,"?existingUser=").concat(e.uid),method:o.a4,body:e.addStudent})}),f=e=>e.query({query:e=>"/auth/select/account?phoneKey=".concat(e),transformResponse:e=>null===e||void 0===e?void 0:e.all_account,serializeQueryArgs:e=>{let{endpointName:t}=e;return t},forceRefetch(e){let{currentArg:t,previousArg:i}=e;return t!==i}}),b=e=>e.mutation({query:e=>({url:"/admission/".concat(e.uid,"/user/").concat(e.aid,"/apply"),method:"POST",body:e.apply_data})}),A=n.i.injectEndpoints({endpoints:e=>({fileUpload:s(e),authUniqueUsername:l(e),authUniqueEmail:a(e),authLogin:r(e),authUserNumber:c(e),authUserNumberVerify:d(e),authUserForget:u(e),authUserForgetOtp:h(e),authUserSetPassword:m(e),authUserCreateAccount:p(e),authUserCreatePassword:v(e),authInstituteNumber:_(e),authInstituteNumberVerify:x(e),authInstituteCreateAccount:g(e),authInstituteCreatePassword:j(e),authDirectJoinFormAdmissionApplication:y(e),authGetAccountWithMobileNumber:f(e),authUserApplyOneApplication:b(e)})}),{useFileUploadMutation:C,useAuthUniqueUsernameQuery:N,useAuthUniqueEmailQuery:Z,useAuthLoginMutation:q,useAuthUserNumberMutation:U,useAuthUserNumberVerifyMutation:k,useAuthUserForgetMutation:w,useAuthUserForgetOtpMutation:S,useAuthUserSetPasswordMutation:F,useAuthUserCreateAccountMutation:M,useAuthUserCreatePasswordMutation:I,useAuthInstituteNumberMutation:O,useAuthInstituteNumberVerifyMutation:P,useAuthInstituteCreateAccountMutation:G,useAuthInstituteCreatePasswordMutation:R,useAuthDirectJoinFormAdmissionApplicationMutation:T,useAuthGetAccountWithMobileNumberQuery:D,useAuthUserApplyOneApplicationMutation:E}=A},44226:(e,t,i)=>{i.d(t,{Z:()=>a});var n=i(39230),o=i(98684),s=i(80476),l=i(80184);const a=e=>{let{onExcelFileUpload:t,acceptType:i,label:a,dynamicKey:r,title:c,assestUrl:d,customStyle:u,customStyleLabel:h,dummyExcel:m}=e;const{t:p}=(0,n.$G)();return(0,l.jsxs)(l.Fragment,{children:[m?(0,l.jsxs)("label",{className:s.Z.upload_excel_file,style:u,children:[(0,l.jsx)("img",{src:d||"".concat(o.J7,"/upload-xslx.svg"),alt:"add student icon",title:null!==c&&void 0!==c?c:"Upload excel file"}),a&&(0,l.jsx)("h6",{style:h,children:p(a)})]}):(0,l.jsxs)("label",{className:s.Z.upload_excel_file,htmlFor:null!==r&&void 0!==r?r:"uploadExcel",style:u,children:[(0,l.jsx)("img",{src:d||"".concat(o.J7,"/upload-xslx.svg"),alt:"add student icon",title:null!==c&&void 0!==c?c:"Upload excel file"}),a&&(0,l.jsx)("h6",{style:h,children:p(a)})]}),(0,l.jsx)("input",{type:"file",id:null!==r&&void 0!==r?r:"uploadExcel",accept:i,onChange:t,style:{display:"none"}})]})}},19540:(e,t,i)=>{i.r(t),i.d(t,{default:()=>w});var n=i(72791),o=i(1669),s=i(55336),l=i(98684),a=i(63687),r=i(21348),c=i(2651),d=i(56959),u=i(39230),h=i(90904),m=i(43317),p=i(91389),v=i(38857),_=i(16925),x=i(26192),g=i(80184);const j=e=>{let{onSelectType:t}=e;const{t:i}=(0,u.$G)(),n=e=>{t(e)};return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)("div",{className:x.Z.application_card,onClick:()=>n("Direct_Admission"),children:[(0,g.jsxs)("div",{className:x.Z.application_card_title,children:[(0,g.jsx)("img",{src:"".concat(l.J7,"/category.svg"),alt:"staff profile avatar"}),(0,g.jsx)("h6",{children:i("direct_admission")})]}),(0,g.jsxs)("section",{className:x.Z.application_card_info,children:[(0,g.jsx)("div",{children:i("only_two_steps")}),(0,g.jsxs)("div",{children:["1. ",i("online_filling_form")]}),(0,g.jsxs)("div",{children:["2. ",i("online_admission_fees_payments")]}),(0,g.jsx)("h6",{children:i("online_note_suitable")})]})]}),(0,g.jsxs)("div",{className:x.Z.application_card,onClick:()=>n("Complete_Step_Wise_Admission"),children:[(0,g.jsxs)("div",{className:x.Z.application_card_title,children:[(0,g.jsx)("img",{src:"".concat(l.J7,"/category.svg"),alt:"staff profile avatar"}),(0,g.jsx)("h6",{children:i("complete_step_wise_admission")})]}),(0,g.jsxs)("section",{className:x.Z.application_card_info,children:[(0,g.jsx)("div",{children:i("steps_involved")}),(0,g.jsxs)("div",{children:["1. ",i("online_filling_form1")]}),(0,g.jsxs)("div",{children:["2. ",i("online_admission_fees_payments1")]}),(0,g.jsxs)("div",{children:["3. ",i("online_admission_fees_payments2")]}),(0,g.jsxs)("div",{children:["4. ",i("online_admission_fees_payments3")]}),(0,g.jsxs)("div",{children:["5. ",i("online_admission_fees_payments4")]}),(0,g.jsx)("h6",{children:i("offile_note_suitable")})]})]})]})};var y=i(38921),f=i(29760);const b=e=>{let{onClose:t,onRefetch:i,aid:o,fid:s,instituteId:a}=e;const{t:c}=(0,u.$G)(),[d,m]=(0,n.useState)("");return(0,g.jsx)(g.Fragment,{children:d?"Complete_Step_Wise_Admission"===d?(0,g.jsx)(y.Z,{onClose:()=>m(""),aid:o,onRefetch:i,instituteId:a,fid:s,onParentClose:t}):"Direct_Admission"===d?(0,g.jsx)(f.Z,{onClose:()=>m(""),aid:o,onRefetch:i,instituteId:a,fid:s,onParentClose:t}):null:(0,g.jsx)(v.Z,{children:(0,g.jsxs)("div",{className:_.Z.modal_container,children:[(0,g.jsx)(r.Z,{children:(0,g.jsxs)("div",{className:_.Z.modal_container_outer_header,children:[(0,g.jsx)("div",{className:_.Z.modal_container_header,children:(0,g.jsx)("h6",{children:c("select_admission_application_type")})}),(0,g.jsx)("img",{src:"".concat(l.J7,"/close.svg"),alt:"close icon",onClick:t})]})}),(0,g.jsx)(h.Z,{}),(0,g.jsx)(r.Z,{customStyle:{paddingTop:"0",marginBottom:"1rem"},children:(0,g.jsx)(j,{onSelectType:e=>{m(e)}})})]})})})};var A=i(16871),C=i(93638),N=i(44226),Z=i(21625);const q=e=>{var t,i,o,a,r,c,d,h,p,v,_,j,y,f;let{aid:b}=e;const{t:C}=(0,u.$G)(),N=(0,A.TH)(),Z=(0,A.UO)(),q=(0,A.s0)(),[U,k]=(0,n.useState)(!1),[w]=(0,m.kX)(),{admissionMergedApplicationTotalCount:S}=(0,m.r_)({data:{aid:b},skip:!b}),F=e=>{b&&(k((e=>!e)),w({aid:b,flow:e}).then((()=>{var e;let t="Institute"===(null===(e=N.state)||void 0===e?void 0:e.urlOffSet)?"/q/".concat(Z.username,"/institute/member/admission?type=export"):"/q/".concat(Z.username,"/member/staff/admission?type=export");q(t,{state:N.state})})).catch({}))};return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)("div",{className:x.Z.ongoing_card,style:{position:"relative",boxShadow:"0 4px 4px 1px rgba(0, 0, 0, 0.4)"},children:[(0,g.jsxs)("div",{className:x.Z.ongoing_card_inner,children:[(0,g.jsx)("img",{alt:"Ongoing App",src:"".concat(l.U_,"/application.svg")}),(0,g.jsx)("div",{className:x.Z.ongoing_card_text,children:(0,g.jsx)("h6",{children:C("total")})})]}),(0,g.jsxs)("div",{className:x.Z.ongoing_card_count_date,children:[(0,g.jsxs)("div",{className:x.Z.ongoing_card_count_container_inner,onClick:()=>F("Request_Query"),children:[(0,g.jsx)("p",{title:"Application",children:C("application")}),(0,g.jsx)("h6",{title:"Application",children:null!==(t=null===S||void 0===S||null===(i=S.custom_obj)||void 0===i?void 0:i.receievedCount)&&void 0!==t?t:0})]}),(0,g.jsxs)("div",{className:x.Z.ongoing_card_count_container_inner,onClick:()=>F("Docs_Query"),children:[(0,g.jsx)("p",{title:"Docs Collect",children:C("docs")}),(0,g.jsx)("h6",{title:"Docs Collect",children:null!==(o=null===S||void 0===S||null===(a=S.custom_obj)||void 0===a?void 0:a.selectCount)&&void 0!==o?o:0})]}),(0,g.jsxs)("div",{className:x.Z.ongoing_card_count_container_inner,onClick:()=>F("Fees_Query"),children:[(0,g.jsx)("p",{title:"Fees Collection",children:C("fees_")}),(0,g.jsx)("h6",{title:"Fees Collection",children:null!==(r=null===S||void 0===S||null===(c=S.custom_obj)||void 0===c?void 0:c.fee_collect_count)&&void 0!==r?r:0})]}),(0,g.jsxs)("div",{className:x.Z.ongoing_card_count_container_inner,onClick:()=>F("Confirm_Query"),children:[(0,g.jsx)("p",{title:"Confirmed",children:C("confirm")}),(0,g.jsx)("h6",{title:"Confirmed",children:null!==(d=null===S||void 0===S||null===(h=S.custom_obj)||void 0===h?void 0:h.confirmCount)&&void 0!==d?d:0})]}),(0,g.jsxs)("div",{className:x.Z.ongoing_card_count_container_inner,onClick:()=>F("Review_Query"),children:[(0,g.jsx)("p",{title:"Review",children:C("review")}),(0,g.jsx)("h6",{title:"Review",children:null!==(p=null===S||void 0===S||null===(v=S.custom_obj)||void 0===v?void 0:v.review_count)&&void 0!==p?p:0})]}),(0,g.jsxs)("div",{className:x.Z.ongoing_card_count_container_inner,onClick:()=>F("Allot_Query"),children:[(0,g.jsx)("p",{title:"Allottment",children:C("allotted")}),(0,g.jsx)("h6",{title:"Allottment",children:null!==(_=null===S||void 0===S||null===(j=S.custom_obj)||void 0===j?void 0:j.allotCount)&&void 0!==_?_:0})]}),(0,g.jsxs)("div",{className:x.Z.ongoing_card_count_container_inner,children:[(0,g.jsx)("p",{title:"Cancelled",children:C("cancel")}),(0,g.jsx)("h6",{title:"Cancelled",children:null!==(y=null===S||void 0===S||null===(f=S.custom_obj)||void 0===f?void 0:f.cancelCount)&&void 0!==y?y:0})]})]})]}),U&&(0,g.jsx)(s.Z,{})]})};var U=i(43504);const k=()=>{var e;const{t:t}=(0,u.$G)(),i=(0,A.TH)(),n=(0,A.UO)();return(0,g.jsx)(g.Fragment,{children:(0,g.jsx)(U.rU,{to:"Institute"===(null===(e=i.state)||void 0===e?void 0:e.urlOffSet)?"/q/".concat(n.username,"/institute/member/admission?type=hostel-ongoing"):"/q/".concat(n.username,"/member/staff/admission?type=hostel-ongoing"),state:i.state,children:(0,g.jsx)("div",{className:x.Z.ongoing_card,style:{position:"relative",boxShadow:"0 4px 4px 1px rgba(0, 0, 0, 0.4)"},children:(0,g.jsxs)("div",{className:x.Z.ongoing_card_inner,children:[(0,g.jsx)("img",{alt:"Ongoing App",src:"".concat(l.U_,"/application.svg")}),(0,g.jsx)("div",{className:x.Z.ongoing_card_text,children:(0,g.jsx)("h6",{children:t("hostel_application")})})]})})})})},w=e=>{var t,i,v,_,x;let{aid:j,instituteId:y,fid:f}=e;const{t:U}=(0,u.$G)(),w=(0,A.TH)(),F=(0,A.UO)(),M=(0,A.s0)(),[I,O]=(0,n.useState)(""),[P,G]=(0,n.useState)(!1),[R]=(0,Z.FL)(),[T,D]=(0,n.useState)(!1),[E,z]=(0,n.useState)([]),[Q]=(0,m.q7)(),{admissionOngoingApplication:L,admissionOngoingApplicationLoading:J,admissionOngoingApplicationRefetch:K}=(0,m.s5)({data:{aid:j,page:1,limit:1e3,search:""},skip:!j});(0,n.useEffect)((()=>{var e;null!==L&&void 0!==L&&null!==(e=L.list)&&void 0!==e&&e.length&&z(null===L||void 0===L?void 0:L.list)}),[null===L||void 0===L?void 0:L.list]);const W=()=>{G((e=>!e))},$=()=>{K()},B=(0,n.useCallback)((()=>{var e;let t="Institute"===(null===(e=w.state)||void 0===e?void 0:e.urlOffSet)?"/q/".concat(F.username,"/institute/member/admission"):"/q/".concat(F.username,"/member/staff/admission");M(t,{state:w.state})}),[M,w.state,F.username]);return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)(a.default,{children:[(0,g.jsx)(r.Z,{children:(0,g.jsxs)("div",{className:d.Z.fm_header_container,children:[(0,g.jsxs)("div",{className:d.Z.fm_header_start_container,style:{gap:"0.5rem"},children:[(0,g.jsx)("img",{alt:"search icon",src:"".concat(l.Fk,"/back.svg"),style:{height:"2rem",width:"2rem"},onClick:B}),(0,g.jsx)("h6",{children:U("ongoing_applications")})]}),(0,g.jsxs)("div",{className:d.Z.fm_search,children:[(0,g.jsx)("section",{className:d.Z.fm_search_container,children:(0,g.jsxs)("div",{className:d.Z.fm_search_container_inner,children:[(0,g.jsx)("img",{className:d.Z.fm_search_icon,alt:"search icon",src:"".concat(l.dB,"/navbar-search.svg")}),(0,g.jsx)("input",{type:"text",placeholder:U("search"),onChange:e=>{var t;!J&&(null===L||void 0===L||null===(t=L.list)||void 0===t?void 0:t.length)>=0&&O(e.target.value)},style:{minWidth:"220px"},onKeyUp:e=>{if("Enter"===e.key){let e=S(null===L||void 0===L?void 0:L.list,I);z(e)}},value:I})]})}),null!==(t=w.state)&&void 0!==t&&t.role?null:(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(N.Z,{onExcelFileUpload:e=>{var t,i;if(null!==(t=e.target)&&void 0!==t&&null!==(i=t.files)&&void 0!==i&&i.length&&j){D((e=>!e));const t=new FormData;t.append("file",e.target.files[0]),R({fileUpload:t}).then((e=>{var t,i;null!==(t=e.data)&&void 0!==t&&t.imageKey?Q({aid:j,bodyParameter:{excel_file:null===(i=e.data)||void 0===i?void 0:i.imageKey}}).then((()=>{D((e=>!e))})).catch({}):D((e=>!e))})).catch({})}},dynamicKey:"direct_application",title:"Direct Application Excel",label:"Direct Application Excel"}),(0,g.jsx)(C.Z,{label:"create_new_application",customStyle:{paddingBlock:"0.4rem",margin:"0"},onAction:W})]})]})]})}),(0,g.jsx)(h.Z,{}),(0,g.jsxs)(r.Z,{customStyle:{paddingTop:"0.2rem",position:"relative"},children:[(0,g.jsx)(k,{}),(0,g.jsx)(q,{aid:j}),(null===(i=w.state)||void 0===i||null===(v=i.authorizedApplication)||void 0===v?void 0:v.length)>0?null===E||void 0===E?void 0:E.map((e=>{var t,i;return null!==(t=w.state)&&void 0!==t&&null!==(i=t.authorizedApplication)&&void 0!==i&&i.includes(null===e||void 0===e?void 0:e._id)?(0,g.jsx)(p.Z,{application:e,aid:j,instituteId:y,onRefetch:$},null===e||void 0===e?void 0:e._id):null})):null===E||void 0===E?void 0:E.map((e=>(0,g.jsx)(p.Z,{application:e,aid:j,instituteId:y,onRefetch:$},null===e||void 0===e?void 0:e._id))),J?I?(0,g.jsx)(s.Z,{}):(0,g.jsx)(o.Z,{}):I?0===(null===L||void 0===L||null===(_=L.list)||void 0===_?void 0:_.length)&&(0,g.jsx)(c.Z,{customStyleContainer:{marginTop:"1.5rem"},title:"No ongoing application found related this search."}):0===(null===L||void 0===L||null===(x=L.list)||void 0===x?void 0:x.length)&&(0,g.jsx)(c.Z,{customStyleContainer:{marginTop:"1.5rem"},title:"No application created."})]})]}),P&&(0,g.jsx)(b,{onClose:W,onRefetch:$,aid:j,instituteId:y,fid:f}),T&&(0,g.jsx)(s.Z,{})]})},S=(e,t)=>(null===e||void 0===e?void 0:e.length)>0?null===e||void 0===e?void 0:e.filter((e=>{var i,n;return null!==e&&void 0!==e&&null!==(i=e.applicationName)&&void 0!==i&&null!==(n=i.toLowerCase())&&void 0!==n&&n.includes(null===t||void 0===t?void 0:t.toLowerCase())?e:null})):[]}}]);
//# sourceMappingURL=19540.67e5358a.chunk.js.map