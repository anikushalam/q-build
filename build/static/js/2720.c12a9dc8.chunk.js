"use strict";(self.webpackChunkmithkal_qviple=self.webpackChunkmithkal_qviple||[]).push([[2720],{2720:function(e,n,s){s.r(n),s.d(n,{default:function(){return S}});var i=s(93433),a=s(29439),t=s(72791),o=s(78687),l=s(14304),d=s(1413),c=s(39230),r={incomeForm:"ExpenseForm_incomeForm__WfJN7",expense_tab:"ExpenseForm_expense_tab__FL-G2",expense_tabh6:"ExpenseForm_expense_tabh6__S5E0f",expense_tabh6_active:"ExpenseForm_expense_tabh6_active__8URA2",top:"ExpenseForm_top__YZdgy",mid:"ExpenseForm_mid__TaWvT",row:"ExpenseForm_row__3sWac",input:"ExpenseForm_input__mneaR",down:"ExpenseForm_down__RWE-4",options:"ExpenseForm_options__rPglH",option:"ExpenseForm_option__uObSO",aadhar:"ExpenseForm_aadhar__a1-PM",btn:"ExpenseForm_btn__EcN5E",row_search:"ExpenseForm_row_search__gV6Z8"},u=s(14124),v=s(98734),x=s(80184),p={position:"relative",zIndex:1},h={position:"absolute",right:"0",top:"2.2vw",zIndex:10},_={position:"fixed",top:0,left:0,right:0,bottom:0,zIndex:10};function m(e){var n=e.setIncomeData,s=e.open,i=e.onClose,a=e.incomeData,t=e.setIsOpen,o=(0,c.$G)().t;return s?(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)("div",{onClick:i,style:_}),(0,x.jsxs)("div",{style:h,className:r.options,children:[(0,x.jsx)("div",{className:r.option,onClick:function(){n((0,d.Z)((0,d.Z)({},a),{},{tMode:"By Cash"})),t(!1)},children:o("by_cash")}),(0,x.jsx)("div",{className:r.option,onClick:function(){n((0,d.Z)((0,d.Z)({},a),{},{tMode:"By Bank"})),t(!1)},children:o("by_bank")})]})]}):null}var f=function(e){var n=e.onRefetchWhenCreateExpense,s=e.setViewIndex,i=(0,c.$G)().t,h=(0,o.useSelector)((function(e){return e.financeChange})),_=(0,l.Uo)(),f=(0,a.Z)(_,1)[0],j=(0,t.useState)(!1),g=(0,a.Z)(j,2),E=g[0],N=g[1],b=(0,t.useState)(0),y=(0,a.Z)(b,2),C=y[0],Z=y[1],k=(0,t.useState)(!1),S=(0,a.Z)(k,2),w=S[0],I=S[1],F=(0,t.useState)(""),q=(0,a.Z)(F,2),R=q[0],D=q[1],L=(0,t.useState)(!1),T=(0,a.Z)(L,2),P=T[0],A=T[1],U=document.querySelector("textarea");null===U||void 0===U||U.addEventListener("keyup",(function(e){U.style.height="auto";var n=e.target.scrollHeight;U.style.height="".concat(n,"px")}));var B=(0,t.useState)({tMode:""}),V=(0,a.Z)(B,2),O=V[0],M=V[1],G=(0,t.useState)(""),W=(0,a.Z)(G,2),H=W[0],z=W[1],J=(0,t.useState)({expensePaid:"",expenseAmount:"",expenseDesc:"",expense_quantity:"",expense_good_name:""}),$=(0,a.Z)(J,2),Y=$[0],K=$[1];return(0,x.jsxs)("div",{className:r.incomeForm,children:[(0,x.jsxs)("div",{className:r.expense_tab,children:[(0,x.jsx)("h6",{className:0===C?"".concat(r.expense_tabh6_active," ").concat(r.expense_tabh6):r.expense_tabh6,onClick:function(){return Z(0)},children:"Nominal Expenses"}),(0,x.jsx)("h6",{className:1===C?"".concat(r.expense_tabh6_active," ").concat(r.expense_tabh6):r.expense_tabh6,onClick:function(){return Z(1)},children:"Assets / Inventory"})]}),(0,x.jsxs)("form",{onSubmit:function(e){e.preventDefault(),A((function(e){return!e}));var i=new FormData;R||i.append("expensePaid",Y.expensePaid),1===C&&(i.append("expense_quantity",Y.expense_quantity),i.append("expense_good_name",Y.expense_good_name)),i.append("expenseAmount",Y.expenseAmount),i.append("expenseDesc",Y.expenseDesc),i.append("expenseAccount",O.tMode),i.append("file",H),i&&f({fData:i,fid:null===h||void 0===h?void 0:h.fid,is_inventory:1===C||"",user_query:R}).then((function(e){e.data.status&&(n(),s(0),A((function(e){return!e})))})).catch((function(){A((function(e){return!e}))}))},children:[(0,x.jsxs)("div",{className:r.mid,children:[(0,x.jsxs)("div",{className:r.row,children:[(0,x.jsx)("h6",{children:i("select_transaction_mode")}),(0,x.jsxs)("div",{className:r.input,style:p,children:[(0,x.jsxs)("div",{children:[""!==(null===O||void 0===O?void 0:O.tMode)?(0,x.jsx)("h6",{onClick:function(){return N(!0)},children:O.tMode}):(0,x.jsxs)("h6",{onClick:function(){return N(!0)},children:[" ",i("please_select_transaction_mode")]}),(0,x.jsx)("img",{className:r.down,src:"/images/downn-icon.svg",alt:""})]}),(0,x.jsx)(m,{open:E,onClose:function(){return N(!1)},setIncomeData:M,incomeData:O,setIsOpen:N})]})]}),1===C&&(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)("div",{className:r.row,children:[(0,x.jsx)("h6",{children:i("name_of_good")}),(0,x.jsx)("input",{type:"text",placeholder:i("name_of_good_placeholder"),name:"expense_good_name",value:Y.expense_good_name,onChange:function(e){return K((0,d.Z)((0,d.Z)({},Y),{},{expense_good_name:e.target.value}))},required:!0})]}),(0,x.jsxs)("div",{className:r.row,children:[(0,x.jsx)("h6",{children:i("quantity_of_goods")}),(0,x.jsx)("input",{type:"number",placeholder:i("quantity_of_goods_placeholder"),name:"expense_quantity",value:Y.expense_quantity,onChange:function(e){return K((0,d.Z)((0,d.Z)({},Y),{},{expense_quantity:e.target.value}))},required:!0})]})]}),(0,x.jsxs)("div",{className:r.row,children:[(0,x.jsx)("h6",{children:i("amount")}),(0,x.jsx)("input",{type:"number",placeholder:i("enter_amount"),name:"expenseAmount",value:Y.expenseAmount,onChange:function(e){return K((0,d.Z)((0,d.Z)({},Y),{},{expenseAmount:e.target.value}))},required:!0})]}),(0,x.jsxs)("div",{className:r.row,children:[(0,x.jsxs)("h6",{children:[i("paid_to"),(0,x.jsxs)("span",{className:r.row_search,onClick:function(){return I(!0)},children:[(0,x.jsx)("img",{style:{width:"16px",height:"16px"},src:"/images/search-icon.svg",alt:"search icon"}),"Search & Select"]})]}),(0,x.jsx)("input",{type:"text",placeholder:i("paid_to_user"),name:"expensePaid",value:Y.expensePaid,onChange:function(e){return K((0,d.Z)((0,d.Z)({},Y),{},{expensePaid:e.target.value}))},required:!0})]}),(0,x.jsxs)("div",{className:r.row,children:[(0,x.jsx)("h6",{children:i("description")}),(0,x.jsx)("textarea",{className:r.postTextarea,type:"text",name:"expenseDesc",placeholder:i("description_details"),value:Y.expenseDesc,onChange:function(e){return K((0,d.Z)((0,d.Z)({},Y),{},{expenseDesc:e.target.value}))}})]}),(0,x.jsxs)("div",{className:r.row,children:[(0,x.jsx)("h6",{children:i("ack_rcpt")}),(0,x.jsx)("input",{type:"file",className:r.aadhar,name:"file",onChange:function(e){z((function(){return e.target.files[0]}))}})]}),(0,x.jsx)("button",{type:"submit",className:r.btn,children:i("save_receipt")})]}),w&&(0,x.jsx)(u.Z,{onClose:function(){return I(!1)},title:"Search User",disabledId:R,assignHead:w,headSelect:function(e){D(null===e||void 0===e?void 0:e._id),I(!1),K((function(n){return(0,d.Z)((0,d.Z)({},n),{},{expensePaid:null===e||void 0===e?void 0:e.userLegalName})}))}})]}),P&&(0,x.jsx)(v.Z,{})]})},j=s(72426),g=s.n(j),E={incomeContainer:"Expenses_incomeContainer__WqfR9",income:"Expenses_income__va93-",incomeLeft:"Expenses_incomeLeft__Y1xsk",incomeRight:"Expenses_incomeRight__2zqFc",incomeLeftt:"Expenses_incomeLeftt__ij4mb",itemsContainer:"Expenses_itemsContainer__T-8gs",rcv:"Expenses_rcv__ISWv4",text:"Expenses_text__i5X3G",btn_sticky:"Expenses_btn_sticky__1TcSQ",btn:"Expenses_btn__cNC+9",history:"Expenses_history__CLyBV",incomeRightt:"Expenses_incomeRightt__vVJ9u",incomeTop:"Expenses_incomeTop__1feiL",right:"Expenses_right__WGHle",rightHead:"Expenses_rightHead__hNBqR",rightBody:"Expenses_rightBody__PiO53",detail:"Expenses_detail__4gKhn",detailTop:"Expenses_detailTop__WsjOM",detailTopLeft:"Expenses_detailTopLeft__510xc",detailTopMid:"Expenses_detailTopMid__zOu1F",detailTopRight:"Expenses_detailTopRight__ZguGm",detailContent:"Expenses_detailContent__AGhrd",imagediv:"Expenses_imagediv__mqvvF",backh:"Expenses_backh__QvVo3",invoice_number:"Expenses_invoice_number__OuRkm",card_container:"Expenses_card_container__mM+1N",sidebarheader:"Expenses_sidebarheader__vb7ql"};function N(e){var n,s=e.expense,i=e.setDetailView,a=e.setExpenseId,t=e.all,o=(0,c.$G)().t;return(0,x.jsxs)("div",{onClick:function(){i(!0),a(s)},className:E.card_container,children:[(0,x.jsxs)("h6",{className:E.invoice_number,children:["Invoice No: ",null===t||void 0===t?void 0:t.invoice_number]}),(0,x.jsxs)("div",{className:E.sidebarheader,children:[(0,x.jsxs)("div",{className:E.text,children:[(0,x.jsxs)("p",{className:E.rcv,children:[o("paid_to"),(0,x.jsxs)("span",{style:{position:"absolute",right:"2%",marginTop:"-5px"},children:[null!==t&&void 0!==t&&t.expense_quantity?null===t||void 0===t?void 0:t.expense_quantity:"N/A "," Quantity"]})]}),(0,x.jsx)("h6",{children:null!==t&&void 0!==t&&t.expensePaid?null===t||void 0===t?void 0:t.expensePaid:null===t||void 0===t||null===(n=t.expensePaidUser)||void 0===n?void 0:n.userLegalName}),(0,x.jsx)("p",{className:E.rcv,children:g()(null===t||void 0===t?void 0:t.createdAt).format("LL")})]}),(0,x.jsxs)("div",{className:E.text,children:[(0,x.jsx)("p",{className:E.rcv1}),(0,x.jsxs)("h6",{children:["Rs. ",null===t||void 0===t?void 0:t.expenseAmount]}),(0,x.jsx)("p",{className:E.rcv,children:null===t||void 0===t?void 0:t.expenseAccount})]})]})]})}var b=t.forwardRef((function(e,n){var s;return(0,x.jsxs)("div",{className:E.incomeLeftt,children:[!(null!==e&&void 0!==e&&e.fId)&&(0,x.jsx)("div",{className:"".concat(E.btn," ").concat(E.btn_sticky),onClick:null===e||void 0===e?void 0:e.viewForm,children:(0,x.jsx)("img",{src:"/images/addplus.svg",alt:""})}),(0,x.jsx)("div",{className:E.itemsContainer,children:null===e||void 0===e||null===(s=e.allExpense)||void 0===s?void 0:s.map((function(s,i){var a;return(null===e||void 0===e||null===(a=e.allExpense)||void 0===a?void 0:a.length)===i+1?(0,x.jsx)("div",{ref:n,children:(0,x.jsx)(N,{expense:"".concat(null===s||void 0===s?void 0:s._id),setDetailView:null===e||void 0===e?void 0:e.setDetailView,setExpenseId:null===e||void 0===e?void 0:e.setExpenseId,all:s})},i):(0,x.jsx)(N,{expense:"".concat(null===s||void 0===s?void 0:s._id),setDetailView:null===e||void 0===e?void 0:e.setDetailView,setExpenseId:null===e||void 0===e?void 0:e.setExpenseId,all:s},i)}))})]})}));var y=function(e){var n,s,i,a,t,o,d,r,u,v,p,h,_,m=e.detailview,f=e.eBalance,j=e.expenseId,N=e.setDetailView,b=(0,l.Ro)("".concat(j),{skip:!j}).data,y=(0,c.$G)().t;return(0,x.jsx)(x.Fragment,{children:(0,x.jsx)("div",{className:E.incomeRightt,children:m?(0,x.jsxs)("div",{className:E.detail,children:[(0,x.jsxs)("div",{className:E.detailTop,children:[(0,x.jsx)("div",{className:E.detailTopLeft,children:(0,x.jsx)("h6",{onClick:function(){return N(!1)},children:y("back")})}),(0,x.jsx)("div",{className:E.detailTopMid,children:(0,x.jsx)("h6",{children:null!==b&&void 0!==b&&null!==(n=b.oneExpense)&&void 0!==n&&n.expensePaid?null===b||void 0===b||null===(s=b.oneExpense)||void 0===s?void 0:s.expensePaid:null===b||void 0===b||null===(i=b.oneExpense)||void 0===i||null===(a=i.expensePaidUser)||void 0===a?void 0:a.userLegalName})}),(0,x.jsxs)("div",{className:E.detailTopRight,children:["Rs. ",null===b||void 0===b||null===(t=b.oneExpense)||void 0===t?void 0:t.expenseAmount]})]}),(0,x.jsxs)("div",{className:E.detailContent,children:[(0,x.jsx)("p",{children:y("transaction_mode")}),(0,x.jsxs)("h6",{children:[null===b||void 0===b||null===(o=b.oneExpense)||void 0===o?void 0:o.expenseAccount," ",y("payment")," "]})]}),null!==b&&void 0!==b&&null!==(d=b.oneExpense)&&void 0!==d&&d.expense_good_name?(0,x.jsxs)("div",{className:E.detailContent,children:[(0,x.jsx)("p",{children:y("name_of_good")}),(0,x.jsx)("h6",{children:null===b||void 0===b||null===(r=b.oneExpense)||void 0===r?void 0:r.expense_good_name})]}):"",null!==b&&void 0!==b&&null!==(u=b.oneExpense)&&void 0!==u&&u.expense_quantity?(0,x.jsxs)("div",{className:E.detailContent,children:[(0,x.jsx)("p",{children:y("quantity_of_goods")}),(0,x.jsx)("h6",{children:null===b||void 0===b||null===(v=b.oneExpense)||void 0===v?void 0:v.expense_quantity})]}):"",(0,x.jsxs)("div",{className:E.detailContent,children:[(0,x.jsx)("p",{children:y("reason")}),(0,x.jsx)("h6",{children:null===b||void 0===b||null===(p=b.oneExpense)||void 0===p?void 0:p.expensePurpose})]}),(0,x.jsxs)("div",{className:E.detailContent,children:[(0,x.jsx)("p",{children:y("description")}),(0,x.jsx)("h6",{children:null===b||void 0===b||null===(h=b.oneExpense)||void 0===h?void 0:h.expenseDesc})]}),(0,x.jsxs)("div",{className:E.detailContent,children:[(0,x.jsx)("p",{children:y("day_date")}),(0,x.jsx)("h6",{children:g()(null===b||void 0===b||null===(_=b.oneExpense)||void 0===_?void 0:_.createdAt).format("LL")})]}),(0,x.jsxs)("div",{className:E.detailContent,children:[(0,x.jsx)("p",{children:y("ack_rcpt")}),(0,x.jsxs)("div",{className:E.imagediv,children:[(0,x.jsx)("img",{src:"/images/image-icon.svg",alt:""}),(0,x.jsx)("p",{children:"img07.png"})]})]})]}):(0,x.jsxs)("div",{className:E.right,children:[(0,x.jsxs)("div",{className:E.rightHead,children:[(0,x.jsx)("h6",{children:y("total_expenditure")}),(0,x.jsxs)("h6",{children:["Rs."," ",(null===f||void 0===f?void 0:f.financeExpenseCashBalance)+(null===f||void 0===f?void 0:f.financeExpenseBankBalance)]})]}),(0,x.jsxs)("div",{className:E.rightBody,children:[(0,x.jsxs)("h6",{children:[" ",y("by_cash")," : Rs. ",null===f||void 0===f?void 0:f.financeExpenseCashBalance]}),(0,x.jsxs)("h6",{children:[" ",y("by_bank")," : Rs. ",null===f||void 0===f?void 0:f.financeExpenseBankBalance]})]})]})})})},C=s(23441),Z=s(11105),k=s(65543);var S=function(e){var n=e.fId,s=(0,c.$G)().t,d=(0,t.useState)(0),r=(0,a.Z)(d,2),u=r[0],v=r[1],p=(0,t.useState)(!1),h=(0,a.Z)(p,2),_=h[0],m=h[1],j=(0,t.useState)(""),g=(0,a.Z)(j,2),N=g[0],S=g[1],w=(0,t.useState)(1),I=(0,a.Z)(w,2),F=I[0],q=I[1],R=(0,t.useState)(!0),D=(0,a.Z)(R,2),L=D[0],T=D[1],P=(0,C.YD)(),A=(0,a.Z)(P,2),U=A[0],B=A[1],V=t.useState([]),O=(0,a.Z)(V,2),M=O[0],G=O[1],W=(0,t.useState)(!0),H=(0,a.Z)(W,2),z=H[0],J=H[1],$=(0,t.useState)(!1),Y=(0,a.Z)($,2),K=Y[0],Q=Y[1],X=(0,o.useSelector)((function(e){return e.financeChange})),ee=(0,l.F4)("".concat(null!==X&&void 0!==X&&X.fid?null===X||void 0===X?void 0:X.fid:n),{skip:null!==X&&void 0!==X&&X.fid?!(null!==X&&void 0!==X&&X.fid):!n}),ne=ee.data,se=ee.refetch,ie=(0,l.V4)({fid:"".concat(null!==X&&void 0!==X&&X.fid?null===X||void 0===X?void 0:X.fid:n),page:F,limit:10},{skip:null!==X&&void 0!==X&&X.fid?!(null!==X&&void 0!==X&&X.fid):!n}),ae=ie.data,te=ie.refetch,oe=(0,k.u)().scrollToTop;return(0,t.useEffect)((function(){oe()}),[]),(0,t.useEffect)((function(){(n||null!==X&&void 0!==X&&X.fid)&&se()}),[se,null===X||void 0===X?void 0:X.fid,n]),(0,t.useEffect)((function(){B&&L&&q((function(e){return e+1}))}),[B,L]),(0,t.useEffect)((function(){K&&q(1)}),[K]),(0,t.useEffect)((function(){(n||null!==X&&void 0!==X&&X.fid)&&(J(!0),te())}),[F,n,null===X||void 0===X?void 0:X.fid,te]),(0,t.useEffect)((function(){K&&null!==X&&void 0!==X&&X.fid&&(J(!0),te())}),[K,null===X||void 0===X?void 0:X.fid,te]),(0,t.useEffect)((function(){var e,n;if(K)G(null===ae||void 0===ae?void 0:ae.allIncome),Q(!1),J(!1);else if(null!==ae&&void 0!==ae&&ae.allIncome){var s=[].concat((0,i.Z)(M),(0,i.Z)(null===ae||void 0===ae?void 0:ae.allIncome)),a=(0,i.Z)(new Set(s.map(JSON.stringify))).map(JSON.parse);G(a),J(!1)}else 0===(null===ae||void 0===ae||null===(n=ae.allIncome)||void 0===n?void 0:n.length)&&J(!1);10===(null===ae||void 0===ae||null===(e=ae.allIncome)||void 0===e?void 0:e.length)?T(!0):T(!1)}),[null===ae||void 0===ae?void 0:ae.allIncome]),(0,x.jsxs)(x.Fragment,{children:[0===u&&(0,x.jsxs)("div",{className:E.incomeContainer,children:[(0,x.jsx)("div",{className:E.incomeTop,children:(0,x.jsx)("div",{className:E.history,children:s("payment_history")})}),(0,x.jsxs)("div",{className:E.income,children:[(0,x.jsxs)("div",{className:E.incomeLeft,children:[(0,x.jsx)(b,{viewForm:function(){return v(1)},setDetailView:m,allExpense:M,setExpenseId:S,fId:n,ref:U}),z&&(0,x.jsx)(Z.Z,{})]}),(0,x.jsx)("div",{className:E.incomeRight,children:(0,x.jsx)(y,{detailview:_,eBalance:null===ne||void 0===ne?void 0:ne.expenseBalance,expenseId:N,setExpenseId:S,setDetailView:m})})]})]}),1===u&&(0,x.jsx)("div",{className:E.income,children:(0,x.jsx)(f,{setViewIndex:v,onRefetchWhenCreateExpense:function(){Q(!0),se()}})})]})}},14124:function(e,n,s){s.d(n,{Z:function(){return g}});var i=s(93433),a=s(29439),t=s(72791),o=s(23441),l=s(78687),d=s(763),c="SearchUniversalUser_assign_title__UztZK",r="SearchUniversalUser_assign_search_container__kPO7h",u="SearchUniversalUser_assign_search_input__iF9F8",v="SearchUniversalUser_assign_show_list__-wdiL",x="SearchUniversalUser_assign_show_list_each__IWoKL",p="SearchUniversalUser_assign_each_paragraph__8oEu6",h=s(5574),_=s(39230),m=s(12923),f=s(69721),j=s(80184),g=function(e){var n=e.onClose,s=e.title,g=e.headSelect,E=e.assignHead,N=e.disabledId,b=(0,_.$G)().t,y=(0,t.useState)(1),C=(0,a.Z)(y,2),Z=C[0],k=C[1],S=(0,t.useState)(!0),w=(0,a.Z)(S,2),I=w[0],F=w[1],q=(0,o.YD)(),R=(0,a.Z)(q,2),D=R[0],L=R[1],T=(0,t.useState)(""),P=(0,a.Z)(T,2),A=P[0],U=P[1],B=t.useState([]),V=(0,a.Z)(B,2),O=V[0],M=V[1],G=(0,l.useSelector)((function(e){return e.idChange})),W=(0,m.Em)({search:A,page:Z,limit:10}),H=W.universalUser,z=W.universalUserRefetch;t.useEffect((function(){null!==G&&void 0!==G&&G.id&&z()}),[null===G||void 0===G?void 0:G.id,z,Z]),(0,t.useEffect)((function(){L&&I&&k((function(e){return e+1}))}),[L,I]),t.useEffect((function(){if(null!==H&&void 0!==H&&H.user)if(A)M(null===H||void 0===H?void 0:H.user);else{var e=[].concat((0,i.Z)(O),(0,i.Z)(null===H||void 0===H?void 0:H.user)),n=(0,i.Z)(new Set(e.map(JSON.stringify))).map(JSON.parse);M(n)}10===(null===H||void 0===H?void 0:H.user.length)?F(!0):F(!1)}),[null===H||void 0===H?void 0:H.user]),(0,t.useEffect)((function(){A&&J()}),[A]);var J=function(){z()},$=(0,t.useCallback)((0,d.debounce)((function(e){return U(e)}),500),[]),Y=function(e){N===(null===e||void 0===e?void 0:e._id)||(g(e),n())};return(0,j.jsx)(h.Z,{open:E,onClose:n,children:(0,j.jsxs)("div",{style:{backgroundColor:"#FAFAFA"},children:[(0,j.jsxs)("div",{className:c,children:[(0,j.jsx)("h5",{children:s}),(0,j.jsx)("img",{src:"/images/close-post-icon.svg",onClick:n,alt:"staff assign pop close icon"})]}),(0,j.jsxs)("div",{className:r,children:[(0,j.jsx)("input",{type:"text",placeholder:b("search"),className:u,onChange:function(e){return n=e.target.value,void $(n);var n}}),(0,j.jsx)("img",{src:"/images/search-dash-icon.svg",alt:"search icon"})]}),(0,j.jsx)("div",{className:v,children:null===O||void 0===O?void 0:O.map((function(e,n){return(null===O||void 0===O?void 0:O.length)===n+1?(0,j.jsxs)("div",{ref:D,children:[(0,j.jsxs)("div",{className:x,style:N===e._id?{backgroundColor:"rgba(75, 26, 133, 0.1)"}:{backgroundColor:"inherit"},onClick:function(){return Y(e)},children:[(0,j.jsx)("img",{src:null!==e&&void 0!==e&&e.profilePhoto?"".concat(f.yI,"/").concat(e.profilePhoto):"/images/demo_users/user1.svg",alt:"staff profile avatar"}),(0,j.jsxs)("div",{className:p,children:[(0,j.jsx)("h6",{children:null===e||void 0===e?void 0:e.userLegalName}),(0,j.jsx)("p",{children:null===e||void 0===e?void 0:e.username})]})]}),(0,j.jsx)("hr",{})]},e._id):(0,j.jsxs)("div",{children:[(0,j.jsxs)("div",{className:x,style:N===e._id?{backgroundColor:"rgba(75, 26, 133, 0.1)"}:{backgroundColor:"inherit"},onClick:function(){return Y(e)},children:[(0,j.jsx)("img",{src:null!==e&&void 0!==e&&e.profilePhoto?"".concat(f.yI,"/").concat(e.profilePhoto):"/images/demo_users/user1.svg",alt:"staff profile avatar"}),(0,j.jsxs)("div",{className:p,children:[(0,j.jsx)("h6",{children:null===e||void 0===e?void 0:e.userLegalName}),(0,j.jsx)("p",{children:null===e||void 0===e?void 0:e.username})]})]}),(0,j.jsx)("hr",{})]},e._id)}))})]})})}}}]);
//# sourceMappingURL=2720.c12a9dc8.chunk.js.map