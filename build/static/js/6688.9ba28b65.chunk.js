"use strict";(self.webpackChunkmithkal_qviple=self.webpackChunkmithkal_qviple||[]).push([[6688],{69738:function(e,t,n){n.d(t,{Z:function(){return x}});var _=n(93433),a=n(29439),o=n(72791),r=n(92784),i=n(39230),s=n(69721),l=n(87049),c=n(64540),d=n(84489),v=n(12072),u=n(98734),f=n(80184),h=function(e){var t=e.onClose,n=e.onRefetch,_=e.menu,r=(0,o.useState)(!1),i=(0,a.Z)(r,2),s=i[0],h=i[1],m=(0,c.li)(),p=(0,a.Z)(m,1)[0];return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(d.Z,{onClose:t}),(0,f.jsxs)(v.Z,{customStyle:{zIndex:"1200"},children:[(0,f.jsx)("div",{className:l.Z.edit_modal_container,style:{width:"200px"},children:(0,f.jsx)("h6",{className:l.Z.remove,onClick:function(){null!==_&&void 0!==_&&_._id&&(h((function(e){return!e})),p({lid:null===_||void 0===_?void 0:_._id}).then((function(){n(),t(),h((function(e){return!e}))})).catch({}))},children:"Delete"})}),s&&(0,f.jsx)(u.Z,{})]})]})},m=n(72426),p=n.n(m),x=function(e){var t,n=e.leave,l=e.onRefetch,c=e.viewBy,d=(0,i.$G)().t,v=(0,o.useState)(""),u=(0,a.Z)(v,2),m=u[0],x=u[1],w=(null===n||void 0===n||n.reason.match(/[\s\S]{1,50}/g),[]),b=[],H=[],g=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];return null===n||void 0===n||null===(t=n.date)||void 0===t||t.map((function(e){var t=e.split("/")[0],n="0"===e.split("/")[1].split("")[0]?g[parseInt(e.split("/")[1],10)]:g[e.split("/")[1]],_=e.split("/")[2];w.push(t),b.push(n),H.push(_)})),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)("div",{className:r.Z.request_card_staff,children:[(0,f.jsxs)("div",{className:r.Z.request_card_header,children:[(0,f.jsxs)("div",{className:r.Z.request_card_text,children:[(0,f.jsx)("img",{src:"/images/members/transfer-icon.svg",alt:"icon"}),(0,f.jsxs)("div",{className:r.Z.request_card_inner_text,children:[(0,f.jsxs)("h6",{style:{fontWeight:"400"},children:[d("leave_type")," "," : ",null===n||void 0===n?void 0:n.leave_type]}),(0,f.jsxs)("p",{children:[d("raised_on")," ",p()(null===n||void 0===n?void 0:n.createdAt).format("LT"),","," ",p()(null===n||void 0===n?void 0:n.createdAt).format("DD MMM yyyy")]}),(0,f.jsxs)("p",{children:[d("for_dates")," "," : ",(0,_.Z)(new Set(w)).map((function(e){return"".concat(e,", ")})),(0,f.jsxs)("span",{children:[(0,_.Z)(new Set(b)).map((function(e){return"".concat(e," ")}))," ",(0,_.Z)(new Set(H)).map((function(e){return"".concat(e," ")}))]})]})]})]}),(0,f.jsx)("div",{className:r.Z.request_card_btn_group,children:"OVERVIEW"===c?null:(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)("div",{className:r.Z.btn,children:[d("status")," "," : ",(0,f.jsx)("span",{style:{color:"Request"===(null===n||void 0===n?void 0:n.status)?"rgba(18, 18, 18, 0.7)":"Rejected"===(null===n||void 0===n?void 0:n.status)?"red":"#14ab50"},children:null===n||void 0===n?void 0:n.status})]}),(0,f.jsx)("img",{className:r.Z.dots,src:"/images/menu-dots-icon.svg",alt:"",onClick:function(){return x(n)},style:{cursor:"pointer"}})]})})]}),(0,f.jsx)("div",{className:r.Z.request_card_inner_text,style:{marginTop:"0.5rem"},children:(0,f.jsxs)("h6",{style:{fontWeight:"400",whiteSpace:"break-spaces"},children:[d("reason")," "," : ",null===n||void 0===n?void 0:n.reason]})}),(null===n||void 0===n?void 0:n.attach)&&(0,f.jsx)("div",{className:r.Z.request_card_inner_text,style:{marginTop:"0.5rem"},children:(0,f.jsxs)("h6",{style:{fontWeight:"400",whiteSpace:"break-spaces"},children:[d("attachment")," "," : ",(0,f.jsx)("a",{href:"".concat(s.r3,"/").concat(null===n||void 0===n?void 0:n.attach),target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"none"},children:(0,f.jsx)("span",{className:r.Z.viewAll,children:d("view_attachment")})})]})})]}),m&&(0,f.jsx)(h,{menu:m,onClose:function(){return x("")},onRefetch:l})]})}},92838:function(e,t,n){n.d(t,{Z:function(){return x}});var _=n(29439),a=n(72791),o=n(39230),r=n(11105),i=n(92784),s=n(74289),l=n(3890),c=n(93433),d=n(23441),v=n(69738),u=n(98094),f=n(80184),h=function(e){var t=e.staffId,n=e.categoryKey,o=(0,d.YD)(),l=(0,_.Z)(o,2),h=l[0],m=l[1],p=(0,a.useState)(1),x=(0,_.Z)(p,2),w=x[0],b=x[1],H=(0,a.useState)(!0),g=(0,_.Z)(H,2),y=g[0],Z=g[1],j=(0,a.useState)(!0),L=(0,_.Z)(j,2),A=L[0],T=L[1],k=(0,a.useState)([]),S=(0,_.Z)(k,2),q=S[0],E=S[1],N=(0,s.kt)({data:{sid:t,page:w,limit:10,category:"All Leave"===n?"":n},skip:n?!t:!n}),R=N.getLeaveOverviewIssue,O=N.getLeaveOverviewIssueRefetch;return(0,a.useEffect)((function(){t&&(T(!0),O())}),[t,n,w,O]),(0,a.useEffect)((function(){m&&y&&b((function(e){return e+1}))}),[m,y]),(0,a.useEffect)((function(){var e,t;null!==R&&void 0!==R&&R.all_leave?1===w?(E(null===R||void 0===R?void 0:R.all_leave),T(!1)):(E((function(e){var t,n;return null===(t=(0,c.Z)(new Set(null===(n=[].concat((0,c.Z)(e),(0,c.Z)(null===R||void 0===R?void 0:R.all_leave)))||void 0===n?void 0:n.map(JSON.stringify))))||void 0===t?void 0:t.map(JSON.parse)})),T(!1)):0===(null===R||void 0===R||null===(e=R.all_leave)||void 0===e?void 0:e.length)&&T(!1),10===(null===R||void 0===R||null===(t=R.all_leave)||void 0===t?void 0:t.length)?Z(!0):Z(!1)}),[null===R||void 0===R?void 0:R.all_leave]),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(u.Z,{customStyle:{width:"100%",marginTop:"0.9rem"}}),(0,f.jsx)("div",{className:i.Z.request_card_inner_text,style:{marginTop:"0.5rem"},children:(0,f.jsx)("h6",{children:null!==n&&void 0!==n?n:""})}),null===q||void 0===q?void 0:q.map((function(e,t){return(null===q||void 0===q?void 0:q.length)===t+1?(0,f.jsx)("div",{ref:h,children:(0,f.jsx)(v.Z,{leave:e,viewBy:"OVERVIEW"})},null===e||void 0===e?void 0:e._id):(0,f.jsx)(v.Z,{leave:e,viewBy:"OVERVIEW"},null===e||void 0===e?void 0:e._id)})),A&&(0,f.jsx)(r.Z,{})]})},m=n(16871),p=[{name:"all",key:"All Leave",isAvaiable:!0,count:0,mode:"FILTER"},{name:"casual_leave",key:"Casual Leave",isAvaiable:!0,count:0,mode:"FILTER"},{name:"medical_leave",key:"Medical Leave",isAvaiable:!0,count:0,mode:"FILTER"},{name:"sick_leave",key:"Sick Leave",isAvaiable:!0,count:0,mode:"FILTER"},{name:"compensation_off_leave",key:"Compensation Off Leave",isAvaiable:!0,count:0,mode:"FILTER"},{name:"on_duty_leave",key:"On Duty Leave",isAvaiable:!0,count:0,mode:"FILTER"},{name:"leave_without_pay",key:"Leave Without Pay",isAvaiable:!0,count:0,mode:"FILTER"}];var x=function(e){var t,n,c,d,v=e.staffId,u=(0,o.$G)().t,x=(0,m.TH)(),w=(0,a.useState)(!0),b=(0,_.Z)(w,2),H=b[0],g=b[1],y=(0,a.useState)(p),Z=(0,_.Z)(y,2),j=Z[0],L=Z[1],A=(0,a.useState)(""),T=(0,_.Z)(A,2),k=T[0],S=T[1],q=(0,s.$O)({data:{sid:v},skip:!v}),E=q.getLeaveOverviewCount,N=q.getLeaveOverviewCountRefetch;return(0,a.useEffect)((function(){v&&(g(!0),N())}),[v,N]),(0,a.useEffect)((function(){if(null!==E&&void 0!==E&&E.overview){var e,t,n,_,a,o,r=p;r[0].count=null===E||void 0===E||null===(e=E.overview)||void 0===e?void 0:e.casual_leave,r[1].count=null===E||void 0===E||null===(t=E.overview)||void 0===t?void 0:t.medical_leave,r[2].count=null===E||void 0===E||null===(n=E.overview)||void 0===n?void 0:n.sick_leave,r[3].count=null===E||void 0===E||null===(_=E.overview)||void 0===_?void 0:_.c_off_leave,r[4].count=null===E||void 0===E||null===(a=E.overview)||void 0===a?void 0:a.off_duty_leave,r[5].count=null===E||void 0===E||null===(o=E.overview)||void 0===o?void 0:o.lwp_leave,L(r),x.state.isCategory?S({key:x.state.isCategory}):S(r[0]),g(!1)}}),[null===E||void 0===E?void 0:E.overview]),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)("div",{className:i.Z.request_card_inner_text,style:{marginTop:"0.5rem"},children:[null!==x&&void 0!==x&&null!==(t=x.state)&&void 0!==t&&t.staffName?(0,f.jsxs)("h6",{style:{fontWeight:"400"},children:[u("name")," "," : ",null===x||void 0===x||null===(n=x.state)||void 0===n?void 0:n.staffName]}):null,(0,f.jsxs)("h6",{style:{fontWeight:"400"},children:[u("total_leave_available")," "," : ",null===E||void 0===E||null===(c=E.overview)||void 0===c?void 0:c.total_leave_available]}),(0,f.jsxs)("h6",{style:{fontWeight:"400"},children:[u("total_leave_taken")," "," : ",null===E||void 0===E||null===(d=E.overview)||void 0===d?void 0:d.total_leave_taken]})]}),(0,f.jsx)(l.Z,{labelText:"",tileList:j,activeTile:null===k||void 0===k?void 0:k.key,onParentTile:function(e){S(e)},customTileContainer:{flexWrap:"wrap"}}),(0,f.jsx)(h,{categoryKey:null===k||void 0===k?void 0:k.key,staffId:v}),H&&(0,f.jsx)(r.Z,{})]})}},10406:function(e,t){t.Z={hostel_container:"Hostel_hostel_container__mWxpf",moderator_container_title:"Hostel_moderator_container_title__DHglE",with_search:"Hostel_with_search__f5WON",search_container:"Hostel_search_container__uShHd",search_container_input:"Hostel_search_container_input__zwGLQ",searchIcon:"Hostel_searchIcon__x1CGz",search_container_filter:"Hostel_search_container_filter__HHOHi",add_new_category:"Hostel_add_new_category__4wi4R",rules_card:"Hostel_rules_card__CQp2X",rules_card_title:"Hostel_rules_card_title__dF+vA",download_attachment:"Hostel_download_attachment__Si3Or",menu_icon:"Hostel_menu_icon__lcZzz",unit_room_container:"Hostel_unit_room_container__7UtbF",unit_room_card_container:"Hostel_unit_room_card_container__Kp0n3",unit_room_card_lines:"Hostel_unit_room_card_lines__0fMZq",unit_room_container_box:"Hostel_unit_room_container_box__ZyOBC",unit_room_container_box_inner:"Hostel_unit_room_container_box_inner__xV4l4",hostelite_container:"Hostel_hostelite_container__s+iLw",hostelite_container_inner:"Hostel_hostelite_container_inner__55Vvd",hostelite_container_inner_text:"Hostel_hostelite_container_inner_text__rVUi9",announcement_card:"Hostel_announcement_card__B6Mf3",upload_excel_file:"Hostel_upload_excel_file__rm6Kk",student_renewal_card:"Hostel_student_renewal_card__4GLAW",student_renewal_date:"Hostel_student_renewal_date__jkFEO",student_renewal_btn_group:"Hostel_student_renewal_btn_group__bEhWE",student_renewal_cancel_btn:"Hostel_student_renewal_cancel_btn__FweAs",student_renewal_confirm_btn:"Hostel_student_renewal_confirm_btn__SrCfT",take_admission:"Hostel_take_admission__bLvfX",vehical_card_container:"Hostel_vehical_card_container__9+Xlp",vehical_card_text:"Hostel_vehical_card_text__L81rs",vehicle_list:"Hostel_vehicle_list__7KSVv",transpotation_container:"Hostel_transpotation_container__0ZRwk",transpotation_head:"Hostel_transpotation_head__bpQL4",transpotation_card:"Hostel_transpotation_card__awZ3a",transpotation_card_detail:"Hostel_transpotation_card_detail__SR+h7",transpotation_card_detail_text:"Hostel_transpotation_card_detail_text__V+znO",joining_date:"Hostel_joining_date__KU7m1",transpotation_card_detail_other:"Hostel_transpotation_card_detail_other__qQyz8",transpotation_card_detail_other_inner:"Hostel_transpotation_card_detail_other_inner__tkjuA",add_plus_icon:"Hostel_add_plus_icon__3Goaz",hostel_batch_container:"Hostel_hostel_batch_container__+B8sL",hostel_batch_container_hover:"Hostel_hostel_batch_container_hover__2rElc",hostel_batch_container_text:"Hostel_hostel_batch_container_text__w3JHe",hostel_batch_image:"Hostel_hostel_batch_image__fpTGv",hostel_batch_menu:"Hostel_hostel_batch_menu__xSgqR",add_container:"Hostel_add_container__KgZLe",mentor_status_card_paragraph:"Hostel_mentor_status_card_paragraph__b+ePZ",mentor_attendance_container:"Hostel_mentor_attendance_container__KAxwN",mentor_attendance_btn:"Hostel_mentor_attendance_btn__yX+++",mentor_attendance_btn_active:"Hostel_mentor_attendance_btn_active__JUY7m",selectBtn:"Hostel_selectBtn__w2fQe",passenger_fees_button:"Hostel_passenger_fees_button__VaNk-",linked_institute_btn:"Hostel_linked_institute_btn__p8os7"}},92784:function(e,t){t.Z={request_card:"LeavesAndTransfer_request_card__hH6jz",request_card_staff:"LeavesAndTransfer_request_card_staff__DzAoS",request_card_header:"LeavesAndTransfer_request_card_header__nepeP",request_card_text:"LeavesAndTransfer_request_card_text__5e2qO",request_card_inner_text:"LeavesAndTransfer_request_card_inner_text__MMRPJ",btn:"LeavesAndTransfer_btn__fEia-",request_card_btn_group:"LeavesAndTransfer_request_card_btn_group__CWVPB",accept_btn:"LeavesAndTransfer_accept_btn__4T4XU",reject_btn:"LeavesAndTransfer_reject_btn__T4QgL",viewAll:"LeavesAndTransfer_viewAll__fEF7S",staff_card:"LeavesAndTransfer_staff_card__0C5Z+",staff_card_info:"LeavesAndTransfer_staff_card_info__hgQHr",staff_card_info_inner:"LeavesAndTransfer_staff_card_info_inner__OH9mh",staff_card_info_inner_index:"LeavesAndTransfer_staff_card_info_inner_index__ZYW+6",staff_card_overview:"LeavesAndTransfer_staff_card_overview__LYeLx",staff_card_overview_inner:"LeavesAndTransfer_staff_card_overview_inner__5VES4",staff_card_overview_inner_label:"LeavesAndTransfer_staff_card_overview_inner_label__qbZbQ",staff_card_overview_inner_text:"LeavesAndTransfer_staff_card_overview_inner_text__owKyo"}}}]);
//# sourceMappingURL=6688.9ba28b65.chunk.js.map