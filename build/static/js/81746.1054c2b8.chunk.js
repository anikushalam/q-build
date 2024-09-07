"use strict";(self.webpackChunkmithkal_qviple=self.webpackChunkmithkal_qviple||[]).push([[81746,31250,28273,5350],{35395:(e,n,t)=>{t.d(n,{Z:()=>r});var a=t(72791),o=t(98734),i=t(80184);const r=e=>{let{children:n}=e;return(0,i.jsx)(a.Suspense,{fallback:(0,i.jsx)(o.Z,{}),children:n})}},5350:(e,n,t)=>{t.r(n),t.d(n,{default:()=>f});var a=t(72791),o=t(39230),i=t(16871),r=t(46500),c=t(80617),s=t(95048),l=t(46876),d=t(38857),u=t(21348),m=t(90904),_=t(98684),v=t(1095),y=t(93638),b=t(55336),h=t(16925),g=t(80184);const f=function(e){var n,t,f,p;let{hideModal:x,edit:S,librarian:j,onParentRefetch:k}=e;const{t:q}=(0,o.$G)(),A=(0,s.v9)((e=>e.idChange)),Z=(0,i.s0)(),P=(0,i.UO)(),[C,N]=(0,a.useState)(""),[M,R]=(0,a.useState)(!1),[I,U]=(0,a.useState)(!1),[T]=(0,c.IO)(),[O]=(0,c.qF)(),w=(0,s.I0)();return(0,a.useEffect)((()=>{S&&N(j)}),[S]),(0,g.jsx)(g.Fragment,{children:M?(0,g.jsx)(l.default,{assignHead:M,headSelect:e=>{N(e)},title:q("secect_library_head"),onClose:()=>R((e=>!e)),disabledId:null===C||void 0===C?void 0:C._id}):(0,g.jsx)(d.Z,{onClose:()=>x(!1),children:(0,g.jsxs)("div",{className:h.Z.modal_container,children:[(0,g.jsx)(u.default,{children:(0,g.jsxs)("div",{className:h.Z.modal_container_outer_header,children:[(0,g.jsx)("div",{className:h.Z.modal_container_header,children:(0,g.jsx)("h6",{children:q(S?"edit_library":"activate_library")})}),(0,g.jsx)("img",{src:"".concat(_.J7,"/close.svg"),alt:"close icon",onClick:()=>x(!1)})]})}),(0,g.jsx)(m.Z,{}),(0,g.jsxs)(u.default,{customStyle:{paddingTop:"0"},children:[(0,g.jsxs)("div",{className:h.Z.card_container_image,onClick:()=>R(!0),style:{cursor:"pointer"},children:[(0,g.jsx)("img",{alt:"not found",src:null!==C&&void 0!==C&&C.staffProfilePhoto?"".concat(v.yI,"/").concat(C.staffProfilePhoto):"".concat(_.p3,"/feed-user-avatar.svg")}),(0,g.jsx)("div",{className:h.Z.card_container_inner,children:null!==C&&void 0!==C&&C.staffFirstName?(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)("h6",{children:"".concat(null!==(n=null===C||void 0===C?void 0:C.staffFirstName)&&void 0!==n?n:""," \n                    ").concat(null!==(t=null===C||void 0===C?void 0:C.staffMiddleName)&&void 0!==t?t:"","\n                    ").concat(null!==(f=null===C||void 0===C?void 0:C.staffLastName)&&void 0!==f?f:"")}),(0,g.jsxs)("p",{children:[q("index_number_1")," ",null!==(p=null===C||void 0===C?void 0:C.staffROLLNO)&&void 0!==p?p:""]})]}):(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)("h6",{children:q("assign_lib_head")}),(0,g.jsx)("p",{children:q("search_from_joined_list")})]})})]}),(0,g.jsx)(y.Z,{label:S?"update":"activate",onAction:S?()=>{null!==C&&void 0!==C&&C._id&&null!==j&&void 0!==j&&j._id&&(U(!0),O({osid:null===j||void 0===j?void 0:j._id,nsid:null===C||void 0===C?void 0:C._id}).then((e=>{var n;w(r.X.libraryQuery({lid:null===(n=e.data)||void 0===n?void 0:n.library,lhead:null===C||void 0===C?void 0:C._id})),k(),U(!1),x()})))}:()=>{var e;""!==(null===A||void 0===A?void 0:A.id)&&(U(!0),T({activate:{sid:null!==(e=null===C||void 0===C?void 0:C._id)&&void 0!==e?e:""},id:null===A||void 0===A?void 0:A.id}).then((e=>{var n;e.data.status&&(U(!1),w(r.X.libraryQuery({lid:null===(n=e.data)||void 0===n?void 0:n.library,lhead:null===C||void 0===C?void 0:C._id})),Z("/q/".concat(null===P||void 0===P?void 0:P.username,"/library")))})))}})]}),I&&(0,g.jsx)(b.default,{})]})})})}},65914:(e,n,t)=>{t.r(n),t.d(n,{default:()=>C});var a=t(72791),o=t(20772),i=t(97393),r=t(74737),c=t(16871),s=t(43504),l=t(95048),d=t(21093),u=t(35395),m=t(85050),_=t(69721),v=t(39230),y=t(93738),b=t(5350),h=t(80184);const g=function(e){var n,t,o,i;let{username:r,library:s,libraryRefetch:l}=e;const{t:g}=(0,v.$G)(),f=(0,c.UO)(),[p,x]=a.useState(!1);return(0,h.jsxs)("div",{style:{position:"sticky",top:"77px",height:"fit-content",width:"30%"},children:[(0,h.jsx)(d.Z,{linkType:!0,linkUrl:"/q/".concat(r,"/feed")}),(0,h.jsx)(m.Z,{dynamicImage:null!==s&&void 0!==s&&s.cover?"".concat(_.yI,"/").concat(null===s||void 0===s?void 0:s.cover):"/images/profileAndCover/library-cover.png",edit:!0,onEditAction:()=>x(!0),redirectUrl:"/q/".concat(f.username,"/library?a=site"),isSiteInfo:"LIBRARY",carryParentState:{lid:null===s||void 0===s?void 0:s._id}}),(0,h.jsx)(y.Z,{cardAsHead:!0,heading:" ".concat((null===s||void 0===s||null===(n=s.libraryHead)||void 0===n?void 0:n.staffFirstName)||""," ").concat(null!==s&&void 0!==s&&null!==(t=s.libraryHead)&&void 0!==t&&t.staffMiddleName?null===s||void 0===s||null===(o=s.libraryHead)||void 0===o?void 0:o.staffMiddleName:""," ").concat((null===s||void 0===s||null===(i=s.libraryHead)||void 0===i?void 0:i.staffLastName)||""),description:g("librarian"),customStyleCard:{borderRadius:"1rem 1rem 0 0",border:"none",marginTop:"-1.49vw"}}),(0,h.jsx)(y.Z,{cardAsHead:!1,heading:g("books"),description:g("total_books"),count:(null===s||void 0===s?void 0:s.bookCount)||0}),(0,h.jsx)(y.Z,{cardAsHead:!1,heading:g("members"),description:g("total_members"),count:(null===s||void 0===s?void 0:s.memberCount)||0,customStyleCard:{borderRadius:"0 0 12px 12px",borderBottom:"0.4px solid rgba(0, 0, 0, 0.15)"}}),(0,h.jsx)(u.Z,{children:p&&(0,h.jsx)(b.default,{libraryModal:p,hideModal:()=>x(!1),edit:!0,librarian:null===s||void 0===s?void 0:s.libraryHead,onParentRefetch:l})})]})};var f=t(39480),p=t(80617),x=t(64783);const S={funds:"Funds_funds__zS-qH",funds2:"Funds_funds2__3x6b6",fundshead:"Funds_fundshead__SP1Pn",fundscontent:"Funds_fundscontent__4fKjX",sidebarbottomitem:"Funds_sidebarbottomitem__SqHXQ",namee:"Funds_namee__pAorP",dueActive:"Funds_dueActive__n4djD",desig:"Funds_desig__hmhD6",balanceItem:"Funds_balanceItem__VM1DB"};function j(e){let{bal:n,value:t,check:a}=e;return(0,h.jsxs)("div",{className:S.balanceItem,children:[(0,h.jsxs)("p",{children:[n,":"]}),(0,h.jsxs)("p",{children:["Rs. ",t]})]})}const k=function(e){let{library:n}=e;const{t:t}=(0,v.$G)();return(0,h.jsxs)("div",{className:S.funds,children:[(0,h.jsxs)("div",{className:S.fundshead,children:[(0,h.jsxs)("h6",{children:[" ",t("library_fine")," "]}),(0,h.jsx)("img",{src:"/images/finance/filter-icon.svg",alt:""})]}),(0,h.jsxs)("div",{className:S.fundscontent,children:[(0,h.jsxs)("div",{className:S.sidebarbottomitem,children:[(0,h.jsx)("img",{alt:"not found",src:"/images/finance/doller-icon.svg"}),(0,h.jsxs)("div",{children:[(0,h.jsxs)("p",{className:S.namee,children:["Rs. ",null===n||void 0===n?void 0:n.totalFine," "]}),(0,h.jsx)("p",{className:S.desig,children:t("total_fine")})]})]}),(0,h.jsx)(j,{check:"false",bal:t("cash_fine"),value:null===n||void 0===n?void 0:n.offlineFine}),(0,h.jsx)(j,{check:"false",bal:t("bank_fine"),value:null===n||void 0===n?void 0:n.onlineFine}),(0,h.jsx)(j,{check:"true",bal:t("cash_lib"),value:null===n||void 0===n?void 0:n.collectedFine})]})]})},q=e=>{let{carryParentState:n,library:t}=e;const{t:a}=(0,v.$G)(),[o]=(0,s.lr)();return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)("div",{className:r.Z.finance_tab_tabs,children:[(0,h.jsx)(x.Z,{tabLevel:a("all_books"),customStyleContainer:{width:"50%",marginRight:"2px",borderTopLeftRadius:"6px"},customStyleLevel:{borderTopLeftRadius:"6px"},tabValue:"book",currentValue:"book"===(null===o||void 0===o?void 0:o.get("a"))?"book":"other",carryParentState:n,activeUrl:"library?a=book"}),(0,h.jsx)(x.Z,{tabLevel:a("funds"),customStyleContainer:{width:"50%",borderTopRightRadius:"6px"},customStyleLevel:{borderTopLeftRadius:"6px"},tabValue:"fund",currentValue:"fund"===(null===o||void 0===o?void 0:o.get("a"))?"fund":"other",carryParentState:n,activeUrl:"library?a=fund"})]}),"fund"===(null===o||void 0===o?void 0:o.get("a"))?(0,h.jsx)(k,{library:t}):null]})};var A=t(37111);const Z=function(){var e,n,t,o,i,d,u,m,_,v,y,b;const x=(0,c.UO)(),[S]=(0,s.lr)(),j=(0,c.TH)(),k=(0,l.v9)((e=>e.idChange.id)),{oneInstituteDashboard:Z,oneInstituteDashboardRefetch:P}=(0,f.gq)({id:k,skip:!k});(0,a.useEffect)((()=>{k&&P()}),[k,P]);const{getLibraryDetail:C,getLibraryDetailRefetch:N}=(0,p.yX)({lid:null===Z||void 0===Z||null===(e=Z.institute)||void 0===e||null===(n=e.library)||void 0===n?void 0:n[0],skip:!(null!==Z&&void 0!==Z&&null!==(t=Z.institute)&&void 0!==t&&null!==(o=t.library)&&void 0!==o&&o[0])});return(0,a.useEffect)((()=>{var e,n;null!==Z&&void 0!==Z&&null!==(e=Z.institute)&&void 0!==e&&null!==(n=e.library)&&void 0!==n&&n[0]&&N()}),[null===Z||void 0===Z||null===(i=Z.institute)||void 0===i||null===(d=i.library)||void 0===d?void 0:d[0],N]),(0,h.jsxs)("div",{className:r.Z.main,children:[(0,h.jsx)(g,{username:x.username,library:null===C||void 0===C?void 0:C.library,libraryRefetch:N}),(0,h.jsxs)("div",{className:r.Z.finance_container,children:[null!==S&&void 0!==S&&S.get("n")?null:("book"===(null===S||void 0===S?void 0:S.get("a"))||"fund"===(null===S||void 0===S?void 0:S.get("a")))&&(0,h.jsx)(q,{carryParentState:j.state,library:null===C||void 0===C?void 0:C.library}),"book"===(null===S||void 0===S?void 0:S.get("a"))&&(0,h.jsx)(A.Z,{carryParentState:j.state,libraryId:null===C||void 0===C||null===(u=C.library)||void 0===u?void 0:u._id,pageOpenAs:"INSTITUTE",fid:null===C||void 0===C||null===(m=C.library)||void 0===m||null===(_=m.institute)||void 0===_||null===(v=_.financeDepart)||void 0===v?void 0:v[0],filterBy:null===C||void 0===C||null===(y=C.library)||void 0===y||null===(b=y.filter_by)||void 0===b?void 0:b.department})]})]})};var P=t(78068);const C=function(){var e,n;const t=(0,c.TH)();return(0,h.jsxs)("div",{className:i.Z.bgContainer,children:[(0,h.jsx)("div",{className:i.Z.navbar,children:(0,h.jsx)(o.default,{status:"home"})}),"site"===(null===(e=t.search)||void 0===e?void 0:e.substring(3))?(0,h.jsx)(P.Z,{lid:null===(n=t.state)||void 0===n?void 0:n.lid,viewAs:"INSTITUTE"}):(0,h.jsx)("div",{className:i.Z.editContainer,children:(0,h.jsx)(Z,{})})]})}},64783:(e,n,t)=>{t.d(n,{Z:()=>c});t(72791);var a=t(90788),o=t(16871),i=t(43504),r=t(80184);const c=e=>{let{tabLevel:n,customStyleContainer:t,customStyleLevel:c,currentValue:s,tabValue:l,carryParentState:d,activeUrl:u}=e;const m=(0,o.UO)();return(0,r.jsx)(i.rU,{to:"/q/".concat(m.username,"/").concat(u),state:d,className:s===l?a.Z.common_tab_container_active:a.Z.common_tab_container,style:t,children:(0,r.jsx)("h6",{className:s===l?a.Z.common_tab_text_active:a.Z.common_tab_text,style:c,children:n})})}},93738:(e,n,t)=>{t.d(n,{Z:()=>i});t(72791);var a=t(90788),o=t(80184);const i=e=>{let{cardAsHead:n,customStyleCard:t,heading:i,description:r,count:c,asActive:s}=e;return(0,o.jsxs)("div",{className:s?a.Z.common_card_container_active:a.Z.common_card_container,style:{...t},children:[!n&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("div",{className:a.Z.common_card_content,children:[(0,o.jsx)("h6",{className:a.Z.common_card_content_header,children:i}),(0,o.jsx)("p",{className:a.Z.common_card_content_paragraph,children:r})]}),(0,o.jsx)("h6",{className:a.Z.common_card_content_count,children:c})]}),n&&(0,o.jsxs)("div",{className:a.Z.common_card_container_ashead,children:[(0,o.jsx)("h6",{className:a.Z.common_card_content_headheader,children:i}),(0,o.jsx)("p",{className:a.Z.common_card_content_headparagraph,children:r})]})]})}},85050:(e,n,t)=>{t.d(n,{Z:()=>s});t(72791);var a=t(90788),o=t(16871),i=t(43504),r=t(80184);const c=["DEPARTMENT","ADMISSION","HOSTEL","LIBRARY","TRANSPORT"],s=e=>{let{dynamicImage:n,customStyleBackground:t,customStyleImage:s,edit:l,onEditAction:d,isView:u,isSiteInfo:m,redirectUrl:_,carryParentState:v}=e;const y=(0,o.UO)();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:a.Z.common_sidebar_background_container,style:{...t},children:[(0,r.jsx)("img",{className:a.Z.common_sidebar_background_image,style:{...s},src:n,alt:"backgroud avatar"}),"DEPARTMENT"===u?(0,r.jsx)(i.rU,{to:"/q/".concat(y.username,"/institute/member/one/department?type=form"),state:v,children:(0,r.jsx)("img",{className:a.Z.common_sidebar_setting,src:"/images/profile/profile-menu.svg",alt:"edit icon"})}):null,null!==c&&void 0!==c&&c.includes(m)?(0,r.jsx)(i.rU,{to:"".concat(_),state:{...v},style:{textDecoration:"none"},children:(0,r.jsx)("img",{className:a.Z.common_sidebar_site_info,src:"/images/profile/site-globe-icon.svg",alt:"edit icon"})}):null,l&&(0,r.jsx)("img",{className:a.Z.common_sidebar_edit,src:"/images/user-pencil-edit.svg",alt:"edit icon",onClick:d})]}),"//"," "]})}},21093:(e,n,t)=>{t.d(n,{Z:()=>s});t(72791);var a=t(16871),o=t(43504),i=t(90788),r=t(39230),c=t(80184);const s=e=>{let{linkUrl:n,linkType:t,whichType:s}=e;const{t:l}=(0,r.$G)(),d=(0,a.s0)();return(0,c.jsxs)("div",{className:i.Z.goback_container,children:[t&&(0,c.jsx)(o.rU,{to:n,children:(0,c.jsxs)("div",{className:i.Z.goback_container_text,children:[(0,c.jsx)("img",{src:"/images/arr-left-white.svg",alt:"go back icon"}),(0,c.jsx)("h6",{className:i.Z.goback_container_text_go,children:l("go_back")})]})}),"PREVIOUS_GO"===s&&(0,c.jsxs)("div",{className:i.Z.goback_container_text,onClick:()=>{d(-1)},title:"Go back",children:[(0,c.jsx)("img",{src:"/images/arr-left-white.svg",alt:"go back icon"}),(0,c.jsx)("h6",{className:i.Z.goback_container_text_go,children:l("go_back")})]})]})}},1669:(e,n,t)=>{t.d(n,{Z:()=>r});var a=t(98684),o=t(63244),i=t(80184);const r=e=>{let{isGrey:n}=e;return(0,i.jsx)("div",{className:o.Z.q_loading,children:(0,i.jsx)("img",{src:"".concat(a.Uw,n?"/loading-grey.gif":"/loading.gif"),alt:"loading icon"})})}},79992:(e,n,t)=>{t.d(n,{ZH:()=>o});var a=t(44816);const o=e=>{var n=a.AES.decrypt(e,"QVIPLESAASPLATFORM");return JSON.parse(n.toString(a.enc.Utf8))}},98684:(e,n,t)=>{t.d(n,{D3:()=>l,Fk:()=>u,HN:()=>a,IC:()=>v,Ii:()=>_,J7:()=>c,Jr:()=>m,U_:()=>s,Uw:()=>d,dB:()=>i,ix:()=>y,nj:()=>o,p3:()=>r,wP:()=>h,zr:()=>b});const a="/public/images/company_logo",o="/public/images/auth",i="/public/images/navbar",r="/public/images/feed",c="/public/images/finance",s="/public/images/admission",l="/public/images/lms",d="/public/images/loading",u="/public/images/utility",m="/public/images/feedback",_="/public/images/mentor",v="/public/images/staff",y="/public/images/automate",b="/public/images/store",h="/public/images/academic_department"},94811:(e,n,t)=>{t.d(n,{Q0:()=>o,a4:()=>a,yY:()=>i});const a="POST",o="PATCH",i="DELETE"},91007:(e,n,t)=>{t.d(n,{KU:()=>ue,cX:()=>de,Lr:()=>ve,wB:()=>ce,cn:()=>le,pu:()=>X,QS:()=>$,W7:()=>z,dj:()=>K,$J:()=>qe,Im:()=>me,W3:()=>H,Pm:()=>Ze,Md:()=>V,No:()=>Y,dv:()=>J,mC:()=>Ae,OU:()=>re,x6:()=>be});var a=localStorage.getItem("user");const o=e=>e.mutation({query:e=>({url:"/landing/get-touch",method:"POST",body:e})}),i=e=>e.mutation({query:e=>({url:"/ins/deactivate/info/".concat(a),method:"POST",body:e})}),r=e=>e.query({query:e=>"/ins/".concat(e.id?e.id:a,"/approve-staff/list?page=").concat(e.page,"&limit=").concat(e.limit,"&date=").concat(e.date?e.date:"")}),c=e=>e.query({query:e=>"/ins/".concat(e||a,"/pending-staff/list")}),s=e=>e.query({query:e=>"/ins/staff/".concat(e)}),l=e=>e.query({query:e=>"/ins/".concat(e.id?e.id:a,"/approve-student/list?page=").concat(e.page,"&limit=").concat(e.limit)}),d=e=>e.query({query:e=>"/ins/student/".concat(e)}),u=e=>e.query({query:e=>"/ins/".concat(a,"/followers-array?page=").concat(e,"&limit=10")}),m=e=>e.query({query:e=>"/ins/".concat(null===e||void 0===e?void 0:e.id,"/announcemnt?page=").concat(null===e||void 0===e?void 0:e.page,"&limit=").concat(e.limit)}),_=e=>e.query({query:e=>"/ins/".concat(a,"/all/star-announcement?page=").concat(e,"&limit=10")}),v=e=>e.query({query:e=>"/ins/one/announcement/".concat(e)}),y=e=>e.query({query:e=>"/ins/".concat(a||e,"/dash")}),b=e=>e.query({query:e=>"/ins/".concat(e||a,"/display/person-array")}),h=e=>e.mutation({query:e=>({url:"/ins/".concat(a,"/display-person"),method:"POST",body:e})}),g=e=>e.mutation({query:e=>({url:"/ins/".concat(e.did,"/display-person/update"),method:"PATCH",body:e})}),f=e=>e.mutation({query:e=>({url:"/ins/".concat(a,"/display-person/").concat(e.did,"/delete/").concat(e.uid),method:"DELETE",body:e})}),p=e=>e.query({query:e=>"/ins/dashboard/".concat(a,"/notify?page=").concat(e,"&limit=10")}),x=e=>e.mutation({query:e=>({url:"/ins/".concat(e,"/star-announcement"),method:"POST"})}),S=e=>e.query({query:e=>({url:"/search/".concat(null!==e&&void 0!==e&&e.id?null===e||void 0===e?void 0:e.id:a,"/staff?search=").concat(e.search,"&page=").concat(e.page,"&limit=").concat(e.limit)})}),j=e=>e.query({query:e=>({url:"/search/".concat(a,"/student?search=").concat(e,"&page=",1,"&limit=",5)})}),k=e=>e.query({query:e=>({url:"/search/institute/".concat(a,"/allsearch?search=").concat(e,"&page=",1,"&limit=",5)})}),q=e=>e.mutation({query:e=>({url:"/ins/".concat(a,"/staff/approve/").concat(e.sid,"/user/").concat(e.uid),method:"POST",body:e})}),A=e=>e.mutation({query:e=>({url:"/ins".concat(a,"/staff/reject/").concat(e.sid,"/user/").concat(e.uid),method:"POST",body:e})}),Z=e=>e.query({query:()=>({url:"/auth/login"})}),P=e=>e.mutation({query:e=>({url:"/ins/".concat(a,"/staff/code"),method:"POST",body:e})}),C=e=>e.query({query:()=>({url:"/ins/".concat(a,"/staff-code")})}),N=e=>e.query({query:()=>"/all/user/list/data/"}),M=e=>e.query({query:e=>"/user/".concat(e,"/profile")}),R=e=>e.query({query:e=>"/user/profile/".concat(e)}),I=e=>e.query({query:e=>"/user/".concat(null===e||void 0===e?void 0:e.id,"/ins-announcement?page=").concat(null===e||void 0===e?void 0:e.page,"&limit=").concat(null===e||void 0===e?void 0:e.limit)}),U=e=>e.query({query:e=>"/user/".concat(a||e,"/dash/query")}),T=e=>e.query({query:e=>"/user/dashboard/".concat(a,"/notify?page=").concat(e,"&limit=10")}),O=e=>e.mutation({query:e=>({url:"/user/".concat(a,"/recovery-mail"),method:"POST",body:e})}),w=e=>e.mutation({query:e=>({url:"/user/phone/info/".concat(a),method:"POST",body:e})}),F=e=>e.mutation({query:e=>({url:"/extra/age/".concat(a),method:"PATCH"})}),L=e=>e.query({query:e=>({url:"/extra/age/".concat(a,"/get"),method:"GET"})}),D=e=>e.query({query:e=>"/fees/student/".concat(e)}),Q=e=>e.query({query:()=>"/extra/random/query"}),G=e=>e.mutation({query:e=>({url:"/ins/destroy/announcement/".concat(null===e||void 0===e?void 0:e.annId),method:"DELETE"})});const E=t(85064).K.injectEndpoints({endpoints:e=>({postGetInTouch:o(e),postUserRecoveryMail:O(e),postUserRecoveryPhoneNumber:w(e),postDeactivateAccount:i(e),getOneUserProfile:M(e),getOneUserProfileUsername:R(e),staffApproveArray:r(e),staffPendingArray:c(e),getOneStaffProfile:s(e),studentApproveArray:l(e),getOneStudentProfile:d(e),getInsFollowersArray:u(e),getAnnouncementArray:m(e),getUserAnnouncementArray:I(e),getStarAnnouncementArray:_(e),getOneAnnouncement:v(e),getSingleInsData:y(e),getSingleUserData:U(e),getDisplayPerson:b(e),addDisplayPerson:h(e),editDisplayPerson:g(e),deleteDisplayPerson:f(e),getAllNotifications:p(e),getAllUserNotifications:T(e),markStarAnnouncement:x(e),staffSearch:S(e),studentSearch:j(e),universalSearch:k(e),markAsApprove:q(e),markAsReject:A(e),checkLoginUser:Z(e),randomCode:P(e),instituteStaffCode:C(e),getAllUserArray:N(e),patchUserRestrictAge:F(e),getUsserAgeRestriction:L(e),getStudentFeesArray:D(e),randomIns:Q(e),instituteRemoveAnnouncement:G(e)})}),{usePatchUserRestrictAgeMutation:V,useGetUsserAgeRestrictionQuery:H,usePostGetInTouchMutation:B,usePostUserRecoveryMailMutation:Y,usePostUserRecoveryPhoneNumberMutation:J,useGetOneUserProfileQuery:X,useGetOneUserProfileUsernameQuery:$,useGetSingleInsDataQuery:z,useGetSingleUserDataQuery:K,useGetDisplayPersonQuery:W,useEditDisplayPersonMutation:ee,useAddDisplayPersonMutation:ne,useDeleteDisplayPersonMutation:te,useGetAllNotificationsQuery:ae,useGetAllUserNotificationsQuery:oe,useStaffPendingArrayQuery:ie,useStaffApproveArrayQuery:re,useGetOneStaffProfileQuery:ce,useStudentApproveArrayQuery:se,useGetOneStudentProfileQuery:le,useGetInsFollowersArrayQuery:de,useGetAnnouncementArrayQuery:ue,useGetUserAnnouncementArrayQuery:me,useGetStarAnnouncementArrayQuery:_e,useGetOneAnnouncementQuery:ve,useMarkStarAnnouncementMutation:ye,useStaffSearchQuery:be,useStudentSearchQuery:he,useUniversalSearchQuery:ge,useMarkAsApproveMutation:fe,useMarkAsRejectMutation:pe,useCheckLoginUserQuery:xe,useRandomCodeMutation:Se,useInstituteStaffCodeQuery:je,useGetAllUserArrayQuery:ke,useGetStudentFeesArrayQuery:qe,useRandomInsQuery:Ae,useInstituteRemoveAnnouncementMutation:Ze}=E},54155:(e,n,t)=>{var a=t(64836);n.Z=void 0;var o=a(t(45649)),i=t(80184),r=(0,o.default)((0,i.jsx)("path",{d:"M17 15h2V7c0-1.1-.9-2-2-2H9v2h8v8zM7 17V1H5v4H1v2h4v10c0 1.1.9 2 2 2h10v4h2v-4h4v-2H7z"}),"Crop");n.Z=r},97893:(e,n,t)=>{t.d(n,{Z:()=>i});var a=t(74223),o=t(80184);const i=(0,a.Z)((0,o.jsx)("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}),"Cancel")},36314:(e,n,t)=>{t.d(n,{Z:()=>A});var a=t(63366),o=t(87462),i=t(72791),r=t(30831),c=t(82466),s=t(94419),l=t(21217),d=t(93457),u=t(86083),m=t(78519),_=t(52173),v=t(51184),y=t(45682),b=t(80184);const h=["component","direction","spacing","divider","children","className","useFlexGap"],g=(0,_.Z)(),f=(0,d.Z)("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,n)=>n.root});function p(e){return(0,u.Z)({props:e,name:"MuiStack",defaultTheme:g})}function x(e,n){const t=i.Children.toArray(e).filter(Boolean);return t.reduce(((e,a,o)=>(e.push(a),o<t.length-1&&e.push(i.cloneElement(n,{key:"separator-".concat(o)})),e)),[])}const S=e=>{let{ownerState:n,theme:t}=e,a=(0,o.Z)({display:"flex",flexDirection:"column"},(0,v.k9)({theme:t},(0,v.P$)({values:n.direction,breakpoints:t.breakpoints.values}),(e=>({flexDirection:e}))));if(n.spacing){const e=(0,y.hB)(t),o=Object.keys(t.breakpoints.values).reduce(((e,t)=>(("object"===typeof n.spacing&&null!=n.spacing[t]||"object"===typeof n.direction&&null!=n.direction[t])&&(e[t]=!0),e)),{}),i=(0,v.P$)({values:n.direction,base:o}),r=(0,v.P$)({values:n.spacing,base:o});"object"===typeof i&&Object.keys(i).forEach(((e,n,t)=>{if(!i[e]){const a=n>0?i[t[n-1]]:"column";i[e]=a}}));const s=(t,a)=>{return n.useFlexGap?{gap:(0,y.NA)(e,t)}:{"& > :not(style):not(style)":{margin:0},"& > :not(style) ~ :not(style)":{["margin".concat((o=a?i[a]:n.direction,{row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"}[o]))]:(0,y.NA)(e,t)}};var o};a=(0,c.Z)(a,(0,v.k9)({theme:t},r,s))}return a=(0,v.dt)(t.breakpoints,a),a};var j=t(66934),k=t(31402);const q=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{createStyledComponent:n=f,useThemeProps:t=p,componentName:c="MuiStack"}=e,d=n(S),u=i.forwardRef((function(e,n){const i=t(e),u=(0,m.Z)(i),{component:_="div",direction:v="column",spacing:y=0,divider:g,children:f,className:p,useFlexGap:S=!1}=u,j=(0,a.Z)(u,h),k={direction:v,spacing:y,useFlexGap:S},q=(0,s.Z)({root:["root"]},(e=>(0,l.Z)(c,e)),{});return(0,b.jsx)(d,(0,o.Z)({as:_,ownerState:k,ref:n,className:(0,r.Z)(q.root,p)},j,{children:g?x(f,g):f}))}));return u}({createStyledComponent:(0,j.ZP)("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,n)=>n.root}),useThemeProps:e=>(0,k.Z)({props:e,name:"MuiStack"})}),A=q},93457:(e,n,t)=>{t.d(n,{Z:()=>a});const a=(0,t(44046).ZP)()},97393:(e,n,t)=>{t.d(n,{Z:()=>a});const a={navbar:"InsFinance_navbar__BwqhT",editContainer:"InsFinance_editContainer__JeVmy",bgContainer:"InsFinance_bgContainer__8oJKn"}},74737:(e,n,t)=>{t.d(n,{Z:()=>a});const a={main:"Main_main__4mpMH",stats:"Main_stats__05reL",stats1:"Main_stats1__WlbdF",finance_container:"Main_finance_container__2pMkG",finance_container_other:"Main_finance_container_other__+Fq3c",institute_finance_container_border:"Main_institute_finance_container_border__Jgqpr",finance_tab_tabs:"Main_finance_tab_tabs__ufRpi",item:"Main_item__RsX-U",itemIcon:"Main_itemIcon__MA5vy"}},90788:(e,n,t)=>{t.d(n,{Z:()=>a});const a={common_tab_text:"CommonSidebar_common_tab_text__-eItK",common_card_content_header:"CommonSidebar_common_card_content_header__MHAp+",common_card_content_paragraph:"CommonSidebar_common_card_content_paragraph__MmykG",common_card_content_count:"CommonSidebar_common_card_content_count__Ai7On",common_card_content_headheader:"CommonSidebar_common_card_content_headheader__RBc2L",common_card_content_headparagraph:"CommonSidebar_common_card_content_headparagraph__t+oLd",goback_container_text_go:"CommonSidebar_goback_container_text_go__lFumH",common_card_container_ashead:"CommonSidebar_common_card_container_ashead__Vjj40",common_tab_container:"CommonSidebar_common_tab_container__ujuBQ",common_tab_container_active:"CommonSidebar_common_tab_container_active__PTLiM",common_tab_text_active:"CommonSidebar_common_tab_text_active__JmlY-",blue_line_container:"CommonSidebar_blue_line_container__usslW",goback_container:"CommonSidebar_goback_container__IPDkX",goback_container_text:"CommonSidebar_goback_container_text__dC6S0",common_card_wrapper:"CommonSidebar_common_card_wrapper__qB5s9",common_card_container:"CommonSidebar_common_card_container__5e2QY",common_card_container_active:"CommonSidebar_common_card_container_active__uaOiC",common_card_content:"CommonSidebar_common_card_content__Yub02",common_sidebar_background_container:"CommonSidebar_common_sidebar_background_container__reNf5",common_sidebar_background_image:"CommonSidebar_common_sidebar_background_image__Ooj2M",common_sidebar_setting:"CommonSidebar_common_sidebar_setting__Ual7C",common_sidebar_edit:"CommonSidebar_common_sidebar_edit__5Vsxn",common_sidebar_site_info:"CommonSidebar_common_sidebar_site_info__fD5E+"}},63244:(e,n,t)=>{t.d(n,{Z:()=>a});const a={qviple_loader_backdrop:"Loader_qviple_loader_backdrop__ScdYl",qviple_loader_container:"Loader_qviple_loader_container__SXQ9Y",qviple_loader_rotation:"Loader_qviple_loader_rotation__ltsgT",qviple_loader_rotation_animation:"Loader_qviple_loader_rotation_animation__gy3+j",q_loading:"Loader_q_loading__bwe2c",circle_loading:"Loader_circle_loading__m+ptB",rotate_animation:"Loader_rotate_animation__IV2sY"}},23441:(e,n,t)=>{t.d(n,{YD:()=>m});var a=t(72791),o=Object.defineProperty,i=(e,n,t)=>(((e,n,t)=>{n in e?o(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t})(e,"symbol"!==typeof n?n+"":n,t),t),r=new Map,c=new WeakMap,s=0,l=void 0;function d(e){return Object.keys(e).sort().filter((n=>void 0!==e[n])).map((n=>{return"".concat(n,"_").concat("root"===n?(t=e.root)?(c.has(t)||(s+=1,c.set(t,s.toString())),c.get(t)):"0":e[n]);var t})).toString()}function u(e,n){let t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:l;if("undefined"===typeof window.IntersectionObserver&&void 0!==a){const o=e.getBoundingClientRect();return n(a,{isIntersecting:a,target:e,intersectionRatio:"number"===typeof t.threshold?t.threshold:0,time:0,boundingClientRect:o,intersectionRect:o,rootBounds:o}),()=>{}}const{id:o,observer:i,elements:c}=function(e){let n=d(e),t=r.get(n);if(!t){const a=new Map;let o;const i=new IntersectionObserver((n=>{n.forEach((n=>{var t;const i=n.isIntersecting&&o.some((e=>n.intersectionRatio>=e));e.trackVisibility&&"undefined"===typeof n.isVisible&&(n.isVisible=i),null==(t=a.get(n.target))||t.forEach((e=>{e(i,n)}))}))}),e);o=i.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),t={id:n,observer:i,elements:a},r.set(n,t)}return t}(t);let s=c.get(e)||[];return c.has(e)||c.set(e,s),s.push(n),i.observe(e),function(){s.splice(s.indexOf(n),1),0===s.length&&(c.delete(e),i.unobserve(e)),0===c.size&&(i.disconnect(),r.delete(o))}}a.Component;function m(){let{threshold:e,delay:n,trackVisibility:t,rootMargin:o,root:i,triggerOnce:r,skip:c,initialInView:s,fallbackInView:l,onChange:d}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};var m;const[_,v]=a.useState(null),y=a.useRef(),[b,h]=a.useState({inView:!!s,entry:void 0});y.current=d,a.useEffect((()=>{if(c||!_)return;let a;return a=u(_,((e,n)=>{h({inView:e,entry:n}),y.current&&y.current(e,n),n.isIntersecting&&r&&a&&(a(),a=void 0)}),{root:i,rootMargin:o,threshold:e,trackVisibility:t,delay:n},l),()=>{a&&a()}}),[Array.isArray(e)?e.toString():e,_,i,o,r,c,t,l,n]);const g=null==(m=b.entry)?void 0:m.target,f=a.useRef();_||!g||r||c||f.current===g||(f.current=g,h({inView:!!s,entry:void 0}));const p=[v,b.inView,b.entry];return p.ref=p[0],p.inView=p[1],p.entry=p[2],p}}}]);
//# sourceMappingURL=81746.1054c2b8.chunk.js.map