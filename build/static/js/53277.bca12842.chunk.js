"use strict";(self.webpackChunkmithkal_qviple=self.webpackChunkmithkal_qviple||[]).push([[53277],{53967:(e,n,t)=>{t.d(n,{Z:()=>i});var a=t(72791);const l=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],s=["January","February","March","April","May","June","July","August","September","October","November","December"],i=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:s;const t=new Date,i="".concat(t.getDate(),"-").concat(t.getMonth()+1,"-").concat(t.getFullYear()),[o,c]=(0,a.useState)(t),d=new Date(o.getFullYear(),o.getMonth()+1,0).getDate(),r=new Date(o.getFullYear(),o.getMonth(),1).getDay(),h=[1,2,3,4,5,6,0].indexOf(r)+1;let u=1;const _={},v=[];for(let a=1;a<7;a++){for(let e=1;e<8;e++)_[a]||(_[a]=[]),1===a?e<h||(_[a]=[..._[a],{classes:"",date:"".concat(u,"-").concat(o.getMonth()+1,"-").concat(o.getFullYear()),value:u}],u++):a>1&&u<d+1&&(_[a]=[..._[a],{classes:"",date:"".concat(u,"-").concat(o.getMonth()+1,"-").concat(o.getFullYear()),value:u}],u++);_[a].map((e=>{const n=e.date.split("-")[0],t=new Date(o.getFullYear(),o.getMonth(),n).getDay();return v.push({date:e.date,day:t}),""}))}return{daysShort:e,monthNames:n,todayFormatted:i,calendarData:v,selectedDate:o,getPrevMonth:()=>{c((e=>new Date(e.getFullYear(),e.getMonth()-1,1)))},getNextMonth:()=>{c((e=>new Date(e.getFullYear(),e.getMonth()+1,1)))},switchMonth:e=>{c((n=>new Date(n.getFullYear(),n.getMonth()+(e-o.getMonth()),1))),console.log(s[o.getMonth()])}}}},9490:(e,n,t)=>{t.d(n,{Z:()=>o});var a=t(72791),l=t(53967),s=t(16313),i=t(80184);const o=e=>{let{setValidDate:n}=e;const{calendarData:t,selectedDate:o,todayFormatted:c,switchMonth:d,monthNames:r,getNextMonth:h,getPrevMonth:u}=(0,l.Z)(),[_,v]=(0,a.useState)(c),[m,p]=(0,a.useState)(!1);(0,a.useEffect)((()=>{if(_){const e=_.split("-"),t=e[0]>9?e[0]:"0".concat(e[0]),a=e[1]>9?e[1]:"0".concat(e[1]),l=e[2];n("".concat(l,"-").concat(a,"-").concat(t))}}),[_]);const j=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],x=Math.floor(t.map((function(e){return e.date})).indexOf(_)/7),[g,f]=(0,a.useState)(x),Z=7*g,N=Math.ceil(t.length/7),b=t.slice(Z,Z+7).map(((e,n)=>(0,i.jsxs)("div",{className:e.date===_?"".concat(s.Z.date," ").concat(s.Z.clickedDate):s.Z.date,onClick:()=>v(e.date),children:[(0,i.jsx)("h6",{children:e.date.split("-")[0]}),(0,i.jsx)("p",{children:j[e.day]})]},n)));return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("div",{className:s.Z.changemonth,children:[(0,i.jsxs)("h6",{onClick:()=>p(!m),children:[r[o.getMonth()]," ",o.getFullYear()]}),(0,i.jsx)("img",{alt:"not found",src:"/images/dropdown-icon.svg",onClick:()=>p(!m)}),m&&(0,i.jsx)("div",{className:s.Z.selectMonthList,children:["January","February","March","April","May","June","July","August","September","October","November","December"].map(((e,n)=>(0,i.jsx)("div",{className:s.Z.month,onClick:()=>{d(n),p(!1)},children:e},n)))})]}),(0,i.jsxs)("div",{className:s.Z.calender,children:[(0,i.jsx)("div",{className:s.Z.arrowbtn,onClick:()=>{g>0?f((e=>e-1)):(f(N-1),u())},children:(0,i.jsx)("img",{alt:"not found",src:"/images/members/left-icon.svg"})}),(0,i.jsx)("div",{className:s.Z.dates,children:b}),(0,i.jsx)("div",{className:s.Z.arrowbtn,onClick:()=>{g+1<N?f((e=>e+1)):(f(0),h())},children:(0,i.jsx)("img",{alt:"not found",src:"/images/members/right-icon.svg"})})]})]})}},8959:(e,n,t)=>{t.d(n,{Z:()=>s});var a=t(52245),l=t(80184);const s=e=>{let{label:n,value:t,customFormInputContainer:s,customFormInputLabel:i,customFormInput:o,children:c}=e;return(0,l.jsxs)("div",{className:a.Z.form_read_input_container,style:s,children:[n?(0,l.jsx)("label",{className:a.Z.form_read_input_label,style:i,children:n}):null,c,(0,l.jsx)("h6",{className:a.Z.form_read_input,style:o,children:t})]})}},99004:(e,n,t)=>{t.d(n,{Z:()=>j});var a=t(39230),l=t(38857),s=t(21348),i=t(16925),o=t(90904),c=t(72791),d=t(99183),r=t(98684),h=t(43317),u=t(55336),_=t(93638),v=t(11468),m=t(16871),p=t(80184);const j=e=>{let{onClose:n,sid:t,appId:j,onRefetch:x,isProfile:g,setWhichSelect:f,staffID:Z}=e;const{t:N}=(0,a.$G)(),b=(0,m.TH)(),[y,w]=(0,c.useState)(!1),[S,A]=(0,c.useState)(""),[C,k]=(0,c.useState)({reason:""}),[D]=(0,h.nV)();return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(l.Z,{onClose:n,children:(0,p.jsxs)("div",{className:i.Z.modal_container,children:[(0,p.jsx)(s.default,{children:(0,p.jsxs)("div",{className:i.Z.modal_container_outer_header,children:[(0,p.jsx)("div",{className:i.Z.modal_container_header,children:(0,p.jsx)("h6",{children:N("cancel_admission_application_form_update")})}),(0,p.jsx)("img",{src:"".concat(r.J7,"/close.svg"),alt:"close icon",onClick:n})]})}),(0,p.jsx)(o.Z,{}),(0,p.jsxs)(s.default,{customStyle:{paddingTop:"0"},children:[(0,p.jsx)(v.Z,{label:N("reason"),placeholder:N("please_enter_reject_reason"),name:"reason",value:C.reason,type:"text",onChange:e=>{k((n=>({...n,[e.target.name]:e.target.value})))},errorShow:S.reason}),(0,p.jsx)(_.Z,{label:"confirm",onAction:()=>{let e=(0,d.l)(C);var a;(0,d.x)(e)?j&&t&&(w((e=>!e)),D({sid:t,appId:j,bodyParameter:{...C,staffId:Z||(null===(a=b.state)||void 0===a?void 0:a.sid)}}).then((()=>{g?f(!1):x(),w((e=>!e)),n()})).catch((()=>{w((e=>!e))}))):A(e)}})]})]})}),y&&(0,p.jsx)(u.default,{})]})}},70638:(e,n,t)=>{t.d(n,{Z:()=>h});var a=t(39230),l=t(38857),s=t(21348),i=t(16925),o=t(90904),c=t(98684),d=t(8959),r=t(80184);const h=e=>{let{onClose:n,reason:t}=e;const{t:h}=(0,a.$G)();return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(l.Z,{onClose:n,children:(0,r.jsxs)("div",{className:i.Z.modal_container,children:[(0,r.jsx)(s.default,{children:(0,r.jsxs)("div",{className:i.Z.modal_container_outer_header,children:[(0,r.jsx)("div",{className:i.Z.modal_container_header,children:(0,r.jsx)("h6",{children:h("cancel_admission_application_rejected_reason")})}),(0,r.jsx)("img",{src:"".concat(c.J7,"/close.svg"),alt:"close icon",onClick:n})]})}),(0,r.jsx)(o.Z,{}),(0,r.jsx)(s.default,{customStyle:{paddingTop:"0"},children:(0,r.jsx)(d.Z,{value:t})})]})})})}},66752:(e,n,t)=>{t.d(n,{Z:()=>x});var a=t(39230),l=t(38857),s=t(21348),i=t(16925),o=t(90904),c=t(72791),d=t(99183),r=t(98684),h=t(43317),u=t(55336),_=t(93638),v=t(11468),m=t(16871),p=t(93339),j=t(80184);const x=e=>{let{onClose:n,sid:t,appId:x,onRefetch:g,isProfile:f,setWhichSelect:Z,staffID:N,isDepartment:b}=e;const{t:y}=(0,a.$G)(),w=(0,m.TH)(),[S,A]=(0,c.useState)(!1),[C,k]=(0,c.useState)(""),[D,M]=(0,c.useState)({reason:""}),[F]=(0,h.u7)(),[I]=(0,p.I4)();return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(l.Z,{onClose:n,children:(0,j.jsxs)("div",{className:i.Z.modal_container,children:[(0,j.jsx)(s.default,{children:(0,j.jsxs)("div",{className:i.Z.modal_container_outer_header,children:[(0,j.jsx)("div",{className:i.Z.modal_container_header,children:(0,j.jsx)("h6",{children:y("cancel_admission_application")})}),(0,j.jsx)("img",{src:"".concat(r.J7,"/close.svg"),alt:"close icon",onClick:n})]})}),(0,j.jsx)(o.Z,{}),(0,j.jsxs)(s.default,{customStyle:{paddingTop:"0"},children:[(0,j.jsx)(v.Z,{label:y("reason"),placeholder:y("please_enter_reject_reason"),name:"reason",value:D.reason,type:"text",onChange:e=>{M((n=>({...n,[e.target.name]:e.target.value})))},errorShow:C.reason}),(0,j.jsx)(_.Z,{label:"confirm",onAction:()=>{let e=(0,d.l)(D);var a,l;(0,d.x)(e)?x&&t&&(A((e=>!e)),b?I({sid:t,appId:x,bodyParameter:{...D,staffId:N||(null===(a=w.state)||void 0===a?void 0:a.sid)}}).then((()=>{f?Z(!1):g(),A((e=>!e)),n()})).catch((()=>{A((e=>!e))})):F({sid:t,appId:x,bodyParameter:{...D,staffId:N||(null===(l=w.state)||void 0===l?void 0:l.sid)}}).then((()=>{f?Z(!1):g(),A((e=>!e)),n()})).catch((()=>{A((e=>!e))}))):k(e)}})]})]})}),S&&(0,j.jsx)(u.default,{})]})}},96796:(e,n,t)=>{t.d(n,{Z:()=>r});var a=t(72791),l=t(89064),s=t(39230),i=t(43317),o=t(20659),c=t(26071),d=t(80184);const r=e=>{let{onClose:n,appId:t,onRefetch:r}=e;const{t:u}=(0,s.$G)(),[_,v]=(0,a.useState)(!1),[m,p]=(0,a.useState)(!1),[j,x]=(0,a.useState)(""),[g]=(0,i.LT)(),f=e=>{t&&("Alpha"!==e&&"Alpha_Last"!==e||x(e),v((e=>!e)),g({appId:t,sort_query:e}).then((()=>{r(),v((e=>!e)),n()})).catch({}))};return(0,d.jsxs)(l.Z,{onClose:n,disabled:_,customStyle:{width:"18rem"},children:[(0,d.jsx)("h6",{onClick:()=>{p((e=>!e))},children:u("alphabetical")}),m?(0,d.jsx)("div",{children:(0,d.jsx)(o.Z,{customTileContainer:{marginBottom:"0.7rem"},children:null===h||void 0===h?void 0:h.map((e=>(0,d.jsx)(c.Z,{tile:e,onTile:f,activeTile:j},null===e||void 0===e?void 0:e.key)))})}):null,(0,d.jsx)("h6",{onClick:()=>f("Gender"),children:u("gender")}),(0,d.jsx)("h6",{onClick:()=>f("Gender_Alpha"),children:u("both")})]})},h=[{key:"Alpha",name:"First Name"},{key:"Alpha_Last",name:"Surname"}]},10874:(e,n,t)=>{t.d(n,{Z:()=>j});var a=t(72791),l=t(39230),s=t(43317),i=t(38857),o=t(21348),c=t(90904),d=t(55336),r=(t(1669),t(2651)),h=t(98684),u=t(49806),_=t(16871),v=t(43504),m=t(80184);const p=e=>{var n,t;let{sub:a,appId:l,isDepartment:s,parentUrl:i}=e;const o=(0,_.UO)(),c=(0,_.TH)();return(0,m.jsx)(v.rU,{to:"Institute"===(null===(n=c.state)||void 0===n?void 0:n.urlOffSet)?"/q/".concat(o.username,"/institute/member/admission?type=selected-subject"):s?i:"/q/".concat(o.username,"/member/staff/admission?type=selected-subject"),state:{...c.state,smid:null===a||void 0===a?void 0:a._id,appId:l,subjectName:null===a||void 0===a?void 0:a.subjectName},className:u.Z.assign_show_list_each,style:{border:"0.5px solid #cacaca",marginBlock:"0.4rem",borderRadius:"6px",padding:"0.8rem 1rem"},children:(0,m.jsx)("div",{className:u.Z.assign_each_paragraph,children:(0,m.jsx)("h6",{children:null!==(t=null===a||void 0===a?void 0:a.subjectName)&&void 0!==t?t:""})})})},j=e=>{let{appId:n,isDepartment:t,onClose:_,parentUrl:v}=e;const{t:j}=(0,l.$G)(),[x,g]=(0,a.useState)(""),[f,Z]=(0,a.useState)(""),{oneApplicationSubjectCountList:N,oneApplicationSubjectCountListLoading:b}=(0,s.ax)({data:{aid:n,search:x},skip:!n});return(0,m.jsx)(i.Z,{onClose:_,children:(0,m.jsxs)("div",{className:u.Z.modal_container,children:[(0,m.jsx)(o.default,{children:(0,m.jsxs)("div",{className:u.Z.modal_container_outer_header,children:[(0,m.jsx)("div",{className:u.Z.modal_container_header,children:(0,m.jsx)("h6",{children:j("subject_list")})}),(0,m.jsx)("div",{className:u.Z.modal_container_btn_container,children:(0,m.jsx)("img",{src:"".concat(h.J7,"/close.svg"),alt:"close icon",onClick:_})})]})}),(0,m.jsx)(c.Z,{}),(0,m.jsxs)(o.default,{customStyle:{paddingBottom:"1rem"},children:[(0,m.jsxs)("div",{className:u.Z.assign_search_container,style:{marginBottom:"1rem"},children:[(0,m.jsx)("input",{type:"text",placeholder:j("search"),className:u.Z.assign_search_input,onChange:e=>{!b&&(null===N||void 0===N?void 0:N.length)>=0&&(e.target.value?Z(e.target.value):(Z(""),g("")))},onKeyUp:e=>{"Enter"===e.key&&g(f)},value:f,style:{width:"100%"}}),(0,m.jsx)("img",{src:"".concat(h.dB,"/navbar-search.svg"),alt:"search icon"})]}),null===N||void 0===N?void 0:N.map((e=>(0,m.jsx)(p,{sub:e,appId:n,isDepartment:t,parentUrl:v},null===e||void 0===e?void 0:e._id))),b?(0,m.jsx)(d.default,{}):x?0===(null===N||void 0===N?void 0:N.length)&&(0,m.jsx)(r.Z,{title:"No subject found related this search.",customStyleContainer:{marginTop:"1.5rem"}}):0===(null===N||void 0===N?void 0:N.length)&&(0,m.jsx)(r.Z,{title:"No subject.",customStyleContainer:{marginTop:"1.5rem"}})]})]})})}},33661:(e,n,t)=>{t.d(n,{Z:()=>x});var a=t(72791),l=t(39230),s=t(16871),i=t(38857),o=t(21348),c=t(90904),d=t(16925),r=t(98684),h=t(9490),u=t(75285),_=t(43317),v=t(85794),m=t(55336),p=t(93638),j=t(80184);const x=e=>{var n,t,x,f,Z,N,b,y,w,S,A,C,k,D,M;let{applicationDetail:F,onClose:I,applicationDetailApplicablePending:T,isDepartment:J}=e;const Y=(0,s.TH)(),L=(0,s.UO)(),G=(0,s.s0)(),{t:R}=(0,l.$G)(),q=new Date,[O,B]=(0,a.useState)(!1),[U,W]=(0,a.useState)(!1),[P,$]=(0,a.useState)(null===(n=q.toISOString())||void 0===n?void 0:n.substring(0,10)),[E,H]=(0,a.useState)({open:!1,msg:"",variant:"error"}),[z]=(0,_.b6)(),{admissionOngoingApplicationDailyCollect:V}=(0,_.Be)({data:{appId:null===F||void 0===F?void 0:F._id,valid_date:P},skip:!(null!==F&&void 0!==F&&F._id)}),X=()=>{null!==F&&void 0!==F&&F._id&&(B((e=>!e)),z({appId:null===F||void 0===F?void 0:F._id}).then((e=>{var n;if(null!==e&&void 0!==e&&null!==(n=e.data)&&void 0!==n&&n.complete_status){var t;let e="Institute"===(null===(t=Y.state)||void 0===t?void 0:t.urlOffSet)?"/q/".concat(L.username,"/institute/member/admission?type=ongoing-detail"):"/q/".concat(L.username,"/member/staff/admission?type=ongoing-detail");G(e,{state:Y.state})}else H({msg:null===e||void 0===e?void 0:e.data.message,open:!0,variant:"error"});I(),B((e=>!e))})).catch({}))};return console.info("Safs",V),(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(i.Z,{onClose:I,children:(0,j.jsxs)("div",{className:d.Z.modal_container,children:[(0,j.jsx)(o.default,{children:(0,j.jsxs)("div",{className:d.Z.modal_container_outer_header,children:[(0,j.jsx)("div",{className:d.Z.modal_container_header,children:(0,j.jsx)("h6",{style:{cursor:"pointer",color:"#436dfa"},onClick:()=>W((e=>!e)),children:null===F||void 0===F?void 0:F.applicationName})}),(0,j.jsx)("img",{src:"".concat(r.J7,"/close.svg"),alt:"close icon",onClick:I})]})}),(0,j.jsx)(c.Z,{}),(0,j.jsxs)(o.default,{customStyle:{paddingTop:"0"},children:[(0,j.jsx)(h.Z,{setValidDate:$}),U?(0,j.jsxs)(j.Fragment,{children:[(0,j.jsxs)("div",{className:u.Z.content2,children:[(0,j.jsxs)("div",{className:u.Z.appinforow,children:[(0,j.jsx)("h6",{children:R("total_received_application")}),(0,j.jsx)("h6",{children:null===F||void 0===F?void 0:F.receievedCount})]}),(0,j.jsxs)("div",{className:u.Z.appinforow,children:[(0,j.jsx)("h6",{children:R("total_document_application")}),(0,j.jsx)("h6",{children:null===F||void 0===F?void 0:F.selectCount})]}),(0,j.jsxs)("div",{className:u.Z.appinforow,children:[(0,j.jsx)("h6",{children:R("total_fees_application")}),(0,j.jsx)("h6",{children:null===F||void 0===F?void 0:F.fee_collect_count})]}),(0,j.jsxs)("div",{className:u.Z.appinforow,children:[(0,j.jsx)("h6",{children:R("total_confirmed_application")}),(0,j.jsx)("h6",{children:null===F||void 0===F?void 0:F.confirmCount})]}),(0,j.jsxs)("div",{className:u.Z.appinforow,children:[(0,j.jsx)("h6",{children:R("total_review_application")}),(0,j.jsx)("h6",{children:null===F||void 0===F?void 0:F.review_count})]}),(0,j.jsxs)("div",{className:u.Z.appinforow,children:[(0,j.jsx)("h6",{children:R("total_alloted_application")}),(0,j.jsx)("h6",{children:null===F||void 0===F?void 0:F.allotCount})]}),(0,j.jsxs)("div",{className:u.Z.appinforow,children:[(0,j.jsx)("h6",{children:R("total_cancelled_application")}),(0,j.jsx)("h6",{children:null===F||void 0===F?void 0:F.cancelCount})]})]}),(0,j.jsxs)("div",{className:u.Z.content3,children:[(0,j.jsxs)("div",{className:u.Z.appinforow1,children:[(0,j.jsx)("h6",{children:R("total_fees_received")}),(0,j.jsxs)("h6",{children:["Rs. ",null===F||void 0===F?void 0:F.collectedFeeCount]})]}),(0,j.jsxs)("div",{className:"".concat(u.Z.appinforow2," ").concat(u.Z.appinforowred),children:[(0,j.jsx)("h6",{children:R("total_fees_pending")}),(0,j.jsxs)("h6",{children:["Rs. ",null===F||void 0===F?void 0:F.remainingFee]})]}),(0,j.jsxs)("div",{className:"".concat(u.Z.appinforow2," ").concat(u.Z.appinforowred),children:[(0,j.jsx)("h6",{children:R("total_applicable_fees_pending")}),(0,j.jsxs)("h6",{children:["Rs. ",null!==T&&void 0!==T?T:0]})]}),g[null===(D=Y.state)||void 0===D?void 0:D.isAuthorization]?null:(0,j.jsx)(j.Fragment,{children:null!==(M=Y.state)&&void 0!==M&&M.role||J?null:(0,j.jsx)(p.Z,{label:R("complete_application"),onAction:X})})]})]}):(0,j.jsxs)(j.Fragment,{children:[(0,j.jsxs)("div",{className:u.Z.content2,children:[(0,j.jsxs)("div",{className:u.Z.appinforow,children:[(0,j.jsx)("h6",{children:R("total_received_application")}),(0,j.jsx)("h6",{children:null!==(t=null===V||void 0===V?void 0:V.request_count)&&void 0!==t?t:0})]}),(0,j.jsxs)("div",{className:u.Z.appinforow,children:[(0,j.jsx)("h6",{children:R("total_document_application")}),(0,j.jsx)("h6",{children:null!==(x=null===V||void 0===V?void 0:V.select_count)&&void 0!==x?x:0})]}),(0,j.jsxs)("div",{className:u.Z.appinforow,children:[(0,j.jsx)("h6",{children:R("total_fees_application")}),(0,j.jsx)("h6",{children:null!==(f=null===V||void 0===V?void 0:V.fee_collect_count)&&void 0!==f?f:0})]}),(0,j.jsxs)("div",{className:u.Z.appinforow,children:[(0,j.jsx)("h6",{children:R("total_confirmed_application")}),(0,j.jsx)("h6",{children:null!==(Z=null===V||void 0===V?void 0:V.confirm_count)&&void 0!==Z?Z:0})]}),(0,j.jsxs)("div",{className:u.Z.appinforow,children:[(0,j.jsx)("h6",{children:R("total_review_application")}),(0,j.jsx)("h6",{children:null!==(N=null===V||void 0===V?void 0:V.review_count)&&void 0!==N?N:0})]}),(0,j.jsxs)("div",{className:u.Z.appinforow,children:[(0,j.jsx)("h6",{children:R("total_alloted_application")}),(0,j.jsx)("h6",{children:null!==(b=null===V||void 0===V?void 0:V.allot_count)&&void 0!==b?b:0})]}),(0,j.jsxs)("div",{className:u.Z.appinforow,children:[(0,j.jsx)("h6",{children:R("total_cancelled_application")}),(0,j.jsx)("h6",{children:null!==(y=null===V||void 0===V?void 0:V.cancel_count)&&void 0!==y?y:0})]})]}),(0,j.jsxs)("div",{className:u.Z.content3,children:[(0,j.jsxs)("div",{className:u.Z.appinforow1,children:[(0,j.jsx)("h6",{children:R("total_fees_received")}),(0,j.jsxs)("h6",{children:["Rs. ",null!==(w=null===V||void 0===V?void 0:V.paid)&&void 0!==w?w:0]})]}),(0,j.jsxs)("div",{className:"".concat(u.Z.appinforow2," ").concat(u.Z.appinforowred),children:[(0,j.jsx)("h6",{children:R("total_fees_pending")}),(0,j.jsxs)("h6",{children:["Rs. ",null!==(S=null===V||void 0===V?void 0:V.remain)&&void 0!==S?S:0]})]}),(0,j.jsxs)("div",{className:"".concat(u.Z.appinforow2," ").concat(u.Z.appinforowred),children:[(0,j.jsx)("h6",{children:R("total_applicable_fees_pending")}),(0,j.jsxs)("h6",{children:["Rs."," ",null!==(A=null===V||void 0===V?void 0:V.applicable_pending)&&void 0!==A?A:0]})]}),g[null===(C=Y.state)||void 0===C?void 0:C.isAuthorization]?null:(0,j.jsx)(j.Fragment,{children:null!==(k=Y.state)&&void 0!==k&&k.role||J?null:(0,j.jsx)(p.Z,{label:R("complete_application"),onAction:X})})]})]})]})]})}),O&&(0,j.jsx)(m.default,{}),(0,j.jsx)(v.Z,{eventState:E,eventStateHandler:H})]})},g={isCompleted:!0}},62907:(e,n,t)=>{t.d(n,{Z:()=>j});var a=t(39230),l=t(38857),s=t(21348),i=t(98684),o=t(90904),c=t(16925),d=t(43317),r=t(72791),h=t(97892),u=t.n(h),_=t(82824),v=t(1669),m=t(2651),p=t(80184);const j=e=>{let{onClose:n,studentId:t}=e;const{t:h}=(0,a.$G)(),{oneApplicationStaffActionShow:j,oneApplicationStaffActionShowLoading:x}=(0,d.x5)({data:{sid:t},skip:!t});return(0,p.jsx)(l.Z,{onClose:n,children:(0,p.jsxs)("div",{className:c.Z.modal_container,children:[(0,p.jsx)(s.default,{children:(0,p.jsxs)("div",{className:c.Z.modal_container_outer_header,children:[(0,p.jsx)("div",{className:c.Z.modal_container_header,children:(0,p.jsx)("h6",{children:h("student_admission_logs")})}),(0,p.jsx)("img",{src:"".concat(i.J7,"/close.svg"),alt:"close icon",onClick:n})]})}),(0,p.jsx)(o.Z,{}),(0,p.jsxs)(s.default,{customStyle:{paddingTop:"0"},children:[(0,p.jsx)("div",{className:c.Z.card_container_inner,children:null===j||void 0===j?void 0:j.map(((e,n)=>{var t,a;return(0,p.jsxs)(r.Fragment,{children:[(0,p.jsxs)("h6",{children:[(0,p.jsxs)("span",{style:{fontWeight:"400"},children:[null===e||void 0===e?void 0:e.key," : "]}),null!==(t=null===e||void 0===e?void 0:e.value)&&void 0!==t?t:""]}),null!==e&&void 0!==e&&e.latest?(0,p.jsxs)("p",{children:[h("date_and_time"),": ",null===(a=u()(null===e||void 0===e?void 0:e.latest))||void 0===a?void 0:a.format("DD/MM/YYYY"),", ",(0,_.J)(null===e||void 0===e?void 0:e.latest,"LT")]}):null,(0,p.jsx)(o.Z,{})]},"".concat(null===e||void 0===e?void 0:e.key).concat(n))}))}),x&&(0,p.jsx)(v.Z,{}),0===(null===j||void 0===j?void 0:j.length)&&(0,p.jsx)(m.Z,{customStyleContainer:{marginTop:"1.5rem"},title:"No logs."})]})]})})}},16313:(e,n,t)=>{t.d(n,{Z:()=>a});const a={attendence:"Attendence_attendence__I1yeT",attendencehead:"Attendence_attendencehead__exMGX",attendenceBtns:"Attendence_attendenceBtns__NDLVN",changemonth:"Attendence_changemonth__tk0Uc",buttons:"Attendence_buttons__iJ4z9",leaves:"Attendence_leaves__nC9+y",save:"Attendence_save__Q1WxJ",time_slot_btn:"Attendence_time_slot_btn__ckJ9r",calender:"Attendence_calender__wZXxH",arrowbtn:"Attendence_arrowbtn__Gm18t",dates:"Attendence_dates__40mER",date:"Attendence_date__qlh8f",clickedDate:"Attendence_clickedDate__q347p",tabs:"Attendence_tabs__9GYC-",tab:"Attendence_tab__IXFzc",grey:"Attendence_grey__r-jIX",purple:"Attendence_purple__J8wxa",light:"Attendence_light__r4yiQ",tabgreen:"Attendence_tabgreen__uE2sT",red:"Attendence_red__v+w+y",rose:"Attendence_rose__uW+8p",list:"Attendence_list__R99VM",divider:"Attendence_divider__MjzEh",selectMonthList:"Attendence_selectMonthList__ItnM7",month:"Attendence_month__32s-8",time_slot:"Attendence_time_slot__uB3tR",time_slot_inner:"Attendence_time_slot_inner__LMrgE",al_container:"Attendence_al_container__WjTYJ",al_container_h6:"Attendence_al_container_h6__avjZi",al_container_active:"Attendence_al_container_active__mhWSf",al_container_img:"Attendence_al_container_img__CYG2U"}}}]);
//# sourceMappingURL=53277.bca12842.chunk.js.map