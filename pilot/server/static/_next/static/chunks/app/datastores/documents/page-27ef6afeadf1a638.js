(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[470],{78141:function(e,t,a){"use strict";var n=a(78997);t.Z=void 0;var s=n(a(76906)),o=a(9268),c=(0,s.default)((0,o.jsx)("path",{d:"m19 8-4 4h3c0 3.31-2.69 6-6 6-1.01 0-1.97-.25-2.8-.7l-1.46 1.46C8.97 19.54 10.43 20 12 20c4.42 0 8-3.58 8-8h3l-4-4zM6 12c0-3.31 2.69-6 6-6 1.01 0 1.97.25 2.8.7l1.46-1.46C15.03 4.46 13.57 4 12 4c-4.42 0-8 3.58-8 8H1l4 4 4-4H6z"}),"Cached");t.Z=c},22199:function(e,t,a){Promise.resolve().then(a.bind(a,42069))},42069:function(e,t,a){"use strict";a.r(t);var n=a(9268),s=a(56008),o=a(86006),c=a(50645),i=a(5737),r=a(78635),l=a(70900),d=a(44334),h=a(311),p=a(22046),u=a(53113),x=a(83192),g=a(58927),j=a(11437),m=a(90545),f=a(35086),y=a(866),S=a(28086),w=a(65326),b=a.n(w),Z=a(72474),P=a(59534),C=a(78141),T=a(50157),k=a(23910),O=a(21628),v=a(1031);let{Dragger:_}=T.default,N=(0,c.Z)(i.Z)(e=>{let{theme:t}=e;return{width:"50%",backgroundColor:"dark"===t.palette.mode?t.palette.background.level1:"#fff",...t.typography.body2,padding:t.spacing(1),textAlign:"center",borderRadius:4,color:t.vars.palette.text.secondary}}),D=["Choose a Datasource type","Setup the Datasource"],z=[{type:"text",title:"Text",subTitle:"Fill your raw text"},{type:"webPage",title:"URL",subTitle:"Fetch the content of a URL"},{type:"file",title:"Document",subTitle:"Upload a document, document type can be PDF, CSV, Text, PowerPoint, Word, Markdown"}];t.default=()=>{let e=(0,s.useRouter)(),t=(0,s.useSearchParams)().get("name"),{mode:a}=(0,r.tv)(),[c,w]=(0,o.useState)(!1),[T,F]=(0,o.useState)(0),[R,E]=(0,o.useState)(""),[I,J]=(0,o.useState)([]),[U,L]=(0,o.useState)(""),[M,B]=(0,o.useState)(""),[W,H]=(0,o.useState)(""),[A,Y]=(0,o.useState)(""),[G,K]=(0,o.useState)(null),[V,X]=(0,o.useState)(0),[q,Q]=(0,o.useState)(0),[$,ee]=(0,o.useState)(!0);return(0,o.useEffect)(()=>{(async function(){let e=await fetch("".concat("http://localhost:5000","/knowledge/").concat(t,"/document/list"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({page:1,page_size:20})}),a=await e.json();a.success&&(J(a.data.data),X(a.data.total),Q(a.data.page))})()},[]),(0,n.jsxs)("div",{className:"p-4",children:[(0,n.jsxs)(l.Z,{direction:"row",justifyContent:"space-between",alignItems:"center",sx:{marginBottom:"20px"},children:[(0,n.jsxs)(d.Z,{"aria-label":"breadcrumbs",children:[(0,n.jsx)(h.Z,{onClick:()=>{e.push("/datastores")},underline:"hover",color:"neutral",fontSize:"inherit",children:"Knowledge Space"},"Knowledge Space"),(0,n.jsx)(p.ZP,{fontSize:"inherit",children:"Documents"})]}),(0,n.jsx)(u.Z,{variant:"outlined",onClick:()=>w(!0),children:"+ Add Datasource"})]}),I.length?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(x.Z,{color:"primary",variant:"plain",size:"lg",sx:{"& tbody tr: hover":{backgroundColor:"light"===a?"rgb(246, 246, 246)":"rgb(33, 33, 40)"},"& tbody tr: hover a":{textDecoration:"underline"}},children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:"Name"}),(0,n.jsx)("th",{children:"Type"}),(0,n.jsx)("th",{children:"Size"}),(0,n.jsx)("th",{children:"Last Synch"}),(0,n.jsx)("th",{children:"Status"}),(0,n.jsx)("th",{children:"Result"}),(0,n.jsx)("th",{children:"Operation"})]})}),(0,n.jsx)("tbody",{children:I.map(a=>(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:a.doc_name}),(0,n.jsx)("td",{children:(0,n.jsx)(g.Z,{variant:"solid",color:"neutral",sx:{opacity:.5},children:a.doc_type})}),(0,n.jsxs)("td",{children:[a.chunk_size," chunks"]}),(0,n.jsx)("td",{children:b()(a.last_sync).format("YYYY-MM-DD HH:MM:SS")}),(0,n.jsx)("td",{children:(0,n.jsx)(g.Z,{sx:{opacity:.5},variant:"solid",color:function(){switch(a.status){case"TODO":return"neutral";case"RUNNING":return"primary";case"FINISHED":return"success";case"FAILED":return"danger"}}(),children:a.status})}),(0,n.jsx)("td",{children:"TODO"===a.status||"RUNNING"===a.status?"":"FINISHED"===a.status?(0,n.jsx)(k.Z,{content:a.result,trigger:"hover",children:(0,n.jsx)(g.Z,{variant:"solid",color:"success",sx:{opacity:.5},children:"SUCCESS"})}):(0,n.jsx)(k.Z,{content:a.result,trigger:"hover",children:(0,n.jsx)(g.Z,{variant:"solid",color:"danger",sx:{opacity:.5},children:"FAILED"})})}),(0,n.jsx)("td",{children:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(u.Z,{variant:"outlined",size:"sm",sx:{marginRight:"20px"},onClick:async()=>{let e=await fetch("".concat("http://localhost:5000","/knowledge/").concat(t,"/document/sync"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({doc_ids:[a.id]})}),n=await e.json();n.success?O.ZP.success("success"):O.ZP.error(n.err_msg||"failed")},children:["Synch",(0,n.jsx)(C.Z,{})]}),(0,n.jsx)(u.Z,{variant:"outlined",size:"sm",onClick:()=>{e.push("/datastores/documents/chunklist?spacename=".concat(t,"&documentid=").concat(a.id))},children:"Details"})]})})]},a.id))})]}),(0,n.jsx)(l.Z,{direction:"row",justifyContent:"flex-end",sx:{marginTop:"20px"},children:(0,n.jsx)(v.Z,{defaultPageSize:20,showSizeChanger:!1,current:q,total:V,onChange:async e=>{let a=await fetch("".concat("http://localhost:5000","/knowledge/").concat(t,"/document/list"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({page:e,page_size:20})}),n=await a.json();n.success&&(J(n.data.data),X(n.data.total),Q(n.data.page))},hideOnSinglePage:!0})})]}):(0,n.jsx)(n.Fragment,{}),(0,n.jsx)(j.Z,{sx:{display:"flex",justifyContent:"center",alignItems:"center","z-index":1e3},open:c,onClose:()=>w(!1),children:(0,n.jsxs)(i.Z,{variant:"outlined",sx:{width:800,borderRadius:"md",p:3,boxShadow:"lg"},children:[(0,n.jsx)(m.Z,{sx:{width:"100%"},children:(0,n.jsx)(l.Z,{spacing:2,direction:"row",children:D.map((e,t)=>(0,n.jsxs)(N,{sx:{fontWeight:T===t?"bold":"",color:T===t?"#814DDE":""},children:[t<T?(0,n.jsx)(P.Z,{}):"".concat(t+1,"."),"".concat(e)]},e))})}),0===T?(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(m.Z,{sx:{margin:"30px auto"},children:z.map(e=>(0,n.jsxs)(i.Z,{sx:{boxSizing:"border-box",height:"80px",padding:"12px",display:"flex",flexDirection:"column",justifyContent:"space-between",border:"1px solid gray",borderRadius:"6px",marginBottom:"20px",cursor:"pointer"},onClick:()=>{E(e.type),F(1)},children:[(0,n.jsx)(i.Z,{sx:{fontSize:"20px",fontWeight:"bold"},children:e.title}),(0,n.jsx)(i.Z,{children:e.subTitle})]},e.type))})}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(m.Z,{sx:{margin:"30px auto"},children:["Name:",(0,n.jsx)(f.ZP,{placeholder:"Please input the name",onChange:e=>B(e.target.value),sx:{marginBottom:"20px"}}),"webPage"===R?(0,n.jsxs)(n.Fragment,{children:["Web Page URL:",(0,n.jsx)(f.ZP,{placeholder:"Please input the Web Page URL",onChange:e=>L(e.target.value)})]}):"file"===R?(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)(_,{name:"file",multiple:!1,onChange(e){var t;if(console.log(e),0===e.fileList.length){K(null),B("");return}K(e.file.originFileObj),B(null===(t=e.file.originFileObj)||void 0===t?void 0:t.name)},children:[(0,n.jsx)("p",{className:"ant-upload-drag-icon",children:(0,n.jsx)(Z.Z,{})}),(0,n.jsx)("p",{style:{color:"rgb(22, 108, 255)",fontSize:"20px"},children:"Select or Drop file"}),(0,n.jsx)("p",{className:"ant-upload-hint",style:{color:"rgb(22, 108, 255)"},children:"PDF, PowerPoint, Excel, Word, Text, Markdown,"})]})}):(0,n.jsxs)(n.Fragment,{children:["Text Source(Optional):",(0,n.jsx)(f.ZP,{placeholder:"Please input the text source",onChange:e=>H(e.target.value),sx:{marginBottom:"20px"}}),"Text:",(0,n.jsx)(y.Z,{onChange:e=>Y(e.target.value),minRows:4,sx:{marginBottom:"20px"}})]}),(0,n.jsx)(p.ZP,{component:"label",sx:{marginTop:"20px"},endDecorator:(0,n.jsx)(S.Z,{checked:$,onChange:e=>ee(e.target.checked)}),children:"Synch:"})]}),(0,n.jsxs)(l.Z,{direction:"row",justifyContent:"flex-start",alignItems:"center",sx:{marginBottom:"20px"},children:[(0,n.jsx)(u.Z,{variant:"outlined",sx:{marginRight:"20px"},onClick:()=>F(0),children:"< Back"}),(0,n.jsx)(u.Z,{variant:"outlined",onClick:async()=>{if(""===M){O.ZP.error("Please input the name");return}if("webPage"===R){if(""===U){O.ZP.error("Please input the Web Page URL");return}let e=await fetch("".concat("http://localhost:5000","/knowledge/").concat(t,"/document/add"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({doc_name:M,content:U,doc_type:"URL"})}),a=await e.json();if(a.success&&$&&fetch("".concat("http://localhost:5000","/knowledge/").concat(t,"/document/sync"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({doc_ids:[a.data]})}),a.success){O.ZP.success("success"),w(!1);let e=await fetch("".concat("http://localhost:5000","/knowledge/").concat(t,"/document/list"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({page:q,page_size:20})}),a=await e.json();a.success&&(J(a.data.data),X(a.data.total),Q(a.data.page))}else O.ZP.error(a.err_msg||"failed")}else if("file"===R){if(!G){O.ZP.error("Please select a file");return}let e=new FormData;e.append("doc_name",M),e.append("doc_file",G),e.append("doc_type","DOCUMENT");let a=await fetch("".concat("http://localhost:5000","/knowledge/").concat(t,"/document/upload"),{method:"POST",body:e}),n=await a.json();if(n.success&&$&&fetch("".concat("http://localhost:5000","/knowledge/").concat(t,"/document/sync"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({doc_ids:[n.data]})}),n.success){O.ZP.success("success"),w(!1);let e=await fetch("".concat("http://localhost:5000","/knowledge/").concat(t,"/document/list"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({page:q,page_size:20})}),a=await e.json();a.success&&(J(a.data.data),X(a.data.total),Q(a.data.page))}else O.ZP.error(n.err_msg||"failed")}else{if(""===A){O.ZP.error("Please input the text");return}let e=await fetch("".concat("http://localhost:5000","/knowledge/").concat(t,"/document/add"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({doc_name:M,source:W,content:A,doc_type:"TEXT"})}),a=await e.json();if(a.success&&$&&fetch("".concat("http://localhost:5000","/knowledge/").concat(t,"/document/sync"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({doc_ids:[a.data]})}),a.success){O.ZP.success("success"),w(!1);let e=await fetch("".concat("http://localhost:5000","/knowledge/").concat(t,"/document/list"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({page:q,page_size:20})}),a=await e.json();a.success&&(J(a.data.data),X(a.data.total),Q(a.data.page))}else O.ZP.error(a.err_msg||"failed")}},children:"Finish"})]})]})]})})]})}}},function(e){e.O(0,[550,430,577,635,86,456,585,440,672,232,816,253,769,744],function(){return e(e.s=22199)}),_N_E=e.O()}]);