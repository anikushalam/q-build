"use strict";(self.webpackChunkmithkal_qviple=self.webpackChunkmithkal_qviple||[]).push([[4395],{11728:function(e,n,a){a.d(n,{TW:function(){return i},Wt:function(){return s},sY:function(){return t}});var s=[{key:"ALL_BATCH",name:"all_batches"},{key:"ACTIVE_BATCH",name:"active_batches"}],t=[{key:"ALL",name:"all_departments"},{key:"PARTICULAR",name:"particular_department"}],i=[{key:"ALL_BATCH",name:"all_batches"},{key:"PARTICULAR_BATCH",name:"particular_batch"}]},26071:function(e,n,a){var s=a(51416),t=a(39230),i=a(80184);n.Z=function(e){var n=e.tile,a=e.onTile,r=e.activeTile,_=e.customTileChild,l=(0,t.$G)().t;return(0,i.jsx)("div",{className:(null===n||void 0===n?void 0:n.key)===r?s.Z.tile_tile_active:s.Z.tile_tile,onClick:function(){return a(null===n||void 0===n?void 0:n.key)},style:_,children:l(null===n||void 0===n?void 0:n.name)})}},20659:function(e,n,a){var s=a(51416),t=a(39230),i=a(80184);n.Z=function(e){var n=e.label,a=e.customTileLabel,r=e.customTileContainer,_=e.children,l=(0,t.$G)().t;return(0,i.jsxs)("div",{className:s.Z.tile_container,children:[n&&(0,i.jsx)("h6",{className:s.Z.tile_label,style:a,children:l(n)}),(0,i.jsx)("section",{className:s.Z.tile_tile_container,style:r,children:_})]})}},63687:function(e,n,a){var s=a(59393),t=a(80184);n.Z=function(e){var n=e.customStyle,a=e.children;return(0,t.jsx)("div",{className:s.Z.user_member_container_wrapper,style:n,children:a})}},35483:function(e,n,a){a.d(n,{Z:function(){return Z}});var s=a(29439),t=a(39230),i=a(49806),r=a(48293),_=a(21348),l=a(98684),c=a(90904),d=a(6758),h=a(80184),o=function(e){var n,a=e.department,s=e.onSelect;return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)("div",{className:i.Z.assign_show_list_each,onClick:function(){s(a)},children:[(0,h.jsx)("img",{src:"".concat(l.J7,"/department.svg"),alt:"department icon"}),(0,h.jsx)("div",{className:i.Z.assign_each_paragraph,children:(0,h.jsx)("h6",{children:null!==(n=null===a||void 0===a?void 0:a.dName)&&void 0!==n?n:""})})]}),(0,h.jsx)(c.Z,{customStyleBorder:{margin:"0"}})]})},m=a(72791),u=a(20659),v=a(26071),f=a(11728),x=a(1669),b=a(55336),j=a(2651),Z=function(e){var n=e.onClose,a=e.onSelect,Z=e.fid,g=e.isType,p=(0,t.$G)().t,y=(0,m.useState)([]),S=(0,s.Z)(y,2),k=S[0],C=S[1],T=(0,m.useState)(""),w=(0,s.Z)(T,2),A=w[0],B=w[1],P=(0,m.useState)([]),U=(0,s.Z)(P,2),E=U[0],L=U[1],R=(0,d.Jv)({fid:Z,skip:!Z}),M=R.instituteAllDepartment,W=R.instituteAllDepartmentLoading;(0,m.useEffect)((function(){null!==M&&void 0!==M&&M.length&&C(M)}),[null===M||void 0===M?void 0:M.length]);var F=function(e){a(e)},D=function(e){"ALL"===e&&a(e),B(e)};return(0,h.jsx)(r.Z,{onClose:n,children:(0,h.jsxs)("div",{className:i.Z.modal_container,children:[(0,h.jsx)(_.Z,{children:(0,h.jsxs)("div",{className:i.Z.modal_container_outer_header,children:[(0,h.jsx)("div",{className:i.Z.modal_container_header,children:(0,h.jsx)("h6",{children:p("select_department")})}),(0,h.jsx)("img",{src:"".concat(l.J7,"/close.svg"),alt:"close icon",onClick:n})]})}),(0,h.jsx)(c.Z,{}),(0,h.jsxs)(_.Z,{customStyle:{paddingTop:"0",paddingBottom:"1rem"},children:[(0,h.jsxs)("div",{className:i.Z.assign_search_container,style:{marginBottom:"0.8rem"},children:[(0,h.jsx)("input",{type:"text",placeholder:p("search"),className:i.Z.assign_search_input,onChange:function(e){if(e.target.value){var n=N(M,e.target.value);C(n),L(e.target.value)}else C(M),L("")}}),(0,h.jsx)("img",{src:"".concat(l.dB,"/navbar-search.svg"),alt:"search icon"})]}),g&&(0,h.jsx)(u.Z,{label:"department_type",children:null===f.sY||void 0===f.sY?void 0:f.sY.map((function(e){return(0,h.jsx)(v.Z,{tile:e,onTile:D,activeTile:A},null===e||void 0===e?void 0:e.key)}))}),null===k||void 0===k?void 0:k.map((function(e){return(0,h.jsx)(o,{department:e,onSelect:F},null===e||void 0===e?void 0:e._id)})),W?E?(0,h.jsx)(b.Z,{}):(0,h.jsx)(x.Z,{}):E?!(null!==k&&void 0!==k&&k.length)&&(0,h.jsx)(j.Z,{customStyleContainer:{marginTop:"1.5rem"},title:"No department fuond related this search."}):!(null!==M&&void 0!==M&&M.length)&&(0,h.jsx)(j.Z,{customStyleContainer:{marginTop:"1.5rem"},title:"No department found."})]})]})})},N=function(e,n){return null===e||void 0===e?void 0:e.filter((function(e){var a;return null!==e&&void 0!==e&&null!==(a=e.dName)&&void 0!==a&&a.includes(n)?e:null}))}},84395:function(e,n,a){a.r(n),a.d(n,{default:function(){return P}});var s=a(29439),t=a(90904),i=a(63687),r=a(21348),_=a(39230),l=a(56959),c=a(1413),d=a(51136),h=a(16871),o=a(72791),m=a(80184),u=function(e){var n=e.statitics,a=(0,_.$G)().t,s=(0,h.s0)(),t=(0,h.UO)(),i=(0,h.TH)(),r=(0,o.useCallback)((function(e){(null===e||void 0===e?void 0:e.length)>0&&s("/q/".concat(t.username,"/member/staff/finance?type=statistics-detail"),{state:(0,c.Z)((0,c.Z)({},i.state),{},{studentList:e})})}),[s,t]);return(0,m.jsxs)("div",{className:d.Z.ss_table,children:[(0,m.jsxs)("section",{className:d.Z.ss_table_header,children:[(0,m.jsx)("div",{className:d.Z.ss_table_header_inner,children:(0,m.jsx)("h6",{className:d.Z.ss_table_header_h6,style:{width:"3.4rem"},children:a("sr_no")})}),(0,m.jsx)("div",{className:d.Z.ss_table_header_inner,children:(0,m.jsx)("h6",{className:d.Z.ss_table_header_h6,style:{width:"12rem"},children:a("classes")})}),(0,m.jsx)("div",{className:d.Z.ss_table_header_inner,children:(0,m.jsx)("h6",{className:d.Z.ss_table_header_h6,style:{width:"4.7rem"},children:a("strength")})}),null===v||void 0===v?void 0:v.map((function(e){return(0,m.jsxs)("div",{className:d.Z.ss_table_header_inner_fr,children:[(0,m.jsx)("div",{className:d.Z.ss_table_header_inner_fr_center,children:(0,m.jsx)("h6",{className:d.Z.ss_table_header_h6,style:{width:"4.7rem"},children:a(e.name)})}),(0,m.jsxs)("div",{className:d.Z.ss_table_header_inner_fr_inner,children:[(0,m.jsx)("h6",{className:d.Z.ss_table_header_inner_fr_inner_h6,children:"M"}),(0,m.jsx)("h6",{className:d.Z.ss_table_header_inner_fr_inner_h6_right,children:"F"})]})]},e.key)})),(0,m.jsxs)("div",{className:d.Z.ss_table_header_inner_fr,children:[(0,m.jsx)("h6",{className:d.Z.ss_table_header_h6,children:a("minority")}),(0,m.jsx)("div",{className:d.Z.ss_table_minority,children:f.map((function(e){return(0,m.jsxs)("div",{className:d.Z.ss_table_minority_inner,children:[(0,m.jsx)("h6",{className:d.Z.ss_table_header_h6,style:{width:"5rem"},children:a(e.name)}),(0,m.jsxs)("div",{className:d.Z.ss_table_header_inner_fr_inner,children:[(0,m.jsx)("h6",{className:d.Z.ss_table_header_inner_fr_inner_h6,children:"M"}),(0,m.jsx)("h6",{className:d.Z.ss_table_header_inner_fr_inner_h6_right,children:"F"})]})]},e.key)}))})]}),null===x||void 0===x?void 0:x.map((function(e){return(0,m.jsxs)("div",{className:d.Z.ss_table_header_inner_fr,children:[(0,m.jsx)("div",{className:d.Z.ss_table_header_inner_fr_center,children:(0,m.jsx)("h6",{className:d.Z.ss_table_header_h6,style:{width:"5rem"},children:a(e.name)})}),(0,m.jsxs)("div",{className:d.Z.ss_table_header_inner_fr_inner,children:[(0,m.jsx)("h6",{className:d.Z.ss_table_header_inner_fr_inner_h6,children:"M"}),(0,m.jsx)("h6",{className:d.Z.ss_table_header_inner_fr_inner_h6_right,children:"F"})]})]},e.key)})),(0,m.jsxs)("div",{className:d.Z.ss_table_header_inner_fr,children:[(0,m.jsx)("div",{className:d.Z.ss_table_header_inner_fr_center,style:{borderRight:"1px solid #cacaca"},children:(0,m.jsx)("h6",{className:d.Z.ss_table_header_h6,style:{width:"8rem"},children:a("all_grand_total")})}),(0,m.jsxs)("div",{className:d.Z.ss_table_header_inner_fr_inner,children:[(0,m.jsx)("h6",{className:d.Z.ss_table_header_inner_fr_inner_h6,children:"M"}),(0,m.jsx)("h6",{className:d.Z.ss_table_header_inner_fr_inner_h6,children:"F"}),(0,m.jsx)("h6",{className:d.Z.ss_table_header_inner_fr_inner_h6_right,style:{borderRight:"1px solid #cacaca"},children:a("total")})]})]})]}),null===n||void 0===n?void 0:n.map((function(e,n){return(0,m.jsxs)("section",{className:d.Z.ss_table_header,style:{paddingTop:"0",paddingBottom:"1rem",height:"3.3rem"},children:[(0,m.jsx)("div",{className:d.Z.ss_table_header_inner,children:(0,m.jsx)("h6",{className:d.Z.ss_table_header_h6,style:{width:"3.4rem"},children:n+1})}),(0,m.jsx)("div",{className:d.Z.ss_table_header_inner,children:(0,m.jsx)("h6",{className:d.Z.ss_table_header_h6,style:{width:"12rem"},children:null===e||void 0===e?void 0:e.className})}),(0,m.jsx)("div",{className:d.Z.ss_table_header_inner,children:(0,m.jsx)("h6",{className:d.Z.ss_table_header_h6,style:{width:"4.7rem"},children:null===e||void 0===e?void 0:e.strength})}),null===b||void 0===b?void 0:b.map((function(n){return(0,m.jsx)("div",{className:d.Z.ss_table_header_inner_fr,children:(0,m.jsxs)("div",{className:d.Z.ss_table_header_inner_fr_inner,children:[(0,m.jsx)("h6",{className:d.Z.ss_table_header_inner_fr_inner_h6,style:{width:"calc(2.35rem)",cursor:"pointer",color:"#00f"},onClick:function(){return r(e["".concat(n.name,"_m_arr")])},children:e["".concat(n.name,"_m")]}),(0,m.jsx)("h6",{className:d.Z.ss_table_header_inner_fr_inner_h6_right,style:{width:"calc(2.35rem)",cursor:"pointer",color:"#00f"},onClick:function(){return r(e["".concat(n.name,"_f_arr")])},children:e["".concat(n.name,"_f")]})]})},n.name)})),(0,m.jsx)("div",{className:d.Z.ss_table_header_inner_fr,children:(0,m.jsx)("div",{className:d.Z.ss_table_minority,children:j.map((function(n){return(0,m.jsx)("div",{className:d.Z.ss_table_minority_inner,children:(0,m.jsxs)("div",{className:d.Z.ss_table_header_inner_fr_inner,children:[(0,m.jsx)("h6",{className:d.Z.ss_table_header_inner_fr_inner_h6,style:{width:"calc(2.5rem)",cursor:"pointer",color:"#00f"},onClick:function(){return r(e["".concat(n.name,"_m_arr")])},children:e["".concat(n.name,"_m")]}),(0,m.jsx)("h6",{className:d.Z.ss_table_header_inner_fr_inner_h6_right,style:{width:"calc(2.5rem)",cursor:"pointer",color:"#00f"},onClick:function(){return r(e["".concat(n.name,"_f_arr")])},children:e["".concat(n.name,"_f")]})]})},n.name)}))})}),null===Z||void 0===Z?void 0:Z.map((function(n){return(0,m.jsx)("div",{className:d.Z.ss_table_header_inner_fr,children:(0,m.jsxs)("div",{className:d.Z.ss_table_header_inner_fr_inner,children:[(0,m.jsxs)("h6",{className:d.Z.ss_table_header_inner_fr_inner_h6,style:{width:"calc(2.5rem)",cursor:"pointer",color:"#00f"},onClick:function(){return r(e["".concat(n.name,"_m_arr")])},children:[" ",e["".concat(n.name,"_m")]]}),(0,m.jsx)("h6",{className:d.Z.ss_table_header_inner_fr_inner_h6_right,style:{width:"calc(2.5rem)",cursor:"pointer",color:"#00f"},onClick:function(){return r(e["".concat(n.name,"_f_arr")])},children:e["".concat(n.name,"_f")]})]})},n.name)})),(0,m.jsx)("div",{className:d.Z.ss_table_header_inner_fr,children:(0,m.jsxs)("div",{className:d.Z.ss_table_header_inner_fr_inner,children:[(0,m.jsx)("h6",{className:d.Z.ss_table_header_inner_fr_inner_h6,style:{width:"calc(2.15rem)",cursor:"pointer",color:"#00f"},onClick:function(){return r(e.boy_arr)},children:e.boy}),(0,m.jsx)("h6",{className:d.Z.ss_table_header_inner_fr_inner_h6,style:{width:"calc(2.1rem)",cursor:"pointer",color:"#00f"},onClick:function(){return r(e.girl_arr)},children:e.girl}),(0,m.jsx)("h6",{className:d.Z.ss_table_header_inner_fr_inner_h6_right,style:{borderRight:"1px solid #cacaca",width:"calc(3.8rem)"},children:e.strength})]})})]})}))]})},v=[{name:"general",key:0},{name:"sc",key:1},{name:"st",key:2},{name:"dt",key:3},{name:"nt",key:4},{name:"obc",key:5},{name:"sbc",key:6},{name:"muslim",key:7},{name:"maratha",key:8},{name:"ews",key:9},{name:"ph",key:10},{name:"jk_students",key:11},{name:"goins_students",key:12}],f=[{name:"sikh",key:"sikh"},{name:"jainism",key:"jainism"},{name:"buddhism",key:"buddhism"},{name:"christian",key:"christian"},{name:"parsi",key:"parsi"},{name:"jews",key:"jews"}],x=[{name:"hindu",key:"hindu"},{name:"muslim",key:"muslim"}],b=[{name:"general"},{name:"sc"},{name:"st"},{name:"dt"},{name:"nt"},{name:"obc"},{name:"sbc"},{name:"muslim"},{name:"maratha"},{name:"ews"},{name:"ph"},{name:"jk"},{name:"goins"}],j=[{name:"sikh"},{name:"jain"},{name:"budh"},{name:"christian"},{name:"parsi"},{name:"jews"}],Z=[{name:"hindu"},{name:"muslim"}],N=a(35483),g=a(49806),p=a(48293),y=a(98684),S=a(6758),k=function(e){var n,a=e.batch,s=e.onSelect;return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)("div",{className:g.Z.assign_show_list_each,onClick:function(){s(a)},children:[(0,m.jsx)("img",{src:"".concat(y.J7,"/class.svg"),style:{borderRadius:"0"},alt:"batch icon"}),(0,m.jsx)("div",{className:g.Z.assign_each_paragraph,children:(0,m.jsx)("h6",{children:null!==(n=null===a||void 0===a?void 0:a.batchName)&&void 0!==n?n:""})})]}),(0,m.jsx)(t.Z,{customStyleBorder:{margin:"0"}})]})},C=a(55336),T=a(1669),w=a(2651),A=function(e){var n=e.onClose,a=e.onSelect,i=e.did,l=(0,_.$G)().t,c=(0,o.useState)([]),d=(0,s.Z)(c,2),h=d[0],u=d[1],v=(0,o.useState)([]),f=(0,s.Z)(v,2),x=f[0],b=f[1],j=(0,S._m)({did:i,skip:!i}),Z=j.departmentAllBatch,N=j.departmentAllBatchLoading;(0,o.useEffect)((function(){null!==Z&&void 0!==Z&&Z.length&&u(Z)}),[null===Z||void 0===Z?void 0:Z.length]);var A=function(e){a(e)};return(0,m.jsx)(p.Z,{onClose:n,children:(0,m.jsxs)("div",{className:g.Z.modal_container,children:[(0,m.jsx)(r.Z,{children:(0,m.jsxs)("div",{className:g.Z.modal_container_outer_header,children:[(0,m.jsx)("div",{className:g.Z.modal_container_header,children:(0,m.jsx)("h6",{children:l("select_batch")})}),(0,m.jsx)("img",{src:"".concat(y.J7,"/close.svg"),alt:"close icon",onClick:n})]})}),(0,m.jsx)(t.Z,{}),(0,m.jsxs)(r.Z,{customStyle:{paddingTop:"0",paddingBottom:"1rem"},children:[(0,m.jsxs)("div",{className:g.Z.assign_search_container,style:{marginBottom:"0.8rem"},children:[(0,m.jsx)("input",{type:"text",placeholder:l("search"),className:g.Z.assign_search_input,onChange:function(e){if(e.target.value){var n=B(Z,e.target.value);u(n),b(e.target.value)}else u(Z),b("")}}),(0,m.jsx)("img",{src:"".concat(y.dB,"/navbar-search.svg"),alt:"search icon"})]}),null===h||void 0===h?void 0:h.map((function(e){return(0,m.jsx)(k,{batch:e,onSelect:A},null===e||void 0===e?void 0:e._id)})),N?x?(0,m.jsx)(C.Z,{}):(0,m.jsx)(T.Z,{}):x?!(null!==h&&void 0!==h&&h.length)&&(0,m.jsx)(w.Z,{customStyleContainer:{marginTop:"1.5rem"},title:"No batch fuond related this search."}):!(null!==Z&&void 0!==Z&&Z.length)&&(0,m.jsx)(w.Z,{customStyleContainer:{marginTop:"1.5rem"},title:"No batch found."})]})]})})},B=function(e,n){return null===e||void 0===e?void 0:e.filter((function(e){var a;return null!==e&&void 0!==e&&null!==(a=e.batchName)&&void 0!==a&&a.includes(n)?e:null}))},P=function(e){var n,a,c=e.fid,d=(0,_.$G)().t,v=(0,h.s0)(),f=(0,o.useState)("DEPARTMENT"),x=(0,s.Z)(f,2),b=x[0],j=x[1],Z=(0,o.useState)(""),g=(0,s.Z)(Z,2),p=g[0],y=g[1],k=(0,o.useState)(""),T=(0,s.Z)(k,2),w=T[0],B=T[1],P=(0,o.useState)(!1),U=(0,s.Z)(P,2),E=U[0],L=U[1],R=(0,S.Pl)(),M=(0,s.Z)(R,1)[0],W=(0,o.useState)([]),F=(0,s.Z)(W,2),D=F[0],G=F[1];return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)(i.Z,{customStyle:{maxWidth:"870px"},children:[(0,m.jsx)(r.Z,{children:(0,m.jsx)("div",{className:l.Z.fm_header_container,children:(0,m.jsx)("h6",{children:d("student_statitics")})})}),(0,m.jsx)(t.Z,{}),(0,m.jsxs)(r.Z,{customStyle:{paddingTop:"0.2rem"},children:[(0,m.jsxs)("h6",{className:l.Z.fm_title_heading,onClick:function(){return j("OWN_DEPARTMENT")},children:[d("department_name")," "," : ",null!==(n=null===p||void 0===p?void 0:p.dName)&&void 0!==n?n:""," ",(0,m.jsx)("span",{children:null!==(a=null===w||void 0===w?void 0:w.batchName)&&void 0!==a?a:""})]}),(0,m.jsx)(u,{statitics:D})]})]}),"DEPARTMENT"===b||"OWN_DEPARTMENT"===b?(0,m.jsx)(N.Z,{onClose:function(){"OWN_DEPARTMENT"===b?j(""):v(-1)},fid:c,onSelect:function(e){"ALL"===e?null!==e&&void 0!==e&&e._id&&(L((function(e){return!e})),M({bid:null===e||void 0===e?void 0:e._id}).then((function(e){var n,a,s;(null===(n=e.data)||void 0===n||null===(a=n.excel_list)||void 0===a?void 0:a.length)>0&&G(null===(s=e.data)||void 0===s?void 0:s.excel_list),L((function(e){return!e}))})).catch({})):(y(e),j("BATCH"))}}):"BATCH"===b?(0,m.jsx)(A,{onClose:function(){j("DEPARTMENT")},did:null===p||void 0===p?void 0:p._id,onSelect:function(e){j(""),null!==e&&void 0!==e&&e._id&&(B(e),L((function(e){return!e})),M({bid:null===e||void 0===e?void 0:e._id}).then((function(e){var n,a,s;(null===(n=e.data)||void 0===n||null===(a=n.excel_list)||void 0===a?void 0:a.length)>0&&G(null===(s=e.data)||void 0===s?void 0:s.excel_list),L((function(e){return!e}))})).catch({}))}}):null,E&&(0,m.jsx)(C.Z,{})]})}},51136:function(e,n){n.Z={ss_table:"StudentStatitics_ss_table__-7nBy",ss_table_header:"StudentStatitics_ss_table_header__NzyU3",ss_table_header_inner:"StudentStatitics_ss_table_header_inner__+KnQt",ss_table_header_inner_height:"StudentStatitics_ss_table_header_inner_height__i-WEG",ss_table_header_inner_fr_center:"StudentStatitics_ss_table_header_inner_fr_center__UOsuz",ss_table_header_h6:"StudentStatitics_ss_table_header_h6__oiW8m",ss_table_header_inner_fr:"StudentStatitics_ss_table_header_inner_fr__oeUrE",ss_table_header_inner_fr_inner:"StudentStatitics_ss_table_header_inner_fr_inner__ea5i4",ss_table_header_inner_fr_inner_h6:"StudentStatitics_ss_table_header_inner_fr_inner_h6__UmtM3",ss_table_header_inner_fr_inner_h6_right:"StudentStatitics_ss_table_header_inner_fr_inner_h6_right__8rk-A",ss_table_minority:"StudentStatitics_ss_table_minority__NOKGI",ss_table_minority_inner:"StudentStatitics_ss_table_minority_inner__UUThA",fs_table_header:"StudentStatitics_fs_table_header__XOshT",fs_table_col:"StudentStatitics_fs_table_col__7wyrp",fs_table_header_inner:"StudentStatitics_fs_table_header_inner__-VeDl",fs_table_header_inner_h6:"StudentStatitics_fs_table_header_inner_h6__KW2p6",fs_table_col_inner:"StudentStatitics_fs_table_col_inner__2ps-A",osc_container:"StudentStatitics_osc_container__zxWhq",osc_card:"StudentStatitics_osc_card__Kw794",osc_card_inner:"StudentStatitics_osc_card_inner__wIhc7",osc_container_inner:"StudentStatitics_osc_container_inner__zmV8C"}},49806:function(e,n){n.Z={modal_container:"PlateformUser_modal_container__tqwpY",modal_container_outer_header:"PlateformUser_modal_container_outer_header__HbF+9",modal_container_header:"PlateformUser_modal_container_header__QzyxM",modal_container_header_btn:"PlateformUser_modal_container_header_btn__dWfwA",assign_search_container:"PlateformUser_assign_search_container__dJdYj",assign_search_input:"PlateformUser_assign_search_input__aFF28",assign_show_list_each:"PlateformUser_assign_show_list_each__co2b1",assign_show_list_each_active:"PlateformUser_assign_show_list_each_active__SWwFS",assign_each_paragraph:"PlateformUser_assign_each_paragraph__bDgq6"}}}]);
//# sourceMappingURL=4395.e35f2b9f.chunk.js.map