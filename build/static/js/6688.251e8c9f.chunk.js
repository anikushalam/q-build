"use strict";(self.webpackChunkmithkal_qviple=self.webpackChunkmithkal_qviple||[]).push([[6688],{69738:function(e,n,t){t.d(n,{Z:function(){return p}});var a=t(93433),i=t(29439),o=t(72791),l=t(92784),_=t(39230),s=t(69721),r=t(87049),d=t(64540),c=t(84489),v=t(12072),u=t(98734),f=t(80184),m=function(e){var n=e.onClose,t=e.onRefetch,a=e.menu,l=(0,o.useState)(!1),_=(0,i.Z)(l,2),s=_[0],m=_[1],h=(0,d.li)(),y=(0,i.Z)(h,1)[0];return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(c.Z,{onClose:n}),(0,f.jsxs)(v.Z,{customStyle:{zIndex:"1200"},children:[(0,f.jsx)("div",{className:r.Z.edit_modal_container,style:{width:"200px"},children:(0,f.jsx)("h6",{className:r.Z.remove,onClick:function(){null!==a&&void 0!==a&&a._id&&(m((function(e){return!e})),y({lid:null===a||void 0===a?void 0:a._id}).then((function(){t(),n(),m((function(e){return!e}))})).catch({}))},children:"Delete"})}),s&&(0,f.jsx)(u.Z,{})]})]})},h=t(72426),y=t.n(h),p=function(e){var n,t,r,d,c,v,u,h,p,b,x,L,w,g,H,T,j,Z,A,k,E,N,F,S,q,R,I,C,M,O,W,D,V,z,B,J,K,Q,P,G,U=e.leave,X=e.onRefetch,Y=e.viewBy,$=(0,_.$G)().t,ee=(0,o.useState)(""),ne=(0,i.Z)(ee,2),te=ne[0],ae=ne[1],ie=(null===U||void 0===U||U.reason.match(/[\s\S]{1,50}/g),[]),oe=[],le=[],_e=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];return null===U||void 0===U||null===(n=U.date)||void 0===n||n.map((function(e){var n=e.split("/")[0],t="0"===e.split("/")[1].split("")[0]?_e[parseInt(e.split("/")[1],10)]:_e[e.split("/")[1]],a=e.split("/")[2];ie.push(n),oe.push(t),le.push(a)})),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)("div",{className:l.Z.request_card_staff,children:[(0,f.jsxs)("div",{className:l.Z.request_card_header,children:[(0,f.jsxs)("div",{className:l.Z.request_card_text,children:[(0,f.jsx)("img",{src:"/images/members/transfer-icon.svg",alt:"icon"}),(0,f.jsxs)("div",{className:l.Z.request_card_inner_text,children:[(0,f.jsxs)("h6",{style:{fontWeight:"400"},children:[$("leave_type")," "," : ",null===U||void 0===U?void 0:U.leave_type]}),(0,f.jsxs)("p",{children:[$("raised_on")," ",y()(null===U||void 0===U?void 0:U.createdAt).format("LT"),","," ",y()(null===U||void 0===U?void 0:U.createdAt).format("DD MMM yyyy")]}),(0,f.jsxs)("p",{children:[$("for_dates")," "," : ",(0,a.Z)(new Set(ie)).map((function(e){return"".concat(e,", ")})),(0,f.jsxs)("span",{children:[(0,a.Z)(new Set(oe)).map((function(e){return"".concat(e," ")}))," ",(0,a.Z)(new Set(le)).map((function(e){return"".concat(e," ")}))]})]})]})]}),(0,f.jsx)("div",{className:l.Z.request_card_btn_group,children:"OVERVIEW"===Y?null:(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)("div",{className:l.Z.btn,children:[$("status")," "," : ",(0,f.jsx)("span",{style:{color:"Request"===(null===U||void 0===U?void 0:U.status)?"rgba(18, 18, 18, 0.7)":"Rejected"===(null===U||void 0===U?void 0:U.status)?"red":"#14ab50"},children:null===U||void 0===U?void 0:U.status})]}),(0,f.jsx)("img",{className:l.Z.dots,src:"/images/menu-dots-icon.svg",alt:"",onClick:function(){return ae(U)},style:{cursor:"pointer"}})]})})]}),null!==U&&void 0!==U&&null!==(t=U.recommend)&&void 0!==t&&null!==(r=t.recommend_by)&&void 0!==r&&r.staffFirstName?(0,f.jsx)("div",{className:l.Z.request_card_inner_text,style:{marginTop:"0.5rem"},children:(0,f.jsxs)("p",{children:[$("recomend_on")," ",y()(null===U||void 0===U||null===(d=U.recommend)||void 0===d?void 0:d.recommend_on).format("LT"),","," ",y()(null===U||void 0===U||null===(c=U.recommend)||void 0===c?void 0:c.recommend_on).format("DD MMM yyyy"),", ",$("recomending_by"),"".concat(null!==(v=null===U||void 0===U||null===(u=U.recommend)||void 0===u||null===(h=u.recommend_by)||void 0===h?void 0:h.staffFirstName)&&void 0!==v?v:""," ").concat(null!==(p=null===U||void 0===U||null===(b=U.recommend)||void 0===b||null===(x=b.recommend_by)||void 0===x?void 0:x.staffMiddleName)&&void 0!==p?p:""," ").concat(null!==(L=null===U||void 0===U||null===(w=U.recommend)||void 0===w||null===(g=w.recommend_by)||void 0===g?void 0:g.staffLastName)&&void 0!==L?L:"")]})}):null,null!==U&&void 0!==U&&null!==(H=U.review)&&void 0!==H&&null!==(T=H.review_by)&&void 0!==T&&T.staffFirstName?(0,f.jsx)("div",{className:l.Z.request_card_inner_text,style:{marginTop:"0.5rem"},children:(0,f.jsxs)("p",{children:[$("reviewed_on")," ",y()(null===U||void 0===U||null===(j=U.review)||void 0===j?void 0:j.review_on).format("LT"),", ",y()(null===U||void 0===U||null===(Z=U.review)||void 0===Z?void 0:Z.review_on).format("DD MMM yyyy"),", ",$("reviewing_by"),"".concat(null!==(A=null===U||void 0===U||null===(k=U.review)||void 0===k||null===(E=k.review_by)||void 0===E?void 0:E.staffFirstName)&&void 0!==A?A:""," ").concat(null!==(N=null===U||void 0===U||null===(F=U.review)||void 0===F||null===(S=F.review_by)||void 0===S?void 0:S.staffMiddleName)&&void 0!==N?N:""," ").concat(null!==(q=null===U||void 0===U||null===(R=U.review)||void 0===R||null===(I=R.review_by)||void 0===I?void 0:I.staffLastName)&&void 0!==q?q:"")]})}):null,null!==U&&void 0!==U&&null!==(C=U.sanction)&&void 0!==C&&null!==(M=C.sanction_by)&&void 0!==M&&M.staffFirstName?(0,f.jsx)("div",{className:l.Z.request_card_inner_text,style:{marginTop:"0.5rem"},children:(0,f.jsxs)("p",{children:[$("sanction_on")," ",y()(null===U||void 0===U||null===(O=U.sanction)||void 0===O?void 0:O.sanction_on).format("LT"),","," ",y()(null===U||void 0===U||null===(W=U.sanction)||void 0===W?void 0:W.sanction_on).format("DD MMM yyyy"),", ",$("sanctioning_by"),"".concat(null!==(D=null===U||void 0===U||null===(V=U.sanction)||void 0===V||null===(z=V.sanction_by)||void 0===z?void 0:z.staffFirstName)&&void 0!==D?D:""," ").concat(null!==(B=null===U||void 0===U||null===(J=U.sanction)||void 0===J||null===(K=J.sanction_by)||void 0===K?void 0:K.staffMiddleName)&&void 0!==B?B:""," ").concat(null!==(Q=null===U||void 0===U||null===(P=U.sanction)||void 0===P||null===(G=P.sanction_by)||void 0===G?void 0:G.staffLastName)&&void 0!==Q?Q:"")]})}):null,(0,f.jsx)("div",{className:l.Z.request_card_inner_text,style:{marginTop:"0.5rem"},children:(0,f.jsxs)("h6",{style:{fontWeight:"400",whiteSpace:"break-spaces"},children:[$("reason")," "," : ",null===U||void 0===U?void 0:U.reason]})}),(null===U||void 0===U?void 0:U.attach)&&(0,f.jsx)("div",{className:l.Z.request_card_inner_text,style:{marginTop:"0.5rem"},children:(0,f.jsxs)("h6",{style:{fontWeight:"400",whiteSpace:"break-spaces"},children:[$("attachment")," "," : ",(0,f.jsx)("a",{href:"".concat(s.r3,"/").concat(null===U||void 0===U?void 0:U.attach),target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"none"},children:(0,f.jsx)("span",{className:l.Z.viewAll,children:$("view_attachment")})})]})})]}),te&&(0,f.jsx)(m,{menu:te,onClose:function(){return ae("")},onRefetch:X})]})}},92838:function(e,n,t){t.d(n,{Z:function(){return y}});var a=t(29439),i=t(72791),o=t(39230),l=t(11105),_=t(92784),s=t(74289),r=t(3890),d=t(93433),c=t(23441),v=t(69738),u=t(98094),f=t(80184),m=function(e){var n=e.staffId,t=e.categoryKey,o=(0,c.YD)(),r=(0,a.Z)(o,2),m=r[0],h=r[1],y=(0,i.useState)(1),p=(0,a.Z)(y,2),b=p[0],x=p[1],L=(0,i.useState)(!0),w=(0,a.Z)(L,2),g=w[0],H=w[1],T=(0,i.useState)(!0),j=(0,a.Z)(T,2),Z=j[0],A=j[1],k=(0,i.useState)([]),E=(0,a.Z)(k,2),N=E[0],F=E[1],S=(0,s.kt)({data:{sid:n,page:b,limit:10,category:"All Leave"===t?"":t},skip:t?!n:!t}),q=S.getLeaveOverviewIssue,R=S.getLeaveOverviewIssueRefetch;return(0,i.useEffect)((function(){n&&t&&(A(!0),R())}),[n,t,b,R]),(0,i.useEffect)((function(){h&&g&&x((function(e){return e+1}))}),[h,g]),(0,i.useEffect)((function(){var e,n;null!==q&&void 0!==q&&q.all_leave?1===b?(F(null===q||void 0===q?void 0:q.all_leave),A(!1)):(F((function(e){var n,t;return null===(n=(0,d.Z)(new Set(null===(t=[].concat((0,d.Z)(e),(0,d.Z)(null===q||void 0===q?void 0:q.all_leave)))||void 0===t?void 0:t.map(JSON.stringify))))||void 0===n?void 0:n.map(JSON.parse)})),A(!1)):0===(null===q||void 0===q||null===(e=q.all_leave)||void 0===e?void 0:e.length)&&A(!1),10===(null===q||void 0===q||null===(n=q.all_leave)||void 0===n?void 0:n.length)?H(!0):H(!1)}),[null===q||void 0===q?void 0:q.all_leave]),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(u.Z,{customStyle:{width:"100%",marginTop:"0.9rem"}}),(0,f.jsx)("div",{className:_.Z.request_card_inner_text,style:{marginTop:"0.5rem"},children:(0,f.jsx)("h6",{children:null!==t&&void 0!==t?t:""})}),null===N||void 0===N?void 0:N.map((function(e,n){return(null===N||void 0===N?void 0:N.length)===n+1?(0,f.jsx)("div",{ref:m,children:(0,f.jsx)(v.Z,{leave:e,viewBy:"OVERVIEW"})},null===e||void 0===e?void 0:e._id):(0,f.jsx)(v.Z,{leave:e,viewBy:"OVERVIEW"},null===e||void 0===e?void 0:e._id)})),Z&&(0,f.jsx)(l.Z,{})]})},h=t(16871);var y=function(e){var n,t,d,c,v=e.staffId,u=(0,o.$G)().t,y=(0,h.TH)(),b=(0,i.useState)(!0),x=(0,a.Z)(b,2),L=x[0],w=x[1],g=(0,i.useState)(p),H=(0,a.Z)(g,2),T=H[0],j=H[1],Z=(0,i.useState)(""),A=(0,a.Z)(Z,2),k=A[0],E=A[1],N=(0,s.$O)({data:{sid:v},skip:!v}),F=N.getLeaveOverviewCount,S=N.getLeaveOverviewCountRefetch;return(0,i.useEffect)((function(){v&&(w(!0),S())}),[v,S]),(0,i.useEffect)((function(){if(null!==F&&void 0!==F&&F.staff){var e,n,t,a,i,o,l,_,s,r,d,c,v,u,f,m,h,b,x=p;x[1].count=null===F||void 0===F||null===(e=F.staff)||void 0===e?void 0:e.casual_leave,x[2].count=null===F||void 0===F||null===(n=F.staff)||void 0===n?void 0:n.medical_leave,x[3].count=null===F||void 0===F||null===(t=F.staff)||void 0===t?void 0:t.sick_leave,x[4].count=null===F||void 0===F||null===(a=F.staff)||void 0===a?void 0:a.c_off_leave,x[5].count=null===F||void 0===F||null===(i=F.staff)||void 0===i?void 0:i.off_duty_leave,x[6].count=null===F||void 0===F||null===(o=F.staff)||void 0===o?void 0:o.lwp_leave,x[7].count=null===F||void 0===F||null===(l=F.staff)||void 0===l?void 0:l.commuted_leave,x[8].count=null===F||void 0===F||null===(_=F.staff)||void 0===_?void 0:_.maternity_leave,x[9].count=null===F||void 0===F||null===(s=F.staff)||void 0===s?void 0:s.paternity_leave,x[10].count=null===F||void 0===F||null===(r=F.staff)||void 0===r?void 0:r.quarantine_leave,x[11].count=null===F||void 0===F||null===(d=F.staff)||void 0===d?void 0:d.half_pay_leave,x[12].count=null===F||void 0===F||null===(c=F.staff)||void 0===c?void 0:c.study_leave,x[13].count=null===F||void 0===F||null===(v=F.staff)||void 0===v?void 0:v.sabbatical_leave,x[14].count=null===F||void 0===F||null===(u=F.staff)||void 0===u?void 0:u.special_disability_leave,x[15].count=null===F||void 0===F||null===(f=F.staff)||void 0===f?void 0:f.winter_vacation_leave,x[16].count=null===F||void 0===F||null===(m=F.staff)||void 0===m?void 0:m.summer_vacation_leave,x[17].count=null===F||void 0===F||null===(h=F.staff)||void 0===h?void 0:h.child_adoption_leave,x[18].count=null===F||void 0===F||null===(b=F.staff)||void 0===b?void 0:b.bereavement_leave,j(x),y.state.isCategory?E({key:y.state.isCategory}):E(x[0]),w(!1)}}),[null===F||void 0===F?void 0:F.staff,y.state.isCategory]),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)("div",{className:_.Z.request_card_inner_text,style:{marginTop:"0.5rem"},children:[null!==y&&void 0!==y&&null!==(n=y.state)&&void 0!==n&&n.staffName?(0,f.jsxs)("h6",{style:{fontWeight:"400"},children:[u("name")," "," : ",null===y||void 0===y||null===(t=y.state)||void 0===t?void 0:t.staffName]}):null,(0,f.jsxs)("h6",{style:{fontWeight:"400"},children:[u("total_leave_available")," "," : ",null===F||void 0===F||null===(d=F.overview)||void 0===d?void 0:d.total_leave_available]}),(0,f.jsxs)("h6",{style:{fontWeight:"400"},children:[u("total_leave_taken")," "," : ",null===F||void 0===F||null===(c=F.overview)||void 0===c?void 0:c.total_leave_taken]})]}),(0,f.jsx)(r.Z,{labelText:"",tileList:T,activeTile:null===k||void 0===k?void 0:k.key,onParentTile:function(e){E(e)},customTileContainer:{flexWrap:"wrap"},customTileAvailableChild:{flexDirection:"column",alignItems:"flex-start"}}),(0,f.jsx)(m,{categoryKey:null===k||void 0===k?void 0:k.key,staffId:v}),L&&(0,f.jsx)(l.Z,{})]})},p=[{name:"all",key:"All Leave",isAvaiable:!0,mode:"FILTER"},{name:"casual_leave",key:"Casual Leave",isAvaiable:!0,count:0,mode:"FILTER"},{name:"medical_leave",key:"Medical Leave",isAvaiable:!0,count:0,mode:"FILTER"},{name:"sick_leave",key:"Sick Leave",isAvaiable:!0,count:0,mode:"FILTER"},{name:"compensation_off_leave",key:"Compensation Off Leave",isAvaiable:!0,count:0,mode:"FILTER"},{name:"on_duty_leave",key:"On Duty Leave",isAvaiable:!0,count:0,mode:"FILTER"},{name:"leave_without_pay",key:"Leave Without Pay",isAvaiable:!0,count:0,mode:"FILTER"},{name:"commuted_leave",key:"Commuted Leave",isAvaiable:!0,count:0,mode:"FILTER"},{name:"maternity_leave",key:"Maternity Leave",isAvaiable:!0,count:0,mode:"FILTER"},{name:"paternity_leave",key:"Paternity Leave",isAvaiable:!0,count:0,mode:"FILTER"},{name:"quarantine_leave",key:"Quarantine Leave",isAvaiable:!0,count:0,mode:"FILTER"},{name:"half_pay_leave",key:"Half Pay Leave",isAvaiable:!0,count:0,mode:"FILTER"},{name:"study_leave",key:"Study Leave",isAvaiable:!0,count:0,mode:"FILTER"},{name:"sabbatical_leave",key:"Sabbatical Leave",isAvaiable:!0,count:0,mode:"FILTER"},{name:"special_disability_leave",key:"Special Disability Leave",isAvaiable:!0,count:0,mode:"FILTER"},{name:"winter_vacation_leave",key:"Winter Vacation Leave",isAvaiable:!0,count:0,mode:"FILTER"},{name:"summer_vacation_leave",key:"Summer Vacation Leave",isAvaiable:!0,count:0,mode:"FILTER"},{name:"child_adoption_leave",key:"Child Adoption Leave",isAvaiable:!0,count:0,mode:"FILTER"},{name:"bereavement_leave",key:"Bereavement Leave",isAvaiable:!0,count:0,mode:"FILTER"}]},10406:function(e,n){n.Z={hostel_container:"Hostel_hostel_container__mWxpf",moderator_container_title:"Hostel_moderator_container_title__DHglE",with_search:"Hostel_with_search__f5WON",search_container:"Hostel_search_container__uShHd",search_container_input:"Hostel_search_container_input__zwGLQ",searchIcon:"Hostel_searchIcon__x1CGz",search_container_filter:"Hostel_search_container_filter__HHOHi",add_new_category:"Hostel_add_new_category__4wi4R",rules_card:"Hostel_rules_card__CQp2X",rules_card_title:"Hostel_rules_card_title__dF+vA",download_attachment:"Hostel_download_attachment__Si3Or",menu_icon:"Hostel_menu_icon__lcZzz",unit_room_container:"Hostel_unit_room_container__7UtbF",unit_room_card_container:"Hostel_unit_room_card_container__Kp0n3",unit_room_card_lines:"Hostel_unit_room_card_lines__0fMZq",unit_room_container_box:"Hostel_unit_room_container_box__ZyOBC",unit_room_container_box_inner:"Hostel_unit_room_container_box_inner__xV4l4",hostelite_container:"Hostel_hostelite_container__s+iLw",hostelite_container_inner:"Hostel_hostelite_container_inner__55Vvd",hostelite_container_inner_text:"Hostel_hostelite_container_inner_text__rVUi9",announcement_card:"Hostel_announcement_card__B6Mf3",upload_excel_file:"Hostel_upload_excel_file__rm6Kk",student_renewal_card:"Hostel_student_renewal_card__4GLAW",student_renewal_date:"Hostel_student_renewal_date__jkFEO",student_renewal_btn_group:"Hostel_student_renewal_btn_group__bEhWE",student_renewal_cancel_btn:"Hostel_student_renewal_cancel_btn__FweAs",student_renewal_confirm_btn:"Hostel_student_renewal_confirm_btn__SrCfT",take_admission:"Hostel_take_admission__bLvfX",vehical_card_container:"Hostel_vehical_card_container__9+Xlp",vehical_card_text:"Hostel_vehical_card_text__L81rs",vehicle_list:"Hostel_vehicle_list__7KSVv",transpotation_container:"Hostel_transpotation_container__0ZRwk",transpotation_head:"Hostel_transpotation_head__bpQL4",transpotation_card:"Hostel_transpotation_card__awZ3a",transpotation_card_detail:"Hostel_transpotation_card_detail__SR+h7",transpotation_card_detail_text:"Hostel_transpotation_card_detail_text__V+znO",joining_date:"Hostel_joining_date__KU7m1",transpotation_card_detail_other:"Hostel_transpotation_card_detail_other__qQyz8",transpotation_card_detail_other_inner:"Hostel_transpotation_card_detail_other_inner__tkjuA",add_plus_icon:"Hostel_add_plus_icon__3Goaz",hostel_batch_container:"Hostel_hostel_batch_container__+B8sL",hostel_batch_container_hover:"Hostel_hostel_batch_container_hover__2rElc",hostel_batch_container_text:"Hostel_hostel_batch_container_text__w3JHe",hostel_batch_image:"Hostel_hostel_batch_image__fpTGv",hostel_batch_menu:"Hostel_hostel_batch_menu__xSgqR",add_container:"Hostel_add_container__KgZLe",mentor_status_card_paragraph:"Hostel_mentor_status_card_paragraph__b+ePZ",mentor_attendance_container:"Hostel_mentor_attendance_container__KAxwN",mentor_attendance_btn:"Hostel_mentor_attendance_btn__yX+++",mentor_attendance_btn_active:"Hostel_mentor_attendance_btn_active__JUY7m",selectBtn:"Hostel_selectBtn__w2fQe",passenger_fees_button:"Hostel_passenger_fees_button__VaNk-",linked_institute_btn:"Hostel_linked_institute_btn__p8os7"}},92784:function(e,n){n.Z={request_card:"LeavesAndTransfer_request_card__hH6jz",request_card_staff:"LeavesAndTransfer_request_card_staff__DzAoS",request_card_header:"LeavesAndTransfer_request_card_header__nepeP",request_card_text:"LeavesAndTransfer_request_card_text__5e2qO",request_card_inner_text:"LeavesAndTransfer_request_card_inner_text__MMRPJ",btn:"LeavesAndTransfer_btn__fEia-",request_card_btn_group:"LeavesAndTransfer_request_card_btn_group__CWVPB",accept_btn:"LeavesAndTransfer_accept_btn__4T4XU",reject_btn:"LeavesAndTransfer_reject_btn__T4QgL",viewAll:"LeavesAndTransfer_viewAll__fEF7S",staff_card:"LeavesAndTransfer_staff_card__0C5Z+",staff_card_info:"LeavesAndTransfer_staff_card_info__hgQHr",staff_card_info_inner:"LeavesAndTransfer_staff_card_info_inner__OH9mh",staff_card_info_inner_index:"LeavesAndTransfer_staff_card_info_inner_index__ZYW+6",staff_card_overview:"LeavesAndTransfer_staff_card_overview__LYeLx",staff_card_overview_inner:"LeavesAndTransfer_staff_card_overview_inner__5VES4",staff_card_overview_inner_label:"LeavesAndTransfer_staff_card_overview_inner_label__qbZbQ",staff_card_overview_inner_text:"LeavesAndTransfer_staff_card_overview_inner_text__owKyo",menu_icon:"LeavesAndTransfer_menu_icon__ASJJK"}}}]);
//# sourceMappingURL=6688.251e8c9f.chunk.js.map