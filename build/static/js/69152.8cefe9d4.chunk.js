"use strict";(self.webpackChunkmithkal_qviple=self.webpackChunkmithkal_qviple||[]).push([[69152,16256],{16256:(t,e,o)=>{o.d(e,{e7:()=>i});const i=["January","February","March","April","May","June","July","August","September","October","November","December"]},43997:(t,e,o)=>{o.d(e,{jh:()=>i});const i=t=>{var e;let o=[];return o=null!==t&&void 0!==t&&t.includes("-")?null===t||void 0===t?void 0:t.split("-"):null===t||void 0===t?void 0:t.split("/"),(null===(e=o[2])||void 0===e?void 0:e.length)>2?"".concat(+o[0]>9?o[0]:"0".concat(+o[0]),"/").concat(+o[1]>9?o[1]:"0".concat(+o[1]),"/").concat(o[2]):"".concat(+o[2]>9?o[2]:"0".concat(+o[2]),"/").concat(+o[1]>9?o[1]:"0".concat(+o[1]),"/").concat(o[0])}},8774:(t,e,o)=>{var i=o(51355),l=o(72426),n=o.n(l);const d=(t,e,o)=>{var l,d,r,a,s,v,u,c=new i.ZP({format:"a4",putOnlyUsedFonts:!0}),x=c.internal.pageSize.getWidth();c.internal.pageSize.getHeight();const T=new Date;var C=0;if(null!==t&&void 0!==t&&t.letterHead)C=45;else{var h,f,g,m;c.addImage(e.instituteImage,"JPEG",10,3,25,25),c.addImage(e.affiliatedImage,"JPEG",x-34,3,25,25),c.setLineWidth(8),c.setDrawColor(255,255,255),c.circle(22.4,15.3,16),c.circle(x-21.4,15.3,16),c.setLineWidth(0),C=null!==e&&void 0!==e&&e.insAffiliated?17:10;const t=c.splitTextToSize(null!==(h=null===e||void 0===e?void 0:e.insName)&&void 0!==h?h:"",130);if(c.setFont("700"),c.setTextColor(18,18,18),c.setFontSize(16),c.text(107,C,t,"center"),null!==t&&void 0!==t&&t.length)for(let e=0;e<(null===t||void 0===t?void 0:t.length);e++)C+=6;var p;if(null!==e&&void 0!==e&&e.insAffiliated)c.setFontSize(10),c.text(107,10,null!==(p=null===e||void 0===e?void 0:e.insAffiliated)&&void 0!==p?p:"","center");c.setFont("Arial","normal","400"),c.setTextColor(18,18,18),c.setFontSize(10);const o=c.splitTextToSize(null!==(f=null===e||void 0===e?void 0:e.insAddress)&&void 0!==f?f:"",140);if(c.text(x/2,C,o,"center"),null!==o&&void 0!==o&&o.length)for(let e=0;e<(null===o||void 0===o?void 0:o.length);e++)C+=5;c.text(x/2,C+1,"Mob No : ".concat(null!==(g=null===e||void 0===e?void 0:e.insPhoneNumber)&&void 0!==g?g:""," , Mail: ").concat(null!==(m=null===e||void 0===e?void 0:e.insEmail)&&void 0!==m?m:""),"center"),C+=10}c.setFont("Inter","italic","400"),c.setTextColor(18,18,18),c.setFontSize(16),c.text(x/2,C+2,"Bona-fide Certificate",null,null,"center"),C+=2;let N=c.getTextWidth("Bona-fide Certificate");c.setLineWidth(.3),c.setDrawColor(137,137,137),c.line(x/2-N,C,x/2-N/2-2,C),c.setDrawColor(137,137,137),c.setLineWidth(.3),c.line(x/2+N/2+2,C,x/2+N,C),C+=10,c.setTextColor(0,0,0),c.setFontSize(11),c.setFont("Inter","normal","700"),c.text(10,C,"Date: "),c.setFont("Inter","normal","600"),c.text(20,C,"".concat(n()(T).format("DD-MM-yyyy"))),c.addImage(t.studentImage,"JPEG",x-40,C,30,30),c.setFont("Inter","italic","700"),c.setFontSize(13),c.text(x-10-c.getTextWidth("Gr No: ".concat(null!==(l=null===t||void 0===t?void 0:t.grNumber)&&void 0!==l?l:"")),C+35,"Gr No: ".concat(null!==(d=null===t||void 0===t?void 0:t.grNumber)&&void 0!==d?d:"ALD1"),{align:"left"}),C+=10,c.setFont("Inter","normal","700"),c.setFontSize(11),c.text(10,C+3,"Subject/Reason:  "),c.setFont("Inter","normal","600");let b=c.splitTextToSize(null!==(r=null===t||void 0===t?void 0:t.reason)&&void 0!==r?r:"",x-135);c.text(40,C+3,b,"left"),C+=30;let S="This is to certify that Mr./Miss ### ".concat(null!==(a=" ".concat(null===t||void 0===t?void 0:t.name))&&void 0!==a?a:"","###, Birth date as per records of institute is ").concat(null!==t&&void 0!==t&&t.dob?null===t||void 0===t?void 0:t.dob:"N/A",",is a bona-fide student of this institute, studying in class ### ").concat(null!==(s=" ".concat(null===t||void 0===t?void 0:t.classTitle))&&void 0!==s?s:"",", ").concat(null!==(v=null===t||void 0===t?void 0:t.dName)&&void 0!==v?v:"",", ").concat(null!==(u=null===t||void 0===t?void 0:t.batchName)&&void 0!==u?u:""," ### ."),y=c.splitTextToSize(S,x-29),F=1;for(let i of y){let t=i.split("###");for(let e=0;e<(null===t||void 0===t?void 0:t.length);e++){let o=1===F?32:10;for(let i=0;i<e;i++)o+=c.getTextWidth(t[i])-2;e%2===0?(c.setFont("Inter","normal","600"),c.text(o,C+5,t[e])):(c.setFont("Inter","normal","700"),c.text(o,C+5,t[e]))}F=2,C+=8}return C+=10,null!==t&&void 0!==t&&t.message&&(c.setFont("Inter","normal","600"),c.setTextColor(0,0,0),c.setFontSize(11),null!==t&&void 0!==t&&t.letterHead||null===e||void 0===e||!e.autority_stamp_profile||(c.setLineWidth(8),c.setDrawColor(255,255,255),c.circle(23.9,C+17,16)),c.text(10,C,"Note : ".concat(null===t||void 0===t?void 0:t.message),"left")),o&&(C+=7,c.addImage(o,"JPEG",10,C,190,90),C+=98),C+=5,null!==t&&void 0!==t&&t.letterHead||(null!==e&&void 0!==e&&e.autority_stamp_profile&&(C+=11,c.addImage(e.autority_stamp_profile,"JPEG",12,C-13,25,25)),c.setFont("Inter","bold","700"),c.setTextColor(0,0,0),c.setFontSize(12),c.text(10,C+20,"Stamp Of Institute")),c.setFont("Inter","normal","700"),c.setTextColor(0,0,0),c.setFontSize(12),null!==e&&void 0!==e&&e.authority_signature&&c.addImage(e.authority_signature,"JPEG",x-50,C-13,40,25),c.text(x-10-c.getTextWidth(null!==t&&void 0!==t&&t.authority?"".concat(null===t||void 0===t?void 0:t.authority,":"):"Principal/Competent Authority:"),C+20,null!==t&&void 0!==t&&t.authority?"".concat(null===t||void 0===t?void 0:t.authority,":"):"Principal/Competent Authority:"),null!==t&&void 0!==t&&t.isOriginal||(c.setTextColor(150),c.text(100,C+20,"Qviple Copy")),c.output("blob")};var r=o(62906),a=o.n(r);const s=(t,e)=>{var o=new i.ZP({format:"a4",putOnlyUsedFonts:!0}),l=o.internal.pageSize.getWidth();const d=t=>(t.match(/[a-zA-Z0-9]+/g)||[]).map((t=>"".concat(t.charAt(0).toUpperCase()).concat(t.slice(1)))).join(" ");var r=0;if(null!==e&&void 0!==e&&e.is_letterhead)r=45,o.setFont("WorkSans"),o.setTextColor(18,18,18),o.setFontSize(10);else{var s,v;o.addImage(t.instituteImage,"JPEG",9,3,25,25),o.addImage(t.affiliatedImage,"JPEG",l-34,2.5,25,25),o.setLineWidth(8),o.setDrawColor(255,255,255),o.circle(21.4,15,16),o.setLineWidth(0),o.setLineWidth(8),o.setDrawColor(255,255,255),o.circle(l-21.4,15,16),o.setLineWidth(0),r=null!==t&&void 0!==t&&t.insAffiliated?12:10;const e=o.splitTextToSize(null!==(s=null===t||void 0===t?void 0:t.insName)&&void 0!==s?s:"IIT Mumabi Mera by Of Raod of campige sbdas f as",146);if(o.setFont("700"),o.setTextColor(18,18,18),o.setFontSize(16),o.text(107,r,e,"center"),null!==e&&void 0!==e&&e.length)for(let t=0;t<(null===e||void 0===e?void 0:e.length);t++)r+=6;if(null!==t&&void 0!==t&&t.insAffiliated&&(o.setFontSize(10),o.text(107,5,null===t||void 0===t?void 0:t.insAffiliated,"center")),o.setFont("WorkSans"),o.setTextColor(18,18,18),o.setFontSize(10),t.ediatbel1){let e=o.splitTextToSize(t.ediatbel1,l-70);if(o.text(l/2,r,e,"center"),null!==e&&void 0!==e&&e.length)for(let t=0;t<(null===e||void 0===e?void 0:e.length);t++)r+=5}if(t.ediatbel2){let e=o.splitTextToSize(t.ediatbel2,l-70);if(o.text(l/2,r,e,"center"),null!==e&&void 0!==e&&e.length)for(let t=0;t<(null===e||void 0===e?void 0:e.length);t++)r+=5}o.setFont("Arial","normal","400"),o.setTextColor(18,18,18),o.setFontSize(10),o.text(l/2,r,null!==(v=null===t||void 0===t?void 0:t.insAddress)&&void 0!==v?v:"plot no. 77 Adarsh Vihar Buddeshwar Chauraha LKO","center"),o.setFont("WorkSans"),o.setTextColor(18,18,18),o.setFontSize(10),o.text(l/2,r+4,"Mob No : ".concat(null===t||void 0===t?void 0:t.insPhoneNumber," , Mail: ").concat(null===t||void 0===t?void 0:t.insEmail),"center"),r+=16}if(o.setTextColor(0,0,0),o.setFontSize(18),o.text(l/2,r,"".concat("leaving"===(null===e||void 0===e?void 0:e.is_leaving)?"Leaving Certificate":"MTC"===(null===e||void 0===e?void 0:e.is_leaving)?"Migration TC":"MLC"===(null===e||void 0===e?void 0:e.is_leaving)?"Migration LC":"Transfer Certificate"),"center"),r+=8,o.setLineWidth(.4),o.setDrawColor("#121212"),o.line(0,r,l,r),r+=8,null!==e&&void 0!==e&&e.isOriginal||(o.setTextColor(234,238,238),o.setFontSize(100),o.text(60,o.internal.pageSize.height-100,"Duplicate",null,50)),o.setFontSize(13),null!==e&&void 0!==e&&e.grNumber&&(o.setTextColor("#121212"),o.text(9,r,"Gr No :"),o.setTextColor("#454545"),o.text(10+o.getTextWidth("Gr No :"),r,"".concat(null===e||void 0===e?void 0:e.grNumber))),null!==e&&void 0!==e&&e.bookNumber&&(o.text(15+o.getTextWidth("Gr No :".concat(null===e||void 0===e?void 0:e.grNumber)),r,"Book No :"),o.setTextColor("#454545"),o.text(15+o.getTextWidth("Gr No :".concat(null===e||void 0===e?void 0:e.grNumber," Book No :")),r,"".concat(null===e||void 0===e?void 0:e.bookNumber))),null!==e&&void 0!==e&&e.certificateNumber&&(o.text(20+o.getTextWidth("Gr No :".concat(null===e||void 0===e?void 0:e.grNumber," Book No : ").concat(null===e||void 0===e?void 0:e.bookNumber)),r,"Certificate No :"),o.setTextColor("#454545"),o.text(20+o.getTextWidth("Gr No :".concat(null===e||void 0===e?void 0:e.grNumber," Book No : ").concat(null===e||void 0===e?void 0:e.bookNumber," Certificate No :")),r,"".concat(null===e||void 0===e?void 0:e.certificateNumber))),null!==e&&void 0!==e&&e.udiseNumber&&(o.text(25+o.getTextWidth("Gr No :".concat(null===e||void 0===e?void 0:e.grNumber," Book No : ").concat(null===e||void 0===e?void 0:e.bookNumber," Certificate No : ").concat(null===e||void 0===e?void 0:e.certificateNumber)),r,"UDISE No/Student ID No :"),o.setTextColor("#454545"),o.text(25+o.getTextWidth("Gr No :".concat(null===e||void 0===e?void 0:e.grNumber," Book No : ").concat(null===e||void 0===e?void 0:e.bookNumber," Certificate No : ").concat(null===e||void 0===e?void 0:e.certificateNumber," UDISE No/Student ID No :")),r,"".concat(null===e||void 0===e?void 0:e.udiseNumber))),(null!==e&&void 0!==e&&e.grNumber||null!==e&&void 0!==e&&e.bookNumber||null!==e&&void 0!==e&&e.certificateNumber||null!==e&&void 0!==e&&e.udiseNumber)&&(r+=10),o.setTextColor("#121212"),o.text(9,r,"Full Name of Student :"),o.setTextColor("#454545"),o.text(60,r,"".concat(null===e||void 0===e?void 0:e.name)),r+=10,null!==e&&void 0!==e&&e.motherName&&(o.setTextColor("#121212"),o.text(9,r,"Mother\u2019s Name :"),o.setTextColor("#454545"),o.text(60,r,"".concat(null===e||void 0===e?void 0:e.motherName))),null!==e&&void 0!==e&&e.category&&(o.setTextColor("#121212"),o.text(l/2,r,"Caste Category :"),o.setTextColor("#454545"),o.text(l/2+60,r,"".concat(null===e||void 0===e?void 0:e.category))),(null!==e&&void 0!==e&&e.motherName||null!==e&&void 0!==e&&e.category)&&(r+=10),null!==e&&void 0!==e&&e.religion&&(o.setTextColor("#121212"),o.text(9,r,"Religion :"),o.setTextColor("#454545"),o.text(60,r,"".concat(null===e||void 0===e?void 0:e.religion))),null!==e&&void 0!==e&&e.religion&&(o.setTextColor("#121212"),o.text(l/2,r,"Caste :"),o.setTextColor("#454545"),o.text(l/2+60,r,"".concat(null===e||void 0===e?void 0:e.catse))),(null!==e&&void 0!==e&&e.religion||null!==e&&void 0!==e&&e.religion)&&(r+=10),null!==e&&void 0!==e&&e.nationality&&(o.setTextColor("#121212"),o.text(9,r,"Nationality :"),o.setTextColor("#454545"),o.text(60,r,"".concat(null===e||void 0===e?void 0:e.nationality))),null!==e&&void 0!==e&&e.motherT&&(o.setTextColor("#121212"),o.text(l/2,r,"Mother Tongue :"),o.setTextColor("#454545"),o.text(l/2+60,r,"".concat(null===e||void 0===e?void 0:e.motherT))),(null!==e&&void 0!==e&&e.religion||null!==e&&void 0!==e&&e.religion)&&(r+=10),null!==e&&void 0!==e&&e.birthPlace){o.setTextColor("#121212"),o.text(9,r,"Birth Place :"),o.setTextColor("#454545");let t=o.splitTextToSize("".concat(null===e||void 0===e?void 0:e.birthPlace),l-20);if(o.text(60,r,t),(null===t||void 0===t?void 0:t.length)>1)for(let e=1;e<(null===t||void 0===t?void 0:t.length);e++)r+=5;else r+=10;(null===t||void 0===t?void 0:t.length)>1&&(r+=10)}if(null!==e&&void 0!==e&&e.dateOfBirth&&(o.setTextColor("#121212"),o.text(9,r,"Date Of Birth :"),o.setTextColor("#454545"),o.text(60,r,"".concat(null===e||void 0===e?void 0:e.dateOfBirth)),r+=10),null!==e&&void 0!==e&&e.dateOfBirth){var u;o.setTextColor("#121212"),o.text(9,r,"(In Words) :"),o.setTextColor("#454545");let t=null===e||void 0===e||null===(u=e.dateOfBirth)||void 0===u?void 0:u.split("-");null!==t&&void 0!==t&&t.length?o.text(60,r,"".concat(d(a().toWords("".concat(t[2])))," ").concat(d(a().toWords("".concat(t[1])))," ").concat(d(a().toWords("".concat(t[0]))))):o.text(60,r,""),r+=10}if(null!==e&&void 0!==e&&e.previousSchool){o.setTextColor("#121212"),o.text(9,r,"Previous School/College :"),o.setTextColor("#454545");let t=o.splitTextToSize(null===e||void 0===e?void 0:e.previousSchool,l-50);if(o.text(60,r,t),null!==t&&void 0!==t&&t.length)for(let e=0;e<(null===t||void 0===t?void 0:t.length);e++)r+=5}if(r+=4,null!==e&&void 0!==e&&e.instituteJoinDate&&(o.setTextColor("#121212"),o.text(9,r,"Institute Joining Date :"),o.setTextColor("#454545"),o.text(60,r,"".concat(null===e||void 0===e?void 0:e.instituteJoinDate)),r+=10),null!==e&&void 0!==e&&e.studyProgress&&(o.setTextColor("#121212"),o.text(9,r,"Study Progress :"),o.setTextColor("#454545"),o.text(60,r,"".concat(null===e||void 0===e?void 0:e.studyProgress))),null!==e&&void 0!==e&&e.behaviour&&(o.setTextColor("#121212"),o.text(l/2,r,"Behaviour :"),o.setTextColor("#454545"),o.text(l/2+60,r,"".concat(null===e||void 0===e?void 0:e.behaviour))),(null!==e&&void 0!==e&&e.studyProgress||null!==e&&void 0!==e&&e.behaviour)&&(r+=10),null!==e&&void 0!==e&&e.instituteLeavingDate&&(o.setTextColor("#121212"),o.text(9,r,"Institute Leaving Date :"),o.setTextColor("#454545"),o.text(60,r,"".concat(null===e||void 0===e?void 0:e.instituteLeavingDate))),null!==e&&void 0!==e&&e.courseDuration&&(o.setTextColor("#121212"),o.text(l/2,r,"Course Duration :"),o.setTextColor("#454545"),o.text(l/2+60,r,"".concat(null===e||void 0===e?void 0:e.courseDuration))),(null!==e&&void 0!==e&&e.instituteLeavingDate||null!==e&&void 0!==e&&e.courseDuration)&&(r+=10),null!==e&&void 0!==e&&e.studentClassName&&(o.setTextColor("#121212"),o.text(9,r,"Was Studing in, From :"),o.setTextColor("#454545"),o.text(60,r,"".concat(null===e||void 0===e?void 0:e.studentClassName)),r+=10),null!==e&&void 0!==e&&e.leavingReason){o.setTextColor("#121212"),o.text(9,r,"Reason For Leaving :"),o.setTextColor("#454545");let t=o.splitTextToSize("".concat(null===e||void 0===e?void 0:e.leavingReason),l-65);if(o.text(60,r,t),(null===t||void 0===t?void 0:t.length)>1)for(let e=1;e<(null===t||void 0===t?void 0:t.length);e++)r+=5;else r+=10;(null===t||void 0===t?void 0:t.length)>1&&(r+=10)}if(null!==e&&void 0!==e&&e.remark){o.setTextColor("#121212"),o.text(9,r,"Remarks :"),o.setTextColor("#454545");let t=o.splitTextToSize("".concat(null===e||void 0===e?void 0:e.remark),l-65);if(o.text(60,r,t),(null===t||void 0===t?void 0:t.length)>1)for(let e=1;e<(null===t||void 0===t?void 0:t.length);e++)r+=5;else r+=10;(null===t||void 0===t?void 0:t.length)>1&&(r+=10)}o.setDrawColor(15,132,178),o.setLineWidth(5.3),o.line(0,r,l,r),o.setTextColor(255,255,255),o.setFontSize(10),o.text(l/2,r+1,"Giving this certificate all information is correct as per institute register.",null,null,"center"),r+=10,o.setFontSize(13),o.setTextColor("#121212"),o.text(9,r,"Date :"),o.setTextColor("#454545"),o.text(19,r," ".concat(n()().format("Do MMM YYYY"))),o.setTextColor("#121212");let c=null!==e&&void 0!==e&&e.authority?"".concat(null===e||void 0===e?void 0:e.authority,":"):"Principal/Competent Authority:";o.text(l-10-o.getTextWidth(c),r,c),r+=10,o.setLineWidth(.2),o.setDrawColor(18,18,18),o.line(0,r,l,r),r+=5,o.setTextColor(18,18,18),o.setFontSize(10);let x=o.splitTextToSize("Note : No one except one who is making this certificate should interfere with any details of this certificate, other students will be expelled and legal action will be taken.",l-20);if(o.text(9,r,x),(null===x||void 0===x?void 0:x.length)>1)for(let i=1;i<(null===x||void 0===x?void 0:x.length);i++)r+=5;else r+=10;return o.output("blob")};var v=o(16256);const u=t=>(t.match(/[a-zA-Z0-9]+/g)||[]).map((t=>"".concat(t.charAt(0).toUpperCase()).concat(t.slice(1)))).join(" "),c=(t,e)=>{var o,l,d,r,s,c,x,T=new i.ZP({format:"a4",putOnlyUsedFonts:!0}),C=T.internal.pageSize.getWidth(),h=0;if(null!==e&&void 0!==e&&e.is_letterhead)h=45,T.setFont("WorkSans"),T.setTextColor(18,18,18),T.setFontSize(10);else{var f,g;T.addImage(t.instituteImage,"JPEG",9,8,25,25),T.addImage(t.affiliatedImage,"JPEG",C-34,7.5,25,25),T.setLineWidth(8),T.setDrawColor(255,255,255),T.circle(21.4,20,16),T.setLineWidth(0),T.setLineWidth(8),T.setDrawColor(255,255,255),T.circle(C-21.4,20,16),T.setLineWidth(0),h=null!==t&&void 0!==t&&t.insAffiliated?17:15;const e=T.splitTextToSize(null!==(f=null===t||void 0===t?void 0:t.insName)&&void 0!==f?f:"IIT Mumabi Mera by Of Raod of campige sbdas f as",146);if(T.setFont("700"),T.setTextColor(18,18,18),T.setFontSize(16),T.text(107,h,e,"center"),null!==e&&void 0!==e&&e.length)for(let t=0;t<(null===e||void 0===e?void 0:e.length);t++)h+=6;if(null!==t&&void 0!==t&&t.insAffiliated&&(T.setFontSize(10),T.text(107,11,null===t||void 0===t?void 0:t.insAffiliated,"center")),T.setFont("WorkSans"),T.setTextColor(18,18,18),T.setFontSize(10),t.ediatbel1){let e=T.splitTextToSize(t.ediatbel1,C-70);if(T.text(C/2,h,e,"center"),null!==e&&void 0!==e&&e.length)for(let t=0;t<(null===e||void 0===e?void 0:e.length);t++)h+=5}T.setFont("Arial","normal","400"),T.setTextColor(18,18,18),T.setFontSize(10),T.text(C/2,h,null!==(g=null===t||void 0===t?void 0:t.insAddress)&&void 0!==g?g:"plot no. 77 Adarsh Vihar Buddeshwar Chauraha LKO","center"),T.setFont("WorkSans"),T.setTextColor(18,18,18),T.setFontSize(10),h+=15}T.setTextColor(0,0,0),T.setFontSize(18),T.text(C/2,h,"".concat("MTC"===(null===e||void 0===e?void 0:e.is_leaving)?"Migration TC":"MLC"===(null===e||void 0===e?void 0:e.is_leaving)?"Migration LC":"TRANSFER/LEAVING CERTIFICATE"),"center"),h+=11,null!==e&&void 0!==e&&e.isOriginal||(T.setTextColor(234,238,238),T.setFontSize(100),T.text(60,T.internal.pageSize.height-100,"Duplicate",null,50)),T.setFontSize(13),T.setTextColor("#121212"),T.text(9,h,"No: ".concat(null===e||void 0===e?void 0:e.certificateNumber)),T.text(C-40,h,"Date: ".concat(null===(o=n()(null===e||void 0===e?void 0:e.date))||void 0===o?void 0:o.format("DD/MM/yyyy"))),h+=5,T.setTextColor("#121212"),T.setFontSize(10);let m=T.splitTextToSize("Note : No change in any entry in this certificate should be made except by the authority issuing and any infringement of this requirement is liable to involve the imposition of a penalty even that of rustication.",C-15);if(T.setTextColor("#121212"),T.text(9,h,m),(null===m||void 0===m?void 0:m.length)>1)for(let i=1;i<(null===m||void 0===m?void 0:m.length);i++)h+=5;else h+=7.7;h+=7.7,T.setFontSize(12),T.setTextColor("#000000"),T.text(9,h,"1."),T.setTextColor("#000000"),T.text(18,h,"Registered Number of Candidate :"),T.setTextColor("#000000"),T.text(79,h,"".concat(null===e||void 0===e?void 0:e.enrollment)),h+=7.7,T.setTextColor("#000000"),T.text(9,h,"2."),T.setTextColor("#000000"),T.text(18,h,"Name of Candidate (in full) :"),T.setTextColor("#000000"),T.text(70,h,"".concat(null===e||void 0===e?void 0:e.name)),h+=7.7,T.setTextColor("#000000"),T.text(9,h,"3."),T.setTextColor("#000000"),T.text(18,h,"Caste :"),T.setTextColor("#000000"),T.text(33,h,"".concat(null===e||void 0===e?void 0:e.catse)),h+=7.7,T.setTextColor("#000000"),T.text(9,h,"4."),T.setTextColor("#000000"),T.text(18,h,"Religion :"),T.setTextColor("#000000"),T.text(38,h,"".concat(null===e||void 0===e?void 0:e.religion)),h+=7.7,T.setTextColor("#000000"),T.text(9,h,"5."),T.setTextColor("#000000"),T.text(18,h,"Nationality :"),T.setTextColor("#000000"),T.text(42,h,"".concat(null===e||void 0===e?void 0:e.nationality)),h+=7.7,T.setTextColor("#000000"),T.text(9,h,"6."),T.setTextColor("#000000"),T.text(18,h,"Place of Birth :"),T.setTextColor("#000000"),T.text(47,h,"".concat(null===e||void 0===e?void 0:e.birthPlace)),h+=7.7,T.setTextColor("#000000"),T.text(9,h,"7."),T.setTextColor("#000000"),T.text(18,h,"Date of Birth, Month, & Year according to Christian era (in figure) :"),T.setTextColor("#000000"),T.text(137,h,"".concat(null===(l=n()(null===e||void 0===e?void 0:e.dateOfBirth))||void 0===l?void 0:l.format("DD/MM/yyyy"))),h+=7.7,T.setTextColor("#000000"),T.text(18,h,"(in words) :"),T.setTextColor("#000000");let p="";var N,b,S,y,F,z,I,D,W,M,A,L,k,P,w,B,O,G,E,R,_;"Upper"===(null===t||void 0===t?void 0:t.whichCase)?p="".concat(null!==e&&void 0!==e&&e.dateOfBirth?"".concat(null===(N=u(a().toWords(null===e||void 0===e||null===(b=e.dateOfBirth)||void 0===b||null===(S=b.split("T")[0])||void 0===S||null===(y=S.split("-"))||void 0===y?void 0:y[2])))||void 0===N?void 0:N.toUpperCase(),"  ").concat(null===(F=v.e7[(null===e||void 0===e||null===(z=e.dateOfBirth)||void 0===z||null===(I=z.split("T")[0])||void 0===I||null===(D=I.split("-"))||void 0===D?void 0:D[1])-1])||void 0===F?void 0:F.toUpperCase()," ").concat(null===(W=u(a().toWords(null===e||void 0===e||null===(M=e.dateOfBirth)||void 0===M||null===(A=M.split("T")[0])||void 0===A||null===(L=A.split("-"))||void 0===L?void 0:L[0])))||void 0===W?void 0:W.toUpperCase()):"N/A"):p="".concat(null!==e&&void 0!==e&&e.dateOfBirth?"".concat(u(a().toWords(null===e||void 0===e||null===(k=e.dateOfBirth)||void 0===k||null===(P=k.split("T")[0])||void 0===P||null===(w=P.split("-"))||void 0===w?void 0:w[2])),"  ").concat(v.e7[(null===e||void 0===e||null===(B=e.dateOfBirth)||void 0===B||null===(O=B.split("T")[0])||void 0===O||null===(G=O.split("-"))||void 0===G?void 0:G[1])-1]," ").concat(u(a().toWords(null===e||void 0===e||null===(E=e.dateOfBirth)||void 0===E||null===(R=E.split("T")[0])||void 0===R||null===(_=R.split("-"))||void 0===_?void 0:_[0]))):"N/A");T.text(41,h,p),h+=7.7;let J="Institute Last attended :  ###".concat(" ".concat(null===e||void 0===e?void 0:e.previousSchool));T.setTextColor("#000000"),T.text(9,h,"8.");let U=T.splitTextToSize(J,C-20);for(let i of U){let t=i.split("###");for(let e=0;e<(null===t||void 0===t?void 0:t.length);e++){let o=18;for(let i=0;i<e;i++)o+=T.getTextWidth(t[i])-1;T.setTextColor("#000000"),T.text(o,h,t[e])}h+=6}h+=2,T.setTextColor("#000000"),T.text(9,h,"9."),T.setTextColor("#000000"),T.text(18,h,"Date of admission :"),T.setTextColor("#000000"),T.text(54,h,"".concat(null===(d=n()(null===e||void 0===e?void 0:e.instituteJoinDate))||void 0===d?void 0:d.format("DD/MM/yyyy"))),h+=7.7,T.setTextColor("#000000"),T.text(9,h,"10."),T.setTextColor("#000000"),T.text(18,h,"Conduct :"),T.setTextColor("#000000"),T.text(37,h,"".concat(null===e||void 0===e?void 0:e.behaviour)),h+=7.7,T.setTextColor("#000000"),T.text(9,h,"11."),T.setTextColor("#000000"),T.text(18,h,"Date of Leaving Institution :"),T.setTextColor("#000000"),T.text(70,h,"".concat(null===(r=n()(null===e||void 0===e?void 0:e.instituteLeavingDate))||void 0===r?void 0:r.format("DD/MM/yyyy"))),h+=7.7;let j="Course & Year in Which studying ### ".concat(null!==(s=" ".concat(null===e||void 0===e?void 0:e.studying))&&void 0!==s?s:""," ### Degree in ### ").concat(null!==(c=" ".concat(null===e||void 0===e?void 0:e.degree))&&void 0!==c?c:""," ### since when : "," ".concat(null===(x=n()(null===e||void 0===e?void 0:e.since))||void 0===x?void 0:x.format("MMMM, yyyy")));T.setTextColor("#000000"),T.text(9,h,"12."),T.setTextColor("#000000");let Y=T.splitTextToSize(j,C-20);for(let i of Y){let t=i.split("###");for(let e=0;e<(null===t||void 0===t?void 0:t.length);e++){let o=18;for(let i=0;i<e;i++)o+=T.getTextWidth(t[i])-1;T.setTextColor("#000000"),T.text(o,h,t[e])}h+=7.7}T.setTextColor("#000000"),T.text(9,h,"13."),T.setTextColor("#000000"),T.text(18,h,"Course Duration :"),T.setTextColor("#000000"),T.text(51,h,"".concat(null===e||void 0===e?void 0:e.courseDuration)),h+=7.7;let V="Reasons for Leaving Institution :  ###".concat(" ".concat(null===e||void 0===e?void 0:e.leavingReason)," ###");T.setTextColor("#000000"),T.text(9,h,"14.");let Z=T.splitTextToSize(V,C-20);for(let i of Z){let t=i.split("###");for(let e=0;e<(null===t||void 0===t?void 0:t.length);e++){let o=18;for(let i=0;i<e;i++)o+=T.getTextWidth(t[i])-1;T.setTextColor("#000000"),T.text(o,h,t[e])}h+=7.7}T.setTextColor("#000000"),T.text(9,h,"15."),T.setTextColor("#000000"),T.text(18,h,"For Final Year Student only"),h+=7.7,T.setTextColor("#000000"),T.text(18,h,"(a)"),T.setTextColor("#000000"),T.text(25,h,"Elective Subjects :"),T.setTextColor("#000000"),T.text(60,h,"(1)"),T.text(68,h,"".concat(null===e||void 0===e?void 0:e.electiveOne)),h+=7.7,T.text(60,h,"(2)"),T.text(68,h,"".concat(null===e||void 0===e?void 0:e.electiveTwo)),h+=7.7,T.setTextColor("#000000"),T.text(18,h,"(b)");let H=T.splitTextToSize("Title of Project work : ###".concat(null===e||void 0===e?void 0:e.projectWork),C-25);for(let i of H){let t=i.split("###");for(let e=0;e<(null===t||void 0===t?void 0:t.length);e++){let o=25;for(let i=0;i<e;i++)o+=T.getTextWidth(t[i])-1;0===e&&(null===t||void 0===t||t.length),T.setTextColor("#000000"),T.text(o,h,t[e])}h+=7.7}T.setTextColor("#000000"),T.text(18,h,"(c)"),T.setTextColor("#000000"),T.text(25,h,"Name of Guide :"),T.setTextColor("#000000"),T.text(55,h,"".concat(null===e||void 0===e?void 0:e.guideName)),h+=7.7,T.setTextColor("#000000"),T.text(9,h,"16."),T.setTextColor("#000000"),T.text(18,h,"Remarks :"),T.setTextColor("#000000");let q=T.splitTextToSize(null===e||void 0===e?void 0:e.remark,C-40);if(T.text(38,h,q),null!==q&&void 0!==q&&q.length)for(let i=0;i<(null===q||void 0===q?void 0:q.length);i++)h+=5;h+=1,T.setTextColor("#000000"),T.setFontSize(10),T.text(18,h,"Certified that the above information is in accordance with the institute Register."),h+=13,T.setFontSize(14),T.setTextColor("#000000");let K=null!==e&&void 0!==e&&e.authority?"".concat(null===e||void 0===e?void 0:e.authority,":"):"PRINCIPAL";return T.text(C-20-T.getTextWidth(K),h,K),T.output("blob")};var x=o(65282);onmessage=t=>{let e=t.data,o="";"BONAFIDE"===(null===e||void 0===e?void 0:e.printCertificateType)?o=d(null===e||void 0===e?void 0:e.studentInfo,null===e||void 0===e?void 0:e.institute,null===e||void 0===e?void 0:e.otherImageUrl):"LEAVING"===(null===e||void 0===e?void 0:e.printCertificateType)?o=s(null===e||void 0===e?void 0:e.institute,null===e||void 0===e?void 0:e.studentInfo):"LEAVING_2"===(null===e||void 0===e?void 0:e.printCertificateType)?o=c(null===e||void 0===e?void 0:e.institute,null===e||void 0===e?void 0:e.studentInfo):"LEAVING_3"===(null===e||void 0===e?void 0:e.printCertificateType)?o=(0,x.Z)(null===e||void 0===e?void 0:e.institute,null===e||void 0===e?void 0:e.studentInfo):"TRANSFER"===(null===e||void 0===e?void 0:e.printCertificateType)||(o="Not Indetified Certificate Flow"),postMessage(o)}}}]);
//# sourceMappingURL=69152.8cefe9d4.chunk.js.map