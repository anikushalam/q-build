"use strict";(self.webpackChunkmithkal_qviple=self.webpackChunkmithkal_qviple||[]).push([[69236],{69236:(t,e,n)=>{n.r(e),n.d(e,{default:()=>Z});var i=n(72791);const s="Complaints_complaints__zSm-J",o="Complaints_complaintDetail__FqKdQ",a="Complaints_complaintList__2pa3v",l={complaintList:"ComplaintList_complaintList__AncqY",listcontainer:"ComplaintList_listcontainer__NnO-R",heading:"ComplaintList_heading__dffHT",listHead:"ComplaintList_listHead__ox7DD",tabs:"ComplaintList_tabs__f3YJH",item:"ComplaintList_item__Tw7T-",text:"ComplaintList_text__MQbnE",to:"ComplaintList_to__IEMdc",datetime:"ComplaintList_datetime__PK0+5",solved:"ComplaintList_solved__LTgHh",unsolved:"ComplaintList_unsolved__yztBr",dots:"ComplaintList_dots__XPKxQ",button:"ComplaintList_button__C1xWG",menu:"ComplaintList_menu__0wYna",menuItem:"ComplaintList_menuItem__vh9c6"};var c=n(72426),r=n.n(c),d=n(39230),m=n(64540),p=n(80184);function u(t){let{open:e,onClose:n,cid:i,refetch:s}=t;const{t:o}=(0,d.$G)(),[a]=(0,m.bd)();if(!e)return null;return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("div",{onClick:n,style:{position:"fixed",top:0,left:0,right:0,bottom:0,zIndex:10}}),(0,p.jsx)("div",{className:l.menu,style:{position:"absolute",zIndex:10},children:(0,p.jsx)("div",{className:l.menuItem,onClick:()=>{a(i).then((t=>{s(),n()})).catch({})},children:o("remove_complaint")})})]})}function h(t){let{setShowDetails:e,complaint:n,setCDetails:s,refetch:o}=t;const[a,c]=(0,i.useState)(!1),{t:m}=(0,d.$G)();return(0,p.jsxs)("div",{className:l.item,onClick:()=>{e(!0),s(n)},children:[(0,p.jsx)("img",{src:"/images/members/staff-complain-icon.svg",alt:""}),(0,p.jsxs)("div",{className:l.text,children:[(0,p.jsxs)("h6",{children:[null===n||void 0===n?void 0:n.complaintType," Complaint"]}),(0,p.jsxs)("div",{className:l.datetime,children:[(0,p.jsxs)("p",{children:[" ",m("date"),": ",r()(null===n||void 0===n?void 0:n.createdAt).format("LL")]}),"Unsolved"===(null===n||void 0===n?void 0:n.complaintStatus)?(0,p.jsx)("p",{className:l.unsolved,children:null===n||void 0===n?void 0:n.complaintStatus}):(0,p.jsx)("p",{className:l.solved,children:null===n||void 0===n?void 0:n.complaintStatus})]})]}),(0,p.jsx)("img",{className:l.dots,src:"/images/menu-dots-icon.svg",alt:"",onClick:()=>c(!0)}),a&&(0,p.jsx)(u,{open:a,onClose:()=>c(!1),cid:null===n||void 0===n?void 0:n._id,refetch:o})]})}const _=function(t){let{setShowDetails:e,complaints:n,setCDetails:i,refetch:s}=t;const{t:o}=(0,d.$G)();return(0,p.jsxs)("div",{className:l.complaintList,children:[(0,p.jsx)("h6",{className:l.heading,children:o("complaint_list")}),(0,p.jsx)("div",{className:l.listcontainer,children:null===n||void 0===n?void 0:n.map(((t,n)=>(0,p.jsx)(h,{complaint:t,setShowDetails:e,setCDetails:i,refetch:s},n)))}),(0,p.jsx)("div",{className:l.button,onClick:()=>e(!1),children:o("make_new_complaint")})]})},v="ComplaintDetails_complaintDetails__-WhJ2",x="ComplaintDetails_detailsheader__W0KOL",C="ComplaintDetails_detailsbody__YEngl",f="ComplaintDetails_footer__TiXAq",j="ComplaintDetails_red__oLLLm";const y=function(t){let{cDetail:e}=t;const{t:n}=(0,d.$G)();return(0,p.jsx)(p.Fragment,{children:(0,p.jsxs)("div",{className:v,children:[(0,p.jsx)("div",{className:x,children:n("complaint")}),(0,p.jsx)("hr",{}),(0,p.jsxs)("div",{className:C,children:[(0,p.jsxs)("h6",{children:[null===e||void 0===e?void 0:e.complaintType,n("complaint")]}),(0,p.jsx)("p",{children:null===e||void 0===e?void 0:e.complaintContent}),(0,p.jsx)("div",{className:f,children:(0,p.jsx)("h6",{className:j,children:null===e||void 0===e?void 0:e.complaintStatus})})]})]})})},g={newComplain:"NewComplain_newComplain__bmRXA",newComplainheader:"NewComplain_newComplainheader__lTktp",input:"NewComplain_input__2cFBM",down:"NewComplain_down__FeNuz",options:"NewComplain_options__Ql4m1",option:"NewComplain_option__bWUTa",postTextarea:"NewComplain_postTextarea__3iUB6",submitbtn:"NewComplain_submitbtn__y5E6Z",disablebtn:"NewComplain_disablebtn__bOFPG"};var w=n(72310),N=(n(68825),n(98734));const b={position:"relative",zIndex:1},k={position:"absolute",left:"14.5vw",top:"9.5vw",zIndex:10},D={position:"fixed",top:0,left:0,right:0,bottom:0,zIndex:10};function S(t){let{setComplaintData:e,open:n,onClose:i,complaintData:s,setIsOpen:o}=t;const{t:a}=(0,d.$G)();return n?(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("div",{onClick:i,style:D}),(0,p.jsxs)("div",{style:k,className:g.options,children:[(0,p.jsx)("div",{className:g.option,onClick:()=>{e({...s,type:"Open"}),o(!1)},children:a("open_complaint")}),(0,p.jsx)("div",{className:g.option,onClick:()=>{e({...s,type:"Anonymous"}),o(!1)},children:a("anonymous_complaint")})]})]}):null}const L=function(t){let{staffId:e,toast:n,setToast:s}=t;const[o,a]=(0,i.useState)(!1),[l,c]=(0,i.useState)(!1),[r]=(0,m.N)(),{t:u}=(0,d.$G)(),[h,_]=(0,i.useState)(""),[v,x]=(0,i.useState)({type:"",content:""}),C=document.querySelector("textarea");return null===C||void 0===C||C.addEventListener("keyup",(t=>{C.style.height="auto";let e=t.target.scrollHeight;C.style.height="".concat(e,"px")})),(0,p.jsxs)("div",{className:g.newComplain,children:[(0,p.jsx)(w.qu,{msg:h,run:n,setRun:s}),(0,p.jsx)("h6",{className:g.newComplainheader,children:u("make_complaint")}),(0,p.jsx)("div",{className:g.input,style:b,children:(0,p.jsxs)("div",{children:["Open"===(null===v||void 0===v?void 0:v.type)?(0,p.jsx)("h6",{onClick:()=>a(!0),children:u("open_complaint")}):"Anonymous"===(null===v||void 0===v?void 0:v.type)?(0,p.jsx)("h6",{onClick:()=>a(!0),children:u("anonymous_complaint")}):(0,p.jsx)("h6",{onClick:()=>a(!0),children:u("comp_type")}),(0,p.jsx)("img",{className:g.down,src:"/images/downn-icon.svg",alt:""})]})}),(0,p.jsx)(S,{open:o,onClose:()=>a(!1),setComplaintData:x,complaintData:v,setIsOpen:a}),(0,p.jsx)("textarea",{className:g.postTextarea,type:"text",required:!0,name:"CreateInsPost",placeholder:u("comp_des"),value:v.content,onChange:t=>x({...v,content:t.target.value})}),v.type&&v.content?(0,p.jsx)("div",{className:g.submitbtn,onClick:()=>{c((t=>!t));const t=new FormData;t.append("complaintType",v.type),t.append("complaintContent",v.content),r({sid:e&&e,complaintData:{complaintType:v.type,complaintContent:v.content}}).then((t=>{t.data.message&&(_("Successfully Submitted"),s(!0),x({...v,content:"",type:""}),c((t=>!t)))}))},children:u("send_complaint")}):(0,p.jsx)("div",{className:"".concat(g.submitbtn," ").concat(g.disablebtn),children:u("send_complaint")}),l&&(0,p.jsx)(N.Z,{})]})};const Z=function(t){let{staffId:e}=t;const[n,l]=(0,i.useState)(!1),[c,r]=(0,i.useState)(),[d,u]=(0,i.useState)(!1),{data:h,refetch:v}=(0,m.AO)(e,{skip:!e});return(0,i.useEffect)((()=>{v()}),[d]),(0,p.jsxs)("div",{className:s,children:[(0,p.jsxs)("div",{className:o,children:[n&&(0,p.jsx)(y,{cDetail:c}),!n&&(0,p.jsx)(L,{staffId:e,toast:d,setToast:u})]}),(0,p.jsx)("div",{className:a,children:(0,p.jsx)(_,{setShowDetails:l,complaints:null===h||void 0===h?void 0:h.complaints,setCDetails:r,refetch:v})})]})}},72310:(t,e,n)=>{n.d(e,{Ch:()=>d,SY:()=>c,qu:()=>r});var i=n(72791),s=n(36314),o=n(34129),a=n(63515),l=n(80184);const c=t=>{let{msg:e,run:n,setRun:c}=t;const r=i.forwardRef((function(t,e){return(0,l.jsx)(a.Z,{elevation:6,ref:e,variant:"filled",...t})})),d=(t,e)=>{"clickaway"!==e&&c(!1)};return(0,l.jsx)(s.Z,{spacing:2,sx:{width:"100%",position:"stickey"},children:(0,l.jsx)(o.Z,{anchorOrigin:{vertical:"bottom",horizontal:"right"},open:n,autoHideDuration:3e3,onClose:d,children:(0,l.jsx)(r,{onClose:d,severity:"error",sx:{width:"100%"},children:e})})})},r=t=>{let{msg:e,run:n,setRun:c}=t;const r=i.forwardRef((function(t,e){return(0,l.jsx)(a.Z,{elevation:6,ref:e,variant:"filled",...t})})),d=(t,e)=>{"clickaway"!==e&&c(!1)};return(0,l.jsx)(s.Z,{spacing:2,sx:{width:"100%",position:"stickey"},children:(0,l.jsx)(o.Z,{anchorOrigin:{vertical:"bottom",horizontal:"right"},open:n,autoHideDuration:3e3,onClose:d,children:(0,l.jsx)(r,{onClose:d,severity:"success",sx:{width:"100%"},children:e})})})},d=t=>{let{msg:e,run:n,setRun:c,postiton:r,type:d}=t;const m=i.forwardRef((function(t,e){return(0,l.jsx)(a.Z,{elevation:6,ref:e,variant:"filled",...t})})),p=(t,e)=>{"clickaway"!==e&&c(!1)};return(0,l.jsx)(s.Z,{spacing:2,sx:{width:"100%",position:'"stickey"'},children:(0,l.jsx)(o.Z,{anchorOrigin:{vertical:"".concat(r),horizontal:"right"},open:n,autoHideDuration:3e3,onClose:p,children:(0,l.jsx)(m,{onClose:p,severity:d,sx:{width:"100%"},children:e})})})}},36314:(t,e,n)=>{n.d(e,{Z:()=>k});var i=n(63366),s=n(87462),o=n(72791),a=n(30831),l=n(82466),c=n(94419),r=n(21217),d=n(93457),m=n(86083),p=n(78519),u=n(52173),h=n(51184),_=n(45682),v=n(80184);const x=["component","direction","spacing","divider","children","className","useFlexGap"],C=(0,u.Z)(),f=(0,d.Z)("div",{name:"MuiStack",slot:"Root",overridesResolver:(t,e)=>e.root});function j(t){return(0,m.Z)({props:t,name:"MuiStack",defaultTheme:C})}function y(t,e){const n=o.Children.toArray(t).filter(Boolean);return n.reduce(((t,i,s)=>(t.push(i),s<n.length-1&&t.push(o.cloneElement(e,{key:"separator-".concat(s)})),t)),[])}const g=t=>{let{ownerState:e,theme:n}=t,i=(0,s.Z)({display:"flex",flexDirection:"column"},(0,h.k9)({theme:n},(0,h.P$)({values:e.direction,breakpoints:n.breakpoints.values}),(t=>({flexDirection:t}))));if(e.spacing){const t=(0,_.hB)(n),s=Object.keys(n.breakpoints.values).reduce(((t,n)=>(("object"===typeof e.spacing&&null!=e.spacing[n]||"object"===typeof e.direction&&null!=e.direction[n])&&(t[n]=!0),t)),{}),o=(0,h.P$)({values:e.direction,base:s}),a=(0,h.P$)({values:e.spacing,base:s});"object"===typeof o&&Object.keys(o).forEach(((t,e,n)=>{if(!o[t]){const i=e>0?o[n[e-1]]:"column";o[t]=i}}));const c=(n,i)=>{return e.useFlexGap?{gap:(0,_.NA)(t,n)}:{"& > :not(style):not(style)":{margin:0},"& > :not(style) ~ :not(style)":{["margin".concat((s=i?o[i]:e.direction,{row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"}[s]))]:(0,_.NA)(t,n)}};var s};i=(0,l.Z)(i,(0,h.k9)({theme:n},a,c))}return i=(0,h.dt)(n.breakpoints,i),i};var w=n(66934),N=n(31402);const b=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{createStyledComponent:e=f,useThemeProps:n=j,componentName:l="MuiStack"}=t,d=e(g),m=o.forwardRef((function(t,e){const o=n(t),m=(0,p.Z)(o),{component:u="div",direction:h="column",spacing:_=0,divider:C,children:f,className:j,useFlexGap:g=!1}=m,w=(0,i.Z)(m,x),N={direction:h,spacing:_,useFlexGap:g},b=(0,c.Z)({root:["root"]},(t=>(0,r.Z)(l,t)),{});return(0,v.jsx)(d,(0,s.Z)({as:u,ownerState:N,ref:e,className:(0,a.Z)(b.root,j)},w,{children:C?y(f,C):f}))}));return m}({createStyledComponent:(0,w.ZP)("div",{name:"MuiStack",slot:"Root",overridesResolver:(t,e)=>e.root}),useThemeProps:t=>(0,N.Z)({props:t,name:"MuiStack"})}),k=b},93457:(t,e,n)=>{n.d(e,{Z:()=>i});const i=(0,n(44046).ZP)()}}]);
//# sourceMappingURL=69236.29e134a5.chunk.js.map