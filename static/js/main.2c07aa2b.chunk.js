(this.webpackJsonpvidrec=this.webpackJsonpvidrec||[]).push([[0],{127:function(e,t,n){"use strict";n.r(t);var c=n(0),o=n.n(c),i=n(25),s=n.n(i),a=(n(85),n.p,n(86),n(51),n(64),n(46)),r=n(65),l=n.n(r),d=n(131),u=n(69),j=n.n(u),p=n(7),b=n(79),h=n(80),m=n(10);var f=function(){var e=Object(c.useState)({}),t=Object(a.a)(e,2),n=t[0],o=t[1],i=Object(c.useState)(""),s=Object(a.a)(i,2),r=s[0],u=s[1],f=Object(c.useState)(!1),g=Object(a.a)(f,2),O=g[0],x=g[1],v=Object(p.g)().id;return Object(c.useEffect)((function(){console.log(v),u(v)}),[]),Object(m.jsxs)("div",{children:[Object(m.jsx)("div",{style:{paddingTop:"10px"},children:Object(m.jsx)("h3",{children:"Delisted Video Confirmation"})}),Object(m.jsx)("div",{style:{height:"".concat(window.innerHeight-150,"px")},children:Object(m.jsx)(l.a,{onRecordingComplete:function(e){console.log("videoBlob",e),document.getElementsByClassName("fFmUXH").innerHtml="Retake?",x(!0),o(e)}})}),O&&Object(m.jsx)(d.a,{onClick:function(){!function(e){if(void 0!==e){var t=new FormData,n=new File([e],"vid.mp4");t.append("file",n),t.append("firmName",r),fetch(j.a.api_route+"/aws/sendResponseVid",{method:"POST",headers:{"Access-Control-Allow-Origin":"*","Access-Control-Allow-Headers":"Origin, X-Requested-With, Content-Type, Accept"},body:t}).then((function(e){return e.json()})).then((function(e){console.log(e),200===e.status?(alert("jjj"),console.log("File Uploaded Successfully!!!"),b.b.success("File Uploaded Successfully!!!")):(console.log({message:"Try Again "}),h.a.error({message:"Try Again"}))})).catch((function(e){alert("err".concat(e)),console.log(e)}))}}(n)},style:{marginTop:"30px"},color:"primary",children:"Submit"})]})},g=n(50);var O=function(){return Object(m.jsx)("div",{className:"App",children:Object(m.jsx)(g.a,{basename:"/vidRec",children:Object(m.jsxs)(p.d,{children:[Object(m.jsx)(p.b,{exact:!0,path:'/main/?param="chking"',component:f}),Object(m.jsx)(p.b,{exact:!0,path:"/",component:function(){return Object(m.jsx)(p.a,{to:'/main/?param="chking"'})}})]})})})},x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,132)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),c(e),o(e),i(e),s(e)}))};s.a.render(Object(m.jsx)(o.a.StrictMode,{children:Object(m.jsx)(O,{})}),document.getElementById("root")),x()},69:function(e,t){e.exports={api_route:"http://delistedstocks.us-east-1.elasticbeanstalk.com"}},85:function(e,t,n){},86:function(e,t,n){}},[[127,1,2]]]);
//# sourceMappingURL=main.2c07aa2b.chunk.js.map