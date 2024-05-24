"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[87817],{58860:(e,t,r)=>{r.d(t,{xA:()=>u,yg:()=>m});var n=r(37953);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),l=s(r),f=o,m=l["".concat(c,".").concat(f)]||l[f]||d[f]||a;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p[l]="string"==typeof e?e:o,i[1]=p;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},72637:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>O,frontMatter:()=>p,metadata:()=>s,toc:()=>l});r(37953);var n=r(58860);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const p={id:"otpLogin",title:"OTP Login","example-tags":["auth-provider"]},c=void 0,s={unversionedId:"examples/auth-provider/otpLogin",id:"examples/auth-provider/otpLogin",title:"OTP Login",description:"A one-time password(OTP) is a password that has two fundamental properties : it expires quickly, and it can\u2019t be reused. OTPs are usually numeric or alphanumeric strings and are generated for a single login procedure. This example shows how to utilize OTP input logic with Refine. You can use one-time passwords to access your application with Refine AuthProvider.",source:"@site/docs/examples/auth-provider/otpLogin.md",sourceDirName:"examples/auth-provider",slug:"/examples/auth-provider/otpLogin",permalink:"/docs/examples/auth-provider/otpLogin",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/examples/auth-provider/otpLogin.md",tags:[],version:"current",lastUpdatedBy:"Alican Erdurmaz",lastUpdatedAt:1716547612,formattedLastUpdatedAt:"May 24, 2024",frontMatter:{id:"otpLogin",title:"OTP Login","example-tags":["auth-provider"]},sidebar:"mainSidebar",previous:{title:"Kinde",permalink:"/docs/examples/auth-provider/kinde"},next:{title:"Access Control Provider",permalink:"/docs/authorization/access-control-provider/"}},u={},l=[],d=(f="CodeSandboxExample",function(e){return console.warn("Component "+f+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.yg)("div",e)});var f;const m={toc:l},y="wrapper";function O(e){var{components:t}=e,r=i(e,["components"]);return(0,n.yg)(y,a(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){o(e,t,r[t])}))}return e}({},m,r),{components:t,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"A one-time password(OTP) is a password that has two fundamental properties : it expires quickly, and it can\u2019t be reused. OTPs are usually numeric or alphanumeric strings and are generated for a single login procedure. This example shows how to utilize OTP input logic with Refine. You can use one-time passwords to access your application with Refine ",(0,n.yg)("a",{parentName:"p",href:"/docs/authentication/auth-provider"},"AuthProvider"),"."),(0,n.yg)(d,{path:"auth-otp",mdxType:"CodeSandboxExample"}))}O.isMDXComponent=!0}}]);