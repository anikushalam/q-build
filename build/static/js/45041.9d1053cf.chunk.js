(self.webpackChunkmithkal_qviple=self.webpackChunkmithkal_qviple||[]).push([[45041],{61899:(e,t,l)=>{"use strict";l.d(t,{Z:()=>u});var o=l(93638),a=l(16925),i=l(1095),n=l(38857),s=l(21348),r=l(98684),d=l(90904),c=l(80184);const u=e=>{let{documentUrl:t,subUrl:l,fileName:u,onClose:m}=e;return(0,c.jsx)(n.Z,{onClose:m,children:(0,c.jsxs)("div",{className:a.Z.pdf_modal_container,children:[(0,c.jsx)(s.default,{children:(0,c.jsxs)("div",{className:a.Z.modal_container_outer_header,children:[(0,c.jsx)("div",{className:a.Z.modal_container_header,children:(0,c.jsx)("h6",{children:null!==u&&void 0!==u?u:""})}),(0,c.jsxs)("div",{className:a.Z.modal_container_header,children:[(0,c.jsx)("a",{href:"".concat(i.LS,"/").concat(t),target:"_blank",rel:"noopener noreferrer",children:(0,c.jsx)(o.Z,{label:"save",customStyle:{margin:"0",padding:"0.2rem 1rem"},onAction:()=>{}})}),(0,c.jsx)("img",{src:"".concat(r.J7,"/close.svg"),alt:"close icon",onClick:m})]})]})}),(0,c.jsx)(d.Z,{}),(0,c.jsx)(s.default,{children:(0,c.jsx)("iframe",{src:"".concat(l,"/").concat(t),style:{width:"55rem",height:"calc(100dvh - 80px)"}})})]})})}},26071:(e,t,l)=>{"use strict";l.d(t,{Z:()=>n});var o=l(51416),a=l(39230),i=l(80184);const n=e=>{let{tile:t,onTile:l,activeTile:n,customTileChild:s}=e;const{t:r}=(0,a.$G)();return(0,i.jsx)("div",{className:(null===t||void 0===t?void 0:t.key)===n?o.Z.tile_tile_active:o.Z.tile_tile,onClick:()=>l(null===t||void 0===t?void 0:t.key),style:s,children:r(null===t||void 0===t?void 0:t.name)})}},20659:(e,t,l)=>{"use strict";l.d(t,{Z:()=>n});var o=l(51416),a=l(39230),i=l(80184);const n=e=>{let{label:t,customTileLabel:l,customTileContainer:n,customTileStyle:s,errorShow:r,children:d}=e;const{t:c}=(0,a.$G)();return(0,i.jsxs)("div",{className:o.Z.tile_container,style:s,children:[t&&(0,i.jsxs)("h6",{className:o.Z.tile_label,style:l,children:[c(t),r?(0,i.jsxs)("span",{style:{color:"rgb(231, 75, 75)"},children:["* ",c("form_require_label")]}):null]}),(0,i.jsx)("section",{className:o.Z.tile_tile_container,style:n,children:d})]})}},17502:(e,t,l)=>{"use strict";l.d(t,{Z:()=>c});var o=l(6758),a=l(72791),i=l(39230),n=l(52245),s=l(98684),r=l(80184);const d=e=>{let{selectLabel:t,onClick:l,selectedValue:o,options:d,customStyleContainer:c,customLabelStyle:u,customListStyle:m,errorShow:_,defalutValue:v,viewAs:f,isFull:p}=e;const{t:h}=(0,i.$G)(),[y,x]=(0,a.useState)(!1),[j,k]=(0,a.useState)(""),b=()=>{x((e=>!e))};(0,a.useEffect)((()=>{"NORMAL_FILTER"===f&&k(v)}),[f,v]),(0,a.useEffect)((()=>{if("CUSTOM_FILTER"===f){let o="";for(let a of d)for(let i of v)if((null===a||void 0===a?void 0:a._id)===i){var e,t,l;let i=null!==(e=null!==(t=null!==(l=null===a||void 0===a?void 0:a.dName)&&void 0!==l?l:null===a||void 0===a?void 0:a.batchName)&&void 0!==t?t:null===a||void 0===a?void 0:a.className)&&void 0!==e?e:"";o=o?o+", "+i:i}k(o)}}),[f,v,d]);return(0,r.jsxs)("div",{className:n.Z.form_input_container,style:{...c},children:[(0,r.jsxs)("p",{className:n.Z.join_form_select_paragraph,style:{...u},children:[t,_&&(0,r.jsxs)("span",{style:{color:"red",marginLeft:"15px"},children:["* ",h("form_require_label")]})]}),(0,r.jsxs)("section",{className:n.Z.join_form_select_custom,onClick:b,children:[j?(0,r.jsx)("p",{className:n.Z.join_form_select_custom_paragraph,children:null!==j&&void 0!==j?j:""}):(0,r.jsx)("p",{className:n.Z.join_form_select_custom_paragraph,children:o}),y?(0,r.jsx)("img",{className:n.Z.join_form_select_custom_rotate_icon,src:"".concat(s.J7,"/down.svg"),alt:"categor icon"}):(0,r.jsx)("img",{className:n.Z.join_form_select_custom_icon,src:"".concat(s.J7,"/down.svg"),alt:"categor icon"})]}),y&&(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("section",{className:n.Z.join_form_select_custom_list,style:m,children:null===d||void 0===d?void 0:d.map(((e,t)=>{var o;return(0,r.jsx)("p",{onClick:()=>(e=>{var t;l(p?e:null===e||void 0===e?void 0:e._id),b(),k(null!==(t=null===e||void 0===e?void 0:e.finance_bank_account_name)&&void 0!==t?t:e)})(e),className:n.Z.join_form_select_custom_paragraph_option,children:null!==(o=null===e||void 0===e?void 0:e.finance_bank_account_name)&&void 0!==o?o:e},t)}))})})]})},c=e=>{var t;let{fid:l,onSelect:a,errorShow:n,viewAs:s,defalutValue:c,customStyleContainer:u,customListStyle:m}=e;const{t:_}=(0,i.$G)(),{financeAllBank:v}=(0,o.iB)({data:{fid:l,page:1,limit:1e3,search:""},skip:!l});return(0,r.jsx)(d,{selectLabel:_("bank_account"),selectedValue:_("bank_account_placeholder"),options:(null===v||void 0===v||null===(t=v.list)||void 0===t?void 0:t.length)>0?[...null===v||void 0===v?void 0:v.list]:[],onClick:a,isFull:!0,errorShow:n,defalutValue:c,viewAs:s,customStyleContainer:u,customListStyle:m})}},34336:(e,t,l)=>{"use strict";l.d(t,{Z:()=>c});var o=l(39230),a=l(72791),i=l(52245),n=l(98684),s=l(80184);const r=e=>{let{selectLabel:t,onClick:l,selectedValue:r,options:d,customStyleContainer:c,customLabelStyle:u,customListStyle:m,errorShow:_,defalutValue:v,isFull:f,isDenied:p}=e;const{t:h}=(0,o.$G)(),[y,x]=(0,a.useState)(!1),[j,k]=(0,a.useState)(""),b=()=>{p||x((e=>!e))};(0,a.useEffect)((()=>{k(v)}),[v]);return(0,s.jsxs)("div",{className:i.Z.form_input_container,style:{...c},children:[(0,s.jsxs)("p",{className:i.Z.join_form_select_paragraph,style:{...u},children:[t,_&&(0,s.jsxs)("span",{style:{color:"red",marginLeft:"15px"},children:["* ",h("form_require_label")]})]}),(0,s.jsxs)("section",{className:i.Z.join_form_select_custom,onClick:b,children:[j?(0,s.jsx)("p",{className:i.Z.join_form_select_custom_paragraph,children:null!==j&&void 0!==j?j:""}):(0,s.jsx)("p",{className:i.Z.join_form_select_custom_paragraph,children:r}),y?(0,s.jsx)("img",{className:i.Z.join_form_select_custom_rotate_icon,src:"".concat(n.J7,"/down.svg"),alt:"categor icon"}):(0,s.jsx)("img",{className:i.Z.join_form_select_custom_icon,src:"".concat(n.J7,"/down.svg"),alt:"categor icon"})]}),y&&(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("section",{className:i.Z.join_form_select_custom_list,style:m,children:null===d||void 0===d?void 0:d.map(((e,t)=>{var o,a,n;return(0,s.jsxs)("p",{onClick:()=>(e=>{var t,o,a;l(f?e:null===e||void 0===e?void 0:e._id),b(),k("".concat(null!==(t=null===e||void 0===e?void 0:e.staffFirstName)&&void 0!==t?t:""," ").concat(null!==(o=null===e||void 0===e?void 0:e.staffMiddleName)&&void 0!==o?o:""," ").concat(null!==(a=null===e||void 0===e?void 0:e.staffLastName)&&void 0!==a?a:""))})(e),className:i.Z.join_form_select_custom_paragraph_option,children:[null!==(o=null===e||void 0===e?void 0:e.staffFirstName)&&void 0!==o?o:""," ",null!==(a=null===e||void 0===e?void 0:e.staffMiddleName)&&void 0!==a?a:""," ",null!==(n=null===e||void 0===e?void 0:e.staffLastName)&&void 0!==n?n:""]},t)}))})})]})};var d=l(6758);const c=e=>{let{instituteId:t,onSelect:l,errorShow:a,defalutValue:i,isDenied:n,customStyleContainer:c}=e;const{t:u}=(0,o.$G)(),{financeCashierStaffList:m}=(0,d.bj)({data:{id:t},skip:!t});return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(r,{selectLabel:u("cashier"),selectedValue:u("select_cashier_placeholder"),options:(null===m||void 0===m?void 0:m.length)>0?m:[],onClick:l,isFull:!0,errorShow:a,defalutValue:i,isDenied:n,customStyleContainer:c})})}},45041:(e,t,l)=>{"use strict";l.r(t),l.d(t,{default:()=>O});var o=l(72791),a=l(39230),i=l(16871),n=l(43504),s=l(98684),r=l(63687),d=l(21348),c=l(90904),u=l(63162),m=l(56959),_=l(98967),v=l(60924),f=l(19056),p=l(17502),h=l(43997),y=l(99183),x=l(93638),j=l(6758),k=l(55336),b=l(61899),S=l(1095),g=l(34336),Z=l(20659),C=l(26071),N=l(80184);const L=e=>{var t,l,i,n,s,r,d,c;let{fid:u,instituteId:_}=e;const{t:L}=(0,a.$G)(),[T,M]=(0,o.useState)({bank:"",from:"",to:"",payment_type:"",daybook_type:"",staff:"",cashier_type:"ALL",root_daybook_type:""}),[A,Y]=(0,o.useState)(!1),[F,I]=(0,o.useState)(""),[D,B]=(0,o.useState)(""),[V]=(0,j.zh)(),[E]=(0,j.Qk)(),[O]=(0,j.RW)(),G=(e,t)=>{M((l=>({...l,[t]:(0,h.O_)(e)})))},H=e=>{M((t=>({...t,payment_type:"Total"===e?"BOTH":"Cash / Bank"===e?"CASH_BANK":e})))},U=e=>{M((t=>({...t,cashier_type:e,staff:""})))};return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsxs)("div",{className:m.Z.fm_header_start_container,style:{gap:"2%",flexWrap:"wrap"},children:[(0,N.jsx)(f.Z,{selectLabel:L("daybook_type"),selectedValue:L("daybook_type_placeholder"),options:["Normal Daybook","Summary Daybook"],onClick:e=>{M((t=>({...t,root_daybook_type:e})))},defalutValue:T.root_daybook_type,customStyleContainer:{width:"32%"},customListStyle:{position:"absolute",width:"100%",zIndex:"13",top:"5.4rem"},errorShow:F.root_daybook_type}),(0,N.jsx)(p.Z,{fid:u,onSelect:e=>{M((t=>({...t,bank:e})))},errorShow:F.bank,viewAs:"NORMAL_FILTER",defalutValue:null!==(t=null===T||void 0===T||null===(l=T.bank)||void 0===l?void 0:l.finance_bank_account_name)&&void 0!==t?t:"",customStyleContainer:{width:"32%"},customListStyle:{position:"absolute",width:"100%",zIndex:"13",top:"5.4rem"}}),"Summary Daybook"===T.root_daybook_type?null:(0,N.jsx)(f.Z,{selectLabel:L("fee_type"),selectedValue:L("fee_type_placeholder"),options:["Admission","Miscellaneous","Combined"],onClick:e=>{M((t=>({...t,daybook_type:e})))},defalutValue:T.daybook_type,customStyleContainer:{width:"32%"},customListStyle:{position:"absolute",width:"100%",zIndex:"13",top:"5.4rem"},errorShow:F.daybook_type}),(0,N.jsx)(v.Z,{label:L("from"),placeholder:L("please_select_from_date"),name:"from",value:T.from?(0,h.jh)(T.from):"",onChange:e=>G(e,"from"),errorShow:F.from,customFormInputContainer:{width:"32%"}}),(0,N.jsx)(v.Z,{label:L("to_only"),placeholder:L("please_select_to_date"),name:"to",value:T.to?(0,h.jh)(T.to):"",onChange:e=>G(e,"to"),errorShow:F.to,customFormInputContainer:{width:"32%"}}),"Miscellaneous"===T.daybook_type?(0,N.jsx)(f.Z,{selectLabel:L("payment_type"),selectedValue:L("please_select_payment_type"),options:["Payment Gateway - PG","By Cash"],onClick:H,defalutValue:T.payment_type,customStyleContainer:{width:"32%"},customListStyle:{position:"absolute",width:"100%",zIndex:"13",top:"5.4rem"},errorShow:F.payment_type}):(0,N.jsx)(f.Z,{selectLabel:L("payment_type"),selectedValue:L("please_select_payment_type"),options:["Payment Gateway / Online","By Cash","Cash / Bank","Total"],onClick:H,defalutValue:"BOTH"===T.payment_type?"Total":"CASH_BANK"===T.payment_type?"Cash / Bank":T.payment_type,customStyleContainer:{width:"32%"},customListStyle:{position:"absolute",width:"100%",zIndex:"13",top:"5.4rem"},errorShow:F.payment_type}),(0,N.jsx)(Z.Z,{label:"cashier_type",customTileStyle:{width:"49%"},children:null===w||void 0===w?void 0:w.map((e=>(0,N.jsx)(C.Z,{tile:e,onTile:U,activeTile:T.cashier_type},null===e||void 0===e?void 0:e.key)))}),"PARTICULAR"===T.cashier_type?(0,N.jsx)(g.Z,{onSelect:e=>{M((t=>({...t,staff:e})))},instituteId:_,defalutValue:null!==T&&void 0!==T&&T.staff?"".concat(null!==(i=null===T||void 0===T||null===(n=T.staff)||void 0===n?void 0:n.staffFirstName)&&void 0!==i?i:""," ").concat(null!==(s=null===T||void 0===T||null===(r=T.staff)||void 0===r?void 0:r.staffMiddleName)&&void 0!==s?s:""," ").concat(null!==(d=null===T||void 0===T||null===(c=T.staff)||void 0===c?void 0:c.staffLastName)&&void 0!==d?d:""):"",customStyleContainer:{width:"49%"}}):null]}),(0,N.jsx)(x.Z,{label:"view_report",onAction:()=>{var e;let t=[];t="Summary Daybook"===T.root_daybook_type?["staff","cashier_type","daybook_type"]:["staff","cashier_type"];let l=(0,y.l)(T,t);if((0,y.x)(l)&&u&&null!==(e=T.bank)&&void 0!==e&&e._id){var o,a;Y((e=>!e));let e="MISCELLENOUS",t=null;var i,n,s,r,d,c,m,_,v,f,p;if(null!==(o=T.bank)&&void 0!==o&&null!==(a=o.hostel)&&void 0!==a&&a._id)e="HOSTEL",t=null===(i=T.bank)||void 0===i||null===(n=i.hostel)||void 0===n?void 0:n._id;else"Admission"===T.daybook_type&&(e="ADMISSION");if("Summary Daybook"===T.root_daybook_type)O({fid:u,bodyParameter:{bank:null===(s=T.bank)||void 0===s?void 0:s._id,from:T.from,to:T.to,payment_type:"BOTH"===T.payment_type?"Total":"CASH_BANK"===T.payment_type?"Cash / Bank":T.payment_type,staff:null!==(r=null===(d=T.staff)||void 0===d?void 0:d._id)&&void 0!==r?r:""}}).then((e=>{var t;null!==e&&void 0!==e&&null!==(t=e.data)&&void 0!==t&&t.key&&setTimeout((()=>{var t;B(null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.key),Y((e=>!e))}),3e3)})).catch({});else if("Combined"===T.daybook_type)E({fid:u,bodyParameter:{bank:null===(c=T.bank)||void 0===c?void 0:c._id,from:T.from,to:T.to,payment_type:"BOTH"===T.payment_type?"Total":"CASH_BANK"===T.payment_type?"Cash / Bank":T.payment_type,staff:null!==(m=null===(_=T.staff)||void 0===_?void 0:_._id)&&void 0!==m?m:""}}).then((e=>{var t;null!==e&&void 0!==e&&null!==(t=e.data)&&void 0!==t&&t.key&&setTimeout((()=>{var t;B(null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.key),Y((e=>!e))}),3e3)})).catch({});else V({fid:u,bank:null===(v=T.bank)||void 0===v?void 0:v._id,from:T.from,to:T.to,payment_type:T.payment_type,flow:e,hid:t,staff:null!==(f=null===(p=T.staff)||void 0===p?void 0:p._id)&&void 0!==f?f:""}).then((e=>{var t;null!==e&&void 0!==e&&null!==(t=e.data)&&void 0!==t&&t.key&&setTimeout((()=>{var t;B(null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.key),Y((e=>!e))}),3e3)})).catch({})}else I(l)}}),A&&(0,N.jsx)(k.default,{}),D&&(0,N.jsx)(b.Z,{subUrl:S.Sd,documentUrl:D,fileName:D,onClose:()=>B("")})]})},w=[{key:"ALL",name:"all"},{key:"PARTICULAR",name:"particular_cashier"}];var T=l(1669),M=l(2651),A=l(82824),Y=l(97892),F=l.n(Y),I=l(72888);const D=e=>{var t,l,a;let{excel:i}=e;const[n,r]=(0,o.useState)(""),[d,c]=(0,o.useState)(!1),u=()=>{c((e=>!e))};return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsxs)("div",{className:I.Z.export_card,onClick:u,children:[(0,N.jsx)("img",{src:"".concat(s.J7,"/xsxl.svg"),className:I.Z.export_card_image,alt:"excel icon"}),(0,N.jsxs)("section",{className:I.Z.export_card_text,children:[(0,N.jsx)("h6",{children:null!==(t=null===i||void 0===i?void 0:i.excel_file_name)&&void 0!==t?t:""}),(0,N.jsxs)("div",{className:I.Z.export_card_date,children:[(0,N.jsx)("h6",{children:null!==(l=null===i||void 0===i||null===(a=i.bank)||void 0===a?void 0:a.finance_bank_account_name)&&void 0!==l?l:""}),(0,N.jsxs)("h6",{children:[F()(null===i||void 0===i?void 0:i.created_at).format("DD MMM YYYY"),","," ",(0,A.J)(null===i||void 0===i?void 0:i.created_at,"LT")]})]}),(0,N.jsxs)("div",{className:I.Z.export_card_date,children:[(0,N.jsxs)("h6",{children:["From : ",null===i||void 0===i?void 0:i.from," To ",null===i||void 0===i?void 0:i.to]}),(0,N.jsx)("h6",{children:"BOTH"===(null===i||void 0===i?void 0:i.payment_type)?"Total":"CASH_BANK"===(null===i||void 0===i?void 0:i.payment_type)?"Cash / Bank":null===i||void 0===i?void 0:i.payment_type})]})]})]}),d&&(0,N.jsx)(b.Z,{subUrl:S.Sd,documentUrl:null===i||void 0===i?void 0:i.excel_file,fileName:null===i||void 0===i?void 0:i.excel_file_name,onClose:u})]})};var B=l(23441),V=l(91427);const E=e=>{var t,l,i;let{fid:n}=e;const{t:r}=(0,a.$G)(),[d,c]=(0,o.useState)(""),[u,_]=(0,o.useState)(""),[v,f]=(0,o.useState)(1),[p,h]=(0,o.useState)(!0),[y,x]=(0,B.YD)({skip:d}),{financeAllDaybookFilterGenerated:b,financeAllDaybookFilterGeneratedLoading:S}=(0,j.$U)({data:{fid:n,page:v,limit:10,search:d},skip:!n});(0,o.useEffect)((()=>{x&&p&&f((e=>e+1))}),[x,p]),(0,o.useEffect)((()=>{var e;if(null!==b&&void 0!==b&&null!==(e=b.list)&&void 0!==e&&e.length){var t;let e=(0,V.f)(null===b||void 0===b||null===(t=b.list)||void 0===t?void 0:t.length);h((()=>e))}}),[null===b||void 0===b?void 0:b.list]);return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)("div",{className:m.Z.fm_search_full,children:(0,N.jsx)("section",{className:m.Z.fm_search_full_container,children:(0,N.jsxs)("div",{className:m.Z.fm_search_full_container_inner,children:[(0,N.jsx)("img",{className:m.Z.fm_search_full_icon,alt:"search icon",src:"".concat(s.dB,"/navbar-search.svg")}),(0,N.jsx)("input",{type:"text",placeholder:r("search"),onChange:e=>{var t;!S&&(null===b||void 0===b||null===(t=b.list)||void 0===t?void 0:t.length)>=0&&_(e.target.value)},onKeyUp:e=>{"Enter"===e.key&&(f((()=>1)),c(u))},value:u})]})})}),null===b||void 0===b||null===(t=b.list)||void 0===t?void 0:t.map(((e,t)=>{var l;return(null===b||void 0===b||null===(l=b.list)||void 0===l?void 0:l.length)===t+1?(0,N.jsx)("div",{ref:y,children:(0,N.jsx)(D,{excel:e})},null===e||void 0===e?void 0:e._id):(0,N.jsx)(D,{excel:e},null===e||void 0===e?void 0:e._id)})),S?d?(0,N.jsx)(k.default,{}):(0,N.jsx)(T.Z,{}):d?0===(null===b||void 0===b||null===(l=b.list)||void 0===l?void 0:l.length)&&(0,N.jsx)(M.Z,{customStyleContainer:{marginTop:"1.5rem"},title:"No daybook found related this search."}):0===(null===b||void 0===b||null===(i=b.list)||void 0===i?void 0:i.length)&&(0,N.jsx)(M.Z,{customStyleContainer:{marginTop:"1.5rem"},title:"No daybook added."})]})},O=e=>{let{fid:t,instituteId:l}=e;const{t:v}=(0,a.$G)(),f=(0,i.TH)(),p=(0,i.UO)(),h=(0,i.s0)(),[y]=(0,n.lr)(),x=(0,o.useCallback)((()=>{var e;let t="";t="Institute"===(null===(e=f.state)||void 0===e?void 0:e.urlOffSet)?"/q/".concat(p.username,"/institute/member/finance"):"/q/".concat(p.username,"/member/staff/finance"),h(t,{state:f.state})}),[h,f.state,p.username]);return(0,N.jsx)(N.Fragment,{children:(0,N.jsxs)(r.default,{children:[(0,N.jsx)(d.default,{children:(0,N.jsx)("div",{className:m.Z.fm_header_container,children:(0,N.jsxs)("div",{className:m.Z.fm_header_start_container,style:{gap:"0.2rem"},children:[(0,N.jsx)("img",{alt:"search icon",src:"".concat(s.Fk,"/back.svg"),style:{height:"2rem",width:"2rem"},onClick:x}),(0,N.jsx)("h6",{children:v("daybook")})]})})}),(0,N.jsx)(c.Z,{}),(0,N.jsx)(_.Z,{children:G.map((e=>{var t,l;return(0,N.jsx)(u.Z,{tab:e,isLink:!0,isActive:null===(t=e.groupIs)||void 0===t?void 0:t.includes(y.get("n")),parentState:f.state,url:"Institute"===(null===(l=f.state)||void 0===l?void 0:l.urlOffSet)?"/q/".concat(p.username,"/institute/member/finance?type=daybook").concat(e.urlKey):"/q/".concat(p.username,"/member/staff/finance?type=daybook").concat(e.urlKey)},null===e||void 0===e?void 0:e.id)}))}),(0,N.jsx)(c.Z,{customStyleBorder:{marginTop:"0"}}),(0,N.jsx)(d.default,{customStyle:{paddingTop:"0.2rem"},children:"history"===y.get("n")?(0,N.jsx)(E,{fid:t}):(0,N.jsx)(L,{fid:t,instituteId:l})})]})})},G=[{label:"daybook_filter",id:"daybook_filter",urlKey:"",groupIs:["",null]},{label:"daybook_history",id:"history",urlKey:"&n=history",groupIs:["history"]}]},82824:(e,t,l)=>{"use strict";l.d(t,{J:()=>s,Z:()=>r});var o=l(99893),a=l.n(o),i=l(97892),n=l.n(i);const s=(e,t)=>(n().extend(a()),n()(e).format(t)),r=(e,t,l)=>{var o;return n()()[e]("".concat(null===(o=n()(l))||void 0===o?void 0:o.format("YYYY-MM-DD")),t)}},99893:function(e){e.exports=function(){"use strict";var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"};return function(t,l,o){var a=l.prototype,i=a.format;o.en.formats=e,a.format=function(t){void 0===t&&(t="YYYY-MM-DDTHH:mm:ssZ");var l=this.$locale().formats,o=function(t,l){return t.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,o,a){var i=a&&a.toUpperCase();return o||l[a]||e[a]||l[i].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,l){return t||l.slice(1)}))}))}(t,void 0===l?{}:l);return i.call(this,o)}}}()},72888:(e,t,l)=>{"use strict";l.d(t,{Z:()=>o});const o={export_card:"FinanceExport_export_card__9AYtI",export_card_image:"FinanceExport_export_card_image__-1r1l",export_card_text:"FinanceExport_export_card_text__ZrB00",export_card_date:"FinanceExport_export_card_date__-dTOE",export_card_menu:"FinanceExport_export_card_menu__-xEgr"}}}]);
//# sourceMappingURL=45041.9d1053cf.chunk.js.map