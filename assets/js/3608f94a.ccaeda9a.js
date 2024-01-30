"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[70213],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=u(n),f=o,m=d["".concat(l,".").concat(f)]||d[f]||p[f]||a;return n?r.createElement(m,i(i({ref:t},s),{},{components:n})):r.createElement(m,i({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},53116:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>f,frontMatter:()=>c,metadata:()=>u,toc:()=>p});n(67294);var r=n(3905);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const c={title:"useGetLocale"},l=void 0,u={unversionedId:"i18n/hooks/use-get-locale/index",id:"i18n/hooks/use-get-locale/index",title:"useGetLocale",description:"If you need to know the current locale, Refine provides the useGetLocale hook. It returns the getLocale method from i18nProvider under the hood.",source:"@site/docs/i18n/hooks/use-get-locale/index.md",sourceDirName:"i18n/hooks/use-get-locale",slug:"/i18n/hooks/use-get-locale/",permalink:"/docs/i18n/hooks/use-get-locale/",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/i18n/hooks/use-get-locale/index.md",tags:[],version:"current",lastUpdatedBy:"Batuhan Wilhelm",lastUpdatedAt:1706611708,formattedLastUpdatedAt:"Jan 30, 2024",frontMatter:{title:"useGetLocale"},sidebar:"mainSidebar",previous:{title:"i18n Provider",permalink:"/docs/i18n/i18n-provider/"},next:{title:"useSetLocale",permalink:"/docs/i18n/hooks/use-set-locale/"}},s={},p=[{value:"Usage",id:"usage",level:2}],d={toc:p};function f(e){var{components:t}=e,n=i(e,["components"]);return(0,r.kt)("wrapper",a(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){o(e,t,n[t])}))}return e}({},d,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"If you need to know the current locale, Refine provides the ",(0,r.kt)("inlineCode",{parentName:"p"},"useGetLocale")," hook. It returns the ",(0,r.kt)("inlineCode",{parentName:"p"},"getLocale")," method from ",(0,r.kt)("a",{parentName:"p",href:"/docs/i18n/i18n-provider/#usage"},(0,r.kt)("inlineCode",{parentName:"a"},"i18nProvider"))," under the hood."),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This hook can only be used if ",(0,r.kt)("a",{parentName:"p",href:"/docs/i18n/i18n-provider/#usage"},(0,r.kt)("inlineCode",{parentName:"a"},"i18nProvider"))," is provided.")),(0,r.kt)("p",null,"You can get the ",(0,r.kt)("inlineCode",{parentName:"p"},"locale")," value from the ",(0,r.kt)("inlineCode",{parentName:"p"},"i18nProvider")," that you provided.\nFor example, ",(0,r.kt)("inlineCode",{parentName:"p"},"<LanguageSwitcher>")," component needs to know the current locale in order to disable the button for the current language."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useTranslate, useGetLocale, useSetLocale } from "@refinedev/core";\n\nexport const LanguageSwitcher = () => {\n  const changeLanguage = useSetLocale();\n\n  const locale = useGetLocale();\n  const currentLocale = locale();\n\n  return (\n    <div>\n      <span>Languages</span>\n      <button disabled={currentLocale === "en"} onClick={() => changeLanguage("en")}>\n        English\n      </button>\n      <button disabled={currentLocale === "es"} onClick={() => changeLanguage("es")}>\n        Spanish\n      </button>\n    </div>\n  );\n};\n')))}f.isMDXComponent=!0}}]);