"use strict";(self.webpackChunkmithkal_qviple=self.webpackChunkmithkal_qviple||[]).push([[66553],{34219:(e,n,t)=>{t.d(n,{Z:()=>a});t(72791);var i=t(11575),s=t(80184);const a=e=>{let{customStyleContainer:n,title:t,subtitle:a,costomTextTitleStyle:o,costomTextSubtitleStyle:l}=e;return(0,s.jsxs)("div",{className:i.Z.empty_container,style:n,children:[t&&(0,s.jsx)("h6",{style:o,children:t}),a&&(0,s.jsx)("p",{style:l,children:a})]})}},11105:(e,n,t)=>{t.d(n,{Z:()=>a});t(72791);var i=t(11575),s=t(80184);const a=e=>{let{status:n}=e;return(0,s.jsx)("div",{className:i.Z.loaderGif,children:(0,s.jsx)("img",{src:"white"===n?"/images/loader/loader-bg-white.gif":"/images/loader/loader.gif",alt:"for load an items"})})}},16299:(e,n,t)=>{t.r(n),t.d(n,{default:()=>w});var i=t(72791);const s="Body_body__Xm3cr",a="Item_item__+4OO3",o="Item_head__q927B",l="Item_text__ODFOX",c="Item_content__Pb5rV",d="Item_bookmark__3jn45";var r=t(69721),u=t(72426),m=t.n(u),v=t(16871),p=t(43504),h=t(80184);const g=function(e){var n,t;let{data:i}=e;const s=(0,v.TH)(),u=(0,v.s0)(),g=(0,v.UO)();return(0,h.jsxs)("div",{className:a,onClick:()=>{u("/q/".concat(g.username,"/notifications?a=announcement&n=detail"),{state:{...s.state,annId:i._id}})},children:[(0,h.jsxs)("div",{className:o,children:[(0,h.jsx)(p.rU,{to:"/q/".concat(null===i||void 0===i||null===(n=i.institute)||void 0===n?void 0:n.name,"/profile"),onClick:e=>{e.stopPropagation()},children:(0,h.jsx)("img",{alt:"Announcement",src:null!==i&&void 0!==i&&i.institute.insProfilePhoto?"".concat(r.yI,"/").concat(null===i||void 0===i?void 0:i.institute.insProfilePhoto):"/images/ins_default_profile.svg"})}),(0,h.jsxs)("div",{className:l,children:[(0,h.jsx)("h6",{children:i&&(null===i||void 0===i?void 0:i.institute.name)}),(0,h.jsxs)("p",{children:[m()(null===i||void 0===i?void 0:i.createdAt).format("MMM Do YY")," |"," ",m()(null===i||void 0===i?void 0:i.createdAt).format("LT")]})]})]}),(0,h.jsx)("div",{className:c,children:(0,h.jsx)("p",{children:(0,h.jsx)("span",{children:null===i||void 0===i||null===(t=i.insAnnTitle)||void 0===t?void 0:t.substr(0,130)})})}),(0,h.jsx)("img",{className:d,src:"/images/bookmark-post.svg",alt:""})]})};var f=t(23441),j=t(91007),x=t(11105),_=t(34219),y=t(95048);const N=function(){var e;const[n,t]=(0,i.useState)([]),[a,o]=(0,f.YD)(),[l,c]=(0,i.useState)(!0),[d,r]=(0,i.useState)(1),u=(0,y.v9)((e=>e.idChange)),[m,v]=(0,i.useState)(!0),{data:p,refetch:N}=(0,j.Im)({id:null===u||void 0===u?void 0:u.id,page:d,limit:10},{skip:!(null!==u&&void 0!==u&&u.id)});return(0,i.useEffect)((()=>{null!==u&&void 0!==u&&u.id&&(v(!0),N())}),[null===u||void 0===u?void 0:u.id,d,N]),(0,i.useEffect)((()=>{o&&l&&r((e=>e+1))}),[o,l]),(0,i.useEffect)((()=>{var e;if(null!==p&&void 0!==p&&p.announcements){const e=[...n,...null===p||void 0===p?void 0:p.announcements],i=[...new Set(e.map(JSON.stringify))].map(JSON.parse);t(i),v(!1)}else 0===(null===p||void 0===p||null===(e=p.announcements)||void 0===e?void 0:e.length)&&v(!1);10===(null===p||void 0===p?void 0:p.announcements.length)?c(!0):c(!1)}),[null===p||void 0===p?void 0:p.announcements]),(0,h.jsxs)("div",{className:s,children:[n.map(((e,t)=>(null===n||void 0===n?void 0:n.length)===t+1?(0,h.jsx)("div",{ref:a,children:(0,h.jsx)(g,{data:e||"",time:null===e||void 0===e?void 0:e.createdAt,date:null===e||void 0===e?void 0:e.createdAt,text:null===e||void 0===e?void 0:e.insAnnDescription})},t):(0,h.jsx)(g,{data:e||"",time:null===e||void 0===e?void 0:e.createdAt,date:null===e||void 0===e?void 0:e.createdAt,text:null===e||void 0===e?void 0:e.insAnnDescription}))),m&&(0,h.jsx)(x.Z,{}),!m&&!(null!==(e=p.announcements)&&void 0!==e&&e.length)&&(0,h.jsx)(_.Z,{customStyleContainer:{marginTop:"5rem",height:"inherit"},title:"No announcement created yet."})]})},b={imgcontainer:"Details_imgcontainer__LhCve",eachposthead:"Details_eachposthead__21L6a",eachpostUserName:"Details_eachpostUserName__J0Qp6",eachpostUserTime:"Details_eachpostUserTime__haFjR",public:"Details_public__WJYXU",details:"Details_details__shTX2",tille:"Details_tille__Z0SzF",description:"Details_description__eDtds",hashTag:"Details_hashTag__nwFfC",hashtag:"Details_hashtag__EBjC7",loader:"Details_loader__doiOW",anndoc:"Details_anndoc__c1Wj2"};var k=t(11968),D=t.n(k),S=t(10307);const Z=function(e){var n,t,s,a,o,l,c,d;let{annId:u}=e;const p=(0,v.s0)(),{data:g,isFetching:f,refetch:x}=(0,j.Lr)(u,{skip:!u});return(0,i.useEffect)((()=>{u&&x()}),[u,x]),(0,h.jsx)("div",{className:b.details,children:f?(0,h.jsx)(h.Fragment,{children:(0,h.jsx)("div",{className:b.loader,children:(0,h.jsx)("img",{src:"/images/loader/loader-bg-white.gif",alt:""})})}):(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)("div",{className:b.eachposthead,style:{width:"100%",justifyContent:"space-between",alignItems:"flex-start"},children:[(0,h.jsxs)("div",{className:b.eachposthead,style:{alignItems:"flex-start"},children:[(0,h.jsx)("div",{className:b.imgcontainer,children:(0,h.jsx)("img",{alt:"not found",src:"1"!==(null===g||void 0===g||null===(n=g.announcement)||void 0===n?void 0:n.institute.photoId)?"".concat(r.yI,"/").concat(null===g||void 0===g||null===(t=g.announcement)||void 0===t||null===(s=t.institute)||void 0===s?void 0:s.insProfilePhoto):"/images/ins_default_profile.svg"})}),(0,h.jsxs)("div",{className:b.eachpostUserName,children:[(0,h.jsx)("h6",{children:g&&g.announcement&&(null===(a=g.announcement.institute)||void 0===a?void 0:a.insName)}),(0,h.jsxs)("div",{className:b.eachpostUserTime,style:{display:"flex",gap:"0.5vw",alignItems:"center"},children:[(0,h.jsx)("p",{children:g&&m()(null===(o=g.announcement)||void 0===o?void 0:o.createdAt).format("DD-M-YYYY")}),"Private"===(null===g||void 0===g||null===(l=g.announcement)||void 0===l?void 0:l.insAnnVisibility)?(0,h.jsx)("img",{className:b.public,src:"/images/post-private-icon.svg",alt:"Private"}):(0,h.jsx)("img",{className:b.public,src:"/images/privacy-icon.svg",alt:"Public"})]})]})]}),(0,h.jsx)("img",{src:"/images/close-post-icon.svg",onClick:()=>{p(-1)},alt:"close",style:{cursor:"pointer"}})]}),(0,h.jsxs)("div",{className:b.Container,children:[(0,h.jsx)("p",{className:b.tille,children:g&&(null===(c=g.announcement)||void 0===c?void 0:c.insAnnTitle)}),(0,h.jsx)("hr",{}),(0,h.jsxs)("p",{className:b.description,style:{whiteSpace:"break-spaces"},children:[g&&(null===(d=g.announcement)||void 0===d?void 0:d.insAnnDescription)," "]}),(0,h.jsx)("p",{className:b.description}),(0,h.jsx)("div",{className:b.documentContainer,children:(0,h.jsx)(D(),{className:"Example",autoPlay:!1,indicators:!0,navButtonsAlwaysVisible:!1,navButtonsAlwaysInvisible:!1,next:(e,n)=>{},prev:(e,n)=>{},onChange:(e,n)=>{},children:null===g||void 0===g?void 0:g.announcement.announcementDocument.map((e=>"image/jpeg"===e.documentType||"image/png"===e.documentType||(0,S.Y)(null===e||void 0===e?void 0:e.documentKey)?(0,h.jsx)("div",{className:b.anndoc,children:(0,h.jsx)("img",{className:b.selectedImg,src:"".concat(r.yI,"/").concat(null===e||void 0===e?void 0:e.documentKey),alt:null===e||void 0===e?void 0:e.documentName,style:{width:"100%",height:"auto"}})}):(0,h.jsx)("div",{className:b.anndoc,children:(0,h.jsx)("a",{title:"Download File",href:"https://d3dqpu54js2vfl.cloudfront.net/".concat(null===e||void 0===e?void 0:e.documentKey),target:"_blank",rel:"noopener noreferrer",children:(0,h.jsx)("img",{className:b.selectedImg,src:"/images/pdf-icon.png",alt:null===e||void 0===e?void 0:e.documentName,style:{width:"100%",height:"auto"}})})})))})})]})]})})};const w=function(){var e;const[n]=(0,p.lr)(),t=(0,v.TH)();return(0,h.jsx)(h.Fragment,{children:n.get("n")?(0,h.jsx)(Z,{annId:null===(e=t.state)||void 0===e?void 0:e.annId}):(0,h.jsx)(N,{})})}},10307:(e,n,t)=>{t.d(n,{Y:()=>s});let i=[".jpg",".jpeg",".jpe",".pjpeg",".pjp",".apng",".jif",".jfif",".jfi",".png",".gif",".webp",".tiff",".tif",".psd",".heif",".heic",".svg",".svgz",".ai",".eps",".avif"];const s=e=>{let n=!1;for(let t of i)if(null!==e&&void 0!==e&&e.includes(t)){n=!0;break}return n}},36314:(e,n,t)=>{t.d(n,{Z:()=>S});var i=t(63366),s=t(87462),a=t(72791),o=t(30831),l=t(82466),c=t(94419),d=t(21217),r=t(93457),u=t(86083),m=t(78519),v=t(52173),p=t(51184),h=t(45682),g=t(80184);const f=["component","direction","spacing","divider","children","className","useFlexGap"],j=(0,v.Z)(),x=(0,r.Z)("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,n)=>n.root});function _(e){return(0,u.Z)({props:e,name:"MuiStack",defaultTheme:j})}function y(e,n){const t=a.Children.toArray(e).filter(Boolean);return t.reduce(((e,i,s)=>(e.push(i),s<t.length-1&&e.push(a.cloneElement(n,{key:"separator-".concat(s)})),e)),[])}const N=e=>{let{ownerState:n,theme:t}=e,i=(0,s.Z)({display:"flex",flexDirection:"column"},(0,p.k9)({theme:t},(0,p.P$)({values:n.direction,breakpoints:t.breakpoints.values}),(e=>({flexDirection:e}))));if(n.spacing){const e=(0,h.hB)(t),s=Object.keys(t.breakpoints.values).reduce(((e,t)=>(("object"===typeof n.spacing&&null!=n.spacing[t]||"object"===typeof n.direction&&null!=n.direction[t])&&(e[t]=!0),e)),{}),a=(0,p.P$)({values:n.direction,base:s}),o=(0,p.P$)({values:n.spacing,base:s});"object"===typeof a&&Object.keys(a).forEach(((e,n,t)=>{if(!a[e]){const i=n>0?a[t[n-1]]:"column";a[e]=i}}));const c=(t,i)=>{return n.useFlexGap?{gap:(0,h.NA)(e,t)}:{"& > :not(style):not(style)":{margin:0},"& > :not(style) ~ :not(style)":{["margin".concat((s=i?a[i]:n.direction,{row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"}[s]))]:(0,h.NA)(e,t)}};var s};i=(0,l.Z)(i,(0,p.k9)({theme:t},o,c))}return i=(0,p.dt)(t.breakpoints,i),i};var b=t(66934),k=t(31402);const D=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{createStyledComponent:n=x,useThemeProps:t=_,componentName:l="MuiStack"}=e,r=n(N),u=a.forwardRef((function(e,n){const a=t(e),u=(0,m.Z)(a),{component:v="div",direction:p="column",spacing:h=0,divider:j,children:x,className:_,useFlexGap:N=!1}=u,b=(0,i.Z)(u,f),k={direction:p,spacing:h,useFlexGap:N},D=(0,c.Z)({root:["root"]},(e=>(0,d.Z)(l,e)),{});return(0,g.jsx)(r,(0,s.Z)({as:v,ownerState:k,ref:n,className:(0,o.Z)(D.root,_)},b,{children:j?y(x,j):x}))}));return u}({createStyledComponent:(0,b.ZP)("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,n)=>n.root}),useThemeProps:e=>(0,k.Z)({props:e,name:"MuiStack"})}),S=D},93457:(e,n,t)=>{t.d(n,{Z:()=>i});const i=(0,t(44046).ZP)()}}]);
//# sourceMappingURL=66553.27f5e3a4.chunk.js.map