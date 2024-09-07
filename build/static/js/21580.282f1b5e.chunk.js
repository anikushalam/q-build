"use strict";(self.webpackChunkmithkal_qviple=self.webpackChunkmithkal_qviple||[]).push([[21580],{72952:(e,t,n)=>{n.d(t,{Z:()=>i});n(72791);var a=n(39230),l=n(38733),o=n(80184);const i=e=>{var t;let{labelText:n,name:i,type:s,value:r,onChange:d,placeholder:u,errorShow:c,customStyleContainer:_,disabled:v}=e;const{t:m}=(0,a.$G)();return(0,o.jsxs)("div",{className:l.Z.join_form_container,style:{..._},children:[(0,o.jsxs)("label",{className:l.Z.join_form_label,htmlFor:i,children:[n," ",c&&(0,o.jsxs)("span",{style:{color:"red",marginLeft:"15px"},children:["* ",m("form_require_label")]})]}),(0,o.jsx)("textarea",{className:l.Z.join_form_text_area,type:s,value:r,onChange:d,name:i,placeholder:u,rows:r?(null===r||void 0===r||null===(t=r.split("\n"))||void 0===t?void 0:t.length)+3:1,disabled:v})]})}},9846:(e,t,n)=>{n.r(t),n.d(t,{default:()=>M});var a=n(72791),l=n(39230),o=n(16871),i=n(47167),s=n(98094),r=n(10406),d=n(72295),u=n(23441),c=n(11105),_=n(12143),v=n(69721),m=n(80184);const y=e=>{var t,n,a,o;let{viewAs:i,customStyleContainer:r,mentee:d,setOpenMenteeMenu:u}=e;const{t:c}=(0,l.$G)();return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)("div",{className:_.Z.student_card_container,style:r,children:[(0,m.jsx)("img",{src:null!==d&&void 0!==d&&d.studentProfilePhoto?"".concat(v.yI,"/").concat(null===d||void 0===d?void 0:d.studentProfilePhoto):"/images/member_tab/class/default_avatar.svg",alt:"student avatar",loading:"lazy"}),(0,m.jsxs)("div",{className:_.Z.student_container_inner,children:[(0,m.jsx)("h6",{children:"".concat(null!==(t=null===d||void 0===d?void 0:d.studentFirstName)&&void 0!==t?t:""," ").concat(null!==(n=null===d||void 0===d?void 0:d.studentMiddleName)&&void 0!==n?n:""," ").concat(null!==(a=null===d||void 0===d?void 0:d.studentLastName)&&void 0!==a?a:"")}),(0,m.jsxs)("div",{className:_.Z.student_inner_bottom,children:[(0,m.jsxs)("p",{style:{marginTop:"0.6rem"},children:["".concat(null!==(o=null===d||void 0===d?void 0:d.total_query)&&void 0!==o?o:0," "),c("queries_pending")]}),"MENTOR_DETAIL"===i&&(0,m.jsx)("button",{className:_.Z.remove_btn,onClick:()=>u(d),children:c("remove")})]})]})]}),(0,m.jsx)(s.Z,{customStyle:{width:"100%",marginTop:"0.6rem"}})]})};var h=n(80962),p=n(91727),g=n(88409);const q=e=>{var t,n,l,i,_,v,q,x,f,S,j,b,k,w,Z,M,T;let{did:H}=e;const N=(0,o.TH)(),[A,L]=(0,a.useState)(!1),[C,E]=(0,u.YD)(),[D,R]=(0,a.useState)(1),[P,I]=(0,a.useState)(!0),[Q,B]=(0,a.useState)(!0),[F,O]=(0,a.useState)([]),[G,K]=(0,a.useState)(!1),[U,V]=(0,a.useState)(""),{getOneMentorDetail:J,getOneMentorDetailRefetch:X}=(0,p.$f)({mid:null===(t=N.state)||void 0===t?void 0:t.mid,skip:!(null!==(n=N.state)&&void 0!==n&&n.mid)});(0,a.useEffect)((()=>{var e;null!==(e=N.state)&&void 0!==e&&e.mid&&X()}),[null===(l=N.state)||void 0===l?void 0:l.mid,X]);const{getOneMentorMenteeList:$,getOneMentorMenteeListRefetch:z}=(0,p.Gu)({data:{mid:null===(i=N.state)||void 0===i?void 0:i.mid,page:D,limit:10},skip:!(null!==(_=N.state)&&void 0!==_&&_.mid)});(0,a.useEffect)((()=>{var e;null!==(e=N.state)&&void 0!==e&&e.mid&&(B(!0),z())}),[null===(v=N.state)||void 0===v?void 0:v.mid,D,z]),(0,a.useEffect)((()=>{E&&P&&R((e=>e+1))}),[E,P]),(0,a.useEffect)((()=>{var e,t;G?(O(null===$||void 0===$?void 0:$.all_mentees),B(!1),K(!1)):null!==$&&void 0!==$&&$.all_mentees?(O((e=>{var t,n;return null===(t=[...new Set(null===(n=[...e,...null===$||void 0===$?void 0:$.all_mentees])||void 0===n?void 0:n.map(JSON.stringify))])||void 0===t?void 0:t.map(JSON.parse)})),B(!1)):0===(null===$||void 0===$||null===(t=$.all_mentees)||void 0===t?void 0:t.length)&&B(!1);10===(null===$||void 0===$||null===(e=$.all_mentees)||void 0===e?void 0:e.length)?I(!0):I(!1)}),[null===$||void 0===$?void 0:$.all_mentees]);const W=()=>{L((e=>!e))},Y=()=>{R(1),K(!0),B(!0),z()};return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)("div",{className:r.Z.with_search,children:[(0,m.jsx)("h6",{children:"".concat(null!==(q=null===J||void 0===J||null===(x=J.mentor)||void 0===x||null===(f=x.mentor_head)||void 0===f?void 0:f.staffFirstName)&&void 0!==q?q:""," ").concat(null!==(S=null===J||void 0===J||null===(j=J.mentor)||void 0===j||null===(b=j.mentor_head)||void 0===b?void 0:b.staffMiddleName)&&void 0!==S?S:""," ").concat(null!==(k=null===J||void 0===J||null===(w=J.mentor)||void 0===w||null===(Z=w.mentor_head)||void 0===Z?void 0:Z.staffLastName)&&void 0!==k?k:"")}),(0,m.jsxs)("div",{className:r.Z.search_container_filter,children:[(0,m.jsx)("section",{className:r.Z.search_container,children:(0,m.jsxs)("div",{className:r.Z.search_container_input,children:[(0,m.jsx)("img",{className:r.Z.searchIcon,alt:"search icon",src:"/images/search-dash-icon.svg"}),(0,m.jsx)("input",{type:"text",placeholder:"Search"})]})}),(0,m.jsx)("img",{src:"/images/add-plus-blue-icon.svg",alt:"back arrow",className:r.Z.add_plus_icon,onClick:W,title:"Add seating arrangements"})]})]}),(0,m.jsx)(s.Z,{customStyle:{marginTop:"0.5rem",marginBottom:"0.6rem",width:"100%"}}),(0,m.jsx)(d.Z,{viewAs:"MENTOR_DETAIL",mentor:null===J||void 0===J?void 0:J.mentor}),null===F||void 0===F?void 0:F.map(((e,t)=>(null===F||void 0===F?void 0:F.length)===t+1?(0,m.jsx)("div",{ref:C,children:(0,m.jsx)(y,{mentee:e,viewAs:"MENTOR_DETAIL",setOpenMenteeMenu:V})},null===e||void 0===e?void 0:e._id):(0,m.jsx)(y,{mentee:e,viewAs:"MENTOR_DETAIL",setOpenMenteeMenu:V},null===e||void 0===e?void 0:e._id))),Q&&(0,m.jsx)(c.Z,{}),A&&(0,m.jsx)(h.Z,{onClose:W,did:H,mid:null===(M=N.state)||void 0===M?void 0:M.mid,onRefetch:Y}),U&&(0,m.jsx)(g.Z,{onClose:()=>V(""),did:H,mid:null===(T=N.state)||void 0===T?void 0:T.mid,onRefetch:Y,openMenteeMenu:U})]})};var x=n(98734),f=n(36665),S=n(46876);const j=e=>{let{instituteId:t,onClose:n,onRefetch:o,did:i}=e;const{t:s}=(0,l.$G)(),[r,d]=(0,a.useState)(!1),[u,c]=(0,a.useState)(!0),[_]=(0,p.LP)();return(0,m.jsxs)(m.Fragment,{children:[u&&(0,m.jsx)(f.Z,{onClose:n,children:(0,m.jsx)(S.default,{assignHead:u,headSelect:e=>{c(!1),d((e=>!e)),_({did:i,sid:null===e||void 0===e?void 0:e._id}).then((()=>{o(),n(),d((e=>!e))})).catch({})},title:s("staff_list"),onClose:()=>c((e=>!e)),viewAs:"ADMISSION_ADMIN",instituteId:t})}),r&&(0,m.jsx)(x.Z,{})]})},b=e=>{let{carryParentState:t,instituteId:n,did:o}=e;const{t:i}=(0,l.$G)(),[s,_]=(0,a.useState)(!1),[v,y]=(0,u.YD)(),[h,g]=(0,a.useState)(1),[q,x]=(0,a.useState)(!0),[f,S]=(0,a.useState)(!0),[b,k]=(0,a.useState)([]),[w,Z]=(0,a.useState)(!1),{getMentorList:M,getMentorListRefetch:T}=(0,p.LA)({data:{did:o,page:h,limit:10},skip:!o});(0,a.useEffect)((()=>{o&&(S(!0),T())}),[o,h,T]),(0,a.useEffect)((()=>{y&&q&&g((e=>e+1))}),[y,q]),(0,a.useEffect)((()=>{var e,t;w?(k(null===M||void 0===M?void 0:M.all_mentor),S(!1),Z(!1)):null!==M&&void 0!==M&&M.all_mentor?(k((e=>{var t,n;return null===(t=[...new Set(null===(n=[...e,...null===M||void 0===M?void 0:M.all_mentor])||void 0===n?void 0:n.map(JSON.stringify))])||void 0===t?void 0:t.map(JSON.parse)})),S(!1)):0===(null===M||void 0===M||null===(t=M.all_mentor)||void 0===t?void 0:t.length)&&S(!1);10===(null===M||void 0===M||null===(e=M.all_mentor)||void 0===e?void 0:e.length)?x(!0):x(!1)}),[null===M||void 0===M?void 0:M.all_mentor]);const H=()=>{_((e=>!e))};return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("div",{style:{display:"flex",justifyContent:"flex-end"},children:(0,m.jsx)("h6",{className:r.Z.add_new_category,onClick:H,children:i("create_new_mentor")})}),null===b||void 0===b?void 0:b.map(((e,n)=>(null===b||void 0===b?void 0:b.length)===n+1?(0,m.jsx)("div",{ref:v,children:(0,m.jsx)(d.Z,{mentor:e,carryParentState:t})},null===e||void 0===e?void 0:e._id):(0,m.jsx)(d.Z,{mentor:e,carryParentState:t},null===e||void 0===e?void 0:e._id))),f&&(0,m.jsx)(c.Z,{}),s&&(0,m.jsx)(j,{onClose:H,instituteId:n,onRefetch:()=>{g(1),Z(!0),S(!0),T()},did:o})]})};var k=n(37435),w=n(23308),Z=n(93638);const M=e=>{var t,n,d,u,c,_,v,y;let{carryParentState:h,did:g,instituteId:f}=e;const{t:S}=(0,l.$G)(),j=(0,o.s0)(),M=(0,o.TH)(),T=(0,o.UO)(),[H,N]=(0,a.useState)(!1),[A]=(0,p.Rz)(),L=[{name:S("mentors"),id:0,url:"member/department/".concat(T.deptname,"?a=mentor")},{name:S("queries"),id:1,url:"member/department/".concat(T.deptname,"?a=mentor&n=queries")}];return(0,m.jsxs)(m.Fragment,{children:[("mentor"===(null===(t=M.search)||void 0===t?void 0:t.substring(3))||"mentor&n=queries"===(null===(n=M.search)||void 0===n?void 0:n.substring(3)))&&(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)("div",{className:r.Z.with_search,style:{justifyContent:"space-between",gap:"1rem"},children:[(0,m.jsxs)("div",{className:r.Z.with_search,style:{justifyContent:"flex-start",gap:"1rem",width:"60%"},children:[(0,m.jsx)("img",{src:"/images/arrow-left-fees-icon.svg",onClick:()=>{j(-1)},alt:"go to previous tab",title:"Go Back",style:{cursor:"pointer"}}),(0,m.jsx)("h6",{children:S("mentoring")})]}),(0,m.jsx)(Z.Z,{label:S("staff_mentor"),customStyle:{margin:"0",padding:"0.4rem 1rem"},onAction:()=>{g&&(N((e=>!e)),A({did:g}).then((()=>{N((e=>!e))})).catch({}))}})]}),(0,m.jsx)(i.Z,{tabList:L,activeIndexTab:"mentor"===(null===(d=M.search)||void 0===d?void 0:d.substring(3))?0:"mentor&n=queries"===(null===(u=M.search)||void 0===u?void 0:u.substring(3))?1:2,showAs:!0,customStyleLink:{width:"50%"},carryParentState:h}),(0,m.jsx)(s.Z,{customStyle:{width:"100%",marginBottom:"0.5rem"}}),"mentor"===(null===(c=M.search)||void 0===c?void 0:c.substring(3))&&(0,m.jsx)(b,{instituteId:f,did:g,carryParentState:h}),"mentor&n=queries"===(null===(_=M.search)||void 0===_?void 0:_.substring(3))&&(0,m.jsx)(w.default,{did:g,carryParentState:h,queryFlow:"By_Department_Head"})]}),"mentor&n=detail"===(null===(v=M.search)||void 0===v?void 0:v.substring(3))&&(0,m.jsx)(q,{did:g}),"mentor&n=queries&query"===(null===(y=M.search)||void 0===y?void 0:y.substring(3))&&(0,m.jsx)(k.default,{queryFlow:"By_Department_Head"}),H&&(0,m.jsx)(x.Z,{})]})}},23308:(e,t,n)=>{n.r(t),n.d(t,{default:()=>x});var a=n(72791),l=n(11006),o=n(39230),i=n(80184);const s=e=>{let{activeIndex:t,setActiveIndex:n}=e;const{t:a}=(0,o.$G)();return(0,i.jsx)("div",{className:l.Z.mcqTop,children:(0,i.jsxs)("div",{className:l.Z.mcqToptabs,children:[(0,i.jsx)("div",{className:0===t?"".concat(l.Z.mcqTopItem," ").concat(l.Z.active):l.Z.mcqTopItem,onClick:()=>n(0),children:a("unsolved")}),(0,i.jsx)("div",{className:1===t?"".concat(l.Z.mcqTopItem," ").concat(l.Z.active):l.Z.mcqTopItem,onClick:()=>n(1),children:a("solved")})]})})};var r=n(23441),d=n(11105),u=n(72426),c=n.n(u),_=n(12143),v=n(69721),m=n(8148),y=n(47401);const h=e=>{var t,n,a,l,o,s,r,d,u,h,p,g,q,x,f,S;let{query_detail:j,carryParentState:b,queryFlow:k}=e;return(0,i.jsx)(i.Fragment,{children:"By_Mentor"===k?(0,i.jsx)(y.Z,{carryParentState:{...b,qid:null===j||void 0===j?void 0:j._id},activeTab:"query-detail",children:(0,i.jsxs)("div",{className:_.Z.mentor_card_container,style:{width:"95%",margin:"auto",marginBottom:"0.7rem"},children:[(0,i.jsx)("img",{src:null!==j&&void 0!==j&&null!==(t=j.student)&&void 0!==t&&t.studentProfilePhoto?"".concat(v.yI,"/").concat(null===j||void 0===j||null===(n=j.student)||void 0===n?void 0:n.studentProfilePhoto):"/images/member_tab/class/default_avatar.svg",style:{borderRadius:"50%"},alt:"mentor avatar"}),(0,i.jsxs)("div",{className:_.Z.mentor_container_inner,style:{gap:"0.6rem"},children:[(0,i.jsx)("h6",{children:"".concat(null!==(a=null===j||void 0===j||null===(l=j.student)||void 0===l?void 0:l.studentFirstName)&&void 0!==a?a:""," ").concat(null!==(o=null===j||void 0===j||null===(s=j.student)||void 0===s?void 0:s.studentMiddleName)&&void 0!==o?o:""," ").concat(null!==(r=null===j||void 0===j||null===(d=j.student)||void 0===d?void 0:d.studentLastName)&&void 0!==r?r:"")}),(0,i.jsxs)("p",{children:[c()(null===j||void 0===j?void 0:j.created_at).format("DD MMM"),",",c()(null===j||void 0===j?void 0:j.created_at).format("LT")]})]})]})}):(0,i.jsx)(m.Z,{carryParentState:{...b,qid:null===j||void 0===j?void 0:j._id},activeTab:"mentor&n=queries&query",children:(0,i.jsxs)("div",{className:_.Z.mentor_card_container,style:{width:"95%",margin:"auto",marginBottom:"0.7rem"},children:[(0,i.jsx)("img",{src:null!==j&&void 0!==j&&null!==(u=j.student)&&void 0!==u&&u.studentProfilePhoto?"".concat(v.yI,"/").concat(null===j||void 0===j||null===(h=j.student)||void 0===h?void 0:h.studentProfilePhoto):"/images/member_tab/class/default_avatar.svg",style:{borderRadius:"50%"},alt:"mentor avatar"}),(0,i.jsxs)("div",{className:_.Z.mentor_container_inner,style:{gap:"0.6rem"},children:[(0,i.jsx)("h6",{children:"".concat(null!==(p=null===j||void 0===j||null===(g=j.student)||void 0===g?void 0:g.studentFirstName)&&void 0!==p?p:""," ").concat(null!==(q=null===j||void 0===j||null===(x=j.student)||void 0===x?void 0:x.studentMiddleName)&&void 0!==q?q:""," ").concat(null!==(f=null===j||void 0===j||null===(S=j.student)||void 0===S?void 0:S.studentLastName)&&void 0!==f?f:"")}),(0,i.jsxs)("p",{children:[c()(null===j||void 0===j?void 0:j.created_at).format("DD MMM"),",",c()(null===j||void 0===j?void 0:j.created_at).format("LT")]})]})]})})})};var p=n(91727);const g=e=>{let{carryParentState:t,did:n,queryFlow:l}=e;const[o,s]=(0,r.YD)(),[u,c]=(0,a.useState)(1),[_,v]=(0,a.useState)(!0),[m,y]=(0,a.useState)(!0),[g,q]=(0,a.useState)([]),{getAllQueryList:x,getAllQueryListRefetch:f}=(0,p.EO)({data:{did:n,page:u,limit:10,status:"UnSolved",flow:l},skip:!n});return(0,a.useEffect)((()=>{n&&(y(!0),f())}),[n,u,f]),(0,a.useEffect)((()=>{s&&_&&c((e=>e+1))}),[s,_]),(0,a.useEffect)((()=>{var e,t;null!==x&&void 0!==x&&x.all_query?(q((e=>{var t,n;return null===(t=[...new Set(null===(n=[...e,...null===x||void 0===x?void 0:x.all_query])||void 0===n?void 0:n.map(JSON.stringify))])||void 0===t?void 0:t.map(JSON.parse)})),y(!1)):0===(null===x||void 0===x||null===(e=x.all_query)||void 0===e?void 0:e.length)&&y(!1),10===(null===x||void 0===x||null===(t=x.all_query)||void 0===t?void 0:t.length)?v(!0):v(!1)}),[null===x||void 0===x?void 0:x.all_query]),(0,i.jsxs)(i.Fragment,{children:[null===g||void 0===g?void 0:g.map(((e,n)=>(null===g||void 0===g?void 0:g.length)===n+1?(0,i.jsx)("div",{ref:o,children:(0,i.jsx)(h,{query_detail:e,carryParentState:t,queryFlow:l})},null===e||void 0===e?void 0:e._id):(0,i.jsx)(h,{query_detail:e,carryParentState:t,queryFlow:l},null===e||void 0===e?void 0:e._id))),m&&(0,i.jsx)(d.Z,{})]})},q=e=>{let{carryParentState:t,did:n,queryFlow:l}=e;const[o,s]=(0,r.YD)(),[u,c]=(0,a.useState)(1),[_,v]=(0,a.useState)(!0),[m,y]=(0,a.useState)(!0),[g,q]=(0,a.useState)([]),{getAllQueryList:x,getAllQueryListRefetch:f}=(0,p.EO)({data:{did:n,page:u,limit:10,status:"Solved",flow:l},skip:!n});return(0,a.useEffect)((()=>{n&&(y(!0),f())}),[n,u,f]),(0,a.useEffect)((()=>{s&&_&&c((e=>e+1))}),[s,_]),(0,a.useEffect)((()=>{var e,t;null!==x&&void 0!==x&&x.all_query?(q((e=>{var t,n;return null===(t=[...new Set(null===(n=[...e,...null===x||void 0===x?void 0:x.all_query])||void 0===n?void 0:n.map(JSON.stringify))])||void 0===t?void 0:t.map(JSON.parse)})),y(!1)):0===(null===x||void 0===x||null===(e=x.all_query)||void 0===e?void 0:e.length)&&y(!1),10===(null===x||void 0===x||null===(t=x.all_query)||void 0===t?void 0:t.length)?v(!0):v(!1)}),[null===x||void 0===x?void 0:x.all_query]),(0,i.jsxs)(i.Fragment,{children:[null===g||void 0===g?void 0:g.map(((e,n)=>(null===g||void 0===g?void 0:g.length)===n+1?(0,i.jsx)("div",{ref:o,children:(0,i.jsx)(h,{query_detail:e,carryParentState:t,viewAs:"SOLVED",queryFlow:l})},null===e||void 0===e?void 0:e._id):(0,i.jsx)(h,{query_detail:e,carryParentState:t,viewAs:"SOLVED",queryFlow:l},null===e||void 0===e?void 0:e._id))),m&&(0,i.jsx)(d.Z,{})]})},x=e=>{let{carryParentState:t,did:n,queryFlow:l}=e;const[o,r]=(0,a.useState)(0);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s,{activeIndex:o,setActiveIndex:r}),0===o&&(0,i.jsx)(g,{carryParentState:t,did:n,queryFlow:l}),1===o&&(0,i.jsx)(q,{carryParentState:t,did:n,queryFlow:l})]})}},37435:(e,t,n)=>{n.r(t),n.d(t,{default:()=>h});var a=n(72791),l=n(10406),o=n(98094),i=n(67923),s=n(72426),r=n.n(s),d=n(72952),u=n(39230),c=n(16871),_=n(91727),v=n(98734),m=n(30510),y=n(80184);const h=e=>{var t,n,s,h,p,g,q,x,f,S,j,b,k,w,Z,M,T,H,N,A,L,C,E,D,R,P,I,Q,B,F,O,G,K,U,V,J,X,$,z,W,Y,ee,te,ne,ae,le,oe,ie,se,re,de,ue,ce,_e,ve;let{queryFlow:me}=e;const{t:ye}=(0,u.$G)(),he=(0,c.s0)(),pe=(0,c.TH)(),[ge,qe]=(0,a.useState)(!1),[xe,fe]=(0,a.useState)({remark:"",forward:""}),{getQueryDetail:Se,getQueryDetailRefetch:je}=(0,_.LL)({qid:null===(t=pe.state)||void 0===t?void 0:t.qid,skip:!(null!==(n=pe.state)&&void 0!==n&&n.qid)}),[be]=(0,_.I4)(),[ke]=(0,m.hp)();(0,a.useEffect)((()=>{var e;null!==(e=pe.state)&&void 0!==e&&e.qid&&je()}),[null===(s=pe.state)||void 0===s?void 0:s.qid,je]);return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsxs)("div",{className:l.Z.with_search,style:{justifyContent:"flex-start",gap:"1rem"},children:[(0,y.jsx)("img",{src:"/images/arrow-left-fees-icon.svg",onClick:()=>{he(-1)},alt:"go to previous tab",title:"Go Back",style:{cursor:"pointer"}}),(0,y.jsx)("h6",{children:ye("query")})]}),(0,y.jsx)(o.Z,{customStyle:{width:"100%",marginBottom:"0.5rem"}}),(0,y.jsx)(i.Z,{labelText:ye("mentor"),value:"".concat(null!==(h=null===Se||void 0===Se||null===(p=Se.query)||void 0===p||null===(g=p.mentor)||void 0===g||null===(q=g.mentor_head)||void 0===q?void 0:q.staffFirstName)&&void 0!==h?h:""," ").concat(null!==(x=null===Se||void 0===Se||null===(f=Se.query)||void 0===f||null===(S=f.mentor)||void 0===S||null===(j=S.mentor_head)||void 0===j?void 0:j.staffMiddleName)&&void 0!==x?x:""," ").concat(null!==(b=null===Se||void 0===Se||null===(k=Se.query)||void 0===k||null===(w=k.mentor)||void 0===w||null===(Z=w.mentor_head)||void 0===Z?void 0:Z.staffLastName)&&void 0!==b?b:"")}),"By_Student"===me?(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(i.Z,{labelText:ye("raised_on"),value:r()(null===Se||void 0===Se||null===(M=Se.query)||void 0===M?void 0:M.raised_on).format("DD MMM,yyyy")}),(0,y.jsx)(i.Z,{labelText:"".concat(ye("query"),": "),value:null!==(T=null===Se||void 0===Se||null===(H=Se.query)||void 0===H?void 0:H.query)&&void 0!==T?T:"",customStyleContainer:{alignItems:"flex-start"}}),(0,y.jsx)(i.Z,{labelText:ye("replied_on"),value:r()(null===Se||void 0===Se||null===(N=Se.query)||void 0===N?void 0:N.report_on).format("DD MMM,yyyy")}),(0,y.jsx)(i.Z,{labelText:ye("remark_by_mentor_if_any"),value:null!==(A=null===Se||void 0===Se||null===(L=Se.query)||void 0===L?void 0:L.remark)&&void 0!==A?A:"",customStyleContainer:{alignItems:"flex-start"}}),"Reported"===(null===Se||void 0===Se||null===(C=Se.query)||void 0===C?void 0:C.report_by)?(0,y.jsx)("p",{className:l.Z.mentor_status_card_paragraph,style:{color:"#E2C318"},children:ye("reported")}):"Solved"===(null===Se||void 0===Se||null===(E=Se.query)||void 0===E?void 0:E.query_status)?(0,y.jsx)("p",{className:l.Z.mentor_status_card_paragraph,style:{color:"#20B038"},children:ye("solved")}):"UnSolved"===(null===Se||void 0===Se||null===(D=Se.query)||void 0===D?void 0:D.query_status)?(0,y.jsx)("p",{className:l.Z.mentor_status_card_paragraph,style:{color:"#EE3833"},children:ye("not_solved")}):null,"Reported"===(null===Se||void 0===Se||null===(R=Se.query)||void 0===R?void 0:R.report_by)?null:(0,y.jsxs)("p",{className:l.Z.mentor_status_card_paragraph,children:[ye("if_query_not_resolved"),":","  ",(0,y.jsx)("span",{style:{color:"#EE3833",cursor:"pointer"},onClick:()=>{var e,t;null!==(e=pe.state)&&void 0!==e&&e.qid&&(qe((e=>!e)),ke({qid:null===(t=pe.state)||void 0===t?void 0:t.qid}).then((()=>{je(),qe((e=>!e))})).catch({}))},children:ye("report")})]}),"Solved"===(null===Se||void 0===Se||null===(P=Se.query)||void 0===P?void 0:P.query_status)&&(0,y.jsx)(i.Z,{labelText:ye("remark_by_me"),value:null!==(I=null===Se||void 0===Se||null===(Q=Se.query)||void 0===Q?void 0:Q.remark_by_depart)&&void 0!==I?I:"",customStyleContainer:{alignItems:"flex-start"}})]}):(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(i.Z,{labelText:ye("mentee"),value:"".concat(null!==(B=null===Se||void 0===Se||null===(F=Se.query)||void 0===F||null===(O=F.student)||void 0===O?void 0:O.studentFirstName)&&void 0!==B?B:""," ").concat(null!==(G=null===Se||void 0===Se||null===(K=Se.query)||void 0===K||null===(U=K.student)||void 0===U?void 0:U.studentMiddleName)&&void 0!==G?G:""," ").concat(null!==(V=null===Se||void 0===Se||null===(J=Se.query)||void 0===J||null===(X=J.student)||void 0===X?void 0:X.studentLastName)&&void 0!==V?V:"")}),(0,y.jsx)(i.Z,{labelText:"".concat(ye("mobile_number"),"/").concat(ye("email"),": "),value:null!==($=null!==(z=null===Se||void 0===Se||null===(W=Se.query)||void 0===W||null===(Y=W.student)||void 0===Y||null===(ee=Y.user)||void 0===ee?void 0:ee.userPhoneNumber)&&void 0!==z?z:null===Se||void 0===Se||null===(te=Se.query)||void 0===te||null===(ne=te.student)||void 0===ne||null===(ae=ne.user)||void 0===ae?void 0:ae.userEmail)&&void 0!==$?$:""}),(0,y.jsx)(i.Z,{labelText:ye("raised_on"),value:r()(null===Se||void 0===Se||null===(le=Se.query)||void 0===le?void 0:le.raised_on).format("DD MMM,yyyy")}),(0,y.jsx)(i.Z,{labelText:ye("reported_on"),value:r()(null===Se||void 0===Se||null===(oe=Se.query)||void 0===oe?void 0:oe.report_on).format("DD MMM,yyyy")}),(0,y.jsx)(i.Z,{labelText:"".concat(ye("query"),": "),value:null!==(ie=null===Se||void 0===Se||null===(se=Se.query)||void 0===se?void 0:se.query)&&void 0!==ie?ie:"",customStyleContainer:{alignItems:"flex-start"}}),(0,y.jsx)(i.Z,{labelText:ye("remark_by_mentor_if_any"),value:null!==(re=null===Se||void 0===Se||null===(de=Se.query)||void 0===de?void 0:de.remark)&&void 0!==re?re:"",customStyleContainer:{alignItems:"flex-start"}}),"Solved"===(null===Se||void 0===Se||null===(ue=Se.query)||void 0===ue?void 0:ue.query_status)&&(0,y.jsx)(i.Z,{labelText:ye("remark_by_me"),value:null!==(ce=null===Se||void 0===Se||null===(_e=Se.query)||void 0===_e?void 0:_e.remark_by_depart)&&void 0!==ce?ce:"",customStyleContainer:{alignItems:"flex-start"}}),"Solved"!==(null===Se||void 0===Se||null===(ve=Se.query)||void 0===ve?void 0:ve.query_status)&&(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(d.Z,{labelText:ye("remark"),name:"remark",type:"text",value:xe.remark,onChange:e=>fe((t=>({...t,remark:e.target.value}))),placeholder:ye("follow_up_details")}),(0,y.jsx)("button",{className:l.Z.student_renewal_confirm_btn,style:{width:"100%",marginTop:"1rem"},onClick:()=>{var e;(xe.remark||xe.forward)&&(qe((e=>!e)),be({qid:null===(e=pe.state)||void 0===e?void 0:e.qid,flow:me,mark_query:xe}).then((()=>{je(),qe((e=>!e))})).catch({}))},children:ye("send")})]})]}),ge&&(0,y.jsx)(v.Z,{})]})}},47401:(e,t,n)=>{n.d(t,{Z:()=>i});n(72791);var a=n(16871),l=n(43504),o=n(80184);const i=e=>{let{carryParentState:t,activeTab:n,children:i}=e;const s=(0,a.UO)();return(0,o.jsx)(l.rU,{to:"/q/".concat(s.username,"/member/mentor?a=").concat(n),state:{...t},children:i})}},30510:(e,t,n)=>{n.d(t,{$R:()=>q,Aj:()=>d,Fc:()=>f,H8:()=>k,KC:()=>m,PP:()=>v,Pu:()=>p,RR:()=>c,Tc:()=>l,UE:()=>o,VO:()=>r,XN:()=>S,bc:()=>h,dG:()=>g,gP:()=>y,hp:()=>j,jp:()=>x,kN:()=>s,pB:()=>u,pQ:()=>_,pW:()=>i,pn:()=>w,y:()=>b});var a=n(73455);const l=e=>{const{data:t,refetch:n}=(0,a.I0)(e.data,{skip:e.skip});return{studentMcqAllTestset:t,studentMcqAllTestsetRefetch:n}},o=e=>{const{data:t,refetch:n}=(0,a.Px)(e.tsid,{skip:e.skip});return{studentMcqTestsetPreviewDetail:t,studentMcqTestsetPreviewDetailRefetch:n}},i=e=>{const{data:t,refetch:n}=(0,a.yK)(e.tsid,{skip:e.skip});return{studentMcqTestsetExamDetail:t,studentMcqTestsetExamDetailRefetch:n}},s=()=>{const[e]=(0,a.oO)();return[e]},r=()=>{const[e]=(0,a.d1)();return[e]},d=e=>{const{data:t,refetch:n}=(0,a.IM)(e.tsid,{skip:e.skip});return{studentMcqTestsetExamResult:t,studentMcqTestsetExamResultRefetch:n}},u=e=>{const{data:t,refetch:n}=(0,a.IV)(e.data,{skip:e.skip});return{getStudentDailyUpdate:t,getStudentDailyUpdateRefetch:n}},c=e=>{const{data:t,refetch:n}=(0,a.Xk)(e.data,{skip:e.skip});return{getMentorList:t,getMentorListRefetch:n}},_=e=>{const{data:t,refetch:n}=(0,a.IF)(e.data,{skip:e.skip});return{allElectionList:t,allElectionListRefetch:n}},v=e=>{const{data:t,refetch:n}=(0,a.up)(e.data,{skip:e.skip});return{oneElectionDetail:t,oneElectionDetailRefetch:n}},m=e=>{const{data:t,refetch:n}=(0,a.G6)(e.data,{skip:e.skip});return{allBacklogList:t,allBacklogListRefetch:n}},y=e=>{const{data:t,refetch:n}=(0,a.bp)(e.data,{skip:e.skip});return{studentSubjectAttendance:t,studentSubjectAttendanceRefetch:n}},h=e=>{const{data:t,refetch:n}=(0,a.Wr)(e.data,{skip:e.skip});return{getAssignmentByStudent:t,getAssignmentByStudentRefetch:n}},p=e=>{const{data:t,refetch:n}=(0,a.LA)(e.sid,{skip:e.skip});return{getAssignmentCountByStudent:t,getAssignmentCountByStudentRefetch:n}},g=e=>{const{data:t,refetch:n}=(0,a.NY)(e.aid,{skip:e.skip});return{getOneAssignmentDetailByStudent:t,getOneAssignmentDetailByStudentRefetch:n}},q=()=>{const[e]=(0,a.V_)();return[e]},x=e=>{const{data:t,refetch:n}=(0,a.i$)(e.data,{skip:e.skip});return{getClassmatesByStudent:t,getClassmatesByStudentRefetch:n}},f=e=>{const{data:t,refetch:n}=(0,a.Z2)(e.sid,{skip:e.skip});return{getAllMentorQueryStudent:t,getAllMentorQueryStudentRefetch:n}},S=()=>{const[e]=(0,a.Zs)();return[e]},j=()=>{const[e]=(0,a.eq)();return[e]},b=e=>{const{data:t,refetch:n}=(0,a.jX)(e.data,{skip:e.skip});return{getAllCertificateStudent:t,getAllCertificateStudentRefetch:n}},k=()=>{const[e]=(0,a.DH)();return[e]},w=e=>{const{data:t,refetch:n}=(0,a.vS)(e.data,{skip:e.skip});return{studentSubjectList:t,studentSubjectListRefetch:n}}},73455:(e,t,n)=>{n.d(t,{Zs:()=>ae,G6:()=>V,IF:()=>K,V_:()=>Y,jX:()=>oe,Z2:()=>ne,Wr:()=>$,LA:()=>z,i$:()=>te,NY:()=>W,IV:()=>ee,I0:()=>R,oO:()=>Q,yK:()=>I,IM:()=>F,d1:()=>B,Px:()=>P,Xk:()=>G,eq:()=>le,up:()=>U,DH:()=>ie,XR:()=>E,eD:()=>D,bp:()=>J,vS:()=>se});var a=n(69721),l=n(89250);const o="/api/v1",i="/api/v1/mcq/student",s=e=>e.query({query:e=>"".concat(o,"/edit/student/").concat(e.sid,"/previous")}),r=e=>e.query({query:e=>"".concat(o,"/edit/student/").concat(e.pid,"/previous/report")}),d=e=>e.query({query:e=>"".concat(i,"/").concat(e.sid,"/alltestset?page=").concat(e.page,"&limit=").concat(e.limit)}),u=e=>e.query({query:e=>"".concat(i,"/testset/").concat(e,"/detail")}),c=e=>e.query({query:e=>"".concat(i,"/testset/paper/").concat(e)}),_=(e,t)=>e.mutation({query:e=>({url:"".concat(i,"/testset/paper/").concat(e.tsid),method:"".concat(t),body:e.correctAnswer})}),v=(e,t)=>e.mutation({query:e=>({url:"".concat(i,"/testset/").concat(e.tsid,"/complete"),method:"".concat(t),body:e.submitTestset})}),m=e=>e.query({query:e=>"".concat(i,"/testset/").concat(e,"/complete")}),y=e=>e.query({query:e=>"".concat(o,"/timetable/student/").concat(e.cid,"/schedule/list?status=").concat(e.status,"&date=").concat(e.date)}),h=e=>e.query({query:e=>"".concat(o,"/class/").concat(e.sid,"/all/active/mentors")}),p=e=>e.query({query:e=>"".concat(o,"/election/event/all/").concat(e.sid,"/query?page=").concat(e.page,"&limit=").concat(e.limit)}),g=e=>e.query({query:e=>"".concat(o,"/election/event/").concat(e.sid,"/query/one/election/").concat(e.eid)}),q=e=>e.query({query:e=>"".concat(o,"/exam/backlog/one/previous/student/").concat(e.sid,"/subject?page=").concat(e.page,"&limit=").concat(e.limit)}),x=e=>e.query({query:e=>"".concat(o,"/attendance/subject/student-calender/").concat(e.sid,"?month=").concat(e.month,"&year=").concat(e.year,"&subjectId=").concat(e.subjectId)}),f=e=>e.query({query:e=>"".concat(o,"/attendance/student/").concat(e,"/subject/list")}),S=e=>e.query({query:e=>"".concat(i,"/").concat(e.sid,"/assignment?page=").concat(e.page,"&limit=").concat(e.limit)}),j=e=>e.query({query:e=>"".concat(i,"/").concat(e,"/count/assignment")}),b=e=>e.query({query:e=>"".concat(i,"/assignment/").concat(e)}),k=e=>e.mutation({query:e=>({url:"".concat(i,"/assignment/").concat(e.aid),method:"PATCH",body:e.assignmentData})}),w=e=>e.query({query:e=>{var t;return"".concat(o,"/dailyupdate/student/").concat(e.sid,"?page=").concat(e.page,"&limit=").concat(e.limit,"&subjectId=").concat(null!==(t=null===e||void 0===e?void 0:e.subjectId)&&void 0!==t?t:"")}}),Z=e=>e.query({query:e=>"".concat(o,"/extra/all/classmates/").concat(e.sid,"/query?page=").concat(e.page,"&limit=").concat(e.limit)}),M=e=>e.query({query:e=>"".concat(o,"/mentor/mentee/").concat(e,"/all/query")}),T=(e,t)=>e.mutation({query:e=>({url:"".concat(o,"/mentor/mentee/").concat(e.mid,"/new/query/").concat(e.sid),method:"".concat(t),body:e.query})}),H=(e,t)=>e.mutation({query:e=>({url:"".concat(o,"/mentor/mentee/one/query/").concat(e.qid,"/report"),method:"".concat(t)})}),N=e=>e.query({query:e=>"".concat(o,"/extra/all/").concat(e.sid,"/certificate/query?page=").concat(e.page,"&limit=").concat(e.limit)}),A=(e,t)=>e.mutation({query:e=>{var t;return{url:"".concat(o,"/extra/add/").concat(e.sid,"/certificate/query?id=").concat(null!==(t=e.id)&&void 0!==t?t:""),method:"POST",body:e.issueCertificate}}}),L=e=>e.query({query:e=>{var t;return"".concat(o,"/edit/student/subject/").concat(e.sid,"/list/query?cid=").concat(null!==(t=e.cid)&&void 0!==t?t:"")}}),C=l.A.injectEndpoints({endpoints:e=>({studentPreviousReportList:s(e),studentPreviousReportCard:r(e),mcqAllTestset:d(e),mcqTestsetPreviewDetail:u(e),mcqTestsetExamDetail:c(e),mcqQuestionGiven:_(e,a.K7),mcqTestsetExamSubmit:v(e,a.K7),mcqTestsetExamResult:m(e),timeTableSchedule:y(e),mentorList:h(e),allElectionList:p(e),oneElectionDetail:g(e),allBacklogList:q(e),studentSubjectAttendance:x(e),getSubjectListByStudent:f(e),getAssignmentByStudent:S(e),getAssignmentCountByStudent:j(e),getOneAssignmentDetailByStudent:b(e),assignmentActionByStudent:k(e),getStudentDailyUpdate:w(e),getClassmatesByStudent:Z(e),getAllMentorQueryStudent:M(e),aksStudentMentorQuery:T(e,a.K7),mentorQueryReportStudent:H(e,a.K7),getAllCertificateStudent:N(e,a.K7),raiseIssueCertificateStudent:A(e,a.K7),studentSubjectList:L(e)})}),{useStudentPreviousReportCardQuery:E,useStudentPreviousReportListQuery:D,useMcqAllTestsetQuery:R,useMcqTestsetPreviewDetailQuery:P,useMcqTestsetExamDetailQuery:I,useMcqQuestionGivenMutation:Q,useMcqTestsetExamSubmitMutation:B,useMcqTestsetExamResultQuery:F,useTimeTableScheduleQuery:O,useMentorListQuery:G,useAllElectionListQuery:K,useOneElectionDetailQuery:U,useAllBacklogListQuery:V,useStudentSubjectAttendanceQuery:J,useGetSubjectListByStudentQuery:X,useGetAssignmentByStudentQuery:$,useGetAssignmentCountByStudentQuery:z,useGetOneAssignmentDetailByStudentQuery:W,useAssignmentActionByStudentMutation:Y,useGetStudentDailyUpdateQuery:ee,useGetClassmatesByStudentQuery:te,useGetAllMentorQueryStudentQuery:ne,useAksStudentMentorQueryMutation:ae,useMentorQueryReportStudentMutation:le,useGetAllCertificateStudentQuery:oe,useRaiseIssueCertificateStudentMutation:ie,useStudentSubjectListQuery:se}=C},10406:(e,t,n)=>{n.d(t,{Z:()=>a});const a={hostel_container:"Hostel_hostel_container__mWxpf",moderator_container_title:"Hostel_moderator_container_title__DHglE",with_search:"Hostel_with_search__f5WON",search_container:"Hostel_search_container__uShHd",search_container_input:"Hostel_search_container_input__zwGLQ",searchIcon:"Hostel_searchIcon__x1CGz",search_container_filter:"Hostel_search_container_filter__HHOHi",add_new_category:"Hostel_add_new_category__4wi4R",rules_card:"Hostel_rules_card__CQp2X",rules_card_title:"Hostel_rules_card_title__dF+vA",download_attachment:"Hostel_download_attachment__Si3Or",menu_icon:"Hostel_menu_icon__lcZzz",unit_room_container:"Hostel_unit_room_container__7UtbF",unit_room_card_container:"Hostel_unit_room_card_container__Kp0n3",unit_room_card_lines:"Hostel_unit_room_card_lines__0fMZq",unit_room_container_box:"Hostel_unit_room_container_box__ZyOBC",unit_room_container_box_inner:"Hostel_unit_room_container_box_inner__xV4l4",hostelite_container:"Hostel_hostelite_container__s+iLw",hostelite_container_inner:"Hostel_hostelite_container_inner__55Vvd",hostelite_container_inner_text:"Hostel_hostelite_container_inner_text__rVUi9",announcement_card:"Hostel_announcement_card__B6Mf3",upload_excel_file:"Hostel_upload_excel_file__rm6Kk",student_renewal_card:"Hostel_student_renewal_card__4GLAW",student_renewal_date:"Hostel_student_renewal_date__jkFEO",student_renewal_btn_group:"Hostel_student_renewal_btn_group__bEhWE",student_renewal_cancel_btn:"Hostel_student_renewal_cancel_btn__FweAs",student_renewal_confirm_btn:"Hostel_student_renewal_confirm_btn__SrCfT",take_admission:"Hostel_take_admission__bLvfX",vehical_card_container:"Hostel_vehical_card_container__9+Xlp",vehical_card_text:"Hostel_vehical_card_text__L81rs",vehicle_list:"Hostel_vehicle_list__7KSVv",transpotation_container:"Hostel_transpotation_container__0ZRwk",transpotation_head:"Hostel_transpotation_head__bpQL4",transpotation_card:"Hostel_transpotation_card__awZ3a",transpotation_card_detail:"Hostel_transpotation_card_detail__SR+h7",transpotation_card_detail_text:"Hostel_transpotation_card_detail_text__V+znO",joining_date:"Hostel_joining_date__KU7m1",transpotation_card_detail_other:"Hostel_transpotation_card_detail_other__qQyz8",transpotation_card_detail_other_inner:"Hostel_transpotation_card_detail_other_inner__tkjuA",add_plus_icon:"Hostel_add_plus_icon__3Goaz",hostel_batch_container:"Hostel_hostel_batch_container__+B8sL",hostel_batch_container_hover:"Hostel_hostel_batch_container_hover__2rElc",hostel_batch_container_text:"Hostel_hostel_batch_container_text__w3JHe",hostel_batch_image:"Hostel_hostel_batch_image__fpTGv",hostel_batch_menu:"Hostel_hostel_batch_menu__xSgqR",add_container:"Hostel_add_container__KgZLe",mentor_status_card_paragraph:"Hostel_mentor_status_card_paragraph__b+ePZ",mentor_attendance_container:"Hostel_mentor_attendance_container__KAxwN",mentor_attendance_btn:"Hostel_mentor_attendance_btn__yX+++",mentor_attendance_btn_active:"Hostel_mentor_attendance_btn_active__JUY7m",selectBtn:"Hostel_selectBtn__w2fQe",passenger_fees_button:"Hostel_passenger_fees_button__VaNk-",linked_institute_btn:"Hostel_linked_institute_btn__p8os7"}},11006:(e,t,n)=>{n.d(t,{Z:()=>a});const a={studentMCQ:"Tabs_studentMCQ__lxivk",mcqToptabs:"Tabs_mcqToptabs__1WXDd",mcqTop:"Tabs_mcqTop__mmZ6T",mcqTopItem:"Tabs_mcqTopItem__7P7cJ",active:"Tabs_active__OMnFH"}}}]);
//# sourceMappingURL=21580.282f1b5e.chunk.js.map