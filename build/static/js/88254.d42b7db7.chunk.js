(self.webpackChunkmithkal_qviple=self.webpackChunkmithkal_qviple||[]).push([[88254],{61516:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>I});var a=n(96873),r=n(72791),o=n(39230),s=n(27331),l=n(98684),c=n(61055),i=n(16871),u=n(19335),d=n(52245),_=n(80184);const h=e=>{let{selectLabel:t,onClick:n,selectedValue:a,options:s,customStyleContainer:c,customLabelStyle:i,customListStyle:u,errorShow:h,defalutValue:m}=e;const{t:f}=(0,o.$G)(),[p,v]=(0,r.useState)(!1),[g,y]=(0,r.useState)(""),j=()=>{v((e=>!e))};(0,r.useEffect)((()=>{m&&y(m)}),[m]);return(0,_.jsxs)("div",{className:d.Z.form_input_container,style:{...c},children:[(0,_.jsxs)("p",{className:d.Z.join_form_select_paragraph,style:{...i},children:[t,h&&(0,_.jsxs)("span",{style:{color:"red",marginLeft:"15px"},children:["* ",f("form_require_label")]})]}),(0,_.jsxs)("section",{className:d.Z.join_form_select_custom,onClick:j,children:[g?(0,_.jsx)("p",{className:d.Z.join_form_select_custom_paragraph,children:null!==g&&void 0!==g?g:""}):(0,_.jsx)("p",{className:d.Z.join_form_select_custom_paragraph,style:{color:"rgba(18, 18, 18, 0.5)"},children:a}),p?(0,_.jsx)("img",{className:d.Z.join_form_select_custom_rotate_icon,src:"".concat(l.J7,"/down.svg"),alt:"categor icon"}):(0,_.jsx)("img",{className:d.Z.join_form_select_custom_icon,src:"".concat(l.J7,"/down.svg"),alt:"categor icon"})]}),p&&(0,_.jsx)(_.Fragment,{children:(0,_.jsx)("section",{className:d.Z.join_form_select_custom_list,style:u,children:null===s||void 0===s?void 0:s.map(((e,t)=>(0,_.jsx)("p",{onClick:()=>{return t=null===e||void 0===e?void 0:e.key,n(t),j(),void y(t);var t},className:d.Z.join_form_select_custom_paragraph_option,children:f(null===e||void 0===e?void 0:e.name)},t)))})})]})},m=[{name:"male",key:"Male"},{name:"female",key:"Female"},{name:"other",key:"Other"}];var f=n(60924),p=n(97005);function v(e){return e*Math.PI/180}async function g(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{horizontal:!1,vertical:!1};const r=await(o=e,new Promise(((e,t)=>{const n=new Image;n.addEventListener("load",(()=>e(n))),n.addEventListener("error",(e=>t(e))),n.setAttribute("crossOrigin","anonymous"),n.src=o})));var o;const s=document.createElement("canvas"),l=s.getContext("2d");if(!l)return null;const c=v(n),{width:i,height:u}=function(e,t,n){const a=v(n);return{width:Math.abs(Math.cos(a)*e)+Math.abs(Math.sin(a)*t),height:Math.abs(Math.sin(a)*e)+Math.abs(Math.cos(a)*t)}}(r.width,r.height,n);s.width=i,s.height=u,l.translate(i/2,u/2),l.rotate(c),l.scale(a.horizontal?-1:1,a.vertical?-1:1),l.translate(-r.width/2,-r.height/2),l.drawImage(r,0,0);const d=l.getImageData(t.x,t.y,t.width,t.height);return s.width=t.width,s.height=t.height,l.putImageData(d,0,0),new Promise(((e,t)=>{s.toBlob((t=>{t.name="cropped.jpeg",e({file:t,url:URL.createObjectURL(t)})}),"image/jpeg")}))}var y=n(48293);const j="ImageCrop_image_crop__v3hLt",x="ImageCrop_crop_container__LXwYr",b="ImageCrop_crop_action__Bj2qe",D="ImageCrop_crop_action_cancel__t3KDp",M="ImageCrop_crop_action_crop__uNFId",S=e=>{let{widthRatio:t,heightRatio:n,fileUrl:a,setFileUrl:o,onFileBlob:s,onClose:l}=e;const[c,i]=(0,r.useState)({x:0,y:0}),[u,d]=(0,r.useState)(1),[h,m]=(0,r.useState)(0),[f,v]=(0,r.useState)(null);return(0,_.jsx)(y.Z,{customOverlayStyle:{border:"none",borderRadius:"0"},children:(0,_.jsxs)("div",{className:j,children:[(0,_.jsx)("div",{className:x,children:(0,_.jsx)(p.Z,{image:a,crop:c,zoom:u,rotation:h,aspect:t/n,onZoomChange:d,onRotationChange:m,onCropChange:i,onCropComplete:(e,t)=>{v(t)}})}),(0,_.jsxs)("div",{className:b,children:[(0,_.jsx)("h6",{onClick:()=>l(""),className:D,children:"cancel"}),(0,_.jsx)("h6",{onClick:async()=>{try{const{file:e,url:t}=await g(a,f,h);o(t),s(e)}catch(e){console.log(e)}},className:M,children:"crop"})]})]})})};var $=n(99183),w=n(53141),C=n(53982);var N=n(43997),Z=n(85794),k=n(79992);const I=()=>{const{t:e}=(0,o.$G)(),t=(0,i.TH)(),n=(0,i.s0)(),[d,p]=(0,r.useState)({username:"",userLegalName:"",userDateOfBirth:"",userGender:""}),[v,g]=(0,r.useState)(""),[y,j]=(0,r.useState)(""),[x,b]=(0,r.useState)(!1),[D,M]=(0,r.useState)(!1),[I,Y]=(0,r.useState)(""),[F,O]=(0,r.useState)({open:!1,msg:"",variant:"error"}),[U]=(0,C.Ne)(),L=e=>{p((t=>({...t,[e.target.name]:e.target.value})))};return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(a.Z,{children:(0,_.jsxs)("div",{className:s.Z.auth_card_wrapper,children:[(0,_.jsxs)("div",{className:s.Z.auth_create_container,children:[(0,_.jsxs)("div",{children:[(0,_.jsx)("h6",{className:s.Z.auth_card_title,style:{fontSize:"1rem"},children:e("create_profile")}),(0,_.jsx)("h6",{className:s.Z.auth_card_subtitle,style:{fontSize:"0.7rem"},children:e("create_profile_note")})]}),(0,_.jsx)("label",{htmlFor:"profile",className:s.Z.create_profile_label,children:(0,_.jsx)("img",{src:y||"".concat(l.p3,"/feed-user-avatar.svg"),alt:"profile icon"})}),(0,_.jsx)("input",{type:"file",accept:"image/*",id:"profile",style:{display:"none"},onChange:e=>{var t;if((null===(t=e.target.files)||void 0===t?void 0:t.length)>0){const t=URL.createObjectURL(e.target.files[0]);g(e.target.files[0]),j(t),b(!0)}}})]}),(0,_.jsxs)("div",{className:s.Z.auth_login_form,style:{marginTop:"0"},children:[" ",(0,_.jsxs)("form",{onSubmit:e=>{var a;e.preventDefault();let r=(0,$.l)(d,["userDateOfBirth"]);if((0,$.x)(r)&&null!==(a=t.state)&&void 0!==a&&a.phoneNumber)if(M((e=>!e)),(0,w.jU)(null===d||void 0===d?void 0:d.username))O({msg:"Special Character not allowed in username.",open:!0,variant:"error"});else{var o;const e=new FormData;for(let t in d)"userDateOfBirth"===t?e.append(t,(0,N._1)(d[t])):e.append(t,d[t]);v&&e.append("file",v),U({userPhoneNumber:null===(o=t.state)||void 0===o?void 0:o.phoneNumber,profileCreation:e}).then((e=>{var t,a;const r=(0,k.ZH)(null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.encrypt);var o;null!==r&&void 0!==r&&null!==(a=r.user)&&void 0!==a&&a._id?n("/user/create/account/password",{state:{uid:null===r||void 0===r||null===(o=r.user)||void 0===o?void 0:o._id}}):O({msg:"user profile is not created",open:!0,variant:"error"});M((e=>!e))})).catch((e=>{O({msg:"Time out of request with reason ".concat(e),open:!0,variant:"error"}),M((e=>!e))}))}else Y(r)},children:[(0,_.jsx)(c.Z,{label:e("name"),placeholder:e("name_placeholder"),name:"userLegalName",value:d.userLegalName,type:"text",onChange:L,errorShow:I.userLegalName}),(0,_.jsx)(c.Z,{label:e("username"),placeholder:e("username_placeholder"),name:"username",value:d.username,type:"text",onChange:L,errorShow:I.username}),(0,_.jsx)(f.Z,{label:e("date_of_birth"),placeholder:"dd/mm/yyyy",name:"userDateOfBirth",value:d.userDateOfBirth,onChange:e=>{(e=>{const t=new Date,n=null===e||void 0===e?void 0:e.split("-");return!(t<=new Date("".concat(n[2],"-").concat(n[1],"-").concat(n[0])))})(e)?p((t=>({...t,userDateOfBirth:(0,N.jh)(e)}))):O({msg:"Date of birth is not for upcoming date",open:!0,variant:"error"})}}),(0,_.jsx)(h,{selectLabel:e("gender"),name:"userGender",selectedValue:e("please_select_your_gender"),options:m,defalutValue:d.userGender,onClick:e=>{p((t=>({...t,userGender:e})))},errorShow:I.userGender}),(0,_.jsx)(u.Z,{type:"submit",buttonText:e("continue_to_proceed"),disabled:D,customStyleButton:{marginTop:"1.5rem"}})]})]})]})}),x&&(0,_.jsx)(S,{widthRatio:1,heightRatio:1,fileUrl:y,setFileUrl:j,onFileBlob:e=>{g(e),b(!1)},onClose:b}),(0,_.jsx)(Z.Z,{eventState:F,eventStateHandler:O})]})}},11163:(e,t,n)=>{"use strict";n.d(t,{BK:()=>h,Ff:()=>l,GX:()=>g,S4:()=>u,o:()=>m,oz:()=>c});var a=n(72791),r=n(43997),o=n(97892),s=n.n(o);const l=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],c=["January","February","March","April","May","June","July","August","September","October","November","December"],i={0:4,1:3,2:4,3:3,4:4,5:3,6:4,7:4,8:3,9:4,10:3,11:4},u=()=>{let e=(new Date).getFullYear(),t=e-70,n=[];for(let a=e+30;a>=t;a--)n.push(a);return n.reverse()},d=[1,2,3,4,5,6,0],_=()=>new Date,h=(e,t)=>{var n,a;let o;o=t?null===(n=s()(e))||void 0===n?void 0:n.format("YYYY-MM-DD"):(0,r.O_)(e);let l=new Date,c=null===(a=s()(l))||void 0===a?void 0:a.format("YYYY-MM-DD"),i=new Date("".concat(o)),u=new Date("".concat(c));return i.getTime()===u.getTime()},m=(e,t)=>e===(e=>{let t=null===e||void 0===e?void 0:e.split("-"),n=(null===t||void 0===t?void 0:t[0])>9?null===t||void 0===t?void 0:t[0]:"0".concat(null===t||void 0===t?void 0:t[0]),a=(null===t||void 0===t?void 0:t[1])>9?null===t||void 0===t?void 0:t[1]:"0".concat(null===t||void 0===t?void 0:t[1]);return"".concat(n,"/").concat(a,"/").concat(null===t||void 0===t?void 0:t[2])})(t),f=e=>(e=>{let t=new Date(e);return new Date(t.getFullYear(),t.getMonth()+1,0)})(e).getDate(),p=e=>(e=>{let t=new Date(e);return new Date(t.getFullYear(),t.getMonth(),0)})(e).getDate(),v=e=>d.indexOf((e=>{let t=new Date(e);return new Date(t.getFullYear(),t.getMonth(),1).getDay()})(e)),g=e=>{const[t,n]=(0,a.useState)(_());(0,a.useEffect)((()=>{e&&n((e=>{let t=(0,r.O_)(e);return new Date(t)})(e))}),[e]);const o=p(s=t)-v(s);var s;const u=(0,a.useMemo)((()=>((e,t)=>{let n=1,a=1,r=new Date(e);const o={};for(let s=1;s<7;s++){o[s]=[];for(let c=1;c<8;c++)if(1===s)if(c<=v(e)+1){let e=r.getMonth()+1,a="".concat(r.getFullYear(),"-").concat(e>9?e:"0".concat(e),"-").concat(n>9?n:"0".concat(n)),c=new Date(a);o[s]=[...o[s],{type:"PREVIOUS",date:"".concat(t,"-").concat(0===r.getMonth()?12:r.getMonth(),"-").concat(0===r.getMonth()?r.getFullYear()-1:r.getFullYear()),value:t,day:l[c.getDay()]}],++t}else{let e=r.getMonth()+1,t="".concat(r.getFullYear(),"-").concat(e>9?e:"0".concat(e),"-").concat(n>9?n:"0".concat(n)),a=new Date(t);o[s]=[...o[s],{type:"CURRENT",date:"".concat(n,"-").concat(r.getMonth()+1,"-").concat(r.getFullYear()),value:n,day:l[a.getDay()]}],n++}else if(s>1&&n<f(e)+1){let e=r.getMonth()+1,t="".concat(r.getFullYear(),"-").concat(e>9?e:"0".concat(e),"-").concat(n>9?n:"0".concat(n)),a=new Date(t);o[s]=[...o[s],{type:"CURRENT",date:"".concat(n,"-").concat(r.getMonth()+1,"-").concat(r.getFullYear()),value:n,day:l[a.getDay()]}],n++}else{let e=r.getMonth()+1,t="".concat(r.getFullYear(),"-").concat(e>9?e:"0".concat(e),"-").concat(n>9?n:"0".concat(n)),c=new Date(t);o[s]=[...o[s],{type:"NEXT_MONTH",date:"".concat(a,"-").concat(r.getMonth()+2===13?1:r.getMonth()+2,"-").concat(r.getMonth()+2===13?r.getFullYear()+1:r.getFullYear()),value:a,day:l[c.getDay()]}],a++}}return o})(t,o)),[t,o]),d=(0,a.useCallback)((()=>{n((e=>new Date(e.getFullYear(),e.getMonth()-1,1)))}),[]),h=(0,a.useCallback)((()=>{n((e=>new Date(e.getFullYear(),e.getMonth()+1,1)))}),[]),g=(0,a.useCallback)((e=>{let t=null===e||void 0===e?void 0:e.split("-"),a=new Date("".concat(t[2],"-").concat(t[1],"-").concat(t[0]));n(a)}),[]);return{selectedDate:t,setSelectedDate:n,getPreviousMonth:d,getNextMonth:h,getSelectedDate:g,generateCalendar:u,getToday:_,dayName:l,monthName:c,getCompareDate:m,monthPage:i}}},60924:(e,t,n)=>{"use strict";n.d(t,{Z:()=>m});var a=n(39230),r=n(52245),o=n(72791),s=n(11163),l=n(8728),c=n(48293),i=n(98684),u=n(97892),d=n.n(u),_=n(80184);const h=e=>{var t;let{onClose:n,date:a,onDateSelect:r}=e;const{selectedDate:u,setSelectedDate:h,getPreviousMonth:m,getNextMonth:f,getSelectedDate:p,generateCalendar:v}=(0,s.GX)(a),[g,y]=(0,o.useState)(""),j=(0,s.S4)(),x=(0,o.useMemo)((()=>j.indexOf(u.getFullYear())),[u,j]),[b,D]=(0,o.useState)(0),M=(0,o.useMemo)((()=>j.slice(x+12*b,b?x+12*b+12:x+12)),[j,b,x]),S=(0,o.useCallback)((()=>{y(g?"":"MONTH")}),[g]),$=(0,o.useCallback)((()=>{y(g?"":"YEAR")}),[g]),w=(0,o.useCallback)((e=>{h((t=>new Date("".concat(e," ").concat(t.getDate()," ").concat(t.getFullYear())))),S()}),[S]),C=(0,o.useCallback)((e=>{h((t=>new Date("".concat(t.getMonth()+1," ").concat(t.getDate()," ").concat(e)))),$()}),[$]);return(0,_.jsx)(c.Z,{onClose:n,customBackdropStyle:{zIndex:"2000"},customOverlayStyle:{zIndex:"2000"},children:(0,_.jsxs)("div",{className:l.Z.calendar,children:[(0,_.jsxs)("div",{className:l.Z.calendar_top,children:[(0,_.jsx)("img",{src:"".concat(i.Fk,"/next.svg"),alt:"previous icon",onClick:()=>{g?"YEAR"===g&&D((e=>e-1)):m()},style:{rotate:"180deg"}}),(0,_.jsxs)("h6",{children:[(0,_.jsx)("span",{onClick:S,children:d()(u).format("MMMM")})," ",(0,_.jsx)("span",{onClick:$,children:d()(u).format("YYYY")})]}),(0,_.jsx)("img",{src:"".concat(i.Fk,"/next.svg"),alt:"next icon",onClick:()=>{g?"YEAR"===g&&D((e=>e+1)):f()}})]}),"MONTH"===g?(0,_.jsx)("div",{className:l.Z.calendar_month,children:s.oz.map((e=>(0,_.jsx)("p",{className:d()(u).format("MMMM")===e?"".concat(l.Z.calendar_month_value," ").concat(l.Z.calendar_month_value_active):l.Z.calendar_month_value,onClick:()=>w(e),children:e},e)))}):"YEAR"===g?(0,_.jsx)("div",{className:l.Z.calendar_month,children:null===M||void 0===M?void 0:M.map((e=>(0,_.jsx)("p",{className:d()(u).format("YYYY")==="".concat(e)?"".concat(l.Z.calendar_month_value," ").concat(l.Z.calendar_month_value_active):l.Z.calendar_month_value,onClick:()=>C(e),children:e},e)))}):(0,_.jsxs)("div",{children:[(0,_.jsx)("div",{className:l.Z.calendar_days,children:s.Ff.map((e=>(0,_.jsx)("p",{className:l.Z.calendar_days_label,children:e},e)))}),null===(t=Object.values(v))||void 0===t?void 0:t.map(((e,t)=>(0,_.jsx)("div",{className:l.Z.calendar_days,children:e.map((e=>(0,_.jsx)("p",{className:l.Z.calendar_days_value,style:{"--calendar-border":(0,s.BK)(null===e||void 0===e?void 0:e.date)?"#123456":(0,s.o)(u,null===e||void 0===e?void 0:e.date)?"red":""},onClick:()=>{return t=null===e||void 0===e?void 0:e.date,p(t),r(t),void n();var t},children:null===e||void 0===e?void 0:e.value},null===e||void 0===e?void 0:e.date)))},t)))]})]})})},m=e=>{let{label:t,name:n,msg:s,value:l,onChange:c,placeholder:u,customFormInputContainer:d,customFormInputLabel:m,customFormInput:f,errorShow:p,disabled:v}=e;const{t:g}=(0,a.$G)(),[y,j]=(0,o.useState)(!1),x=()=>{j((e=>!e))};return(0,_.jsxs)("div",{className:r.Z.form_input_container,style:d,children:[t&&(0,_.jsxs)("label",{className:r.Z.form_input_label,style:m,htmlFor:n,children:[t,s?(0,_.jsx)("span",{className:r.Z.form_input_label_error,children:s}):p?(0,_.jsxs)("span",{className:r.Z.form_input_label_error,children:["* ",g("form_require_label")]}):null]}),(0,_.jsx)("input",{className:r.Z.form_input,type:"text",defaultValue:l,name:n,placeholder:u,disabled:v,style:f,onFocus:x}),(0,_.jsx)("img",{src:"".concat(i.Fk,"/calendar.svg"),alt:"calander-icon",className:r.Z.form_calendar_icon,onClick:x}),y&&(0,_.jsx)(h,{onClose:x,onDateSelect:c,date:l})]})}},61055:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var a=n(39230),r=n(52245),o=n(80184);const s=["tel","number"],l=e=>{let{label:t,name:n,msg:l,type:c,value:i,onChange:u,placeholder:d,maxLength:_,customFormInputContainer:h,customFormInputLabel:m,customFormInput:f,errorShow:p,disabled:v,children:g}=e;const{t:y}=(0,a.$G)();return(0,o.jsxs)("div",{className:r.Z.form_input_container,style:h,children:[t&&(0,o.jsxs)("label",{className:r.Z.form_input_label,style:m,htmlFor:n,children:[t,l?(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("span",{className:r.Z.form_input_label_error,children:[" "," "," ",l]})}):p?(0,o.jsxs)("span",{className:r.Z.form_input_label_error,children:["* ",y("form_require_label")]}):null,g]}),s.includes(c)?(0,o.jsx)("input",{className:r.Z.form_input,type:c,value:i,onChange:u,name:n,placeholder:d,maxLength:null!==_&&void 0!==_?_:100,disabled:v,style:f}):(0,o.jsx)("input",{className:r.Z.form_input,type:c,value:i,onChange:u,name:n,placeholder:d,disabled:v,style:f})]})}},48293:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var a=n(72791),r=n(54164),o=n(15783),s=n(80184);const l=e=>{let{onBackdropClose:t,customBackdropStyle:n}=e;const l=(0,a.useCallback)((()=>{if(!t)return null;t()}),[t]);return r.createPortal((0,s.jsx)("div",{className:o.Z.modal_backdrop,onClick:l,style:n}),document.getElementById("backdrop"))},c=e=>{let{modalState:t,isHide:n,customOverlayStyle:a,children:l}=e;return r.createPortal((0,s.jsx)("div",{className:o.Z.modal_overlay,style:{...a},children:l}),document.getElementById("overlay"))},i=e=>{let{onClose:t,modalState:n,customBackdropStyle:a,customOverlayStyle:r,children:o}=e;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(l,{onBackdropClose:t,customBackdropStyle:a}),(0,s.jsx)(c,{customOverlayStyle:r,children:o})]})}},43997:(e,t,n)=>{"use strict";n.d(t,{O_:()=>o,_1:()=>a,jh:()=>r});const a=e=>{let t=null===e||void 0===e?void 0:e.split("/");return"".concat(t[2],"-").concat(t[1],"-").concat(t[0])},r=e=>{var t;let n=[];return n=null!==e&&void 0!==e&&e.includes("-")?null===e||void 0===e?void 0:e.split("-"):null===e||void 0===e?void 0:e.split("/"),(null===(t=n[2])||void 0===t?void 0:t.length)>2?"".concat(+n[0]>9?n[0]:"0".concat(+n[0]),"/").concat(+n[1]>9?n[1]:"0".concat(+n[1]),"/").concat(n[2]):"".concat(+n[2]>9?n[2]:"0".concat(+n[2]),"/").concat(+n[1]>9?n[1]:"0".concat(+n[1]),"/").concat(n[0])},o=e=>{var t;let n=[];return n=null!==e&&void 0!==e&&e.includes("-")?null===e||void 0===e?void 0:e.split("-"):null===e||void 0===e?void 0:e.split("/"),(null===(t=n[2])||void 0===t?void 0:t.length)>2?"".concat(n[2],"-").concat(+n[1]>9?n[1]:"0".concat(+n[1]),"-").concat(+n[0]>9?n[0]:"0".concat(+n[0])):"".concat(n[0],"-").concat(+n[1]>9?n[1]:"0".concat(+n[1]),"-").concat(+n[2]>9?n[2]:"0".concat(+n[2]))}},99183:(e,t,n)=>{"use strict";n.d(t,{l:()=>a,x:()=>r});const a=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n={};for(let a in e)null!==t&&void 0!==t&&t.includes(a)||e[a]||(n[a]="* required");return n},r=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};for(let t in e)return!1;return!0}},97892:function(e){e.exports=function(){"use strict";var e=1e3,t=6e4,n=36e5,a="millisecond",r="second",o="minute",s="hour",l="day",c="week",i="month",u="quarter",d="year",_="date",h="Invalid Date",m=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,f=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,p={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||t[0])+"]"}},v=function(e,t,n){var a=String(e);return!a||a.length>=t?e:""+Array(t+1-a.length).join(n)+e},g={s:v,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),a=Math.floor(n/60),r=n%60;return(t<=0?"+":"-")+v(a,2,"0")+":"+v(r,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var a=12*(n.year()-t.year())+(n.month()-t.month()),r=t.clone().add(a,i),o=n-r<0,s=t.clone().add(a+(o?-1:1),i);return+(-(a+(n-r)/(o?r-s:s-r))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:i,y:d,w:c,d:l,D:_,h:s,m:o,s:r,ms:a,Q:u}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},y="en",j={};j[y]=p;var x="$isDayjsObject",b=function(e){return e instanceof $||!(!e||!e[x])},D=function e(t,n,a){var r;if(!t)return y;if("string"==typeof t){var o=t.toLowerCase();j[o]&&(r=o),n&&(j[o]=n,r=o);var s=t.split("-");if(!r&&s.length>1)return e(s[0])}else{var l=t.name;j[l]=t,r=l}return!a&&r&&(y=r),r||!a&&y},M=function(e,t){if(b(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new $(n)},S=g;S.l=D,S.i=b,S.w=function(e,t){return M(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var $=function(){function p(e){this.$L=D(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[x]=!0}var v=p.prototype;return v.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(S.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var a=t.match(m);if(a){var r=a[2]-1||0,o=(a[7]||"0").substring(0,3);return n?new Date(Date.UTC(a[1],r,a[3]||1,a[4]||0,a[5]||0,a[6]||0,o)):new Date(a[1],r,a[3]||1,a[4]||0,a[5]||0,a[6]||0,o)}}return new Date(t)}(e),this.init()},v.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},v.$utils=function(){return S},v.isValid=function(){return!(this.$d.toString()===h)},v.isSame=function(e,t){var n=M(e);return this.startOf(t)<=n&&n<=this.endOf(t)},v.isAfter=function(e,t){return M(e)<this.startOf(t)},v.isBefore=function(e,t){return this.endOf(t)<M(e)},v.$g=function(e,t,n){return S.u(e)?this[t]:this.set(n,e)},v.unix=function(){return Math.floor(this.valueOf()/1e3)},v.valueOf=function(){return this.$d.getTime()},v.startOf=function(e,t){var n=this,a=!!S.u(t)||t,u=S.p(e),h=function(e,t){var r=S.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return a?r:r.endOf(l)},m=function(e,t){return S.w(n.toDate()[e].apply(n.toDate("s"),(a?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},f=this.$W,p=this.$M,v=this.$D,g="set"+(this.$u?"UTC":"");switch(u){case d:return a?h(1,0):h(31,11);case i:return a?h(1,p):h(0,p+1);case c:var y=this.$locale().weekStart||0,j=(f<y?f+7:f)-y;return h(a?v-j:v+(6-j),p);case l:case _:return m(g+"Hours",0);case s:return m(g+"Minutes",1);case o:return m(g+"Seconds",2);case r:return m(g+"Milliseconds",3);default:return this.clone()}},v.endOf=function(e){return this.startOf(e,!1)},v.$set=function(e,t){var n,c=S.p(e),u="set"+(this.$u?"UTC":""),h=(n={},n[l]=u+"Date",n[_]=u+"Date",n[i]=u+"Month",n[d]=u+"FullYear",n[s]=u+"Hours",n[o]=u+"Minutes",n[r]=u+"Seconds",n[a]=u+"Milliseconds",n)[c],m=c===l?this.$D+(t-this.$W):t;if(c===i||c===d){var f=this.clone().set(_,1);f.$d[h](m),f.init(),this.$d=f.set(_,Math.min(this.$D,f.daysInMonth())).$d}else h&&this.$d[h](m);return this.init(),this},v.set=function(e,t){return this.clone().$set(e,t)},v.get=function(e){return this[S.p(e)]()},v.add=function(a,u){var _,h=this;a=Number(a);var m=S.p(u),f=function(e){var t=M(h);return S.w(t.date(t.date()+Math.round(e*a)),h)};if(m===i)return this.set(i,this.$M+a);if(m===d)return this.set(d,this.$y+a);if(m===l)return f(1);if(m===c)return f(7);var p=(_={},_[o]=t,_[s]=n,_[r]=e,_)[m]||1,v=this.$d.getTime()+a*p;return S.w(v,this)},v.subtract=function(e,t){return this.add(-1*e,t)},v.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||h;var a=e||"YYYY-MM-DDTHH:mm:ssZ",r=S.z(this),o=this.$H,s=this.$m,l=this.$M,c=n.weekdays,i=n.months,u=n.meridiem,d=function(e,n,r,o){return e&&(e[n]||e(t,a))||r[n].slice(0,o)},_=function(e){return S.s(o%12||12,e,"0")},m=u||function(e,t,n){var a=e<12?"AM":"PM";return n?a.toLowerCase():a};return a.replace(f,(function(e,a){return a||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return S.s(t.$y,4,"0");case"M":return l+1;case"MM":return S.s(l+1,2,"0");case"MMM":return d(n.monthsShort,l,i,3);case"MMMM":return d(i,l);case"D":return t.$D;case"DD":return S.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return d(n.weekdaysMin,t.$W,c,2);case"ddd":return d(n.weekdaysShort,t.$W,c,3);case"dddd":return c[t.$W];case"H":return String(o);case"HH":return S.s(o,2,"0");case"h":return _(1);case"hh":return _(2);case"a":return m(o,s,!0);case"A":return m(o,s,!1);case"m":return String(s);case"mm":return S.s(s,2,"0");case"s":return String(t.$s);case"ss":return S.s(t.$s,2,"0");case"SSS":return S.s(t.$ms,3,"0");case"Z":return r}return null}(e)||r.replace(":","")}))},v.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},v.diff=function(a,_,h){var m,f=this,p=S.p(_),v=M(a),g=(v.utcOffset()-this.utcOffset())*t,y=this-v,j=function(){return S.m(f,v)};switch(p){case d:m=j()/12;break;case i:m=j();break;case u:m=j()/3;break;case c:m=(y-g)/6048e5;break;case l:m=(y-g)/864e5;break;case s:m=y/n;break;case o:m=y/t;break;case r:m=y/e;break;default:m=y}return h?m:S.a(m)},v.daysInMonth=function(){return this.endOf(i).$D},v.$locale=function(){return j[this.$L]},v.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),a=D(e,t,!0);return a&&(n.$L=a),n},v.clone=function(){return S.w(this.$d,this)},v.toDate=function(){return new Date(this.valueOf())},v.toJSON=function(){return this.isValid()?this.toISOString():null},v.toISOString=function(){return this.$d.toISOString()},v.toString=function(){return this.$d.toUTCString()},p}(),w=$.prototype;return M.prototype=w,[["$ms",a],["$s",r],["$m",o],["$H",s],["$W",l],["$M",i],["$y",d],["$D",_]].forEach((function(e){w[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),M.extend=function(e,t){return e.$i||(e(t,$,M),e.$i=!0),M},M.locale=D,M.isDayjs=b,M.unix=function(e){return M(1e3*e)},M.en=j[y],M.Ls=j,M.p={},M}()},52245:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});const a={form_input_container:"UiInput_form_input_container__HtVPV",form_read_input_container:"UiInput_form_read_input_container__iILPu",form_file_container:"UiInput_form_file_container__33Bsr",form_input_label:"UiInput_form_input_label__XH6ki",form_input_label_error:"UiInput_form_input_label_error__EUef-",form_input:"UiInput_form_input__zl3Bt",form_textarea_input:"UiInput_form_textarea_input__fps0U",form_read_input_label:"UiInput_form_read_input_label__JDOsH",form_read_input:"UiInput_form_read_input__E8qX5",form_read_input_file:"UiInput_form_read_input_file__NqG3A",form_file_choose:"UiInput_form_file_choose__jxsyJ",form_file_choosen:"UiInput_form_file_choosen__8OI09",form_file_choose_active:"UiInput_form_file_choose_active__7e8B5",form_input_search:"UiInput_form_input_search__RLSi+",form_input_search_image:"UiInput_form_input_search_image__iV4xv",join_form_select_paragraph:"UiInput_join_form_select_paragraph__CSWSG",join_form_select_custom:"UiInput_join_form_select_custom__qemxS",join_form_select_custom_paragraph:"UiInput_join_form_select_custom_paragraph__3g7zT",join_form_select_custom_icon:"UiInput_join_form_select_custom_icon__Of6Sb",join_form_select_custom_rotate_icon:"UiInput_join_form_select_custom_rotate_icon__zANaN",join_form_select_custom_list:"UiInput_join_form_select_custom_list__MWLZM",join_form_select_custom_paragraph_option:"UiInput_join_form_select_custom_paragraph_option__Mh24f",form_calendar_icon:"UiInput_form_calendar_icon__KyFQA",payment_mode_heading:"UiInput_payment_mode_heading__v1Ek0",jfscl_option_list:"UiInput_jfscl_option_list__+Bigu",jfsclol_search_container:"UiInput_jfsclol_search_container__C19t-",jfsclolsc_input:"UiInput_jfsclolsc_input__ZNDZW"}},8728:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});const a={calendar:"Calendar_calendar__ZZaTt",calendar_top:"Calendar_calendar_top__ADLui",calendar_days:"Calendar_calendar_days__vUwsX",calendar_days_label:"Calendar_calendar_days_label__VF+-3",calendar_days_value:"Calendar_calendar_days_value__cY4KR",calendar_days_value_active:"Calendar_calendar_days_value_active__CC8ZH",calendar_month:"Calendar_calendar_month__iidgh",calendar_month_value:"Calendar_calendar_month_value__nzPqp",calendar_month_value_active:"Calendar_calendar_month_value_active__xUZQL"}}}]);
//# sourceMappingURL=88254.d42b7db7.chunk.js.map