"use strict";(self.webpackChunkmithkal_qviple=self.webpackChunkmithkal_qviple||[]).push([[84395],{11728:(e,s,a)=>{a.d(s,{F5:()=>i,TW:()=>l,Vf:()=>r,Wt:()=>n,XT:()=>_,sY:()=>t});const n=[{key:"ALL_BATCH",name:"all_batches"},{key:"ACTIVE_BATCH",name:"active_batches"}],t=[{key:"ALL",name:"all_departments"},{key:"PARTICULAR",name:"particular_department"}],l=[{key:"ALL_BATCH",name:"all_batches"},{key:"PARTICULAR_BATCH",name:"particular_batch"}],i=[{key:"All",name:"all_departments"},{key:"Particular",name:"particular_department"}],r=[{key:"All",name:"all_batches"},{key:"Current",name:"current"},{key:"Particular",name:"particular_batch"}],_=[{key:"All",name:"all_batches"},{key:"Current",name:"current"}]},26071:(e,s,a)=>{a.d(s,{Z:()=>i});var n=a(51416),t=a(39230),l=a(80184);const i=e=>{let{tile:s,onTile:a,activeTile:i,customTileChild:r}=e;const{t:_}=(0,t.$G)();return(0,l.jsx)("div",{className:(null===s||void 0===s?void 0:s.key)===i?n.Z.tile_tile_active:n.Z.tile_tile,onClick:()=>a(null===s||void 0===s?void 0:s.key),style:r,children:_(null===s||void 0===s?void 0:s.name)})}},20659:(e,s,a)=>{a.d(s,{Z:()=>i});var n=a(51416),t=a(39230),l=a(80184);const i=e=>{let{label:s,customTileLabel:a,customTileContainer:i,customTileStyle:r,errorShow:_,children:c}=e;const{t:d}=(0,t.$G)();return(0,l.jsxs)("div",{className:n.Z.tile_container,style:r,children:[s&&(0,l.jsxs)("h6",{className:n.Z.tile_label,style:a,children:[d(s),_?(0,l.jsxs)("span",{style:{color:"rgb(231, 75, 75)"},children:["* ",d("form_require_label")]}):null]}),(0,l.jsx)("section",{className:n.Z.tile_tile_container,style:i,children:c})]})}},35483:(e,s,a)=>{a.d(s,{Z:()=>Z});var n=a(39230),t=a(49806),l=a(38857),i=a(21348),r=a(98684),_=a(90904),c=a(6758),d=a(80184);const h=e=>{var s;let{department:a,onSelect:n,selectedId:l}=e;return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)("div",{className:null!==l&&void 0!==l&&l.includes(null===a||void 0===a?void 0:a._id)?"".concat(t.Z.assign_show_list_each," ").concat(t.Z.assign_show_list_each_active):t.Z.assign_show_list_each,onClick:()=>{n(a)},children:[(0,d.jsx)("img",{src:"".concat(r.J7,"/department.svg"),alt:"department icon"}),(0,d.jsx)("div",{className:t.Z.assign_each_paragraph,children:(0,d.jsx)("h6",{children:null!==(s=null===a||void 0===a?void 0:a.dName)&&void 0!==s?s:""})})]}),(0,d.jsx)(_.Z,{customStyleBorder:{margin:"0"}})]})};var o=a(72791),m=a(20659),u=a(26071),v=a(11728),b=a(1669),x=a(55336),j=a(2651);const Z=e=>{let{onClose:s,onSelect:a,fid:Z,isType:y,isMultiple:f,selectedId:g,onDone:p}=e;const{t:k}=(0,n.$G)(),[S,C]=(0,o.useState)([]),[T,w]=(0,o.useState)(""),[A,B]=(0,o.useState)(""),{instituteAllDepartment:E,instituteAllDepartmentLoading:L}=(0,c.Jv)({fid:Z,skip:!Z});(0,o.useEffect)((()=>{null!==E&&void 0!==E&&E.length&&C(E)}),[null===E||void 0===E?void 0:E.length]);const R=e=>{a(e)},M=e=>{"ALL"===e&&a(e),w(e)};return(0,d.jsx)(l.Z,{onClose:s,children:(0,d.jsxs)("div",{className:t.Z.modal_container,children:[(0,d.jsx)(i.Z,{children:(0,d.jsxs)("div",{className:t.Z.modal_container_outer_header,children:[(0,d.jsx)("div",{className:t.Z.modal_container_header,children:(0,d.jsx)("h6",{children:k("select_department")})}),f?(0,d.jsxs)("div",{className:t.Z.modal_container_btn_container,children:[(0,d.jsxs)("div",{className:t.Z.modal_container_btn,onClick:()=>{p(),s()},children:[(null===g||void 0===g?void 0:g.length)>0?"".concat(null===g||void 0===g?void 0:g.length," "):"",k("select")]}),(0,d.jsx)("img",{src:"".concat(r.J7,"/close.svg"),alt:"close icon",onClick:s})]}):(0,d.jsx)("img",{src:"".concat(r.J7,"/close.svg"),alt:"close icon",onClick:s})]})}),(0,d.jsx)(_.Z,{}),(0,d.jsxs)(i.Z,{customStyle:{paddingTop:"0",paddingBottom:"1rem"},children:[(0,d.jsxs)("div",{className:t.Z.assign_search_container,style:{marginBottom:"0.8rem"},children:[(0,d.jsx)("input",{type:"text",placeholder:k("search"),className:t.Z.assign_search_input,onChange:e=>{if(e.target.value){let s=N(E,e.target.value);C(s),B(e.target.value)}else C(E),B("")}}),(0,d.jsx)("img",{src:"".concat(r.dB,"/navbar-search.svg"),alt:"search icon"})]}),y&&(0,d.jsx)(m.Z,{label:"department_type",children:null===v.sY||void 0===v.sY?void 0:v.sY.map((e=>(0,d.jsx)(u.Z,{tile:e,onTile:M,activeTile:T},null===e||void 0===e?void 0:e.key)))}),null===S||void 0===S?void 0:S.map((e=>(0,d.jsx)(h,{department:e,onSelect:R,selectedId:g},null===e||void 0===e?void 0:e._id))),L?A?(0,d.jsx)(x.Z,{}):(0,d.jsx)(b.Z,{}):A?!(null!==S&&void 0!==S&&S.length)&&(0,d.jsx)(j.Z,{customStyleContainer:{marginTop:"1.5rem"},title:"No department found related this search."}):!(null!==E&&void 0!==E&&E.length)&&(0,d.jsx)(j.Z,{customStyleContainer:{marginTop:"1.5rem"},title:"No department found."})]})]})})},N=(e,s)=>null===e||void 0===e?void 0:e.filter((e=>{var a;return null!==e&&void 0!==e&&null!==(a=e.dName)&&void 0!==a&&a.includes(s)?e:null}))},84395:(e,s,a)=>{a.r(s),a.d(s,{default:()=>w});var n=a(90904),t=(a(63687),a(21348)),l=a(39230),i=a(56959),r=a(51136),_=a(16871),c=a(72791),d=a(80184);const h=e=>{let{statitics:s}=e;const{t:a}=(0,l.$G)(),n=(0,_.s0)(),t=(0,_.UO)(),i=(0,_.TH)(),h=(0,c.useCallback)((e=>{if((null===e||void 0===e?void 0:e.length)>0){var s;let a="Institute"===(null===(s=i.state)||void 0===s?void 0:s.urlOffSet)?"/q/".concat(t.username,"/institute/member/admission?type=statistics-detail"):"/q/".concat(t.username,"/member/staff/admission?type=statistics-detail");n(a,{state:{...i.state,studentList:e}})}}),[n,t,i.state]);return(0,d.jsxs)("div",{className:r.Z.ss_table,children:[(0,d.jsxs)("section",{className:r.Z.ss_table_header,children:[(0,d.jsx)("div",{className:r.Z.ss_table_header_inner,children:(0,d.jsx)("h6",{className:r.Z.ss_table_header_h6,style:{width:"3.4rem"},children:a("sr_no")})}),(0,d.jsx)("div",{className:r.Z.ss_table_header_inner,children:(0,d.jsx)("h6",{className:r.Z.ss_table_header_h6,style:{width:"12rem"},children:a("classes")})}),(0,d.jsx)("div",{className:r.Z.ss_table_header_inner,children:(0,d.jsx)("h6",{className:r.Z.ss_table_header_h6,style:{width:"4.7rem"},children:a("strength")})}),null===o||void 0===o?void 0:o.map((e=>(0,d.jsxs)("div",{className:r.Z.ss_table_header_inner_fr,children:[(0,d.jsx)("div",{className:r.Z.ss_table_header_inner_fr_center,children:(0,d.jsx)("h6",{className:r.Z.ss_table_header_h6,style:{width:"4.7rem"},children:a(e.name)})}),(0,d.jsxs)("div",{className:r.Z.ss_table_header_inner_fr_inner,children:[(0,d.jsx)("h6",{className:r.Z.ss_table_header_inner_fr_inner_h6,children:"M"}),(0,d.jsx)("h6",{className:r.Z.ss_table_header_inner_fr_inner_h6_right,children:"F"})]})]},e.key))),(0,d.jsxs)("div",{className:r.Z.ss_table_header_inner_fr,children:[(0,d.jsx)("h6",{className:r.Z.ss_table_header_h6,children:a("minority")}),(0,d.jsx)("div",{className:r.Z.ss_table_minority,children:m.map((e=>(0,d.jsxs)("div",{className:r.Z.ss_table_minority_inner,children:[(0,d.jsx)("h6",{className:r.Z.ss_table_header_h6,style:{width:"5rem"},children:a(e.name)}),(0,d.jsxs)("div",{className:r.Z.ss_table_header_inner_fr_inner,children:[(0,d.jsx)("h6",{className:r.Z.ss_table_header_inner_fr_inner_h6,children:"M"}),(0,d.jsx)("h6",{className:r.Z.ss_table_header_inner_fr_inner_h6_right,children:"F"})]})]},e.key)))})]}),null===u||void 0===u?void 0:u.map((e=>(0,d.jsxs)("div",{className:r.Z.ss_table_header_inner_fr,children:[(0,d.jsx)("div",{className:r.Z.ss_table_header_inner_fr_center,children:(0,d.jsx)("h6",{className:r.Z.ss_table_header_h6,style:{width:"5rem"},children:a(e.name)})}),(0,d.jsxs)("div",{className:r.Z.ss_table_header_inner_fr_inner,children:[(0,d.jsx)("h6",{className:r.Z.ss_table_header_inner_fr_inner_h6,children:"M"}),(0,d.jsx)("h6",{className:r.Z.ss_table_header_inner_fr_inner_h6_right,children:"F"})]})]},e.key))),(0,d.jsxs)("div",{className:r.Z.ss_table_header_inner_fr,children:[(0,d.jsx)("div",{className:r.Z.ss_table_header_inner_fr_center,style:{borderRight:"1px solid #cacaca"},children:(0,d.jsx)("h6",{className:r.Z.ss_table_header_h6,style:{width:"8rem"},children:a("all_grand_total")})}),(0,d.jsxs)("div",{className:r.Z.ss_table_header_inner_fr_inner,children:[(0,d.jsx)("h6",{className:r.Z.ss_table_header_inner_fr_inner_h6,children:"M"}),(0,d.jsx)("h6",{className:r.Z.ss_table_header_inner_fr_inner_h6,children:"F"}),(0,d.jsx)("h6",{className:r.Z.ss_table_header_inner_fr_inner_h6_right,style:{borderRight:"1px solid #cacaca"},children:a("total")})]})]})]}),null===s||void 0===s?void 0:s.map(((e,s)=>(0,d.jsxs)("section",{className:r.Z.ss_table_header,style:{paddingTop:"0",paddingBottom:"1rem",height:"3.3rem"},children:[(0,d.jsx)("div",{className:r.Z.ss_table_header_inner,children:(0,d.jsx)("h6",{className:r.Z.ss_table_header_h6,style:{width:"3.4rem"},children:s+1})}),(0,d.jsx)("div",{className:r.Z.ss_table_header_inner,children:(0,d.jsx)("h6",{className:r.Z.ss_table_header_h6,style:{width:"12rem"},children:null===e||void 0===e?void 0:e.className})}),(0,d.jsx)("div",{className:r.Z.ss_table_header_inner,children:(0,d.jsx)("h6",{className:r.Z.ss_table_header_h6,style:{width:"4.7rem"},children:null===e||void 0===e?void 0:e.strength})}),null===v||void 0===v?void 0:v.map((s=>(0,d.jsx)("div",{className:r.Z.ss_table_header_inner_fr,children:(0,d.jsxs)("div",{className:r.Z.ss_table_header_inner_fr_inner,children:[(0,d.jsx)("h6",{className:r.Z.ss_table_header_inner_fr_inner_h6,style:{width:"calc(2.35rem)",cursor:"pointer",color:"#00f"},onClick:()=>h(e["".concat(s.name,"_m_arr")]),children:e["".concat(s.name,"_m")]}),(0,d.jsx)("h6",{className:r.Z.ss_table_header_inner_fr_inner_h6_right,style:{width:"calc(2.35rem)",cursor:"pointer",color:"#00f"},onClick:()=>h(e["".concat(s.name,"_f_arr")]),children:e["".concat(s.name,"_f")]})]})},s.name))),(0,d.jsx)("div",{className:r.Z.ss_table_header_inner_fr,children:(0,d.jsx)("div",{className:r.Z.ss_table_minority,children:b.map((s=>(0,d.jsx)("div",{className:r.Z.ss_table_minority_inner,children:(0,d.jsxs)("div",{className:r.Z.ss_table_header_inner_fr_inner,children:[(0,d.jsx)("h6",{className:r.Z.ss_table_header_inner_fr_inner_h6,style:{width:"calc(2.5rem)",cursor:"pointer",color:"#00f"},onClick:()=>h(e["".concat(s.name,"_m_arr")]),children:e["".concat(s.name,"_m")]}),(0,d.jsx)("h6",{className:r.Z.ss_table_header_inner_fr_inner_h6_right,style:{width:"calc(2.5rem)",cursor:"pointer",color:"#00f"},onClick:()=>h(e["".concat(s.name,"_f_arr")]),children:e["".concat(s.name,"_f")]})]})},s.name)))})}),null===x||void 0===x?void 0:x.map((s=>(0,d.jsx)("div",{className:r.Z.ss_table_header_inner_fr,children:(0,d.jsxs)("div",{className:r.Z.ss_table_header_inner_fr_inner,children:[(0,d.jsxs)("h6",{className:r.Z.ss_table_header_inner_fr_inner_h6,style:{width:"calc(2.5rem)",cursor:"pointer",color:"#00f"},onClick:()=>h(e["".concat(s.name,"_m_arr")]),children:[" ",e["".concat(s.name,"_m")]]}),(0,d.jsx)("h6",{className:r.Z.ss_table_header_inner_fr_inner_h6_right,style:{width:"calc(2.5rem)",cursor:"pointer",color:"#00f"},onClick:()=>h(e["".concat(s.name,"_f_arr")]),children:e["".concat(s.name,"_f")]})]})},s.name))),(0,d.jsx)("div",{className:r.Z.ss_table_header_inner_fr,children:(0,d.jsxs)("div",{className:r.Z.ss_table_header_inner_fr_inner,children:[(0,d.jsx)("h6",{className:r.Z.ss_table_header_inner_fr_inner_h6,style:{width:"calc(2.15rem)",cursor:"pointer",color:"#00f"},onClick:()=>h(e.boy_arr),children:e.boy}),(0,d.jsx)("h6",{className:r.Z.ss_table_header_inner_fr_inner_h6,style:{width:"calc(2.1rem)",cursor:"pointer",color:"#00f"},onClick:()=>h(e.girl_arr),children:e.girl}),(0,d.jsx)("h6",{className:r.Z.ss_table_header_inner_fr_inner_h6_right,style:{borderRight:"1px solid #cacaca",width:"calc(3.8rem)"},children:e.strength})]})})]})))]})},o=[{name:"general",key:0},{name:"sc",key:1},{name:"st",key:2},{name:"dt",key:3},{name:"nt",key:4},{name:"obc",key:5},{name:"sbc",key:6},{name:"muslim",key:7},{name:"maratha",key:8},{name:"ews",key:9},{name:"ph",key:10},{name:"jk_students",key:11},{name:"goins_students",key:12}],m=[{name:"sikh",key:"sikh"},{name:"jainism",key:"jainism"},{name:"buddhism",key:"buddhism"},{name:"christian",key:"christian"},{name:"parsi",key:"parsi"},{name:"jews",key:"jews"}],u=[{name:"hindu",key:"hindu"},{name:"muslim",key:"muslim"}],v=[{name:"general"},{name:"sc"},{name:"st"},{name:"dt"},{name:"nt"},{name:"obc"},{name:"sbc"},{name:"muslim"},{name:"maratha"},{name:"ews"},{name:"ph"},{name:"jk"},{name:"goins"}],b=[{name:"sikh"},{name:"jain"},{name:"budh"},{name:"christian"},{name:"parsi"},{name:"jews"}],x=[{name:"hindu"},{name:"muslim"}];var j=a(35483),Z=a(49806),N=a(38857),y=a(98684),f=a(6758);const g=e=>{var s;let{batch:a,onSelect:t}=e;return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)("div",{className:Z.Z.assign_show_list_each,onClick:()=>{t(a)},children:[(0,d.jsx)("img",{src:"".concat(y.J7,"/class.svg"),style:{borderRadius:"0"},alt:"batch icon"}),(0,d.jsx)("div",{className:Z.Z.assign_each_paragraph,children:(0,d.jsx)("h6",{children:null!==(s=null===a||void 0===a?void 0:a.batchName)&&void 0!==s?s:""})})]}),(0,d.jsx)(n.Z,{customStyleBorder:{margin:"0"}})]})};var p=a(55336),k=a(1669),S=a(2651);const C=e=>{let{onClose:s,onSelect:a,did:i}=e;const{t:r}=(0,l.$G)(),[_,h]=(0,c.useState)([]),[o,m]=(0,c.useState)([]),{departmentAllBatch:u,departmentAllBatchLoading:v}=(0,f._m)({did:i,skip:!i});(0,c.useEffect)((()=>{null!==u&&void 0!==u&&u.length&&h(u)}),[null===u||void 0===u?void 0:u.length]);const b=e=>{a(e)};return(0,d.jsx)(N.Z,{onClose:s,children:(0,d.jsxs)("div",{className:Z.Z.modal_container,children:[(0,d.jsx)(t.Z,{children:(0,d.jsxs)("div",{className:Z.Z.modal_container_outer_header,children:[(0,d.jsx)("div",{className:Z.Z.modal_container_header,children:(0,d.jsx)("h6",{children:r("select_batch")})}),(0,d.jsx)("img",{src:"".concat(y.J7,"/close.svg"),alt:"close icon",onClick:s})]})}),(0,d.jsx)(n.Z,{}),(0,d.jsxs)(t.Z,{customStyle:{paddingTop:"0",paddingBottom:"1rem"},children:[(0,d.jsxs)("div",{className:Z.Z.assign_search_container,style:{marginBottom:"0.8rem"},children:[(0,d.jsx)("input",{type:"text",placeholder:r("search"),className:Z.Z.assign_search_input,onChange:e=>{if(e.target.value){let s=T(u,e.target.value);h(s),m(e.target.value)}else h(u),m("")}}),(0,d.jsx)("img",{src:"".concat(y.dB,"/navbar-search.svg"),alt:"search icon"})]}),null===_||void 0===_?void 0:_.map((e=>(0,d.jsx)(g,{batch:e,onSelect:b},null===e||void 0===e?void 0:e._id))),v?o?(0,d.jsx)(p.Z,{}):(0,d.jsx)(k.Z,{}):o?!(null!==_&&void 0!==_&&_.length)&&(0,d.jsx)(S.Z,{customStyleContainer:{marginTop:"1.5rem"},title:"No batch found related this search."}):!(null!==u&&void 0!==u&&u.length)&&(0,d.jsx)(S.Z,{customStyleContainer:{marginTop:"1.5rem"},title:"No batch found."})]})]})})},T=(e,s)=>null===e||void 0===e?void 0:e.filter((e=>{var a;return null!==e&&void 0!==e&&null!==(a=e.batchName)&&void 0!==a&&a.includes(s)?e:null})),w=e=>{var s,a;let{fid:n}=e;const{t:r}=(0,l.$G)(),o=(0,_.s0)(),[m,u]=(0,c.useState)("DEPARTMENT"),[v,b]=(0,c.useState)(""),[x,Z]=(0,c.useState)(""),[N,y]=(0,c.useState)(!1),[g]=(0,f.Pl)(),[k,S]=(0,c.useState)([]);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(t.Z,{customStyle:{padding:"0",maxWidth:"870px"},children:[(0,d.jsxs)("h6",{className:i.Z.fm_title_heading,onClick:()=>u("OWN_DEPARTMENT"),children:[r("department_name")," "," : ",null!==(s=null===v||void 0===v?void 0:v.dName)&&void 0!==s?s:""," ",(0,d.jsx)("span",{children:null!==(a=null===x||void 0===x?void 0:x.batchName)&&void 0!==a?a:""})]}),(0,d.jsx)(h,{statitics:k})]}),"DEPARTMENT"===m||"OWN_DEPARTMENT"===m?(0,d.jsx)(j.Z,{onClose:()=>{"OWN_DEPARTMENT"===m?u(""):o(-1)},fid:n,onSelect:e=>{"ALL"===e?null!==e&&void 0!==e&&e._id&&(y((e=>!e)),g({bid:null===e||void 0===e?void 0:e._id}).then((e=>{var s,a,n;(null===(s=e.data)||void 0===s||null===(a=s.excel_list)||void 0===a?void 0:a.length)>0&&S(null===(n=e.data)||void 0===n?void 0:n.excel_list),y((e=>!e))})).catch({})):(b(e),u("BATCH"))}}):"BATCH"===m?(0,d.jsx)(C,{onClose:()=>{u("DEPARTMENT")},did:null===v||void 0===v?void 0:v._id,onSelect:e=>{u(""),null!==e&&void 0!==e&&e._id&&(Z(e),y((e=>!e)),g({bid:null===e||void 0===e?void 0:e._id}).then((e=>{var s,a,n;(null===(s=e.data)||void 0===s||null===(a=s.excel_list)||void 0===a?void 0:a.length)>0&&S(null===(n=e.data)||void 0===n?void 0:n.excel_list),y((e=>!e))})).catch({}))}}):null,N&&(0,d.jsx)(p.Z,{})]})}},51136:(e,s,a)=>{a.d(s,{Z:()=>n});const n={ss_table:"StudentStatitics_ss_table__-7nBy",ss_table_header:"StudentStatitics_ss_table_header__NzyU3",ss_table_header_inner:"StudentStatitics_ss_table_header_inner__+KnQt",ss_table_header_inner_height:"StudentStatitics_ss_table_header_inner_height__i-WEG",ss_table_header_inner_fr_center:"StudentStatitics_ss_table_header_inner_fr_center__UOsuz",ss_table_header_h6:"StudentStatitics_ss_table_header_h6__oiW8m",ss_table_header_inner_fr:"StudentStatitics_ss_table_header_inner_fr__oeUrE",ss_table_header_inner_fr_inner:"StudentStatitics_ss_table_header_inner_fr_inner__ea5i4",ss_table_header_inner_fr_inner_h6:"StudentStatitics_ss_table_header_inner_fr_inner_h6__UmtM3",ss_table_header_inner_fr_inner_h6_right:"StudentStatitics_ss_table_header_inner_fr_inner_h6_right__8rk-A",ss_table_minority:"StudentStatitics_ss_table_minority__NOKGI",ss_table_minority_inner:"StudentStatitics_ss_table_minority_inner__UUThA",fs_table_header:"StudentStatitics_fs_table_header__XOshT",fs_table_col:"StudentStatitics_fs_table_col__7wyrp",fs_table_header_inner:"StudentStatitics_fs_table_header_inner__-VeDl",fs_table_header_inner_h6:"StudentStatitics_fs_table_header_inner_h6__KW2p6",fs_table_col_inner:"StudentStatitics_fs_table_col_inner__2ps-A",osc_card:"StudentStatitics_osc_card__Kw794",osc_card_inner:"StudentStatitics_osc_card_inner__wIhc7",osc_container_inner:"StudentStatitics_osc_container_inner__zmV8C"}}}]);
//# sourceMappingURL=84395.353156eb.chunk.js.map