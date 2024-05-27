"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[42102],{58860:(e,t,r)=>{r.d(t,{xA:()=>l,yg:()=>f});var a=r(37953);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),u=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=u(e.components);return a.createElement(c.Provider,{value:t},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=u(r),m=n,f=d["".concat(c,".").concat(m)]||d[m]||s[m]||o;return r?a.createElement(f,i(i({ref:t},l),{},{components:r})):a.createElement(f,i({ref:t},l))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p[d]="string"==typeof e?e:n,i[1]=p;for(var u=2;u<o;u++)i[u]=r[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},96486:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>g,frontMatter:()=>p,metadata:()=>u,toc:()=>d});r(37953);var a=r(58860);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}const p={id:"useDataGrid",title:"useDataGrid","example-title":"Material UI's useDataGrid Hook","example-tags":["table","mui"]},c=void 0,u={unversionedId:"examples/table/mui/useDataGrid",id:"examples/table/mui/useDataGrid",title:"useDataGrid",description:"You may use the useDataGrid hook to process your data with features compatible with the MUI X DataGrid and DataGridPro component. You can be used as an out-of-the-box feature without needing to do extra operations for sorting, filtering, and pagination.",source:"@site/docs/examples/table/mui/useDataGrid.md",sourceDirName:"examples/table/mui",slug:"/examples/table/mui/useDataGrid",permalink:"/docs/examples/table/mui/useDataGrid",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/examples/table/mui/useDataGrid.md",tags:[],version:"current",lastUpdatedBy:"Batuhan Wilhelm",lastUpdatedAt:1716808447,formattedLastUpdatedAt:"May 27, 2024",frontMatter:{id:"useDataGrid",title:"useDataGrid","example-title":"Material UI's useDataGrid Hook","example-tags":["table","mui"]},sidebar:"mainSidebar",previous:{title:"Authentication",permalink:"/docs/examples/authentication/mui"},next:{title:"Table Filters",permalink:"/docs/examples/table/mui/filter"}},l={},d=[{value:"With <code>DataGrid</code> Component",id:"with-datagrid-component",level:2},{value:"With <code>DataGridPro</code> Component",id:"with-datagridpro-component",level:2}],s=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.yg)("div",t)},m=s("DocThumbsUpDownFeedbackWidget"),f=s("CodeSandboxExample"),b={toc:d},y="wrapper";function g(e){var{components:t}=e,r=i(e,["components"]);return(0,a.yg)(y,o(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},a=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),a.forEach((function(t){n(e,t,r[t])}))}return e}({},b,r),{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"You may use the ",(0,a.yg)("inlineCode",{parentName:"p"},"useDataGrid")," hook to process your data with features compatible with the MUI X ",(0,a.yg)("a",{parentName:"p",href:"https://mui.com/x/react-data-grid/"},"DataGrid")," and ",(0,a.yg)("a",{parentName:"p",href:"https://mui.com/x/react-data-grid/"},"DataGridPro")," component. You can be used as an out-of-the-box feature without needing to do extra operations for sorting, filtering, and pagination."),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"/docs/ui-integrations/material-ui/hooks/use-data-grid"},"Refer to the ",(0,a.yg)("inlineCode",{parentName:"a"},"useDataGrid")," hook documentation for more information. \u2192")),(0,a.yg)("h2",{id:"with-datagrid-component"},"With ",(0,a.yg)("inlineCode",{parentName:"h2"},"DataGrid")," Component"),(0,a.yg)(m,{id:"with-datagrid-component",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)(f,{path:"table-material-ui-use-data-grid",mdxType:"CodeSandboxExample"})),(0,a.yg)("h2",{id:"with-datagridpro-component"},"With ",(0,a.yg)("inlineCode",{parentName:"h2"},"DataGridPro")," Component"),(0,a.yg)(m,{id:"with-datagridpro-component",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)(f,{path:"table-material-ui-data-grid-pro",mdxType:"CodeSandboxExample"})))}g.isMDXComponent=!0}}]);