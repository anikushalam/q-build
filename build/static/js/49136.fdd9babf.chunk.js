"use strict";(self.webpackChunkmithkal_qviple=self.webpackChunkmithkal_qviple||[]).push([[49136,63687,21348],{90904:(e,t,l)=>{l.d(t,{Z:()=>s});const n="BorderBottom_split_content__RVPoh";var a=l(80184);const s=e=>{let{customStyleBorder:t}=e;return(0,a.jsx)("hr",{className:n,style:t})}},93638:(e,t,l)=>{l.d(t,{Z:()=>i});var n=l(39230),a=l(80476),s=l(80184);const i=e=>{let{label:t,count:l,onAction:i,customStyle:o,isTranslate:r}=e;const{t:c}=(0,n.$G)();return r?(0,s.jsxs)("div",{className:a.Z.create_btn_container,onClick:i,style:o,children:[l>0?(0,s.jsxs)("span",{children:[l," "]}):null,t]}):(0,s.jsxs)("div",{className:a.Z.create_btn_container,onClick:i,style:o,children:[l>0?(0,s.jsxs)("span",{children:[l," "]}):null,c(t)]})}},63687:(e,t,l)=>{l.r(t),l.d(t,{default:()=>s});var n=l(59393),a=l(80184);const s=e=>{let{customStyle:t,children:l}=e;return(0,a.jsx)("div",{className:n.Z.user_member_container_wrapper,style:t,children:l})}},21348:(e,t,l)=>{l.r(t),l.d(t,{default:()=>s});var n=l(59393),a=l(80184);const s=e=>{let{customStyle:t,children:l}=e;return(0,a.jsx)("div",{className:n.Z.user_member_content_wrapper,style:t,children:l})}},50706:(e,t,l)=>{l.r(t),l.d(t,{default:()=>w});var n=l(72791),a=l(39230),s=l(23441),i=l(6758),o=l(91427),r=l(57588),c=l(98684),d=l(55336),u=l(1669),_=l(2651),v=l(63687),f=l(21348),h=l(90904),m=l(56959),p=l(1095),x=l(2034),j=l(84959),y=l(93638),b=l(35517),g=l(80184);const Z=e=>{var t,l,s,i,o;let{staff:r,pid:u,fYear:_}=e;const{t:v}=(0,a.$G)(),[f,h]=(0,n.useState)(!1),[m]=(0,j.FL)(),[Z]=(0,b.tS)();return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)("label",{htmlFor:"form_16",className:x.Z.smc_card,children:(0,g.jsxs)("div",{className:x.Z.smc_card_contatiner,style:{justifyContent:"space-between",width:"100%"},children:[(0,g.jsxs)("div",{className:x.Z.smc_card_contatiner,children:[(0,g.jsx)("img",{src:null!==r&&void 0!==r&&r.staffProfilePhoto?"".concat(p.yI,"/").concat(null===r||void 0===r?void 0:r.staffProfilePhoto):"".concat(c.p3,"/feed-user-avatar.svg"),loading:"lazy",alt:"avatar",style:{height:"2.3rem",width:"2.3rem",borderRadius:"50%"}}),(0,g.jsxs)("div",{className:x.Z.smc_card_contatiner_inner,children:[(0,g.jsx)("h6",{children:"".concat(null!==(t=null===r||void 0===r?void 0:r.staffFirstName)&&void 0!==t?t:""," ").concat(null!==(l=null===r||void 0===r?void 0:r.staffMiddleName)&&void 0!==l?l:""," ").concat(null!==(s=null===r||void 0===r?void 0:r.staffLastName)&&void 0!==s?s:"")}),(0,g.jsxs)("p",{children:[v("index_number_1")," ",null!==(i=null===r||void 0===r?void 0:r.staffROLLNO)&&void 0!==i?i:""]})]})]}),null!==r&&void 0!==r&&null!==(o=r.form_16)&&void 0!==o&&o.key_a?(0,g.jsx)(y.Z,{label:"download_form_16",customStyle:{paddingBlock:"0.4rem",margin:"0"},onAction:e=>{var t;if(e.preventDefault(),null!==r&&void 0!==r&&null!==(t=r.form_16)&&void 0!==t&&t.key_a){var l;const e=window.open("".concat(p.q2,"/").concat(null===r||void 0===r||null===(l=r.form_16)||void 0===l?void 0:l.key_a),"_blank","noopener,noreferrer");e&&(e.opener=null)}}}):(0,g.jsx)(y.Z,{label:"upload_form_16",customStyle:{paddingBlock:"0.4rem",margin:"0"},onAction:()=>{}})]})}),(0,g.jsx)("input",{type:"file",id:"form_16",onChange:e=>{var t;if(null!==(t=e.target.files)&&void 0!==t&&t.length){h((e=>!e));const t=new FormData;t.append("file",e.target.files[0]),m({fileUpload:t}).then((e=>{var t,l;null!==(t=e.data)&&void 0!==t&&t.imageKey&&u&&_&&null!==r&&void 0!==r&&r._id?Z({sid:null===r||void 0===r?void 0:r._id,bodyParameter:{pid:u,key:null===(l=e.data)||void 0===l?void 0:l.imageKey,annual:_}}).then((()=>{h((e=>!e))})).catch({}):h((e=>!e))})).catch({})}},style:{display:"none"}}),f&&(0,g.jsx)(d.default,{})]})};var N=l(97892),k=l.n(N),S=l(11163),Y=l(57398);const w=e=>{var t,l,p;let{instituteId:x,pid:j}=e;const{t:y}=(0,a.$G)(),[b,N]=(0,n.useState)(""),[w,B]=(0,n.useState)(1),[C,T]=(0,n.useState)(!0),[D,F]=(0,s.YD)({skip:b}),{selectedDate:P,setSelectedDate:A}=(0,S.GX)(),[G,L]=(0,n.useState)(!1),{instituteAllStaff:R,instituteAllStaffLoading:O}=(0,i.nb)({data:{id:x,page:w,limit:10,search:b},skip:!x});(0,n.useEffect)((()=>{F&&C&&B((e=>e+1))}),[F,C]),(0,n.useEffect)((()=>{var e;if(null!==R&&void 0!==R&&null!==(e=R.list)&&void 0!==e&&e.length){var t;let e=(0,o.f)(null===R||void 0===R||null===(t=R.list)||void 0===t?void 0:t.length);T((()=>e))}}),[null===R||void 0===R?void 0:R.list]);const q=(0,n.useCallback)((0,r.J)((e=>{B((()=>1)),N(e)}),1500),[]),J=()=>{L((e=>!e))};return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)(v.default,{children:[(0,g.jsx)(f.default,{children:(0,g.jsxs)("div",{className:m.Z.fm_header_container,children:[(0,g.jsx)("h6",{children:y("form_16")}),(0,g.jsxs)("div",{className:m.Z.fm_search,children:[(0,g.jsx)("section",{className:m.Z.fm_search_container,children:(0,g.jsxs)("div",{className:m.Z.fm_search_container_inner,children:[(0,g.jsx)("img",{className:m.Z.fm_search_icon,alt:"search icon",src:"".concat(c.dB,"/navbar-search.svg")}),(0,g.jsx)("input",{type:"text",placeholder:y("search"),onChange:e=>{e.target.value?q(e.target.value):(B((()=>1)),N(""))}})]})}),(0,g.jsx)("div",{className:m.Z.fm_header_start_container,children:(0,g.jsxs)("h6",{style:{cursor:"pointer"},onClick:J,children:[y("financial_year")," : ",k()(P).format("YYYY")]})})]})]})}),(0,g.jsx)(h.Z,{}),(0,g.jsxs)(f.default,{children:[null===R||void 0===R||null===(t=R.list)||void 0===t?void 0:t.map(((e,t)=>{var l;return(null===R||void 0===R||null===(l=R.list)||void 0===l?void 0:l.length)===t+1?(0,g.jsx)("div",{ref:D,children:(0,g.jsx)(Z,{staff:e,pid:j,fYear:k()(P).format("YYYY")})},null===e||void 0===e?void 0:e._id):(0,g.jsx)(Z,{staff:e,pid:j,fYear:k()(P).format("YYYY")},null===e||void 0===e?void 0:e._id)})),O?b?(0,g.jsx)(d.default,{}):(0,g.jsx)(u.Z,{}):b?0===(null===R||void 0===R||null===(l=R.list)||void 0===l?void 0:l.length)&&(0,g.jsx)(_.Z,{title:"No staffs found related this search."}):0===(null===R||void 0===R||null===(p=R.list)||void 0===p?void 0:p.length)&&(0,g.jsx)(_.Z,{title:"No staffs."})]})]}),G&&(0,g.jsx)(Y.Z,{onClose:J,onYearChoose:e=>{A((t=>new Date("".concat(t.getMonth()+1," ").concat(t.getDate()," ").concat(e)))),J()}})]})}},2651:(e,t,l)=>{l.d(t,{Z:()=>s});var n=l(15783),a=l(80184);const s=e=>{let{title:t,subtitle:l,customStyleContainer:s,costomTextTitleStyle:i,costomTextSubtitleStyle:o}=e;return(0,a.jsxs)("div",{className:n.Z.empty_container,style:s,children:[t&&(0,a.jsx)("h6",{style:i,children:t}),l&&(0,a.jsx)("p",{style:o,children:l})]})}},57588:(e,t,l)=>{l.d(t,{J:()=>n});const n=(e,t)=>{let l;return function(){let n=this,a=arguments;clearTimeout(l),l=setTimeout((()=>{e.apply(n,a)}),t)}}},91427:(e,t,l)=>{l.d(t,{f:()=>n});const n=e=>e%10===0},80476:(e,t,l)=>{l.d(t,{Z:()=>n});const n={btn_wrapper:"Button_btn_wrapper__ihT7O",btn_container:"Button_btn_container__OaH2t",create_btn_container:"Button_create_btn_container__JuZrx",upload_excel_file:"Button_upload_excel_file__a7d0K",set_btn_container:"Button_set_btn_container__RvfRG",ccb_button:"Button_ccb_button__Mjv4T"}}}]);
//# sourceMappingURL=49136.fdd9babf.chunk.js.map