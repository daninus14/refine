"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[74209],{58860:(e,r,t)=>{t.d(r,{xA:()=>p,yg:()=>m});var n=t(37953);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),c=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=c(e.components);return n.createElement(s.Provider,{value:r},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},y=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),l=c(t),y=a,m=l["".concat(s,".").concat(y)]||l[y]||d[y]||o;return t?n.createElement(m,i(i({ref:r},p),{},{components:t})):n.createElement(m,i({ref:r},p))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=y;var u={};for(var s in r)hasOwnProperty.call(r,s)&&(u[s]=r[s]);u.originalType=e,u[l]="string"==typeof e?e:a,i[1]=u;for(var c=2;c<o;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}y.displayName="MDXCreateElement"},57075:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>s,default:()=>b,frontMatter:()=>u,metadata:()=>c,toc:()=>l});t(37953);var n=t(58860);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){return r=null!=r?r:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):function(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})),e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}const u={title:"useResource"},s=void 0,c={unversionedId:"routing/hooks/use-resource/index",id:"routing/hooks/use-resource/index",title:"useResource",description:"useResource is used to get the resources array that you defined in `. It also returns the resource` object. You can pass a resource name or identifier to match a resource or it will return the resource object that matches the current route.",source:"@site/docs/routing/hooks/use-resource/index.md",sourceDirName:"routing/hooks/use-resource",slug:"/routing/hooks/use-resource/",permalink:"/docs/routing/hooks/use-resource/",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/routing/hooks/use-resource/index.md",tags:[],version:"current",lastUpdatedBy:"shunmaruko",lastUpdatedAt:1720102358,formattedLastUpdatedAt:"Jul 4, 2024",frontMatter:{title:"useResource"},sidebar:"mainSidebar",previous:{title:"useResourceParams",permalink:"/docs/routing/hooks/use-resource-params/"},next:{title:"useGo",permalink:"/docs/routing/hooks/use-go/"}},p={},l=[{value:"Usage",id:"usage",level:2},{value:"Without parameters",id:"without-parameters",level:3},{value:"With a resource name or identifier",id:"with-a-resource-name-or-identifier",level:3},{value:"Return Values",id:"return-values",level:2},{value:"resources",id:"resources",level:3},{value:"resource",id:"resource",level:3},{value:"resourceName",id:"resourcename",level:3},{value:"<del>id</del> <PropTag deprecated />",id:"id-",level:3},{value:"<del>action</del> <PropTag deprecated />",id:"action-",level:3},{value:"select",id:"select",level:3},{value:"identifier",id:"identifier",level:3},{value:"API Reference",id:"api-reference",level:2},{value:"Properties",id:"properties",level:3},{value:"Return value",id:"return-value",level:3},{value:"Interfaces",id:"interfaces",level:4}],d=e=>function(r){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.yg)("div",r)},y=d("DocThumbsUpDownFeedbackWidget"),m=d("PropTag"),g=d("PropsTable"),f={toc:l},h="wrapper";function b(e){var{components:r}=e,t=i(e,["components"]);return(0,n.yg)(h,o(function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(r){a(e,r,t[r])}))}return e}({},f,t),{components:r,mdxType:"MDXLayout"}),(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"useResource")," is used to get the resources array that you defined in ",(0,n.yg)("inlineCode",{parentName:"p"},"<Refine>"),". It also returns the ",(0,n.yg)("inlineCode",{parentName:"p"},"resource")," object. You can pass a resource name or identifier to match a resource or it will return the resource object that matches the current route."),(0,n.yg)("p",null,"If you pass a resource name or identifier to ",(0,n.yg)("inlineCode",{parentName:"p"},"useResource"),", it will return the ",(0,n.yg)("inlineCode",{parentName:"p"},"resource")," object that matches the name or identifier. If there is no match, a temporary ",(0,n.yg)("inlineCode",{parentName:"p"},"resource")," will be created with the provided name or identifier."),(0,n.yg)("h2",{id:"usage"},"Usage"),(0,n.yg)("h3",{id:"without-parameters"},"Without parameters"),(0,n.yg)(y,{id:"without-parameters",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("p",null,"If you don't pass any parameter to ",(0,n.yg)("inlineCode",{parentName:"p"},"useResource"),", it will return the resource object that matches the current route by default. If there is no match, the ",(0,n.yg)("inlineCode",{parentName:"p"},"resource")," will be ",(0,n.yg)("inlineCode",{parentName:"p"},"undefined"),"."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-ts"},'import { useResource } from "@refinedev/core";\n\nconst { resources, resource, action, id } = useResource();\n'))),(0,n.yg)("h3",{id:"with-a-resource-name-or-identifier"},"With a resource name or identifier"),(0,n.yg)(y,{id:"with-a-resource-name-or-identifier",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("p",null,"If you pass a resource name or identifier to ",(0,n.yg)("inlineCode",{parentName:"p"},"useResource"),", it will return the resource object that matches the name or identifier. If there is no match, a temporary ",(0,n.yg)("inlineCode",{parentName:"p"},"resource")," will be created with the provided name or identifier."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-ts"},'import { useResource } from "@refinedev/core";\n\nconst { resource } = useResource("posts");\n'))),(0,n.yg)("h2",{id:"return-values"},"Return Values"),(0,n.yg)("h3",{id:"resources"},"resources"),(0,n.yg)(y,{id:"resources",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("p",null,"An array of resources that you defined in ",(0,n.yg)("inlineCode",{parentName:"p"},"<Refine>"),".")),(0,n.yg)("h3",{id:"resource"},"resource"),(0,n.yg)(y,{id:"resource",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("p",null,"The ",(0,n.yg)("inlineCode",{parentName:"p"},"resource")," object.")),(0,n.yg)("h3",{id:"resourcename"},"resourceName"),(0,n.yg)(y,{id:"resourcename",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("p",null,"Resource name of the ",(0,n.yg)("inlineCode",{parentName:"p"},"resource")," object.")),(0,n.yg)("h3",{id:"id-"},(0,n.yg)("del",{parentName:"h3"},"id")," ",(0,n.yg)(m,{deprecated:!0,mdxType:"PropTag"})),(0,n.yg)(y,{id:"id-",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("blockquote",null,(0,n.yg)("p",{parentName:"blockquote"},"Use ",(0,n.yg)("a",{parentName:"p",href:"/docs/routing/hooks/use-resource-params"},(0,n.yg)("inlineCode",{parentName:"a"},"useResourceParams"))," instead.")),(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"id")," parameter of the current route.")),(0,n.yg)("h3",{id:"action-"},(0,n.yg)("del",{parentName:"h3"},"action")," ",(0,n.yg)(m,{deprecated:!0,mdxType:"PropTag"})),(0,n.yg)(y,{id:"action-",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("blockquote",null,(0,n.yg)("p",{parentName:"blockquote"},"Use ",(0,n.yg)("a",{parentName:"p",href:"/docs/routing/hooks/use-resource-params"},(0,n.yg)("inlineCode",{parentName:"a"},"useResourceParams"))," instead.")),(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"action")," from the current route if there is a match.")),(0,n.yg)("h3",{id:"select"},"select"),(0,n.yg)(y,{id:"select",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("p",null,"The function allows you to retrieve a ",(0,n.yg)("inlineCode",{parentName:"p"},"resource")," object and matched ",(0,n.yg)("inlineCode",{parentName:"p"},"identifier")," by providing either a resource ",(0,n.yg)("inlineCode",{parentName:"p"},"name")," or ",(0,n.yg)("inlineCode",{parentName:"p"},"identifier"),". By default, if there is no match for the given ",(0,n.yg)("inlineCode",{parentName:"p"},"name")," or ",(0,n.yg)("inlineCode",{parentName:"p"},"identifier"),", the function will return the ",(0,n.yg)("inlineCode",{parentName:"p"},"resource")," object and ",(0,n.yg)("inlineCode",{parentName:"p"},"identifier")," associated with the provided value."),(0,n.yg)("p",null,"If you don't pass any parameter to ",(0,n.yg)("inlineCode",{parentName:"p"},"useResource"),", it will try to infer the ",(0,n.yg)("inlineCode",{parentName:"p"},"resource")," from the current route. If there is no match, the ",(0,n.yg)("inlineCode",{parentName:"p"},"resource")," and ",(0,n.yg)("inlineCode",{parentName:"p"},"identifier")," will be ",(0,n.yg)("inlineCode",{parentName:"p"},"undefined"),"."),(0,n.yg)("p",null,"The function also accepts a second parameter ",(0,n.yg)("inlineCode",{parentName:"p"},"force")," which is ",(0,n.yg)("inlineCode",{parentName:"p"},"true")," by default. If you set it to ",(0,n.yg)("inlineCode",{parentName:"p"},"false"),", it will not return a ",(0,n.yg)("inlineCode",{parentName:"p"},"resource")," object and ",(0,n.yg)("inlineCode",{parentName:"p"},"identifier")," if there is no match.")),(0,n.yg)("h3",{id:"identifier"},"identifier"),(0,n.yg)(y,{id:"identifier",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("p",null,"Identifier value for the current resource, this can either be the ",(0,n.yg)("inlineCode",{parentName:"p"},"identifier")," property or the ",(0,n.yg)("inlineCode",{parentName:"p"},"name")," property of the resource.")),(0,n.yg)("h2",{id:"api-reference"},"API Reference"),(0,n.yg)("h3",{id:"properties"},"Properties"),(0,n.yg)(y,{id:"properties",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)(g,{module:"@refinedev/core/useResource",mdxType:"PropsTable"})),(0,n.yg)("h3",{id:"return-value"},"Return value"),(0,n.yg)(y,{id:"return-value",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Description"),(0,n.yg)("th",{parentName:"tr",align:null},"Type"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"resources"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"#interfaces"},(0,n.yg)("inlineCode",{parentName:"a"},"IResourceItem[]")))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"resource"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"#interfaces"},(0,n.yg)("inlineCode",{parentName:"a"},"IResourceItem")," ","|"," ",(0,n.yg)("inlineCode",{parentName:"a"},"undefined")))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"resourceName"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,n.yg)("inlineCode",{parentName:"td"},"undefined"))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"id"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"/docs/core/interface-references#basekey"},(0,n.yg)("inlineCode",{parentName:"a"},"BaseKey")))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"action"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"undefined")," ","|"," ",(0,n.yg)("inlineCode",{parentName:"td"},'"list"')," ","|"," ",(0,n.yg)("inlineCode",{parentName:"td"},'"create"')," ","|"," ",(0,n.yg)("inlineCode",{parentName:"td"},'"edit"')," ","|"," ",(0,n.yg)("inlineCode",{parentName:"td"},'"show"')," ","|"," ",(0,n.yg)("inlineCode",{parentName:"td"},'"clone"'))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"select"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"(resourceName: string, force?: boolean) => { resource: IResourceItem")," ","|"," ",(0,n.yg)("inlineCode",{parentName:"td"},"undefined, identifier: string")," ","|"," ",(0,n.yg)("inlineCode",{parentName:"td"},"undefined}"))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"identifier"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,n.yg)("inlineCode",{parentName:"td"},"undefined")))))),(0,n.yg)("h4",{id:"interfaces"},"Interfaces"),(0,n.yg)(y,{id:"interfaces",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-ts"},"interface IResourceComponents {\n  list?:\n    | string\n    | React.ComponentType<any>\n    | { component: React.ComponentType<any>; path: string };\n  create?:\n    | string\n    | React.ComponentType<any>\n    | { component: React.ComponentType<any>; path: string };\n  edit?:\n    | string\n    | React.ComponentType<any>\n    | { component: React.ComponentType<any>; path: string };\n  show?:\n    | string\n    | React.ComponentType<any>\n    | { component: React.ComponentType<any>; path: string };\n}\n\ninterface IResourceItem extends IResourceComponents {\n  name: string;\n  identifier?: string;\n  meta?: MetaProps;\n}\n"))))}b.isMDXComponent=!0}}]);