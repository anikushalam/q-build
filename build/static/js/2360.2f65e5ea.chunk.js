"use strict";(self.webpackChunkmithkal_qviple=self.webpackChunkmithkal_qviple||[]).push([[2360,59672,3971],{60233:(e,t,n)=>{n.d(t,{Z:()=>u});var i=n(72791);const o=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],a=["January","February","March","April","May","June","July","August","September","October","November","December"],l=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a;const n=new Date,l="".concat(n.getDate(),"-").concat(n.getMonth()+1,"-").concat(n.getFullYear()),s=[1,2,3,4,5,6,0],[r,c]=(0,i.useState)(n),_=new Date(r.getFullYear(),r.getMonth()+1,0),d=new Date(r.getFullYear(),r.getMonth(),0),u=_.getDate(),m=new Date(r.getFullYear(),r.getMonth(),1).getDay(),h=s.indexOf(m)+1;let f=d.getDate()-s.indexOf(m)+1,p=1,g=1;const v={};for(let i=1;i<7;i++)for(let e=1;e<8;e++)v[i]||(v[i]=[]),1===i?e<h?(v[i]=[...v[i],{classes:"in-prev-month",date:"".concat(f,"-").concat(0===r.getMonth()?12:r.getMonth(),"-").concat(0===r.getMonth()?r.getFullYear()-1:r.getFullYear()),value:f}],f++):(v[i]=[...v[i],{classes:"",date:"".concat(p,"-").concat(r.getMonth()+1,"-").concat(r.getFullYear()),value:p}],p++):i>1&&p<u+1?(v[i]=[...v[i],{classes:"",date:"".concat(p,"-").concat(r.getMonth()+1,"-").concat(r.getFullYear()),value:p}],p++):(v[i]=[...v[i],{classes:"in-next-month",date:"".concat(g,"-").concat(r.getMonth()+2===13?1:r.getMonth()+2,"-").concat(r.getMonth()+2===13?r.getFullYear()+1:r.getFullYear()),value:g}],g++);return{daysShort:e,monthNames:t,todayFormatted:l,calendarRows:v,selectedDate:r,getPrevMonth:()=>{c((e=>new Date(e.getFullYear(),e.getMonth()-1,1)))},getNextMonth:()=>{c((e=>new Date(e.getFullYear(),e.getMonth()+1,1)))},getDesiredData:e=>{c(new Date("".concat(e.month," ").concat(e.year)))},setSelectedDate:c}};var s=n(80184);const r=function(e){let{handleClick:t}=e;return(0,s.jsx)("div",{children:(0,s.jsx)("img",{className:"arrowicon",src:"/images/Input/arrow-left.svg",alt:"",onClick:t})})};const c=function(e){let{handleClick:t}=e;return(0,s.jsx)("div",{children:(0,s.jsx)("img",{className:"arrowicon",src:"/images/Input/arrow-right.svg",alt:"",onClick:t})})};var _=n(39230);const d={position:"fixed",top:0,left:0,right:0,bottom:0,zIndex:10},u=e=>{let{range:t,onClose:n,dateInput:o,setDateInput:a,datePickerPosition:u,isClose:m,isMultiple:h}=e;const{t:f}=(0,_.$G)(),{calendarRows:p,selectedDate:g,todayFormatted:v,daysShort:x,monthNames:b,getNextMonth:j,getPrevMonth:y,setSelectedDate:F}=l(),[M,C]=(0,i.useState)([]),[N,k]=(0,i.useState)(0),[w,J]=(0,i.useState)({date:"",month:b[g.getMonth()],year:g.getFullYear().toString()}),[I,D]=(0,i.useState)([]),S=new Date;"".concat(S.getDate()<10?"0".concat(S.getDate()):S.getDate(),"/").concat(S.getMonth()+1<10?"0".concat(S.getMonth()+1):S.getMonth()+1,"/").concat(S.getFullYear());const P=function(){for(var e=(new Date).getFullYear(),t=e-70,n=[],i=e+30;i>=t;i--)n.push(i);return n}(),Z=e=>{if(t)if(I.length>0&&I.includes(e)){const t=I.filter((function(t){return t!==e}));(e=>{D(e)})(t),C(t)}else(e=>{D((t=>[...t,e]))})(e),C((t=>[...t,e]));else D(e),a(e),m||setTimeout((()=>{!t&&n()}),100)},T=(new Date).getFullYear(),A=Math.ceil(P.length/12),E=P.indexOf(T),Y=Math.ceil(E/12),[R,q]=(0,i.useState)(Y),O=12*R,Q=O-12,B=P.slice(Q,O);return(0,i.useEffect)((()=>{t&&a(I)}),[I]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{onClick:n,style:d}),(0,s.jsxs)("div",{className:"datepickercontainer",style:{...u},children:[(0,s.jsxs)("div",{className:"calenderheader",children:[(0,s.jsxs)("div",{className:"calenderheaderleft",children:[(0,s.jsx)("h6",{className:"month",onClick:()=>k(1),children:"".concat(b[g.getMonth()])}),(0,s.jsxs)("div",{className:"yearcontainer",onClick:()=>k(2),children:[(0,s.jsx)("h6",{className:"year",children:"".concat(g.getFullYear())}),(0,s.jsx)("img",{className:"arrow",src:"/images/Input/dropdown-icon.svg",alt:""})]})]}),0===N&&(0,s.jsxs)("div",{className:"calenderheaderright",children:[(0,s.jsx)(r,{handleClick:y}),(0,s.jsx)(c,{handleClick:j})]}),2===N&&(0,s.jsxs)("div",{className:"calenderheaderright",children:[(0,s.jsx)(r,{handleClick:()=>{R>1&&q(R-1)}}),(0,s.jsx)(c,{handleClick:()=>{R<A&&q(R+1)}})]})]}),1===N&&(0,s.jsx)("div",{className:"monthscontainer",children:b.map(((e,t)=>(0,s.jsx)("div",{className:"monththh",onClick:()=>{J({...w,month:e}),F(new Date("".concat(e," ").concat(w.year))),k(0)},children:e},t)))}),0===N&&(0,s.jsxs)("table",{className:"table",children:[(0,s.jsx)("thead",{children:(0,s.jsx)("tr",{children:x.map((e=>(0,s.jsx)("th",{className:"day",children:e},e)))})}),(0,s.jsx)("tbody",{children:Object.values(p).map((e=>(0,s.jsx)("tr",{children:e.map((e=>e.date===v?(0,s.jsx)("td",{className:"".concat(e.classes," date"),onClick:()=>{Z("".concat(e.value<10?"0".concat(e.value):e.value,"/").concat(g.getMonth()+1<10?"0".concat(g.getMonth()+1):g.getMonth()+1,"/").concat(g.getFullYear()))},children:(0,s.jsx)("div",{className:I.includes("".concat(e.value<10?"0".concat(e.value):e.value,"/").concat(g.getMonth()+1<10?"0".concat(g.getMonth()+1):g.getMonth()+1,"/").concat(g.getFullYear()))||o==="".concat(e.value<10?"0".concat(e.value):e.value,"/").concat(g.getMonth()+1<10?"0".concat(g.getMonth()+1):g.getMonth()+1,"/").concat(g.getFullYear())?"".concat(e.classes," datediv  active"):"".concat(e.classes," datediv aaji"),children:e.value})},e.date):"in-prev-month"===e.classes||"in-next-month"===e.classes?(0,s.jsx)("td",{className:"".concat(e.classes," date"),children:(0,s.jsx)("div",{className:"".concat(e.classes," datediv "),children:e.value})},e.date):(0,s.jsx)("td",{className:"".concat(e.classes," date"),onClick:()=>Z("".concat(e.value<10?"0".concat(e.value):e.value,"/").concat(g.getMonth()+1<10?"0".concat(g.getMonth()+1):g.getMonth()+1,"/").concat(g.getFullYear())),children:(0,s.jsx)("div",{className:I.includes("".concat(e.value<10?"0".concat(e.value):e.value,"/").concat(g.getMonth()+1<10?"0".concat(g.getMonth()+1):g.getMonth()+1,"/").concat(g.getFullYear()))?"".concat(e.classes," datediv  active"):"".concat(e.classes," datediv "),children:e.value})},e.date)))},e[0].date)))})]}),2===N&&(0,s.jsx)("div",{className:"monthscontainer",children:B.map(((e,t)=>(0,s.jsx)("div",{className:T===e?" monthactive":" monththh",onClick:()=>{J({...w,year:e}),F(new Date("".concat(e," ").concat(w.month))),k(0)},children:e},t)))}),h&&(0,s.jsx)("div",{className:"multiple_select_btn",onClick:n,children:f("select")})]})]})}},57431:(e,t,n)=>{n.d(t,{Z:()=>a});n(72791);var i=n(80272),o=n(80184);const a=e=>{var t;let{valueLength:n,maxLength:a,customStyle:l}=e;return(0,o.jsxs)("section",{style:{...l},className:i.Z.string_container,children:[null!==(t=null===n||void 0===n?void 0:n.length)&&void 0!==t?t:0,"/",a]})}},59965:(e,t,n)=>{n.d(t,{Z:()=>s});var i=n(72791),o=n(38733),a=n(60233),l=n(80184);const s=e=>{let{customStyleContainer:t,labelText:n,errorShow:s,value:r,name:c,placeholder:_,onDateFunction:d,datePickerPosition:u,customStyleLabel:m,customStyleCaledarIcon:h,customStyleInput:f,isMultiple:p}=e;const[g,v]=(0,i.useState)(!1),x=()=>{v(!0)};return(0,l.jsxs)("div",{className:o.Z.join_form_container,style:{...t},children:[(0,l.jsxs)("label",{className:o.Z.join_form_label,htmlFor:c,style:{...m},children:[n," ",s&&(0,l.jsx)("span",{style:{color:"red",marginLeft:"15px"},children:"* required"})]}),(0,l.jsx)("input",{className:o.Z.join_form_input,type:"text",value:r,name:c,placeholder:_||"dd/mm/yyyy",onFocus:x,style:{...f}}),(0,l.jsx)("img",{className:o.Z.arrowIcon,src:"/images/Input/calendar.svg",alt:"calender icon",onClick:x,style:{...h}}),g&&(0,l.jsx)(a.Z,{datePickerPosition:u?{...u}:{top:"-17rem",left:"1rem",borderRadius:"0.375rem",paddingBottom:"0"},range:p,onClose:()=>v(!1),dateInput:r,setDateInput:d,isMultiple:p})]})}},49384:(e,t,n)=>{n.d(t,{Z:()=>a});n(72791);var i=n(6307),o=n(80184);const a=()=>(0,o.jsx)(i.iT,{ariaLabel:"loading-indicator",height:20,width:20,color:"white",secondaryColor:"#1c023b"})},15369:(e,t,n)=>{n.r(t),n.d(t,{default:()=>I});var i=n(72791);const o="Edit_navbar__nFZG7",a="Edit_bgContainer__YlRY5";var l=n(20772),s=n(95048),r=n(49384);const c="Button_container__0i843";var _=n(80184);const d=e=>{let{buttonText:t,submitHandler:n,disabled:i}=e;return(0,_.jsxs)("button",{disabled:i,className:c,onClick:n,style:i?{cursor:"none"}:{cursor:"pointer"},children:[t,(0,_.jsx)("div",{style:{marginTop:"1.4vw",marginLeft:"1vw"},children:i&&(0,_.jsx)(r.Z,{})})]})};var u=n(71933);const m=e=>{let{id:t,labelText:n,type:i,placeholder:o,value:a,onChange:l}=e;return(0,_.jsxs)("div",{className:u.Z.labelContainer,children:[(0,_.jsx)("div",{className:u.Z.label,children:(0,_.jsx)("label",{htmlFor:t,children:n})}),(0,_.jsx)("div",{className:u.Z.inputBox,children:(0,_.jsx)("input",{id:t,type:i,onChange:l,value:a,placeholder:o})})]})},h={container:"MainProfileEdit_container__8Ul6p",labelContainer:"MainProfileEdit_labelContainer__8jpVq",label:"MainProfileEdit_label__2GIqL",inputBox:"MainProfileEdit_inputBox__EQKT9",add_supporting_member:"MainProfileEdit_add_supporting_member__eQ5D1",add_supporting_member_heading:"MainProfileEdit_add_supporting_member_heading__Dei0G",containerhead:"MainProfileEdit_containerhead__2YboX",flexItem50:"MainProfileEdit_flexItem50__XlGKi",fileinputflexContainer:"MainProfileEdit_fileinputflexContainer__UBvGR",input_label:"MainProfileEdit_input_label__QGwl9",labelspan:"MainProfileEdit_labelspan__F4iIw",formselect:"MainProfileEdit_formselect__ZTE-E",input_border_active:"MainProfileEdit_input_border_active__QVelH",genderh:"MainProfileEdit_genderh__G-Mgn",genderplaceholder:"MainProfileEdit_genderplaceholder__u8rbs",upIcon:"MainProfileEdit_upIcon__QHEWM",downIcon:"MainProfileEdit_downIcon__o+aGr"};var f=n(39230),p=n(16871),g=n(68686),v=n(69721),x=n(39480),b=n(35395),j=n(57431);const y="SelectOptions_options__vfHmY",F="SelectOptions_option__q3-6e",M={position:"fixed",top:0,left:0,right:0,bottom:0,zIndex:10},C={position:"absolute",left:"0",top:"2.1rem",zIndex:10};const N=function(e){let{open:t,onClose:n,setFormData:i,formData:o}=e;const{t:a}=(0,f.$G)();return t?(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)("div",{onClick:n,style:M}),(0,_.jsx)("div",{style:C,className:y,children:["College/Polytechnic","School","Coaching/Tuition","Online Educating Institute","Content Creator","Other"].map(((e,t)=>(0,_.jsx)("div",{className:F,onClick:()=>{i({...o,insType:e}),n()},children:e},t)))})]}):null};var k=n(59965);const w=i.lazy((()=>Promise.all([n.e(763),n.e(62932)]).then(n.bind(n,62932)))),J=()=>{var e,t,n,o,a,l;const r=(0,s.v9)((e=>e.idChange)),[c,u]=(0,i.useState)(!1),[y,F]=(0,i.useState)({insType:!1}),[M]=(0,g.JA)(),C=(0,p.s0)(),{t:J}=(0,f.$G)(),{oneInstituteProfile:I,oneInstituteProfileRefetch:D}=(0,x.p0)({data:{id:null===r||void 0===r?void 0:r.id,type:"ID"},skip:!(null!==r&&void 0!==r&&r.id)}),[S]=(0,x.Ic)(),[P,Z]=(0,i.useState)(!1),[T,A]=(0,i.useState)({insName:"",insType:"",insEmail:"",insPhoneNumber:"",insAchievement:"",insAddress:"",insAbout:"",insAffiliated:"",one_line_about:"",gr_initials:"",insEstdDate:"",alias_pronounciation:{staff_alias:"",student_alias:""}});(0,i.useEffect)((()=>{null!==r&&void 0!==r&&r.id&&D()}),[null===r||void 0===r?void 0:r.id,D]),(0,i.useEffect)((()=>{var e,t,n,i,o,a,l,s,r,c,_,d;null!==I&&void 0!==I&&I.institute&&A({insName:I.institute.insName,insType:I.institute.insType,insEmail:I.institute.insEmail,insPhoneNumber:I.institute.insPhoneNumber,insAchievement:I.institute.insAchievement,insAddress:I.institute.insAddress,insAbout:I.institute.insAbout,insAffiliated:null===(e=I.institute)||void 0===e?void 0:e.request_at,insAffiliatedBy:null!==(t=I.institute)&&void 0!==t&&null!==(n=t.affiliation_by)&&void 0!==n&&n.length?null===(i=I.institute)||void 0===i?void 0:i.affiliation_by[0]:"",one_line_about:I.institute.one_line_about,gr_initials:null===I||void 0===I||null===(o=I.institute)||void 0===o?void 0:o.gr_initials,insEstdDate:null===I||void 0===I||null===(a=I.institute)||void 0===a?void 0:a.insEstdDate,alias_pronounciation:{staff_alias:null!==(l=null===I||void 0===I||null===(s=I.institute)||void 0===s||null===(r=s.alias_pronounciation)||void 0===r?void 0:r.staff_alias)&&void 0!==l?l:"",student_alias:null!==(c=null===I||void 0===I||null===(_=I.institute)||void 0===_||null===(d=_.alias_pronounciation)||void 0===d?void 0:d.student_alias)&&void 0!==c?c:""}})}),[null===I||void 0===I?void 0:I.institute]);return(0,_.jsxs)("div",{className:h.container,children:[(0,_.jsxs)("div",{className:h.containerhead,children:[(0,_.jsx)("h6",{children:J("edit_profile_info")}),(0,_.jsx)("img",{src:"/images/close-post-icon.svg",alt:"",onClick:()=>{C(-1)}})]}),(0,_.jsxs)("div",{className:h.containercontent,children:[(0,_.jsx)(m,{id:"name",type:"text",value:T.insName,onChange:e=>A({...T,insName:e.target.value}),labelText:J("institute_name"),placeholder:J("enter_ins_name")}),(0,_.jsxs)("div",{className:h.flexItem50,children:[(0,_.jsx)("h3",{className:h.input_label,children:J("institute_type")}),(0,_.jsxs)("div",{className:y?"".concat(h.formselectactive," ").concat(h.formselect):h.formselect,onClick:()=>F({...y,insType:!y.insType}),children:[T.insType&&""!==T.insType?(0,_.jsx)("h6",{className:h.genderh,onClick:()=>F(!0),children:T.insType}):(0,_.jsx)("h6",{className:"".concat(h.genderplaceholder," ").concat(h.genderh),onClick:()=>F(!0),children:J("select_ins_type")}),y.insType?(0,_.jsx)("img",{className:"".concat(h.updownIcon," ").concat(h.downIcon),src:"".concat(v.pc,"/up-triangle-icon.svg"),alt:""}):(0,_.jsx)("img",{className:h.upIcon,src:"".concat(v.pc,"/downn-icon.svg"),alt:""}),(0,_.jsx)(N,{open:y.insType,onClose:()=>F({...y,insType:!1}),setFormData:A,formData:T})]})]}),(0,_.jsx)(m,{id:"one_lIner",type:"text",labelText:J("one_liner"),value:T.one_line_about,onChange:e=>{var t;(null===(t=e.target.value)||void 0===t?void 0:t.length)<=60&&A({...T,one_line_about:e.target.value})},placeholder:J("ins_about")}),(0,_.jsx)(j.Z,{maxLength:60,valueLength:T.one_line_about,customStyle:{paddingRight:"2.5rem"}}),(0,_.jsx)(m,{id:"bio",type:"text",labelText:J("desc_about"),value:T.insAbout,onChange:e=>A({...T,insAbout:e.target.value}),placeholder:J("enter_ins_about")}),(0,_.jsx)(m,{id:"email",type:"text",labelText:J("email_id"),value:T.insEmail,onChange:e=>A({...T,insEmail:e.target.value}),placeholder:J("email_detail")}),(0,_.jsx)(m,{id:"number",type:"number",labelText:J("contact_number"),value:T.insPhoneNumber,onChange:e=>A({...T,insPhoneNumber:e.target.value}),placeholder:J("contact_number_detial")}),(0,_.jsx)(k.Z,{labelText:J("institute_establish_date"),placeholder:J("institute_establish_date_placeholder"),name:"insEstdDate",value:T.insEstdDate,onDateFunction:e=>{let t=null===e||void 0===e?void 0:e.split("/"),n="".concat(t[2],"-").concat(t[1],"-").concat(t[0]);A((e=>({...e,insEstdDate:n})))},customStyleContainer:{position:"relative",margin:"1.5vw 3.028vw 0 3.028vw",width:"auto"}}),(0,_.jsx)(m,{id:"achievement",type:"text",labelText:J("institute_achievements"),value:T.insAchievement,onChange:e=>A({...T,insAchievement:e.target.value}),placeholder:J("enter_ins_achivement")}),(0,_.jsx)(m,{id:"address",type:"text",labelText:J("institute_address"),value:T.insAddress,onChange:e=>A({...T,insAddress:e.target.value}),placeholder:J("enter_ins_address")}),(0,_.jsx)(m,{id:"type",type:"text",maxLength:"5",value:T.gr_initials,onChange:e=>A({...T,gr_initials:e.target.value}),labelText:J("initials"),placeholder:J("enter_initials")}),(0,_.jsx)(m,{id:"type",type:"text",maxLength:"70",value:T.alias_pronounciation.staff_alias,onChange:e=>A({...T,alias_pronounciation:{...T.alias_pronounciation,staff_alias:e.target.value}}),labelText:J("staff_alias"),placeholder:J("staff_alias_label")}),(0,_.jsx)(m,{id:"type",type:"text",maxLength:"70",value:T.alias_pronounciation.student_alias,onChange:e=>A({...T,alias_pronounciation:{...T.alias_pronounciation,student_alias:e.target.value}}),labelText:J("student_alias"),placeholder:J("student_alias_label")}),(0,_.jsxs)("div",{className:h.labelContainer,onClick:()=>{T.insAffiliated||T.insAffiliatedBy||u((e=>!e))},children:[(0,_.jsx)("div",{className:h.label,children:(0,_.jsx)("label",{htmlFor:"affilated",children:"Affilated To"})}),T.insAffiliated&&(0,_.jsxs)("div",{className:h.add_supporting_member,children:[(0,_.jsx)("img",{src:null!==(e=T.insAffiliated)&&void 0!==e&&e.photo?"".concat(v.yI,"/").concat(null===(t=T.insAffiliated)||void 0===t?void 0:t.photo):"/images/member_tab/class/default_avatar.svg",alt:"avatar of institute"}),(0,_.jsx)("section",{children:(0,_.jsxs)("h6",{className:h.add_supporting_member_heading,children:["".concat(null===(n=T.insAffiliated)||void 0===n?void 0:n.affiliation_name)," ",J("pending_")]})})]}),T.insAffiliatedBy&&(0,_.jsxs)("div",{className:h.add_supporting_member,children:[(0,_.jsx)("img",{src:null!==(o=T.insAffiliatedBy)&&void 0!==o&&o.photo?"".concat(v.yI,"/").concat(null===(a=T.insAffiliatedBy)||void 0===a?void 0:a.photo):"/images/member_tab/class/default_avatar.svg",alt:"avatar of institute"}),(0,_.jsx)("section",{children:(0,_.jsxs)("h6",{className:h.add_supporting_member_heading,children:["".concat(null===(l=T.insAffiliatedBy)||void 0===l?void 0:l.affiliation_name)," ",J("approved_")]})})]}),!T.insAffiliated&&!T.insAffiliatedBy&&(0,_.jsxs)("div",{className:h.inputBox,children:[(0,_.jsx)("p",{children:J("select_and_send_request")}),(0,_.jsx)("img",{src:"/images/downn-icon.svg",alt:"select icon"})]})]}),(0,_.jsx)(b.Z,{children:c&&(0,_.jsx)(w,{onClose:()=>u((e=>!e)),selectMember:e=>{M({InstituteId:{query_ins:null===r||void 0===r?void 0:r.id},mid:null===e||void 0===e?void 0:e._id}).then((()=>{})).catch({})}})}),(0,_.jsx)(d,{buttonText:J("update_profile"),submitHandler:()=>{var e;Z(!0),S({id:r.id,infoUpdate:T,old_initials:null===I||void 0===I||null===(e=I.institute)||void 0===e?void 0:e.gr_initials}).then((()=>{var e;Z(!1),D(),C("/q/".concat(null===(e=I.institute)||void 0===e?void 0:e.name,"/profile"))})).catch({})},disabled:P,customStyle:{width:"100%"}})]})]})},I=()=>(0,_.jsxs)("div",{className:a,children:[(0,_.jsx)("div",{className:o,children:(0,_.jsx)(l.default,{status:"profile"})}),(0,_.jsx)(J,{})]})},65543:(e,t,n)=>{n.d(t,{u:()=>o});var i=n(72791);const o=()=>({hideScrollbar:i.useCallback((()=>{}),[]),showScrollbar:i.useCallback((()=>{document.body.style.overflow=""}),[]),scrollToTop:i.useCallback((()=>{window.scrollTo(0,0)}),[])})},68686:(e,t,n)=>{n.d(t,{JA:()=>v,I9:()=>g,Ph:()=>x,Oo:()=>b,Si:()=>p});var i=n(69721);const o="/api/v1",a=e=>e.query({query:e=>"".concat(o,"/feed/filter/by/answer?page=").concat(e.page,"&limit=").concat(e.limit)}),l=e=>e.query({query:e=>"".concat(o,"/manage/admin/all?search=").concat(e.search,"&page=").concat(e.page,"&limit=").concat(e.limit)}),s=(e,t)=>e.mutation({query:e=>({url:"".concat(o,"/manage/admin/").concat(e.mid,"/add"),method:"".concat(t),body:e.InstituteId})}),r=e=>e.query({query:()=>"".concat(o,"/admin/all/sub/domain/array")}),c=(e,t)=>e.mutation({query:e=>({url:"".concat(o,"/admin/link/sub/domain/").concat(e.subId,"?insId=").concat(e.insId),method:"".concat(t)})});const _=n(40753).S.injectEndpoints({endpoints:e=>({trendingPlateformQuestion:a(e),affiliatedSearch:l(e),affiliatedRequest:s(e,i.lx),allDomainPlateform:r(e),linkedInstituteDomain:c(e,i.K7)})}),{useTrendingPlateformQuestionQuery:d,useAffiliatedSearchQuery:u,useAffiliatedRequestMutation:m,useAllDomainPlateformQuery:h,useLinkedInstituteDomainMutation:f}=_,p=e=>{const{data:t,refetch:n}=d(e);return{trendingPlateformQuestion:t,trendingPlateformQuestionRefetch:n}},g=e=>{const{data:t,refetch:n}=u(e);return{affiliatedSearch:t,affiliatedSearchRefetch:n}},v=()=>{const[e]=m();return[e]},x=e=>{const{data:t,refetch:n}=h("",{skip:e.skip});return{allDomainPlateform:t,allDomainPlateformRefetch:n}},b=()=>{const[e]=f();return[e]}},98684:(e,t,n)=>{n.d(t,{D3:()=>c,Fk:()=>d,HN:()=>i,IC:()=>h,Ii:()=>m,J7:()=>s,Jr:()=>u,U_:()=>r,Uw:()=>_,dB:()=>a,ix:()=>f,nj:()=>o,p3:()=>l,wP:()=>g,zr:()=>p});const i="/public/images/company_logo",o="/public/images/auth",a="/public/images/navbar",l="/public/images/feed",s="/public/images/finance",r="/public/images/admission",c="/public/images/lms",_="/public/images/loading",d="/public/images/utility",u="/public/images/feedback",m="/public/images/mentor",h="/public/images/staff",f="/public/images/automate",p="/public/images/store",g="/public/images/academic_department"},72310:(e,t,n)=>{n.d(t,{Ch:()=>_,SY:()=>r,qu:()=>c});var i=n(72791),o=n(36314),a=n(34129),l=n(63515),s=n(80184);const r=e=>{let{msg:t,run:n,setRun:r}=e;const c=i.forwardRef((function(e,t){return(0,s.jsx)(l.Z,{elevation:6,ref:t,variant:"filled",...e})})),_=(e,t)=>{"clickaway"!==t&&r(!1)};return(0,s.jsx)(o.Z,{spacing:2,sx:{width:"100%",position:"stickey"},children:(0,s.jsx)(a.Z,{anchorOrigin:{vertical:"bottom",horizontal:"right"},open:n,autoHideDuration:3e3,onClose:_,children:(0,s.jsx)(c,{onClose:_,severity:"error",sx:{width:"100%"},children:t})})})},c=e=>{let{msg:t,run:n,setRun:r}=e;const c=i.forwardRef((function(e,t){return(0,s.jsx)(l.Z,{elevation:6,ref:t,variant:"filled",...e})})),_=(e,t)=>{"clickaway"!==t&&r(!1)};return(0,s.jsx)(o.Z,{spacing:2,sx:{width:"100%",position:"stickey"},children:(0,s.jsx)(a.Z,{anchorOrigin:{vertical:"bottom",horizontal:"right"},open:n,autoHideDuration:3e3,onClose:_,children:(0,s.jsx)(c,{onClose:_,severity:"success",sx:{width:"100%"},children:t})})})},_=e=>{let{msg:t,run:n,setRun:r,postiton:c,type:_}=e;const d=i.forwardRef((function(e,t){return(0,s.jsx)(l.Z,{elevation:6,ref:t,variant:"filled",...e})})),u=(e,t)=>{"clickaway"!==t&&r(!1)};return(0,s.jsx)(o.Z,{spacing:2,sx:{width:"100%",position:'"stickey"'},children:(0,s.jsx)(a.Z,{anchorOrigin:{vertical:"".concat(c),horizontal:"right"},open:n,autoHideDuration:3e3,onClose:u,children:(0,s.jsx)(d,{onClose:u,severity:_,sx:{width:"100%"},children:t})})})}},36314:(e,t,n)=>{n.d(t,{Z:()=>N});var i=n(63366),o=n(87462),a=n(72791),l=n(30831),s=n(82466),r=n(94419),c=n(21217),_=n(93457),d=n(86083),u=n(78519),m=n(52173),h=n(51184),f=n(45682),p=n(80184);const g=["component","direction","spacing","divider","children","className","useFlexGap"],v=(0,m.Z)(),x=(0,_.Z)("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,t)=>t.root});function b(e){return(0,d.Z)({props:e,name:"MuiStack",defaultTheme:v})}function j(e,t){const n=a.Children.toArray(e).filter(Boolean);return n.reduce(((e,i,o)=>(e.push(i),o<n.length-1&&e.push(a.cloneElement(t,{key:"separator-".concat(o)})),e)),[])}const y=e=>{let{ownerState:t,theme:n}=e,i=(0,o.Z)({display:"flex",flexDirection:"column"},(0,h.k9)({theme:n},(0,h.P$)({values:t.direction,breakpoints:n.breakpoints.values}),(e=>({flexDirection:e}))));if(t.spacing){const e=(0,f.hB)(n),o=Object.keys(n.breakpoints.values).reduce(((e,n)=>(("object"===typeof t.spacing&&null!=t.spacing[n]||"object"===typeof t.direction&&null!=t.direction[n])&&(e[n]=!0),e)),{}),a=(0,h.P$)({values:t.direction,base:o}),l=(0,h.P$)({values:t.spacing,base:o});"object"===typeof a&&Object.keys(a).forEach(((e,t,n)=>{if(!a[e]){const i=t>0?a[n[t-1]]:"column";a[e]=i}}));const r=(n,i)=>{return t.useFlexGap?{gap:(0,f.NA)(e,n)}:{"& > :not(style):not(style)":{margin:0},"& > :not(style) ~ :not(style)":{["margin".concat((o=i?a[i]:t.direction,{row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"}[o]))]:(0,f.NA)(e,n)}};var o};i=(0,s.Z)(i,(0,h.k9)({theme:n},l,r))}return i=(0,h.dt)(n.breakpoints,i),i};var F=n(66934),M=n(31402);const C=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{createStyledComponent:t=x,useThemeProps:n=b,componentName:s="MuiStack"}=e,_=t(y),d=a.forwardRef((function(e,t){const a=n(e),d=(0,u.Z)(a),{component:m="div",direction:h="column",spacing:f=0,divider:v,children:x,className:b,useFlexGap:y=!1}=d,F=(0,i.Z)(d,g),M={direction:h,spacing:f,useFlexGap:y},C=(0,r.Z)({root:["root"]},(e=>(0,c.Z)(s,e)),{});return(0,p.jsx)(_,(0,o.Z)({as:m,ownerState:M,ref:t,className:(0,l.Z)(C.root,b)},F,{children:v?j(x,v):x}))}));return d}({createStyledComponent:(0,F.ZP)("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,t)=>t.root}),useThemeProps:e=>(0,M.Z)({props:e,name:"MuiStack"})}),N=C},93457:(e,t,n)=>{n.d(t,{Z:()=>i});const i=(0,n(44046).ZP)()},80272:(e,t,n)=>{n.d(t,{Z:()=>i});const i={string_container:"StringLength_string_container__v6b--",mark_container:"StringLength_mark_container__KQsQy"}},38733:(e,t,n)=>{n.d(t,{Z:()=>i});const i={navbar:"JoinForm_navbar__npU1d",join_form_container:"JoinForm_join_form_container__6Q37N",join_form_container_view:"JoinForm_join_form_container_view__WTHSM",join_form_label_view:"JoinForm_join_form_label_view__S0UQR",join_form_label:"JoinForm_join_form_label__+f6Zt",join_form_input_view:"JoinForm_join_form_input_view__IQBh3",join_form_input:"JoinForm_join_form_input__9NwMx",join_form_select:"JoinForm_join_form_select__ZKKC0",join_form_text_area:"JoinForm_join_form_text_area__LO4QP",join_form_select_paragraph:"JoinForm_join_form_select_paragraph__I7OdI",goback_container:"JoinForm_goback_container__QOvvd",goback_container_text:"JoinForm_goback_container_text__ypd18",goback_container_text_go:"JoinForm_goback_container_text_go__1LHHZ",student_from_container:"JoinForm_student_from_container__nqW9v",student_from_fill:"JoinForm_student_from_fill__wK3o3",student_from_fill_edit:"JoinForm_student_from_fill_edit__KnMCY",form_container:"JoinForm_form_container__zv+j1",form_other_field:"JoinForm_form_other_field__KTI7H",form_container_profile:"JoinForm_form_container_profile__mhlA2",form_container_profile_image:"JoinForm_form_container_profile_image__3MM9C",form_container_profile_photo:"JoinForm_form_container_profile_photo__rEoTw",form_container_profile_image_label:"JoinForm_form_container_profile_image_label__b3SWJ",form_edit_icon:"JoinForm_form_edit_icon__-KIJI",form_profile_info:"JoinForm_form_profile_info__lWv7z",join_form_file_container:"JoinForm_join_form_file_container__48w3c",join_form_file_choose:"JoinForm_join_form_file_choose__wRgT3",join_form_file_choosen:"JoinForm_join_form_file_choosen__H3gUQ",join_form_yes:"JoinForm_join_form_yes__uvOsh",join_form_no:"JoinForm_join_form_no__DOdmt",join_form_active_background:"JoinForm_join_form_active_background__g8OsI",student_detail_name:"JoinForm_student_detail_name__jhziI",student_detail_gender:"JoinForm_student_detail_gender__WLAnI",optional_subject:"JoinForm_optional_subject__8yMbd",arrowIcon:"JoinForm_arrowIcon__zjTO0",join_form_select_custom:"JoinForm_join_form_select_custom__l0lyn",join_form_select_custom_paragraph:"JoinForm_join_form_select_custom_paragraph__h6oDm",join_form_select_custom_icon:"JoinForm_join_form_select_custom_icon__K+ezK",join_form_select_custom_list:"JoinForm_join_form_select_custom_list__Zq-RM",join_form_select_custom_paragraph_option:"JoinForm_join_form_select_custom_paragraph_option__dfz95",add_batch_wise:"JoinForm_add_batch_wise__12tq5",only_admssion_fees:"JoinForm_only_admssion_fees__jjmRd",form_add_fee_btn:"JoinForm_form_add_fee_btn__9gdSc",is_fee_remain:"JoinForm_is_fee_remain__7hNMX",search_container:"JoinForm_search_container__N1K46",search_container_text:"JoinForm_search_container_text__rMKzy",searchIcon:"JoinForm_searchIcon__07z4t",skip_i_do:"JoinForm_skip_i_do__Sri7h",login_details_modal:"JoinForm_login_details_modal__jhsQQ",login_details_modal_title:"JoinForm_login_details_modal_title__JDkZp",login_details_btn:"JoinForm_login_details_btn__2kYn2",profilephotocontainer:"JoinForm_profilephotocontainer__-5H5K",profilephotoins:"JoinForm_profilephotoins__-LFGo",certidyheading:"JoinForm_certidyheading__NJO+i",buttoncontainer:"JoinForm_buttoncontainer__S+iaM",buttonInner:"JoinForm_buttonInner__jv-6K",button_main:"JoinForm_button_main__7JKyK",duplicateCopy:"JoinForm_duplicateCopy__AfcNi",letter_head_container:"JoinForm_letter_head_container__AMFGH"}},71933:(e,t,n)=>{n.d(t,{Z:()=>i});const i={labelContainer:"Input_labelContainer__GVWeF",label:"Input_label__lT49x",inputBox:"Input_inputBox__hb-n1"}}}]);
//# sourceMappingURL=2360.2f65e5ea.chunk.js.map