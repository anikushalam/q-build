(self.webpackChunkmithkal_qviple=self.webpackChunkmithkal_qviple||[]).push([[59608],{11728:(e,l,t)=>{"use strict";t.d(l,{F5:()=>o,TW:()=>s,Vf:()=>a,Wt:()=>n,XT:()=>c,sY:()=>i});const n=[{key:"ALL_BATCH",name:"all_batches"},{key:"ACTIVE_BATCH",name:"active_batches"}],i=[{key:"ALL",name:"all_departments"},{key:"PARTICULAR",name:"particular_department"}],s=[{key:"ALL_BATCH",name:"all_batches"},{key:"PARTICULAR_BATCH",name:"particular_batch"}],o=[{key:"All",name:"all_departments"},{key:"Particular",name:"particular_department"}],a=[{key:"All",name:"all_batches"},{key:"Current",name:"current"},{key:"Particular",name:"particular_batch"}],c=[{key:"All",name:"all_batches"},{key:"Current",name:"current"}]},31897:(e,l,t)=>{"use strict";t.d(l,{Z:()=>c});var n=t(72791),i=t(39230),s=t(52245),o=t(98684),a=t(80184);const c=e=>{let{selectLabel:l,onClick:t,selectedValue:c,options:d,customStyleContainer:r,customLabelStyle:u,customListStyle:_,errorShow:v,defalutValue:m,viewAs:h,isFull:f,isDenied:p}=e;const{t:x}=(0,i.$G)(),[j,b]=(0,n.useState)(!1),[g,y]=(0,n.useState)(""),A=()=>{p||b((e=>!e))};(0,n.useEffect)((()=>{"NORMAL_FILTER"===h&&y(m)}),[h,m]),(0,n.useEffect)((()=>{if("CUSTOM_FILTER"===h){let n="";for(let i of d)for(let s of m)if((null===i||void 0===i?void 0:i._id)===s){var e,l,t;let s=null!==(e=null!==(l=null!==(t=null===i||void 0===i?void 0:i.dName)&&void 0!==t?t:null===i||void 0===i?void 0:i.batchName)&&void 0!==l?l:null===i||void 0===i?void 0:i.className)&&void 0!==e?e:"";n=n?n+", "+s:s}y(n)}}),[h,m,d]);return(0,a.jsxs)("div",{className:s.Z.form_input_container,style:{...r},children:[(0,a.jsxs)("p",{className:s.Z.join_form_select_paragraph,style:{...u},children:[l,v&&(0,a.jsxs)("span",{style:{color:"red",marginLeft:"15px"},children:["* ",x("form_require_label")]})]}),(0,a.jsxs)("section",{className:s.Z.join_form_select_custom,onClick:A,children:[g?(0,a.jsx)("p",{className:s.Z.join_form_select_custom_paragraph,children:null!==g&&void 0!==g?g:""}):(0,a.jsx)("p",{className:s.Z.join_form_select_custom_paragraph,children:c}),j?(0,a.jsx)("img",{className:s.Z.join_form_select_custom_rotate_icon,src:"".concat(o.J7,"/down.svg"),alt:"categor icon"}):(0,a.jsx)("img",{className:s.Z.join_form_select_custom_icon,src:"".concat(o.J7,"/down.svg"),alt:"categor icon"})]}),j&&(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("section",{className:s.Z.join_form_select_custom_list,style:_,children:null===d||void 0===d?void 0:d.map(((e,l)=>{var n;return(0,a.jsx)("p",{onClick:()=>(e=>{var l;t(f?e:null===e||void 0===e?void 0:e._id),A(),y(null!==(l=null===e||void 0===e?void 0:e.dName)&&void 0!==l?l:e)})(e),className:s.Z.join_form_select_custom_paragraph_option,children:null!==(n=null===e||void 0===e?void 0:e.dName)&&void 0!==n?n:e},l)}))})})]})}},4339:(e,l,t)=>{"use strict";t.r(l),t.d(l,{default:()=>M});var n=t(72791),i=t(39230),s=t(56959),o=t(63687),a=t(21348),c=t(90904),d=t(55336),r=t(98684),u=t(93638),_=t(48293),v=t(16925),m=t(39896),h=t(24620),f=t(72261),p=t(17502),x=t(6758),j=t(20659),b=t(26071),g=t(11728),y=t(80184);const A=e=>{let{onClose:l,fid:t,instituteId:s,onRefetch:o}=e;const{t:A}=(0,i.$G)(),[L,Z]=(0,n.useState)({activity_status:"",all_depart:"",batch_status:"",master:[],batch:"",depart:"",bank:"",single_student:""}),[k,C]=(0,n.useState)(!1),[S]=(0,x.wL)(),T=(0,n.useCallback)((e=>{null!==e&&void 0!==e&&e._id&&Z((l=>({...l,all_depart:"PARTICULAR",depart:null===e||void 0===e?void 0:e._id})))}),[]),N=(0,n.useCallback)((e=>{null!==e&&void 0!==e&&e._id?Z((l=>({...l,batch_status:"PARTICULAR_BATCH",batch:null===e||void 0===e?void 0:e._id}))):Z((e=>({...e,batch_status:"ALL_BATCH",batch:""})))}),[]),Y=(0,n.useCallback)((e=>{Z((l=>({...l,master:[null===e||void 0===e?void 0:e._id]})))}),[]),M=(0,n.useCallback)((e=>{Z((l=>({...l,bank:null===e||void 0===e?void 0:e._id})))}),[]),U=e=>{e===L.activity_status?Z((e=>({...e,activity_status:"",batch:""}))):Z((l=>({...l,activity_status:e,batch:""})))},R=e=>{Z((l=>({...l,all_depart:e,depart:""})))},F=e=>{Z((l=>({...l,batch_status:e,batch:""})))};return(0,y.jsx)(_.Z,{onClose:l,children:(0,y.jsxs)("div",{className:v.Z.modal_container,children:[(0,y.jsx)(a.Z,{children:(0,y.jsxs)("div",{className:v.Z.modal_container_outer_header,children:[(0,y.jsx)("div",{className:v.Z.modal_container_header,children:(0,y.jsx)("h6",{children:A("overall_fee_statistics_filter")})}),(0,y.jsx)("img",{src:"".concat(r.J7,"/close.svg"),alt:"close icon",onClick:l})]})}),(0,y.jsx)(c.Z,{}),(0,y.jsxs)(a.Z,{customStyle:{paddingTop:"0"},children:[(0,y.jsx)(j.Z,{label:"activity_type",children:null===g.Wt||void 0===g.Wt?void 0:g.Wt.map((e=>(0,y.jsx)(b.Z,{tile:e,onTile:U,activeTile:L.activity_status},null===e||void 0===e?void 0:e.key)))}),L.activity_status?null:(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(j.Z,{label:"department_type",children:null===g.sY||void 0===g.sY?void 0:g.sY.map((e=>(0,y.jsx)(b.Z,{tile:e,onTile:R,activeTile:L.all_depart},null===e||void 0===e?void 0:e.key)))}),"PARTICULAR"===L.all_depart?(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(m.Z,{fid:t,onSelect:T,onlyDepartment:!0}),(0,y.jsx)(j.Z,{label:"batch_type",children:null===g.TW||void 0===g.TW?void 0:g.TW.map((e=>(0,y.jsx)(b.Z,{tile:e,onTile:F,activeTile:L.batch_status},null===e||void 0===e?void 0:e.key)))}),"PARTICULAR_BATCH"===L.batch_status?(0,y.jsx)(h.Z,{did:L.depart,onSelect:N,onlyBatch:!0}):null,(0,y.jsx)(f.Z,{did:L.depart,onSelect:Y,instituteId:s})]}):null,(0,y.jsx)(p.Z,{fid:t,onSelect:M})]}),(0,y.jsx)(u.Z,{label:"filter",onAction:()=>{t&&(C((e=>!e)),S({fid:t,moduleType:"OVERALL_VIEW",statisticsBody:L}).then((()=>{l(),o&&o(),C((e=>!e))})).catch({}))}})]}),k&&(0,y.jsx)(d.Z,{})]})})};var L=t(51136);const Z=e=>{let{label:l,amount:t,iconUrl:n,onAction:s,arr:o}=e;const{t:a}=(0,i.$G)();return(0,y.jsxs)("div",{className:L.Z.osc_card,onClick:()=>{s(o)},children:[(0,y.jsx)("img",{src:n,alt:"overal icon"}),(0,y.jsxs)("div",{className:L.Z.osc_card_inner,children:[(0,y.jsxs)("h6",{children:[a("rs_only")," ",null!==t&&void 0!==t?t:0]}),(0,y.jsx)("p",{children:a(l)})]})]})};var k=t(16871);const C=e=>{var l,t,i,s,o,a,c,d,u,_,v,m,h,f,p;let{fnanceOverallFeeStatistics:x}=e;const j=(0,k.s0)(),b=(0,k.UO)(),g=(0,k.TH)(),A=(0,n.useCallback)((e=>{if((null===e||void 0===e?void 0:e.length)>0){var l;let t="Institute"===(null===(l=g.state)||void 0===l?void 0:l.urlOffSet)?"/q/".concat(b.username,"/institute/member/finance?type=statistics-detail"):"/q/".concat(b.username,"/member/staff/finance?type=statistics-detail");j(t,{state:{...g.state,studentList:e,openAs:"OVERVIEW"}})}}),[j,b,g.state]);return(0,y.jsx)(y.Fragment,{children:(0,y.jsxs)("div",{className:L.Z.osc_container,children:[(0,y.jsxs)("div",{className:L.Z.osc_container_inner,children:[(0,y.jsx)(Z,{iconUrl:"".concat(r.J7,"/total-fees.svg"),amount:null!==(l=null===x||void 0===x?void 0:x.total_fees)&&void 0!==l?l:0,label:"total_fees_to_be_collected",onAction:A,arr:null===x||void 0===x?void 0:x.total_fees_arr}),(0,y.jsx)(Z,{iconUrl:"".concat(r.J7,"/total-collection.svg"),amount:null!==(t=null===x||void 0===x?void 0:x.total_collect)&&void 0!==t?t:0,label:"total_collection",onAction:A,arr:null===x||void 0===x?void 0:x.total_collect_arr}),(0,y.jsx)(Z,{iconUrl:"".concat(r.J7,"/total-collected.svg"),amount:null!==(i=null===x||void 0===x?void 0:x.total_pending)&&void 0!==i?i:0,label:"total_outstanding",onAction:A,arr:null===x||void 0===x?void 0:x.total_pending_arr})]}),(0,y.jsxs)("div",{className:L.Z.osc_container_inner,children:[(0,y.jsx)(Z,{iconUrl:"".concat(r.J7,"/student-collection.svg"),amount:null!==(s=null===x||void 0===x?void 0:x.fees_to_be_collected_student)&&void 0!==s?s:0,label:"fees_to_be_collected_from_student",onAction:A,arr:null===x||void 0===x?void 0:x.fees_to_be_collected_student_arr}),(0,y.jsx)(Z,{iconUrl:"".concat(r.J7,"/student-collection.svg"),amount:null!==(o=null===x||void 0===x?void 0:x.collect_by_student)&&void 0!==o?o:0,label:"collection_from_student",onAction:A,arr:null===x||void 0===x?void 0:x.collect_by_student_arr}),(0,y.jsx)(Z,{iconUrl:"".concat(r.J7,"/student-pending.svg"),amount:null!==(a=null===x||void 0===x?void 0:x.pending_by_student)&&void 0!==a?a:0,label:"outstanding_from_student",onAction:A,arr:null===x||void 0===x?void 0:x.pending_by_student_arr})]}),(0,y.jsxs)("div",{className:L.Z.osc_container_inner,children:[(0,y.jsx)(Z,{iconUrl:"".concat(r.J7,"/gov-recieve.svg"),amount:null!==(c=null===x||void 0===x?void 0:x.fees_to_be_collected_government)&&void 0!==c?c:0,label:"fees_to_be_receive_as_scholarship",onAction:A,arr:null===x||void 0===x?void 0:x.fees_to_be_collected_government_arr}),(0,y.jsx)(Z,{iconUrl:"".concat(r.J7,"/gov-recieve.svg"),amount:null!==(d=null===x||void 0===x?void 0:x.collect_by_government)&&void 0!==d?d:0,label:"collection_as_scholarship",onAction:A,arr:null===x||void 0===x?void 0:x.collect_by_government_arr}),(0,y.jsx)(Z,{iconUrl:"".concat(r.J7,"/gov-pending.svg"),amount:null!==(u=null===x||void 0===x?void 0:x.pending_from_government)&&void 0!==u?u:0,label:"outstanding_as_scholarship",onAction:A,arr:null===x||void 0===x?void 0:x.pending_from_government_arr})]}),(0,y.jsxs)("div",{className:L.Z.osc_container_inner,children:[(0,y.jsx)(Z,{iconUrl:"".concat(r.J7,"/excess-fee.svg"),amount:null!==(_=null===x||void 0===x?void 0:x.internal_fees)&&void 0!==_?_:0,label:"other_internal_fees_to_be_collected",onAction:()=>{}}),(0,y.jsx)(Z,{iconUrl:"".concat(r.J7,"/excess-fee.svg"),amount:null!==(v=null===x||void 0===x?void 0:x.internal_os_fees)&&void 0!==v?v:0,label:"outstanding_internal_fees",onAction:()=>{}}),(0,y.jsx)(Z,{iconUrl:"".concat(r.J7,"/excess-fee.svg"),amount:null!==(m=null===x||void 0===x?void 0:x.excess_fees)&&void 0!==m?m:0,label:"excess_fees_paid_by_student",onAction:()=>{}})]}),(0,y.jsxs)("div",{className:L.Z.osc_container_inner,children:[(0,y.jsx)(Z,{iconUrl:"".concat(r.J7,"/total-deposit.svg"),amount:null!==(h=null===x||void 0===x?void 0:x.total_deposits)&&void 0!==h?h:0,label:"deposits_to_be_refunded",onAction:()=>{}}),(0,y.jsx)(Z,{iconUrl:"".concat(r.J7,"/total-income.svg"),amount:null!==(f=null===x||void 0===x?void 0:x.incomes)&&void 0!==f?f:0,label:"other_incomes",onAction:()=>{}}),(0,y.jsx)(Z,{iconUrl:"".concat(r.J7,"/total-expense.svg"),amount:null!==(p=null===x||void 0===x?void 0:x.expenses)&&void 0!==p?p:0,label:"other_expenses",onAction:()=>{}})]})]})})};var S=t(97892),T=t.n(S),N=t(82824);const Y=e=>{var l,t,_,v;let{fid:m,instituteId:h}=e;const{t:f}=(0,i.$G)(),[p,j]=(0,n.useState)(""),[b,g]=(0,n.useState)(!1),[L]=(0,x.wL)(),{fnanceOverallFeeStatistics:Z,fnanceOverallFeeStatisticsRefetch:k}=(0,x.Z2)({fid:m,skip:!m}),S=(0,n.useCallback)((()=>{j("")}),[]);return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsxs)(o.Z,{children:[(0,y.jsx)(a.Z,{children:(0,y.jsx)("div",{className:s.Z.fm_header_container,children:(0,y.jsx)("h6",{children:f("overall_fees_statitics")})})}),(0,y.jsx)(c.Z,{}),(0,y.jsxs)(a.Z,{customStyle:{paddingTop:"0.2rem"},children:[(0,y.jsxs)("div",{className:s.Z.fm_fs_container,children:[(0,y.jsxs)("h6",{className:s.Z.fm_title_heading,style:{flex:"2 2"},children:[f("applied_filter")," "," : ",null!==Z&&void 0!==Z&&null!==(l=Z.fees_statistics_filter)&&void 0!==l&&l.department_all?null===Z||void 0===Z||null===(t=Z.fees_statistics_filter)||void 0===t?void 0:t.department_all:null!==Z&&void 0!==Z&&null!==(_=Z.fees_statistics_filter)&&void 0!==_&&_.batch_all?null===Z||void 0===Z||null===(v=Z.fees_statistics_filter)||void 0===v?void 0:v.batch_all:""]}),(0,y.jsxs)("div",{className:s.Z.fm_fs_container_inner,style:{flex:"1 1"},children:[(0,y.jsx)(u.Z,{label:"filter",onAction:()=>{j("FILTER")},customStyle:{margin:"0"}}),(0,y.jsxs)("div",{className:s.Z.fm_fs_refetch_container,onClick:()=>{var e,l,t,n,i,s,o,a,c,d,r,u,_,v,h,f,p,x,j;!m||null!==L&&void 0!==L&&L.loading_status||(g((e=>!e)),L({fid:m,moduleType:"OVERALL_VIEW",statisticsBody:{activity_status:null!==(e=null===Z||void 0===Z||null===(l=Z.fees_statistics_filter)||void 0===l||null===(t=l.bank_level)||void 0===t?void 0:t[0])&&void 0!==e?e:"",all_depart:null!==(n=null===Z||void 0===Z||null===(i=Z.fees_statistics_filter)||void 0===i?void 0:i.department_all)&&void 0!==n?n:"",batch_status:null!==(s=null===Z||void 0===Z||null===(o=Z.fees_statistics_filter)||void 0===o?void 0:o.batch_all)&&void 0!==s?s:"",master:null!==(a=null===Z||void 0===Z||null===(c=Z.fees_statistics_filter)||void 0===c||null===(d=c.master_level)||void 0===d?void 0:d[0])&&void 0!==a?a:[],batch:null!==(r=null===Z||void 0===Z||null===(u=Z.fees_statistics_filter)||void 0===u||null===(_=u.batch_level)||void 0===_?void 0:_[0])&&void 0!==r?r:"",depart:null!==(v=null===Z||void 0===Z||null===(h=Z.fees_statistics_filter)||void 0===h||null===(f=h.department_level)||void 0===f?void 0:f[0])&&void 0!==v?v:"",bank:null!==(p=null===Z||void 0===Z||null===(x=Z.fees_statistics_filter)||void 0===x||null===(j=x.bank_level)||void 0===j?void 0:j[0])&&void 0!==p?p:""}}).then((()=>{k(),g((e=>!e))})).catch({}))},children:[null!==L&&void 0!==L&&L.loading_status?(0,y.jsx)("img",{src:"".concat(r.Uw,"/loading.gif"),alt:"refetch icon"}):(0,y.jsx)("img",{src:"".concat(r.J7,"/refresh.svg"),alt:"refetch icon"}),(0,y.jsxs)("div",{className:s.Z.fm_fs_refetch_container_inner,children:[(0,y.jsx)("h6",{children:f("refetch_data")}),(0,y.jsxs)("p",{children:[f("last_updated")," : ",T()(null===Z||void 0===Z?void 0:Z.last_update).format("DD MMM YYYY"),", ",(0,N.J)(null===Z||void 0===Z?void 0:Z.last_update,"LT")]})]})]})]})]}),(0,y.jsx)(C,{fnanceOverallFeeStatistics:Z})]})]}),"FILTER"===p?(0,y.jsx)(A,{onClose:S,fid:m,instituteId:h,onRefetch:k}):null,b&&(0,y.jsx)(d.Z,{})]})},M=e=>{let{fid:l,instituteId:t}=e;return(0,y.jsx)(y.Fragment,{children:(0,y.jsx)(Y,{instituteId:t,fid:l})})}},24620:(e,l,t)=>{"use strict";t.d(l,{Z:()=>a});var n=t(6758),i=t(33880),s=t(39230),o=t(80184);const a=e=>{let{did:l,onSelect:t,onlyBatch:a,errorShow:c,defalutValue:d,isDenied:r}=e;const{t:u}=(0,s.$G)(),{departmentAllBatch:_}=(0,n._m)({did:l,skip:!l});return(0,o.jsx)(o.Fragment,{children:a?(0,o.jsx)(i.Z,{selectLabel:u("select_batch"),selectedValue:u("select_batch_placeholder"),options:(null===_||void 0===_?void 0:_.length)>0?_:[],onClick:t,isFull:!0,errorShow:c,defalutValue:d,isDenied:r}):(0,o.jsx)(i.Z,{selectLabel:u("select_batch"),selectedValue:u("select_batch_placeholder"),options:(null===_||void 0===_?void 0:_.length)>0?["ALL",..._]:["ALL"],onClick:t,isFull:!0,errorShow:c})})}},39896:(e,l,t)=>{"use strict";t.d(l,{Z:()=>a});var n=t(6758),i=t(31897),s=t(39230),o=t(80184);const a=e=>{let{fid:l,onSelect:t,onlyDepartment:a,errorShow:c,defalutValue:d,isDenied:r,customStyleContainer:u}=e;const{t:_}=(0,s.$G)(),{instituteAllDepartment:v}=(0,n.Jv)({fid:l,skip:!l});return(0,o.jsx)(o.Fragment,{children:a?(0,o.jsx)(i.Z,{selectLabel:_("select_department"),selectedValue:_("select_department_placeholder"),options:(null===v||void 0===v?void 0:v.length)>0?v:[],onClick:t,isFull:!0,errorShow:c,defalutValue:d,viewAs:"NORMAL_FILTER",isDenied:r,customStyleContainer:u}):(0,o.jsx)(i.Z,{selectLabel:_("select_department"),selectedValue:_("select_department_placeholder"),options:(null===v||void 0===v?void 0:v.length)>0?["ALL","By Bank","Particular Student",...v]:["ALL","By Bank","Particular Student"],onClick:t,isFull:!0,errorShow:c,customStyleContainer:u})})}},72261:(e,l,t)=>{"use strict";t.d(l,{Z:()=>a});var n=t(6758),i=t(40739),s=t(39230),o=t(80184);const a=e=>{let{instituteId:l,did:t,onSelect:a,errorShow:c,defalutValue:d,isDenied:r}=e;const{t:u}=(0,s.$G)(),{departmentAllClassMaster:_}=(0,n.lj)({data:{id:l,did:t},skip:l?!t:!l});return(0,o.jsx)(i.Z,{selectLabel:u("select_standard"),selectedValue:u("select_standard_placeholder"),options:(null===_||void 0===_?void 0:_.length)>0?[..._]:[],onClick:a,isFull:!0,errorShow:c,defalutValue:d,isDenied:r})}},82824:(e,l,t)=>{"use strict";t.d(l,{J:()=>a,Z:()=>c});var n=t(99893),i=t.n(n),s=t(97892),o=t.n(s);const a=(e,l)=>(o().extend(i()),o()(e).format(l)),c=(e,l,t)=>{var n;return o()()[e]("".concat(null===(n=o()(t))||void 0===n?void 0:n.format("YYYY-MM-DD")),l)}},99893:function(e){e.exports=function(){"use strict";var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"};return function(l,t,n){var i=t.prototype,s=i.format;n.en.formats=e,i.format=function(l){void 0===l&&(l="YYYY-MM-DDTHH:mm:ssZ");var t=this.$locale().formats,n=function(l,t){return l.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(l,n,i){var s=i&&i.toUpperCase();return n||t[i]||e[i]||t[s].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,l,t){return l||t.slice(1)}))}))}(l,void 0===t?{}:t);return s.call(this,n)}}}()}}]);
//# sourceMappingURL=59608.b72299c4.chunk.js.map