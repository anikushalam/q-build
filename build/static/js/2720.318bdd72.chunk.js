"use strict";(self.webpackChunkmithkal_qviple=self.webpackChunkmithkal_qviple||[]).push([[2720],{2720:function(e,n,i){i.r(n),i.d(n,{default:function(){return S}});var s=i(93433),t=i(29439),a=i(72791),o=i(95048),l=i(14304),r=i(1413),c=i(39230),d={incomeForm:"ExpenseForm_incomeForm__WfJN7",expense_tab:"ExpenseForm_expense_tab__FL-G2",expense_tabh6:"ExpenseForm_expense_tabh6__S5E0f",expense_tabh6_active:"ExpenseForm_expense_tabh6_active__8URA2",top:"ExpenseForm_top__YZdgy",mid:"ExpenseForm_mid__TaWvT",row:"ExpenseForm_row__3sWac",input:"ExpenseForm_input__mneaR",down:"ExpenseForm_down__RWE-4",options:"ExpenseForm_options__rPglH",option:"ExpenseForm_option__uObSO",aadhar:"ExpenseForm_aadhar__a1-PM",btn:"ExpenseForm_btn__EcN5E",row_search:"ExpenseForm_row_search__gV6Z8"},u=i(14124),v=i(98734),x=i(80184),h={position:"relative",zIndex:1},p={position:"absolute",right:"0",top:"2.2vw",zIndex:10},_={position:"fixed",top:0,left:0,right:0,bottom:0,zIndex:10};function f(e){var n=e.setIncomeData,i=e.open,s=e.onClose,t=e.incomeData,a=e.setIsOpen,o=(0,c.$G)().t;return i?(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)("div",{onClick:s,style:_}),(0,x.jsxs)("div",{style:p,className:d.options,children:[(0,x.jsx)("div",{className:d.option,onClick:function(){n((0,r.Z)((0,r.Z)({},t),{},{tMode:"By Cash"})),a(!1)},children:o("by_cash")}),(0,x.jsx)("div",{className:d.option,onClick:function(){n((0,r.Z)((0,r.Z)({},t),{},{tMode:"By Bank"})),a(!1)},children:o("by_bank")})]})]}):null}var m=function(e){var n=e.onRefetchWhenCreateExpense,i=e.setViewIndex,s=(0,c.$G)().t,p=(0,o.v9)((function(e){return e.financeChange})),_=(0,l.Uo)(),m=(0,t.Z)(_,1)[0],j=(0,a.useState)(!1),g=(0,t.Z)(j,2),E=g[0],N=g[1],b=(0,a.useState)(0),y=(0,t.Z)(b,2),Z=y[0],C=y[1],k=(0,a.useState)(!1),S=(0,t.Z)(k,2),w=S[0],F=S[1],I=(0,a.useState)(""),L=(0,t.Z)(I,2),R=L[0],q=L[1],D=(0,a.useState)(!1),A=(0,t.Z)(D,2),T=A[0],P=A[1],U=document.querySelector("textarea");null===U||void 0===U||U.addEventListener("keyup",(function(e){U.style.height="auto";var n=e.target.scrollHeight;U.style.height="".concat(n,"px")}));var B=(0,a.useState)({tMode:""}),O=(0,t.Z)(B,2),V=O[0],M=O[1],W=(0,a.useState)(""),G=(0,t.Z)(W,2),H=G[0],z=G[1],J=(0,a.useState)({expensePaid:"",expenseAmount:"",expenseDesc:"",expense_quantity:"",expense_good_name:""}),$=(0,t.Z)(J,2),Y=$[0],K=$[1];return(0,x.jsxs)("div",{className:d.incomeForm,children:[(0,x.jsxs)("div",{className:d.expense_tab,children:[(0,x.jsx)("h6",{className:0===Z?"".concat(d.expense_tabh6_active," ").concat(d.expense_tabh6):d.expense_tabh6,onClick:function(){return C(0)},children:"Nominal Expenses"}),(0,x.jsx)("h6",{className:1===Z?"".concat(d.expense_tabh6_active," ").concat(d.expense_tabh6):d.expense_tabh6,onClick:function(){return C(1)},children:"Assets / Inventory"})]}),(0,x.jsxs)("form",{onSubmit:function(e){e.preventDefault(),P((function(e){return!e}));var s=new FormData;R||s.append("expensePaid",Y.expensePaid),1===Z&&(s.append("expense_quantity",Y.expense_quantity),s.append("expense_good_name",Y.expense_good_name)),s.append("expenseAmount",Y.expenseAmount),s.append("expenseDesc",Y.expenseDesc),s.append("expenseAccount",V.tMode),s.append("file",H),s&&m({fData:s,fid:null===p||void 0===p?void 0:p.fid,is_inventory:1===Z||"",user_query:R}).then((function(e){e.data.status&&(n(),i(0),P((function(e){return!e})))})).catch((function(){P((function(e){return!e}))}))},children:[(0,x.jsxs)("div",{className:d.mid,children:[(0,x.jsxs)("div",{className:d.row,children:[(0,x.jsx)("h6",{children:s("select_transaction_mode")}),(0,x.jsxs)("div",{className:d.input,style:h,children:[(0,x.jsxs)("div",{children:[""!==(null===V||void 0===V?void 0:V.tMode)?(0,x.jsx)("h6",{onClick:function(){return N(!0)},children:V.tMode}):(0,x.jsxs)("h6",{onClick:function(){return N(!0)},children:[" ",s("please_select_transaction_mode")]}),(0,x.jsx)("img",{className:d.down,src:"/images/downn-icon.svg",alt:""})]}),(0,x.jsx)(f,{open:E,onClose:function(){return N(!1)},setIncomeData:M,incomeData:V,setIsOpen:N})]})]}),1===Z&&(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)("div",{className:d.row,children:[(0,x.jsx)("h6",{children:s("name_of_good")}),(0,x.jsx)("input",{type:"text",placeholder:s("name_of_good_placeholder"),name:"expense_good_name",value:Y.expense_good_name,onChange:function(e){return K((0,r.Z)((0,r.Z)({},Y),{},{expense_good_name:e.target.value}))},required:!0})]}),(0,x.jsxs)("div",{className:d.row,children:[(0,x.jsx)("h6",{children:s("quantity_of_goods")}),(0,x.jsx)("input",{type:"number",placeholder:s("quantity_of_goods_placeholder"),name:"expense_quantity",value:Y.expense_quantity,onChange:function(e){return K((0,r.Z)((0,r.Z)({},Y),{},{expense_quantity:e.target.value}))},required:!0})]})]}),(0,x.jsxs)("div",{className:d.row,children:[(0,x.jsx)("h6",{children:s("amount")}),(0,x.jsx)("input",{type:"number",placeholder:s("enter_amount"),name:"expenseAmount",value:Y.expenseAmount,onChange:function(e){return K((0,r.Z)((0,r.Z)({},Y),{},{expenseAmount:e.target.value}))},required:!0})]}),(0,x.jsxs)("div",{className:d.row,children:[(0,x.jsxs)("h6",{children:[s("paid_to"),(0,x.jsxs)("span",{className:d.row_search,onClick:function(){return F(!0)},children:[(0,x.jsx)("img",{style:{width:"16px",height:"16px"},src:"/images/search-icon.svg",alt:"search icon"}),"Search & Select"]})]}),(0,x.jsx)("input",{type:"text",placeholder:s("paid_to_user"),name:"expensePaid",value:Y.expensePaid,onChange:function(e){return K((0,r.Z)((0,r.Z)({},Y),{},{expensePaid:e.target.value}))},required:!0})]}),(0,x.jsxs)("div",{className:d.row,children:[(0,x.jsx)("h6",{children:s("description")}),(0,x.jsx)("textarea",{className:d.postTextarea,type:"text",name:"expenseDesc",placeholder:s("description_details"),value:Y.expenseDesc,onChange:function(e){return K((0,r.Z)((0,r.Z)({},Y),{},{expenseDesc:e.target.value}))}})]}),(0,x.jsxs)("div",{className:d.row,children:[(0,x.jsx)("h6",{children:s("ack_rcpt")}),(0,x.jsx)("input",{type:"file",className:d.aadhar,name:"file",onChange:function(e){z((function(){return e.target.files[0]}))}})]}),(0,x.jsx)("button",{type:"submit",className:d.btn,children:s("save_receipt")})]}),w&&(0,x.jsx)(u.Z,{onClose:function(){return F(!1)},title:"Search User",disabledId:R,assignHead:w,headSelect:function(e){q(null===e||void 0===e?void 0:e._id),F(!1),K((function(n){return(0,r.Z)((0,r.Z)({},n),{},{expensePaid:null===e||void 0===e?void 0:e.userLegalName})}))}})]}),T&&(0,x.jsx)(v.Z,{})]})},j=i(72426),g=i.n(j),E={incomeContainer:"Expenses_incomeContainer__WqfR9",income:"Expenses_income__va93-",incomeLeft:"Expenses_incomeLeft__Y1xsk",incomeRight:"Expenses_incomeRight__2zqFc",incomeLeftt:"Expenses_incomeLeftt__ij4mb",itemsContainer:"Expenses_itemsContainer__T-8gs",rcv:"Expenses_rcv__ISWv4",text:"Expenses_text__i5X3G",btn_sticky:"Expenses_btn_sticky__1TcSQ",btn:"Expenses_btn__cNC+9",history:"Expenses_history__CLyBV",incomeRightt:"Expenses_incomeRightt__vVJ9u",incomeTop:"Expenses_incomeTop__1feiL",right:"Expenses_right__WGHle",rightHead:"Expenses_rightHead__hNBqR",rightBody:"Expenses_rightBody__PiO53",detail:"Expenses_detail__4gKhn",detailTop:"Expenses_detailTop__WsjOM",detailTopLeft:"Expenses_detailTopLeft__510xc",detailTopMid:"Expenses_detailTopMid__zOu1F",detailTopRight:"Expenses_detailTopRight__ZguGm",detailContent:"Expenses_detailContent__AGhrd",imagediv:"Expenses_imagediv__mqvvF",backh:"Expenses_backh__QvVo3",invoice_number:"Expenses_invoice_number__OuRkm",card_container:"Expenses_card_container__mM+1N",sidebarheader:"Expenses_sidebarheader__vb7ql"};function N(e){var n,i=e.expense,s=e.setDetailView,t=e.setExpenseId,a=e.all,o=(0,c.$G)().t;return(0,x.jsxs)("div",{onClick:function(){s(!0),t(i)},className:E.card_container,children:[(0,x.jsxs)("h6",{className:E.invoice_number,children:["Invoice No: ",null===a||void 0===a?void 0:a.invoice_number]}),(0,x.jsxs)("div",{className:E.sidebarheader,children:[(0,x.jsxs)("div",{className:E.text,children:[(0,x.jsxs)("p",{className:E.rcv,children:[o("paid_to"),(0,x.jsxs)("span",{style:{position:"absolute",right:"2%",marginTop:"-5px"},children:[null!==a&&void 0!==a&&a.expense_quantity?null===a||void 0===a?void 0:a.expense_quantity:"N/A "," Quantity"]})]}),(0,x.jsx)("h6",{children:null!==a&&void 0!==a&&a.expensePaid?null===a||void 0===a?void 0:a.expensePaid:null===a||void 0===a||null===(n=a.expensePaidUser)||void 0===n?void 0:n.userLegalName}),(0,x.jsx)("p",{className:E.rcv,children:g()(null===a||void 0===a?void 0:a.createdAt).format("LL")})]}),(0,x.jsxs)("div",{className:E.text,children:[(0,x.jsx)("p",{className:E.rcv1}),(0,x.jsxs)("h6",{children:["Rs. ",null===a||void 0===a?void 0:a.expenseAmount]}),(0,x.jsx)("p",{className:E.rcv,children:null===a||void 0===a?void 0:a.expenseAccount})]})]})]})}var b=a.forwardRef((function(e,n){var i;return(0,x.jsxs)("div",{className:E.incomeLeftt,children:[!(null!==e&&void 0!==e&&e.fId)&&(0,x.jsx)("div",{className:"".concat(E.btn," ").concat(E.btn_sticky),onClick:null===e||void 0===e?void 0:e.viewForm,children:(0,x.jsx)("img",{src:"/images/addplus.svg",alt:""})}),(0,x.jsx)("div",{className:E.itemsContainer,children:null===e||void 0===e||null===(i=e.allExpense)||void 0===i?void 0:i.map((function(i,s){var t;return(null===e||void 0===e||null===(t=e.allExpense)||void 0===t?void 0:t.length)===s+1?(0,x.jsx)("div",{ref:n,children:(0,x.jsx)(N,{expense:"".concat(null===i||void 0===i?void 0:i._id),setDetailView:null===e||void 0===e?void 0:e.setDetailView,setExpenseId:null===e||void 0===e?void 0:e.setExpenseId,all:i})},s):(0,x.jsx)(N,{expense:"".concat(null===i||void 0===i?void 0:i._id),setDetailView:null===e||void 0===e?void 0:e.setDetailView,setExpenseId:null===e||void 0===e?void 0:e.setExpenseId,all:i},s)}))})]})}));var y=function(e){var n,i,s,t,a,o,r,d,u,v,h,p,_,f=e.detailview,m=e.eBalance,j=e.expenseId,N=e.setDetailView,b=(0,l.Ro)("".concat(j),{skip:!j}).data,y=(0,c.$G)().t;return(0,x.jsx)(x.Fragment,{children:(0,x.jsx)("div",{className:E.incomeRightt,children:f?(0,x.jsxs)("div",{className:E.detail,children:[(0,x.jsxs)("div",{className:E.detailTop,children:[(0,x.jsx)("div",{className:E.detailTopLeft,children:(0,x.jsx)("h6",{onClick:function(){return N(!1)},children:y("back")})}),(0,x.jsx)("div",{className:E.detailTopMid,children:(0,x.jsx)("h6",{children:null!==b&&void 0!==b&&null!==(n=b.oneExpense)&&void 0!==n&&n.expensePaid?null===b||void 0===b||null===(i=b.oneExpense)||void 0===i?void 0:i.expensePaid:null===b||void 0===b||null===(s=b.oneExpense)||void 0===s||null===(t=s.expensePaidUser)||void 0===t?void 0:t.userLegalName})}),(0,x.jsxs)("div",{className:E.detailTopRight,children:["Rs. ",null===b||void 0===b||null===(a=b.oneExpense)||void 0===a?void 0:a.expenseAmount]})]}),(0,x.jsxs)("div",{className:E.detailContent,children:[(0,x.jsx)("p",{children:y("transaction_mode")}),(0,x.jsxs)("h6",{children:[null===b||void 0===b||null===(o=b.oneExpense)||void 0===o?void 0:o.expenseAccount," ",y("payment")," "]})]}),null!==b&&void 0!==b&&null!==(r=b.oneExpense)&&void 0!==r&&r.expense_good_name?(0,x.jsxs)("div",{className:E.detailContent,children:[(0,x.jsx)("p",{children:y("name_of_good")}),(0,x.jsx)("h6",{children:null===b||void 0===b||null===(d=b.oneExpense)||void 0===d?void 0:d.expense_good_name})]}):"",null!==b&&void 0!==b&&null!==(u=b.oneExpense)&&void 0!==u&&u.expense_quantity?(0,x.jsxs)("div",{className:E.detailContent,children:[(0,x.jsx)("p",{children:y("quantity_of_goods")}),(0,x.jsx)("h6",{children:null===b||void 0===b||null===(v=b.oneExpense)||void 0===v?void 0:v.expense_quantity})]}):"",(0,x.jsxs)("div",{className:E.detailContent,children:[(0,x.jsx)("p",{children:y("reason")}),(0,x.jsx)("h6",{children:null===b||void 0===b||null===(h=b.oneExpense)||void 0===h?void 0:h.expensePurpose})]}),(0,x.jsxs)("div",{className:E.detailContent,children:[(0,x.jsx)("p",{children:y("description")}),(0,x.jsx)("h6",{children:null===b||void 0===b||null===(p=b.oneExpense)||void 0===p?void 0:p.expenseDesc})]}),(0,x.jsxs)("div",{className:E.detailContent,children:[(0,x.jsx)("p",{children:y("day_date")}),(0,x.jsx)("h6",{children:g()(null===b||void 0===b||null===(_=b.oneExpense)||void 0===_?void 0:_.createdAt).format("LL")})]}),(0,x.jsxs)("div",{className:E.detailContent,children:[(0,x.jsx)("p",{children:y("ack_rcpt")}),(0,x.jsxs)("div",{className:E.imagediv,children:[(0,x.jsx)("img",{src:"/images/image-icon.svg",alt:""}),(0,x.jsx)("p",{children:"img07.png"})]})]})]}):(0,x.jsxs)("div",{className:E.right,children:[(0,x.jsxs)("div",{className:E.rightHead,children:[(0,x.jsx)("h6",{children:y("total_expenditure")}),(0,x.jsxs)("h6",{children:["Rs."," ",(null===m||void 0===m?void 0:m.financeExpenseCashBalance)+(null===m||void 0===m?void 0:m.financeExpenseBankBalance)]})]}),(0,x.jsxs)("div",{className:E.rightBody,children:[(0,x.jsxs)("h6",{children:[" ",y("by_cash")," : Rs. ",null===m||void 0===m?void 0:m.financeExpenseCashBalance]}),(0,x.jsxs)("h6",{children:[" ",y("by_bank")," : Rs. ",null===m||void 0===m?void 0:m.financeExpenseBankBalance]})]})]})})})},Z=i(23441),C=i(11105),k=i(65543);var S=function(e){var n=e.fId,i=(0,c.$G)().t,r=(0,a.useState)(0),d=(0,t.Z)(r,2),u=d[0],v=d[1],h=(0,a.useState)(!1),p=(0,t.Z)(h,2),_=p[0],f=p[1],j=(0,a.useState)(""),g=(0,t.Z)(j,2),N=g[0],S=g[1],w=(0,a.useState)(1),F=(0,t.Z)(w,2),I=F[0],L=F[1],R=(0,a.useState)(!0),q=(0,t.Z)(R,2),D=q[0],A=q[1],T=(0,Z.YD)(),P=(0,t.Z)(T,2),U=P[0],B=P[1],O=a.useState([]),V=(0,t.Z)(O,2),M=V[0],W=V[1],G=(0,a.useState)(!0),H=(0,t.Z)(G,2),z=H[0],J=H[1],$=(0,a.useState)(!1),Y=(0,t.Z)($,2),K=Y[0],Q=Y[1],X=(0,o.v9)((function(e){return e.financeChange})),ee=(0,l.F4)("".concat(null!==X&&void 0!==X&&X.fid?null===X||void 0===X?void 0:X.fid:n),{skip:null!==X&&void 0!==X&&X.fid?!(null!==X&&void 0!==X&&X.fid):!n}),ne=ee.data,ie=ee.refetch,se=(0,l.V4)({fid:"".concat(null!==X&&void 0!==X&&X.fid?null===X||void 0===X?void 0:X.fid:n),page:I,limit:10},{skip:null!==X&&void 0!==X&&X.fid?!(null!==X&&void 0!==X&&X.fid):!n}),te=se.data,ae=se.refetch,oe=(0,k.u)().scrollToTop;return(0,a.useEffect)((function(){oe()}),[]),(0,a.useEffect)((function(){(n||null!==X&&void 0!==X&&X.fid)&&ie()}),[ie,null===X||void 0===X?void 0:X.fid,n]),(0,a.useEffect)((function(){B&&D&&L((function(e){return e+1}))}),[B,D]),(0,a.useEffect)((function(){K&&L(1)}),[K]),(0,a.useEffect)((function(){(n||null!==X&&void 0!==X&&X.fid)&&(J(!0),ae())}),[I,n,null===X||void 0===X?void 0:X.fid,ae]),(0,a.useEffect)((function(){K&&null!==X&&void 0!==X&&X.fid&&(J(!0),ae())}),[K,null===X||void 0===X?void 0:X.fid,ae]),(0,a.useEffect)((function(){var e,n;if(K)W(null===te||void 0===te?void 0:te.allIncome),Q(!1),J(!1);else if(null!==te&&void 0!==te&&te.allIncome){var i=[].concat((0,s.Z)(M),(0,s.Z)(null===te||void 0===te?void 0:te.allIncome)),t=(0,s.Z)(new Set(i.map(JSON.stringify))).map(JSON.parse);W(t),J(!1)}else 0===(null===te||void 0===te||null===(n=te.allIncome)||void 0===n?void 0:n.length)&&J(!1);10===(null===te||void 0===te||null===(e=te.allIncome)||void 0===e?void 0:e.length)?A(!0):A(!1)}),[null===te||void 0===te?void 0:te.allIncome]),(0,x.jsxs)(x.Fragment,{children:[0===u&&(0,x.jsxs)("div",{className:E.incomeContainer,children:[(0,x.jsx)("div",{className:E.incomeTop,children:(0,x.jsx)("div",{className:E.history,children:i("payment_history")})}),(0,x.jsxs)("div",{className:E.income,children:[(0,x.jsxs)("div",{className:E.incomeLeft,children:[(0,x.jsx)(b,{viewForm:function(){return v(1)},setDetailView:f,allExpense:M,setExpenseId:S,fId:n,ref:U}),z&&(0,x.jsx)(C.Z,{})]}),(0,x.jsx)("div",{className:E.incomeRight,children:(0,x.jsx)(y,{detailview:_,eBalance:null===ne||void 0===ne?void 0:ne.expenseBalance,expenseId:N,setExpenseId:S,setDetailView:f})})]})]}),1===u&&(0,x.jsx)("div",{className:E.income,children:(0,x.jsx)(m,{setViewIndex:v,onRefetchWhenCreateExpense:function(){Q(!0),ie()}})})]})}},14124:function(e,n,i){i.d(n,{Z:function(){return g}});var s=i(93433),t=i(29439),a=i(72791),o=i(23441),l=i(95048),r=i(763),c="SearchUniversalUser_assign_title__UztZK",d="SearchUniversalUser_assign_search_container__kPO7h",u="SearchUniversalUser_assign_search_input__iF9F8",v="SearchUniversalUser_assign_show_list__-wdiL",x="SearchUniversalUser_assign_show_list_each__IWoKL",h="SearchUniversalUser_assign_each_paragraph__8oEu6",p=i(5574),_=i(39230),f=i(12923),m=i(69721),j=i(80184),g=function(e){var n=e.onClose,i=e.title,g=e.headSelect,E=e.assignHead,N=e.disabledId,b=(0,_.$G)().t,y=(0,a.useState)(1),Z=(0,t.Z)(y,2),C=Z[0],k=Z[1],S=(0,a.useState)(!0),w=(0,t.Z)(S,2),F=w[0],I=w[1],L=(0,o.YD)(),R=(0,t.Z)(L,2),q=R[0],D=R[1],A=(0,a.useState)(""),T=(0,t.Z)(A,2),P=T[0],U=T[1],B=a.useState([]),O=(0,t.Z)(B,2),V=O[0],M=O[1],W=(0,l.v9)((function(e){return e.idChange})),G=(0,f.Em)({search:P,page:C,limit:10}),H=G.universalUser,z=G.universalUserRefetch;a.useEffect((function(){null!==W&&void 0!==W&&W.id&&z()}),[null===W||void 0===W?void 0:W.id,z,C]),(0,a.useEffect)((function(){D&&F&&k((function(e){return e+1}))}),[D,F]),a.useEffect((function(){if(null!==H&&void 0!==H&&H.user)if(P)M(null===H||void 0===H?void 0:H.user);else{var e=[].concat((0,s.Z)(V),(0,s.Z)(null===H||void 0===H?void 0:H.user)),n=(0,s.Z)(new Set(e.map(JSON.stringify))).map(JSON.parse);M(n)}10===(null===H||void 0===H?void 0:H.user.length)?I(!0):I(!1)}),[null===H||void 0===H?void 0:H.user]),(0,a.useEffect)((function(){P&&J()}),[P]);var J=function(){z()},$=(0,a.useCallback)((0,r.debounce)((function(e){return U(e)}),500),[]),Y=function(e){N===(null===e||void 0===e?void 0:e._id)||(g(e),n())};return(0,j.jsx)(p.Z,{open:E,onClose:n,children:(0,j.jsxs)("div",{style:{backgroundColor:"#FAFAFA"},children:[(0,j.jsxs)("div",{className:c,children:[(0,j.jsx)("h5",{children:i}),(0,j.jsx)("img",{src:"/images/close-post-icon.svg",onClick:n,alt:"staff assign pop close icon"})]}),(0,j.jsxs)("div",{className:d,children:[(0,j.jsx)("input",{type:"text",placeholder:b("search"),className:u,onChange:function(e){return n=e.target.value,void $(n);var n}}),(0,j.jsx)("img",{src:"/images/search-dash-icon.svg",alt:"search icon"})]}),(0,j.jsx)("div",{className:v,children:null===V||void 0===V?void 0:V.map((function(e,n){return(null===V||void 0===V?void 0:V.length)===n+1?(0,j.jsxs)("div",{ref:q,children:[(0,j.jsxs)("div",{className:x,style:N===e._id?{backgroundColor:"rgba(75, 26, 133, 0.1)"}:{backgroundColor:"inherit"},onClick:function(){return Y(e)},children:[(0,j.jsx)("img",{src:null!==e&&void 0!==e&&e.profilePhoto?"".concat(m.yI,"/").concat(e.profilePhoto):"/images/member_tab/class/default_avatar.svg",alt:"staff profile avatar"}),(0,j.jsxs)("div",{className:h,children:[(0,j.jsx)("h6",{children:null===e||void 0===e?void 0:e.userLegalName}),(0,j.jsx)("p",{children:null===e||void 0===e?void 0:e.username})]})]}),(0,j.jsx)("hr",{})]},e._id):(0,j.jsxs)("div",{children:[(0,j.jsxs)("div",{className:x,style:N===e._id?{backgroundColor:"rgba(75, 26, 133, 0.1)"}:{backgroundColor:"inherit"},onClick:function(){return Y(e)},children:[(0,j.jsx)("img",{src:null!==e&&void 0!==e&&e.profilePhoto?"".concat(m.yI,"/").concat(e.profilePhoto):"/images/member_tab/class/default_avatar.svg",alt:"staff profile avatar"}),(0,j.jsxs)("div",{className:h,children:[(0,j.jsx)("h6",{children:null===e||void 0===e?void 0:e.userLegalName}),(0,j.jsx)("p",{children:null===e||void 0===e?void 0:e.username})]})]}),(0,j.jsx)("hr",{})]},e._id)}))})]})})}},12923:function(e,n,i){i.d(n,{Ec:function(){return g},Em:function(){return b},JM:function(){return h},NS:function(){return o},Pg:function(){return p},Q_:function(){return j},RH:function(){return x},Tv:function(){return c},U_:function(){return m},VN:function(){return l},Wj:function(){return u},ZS:function(){return v},_8:function(){return E},d5:function(){return d},tB:function(){return f},vI:function(){return N},yx:function(){return r},zO:function(){return _}});var s=i(29439),t=i(91007),a=i(58208),o=function(e){var n=(0,a.YD)(e.search,{skip:e.skip});return{instituteAllSearch:n.data,instituteAllSearchRefetch:n.refetch}},l=function(){var e=(0,a.ak)();return[(0,s.Z)(e,1)[0]]},r=function(){var e=(0,a.WL)();return[(0,s.Z)(e,1)[0]]},c=function(e){var n=(0,a.pH)(e.list,{skip:e.skip});return{instituteFollowList:n.data,instituteFollowListRefetch:n.refetch}},d=function(e){var n=(0,a.MG)(e.data,{skip:e.skip});return{instituteOwnFollowingList:n.data,instituteOwnFollowingListRefetch:n.refetch}},u=function(){var e=(0,a.Ky)();return[(0,s.Z)(e,1)[0]]},v=function(e){var n=(0,a.p8)(e.list);return{userFollowList:n.data,userFollowListRefetch:n.refetch}},x=function(e){var n=(0,a.Wv)(e);return{userFollowingList:n.data,userFollowingListRefetch:n.refetch}},h=function(e){var n=(0,a.sz)(e.search,{skip:e.skip});return{userAllSearch:n.data,userAllSearchRefetch:n.refetch}},p=function(){var e=(0,a.Mk)();return[(0,s.Z)(e,1)[0]]},_=function(){var e=(0,a.$i)();return[(0,s.Z)(e,1)[0]]},f=function(){var e=(0,a.Do)();return[(0,s.Z)(e,1)[0]]},m=function(){var e=(0,a.He)();return[(0,s.Z)(e,1)[0]]},j=function(){var e=(0,a.vg)();return[(0,s.Z)(e,1)[0]]},g=function(){var e=(0,a.OO)();return[(0,s.Z)(e,1)[0]]},E=function(e){var n=(0,a.N2)(e);return{userCircleList:n.data,userCircleListRefetch:n.refetch}},N=function(e){var n=(0,t.x6)(e.search,{skip:e.skip});return{assignSearchStaff:n.data,assignSearchStaffRefetch:n.refetch}},b=function(e){var n=(0,a.SJ)(e);return{universalUser:n.data,universalUserRefetch:n.refetch}}}}]);
//# sourceMappingURL=2720.318bdd72.chunk.js.map