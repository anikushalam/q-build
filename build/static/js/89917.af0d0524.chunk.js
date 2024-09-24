"use strict";(self.webpackChunkmithkal_qviple=self.webpackChunkmithkal_qviple||[]).push([[89917],{63162:(l,e,i)=>{i.d(e,{Z:()=>r});var o=i(39230),s=i(51416),n=i(43504),t=i(72791),d=i(80184);const a=l=>{let{tab:e,isActive:i,isLink:t,parentState:a,onAction:r,url:c,extraData:v,customStyle:u}=l;const{t:m}=(0,o.$G)();return t?(0,d.jsx)(n.rU,{className:i?s.Z.horizontal_tab_card_active:s.Z.horizontal_tab_card,to:c,state:a,style:u,children:(0,d.jsxs)("h6",{children:[m(null===e||void 0===e?void 0:e.label),(null===v||void 0===v?void 0:v.count)>=0?"(".concat(null===v||void 0===v?void 0:v.count,")"):""]})}):(0,d.jsx)("div",{className:i?s.Z.horizontal_tab_card_active:s.Z.horizontal_tab_card,onClick:()=>{r(null===e||void 0===e?void 0:e.id)},children:(0,d.jsx)("h6",{children:m(null===e||void 0===e?void 0:e.label)})})},r=(0,t.memo)(a)},98967:(l,e,i)=>{i.d(e,{Z:()=>n});var o=i(51416),s=i(80184);const n=l=>{let{customWrapperStyle:e,children:i}=l;return(0,s.jsx)("div",{className:o.Z.horizontal_tab_wrapper,style:e,children:i})}},92673:(l,e,i)=>{i.d(e,{Z:()=>h});var o=i(72791),s=i(39230),n=i(99183),t=i(38857),d=i(21348),a=i(16925),r=i(98684),c=i(90904),v=i(93638),u=i(61055),m=i(80184);const h=l=>{let{setState:e,state:i,setStep:h,onClose:g}=l;const{t:_}=(0,s.$G)(),[x,f]=(0,o.useState)([]),[j,p]=(0,o.useState)(""),[Z,y]=(0,o.useState)("");(0,o.useEffect)((()=>{if(null!==i&&void 0!==i&&i.goodsId){let n=[];for(let t of null===i||void 0===i?void 0:i.goods){var l,e,o,s;n.push({goodId:null!==(l=null===t||void 0===t?void 0:t._id)&&void 0!==l?l:"",name:null!==(e=null===t||void 0===t?void 0:t.goods_name)&&void 0!==e?e:"",volume:null!==(o=null===t||void 0===t?void 0:t.goods_volume)&&void 0!==o?o:"",actual_volume:null!==(s=null===t||void 0===t?void 0:t.goods_volume)&&void 0!==s?s:""})}f(n)}}),[null===i||void 0===i?void 0:i.goodsId]);return(0,m.jsx)(t.Z,{onClose:g,children:(0,m.jsxs)("div",{className:a.Z.modal_container,children:[(0,m.jsx)(d.default,{children:(0,m.jsxs)("div",{className:a.Z.modal_container_outer_header,children:[(0,m.jsx)("div",{className:a.Z.modal_container_header,children:(0,m.jsx)("h6",{children:_("goods_quantity")})}),(0,m.jsx)("img",{src:"".concat(r.J7,"/close.svg"),alt:"close icon",onClick:g})]})}),(0,m.jsx)(c.Z,{customStyleBorder:{marginBottom:"0"}}),(0,m.jsxs)(d.default,{customStyle:{paddingBottom:"1rem"},children:[null===x||void 0===x?void 0:x.map(((l,e)=>(0,m.jsx)(u.Z,{label:null===l||void 0===l?void 0:l.name,placeholder:_("goods_quantity_placeholder"),name:null===l||void 0===l?void 0:l.name,value:null===l||void 0===l?void 0:l.volume,type:"text",onChange:l=>((l,e)=>{let i=[...x];+l.target.value>=+i[e].actual_volume?y({[i[e].name]:"Quantity should be less than or equal to remaining quantity - ".concat(i[e].actual_volume)}):(i[e].volume=+l.target.value,f((()=>i)))})(l,e),errorShow:j[null===l||void 0===l?void 0:l.name],msg:Z[null===l||void 0===l?void 0:l.name]},null===l||void 0===l?void 0:l.goodId))),(0,m.jsx)(v.Z,{label:"confirm",onAction:()=>{let l={};for(let e of x)null!==e&&void 0!==e&&e.volume||(l[e.name]="* required");(0,n.x)(l)?(e((l=>({...l,arr:x}))),h(5)):p(l)}})]})]})})}},83638:(l,e,i)=>{i.d(e,{Z:()=>y});var o=i(39230),s=i(1669),n=i(55336),t=i(98684),d=i(90904),a=i(93638),r=i(38857),c=i(21348),v=i(2651),u=i(49806),m=i(72791),h=i(23441),g=i(91427),_=i(57588),x=i(1095),f=i(2034),j=i(80184);const p=l=>{var e,i,s;let{goods:n,onSelectGoods:d,selectedId:a}=l;const{t:r}=(0,o.$G)();return(0,j.jsx)(j.Fragment,{children:(0,j.jsx)("div",{className:null!==a&&void 0!==a&&a.includes(null===n||void 0===n?void 0:n._id)?"".concat(f.Z.smc_card," ").concat(f.Z.smc_card_active):f.Z.smc_card,onClick:()=>{d(n)},children:(0,j.jsxs)("div",{className:f.Z.smc_card_contatiner,children:[(0,j.jsx)("img",{src:null!==n&&void 0!==n&&n.good_icon?"".concat(x.yI,"/").concat(null===n||void 0===n?void 0:n.good_icon):"".concat(t.J7,"/category.svg"),alt:"categor good_icon"}),(0,j.jsxs)("div",{className:f.Z.smc_card_contatiner_inner,children:[(0,j.jsxs)("h6",{children:[r("name"),": ",null!==(e=null===n||void 0===n?void 0:n.goods_name)&&void 0!==e?e:""]}),(0,j.jsxs)("p",{children:[r("remaining_quantity")," ",": "," ",null!==(i=null===n||void 0===n?void 0:n.goods_volume)&&void 0!==i?i:""]}),(0,j.jsxs)("p",{children:[r("price_per_unit")," ",": "," ",null!==(s=null===n||void 0===n?void 0:n.goods_price)&&void 0!==s?s:""]})]})]})})})};var Z=i(15427);const y=l=>{var e,i,x,f;let{onClose:y,stid:S,dataState:N,onGoodsSelect:C}=l;const{t:k}=(0,o.$G)(),[Y,I]=(0,m.useState)(""),[q,b]=(0,m.useState)(1),[w,D]=(0,m.useState)(!0),[T,G]=(0,h.YD)({skip:Y}),[B,M]=(0,m.useState)({goods:[],goodsId:[]}),{storeAllGoodsList:E,storeAllGoodsListLoading:J}=(0,Z.ok)({data:{stid:S,page:q,limit:10,search:Y},skip:!S});(0,m.useEffect)((()=>{G&&w&&b((l=>l+1))}),[G,w]),(0,m.useEffect)((()=>{var l;if(null!==E&&void 0!==E&&null!==(l=E.list)&&void 0!==l&&l.length){var e;let l=(0,g.f)(null===E||void 0===E||null===(e=E.list)||void 0===e?void 0:e.length);D((()=>l))}}),[null===E||void 0===E||null===(e=E.list)||void 0===e?void 0:e.length]),(0,m.useEffect)((()=>{var l;null!==N&&void 0!==N&&null!==(l=N.goodsId)&&void 0!==l&&l.length&&M({goods:null===N||void 0===N?void 0:N.goods,goodsId:null===N||void 0===N?void 0:N.goodsId})}),[null===N||void 0===N?void 0:N.goodsId]);const L=(0,m.useCallback)((0,_.J)((l=>{b((()=>1)),I(l)}),1500),[]),$=l=>{var e;null!==(e=B.goodsId)&&void 0!==e&&e.includes(null===l||void 0===l?void 0:l._id)?M((e=>{var i,o;return{...e,goods:null===e||void 0===e||null===(i=e.goods)||void 0===i?void 0:i.filter((e=>(null===e||void 0===e?void 0:e._id)!==(null===l||void 0===l?void 0:l._id))),goodsId:null===e||void 0===e||null===(o=e.goodsId)||void 0===o?void 0:o.filter((e=>e!==(null===l||void 0===l?void 0:l._id)))}})):M((e=>({...e,goods:[...null===e||void 0===e?void 0:e.goods,l],goodsId:[...null===e||void 0===e?void 0:e.goodsId,null===l||void 0===l?void 0:l._id]})))};return(0,j.jsx)(r.Z,{onClose:y,children:(0,j.jsxs)("div",{className:u.Z.modal_container,children:[(0,j.jsx)(c.default,{children:(0,j.jsxs)("div",{className:u.Z.modal_container_outer_header,children:[(0,j.jsx)("div",{className:u.Z.modal_container_header,children:(0,j.jsx)("h6",{children:k("select_goods")})}),(0,j.jsxs)("div",{className:u.Z.modal_container_btn_container,children:[(0,j.jsx)(a.Z,{label:"next",onAction:()=>{C(B)},customStyle:{margin:"0",padding:"0.1rem 0.5rem"}}),(0,j.jsx)("img",{src:"".concat(t.J7,"/close.svg"),alt:"close icon",onClick:y})]})]})}),(0,j.jsx)(d.Z,{customStyleBorder:{marginBottom:"0"}}),(0,j.jsxs)(c.default,{customStyle:{paddingBottom:"1rem"},children:[(0,j.jsxs)("div",{className:u.Z.assign_search_container,style:{marginBottom:"1rem"},children:[(0,j.jsx)("input",{type:"text",placeholder:k("search"),className:u.Z.assign_search_input,onChange:l=>{l.target.value?L(l.target.value):(b((()=>1)),I(""))},style:{width:"100%"}}),(0,j.jsx)("img",{src:"".concat(t.dB,"/navbar-search.svg"),alt:"search icon"})]}),null===E||void 0===E||null===(i=E.list)||void 0===i?void 0:i.map(((l,e)=>{var i;return(null===E||void 0===E||null===(i=E.list)||void 0===i?void 0:i.length)===e+1?(0,j.jsx)("div",{ref:T,children:(0,j.jsx)(p,{goods:l,onSelectGoods:$,selectedId:B.goodsId})},null===l||void 0===l?void 0:l._id):(0,j.jsx)(p,{goods:l,onSelectGoods:$,selectedId:B.goodsId},null===l||void 0===l?void 0:l._id)})),J?Y?(0,j.jsx)(n.default,{}):(0,j.jsx)(s.Z,{}):Y?0===(null===E||void 0===E||null===(x=E.list)||void 0===x?void 0:x.length)&&(0,j.jsx)(v.Z,{title:"No goods found related this search.",customStyleContainer:{marginTop:"1.5rem"}}):0===(null===E||void 0===E||null===(f=E.list)||void 0===f?void 0:f.length)&&(0,j.jsx)(v.Z,{title:"No goods.",customStyleContainer:{marginTop:"1.5rem"}})]})]})})}},69718:(l,e,i)=>{i.d(e,{Z:()=>g});var o=i(39230),s=i(98684),n=i(56959),t=i(72791),d=i(23441),a=i(91427),r=i(57588),c=i(55336),v=i(1669),u=i(2651),m=i(15427),h=i(80184);const g=l=>{var e,i,g;let{flow:_,mid:x}=l;const{t:f}=(0,o.$G)(),[j,p]=(0,t.useState)(""),[Z,y]=(0,t.useState)(1),[S,N]=(0,t.useState)(!0),[C,k]=(0,d.YD)({skip:j}),{storeSevenConsumption:Y,storeSevenConsumptionLoading:I}=(0,m.s4)({data:{mid:x,page:Z,limit:10,search:j,flow:_},skip:_?!x:!_});(0,t.useEffect)((()=>{k&&S&&y((l=>l+1))}),[k,S]),(0,t.useEffect)((()=>{var l;if(null!==Y&&void 0!==Y&&null!==(l=Y.list)&&void 0!==l&&l.length){var e;let l=(0,a.f)(null===Y||void 0===Y||null===(e=Y.list)||void 0===e?void 0:e.length);N((()=>l))}}),[null===Y||void 0===Y||null===(e=Y.list)||void 0===e?void 0:e.length]);const q=(0,t.useCallback)((0,r.J)((l=>{y((()=>1)),p(l)}),1500),[]);return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("div",{className:n.Z.fm_search_full,style:{marginBottom:"0.5rem"},children:(0,h.jsx)("section",{className:n.Z.fm_search_full_container,style:{gap:"1rem"},children:(0,h.jsxs)("div",{className:n.Z.fm_search_full_container_inner,style:{flex:"1.5 1.5"},children:[(0,h.jsx)("img",{className:n.Z.fm_search_full_icon,alt:"search icon",src:"".concat(s.dB,"/navbar-search.svg")}),(0,h.jsx)("input",{type:"text",placeholder:f("search"),onChange:l=>{l.target.value?q(l.target.value):(y((()=>1)),p(""))}})]})})}),I?j?(0,h.jsx)(c.default,{}):(0,h.jsx)(v.Z,{}):j?0===(null===Y||void 0===Y||null===(i=Y.list)||void 0===i?void 0:i.length)&&(0,h.jsx)(u.Z,{title:"No consumption goods found related this search.",customStyleContainer:{marginTop:"1.5rem"}}):0===(null===Y||void 0===Y||null===(g=Y.list)||void 0===g?void 0:g.length)&&(0,h.jsx)(u.Z,{title:"No consumption goods.",customStyleContainer:{marginTop:"1.5rem"}})]})}},19321:(l,e,i)=>{i.d(e,{Z:()=>p});var o=i(39230),s=i(98684),n=i(56959),t=i(72791),d=i(23441),a=i(91427),r=i(57588),c=i(55336),v=i(1669),u=i(2651),m=i(15427),h=i(97892),g=i.n(h),_=i(2034),x=i(82824),f=i(80184);const j=l=>{var e,i,s,n;let{issue:t,flow:d}=l;const{t:a}=(0,o.$G)();return(0,f.jsx)(f.Fragment,{children:"Custom"===d?(0,f.jsxs)("div",{className:_.Z.smc_card,style:{flexDirection:"column",alignItems:"flex-start"},children:[(0,f.jsxs)("div",{className:_.Z.smccc_inner,children:[(0,f.jsxs)("h6",{children:[a("quantity")," ",": ",null===t||void 0===t||null===(e=t.goods)||void 0===e?void 0:e.length]}),(0,f.jsxs)("h6",{children:[a("date_and_time")," ",": ",g()(null===t||void 0===t?void 0:t.created_at).format("DD/MM/YYYY"),", ",(0,x.J)(null===t||void 0===t?void 0:t.created_at,"LT")]})]}),null===t||void 0===t||null===(i=t.goods)||void 0===i?void 0:i.map((l=>{var e,i,o;return(0,f.jsxs)("div",{className:_.Z.smccc_inner,children:[(0,f.jsxs)("p",{children:[a("name")," ",": ",null!==(e=null===l||void 0===l||null===(i=l.good)||void 0===i?void 0:i.goods_name)&&void 0!==e?e:""]}),(0,f.jsxs)("p",{children:[a("quantity")," ",": ",null!==(o=null===l||void 0===l?void 0:l.quantity)&&void 0!==o?o:""]})]},null===l||void 0===l?void 0:l._id)}))]}):"Individual"===d?(0,f.jsxs)("div",{className:_.Z.smc_card,style:{flexDirection:"column",alignItems:"flex-start"},children:[(0,f.jsxs)("div",{className:_.Z.smccc_inner,children:[(0,f.jsxs)("h6",{children:[a("quantity")," ",": ",null===t||void 0===t||null===(s=t.goods)||void 0===s?void 0:s.length]}),(0,f.jsxs)("h6",{children:[a("date_and_time")," ",": ",g()(null===t||void 0===t?void 0:t.created_at).format("DD/MM/YYYY"),", ",(0,x.J)(null===t||void 0===t?void 0:t.created_at,"LT")]})]}),null===t||void 0===t||null===(n=t.goods)||void 0===n?void 0:n.map((l=>{var e,i,o;return(0,f.jsxs)("div",{className:_.Z.smccc_inner,children:[(0,f.jsxs)("p",{children:[a("name")," ",": ",null!==(e=null===l||void 0===l||null===(i=l.good)||void 0===i?void 0:i.goods_name)&&void 0!==e?e:""]}),(0,f.jsxs)("p",{children:[a("quantity")," ",": ",null!==(o=null===l||void 0===l?void 0:l.quantity)&&void 0!==o?o:""]})]},null===l||void 0===l?void 0:l._id)}))]}):"Hi statics"})},p=l=>{var e,i,h,g;let{flow:_,mid:x}=l;const{t:p}=(0,o.$G)(),[Z,y]=(0,t.useState)(""),[S,N]=(0,t.useState)(1),[C,k]=(0,t.useState)(!0),[Y,I]=(0,d.YD)({skip:Z}),{storeSevenIssue:q,storeSevenIssueLoading:b}=(0,m.H6)({data:{mid:x,page:S,limit:10,search:Z,flow:_},skip:_?!x:!_});(0,t.useEffect)((()=>{I&&C&&N((l=>l+1))}),[I,C]),(0,t.useEffect)((()=>{var l;if(null!==q&&void 0!==q&&null!==(l=q.list)&&void 0!==l&&l.length){var e;let l=(0,a.f)(null===q||void 0===q||null===(e=q.list)||void 0===e?void 0:e.length);k((()=>l))}}),[null===q||void 0===q||null===(e=q.list)||void 0===e?void 0:e.length]);const w=(0,t.useCallback)((0,r.J)((l=>{N((()=>1)),y(l)}),1500),[]);return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("div",{className:n.Z.fm_search_full,style:{marginBottom:"0.5rem"},children:(0,f.jsx)("section",{className:n.Z.fm_search_full_container,style:{gap:"1rem"},children:(0,f.jsxs)("div",{className:n.Z.fm_search_full_container_inner,style:{flex:"1.5 1.5"},children:[(0,f.jsx)("img",{className:n.Z.fm_search_full_icon,alt:"search icon",src:"".concat(s.dB,"/navbar-search.svg")}),(0,f.jsx)("input",{type:"text",placeholder:p("search"),onChange:l=>{l.target.value?w(l.target.value):(N((()=>1)),y(""))}})]})})}),null===q||void 0===q||null===(i=q.list)||void 0===i?void 0:i.map(((l,e)=>{var i;return(null===q||void 0===q||null===(i=q.list)||void 0===i?void 0:i.length)===e+1?(0,f.jsx)("div",{ref:Y,children:(0,f.jsx)(j,{issue:l,flow:_})},null===l||void 0===l?void 0:l._id):(0,f.jsx)(j,{issue:l,flow:_},null===l||void 0===l?void 0:l._id)})),b?Z?(0,f.jsx)(c.default,{}):(0,f.jsx)(v.Z,{}):Z?0===(null===q||void 0===q||null===(h=q.list)||void 0===h?void 0:h.length)&&(0,f.jsx)(u.Z,{title:"No issue goods found related this search.",customStyleContainer:{marginTop:"1.5rem"}}):0===(null===q||void 0===q||null===(g=q.list)||void 0===g?void 0:g.length)&&(0,f.jsx)(u.Z,{title:"No issue goods.",customStyleContainer:{marginTop:"1.5rem"}})]})}},75045:(l,e,i)=>{i.d(e,{Z:()=>g});var o=i(39230),s=i(98684),n=i(56959),t=i(72791),d=i(23441),a=i(91427),r=i(57588),c=i(55336),v=i(1669),u=i(2651),m=i(15427),h=i(80184);const g=l=>{var e,i,g;let{flow:_,mid:x}=l;const{t:f}=(0,o.$G)(),[j,p]=(0,t.useState)(""),[Z,y]=(0,t.useState)(1),[S,N]=(0,t.useState)(!0),[C,k]=(0,d.YD)({skip:j}),{storeSevenMaintenance:Y,storeSevenMaintenanceLoading:I}=(0,m.dU)({data:{mid:x,page:Z,limit:10,search:j,flow:_},skip:_?!x:!_});(0,t.useEffect)((()=>{k&&S&&y((l=>l+1))}),[k,S]),(0,t.useEffect)((()=>{var l;if(null!==Y&&void 0!==Y&&null!==(l=Y.list)&&void 0!==l&&l.length){var e;let l=(0,a.f)(null===Y||void 0===Y||null===(e=Y.list)||void 0===e?void 0:e.length);N((()=>l))}}),[null===Y||void 0===Y||null===(e=Y.list)||void 0===e?void 0:e.length]);const q=(0,t.useCallback)((0,r.J)((l=>{y((()=>1)),p(l)}),1500),[]);return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("div",{className:n.Z.fm_search_full,style:{marginBottom:"0.5rem"},children:(0,h.jsx)("section",{className:n.Z.fm_search_full_container,style:{gap:"1rem"},children:(0,h.jsxs)("div",{className:n.Z.fm_search_full_container_inner,style:{flex:"1.5 1.5"},children:[(0,h.jsx)("img",{className:n.Z.fm_search_full_icon,alt:"search icon",src:"".concat(s.dB,"/navbar-search.svg")}),(0,h.jsx)("input",{type:"text",placeholder:f("search"),onChange:l=>{l.target.value?q(l.target.value):(y((()=>1)),p(""))}})]})})}),I?j?(0,h.jsx)(c.default,{}):(0,h.jsx)(v.Z,{}):j?0===(null===Y||void 0===Y||null===(i=Y.list)||void 0===i?void 0:i.length)&&(0,h.jsx)(u.Z,{title:"No maintenance goods found related this search.",customStyleContainer:{marginTop:"1.5rem"}}):0===(null===Y||void 0===Y||null===(g=Y.list)||void 0===g?void 0:g.length)&&(0,h.jsx)(u.Z,{title:"No maintenance goods.",customStyleContainer:{marginTop:"1.5rem"}})]})}},20292:(l,e,i)=>{i.d(e,{Z:()=>p});var o=i(39230),s=i(98684),n=i(56959),t=i(72791),d=i(23441),a=i(91427),r=i(57588),c=i(55336),v=i(1669),u=i(2651),m=i(15427),h=i(97892),g=i.n(h),_=i(2034),x=i(82824),f=i(80184);const j=l=>{var e,i,s,n,t,d;let{register:a,flow:r}=l;const{t:c}=(0,o.$G)();return(0,f.jsx)(f.Fragment,{children:"Custom"===r?(0,f.jsxs)("div",{className:_.Z.smc_card,style:{flexDirection:"column",alignItems:"flex-start"},children:[(0,f.jsxs)("div",{className:_.Z.smccc_inner,children:[(0,f.jsxs)("div",{className:_.Z.smccc_inner,style:{flexDirection:"column",alignItems:"flex-start",gap:"0.2rem",width:"auto"},children:[(0,f.jsxs)("h6",{children:[c("quantity")," ",": ",null===a||void 0===a||null===(e=a.goods)||void 0===e?void 0:e.length]}),(0,f.jsxs)("h6",{children:[c("date_and_time")," ",": ",g()(null===a||void 0===a?void 0:a.created_at).format("DD/MM/YYYY"),", ",(0,x.J)(null===a||void 0===a?void 0:a.created_at,"LT")]})]}),(0,f.jsxs)("h6",{children:[c("status")," ",": "," ",null!==(i=null===a||void 0===a?void 0:a.status)&&void 0!==i?i:"STATIC"]})]}),null===a||void 0===a||null===(s=a.goods)||void 0===s?void 0:s.map((l=>{var e,i,o;return(0,f.jsxs)("div",{className:_.Z.smccc_inner,children:[(0,f.jsxs)("p",{children:[c("name")," ",": ",null!==(e=null===l||void 0===l||null===(i=l.good)||void 0===i?void 0:i.goods_name)&&void 0!==e?e:""]}),(0,f.jsxs)("p",{children:[c("quantity")," ",": ",null!==(o=null===l||void 0===l?void 0:l.quantity)&&void 0!==o?o:""]})]},null===l||void 0===l?void 0:l._id)}))]}):"Individual"===r?(0,f.jsxs)("div",{className:_.Z.smc_card,style:{flexDirection:"column",alignItems:"flex-start"},children:[(0,f.jsxs)("div",{className:_.Z.smccc_inner,children:[(0,f.jsxs)("div",{className:_.Z.smccc_inner,style:{flexDirection:"column",alignItems:"flex-start",gap:"0.2rem",width:"auto"},children:[(0,f.jsxs)("h6",{children:[c("quantity")," ",": ",null===a||void 0===a||null===(n=a.goods)||void 0===n?void 0:n.length]}),(0,f.jsxs)("h6",{children:[c("date_and_time")," ",": ",g()(null===a||void 0===a?void 0:a.created_at).format("DD/MM/YYYY"),", ",(0,x.J)(null===a||void 0===a?void 0:a.created_at,"LT")]})]}),(0,f.jsxs)("h6",{children:[c("status")," ",": "," ",null!==(t=null===a||void 0===a?void 0:a.status)&&void 0!==t?t:"STATIC"]})]}),null===a||void 0===a||null===(d=a.goods)||void 0===d?void 0:d.map((l=>{var e,i,o;return(0,f.jsxs)("div",{className:_.Z.smccc_inner,children:[(0,f.jsxs)("p",{children:[c("name")," ",": ",null!==(e=null===l||void 0===l||null===(i=l.good)||void 0===i?void 0:i.goods_name)&&void 0!==e?e:""]}),(0,f.jsxs)("p",{children:[c("quantity")," ",": ",null!==(o=null===l||void 0===l?void 0:l.quantity)&&void 0!==o?o:""]})]},null===l||void 0===l?void 0:l._id)}))]}):"Hi statics"})},p=l=>{var e,i,h,g;let{flow:_,mid:x}=l;const{t:p}=(0,o.$G)(),[Z,y]=(0,t.useState)(""),[S,N]=(0,t.useState)(1),[C,k]=(0,t.useState)(!0),[Y,I]=(0,d.YD)({skip:Z}),{storeSevenRegister:q,storeSevenRegisterLoading:b}=(0,m.dz)({data:{mid:x,page:S,limit:10,search:Z,flow:_},skip:_?!x:!_});(0,t.useEffect)((()=>{I&&C&&N((l=>l+1))}),[I,C]),(0,t.useEffect)((()=>{var l;if(null!==q&&void 0!==q&&null!==(l=q.list)&&void 0!==l&&l.length){var e;let l=(0,a.f)(null===q||void 0===q||null===(e=q.list)||void 0===e?void 0:e.length);k((()=>l))}}),[null===q||void 0===q||null===(e=q.list)||void 0===e?void 0:e.length]);const w=(0,t.useCallback)((0,r.J)((l=>{N((()=>1)),y(l)}),1500),[]);return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("div",{className:n.Z.fm_search_full,style:{marginBottom:"0.5rem"},children:(0,f.jsx)("section",{className:n.Z.fm_search_full_container,style:{gap:"1rem"},children:(0,f.jsxs)("div",{className:n.Z.fm_search_full_container_inner,style:{flex:"1.5 1.5"},children:[(0,f.jsx)("img",{className:n.Z.fm_search_full_icon,alt:"search icon",src:"".concat(s.dB,"/navbar-search.svg")}),(0,f.jsx)("input",{type:"text",placeholder:p("search"),onChange:l=>{l.target.value?w(l.target.value):(N((()=>1)),y(""))}})]})})}),null===q||void 0===q||null===(i=q.list)||void 0===i?void 0:i.map(((l,e)=>{var i;return(null===q||void 0===q||null===(i=q.list)||void 0===i?void 0:i.length)===e+1?(0,f.jsx)("div",{ref:Y,children:(0,f.jsx)(j,{register:l,flow:_})},null===l||void 0===l?void 0:l._id):(0,f.jsx)(j,{register:l,flow:_},null===l||void 0===l?void 0:l._id)})),b?Z?(0,f.jsx)(c.default,{}):(0,f.jsx)(v.Z,{}):Z?0===(null===q||void 0===q||null===(h=q.list)||void 0===h?void 0:h.length)&&(0,f.jsx)(u.Z,{title:"No register goods found related this search.",customStyleContainer:{marginTop:"1.5rem"}}):0===(null===q||void 0===q||null===(g=q.list)||void 0===g?void 0:g.length)&&(0,f.jsx)(u.Z,{title:"No register goods.",customStyleContainer:{marginTop:"1.5rem"}})]})}},8905:(l,e,i)=>{i.d(e,{Z:()=>p});var o=i(39230),s=i(98684),n=i(56959),t=i(72791),d=i(23441),a=i(91427),r=i(57588),c=i(55336),v=i(1669),u=i(2651),m=i(15427),h=i(97892),g=i.n(h),_=i(2034),x=i(82824),f=i(80184);const j=l=>{var e,i,s,n;let{request:t,flow:d}=l;const{t:a}=(0,o.$G)();return(0,f.jsx)(f.Fragment,{children:"Custom"===d?(0,f.jsxs)("div",{className:_.Z.smc_card,style:{flexDirection:"column",alignItems:"flex-start"},children:[(0,f.jsxs)("div",{className:_.Z.smccc_inner,children:[(0,f.jsxs)("h6",{children:[a("quantity")," ",": ",null===t||void 0===t||null===(e=t.goods)||void 0===e?void 0:e.length]}),(0,f.jsxs)("h6",{children:[a("date_and_time")," ",": ",g()(null===t||void 0===t?void 0:t.created_at).format("DD/MM/YYYY"),", ",(0,x.J)(null===t||void 0===t?void 0:t.created_at,"LT")]})]}),null===t||void 0===t||null===(i=t.goods)||void 0===i?void 0:i.map((l=>{var e,i,o;return(0,f.jsxs)("div",{className:_.Z.smccc_inner,children:[(0,f.jsxs)("p",{children:[a("name")," ",": ",null!==(e=null===l||void 0===l||null===(i=l.good)||void 0===i?void 0:i.goods_name)&&void 0!==e?e:""]}),(0,f.jsxs)("p",{children:[a("quantity")," ",": ",null!==(o=null===l||void 0===l?void 0:l.quantity)&&void 0!==o?o:""]})]},null===l||void 0===l?void 0:l._id)}))]}):"Individual"===d?(0,f.jsxs)("div",{className:_.Z.smc_card,style:{flexDirection:"column",alignItems:"flex-start"},children:[(0,f.jsxs)("div",{className:_.Z.smccc_inner,children:[(0,f.jsxs)("h6",{children:[a("quantity")," ",": ",null===t||void 0===t||null===(s=t.goods)||void 0===s?void 0:s.length]}),(0,f.jsxs)("h6",{children:[a("date_and_time")," ",": ",g()(null===t||void 0===t?void 0:t.created_at).format("DD/MM/YYYY"),", ",(0,x.J)(null===t||void 0===t?void 0:t.created_at,"LT")]})]}),null===t||void 0===t||null===(n=t.goods)||void 0===n?void 0:n.map((l=>{var e,i,o;return(0,f.jsxs)("div",{className:_.Z.smccc_inner,children:[(0,f.jsxs)("p",{children:[a("name")," ",": ",null!==(e=null===l||void 0===l||null===(i=l.good)||void 0===i?void 0:i.goods_name)&&void 0!==e?e:""]}),(0,f.jsxs)("p",{children:[a("quantity")," ",": ",null!==(o=null===l||void 0===l?void 0:l.quantity)&&void 0!==o?o:""]})]},null===l||void 0===l?void 0:l._id)}))]}):"Hi statics"})},p=l=>{var e,i,h,g;let{flow:_,mid:x}=l;const{t:p}=(0,o.$G)(),[Z,y]=(0,t.useState)(""),[S,N]=(0,t.useState)(1),[C,k]=(0,t.useState)(!0),[Y,I]=(0,d.YD)({skip:Z}),{storeSevenRequest:q,storeSevenRequestLoading:b}=(0,m.YP)({data:{mid:x,page:S,limit:10,search:Z,flow:_},skip:_?!x:!_});(0,t.useEffect)((()=>{I&&C&&N((l=>l+1))}),[I,C]),(0,t.useEffect)((()=>{var l;if(null!==q&&void 0!==q&&null!==(l=q.list)&&void 0!==l&&l.length){var e;let l=(0,a.f)(null===q||void 0===q||null===(e=q.list)||void 0===e?void 0:e.length);k((()=>l))}}),[null===q||void 0===q||null===(e=q.list)||void 0===e?void 0:e.length]);const w=(0,t.useCallback)((0,r.J)((l=>{N((()=>1)),y(l)}),1500),[]);return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("div",{className:n.Z.fm_search_full,style:{marginBottom:"0.5rem"},children:(0,f.jsx)("section",{className:n.Z.fm_search_full_container,style:{gap:"1rem"},children:(0,f.jsxs)("div",{className:n.Z.fm_search_full_container_inner,style:{flex:"1.5 1.5"},children:[(0,f.jsx)("img",{className:n.Z.fm_search_full_icon,alt:"search icon",src:"".concat(s.dB,"/navbar-search.svg")}),(0,f.jsx)("input",{type:"text",placeholder:p("search"),onChange:l=>{l.target.value?w(l.target.value):(N((()=>1)),y(""))}})]})})}),null===q||void 0===q||null===(i=q.list)||void 0===i?void 0:i.map(((l,e)=>{var i;return(null===q||void 0===q||null===(i=q.list)||void 0===i?void 0:i.length)===e+1?(0,f.jsx)("div",{ref:Y,children:(0,f.jsx)(j,{request:l,flow:_})},null===l||void 0===l?void 0:l._id):(0,f.jsx)(j,{request:l,flow:_},null===l||void 0===l?void 0:l._id)})),b?Z?(0,f.jsx)(c.default,{}):(0,f.jsx)(v.Z,{}):Z?0===(null===q||void 0===q||null===(h=q.list)||void 0===h?void 0:h.length)&&(0,f.jsx)(u.Z,{title:"No request goods found related this search.",customStyleContainer:{marginTop:"1.5rem"}}):0===(null===q||void 0===q||null===(g=q.list)||void 0===g?void 0:g.length)&&(0,f.jsx)(u.Z,{title:"No request goods.",customStyleContainer:{marginTop:"1.5rem"}})]})}},8754:(l,e,i)=>{i.d(e,{Z:()=>g});var o=i(39230),s=i(98684),n=i(56959),t=i(72791),d=i(23441),a=i(91427),r=i(57588),c=i(55336),v=i(1669),u=i(2651),m=i(15427),h=i(80184);const g=l=>{var e,i,g;let{flow:_,mid:x}=l;const{t:f}=(0,o.$G)(),[j,p]=(0,t.useState)(""),[Z,y]=(0,t.useState)(1),[S,N]=(0,t.useState)(!0),[C,k]=(0,d.YD)({skip:j}),{storeSevenReturn:Y,storeSevenReturnLoading:I}=(0,m.H2)({data:{mid:x,page:Z,limit:10,search:j,flow:_},skip:_?!x:!_});(0,t.useEffect)((()=>{k&&S&&y((l=>l+1))}),[k,S]),(0,t.useEffect)((()=>{var l;if(null!==Y&&void 0!==Y&&null!==(l=Y.list)&&void 0!==l&&l.length){var e;let l=(0,a.f)(null===Y||void 0===Y||null===(e=Y.list)||void 0===e?void 0:e.length);N((()=>l))}}),[null===Y||void 0===Y||null===(e=Y.list)||void 0===e?void 0:e.length]);const q=(0,t.useCallback)((0,r.J)((l=>{y((()=>1)),p(l)}),1500),[]);return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("div",{className:n.Z.fm_search_full,style:{marginBottom:"0.5rem"},children:(0,h.jsx)("section",{className:n.Z.fm_search_full_container,style:{gap:"1rem"},children:(0,h.jsxs)("div",{className:n.Z.fm_search_full_container_inner,style:{flex:"1.5 1.5"},children:[(0,h.jsx)("img",{className:n.Z.fm_search_full_icon,alt:"search icon",src:"".concat(s.dB,"/navbar-search.svg")}),(0,h.jsx)("input",{type:"text",placeholder:f("search"),onChange:l=>{l.target.value?q(l.target.value):(y((()=>1)),p(""))}})]})})}),I?j?(0,h.jsx)(c.default,{}):(0,h.jsx)(v.Z,{}):j?0===(null===Y||void 0===Y||null===(i=Y.list)||void 0===i?void 0:i.length)&&(0,h.jsx)(u.Z,{title:"No return goods found related this search.",customStyleContainer:{marginTop:"1.5rem"}}):0===(null===Y||void 0===Y||null===(g=Y.list)||void 0===g?void 0:g.length)&&(0,h.jsx)(u.Z,{title:"No return goods.",customStyleContainer:{marginTop:"1.5rem"}})]})}},64046:(l,e,i)=>{i.d(e,{Z:()=>g});var o=i(39230),s=i(98684),n=i(56959),t=i(72791),d=i(23441),a=i(91427),r=i(57588),c=i(55336),v=i(1669),u=i(2651),m=i(15427),h=i(80184);const g=l=>{var e,i,g;let{flow:_,mid:x}=l;const{t:f}=(0,o.$G)(),[j,p]=(0,t.useState)(""),[Z,y]=(0,t.useState)(1),[S,N]=(0,t.useState)(!0),[C,k]=(0,d.YD)({skip:j}),{storeSevenStocktake:Y,storeSevenStocktakeLoading:I}=(0,m.Oz)({data:{mid:x,page:Z,limit:10,search:j,flow:_},skip:_?!x:!_});(0,t.useEffect)((()=>{k&&S&&y((l=>l+1))}),[k,S]),(0,t.useEffect)((()=>{var l;if(null!==Y&&void 0!==Y&&null!==(l=Y.list)&&void 0!==l&&l.length){var e;let l=(0,a.f)(null===Y||void 0===Y||null===(e=Y.list)||void 0===e?void 0:e.length);N((()=>l))}}),[null===Y||void 0===Y||null===(e=Y.list)||void 0===e?void 0:e.length]);const q=(0,t.useCallback)((0,r.J)((l=>{y((()=>1)),p(l)}),1500),[]);return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("div",{className:n.Z.fm_search_full,style:{marginBottom:"0.5rem"},children:(0,h.jsx)("section",{className:n.Z.fm_search_full_container,style:{gap:"1rem"},children:(0,h.jsxs)("div",{className:n.Z.fm_search_full_container_inner,style:{flex:"1.5 1.5"},children:[(0,h.jsx)("img",{className:n.Z.fm_search_full_icon,alt:"search icon",src:"".concat(s.dB,"/navbar-search.svg")}),(0,h.jsx)("input",{type:"text",placeholder:f("search"),onChange:l=>{l.target.value?q(l.target.value):(y((()=>1)),p(""))}})]})})}),I?j?(0,h.jsx)(c.default,{}):(0,h.jsx)(v.Z,{}):j?0===(null===Y||void 0===Y||null===(i=Y.list)||void 0===i?void 0:i.length)&&(0,h.jsx)(u.Z,{title:"No stocktake found related this search.",customStyleContainer:{marginTop:"1.5rem"}}):0===(null===Y||void 0===Y||null===(g=Y.list)||void 0===g?void 0:g.length)&&(0,h.jsx)(u.Z,{title:"No stocktake.",customStyleContainer:{marginTop:"1.5rem"}})]})}},82824:(l,e,i)=>{i.d(e,{J:()=>d,Z:()=>a});var o=i(99893),s=i.n(o),n=i(97892),t=i.n(n);const d=(l,e)=>(t().extend(s()),t()(l).format(e)),a=(l,e,i)=>{var o;return t()()[l]("".concat(null===(o=t()(i))||void 0===o?void 0:o.format("YYYY-MM-DD")),e)}},91427:(l,e,i)=>{i.d(e,{f:()=>o});const o=l=>l%10===0},2034:(l,e,i)=>{i.d(e,{Z:()=>o});const o={smc_card:"StoreManager_smc_card__eEs0G",smc_card_active:"StoreManager_smc_card_active__Im3Y7",smc_card_contatiner:"StoreManager_smc_card_contatiner__ese7w",smccc_inner:"StoreManager_smccc_inner__qlGyG",smc_card_contatiner_inner:"StoreManager_smc_card_contatiner_inner__fU6mu",menu_icon:"StoreManager_menu_icon__CGeq4"}}}]);
//# sourceMappingURL=89917.af0d0524.chunk.js.map