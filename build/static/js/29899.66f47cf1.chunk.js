"use strict";(self.webpackChunkmithkal_qviple=self.webpackChunkmithkal_qviple||[]).push([[29899],{29899:function(t,n,e){e.d(n,{M6:function(){return Sn},N:function(){return cn},$w:function(){return dn},BG:function(){return sn},GF:function(){return An},Ny:function(){return In},zB:function(){return Un},YW:function(){return Pn},jj:function(){return bn},Sj:function(){return kn},BQ:function(){return Bn},G2:function(){return Ln},wJ:function(){return xn},iA:function(){return Rn},CO:function(){return gn},UG:function(){return an},Rl:function(){return Nn},AZ:function(){return On},Vz:function(){return jn},lL:function(){return Gn},CM:function(){return Tn},y5:function(){return Cn},Nr:function(){return Fn},o:function(){return wn},mG:function(){return Hn},Ih:function(){return Yn},z1:function(){return Jn},g_:function(){return Vn},jh:function(){return $n},W9:function(){return te},zo:function(){return ne},YS:function(){return Dn},lX:function(){return Wn},aC:function(){return Xn},ww:function(){return _n},tn:function(){return En},y:function(){return Kn},A6:function(){return zn},rU:function(){return hn},ej:function(){return Mn},Al:function(){return qn},XA:function(){return Zn},E8:function(){return Qn},rf:function(){return fn},Ct:function(){return yn},L0:function(){return ln},OM:function(){return vn},P3:function(){return pn},yt:function(){return mn}});var u=e(29439),i=e(69721),r=e(93433),o=e(94811),a="/api/v1",c="/api/v1/landing",d=function(t,n){return t.mutation({query:function(t){return{url:"".concat(a,"/extra/").concat(t.id,"/privacy/institute/feature"),method:"".concat(n),body:t.privacy}}})},s=function(t,n){return t.mutation({query:function(t){return{url:"".concat(a,"/ins/").concat(t.id,"/recovery-mail"),method:n,body:t.mail}}})},f=function(t,n){return t.mutation({query:function(t){return{url:"".concat(a,"/ins/phone/info/").concat(t.id),method:n,body:t.phone}}})},y=function(t){return t.mutation({query:function(t){return{url:"".concat(a,"/user/").concat(t.id,"/deactivate/account"),method:"POST",body:t.passwordData}}})},l=function(t){return t.query({query:function(t){return{url:"".concat(a,"/user/").concat(t,"/referals/q-coins"),method:"GET"}}})},m=function(t){return t.query({query:function(t){return"".concat(a,"/pay/history/by?uid=").concat(t.uid,"&page=").concat(t.page,"&limit=").concat(t.limit,"&filter=").concat(t.filter)}})},p=function(t){return t.query({query:function(t){return"".concat(a,"/pay/one/").concat(t)}})},v=function(t,n){return t.mutation({query:function(t){return{url:"".concat(a,"/extra/").concat(t.id,"/update/notification/user"),method:n,body:t.settingNotifyData}}})},b=function(t,n){return t.mutation({query:function(t){return{url:"".concat(a,"/extra/").concat(t.id,"/privacy/feature"),method:n,body:t.settingPrivacyData}}})},q=function(t,n){return t.mutation({query:function(t){return{url:"".concat(a,"/landing/").concat(t.id,"/website/looks"),method:n,body:t.updateLooks}}})},g=function(t,n){return t.mutation({query:function(t){return{url:"".concat(a,"/landing/").concat(t.id,"/website/active/tabs"),method:n,body:t.updateTab}}})},h=function(t){return t.query({query:function(t){return"".concat(a,"/landing/").concat(t,"/one/web/profile")}})},A=function(t,n){return t.mutation({query:function(t){return{url:"".concat(a,"/landing/").concat(t.id,"/website/contacts"),method:n,body:t.updateContact}}})},I=function(t){return t.query({query:function(t){return"".concat(a,"/site/institute/").concat(t,"/opener")}})},S=function(t,n){return t.mutation({query:function(t){return{url:"".concat(a,"/site/institute/").concat(t.id,"/opener"),method:n,body:t.updateSiteOpener}}})},M=function(t,n){return t.mutation({query:function(t){return{url:"".concat(a,"/site/institute/").concat(t.id,"/opener"),method:n,body:t.updateSiteOpener}}})},U=function(t,n){return t.mutation({query:function(t){return{url:"".concat(a,"/ins/").concat(t.id,"/select/merchant/query"),method:"".concat(n),body:t.formSetting}}})},H=function(t,n){return t.mutation({query:function(t){return{url:"".concat(c,"/").concat(t.id,"/new/academic/section/query"),method:n,body:t.updateSiteInfo}}})},Z=function(t,n){return t.mutation({query:function(t){return{url:"".concat(c,"/").concat(t.aid,"/exist/academic/section/query"),method:n,body:t.updateSiteInfo}}})},P=function(t){return t.query({query:function(t){return"".concat(c,"/").concat(t,"/academic/section/query")}})},k=function(t,n){return t.mutation({query:function(t){return{url:"".concat(c,"/").concat(t.id,"/new/nss/query"),method:n,body:t.updateSiteInfo}}})},Q=function(t,n){return t.mutation({query:function(t){return{url:"".concat(c,"/").concat(t.nid,"/exist/nss/query"),method:n,body:t.updateSiteInfo}}})},L=function(t){return t.query({query:function(t){return"".concat(c,"/").concat(t,"/nss/query")}})},R=function(t){return t.query({query:function(t){return"".concat(c,"/").concat(t,"/facilities/query")}})},w=function(t,n){return t.mutation({query:function(t){return{url:"".concat(c,"/").concat(t.id,"/new/facilities/query"),method:n,body:t.updateSiteInfo}}})},T=function(t,n){return t.mutation({query:function(t){return{url:"".concat(c,"/").concat(t.fid,"/edit/facilities/query"),method:n,body:t.updateSiteInfo}}})},C=function(t){return t.mutation({query:function(t){return{url:"".concat("/api/v2","/user/").concat(t.id,"/destroy/account/query?valid_pass=").concat(null===t||void 0===t?void 0:t.valid_pass),method:"DELETE"}}})},G=function(t){return t.mutation({query:function(t){return{url:"/api/v1/landing/".concat(t.id,"/home/opener/query"),method:o.a4,body:t.bodyParameter}}})},N=function(t){return t.mutation({query:function(t){return{url:"/api/v1/landing/".concat(t.id,"/one/").concat(null===t||void 0===t?void 0:t.hid,"/home/opener/query"),method:o.Q0,body:t.bodyParameter}}})},j=function(t){return t.mutation({query:function(t){return{url:"/api/v1/landing/".concat(t.id,"/testimonials/query"),method:o.a4,body:t.bodyParameter}}})},O=function(t){return t.mutation({query:function(t){return{url:"/api/v1/landing/".concat(t.id,"/one/").concat(t.tid,"/testimonials/query"),method:o.Q0,body:t.bodyParameter}}})},F=function(t){return t.mutation({query:function(t){return{url:"/api/v1/landing/".concat(t.id,"/iso/certificate/query"),method:o.a4,body:t.bodyParameter}}})},B=function(t){return t.mutation({query:function(t){return{url:"/api/v1/landing/".concat(t.lcid,"/toggle/query"),method:o.Q0,body:t.bodyParameter}}})},x=function(t){return t.mutation({query:function(t){return{url:"/api/v1/landing/".concat(t.lcid,"/founder/desk/post"),method:o.a4,body:t.bodyParameter}}})},K=function(t){return t.mutation({query:function(t){return{url:"/api/v1/landing/".concat(t.lcid,"/accreditation/desk/post"),method:o.a4,body:t.bodyParameter}}})},_=function(t){return t.mutation({query:function(t){return{url:"/api/v1/landing/".concat(t.lcid,"/gallery/desk/post"),method:o.a4,body:t.bodyParameter}}})},D=function(t){return t.query({query:function(t){return"/api/v1/landing/".concat(t.lcid,"/all/gallery/desk/query?page=").concat(t.page,"&limit=").concat(t.limit,"&category=").concat(t.category)},serializeQueryArgs:function(t){return t.endpointName},transformResponse:function(t,n,e){return null!==e&&void 0!==e&&e.search?{search:!0,list:null===t||void 0===t?void 0:t.subject_master}:{page:null===e||void 0===e?void 0:e.page,list:null===t||void 0===t?void 0:t.subject_master}},merge:function(t,n){var e;return null!==n&&void 0!==n&&n.search||1===(null===n||void 0===n?void 0:n.page)?n:void(null===t||void 0===t||null===(e=t.list)||void 0===e||e.push.apply(e,(0,r.Z)(null===n||void 0===n?void 0:n.list)))},forceRefetch:function(t){return t.currentArg!==t.previousArg}})},z=function(t){return t.mutation({query:function(t){return{url:"/api/v1/landing/".concat(t.lcid,"/affiliation/post"),method:o.Q0,body:t.bodyParameter}}})},E=function(t){return t.mutation({query:function(t){return{url:"/api/v1/landing/".concat(t.lcid,"/about/society/post"),method:o.Q0,body:t.bodyParameter}}})},W=function(t){return t.mutation({query:function(t){return{url:"/api/v1/landing/".concat(t.lcid,"/header/object/query"),method:o.Q0,body:t.bodyParameter}}})},X=function(t){return t.mutation({query:function(t){return{url:"/api/v1/landing/".concat(t.lcid,"/header/background/object/query"),method:o.Q0,body:t.bodyParameter}}})},Y=function(t){return t.mutation({query:function(t){return{url:"/api/v1/landing/".concat(t.lcid,"/header/home/about/object/query"),method:o.Q0,body:t.bodyParameter}}})},J=function(t){return t.mutation({query:function(t){return{url:"/api/v1/landing/".concat(t.lcid,"/header/home/quick/opener/object/query"),method:o.Q0,body:t.bodyParameter}}})},V=function(t){return t.mutation({query:function(t){return{url:"/api/v1/landing/".concat(t.lcid,"/footer/object/query"),method:o.Q0,body:t.bodyParameter}}})},$=function(t){return t.mutation({query:function(t){return{url:"/api/v1/landing/".concat(t.lcid,"/header/accreditation/object/query"),method:o.a4,body:t.bodyParameter}}})},tt=function(t){return t.mutation({query:function(t){return{url:"/api/v1/landing/".concat(t.lcid,"/header/accreditation/").concat(t.acid,"/nested/object/query"),method:o.Q0,body:t.bodyParameter}}})},nt=function(t){return t.query({query:function(t){return"/api/v1/landing/".concat(t.anid,"/one/academic/nested/page/query")},serializeQueryArgs:function(t){return t.endpointName},transformResponse:function(t){return null===t||void 0===t?void 0:t.all_page},forceRefetch:function(t){return t.currentArg!==t.previousArg}})},et=function(t){return t.mutation({query:function(t){return{url:"/api/v1/landing/".concat(t.lcid,"/about/institute/object/query"),method:o.Q0,body:t.bodyParameter}}})},ut=function(t){return t.mutation({query:function(t){return{url:"/api/v1/landing/".concat(t.lcid,"/about/society/post"),method:o.Q0,body:t.bodyParameter}}})},it=function(t){return t.mutation({query:function(t){return{url:"/api/v1/landing/".concat(t.lcid,"/about/institute/administration/object/query"),method:o.Q0,body:t.bodyParameter}}})},rt=function(t){return t.mutation({query:function(t){return{url:"/api/v1/landing/".concat(t.lcid,"/new/academic/head/query"),method:o.a4,body:t.bodyParameter}}})},ot=function(t){return t.mutation({query:function(t){return{url:"/api/v1/landing/".concat(t.acid,"/sub/head/academic/query"),method:o.a4,body:t.bodyParameter}}})},at=function(t){return t.mutation({query:function(t){return{url:"/api/v1/landing/".concat(t.anid,"/nested/sub/head/academic/query"),method:o.Q0,body:t.bodyParameter}}})},ct=function(t){return t.query({query:function(t){return"/api/v1/landing/".concat(t.acid,"/all/academic/page/query")},serializeQueryArgs:function(t){return t.endpointName},transformResponse:function(t){return null===t||void 0===t?void 0:t.all_page},forceRefetch:function(t){return t.currentArg!==t.previousArg}})},dt=function(t){return t.query({query:function(t){return"/api/v1/landing/".concat(t.anid,"/one/academic/nested/page/query")},serializeQueryArgs:function(t){return t.endpointName},transformResponse:function(t){return null===t||void 0===t?void 0:t.all_page},forceRefetch:function(t){return t.currentArg!==t.previousArg}})},st=e(69234).j.injectEndpoints({endpoints:function(t){return{institutePrivacyUpdate:d(t,i.K7),addRecoveryMail:s(t,i.lx),addRecoveryPhoneNumber:f(t,i.lx),deactivateUserAccount:y(t),getUserCoins:l(t),userPaymentHistory:m(t),paymentHistoryDetail:p(t),userSettingNotification:v(t,i.K7),userSettingPrivacy:b(t,i.K7),websiteLookUpdateByInstitute:q(t,i.K7),websiteTabUpdateByInstitute:g(t,i.K7),websiteInfoGetByInstitute:h(t),websiteContactUpdateByInstitute:A(t,i.K7),getInstituteSiteOpener:I(t),updateInstituteSiteOpener:S(t,i.K7),institutePaymentToggle:U(t,i.K7),trashInstituteSiteOpener:M(t,i.SR),academicSiteInfo:H(t,i.lx),updateAcademicSiteInfo:Z(t,i.K7),getAcademicModuleInfo:P(t),nssSiteInfo:k(t,i.lx),updateNssSiteInfo:Q(t,i.K7),getNssModuleInfo:L(t),getFacilitiesModuleInfo:R(t),facilitiesSiteInfo:w(t,i.lx),updateFacilitiesSiteInfo:T(t,i.K7),userDeleteAccountFromQviple:C(t,i.lx),instituteAddHomeOpener:G(t),instituteAddTestitmonial:j(t),instituteUpdateTestitmonial:O(t),instituteUpdateHomeOpener:N(t),instituteUpdateIsoCertificate:F(t),instituteUpdateLandingControle:B(t),instituteUpdateHomeFounders:x(t),instituteUpdateAccreditation:K(t),instituteUpdateGallaryImage:_(t),instituteAllGallaryImage:D(t),instituteUpdateAffiliation:z(t),instituteUpdateSociatyTrust:E(t),instituteAddAcademicHead:rt(t),instituteAddSubHeadAcademic:ot(t),siteHomeHeader:W(t),siteHomeBackground:X(t),siteHomeAbout:Y(t),siteHomeQuickLink:J(t),siteHomeFooter:V(t),siteHomeAccreditation:$(t),siteHomeAccreditationCertificate:tt(t),siteHomeAccreditationCertificateList:nt(t),siteAboutUsAboutInstitute:et(t),siteAboutUsAboutSociety:ut(t),siteAboutUsAdministration:it(t),siteAcademicsHead:at(t),siteAcademicsHeadList:ct(t),siteAcademicsHeadSubTopicList:dt(t)}}}),ft=st.useInstitutePrivacyUpdateMutation,yt=st.useAddRecoveryMailMutation,lt=st.useAddRecoveryPhoneNumberMutation,mt=st.useDeactivateUserAccountMutation,pt=(st.useGetUserCoinsQuery,st.useUserPaymentHistoryQuery),vt=(st.usePaymentHistoryDetailQuery,st.useUserSettingNotificationMutation),bt=st.useUserSettingPrivacyMutation,qt=(st.useWebsiteLookUpdateByInstituteMutation,st.useWebsiteTabUpdateByInstituteMutation),gt=st.useWebsiteInfoGetByInstituteQuery,ht=st.useWebsiteContactUpdateByInstituteMutation,At=st.useGetInstituteSiteOpenerQuery,It=st.useUpdateInstituteSiteOpenerMutation,St=st.useInstitutePaymentToggleMutation,Mt=st.useTrashInstituteSiteOpenerMutation,Ut=st.useAcademicSiteInfoMutation,Ht=st.useGetAcademicModuleInfoQuery,Zt=st.useUpdateAcademicSiteInfoMutation,Pt=st.useNssSiteInfoMutation,kt=st.useUpdateNssSiteInfoMutation,Qt=st.useGetNssModuleInfoQuery,Lt=st.useFacilitiesSiteInfoMutation,Rt=st.useGetFacilitiesModuleInfoQuery,wt=st.useUpdateFacilitiesSiteInfoMutation,Tt=st.useUserDeleteAccountFromQvipleMutation,Ct=st.useInstituteAddHomeOpenerMutation,Gt=st.useInstituteAddTestitmonialMutation,Nt=st.useInstituteUpdateTestitmonialMutation,jt=st.useInstituteUpdateHomeOpenerMutation,Ot=st.useInstituteUpdateIsoCertificateMutation,Ft=(st.useInstituteUpdateLandingControleMutation,st.useInstituteUpdateHomeFoundersMutation),Bt=st.useInstituteUpdateAccreditationMutation,xt=st.useInstituteUpdateGallaryImageMutation,Kt=(st.useInstituteAllGallaryImageQuery,st.useInstituteUpdateAffiliationMutation),_t=st.useInstituteUpdateSociatyTrustMutation,Dt=st.useInstituteAddAcademicHeadMutation,zt=st.useInstituteAddSubHeadAcademicMutation,Et=st.useSiteHomeHeaderMutation,Wt=st.useSiteHomeBackgroundMutation,Xt=st.useSiteHomeAboutMutation,Yt=st.useSiteHomeQuickLinkMutation,Jt=st.useSiteHomeFooterMutation,Vt=st.useSiteHomeAccreditationMutation,$t=st.useSiteHomeAccreditationCertificateMutation,tn=(st.useSiteHomeAccreditationCertificateListQuery,st.useSiteAboutUsAboutInstituteMutation),nn=st.useSiteAboutUsAboutSocietyMutation,en=st.useSiteAboutUsAdministrationMutation,un=st.useSiteAcademicsHeadMutation,rn=st.useSiteAcademicsHeadListQuery,on=st.useSiteAcademicsHeadSubTopicListQuery,an=function(){var t=ft();return[(0,u.Z)(t,1)[0]]},cn=function(){var t=yt();return[(0,u.Z)(t,1)[0]]},dn=function(){var t=lt();return[(0,u.Z)(t,1)[0]]},sn=function(){var t=mt();return[(0,u.Z)(t,1)[0]]},fn=function(t){var n=pt(t.data,{skip:t.skip});return{userPayment:n.data,userPaymentRefetch:n.refetch}},yn=function(){var t=vt();return[(0,u.Z)(t,1)[0]]},ln=function(){var t=bt();return[(0,u.Z)(t,1)[0]]},mn=function(){var t=qt();return[(0,u.Z)(t,1)[0]]},pn=function(t){var n=gt(t.id,{skip:t.skip});return{websiteInfoGetByInstitute:n.data,websiteInfoGetByInstituteRefetch:n.refetch}},vn=function(){var t=ht();return[(0,u.Z)(t,1)[0]]},bn=function(t){var n=At(t.id,{skip:t.skip});return{getInstituteSiteOpener:n.data,getInstituteSiteOpenerRefetch:n.refetch}},qn=function(){var t=It();return[(0,u.Z)(t,1)[0]]},gn=function(){var t=St();return[(0,u.Z)(t,1)[0]]},hn=function(){var t=Mt();return[(0,u.Z)(t,1)[0]]},An=function(){var t=Lt();return[(0,u.Z)(t,1)[0]]},In=function(){var t=wt();return[(0,u.Z)(t,1)[0]]},Sn=function(){var t=Ut();return[(0,u.Z)(t,1)[0]]},Mn=function(){var t=Zt();return[(0,u.Z)(t,1)[0]]},Un=function(t){var n=Ht(t.aid,{skip:t.skip});return{getAcademicSiteInfo:n.data,getAcademicSiteInfoRefetch:n.refetch}},Hn=function(){var t=Pt();return[(0,u.Z)(t,1)[0]]},Zn=function(){var t=kt();return[(0,u.Z)(t,1)[0]]},Pn=function(t){var n=Rt(t.fid,{skip:t.skip});return{getFacilitiesSiteInfo:n.data,getFacilitiesSiteInfoRefetch:n.refetch}},kn=function(t){var n=Qt(t.nid,{skip:t.skip});return{getNssSiteInfo:n.data,getNssSiteInfoRefetch:n.refetch}},Qn=function(){var t=Tt();return[(0,u.Z)(t,1)[0]]},Ln=function(){var t=Ct();return[(0,u.Z)(t,1)[0]]},Rn=function(){var t=Gt();return[(0,u.Z)(t,1)[0]]},wn=function(){var t=Nt();return[(0,u.Z)(t,1)[0]]},Tn=function(){var t=jt();return[(0,u.Z)(t,1)[0]]},Cn=function(){var t=Ot();return[(0,u.Z)(t,1)[0]]},Gn=function(){var t=Ft();return[(0,u.Z)(t,1)[0]]},Nn=function(){var t=Bt();return[(0,u.Z)(t,1)[0]]},jn=function(){var t=xt();return[(0,u.Z)(t,1)[0]]},On=function(){var t=Kt();return[(0,u.Z)(t,1)[0]]},Fn=function(){var t=_t();return[(0,u.Z)(t,1)[0]]},Bn=function(){var t=Dt();return[(0,u.Z)(t,1)[0]]},xn=function(){var t=zt();return[(0,u.Z)(t,1)[0]]},Kn=function(){var t=Et();return[(0,u.Z)(t,1)[0]]},_n=function(){var t=Wt();return[(0,u.Z)(t,1)[0]]},Dn=function(){var t=Xt();return[(0,u.Z)(t,1)[0]]},zn=function(){var t=Yt();return[(0,u.Z)(t,1)[0]]},En=function(){var t=Jt();return[(0,u.Z)(t,1)[0]]},Wn=function(){var t=Vt();return[(0,u.Z)(t,1)[0]]},Xn=function(){var t=$t();return[(0,u.Z)(t,1)[0]]},Yn=function(){var t=tn();return[(0,u.Z)(t,1)[0]]},Jn=function(){var t=nn();return[(0,u.Z)(t,1)[0]]},Vn=function(){var t=en();return[(0,u.Z)(t,1)[0]]},$n=function(){var t=un();return[(0,u.Z)(t,1)[0]]},te=function(t){var n=rn(null===t||void 0===t?void 0:t.data,{skip:null===t||void 0===t?void 0:t.skip});return{siteAcademicsHeadList:n.data,siteAcademicsHeadListRefetch:n.refetch,siteAcademicsHeadListLoading:n.isFetching}},ne=function(t){var n=on(null===t||void 0===t?void 0:t.data,{skip:null===t||void 0===t?void 0:t.skip});return{siteAcademicsHeadSubTopicList:n.data,siteAcademicsHeadSubTopicListRefetch:n.refetch,siteAcademicsHeadSubTopicListLoading:n.isFetching}}}}]);
//# sourceMappingURL=29899.66f47cf1.chunk.js.map