"use strict";(self.webpackChunkmithkal_qviple=self.webpackChunkmithkal_qviple||[]).push([[82416],{90904:(e,t,l)=>{l.d(t,{Z:()=>a});const n="BorderBottom_split_content__RVPoh";var o=l(80184);const a=e=>{let{customStyleBorder:t}=e;return(0,o.jsx)("hr",{className:n,style:t})}},93638:(e,t,l)=>{l.d(t,{Z:()=>i});var n=l(39230),o=l(80476),a=l(80184);const i=e=>{let{label:t,count:l,onAction:i,customStyle:_,isTranslate:s}=e;const{t:c}=(0,n.$G)();return s?(0,a.jsxs)("div",{className:o.Z.create_btn_container,onClick:i,style:_,children:[l>0?(0,a.jsxs)("span",{children:[l," "]}):null,t]}):(0,a.jsxs)("div",{className:o.Z.create_btn_container,onClick:i,style:_,children:[l>0?(0,a.jsxs)("span",{children:[l," "]}):null,c(t)]})}},61055:(e,t,l)=>{l.d(t,{Z:()=>_});var n=l(39230),o=l(52245),a=l(80184);const i=["tel","number"],_=e=>{let{label:t,name:l,msg:_,type:s,value:c,onChange:r,placeholder:d,maxLength:u,customFormInputContainer:m,customFormInputLabel:h,customFormInput:f,errorShow:v,disabled:p,children:x}=e;const{t:j}=(0,n.$G)();return(0,a.jsxs)("div",{className:o.Z.form_input_container,style:m,children:[t&&(0,a.jsxs)("label",{className:o.Z.form_input_label,style:h,htmlFor:l,children:[t,_?(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("span",{className:o.Z.form_input_label_error,children:[" "," "," ",_]})}):v?(0,a.jsxs)("span",{className:o.Z.form_input_label_error,children:["* ",j("form_require_label")]}):null,x]}),i.includes(s)?(0,a.jsx)("input",{className:o.Z.form_input,type:s,value:c,onChange:r,name:l,placeholder:d,maxLength:null!==u&&void 0!==u?u:100,disabled:p,style:f}):(0,a.jsx)("input",{className:o.Z.form_input,type:s,value:c,onChange:r,name:l,placeholder:d,disabled:p,style:f})]})}},26071:(e,t,l)=>{l.d(t,{Z:()=>i});var n=l(51416),o=l(39230),a=l(80184);const i=e=>{let{tile:t,onTile:l,activeTile:i,customTileChild:_}=e;const{t:s}=(0,o.$G)();return(0,a.jsx)("div",{className:(null===t||void 0===t?void 0:t.key)===i?n.Z.tile_tile_active:n.Z.tile_tile,onClick:()=>l(null===t||void 0===t?void 0:t.key),style:_,children:s(null===t||void 0===t?void 0:t.name)})}},20659:(e,t,l)=>{l.d(t,{Z:()=>i});var n=l(51416),o=l(39230),a=l(80184);const i=e=>{let{label:t,customTileLabel:l,customTileContainer:i,customTileStyle:_,children:s}=e;const{t:c}=(0,o.$G)();return(0,a.jsxs)("div",{className:n.Z.tile_container,style:_,children:[t&&(0,a.jsx)("h6",{className:n.Z.tile_label,style:l,children:c(t)}),(0,a.jsx)("section",{className:n.Z.tile_tile_container,style:i,children:s})]})}},63687:(e,t,l)=>{l.d(t,{Z:()=>a});var n=l(59393),o=l(80184);const a=e=>{let{customStyle:t,children:l}=e;return(0,o.jsx)("div",{className:n.Z.user_member_container_wrapper,style:t,children:l})}},21348:(e,t,l)=>{l.d(t,{Z:()=>a});var n=l(59393),o=l(80184);const a=e=>{let{customStyle:t,children:l}=e;return(0,o.jsx)("div",{className:n.Z.user_member_content_wrapper,style:t,children:l})}},99208:(e,t,l)=>{l.r(t),l.d(t,{default:()=>A});var n=l(39230),o=l(16871),a=l(43504),i=l(56959),_=l(63687),s=l(21348),c=l(90904),r=l(11163),d=l(97892),u=l.n(d),m=l(72791),h=l(57398),f=l(6758),v=l(91427),p=l(57588),x=l(55336),j=l(1669),y=l(2651),C=l(76266),Z=l(35517),g=l(20659),b=l(26071),S=l(93638),I=l(61055),N=l(6245),T=l(80184);const w=()=>{var e,t,l,a,r,d,u,h,f,v,p,j,y,w,U,F,k,D,P,A;const Y=(0,o.TH)(),{t:M}=(0,n.$G)(),[B,L]=(0,m.useState)({choose_tax_regime:"",tds_calculation:{income_from_sal:{actual_rent:0,other_allowances:0,salary_from_other:0},income_from_house:{income_from_hp:0,municiple_tax_paid:0,interest_self:0,interest_let_out:0},income_from_os:{income_from_other:0},deductions:{Sec_80C_80CCC_80CCD:0,Sec_80D:0,Sec_80G:0,Sec_80GG:0,Sec_80TTA:0,other:0}}}),[O,R]=(0,m.useState)(),[q]=(0,Z.FW)(),[E]=(0,Z.se)(),{oneStaffProfile:H,oneStaffProfileRefetch:$}=(0,N.CF)({sid:null===(e=Y.state)||void 0===e?void 0:e.staffId,skip:!(null!==(t=Y.state)&&void 0!==t&&t.staffId)});(0,m.useEffect)((()=>{var e;null!==(e=Y.state)&&void 0!==e&&e.staffId&&$()}),[null===(l=Y.state)||void 0===l?void 0:l.staffId,$]),(0,m.useEffect)((()=>{var e;if(null!==H&&void 0!==H&&null!==(e=H.staff)&&void 0!==e&&e.tds_calculation){var t,l,n,o,a,i,_,s,c,r,d,u,m,h,f,v,p,x,j,y,C,Z,g,b,S,I,N,T,w,G;let e=null===H||void 0===H||null===(t=H.staff)||void 0===t?void 0:t.tds_calculation;L({choose_tax_regime:null===H||void 0===H||null===(l=H.staff)||void 0===l?void 0:l.choose_tax_regime,tds_calculation:{income_from_sal:{actual_rent:null!==(n=null===e||void 0===e||null===(o=e.income_from_sal)||void 0===o?void 0:o.actual_rent)&&void 0!==n?n:0,other_allowances:null!==(a=null===e||void 0===e||null===(i=e.income_from_sal)||void 0===i?void 0:i.other_allowances)&&void 0!==a?a:0,salary_from_other:null!==(_=null===e||void 0===e||null===(s=e.income_from_sal)||void 0===s?void 0:s.salary_from_other)&&void 0!==_?_:0},income_from_house:{income_from_hp:null!==(c=null===e||void 0===e||null===(r=e.income_from_house)||void 0===r?void 0:r.income_from_hp)&&void 0!==c?c:0,municiple_tax_paid:null!==(d=null===e||void 0===e||null===(u=e.income_from_house)||void 0===u?void 0:u.municiple_tax_paid)&&void 0!==d?d:0,interest_self:null!==(m=null===e||void 0===e||null===(h=e.income_from_house)||void 0===h?void 0:h.interest_self)&&void 0!==m?m:0,interest_let_out:null!==(f=null===e||void 0===e||null===(v=e.income_from_house)||void 0===v?void 0:v.interest_let_out)&&void 0!==f?f:0},income_from_os:{income_from_other:null!==(p=null===e||void 0===e||null===(x=e.income_from_os)||void 0===x?void 0:x.income_from_other)&&void 0!==p?p:0},deductions:{Sec_80C_80CCC_80CCD:null!==(j=null===e||void 0===e||null===(y=e.deductions)||void 0===y?void 0:y.Sec_80C_80CCC_80CCD)&&void 0!==j?j:0,Sec_80D:null!==(C=null===e||void 0===e||null===(Z=e.deductions)||void 0===Z?void 0:Z.Sec_80D)&&void 0!==C?C:0,Sec_80G:null!==(g=null===e||void 0===e||null===(b=e.deductions)||void 0===b?void 0:b.Sec_80G)&&void 0!==g?g:0,Sec_80GG:null!==(S=null===e||void 0===e||null===(I=e.deductions)||void 0===I?void 0:I.Sec_80GG)&&void 0!==S?S:0,Sec_80TTA:null!==(N=null===e||void 0===e||null===(T=e.deductions)||void 0===T?void 0:T.Sec_80TTA)&&void 0!==N?N:0,other:null!==(w=null===e||void 0===e||null===(G=e.deductions)||void 0===G?void 0:G.other)&&void 0!==w?w:0}}})}}),[null===H||void 0===H||null===(a=H.staff)||void 0===a?void 0:a.tds_calculation]);const J=e=>{L((t=>({...t,choose_tax_regime:e})))},V=(e,t)=>{L((l=>({...l,tds_calculation:{...l.tds_calculation,[t]:{...l.tds_calculation[t],[e.target.name]:+e.target.value}}})))};return(0,T.jsxs)(T.Fragment,{children:[(0,T.jsxs)(_.Z,{children:[(0,T.jsx)(s.Z,{children:(0,T.jsx)("div",{className:i.Z.fm_header_container,children:(0,T.jsxs)("h6",{children:[null!==(r=null===(d=Y.state)||void 0===d?void 0:d.name)&&void 0!==r?r:""," -"," ",null!==(u=null===(h=Y.state)||void 0===h?void 0:h.financialYear)&&void 0!==u?u:""]})})}),(0,T.jsx)(c.Z,{}),(0,T.jsxs)(s.Z,{children:[(0,T.jsxs)("div",{className:C.Z.ped_container,children:[(0,T.jsx)(g.Z,{label:"tax_regime",customTileStyle:{margin:"0"},children:null===G||void 0===G?void 0:G.map((e=>(0,T.jsx)(b.Z,{tile:e,onTile:J,activeTile:null===B||void 0===B?void 0:B.choose_tax_regime},null===e||void 0===e?void 0:e.key)))}),(0,T.jsx)(c.Z,{}),(0,T.jsx)("h6",{className:C.Z.pedc_heading,children:M("income_from_salary")}),(0,T.jsx)(I.Z,{label:M("actual_rent"),placeholder:M("please_enter_amount"),name:"actual_rent",type:"text",value:B.tds_calculation.income_from_sal.actual_rent,onChange:e=>V(e,"income_from_sal"),customFormInputContainer:{width:"49%"}}),(0,T.jsx)(I.Z,{label:M("other_allowances"),placeholder:M("please_enter_amount"),name:"other_allowances",type:"text",value:B.tds_calculation.income_from_sal.other_allowances,onChange:e=>V(e,"income_from_sal"),customFormInputContainer:{width:"49%"}}),(0,T.jsx)(I.Z,{label:M("salary_from_other"),placeholder:M("please_enter_amount"),name:"salary_from_other",type:"text",value:B.tds_calculation.income_from_sal.salary_from_other,onChange:e=>V(e,"income_from_sal"),customFormInputContainer:{width:"49%"}}),(0,T.jsx)(c.Z,{}),(0,T.jsx)("h6",{className:C.Z.pedc_heading,children:M("income_from_house")}),(0,T.jsx)(I.Z,{label:M("income_from_hp"),placeholder:M("please_enter_amount"),name:"income_from_hp",type:"text",value:B.tds_calculation.income_from_house.income_from_hp,onChange:e=>V(e,"income_from_house"),customFormInputContainer:{width:"49%"}}),(0,T.jsx)(I.Z,{label:M("municiple_tax_paid"),placeholder:M("please_enter_amount"),name:"municiple_tax_paid",type:"text",value:B.tds_calculation.income_from_house.municiple_tax_paid,onChange:e=>V(e,"income_from_house"),customFormInputContainer:{width:"49%"}}),(0,T.jsx)(I.Z,{label:M("interest_self"),placeholder:M("please_enter_amount"),name:"interest_self",type:"text",value:B.tds_calculation.income_from_house.interest_self,onChange:e=>V(e,"income_from_house"),customFormInputContainer:{width:"49%"}}),(0,T.jsx)(I.Z,{label:M("interest_let_out"),placeholder:M("please_enter_amount"),name:"interest_let_out",type:"text",value:B.tds_calculation.income_from_house.interest_let_out,onChange:e=>V(e,"income_from_house"),customFormInputContainer:{width:"49%"}}),(0,T.jsx)(c.Z,{}),(0,T.jsx)("h6",{className:C.Z.pedc_heading,children:M("income_from_other_sources")}),(0,T.jsx)(I.Z,{label:M("income_from_other"),placeholder:M("please_enter_amount"),name:"income_from_other",type:"text",value:B.tds_calculation.income_from_os.income_from_other,onChange:e=>V(e,"income_from_os"),customFormInputContainer:{width:"49%"}}),(0,T.jsx)(c.Z,{}),(0,T.jsx)("h6",{className:C.Z.pedc_heading,children:M("deduction")}),(0,T.jsx)(I.Z,{label:M("Sec_80C_80CCC_80CCD"),placeholder:M("please_enter_amount"),name:"Sec_80C_80CCC_80CCD",type:"text",value:B.tds_calculation.deductions.Sec_80C_80CCC_80CCD,onChange:e=>V(e,"deductions"),customFormInputContainer:{width:"49%"}}),(0,T.jsx)(I.Z,{label:M("Sec_80D"),placeholder:M("please_enter_amount"),name:"Sec_80D",type:"text",value:B.tds_calculation.deductions.Sec_80D,onChange:e=>V(e,"deductions"),customFormInputContainer:{width:"49%"}}),(0,T.jsx)(I.Z,{label:M("Sec_80G"),placeholder:M("please_enter_amount"),name:"Sec_80G",type:"text",value:B.tds_calculation.deductions.Sec_80G,onChange:e=>V(e,"deductions"),customFormInputContainer:{width:"49%"}}),(0,T.jsx)(I.Z,{label:M("Sec_80GG"),placeholder:M("please_enter_amount"),name:"Sec_80GG",type:"text",value:B.tds_calculation.deductions.Sec_80GG,onChange:e=>V(e,"deductions"),customFormInputContainer:{width:"49%"}}),(0,T.jsx)(I.Z,{label:M("Sec_80TTA"),placeholder:M("please_enter_amount"),name:"Sec_80TTA",type:"text",value:B.tds_calculation.deductions.Sec_80TTA,onChange:e=>V(e,"deductions"),customFormInputContainer:{width:"49%"}}),(0,T.jsx)(I.Z,{label:M("other"),placeholder:M("please_enter_amount"),name:"other",type:"text",value:B.tds_calculation.deductions.other,onChange:e=>V(e,"deductions"),customFormInputContainer:{width:"49%"}}),(0,T.jsx)(S.Z,{label:"update",onAction:()=>{var e,t;null!==(e=Y.state)&&void 0!==e&&e.staffId&&(R((e=>!e)),q({sid:null===(t=Y.state)||void 0===t?void 0:t.staffId,bodyParameter:B}).then((()=>{R((e=>!e))})).catch({}))},customStyle:{width:"100%"}}),(0,T.jsx)(S.Z,{label:"tds_calculate",onAction:()=>{var e,t;null!==(e=Y.state)&&void 0!==e&&e.staffId&&(R((e=>!e)),E({sid:null===(t=Y.state)||void 0===t?void 0:t.staffId}).then((()=>{$(),R((e=>!e))})).catch({}))},customStyle:{width:"100%"}})]}),(0,T.jsxs)("div",{className:C.Z.as_flex,children:[(0,T.jsxs)("p",{children:[M("tds_rate"),": "]}),(0,T.jsx)("h6",{children:null!==H&&void 0!==H&&null!==(f=H.staff)&&void 0!==f&&null!==(v=f.tds_calculation)&&void 0!==v&&null!==(p=v.tds_calculate)&&void 0!==p&&p.rate?"".concat(null===H||void 0===H||null===(j=H.staff)||void 0===j||null===(y=j.tds_calculation)||void 0===y||null===(w=y.tds_calculate)||void 0===w?void 0:w.rate," %"):"N/A"})]}),(0,T.jsxs)("div",{className:C.Z.as_flex,children:[(0,T.jsxs)("p",{children:[M("tds_monthly"),": "]}),(0,T.jsx)("h6",{children:null===H||void 0===H||null===(U=H.staff)||void 0===U||null===(F=U.tds_calculation)||void 0===F||null===(k=F.tds_calculate)||void 0===k?void 0:k.month})]}),(0,T.jsxs)("div",{className:C.Z.as_flex,children:[(0,T.jsxs)("p",{children:[M("tds_annualy"),": "]}),(0,T.jsx)("h6",{children:null===H||void 0===H||null===(D=H.staff)||void 0===D||null===(P=D.tds_calculation)||void 0===P||null===(A=P.tds_calculate)||void 0===A?void 0:A.annual})]})]})]}),O&&(0,T.jsx)(x.Z,{})]})},G=[{key:"OLD_TAX",name:"old_tax_structure"},{key:"NEW_TAX",name:"new_tax_structure"}];var U=l(23441),F=l(98684),k=l(1095),D=l(2034);const P=e=>{var t,l,i,_,s,c,r;let{staff:d,financialYear:u}=e;const{t:m}=(0,n.$G)(),h=(0,o.UO)(),f=(0,o.TH)();return(0,T.jsx)(T.Fragment,{children:(0,T.jsx)(a.rU,{to:"/q/".concat(h.username,"/member/staff/payroll?type=tds-calculation&n=staff"),state:{...f.state,staffId:null===d||void 0===d?void 0:d._id,name:"".concat(null!==(t=null===d||void 0===d?void 0:d.staffFirstName)&&void 0!==t?t:""," ").concat(null!==(l=null===d||void 0===d?void 0:d.staffMiddleName)&&void 0!==l?l:""," ").concat(null!==(i=null===d||void 0===d?void 0:d.staffLastName)&&void 0!==i?i:""),financialYear:u},children:(0,T.jsx)("div",{className:D.Z.smc_card,children:(0,T.jsx)("div",{className:D.Z.smc_card_contatiner,style:{justifyContent:"space-between",width:"100%"},children:(0,T.jsxs)("div",{className:D.Z.smc_card_contatiner,children:[(0,T.jsx)("img",{src:null!==d&&void 0!==d&&d.staffProfilePhoto?"".concat(k.yI,"/").concat(null===d||void 0===d?void 0:d.staffProfilePhoto):"".concat(F.p3,"/feed-user-avatar.svg"),loading:"lazy",alt:"avatar",style:{height:"2.3rem",width:"2.3rem",borderRadius:"50%"}}),(0,T.jsxs)("div",{className:D.Z.smc_card_contatiner_inner,children:[(0,T.jsx)("h6",{children:"".concat(null!==(_=null===d||void 0===d?void 0:d.staffFirstName)&&void 0!==_?_:""," ").concat(null!==(s=null===d||void 0===d?void 0:d.staffMiddleName)&&void 0!==s?s:""," ").concat(null!==(c=null===d||void 0===d?void 0:d.staffLastName)&&void 0!==c?c:"")}),(0,T.jsxs)("p",{children:[m("index_number_1")," ",null!==(r=null===d||void 0===d?void 0:d.staffROLLNO)&&void 0!==r?r:""]})]})]})})})})})},A=e=>{var t,l,d;let{instituteId:C,pid:Z}=e;const{t:g}=(0,n.$G)(),[b]=((0,o.TH)(),(0,a.lr)()),{selectedDate:S,setSelectedDate:I}=(0,r.GX)(),[N,G]=(0,m.useState)(!1),[k,D]=(0,m.useState)(""),[A,Y]=(0,m.useState)(1),[M,B]=(0,m.useState)(!0),[L,O]=(0,U.YD)({skip:k}),{instituteAllStaff:R,instituteAllStaffLoading:q}=(0,f.nb)({data:{id:C,page:A,limit:10,search:k},skip:!C});(0,m.useEffect)((()=>{O&&M&&Y((e=>e+1))}),[O,M]),(0,m.useEffect)((()=>{var e;if(null!==R&&void 0!==R&&null!==(e=R.list)&&void 0!==e&&e.length){var t;let e=(0,v.f)(null===R||void 0===R||null===(t=R.list)||void 0===t?void 0:t.length);B((()=>e))}}),[null===R||void 0===R?void 0:R.list]);const E=(0,m.useCallback)((0,p.J)((e=>{Y((()=>1)),D(e)}),1500),[]),H=()=>{G((e=>!e))};return(0,T.jsxs)(T.Fragment,{children:["staff"===b.get("n")?(0,T.jsx)(w,{pid:Z}):(0,T.jsxs)(_.Z,{children:[(0,T.jsx)(s.Z,{children:(0,T.jsxs)("div",{className:i.Z.fm_header_container,children:[(0,T.jsx)("h6",{children:g("tds_calculation")}),(0,T.jsxs)("div",{className:i.Z.fm_search,children:[(0,T.jsx)("section",{className:i.Z.fm_search_container,children:(0,T.jsxs)("div",{className:i.Z.fm_search_container_inner,children:[(0,T.jsx)("img",{className:i.Z.fm_search_icon,alt:"search icon",src:"".concat(F.dB,"/navbar-search.svg")}),(0,T.jsx)("input",{type:"text",placeholder:g("search"),onChange:e=>{e.target.value?E(e.target.value):(Y((()=>1)),D(""))}})]})}),(0,T.jsx)("div",{className:i.Z.fm_header_start_container,children:(0,T.jsxs)("h6",{style:{cursor:"pointer"},onClick:H,children:[g("financial_year")," : ",u()(S).format("YYYY")]})})]})]})}),(0,T.jsx)(c.Z,{}),(0,T.jsxs)(s.Z,{children:[null===R||void 0===R||null===(t=R.list)||void 0===t?void 0:t.map(((e,t)=>{var l;return(null===R||void 0===R||null===(l=R.list)||void 0===l?void 0:l.length)===t+1?(0,T.jsx)("div",{ref:L,children:(0,T.jsx)(P,{staff:e,financialYear:u()(S).format("YYYY")})},null===e||void 0===e?void 0:e._id):(0,T.jsx)(P,{staff:e,financialYear:u()(S).format("YYYY")},null===e||void 0===e?void 0:e._id)})),q?k?(0,T.jsx)(x.Z,{}):(0,T.jsx)(j.Z,{}):k?0===(null===R||void 0===R||null===(l=R.list)||void 0===l?void 0:l.length)&&(0,T.jsx)(y.Z,{title:"No staffs found related this search."}):0===(null===R||void 0===R||null===(d=R.list)||void 0===d?void 0:d.length)&&(0,T.jsx)(y.Z,{title:"No staffs."})]})]}),N&&(0,T.jsx)(h.Z,{onClose:H,onYearChoose:e=>{I((t=>new Date("".concat(t.getMonth()+1," ").concat(t.getDate()," ").concat(e)))),H()}})]})}},2651:(e,t,l)=>{l.d(t,{Z:()=>a});var n=l(15783),o=l(80184);const a=e=>{let{title:t,subtitle:l,customStyleContainer:a,costomTextTitleStyle:i,costomTextSubtitleStyle:_}=e;return(0,o.jsxs)("div",{className:n.Z.empty_container,style:a,children:[t&&(0,o.jsx)("h6",{style:i,children:t}),l&&(0,o.jsx)("p",{style:_,children:l})]})}},57588:(e,t,l)=>{l.d(t,{J:()=>n});const n=(e,t)=>{let l;return function(){let n=this,o=arguments;clearTimeout(l),l=setTimeout((()=>{e.apply(n,o)}),t)}}},91427:(e,t,l)=>{l.d(t,{f:()=>n});const n=e=>e%10===0},80476:(e,t,l)=>{l.d(t,{Z:()=>n});const n={btn_wrapper:"Button_btn_wrapper__ihT7O",btn_container:"Button_btn_container__OaH2t",create_btn_container:"Button_create_btn_container__JuZrx",upload_excel_file:"Button_upload_excel_file__a7d0K",set_btn_container:"Button_set_btn_container__RvfRG",ccb_button:"Button_ccb_button__Mjv4T"}},52245:(e,t,l)=>{l.d(t,{Z:()=>n});const n={form_input_container:"UiInput_form_input_container__HtVPV",form_read_input_container:"UiInput_form_read_input_container__iILPu",form_file_container:"UiInput_form_file_container__33Bsr",form_input_label:"UiInput_form_input_label__XH6ki",form_input_label_error:"UiInput_form_input_label_error__EUef-",form_input:"UiInput_form_input__zl3Bt",form_textarea_input:"UiInput_form_textarea_input__fps0U",form_read_input_label:"UiInput_form_read_input_label__JDOsH",form_read_input:"UiInput_form_read_input__E8qX5",form_read_input_file:"UiInput_form_read_input_file__NqG3A",form_file_choose:"UiInput_form_file_choose__jxsyJ",form_file_choosen:"UiInput_form_file_choosen__8OI09",form_file_choose_active:"UiInput_form_file_choose_active__7e8B5",form_input_search:"UiInput_form_input_search__RLSi+",form_input_search_image:"UiInput_form_input_search_image__iV4xv",join_form_select_paragraph:"UiInput_join_form_select_paragraph__CSWSG",join_form_select_custom:"UiInput_join_form_select_custom__qemxS",join_form_select_custom_paragraph:"UiInput_join_form_select_custom_paragraph__3g7zT",join_form_select_custom_icon:"UiInput_join_form_select_custom_icon__Of6Sb",join_form_select_custom_rotate_icon:"UiInput_join_form_select_custom_rotate_icon__zANaN",join_form_select_custom_list:"UiInput_join_form_select_custom_list__MWLZM",join_form_select_custom_paragraph_option:"UiInput_join_form_select_custom_paragraph_option__Mh24f",form_calendar_icon:"UiInput_form_calendar_icon__KyFQA",payment_mode_heading:"UiInput_payment_mode_heading__v1Ek0",jfscl_option_list:"UiInput_jfscl_option_list__+Bigu",jfsclol_search_container:"UiInput_jfsclol_search_container__C19t-",jfsclolsc_input:"UiInput_jfsclolsc_input__ZNDZW"}},76266:(e,t,l)=>{l.d(t,{Z:()=>n});const n={ped_container:"PayrollManager_ped_container__cRCAD",pedc_heading:"PayrollManager_pedc_heading__DxoaJ",sd_heading:"PayrollManager_sd_heading__LPHT1",sd_tab:"PayrollManager_sd_tab__GAOCP",ast_header:"PayrollManager_ast_header__pGqeb",ast_body:"PayrollManager_ast_body__vMfer",astb_day:"PayrollManager_astb_day__pISV-",astb_val:"PayrollManager_astb_val__eNR-l",as_flex:"PayrollManager_as_flex__5akGj"}}}]);
//# sourceMappingURL=82416.8e1f7f1d.chunk.js.map