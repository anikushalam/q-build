(self.webpackChunkmithkal_qviple=self.webpackChunkmithkal_qviple||[]).push([[990],{96873:function(t,e,n){"use strict";n(72791);var r=n(27331),u=n(98684),a=n(80184);e.Z=function(t){var e=t.children;return(0,a.jsxs)("div",{className:r.Z.getstarted,children:[(0,a.jsx)("div",{className:r.Z.left_strip}),(0,a.jsxs)("div",{className:r.Z.getstarted_container,children:[(0,a.jsx)("div",{className:r.Z.right_strip}),(0,a.jsxs)("div",{className:r.Z.getstarted_container_inner,children:[(0,a.jsxs)("div",{className:r.Z.getstarted_container_info,children:[(0,a.jsx)("a",{href:"https://dashboard.qviple.com/",target:"_blank",rel:"noopener noreferrer",children:(0,a.jsx)("h4",{children:"Qviple"})}),(0,a.jsxs)("ul",{children:[(0,a.jsxs)("li",{children:[(0,a.jsx)("a",{href:"https://dashboard.qviple.com/",target:"_blank",rel:"noopener noreferrer",children:(0,a.jsxs)("h6",{children:[(0,a.jsx)("img",{src:"".concat(u.nj,"/auth-easy.svg"),alt:"auth cost"}),"Easy-to-Use Tools"]})}),(0,a.jsx)("p",{children:"User-friendly interface, even beginners can easily navigate and manage tasks from any device, be it a phone, laptop, or desktop. Plus, enjoy the freedom of accessing Qviple anytime, anywhere, with minimal data usage."})]}),(0,a.jsxs)("li",{children:[(0,a.jsx)("a",{href:"https://dashboard.qviple.com/",target:"_blank",rel:"noopener noreferrer",children:(0,a.jsxs)("h6",{children:[(0,a.jsx)("img",{src:"".concat(u.nj,"/auth-trust.svg"),alt:"auth cost"}),"Trustworthy and Secure"]})}),(0,a.jsx)("p",{children:"Choose Qviple for a trustworthy, secure, and confidential school management experience. Partner with us and unlock the full potential of your school's data while maintaining the highest level of security."})]}),(0,a.jsxs)("li",{children:[(0,a.jsx)("a",{href:"https://dashboard.qviple.com/",target:"_blank",rel:"noopener noreferrer",children:(0,a.jsxs)("h6",{children:[(0,a.jsx)("img",{src:"".concat(u.nj,"/auth-cost.svg"),alt:"auth cost"}),"Cost-Effective Scalable Pricing Options"]})}),(0,a.jsx)("p",{children:"Qviple offers flexible and scalable pricing options to accommodate Institute of all sizes."})]})]}),(0,a.jsx)("div",{className:r.Z.get_started_btn,children:(0,a.jsx)("a",{href:"https://dashboard.qviple.com/",target:"_blank",rel:"noopener noreferrer",children:(0,a.jsx)("button",{children:"Get Started"})})})]}),(0,a.jsx)("div",{className:r.Z.getstarted_container_child,children:e})]})]})]})}},53982:function(t,e,n){"use strict";n.d(e,{KB:function(){return K},Dv:function(){return H},rY:function(){return G},bB:function(){return X},J9:function(){return z},xk:function(){return T},Ne:function(){return V},b5:function(){return J},OF:function(){return B},Dr:function(){return D},Pv:function(){return Q},d4:function(){return Y},gS:function(){return O},FL:function(){return E}});var r=n(29439),u=n(28328),a=n(94811),i=function(t){return t.mutation({query:function(t){return{url:"/all-images/onefile/web",method:a.Q0,body:t.fileUpload}}})},o=function(t){return t.query({query:function(t){return"/auth/username/search?u_name=".concat(t)}})},_=function(t){return t.query({query:function(t){return"/auth/email/check/redundant?email=".concat(t)}})},c=function(t){return t.mutation({query:function(t){return{url:"/auth/login",method:a.a4,body:t.login}}})},s=function(t){return t.mutation({query:function(t){return{url:"/auth/user-detail",method:a.a4,body:t}}})},h=function(t){return t.mutation({query:function(t){var e;return{url:"/auth/user-detail-verify/".concat(t.userPhoneNumber,"?u_name=").concat(null!==(e=null===t||void 0===t?void 0:t.u_name)&&void 0!==e?e:""),method:a.a4,body:t}}})},d=function(t){return t.mutation({query:function(t){return{url:"/auth/user/forgot",method:a.a4,body:t.forgot}}})},l=function(t){return t.mutation({query:function(t){return{url:"/auth/user/forgot/".concat(t.uid),method:a.a4,body:t.otp}}})},f=function(t){return t.mutation({query:function(t){return{url:"/auth/user/reset/password/".concat(t.uid),method:a.a4,body:t.password}}})},p=function(t,e){return t.mutation({query:function(t){return{url:"/auth/profile-creation/".concat(t.userPhoneNumber),method:a.a4,body:t.profileCreation}}})},m=function(t,e){return t.mutation({query:function(t){return{url:"/auth/create-user-password/".concat(t.uid),method:a.a4,body:t.password}}})},g=function(t,e){return t.mutation({query:function(t){return{url:"/auth/ins-detail",method:a.a4,body:t.phone}}})},v=function(t,e){return t.mutation({query:function(t){return{url:"/auth/ins-detail-verify/".concat(t.insPhoneNumber),method:a.a4,body:t.verify}}})},y=function(t,e){return t.mutation({query:function(t){return{url:"/auth/ins/register",method:a.a4,body:t.profileCreation}}})},b=function(t,e){return t.mutation({query:function(t){return{url:"/auth/ins/create-password/".concat(t.id),method:a.a4,body:t.password}}})},A=function(t){return t.mutation({query:function(t){return{url:"/auth/direct/confirm/join/".concat(t.phoneNumber,"/apply/").concat(t.aid,"?existingUser=").concat(t.uid),method:a.a4,body:t.addStudent}}})},x=u.i.injectEndpoints({endpoints:function(t){return{fileUpload:i(t),authUniqueUsername:o(t),authUniqueEmail:_(t),authLogin:c(t),authUserNumber:s(t),authUserNumberVerify:h(t),authUserForget:d(t),authUserForgetOtp:l(t),authUserSetPassword:f(t),authUserCreateAccount:p(t),authUserCreatePassword:m(t),authInstituteNumber:g(t),authInstituteNumberVerify:v(t),authInstituteCreateAccount:y(t),authInstituteCreatePassword:b(t),authDirectJoinFormAdmissionApplication:A(t)}}}),j=x.useFileUploadMutation,q=(x.useAuthUniqueUsernameQuery,x.useAuthUniqueEmailQuery,x.useAuthLoginMutation),Z=x.useAuthUserNumberMutation,U=x.useAuthUserNumberVerifyMutation,w=x.useAuthUserForgetMutation,N=x.useAuthUserForgetOtpMutation,k=x.useAuthUserSetPasswordMutation,P=x.useAuthUserCreateAccountMutation,S=x.useAuthUserCreatePasswordMutation,C=x.useAuthInstituteNumberMutation,L=x.useAuthInstituteNumberVerifyMutation,M=x.useAuthInstituteCreateAccountMutation,I=x.useAuthInstituteCreatePasswordMutation,F=x.useAuthDirectJoinFormAdmissionApplicationMutation,E=function(){var t=j();return[(0,r.Z)(t,1)[0]]},T=function(){var t=q();return[(0,r.Z)(t,1)[0]]},Q=function(){var t=Z();return[(0,r.Z)(t,1)[0]]},Y=function(){var t=U();return[(0,r.Z)(t,1)[0]]},B=function(){var t=w();return[(0,r.Z)(t,1)[0]]},D=function(){var t=N();return[(0,r.Z)(t,1)[0]]},O=function(){var t=k();return[(0,r.Z)(t,1)[0]]},V=function(){var t=P();return[(0,r.Z)(t,1)[0]]},J=function(){var t=S();return[(0,r.Z)(t,1)[0]]},X=function(){var t=C();return[(0,r.Z)(t,1)[0]]},z=function(){var t=L();return[(0,r.Z)(t,1)[0]]},H=function(){var t=M();return[(0,r.Z)(t,1)[0]]},G=function(){var t=I();return[(0,r.Z)(t,1)[0]]},K=function(){var t=F();return[(0,r.Z)(t,1)[0]]}},79992:function(t,e,n){"use strict";n.d(e,{ZH:function(){return u}});var r=n(89704),u=function(t){var e=r.AES.decrypt(t,"QVIPLESAASPLATFORM");return JSON.parse(e.toString(r.enc.Utf8))}},94811:function(t,e,n){"use strict";n.d(e,{Q0:function(){return u},a4:function(){return r},yY:function(){return a}});var r="POST",u="PATCH",a="DELETE"},19335:function(t,e,n){"use strict";n.d(e,{Z:function(){return _}});var r=n(1413),u=n(27331),a=n(63244),i=n(80184),o=function(t){var e=t.customStyle;return(0,i.jsx)("div",{className:a.Z.circle_loading,style:e})},_=function(t){var e=t.type,n=t.buttonText,a=t.disabled,_=t.customStyleButton,c=t.customStyleButtonText;return(0,i.jsxs)("button",{type:e,disabled:a,style:_,className:u.Z.auth_submit_btn,children:[(0,i.jsx)("span",{style:(0,r.Z)({},c),children:n}),a&&(0,i.jsx)(o,{})]})}},27331:function(t,e){"use strict";e.Z={getstarted:"Auth_getstarted__cbNHw",responsiveLogo:"Auth_responsiveLogo__snFcP",left_strip:"Auth_left_strip__wnJzF",getstarted_container:"Auth_getstarted_container__By+hK",right_strip:"Auth_right_strip__y3Y0B",getstarted_container_inner:"Auth_getstarted_container_inner__3WT-E",getstarted_container_info:"Auth_getstarted_container_info__5D52C",getstarted_container_child:"Auth_getstarted_container_child__V7guc",get_started_btn:"Auth_get_started_btn__YUAj7",auth_card_wrapper:"Auth_auth_card_wrapper__USase",auth_card_title:"Auth_auth_card_title__iIwLC",auth_card_subtitle:"Auth_auth_card_subtitle__ea0Mo",auth_login_tab_container:"Auth_auth_login_tab_container__XFDsY",auth_login_tab:"Auth_auth_login_tab__n0Zcv",auth_login_tab_active:"Auth_auth_login_tab_active__9PXLw",auth_login_form:"Auth_auth_login_form__hDZXU",auth_submit_btn:"Auth_auth_submit_btn__2SIhx",auth_forget_container:"Auth_auth_forget_container__x4VjT",auth_footer_container:"Auth_auth_footer_container__1IzfN",auth_forget_text:"Auth_auth_forget_text__Ai4M-",auth_privacy_and_policy:"Auth_auth_privacy_and_policy__9k-Yh",auth_privacy_and_policy_link:"Auth_auth_privacy_and_policy_link__vITqd",auth_otp_text:"Auth_auth_otp_text__Fydvd",auth_otp_resend:"Auth_auth_otp_resend__kSse8",aea_card:"Auth_aea_card__R8hGx",aea_card_inner:"Auth_aea_card_inner__6Jxtv",auth_forgot_username:"Auth_auth_forgot_username__PWIsb",auth_create_container:"Auth_auth_create_container__EqgUx",create_profile_label:"Auth_create_profile_label__OMd8n",institute_type_container:"Auth_institute_type_container__A++LP",institute_type_card:"Auth_institute_type_card__ZPcBJ",auth_delete_container:"Auth_auth_delete_container__aiCmZ"}},63244:function(t,e){"use strict";e.Z={qviple_loader_backdrop:"Loader_qviple_loader_backdrop__ScdYl",qviple_loader_container:"Loader_qviple_loader_container__SXQ9Y",qviple_loader_rotation:"Loader_qviple_loader_rotation__ltsgT",qviple_loader_rotation_animation:"Loader_qviple_loader_rotation_animation__gy3+j",q_loading:"Loader_q_loading__bwe2c",circle_loading:"Loader_circle_loading__m+ptB",rotate_animation:"Loader_rotate_animation__IV2sY"}},42480:function(){}}]);
//# sourceMappingURL=990.7643357c.chunk.js.map