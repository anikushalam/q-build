"use strict";(self.webpackChunkmithkal_qviple=self.webpackChunkmithkal_qviple||[]).push([[98594],{11728:(e,l,n)=>{n.d(l,{F5:()=>s,TW:()=>i,Vf:()=>o,Wt:()=>t,XT:()=>d,sY:()=>a});const t=[{key:"ALL_BATCH",name:"all_batches"},{key:"ACTIVE_BATCH",name:"active_batches"}],a=[{key:"ALL",name:"all_departments"},{key:"PARTICULAR",name:"particular_department"}],i=[{key:"ALL_BATCH",name:"all_batches"},{key:"PARTICULAR_BATCH",name:"particular_batch"}],s=[{key:"All",name:"all_departments"},{key:"Particular",name:"particular_department"}],o=[{key:"All",name:"all_batches"},{key:"Current",name:"current"},{key:"Particular",name:"particular_batch"}],d=[{key:"All",name:"all_batches"},{key:"Current",name:"current"}]},33030:(e,l,n)=>{n.d(l,{Z:()=>s});var t=n(39230),a=n(80476),i=n(80184);const s=e=>{let{label:l,onAction:n,customStyle:s}=e;const{t:o}=(0,t.$G)();return(0,i.jsx)("div",{className:a.Z.btn_container,onClick:()=>{n()},style:s,children:o(l)})}},23984:(e,l,n)=>{n.d(l,{Z:()=>i});var t=n(80476),a=n(80184);const i=e=>{let{customStyle:l,children:n}=e;return(0,a.jsx)("div",{className:t.Z.btn_wrapper,style:l,children:n})}},26071:(e,l,n)=>{n.d(l,{Z:()=>s});var t=n(51416),a=n(39230),i=n(80184);const s=e=>{let{tile:l,onTile:n,activeTile:s,customTileChild:o}=e;const{t:d}=(0,a.$G)();return(0,i.jsx)("div",{className:(null===l||void 0===l?void 0:l.key)===s?t.Z.tile_tile_active:t.Z.tile_tile,onClick:()=>n(null===l||void 0===l?void 0:l.key),style:o,children:d(null===l||void 0===l?void 0:l.name)})}},20659:(e,l,n)=>{n.d(l,{Z:()=>s});var t=n(51416),a=n(39230),i=n(80184);const s=e=>{let{label:l,customTileLabel:n,customTileContainer:s,customTileStyle:o,errorShow:d,children:r}=e;const{t:c}=(0,a.$G)();return(0,i.jsxs)("div",{className:t.Z.tile_container,style:o,children:[l&&(0,i.jsxs)("h6",{className:t.Z.tile_label,style:n,children:[c(l),d?(0,i.jsxs)("span",{style:{color:"rgb(231, 75, 75)"},children:["* ",c("form_require_label")]}):null]}),(0,i.jsx)("section",{className:t.Z.tile_tile_container,style:s,children:r})]})}},35483:(e,l,n)=>{n.d(l,{Z:()=>j});var t=n(39230),a=n(49806),i=n(38857),s=n(21348),o=n(98684),d=n(90904),r=n(6758),c=n(80184);const _=e=>{var l;let{department:n,onSelect:t,selectedId:i}=e;return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)("div",{className:null!==i&&void 0!==i&&i.includes(null===n||void 0===n?void 0:n._id)?"".concat(a.Z.assign_show_list_each," ").concat(a.Z.assign_show_list_each_active):a.Z.assign_show_list_each,onClick:()=>{t(n)},children:[(0,c.jsx)("img",{src:"".concat(o.J7,"/department.svg"),alt:"department icon"}),(0,c.jsx)("div",{className:a.Z.assign_each_paragraph,children:(0,c.jsx)("h6",{children:null!==(l=null===n||void 0===n?void 0:n.dName)&&void 0!==l?l:""})})]}),(0,c.jsx)(d.Z,{customStyleBorder:{margin:"0"}})]})};var v=n(72791),u=n(20659),m=n(26071),h=n(11728),f=n(1669),g=n(55336),x=n(2651);const j=e=>{let{onClose:l,onSelect:n,fid:j,isType:Z,isMultiple:S,selectedId:y,onDone:N}=e;const{t:b}=(0,t.$G)(),[C,A]=(0,v.useState)([]),[k,T]=(0,v.useState)(""),[w,I]=(0,v.useState)(""),{instituteAllDepartment:B,instituteAllDepartmentLoading:L}=(0,r.Jv)({fid:j,skip:!j});(0,v.useEffect)((()=>{null!==B&&void 0!==B&&B.length&&A(B)}),[null===B||void 0===B?void 0:B.length]);const P=e=>{n(e)},F=e=>{"ALL"===e&&n(e),T(e)};return(0,c.jsx)(i.Z,{onClose:l,children:(0,c.jsxs)("div",{className:a.Z.modal_container,children:[(0,c.jsx)(s.default,{children:(0,c.jsxs)("div",{className:a.Z.modal_container_outer_header,children:[(0,c.jsx)("div",{className:a.Z.modal_container_header,children:(0,c.jsx)("h6",{children:b("select_department")})}),S?(0,c.jsxs)("div",{className:a.Z.modal_container_btn_container,children:[(0,c.jsxs)("div",{className:a.Z.modal_container_btn,onClick:()=>{N(),l()},children:[(null===y||void 0===y?void 0:y.length)>0?"".concat(null===y||void 0===y?void 0:y.length," "):"",b("select")]}),(0,c.jsx)("img",{src:"".concat(o.J7,"/close.svg"),alt:"close icon",onClick:l})]}):(0,c.jsx)("img",{src:"".concat(o.J7,"/close.svg"),alt:"close icon",onClick:l})]})}),(0,c.jsx)(d.Z,{}),(0,c.jsxs)(s.default,{customStyle:{paddingTop:"0",paddingBottom:"1rem"},children:[(0,c.jsxs)("div",{className:a.Z.assign_search_container,style:{marginBottom:"0.8rem"},children:[(0,c.jsx)("input",{type:"text",placeholder:b("search"),className:a.Z.assign_search_input,onChange:e=>{if(e.target.value){let l=p(B,e.target.value);A(l),I(e.target.value)}else A(B),I("")}}),(0,c.jsx)("img",{src:"".concat(o.dB,"/navbar-search.svg"),alt:"search icon"})]}),Z&&(0,c.jsx)(u.Z,{label:"department_type",children:null===h.sY||void 0===h.sY?void 0:h.sY.map((e=>(0,c.jsx)(m.Z,{tile:e,onTile:F,activeTile:k},null===e||void 0===e?void 0:e.key)))}),null===C||void 0===C?void 0:C.map((e=>(0,c.jsx)(_,{department:e,onSelect:P,selectedId:y},null===e||void 0===e?void 0:e._id))),L?w?(0,c.jsx)(g.default,{}):(0,c.jsx)(f.Z,{}):w?!(null!==C&&void 0!==C&&C.length)&&(0,c.jsx)(x.Z,{customStyleContainer:{marginTop:"1.5rem"},title:"No department found related this search."}):!(null!==B&&void 0!==B&&B.length)&&(0,c.jsx)(x.Z,{customStyleContainer:{marginTop:"1.5rem"},title:"No department found."})]})]})})},p=(e,l)=>null===e||void 0===e?void 0:e.filter((e=>{var n;return null!==e&&void 0!==e&&null!==(n=e.dName)&&void 0!==n&&n.includes(l)?e:null}))},98594:(e,l,n)=>{n.r(l),n.d(l,{default:()=>L});var t=n(98684),a=n(90904),i=n(33030),s=n(23984),o=n(63687),d=n(21348),r=n(91427),c=n(72791),_=n(39230),v=n(23441),u=n(56959),m=n(6758),h=n(55336),f=n(93638),g=n(61055),x=n(38857),j=n(35483),p=n(16925),Z=n(99183),S=n(57588),y=n(49806),N=n(80184);const b=e=>{var l;let{cls:n,onSelect:i,selectedId:s}=e;return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsxs)("div",{className:null!==s&&void 0!==s&&s.includes(null===n||void 0===n?void 0:n._id)?"".concat(y.Z.assign_show_list_each," ").concat(y.Z.assign_show_list_each_active):y.Z.assign_show_list_each,onClick:()=>{i(n)},children:[(0,N.jsx)("img",{src:"".concat(t.J7,"/class.svg"),alt:"class icon",style:{borderRadius:"0"}}),(0,N.jsx)("div",{className:y.Z.assign_each_paragraph,children:(0,N.jsx)("h6",{children:null!==(l=null===n||void 0===n?void 0:n.className)&&void 0!==l?l:""})})]}),(0,N.jsx)(a.Z,{customStyleBorder:{margin:"0"}})]})};var C=n(1669),A=n(2651);const k=e=>{var l,n,s,o;let{onClose:u,did:f,bid:g,onSave:j,clsListId:p,setClsListId:Z}=e;const{t:k}=(0,_.$G)(),[T,w]=(0,c.useState)(""),[I,B]=(0,c.useState)(1),[L,P]=(0,c.useState)(!0),[F,U]=(0,v.YD)({skip:T}),[D,E]=(0,c.useState)(null!==p&&void 0!==p?p:[]),[J,q]=(0,c.useState)([]),{departmentBatchAllClassMaster:R,departmentBatchAllClassMasterLoading:G}=(0,m.Rb)({data:{did:f,bid:g,page:I,limit:10,search:T},skip:f?!f:!g});(0,c.useEffect)((()=>{null!==p&&void 0!==p&&p.length&&E(p)}),[null===p||void 0===p?void 0:p.length]),(0,c.useEffect)((()=>{U&&L&&B((e=>e+1))}),[U,L]),(0,c.useEffect)((()=>{var e;if(null!==R&&void 0!==R&&null!==(e=R.list)&&void 0!==e&&e.length){var l;let e=(0,r.f)(null===R||void 0===R||null===(l=R.list)||void 0===l?void 0:l.length);P((()=>e))}}),[null===R||void 0===R||null===(l=R.list)||void 0===l?void 0:l.length]);const Y=(0,c.useCallback)((0,S.J)((e=>{B((()=>1)),w(e)}),1500),[]),$=e=>{null!==D&&void 0!==D&&D.includes(null===e||void 0===e?void 0:e._id)?(E((l=>null===l||void 0===l?void 0:l.filter((l=>l!==(null===e||void 0===e?void 0:e._id))))),Z((l=>null===l||void 0===l?void 0:l.filter((l=>l!==(null===e||void 0===e?void 0:e._id))))),q((l=>null===l||void 0===l?void 0:l.filter((l=>(null===l||void 0===l?void 0:l._id)!==(null===e||void 0===e?void 0:e._id)))))):(E((l=>[...l,null===e||void 0===e?void 0:e._id])),Z((l=>[...l,null===e||void 0===e?void 0:e._id])),q((l=>[...l,e])))};return(0,N.jsx)(x.Z,{onClose:u,children:(0,N.jsxs)("div",{className:y.Z.modal_container,children:[(0,N.jsx)(d.default,{children:(0,N.jsxs)("div",{className:y.Z.modal_container_outer_header,children:[(0,N.jsx)("div",{className:y.Z.modal_container_header,children:(0,N.jsx)("h6",{children:k("select_standard")})}),(0,N.jsxs)("div",{className:y.Z.modal_container_header_btn,children:[(0,N.jsx)(i.Z,{label:"select",onAction:()=>{let e=[];for(let l of J)for(let n of null===l||void 0===l?void 0:l.classDivision)e.push(null===n||void 0===n?void 0:n._id);j(e)}}),(0,N.jsx)("img",{src:"".concat(t.J7,"/close.svg"),alt:"close icon",onClick:u})]})]})}),(0,N.jsx)(a.Z,{}),(0,N.jsxs)(d.default,{customStyle:{paddingTop:"0",paddingBottom:"1rem"},children:[(0,N.jsxs)("div",{className:y.Z.assign_search_container,style:{marginBottom:"0.8rem"},children:[(0,N.jsx)("input",{type:"text",placeholder:k("search"),className:y.Z.assign_search_input,onChange:e=>{e.target.value?Y(e.target.value):(B((()=>1)),w(""))}}),(0,N.jsx)("img",{src:"".concat(t.dB,"/navbar-search.svg"),alt:"search icon"})]}),null===R||void 0===R||null===(n=R.list)||void 0===n?void 0:n.map(((e,l)=>{var n;return(null===R||void 0===R||null===(n=R.list)||void 0===n?void 0:n.length)===l+1?(0,N.jsx)("div",{ref:F,children:(0,N.jsx)(b,{cls:e,selectedId:D,onSelect:$})},null===e||void 0===e?void 0:e._id):(0,N.jsx)(b,{cls:e,selectedId:D,onSelect:$},null===e||void 0===e?void 0:e._id)})),G?T?(0,N.jsx)(h.default,{}):(0,N.jsx)(C.Z,{}):T?0===(null===R||void 0===R||null===(s=R.list)||void 0===s?void 0:s.length)&&(0,N.jsx)(A.Z,{title:"No standard found related this search.",customStyleContainer:{marginTop:"1.5rem"}}):0===(null===R||void 0===R||null===(o=R.list)||void 0===o?void 0:o.length)&&(0,N.jsx)(A.Z,{title:"No standard.",customStyleContainer:{marginTop:"1.5rem"}})]})]})})},T=e=>{let{fid:l,onClose:n}=e;const{t:i}=(0,_.$G)(),[s,o]=(0,c.useState)("DEPARTMENT"),[r,v]=(0,c.useState)({feeName:"",feeAmount:"",feeDate:""}),[u,S]=(0,c.useState)(""),[y,b]=(0,c.useState)(!1),[C,A]=(0,c.useState)(""),[T]=(0,m.yK)(),[w,I]=(0,c.useState)([]),[B,L]=(0,c.useState)([]),P=e=>{"feeAmount"===e.target.name?v((l=>({...l,feeAmount:+e.target.value}))):v((l=>({...l,[e.target.name]:e.target.value})))};return(0,N.jsx)(N.Fragment,{children:s?"DEPARTMENT"===s?(0,N.jsx)(j.Z,{onClose:n,fid:l,onSelect:e=>{A(e),o("CLASSES")}}):(0,N.jsx)(k,{onClose:()=>o("DEPARTMENT"),did:null===C||void 0===C?void 0:C._id,bid:null===C||void 0===C?void 0:C.departmentSelectBatch,onSave:e=>{L(e),o("")},clsListId:w,setClsListId:I}):(0,N.jsx)(x.Z,{onClose:n,children:(0,N.jsxs)("div",{className:p.Z.modal_container,children:[(0,N.jsx)(d.default,{children:(0,N.jsxs)("div",{className:p.Z.modal_container_outer_header,children:[(0,N.jsx)("div",{className:p.Z.modal_container_header,children:(0,N.jsx)("h6",{children:i("create_new_fees")})}),(0,N.jsx)("img",{src:"".concat(t.J7,"/close.svg"),alt:"close icon",onClick:()=>o("CLASSES")})]})}),(0,N.jsx)(a.Z,{}),(0,N.jsxs)(d.default,{customStyle:{paddingTop:"0"},children:[(0,N.jsx)(g.Z,{label:i("fees_name"),placeholder:i("fees_name_placeholder"),name:"feeName",value:r.feeName,type:"text",onChange:P,errorShow:u.feeName}),(0,N.jsx)(g.Z,{label:i("amount"),placeholder:i("amount_placeholder"),name:"feeAmount",value:r.feeAmount,type:"text",onChange:P,errorShow:u.feeAmount}),(0,N.jsx)(f.Z,{label:"save",onAction:()=>{let e=(0,Z.l)(r,["feeDate"]);(0,Z.x)(e)?(()=>{if(l&&(null===B||void 0===B?void 0:B.length)>0){let e=(new Date).toISOString(),t="".concat(null===e||void 0===e?void 0:e.substring(0,4),"-").concat(null===e||void 0===e?void 0:e.substring(5,7),"-").concat(null===e||void 0===e?void 0:e.substring(8,10));b((e=>!e)),T({fid:l,inernalBody:{did:null===C||void 0===C?void 0:C._id,ClassId:B,feeName:r.feeName,feeAmount:r.feeAmount,feeDate:t}}).then((()=>{b((e=>!e)),n()})).catch((()=>{b((e=>!e))}))}})():S(e)}})]}),y&&(0,N.jsx)(h.default,{})]})})})};var w=n(1721),I=n(16871);const B=e=>{var l,n;let{fees:a}=e;const{t:i}=(0,_.$G)(),s=(0,I.TH)(),o=(0,I.UO)(),d=(0,I.s0)();return(0,N.jsxs)("div",{className:w.Z.ifc_container,onClick:()=>{var e,l;let n="Institute"===(null===(e=s.state)||void 0===e?void 0:e.urlOffSet)?"/q/".concat(o.username,"/institute/member/finance?type=internal-fee-detail"):"/q/".concat(o.username,"/member/staff/finance?type=internal-fee-detail");d(n,{state:{...s.state,fsid:null===a||void 0===a?void 0:a._id,feesName:null!==(l=null===a||void 0===a?void 0:a.feeName)&&void 0!==l?l:""}})},children:[(0,N.jsx)("img",{src:"".concat(t.J7,"/fees-card.svg"),alt:"fees icon"}),(0,N.jsxs)("div",{className:w.Z.ifc_container_inner,children:[(0,N.jsxs)("h6",{children:[i("rs_only")," ",null!==(l=null===a||void 0===a?void 0:a.feeAmount)&&void 0!==l?l:0,"/-"]}),(0,N.jsxs)("p",{children:[null!==(n=null===a||void 0===a?void 0:a.feeName)&&void 0!==n?n:""," "]})]})]})},L=e=>{var l,n,f,g;let{fid:x}=e;const{t:j}=(0,_.$G)(),[p,Z]=(0,c.useState)(""),[S,y]=(0,c.useState)(""),[b,k]=(0,c.useState)(1),[w,I]=(0,c.useState)(!0),[L,P]=(0,c.useState)(!1),[F,U]=(0,v.YD)({skip:p}),{financeAllInternalFee:D,financeAllInternalFeeLoading:E}=(0,m.kD)({data:{fid:x,page:b,limit:10,search:p},skip:!x});(0,c.useEffect)((()=>{U&&w&&k((e=>e+1))}),[U,w]),(0,c.useEffect)((()=>{var e;if(null!==D&&void 0!==D&&null!==(e=D.list)&&void 0!==e&&e.length){var l;let e=(0,r.f)(null===D||void 0===D||null===(l=D.list)||void 0===l?void 0:l.length);I((()=>e))}}),[null===D||void 0===D||null===(l=D.list)||void 0===l?void 0:l.length]);const J=()=>{P((e=>!e))};return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsxs)(o.default,{children:[(0,N.jsx)(d.default,{children:(0,N.jsxs)("div",{className:u.Z.fm_header_container,children:[(0,N.jsx)("h6",{children:j("internal_fees")}),(0,N.jsx)("div",{className:u.Z.fm_search,children:(0,N.jsx)("section",{className:u.Z.fm_search_container,children:(0,N.jsxs)("div",{className:u.Z.fm_search_container_inner,children:[(0,N.jsx)("img",{className:u.Z.fm_search_icon,alt:"search icon",src:"".concat(t.dB,"/navbar-search.svg")}),(0,N.jsx)("input",{type:"text",placeholder:j("search"),onChange:e=>{var l;!E&&(null===D||void 0===D||null===(l=D.list)||void 0===l?void 0:l.length)>=0&&y(e.target.value)},onKeyUp:e=>{"Enter"===e.key&&(k((()=>1)),Z(S))},value:S})]})})})]})}),(0,N.jsx)(a.Z,{}),(0,N.jsxs)(d.default,{customStyle:{paddingTop:"0"},children:[(0,N.jsx)(s.Z,{children:(0,N.jsx)(i.Z,{label:"create_new_fees",onAction:J})}),null===D||void 0===D||null===(n=D.list)||void 0===n?void 0:n.map(((e,l)=>{var n;return(null===D||void 0===D||null===(n=D.list)||void 0===n?void 0:n.length)===l+1?(0,N.jsx)("div",{ref:F,children:(0,N.jsx)(B,{fees:e})},null===e||void 0===e?void 0:e._id):(0,N.jsx)(B,{fees:e},null===e||void 0===e?void 0:e._id)})),E?p?(0,N.jsx)(h.default,{}):(0,N.jsx)(C.Z,{}):p?0===(null===D||void 0===D||null===(f=D.list)||void 0===f?void 0:f.length)&&(0,N.jsx)(A.Z,{customStyleContainer:{marginTop:"1.5rem"},title:"No internal fees found related this search."}):0===(null===D||void 0===D||null===(g=D.list)||void 0===g?void 0:g.length)&&(0,N.jsx)(A.Z,{customStyleContainer:{marginTop:"1.5rem"},title:"No internal fees added."})]})]}),L&&(0,N.jsx)(T,{onClose:J,fid:x})]})}},1721:(e,l,n)=>{n.d(l,{Z:()=>t});const t={ifc_container:"InternalFees_ifc_container__XhZX-",ifc_container_inner:"InternalFees_ifc_container_inner__FaBwZ",ifdl_heading:"InternalFees_ifdl_heading__gaTqK",ifdl_card:"InternalFees_ifdl_card__sAxqq"}},49806:(e,l,n)=>{n.d(l,{Z:()=>t});const t={modal_container:"PlateformUser_modal_container__tqwpY",modal_container_outer_header:"PlateformUser_modal_container_outer_header__HbF+9",modal_container_header:"PlateformUser_modal_container_header__QzyxM",modal_container_btn_container:"PlateformUser_modal_container_btn_container__3SJ8i",modal_container_header_btn:"PlateformUser_modal_container_header_btn__dWfwA",assign_search_container:"PlateformUser_assign_search_container__dJdYj",assign_search_input:"PlateformUser_assign_search_input__aFF28",assign_show_list_each:"PlateformUser_assign_show_list_each__co2b1",assign_show_list_each_active:"PlateformUser_assign_show_list_each_active__SWwFS",assign_each_paragraph:"PlateformUser_assign_each_paragraph__bDgq6",close_icon:"PlateformUser_close_icon__VXKXH",comfirm_box:"PlateformUser_comfirm_box__ntFD7",modal_container_btn:"PlateformUser_modal_container_btn__BWFB9"}}}]);
//# sourceMappingURL=98594.d338ec75.chunk.js.map