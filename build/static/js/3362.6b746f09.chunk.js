"use strict";(self.webpackChunkmithkal_qviple=self.webpackChunkmithkal_qviple||[]).push([[3362],{23362:function(e,n,i){i.r(n),i.d(n,{default:function(){return w}});var t=i(29439),s=i(72791),a=i(93433),l="Body_body__h9R6y",o="Body_loader__FqfO6",c="Body_noData__Nd9Gm",d="Item_item__UW4S0",r="Item_head__sq8Kp",u="Item_text__HYo44",m="Item_content__nvYu+",v="Item_bookmark__jKfDC",h=i(69721),f=i(72426),p=i.n(f),_=i(43504),g=i(80184);var j=function(e){var n,i,a,l=e.data,o=e.Switch,c=(e.id,e.setAnnId),f=(e.refetch,(0,s.useState)(!1)),j=(0,t.Z)(f,2),x=j[0],N=j[1];return(0,g.jsxs)("div",{className:d,children:[(0,g.jsxs)("div",{className:r,onClick:function(){c(l&&l._id),o(!0)},children:[(0,g.jsx)(_.rU,{to:"/q/".concat(null===l||void 0===l||null===(n=l.institute)||void 0===n?void 0:n.name,"/profile"),children:(0,g.jsx)("img",{alt:"Announcement",src:"1"!==(null===l||void 0===l||null===(i=l.institute)||void 0===i?void 0:i.photoId)?"".concat(h.yI,"/").concat(null===l||void 0===l?void 0:l.institute.insProfilePhoto):"/images/ins_default_profile.svg"})}),(0,g.jsxs)("div",{className:u,children:[(0,g.jsx)("h6",{children:l&&(null===l||void 0===l?void 0:l.institute.name)}),(0,g.jsxs)("p",{children:[p()(null===l||void 0===l?void 0:l.createdAt).format("MMM Do YY")," |"," ",p()(null===l||void 0===l?void 0:l.createdAt).format("LT")]})]})]}),(0,g.jsx)("div",{className:m,children:(0,g.jsx)("p",{children:(0,g.jsx)("span",{onClick:function(){c(l&&l._id),o(!0)},children:null===l||void 0===l||null===(a=l.insAnnTitle)||void 0===a?void 0:a.substr(0,130)})})}),x?(0,g.jsx)("img",{className:v,src:"/images/bookmark-yellow.svg",onClick:function(){return N(!x)},alt:""}):(0,g.jsx)("img",{className:v,src:"/images/bookmark-post.svg",onClick:function(){return N(!x)},alt:""})]})},x=i(23441),N=i(91007);var y=function(e){var n=e.Switch,i=e.setAnnId,d=(0,s.useState)(1),r=(0,t.Z)(d,2),u=r[0],m=r[1],v=(0,s.useState)(!1),h=(0,t.Z)(v,2),f=h[0],p=h[1],_=(0,s.useState)(!1),y=(0,t.Z)(_,2),D=y[0],k=y[1],I=(0,N.KU)(u,{skip:f}),b=I.data,A=I.refetch,w=(0,x.YD)(),C=(0,t.Z)(w,2),S=C[0],T=C[1],Y=(0,s.useState)([]),Z=(0,t.Z)(Y,2),U=Z[0],F=Z[1],P=localStorage.getItem("user");return(0,s.useEffect)((function(){b&&(b.announcement.length?F([].concat((0,a.Z)(U),(0,a.Z)(b.announcement))):u>1&&p(!0))}),[b]),(0,s.useEffect)((function(){T&&(f||m(u+1))}),[T]),(0,s.useEffect)((function(){setTimeout((function(){k(!D)}),3e3)}),[]),(0,g.jsx)("div",{className:l,children:U.length>0?U.map((function(e,t){return(0,g.jsx)("div",{ref:S,children:(0,g.jsx)(j,{Switch:n,refetch:A,setAnnId:i,data:e||"",time:null===e||void 0===e?void 0:e.createdAt,date:null===e||void 0===e?void 0:e.createdAt,text:null===e||void 0===e?void 0:e.insAnnDescription,id:P&&P})},t)})):0===U.length&&!0===D?(0,g.jsx)("div",{className:c,children:(0,g.jsx)("img",{src:"/images/nodata.jpg",alt:""})}):(0,g.jsx)("div",{className:o,children:(0,g.jsx)("img",{src:"/images/loader/loader.gif",alt:""})})})},D={imgcontainer:"Details_imgcontainer__YHc4d",eachposthead:"Details_eachposthead__z5d7p",eachpostUserName:"Details_eachpostUserName__qwO1B",eachpostUserTime:"Details_eachpostUserTime__1QeRg",public:"Details_public__639mJ",details:"Details_details__lOfOd",tille:"Details_tille__+k+M-",description:"Details_description__ydB9J",hashTag:"Details_hashTag__gz9yt",hashtag:"Details_hashtag__7ZdXz",loader:"Details_loader__bFFXC",anndoc:"Details_anndoc__CIk3a",documentContainer:"Details_documentContainer__86Tvx"},k=i(11968),I=i.n(k),b=i(10307);var A=function(e){var n,i,t,a,l,o,c,d,r=e.annId,u=(0,N.Lr)(r,{skip:!r}),m=u.data,v=u.isFetching,f=u.refetch;return(0,s.useEffect)((function(){r&&f()}),[r,f]),(0,g.jsx)("div",{className:D.details,children:v?(0,g.jsx)(g.Fragment,{children:(0,g.jsx)("div",{className:D.loader,children:(0,g.jsx)("img",{src:"/images/loader/loader-bg-white.gif",alt:""})})}):(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)("div",{className:D.eachposthead,children:[(0,g.jsx)("div",{className:D.imgcontainer,children:(0,g.jsx)("img",{alt:"not found",src:"1"!==(null===m||void 0===m||null===(n=m.announcement)||void 0===n?void 0:n.institute.photoId)?"".concat(h.yI,"/").concat(null===m||void 0===m||null===(i=m.announcement)||void 0===i||null===(t=i.institute)||void 0===t?void 0:t.insProfilePhoto):"/images/ins_default_profile.svg"})}),(0,g.jsxs)("div",{className:D.eachpostUserName,children:[(0,g.jsx)("h6",{children:m&&m.announcement&&(null===(a=m.announcement.institute)||void 0===a?void 0:a.insName)}),(0,g.jsxs)("div",{className:D.eachpostUserTime,style:{display:"flex",gap:"0.5vw",alignItems:"center"},children:[(0,g.jsx)("p",{children:m&&p()(null===(l=m.announcement)||void 0===l?void 0:l.createdAt).format("DD-M-YYYY")}),"Private"===(null===m||void 0===m||null===(o=m.announcement)||void 0===o?void 0:o.insAnnVisibility)?(0,g.jsx)("img",{className:D.public,src:"/images/post-private-icon.svg",alt:"Private"}):(0,g.jsx)("img",{className:D.public,src:"/images/privacy-icon.svg",alt:"Public"})]})]})]}),(0,g.jsxs)("div",{className:D.Container,children:[(0,g.jsx)("p",{className:D.tille,children:m&&(null===(c=m.announcement)||void 0===c?void 0:c.insAnnTitle)}),(0,g.jsx)("hr",{}),(0,g.jsxs)("p",{className:D.description,children:[m&&(null===(d=m.announcement)||void 0===d?void 0:d.insAnnDescription)," "]}),(0,g.jsx)("p",{className:D.description}),(0,g.jsx)("div",{className:D.documentContainer,children:(0,g.jsx)(I(),{className:"Example",autoPlay:!1,indicators:!0,navButtonsAlwaysVisible:!1,navButtonsAlwaysInvisible:!1,next:function(e,n){},prev:function(e,n){},onChange:function(e,n){},children:null===m||void 0===m?void 0:m.announcement.announcementDocument.map((function(e){return"image/jpeg"===e.documentType||"image/png"===e.documentType||(0,b.Y)(null===e||void 0===e?void 0:e.documentKey)?(0,g.jsx)("div",{className:D.anndoc,children:(0,g.jsx)("img",{className:D.selectedImg,src:"".concat(h.yI,"/").concat(null===e||void 0===e?void 0:e.documentKey),alt:null===e||void 0===e?void 0:e.documentName,style:{width:"100%",height:"auto"}})}):(0,g.jsx)("div",{className:D.anndoc,children:(0,g.jsx)("a",{title:"Download File",href:"https://d3dqpu54js2vfl.cloudfront.net/".concat(null===e||void 0===e?void 0:e.documentKey),target:"_blank",rel:"noopener noreferrer",children:(0,g.jsx)("img",{className:D.selectedImg,src:"/images/pdf-icon.png",alt:null===e||void 0===e?void 0:e.documentName,style:{width:"100%",height:"auto"}})})})}))})})]})]})})};var w=function(){var e=(0,s.useState)(!1),n=(0,t.Z)(e,2),i=n[0],a=n[1],l=(0,s.useState)(""),o=(0,t.Z)(l,2),c=o[0],d=o[1];return(0,g.jsx)(g.Fragment,{children:i?(0,g.jsx)(A,{annId:c&&c}):(0,g.jsx)(y,{Switch:function(e){return a(e)},setAnnId:d})})}},10307:function(e,n,i){i.d(n,{Y:function(){return s}});var t=[".jpg",".jpeg",".jpe",".pjpeg",".pjp",".apng",".jif",".jfif",".jfi",".png",".gif",".webp",".tiff",".tif",".psd",".heif",".heic",".svg",".svgz",".ai",".eps",".avif"],s=function(e){for(var n=!1,i=0,s=t;i<s.length;i++){var a=s[i];if(null!==e&&void 0!==e&&e.includes(a)){n=!0;break}}return n}}}]);
//# sourceMappingURL=3362.6b746f09.chunk.js.map