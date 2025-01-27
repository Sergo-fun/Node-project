"use strict";(()=>{var e={};e.id=660,e.ids=[660],e.modules={9071:(e,t,s)=>{s.r(t),s.d(t,{default:()=>o});var r=s(997),a=s(6859);let i=`
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
`;function o(){return(0,r.jsxs)(a.Html,{className:"h-full antialiased",lang:"en",children:[(0,r.jsxs)(a.Head,{children:[r.jsx("script",{dangerouslySetInnerHTML:{__html:i}}),r.jsx("link",{rel:"alternate",type:"application/rss+xml",href:`${process.env.NEXT_PUBLIC_SITE_URL}/rss/feed.xml`}),r.jsx("link",{rel:"alternate",type:"application/feed+json",href:`${process.env.NEXT_PUBLIC_SITE_URL}/rss/feed.json`})]}),(0,r.jsxs)("body",{className:"flex h-full flex-col bg-zinc-100 dark:bg-black",children:[r.jsx(a.Main,{}),r.jsx(a.NextScript,{})]})]})}},2785:e=>{e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},6689:e=>{e.exports=require("react")},997:e=>{e.exports=require("react/jsx-runtime")},1017:e=>{e.exports=require("path")}};var t=require("../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),r=t.X(0,[6255,6859],()=>s(9071));module.exports=r})();