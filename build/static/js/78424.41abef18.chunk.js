"use strict";(self.webpackChunkmithkal_qviple=self.webpackChunkmithkal_qviple||[]).push([[78424],{86095:(e,t,n)=>{n.d(t,{Z:()=>_});var a=n(97893),o=n(54155),r=n(4899),s=n(77386),i=n(64554),l=n(4567),c=n(59256),u=n(5849),d=n(72791),m=n(97005),h=n(17107),p=(n(91711),n(80184));const _=e=>{let{setOpenCrop:t,fileUrl:n,first:_,second:x,onCrop:y}=e;const[b,f]=(0,d.useState)({x:0,y:0}),[g,j]=(0,d.useState)(1),[Z,C]=(0,d.useState)(0),[N,A]=(0,d.useState)(null);return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(r.Z,{dividers:!0,sx:{background:"#333",position:"relative",height:400,minWidth:580},children:(0,p.jsx)(m.Z,{image:n,crop:b,zoom:g,rotation:Z,aspect:_/x,onZoomChange:j,onRotationChange:C,onCropChange:f,onCropComplete:(e,t)=>{A(t)}})}),(0,p.jsxs)(s.Z,{sx:{flexDirection:"column",mx:3,my:2,width:531},children:[(0,p.jsxs)(i.Z,{sx:{width:"100%",mb:1},children:[(0,p.jsxs)(i.Z,{children:[(0,p.jsxs)(l.Z,{children:["Zoom: ",v(g)]}),(0,p.jsx)(c.ZP,{valueLabelDisplay:"auto",valueLabelFormat:v,min:1,max:3,step:.1,value:g,onChange:(e,t)=>j(t)})]}),(0,p.jsxs)(i.Z,{children:[(0,p.jsxs)(l.Z,{children:["Rotation: ",Z+"\xb0"]}),(0,p.jsx)(c.ZP,{valueLabelDisplay:"auto",min:0,max:360,value:Z,onChange:(e,t)=>C(t)})]})]}),(0,p.jsxs)(i.Z,{sx:{display:"flex",gap:34,flexWrap:"wrap"},children:[(0,p.jsx)(u.Z,{variant:"outlined",startIcon:(0,p.jsx)(a.Z,{}),onClick:()=>t(!1),children:"Cancel"}),(0,p.jsx)(u.Z,{variant:"contained",startIcon:(0,p.jsx)(o.Z,{}),onClick:async()=>{try{const{file:e,url:t}=await(0,h.ZP)(n,N,Z);y(e,t)}catch(e){console.log(e)}},children:"Upload"})]})]})]})},v=e=>"".concat(Math.round(100*e),"%")},21625:(e,t,n)=>{n.d(t,{Dr:()=>c,Dv:()=>_,FL:()=>o,J9:()=>p,KB:()=>x,Ne:()=>d,OF:()=>l,Pv:()=>s,b5:()=>m,bB:()=>h,d4:()=>i,gS:()=>u,rY:()=>v,vM:()=>y,xk:()=>r});var a=n(63950);const o=()=>{const[e]=(0,a.rk)();return[e]},r=()=>{const[e]=(0,a.Zz)();return[e]},s=()=>{const[e]=(0,a.Sm)();return[e]},i=()=>{const[e]=(0,a.G1)();return[e]},l=()=>{const[e]=(0,a.lI)();return[e]},c=()=>{const[e]=(0,a.CT)();return[e]},u=()=>{const[e]=(0,a.b)();return[e]},d=()=>{const[e]=(0,a.x0)();return[e]},m=()=>{const[e]=(0,a.kA)();return[e]},h=()=>{const[e]=(0,a.rz)();return[e]},p=()=>{const[e]=(0,a.Pi)();return[e]},_=()=>{const[e]=(0,a.qz)();return[e]},v=()=>{const[e]=(0,a._C)();return[e]},x=()=>{const[e]=(0,a.qG)();return[e]},y=e=>{const{data:t,refetch:n,isLoading:o}=(0,a.tz)(null===e||void 0===e?void 0:e.phoneKey,{skip:e.skip});return{authGetAccountWithMobileNumber:t,authGetAccountWithMobileNumberRefetch:n,authGetAccountWithMobileNumberLoading:o}}},63950:(e,t,n)=>{n.d(t,{qG:()=>O,tz:()=>z,qz:()=>L,_C:()=>D,rz:()=>G,Pi:()=>P,Zz:()=>w,YY:()=>R,x0:()=>M,kA:()=>I,lI:()=>U,CT:()=>k,Sm:()=>S,G1:()=>q,b:()=>F,rk:()=>C});var a=n(28328),o=n(94811);const r=e=>e.mutation({query:e=>({url:"/all-images/onefile/web",method:o.Q0,body:e.fileUpload})}),s=e=>e.query({query:e=>"/auth/username/search?u_name=".concat(e)}),i=e=>e.query({query:e=>"/auth/email/check/redundant?email=".concat(e)}),l=e=>e.mutation({query:e=>({url:"/auth/login",method:o.a4,body:e.login})}),c=e=>e.mutation({query:e=>({url:"/auth/user-detail",method:o.a4,body:e})}),u=e=>e.mutation({query:e=>{var t;return{url:"/auth/user-detail-verify/".concat(e.userPhoneNumber,"?u_name=").concat(null!==(t=null===e||void 0===e?void 0:e.u_name)&&void 0!==t?t:""),method:o.a4,body:e}}}),d=e=>e.mutation({query:e=>({url:"/auth/user/forgot",method:o.a4,body:e.forgot})}),m=e=>e.mutation({query:e=>({url:"/auth/user/forgot/".concat(e.uid),method:o.a4,body:e.otp})}),h=e=>e.mutation({query:e=>({url:"/auth/user/reset/password/".concat(e.uid),method:o.a4,body:e.password})}),p=(e,t)=>e.mutation({query:e=>({url:"/auth/profile-creation/".concat(e.userPhoneNumber),method:o.a4,body:e.profileCreation})}),_=(e,t)=>e.mutation({query:e=>({url:"/auth/create-user-password/".concat(e.uid),method:o.a4,body:e.password})}),v=(e,t)=>e.mutation({query:e=>({url:"/auth/ins-detail",method:o.a4,body:e.phone})}),x=(e,t)=>e.mutation({query:e=>({url:"/auth/ins-detail-verify/".concat(e.insPhoneNumber),method:o.a4,body:e.verify})}),y=(e,t)=>e.mutation({query:e=>({url:"/auth/ins/register",method:o.a4,body:e.profileCreation})}),b=(e,t)=>e.mutation({query:e=>({url:"/auth/ins/create-password/".concat(e.id),method:o.a4,body:e.password})}),f=e=>e.mutation({query:e=>({url:"/auth/direct/confirm/join/".concat(e.phoneNumber,"/apply/").concat(e.aid,"?existingUser=").concat(e.uid),method:o.a4,body:e.addStudent})}),g=e=>e.query({query:e=>"/auth/select/account?phoneKey=".concat(e),transformResponse:e=>null===e||void 0===e?void 0:e.all_account,serializeQueryArgs:e=>{let{endpointName:t}=e;return t},forceRefetch(e){let{currentArg:t,previousArg:n}=e;return t!==n}}),j=e=>e.mutation({query:e=>({url:"/admission/".concat(e.uid,"/user/").concat(e.aid,"/apply"),method:"POST",body:e.apply_data})}),Z=a.i.injectEndpoints({endpoints:e=>({fileUpload:r(e),authUniqueUsername:s(e),authUniqueEmail:i(e),authLogin:l(e),authUserNumber:c(e),authUserNumberVerify:u(e),authUserForget:d(e),authUserForgetOtp:m(e),authUserSetPassword:h(e),authUserCreateAccount:p(e),authUserCreatePassword:_(e),authInstituteNumber:v(e),authInstituteNumberVerify:x(e),authInstituteCreateAccount:y(e),authInstituteCreatePassword:b(e),authDirectJoinFormAdmissionApplication:f(e),authGetAccountWithMobileNumber:g(e),authUserApplyOneApplication:j(e)})}),{useFileUploadMutation:C,useAuthUniqueUsernameQuery:N,useAuthUniqueEmailQuery:A,useAuthLoginMutation:w,useAuthUserNumberMutation:S,useAuthUserNumberVerifyMutation:q,useAuthUserForgetMutation:U,useAuthUserForgetOtpMutation:k,useAuthUserSetPasswordMutation:F,useAuthUserCreateAccountMutation:M,useAuthUserCreatePasswordMutation:I,useAuthInstituteNumberMutation:G,useAuthInstituteNumberVerifyMutation:P,useAuthInstituteCreateAccountMutation:L,useAuthInstituteCreatePasswordMutation:D,useAuthDirectJoinFormAdmissionApplicationMutation:O,useAuthGetAccountWithMobileNumberQuery:z,useAuthUserApplyOneApplicationMutation:R}=Z},38986:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(72791),o=n(52245),r=n(39230),s=n(1095),i=n(80184);const l=e=>{let{label:t,name:n,value:l,onChange:c,errorShow:u,disabled:d,customFormFileContainer:m,customFormFileLabel:h,customFormFile:p,type:_,multiple:v}=e;const{t:x}=(0,r.$G)(),y=(0,a.useCallback)((()=>{const e=window.open("".concat(s.yI,"/").concat(null===l||void 0===l?void 0:l.key),"_blank","noopener,noreferrer");e&&(e.opener=null)}),[null===l||void 0===l?void 0:l.key]);return(0,i.jsxs)("div",{className:o.Z.form_input_container,style:{...m},children:[t&&(0,i.jsxs)("label",{className:o.Z.form_input_label,style:h,children:[t,u?(0,i.jsxs)("span",{className:o.Z.form_input_label_error,children:["* ",x("form_require_label")]}):null]}),(0,i.jsxs)("div",{className:o.Z.form_file_container,style:p,children:[(0,i.jsx)("label",{className:l?"".concat(o.Z.form_file_choose," ").concat(o.Z.form_file_choose_active):o.Z.form_file_choose,htmlFor:n,children:x(""!==l?"file_choosen":"choose_file")}),(0,i.jsx)("label",{className:o.Z.form_file_choosen,onClick:y,children:""!==l?null!==l&&void 0!==l&&l.name?null===l||void 0===l?void 0:l.name:x("view"):x("no_file_chosen")})]}),(0,i.jsx)("input",{type:"file",multiple:!!v,accept:_||"image/*, .doc,.docx, application/pdf,.csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel",name:n,id:n,style:{display:"none"},onChange:c,disabled:d})]})}},16917:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(72791),o=n(52245),r=n(39230),s=n(1095),i=n(80184);const l=e=>{let{label:t,value:n,shownLabel:l,customFormInputContainer:c,customFormInputLabel:u,customFormInput:d}=e;const{t:m}=(0,r.$G)(),h=(0,a.useCallback)((()=>{if(n){const e=window.open("".concat(s.yI,"/").concat(null===n||void 0===n?void 0:n.key),"_blank","noopener,noreferrer");e&&(e.opener=null)}}),[n]);return(0,i.jsxs)("div",{className:o.Z.form_read_input_container,style:c,children:[t&&(0,i.jsx)("label",{className:o.Z.form_read_input_label,style:u,children:t}),(0,i.jsx)("h6",{className:o.Z.form_read_input_file,style:d,onClick:h,children:m(null!==l&&void 0!==l?l:"view")})]})}},11468:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(39230),o=n(52245),r=n(80184);const s=e=>{var t;return e?null===e||void 0===e||null===(t=e.split("\n"))||void 0===t?void 0:t.length:2},i=e=>{let{label:t,name:n,type:i,value:l,onChange:c,placeholder:u,errorShow:d,disabled:m,customFormInputContainer:h,customFormInputLabel:p}=e;const{t:_}=(0,a.$G)();return(0,r.jsxs)("div",{className:o.Z.form_input_container,style:h,children:[t&&(0,r.jsxs)("label",{className:o.Z.form_input_label,htmlFor:n,style:p,children:[t,d&&(0,r.jsxs)("span",{className:o.Z.form_input_label_error,children:["* ",_("form_require_label")]})]}),(0,r.jsx)("textarea",{className:o.Z.form_textarea_input,type:i,value:l,onChange:c,name:n,placeholder:u,rows:s(l),disabled:m,style:{"--textarea-height":"".concat(20*s(l),"px")}})]})}},63687:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(59393),o=n(80184);const r=e=>{let{customStyle:t,children:n}=e;return(0,o.jsx)("div",{className:a.Z.user_member_container_wrapper,style:t,children:n})}},78424:(e,t,n)=>{n.r(t),n.d(t,{default:()=>q});var a=n(72791),o=n(32361),r=n(1669),s=n(90904),i=n(63687),l=n(21348),c=n(2651),u=n(99183),d=n(48293),m=n(61055),h=n(55336),p=n(98684),_=n(93638),v=n(39230),x=n(16925),y=n(11468),b=n(21625),f=n(5574),g=n(86095),j=n(38986),Z=n(80184);const C=e=>{let{onClose:t,onRefetch:n,dsid:r}=e;const{t:i}=(0,v.$G)(),[c,C]=(0,a.useState)(""),[N,A]=(0,a.useState)(!1),[w,S]=(0,a.useState)({title:"",description:"",image:""}),[q,U]=(0,a.useState)(!1),[k,F]=(0,a.useState)(""),[M]=(0,o.e9)(),I=e=>{S((t=>({...t,[e.target.name]:e.target.value})))},[G]=(0,b.FL)(),P=e=>{if(e){A((e=>!e));const t=new FormData;t.append("file",e),G({fileUpload:t}).then((e=>{S((t=>{var n;return{...t,image:null===(n=e.data)||void 0===n?void 0:n.imageKey}})),A((e=>!e))})).catch({})}};return(0,Z.jsx)(Z.Fragment,{children:q?(0,Z.jsx)(f.Z,{open:q,children:(0,Z.jsx)(g.Z,{setOpenCrop:U,fileUrl:k,first:1,second:1,onCrop:(e,t)=>{U(!1),P(e)}})}):(0,Z.jsx)(d.Z,{onClose:t,children:(0,Z.jsxs)("div",{className:x.Z.modal_container,children:[(0,Z.jsx)(l.Z,{children:(0,Z.jsxs)("div",{className:x.Z.modal_container_outer_header,children:[(0,Z.jsx)("div",{className:x.Z.modal_container_header,children:(0,Z.jsx)("h6",{children:i("add_student_association")})}),(0,Z.jsx)("img",{src:"".concat(p.J7,"/close.svg"),alt:"close icon",onClick:t})]})}),(0,Z.jsx)(s.Z,{}),(0,Z.jsxs)(l.Z,{customStyle:{paddingTop:"0"},children:[(0,Z.jsx)(m.Z,{label:i("title"),placeholder:i("title_placeholder"),name:"title",value:w.title,type:"text",onChange:I,errorShow:c.title}),(0,Z.jsx)(j.Z,{label:i("add_image"),name:"home-opener",value:w.image?{key:w.image,name:"View"}:"",onChange:e=>{if(e.target.files[0]){const t=URL.createObjectURL(e.target.files[0]);F(t),U(!0)}},errorShow:c.image}),(0,Z.jsx)(y.Z,{label:i("description"),placeholder:i("description_placeholder"),name:"description",type:"text",value:w.description,onChange:I,customFormInputContainer:{width:"100%"},errorShow:c.description}),(0,Z.jsx)(_.Z,{label:"add",onAction:()=>{let e=(0,u.l)(w,["image"]);(0,u.x)(e)&&r?(A((e=>!e)),M({dsid:r,bodyParameter:{...w,flow:"STUDENT_ASSOCIATIONS"}}).then((()=>{n(),A((e=>!e)),t()})).catch({})):C(e)}})]}),N&&(0,Z.jsx)(h.Z,{})]})})})};var N=n(56959),A=n(2034),w=n(16917);const S=e=>{var t;let{pso:n}=e;const{t:a}=(0,v.$G)();return(0,Z.jsx)("div",{className:A.Z.smc_card,children:(0,Z.jsx)("div",{className:A.Z.smc_card_contatiner,children:(0,Z.jsx)("div",{className:A.Z.smc_card_contatiner,children:(0,Z.jsxs)("div",{className:A.Z.smc_card_contatiner_inner,children:[(0,Z.jsxs)("h6",{children:[" ",a("name")," : ",null===n||void 0===n?void 0:n.title]}),(0,Z.jsx)(w.Z,{label:"".concat(a("image"),": "),value:{key:null===n||void 0===n?void 0:n.image},customFormInputContainer:{margin:"0"}}),(0,Z.jsx)("p",{children:null!==(t=null===n||void 0===n?void 0:n.description)&&void 0!==t?t:""})]})})})})},q=e=>{var t,n;let{did:u,dsid:d}=e;const{t:m}=(0,v.$G)(),[h,p]=(0,a.useState)(!1),{departmentDashboardSite:x,departmentDashboardSiteLoading:y,departmentDashboardSiteRefetch:b}=(0,o.tI)({data:{did:u},skip:!u}),f=()=>{p((e=>!e))};return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsxs)(i.Z,{children:[(0,Z.jsx)(l.Z,{children:(0,Z.jsxs)("div",{className:N.Z.fm_header_container,children:[(0,Z.jsx)("h6",{children:m("student_associations")}),(0,Z.jsx)(_.Z,{label:"add",customStyle:{paddingBlock:"0.4rem",margin:"0"},onAction:f})]})}),(0,Z.jsx)(s.Z,{}),(0,Z.jsxs)(l.Z,{children:[null===x||void 0===x||null===(t=x.student_associations)||void 0===t?void 0:t.map((e=>(0,Z.jsx)(S,{pso:e},null===e||void 0===e?void 0:e._id))),y?(0,Z.jsx)(r.Z,{}):0===(null===x||void 0===x||null===(n=x.student_associations)||void 0===n?void 0:n.length)&&(0,Z.jsx)(c.Z,{title:"No student association."})]})]}),h&&(0,Z.jsx)(C,{onClose:f,dsid:d,onRefetch:b})]})}},2034:(e,t,n)=>{n.d(t,{Z:()=>a});const a={smc_card:"StoreManager_smc_card__eEs0G",smc_card_active:"StoreManager_smc_card_active__Im3Y7",smc_card_contatiner:"StoreManager_smc_card_contatiner__ese7w",smccc_inner:"StoreManager_smccc_inner__qlGyG",smc_card_contatiner_inner:"StoreManager_smc_card_contatiner_inner__fU6mu",menu_icon:"StoreManager_menu_icon__CGeq4"}}}]);
//# sourceMappingURL=78424.41abef18.chunk.js.map