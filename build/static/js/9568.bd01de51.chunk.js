"use strict";(self.webpackChunkmithkal_qviple=self.webpackChunkmithkal_qviple||[]).push([[9568],{51317:function(t,e,a){var n=a(72791),_=a(27331),r=a(39230),i=a(93638),s=a(80184),l=function(t){var e=t.title,a=t.subTitle,n=t.titleStyle,l=t.subTitleStyle,c=t.isCreate,o=t.onCreate,h=t.children,u=(0,r.$G)().t;return(0,s.jsxs)("div",{className:_.Z.auth_card_wrapper,children:[c?(0,s.jsxs)("div",{className:_.Z.auth_create_container,children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("h6",{className:_.Z.auth_card_title,style:n,children:u(e||"hello")}),(0,s.jsx)("h6",{className:_.Z.auth_card_subtitle,style:l,children:a||u("welcome_to_qviple")})]}),(0,s.jsx)(i.Z,{label:"create_new_account",customStyle:{margin:"0"},onAction:o})]}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h6",{className:_.Z.auth_card_title,style:n,children:u(e||"hello")}),(0,s.jsx)("h6",{className:_.Z.auth_card_subtitle,style:l,children:a||u("welcome_to_qviple")})]}),h]})};e.Z=(0,n.memo)(l)},19568:function(t,e,a){a.r(e),a.d(e,{default:function(){return d}});var n=a(39230),_=a(27331),r=a(51317),i=a(96873),s=(a(72791),a(98684)),l=a(1095),c=a(59574),o=a(16871),h=a(80184),u=function(t){var e,a,n,r,i,u,d=t.account,p=(0,o.TH)(),v=(0,c.f)().existingAccountLogin;return(0,h.jsxs)("div",{className:_.Z.aea_card,onClick:function(){var t;v(d,null===p||void 0===p||null===(t=p.state)||void 0===t?void 0:t.accessFrom)},children:[(0,h.jsx)("img",{src:null!==d&&void 0!==d&&null!==(e=d.user)&&void 0!==e&&e.profilePhoto?"".concat(l.yI,"/").concat(null===d||void 0===d||null===(a=d.user)||void 0===a?void 0:a.profilePhoto):"".concat(s.p3,"/feed-user-avatar.svg"),alt:"avatar icon"}),(0,h.jsxs)("div",{className:_.Z.aea_card_inner,children:[(0,h.jsx)("h6",{children:null!==(n=null===d||void 0===d||null===(r=d.user)||void 0===r?void 0:r.userLegalName)&&void 0!==n?n:""}),(0,h.jsx)("p",{children:null!==(i=null===d||void 0===d||null===(u=d.user)||void 0===u?void 0:u.username)&&void 0!==i?i:""})]})]})},d=function(){var t,e,a=(0,n.$G)().t,s=(0,o.TH)(),l=(0,o.s0)();return(0,h.jsx)(i.Z,{children:(0,h.jsx)(r.Z,{title:"existing_account",subTitle:a("please_select_existing_account"),subTitleStyle:{fontSize:"0.8rem"},titleStyle:{fontSize:"1rem"},isCreate:!0,onCreate:function(){l("/user/create/account",{state:s.state})},children:(0,h.jsx)("div",{className:_.Z.auth_login_form,style:{marginTop:"1rem"},children:null===(t=s.state)||void 0===t||null===(e=t.accounts)||void 0===e?void 0:e.map((function(t){return(0,h.jsx)(u,{account:t},null===t||void 0===t?void 0:t._id)}))})})})}},96873:function(t,e,a){a(72791);var n=a(27331),_=a(98684),r=a(80184);e.Z=function(t){var e=t.children;return(0,r.jsxs)("div",{className:n.Z.getstarted,children:[(0,r.jsx)("div",{className:n.Z.left_strip}),(0,r.jsxs)("div",{className:n.Z.getstarted_container,children:[(0,r.jsx)("div",{className:n.Z.right_strip}),(0,r.jsxs)("div",{className:n.Z.getstarted_container_inner,children:[(0,r.jsxs)("div",{className:n.Z.getstarted_container_info,children:[(0,r.jsx)("a",{href:"https://dashboard.qviple.com/",target:"_blank",rel:"noopener noreferrer",children:(0,r.jsx)("h4",{children:"Qviple"})}),(0,r.jsxs)("ul",{children:[(0,r.jsxs)("li",{children:[(0,r.jsx)("a",{href:"https://dashboard.qviple.com/",target:"_blank",rel:"noopener noreferrer",children:(0,r.jsxs)("h6",{children:[(0,r.jsx)("img",{src:"".concat(_.nj,"/auth-easy.svg"),alt:"auth cost"}),"Easy-to-Use Tools"]})}),(0,r.jsx)("p",{children:"User-friendly interface, even beginners can easily navigate and manage tasks from any device, be it a phone, laptop, or desktop. Plus, enjoy the freedom of accessing Qviple anytime, anywhere, with minimal data usage."})]}),(0,r.jsxs)("li",{children:[(0,r.jsx)("a",{href:"https://dashboard.qviple.com/",target:"_blank",rel:"noopener noreferrer",children:(0,r.jsxs)("h6",{children:[(0,r.jsx)("img",{src:"".concat(_.nj,"/auth-trust.svg"),alt:"auth cost"}),"Trustworthy and Secure"]})}),(0,r.jsx)("p",{children:"Choose Qviple for a trustworthy, secure, and confidential school management experience. Partner with us and unlock the full potential of your school's data while maintaining the highest level of security."})]}),(0,r.jsxs)("li",{children:[(0,r.jsx)("a",{href:"https://dashboard.qviple.com/",target:"_blank",rel:"noopener noreferrer",children:(0,r.jsxs)("h6",{children:[(0,r.jsx)("img",{src:"".concat(_.nj,"/auth-cost.svg"),alt:"auth cost"}),"Cost-Effective Scalable Pricing Options"]})}),(0,r.jsx)("p",{children:"Qviple offers flexible and scalable pricing options to accommodate Institute of all sizes."})]})]}),(0,r.jsx)("div",{className:n.Z.get_started_btn,children:(0,r.jsx)("a",{href:"https://dashboard.qviple.com/",target:"_blank",rel:"noopener noreferrer",children:(0,r.jsx)("button",{children:"Get Started"})})})]}),(0,r.jsx)("div",{className:n.Z.getstarted_container_child,children:e})]})]})]})}},93638:function(t,e,a){var n=a(39230),_=a(80476),r=a(80184);e.Z=function(t){var e=t.label,a=t.count,i=t.onAction,s=t.customStyle,l=t.isTranslate,c=(0,n.$G)().t;return l?(0,r.jsxs)("div",{className:_.Z.create_btn_container,onClick:i,style:s,children:[a>0?(0,r.jsxs)("span",{children:[a," "]}):null,e]}):(0,r.jsxs)("div",{className:_.Z.create_btn_container,onClick:i,style:s,children:[a>0?(0,r.jsxs)("span",{children:[a," "]}):null,c(e)]})}},27331:function(t,e){e.Z={getstarted:"Auth_getstarted__cbNHw",responsiveLogo:"Auth_responsiveLogo__snFcP",left_strip:"Auth_left_strip__wnJzF",getstarted_container:"Auth_getstarted_container__By+hK",right_strip:"Auth_right_strip__y3Y0B",getstarted_container_inner:"Auth_getstarted_container_inner__3WT-E",getstarted_container_info:"Auth_getstarted_container_info__5D52C",getstarted_container_child:"Auth_getstarted_container_child__V7guc",get_started_btn:"Auth_get_started_btn__YUAj7",auth_card_wrapper:"Auth_auth_card_wrapper__USase",auth_card_title:"Auth_auth_card_title__iIwLC",auth_card_subtitle:"Auth_auth_card_subtitle__ea0Mo",auth_login_tab_container:"Auth_auth_login_tab_container__XFDsY",auth_login_tab:"Auth_auth_login_tab__n0Zcv",auth_login_tab_active:"Auth_auth_login_tab_active__9PXLw",auth_login_form:"Auth_auth_login_form__hDZXU",auth_submit_btn:"Auth_auth_submit_btn__2SIhx",auth_forget_container:"Auth_auth_forget_container__x4VjT",auth_footer_container:"Auth_auth_footer_container__1IzfN",auth_forget_text:"Auth_auth_forget_text__Ai4M-",auth_privacy_and_policy:"Auth_auth_privacy_and_policy__9k-Yh",auth_privacy_and_policy_link:"Auth_auth_privacy_and_policy_link__vITqd",auth_otp_text:"Auth_auth_otp_text__Fydvd",auth_otp_resend:"Auth_auth_otp_resend__kSse8",aea_card:"Auth_aea_card__R8hGx",aea_card_inner:"Auth_aea_card_inner__6Jxtv",auth_forgot_username:"Auth_auth_forgot_username__PWIsb",auth_create_container:"Auth_auth_create_container__EqgUx",create_profile_label:"Auth_create_profile_label__OMd8n",institute_type_container:"Auth_institute_type_container__A++LP",institute_type_card:"Auth_institute_type_card__ZPcBJ",auth_delete_container:"Auth_auth_delete_container__aiCmZ"}},80476:function(t,e){e.Z={btn_wrapper:"Button_btn_wrapper__ihT7O",btn_container:"Button_btn_container__OaH2t",create_btn_container:"Button_create_btn_container__JuZrx",upload_excel_file:"Button_upload_excel_file__a7d0K",set_btn_container:"Button_set_btn_container__RvfRG"}}}]);
//# sourceMappingURL=9568.bd01de51.chunk.js.map