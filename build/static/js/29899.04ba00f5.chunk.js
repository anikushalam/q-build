"use strict";(self.webpackChunkmithkal_qviple=self.webpackChunkmithkal_qviple||[]).push([[29899],{29899:function(t,n,e){e.d(n,{M6:function(){return Et},N:function(){return Gt},$w:function(){return wt},BG:function(){return Ot},GF:function(){return jt},Ny:function(){return Lt},zB:function(){return Wt},YW:function(){return Xt},jj:function(){return xt},Sj:function(){return Yt},G2:function(){return Jt},iA:function(){return tn},CO:function(){return Ht},UG:function(){return kt},Rl:function(){return rn},AZ:function(){return an},Vz:function(){return on},lL:function(){return un},y5:function(){return en},o:function(){return nn},mG:function(){return zt},rU:function(){return Dt},ej:function(){return _t},Al:function(){return Kt},XA:function(){return Vt},E8:function(){return $t},rf:function(){return Qt},Ct:function(){return Nt},L0:function(){return Tt},OM:function(){return Ft},P3:function(){return Bt},oU:function(){return Rt},yt:function(){return Ct}});var u=e(29439),i=e(69721),r=e(93433),o=e(94811),a="/api/v1",c="/api/v1/landing",d=function(t,n){return t.mutation({query:function(t){return{url:"".concat(a,"/extra/").concat(t.id,"/privacy/institute/feature"),method:"".concat(n),body:t.privacy}}})},s=function(t,n){return t.mutation({query:function(t){return{url:"".concat(a,"/ins/").concat(t.id,"/recovery-mail"),method:n,body:t.mail}}})},f=function(t,n){return t.mutation({query:function(t){return{url:"".concat(a,"/ins/phone/info/").concat(t.id),method:n,body:t.phone}}})},y=function(t){return t.mutation({query:function(t){return{url:"".concat(a,"/user/").concat(t.id,"/deactivate/account"),method:"POST",body:t.passwordData}}})},l=function(t){return t.query({query:function(t){return{url:"".concat(a,"/user/").concat(t,"/referals/q-coins"),method:"GET"}}})},p=function(t){return t.query({query:function(t){return"".concat(a,"/pay/history/by?uid=").concat(t.uid,"&page=").concat(t.page,"&limit=").concat(t.limit,"&filter=").concat(t.filter)}})},m=function(t){return t.query({query:function(t){return"".concat(a,"/pay/one/").concat(t)}})},v=function(t,n){return t.mutation({query:function(t){return{url:"".concat(a,"/extra/").concat(t.id,"/update/notification/user"),method:n,body:t.settingNotifyData}}})},I=function(t,n){return t.mutation({query:function(t){return{url:"".concat(a,"/extra/").concat(t.id,"/privacy/feature"),method:n,body:t.settingPrivacyData}}})},q=function(t,n){return t.mutation({query:function(t){return{url:"".concat(a,"/landing/").concat(t.id,"/website/looks"),method:n,body:t.updateLooks}}})},b=function(t,n){return t.mutation({query:function(t){return{url:"".concat(a,"/landing/").concat(t.id,"/website/active/tabs"),method:n,body:t.updateTab}}})},g=function(t){return t.query({query:function(t){return"".concat(a,"/landing/").concat(t,"/one/web/profile")}})},h=function(t,n){return t.mutation({query:function(t){return{url:"".concat(a,"/landing/").concat(t.id,"/website/contacts"),method:n,body:t.updateContact}}})},S=function(t){return t.query({query:function(t){return"".concat(a,"/site/institute/").concat(t,"/opener")}})},U=function(t,n){return t.mutation({query:function(t){return{url:"".concat(a,"/site/institute/").concat(t.id,"/opener"),method:n,body:t.updateSiteOpener}}})},M=function(t,n){return t.mutation({query:function(t){return{url:"".concat(a,"/site/institute/").concat(t.id,"/opener"),method:n,body:t.updateSiteOpener}}})},A=function(t,n){return t.mutation({query:function(t){return{url:"".concat(a,"/ins/").concat(t.id,"/select/merchant/query"),method:"".concat(n),body:t.formSetting}}})},Z=function(t,n){return t.mutation({query:function(t){return{url:"".concat(c,"/").concat(t.id,"/new/academic/section/query"),method:n,body:t.updateSiteInfo}}})},P=function(t,n){return t.mutation({query:function(t){return{url:"".concat(c,"/").concat(t.aid,"/exist/academic/section/query"),method:n,body:t.updateSiteInfo}}})},k=function(t){return t.query({query:function(t){return"".concat(c,"/").concat(t,"/academic/section/query")}})},G=function(t,n){return t.mutation({query:function(t){return{url:"".concat(c,"/").concat(t.id,"/new/nss/query"),method:n,body:t.updateSiteInfo}}})},w=function(t,n){return t.mutation({query:function(t){return{url:"".concat(c,"/").concat(t.nid,"/exist/nss/query"),method:n,body:t.updateSiteInfo}}})},O=function(t){return t.query({query:function(t){return"".concat(c,"/").concat(t,"/nss/query")}})},Q=function(t){return t.query({query:function(t){return"".concat(c,"/").concat(t,"/facilities/query")}})},N=function(t,n){return t.mutation({query:function(t){return{url:"".concat(c,"/").concat(t.id,"/new/facilities/query"),method:n,body:t.updateSiteInfo}}})},T=function(t,n){return t.mutation({query:function(t){return{url:"".concat(c,"/").concat(t.fid,"/edit/facilities/query"),method:n,body:t.updateSiteInfo}}})},R=function(t){return t.mutation({query:function(t){return{url:"".concat("/api/v2","/user/").concat(t.id,"/destroy/account/query?valid_pass=").concat(null===t||void 0===t?void 0:t.valid_pass),method:"DELETE"}}})},C=function(t){return t.mutation({query:function(t){return{url:"/api/v1/landing/".concat(t.id,"/home/opener/query"),method:o.a4,body:t.bodyParameter}}})},B=function(t){return t.mutation({query:function(t){return{url:"/api/v1/landing/".concat(t.id,"/one/").concat(null===t||void 0===t?void 0:t.hid,"/home/opener/query"),method:o.Q0,body:t.bodyParameter}}})},F=function(t){return t.mutation({query:function(t){return{url:"/api/v1/landing/".concat(t.id,"/testimonials/query"),method:o.a4,body:t.bodyParameter}}})},x=function(t){return t.mutation({query:function(t){return{url:"/api/v1/landing/".concat(t.id,"/one/").concat(t.tid,"/testimonials/query"),method:o.Q0,body:t.bodyParameter}}})},K=function(t){return t.mutation({query:function(t){return{url:"/api/v1/landing/".concat(t.id,"/iso/certificate/query"),method:o.a4,body:t.bodyParameter}}})},H=function(t){return t.mutation({query:function(t){return{url:"/api/v1/landing/".concat(t.lcid,"/toggle/query"),method:o.Q0,body:t.bodyParameter}}})},D=function(t){return t.mutation({query:function(t){return{url:"/api/v1/landing/".concat(t.lcid,"/founder/desk/post"),method:o.a4,body:t.bodyParameter}}})},j=function(t){return t.mutation({query:function(t){return{url:"/api/v1/landing/".concat(t.lcid,"/accreditation/desk/post"),method:o.a4,body:t.bodyParameter}}})},L=function(t){return t.mutation({query:function(t){return{url:"/api/v1/landing/".concat(t.lcid,"/gallery/desk/post"),method:o.a4,body:t.bodyParameter}}})},E=function(t){return t.query({query:function(t){return"/api/v1/landing/".concat(t.lcid,"/all/gallery/desk/query?page=").concat(t.page,"&limit=").concat(t.limit,"&category=").concat(t.category)},serializeQueryArgs:function(t){return t.endpointName},transformResponse:function(t,n,e){return null!==e&&void 0!==e&&e.search?{search:!0,list:null===t||void 0===t?void 0:t.subject_master}:{page:null===e||void 0===e?void 0:e.page,list:null===t||void 0===t?void 0:t.subject_master}},merge:function(t,n){var e;return null!==n&&void 0!==n&&n.search||1===(null===n||void 0===n?void 0:n.page)?n:void(null===t||void 0===t||null===(e=t.list)||void 0===e||e.push.apply(e,(0,r.Z)(null===n||void 0===n?void 0:n.list)))},forceRefetch:function(t){return t.currentArg!==t.previousArg}})},_=function(t){return t.mutation({query:function(t){return{url:"/api/v1/landing/".concat(t.lcid,"/affiliation/post"),method:o.Q0,body:t.bodyParameter}}})},W=function(t){return t.mutation({query:function(t){return{url:"/api/v1/landing/".concat(t.lcid,"/about/society/post"),method:o.Q0,body:t.bodyParameter}}})},z=e(69234).j.injectEndpoints({endpoints:function(t){return{institutePrivacyUpdate:d(t,i.K7),addRecoveryMail:s(t,i.lx),addRecoveryPhoneNumber:f(t,i.lx),deactivateUserAccount:y(t),getUserCoins:l(t),userPaymentHistory:p(t),paymentHistoryDetail:m(t),userSettingNotification:v(t,i.K7),userSettingPrivacy:I(t,i.K7),websiteLookUpdateByInstitute:q(t,i.K7),websiteTabUpdateByInstitute:b(t,i.K7),websiteInfoGetByInstitute:g(t),websiteContactUpdateByInstitute:h(t,i.K7),getInstituteSiteOpener:S(t),updateInstituteSiteOpener:U(t,i.K7),institutePaymentToggle:A(t,i.K7),trashInstituteSiteOpener:M(t,i.SR),academicSiteInfo:Z(t,i.lx),updateAcademicSiteInfo:P(t,i.K7),getAcademicModuleInfo:k(t),nssSiteInfo:G(t,i.lx),updateNssSiteInfo:w(t,i.K7),getNssModuleInfo:O(t),getFacilitiesModuleInfo:Q(t),facilitiesSiteInfo:N(t,i.lx),updateFacilitiesSiteInfo:T(t,i.K7),userDeleteAccountFromQviple:R(t,i.lx),instituteAddHomeOpener:C(t),instituteAddTestitmonial:F(t),instituteUpdateTestitmonial:x(t),instituteUpdateHomeOpener:B(t),instituteUpdateIsoCertificate:K(t),instituteUpdateLandingControle:H(t),instituteUpdateHomeFounders:D(t),instituteUpdateAccreditation:j(t),instituteUpdateGallaryImage:L(t),instituteAllGallaryImage:E(t),instituteUpdateAffiliation:_(t),instituteUpdateSociatyTrust:W(t)}}}),V=z.useInstitutePrivacyUpdateMutation,X=z.useAddRecoveryMailMutation,Y=z.useAddRecoveryPhoneNumberMutation,$=z.useDeactivateUserAccountMutation,J=(z.useGetUserCoinsQuery,z.useUserPaymentHistoryQuery),tt=(z.usePaymentHistoryDetailQuery,z.useUserSettingNotificationMutation),nt=z.useUserSettingPrivacyMutation,et=z.useWebsiteLookUpdateByInstituteMutation,ut=z.useWebsiteTabUpdateByInstituteMutation,it=z.useWebsiteInfoGetByInstituteQuery,rt=z.useWebsiteContactUpdateByInstituteMutation,ot=z.useGetInstituteSiteOpenerQuery,at=z.useUpdateInstituteSiteOpenerMutation,ct=z.useInstitutePaymentToggleMutation,dt=z.useTrashInstituteSiteOpenerMutation,st=z.useAcademicSiteInfoMutation,ft=z.useGetAcademicModuleInfoQuery,yt=z.useUpdateAcademicSiteInfoMutation,lt=z.useNssSiteInfoMutation,pt=z.useUpdateNssSiteInfoMutation,mt=z.useGetNssModuleInfoQuery,vt=z.useFacilitiesSiteInfoMutation,It=z.useGetFacilitiesModuleInfoQuery,qt=z.useUpdateFacilitiesSiteInfoMutation,bt=z.useUserDeleteAccountFromQvipleMutation,gt=z.useInstituteAddHomeOpenerMutation,ht=z.useInstituteAddTestitmonialMutation,St=z.useInstituteUpdateTestitmonialMutation,Ut=(z.useInstituteUpdateHomeOpenerMutation,z.useInstituteUpdateIsoCertificateMutation),Mt=(z.useInstituteUpdateLandingControleMutation,z.useInstituteUpdateHomeFoundersMutation),At=z.useInstituteUpdateAccreditationMutation,Zt=z.useInstituteUpdateGallaryImageMutation,Pt=(z.useInstituteAllGallaryImageQuery,z.useInstituteUpdateAffiliationMutation),kt=(z.useInstituteUpdateSociatyTrustMutation,function(){var t=V();return[(0,u.Z)(t,1)[0]]}),Gt=function(){var t=X();return[(0,u.Z)(t,1)[0]]},wt=function(){var t=Y();return[(0,u.Z)(t,1)[0]]},Ot=function(){var t=$();return[(0,u.Z)(t,1)[0]]},Qt=function(t){var n=J(t.data,{skip:t.skip});return{userPayment:n.data,userPaymentRefetch:n.refetch}},Nt=function(){var t=tt();return[(0,u.Z)(t,1)[0]]},Tt=function(){var t=nt();return[(0,u.Z)(t,1)[0]]},Rt=function(){var t=et();return[(0,u.Z)(t,1)[0]]},Ct=function(){var t=ut();return[(0,u.Z)(t,1)[0]]},Bt=function(t){var n=it(t.id,{skip:t.skip});return{websiteInfoGetByInstitute:n.data,websiteInfoGetByInstituteRefetch:n.refetch}},Ft=function(){var t=rt();return[(0,u.Z)(t,1)[0]]},xt=function(t){var n=ot(t.id,{skip:t.skip});return{getInstituteSiteOpener:n.data,getInstituteSiteOpenerRefetch:n.refetch}},Kt=function(){var t=at();return[(0,u.Z)(t,1)[0]]},Ht=function(){var t=ct();return[(0,u.Z)(t,1)[0]]},Dt=function(){var t=dt();return[(0,u.Z)(t,1)[0]]},jt=function(){var t=vt();return[(0,u.Z)(t,1)[0]]},Lt=function(){var t=qt();return[(0,u.Z)(t,1)[0]]},Et=function(){var t=st();return[(0,u.Z)(t,1)[0]]},_t=function(){var t=yt();return[(0,u.Z)(t,1)[0]]},Wt=function(t){var n=ft(t.aid,{skip:t.skip});return{getAcademicSiteInfo:n.data,getAcademicSiteInfoRefetch:n.refetch}},zt=function(){var t=lt();return[(0,u.Z)(t,1)[0]]},Vt=function(){var t=pt();return[(0,u.Z)(t,1)[0]]},Xt=function(t){var n=It(t.fid,{skip:t.skip});return{getFacilitiesSiteInfo:n.data,getFacilitiesSiteInfoRefetch:n.refetch}},Yt=function(t){var n=mt(t.nid,{skip:t.skip});return{getNssSiteInfo:n.data,getNssSiteInfoRefetch:n.refetch}},$t=function(){var t=bt();return[(0,u.Z)(t,1)[0]]},Jt=function(){var t=gt();return[(0,u.Z)(t,1)[0]]},tn=function(){var t=ht();return[(0,u.Z)(t,1)[0]]},nn=function(){var t=St();return[(0,u.Z)(t,1)[0]]},en=function(){var t=Ut();return[(0,u.Z)(t,1)[0]]},un=function(){var t=Mt();return[(0,u.Z)(t,1)[0]]},rn=function(){var t=At();return[(0,u.Z)(t,1)[0]]},on=function(){var t=Zt();return[(0,u.Z)(t,1)[0]]},an=function(){var t=Pt();return[(0,u.Z)(t,1)[0]]}}}]);
//# sourceMappingURL=29899.04ba00f5.chunk.js.map