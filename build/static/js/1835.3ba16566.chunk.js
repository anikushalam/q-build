"use strict";(self.webpackChunkmithkal_qviple=self.webpackChunkmithkal_qviple||[]).push([[1835],{3890:function(e,t,a){a(72791);var n=a(72420),o=a(39230),_=a(80184);t.Z=function(e){var t=e.labelText,a=e.customTileLabel,i=e.customTileContainer,l=e.customTileChild,r=e.tileList,c=e.activeTile,s=e.onTile,d=e.onParentTile,u=e.customTileAvailableChild,f=(0,o.$G)().t;return(0,_.jsxs)("div",{className:n.Z.tile_container,children:[t&&(0,_.jsx)("h6",{className:n.Z.tile_label,style:a,children:f(t)}),(0,_.jsx)("section",{className:n.Z.tile_tile_container,style:i,children:null===r||void 0===r?void 0:r.map((function(e){return null!==e&&void 0!==e&&e.isAvaiable?(0,_.jsxs)("div",{className:(null===e||void 0===e?void 0:e.key)===c?n.Z.tile_tile_active:n.Z.tile_tile,onClick:function(){return d(e)},style:u,children:[f(null===e||void 0===e?void 0:e.name),"FILTER"===(null===e||void 0===e?void 0:e.mode)?"":(0,_.jsxs)("div",{style:{whiteSpace:"break-spaces"},children:[f("available")," "," : "," ",null===e||void 0===e?void 0:e.count]})]}):(0,_.jsx)("div",{className:(null===e||void 0===e?void 0:e.key)===c?n.Z.tile_tile_active:n.Z.tile_tile,onClick:function(){return s(null===e||void 0===e?void 0:e.key)},style:l,children:f(null===e||void 0===e?void 0:e.name)})}))})]})}},77121:function(e,t,a){var n=a(1413),o=(a(72791),a(38733)),_=a(39230),i=a(80184);t.Z=function(e){var t=e.labelText,a=e.name,l=e.value,r=e.onChange,c=e.errorShow,s=e.customStyleContainer,d=e.disabled,u=(0,_.$G)().t;return(0,i.jsxs)("div",{className:o.Z.join_form_container,style:(0,n.Z)({},s),children:[(0,i.jsxs)("label",{className:o.Z.join_form_label,children:[t,c&&(0,i.jsxs)("span",{style:{color:"red",marginLeft:"15px"},children:["* ",u("form_require_label")]})]}),(0,i.jsxs)("div",{className:o.Z.join_form_file_container,children:[(0,i.jsx)("label",{className:l?"".concat(o.Z.join_form_file_choose," ").concat(o.Z.join_form_active_background):o.Z.join_form_file_choose,htmlFor:a,children:u(""!==l?"file_chosen":"chose_file")}),(0,i.jsx)("label",{className:o.Z.join_form_file_choosen,htmlFor:a,children:""!==l?null===l||void 0===l?void 0:l.originalName:u("no_file_chosen")})]}),(0,i.jsx)("input",{type:"file",name:a,id:a,style:{display:"none"},onChange:r,disabled:d||!1})]})}},72952:function(e,t,a){var n=a(1413),o=(a(72791),a(39230)),_=a(38733),i=a(80184);t.Z=function(e){var t,a=e.labelText,l=e.name,r=e.type,c=e.value,s=e.onChange,d=e.placeholder,u=e.errorShow,f=e.customStyleContainer,m=e.disabled,v=(0,o.$G)().t;return(0,i.jsxs)("div",{className:_.Z.join_form_container,style:(0,n.Z)({},f),children:[(0,i.jsxs)("label",{className:_.Z.join_form_label,htmlFor:l,children:[a," ",u&&(0,i.jsxs)("span",{style:{color:"red",marginLeft:"15px"},children:["* ",v("form_require_label")]})]}),(0,i.jsx)("textarea",{className:_.Z.join_form_text_area,type:r,value:c,onChange:s,name:l,placeholder:d,rows:c?(null===c||void 0===c||null===(t=c.split("\n"))||void 0===t?void 0:t.length)+3:1,disabled:m})]})}},93097:function(e,t,a){a(72791);var n=a(12072),o=a(84489),_=a(69721),i=a(80184);t.Z=function(e){var t=e.onClose,a=e.keyValue;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.Z,{onClose:t}),(0,i.jsx)(n.Z,{customStyle:{zIndex:"1200",borderRadius:"0"},children:(0,i.jsx)("img",{src:"".concat(_.yI,"/").concat(a),alt:"view file",style:{maxWidth:"700px",maxHeight:"500px"}})})]})}},47167:function(e,t,a){var n=a(1413),o=(a(72791),a(16871)),_=a(43504),i=a(23769),l=a(45639),r=a(80184);t.Z=function(e){var t=e.tabList,a=e.activeIndexTab,c=e.setActiveIndexTab,s=e.customStyleTab,d=e.carryParentState,u=e.showAs,f=e.customStyleLink,m=(0,o.UO)();return(0,r.jsx)("div",{className:l.Z.universal_container,children:u?null===t||void 0===t?void 0:t.map((function(e,t){return"disabled"===(null===e||void 0===e?void 0:e.is_active)?(0,r.jsx)("div",{className:a===(null===e||void 0===e?void 0:e.id)?"".concat(l.Z.universal_container_item," ").concat(l.Z.universal_container_item_active):l.Z.universal_container_item,style:(0,n.Z)((0,n.Z)({},f),{},{opacity:"0.5"}),children:(0,r.jsx)(i.Z,{children:null===e||void 0===e?void 0:e.name})},t):(0,r.jsx)(_.rU,{to:"/q/".concat(m.username,"/").concat(null===e||void 0===e?void 0:e.url),state:(0,n.Z)({},d),style:(0,n.Z)({},f),children:(0,r.jsx)("div",{className:a===(null===e||void 0===e?void 0:e.id)?"".concat(l.Z.universal_container_item," ").concat(l.Z.universal_container_item_active):l.Z.universal_container_item,style:(0,n.Z)({},s),children:(0,r.jsx)(i.Z,{children:null===e||void 0===e?void 0:e.name})})},t)})):null===t||void 0===t?void 0:t.map((function(e,t){return(0,r.jsx)("div",{className:a===(null===e||void 0===e?void 0:e.id)?"".concat(l.Z.universal_container_item," ").concat(l.Z.universal_container_item_active):l.Z.universal_container_item,onClick:function(){return c(null===e||void 0===e?void 0:e.id)},style:(0,n.Z)({},s),children:(0,r.jsx)(i.Z,{children:null===e||void 0===e?void 0:e.name})},t)}))})}},23769:function(e,t,a){a.d(t,{Z:function(){return i}});var n=a(29439),o=a(72791),_=a(80184);var i=function(e){var t=e.children,a=e.onclick,i=(0,o.useState)(!1),l=(0,n.Z)(i,2),r=l[0],c=l[1],s=(0,o.useState)({x:-1,y:-1}),d=(0,n.Z)(s,2),u=d[0],f=d[1];return(0,o.useEffect)((function(){-1!==u.x&&-1!==u.y?(c(!0),setTimeout((function(){return c(!1)}),1e3)):c(!1)}),[u]),(0,o.useEffect)((function(){r||f({x:-1,y:-1})}),[r]),(0,_.jsxs)("div",{className:"ripple_btn",onClick:function(e){f({x:e.clientX-e.target.offsetLeft,y:e.clientY-e.target.offsetTop}),a&&a(e)},children:[r?(0,_.jsx)("span",{className:"ripple"}):"",(0,_.jsx)("span",{className:"content",children:t})]})}},36665:function(e,t,a){a(72791);var n=a(12072),o=a(1874),_=a(80184);t.Z=function(e){var t=e.onClose,a=e.children;return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(o.Z,{onClose:t}),(0,_.jsx)(n.Z,{children:a})]})}},49499:function(e,t,a){a.d(t,{Z:function(){return k}});var n=a(4942),o=a(1413),_=a(29439),i=a(72791),l=a(39230),r=a(36665),c=a(33399),s=a(98094),d=a(98734),u=a(72952),f=a(64540),m=a(3890),v=a(93433),h=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],b=["January","February","March","April","May","June","July","August","September","October","November","December"],x=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:b,a=new Date,n="".concat(a.getDate(),"-").concat(a.getMonth()+1,"-").concat(a.getFullYear()),o=[1,2,3,4,5,6,0],l=(0,i.useState)(a),r=(0,_.Z)(l,2),c=r[0],s=r[1],d=new Date(c.getFullYear(),c.getMonth()+1,0),u=new Date(c.getFullYear(),c.getMonth(),0),f=d.getDate(),m=new Date(c.getFullYear(),c.getMonth(),1).getDay(),x=o.indexOf(m)+1,g=u.getDate()-o.indexOf(m)+1,y=1,p=1,j={},F=1;F<7;F++)for(var S=1;S<8;S++)j[F]||(j[F]=[]),1===F?S<x?(j[F]=[].concat((0,v.Z)(j[F]),[{classes:"in-prev-month",date:"".concat(g,"-").concat(0===c.getMonth()?12:c.getMonth(),"-").concat(0===c.getMonth()?c.getFullYear()-1:c.getFullYear()),value:g}]),g++):(j[F]=[].concat((0,v.Z)(j[F]),[{classes:"",date:"".concat(y,"-").concat(c.getMonth()+1,"-").concat(c.getFullYear()),value:y}]),y++):F>1&&y<f+1?(j[F]=[].concat((0,v.Z)(j[F]),[{classes:"",date:"".concat(y,"-").concat(c.getMonth()+1,"-").concat(c.getFullYear()),value:y}]),y++):(j[F]=[].concat((0,v.Z)(j[F]),[{classes:"in-next-month",date:"".concat(p,"-").concat(c.getMonth()+2===13?1:c.getMonth()+2,"-").concat(c.getMonth()+2===13?c.getFullYear()+1:c.getFullYear()),value:p}]),p++);return{daysShort:e,monthNames:t,todayFormatted:n,calendarRows:j,selectedDate:c,getPrevMonth:function(){s((function(e){return new Date(e.getFullYear(),e.getMonth()-1,1)}))},getNextMonth:function(){s((function(e){return new Date(e.getFullYear(),e.getMonth()+1,1)}))}}},g=a(80184),y=function(e){var t=e.dateSelected,a=(e.setSelectedDate,e.removeDateArray),n=e.addDateArray,o=x(),l=o.calendarRows,r=o.selectedDate,c=o.todayFormatted,s=o.daysShort,d=o.monthNames,u=o.getNextMonth,f=o.getPrevMonth,m=(0,i.useState)([]),h=(0,_.Z)(m,2),b=(h[0],h[1]),y=function(e){if(t.length>0&&t.includes(e)){var o=t.filter((function(t){return t!==e}));a(o),b(o)}else n(e),b((function(t){return[].concat((0,v.Z)(t),[e])}))};return(0,g.jsxs)(i.Fragment,{children:[(0,g.jsxs)("div",{className:"calenderheader",children:[(0,g.jsx)("div",{className:"monthbtn",onClick:f,children:(0,g.jsx)("img",{alt:"not found",src:"/images/members/arrow-left.svg"})}),(0,g.jsxs)("div",{className:"yearmonth",children:[(0,g.jsx)("h6",{children:"".concat(d[r.getMonth()])}),(0,g.jsx)("p",{children:"".concat(r.getFullYear())})]}),(0,g.jsx)("div",{className:"monthbtn",onClick:u,children:(0,g.jsx)("img",{alt:"not found",src:"/images/members/arrow-right.svg"})})]}),(0,g.jsxs)("table",{className:"table",children:[(0,g.jsx)("thead",{children:(0,g.jsx)("tr",{children:s.map((function(e){return(0,g.jsx)("th",{className:"day",children:e},e)}))})}),(0,g.jsx)("tbody",{children:Object.values(l).map((function(e){return(0,g.jsx)("tr",{children:e.map((function(e){return e.date===c?(0,g.jsx)("td",{className:"".concat(e.classes," date"),onClick:function(){return y("".concat(e.value<10?"0".concat(e.value):e.value,"/").concat(r.getMonth()+1<10?"0".concat(r.getMonth()+1):r.getMonth()+1,"/").concat(r.getFullYear()))},children:(0,g.jsx)("div",{className:t.includes("".concat(e.value<10?"0".concat(e.value):e.value,"/").concat(r.getMonth()+1<10?"0".concat(r.getMonth()+1):r.getMonth()+1,"/").concat(r.getFullYear()))?"".concat(e.classes," datediv aaji active"):"".concat(e.classes," datediv aaji"),children:e.value})},e.date):"in-prev-month"===e.classes||"in-next-month"===e.classes?(0,g.jsx)("td",{className:"".concat(e.classes," date"),children:(0,g.jsx)("div",{className:(t.includes("".concat(e.value<10?"0".concat(e.value):e.value,"/").concat(r.getMonth()+1<10?"0".concat(r.getMonth()+1):r.getMonth()+1,"/").concat(r.getFullYear())),"".concat(e.classes," datediv ")),children:e.value})},e.date):(0,g.jsx)("td",{className:"".concat(e.classes," date"),onClick:function(){return y("".concat(e.value<10?"0".concat(e.value):e.value,"/").concat(r.getMonth()+1<10?"0".concat(r.getMonth()+1):r.getMonth()+1,"/").concat(r.getFullYear()))},children:(0,g.jsx)("div",{className:t.includes("".concat(e.value<10?"0".concat(e.value):e.value,"/").concat(r.getMonth()+1<10?"0".concat(r.getMonth()+1):r.getMonth()+1,"/").concat(r.getFullYear()))?"".concat(e.classes," datediv  active"):"".concat(e.classes," datediv "),children:e.value})},e.date)}))},e[0].date)}))})]})]})},p="NewLeave_calender__iV3pq",j="NewLeave_btncontainer__Rq76P",F="NewLeave_reasonbtn__-Qm42",S=a(36721),Z=function(e){var t=e.onClose,a=e.onGrabDates,n=e.alradyDates,o=e.currentTileActive,d=e.createdBy,u=(0,l.$G)().t,f=(0,i.useState)([]),m=(0,_.Z)(f,2),h=m[0],b=m[1],x=(0,i.useState)({msg:"",run:!1}),Z=(0,_.Z)(x,2),N=Z[0],w=Z[1],C=new Date,T="".concat(C.getDate()<10?"0".concat(C.getDate()):C.getDate(),"/").concat(C.getMonth()+1<10?"0".concat(C.getMonth()+1):C.getMonth()+1,"/").concat(C.getFullYear());function k(e){return new Date(e.split("/").reverse().join("/"))}(0,i.useEffect)((function(){(null===n||void 0===n?void 0:n.length)>0&&b(n)}),[n]);return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(r.Z,{onClose:t,children:(0,g.jsx)("div",{className:c.Z.add_category_modal,style:{width:"35rem",minHeight:"10rem",height:"fit-content"},children:(0,g.jsxs)("section",{className:c.Z.fee_middle_section_container,style:{marginBottom:"1.2rem"},children:[(0,g.jsx)("h6",{style:{fontSize:"20px",fontWeight:"600"},children:u("choose_leave_dates")}),(0,g.jsx)(s.Z,{customStyle:{width:"100%",marginTop:"0.7rem"}}),(0,g.jsxs)("div",{className:p,children:[(0,g.jsx)(y,{dateSelected:h,setSelectedDate:b,removeDateArray:function(e){b(e)},addDateArray:function(e){+k(e)>=+k(T)&&b((function(t){return[].concat((0,v.Z)(t),[e])}))}}),(0,g.jsx)("div",{className:j,children:(0,g.jsx)("div",{className:F,onClick:function(){"OWN_PROFILE"===d?(a(h),t()):(null===o||void 0===o?void 0:o.count)<(null===h||void 0===h?void 0:h.length)?w({msg:"You have not sufficient ".concat(null===o||void 0===o?void 0:o.key,"."),run:!0}):(a(h),t())},children:u("select")})})]})]})})}),(0,g.jsx)(S.Ch,{msg:N.msg,run:N.run,setRun:function(){return w({msg:"",run:!1})},postiton:"bottom",type:"error"})]})},N=a(84959),w=a(77121),C=a(74289),T=[{name:"casual_leave",key:"Casual Leave",isAvaiable:!0,count:0},{name:"medical_leave",key:"Medical Leave",isAvaiable:!0,count:0},{name:"sick_leave",key:"Sick Leave",isAvaiable:!0,count:0},{name:"compensation_off_leave",key:"Compensation Off Leave",isAvaiable:!0,count:0},{name:"on_duty_leave",key:"On Duty Leave"},{name:"leave_without_pay",key:"Leave Without Pay"}],k=function(e){var t,a=e.staffId,v=e.onRefetch,h=e.onClose,b=e.leaveConfig,x=e.createdBy,y=(0,l.$G)().t,p=(0,i.useState)({reason:"",dates:[],attach:"",leave_type:"Casual Leave"}),j=(0,_.Z)(p,2),F=j[0],S=j[1],k=(0,i.useState)(T),J=(0,_.Z)(k,2),M=J[0],P=J[1],D=(0,i.useState)(!1),V=(0,_.Z)(D,2),A=V[0],I=V[1],O=(0,i.useState)(""),L=(0,_.Z)(O,2),H=L[0],Y=L[1],B=(0,i.useState)(""),K=(0,_.Z)(B,2),E=K[0],R=K[1],W=(0,f.hx)(),q=(0,_.Z)(W,1)[0],G=(0,C.AM)(),Q=(0,_.Z)(G,1)[0],U=(0,N.FL)(),z=(0,_.Z)(U,1)[0],X=(0,i.useState)(""),$=(0,_.Z)(X,2),ee=$[0],te=$[1],ae=(0,i.useState)(""),ne=(0,_.Z)(ae,2),oe=ne[0],_e=ne[1];(0,i.useEffect)((function(){if(b){var e=T;e[0].count=null===b||void 0===b?void 0:b.casual_leave,e[1].count=null===b||void 0===b?void 0:b.medical_leave,e[2].count=null===b||void 0===b?void 0:b.sick_leave,e[3].count=null===b||void 0===b?void 0:b.c_off_leave,P(e),_e(e[0])}}),[b]),(0,i.useEffect)((function(){x&&S((function(e){return(0,o.Z)((0,o.Z)({},e),{},{leave_type:"Compensation Off Leave"})}))}),[x]);var ie=function(){R((function(e){return!e}))};return(0,g.jsx)(g.Fragment,{children:E?(0,g.jsx)(Z,{onClose:ie,alradyDates:F.dates,onGrabDates:function(e){S((function(t){return(0,o.Z)((0,o.Z)({},t),{},{dates:e})}))},currentTileActive:oe,createdBy:x}):(0,g.jsxs)(r.Z,{onClose:function(){A||h()},children:[(0,g.jsx)("div",{className:c.Z.add_category_modal,style:{width:"35rem",minHeight:"10rem",height:"fit-content",maxHeight:"35rem",overflowY:"auto",scrollBehavior:"smooth"},children:(0,g.jsxs)("section",{className:c.Z.fee_middle_section_container,style:{marginBottom:"1.2rem"},children:[(0,g.jsx)("h6",{style:{fontSize:"20px",fontWeight:"600"},children:y("OWN_PROFILE"===x?"request_c_off_leave":"create_new_leave")}),(0,g.jsx)(s.Z,{customStyle:{width:"100%",marginTop:"0.7rem"}}),"OWN_PROFILE"===x?null:(0,g.jsx)(m.Z,{labelText:"leave_type",tileList:M,activeTile:F.leave_type,onTile:function(e){S((function(t){return(0,o.Z)((0,o.Z)({},t),{},{leave_type:e})}))},onParentTile:function(e){S((function(t){return(0,o.Z)((0,o.Z)({},t),{},{leave_type:null===e||void 0===e?void 0:e.key})})),_e(e)},customTileContainer:{flexWrap:"wrap"},customTileAvailableChild:{flexDirection:"column",alignItems:"flex-start"}}),(0,g.jsx)(u.Z,{labelText:y("enter_reason"),placeholder:y("enter_reason"),name:"reason",value:F.reason,type:"text",onChange:function(e){S((function(t){return(0,o.Z)((0,o.Z)({},t),{},(0,n.Z)({},e.target.name,e.target.value))}))},errorShow:H.reason}),(0,g.jsxs)("div",{onClick:ie,className:c.Z.set_fees_structure_btn,style:{width:"fit-content",cursor:"pointer",backgroundColor:"white",height:"34px",padding:"15px 13px"},children:[y("select_dates"),H.dates&&(0,g.jsx)("span",{style:{color:"red"},children:"* required"})]}),(0,g.jsx)("div",{className:c.Z.leave_dates,children:null===(t=F.dates)||void 0===t?void 0:t.map((function(e,t){var a;return(0,g.jsxs)("h6",{children:[e,(null===(a=F.dates)||void 0===a?void 0:a.length)===t+1?"":", "]},e)}))}),(0,g.jsx)(w.Z,{labelText:y("leave_attachment"),name:"leave_attachment",value:ee?{originalName:null===ee||void 0===ee?void 0:ee.documentName}:"",onChange:function(e){if(e.target.files[0]){I((function(e){return!e}));var t=new FormData;t.append("file",e.target.files[0]),z({fileUpload:t}).then((function(t){var a,n,_;I((function(e){return!e})),te({documentName:null===(a=e.target.files[0])||void 0===a?void 0:a.name,documentKey:null===(n=t.data)||void 0===n?void 0:n.imageKey,documentType:null===(_=e.target.files[0])||void 0===_?void 0:_.type}),S((function(e){var a;return(0,o.Z)((0,o.Z)({},e),{},{attach:null===(a=t.data)||void 0===a?void 0:a.imageKey})}))})).catch((function(){I((function(e){return!e}))}))}},customStyleContainer:{width:"100%"}}),(0,g.jsx)("button",{className:c.Z.fee_middle_confirm_button,onClick:function(){if(a){var e=function(e){var t={};for(var a in e){var n;if(null!==(n=["attach"])&&void 0!==n&&n.includes(a));else if("dates"===a){var o;null!==(o=e[a])&&void 0!==o&&o.length||(t[a]="".concat(a," is required!"))}else e[a]||(t[a]="".concat(a," is required!"))}return t}(F),t=!1;for(var n in e)if(n){t=!0;break}t?Y(e):(I((function(e){return!e})),"OWN_PROFILE"===x?Q({sid:a,leaveConfig:F}).then((function(){v(),I((function(e){return!e})),h()})).catch({}):q({sid:a,LeaveData:F}).then((function(){v(),I((function(e){return!e})),h()})).catch({}))}},style:{marginTop:"2rem"},children:y("create")})]})}),A&&(0,g.jsx)(d.Z,{})]})})}},12072:function(e,t,a){a.d(t,{Z:function(){return l}});var n=a(1413),o=(a(72791),a(54164)),_="Overlay_overlay_card__PAr1h",i=a(80184),l=function(e){var t=e.children,a=e.customStyle;return(0,i.jsx)(i.Fragment,{children:o.createPortal((0,i.jsx)("div",{className:_,style:(0,n.Z)({},a),children:t}),document.getElementById("overlay"))})}},84489:function(e,t,a){var n=a(1413),o=(a(72791),a(51857)),_=a(80184);t.Z=function(e){var t=e.onClose,a=e.customStyleBackdrop;return(0,_.jsx)("div",{className:o.Z.search_backdrop,style:(0,n.Z)({},a),onClick:t})}},1874:function(e,t,a){a(72791);var n=a(54164),o=a(84489),_=a(80184);t.Z=function(e){var t=e.onClose,a=e.customStyleBackdrop;return(0,_.jsx)(_.Fragment,{children:n.createPortal((0,_.jsx)(o.Z,{onClose:t,customStyleBackdrop:a}),document.getElementById("backdrop"))})}},98094:function(e,t,a){var n=a(1413),o=(a(72791),a(55136)),_=a(80184);t.Z=function(e){var t=e.customStyle;return(0,_.jsx)("hr",{className:o.Z.universal_hr,style:(0,n.Z)({},t)})}},32589:function(e,t,a){var n=a(1413),o=a(29439),_=a(72791),i=a(93097),l=a(55136),r=a(80184);t.Z=function(e){var t=e.labelText1,a=e.labelValue1,c=e.labelText2,s=e.labelValue2,d=e.labelFile1,u=e.labelFile2,f=e.howManyField,m=e.customStyleContainer,v=e.customStyleEachField,h=(0,_.useState)(""),b=(0,o.Z)(h,2),x=b[0],g=b[1],y=function(e){g(e)};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:l.Z.each_field_container,style:(0,n.Z)({},m),children:[(0,r.jsxs)("div",{className:l.Z.each_field,style:(0,n.Z)({},v),children:[(0,r.jsxs)("p",{className:l.Z.each_field_text,children:[t," : "]}),d?(0,r.jsx)("h6",{className:l.Z.each_field_text_value,style:{color:"#002BBE",cursor:"pointer"},onClick:function(){return y(a)},children:a?"View":"N/A"}):(0,r.jsx)("h6",{className:l.Z.each_field_text_value,children:a})]}),1!==f&&(0,r.jsxs)("div",{className:l.Z.each_field,style:(0,n.Z)({},v),children:[(0,r.jsxs)("p",{className:l.Z.each_field_text,children:[c," : "]}),u?(0,r.jsx)("h6",{className:l.Z.each_field_text_value,style:{color:"#002BBE",cursor:"pointer"},onClick:function(){return y(s)},children:s?"View":"N/A"}):(0,r.jsx)("h6",{className:l.Z.each_field_text_value,children:s})]})]}),x&&(0,r.jsx)(i.Z,{onClose:function(){g("")},keyValue:x})]})}},60600:function(e,t,a){var n=a(37762),o=a(29439),_=a(72791),i=a(98094),l=a(32589),r=a(52864),c=a(39230),s=a(80184);t.Z=function(e){var t=e.staff,a=e.viewAs,d=(0,c.$G)().t,u=(0,_.useState)(""),f=(0,o.Z)(u,2),m=f[0],v=f[1];return(0,_.useEffect)((function(){var e;if(null!==t&&void 0!==t&&null!==(e=t.staffDocuments)&&void 0!==e&&e.length){var a,o={},_=(0,n.Z)(null===t||void 0===t?void 0:t.staffDocuments);try{for(_.s();!(a=_.n()).done;){var i=a.value;o[null===i||void 0===i?void 0:i.documentName]=null===i||void 0===i?void 0:i.documentKey}}catch(l){_.e(l)}finally{_.f()}v(o)}}),[null===t||void 0===t?void 0:t.staffDocuments]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.Z,{labelTag:d("personal_info"),children:[(0,s.jsx)(l.Z,{labelText1:d("name"),labelValue1:"".concat((null===t||void 0===t?void 0:t.staffFirstName)||""," ").concat(null!==t&&void 0!==t&&t.staffMiddleName?null===t||void 0===t?void 0:t.staffMiddleName:""," ").concat((null===t||void 0===t?void 0:t.staffLastName)||""),labelText2:d("dob"),labelValue2:(null===t||void 0===t?void 0:t.staffDOB)||"",customStyleContainer:a?{width:"auto"}:""}),(0,s.jsx)(l.Z,{labelText1:d("gender"),labelValue1:(null===t||void 0===t?void 0:t.staffGender)||"",labelText2:d("mother_name"),labelValue2:(null===t||void 0===t?void 0:t.staffMotherName)||"",customStyleContainer:a?{width:"auto"}:""})]}),(0,s.jsx)(i.Z,{customStyle:a?{width:"100%"}:""}),(0,s.jsxs)(r.Z,{labelTag:d("other_personal"),children:[(0,s.jsx)(l.Z,{labelText1:d("dob"),labelValue1:(null===t||void 0===t?void 0:t.staffBirthPlace)||"",labelText2:d("mobile_bumber"),labelValue2:(null===t||void 0===t?void 0:t.staffPhoneNumber)||"",customStyleContainer:a?{width:"auto"}:""}),(0,s.jsx)(l.Z,{labelText1:d("adhar_number"),labelValue1:(null===t||void 0===t?void 0:t.staffAadharNumber)||"",labelText2:d("qualification"),labelValue2:(null===t||void 0===t?void 0:t.staffQualification)||"",customStyleContainer:a?{width:"auto"}:""})]}),(0,s.jsx)(i.Z,{customStyle:a?{width:"100%"}:""}),(0,s.jsxs)(r.Z,{labelTag:d("i_details"),children:[(0,s.jsx)(l.Z,{labelText1:d("nationality"),labelValue1:(null===t||void 0===t?void 0:t.staffNationality)||"",labelText2:d("cast_category"),labelValue2:(null===t||void 0===t?void 0:t.staffCastCategory)||"",customStyleContainer:a?{width:"auto"}:""}),(0,s.jsx)(l.Z,{labelText1:d("religion"),labelValue1:(null===t||void 0===t?void 0:t.staffReligion)||"",labelText2:d("mother_tongue"),labelValue2:(null===t||void 0===t?void 0:t.staffMTongue)||"",customStyleContainer:a?{width:"auto"}:""}),(0,s.jsx)(l.Z,{labelText1:d("cast"),labelValue1:(null===t||void 0===t?void 0:t.staffCast)||"",howManyField:1,customStyleContainer:a?{width:"auto"}:""})]}),(0,s.jsx)(i.Z,{customStyle:a?{width:"100%"}:""}),(0,s.jsx)(r.Z,{labelTag:d("address_"),children:(0,s.jsx)(l.Z,{labelText1:d("c_add"),labelValue1:(null===t||void 0===t?void 0:t.staffCurrentAddress)||"",labelText2:d("p_add"),labelValue2:(null===t||void 0===t?void 0:t.staffAddress)||"",customStyleContainer:a?{width:"auto"}:""})}),(0,s.jsx)(i.Z,{customStyle:a?{width:"100%"}:""}),(0,s.jsxs)(r.Z,{labelTag:d("prev_school_document"),children:[(0,s.jsx)(l.Z,{labelText1:d("prev_school"),labelValue1:(null===t||void 0===t?void 0:t.staffPreviousSchool)||"",labelText2:d("aadhar_back"),labelValue2:null===t||void 0===t?void 0:t.staffAadharBackCard,labelFile2:!0,customStyleContainer:a?{width:"auto"}:""}),(0,s.jsx)(l.Z,{labelText1:d("aadhar_front"),labelValue1:null===t||void 0===t?void 0:t.staffAadharFrontCard,labelFile1:!0,labelText2:d("caste_"),labelValue2:null===t||void 0===t?void 0:t.staffCasteCertificatePhoto,labelFile2:!0,customStyleContainer:a?{width:"auto"}:""}),(0,s.jsx)(l.Z,{labelText1:d("form_identity_view_label"),labelValue1:null===m||void 0===m?void 0:m.identityDocument,labelFile1:!0,labelText2:d("form_joining_transfer_letter_view_label"),labelValue2:null===m||void 0===m?void 0:m.joiningTransferLetter,labelFile2:!0,customStyleContainer:a?{width:"auto"}:""}),(0,s.jsx)(l.Z,{labelText1:d("form_leaving_transfer_letter_view_label"),labelValue1:null===m||void 0===m?void 0:m.leavingTransferCertificate,labelFile1:!0,labelText2:d("form_income_certificate_view_label"),labelValue2:null===m||void 0===m?void 0:m.incomeCertificate,labelFile2:!0,customStyleContainer:a?{width:"auto"}:""}),(0,s.jsx)(l.Z,{labelText1:d("form_last_year_marksheet_view_label"),labelValue1:null===m||void 0===m?void 0:m.lastYearMarksheet,labelFile1:!0,labelText2:d("form_nationality_certificate_view_label"),labelValue2:null===m||void 0===m?void 0:m.nationalityCertificate,labelFile2:!0,customStyleContainer:a?{width:"auto"}:""}),(0,s.jsx)(l.Z,{labelText1:d("form_domicile_certificate_view_label"),labelValue1:null===m||void 0===m?void 0:m.domicileCertificate,labelFile1:!0,labelText2:d("form_non_creamy_layer_view_label"),labelValue2:null===m||void 0===m?void 0:m.nonCreamyLayerCertificate,labelFile2:!0,customStyleContainer:a?{width:"auto"}:""})]}),(0,s.jsx)(i.Z,{customStyle:a?{width:"100%"}:""}),(0,s.jsxs)(r.Z,{labelTag:d("bank_details"),children:[(0,s.jsx)(l.Z,{labelText1:d("form_bank_name_label"),labelValue1:(null===t||void 0===t?void 0:t.staffBankName)||"",labelText2:d("form_ifsc_code_label"),labelValue2:(null===t||void 0===t?void 0:t.staffBankIfsc)||"",customStyleContainer:a?{width:"auto"}:""}),(0,s.jsx)(l.Z,{labelText1:d("acnt_holder"),labelValue1:(null===t||void 0===t?void 0:t.staffBankAccountHolderName)||"",labelText2:d("bank_passbook"),labelValue2:null===t||void 0===t?void 0:t.staffBankPassbook,labelFile2:!0,customStyleContainer:a?{width:"auto"}:""}),(0,s.jsx)(l.Z,{labelText1:d("account_holder"),labelValue1:(null===t||void 0===t?void 0:t.staffBankAccount)||"",howManyField:1,customStyleContainer:a?{width:"auto"}:""})]}),(0,s.jsx)(i.Z,{customStyle:a?{width:"100%"}:""})]})}},52864:function(e,t,a){a(72791);var n=a(55136),o=a(80184);t.Z=function(e){var t=e.labelTag,a=e.children;return(0,o.jsxs)("div",{className:n.Z.each_info_container,children:[(0,o.jsx)("h5",{children:t}),a]})}},65313:function(e,t,a){a.d(t,{J:function(){return l},QW:function(){return r},dh:function(){return _},eu:function(){return i}});var n=a(29439),o=a(6710),_=function(e){var t=(0,o.$1)(e);return{allAttendance:t.data,allAttendanceRefetch:t.refetch}},i=function(){var e=(0,o.sH)();return[(0,n.Z)(e,1)[0]]},l=function(){var e=(0,o.RH)();return[(0,n.Z)(e,1)[0]]},r=function(e){var t=(0,o.bd)(e);return{staffCalenderAttendance:t.data,staffCalenderAttendanceRefetch:t.refetch}}},72420:function(e,t){t.Z={tile_tile_container:"Tile_tile_tile_container__peBzA",tile_tile:"Tile_tile_tile__YJvgm",tile_tile_active:"Tile_tile_tile_active__kaja3",tile_label:"Tile_tile_label__+exU0",tile_container:"Tile_tile_container__wmFGD"}},38733:function(e,t){t.Z={navbar:"JoinForm_navbar__npU1d",join_form_container:"JoinForm_join_form_container__6Q37N",join_form_container_view:"JoinForm_join_form_container_view__WTHSM",join_form_label_view:"JoinForm_join_form_label_view__S0UQR",join_form_label:"JoinForm_join_form_label__+f6Zt",join_form_input_view:"JoinForm_join_form_input_view__IQBh3",join_form_input:"JoinForm_join_form_input__9NwMx",join_form_select:"JoinForm_join_form_select__ZKKC0",join_form_text_area:"JoinForm_join_form_text_area__LO4QP",join_form_select_paragraph:"JoinForm_join_form_select_paragraph__I7OdI",goback_container:"JoinForm_goback_container__QOvvd",goback_container_text:"JoinForm_goback_container_text__ypd18",goback_container_text_go:"JoinForm_goback_container_text_go__1LHHZ",student_from_container:"JoinForm_student_from_container__nqW9v",student_from_fill:"JoinForm_student_from_fill__wK3o3",student_from_fill_edit:"JoinForm_student_from_fill_edit__KnMCY",form_container:"JoinForm_form_container__zv+j1",form_other_field:"JoinForm_form_other_field__KTI7H",form_container_profile:"JoinForm_form_container_profile__mhlA2",form_container_profile_image:"JoinForm_form_container_profile_image__3MM9C",form_container_profile_photo:"JoinForm_form_container_profile_photo__rEoTw",form_container_profile_image_label:"JoinForm_form_container_profile_image_label__b3SWJ",form_edit_icon:"JoinForm_form_edit_icon__-KIJI",form_profile_info:"JoinForm_form_profile_info__lWv7z",join_form_file_container:"JoinForm_join_form_file_container__48w3c",join_form_file_choose:"JoinForm_join_form_file_choose__wRgT3",join_form_file_choosen:"JoinForm_join_form_file_choosen__H3gUQ",join_form_yes:"JoinForm_join_form_yes__uvOsh",join_form_no:"JoinForm_join_form_no__DOdmt",join_form_active_background:"JoinForm_join_form_active_background__g8OsI",student_detail_name:"JoinForm_student_detail_name__jhziI",student_detail_gender:"JoinForm_student_detail_gender__WLAnI",optional_subject:"JoinForm_optional_subject__8yMbd",arrowIcon:"JoinForm_arrowIcon__zjTO0",join_form_select_custom:"JoinForm_join_form_select_custom__l0lyn",join_form_select_custom_paragraph:"JoinForm_join_form_select_custom_paragraph__h6oDm",join_form_select_custom_icon:"JoinForm_join_form_select_custom_icon__K+ezK",join_form_select_custom_list:"JoinForm_join_form_select_custom_list__Zq-RM",join_form_select_custom_paragraph_option:"JoinForm_join_form_select_custom_paragraph_option__dfz95",add_batch_wise:"JoinForm_add_batch_wise__12tq5",only_admssion_fees:"JoinForm_only_admssion_fees__jjmRd",form_add_fee_btn:"JoinForm_form_add_fee_btn__9gdSc",is_fee_remain:"JoinForm_is_fee_remain__7hNMX",search_container:"JoinForm_search_container__N1K46",search_container_text:"JoinForm_search_container_text__rMKzy",searchIcon:"JoinForm_searchIcon__07z4t",skip_i_do:"JoinForm_skip_i_do__Sri7h",login_details_modal:"JoinForm_login_details_modal__jhsQQ",login_details_modal_title:"JoinForm_login_details_modal_title__JDkZp",login_details_btn:"JoinForm_login_details_btn__2kYn2",profilephotocontainer:"JoinForm_profilephotocontainer__-5H5K",profilephotoins:"JoinForm_profilephotoins__-LFGo",certidyheading:"JoinForm_certidyheading__NJO+i",buttoncontainer:"JoinForm_buttoncontainer__S+iaM",buttonInner:"JoinForm_buttonInner__jv-6K",button_main:"JoinForm_button_main__7JKyK",duplicateCopy:"JoinForm_duplicateCopy__AfcNi",letter_head_container:"JoinForm_letter_head_container__AMFGH"}},45639:function(e,t){t.Z={universal_container:"UniversalTab_universal_container__uxTOR",universal_container_item:"UniversalTab_universal_container_item__M0pS7",universal_container_item_active:"UniversalTab_universal_container_item_active__3u3Wt"}},33399:function(e,t){t.Z={fess_container:"FeesStructure_fess_container__KJfJA",category_header:"FeesStructure_category_header__0NZE9",category_header_title:"FeesStructure_category_header_title__a6uYK",fees_category:"FeesStructure_fees_category__B3Yax",fees_category_icon:"FeesStructure_fees_category_icon__JArrd",fees_category_text:"FeesStructure_fees_category_text__pt891",assignment_description_head:"FeesStructure_assignment_description_head__Qc3FE",assignment_description:"FeesStructure_assignment_description__qqF15",department_container:"FeesStructure_department_container__dpMM0",department_card_name:"FeesStructure_department_card_name__eWHf+",department_card_head:"FeesStructure_department_card_head__B2ZwA",department_card_title:"FeesStructure_department_card_title__eyEiT",add_new_category:"FeesStructure_add_new_category__3y9Qr",category_card:"FeesStructure_category_card__NVUgp",fees_card_text:"FeesStructure_fees_card_text__F3gSO",category_card_fee:"FeesStructure_category_card_fee__3w8Sb",fees_card_text_bottom:"FeesStructure_fees_card_text_bottom__7HBFH",department_card_container:"FeesStructure_department_card_container__4Otk6",department_card_image:"FeesStructure_department_card_image__+RQd-",fees_card:"FeesStructure_fees_card__WTgO6",add_category_modal:"FeesStructure_add_category_modal__a37mG",add_category_modal_title:"FeesStructure_add_category_modal_title__DxkYZ",structure_container_title:"FeesStructure_structure_container_title__EUdFM",add_category_modal_title_left:"FeesStructure_add_category_modal_title_left__2nPOT",set_fees_structure_btn:"FeesStructure_set_fees_structure_btn__V7NPc",installment_list:"FeesStructure_installment_list__wA45E",fees_head_title:"FeesStructure_fees_head_title__IxR06",fees_head_installment:"FeesStructure_fees_head_installment__IiGql",table_heading:"FeesStructure_table_heading__RNv9z",table_container:"FeesStructure_table_container__hJ+PK",table_body:"FeesStructure_table_body__O02ZC",table_body_list:"FeesStructure_table_body_list__F5n3s",fee_head_name_input:"FeesStructure_fee_head_name_input__mmPKk",fee_head_amount_input:"FeesStructure_fee_head_amount_input__9C2eU",add_fees_head_btn:"FeesStructure_add_fees_head_btn__YHLGM",fees_total:"FeesStructure_fees_total__-0grI",create_fees_structure_btn:"FeesStructure_create_fees_structure_btn__yySE7",fees_card_hover:"FeesStructure_fees_card_hover__3ulkW",fees_card_hover_active:"FeesStructure_fees_card_hover_active__ESF6D",fee_middle_section:"FeesStructure_fee_middle_section__INnVO",fee_middle_confirm_button:"FeesStructure_fee_middle_confirm_button__C0Q6g",fee_middle_section_container:"FeesStructure_fee_middle_section_container__1lMVJ",edit_icon:"FeesStructure_edit_icon__EhhnH",search_container:"FeesStructure_search_container__IDhvw",search_container_text:"FeesStructure_search_container_text__PWYPL",searchIcon:"FeesStructure_searchIcon__dKXPf",category_card_hover:"FeesStructure_category_card_hover__vDSbu",category_card_hover_active:"FeesStructure_category_card_hover_active__5bQ7H",menu_icon:"FeesStructure_menu_icon__Ns6lc",upload_excel_container:"FeesStructure_upload_excel_container__jommG",upload_excel_file:"FeesStructure_upload_excel_file__+csTW",add_employee_staff:"FeesStructure_add_employee_staff__Hrl+P",add_employee_staff_text:"FeesStructure_add_employee_staff_text__LgZOf",payroll_account_btn:"FeesStructure_payroll_account_btn__t3vSl",account_payment_row:"FeesStructure_account_payment_row__VO533",normal_select_btn:"FeesStructure_normal_select_btn__yU6K-",seating_modal:"FeesStructure_seating_modal__w52St",add_category_modal_title_active:"FeesStructure_add_category_modal_title_active__hFUaf",notify_container:"FeesStructure_notify_container__C+qTv",notify_text:"FeesStructure_notify_text__d3pZD",next_btn:"FeesStructure_next_btn__tR55q",btn_group:"FeesStructure_btn_group__NPo8U",leave_dates:"FeesStructure_leave_dates__2IQZS",letter_head_container:"FeesStructure_letter_head_container__+fkq5"}},51857:function(e,t){t.Z={search_backdrop:"SearchHeader_search_backdrop__MsKpG",search_card:"SearchHeader_search_card__-jNcg",search_container:"SearchHeader_search_container__NS7Om",search_container_text:"SearchHeader_search_container_text__bkolR",searchIcon:"SearchHeader_searchIcon__J7cNp",search_container_back:"SearchHeader_search_container_back__ZoXdV"}},55136:function(e,t){t.Z={staff_profile_container:"StaffProfile_staff_profile_container__GG5AM",staff_header_container:"StaffProfile_staff_header_container__avRlK",staff_header_function:"StaffProfile_staff_header_function__l9cDM",staff_header_text:"StaffProfile_staff_header_text__XX8rQ",staff_header_prev:"StaffProfile_staff_header_prev__ImXKU",staff_header_next:"StaffProfile_staff_header_next__jjoJr",staff_header_close:"StaffProfile_staff_header_close__wXG-N",staff_profile_photo_name:"StaffProfile_staff_profile_photo_name__WWUV4",staff_profile_photo_index:"StaffProfile_staff_profile_photo_index__-yyx9",each_info_container:"StaffProfile_each_info_container__Mo3TB",each_field_text:"StaffProfile_each_field_text__vvAvg",each_field_text_value:"StaffProfile_each_field_text_value__k1OsE",universal_hr:"StaffProfile_universal_hr__w130J",staff_profile_photo_container:"StaffProfile_staff_profile_photo_container__rFPEV",staff_profile_photo_info:"StaffProfile_staff_profile_photo_info__CxVDi",staff_profile_photo_image:"StaffProfile_staff_profile_photo_image__5f2cC",staff_profile_photo_edit:"StaffProfile_staff_profile_photo_edit__y03dk",each_field_container:"StaffProfile_each_field_container__0qKjw",each_field:"StaffProfile_each_field__18G-9",student_attendane_container:"StaffProfile_student_attendane_container__64BII",student_attendance_heading:"StaffProfile_student_attendance_heading__0hW2K",colours:"StaffProfile_colours__-7mIV",monthColours:"StaffProfile_monthColours__A3asC",percentage:"StaffProfile_percentage__GO1RT",presentcount:"StaffProfile_presentcount__u30HH",absentcount:"StaffProfile_absentcount__d+utq",link_hold_container:"StaffProfile_link_hold_container__0dRjX",link_hold_container_hostel:"StaffProfile_link_hold_container_hostel__LcldT",card_hold_container:"StaffProfile_card_hold_container__HQQcE",admission_fees:"StaffProfile_admission_fees__MoZHM",certificate_btn_container:"StaffProfile_certificate_btn_container__jui9m",certificate_btn:"StaffProfile_certificate_btn__3NWfg",admission_actions:"StaffProfile_admission_actions__ayyJD",staff_designation_btn:"StaffProfile_staff_designation_btn__4C3h7"}}}]);
//# sourceMappingURL=1835.3ba16566.chunk.js.map