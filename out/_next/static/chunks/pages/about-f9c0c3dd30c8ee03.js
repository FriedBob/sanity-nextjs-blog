(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[521],{69661:function(a,b,c){"use strict";c.d(b,{Z:function(){return w}});var d=c(63366),e=c(87462),f=c(67294),g=c(86010),h=c(94780),i=c(90948),j=c(71657),k=c(88169),l=c(85893),m=(0,k.Z)((0,l.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person"),n=c(34867),o=c(1588);function p(a){return(0,n.Z)("MuiAvatar",a)}(0,o.Z)("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);let q=["alt","children","className","component","imgProps","sizes","src","srcSet","variant"],r=a=>{let{classes:b,variant:c,colorDefault:d}=a;return(0,h.Z)({root:["root",c,d&&"colorDefault"],img:["img"],fallback:["fallback"]},p,b)},s=(0,i.ZP)("div",{name:"MuiAvatar",slot:"Root",overridesResolver:(a,b)=>{let{ownerState:c}=a;return[b.root,b[c.variant],c.colorDefault&&b.colorDefault]}})(({theme:a,ownerState:b})=>(0,e.Z)({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:a.typography.fontFamily,fontSize:a.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},"rounded"===b.variant&&{borderRadius:(a.vars||a).shape.borderRadius},"square"===b.variant&&{borderRadius:0},b.colorDefault&&(0,e.Z)({color:(a.vars||a).palette.background.default},a.vars?{backgroundColor:a.vars.palette.Avatar.defaultBg}:{backgroundColor:"light"===a.palette.mode?a.palette.grey[400]:a.palette.grey[600]}))),t=(0,i.ZP)("img",{name:"MuiAvatar",slot:"Img",overridesResolver:(a,b)=>b.img})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),u=(0,i.ZP)(m,{name:"MuiAvatar",slot:"Fallback",overridesResolver:(a,b)=>b.fallback})({width:"75%",height:"75%"}),v=f.forwardRef(function(a,b){let c=(0,j.Z)({props:a,name:"MuiAvatar"}),{alt:h,children:i,className:k,component:m="div",imgProps:n,sizes:o,src:p,srcSet:v,variant:w="circular"}=c,x=(0,d.Z)(c,q),y=null,z=function({crossOrigin:a,referrerPolicy:b,src:c,srcSet:d}){let[e,g]=f.useState(!1);return f.useEffect(()=>{if(!c&&!d)return;g(!1);let e=!0,f=new Image;return f.onload=()=>{e&&g("loaded")},f.onerror=()=>{e&&g("error")},f.crossOrigin=a,f.referrerPolicy=b,f.src=c,d&&(f.srcset=d),()=>{e=!1}},[a,b,c,d]),e}((0,e.Z)({},n,{src:p,srcSet:v})),A=p||v,B=A&&"error"!==z,C=(0,e.Z)({},c,{colorDefault:!B,component:m,variant:w}),D=r(C);return y=B?(0,l.jsx)(t,(0,e.Z)({alt:h,src:p,srcSet:v,sizes:o,ownerState:C,className:D.img},n)):null!=i?i:A&&h?h[0]:(0,l.jsx)(u,{className:D.fallback}),(0,l.jsx)(s,(0,e.Z)({as:m,ownerState:C,className:(0,g.Z)(D.root,k),ref:b},x,{children:y}))});var w=v},38318:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return c(3116)}])},97682:function(a,b,c){"use strict";var d=c(85893),e=c(26447),f=c(30381),g=c.n(f),h=c(53641),i=function(){var a=g()().format("YYYY");return(0,d.jsxs)(e.Z,{sx:{mt:"0.8rem",mb:"1rem",color:"#c5c0c0",fontSize:"0.9rem"},children:[(0,d.jsxs)(h.lU,{children:["Github:"," ",(0,d.jsx)("a",{href:"https://github.com/FriedBob",target:"blank",style:{textDecoration:"none",color:"inherit"},children:"https://github.com/FriedBob"})]}),(0,d.jsxs)(h.lU,{children:["Copyright. ",a," FriedBob"]}),(0,d.jsx)(h.lU,{children:"All rights reserved."})]})};b.Z=i},87776:function(a,b,c){"use strict";var d=c(85893),e=c(42293),f=c(53156),g=c(10155),h=c(15861),i=c(83321);c(67294);var j=c(76638),k=c(53641),l=c(85418),m=c(11163),n=["Post","Author","About"],o=function(a){var b=a.handleHomeClick;a.posts;var c=(0,m.useRouter)(),o=function(){c.push("/post")},p=function(){console.log("clickAuthor")},q=function(){c.push("about")};return(0,d.jsx)("div",{children:(0,d.jsx)(e.Z,{position:"static",sx:{backgroundColor:"transparent",boxShadow:"0 0 0 0",color:"#302e2e"},children:(0,d.jsx)(f.Z,{maxWidth:"xl",sx:{"&.MuiContainer-root":{paddingLeft:"0.3rem"}},children:(0,d.jsxs)(g.Z,{sx:{"&.MuiToolbar-root":{padding:0}},children:[(0,d.jsxs)(k.j2,{size:"large",color:"inherit","aria-label":"home",onClick:b,children:[(0,d.jsx)(j.Z,{}),(0,d.jsx)(h.Z,{variant:"h6",component:"div",sx:{flexGrow:1,ml:1,fontWeight:600},children:"Shin's Blog"})]}),(0,d.jsxs)(l.Z,{sx:{ml:"1rem",flexGrow:1,display:{xs:"none",md:"flex"}},children:[(0,d.jsx)(i.Z,{onClick:o,sx:{px:"1rem",my:2,color:"#302e2e",display:"black"},children:n[0]}),(0,d.jsx)(i.Z,{onClick:p,disabled:!0,sx:{px:"1rem",my:2,color:"#302e2e",display:"black"},children:n[1]}),(0,d.jsx)(i.Z,{onClick:q,sx:{px:"1rem",my:2,color:"#302e2e",display:"black"},children:n[2]})]})]})})})})};b.Z=o},53641:function(a,b,c){"use strict";c.d(b,{FU:function(){return o},QL:function(){return n},W2:function(){return r},j2:function(){return q},lU:function(){return p}});var d=c(7297),e=c(26447),f=c(83321),g=c(85418),h=c(186);function i(){var a=(0,d.Z)(["\n  width: 80%;\n  text-align: center;\n"]);return i=function(){return a},a}function j(){var a=(0,d.Z)(["\n  align-items: center;\n  margin-top: 3rem;\n  margin-bottom: 5rem;\n"]);return j=function(){return a},a}function k(){var a=(0,d.Z)(["\n  margin: 0;\n  padding: 0;\n"]);return k=function(){return a},a}function l(){var a=(0,d.Z)(["\n  &:hover {\n    background-color: transparent;\n  }\n"]);return l=function(){return a},a}function m(){var a=(0,d.Z)(["\n  width: 1024px;\n  margin-left: auto;\n  margin-right: auto;\n  font-size: 18px;\n  /* margin-bottom: 8rem; */\n"]);return m=function(){return a},a}var n=(0,h.ZP)(g.Z)(i()),o=(0,h.ZP)(e.Z)(j()),p=h.ZP.p(k()),q=(0,h.ZP)(f.Z)(l()),r=h.ZP.div(m())},49702:function(a,b,c){"use strict";c.d(b,{j:function(){return d}});var d=(0,c(4480).cn)({key:"posts",default:[]})},3116:function(a,b,c){"use strict";c.r(b),c.d(b,{default:function(){return s}});var d=c(70603),e=c(85893),f=c(21519),g=c(26447),h=c(69661),i=c(15861),j=c(11163);c(67294);var k=c(4480),l=c(97682),m=c(87776),n=c(49702),o=c(7297),p=c(186);function q(){var a=(0,o.Z)(["\n  width: 1024px;\n  margin-left: auto;\n  margin-right: auto;\n  font-size: 18px;\n  /* margin-bottom: 8rem; */\n"]);return q=function(){return a},a}var r=p.ZP.div(q()),s=function(){var a=(0,d.Z)((0,k.FV)(n.j),2),b=a[0];a[1];var c=(0,j.useRouter)(),o=function(){c.push("/")};return(0,e.jsxs)(r,{children:[(0,e.jsx)(m.Z,{posts:b,handleHomeClick:o}),(0,e.jsx)(f.Z,{}),(0,e.jsxs)(g.Z,{alignItems:"center",justifyContent:"center",height:"600px",children:[(0,e.jsx)(h.Z,{alt:"FriedBob",src:"https://avatars.githubusercontent.com/u/50436527?v=4",sx:{mb:"2rem",width:300,height:300,boxShadow:"2px 0px 6px 1px rgba(4,4,4,0.8)",transform:"translate(0px, -30px)"}}),(0,e.jsx)(i.Z,{variant:"h3",fontWeight:"600",sx:{mb:"1rem"},children:"FriedBob"}),(0,e.jsx)(i.Z,{variant:"body1",children:"FriedBob 의 gitHub입니다"}),(0,e.jsx)(i.Z,{variant:"body1",children:(0,e.jsx)("a",{href:"https://github.com/FriedBob",style:{textDecoration:"none",color:"inherit"},target:"_blank",rel:"noreferrer",children:"https://github.com/FriedBob"})})]}),(0,e.jsx)(f.Z,{sx:{mt:"5rem"}}),(0,e.jsx)(l.Z,{})]})}}},function(a){a.O(0,[885,133,774,888,179],function(){var b;return a(a.s=38318)}),_N_E=a.O()}])