"use strict";(self.webpackChunkmithkal_qviple=self.webpackChunkmithkal_qviple||[]).push([[65914],{57387:(e,i,t)=>{t.d(i,{Z:()=>l});t(72791);var a=t(49384),n=t(78499),o=t(80184);const l=e=>{let{buttonText:i,disabled:t,customStyleButton:l,customStyleButtonText:d,onAction:r,shwoLoader:s}=e;return(0,o.jsxs)("button",{disabled:t,style:{...l},className:n.Z.button_main,onClick:r,children:[(0,o.jsx)("span",{style:{...d},children:i}),t&&s&&(0,o.jsx)("div",{style:{marginTop:"0.7vw"},children:(0,o.jsx)(a.Z,{})})]})}},35395:(e,i,t)=>{t.d(i,{Z:()=>l});var a=t(72791),n=t(98734),o=t(80184);const l=e=>{let{children:i}=e;return(0,o.jsx)(a.Suspense,{fallback:(0,o.jsx)(n.Z,{}),children:i})}},5350:(e,i,t)=>{t.r(i),t.d(i,{default:()=>x});var a=t(72791),n=t(5574),o=t(94721),l=t(27301),d=t(91007),r=t(39230),s=t(69721),c=t(16871),v=t(46500),u=t(55581),m=t(95048),f=t(23441),h=t(57387),b=t(39480),_=t(80184);function g(e){let{img:i,photoId:t,name:a,index:n,setIndex:o,assignAdmissionHead:d}=e;return(0,_.jsxs)("div",{className:l.Z.sidebarbottomitem,onClick:()=>{d(),o(n)},children:[(0,_.jsx)("img",{alt:"not found",src:"1"!==t?"".concat(s.yI,"/").concat(i):"/images/member_tab/class/default_avatar.svg"}),(0,_.jsxs)("div",{children:[(0,_.jsx)("p",{className:l.Z.namee,children:a}),(0,_.jsx)("p",{className:l.Z.desig,children:n})]})]})}const x=function(e){let{libraryModal:i,hideModal:t,edit:x,librarian:p,onParentRefetch:y}=e;const{t:j}=(0,r.$G)(),[N,Z]=(0,a.useState)(!1),M=(0,m.v9)((e=>e.idChange)),[I,S]=(0,a.useState)(!1),[w,L]=(0,a.useState)(!1),[k,R]=(0,a.useState)(1),[C,A]=(0,a.useState)([]),[F,P]=(0,f.YD)(),[T]=(0,u.IO)(),[D]=(0,u.qF)(),H=(0,m.I0)(),{data:V,refetch:O}=(0,d.OU)({id:null===M||void 0===M?void 0:M.id,page:k,limit:10},{skip:!(null!==M&&void 0!==M&&M.id)});(0,a.useEffect)((()=>{null!==M&&void 0!==M&&M.id&&O()}),[null===M||void 0===M?void 0:M.id,O]);const{oneInstituteDashboard:q,oneInstituteDashboardRefetch:U}=(0,b.gq)({id:null===M||void 0===M?void 0:M.id},{skip:!(null!==M&&void 0!==M&&M.id)});(0,a.useEffect)((()=>{null!==M&&void 0!==M&&M.id&&U()}),[null===M||void 0===M?void 0:M.id,U]),(0,a.useEffect)((()=>{V&&(V.staffIns?A([...C,...V.staffIns]):k>1&&S(!0))}),[V]),(0,a.useEffect)((()=>{P&&(I||R(k+1))}),[P]),(0,a.useEffect)((()=>{setTimeout((()=>{L(!w)}),3e3)}),[]);const B=(0,c.s0)(),[E,W]=(0,a.useState)(!1),[z,G]=(0,a.useState)(!1),[X,J]=(0,a.useState)({sid:"",name:"",index:"",photoId:"",profilePhoto:""}),K=null===C||void 0===C?void 0:C.filter((e=>(null===e||void 0===e?void 0:e._id)!==(null===p||void 0===p?void 0:p._id)));return(0,_.jsx)(n.Z,{open:i,onClose:()=>t(!1),children:(0,_.jsxs)("div",{className:l.Z.admissionModal,children:[(0,_.jsxs)("div",{className:l.Z.admissionModalhead,children:[(0,_.jsx)("h6",{children:j(x?"edit_library":"activate_library")}),(0,_.jsx)("img",{onClick:()=>t(!1),src:"/images/close-post-icon.svg",alt:""})]}),(0,_.jsx)(o.Z,{}),(0,_.jsxs)("div",{className:l.Z.admissionModalbody,children:[!E&&!x&&(0,_.jsxs)("div",{className:l.Z.assignDesignation,onClick:()=>W(!0),children:[(0,_.jsx)("img",{className:l.Z.assignManager,src:"/images/sports/avatar-circle.svg",alt:""}),(0,_.jsxs)("div",{children:[(0,_.jsx)("h6",{children:j("assign_lib_head")}),(0,_.jsx)("p",{children:j("search_from_joined_list")})]})]}),!E&&x&&(0,_.jsxs)("div",{className:l.Z.sidebarbottomitem,onClick:()=>W(!0),children:[(0,_.jsx)("img",{alt:"not found",src:"1"!==(null===p||void 0===p?void 0:p.photoId)?"".concat(s.yI,"/").concat(null===p||void 0===p?void 0:p.staffProfilePhoto):"/images/member_tab/class/default_avatar.svg"}),(0,_.jsxs)("div",{children:[(0,_.jsx)("p",{className:l.Z.namee,children:"".concat((null===p||void 0===p?void 0:p.staffFirstName)||""," ").concat(null!==p&&void 0!==p&&p.staffMiddleName?null===p||void 0===p?void 0:p.staffMiddleName:""," ").concat((null===p||void 0===p?void 0:p.staffLastName)||"")}),(0,_.jsxs)("p",{className:l.Z.desig,children:[" ",j("index_no")," ",null===p||void 0===p?void 0:p.index]})]})]}),E&&!z&&(0,_.jsxs)(_.Fragment,{children:[(0,_.jsxs)("div",{className:l.Z.searchbar,children:[(0,_.jsx)("input",{type:"text",placeholder:j("search"),className:"form-control ".concat(l.Z.searchinput)}),(0,_.jsx)("img",{className:l.Z.searchIcon,alt:"img",src:"/images/search-dash-icon.svg"})]}),(0,_.jsx)("div",{className:l.Z.items,children:x?null===K||void 0===K?void 0:K.map((e=>(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(g,{img:e.staffProfilePhoto,photoId:e.photoId,name:"".concat(e.staffFirstName," ").concat(e.staffMiddleName?e.staffMiddleName:""," ").concat(e.staffLastName),index:e.staffROLLNO,setIndex:e=>G(!0),assignAdmissionHead:()=>{J({...X,sid:null===e||void 0===e?void 0:e._id,name:"".concat(null===e||void 0===e?void 0:e.staffFirstName," ").concat(null!==e&&void 0!==e&&e.staffMiddleName?null===e||void 0===e?void 0:e.staffMiddleName:""," ").concat(null===e||void 0===e?void 0:e.staffLastName),index:null===e||void 0===e?void 0:e.staffROLLNO,photoId:null===e||void 0===e?void 0:e.photoId,profilePhoto:null===e||void 0===e?void 0:e.staffProfilePhoto})}}),(0,_.jsx)(o.Z,{})]}))):null===C||void 0===C?void 0:C.map((e=>(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(g,{img:e.staffProfilePhoto,photoId:e.photoId,name:"".concat(e.staffFirstName," ").concat(e.staffMiddleName?e.staffMiddleName:""," ").concat(e.staffLastName),index:e.staffROLLNO,setIndex:e=>G(!0),assignAdmissionHead:()=>{J({...X,sid:null===e||void 0===e?void 0:e._id,name:"".concat(null===e||void 0===e?void 0:e.staffFirstName," ").concat(null!==e&&void 0!==e&&e.staffMiddleName?null===e||void 0===e?void 0:e.staffMiddleName:""," ").concat(null===e||void 0===e?void 0:e.staffLastName),index:null===e||void 0===e?void 0:e.staffROLLNO,photoId:null===e||void 0===e?void 0:e.photoId,profilePhoto:null===e||void 0===e?void 0:e.staffProfilePhoto})}}),(0,_.jsx)(o.Z,{})]})))})]}),E&&z&&(0,_.jsxs)("div",{className:l.Z.sidebarbottomitem,children:[(0,_.jsx)("img",{alt:"not found",src:"1"!==X.photoId?"".concat(s.yI,"/").concat(X.profilePhoto):"/images/member_tab/class/default_avatar.svg"}),(0,_.jsxs)("div",{children:[(0,_.jsx)("p",{className:l.Z.namee,children:X.name}),(0,_.jsxs)("p",{className:l.Z.desig,children:["Index No. ",X.index]})]})]})]}),(0,_.jsx)("div",{className:l.Z.admissionModalfooter,children:(0,_.jsx)("div",{children:(0,_.jsx)(h.Z,{disabled:N,shwoLoader:!0,buttonText:j(x?"edit_":"activate"),customStyleButton:{minHeight:"2rem",marginTop:"0rem"},onAction:x?()=>{X.sid&&null!==p&&void 0!==p&&p._id&&(Z(!0),D({osid:null===p||void 0===p?void 0:p._id,nsid:X.sid}).then((e=>{var i;H(v.X.libraryQuery({lid:null===(i=e.data)||void 0===i?void 0:i.library,lhead:X.sid})),y(),J({...X,sid:""}),G(!z),W(!E),Z(!1),t()})))}:()=>{var e;""!==(null===M||void 0===M?void 0:M.id)&&(Z(!0),T({activate:{sid:null!==(e=null===X||void 0===X?void 0:X.sid)&&void 0!==e?e:""},id:null===M||void 0===M?void 0:M.id}).then((e=>{var i,t;e.data.status&&(Z(!1),H(v.X.libraryQuery({lid:null===(i=e.data)||void 0===i?void 0:i.library,lhead:X.sid})),B("/q/".concat(null===q||void 0===q||null===(t=q.institute)||void 0===t?void 0:t.name,"/library")))})))}})})})]})})}},65914:(e,i,t)=>{t.r(i),t.d(i,{default:()=>L});var a=t(72791),n=t(20772),o=t(97393),l=t(74737),d=t(16871),r=t(43504),s=t(95048),c=t(21093),v=t(35395),u=t(85050),m=t(69721),f=t(39230),h=t(93738),b=t(5350),_=t(80184);const g=function(e){var i,t,n,o;let{username:l,library:r,libraryRefetch:s}=e;const{t:g}=(0,f.$G)(),x=(0,d.UO)(),[p,y]=a.useState(!1);return(0,_.jsxs)("div",{style:{position:"sticky",top:"77px",height:"fit-content",width:"30%"},children:[(0,_.jsx)(c.Z,{linkType:!0,linkUrl:"/q/".concat(l,"/feed")}),(0,_.jsx)(u.Z,{dynamicImage:null!==r&&void 0!==r&&r.cover?"".concat(m.yI,"/").concat(null===r||void 0===r?void 0:r.cover):"/images/profileAndCover/library-cover.png",edit:!0,onEditAction:()=>y(!0),redirectUrl:"/q/".concat(x.username,"/library?a=site"),isSiteInfo:"LIBRARY",carryParentState:{lid:null===r||void 0===r?void 0:r._id}}),(0,_.jsx)(h.Z,{cardAsHead:!0,heading:" ".concat((null===r||void 0===r||null===(i=r.libraryHead)||void 0===i?void 0:i.staffFirstName)||""," ").concat(null!==r&&void 0!==r&&null!==(t=r.libraryHead)&&void 0!==t&&t.staffMiddleName?null===r||void 0===r||null===(n=r.libraryHead)||void 0===n?void 0:n.staffMiddleName:""," ").concat((null===r||void 0===r||null===(o=r.libraryHead)||void 0===o?void 0:o.staffLastName)||""),description:g("librarian"),customStyleCard:{borderRadius:"1rem 1rem 0 0",border:"none",marginTop:"-1.49vw"}}),(0,_.jsx)(h.Z,{cardAsHead:!1,heading:g("books"),description:g("total_books"),count:(null===r||void 0===r?void 0:r.bookCount)||0}),(0,_.jsx)(h.Z,{cardAsHead:!1,heading:g("members"),description:g("total_members"),count:(null===r||void 0===r?void 0:r.memberCount)||0,customStyleCard:{borderRadius:"0 0 12px 12px",borderBottom:"0.4px solid rgba(0, 0, 0, 0.15)"}}),(0,_.jsx)(v.Z,{children:(0,_.jsx)(b.default,{libraryModal:p,hideModal:()=>y(!1),edit:!0,librarian:null===r||void 0===r?void 0:r.libraryHead,onParentRefetch:s})})]})};var x=t(39480),p=t(55581),y=t(64783);const j={funds:"Funds_funds__zS-qH",funds2:"Funds_funds2__3x6b6",fundshead:"Funds_fundshead__SP1Pn",fundscontent:"Funds_fundscontent__4fKjX",sidebarbottomitem:"Funds_sidebarbottomitem__SqHXQ",namee:"Funds_namee__pAorP",dueActive:"Funds_dueActive__n4djD",desig:"Funds_desig__hmhD6",balanceItem:"Funds_balanceItem__VM1DB"};function N(e){let{bal:i,value:t,check:a}=e;return(0,_.jsxs)("div",{className:j.balanceItem,children:[(0,_.jsxs)("p",{children:[i,":"]}),(0,_.jsxs)("p",{children:["Rs. ",t]})]})}const Z=function(e){let{library:i}=e;const{t:t}=(0,f.$G)();return(0,_.jsxs)("div",{className:j.funds,children:[(0,_.jsxs)("div",{className:j.fundshead,children:[(0,_.jsxs)("h6",{children:[" ",t("library_fine")," "]}),(0,_.jsx)("img",{src:"/images/finance/filter-icon.svg",alt:""})]}),(0,_.jsxs)("div",{className:j.fundscontent,children:[(0,_.jsxs)("div",{className:j.sidebarbottomitem,children:[(0,_.jsx)("img",{alt:"not found",src:"/images/finance/doller-icon.svg"}),(0,_.jsxs)("div",{children:[(0,_.jsxs)("p",{className:j.namee,children:["Rs. ",null===i||void 0===i?void 0:i.totalFine," "]}),(0,_.jsx)("p",{className:j.desig,children:t("total_fine")})]})]}),(0,_.jsx)(N,{check:"false",bal:t("cash_fine"),value:null===i||void 0===i?void 0:i.offlineFine}),(0,_.jsx)(N,{check:"false",bal:t("bank_fine"),value:null===i||void 0===i?void 0:i.onlineFine}),(0,_.jsx)(N,{check:"true",bal:t("cash_lib"),value:null===i||void 0===i?void 0:i.collectedFine})]})]})},M=e=>{let{carryParentState:i,library:t}=e;const{t:a}=(0,f.$G)(),[n]=(0,r.lr)();return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsxs)("div",{className:l.Z.finance_tab_tabs,children:[(0,_.jsx)(y.Z,{tabLevel:a("all_books"),customStyleContainer:{width:"50%",marginRight:"2px",borderTopLeftRadius:"6px"},customStyleLevel:{borderTopLeftRadius:"6px"},tabValue:"book",currentValue:"book"===(null===n||void 0===n?void 0:n.get("a"))?"book":"other",carryParentState:i,activeUrl:"library?a=book"}),(0,_.jsx)(y.Z,{tabLevel:a("funds"),customStyleContainer:{width:"50%",borderTopRightRadius:"6px"},customStyleLevel:{borderTopLeftRadius:"6px"},tabValue:"fund",currentValue:"fund"===(null===n||void 0===n?void 0:n.get("a"))?"fund":"other",carryParentState:i,activeUrl:"library?a=fund"})]}),"fund"===(null===n||void 0===n?void 0:n.get("a"))?(0,_.jsx)(Z,{library:t}):null]})};var I=t(37111);const S=function(){var e,i,t,n,o,c,v,u,m,f,h,b;const y=(0,d.UO)(),[j]=(0,r.lr)(),N=(0,d.TH)(),Z=(0,s.v9)((e=>e.idChange.id)),{oneInstituteDashboard:S,oneInstituteDashboardRefetch:w}=(0,x.gq)({id:Z,skip:!Z});(0,a.useEffect)((()=>{Z&&w()}),[Z,w]);const{getLibraryDetail:L,getLibraryDetailRefetch:k}=(0,p.yX)({lid:null===S||void 0===S||null===(e=S.institute)||void 0===e||null===(i=e.library)||void 0===i?void 0:i[0],skip:!(null!==S&&void 0!==S&&null!==(t=S.institute)&&void 0!==t&&null!==(n=t.library)&&void 0!==n&&n[0])});return(0,a.useEffect)((()=>{var e,i;null!==S&&void 0!==S&&null!==(e=S.institute)&&void 0!==e&&null!==(i=e.library)&&void 0!==i&&i[0]&&k()}),[null===S||void 0===S||null===(o=S.institute)||void 0===o||null===(c=o.library)||void 0===c?void 0:c[0],k]),(0,_.jsxs)("div",{className:l.Z.main,children:[(0,_.jsx)(g,{username:y.username,library:null===L||void 0===L?void 0:L.library,libraryRefetch:k}),(0,_.jsxs)("div",{className:l.Z.finance_container,children:[null!==j&&void 0!==j&&j.get("n")?null:("book"===(null===j||void 0===j?void 0:j.get("a"))||"fund"===(null===j||void 0===j?void 0:j.get("a")))&&(0,_.jsx)(M,{carryParentState:N.state,library:null===L||void 0===L?void 0:L.library}),"book"===(null===j||void 0===j?void 0:j.get("a"))&&(0,_.jsx)(I.Z,{carryParentState:N.state,libraryId:null===L||void 0===L||null===(v=L.library)||void 0===v?void 0:v._id,pageOpenAs:"INSTITUTE",fid:null===L||void 0===L||null===(u=L.library)||void 0===u||null===(m=u.institute)||void 0===m||null===(f=m.financeDepart)||void 0===f?void 0:f[0],filterBy:null===L||void 0===L||null===(h=L.library)||void 0===h||null===(b=h.filter_by)||void 0===b?void 0:b.department})]})]})};var w=t(78068);const L=function(){var e,i;const t=(0,d.TH)();return(0,_.jsxs)("div",{className:o.Z.bgContainer,children:[(0,_.jsx)("div",{className:o.Z.navbar,children:(0,_.jsx)(n.default,{status:"home"})}),"site"===(null===(e=t.search)||void 0===e?void 0:e.substring(3))?(0,_.jsx)(w.Z,{lid:null===(i=t.state)||void 0===i?void 0:i.lid,viewAs:"INSTITUTE"}):(0,_.jsx)("div",{className:o.Z.editContainer,children:(0,_.jsx)(S,{})})]})}},64783:(e,i,t)=>{t.d(i,{Z:()=>d});t(72791);var a=t(90788),n=t(16871),o=t(43504),l=t(80184);const d=e=>{let{tabLevel:i,customStyleContainer:t,customStyleLevel:d,currentValue:r,tabValue:s,carryParentState:c,activeUrl:v}=e;const u=(0,n.UO)();return(0,l.jsx)(o.rU,{to:"/q/".concat(u.username,"/").concat(v),state:c,className:r===s?a.Z.common_tab_container_active:a.Z.common_tab_container,style:t,children:(0,l.jsx)("h6",{className:r===s?a.Z.common_tab_text_active:a.Z.common_tab_text,style:d,children:i})})}},94721:(e,i,t)=>{t.d(i,{Z:()=>_});var a=t(63366),n=t(87462),o=t(72791),l=t(59278),d=t(94419),r=t(12065),s=t(66934),c=t(31402),v=t(90133),u=t(80184);const m=["absolute","children","className","component","flexItem","light","orientation","role","textAlign","variant"],f=(0,s.ZP)("div",{name:"MuiDivider",slot:"Root",overridesResolver:(e,i)=>{const{ownerState:t}=e;return[i.root,t.absolute&&i.absolute,i[t.variant],t.light&&i.light,"vertical"===t.orientation&&i.vertical,t.flexItem&&i.flexItem,t.children&&i.withChildren,t.children&&"vertical"===t.orientation&&i.withChildrenVertical,"right"===t.textAlign&&"vertical"!==t.orientation&&i.textAlignRight,"left"===t.textAlign&&"vertical"!==t.orientation&&i.textAlignLeft]}})((e=>{let{theme:i,ownerState:t}=e;return(0,n.Z)({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:(i.vars||i).palette.divider,borderBottomWidth:"thin"},t.absolute&&{position:"absolute",bottom:0,left:0,width:"100%"},t.light&&{borderColor:i.vars?"rgba(".concat(i.vars.palette.dividerChannel," / 0.08)"):(0,r.Fq)(i.palette.divider,.08)},"inset"===t.variant&&{marginLeft:72},"middle"===t.variant&&"horizontal"===t.orientation&&{marginLeft:i.spacing(2),marginRight:i.spacing(2)},"middle"===t.variant&&"vertical"===t.orientation&&{marginTop:i.spacing(1),marginBottom:i.spacing(1)},"vertical"===t.orientation&&{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"},t.flexItem&&{alignSelf:"stretch",height:"auto"})}),(e=>{let{ownerState:i}=e;return(0,n.Z)({},i.children&&{display:"flex",whiteSpace:"nowrap",textAlign:"center",border:0,"&::before, &::after":{content:'""',alignSelf:"center"}})}),(e=>{let{theme:i,ownerState:t}=e;return(0,n.Z)({},t.children&&"vertical"!==t.orientation&&{"&::before, &::after":{width:"100%",borderTop:"thin solid ".concat((i.vars||i).palette.divider)}})}),(e=>{let{theme:i,ownerState:t}=e;return(0,n.Z)({},t.children&&"vertical"===t.orientation&&{flexDirection:"column","&::before, &::after":{height:"100%",borderLeft:"thin solid ".concat((i.vars||i).palette.divider)}})}),(e=>{let{ownerState:i}=e;return(0,n.Z)({},"right"===i.textAlign&&"vertical"!==i.orientation&&{"&::before":{width:"90%"},"&::after":{width:"10%"}},"left"===i.textAlign&&"vertical"!==i.orientation&&{"&::before":{width:"10%"},"&::after":{width:"90%"}})})),h=(0,s.ZP)("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:(e,i)=>{const{ownerState:t}=e;return[i.wrapper,"vertical"===t.orientation&&i.wrapperVertical]}})((e=>{let{theme:i,ownerState:t}=e;return(0,n.Z)({display:"inline-block",paddingLeft:"calc(".concat(i.spacing(1)," * 1.2)"),paddingRight:"calc(".concat(i.spacing(1)," * 1.2)")},"vertical"===t.orientation&&{paddingTop:"calc(".concat(i.spacing(1)," * 1.2)"),paddingBottom:"calc(".concat(i.spacing(1)," * 1.2)")})})),b=o.forwardRef((function(e,i){const t=(0,c.Z)({props:e,name:"MuiDivider"}),{absolute:o=!1,children:r,className:s,component:b=(r?"div":"hr"),flexItem:_=!1,light:g=!1,orientation:x="horizontal",role:p=("hr"!==b?"separator":void 0),textAlign:y="center",variant:j="fullWidth"}=t,N=(0,a.Z)(t,m),Z=(0,n.Z)({},t,{absolute:o,component:b,flexItem:_,light:g,orientation:x,role:p,textAlign:y,variant:j}),M=(e=>{const{absolute:i,children:t,classes:a,flexItem:n,light:o,orientation:l,textAlign:r,variant:s}=e,c={root:["root",i&&"absolute",s,o&&"light","vertical"===l&&"vertical",n&&"flexItem",t&&"withChildren",t&&"vertical"===l&&"withChildrenVertical","right"===r&&"vertical"!==l&&"textAlignRight","left"===r&&"vertical"!==l&&"textAlignLeft"],wrapper:["wrapper","vertical"===l&&"wrapperVertical"]};return(0,d.Z)(c,v.V,a)})(Z);return(0,u.jsx)(f,(0,n.Z)({as:b,className:(0,l.Z)(M.root,s),role:p,ref:i,ownerState:Z},N,{children:r?(0,u.jsx)(h,{className:M.wrapper,ownerState:Z,children:r}):null}))}));b.muiSkipListHighlight=!0;const _=b},90133:(e,i,t)=>{t.d(i,{V:()=>o,Z:()=>l});var a=t(75878),n=t(21217);function o(e){return(0,n.Z)("MuiDivider",e)}const l=(0,a.Z)("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"])},27301:(e,i,t)=>{t.d(i,{Z:()=>a});const a={admissionModal:"LibraryModal_admissionModal__Kwp7u",admissionModalhead:"LibraryModal_admissionModalhead__rV0Tw",admissionModalbody:"LibraryModal_admissionModalbody__KnG2r",admissionModalfooter:"LibraryModal_admissionModalfooter__SYQwp",assignManager:"LibraryModal_assignManager__Drwy-",searchbar:"LibraryModal_searchbar__feo+P",sidebarbottomitem:"LibraryModal_sidebarbottomitem__zi1NV",namee:"LibraryModal_namee__2U5lw",desig:"LibraryModal_desig__FrOuD",items:"LibraryModal_items__DOksS",financebtn:"LibraryModal_financebtn__y4zJF",activebtn:"LibraryModal_activebtn__jzukw",assignDesignation:"LibraryModal_assignDesignation__RB-8f"}},97393:(e,i,t)=>{t.d(i,{Z:()=>a});const a={navbar:"InsFinance_navbar__BwqhT",editContainer:"InsFinance_editContainer__JeVmy",bgContainer:"InsFinance_bgContainer__8oJKn"}},74737:(e,i,t)=>{t.d(i,{Z:()=>a});const a={main:"Main_main__4mpMH",stats:"Main_stats__05reL",stats1:"Main_stats1__WlbdF",finance_container:"Main_finance_container__2pMkG",finance_container_other:"Main_finance_container_other__+Fq3c",institute_finance_container_border:"Main_institute_finance_container_border__Jgqpr",finance_tab_tabs:"Main_finance_tab_tabs__ufRpi",item:"Main_item__RsX-U",itemIcon:"Main_itemIcon__MA5vy"}}}]);
//# sourceMappingURL=65914.736e4052.chunk.js.map