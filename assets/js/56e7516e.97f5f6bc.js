"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[61771],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=p(r),m=a,f=d["".concat(i,".").concat(m)]||d[m]||l[m]||o;return r?n.createElement(f,s(s({ref:t},u),{},{components:r})):n.createElement(f,s({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,s[1]=c;for(var p=2;p<o;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},53931:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>y,frontMatter:()=>c,metadata:()=>p,toc:()=>l});r(67294);var n=r(3905);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const c={id:"useCan",title:"useCan",siderbar_label:"useCan"},i=void 0,p={unversionedId:"api-reference/core/hooks/accessControl/useCan",id:"version-3.xx.xx/api-reference/core/hooks/accessControl/useCan",title:"useCan",description:"useCan uses the Access Control Provider's can function as the query function for TanStack Query's useQuery. It takes the parameters that can takes. It can also be configured with queryOptions for useQuery. Returns the result of useQuery.",source:"@site/versioned_docs/version-3.xx.xx/api-reference/core/hooks/accessControl/useCan.md",sourceDirName:"api-reference/core/hooks/accessControl",slug:"/api-reference/core/hooks/accessControl/useCan",permalink:"/docs/3.xx.xx/api-reference/core/hooks/accessControl/useCan",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/api-reference/core/hooks/accessControl/useCan.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"dzcpy",lastUpdatedAt:1701673806,formattedLastUpdatedAt:"Dec 4, 2023",frontMatter:{id:"useCan",title:"useCan",siderbar_label:"useCan"},sidebar:"someSidebar",previous:{title:"Router Provider",permalink:"/docs/3.xx.xx/api-reference/core/providers/router-provider"},next:{title:"useAuthenticated",permalink:"/docs/3.xx.xx/api-reference/core/hooks/auth/useAuthenticated"}},u={},l=[{value:"Basic Usage",id:"basic-usage",level:2},{value:"Performance",id:"performance",level:2},{value:"Properties",id:"properties",level:2},{value:"<code>resource</code> <PropTag required />",id:"resource-",level:3},{value:"<code>action</code> <PropTag required />",id:"action-",level:3},{value:"<code>params</code>",id:"params",level:3},{value:"<code>queryOptions</code>",id:"queryoptions",level:3},{value:"Return values",id:"return-values",level:2},{value:"API",id:"api",level:2},{value:"Properties",id:"properties-1",level:3},{value:"Type Parameters",id:"type-parameters",level:3},{value:"Return values",id:"return-values-1",level:3}],d=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",t)},m=d("PropTag"),f=d("PropsTable"),k={toc:l};function y(e){var{components:t}=e,r=s(e,["components"]);return(0,n.kt)("wrapper",o(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){a(e,t,r[t])}))}return e}({},k,r),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"useCan")," uses the ",(0,n.kt)("a",{parentName:"p",href:"/docs/api-reference/core/providers/accessControl-provider/"},"Access Control Provider's")," ",(0,n.kt)("inlineCode",{parentName:"p"},"can")," function as the query function for ",(0,n.kt)("a",{parentName:"p",href:"https://tanstack.com/query/latest"},"TanStack Query's")," ",(0,n.kt)("a",{parentName:"p",href:"https://tanstack.com/query/latest/docs/react/guides/queries"},(0,n.kt)("inlineCode",{parentName:"a"},"useQuery")),". It takes the ",(0,n.kt)("a",{parentName:"p",href:"/docs/api-reference/core/interfaceReferences/#canparams"},"parameters")," that ",(0,n.kt)("inlineCode",{parentName:"p"},"can")," takes. It can also be configured with ",(0,n.kt)("a",{parentName:"p",href:"https://tanstack.com/query/v4/docs/react/reference/useQuery"},(0,n.kt)("inlineCode",{parentName:"a"},"queryOptions"))," for ",(0,n.kt)("a",{parentName:"p",href:"https://tanstack.com/query/latest/docs/react/guides/queries"},(0,n.kt)("inlineCode",{parentName:"a"},"useQuery")),". Returns the result of ",(0,n.kt)("a",{parentName:"p",href:"https://tanstack.com/query/latest/docs/react/guides/queries"},(0,n.kt)("inlineCode",{parentName:"a"},"useQuery")),"."),(0,n.kt)("h2",{id:"basic-usage"},"Basic Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useCan } from "@pankod/refine-core";\n\nconst { data } = useCan({\n    resource: "resource-you-ask-for-access",\n    action: "action-type-on-resource",\n    params: { foo: "optional-params" },\n});\n')),(0,n.kt)("h2",{id:"performance"},"Performance"),(0,n.kt)("p",null,"As the number of points that checks for access control in your app increases the performance of your app may take a hit especially if its access control involves remote endpoints. Caching the access control checks helps a great deal. Since ",(0,n.kt)("strong",{parentName:"p"},"refine")," uses ",(0,n.kt)("a",{parentName:"p",href:"https://tanstack.com/query/latest"},"TanStack Query")," it can be easily done configuring ",(0,n.kt)("a",{parentName:"p",href:"https://tanstack.com/query/v4/docs/react/reference/useQuery"},(0,n.kt)("inlineCode",{parentName:"a"},"staleTime")," and ",(0,n.kt)("inlineCode",{parentName:"a"},"cacheTime"))," properties."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},'import { useCan } from "@pankod/refine-core";\n\n// inside your component\n\nconst { data } = useCan({\n    resource: "resource-you-ask-for-access",\n    action: "action-type-on-resource",\n    params: { foo: "optional-params" } },\n    queryOptions: {\n        staleTime: 5 * 60 * 1000, // 5 minutes\n    }\n});\n')),(0,n.kt)("h2",{id:"properties"},"Properties"),(0,n.kt)("h3",{id:"resource-"},(0,n.kt)("inlineCode",{parentName:"h3"},"resource")," ",(0,n.kt)(m,{required:!0,mdxType:"PropTag"})),(0,n.kt)("p",null,"Passes to ",(0,n.kt)("a",{parentName:"p",href:"/docs/api-reference/core/providers/accessControl-provider/"},"Access Control Provider's")," ",(0,n.kt)("inlineCode",{parentName:"p"},"can")," function's ",(0,n.kt)("inlineCode",{parentName:"p"},"resource")," parameter"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},'useCan({\n    resource: "resource-you-ask-for-access",\n});\n')),(0,n.kt)("h3",{id:"action-"},(0,n.kt)("inlineCode",{parentName:"h3"},"action")," ",(0,n.kt)(m,{required:!0,mdxType:"PropTag"})),(0,n.kt)("p",null,"Passes to ",(0,n.kt)("a",{parentName:"p",href:"/docs/api-reference/core/providers/accessControl-provider/"},"Access Control Provider's")," ",(0,n.kt)("inlineCode",{parentName:"p"},"can")," function's ",(0,n.kt)("inlineCode",{parentName:"p"},"action")," parameter"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},'useCan({\n    action: "resource-you-ask-for-access",\n});\n')),(0,n.kt)("h3",{id:"params"},(0,n.kt)("inlineCode",{parentName:"h3"},"params")),(0,n.kt)("p",null,"Passes to ",(0,n.kt)("a",{parentName:"p",href:"/docs/api-reference/core/providers/accessControl-provider/"},"Access Control Provider's")," ",(0,n.kt)("inlineCode",{parentName:"p"},"can")," function's ",(0,n.kt)("inlineCode",{parentName:"p"},"params")," parameter"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},'useCan({\n    params: { foo: "optional-params" },\n});\n')),(0,n.kt)("h3",{id:"queryoptions"},(0,n.kt)("inlineCode",{parentName:"h3"},"queryOptions")),(0,n.kt)("p",null,"Query options for ",(0,n.kt)("a",{parentName:"p",href:"https://tanstack.com/query/latest"},"TanStack Query's")," ",(0,n.kt)("a",{parentName:"p",href:"https://tanstack.com/query/latest/docs/react/guides/queries"},(0,n.kt)("inlineCode",{parentName:"a"},"useQuery")),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"useCan({\n    queryOptions: {\n        staleTime: 5 * 60 * 1000, // 5 minutes\n    },\n});\n")),(0,n.kt)("h2",{id:"return-values"},"Return values"),(0,n.kt)("p",null,"Query result of ",(0,n.kt)("a",{parentName:"p",href:"https://tanstack.com/query/latest"},"TanStack Query's")," ",(0,n.kt)("a",{parentName:"p",href:"https://tanstack.com/query/latest/docs/react/guides/queries"},(0,n.kt)("inlineCode",{parentName:"a"},"useQuery")),"."),(0,n.kt)("p",null,"For example if you want to check if the user can create a post return value will be:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},'<Refine\n    accessControlProvider={{\n        can: async ({ resource, action }) => {\n            if (resource === "post" && action === "create") {\n                return Promise.resolve({\n                    can: false,\n                    reason: "Unauthorized",\n                });\n            }\n\n            return Promise.resolve({ can: true });\n        },\n    }}\n\n    // ...\n/>;\n\n// inside your component\nconst { data: canCreatePost } = useCan({\n    action: "create",\n    resource: "post",\n});\n\nconsole.log(canCreatePost); // { can: false, reason: "Unauthorized" }\n')),(0,n.kt)("h2",{id:"api"},"API"),(0,n.kt)("h3",{id:"properties-1"},"Properties"),(0,n.kt)(f,{module:"@pankod/refine-core/useCan",mdxType:"PropsTable"}),(0,n.kt)("h3",{id:"type-parameters"},"Type Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Property"),(0,n.kt)("th",{parentName:"tr",align:null},"Desription"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/3.xx.xx/api-reference/core/interfaceReferences#canreturntype"},"CanReturnType")),(0,n.kt)("td",{parentName:"tr",align:null},"Result data of the query ",(0,n.kt)("a",{parentName:"td",href:"/docs/3.xx.xx/api-reference/core/interfaceReferences#httperror"},(0,n.kt)("inlineCode",{parentName:"a"},"HttpError")))))),(0,n.kt)("h3",{id:"return-values-1"},"Return values"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Result of the ",(0,n.kt)("a",{parentName:"td",href:"https://tanstack.com/query/latest"},"TanStack Query's")," ",(0,n.kt)("a",{parentName:"td",href:"https://tanstack.com/query/latest/docs/react/guides/queries"},(0,n.kt)("inlineCode",{parentName:"a"},"useQuery"))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://tanstack.com/query/v4/docs/react/reference/useQuery"},(0,n.kt)("inlineCode",{parentName:"a"},"QueryObserverResult<{ data: CanReturnType; }>")))))))}y.isMDXComponent=!0}}]);