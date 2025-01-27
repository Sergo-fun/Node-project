"use strict";(()=>{var e={};e.id=4820,e.ids=[4820,2888,660],e.modules={1323:(e,t)=>{Object.defineProperty(t,"l",{enumerable:!0,get:function(){return function e(t,r){return r in t?t[r]:"then"in t&&"function"==typeof t.then?t.then(t=>e(t,r)):"function"==typeof t&&"default"===r?t:void 0}}})},3076:(e,t,r)=>{r.a(e,async(e,o)=>{try{r.r(t),r.d(t,{config:()=>h,default:()=>u,getServerSideProps:()=>m,getStaticPaths:()=>f,getStaticProps:()=>p,reportWebVitals:()=>g,routeModule:()=>_,unstable_getServerProps:()=>S,unstable_getServerSideProps:()=>y,unstable_getStaticParams:()=>P,unstable_getStaticPaths:()=>b,unstable_getStaticProps:()=>x});var s=r(7093),i=r(5244),n=r(1323),a=r(9071),l=r(7094),d=r(8539),c=e([l]);l=(c.then?(await c)():c)[0];let u=(0,n.l)(d,"default"),p=(0,n.l)(d,"getStaticProps"),f=(0,n.l)(d,"getStaticPaths"),m=(0,n.l)(d,"getServerSideProps"),h=(0,n.l)(d,"config"),g=(0,n.l)(d,"reportWebVitals"),x=(0,n.l)(d,"unstable_getStaticProps"),b=(0,n.l)(d,"unstable_getStaticPaths"),P=(0,n.l)(d,"unstable_getStaticParams"),S=(0,n.l)(d,"unstable_getServerProps"),y=(0,n.l)(d,"unstable_getServerSideProps"),_=new s.PagesRouteModule({definition:{kind:i.x.PAGES,page:"/_error",pathname:"/_error",bundlePath:"",filename:""},components:{App:l.default,Document:a.default},userland:d});o()}catch(e){o(e)}})},8539:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return c}});let o=r(167),s=r(997),i=o._(r(6689)),n=o._(r(6665)),a={400:"Bad Request",404:"This page could not be found",405:"Method Not Allowed",500:"Internal Server Error"};function l(e){let{res:t,err:r}=e;return{statusCode:t&&t.statusCode?t.statusCode:r?r.statusCode:404}}let d={error:{fontFamily:'system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',height:"100vh",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},desc:{lineHeight:"48px"},h1:{display:"inline-block",margin:"0 20px 0 0",paddingRight:23,fontSize:24,fontWeight:500,verticalAlign:"top"},h2:{fontSize:14,fontWeight:400,lineHeight:"28px"},wrap:{display:"inline-block"}};class c extends i.default.Component{render(){let{statusCode:e,withDarkMode:t=!0}=this.props,r=this.props.title||a[e]||"An unexpected error has occurred";return(0,s.jsxs)("div",{style:d.error,children:[(0,s.jsx)(n.default,{children:(0,s.jsx)("title",{children:e?e+": "+r:"Application error: a client-side exception has occurred"})}),(0,s.jsxs)("div",{style:d.desc,children:[(0,s.jsx)("style",{dangerouslySetInnerHTML:{__html:"body{color:#000;background:#fff;margin:0}.next-error-h1{border-right:1px solid rgba(0,0,0,.3)}"+(t?"@media (prefers-color-scheme:dark){body{color:#fff;background:#000}.next-error-h1{border-right:1px solid rgba(255,255,255,.3)}}":"")}}),e?(0,s.jsx)("h1",{className:"next-error-h1",style:d.h1,children:e}):null,(0,s.jsx)("div",{style:d.wrap,children:(0,s.jsxs)("h2",{style:d.h2,children:[this.props.title||e?r:(0,s.jsx)(s.Fragment,{children:"Application error: a client-side exception has occurred (see the browser console for more information)"}),"."]})})]})]})}}c.displayName="ErrorPage",c.getInitialProps=l,c.origGetInitialProps=l,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9071:(e,t,r)=>{r.r(t),r.d(t,{default:()=>n});var o=r(997),s=r(6859);let i=`
  let darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

  updateMode()
  darkModeMediaQuery.addEventListener('change', updateModeWithoutTransitions)
  window.addEventListener('storage', updateModeWithoutTransitions)

  function updateMode() {
    let isSystemDarkMode = darkModeMediaQuery.matches
    let isDarkMode = window.localStorage.isDarkMode === 'true' || (!('isDarkMode' in window.localStorage) && isSystemDarkMode)

    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }

    if (isDarkMode === isSystemDarkMode) {
      delete window.localStorage.isDarkMode
    }
  }

  function disableTransitionsTemporarily() {
    document.documentElement.classList.add('[&_*]:!transition-none')
    window.setTimeout(() => {
      document.documentElement.classList.remove('[&_*]:!transition-none')
    }, 0)
  }

  function updateModeWithoutTransitions() {
    disableTransitionsTemporarily()
    updateMode()
  }
`;function n(){return(0,o.jsxs)(s.Html,{className:"h-full antialiased",lang:"en",children:[(0,o.jsxs)(s.Head,{children:[o.jsx("script",{dangerouslySetInnerHTML:{__html:i}}),o.jsx("link",{rel:"alternate",type:"application/rss+xml",href:`${process.env.NEXT_PUBLIC_SITE_URL}/rss/feed.xml`}),o.jsx("link",{rel:"alternate",type:"application/feed+json",href:`${process.env.NEXT_PUBLIC_SITE_URL}/rss/feed.json`})]}),(0,o.jsxs)("body",{className:"flex h-full flex-col bg-zinc-100 dark:bg-black",children:[o.jsx(s.Main,{}),o.jsx(s.NextScript,{})]})]})}},5244:(e,t)=>{var r;Object.defineProperty(t,"x",{enumerable:!0,get:function(){return r}}),function(e){e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE"}(r||(r={}))},7197:e=>{e.exports=require("@fortawesome/react-fontawesome")},8103:e=>{e.exports=require("clsx")},2235:e=>{e.exports=require("focus-visible")},2785:e=>{e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},6689:e=>{e.exports=require("react")},6405:e=>{e.exports=require("react-dom")},997:e=>{e.exports=require("react/jsx-runtime")},303:e=>{e.exports=import("@fortawesome/free-brands-svg-icons")},4563:e=>{e.exports=import("@fortawesome/free-solid-svg-icons")},7147:e=>{e.exports=require("fs")},1017:e=>{e.exports=require("path")},2781:e=>{e.exports=require("stream")},9796:e=>{e.exports=require("zlib")}};var t=require("../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),o=t.X(0,[6255,2453,6859,7094],()=>r(3076));module.exports=o})();