(self.webpackChunkmithkal_qviple=self.webpackChunkmithkal_qviple||[]).push([[93899,54035,20420,31743],{86411:(e,n,i)=>{"use strict";i.r(n),i.d(n,{default:()=>N});var t=i(63687),o=i(56959),l=i(21348),a=i(90904),d=i(39230),s=i(72791),c=i(23441),r=i(6758),_=i(1095),u=i(97892),m=i.n(u),v=i(82824),h=i(16871),x=i(43504),f=i(16925),p=i(80184);const j=e=>{var n,i,t,o,l,a,s,c,r,u,j,g,M,Y,Z,I;let{exemption:y}=e;const{t:N}=(0,d.$G)(),L=(0,h.UO)();return(0,p.jsx)(p.Fragment,{children:(0,p.jsxs)("div",{className:f.Z.card_container,children:[(0,p.jsx)("div",{className:f.Z.card_container_inner,style:{width:"50%"},children:(0,p.jsxs)("div",{className:f.Z.card_container_image,children:[null!==y&&void 0!==y&&null!==(n=y.student)&&void 0!==n&&n.studentProfilePhoto?(0,p.jsx)(x.rU,{to:"/q/".concat(L.username,"/student/profile"),state:{sid:null===y||void 0===y||null===(i=y.student)||void 0===i?void 0:i._id},children:(0,p.jsx)("img",{src:"".concat(_.yI,"/").concat(null===y||void 0===y||null===(t=y.student)||void 0===t?void 0:t.studentProfilePhoto),alt:"qr code"})}):null,(0,p.jsxs)("div",{className:f.Z.card_container_inner,children:[(0,p.jsx)("h6",{children:"".concat(null!==(o=null===y||void 0===y||null===(l=y.student)||void 0===l?void 0:l.studentFirstName)&&void 0!==o?o:""," ").concat(null!==y&&void 0!==y&&null!==(a=y.student)&&void 0!==a&&a.studentMiddleName?null===y||void 0===y||null===(s=y.student)||void 0===s?void 0:s.studentMiddleName:""," ").concat(null!==(c=null===y||void 0===y||null===(r=y.student)||void 0===r?void 0:r.studentLastName)&&void 0!==c?c:"")}),(0,p.jsx)("p",{children:N("admission_fees_paid")}),(0,p.jsx)("p",{children:"(".concat(null!==(u=null===y||void 0===y||null===(j=y.student)||void 0===j||null===(g=j.batches)||void 0===g?void 0:g.batchName)&&void 0!==u?u:"",")")})]})]})}),(0,p.jsxs)("div",{className:f.Z.card_container_inner,style:{width:"27%"},children:[(0,p.jsx)("p",{children:N("transaction_id")}),(0,p.jsx)("h6",{children:(null===y||void 0===y?void 0:y.fee_utr_reference)||"N/A"}),(0,p.jsxs)("p",{children:[" ",m()(null===y||void 0===y?void 0:y.fee_transaction_date).format("DD MMM YYYY"),", ",(0,v.J)(null===y||void 0===y?void 0:y.fee_transaction_date,"LT")]})]}),(0,p.jsxs)("div",{className:f.Z.card_container_inner,style:{width:"15%"},children:[(0,p.jsxs)("p",{children:[N("invoice_no")," ",null!==(M=null===y||void 0===y?void 0:y.invoice_count)&&void 0!==M?M:""]}),(0,p.jsxs)("h6",{children:[N("rs_only")," ",null!==(Y=null===y||void 0===y?void 0:y.fee_payment_amount)&&void 0!==Y?Y:0]}),(0,p.jsxs)("p",{children:[N("rs_only")," ",null!==(Z=null===y||void 0===y||null===(I=y.student)||void 0===I?void 0:I.admissionPaidFeeCount)&&void 0!==Z?Z:0]})]})]})})};var g=i(98684),M=i(91427),Y=i(1669),Z=i(2651),I=i(55336),y=i(93638);const N=e=>{var n,i,u,m;let{fid:v,exemptBalance:h}=e;const{t:x}=(0,d.$G)(),[f,N]=(0,s.useState)(!1),[L,D]=(0,s.useState)(""),[k,w]=(0,s.useState)(""),[S,T]=(0,s.useState)(1),[b,A]=(0,s.useState)(!0),[P,q]=(0,c.YD)({skip:L}),[C]=(0,r.SU)(),{financeAllExemption:E,financeAllExemptionLoading:F}=(0,r.xm)({data:{fid:v,page:S,limit:10},skip:!v});(0,s.useEffect)((()=>{q&&b&&T((e=>e+1))}),[q,b]),(0,s.useEffect)((()=>{var e;if(null!==E&&void 0!==E&&null!==(e=E.list)&&void 0!==e&&e.length){var n;let e=(0,M.f)(null===E||void 0===E||null===(n=E.list)||void 0===n?void 0:n.length);A((()=>e))}}),[null===E||void 0===E||null===(n=E.list)||void 0===n?void 0:n.length]);return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)(t.default,{children:[(0,p.jsx)(l.Z,{children:(0,p.jsxs)("div",{className:o.Z.fm_header_container,children:[(0,p.jsx)("h6",{children:x("exemption_unrecovered")}),(0,p.jsxs)("div",{className:o.Z.fm_search,children:[(0,p.jsx)("section",{className:o.Z.fm_search_container,children:(0,p.jsxs)("div",{className:o.Z.fm_search_container_inner,children:[(0,p.jsx)("img",{className:o.Z.fm_search_icon,alt:"search icon",src:"".concat(g.dB,"/navbar-search.svg")}),(0,p.jsx)("input",{type:"text",placeholder:x("search"),onChange:e=>{var n;!F&&(null===E||void 0===E||null===(n=E.list)||void 0===n?void 0:n.length)>=0&&w(e.target.value)},onKeyUp:e=>{"Enter"===e.key&&(T((()=>1)),D(k))},value:k})]})}),(0,p.jsx)(y.Z,{label:"export",customStyle:{paddingBlock:"0.4rem",margin:"0"},onAction:()=>{v&&(N((e=>!e)),C({fid:v}).then((e=>{var n;if(null!==e&&void 0!==e&&null!==(n=e.data)&&void 0!==n&&n.data){var i;N((e=>!e));const n=window.open("".concat(_.q2,"/").concat(null===e||void 0===e||null===(i=e.data)||void 0===i?void 0:i.data),"_blank","noopener,noreferrer");n&&(n.opener=null)}else N((e=>!e))})).catch({}))}})]})]})}),(0,p.jsx)(a.Z,{}),(0,p.jsxs)(l.Z,{customStyle:{paddingTop:"0"},children:[(0,p.jsxs)("div",{className:o.Z.fm_all_time_data_container,children:[(0,p.jsx)("p",{className:o.Z.fm_all_time_data,children:x("all_time_data")}),(0,p.jsxs)("h6",{className:o.Z.fm_total_amount,children:[x("total_amount")," ",x("rs_only")," ",null!==h&&void 0!==h?h:0]})]}),null===E||void 0===E||null===(i=E.list)||void 0===i?void 0:i.map(((e,n)=>{var i;return(null===E||void 0===E||null===(i=E.list)||void 0===i?void 0:i.length)===n+1?(0,p.jsx)("div",{ref:P,children:(0,p.jsx)(j,{exemption:e})},null===e||void 0===e?void 0:e._id):(0,p.jsx)(j,{exemption:e},null===e||void 0===e?void 0:e._id)})),F?L?(0,p.jsx)(I.Z,{}):(0,p.jsx)(Y.Z,{}):L?0===(null===E||void 0===E||null===(u=E.list)||void 0===u?void 0:u.length)&&(0,p.jsx)(Z.Z,{title:"No exemptions found related this search."}):0===(null===E||void 0===E||null===(m=E.list)||void 0===m?void 0:m.length)&&(0,p.jsx)(Z.Z,{title:"No exemptions added."})]})]}),f&&(0,p.jsx)(I.Z,{})]})}},82824:(e,n,i)=>{"use strict";i.d(n,{J:()=>d,Z:()=>s});var t=i(99893),o=i.n(t),l=i(97892),a=i.n(l);const d=(e,n)=>(a().extend(o()),a()(e).format(n)),s=(e,n,i)=>{var t;return a()()[e]("".concat(null===(t=a()(i))||void 0===t?void 0:t.format("YYYY-MM-DD")),n)}},99893:function(e){e.exports=function(){"use strict";var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"};return function(n,i,t){var o=i.prototype,l=o.format;t.en.formats=e,o.format=function(n){void 0===n&&(n="YYYY-MM-DDTHH:mm:ssZ");var i=this.$locale().formats,t=function(n,i){return n.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(n,t,o){var l=o&&o.toUpperCase();return t||i[o]||e[o]||i[l].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,n,i){return n||i.slice(1)}))}))}(n,void 0===i?{}:i);return l.call(this,t)}}}()},16925:(e,n,i)=>{"use strict";i.d(n,{Z:()=>t});const t={right:"Income_right__XnzYj",rightHead:"Income_rightHead__1rLc6",rightBody:"Income_rightBody__fGEC5",income_detail:"Income_income_detail__IWoJa",detailTop:"Income_detailTop__4JXuu",detailTopMid:"Income_detailTopMid__yc2yv",modal_container:"Income_modal_container__HiGr+",modal_container_outer_header:"Income_modal_container_outer_header__F9c7X",modal_container_header:"Income_modal_container_header__td-Fb",card_container:"Income_card_container__ewKhQ",card_container_image:"Income_card_container_image__5XloP",card_container_inner:"Income_card_container_inner__JBmxr",admission_fees_row:"Income_admission_fees_row__MPJCs",close_icon:"Income_close_icon__Ozq4u",student_message_container:"Income_student_message_container__8KnPc",student_message_container_inner:"Income_student_message_container_inner__mRYpD",usm_institute_container:"Income_usm_institute_container__4LkYt",usm_institute:"Income_usm_institute__hlzdF",date_select:"Income_date_select__D3VkU",gsf_star_container:"Income_gsf_star_container__7gdUs",afsi_container:"Income_afsi_container__7u06w",days_container:"Income_days_container__xq2RX",days_container_child:"Income_days_container_child__E30h2",days_container_child_active:"Income_days_container_child_active__y6eWZ"}}}]);
//# sourceMappingURL=93899.9324549f.chunk.js.map