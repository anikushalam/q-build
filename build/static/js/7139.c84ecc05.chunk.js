"use strict";(self.webpackChunkmithkal_qviple=self.webpackChunkmithkal_qviple||[]).push([[7139],{97655:function(o,i,l){var n=l(1413),e=(l(72791),l(39230)),t=l(38733),a=l(80184);i.Z=function(o){var i=o.labelText,l=o.name,d=o.type,s=o.value,r=o.onChange,c=o.placeholder,_=o.errorShow,v=o.customStyleContainer,u=o.customStyleLabel,h=o.customStyleInput,m=o.inputLength,b=o.reAccount,f=o.disabled,p=(0,e.$G)().t;return(0,a.jsxs)("div",{className:t.Z.join_form_container,style:(0,n.Z)({},v),children:[(0,a.jsxs)("label",{className:t.Z.join_form_label,htmlFor:l,style:(0,n.Z)({},u),children:[i," ",!b&&_&&(0,a.jsxs)("span",{style:{color:"red",marginLeft:"15px"},children:["* ",p("form_require_label")]}),b&&(0,a.jsx)("span",{style:{color:"red",marginLeft:"15px"},children:b})]}),"tel"===d?(0,a.jsx)("input",{className:t.Z.join_form_input,type:d,value:s,onChange:r,name:l,placeholder:c,maxLength:null!==m&&void 0!==m?m:100,disabled:f,style:h}):(0,a.jsx)("input",{className:t.Z.join_form_input,type:d,value:s,onChange:r,name:l,placeholder:c,disabled:f,style:h})]})}},65082:function(o,i,l){var n=l(1413),e=(l(72791),l(16871)),t=l(43504),a=l(80184);i.Z=function(o){var i=o.carryParentState,l=o.activeTab,d=o.customStyle,s=o.children,r=(0,e.UO)();return(0,a.jsx)(t.rU,{to:"/q/".concat(r.username,"/library").concat(l),state:(0,n.Z)({},i),style:d,children:s})}},82418:function(o,i,l){l.d(i,{Z:function(){return R}});var n=l(72791),e=l(55581),t=l(78687),a=l(1413),d=l(69721),s="BookDetails_addbookcontainer__Lciwj",r="BookDetails_addbooktop__GIw5A",c="BookDetails_addbookbody__CTPQH",_="BookDetails_addbookbodyleft__bZ1rE",v="BookDetails_addbookbodyright__c364h",u="BookDetails_bookItemImgContainer__sCt7z",h="BookDetails_bookItemImg__GTcfq",m="BookDetails_bookTitle__hMHqt",b="BookDetails_bookby__EqGsP",f="BookDetails_booklang__nRf9x",p="BookDetails_bookstatus__YkG3V",j="BookDetails_bookstatusoffline__tTYRo",k="BookDetails_addbookbodybottom__oNg0i",x="BookDetails_viewRow__PUYL0",g="BookDetails_viewRowh6__WWWf9",N="BookDetails_desh6__5W4+W",y="BookDetails_viewRowp__stp+r",J="BookDetails_viewRowfull__RFbVh",F="BookDetails_pdfdiv__KtJk3",S="BookDetails_pdfh6__U7ywv",B="BookDetails_pdfdivcontainer__2wSWm",Z="BookDetails_downloadbtn__xOsJS",C=l(39230),w=l(11237),I=l(65082),D=l(80184);var O=function(o){var i,l,n,e,t,O,T=o.book,R=o.onBackClick,L=o.status,M=o.onCollectBackClick,P=o.onStudentBackClick,U=o.carryParentState,K=o.pageOpenAs,q=(0,C.$G)().t;return(0,D.jsx)(D.Fragment,{children:"bookDetails"===L?(0,D.jsxs)("div",{className:s,children:[(0,D.jsxs)("div",{className:r,children:[(0,D.jsx)("img",{src:"/images/back.svg",onClick:R}),(0,D.jsx)("h6",{children:q("book_details")}),"INSTITUTE"===K?(0,D.jsx)(I.Z,{carryParentState:(0,a.Z)((0,a.Z)({},U),{},{bid:null===T||void 0===T?void 0:T._id,book:T}),activeTab:"?a=book&n=edit",children:(0,D.jsx)("img",{src:"/images/library/edit_.svg"})}):(0,D.jsx)(w.Z,{carryParentState:(0,a.Z)((0,a.Z)({},U),{},{bid:null===T||void 0===T?void 0:T._id,book:T}),activeTab:"book&n=edit",children:(0,D.jsx)("img",{src:"/images/library/edit_.svg"})})]}),(0,D.jsxs)("div",{className:c,children:[(0,D.jsx)("div",{className:v,children:(0,D.jsx)("div",{className:u,children:(0,D.jsx)("img",{className:h,src:null!==T&&void 0!==T&&T.photo?"".concat(d.yI,"/").concat(null===T||void 0===T?void 0:T.photo):"/images/defaultBook.png"})})}),(0,D.jsxs)("div",{className:_,children:[(0,D.jsx)("h3",{className:m,children:null===T||void 0===T?void 0:T.bookName}),(0,D.jsxs)("p",{className:b,children:[q("by_")," \xa0",(0,D.jsx)("span",{children:null===T||void 0===T?void 0:T.author})]}),(0,D.jsx)("p",{className:f,children:null===T||void 0===T?void 0:T.language}),(0,D.jsx)("p",{className:"Online"===(null===T||void 0===T?void 0:T.bookStatus)?p:"".concat(p," ").concat(j),children:null===T||void 0===T?void 0:T.bookStatus})]})]}),(0,D.jsxs)("div",{className:k,children:[(0,D.jsxs)("div",{className:x,children:[(null===T||void 0===T?void 0:T.publication)&&(0,D.jsxs)("div",{children:[(0,D.jsx)("p",{className:y,children:q("publication")}),(0,D.jsxs)("h6",{className:g,children:[" ",null===T||void 0===T?void 0:T.publication]})]}),(null===T||void 0===T?void 0:T.totalPage)&&(0,D.jsxs)("div",{children:[(0,D.jsx)("p",{className:y,children:q("total_page")}),(0,D.jsx)("h6",{className:g,children:null===T||void 0===T?void 0:T.totalPage})]}),(null===T||void 0===T?void 0:T.price)&&(0,D.jsxs)("div",{children:[(0,D.jsx)("p",{className:y,children:q("price")}),(0,D.jsx)("h6",{className:g,children:null===T||void 0===T?void 0:T.price})]}),(null===T||void 0===T?void 0:T.totalCopies)&&"Offline"===(null===T||void 0===T?void 0:T.bookStatus)&&(0,D.jsxs)("div",{children:[(0,D.jsx)("p",{className:y,children:q("total_copies")}),(0,D.jsxs)("h6",{className:g,children:[" ",null===T||void 0===T?void 0:T.totalCopies]})]}),(null===T||void 0===T?void 0:T.leftCopies)&&"Offline"===(null===T||void 0===T?void 0:T.bookStatus)&&(0,D.jsxs)("div",{children:[(0,D.jsx)("p",{className:y,children:q("leftCopies")}),(0,D.jsx)("h6",{className:g,children:null===T||void 0===T?void 0:T.leftCopies})]}),(null===T||void 0===T?void 0:T.shellNumber)&&"Offline"===(null===T||void 0===T?void 0:T.bookStatus)&&(0,D.jsxs)("div",{children:[(0,D.jsx)("p",{className:y,children:q("shell_number")}),(0,D.jsx)("h6",{className:g,children:null===T||void 0===T?void 0:T.shellNumber})]}),(null===T||void 0===T||null===(i=T.attachment[0])||void 0===i?void 0:i.documentName)&&"Online"===(null===T||void 0===T?void 0:T.bookStatus)&&(0,D.jsxs)("div",{className:B,children:[(0,D.jsx)("p",{className:y,children:q("attachment")}),(0,D.jsxs)("div",{className:F,children:[(0,D.jsx)("img",{src:"/images/chat/pdf-icon.svg",alt:""}),(0,D.jsx)("h6",{className:"".concat(g," ").concat(S),children:"".concat(null===T||void 0===T||null===(l=T.attachment[0])||void 0===l?void 0:l.documentName)})]})]})]}),(null===T||void 0===T?void 0:T.description)&&(0,D.jsxs)("div",{className:J,children:[(0,D.jsx)("p",{className:y,children:q("description")}),(0,D.jsxs)("h6",{className:N,children:[" ",null===T||void 0===T?void 0:T.description]})]}),"Online"===(null===T||void 0===T?void 0:T.bookStatus)&&(null===T||void 0===T||null===(n=T.attachment)||void 0===n?void 0:n.length)>0&&(0,D.jsx)("a",{href:"".concat(d.zQ,"/").concat(null===T||void 0===T||null===(e=T.attachment[0])||void 0===e?void 0:e.documentKey),target:"_blank",rel:"noopener noreferrer",children:(0,D.jsx)("div",{className:Z,children:q("view")})})]})]}):"student book details"===L?(0,D.jsxs)("div",{className:s,children:[(0,D.jsxs)("div",{className:r,children:[(0,D.jsx)("img",{src:"/images/back.svg",onClick:P}),(0,D.jsx)("h6",{children:q("book_details")}),(0,D.jsx)("div",{})]}),(0,D.jsxs)("div",{className:c,children:[(0,D.jsx)("div",{className:v,children:(0,D.jsx)("div",{className:u,children:(0,D.jsx)("img",{className:h,src:"1"!==(null===T||void 0===T?void 0:T.photoId)?"".concat(d.yI,"/").concat(null===T||void 0===T?void 0:T.photo):"/images/defaultBook.png"})})}),(0,D.jsxs)("div",{className:_,children:[(0,D.jsx)("h3",{className:m,children:null===T||void 0===T?void 0:T.bookName}),(0,D.jsxs)("p",{className:b,children:[q("by_")," \xa0",(0,D.jsx)("span",{children:null===T||void 0===T?void 0:T.author})]}),(0,D.jsx)("p",{className:f,children:null===T||void 0===T?void 0:T.language}),(0,D.jsx)("p",{className:"Online"===(null===T||void 0===T?void 0:T.bookStatus)?p:"".concat(p," ").concat(j),children:null===T||void 0===T?void 0:T.bookStatus})]})]}),(0,D.jsxs)("div",{className:k,children:[(0,D.jsxs)("div",{className:x,children:[(null===T||void 0===T?void 0:T.publication)&&(0,D.jsxs)("div",{children:[(0,D.jsx)("p",{className:y,children:q("publication")}),(0,D.jsxs)("h6",{className:g,children:[" ",null===T||void 0===T?void 0:T.publication]})]}),(null===T||void 0===T?void 0:T.totalPage)&&(0,D.jsxs)("div",{children:[(0,D.jsx)("p",{className:y,children:q("total_page")}),(0,D.jsx)("h6",{className:g,children:null===T||void 0===T?void 0:T.totalPage})]}),(null===T||void 0===T?void 0:T.price)&&(0,D.jsxs)("div",{children:[(0,D.jsx)("p",{className:y,children:q("price")}),(0,D.jsx)("h6",{className:g,children:null===T||void 0===T?void 0:T.price})]}),(null===T||void 0===T?void 0:T.totalCopies)&&"Offline"===(null===T||void 0===T?void 0:T.bookStatus)&&(0,D.jsxs)("div",{children:[(0,D.jsx)("p",{className:y,children:q("total_copies")}),(0,D.jsxs)("h6",{className:g,children:[" ",null===T||void 0===T?void 0:T.totalCopies]})]}),(null===T||void 0===T?void 0:T.leftCopies)&&"Offline"===(null===T||void 0===T?void 0:T.bookStatus)&&(0,D.jsxs)("div",{children:[(0,D.jsx)("p",{className:y,children:q("leftCopies")}),(0,D.jsx)("h6",{className:g,children:null===T||void 0===T?void 0:T.leftCopies})]}),(null===T||void 0===T?void 0:T.shellNumber)&&"Offline"===(null===T||void 0===T?void 0:T.bookStatus)&&(0,D.jsxs)("div",{children:[(0,D.jsx)("p",{className:y,children:q("shell_number")}),(0,D.jsx)("h6",{className:g,children:null===T||void 0===T?void 0:T.shellNumber})]}),(null===T||void 0===T||null===(t=T.attachment[0])||void 0===t?void 0:t.documentName)&&"Online"===(null===T||void 0===T?void 0:T.bookStatus)&&(0,D.jsxs)("div",{className:B,children:[(0,D.jsx)("p",{className:y,children:q("attachment")}),(0,D.jsxs)("div",{className:F,children:[(0,D.jsx)("img",{src:"/images/chat/pdf-icon.svg",alt:""}),(0,D.jsx)("h6",{className:"".concat(g," ").concat(S),children:"".concat(null===T||void 0===T||null===(O=T.attachment[0])||void 0===O?void 0:O.documentName)})]})]})]}),(null===T||void 0===T?void 0:T.description)&&(0,D.jsxs)("div",{className:J,children:[(0,D.jsx)("p",{className:y,children:q("description")}),(0,D.jsxs)("h6",{className:N,children:[" ",null===T||void 0===T?void 0:T.description]})]})]})]}):(0,D.jsxs)("div",{className:s,children:[(0,D.jsxs)("div",{className:r,children:[(0,D.jsx)("img",{src:"/images/back.svg",onClick:M}),(0,D.jsx)("h6",{children:q("book_details")}),(0,D.jsx)("div",{})]}),(0,D.jsxs)("div",{className:c,children:[(0,D.jsx)("div",{className:v,children:(0,D.jsx)("div",{className:u,children:(0,D.jsx)("img",{className:h,src:"1"!==(null===T||void 0===T?void 0:T.photoId)&&""!==(null===T||void 0===T?void 0:T.photo)?"".concat(d.yI,"/").concat(null===T||void 0===T?void 0:T.photo):"/images/defaultBook.png"})})}),(0,D.jsxs)("div",{className:_,children:[(0,D.jsx)("h3",{className:m,children:null===T||void 0===T?void 0:T.bookName}),(0,D.jsxs)("p",{className:b,children:[q("by_")," \xa0",(0,D.jsx)("span",{children:null===T||void 0===T?void 0:T.author})]}),(0,D.jsx)("p",{className:f,children:null===T||void 0===T?void 0:T.language}),(0,D.jsx)("p",{className:"Online"===(null===T||void 0===T?void 0:T.bookStatus)?p:"".concat(p," ").concat(j),children:null===T||void 0===T?void 0:T.bookStatus})]})]})]})})},T=l(16871);var R=function(o){var i,l,a,d,s=o.bookId,r=o.desig,c=o.carryParentState,_=o.pageOpenAs,v=(0,T.s0)(),u=(0,T.TH)(),h=(0,t.useSelector)((function(o){return o.libraryChange})),m=(0,e.iJ)({bid:null===u||void 0===u||null===(i=u.state)||void 0===i?void 0:i.bid,skip:!(null!==u&&void 0!==u&&null!==(l=u.state)&&void 0!==l&&l.bid)}),b=m.getBookDetail,f=m.getBookDetailRefetch,p=(0,e.SN)({cid:s,skip:!s}),j=p.getCollectedBookDetail,k=p.getCollectedBookDetailRefetch;(0,n.useEffect)((function(){f(),k()}),[null===u||void 0===u||null===(a=u.state)||void 0===a?void 0:a.bid,null===h||void 0===h?void 0:h.bid]);var x=function(){v(-1)};return(0,D.jsx)(O,{status:null!==j&&void 0!==j&&j.collectedDetail?"collectBookDetails":r?"student book details":"bookDetails",book:null!==b&&void 0!==b&&b.book?null===b||void 0===b?void 0:b.book:null===j||void 0===j||null===(d=j.collectedDetail)||void 0===d?void 0:d.book,onBackClick:x,onCollectBackClick:x,onStudentBackClick:x,carryParentState:c,pageOpenAs:_})}},89652:function(o,i,l){l.d(i,{Z:function(){return h}});var n=l(1413),e=(l(72791),"LibraryBookCard_book_card__XM9Z0"),t="LibraryBookCard_book_header__OpRy+",a="LibraryBookCard_book_header_inner__+kREQ",d="LibraryBookCard_book_header_inner_text__YEikP",s=l(39230),r=l(6642),c=l(65082),_=l(11237),v=l(69721),u=l(80184),h=function(o){var i,l,h,m,b,f,p,j,k,x,g,N,y,J,F,S,B,Z,C,w,I,D,O,T,R,L,M,P,U,K,q,G,A,H,Q,W,z,E,Y,X=o.book,V=o.carryParentState,$=o.viewAs,oo=(0,s.$G)().t;return(0,u.jsx)(u.Fragment,{children:"STUDENT"===$?(0,u.jsx)(r.Z,{carryParentState:(0,n.Z)((0,n.Z)({},V),{},{bid:null===X||void 0===X?void 0:X._id}),activeTab:"library&n=books&n=detail",children:(0,u.jsx)("div",{className:e,children:(0,u.jsxs)("div",{className:t,children:[(0,u.jsxs)("div",{className:a,style:{width:"60%"},children:[(0,u.jsx)("img",{src:null!==X&&void 0!==X&&X.photo?"".concat(v.yI,"/").concat(null===X||void 0===X?void 0:X.photo):"/images/defaultBook.png"}),(0,u.jsxs)("div",{className:d,children:[(0,u.jsxs)("h6",{children:[oo("book_name")," "," : ",(null===X||void 0===X||null===(i=X.bookName)||void 0===i?void 0:i.length)>=50?"".concat(null===X||void 0===X||null===(l=X.bookName)||void 0===l?void 0:l.match(/.{1,50}/g)[0]," ..."):null===X||void 0===X?void 0:X.bookName]}),(0,u.jsxs)("div",{children:[oo("author_label")," "," : ",(null===X||void 0===X||null===(h=X.author)||void 0===h?void 0:h.length)>=50?"".concat(null===X||void 0===X||null===(m=X.author)||void 0===m?void 0:m.match(/.{1,50}/g)[0]," ..."):null===X||void 0===X?void 0:X.author," "]}),(0,u.jsxs)("div",{children:[oo("subject_only")," "," : ",(null===X||void 0===X||null===(b=X.subject)||void 0===b?void 0:b.length)>=50?"".concat(null===X||void 0===X||null===(f=X.subject)||void 0===f?void 0:f.match(/.{1,50}/g)[0]," ..."):null===X||void 0===X?void 0:X.subject," "]}),(0,u.jsxs)("div",{children:[oo("mode")," "," : ",(0,u.jsx)("span",{style:{color:"Online"===(null===X||void 0===X?void 0:X.bookStatus)?"#20b038":"#e95f28"},children:null===X||void 0===X?void 0:X.bookStatus})]}),(0,u.jsxs)("div",{children:[oo("language")," "," : ",(0,u.jsxs)("span",{style:{color:"#f4900c"},children:[null===X||void 0===X?void 0:X.language," "]})]})]})]}),(0,u.jsxs)("div",{className:d,style:{width:"40%"},children:[(0,u.jsxs)("h6",{children:[oo("book_id")," "," : ",(null===X||void 0===X||null===(p=X.book_id)||void 0===p?void 0:p.length)>=50?"".concat(null===X||void 0===X||null===(j=X.book_id)||void 0===j?void 0:j.match(/.{1,50}/g)[0]," ..."):null===X||void 0===X?void 0:X.book_id]}),(0,u.jsxs)("div",{children:[oo("publisher_place")," "," : ",(null===X||void 0===X||null===(k=X.publisher_place)||void 0===k?void 0:k.length)>=50?"".concat(null===X||void 0===X||null===(x=X.publisher_place)||void 0===x?void 0:x.match(/.{1,50}/g)[0]," ..."):null===X||void 0===X?void 0:X.publisher_place," "]}),(0,u.jsxs)("div",{children:[oo("publisher_year")," "," : ",(null===X||void 0===X||null===(g=X.publication_year)||void 0===g?void 0:g.length)>=50?"".concat(null===X||void 0===X||null===(N=X.publication_year)||void 0===N?void 0:N.match(/.{1,50}/g)[0]," ..."):null===X||void 0===X?void 0:X.publication_year," "]}),(0,u.jsxs)("div",{children:[oo("publication")," "," : ",null===X||void 0===X?void 0:X.publication]}),(0,u.jsxs)("div",{children:[oo("price")," "," : ",null!==(y=null===X||void 0===X?void 0:X.price)&&void 0!==y?y:0," "]})]})]})})}):"INSTITUTE"===$?(0,u.jsx)(c.Z,{carryParentState:(0,n.Z)((0,n.Z)({},V),{},{bid:null===X||void 0===X?void 0:X._id}),activeTab:"?a=book&n=detail",children:(0,u.jsx)("div",{className:e,children:(0,u.jsxs)("div",{className:t,children:[(0,u.jsxs)("div",{className:a,style:{width:"60%"},children:[(0,u.jsx)("img",{src:null!==X&&void 0!==X&&X.photo?"".concat(v.yI,"/").concat(null===X||void 0===X?void 0:X.photo):"/images/defaultBook.png"}),(0,u.jsxs)("div",{className:d,children:[(0,u.jsxs)("h6",{children:[oo("book_name")," "," : ",(null===X||void 0===X||null===(J=X.bookName)||void 0===J?void 0:J.length)>=50?"".concat(null===X||void 0===X||null===(F=X.bookName)||void 0===F?void 0:F.match(/.{1,50}/g)[0]," ..."):null===X||void 0===X?void 0:X.bookName]}),(0,u.jsxs)("div",{children:[oo("author_label")," "," : ",(null===X||void 0===X||null===(S=X.author)||void 0===S?void 0:S.length)>=50?"".concat(null===X||void 0===X||null===(B=X.author)||void 0===B?void 0:B.match(/.{1,50}/g)[0]," ..."):null===X||void 0===X?void 0:X.author," "]}),(0,u.jsxs)("div",{children:[oo("subject_only")," "," : ",(null===X||void 0===X||null===(Z=X.subject)||void 0===Z?void 0:Z.length)>=50?"".concat(null===X||void 0===X||null===(C=X.subject)||void 0===C?void 0:C.match(/.{1,50}/g)[0]," ..."):null===X||void 0===X?void 0:X.subject," "]}),(0,u.jsxs)("div",{children:[oo("mode")," "," : ",(0,u.jsx)("span",{style:{color:"Online"===(null===X||void 0===X?void 0:X.bookStatus)?"#20b038":"#e95f28"},children:null===X||void 0===X?void 0:X.bookStatus})]}),(0,u.jsxs)("div",{children:[oo("language")," "," : ",(0,u.jsxs)("span",{style:{color:"#f4900c"},children:[null===X||void 0===X?void 0:X.language," "]})]})]})]}),(0,u.jsxs)("div",{className:d,style:{width:"40%"},children:[(0,u.jsxs)("h6",{children:[oo("book_id")," "," : ",(null===X||void 0===X||null===(w=X.book_id)||void 0===w?void 0:w.length)>=50?"".concat(null===X||void 0===X||null===(I=X.book_id)||void 0===I?void 0:I.match(/.{1,50}/g)[0]," ..."):null===X||void 0===X?void 0:X.book_id]}),(0,u.jsxs)("div",{children:[oo("publisher_place")," "," : ",(null===X||void 0===X||null===(D=X.publisher_place)||void 0===D?void 0:D.length)>=50?"".concat(null===X||void 0===X||null===(O=X.publisher_place)||void 0===O?void 0:O.match(/.{1,50}/g)[0]," ..."):null===X||void 0===X?void 0:X.publisher_place," "]}),(0,u.jsxs)("div",{children:[oo("publisher_year")," "," : ",(null===X||void 0===X||null===(T=X.publication_year)||void 0===T?void 0:T.length)>=50?"".concat(null===X||void 0===X||null===(R=X.publication_year)||void 0===R?void 0:R.match(/.{1,50}/g)[0]," ..."):null===X||void 0===X?void 0:X.publication_year," "]}),(0,u.jsxs)("div",{children:[oo("publication")," "," : ",null===X||void 0===X?void 0:X.publication]}),(0,u.jsxs)("div",{children:[oo("price")," "," : ",null!==(L=null===X||void 0===X?void 0:X.price)&&void 0!==L?L:0," "]})]})]})})}):(0,u.jsx)(_.Z,{carryParentState:(0,n.Z)((0,n.Z)({},V),{},{bid:null===X||void 0===X?void 0:X._id}),activeTab:"book&n=detail",children:(0,u.jsx)("div",{className:e,children:(0,u.jsxs)("div",{className:t,children:[(0,u.jsxs)("div",{className:a,style:{width:"60%"},children:[(0,u.jsx)("img",{src:null!==X&&void 0!==X&&X.photo?"".concat(v.yI,"/").concat(null===X||void 0===X?void 0:X.photo):"/images/defaultBook.png"}),(0,u.jsxs)("div",{className:d,children:[(0,u.jsxs)("h6",{children:[oo("book_name")," "," : ",(null===X||void 0===X||null===(M=X.bookName)||void 0===M?void 0:M.length)>=50?"".concat(null===X||void 0===X||null===(P=X.bookName)||void 0===P?void 0:P.match(/.{1,50}/g)[0]," ..."):null===X||void 0===X?void 0:X.bookName]}),(0,u.jsxs)("div",{children:[oo("author_label")," "," : ",(null===X||void 0===X||null===(U=X.author)||void 0===U?void 0:U.length)>=50?"".concat(null===X||void 0===X||null===(K=X.author)||void 0===K?void 0:K.match(/.{1,50}/g)[0]," ..."):null===X||void 0===X?void 0:X.author," "]}),(0,u.jsxs)("div",{children:[oo("subject_only")," "," : ",(null===X||void 0===X||null===(q=X.subject)||void 0===q?void 0:q.length)>=50?"".concat(null===X||void 0===X||null===(G=X.subject)||void 0===G?void 0:G.match(/.{1,50}/g)[0]," ..."):null===X||void 0===X?void 0:X.subject," "]}),(0,u.jsxs)("div",{children:[oo("mode")," "," : ",(0,u.jsx)("span",{style:{color:"Online"===(null===X||void 0===X?void 0:X.bookStatus)?"#20b038":"#e95f28"},children:null===X||void 0===X?void 0:X.bookStatus})]}),(0,u.jsxs)("div",{children:[oo("language")," "," : ",(0,u.jsxs)("span",{style:{color:"#f4900c"},children:[null===X||void 0===X?void 0:X.language," "]})]})]})]}),(0,u.jsxs)("div",{className:d,style:{width:"40%"},children:[(0,u.jsxs)("h6",{children:[oo("book_id")," "," : ",(null===X||void 0===X||null===(A=X.book_id)||void 0===A?void 0:A.length)>=50?"".concat(null===X||void 0===X||null===(H=X.book_id)||void 0===H?void 0:H.match(/.{1,50}/g)[0]," ..."):null===X||void 0===X?void 0:X.book_id]}),(0,u.jsxs)("div",{children:[oo("publisher_place")," "," : ",(null===X||void 0===X||null===(Q=X.publisher_place)||void 0===Q?void 0:Q.length)>=50?"".concat(null===X||void 0===X||null===(W=X.publisher_place)||void 0===W?void 0:W.match(/.{1,50}/g)[0]," ..."):null===X||void 0===X?void 0:X.publisher_place," "]}),(0,u.jsxs)("div",{children:[oo("publisher_year")," "," : ",(null===X||void 0===X||null===(z=X.publication_year)||void 0===z?void 0:z.length)>=50?"".concat(null===X||void 0===X||null===(E=X.publication_year)||void 0===E?void 0:E.match(/.{1,50}/g)[0]," ..."):null===X||void 0===X?void 0:X.publication_year," "]}),(0,u.jsxs)("div",{children:[oo("publication")," "," : ",null===X||void 0===X?void 0:X.publication]}),(0,u.jsxs)("div",{children:[oo("price")," "," : ",null!==(Y=null===X||void 0===X?void 0:X.price)&&void 0!==Y?Y:0," "]})]})]})})})})}},11237:function(o,i,l){var n=l(1413),e=(l(72791),l(16871)),t=l(43504),a=l(80184);i.Z=function(o){var i=o.carryParentState,l=o.activeTab,d=o.customStyle,s=o.children,r=(0,e.UO)();return(0,a.jsx)(t.rU,{to:"/q/".concat(r.username,"/member/library?a=").concat(l),state:(0,n.Z)({},i),style:(0,n.Z)({},d),children:s})}},6642:function(o,i,l){var n=l(1413),e=(l(72791),l(16871)),t=l(43504),a=l(80184);i.Z=function(o){var i=o.carryParentState,l=o.activeTab,d=o.customStyleLink,s=o.children,r=(0,e.UO)();return(0,a.jsx)(a.Fragment,{children:""===l?(0,a.jsx)(t.rU,{to:"/q/".concat(r.username,"/member/student/class"),state:(0,n.Z)({},i),style:d,children:s}):(0,a.jsx)(t.rU,{to:"/q/".concat(r.username,"/member/student/class?a=").concat(l),state:(0,n.Z)({},i),style:d,children:s})})}},55581:function(o,i,l){l.d(i,{CU:function(){return p},EI:function(){return v},Ef:function(){return f},H:function(){return g},I4:function(){return m},IO:function(){return t},LN:function(){return h},O_:function(){return s},QJ:function(){return b},SN:function(){return k},Se:function(){return j},XJ:function(){return F},aA:function(){return _},eQ:function(){return x},iJ:function(){return c},mU:function(){return u},nY:function(){return r},qF:function(){return a},qw:function(){return N},sl:function(){return J},xK:function(){return y},yX:function(){return d}});var n=l(29439),e=l(41311),t=function(){var o=(0,e.CW)();return[(0,n.Z)(o,1)[0]]},a=function(){var o=(0,e.UO)();return[(0,n.Z)(o,1)[0]]},d=function(o){var i=(0,e.dA)(null===o||void 0===o?void 0:o.lid,{skip:null===o||void 0===o?void 0:o.skip});return{getLibraryDetail:i.data,getLibraryDetailRefetch:i.refetch}},s=function(o){var i=(0,e.Zo)(o.data,{skip:null===o||void 0===o?void 0:o.skip});return{getBooklist:i.data,getBookListRefetch:i.refetch}},r=function(){var o=(0,e.i9)();return[(0,n.Z)(o,1)[0]]},c=function(o){var i=(0,e.wT)(null===o||void 0===o?void 0:o.bid,{skip:null===o||void 0===o?void 0:o.skip});return{getBookDetail:i.data,getBookDetailRefetch:i.refetch}},_=function(o){var i=(0,e.z2)(o.data,{skip:null===o||void 0===o?void 0:o.skip});return{getIssuedBooklist:i.data,getIssuedBookListRefetch:i.refetch}},v=function(){var o=(0,e.pM)();return[(0,n.Z)(o,1)[0]]},u=function(o){var i=(0,e.jX)(o.data,{skip:null===o||void 0===o?void 0:o.skip});return{getCollectedBooklist:i.data,getCollectedBookListRefetch:i.refetch}},h=function(){var o=(0,e.Gh)();return[(0,n.Z)(o,1)[0]]},m=function(o){var i=(0,e.NM)(o.data,{skip:null===o||void 0===o?void 0:o.skip});return{getMemberslist:i.data,getMembersListRefetch:i.refetch}},b=function(o){var i=(0,e.yp)(o.data,{skip:null===o||void 0===o?void 0:o.skip});return{getMemberBooklist:i.data,getMemberBookListRefetch:i.refetch}},f=function(o){var i=(0,e.A8)(o.data,{skip:null===o||void 0===o?void 0:o.skip});return{getMemberHistorylist:i.data,getMemberHistoryListRefetch:i.refetch}},p=function(){var o=(0,e.YG)();return[(0,n.Z)(o,1)[0]]},j=function(){var o=(0,e.Rn)();return[(0,n.Z)(o,1)[0]]},k=function(o){var i=(0,e.du)(null===o||void 0===o?void 0:o.cid,{skip:null===o||void 0===o?void 0:o.skip});return{getCollectedBookDetail:i.data,getCollectedBookDetailRefetch:i.refetch}},x=function(){var o=(0,e.I1)();return[(0,n.Z)(o,1)[0]]},g=function(o){var i=(0,e.ZS)(o.lid,{skip:null===o||void 0===o?void 0:o.skip});return{libraryGetSiteInfo:i.data,libraryGetSiteInfoRefetch:i.refetch}},N=function(){var o=(0,e.Xr)();return[(0,n.Z)(o,1)[0]]},y=function(o){var i=(0,e.Gw)(o.data,{skip:null===o||void 0===o?void 0:o.skip});return{libraryFineCharge:i.data,libraryFineChargeRefetch:i.refetch}},J=function(){var o=(0,e.UV)();return[(0,n.Z)(o,1)[0]]},F=function(){var o=(0,e.Mb)();return[(0,n.Z)(o,1)[0]]}},38733:function(o,i){i.Z={navbar:"JoinForm_navbar__npU1d",join_form_container:"JoinForm_join_form_container__6Q37N",join_form_container_view:"JoinForm_join_form_container_view__WTHSM",join_form_label_view:"JoinForm_join_form_label_view__S0UQR",join_form_label:"JoinForm_join_form_label__+f6Zt",join_form_input_view:"JoinForm_join_form_input_view__IQBh3",join_form_input:"JoinForm_join_form_input__9NwMx",join_form_select:"JoinForm_join_form_select__ZKKC0",join_form_text_area:"JoinForm_join_form_text_area__LO4QP",join_form_select_paragraph:"JoinForm_join_form_select_paragraph__I7OdI",goback_container:"JoinForm_goback_container__QOvvd",goback_container_text:"JoinForm_goback_container_text__ypd18",goback_container_text_go:"JoinForm_goback_container_text_go__1LHHZ",student_from_container:"JoinForm_student_from_container__nqW9v",student_from_fill:"JoinForm_student_from_fill__wK3o3",student_from_fill_edit:"JoinForm_student_from_fill_edit__KnMCY",form_container:"JoinForm_form_container__zv+j1",form_other_field:"JoinForm_form_other_field__KTI7H",form_container_profile:"JoinForm_form_container_profile__mhlA2",form_container_profile_image:"JoinForm_form_container_profile_image__3MM9C",form_container_profile_photo:"JoinForm_form_container_profile_photo__rEoTw",form_container_profile_image_label:"JoinForm_form_container_profile_image_label__b3SWJ",form_edit_icon:"JoinForm_form_edit_icon__-KIJI",form_profile_info:"JoinForm_form_profile_info__lWv7z",join_form_file_container:"JoinForm_join_form_file_container__48w3c",join_form_file_choose:"JoinForm_join_form_file_choose__wRgT3",join_form_file_choosen:"JoinForm_join_form_file_choosen__H3gUQ",join_form_yes:"JoinForm_join_form_yes__uvOsh",join_form_no:"JoinForm_join_form_no__DOdmt",join_form_active_background:"JoinForm_join_form_active_background__g8OsI",student_detail_name:"JoinForm_student_detail_name__jhziI",student_detail_gender:"JoinForm_student_detail_gender__WLAnI",optional_subject:"JoinForm_optional_subject__8yMbd",arrowIcon:"JoinForm_arrowIcon__zjTO0",join_form_select_custom:"JoinForm_join_form_select_custom__l0lyn",join_form_select_custom_paragraph:"JoinForm_join_form_select_custom_paragraph__h6oDm",join_form_select_custom_icon:"JoinForm_join_form_select_custom_icon__K+ezK",join_form_select_custom_list:"JoinForm_join_form_select_custom_list__Zq-RM",join_form_select_custom_paragraph_option:"JoinForm_join_form_select_custom_paragraph_option__dfz95",add_batch_wise:"JoinForm_add_batch_wise__12tq5",only_admssion_fees:"JoinForm_only_admssion_fees__jjmRd",form_add_fee_btn:"JoinForm_form_add_fee_btn__9gdSc",is_fee_remain:"JoinForm_is_fee_remain__7hNMX",search_container:"JoinForm_search_container__N1K46",search_container_text:"JoinForm_search_container_text__rMKzy",searchIcon:"JoinForm_searchIcon__07z4t",skip_i_do:"JoinForm_skip_i_do__Sri7h",login_details_modal:"JoinForm_login_details_modal__jhsQQ",login_details_modal_title:"JoinForm_login_details_modal_title__JDkZp",login_details_btn:"JoinForm_login_details_btn__2kYn2",profilephotocontainer:"JoinForm_profilephotocontainer__-5H5K",profilephotoins:"JoinForm_profilephotoins__-LFGo",certidyheading:"JoinForm_certidyheading__NJO+i",buttoncontainer:"JoinForm_buttoncontainer__S+iaM",buttonInner:"JoinForm_buttonInner__jv-6K",button_main:"JoinForm_button_main__7JKyK",duplicateCopy:"JoinForm_duplicateCopy__AfcNi",letter_head_container:"JoinForm_letter_head_container__AMFGH"}}}]);
//# sourceMappingURL=7139.c84ecc05.chunk.js.map