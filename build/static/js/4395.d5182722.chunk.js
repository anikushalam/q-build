"use strict";(self.webpackChunkmithkal_qviple=self.webpackChunkmithkal_qviple||[]).push([[4395],{11728:function(e,n,a){a.d(n,{F5:function(){return i},TW:function(){return r},Vf:function(){return l},Wt:function(){return s},XT:function(){return _},sY:function(){return t}});var s=[{key:"ALL_BATCH",name:"all_batches"},{key:"ACTIVE_BATCH",name:"active_batches"}],t=[{key:"ALL",name:"all_departments"},{key:"PARTICULAR",name:"particular_department"}],r=[{key:"ALL_BATCH",name:"all_batches"},{key:"PARTICULAR_BATCH",name:"particular_batch"}],i=[{key:"All",name:"all_departments"},{key:"Particular",name:"particular_department"}],l=[{key:"All",name:"all_batches"},{key:"Current",name:"current"},{key:"Particular",name:"particular_batch"}],_=[{key:"All",name:"all_batches"},{key:"Current",name:"current"}]},26071:function(e,n,a){var s=a(51416),t=a(39230),r=a(80184);n.Z=function(e){var n=e.tile,a=e.onTile,i=e.activeTile,l=e.customTileChild,_=(0,t.$G)().t;return(0,r.jsx)("div",{className:(null===n||void 0===n?void 0:n.key)===i?s.Z.tile_tile_active:s.Z.tile_tile,onClick:function(){return a(null===n||void 0===n?void 0:n.key)},style:l,children:_(null===n||void 0===n?void 0:n.name)})}},20659:function(e,n,a){var s=a(51416),t=a(39230),r=a(80184);n.Z=function(e){var n=e.label,a=e.customTileLabel,i=e.customTileContainer,l=e.children,_=(0,t.$G)().t;return(0,r.jsxs)("div",{className:s.Z.tile_container,children:[n&&(0,r.jsx)("h6",{className:s.Z.tile_label,style:a,children:_(n)}),(0,r.jsx)("section",{className:s.Z.tile_tile_container,style:i,children:l})]})}},63687:function(e,n,a){var s=a(59393),t=a(80184);n.Z=function(e){var n=e.customStyle,a=e.children;return(0,t.jsx)("div",{className:s.Z.user_member_container_wrapper,style:n,children:a})}},35483:function(e,n,a){a.d(n,{Z:function(){return Z}});var s=a(29439),t=a(39230),r=a(49806),i=a(48293),l=a(21348),_=a(98684),c=a(90904),d=a(6758),o=a(80184),h=function(e){var n,a=e.department,s=e.onSelect;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("div",{className:r.Z.assign_show_list_each,onClick:function(){s(a)},children:[(0,o.jsx)("img",{src:"".concat(_.J7,"/department.svg"),alt:"department icon"}),(0,o.jsx)("div",{className:r.Z.assign_each_paragraph,children:(0,o.jsx)("h6",{children:null!==(n=null===a||void 0===a?void 0:a.dName)&&void 0!==n?n:""})})]}),(0,o.jsx)(c.Z,{customStyleBorder:{margin:"0"}})]})},m=a(72791),u=a(20659),f=a(26071),v=a(11728),b=a(1669),x=a(55336),j=a(2651),Z=function(e){var n=e.onClose,a=e.onSelect,Z=e.fid,g=e.isType,y=(0,t.$G)().t,p=(0,m.useState)([]),S=(0,s.Z)(p,2),k=S[0],C=S[1],T=(0,m.useState)(""),w=(0,s.Z)(T,2),A=w[0],P=w[1],U=(0,m.useState)([]),B=(0,s.Z)(U,2),E=B[0],L=B[1],R=(0,d.Jv)({fid:Z,skip:!Z}),F=R.instituteAllDepartment,M=R.instituteAllDepartmentLoading;(0,m.useEffect)((function(){null!==F&&void 0!==F&&F.length&&C(F)}),[null===F||void 0===F?void 0:F.length]);var D=function(e){a(e)},W=function(e){"ALL"===e&&a(e),P(e)};return(0,o.jsx)(i.Z,{onClose:n,children:(0,o.jsxs)("div",{className:r.Z.modal_container,children:[(0,o.jsx)(l.Z,{children:(0,o.jsxs)("div",{className:r.Z.modal_container_outer_header,children:[(0,o.jsx)("div",{className:r.Z.modal_container_header,children:(0,o.jsx)("h6",{children:y("select_department")})}),(0,o.jsx)("img",{src:"".concat(_.J7,"/close.svg"),alt:"close icon",onClick:n})]})}),(0,o.jsx)(c.Z,{}),(0,o.jsxs)(l.Z,{customStyle:{paddingTop:"0",paddingBottom:"1rem"},children:[(0,o.jsxs)("div",{className:r.Z.assign_search_container,style:{marginBottom:"0.8rem"},children:[(0,o.jsx)("input",{type:"text",placeholder:y("search"),className:r.Z.assign_search_input,onChange:function(e){if(e.target.value){var n=N(F,e.target.value);C(n),L(e.target.value)}else C(F),L("")}}),(0,o.jsx)("img",{src:"".concat(_.dB,"/navbar-search.svg"),alt:"search icon"})]}),g&&(0,o.jsx)(u.Z,{label:"department_type",children:null===v.sY||void 0===v.sY?void 0:v.sY.map((function(e){return(0,o.jsx)(f.Z,{tile:e,onTile:W,activeTile:A},null===e||void 0===e?void 0:e.key)}))}),null===k||void 0===k?void 0:k.map((function(e){return(0,o.jsx)(h,{department:e,onSelect:D},null===e||void 0===e?void 0:e._id)})),M?E?(0,o.jsx)(x.Z,{}):(0,o.jsx)(b.Z,{}):E?!(null!==k&&void 0!==k&&k.length)&&(0,o.jsx)(j.Z,{customStyleContainer:{marginTop:"1.5rem"},title:"No department fuond related this search."}):!(null!==F&&void 0!==F&&F.length)&&(0,o.jsx)(j.Z,{customStyleContainer:{marginTop:"1.5rem"},title:"No department found."})]})]})})},N=function(e,n){return null===e||void 0===e?void 0:e.filter((function(e){var a;return null!==e&&void 0!==e&&null!==(a=e.dName)&&void 0!==a&&a.includes(n)?e:null}))}},84395:function(e,n,a){a.r(n),a.d(n,{default:function(){return U}});var s=a(29439),t=a(90904),r=a(63687),i=a(21348),l=a(39230),_=a(56959),c=a(1413),d=a(51136),o=a(16871),h=a(72791),m=a(80184),u=function(e){var n=e.statitics,a=(0,l.$G)().t,s=(0,o.s0)(),t=(0,o.UO)(),r=(0,o.TH)(),i=(0,h.useCallback)((function(e){(null===e||void 0===e?void 0:e.length)>0&&s("/q/".concat(t.username,"/member/staff/finance?type=statistics-detail"),{state:(0,c.Z)((0,c.Z)({},r.state),{},{studentList:e})})}),[s,t]);return(0,m.jsxs)("div",{className:d.Z.ss_table,children:[(0,m.jsxs)("section",{className:d.Z.ss_table_header,children:[(0,m.jsx)("div",{className:d.Z.ss_table_header_inner,children:(0,m.jsx)("h6",{className:d.Z.ss_table_header_h6,style:{width:"3.4rem"},children:a("sr_no")})}),(0,m.jsx)("div",{className:d.Z.ss_table_header_inner,children:(0,m.jsx)("h6",{className:d.Z.ss_table_header_h6,style:{width:"12rem"},children:a("classes")})}),(0,m.jsx)("div",{className:d.Z.ss_table_header_inner,children:(0,m.jsx)("h6",{className:d.Z.ss_table_header_h6,style:{width:"4.7rem"},children:a("strength")})}),null===f||void 0===f?void 0:f.map((function(e){return(0,m.jsxs)("div",{className:d.Z.ss_table_header_inner_fr,children:[(0,m.jsx)("div",{className:d.Z.ss_table_header_inner_fr_center,children:(0,m.jsx)("h6",{className:d.Z.ss_table_header_h6,style:{width:"4.7rem"},children:a(e.name)})}),(0,m.jsxs)("div",{className:d.Z.ss_table_header_inner_fr_inner,children:[(0,m.jsx)("h6",{className:d.Z.ss_table_header_inner_fr_inner_h6,children:"M"}),(0,m.jsx)("h6",{className:d.Z.ss_table_header_inner_fr_inner_h6_right,children:"F"})]})]},e.key)})),(0,m.jsxs)("div",{className:d.Z.ss_table_header_inner_fr,children:[(0,m.jsx)("h6",{className:d.Z.ss_table_header_h6,children:a("minority")}),(0,m.jsx)("div",{className:d.Z.ss_table_minority,children:v.map((function(e){return(0,m.jsxs)("div",{className:d.Z.ss_table_minority_inner,children:[(0,m.jsx)("h6",{className:d.Z.ss_table_header_h6,style:{width:"5rem"},children:a(e.name)}),(0,m.jsxs)("div",{className:d.Z.ss_table_header_inner_fr_inner,children:[(0,m.jsx)("h6",{className:d.Z.ss_table_header_inner_fr_inner_h6,children:"M"}),(0,m.jsx)("h6",{className:d.Z.ss_table_header_inner_fr_inner_h6_right,children:"F"})]})]},e.key)}))})]}),null===b||void 0===b?void 0:b.map((function(e){return(0,m.jsxs)("div",{className:d.Z.ss_table_header_inner_fr,children:[(0,m.jsx)("div",{className:d.Z.ss_table_header_inner_fr_center,children:(0,m.jsx)("h6",{className:d.Z.ss_table_header_h6,style:{width:"5rem"},children:a(e.name)})}),(0,m.jsxs)("div",{className:d.Z.ss_table_header_inner_fr_inner,children:[(0,m.jsx)("h6",{className:d.Z.ss_table_header_inner_fr_inner_h6,children:"M"}),(0,m.jsx)("h6",{className:d.Z.ss_table_header_inner_fr_inner_h6_right,children:"F"})]})]},e.key)})),(0,m.jsxs)("div",{className:d.Z.ss_table_header_inner_fr,children:[(0,m.jsx)("div",{className:d.Z.ss_table_header_inner_fr_center,style:{borderRight:"1px solid #cacaca"},children:(0,m.jsx)("h6",{className:d.Z.ss_table_header_h6,style:{width:"8rem"},children:a("all_grand_total")})}),(0,m.jsxs)("div",{className:d.Z.ss_table_header_inner_fr_inner,children:[(0,m.jsx)("h6",{className:d.Z.ss_table_header_inner_fr_inner_h6,children:"M"}),(0,m.jsx)("h6",{className:d.Z.ss_table_header_inner_fr_inner_h6,children:"F"}),(0,m.jsx)("h6",{className:d.Z.ss_table_header_inner_fr_inner_h6_right,style:{borderRight:"1px solid #cacaca"},children:a("total")})]})]})]}),null===n||void 0===n?void 0:n.map((function(e,n){return(0,m.jsxs)("section",{className:d.Z.ss_table_header,style:{paddingTop:"0",paddingBottom:"1rem",height:"3.3rem"},children:[(0,m.jsx)("div",{className:d.Z.ss_table_header_inner,children:(0,m.jsx)("h6",{className:d.Z.ss_table_header_h6,style:{width:"3.4rem"},children:n+1})}),(0,m.jsx)("div",{className:d.Z.ss_table_header_inner,children:(0,m.jsx)("h6",{className:d.Z.ss_table_header_h6,style:{width:"12rem"},children:null===e||void 0===e?void 0:e.className})}),(0,m.jsx)("div",{className:d.Z.ss_table_header_inner,children:(0,m.jsx)("h6",{className:d.Z.ss_table_header_h6,style:{width:"4.7rem"},children:null===e||void 0===e?void 0:e.strength})}),null===x||void 0===x?void 0:x.map((function(n){return(0,m.jsx)("div",{className:d.Z.ss_table_header_inner_fr,children:(0,m.jsxs)("div",{className:d.Z.ss_table_header_inner_fr_inner,children:[(0,m.jsx)("h6",{className:d.Z.ss_table_header_inner_fr_inner_h6,style:{width:"calc(2.35rem)",cursor:"pointer",color:"#00f"},onClick:function(){return i(e["".concat(n.name,"_m_arr")])},children:e["".concat(n.name,"_m")]}),(0,m.jsx)("h6",{className:d.Z.ss_table_header_inner_fr_inner_h6_right,style:{width:"calc(2.35rem)",cursor:"pointer",color:"#00f"},onClick:function(){return i(e["".concat(n.name,"_f_arr")])},children:e["".concat(n.name,"_f")]})]})},n.name)})),(0,m.jsx)("div",{className:d.Z.ss_table_header_inner_fr,children:(0,m.jsx)("div",{className:d.Z.ss_table_minority,children:j.map((function(n){return(0,m.jsx)("div",{className:d.Z.ss_table_minority_inner,children:(0,m.jsxs)("div",{className:d.Z.ss_table_header_inner_fr_inner,children:[(0,m.jsx)("h6",{className:d.Z.ss_table_header_inner_fr_inner_h6,style:{width:"calc(2.5rem)",cursor:"pointer",color:"#00f"},onClick:function(){return i(e["".concat(n.name,"_m_arr")])},children:e["".concat(n.name,"_m")]}),(0,m.jsx)("h6",{className:d.Z.ss_table_header_inner_fr_inner_h6_right,style:{width:"calc(2.5rem)",cursor:"pointer",color:"#00f"},onClick:function(){return i(e["".concat(n.name,"_f_arr")])},children:e["".concat(n.name,"_f")]})]})},n.name)}))})}),null===Z||void 0===Z?void 0:Z.map((function(n){return(0,m.jsx)("div",{className:d.Z.ss_table_header_inner_fr,children:(0,m.jsxs)("div",{className:d.Z.ss_table_header_inner_fr_inner,children:[(0,m.jsxs)("h6",{className:d.Z.ss_table_header_inner_fr_inner_h6,style:{width:"calc(2.5rem)",cursor:"pointer",color:"#00f"},onClick:function(){return i(e["".concat(n.name,"_m_arr")])},children:[" ",e["".concat(n.name,"_m")]]}),(0,m.jsx)("h6",{className:d.Z.ss_table_header_inner_fr_inner_h6_right,style:{width:"calc(2.5rem)",cursor:"pointer",color:"#00f"},onClick:function(){return i(e["".concat(n.name,"_f_arr")])},children:e["".concat(n.name,"_f")]})]})},n.name)})),(0,m.jsx)("div",{className:d.Z.ss_table_header_inner_fr,children:(0,m.jsxs)("div",{className:d.Z.ss_table_header_inner_fr_inner,children:[(0,m.jsx)("h6",{className:d.Z.ss_table_header_inner_fr_inner_h6,style:{width:"calc(2.15rem)",cursor:"pointer",color:"#00f"},onClick:function(){return i(e.boy_arr)},children:e.boy}),(0,m.jsx)("h6",{className:d.Z.ss_table_header_inner_fr_inner_h6,style:{width:"calc(2.1rem)",cursor:"pointer",color:"#00f"},onClick:function(){return i(e.girl_arr)},children:e.girl}),(0,m.jsx)("h6",{className:d.Z.ss_table_header_inner_fr_inner_h6_right,style:{borderRight:"1px solid #cacaca",width:"calc(3.8rem)"},children:e.strength})]})})]})}))]})},f=[{name:"general",key:0},{name:"sc",key:1},{name:"st",key:2},{name:"dt",key:3},{name:"nt",key:4},{name:"obc",key:5},{name:"sbc",key:6},{name:"muslim",key:7},{name:"maratha",key:8},{name:"ews",key:9},{name:"ph",key:10},{name:"jk_students",key:11},{name:"goins_students",key:12}],v=[{name:"sikh",key:"sikh"},{name:"jainism",key:"jainism"},{name:"buddhism",key:"buddhism"},{name:"christian",key:"christian"},{name:"parsi",key:"parsi"},{name:"jews",key:"jews"}],b=[{name:"hindu",key:"hindu"},{name:"muslim",key:"muslim"}],x=[{name:"general"},{name:"sc"},{name:"st"},{name:"dt"},{name:"nt"},{name:"obc"},{name:"sbc"},{name:"muslim"},{name:"maratha"},{name:"ews"},{name:"ph"},{name:"jk"},{name:"goins"}],j=[{name:"sikh"},{name:"jain"},{name:"budh"},{name:"christian"},{name:"parsi"},{name:"jews"}],Z=[{name:"hindu"},{name:"muslim"}],N=a(35483),g=a(49806),y=a(48293),p=a(98684),S=a(6758),k=function(e){var n,a=e.batch,s=e.onSelect;return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)("div",{className:g.Z.assign_show_list_each,onClick:function(){s(a)},children:[(0,m.jsx)("img",{src:"".concat(p.J7,"/class.svg"),style:{borderRadius:"0"},alt:"batch icon"}),(0,m.jsx)("div",{className:g.Z.assign_each_paragraph,children:(0,m.jsx)("h6",{children:null!==(n=null===a||void 0===a?void 0:a.batchName)&&void 0!==n?n:""})})]}),(0,m.jsx)(t.Z,{customStyleBorder:{margin:"0"}})]})},C=a(55336),T=a(1669),w=a(2651),A=function(e){var n=e.onClose,a=e.onSelect,r=e.did,_=(0,l.$G)().t,c=(0,h.useState)([]),d=(0,s.Z)(c,2),o=d[0],u=d[1],f=(0,h.useState)([]),v=(0,s.Z)(f,2),b=v[0],x=v[1],j=(0,S._m)({did:r,skip:!r}),Z=j.departmentAllBatch,N=j.departmentAllBatchLoading;(0,h.useEffect)((function(){null!==Z&&void 0!==Z&&Z.length&&u(Z)}),[null===Z||void 0===Z?void 0:Z.length]);var A=function(e){a(e)};return(0,m.jsx)(y.Z,{onClose:n,children:(0,m.jsxs)("div",{className:g.Z.modal_container,children:[(0,m.jsx)(i.Z,{children:(0,m.jsxs)("div",{className:g.Z.modal_container_outer_header,children:[(0,m.jsx)("div",{className:g.Z.modal_container_header,children:(0,m.jsx)("h6",{children:_("select_batch")})}),(0,m.jsx)("img",{src:"".concat(p.J7,"/close.svg"),alt:"close icon",onClick:n})]})}),(0,m.jsx)(t.Z,{}),(0,m.jsxs)(i.Z,{customStyle:{paddingTop:"0",paddingBottom:"1rem"},children:[(0,m.jsxs)("div",{className:g.Z.assign_search_container,style:{marginBottom:"0.8rem"},children:[(0,m.jsx)("input",{type:"text",placeholder:_("search"),className:g.Z.assign_search_input,onChange:function(e){if(e.target.value){var n=P(Z,e.target.value);u(n),x(e.target.value)}else u(Z),x("")}}),(0,m.jsx)("img",{src:"".concat(p.dB,"/navbar-search.svg"),alt:"search icon"})]}),null===o||void 0===o?void 0:o.map((function(e){return(0,m.jsx)(k,{batch:e,onSelect:A},null===e||void 0===e?void 0:e._id)})),N?b?(0,m.jsx)(C.Z,{}):(0,m.jsx)(T.Z,{}):b?!(null!==o&&void 0!==o&&o.length)&&(0,m.jsx)(w.Z,{customStyleContainer:{marginTop:"1.5rem"},title:"No batch fuond related this search."}):!(null!==Z&&void 0!==Z&&Z.length)&&(0,m.jsx)(w.Z,{customStyleContainer:{marginTop:"1.5rem"},title:"No batch found."})]})]})})},P=function(e,n){return null===e||void 0===e?void 0:e.filter((function(e){var a;return null!==e&&void 0!==e&&null!==(a=e.batchName)&&void 0!==a&&a.includes(n)?e:null}))},U=function(e){var n,a,c=e.fid,d=(0,l.$G)().t,f=(0,o.s0)(),v=(0,h.useState)("DEPARTMENT"),b=(0,s.Z)(v,2),x=b[0],j=b[1],Z=(0,h.useState)(""),g=(0,s.Z)(Z,2),y=g[0],p=g[1],k=(0,h.useState)(""),T=(0,s.Z)(k,2),w=T[0],P=T[1],U=(0,h.useState)(!1),B=(0,s.Z)(U,2),E=B[0],L=B[1],R=(0,S.Pl)(),F=(0,s.Z)(R,1)[0],M=(0,h.useState)([]),D=(0,s.Z)(M,2),W=D[0],H=D[1];return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)(r.Z,{customStyle:{maxWidth:"870px"},children:[(0,m.jsx)(i.Z,{children:(0,m.jsx)("div",{className:_.Z.fm_header_container,children:(0,m.jsx)("h6",{children:d("student_statitics")})})}),(0,m.jsx)(t.Z,{}),(0,m.jsxs)(i.Z,{customStyle:{paddingTop:"0.2rem"},children:[(0,m.jsxs)("h6",{className:_.Z.fm_title_heading,onClick:function(){return j("OWN_DEPARTMENT")},children:[d("department_name")," "," : ",null!==(n=null===y||void 0===y?void 0:y.dName)&&void 0!==n?n:""," ",(0,m.jsx)("span",{children:null!==(a=null===w||void 0===w?void 0:w.batchName)&&void 0!==a?a:""})]}),(0,m.jsx)(u,{statitics:W})]})]}),"DEPARTMENT"===x||"OWN_DEPARTMENT"===x?(0,m.jsx)(N.Z,{onClose:function(){"OWN_DEPARTMENT"===x?j(""):f(-1)},fid:c,onSelect:function(e){"ALL"===e?null!==e&&void 0!==e&&e._id&&(L((function(e){return!e})),F({bid:null===e||void 0===e?void 0:e._id}).then((function(e){var n,a,s;(null===(n=e.data)||void 0===n||null===(a=n.excel_list)||void 0===a?void 0:a.length)>0&&H(null===(s=e.data)||void 0===s?void 0:s.excel_list),L((function(e){return!e}))})).catch({})):(p(e),j("BATCH"))}}):"BATCH"===x?(0,m.jsx)(A,{onClose:function(){j("DEPARTMENT")},did:null===y||void 0===y?void 0:y._id,onSelect:function(e){j(""),null!==e&&void 0!==e&&e._id&&(P(e),L((function(e){return!e})),F({bid:null===e||void 0===e?void 0:e._id}).then((function(e){var n,a,s;(null===(n=e.data)||void 0===n||null===(a=n.excel_list)||void 0===a?void 0:a.length)>0&&H(null===(s=e.data)||void 0===s?void 0:s.excel_list),L((function(e){return!e}))})).catch({}))}}):null,E&&(0,m.jsx)(C.Z,{})]})}},51136:function(e,n){n.Z={ss_table:"StudentStatitics_ss_table__-7nBy",ss_table_header:"StudentStatitics_ss_table_header__NzyU3",ss_table_header_inner:"StudentStatitics_ss_table_header_inner__+KnQt",ss_table_header_inner_height:"StudentStatitics_ss_table_header_inner_height__i-WEG",ss_table_header_inner_fr_center:"StudentStatitics_ss_table_header_inner_fr_center__UOsuz",ss_table_header_h6:"StudentStatitics_ss_table_header_h6__oiW8m",ss_table_header_inner_fr:"StudentStatitics_ss_table_header_inner_fr__oeUrE",ss_table_header_inner_fr_inner:"StudentStatitics_ss_table_header_inner_fr_inner__ea5i4",ss_table_header_inner_fr_inner_h6:"StudentStatitics_ss_table_header_inner_fr_inner_h6__UmtM3",ss_table_header_inner_fr_inner_h6_right:"StudentStatitics_ss_table_header_inner_fr_inner_h6_right__8rk-A",ss_table_minority:"StudentStatitics_ss_table_minority__NOKGI",ss_table_minority_inner:"StudentStatitics_ss_table_minority_inner__UUThA",fs_table_header:"StudentStatitics_fs_table_header__XOshT",fs_table_col:"StudentStatitics_fs_table_col__7wyrp",fs_table_header_inner:"StudentStatitics_fs_table_header_inner__-VeDl",fs_table_header_inner_h6:"StudentStatitics_fs_table_header_inner_h6__KW2p6",fs_table_col_inner:"StudentStatitics_fs_table_col_inner__2ps-A",osc_card:"StudentStatitics_osc_card__Kw794",osc_card_inner:"StudentStatitics_osc_card_inner__wIhc7",osc_container_inner:"StudentStatitics_osc_container_inner__zmV8C"}},49806:function(e,n){n.Z={modal_container:"PlateformUser_modal_container__tqwpY",modal_container_outer_header:"PlateformUser_modal_container_outer_header__HbF+9",modal_container_header:"PlateformUser_modal_container_header__QzyxM",modal_container_header_btn:"PlateformUser_modal_container_header_btn__dWfwA",assign_search_container:"PlateformUser_assign_search_container__dJdYj",assign_search_input:"PlateformUser_assign_search_input__aFF28",assign_show_list_each:"PlateformUser_assign_show_list_each__co2b1",assign_show_list_each_active:"PlateformUser_assign_show_list_each_active__SWwFS",assign_each_paragraph:"PlateformUser_assign_each_paragraph__bDgq6",close_icon:"PlateformUser_close_icon__VXKXH",comfirm_box:"PlateformUser_comfirm_box__ntFD7"}}}]);
//# sourceMappingURL=4395.d5182722.chunk.js.map