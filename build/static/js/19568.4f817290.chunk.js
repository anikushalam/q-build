"use strict";(self.webpackChunkmithkal_qviple=self.webpackChunkmithkal_qviple||[]).push([[19568],{51317:(e,t,i)=>{i.d(t,{Z:()=>d});var n=i(72791),a=i(27331),l=i(39230),o=i(93638),s=i(80184);const r=e=>{let{title:t,subTitle:i,titleStyle:n,subTitleStyle:r,isCreate:d,onCreate:_,children:u}=e;const{t:c}=(0,l.$G)();return(0,s.jsxs)("div",{className:a.Z.auth_card_wrapper,children:[d?(0,s.jsxs)("div",{className:a.Z.auth_create_container,children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("h6",{className:a.Z.auth_card_title,style:n,children:c(t||"hello")}),(0,s.jsx)("h6",{className:a.Z.auth_card_subtitle,style:r,children:i||c("welcome_to_qviple")})]}),(0,s.jsx)(o.Z,{label:"create_new_account",customStyle:{margin:"0"},onAction:_})]}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h6",{className:a.Z.auth_card_title,style:n,children:c(t||"hello")}),(0,s.jsx)("h6",{className:a.Z.auth_card_subtitle,style:r,children:i||c("welcome_to_qviple")})]}),u]})},d=(0,n.memo)(r)},19568:(e,t,i)=>{i.r(t),i.d(t,{default:()=>h});var n=i(39230),a=i(27331),l=i(51317),o=i(96873),s=(i(72791),i(98684)),r=i(1095),d=i(59574),_=i(16871),u=i(80184);const c=e=>{var t,i,n,l,o,c;let{account:h}=e;const v=(0,_.TH)(),g=(0,_.s0)(),{existingAccountLogin:m}=(0,d.f)();return(0,u.jsxs)("div",{className:a.Z.aea_card,onClick:()=>{var e,t,i,n,a,l,o,s,r,d,_,u,c,p,b,f,x;null!==(e=v.state)&&void 0!==e&&null!==(t=e.landingPage)&&void 0!==t&&t.appId?(m(h,"LANDING_PAGE"),"hostel"===(null===(n=v.state)||void 0===n||null===(a=n.landingPage)||void 0===a?void 0:a.isHostel)?g("/q/hostel/joining",{state:{formAs:"STUDENT",openAs:"landing_page",appId:null===(l=v.state)||void 0===l||null===(o=l.landingPage)||void 0===o?void 0:o.appId,hostelId:null===(s=v.state)||void 0===s||null===(r=s.landingPage)||void 0===r?void 0:r.hostelId,verifyNumber:null===v||void 0===v||null===(d=v.state)||void 0===d?void 0:d.phoneNumber}}):g("/q/joining",{state:{formAs:"STUDENT",openAs:"landing_page",appId:null===(_=v.state)||void 0===_||null===(u=_.landingPage)||void 0===u?void 0:u.appId,instituteId:null===(c=v.state)||void 0===c||null===(p=c.landingPage)||void 0===p?void 0:p.instituteId,admissionId:null===(b=v.state)||void 0===b||null===(f=b.landingPage)||void 0===f?void 0:f.admissionId,whichFormShow:"DEPARTMENT",verifyNumber:null===v||void 0===v||null===(x=v.state)||void 0===x?void 0:x.phoneNumber}})):m(h,null===v||void 0===v||null===(i=v.state)||void 0===i?void 0:i.accessFrom)},children:[(0,u.jsx)("img",{src:null!==h&&void 0!==h&&null!==(t=h.user)&&void 0!==t&&t.profilePhoto?"".concat(r.yI,"/").concat(null===h||void 0===h||null===(i=h.user)||void 0===i?void 0:i.profilePhoto):"".concat(s.p3,"/feed-user-avatar.svg"),alt:"avatar icon"}),(0,u.jsxs)("div",{className:a.Z.aea_card_inner,children:[(0,u.jsx)("h6",{children:null!==(n=null===h||void 0===h||null===(l=h.user)||void 0===l?void 0:l.userLegalName)&&void 0!==n?n:""}),(0,u.jsx)("p",{children:null!==(o=null===h||void 0===h||null===(c=h.user)||void 0===c?void 0:c.username)&&void 0!==o?o:""})]})]})},h=()=>{var e,t;const{t:i}=(0,n.$G)(),s=(0,_.TH)(),r=(0,_.s0)();return(0,u.jsx)(o.Z,{children:(0,u.jsx)(l.Z,{title:"existing_account",subTitle:i("please_select_existing_account"),subTitleStyle:{fontSize:"0.8rem"},titleStyle:{fontSize:"1rem"},isCreate:!0,onCreate:()=>{r("/user/create/account",{state:s.state})},children:(0,u.jsx)("div",{className:a.Z.auth_login_form,style:{marginTop:"1rem"},children:null===(e=s.state)||void 0===e||null===(t=e.accounts)||void 0===t?void 0:t.map((e=>(0,u.jsx)(c,{account:e},null===e||void 0===e?void 0:e._id)))})})})}},96873:(e,t,i)=>{i.d(t,{Z:()=>o});i(72791);var n=i(27331),a=i(98684),l=i(80184);const o=e=>{let{children:t}=e;return(0,l.jsxs)("div",{className:n.Z.getstarted,children:[(0,l.jsx)("div",{className:n.Z.left_strip}),(0,l.jsxs)("div",{className:n.Z.getstarted_container,children:[(0,l.jsx)("div",{className:n.Z.right_strip}),(0,l.jsxs)("div",{className:n.Z.getstarted_container_inner,children:[(0,l.jsxs)("div",{className:n.Z.getstarted_container_info,children:[(0,l.jsx)("a",{href:"https://dashboard.qviple.com/",target:"_blank",rel:"noopener noreferrer",children:(0,l.jsx)("h4",{children:"Qviple"})}),(0,l.jsxs)("ul",{children:[(0,l.jsxs)("li",{children:[(0,l.jsx)("a",{href:"https://dashboard.qviple.com/",target:"_blank",rel:"noopener noreferrer",children:(0,l.jsxs)("h6",{children:[(0,l.jsx)("img",{src:"".concat(a.nj,"/auth-easy.svg"),alt:"auth cost"}),"Easy-to-Use Tools"]})}),(0,l.jsx)("p",{children:"User-friendly interface, even beginners can easily navigate and manage tasks from any device, be it a phone, laptop, or desktop. Plus, enjoy the freedom of accessing Qviple anytime, anywhere, with minimal data usage."})]}),(0,l.jsxs)("li",{children:[(0,l.jsx)("a",{href:"https://dashboard.qviple.com/",target:"_blank",rel:"noopener noreferrer",children:(0,l.jsxs)("h6",{children:[(0,l.jsx)("img",{src:"".concat(a.nj,"/auth-trust.svg"),alt:"auth cost"}),"Trustworthy and Secure"]})}),(0,l.jsx)("p",{children:"Choose Qviple for a trustworthy, secure, and confidential school management experience. Partner with us and unlock the full potential of your school's data while maintaining the highest level of security."})]}),(0,l.jsxs)("li",{children:[(0,l.jsx)("a",{href:"https://dashboard.qviple.com/",target:"_blank",rel:"noopener noreferrer",children:(0,l.jsxs)("h6",{children:[(0,l.jsx)("img",{src:"".concat(a.nj,"/auth-cost.svg"),alt:"auth cost"}),"Cost-Effective Scalable Pricing Options"]})}),(0,l.jsx)("p",{children:"Qviple offers flexible and scalable pricing options to accommodate Institute of all sizes."})]})]}),(0,l.jsx)("div",{className:n.Z.get_started_btn,children:(0,l.jsx)("a",{href:"https://dashboard.qviple.com/",target:"_blank",rel:"noopener noreferrer",children:(0,l.jsx)("button",{children:"Get Started"})})})]}),(0,l.jsx)("div",{className:n.Z.getstarted_container_child,children:t})]})]})]})}},59574:(e,t,i)=>{i.d(t,{f:()=>d});var n=i(95048),a=i(16871),l=i(53013),o=i(98990),s=i(28795),r=i(85243);const d=()=>{const e=(0,n.I0)(),t=(0,a.s0)(),i=i=>{localStorage.clear();let n=null===i||void 0===i?void 0:i.user;null!==i&&void 0!==i&&i.isUniversal?t("/verify",{state:{phoneNumber:null===i||void 0===i?void 0:i.phoneNumber,u_name:null===i||void 0===i?void 0:i.u_name}}):"DELETED_ACCOUNT"===(null===i||void 0===i?void 0:i.accessFrom)?(e(l.R.loginQuery({login:!0,token:i.token,id:null===n||void 0===n?void 0:n._id,status:!0,loggedinAs:"user",username:null===n||void 0===n?void 0:n.username})),t("/account/delete?type=confirm",{state:{id:null===n||void 0===n?void 0:n._id}})):"LANDING_PAGE"===(null===i||void 0===i?void 0:i.accessFrom)?(e(l.R.loginQuery({login:!0,token:i.token,id:null===n||void 0===n?void 0:n._id,status:!0,loggedinAs:"user",username:null===n||void 0===n?void 0:n.username,mods_id:"",loginRole:""})),e(o.S.addInstituteId({id:null===n||void 0===n?void 0:n._id,loggedinAs:"user"}))):(e(l.R.loginQuery({login:!0,token:i.token,id:null===n||void 0===n?void 0:n._id,status:!0,loggedinAs:"user",username:null===n||void 0===n?void 0:n.username,mods_id:"",loginRole:""})),e(o.S.addInstituteId({id:null===n||void 0===n?void 0:n._id,loggedinAs:"user"})),null!==i&&void 0!==i&&i.isMember||t("/q/".concat(null===n||void 0===n?void 0:n.username,"/feed")))};return{userDispatchAction:i,existingAccountLogin:(e,t)=>{i({token:null===e||void 0===e?void 0:e.token,user:null===e||void 0===e?void 0:e.user,accessFrom:t})},instituteDispatchAction:i=>{localStorage.clear();let n=null===i||void 0===i?void 0:i.institute;var a,d,_,u,c;null!==i&&void 0!==i&&i.isUniversal?t("/verify",{state:{phoneNumber:null===i||void 0===i?void 0:i.phoneNumber,u_name:null===i||void 0===i?void 0:i.u_name}}):(e(l.R.loginQuery({login:!0,token:i.token,id:null===n||void 0===n?void 0:n._id,status:!0,loggedinAs:"institute",username:null===n||void 0===n?void 0:n.name,mods_id:null!==(a=null===n||void 0===n?void 0:n.mods_id)&&void 0!==a?a:"",loginRole:"SOCIAL_MEDIA_HANDLER"===(null===i||void 0===i?void 0:i.main_role)?"_usr_rs":"_usr_ia"===(null===i||void 0===i?void 0:i.main_role)?"_usr_ia":""})),e(o.S.addInstituteId({id:null===n||void 0===n?void 0:n._id,loggedinAs:"institute"})),e(s.q.financeQuery({fid:null!==n&&void 0!==n&&null!==(d=n.financeDepart)&&void 0!==d&&d[0]?null===n||void 0===n||null===(_=n.financeDepart)||void 0===_?void 0:_[0]:""})),e(r.F.admissionQuery({aid:null!==n&&void 0!==n&&null!==(u=n.admissionDepart)&&void 0!==u&&u[0]?null===n||void 0===n||null===(c=n.admissionDepart)||void 0===c?void 0:c[0]:""})),null!==i&&void 0!==i&&i.isMember||t("/q/".concat(null===n||void 0===n?void 0:n.name,"/feed"),{state:{loginRole:"SOCIAL_MEDIA_HANDLER"===(null===i||void 0===i?void 0:i.main_role)?"_usr_rs":""}}))}}}},98684:(e,t,i)=>{i.d(t,{D3:()=>d,Fk:()=>u,HN:()=>n,IC:()=>v,Ii:()=>h,J7:()=>s,Jr:()=>c,U_:()=>r,Uw:()=>_,dB:()=>l,ix:()=>g,nj:()=>a,p3:()=>o,wP:()=>p,zr:()=>m});const n="/public/images/company_logo",a="/public/images/auth",l="/public/images/navbar",o="/public/images/feed",s="/public/images/finance",r="/public/images/admission",d="/public/images/lms",_="/public/images/loading",u="/public/images/utility",c="/public/images/feedback",h="/public/images/mentor",v="/public/images/staff",g="/public/images/automate",m="/public/images/store",p="/public/images/academic_department"},93638:(e,t,i)=>{i.d(t,{Z:()=>o});var n=i(39230),a=i(80476),l=i(80184);const o=e=>{let{label:t,count:i,onAction:o,customStyle:s,isTranslate:r}=e;const{t:d}=(0,n.$G)();return r?(0,l.jsxs)("div",{className:a.Z.create_btn_container,onClick:o,style:s,children:[i>0?(0,l.jsxs)("span",{children:[i," "]}):null,t]}):(0,l.jsxs)("div",{className:a.Z.create_btn_container,onClick:o,style:s,children:[i>0?(0,l.jsxs)("span",{children:[i," "]}):null,d(t)]})}},27331:(e,t,i)=>{i.d(t,{Z:()=>n});const n={getstarted:"Auth_getstarted__cbNHw",responsiveLogo:"Auth_responsiveLogo__snFcP",left_strip:"Auth_left_strip__wnJzF",getstarted_container:"Auth_getstarted_container__By+hK",right_strip:"Auth_right_strip__y3Y0B",getstarted_container_inner:"Auth_getstarted_container_inner__3WT-E",getstarted_container_info:"Auth_getstarted_container_info__5D52C",getstarted_container_child:"Auth_getstarted_container_child__V7guc",get_started_btn:"Auth_get_started_btn__YUAj7",auth_card_wrapper:"Auth_auth_card_wrapper__USase",auth_card_title:"Auth_auth_card_title__iIwLC",auth_card_subtitle:"Auth_auth_card_subtitle__ea0Mo",auth_login_tab_container:"Auth_auth_login_tab_container__XFDsY",auth_login_tab:"Auth_auth_login_tab__n0Zcv",auth_login_tab_active:"Auth_auth_login_tab_active__9PXLw",auth_login_form:"Auth_auth_login_form__hDZXU",auth_submit_btn:"Auth_auth_submit_btn__2SIhx",auth_forget_container:"Auth_auth_forget_container__x4VjT",auth_footer_container:"Auth_auth_footer_container__1IzfN",auth_forget_text:"Auth_auth_forget_text__Ai4M-",auth_privacy_and_policy:"Auth_auth_privacy_and_policy__9k-Yh",auth_privacy_and_policy_link:"Auth_auth_privacy_and_policy_link__vITqd",auth_otp_text:"Auth_auth_otp_text__Fydvd",auth_otp_resend:"Auth_auth_otp_resend__kSse8",aea_card:"Auth_aea_card__R8hGx",aea_card_inner:"Auth_aea_card_inner__6Jxtv",auth_forgot_username:"Auth_auth_forgot_username__PWIsb",auth_create_container:"Auth_auth_create_container__EqgUx",create_profile_label:"Auth_create_profile_label__OMd8n",institute_type_container:"Auth_institute_type_container__A++LP",institute_type_card:"Auth_institute_type_card__ZPcBJ",auth_delete_container:"Auth_auth_delete_container__aiCmZ"}},80476:(e,t,i)=>{i.d(t,{Z:()=>n});const n={btn_wrapper:"Button_btn_wrapper__ihT7O",btn_container:"Button_btn_container__OaH2t",create_btn_container:"Button_create_btn_container__JuZrx",upload_excel_file:"Button_upload_excel_file__a7d0K",set_btn_container:"Button_set_btn_container__RvfRG",ccb_button:"Button_ccb_button__Mjv4T"}}}]);
//# sourceMappingURL=19568.4f817290.chunk.js.map