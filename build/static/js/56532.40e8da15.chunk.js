"use strict";(self.webpackChunkmithkal_qviple=self.webpackChunkmithkal_qviple||[]).push([[56532],{34219:function(e,t,n){n(72791);var o=n(11575),a=n(80184);t.Z=function(e){var t=e.customStyleContainer,n=e.title,l=e.subtitle,r=e.costomTextTitleStyle,i=e.costomTextSubtitleStyle;return(0,a.jsxs)("div",{className:o.Z.empty_container,style:t,children:[n&&(0,a.jsx)("h6",{style:r,children:n}),l&&(0,a.jsx)("p",{style:i,children:l})]})}},45897:function(e,t,n){n(72791);var o=n(33148),a=n(39230),l=n(69721),r=n(80184);t.Z=function(e){var t=e.onSelectStudent,n=e.stu,i=e.selectedId,_=e.isMessage,c=(0,a.$G)().t;return(0,r.jsx)("div",{className:(null===i||void 0===i?void 0:i.length)>0&&null!==i&&void 0!==i&&i.includes(null===n||void 0===n?void 0:n._id)?" ".concat(o.Z.promote_student_card," ").concat(o.Z.promote_student_cardActive):o.Z.promote_student_card,onClick:function(){return _?null:t(null===n||void 0===n?void 0:n._id)},style:{width:"100%"},children:(0,r.jsxs)("div",{className:o.Z.promote_student_card_text,style:{width:"100%"},children:[(0,r.jsx)("img",{alt:"",src:null!==n&&void 0!==n&&n.studentProfilePhoto?"".concat(l.yI,"/").concat(null===n||void 0===n?void 0:n.studentProfilePhoto):"/images/member_tab/class/default_avatar.svg"}),(0,r.jsxs)("div",{className:o.Z.promote_student_check_container,children:[(0,r.jsxs)("div",{className:o.Z.promote_student_name,children:[(0,r.jsxs)("p",{children:[null===n||void 0===n?void 0:n.studentFirstName," ",null!==n&&void 0!==n&&n.studentMiddleName?null===n||void 0===n?void 0:n.studentMiddleName:" "," ",null===n||void 0===n?void 0:n.studentLastName]}),(0,r.jsxs)("p",{children:[c("gr_number"),null===n||void 0===n?void 0:n.studentGRNO]})]}),_?null:(0,r.jsx)("div",{className:o.Z.promote_student_check,children:(0,r.jsx)("div",{className:o.Z.promote_student_name,children:(null===i||void 0===i?void 0:i.length)>0&&null!==i&&void 0!==i&&i.includes(null===n||void 0===n?void 0:n._id)?(0,r.jsx)("img",{className:o.Z.department_checkbox,src:"/images/checkbox-icon.svg",alt:"icon"}):(0,r.jsx)("img",{className:o.Z.department_checkbox,src:"/images/box-icon.svg",alt:"icon"})})})]})]})})}},11728:function(e,t,n){n.d(t,{F5:function(){return r},TW:function(){return l},Vf:function(){return i},Wt:function(){return o},XT:function(){return _},sY:function(){return a}});var o=[{key:"ALL_BATCH",name:"all_batches"},{key:"ACTIVE_BATCH",name:"active_batches"}],a=[{key:"ALL",name:"all_departments"},{key:"PARTICULAR",name:"particular_department"}],l=[{key:"ALL_BATCH",name:"all_batches"},{key:"PARTICULAR_BATCH",name:"particular_batch"}],r=[{key:"All",name:"all_departments"},{key:"Particular",name:"particular_department"}],i=[{key:"All",name:"all_batches"},{key:"Current",name:"current"},{key:"Particular",name:"particular_batch"}],_=[{key:"All",name:"all_batches"},{key:"Current",name:"current"}]},38986:function(e,t,n){var o=n(1413),a=n(72791),l=n(52245),r=n(39230),i=n(1095),_=n(80184);t.Z=function(e){var t=e.label,n=e.name,c=e.value,s=e.onChange,d=e.errorShow,m=e.disabled,u=e.customFormFileContainer,v=e.customFormFileLabel,p=e.customFormFile,h=e.type,f=e.multiple,x=(0,r.$G)().t,Z=(0,a.useCallback)((function(){var e=window.open("".concat(i.yI,"/").concat(null===c||void 0===c?void 0:c.key),"_blank","noopener,noreferrer");e&&(e.opener=null)}),[]);return(0,_.jsxs)("div",{className:l.Z.form_input_container,style:(0,o.Z)({},u),children:[t&&(0,_.jsxs)("label",{className:l.Z.form_input_label,style:v,children:[t,d?(0,_.jsxs)("span",{className:l.Z.form_input_label_error,children:["* ",x("form_require_label")]}):null]}),(0,_.jsxs)("div",{className:l.Z.form_file_container,style:p,children:[(0,_.jsx)("label",{className:c?"".concat(l.Z.form_file_choose," ").concat(l.Z.form_file_choose_active):l.Z.form_file_choose,htmlFor:n,children:x(""!==c?"file_choosen":"choose_file")}),(0,_.jsx)("label",{className:l.Z.form_file_choosen,onClick:Z,children:""!==c?null!==c&&void 0!==c&&c.name?null===c||void 0===c?void 0:c.name:x("view"):x("no_file_chosen")})]}),(0,_.jsx)("input",{type:"file",multiple:!!f,accept:h||"image/*, .doc,.docx, application/pdf,.csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel",name:n,id:n,style:{display:"none"},onChange:s,disabled:m})]})}},11468:function(e,t,n){var o=n(39230),a=n(52245),l=n(80184),r=function(e){var t;return e?null===e||void 0===e||null===(t=e.split("\n"))||void 0===t?void 0:t.length:2};t.Z=function(e){var t=e.label,n=e.name,i=e.type,_=e.value,c=e.onChange,s=e.placeholder,d=e.errorShow,m=e.disabled,u=e.customFormInputContainer,v=e.customFormInputLabel,p=(0,o.$G)().t;return(0,l.jsxs)("div",{className:a.Z.form_input_container,style:u,children:[t&&(0,l.jsxs)("label",{className:a.Z.form_input_label,htmlFor:n,style:v,children:[t,d&&(0,l.jsxs)("span",{className:a.Z.form_input_label_error,children:["* ",p("form_require_label")]})]}),(0,l.jsx)("textarea",{className:a.Z.form_textarea_input,type:i,value:_,onChange:c,name:n,placeholder:s,rows:r(_),disabled:m,style:{"--textarea-height":"".concat(20*r(_),"px")}})]})}},31897:function(e,t,n){var o=n(1413),a=n(37762),l=n(29439),r=n(72791),i=n(39230),_=n(52245),c=n(98684),s=n(80184);t.Z=function(e){var t=e.selectLabel,n=e.onClick,d=e.selectedValue,m=e.options,u=e.customStyleContainer,v=e.customLabelStyle,p=e.customListStyle,h=e.errorShow,f=e.defalutValue,x=e.viewAs,Z=e.isFull,g=e.isDenied,b=(0,i.$G)().t,j=(0,r.useState)(!1),y=(0,l.Z)(j,2),P=y[0],k=y[1],N=(0,r.useState)(""),C=(0,l.Z)(N,2),D=C[0],S=C[1],I=function(){g||k((function(e){return!e}))};(0,r.useEffect)((function(){"NORMAL_FILTER"===x&&S(f)}),[x,f]),(0,r.useEffect)((function(){if("CUSTOM_FILTER"===x){var e,t="",n=(0,a.Z)(m);try{for(n.s();!(e=n.n()).done;){var o,l=e.value,r=(0,a.Z)(f);try{for(r.s();!(o=r.n()).done;){var i=o.value;if((null===l||void 0===l?void 0:l._id)===i){var _,c,s,d=null!==(_=null!==(c=null!==(s=null===l||void 0===l?void 0:l.dName)&&void 0!==s?s:null===l||void 0===l?void 0:l.batchName)&&void 0!==c?c:null===l||void 0===l?void 0:l.className)&&void 0!==_?_:"";t=t?t+", "+d:d}}}catch(u){r.e(u)}finally{r.f()}}}catch(u){n.e(u)}finally{n.f()}S(t)}}),[x,f,m]);var w=function(e){var t;n(Z?e:null===e||void 0===e?void 0:e._id),I(),S(null!==(t=null===e||void 0===e?void 0:e.dName)&&void 0!==t?t:e)};return(0,s.jsxs)("div",{className:_.Z.form_input_container,style:(0,o.Z)({},u),children:[(0,s.jsxs)("p",{className:_.Z.join_form_select_paragraph,style:(0,o.Z)({},v),children:[t,h&&(0,s.jsxs)("span",{style:{color:"red",marginLeft:"15px"},children:["* ",b("form_require_label")]})]}),(0,s.jsxs)("section",{className:_.Z.join_form_select_custom,onClick:I,children:[D?(0,s.jsx)("p",{className:_.Z.join_form_select_custom_paragraph,children:null!==D&&void 0!==D?D:""}):(0,s.jsx)("p",{className:_.Z.join_form_select_custom_paragraph,children:d}),P?(0,s.jsx)("img",{className:_.Z.join_form_select_custom_rotate_icon,src:"".concat(c.J7,"/down.svg"),alt:"categor icon"}):(0,s.jsx)("img",{className:_.Z.join_form_select_custom_icon,src:"".concat(c.J7,"/down.svg"),alt:"categor icon"})]}),P&&(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("section",{className:_.Z.join_form_select_custom_list,style:p,children:null===m||void 0===m?void 0:m.map((function(e,t){var n;return(0,s.jsx)("p",{onClick:function(){return w(e)},className:_.Z.join_form_select_custom_paragraph_option,children:null!==(n=null===e||void 0===e?void 0:e.dName)&&void 0!==n?n:e},t)}))})})]})}},26071:function(e,t,n){var o=n(51416),a=n(39230),l=n(80184);t.Z=function(e){var t=e.tile,n=e.onTile,r=e.activeTile,i=e.customTileChild,_=(0,a.$G)().t;return(0,l.jsx)("div",{className:(null===t||void 0===t?void 0:t.key)===r?o.Z.tile_tile_active:o.Z.tile_tile,onClick:function(){return n(null===t||void 0===t?void 0:t.key)},style:i,children:_(null===t||void 0===t?void 0:t.name)})}},20659:function(e,t,n){var o=n(51416),a=n(39230),l=n(80184);t.Z=function(e){var t=e.label,n=e.customTileLabel,r=e.customTileContainer,i=e.customTileStyle,_=e.children,c=(0,a.$G)().t;return(0,l.jsxs)("div",{className:o.Z.tile_container,style:i,children:[t&&(0,l.jsx)("h6",{className:o.Z.tile_label,style:n,children:c(t)}),(0,l.jsx)("section",{className:o.Z.tile_tile_container,style:r,children:_})]})}},31022:function(e,t,n){var o=n(1413),a=n(39230),l=n(16925),r=n(48293),i=n(21348),_=n(90904),c=n(20659),s=n(26071),d=n(39896),m=n(24620),u=n(72261),v=n(11728),p=n(72791),h=n(98684),f=n(93638),x=n(80184);t.Z=function(e){var t,n,Z,g,b,j=e.applyFilter,y=e.setApplyFilter,P=e.onClose,k=e.fid,N=e.onActionEventFire,C=e.instituteId,D=(0,a.$G)().t,S=function(e){y((function(t){return(0,o.Z)((0,o.Z)({},t),{},{all_depart:e,depart:"",batch_status:e,batch:"",master:""})}))},I=function(e){y((function(t){return(0,o.Z)((0,o.Z)({},t),{},{batch_status:e,batch:""})}))},w=(0,p.useCallback)((function(e){y((function(t){return(0,o.Z)((0,o.Z)({},t),{},{batch_status:"PARTICULAR_BATCH",batch:e})}))}),[]),A=(0,p.useCallback)((function(e){y((function(t){return(0,o.Z)((0,o.Z)({},t),{},{master:e})}))}),[]),L=(0,p.useCallback)((function(e){y((function(t){return(0,o.Z)((0,o.Z)({},t),{},{all_depart:"PARTICULAR",depart:e})}))}),[]);return(0,x.jsx)(r.Z,{children:(0,x.jsxs)("div",{className:l.Z.modal_container,children:[(0,x.jsx)(i.Z,{children:(0,x.jsxs)("div",{className:l.Z.modal_container_outer_header,children:[(0,x.jsx)("div",{className:l.Z.modal_container_header,children:(0,x.jsx)("h6",{children:D("apply_filter")})}),(0,x.jsx)("img",{src:"".concat(h.J7,"/close.svg"),alt:"close icon",onClick:P})]})}),(0,x.jsx)(_.Z,{}),(0,x.jsxs)(i.Z,{customStyle:{paddingTop:"0"},children:[(0,x.jsx)(c.Z,{label:"department_type",children:null===v.sY||void 0===v.sY?void 0:v.sY.map((function(e){return(0,x.jsx)(s.Z,{tile:e,onTile:S,activeTile:null===j||void 0===j?void 0:j.all_depart},null===e||void 0===e?void 0:e.key)}))}),"PARTICULAR"===(null===j||void 0===j?void 0:j.all_depart)?(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(d.Z,{fid:k,onSelect:L,onlyDepartment:!0,defalutValue:null===j||void 0===j||null===(t=j.depart)||void 0===t?void 0:t.dName}),(0,x.jsx)(c.Z,{label:"batch_type",children:null===v.TW||void 0===v.TW?void 0:v.TW.map((function(e){return(0,x.jsx)(s.Z,{tile:e,onTile:I,activeTile:null===j||void 0===j?void 0:j.batch_status},null===e||void 0===e?void 0:e.key)}))}),"PARTICULAR_BATCH"===(null===j||void 0===j?void 0:j.batch_status)?(0,x.jsx)(m.Z,{did:null===j||void 0===j||null===(n=j.depart)||void 0===n?void 0:n._id,onSelect:w,onlyBatch:!0,defalutValue:null===j||void 0===j||null===(Z=j.batch)||void 0===Z?void 0:Z.batchName}):null,(0,x.jsx)(u.Z,{did:null===j||void 0===j||null===(g=j.depart)||void 0===g?void 0:g._id,onSelect:A,instituteId:C,defalutValue:null===j||void 0===j||null===(b=j.master)||void 0===b?void 0:b.className})]}):null,(0,x.jsx)(f.Z,{label:"next",onAction:N})]})]})})}},95240:function(e,t,n){var o=n(37762),a=n(93433),l=n(29439),r=n(39230),i=n(48293),_=n(21348),c=n(90904),s=n(72791),d=n(93638),m=n(49806),u=n(98684),v=n(34219),p=n(45897),h=n(80184);t.Z=function(e){var t=e.onClose,n=e.studentList,x=e.alreadySelected,Z=e.onAction,g=(0,r.$G)().t,b=(0,s.useState)([]),j=(0,l.Z)(b,2),y=j[0],P=j[1],k=(0,s.useState)([]),N=(0,l.Z)(k,2),C=N[0],D=N[1],S=(0,s.useState)(!1),I=(0,l.Z)(S,2),w=I[0],A=I[1];(0,s.useEffect)((function(){P(n)}),[n]),(0,s.useEffect)((function(){D(x)}),[x]);var L=function(e){null!==C&&void 0!==C&&C.includes(e)?D((function(t){return null===t||void 0===t?void 0:t.filter((function(t){return t!==e}))})):D((function(t){return[].concat((0,a.Z)(t),[e])}))};return(0,h.jsx)(i.Z,{children:(0,h.jsxs)("div",{className:m.Z.modal_container,children:[(0,h.jsx)(_.Z,{children:(0,h.jsxs)("div",{className:m.Z.modal_container_outer_header,children:[(0,h.jsx)("div",{className:m.Z.modal_container_header,children:(0,h.jsxs)("h6",{children:[(null===C||void 0===C?void 0:C.length)>0?"".concat(null===C||void 0===C?void 0:C.length," "):"",g("select_student")]})}),(0,h.jsxs)("div",{className:m.Z.modal_container_header,children:[w?(0,h.jsx)(d.Z,{customStyle:{margin:0,padding:"0.2rem 0.5rem"},onAction:function(){D([]),A(!1)},label:"remove_all"}):(0,h.jsx)(d.Z,{customStyle:{margin:0,padding:"0.2rem 0.5rem"},onAction:function(){var e,t=[],a=(0,o.Z)(n);try{for(a.s();!(e=a.n()).done;){var l=e.value;t.push(null===l||void 0===l?void 0:l._id)}}catch(r){a.e(r)}finally{a.f()}D(t),A(!0)},label:"select_all"}),(0,h.jsx)(d.Z,{customStyle:{margin:0,padding:"0.2rem 0.5rem"},onAction:function(){return Z(C)},label:"next"}),(0,h.jsx)("img",{src:"".concat(u.J7,"/close.svg"),alt:"close icon",onClick:t,className:m.Z.close_icon})]})]})}),(0,h.jsx)(c.Z,{}),(0,h.jsxs)(_.Z,{customStyle:{paddingTop:"0"},children:[(0,h.jsxs)("div",{className:m.Z.assign_search_container,style:{marginBottom:"1rem"},children:[(0,h.jsx)("input",{type:"text",placeholder:g("search"),className:m.Z.assign_search_input,onChange:function(e){if(e.target.value){var t=f(n,e.target.value);P((function(){return t}))}else P((function(){return n}))},style:{width:"100%"}}),(0,h.jsx)("img",{src:"".concat(u.dB,"/navbar-search.svg"),alt:"search icon"})]}),null===n||void 0===n?void 0:n.map((function(e){return(0,h.jsx)(p.Z,{stu:e,selectedId:C,onSelectStudent:L},null===e||void 0===e?void 0:e._id)})),(null===y||void 0===y?void 0:y.length)<1&&(0,h.jsx)(v.Z,{customStyleContainer:{marginTop:"9rem"},title:"No student found."})]})]})})};var f=function(){var e=arguments.length>1?arguments[1]:void 0;return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]).filter((function(t){var n,o,a,l,r,i,_=null!==(n=null!==(o=null!==(a=null===t||void 0===t?void 0:t.studentFirstName)&&void 0!==a?a:" "+(null===t||void 0===t?void 0:t.studentMiddleName))&&void 0!==o?o:" "+(null===t||void 0===t?void 0:t.studentLastName))&&void 0!==n?n:"";return null!==_&&void 0!==_&&null!==(l=_.toLowerCase())&&void 0!==l&&l.includes(null===e||void 0===e?void 0:e.toLowerCase())||null!==t&&void 0!==t&&null!==(r=t.studentGRNO)&&void 0!==r&&null!==(i=r.toLowerCase())&&void 0!==i&&i.includes(null===e||void 0===e?void 0:e.toLowerCase())?t:null}))}},24620:function(e,t,n){var o=n(93433),a=n(6758),l=n(33880),r=n(39230),i=n(80184);t.Z=function(e){var t=e.did,n=e.onSelect,_=e.onlyBatch,c=e.errorShow,s=e.defalutValue,d=e.isDenied,m=(0,r.$G)().t,u=(0,a._m)({did:t,skip:!t}).departmentAllBatch;return(0,i.jsx)(i.Fragment,{children:_?(0,i.jsx)(l.Z,{selectLabel:m("select_batch"),selectedValue:m("select_batch_placeholder"),options:(null===u||void 0===u?void 0:u.length)>0?u:[],onClick:n,isFull:!0,errorShow:c,defalutValue:s,isDenied:d}):(0,i.jsx)(l.Z,{selectLabel:m("select_batch"),selectedValue:m("select_batch_placeholder"),options:(null===u||void 0===u?void 0:u.length)>0?["ALL"].concat((0,o.Z)(u)):["ALL"],onClick:n,isFull:!0,errorShow:c})})}},39896:function(e,t,n){var o=n(93433),a=n(6758),l=n(31897),r=n(39230),i=n(80184);t.Z=function(e){var t=e.fid,n=e.onSelect,_=e.onlyDepartment,c=e.errorShow,s=e.defalutValue,d=e.isDenied,m=e.customStyleContainer,u=(0,r.$G)().t,v=(0,a.Jv)({fid:t,skip:!t}).instituteAllDepartment;return(0,i.jsx)(i.Fragment,{children:_?(0,i.jsx)(l.Z,{selectLabel:u("select_department"),selectedValue:u("select_department_placeholder"),options:(null===v||void 0===v?void 0:v.length)>0?v:[],onClick:n,isFull:!0,errorShow:c,defalutValue:s,viewAs:"NORMAL_FILTER",isDenied:d,customStyleContainer:m}):(0,i.jsx)(l.Z,{selectLabel:u("select_department"),selectedValue:u("select_department_placeholder"),options:(null===v||void 0===v?void 0:v.length)>0?["ALL","By Bank","Particular Student"].concat((0,o.Z)(v)):["ALL","By Bank","Particular Student"],onClick:n,isFull:!0,errorShow:c,customStyleContainer:m})})}},72261:function(e,t,n){var o=n(93433),a=n(6758),l=n(40739),r=n(39230),i=n(80184);t.Z=function(e){var t=e.instituteId,n=e.did,_=e.onSelect,c=e.errorShow,s=e.defalutValue,d=e.isDenied,m=(0,r.$G)().t,u=(0,a.lj)({data:{id:t,did:n},skip:t?!n:!t}).departmentAllClassMaster;return(0,i.jsx)(l.Z,{selectLabel:m("select_standard"),selectedValue:m("select_standard_placeholder"),options:(null===u||void 0===u?void 0:u.length)>0?(0,o.Z)(u):[],onClick:_,isFull:!0,errorShow:c,defalutValue:s,isDenied:d})}},33148:function(e,t){t.Z={departmenthead:"PromoteDepartment_departmenthead__NT0rQ",demaprtment_list:"PromoteDepartment_demaprtment_list__xRUQC",department_card_container:"PromoteDepartment_department_card_container__tEJF1",department_card_image:"PromoteDepartment_department_card_image__fqEm5",department_card_name:"PromoteDepartment_department_card_name__fsy26",department_card_head:"PromoteDepartment_department_card_head__p9hSI",moderator_container_title:"PromoteDepartment_moderator_container_title__s8dGS",with_search:"PromoteDepartment_with_search__iQ8M3",search_container_input:"PromoteDepartment_search_container_input__ef1S7",searchIcon:"PromoteDepartment_searchIcon__rhdfi",class_container:"PromoteDepartment_class_container__5IIQl",class_container_text:"PromoteDepartment_class_container_text__Z4upA",oneRowImage:"PromoteDepartment_oneRowImage__300XP",total_student_count:"PromoteDepartment_total_student_count__tMaik",total_other_count_container:"PromoteDepartment_total_other_count_container__B09Jg",student_container:"PromoteDepartment_student_container__II4m8",student_info_container:"PromoteDepartment_student_info_container__aVOf4",student_info_text:"PromoteDepartment_student_info_text__w1jdE",select_application_btn:"PromoteDepartment_select_application_btn__ydAfm",promote_container:"PromoteDepartment_promote_container__BLZ0j",promote_student_card:"PromoteDepartment_promote_student_card__euVJr",promote_student_cardActive:"PromoteDepartment_promote_student_cardActive__+x213",promote_student_card_text:"PromoteDepartment_promote_student_card_text__tnq3o",promote_student_name:"PromoteDepartment_promote_student_name__8I367",select_header:"PromoteDepartment_select_header__Pf+k3",select_all_btn:"PromoteDepartment_select_all_btn__wQlgs",promote_all_btn:"PromoteDepartment_promote_all_btn__Byy5c",promote_container_title:"PromoteDepartment_promote_container_title__z4Pmh",add_new_container:"PromoteDepartment_add_new_container__LEogI",add_new_exam:"PromoteDepartment_add_new_exam__3Kr+Z",menu_icon:"PromoteDepartment_menu_icon__TxY-a",items:"PromoteDepartment_items__PRx-q",itemm:"PromoteDepartment_itemm__wY1ST",checkbox:"PromoteDepartment_checkbox__HIzX-",counts:"PromoteDepartment_counts__6u4y4",promote_student_check_container:"PromoteDepartment_promote_student_check_container__cHvP7",promote_student_check:"PromoteDepartment_promote_student_check__EnbC1",department_checkbox:"PromoteDepartment_department_checkbox__7PqNV",promote_undo_container:"PromoteDepartment_promote_undo_container__I22Lh",all_leave_config:"PromoteDepartment_all_leave_config__gJg0k",settingbtnflex:"PromoteDepartment_settingbtnflex__7U56X",settingbtn:"PromoteDepartment_settingbtn__en0FB",rec_icon:"PromoteDepartment_rec_icon__gHIKN",tf_heading:"PromoteDepartment_tf_heading__6wSM5"}},16925:function(e,t){t.Z={right:"Income_right__XnzYj",rightHead:"Income_rightHead__1rLc6",rightBody:"Income_rightBody__fGEC5",income_detail:"Income_income_detail__IWoJa",detailTop:"Income_detailTop__4JXuu",detailTopMid:"Income_detailTopMid__yc2yv",modal_container:"Income_modal_container__HiGr+",modal_container_outer_header:"Income_modal_container_outer_header__F9c7X",modal_container_header:"Income_modal_container_header__td-Fb",card_container:"Income_card_container__ewKhQ",card_container_image:"Income_card_container_image__5XloP",card_container_inner:"Income_card_container_inner__JBmxr",admission_fees_row:"Income_admission_fees_row__MPJCs",close_icon:"Income_close_icon__Ozq4u",student_message_container:"Income_student_message_container__8KnPc",student_message_container_inner:"Income_student_message_container_inner__mRYpD",usm_institute_container:"Income_usm_institute_container__4LkYt",usm_institute:"Income_usm_institute__hlzdF",date_select:"Income_date_select__D3VkU",gsf_star_container:"Income_gsf_star_container__7gdUs"}},49806:function(e,t){t.Z={modal_container:"PlateformUser_modal_container__tqwpY",modal_container_outer_header:"PlateformUser_modal_container_outer_header__HbF+9",modal_container_header:"PlateformUser_modal_container_header__QzyxM",modal_container_btn_container:"PlateformUser_modal_container_btn_container__3SJ8i",modal_container_header_btn:"PlateformUser_modal_container_header_btn__dWfwA",assign_search_container:"PlateformUser_assign_search_container__dJdYj",assign_search_input:"PlateformUser_assign_search_input__aFF28",assign_show_list_each:"PlateformUser_assign_show_list_each__co2b1",assign_show_list_each_active:"PlateformUser_assign_show_list_each_active__SWwFS",assign_each_paragraph:"PlateformUser_assign_each_paragraph__bDgq6",close_icon:"PlateformUser_close_icon__VXKXH",comfirm_box:"PlateformUser_comfirm_box__ntFD7",modal_container_btn:"PlateformUser_modal_container_btn__BWFB9"}}}]);
//# sourceMappingURL=56532.40e8da15.chunk.js.map