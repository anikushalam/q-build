"use strict";(self.webpackChunkmithkal_qviple=self.webpackChunkmithkal_qviple||[]).push([[46876],{46876:(s,e,i)=>{i.r(e),i.d(e,{default:()=>_});var t=i(72791),a=i(23441),n=i(95048),l=i(12923),o=i(763),c=i(69721),r=i(52124),d=i(5574),h=i(39230),f=i(80184);const u=window.innerHeight,_=s=>{let{onClose:e,title:i,headSelect:_,assignHead:g,disabledId:v,instituteId:m,viewAs:p,isMultiSelect:x,selectList:S,onMultiSelect:k,onDone:j}=s;const{t:N}=(0,h.$G)(),[w,b]=(0,t.useState)(1),[M,A]=(0,t.useState)(!0),[C,L]=(0,a.YD)(),[R,y]=(0,t.useState)(""),[I,F]=t.useState([]),O=(0,n.v9)((s=>s.idChange)),{assignSearchStaff:D,assignSearchStaffRefetch:Z}=(0,l.vI)({skip:"ADMISSION_ADMIN"===p?!m:!(null!==O&&void 0!==O&&O.id),search:{search:R,page:w,id:"ADMISSION_ADMIN"===p?m:null===O||void 0===O?void 0:O.id,limit:10}});t.useEffect((()=>{null!==O&&void 0!==O&&O.id&&Z()}),[null===O||void 0===O?void 0:O.id,Z,w]),(0,t.useEffect)((()=>{L&&M&&b((s=>s+1))}),[L,M]),t.useEffect((()=>{null!==D&&void 0!==D&&D.staff&&F(R?null===D||void 0===D?void 0:D.staff:s=>(s=>{for(let t=0;t<(null===s||void 0===s?void 0:s.length);t++)for(let a=t+1;a<(null===s||void 0===s?void 0:s.length);a++){var e,i;(null===(e=s[t])||void 0===e?void 0:e._id)===(null===(i=s[a])||void 0===i?void 0:i._id)&&(null===s||void 0===s||s.splice(a,1))}return s})([...s,...null===D||void 0===D?void 0:D.staff])),10===(null===D||void 0===D?void 0:D.staff.length)?A(!0):A(!1)}),[null===D||void 0===D?void 0:D.staff]),(0,t.useEffect)((()=>{R&&P()}),[R]);const P=()=>{Z()},E=(0,t.useCallback)((0,o.debounce)((s=>y(s)),500),[]),H=s=>{v===(null===s||void 0===s?void 0:s._id)||(x?k(s):(_(s),"ADMISSION_ADMIN"===p||e()))};return(0,f.jsx)(d.Z,{open:g,onClose:e,children:(0,f.jsxs)("div",{style:{backgroundColor:"#FAFAFA",width:"35rem",height:"".concat(u-20,"px"),overflowX:"hidden"},children:[(0,f.jsxs)("div",{className:r.Z.assign_title,style:{width:"100%"},children:[(0,f.jsx)("h5",{children:i}),x?(0,f.jsxs)("div",{className:r.Z.is_mulitselect_container,children:[(0,f.jsx)("h6",{style:{cursor:"pointer"},onClick:j,children:N("select")}),(0,f.jsx)("img",{src:"/images/close-post-icon.svg",onClick:e,alt:"staff assign pop close icon"})]}):(0,f.jsx)("img",{src:"/images/close-post-icon.svg",onClick:e,alt:"staff assign pop close icon"})]}),(0,f.jsxs)("div",{className:r.Z.assign_search_container,children:[(0,f.jsx)("input",{type:"text",placeholder:N("search"),className:r.Z.assign_search_input,onChange:s=>{return e=s.target.value,void E(e);var e}}),(0,f.jsx)("img",{src:"/images/search-dash-icon.svg",alt:"search icon"})]}),(0,f.jsx)("div",{className:r.Z.assign_show_list,children:null===I||void 0===I?void 0:I.map(((s,e)=>(null===I||void 0===I?void 0:I.length)===e+1?(0,f.jsxs)("div",{ref:C,children:[(0,f.jsxs)("div",{className:r.Z.assign_show_list_each,style:v===s._id?{backgroundColor:"rgba(75, 26, 133, 0.1)"}:{backgroundColor:"inherit"},onClick:()=>H(s),children:[x?null!==S&&void 0!==S&&S.includes(null===s||void 0===s?void 0:s._id)?(0,f.jsx)("img",{src:"/images/checkbox-icon.svg",alt:"icon",style:{height:"1.3rem",borderRadius:"0",cursor:"pointer"}}):(0,f.jsx)("img",{style:{height:"1.3rem",borderRadius:"0",cursor:"pointer"},src:"/images/box-icon.svg",alt:"icon"}):"",(0,f.jsx)("img",{src:null!==s&&void 0!==s&&s.staffProfilePhoto?"".concat(c.yI,"/").concat(s.staffProfilePhoto):"/images/member_tab/class/default_avatar.svg",alt:"staff profile avatar"}),(0,f.jsxs)("div",{className:r.Z.assign_each_paragraph,children:[(0,f.jsx)("h6",{children:"".concat(s.staffFirstName," ").concat(null!==s&&void 0!==s&&s.staffMiddleName?null===s||void 0===s?void 0:s.staffMiddleName:""," ").concat(s.staffLastName)}),(0,f.jsxs)("p",{children:[" ",N("index")," ",null===s||void 0===s?void 0:s.staffROLLNO]})]})]}),(0,f.jsx)("hr",{})]},s._id):(0,f.jsxs)("div",{children:[(0,f.jsxs)("div",{className:r.Z.assign_show_list_each,style:v===s._id?{backgroundColor:"rgba(75, 26, 133, 0.1)"}:{backgroundColor:"inherit"},onClick:()=>H(s),children:[x?null!==S&&void 0!==S&&S.includes(null===s||void 0===s?void 0:s._id)?(0,f.jsx)("img",{style:{height:"1.3rem",borderRadius:"0",cursor:"pointer"},src:"/images/checkbox-icon.svg",alt:"icon"}):(0,f.jsx)("img",{style:{height:"1.3rem",borderRadius:"0",cursor:"pointer"},src:"/images/box-icon.svg",alt:"icon"}):"",(0,f.jsx)("img",{src:null!==s&&void 0!==s&&s.staffProfilePhoto?"".concat(c.yI,"/").concat(s.staffProfilePhoto):"/images/member_tab/class/default_avatar.svg",alt:"staff profile avatar"}),(0,f.jsxs)("div",{className:r.Z.assign_each_paragraph,children:[(0,f.jsx)("h6",{children:"".concat(s.staffFirstName," ").concat(null!==s&&void 0!==s&&s.staffMiddleName?null===s||void 0===s?void 0:s.staffMiddleName:""," ").concat(s.staffLastName)}),(0,f.jsxs)("p",{children:[" ",N("index")," ",null===s||void 0===s?void 0:s.staffROLLNO]})]})]}),(0,f.jsx)("hr",{})]},s._id)))})]})})}},12923:(s,e,i)=>{i.d(e,{Ec:()=>x,Em:()=>j,JM:()=>u,NS:()=>n,Pg:()=>_,Q_:()=>p,RH:()=>f,Tv:()=>c,U_:()=>m,VN:()=>l,Wj:()=>d,ZS:()=>h,_8:()=>S,d5:()=>r,tB:()=>v,vI:()=>k,yx:()=>o,zO:()=>g});var t=i(91007),a=i(58208);const n=s=>{const{data:e,refetch:i}=(0,a.YD)(s.search,{skip:s.skip});return{instituteAllSearch:e,instituteAllSearchRefetch:i}},l=()=>{const[s]=(0,a.ak)();return[s]},o=()=>{const[s]=(0,a.WL)();return[s]},c=s=>{const{data:e,refetch:i}=(0,a.pH)(s.list,{skip:s.skip});return{instituteFollowList:e,instituteFollowListRefetch:i}},r=s=>{const{data:e,refetch:i}=(0,a.MG)(s.data,{skip:s.skip});return{instituteOwnFollowingList:e,instituteOwnFollowingListRefetch:i}},d=()=>{const[s]=(0,a.Ky)();return[s]},h=s=>{const{data:e,refetch:i}=(0,a.p8)(s.list);return{userFollowList:e,userFollowListRefetch:i}},f=s=>{const{data:e,refetch:i}=(0,a.Wv)(s);return{userFollowingList:e,userFollowingListRefetch:i}},u=s=>{const{data:e,refetch:i}=(0,a.sz)(s.search,{skip:s.skip});return{userAllSearch:e,userAllSearchRefetch:i}},_=()=>{const[s]=(0,a.Mk)();return[s]},g=()=>{const[s]=(0,a.$i)();return[s]},v=()=>{const[s]=(0,a.Do)();return[s]},m=()=>{const[s]=(0,a.He)();return[s]},p=()=>{const[s]=(0,a.vg)();return[s]},x=()=>{const[s]=(0,a.OO)();return[s]},S=s=>{const{data:e,refetch:i}=(0,a.N2)(s);return{userCircleList:e,userCircleListRefetch:i}},k=s=>{const{data:e,refetch:i}=(0,t.x6)(s.search,{skip:s.skip});return{assignSearchStaff:e,assignSearchStaffRefetch:i}},j=s=>{const{data:e,refetch:i}=(0,a.SJ)(s);return{universalUser:e,universalUserRefetch:i}}},52124:(s,e,i)=>{i.d(e,{Z:()=>t});const t={assign_title:"AssignStaffModal_assign_title__4DGBV",assign_search_container:"AssignStaffModal_assign_search_container__3x6RD",assign_search_input:"AssignStaffModal_assign_search_input__rO3c7",assign_show_list:"AssignStaffModal_assign_show_list__yHhf7",assign_show_list_each:"AssignStaffModal_assign_show_list_each__ACUEw",assign_each_paragraph:"AssignStaffModal_assign_each_paragraph__pMHTq",universal_modal:"AssignStaffModal_universal_modal__czmpB",is_mulitselect_container:"AssignStaffModal_is_mulitselect_container__0cPQ2"}}}]);
//# sourceMappingURL=46876.44078b4d.chunk.js.map