"use strict";(self.webpackChunkmithkal_qviple=self.webpackChunkmithkal_qviple||[]).push([[1490],{91490:function(e,t,i){i.d(t,{Z:function(){return E}});var n=i(29439),l=i(72791),o=i(9679),a=i(39230),c=i(10406),s=i(24582),d=i(11105),u=i(1413),r=i(36665),v=i(98734),m=i(33992),_=i(97655),f=i(87457),h=i(98094),j=i(38733),b=i(80184),y=function(e){var t=e.selectLabel,i=e.onClick,o=e.selectedValue,c=e.options,s=e.customStyleContainer,d=e.customLabelStyle,r=e.customListStyle,v=e.openAs,m=e.errorShow,_=e.defalutValue,f=e.viewAs,h=(0,a.$G)().t,y=(0,l.useState)(!1),x=(0,n.Z)(y,2),g=x[0],p=x[1],Z=(0,l.useState)(""),N=(0,n.Z)(Z,2),C=N[0],S=N[1],A=function(){p((function(e){return!e}))};(0,l.useEffect)((function(){"NORMAL_FILTER"===f&&S(_)}),[f,_]);var I=function(e){i(e),A()};return(0,b.jsxs)("div",{className:j.Z.join_form_container,style:(0,u.Z)({},s),children:[(0,b.jsxs)("p",{className:j.Z.join_form_select_paragraph,style:(0,u.Z)({},d),children:[t,m&&(0,b.jsxs)("span",{style:{color:"red",marginLeft:"15px"},children:["* ",h("form_require_label")]})]}),(0,b.jsxs)("section",{className:j.Z.join_form_select_custom,onClick:A,children:[C?(0,b.jsx)("p",{className:j.Z.join_form_select_custom_paragraph,children:null!==C&&void 0!==C?C:""}):(0,b.jsx)("p",{className:j.Z.join_form_select_custom_paragraph,children:o}),(0,b.jsx)("img",{className:j.Z.join_form_select_custom_icon,src:"/images/down-icon.svg",alt:"categor icon"})]}),g&&(0,b.jsx)(b.Fragment,{children:(0,b.jsx)("section",{className:j.Z.join_form_select_custom_list,style:r?(0,u.Z)({},r):(null===c||void 0===c?void 0:c.length)>2?{overflowY:"scroll"}:{backgroundColor:"#ffffff"},children:null===c||void 0===c?void 0:c.map((function(e,t){var i,n;return(0,b.jsx)("p",{onClick:function(){var t,i;(I("PROMOTE"===v?e:null!==e&&void 0!==e&&e._id?null===e||void 0===e?void 0:e._id:e),"FINANCE_BANK"===f)||S(null!==e&&void 0!==e&&e.subjectName?"".concat(null===e||void 0===e?void 0:e.subjectName," ").concat(null!==e&&void 0!==e&&null!==(t=e.selected_batch_query)&&void 0!==t&&t.batchName?"(".concat(null===e||void 0===e||null===(i=e.selected_batch_query)||void 0===i?void 0:i.batchName,")"):""):e)},className:j.Z.join_form_select_custom_paragraph_option,children:null!==e&&void 0!==e&&e.subjectName?"".concat(null===e||void 0===e?void 0:e.subjectName," ").concat(null!==e&&void 0!==e&&null!==(i=e.selected_batch_query)&&void 0!==i&&i.batchName?"(".concat(null===e||void 0===e||null===(n=e.selected_batch_query)||void 0===n?void 0:n.batchName,")"):""):e},t)}))})})]})},x=function(e){var t,i,o,c,d,j,x,g=e.onClose,p=e.openAs,Z=e.clsId,N=e.day,C=e.onRefetch,S=e.dayMenu,A=e.onCloseParent,I=(0,a.$G)().t,k=(0,l.useState)(!1),T=(0,n.Z)(k,2),E=T[0],w=T[1],R=(0,l.useState)(""),L=(0,n.Z)(R,2),q=L[0],F=L[1],D=(0,l.useState)({from:"",to:""}),M=(0,n.Z)(D,2),P=M[0],O=M[1],B=(0,l.useState)(""),V=(0,n.Z)(B,2),z=V[0],G=V[1],W=(0,m.fk)({cid:Z,skip:!Z}),$=W.oneClassAllSubject,K=W.oneClassAllSubjectRefetch,U=(0,s.Uw)(),Y=(0,n.Z)(U,1)[0];(0,l.useEffect)((function(){Z&&K()}),[Z,K]),(0,l.useEffect)((function(){var e,t;"EDIT"===p&&(O({from:(null===S||void 0===S||null===(e=S.from)||void 0===e?void 0:e.substring(0,5))||"",to:(null===S||void 0===S||null===(t=S.to)||void 0===t?void 0:t.substring(0,5))||""}),G(null===S||void 0===S?void 0:S.subject))}),[p,S]);var H=function(e){var t=null===e||void 0===e?void 0:e.split(":"),i="";t[0]>12?(i="Pm",t[0]-=12):t[0]<12?(i="Am",0===t[0]&&(t[0]=12)):i="Pm";var n=t[0]>9?t[0]:"0".concat(+t[0]);return"".concat(n,":").concat(t[1]," ").concat(i)};return(0,b.jsx)(r.Z,{onClose:g,children:(0,b.jsxs)("div",{className:f.Z.add_category_modal,style:{width:"30rem"},children:[(0,b.jsxs)("div",{className:f.Z.add_category_modal_title,children:[(0,b.jsx)("h6",{children:I("EDIT"===p?"upadate_time_table":"add_new_time_table")}),(0,b.jsx)("img",{src:"/images/close-post-icon.svg",onClick:g,alt:""})]}),(0,b.jsx)(h.Z,{customStyle:{width:"100%",marginBlock:"0.5rem"}}),(0,b.jsx)(y,{selectLabel:I("select_subject"),selectedValue:I("please_select_subject"),options:null!==(t=null===$||void 0===$||null===(i=$.classes)||void 0===i?void 0:i.subject)&&void 0!==t?t:[],onClick:function(e){G(e)},value:null!==(o="".concat(null===z||void 0===z?void 0:z.subjectName," ").concat(null!==z&&void 0!==z&&null!==(c=z.selected_batch_query)&&void 0!==c&&c.batchName?"(".concat(null===z||void 0===z||null===(d=z.selected_batch_query)||void 0===d?void 0:d.batchName,")"):""))&&void 0!==o?o:"",defalutValue:null!==z&&void 0!==z&&z.subjectName?"".concat(null===z||void 0===z?void 0:z.subjectName," ").concat(null!==z&&void 0!==z&&null!==(j=z.selected_batch_query)&&void 0!==j&&j.batchName?"(".concat(null===z||void 0===z||null===(x=z.selected_batch_query)||void 0===x?void 0:x.batchName,")"):""):"",viewAs:"NORMAL_FILTER",openAs:"PROMOTE"}),(0,b.jsx)(_.Z,{labelText:I("from"),placeholder:"00:00",name:"from",value:null===P||void 0===P?void 0:P.from,type:"time",onChange:function(e){return O((function(t){return(0,u.Z)((0,u.Z)({},t),{},{from:e.target.value})}))},errorShow:q.from}),(0,b.jsx)(_.Z,{labelText:I("to"),placeholder:"00:00",name:"to",value:null===P||void 0===P?void 0:P.to,type:"time",onChange:function(e){return O((function(t){return(0,u.Z)((0,u.Z)({},t),{},{to:e.target.value})}))},errorShow:q.to}),(0,b.jsx)("button",{className:f.Z.set_fees_structure_btn,title:"Add Time Table",onClick:function(){if(Z&&null!==z&&void 0!==z&&z._id){var e,t=function(e){var t={};for(var i in e)e[i]||(t[i]="".concat(i," is required!"));return t}(P),i=!1;for(var n in t)if(n){i=!0;break}if(i)F(t);else w((function(e){return!e})),Y({cid:Z,sfid:null===S||void 0===S?void 0:S.sfid,timetableBody:{day:N,from:H(P.from),to:H(P.to),subjectId:null===z||void 0===z?void 0:z._id,isEdit:null!==(e=null===S||void 0===S?void 0:S.isEdit)&&void 0!==e&&e}}).then((function(){C(),"EDIT"===p?A():g()})).catch({})}},style:{justifyContent:"center"},children:I("EDIT"===p?"update":"create")}),E&&(0,b.jsx)(v.Z,{})]})})},g=i(33148),p=i(69721),Z=i(87049),N=i(84489),C=i(12072),S=function(e){var t=e.onClose,i=e.onRefetch,o=e.dayMenu,a=e.clsId,c=e.day,d=(0,l.useState)(!1),u=(0,n.Z)(d,2),r=u[0],m=u[1],_=(0,l.useState)(!1),f=(0,n.Z)(_,2),h=f[0],j=f[1],y=(0,s.eT)(),g=(0,n.Z)(y,1)[0];return(0,b.jsx)(b.Fragment,{children:h?(0,b.jsx)(x,{onCloseParent:t,onClose:function(){return j(!1)},openAs:"EDIT",dayMenu:o,clsId:a,day:c,onRefetch:i}):(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(N.Z,{onClose:t}),(0,b.jsxs)(C.Z,{customStyle:{zIndex:"1200"},children:[(0,b.jsxs)("div",{className:Z.Z.edit_modal_container,style:{width:"200px"},children:[(0,b.jsx)("h6",{className:Z.Z.edit,onClick:function(){return j((function(e){return!e}))},children:"Edit"}),(0,b.jsx)("h6",{className:Z.Z.remove,onClick:function(){null!==o&&void 0!==o&&o.tid&&null!==o&&void 0!==o&&o.sfid&&(m((function(e){return!e})),g({tid:null===o||void 0===o?void 0:o.tid,scid:null===o||void 0===o?void 0:o.sfid,flow:"PARTICULAR"}).then((function(){i(),t(),m((function(e){return!e}))})).catch({}))},children:"Delete"})]}),r&&(0,b.jsx)(v.Z,{})]})]})})},A=function(e){var t,i,o,a,c,s,d,r,v,m,_,f,h,j,y,x,Z,N=e.table,C=e.clsId,A=e.day,I=e.onRefetch,k=e.tid,T=(0,l.useState)(""),E=(0,n.Z)(T,2),w=E[0],R=E[1];return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsxs)("div",{className:g.Z.class_container,style:{flexDirection:"column",alignItems:"flex-start",gap:"0"},children:[(0,b.jsxs)("div",{style:{width:"100%",display:"flex",alignItems:"flex-start",justifyContent:"space-between"},children:[(0,b.jsxs)("div",{style:{display:"flex",alignItems:"flex-start",gap:"1rem"},children:[(0,b.jsx)("img",{src:"/images/member_tab/class/class-time-icon.svg",alt:"time icon"}),(0,b.jsxs)("p",{children:[null===N||void 0===N?void 0:N.from," "," to ",null===N||void 0===N?void 0:N.to]})]}),(0,b.jsx)("img",{src:"/images/member_tab/class/class-edit-icon.svg",alt:"time icon",style:{cursor:"pointer"},onClick:function(){R({tid:k,from:null===N||void 0===N?void 0:N.from,to:null===N||void 0===N?void 0:N.to,sfid:null===N||void 0===N?void 0:N._id,subject:(0,u.Z)({subjectName:null===N||void 0===N?void 0:N.subjectName},null===N||void 0===N?void 0:N.subject),isEdit:!0})}})]}),(0,b.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"1rem"},children:[(0,b.jsx)("img",{className:g.Z.oneRowImage,src:null!==N&&void 0!==N&&null!==(t=N.assignStaff)&&void 0!==t&&t.staffProfilePhoto?"".concat(p.yI,"/").concat(null===N||void 0===N||null===(i=N.assignStaff)||void 0===i?void 0:i.staffProfilePhoto):"/images/member_tab/class/default_avatar.svg",alt:"staff avatr"}),(0,b.jsxs)("div",{className:g.Z.class_container_text,children:[(0,b.jsxs)("h6",{children:[null!==(o=null===N||void 0===N?void 0:N.subjectName)&&void 0!==o?o:""," ",null!==N&&void 0!==N&&null!==(a=N.subject)&&void 0!==a&&a.subject_category?"(".concat(null===N||void 0===N||null===(c=N.subject)||void 0===c?void 0:c.subject_category,")"):"",null!==N&&void 0!==N&&null!==(s=N.subject)&&void 0!==s&&null!==(d=s.selected_batch_query)&&void 0!==d&&d.batchName?(0,b.jsxs)("span",{style:{fontWeight:"400",fontSize:"12px"},children:[" ","(",null===N||void 0===N||null===(r=N.subject)||void 0===r||null===(v=r.selected_batch_query)||void 0===v?void 0:v.batchName,")"]}):null," ","Optional"===(null===N||void 0===N||null===(m=N.subject)||void 0===m?void 0:m.subjectOptional)&&"(".concat(null===N||void 0===N||null===(_=N.subject)||void 0===_?void 0:_.subjectOptional,")")]}),(0,b.jsx)("p",{children:"".concat(null!==(f=null===N||void 0===N||null===(h=N.assignStaff)||void 0===h?void 0:h.staffFirstName)&&void 0!==f?f:""," ").concat(null!==(j=null===N||void 0===N||null===(y=N.assignStaff)||void 0===y?void 0:y.staffMiddleName)&&void 0!==j?j:""," ").concat(null!==(x=null===N||void 0===N||null===(Z=N.assignStaff)||void 0===Z?void 0:Z.staffLastName)&&void 0!==x?x:"")})]})]})]}),w&&(0,b.jsx)(S,{onClose:function(){return R("")},dayMenu:w,clsId:C,day:A,onRefetch:I})]})},I=i(34219),k=function(e){var t,i,o,u,r=e.clsId,v=e.day,m=(0,a.$G)().t,_=(0,l.useState)(!1),f=(0,n.Z)(_,2),h=f[0],j=f[1],y=(0,l.useState)(!0),g=(0,n.Z)(y,2),p=g[0],Z=g[1],N=(0,s.mv)({data:{status:v,cid:r},skip:!r}),C=N.getDayTimetable,S=N.getDayTimetableRefetch;(0,l.useEffect)((function(){r&&(Z(!0),S())}),[r,v,S]),(0,l.useEffect)((function(){var e;(null!==C&&void 0!==C&&C.dayList||0===(null===C||void 0===C||null===(e=C.dayList)||void 0===e?void 0:e.length))&&Z(!1)}),[null===C||void 0===C?void 0:C.dayList]);var k=function(){j((function(e){return!e}))};return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("div",{className:c.Z.add_container,children:(0,b.jsx)("p",{className:c.Z.add_new_category,onClick:k,children:m("add_time_table")})}),null===C||void 0===C||null===(t=C.dayList)||void 0===t||null===(i=t.schedule)||void 0===i?void 0:i.map((function(e){var t;return(0,b.jsx)(A,{table:e,clsId:r,day:v,onRefetch:S,tid:null===C||void 0===C||null===(t=C.dayList)||void 0===t?void 0:t._id},null===e||void 0===e?void 0:e._id)})),h&&(0,b.jsx)(x,{clsId:r,onClose:k,day:v,onRefetch:S}),p&&(0,b.jsx)(d.Z,{status:"white"}),!p&&!(null!==C&&void 0!==C&&null!==(o=C.dayList)&&void 0!==o&&null!==(u=o.schedule)&&void 0!==u&&u.length)&&(0,b.jsx)(I.Z,{customStyleContainer:{marginTop:"5rem",height:"inherit"},title:"No time table created yet for this day."})]})},T=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],E=function(e){var t=e.clsId,i=(0,l.useState)("Monday"),a=(0,n.Z)(i,2),c=a[0],s=a[1];return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("div",{className:o.Z.days_container,children:null===T||void 0===T?void 0:T.map((function(e){return(0,b.jsx)("h5",{className:c===e?"".concat(o.Z.days_container_child," ").concat(o.Z.days_container_child_active):o.Z.days_container_child,onClick:function(){return t=e,void s((function(e){return t}));var t},children:null!==e&&void 0!==e?e:""},e)}))}),(0,b.jsx)(k,{day:c,clsId:t})]})}},9679:function(e,t){t.Z={admin_acadmic_text:"AcademicAdministrator_admin_acadmic_text__FKBxD",admin_academic_container:"AcademicAdministrator_admin_academic_container__X3EVI",admin_academic_btn:"AcademicAdministrator_admin_academic_btn__BFzDv",subject_academic_title:"AcademicAdministrator_subject_academic_title__tWTFe",days_container:"AcademicAdministrator_days_container__raHaC",days_container_child:"AcademicAdministrator_days_container_child__ET9j+",days_container_child_active:"AcademicAdministrator_days_container_child_active__o5YSd"}}}]);
//# sourceMappingURL=1490.02aef0d6.chunk.js.map