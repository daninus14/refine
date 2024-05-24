"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[35737],{58860:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>g});var a=n(37953);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),s=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),c=r,g=u["".concat(d,".").concat(c)]||u[c]||m[c]||i;return n?a.createElement(g,o(o({ref:t},p),{},{components:n})):a.createElement(g,o({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},99888:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>d,default:()=>f,frontMatter:()=>l,metadata:()=>s,toc:()=>u});n(37953);var a=n(58860);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const l={title:"useDelete",siderbar_label:"useDelete",source:"packages/core/src/hooks/data/useDelete.ts"},d=void 0,s={unversionedId:"data/hooks/use-delete/index",id:"data/hooks/use-delete/index",title:"useDelete",description:"useDelete is used when you want to delete a record. It is an extended version of TanStack Query's useMutation and not only supports all features of the mutation but also adds some extra features.",source:"@site/docs/data/hooks/use-delete/index.md",sourceDirName:"data/hooks/use-delete",slug:"/data/hooks/use-delete/",permalink:"/docs/data/hooks/use-delete/",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/data/hooks/use-delete/index.md",tags:[],version:"current",lastUpdatedBy:"Alican Erdurmaz",lastUpdatedAt:1716547612,formattedLastUpdatedAt:"May 24, 2024",frontMatter:{title:"useDelete",siderbar_label:"useDelete",source:"packages/core/src/hooks/data/useDelete.ts"},sidebar:"mainSidebar",previous:{title:"useUpdateMany",permalink:"/docs/data/hooks/use-update-many/"},next:{title:"useDeleteMany",permalink:"/docs/data/hooks/use-delete-many/"}},p={},u=[{value:"Usage",id:"usage",level:2},{value:"Realtime Updates",id:"realtime-updates",level:2},{value:"Invalidating Queries",id:"invalidating-queries",level:2},{value:"Audit Logs",id:"audit-logs",level:2},{value:"Properties",id:"properties",level:2},{value:"mutationOptions",id:"mutationoptions",level:3},{value:"overtimeOptions",id:"overtimeoptions",level:3},{value:"Mutation Parameters",id:"mutation-parameters",level:2},{value:"resource <PropTag required />",id:"resource-",level:3},{value:"id <PropTag required />",id:"id-",level:3},{value:"mutationMode",id:"mutationmode",level:3},{value:"undoableTimeout",id:"undoabletimeout",level:3},{value:"onCancel",id:"oncancel",level:3},{value:"successNotification",id:"successnotification",level:3},{value:"errorNotification",id:"errornotification",level:3},{value:"meta",id:"meta",level:3},{value:"dataProviderName",id:"dataprovidername",level:3},{value:"invalidates",id:"invalidates",level:3},{value:"Return Values",id:"return-values",level:2},{value:"Additional Values",id:"additional-values",level:3},{value:"overtime",id:"overtime",level:4},{value:"API Reference",id:"api-reference",level:2},{value:"Mutation Parameters",id:"mutation-parameters-1",level:3},{value:"Type Parameters",id:"type-parameters",level:3},{value:"Return value",id:"return-value",level:3}],m=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.yg)("div",t)},c=m("DocThumbsUpDownFeedbackWidget"),g=m("PropTag"),y={toc:u},h="wrapper";function f(e){var{components:t}=e,n=o(e,["components"]);return(0,a.yg)(h,i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){r(e,t,n[t])}))}return e}({},y,n),{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"useDelete")," is used when you want to delete a record. It is an extended version of TanStack Query's ",(0,a.yg)("a",{parentName:"p",href:"https://tanstack.com/query/v4/docs/react/reference/useMutation"},(0,a.yg)("inlineCode",{parentName:"a"},"useMutation"))," and not only supports all features of the mutation but also adds some extra features."),(0,a.yg)("p",null,"It uses the ",(0,a.yg)("inlineCode",{parentName:"p"},"deleteOne")," method as the ",(0,a.yg)("strong",{parentName:"p"},"mutation function")," from the ",(0,a.yg)("a",{parentName:"p",href:"/docs/data/data-provider"},(0,a.yg)("inlineCode",{parentName:"a"},"dataProvider"))," which is passed to ",(0,a.yg)("inlineCode",{parentName:"p"},"<Refine>"),"."),(0,a.yg)("h2",{id:"usage"},"Usage"),(0,a.yg)(c,{id:"usage",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"useDelete")," hook returns many useful properties and methods. One of them is the ",(0,a.yg)("inlineCode",{parentName:"p"},"mutate")," method which expects ",(0,a.yg)("inlineCode",{parentName:"p"},"resource")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"id")," as parameters. These parameters will be passed to the ",(0,a.yg)("inlineCode",{parentName:"p"},"deleteOne")," method from the ",(0,a.yg)("inlineCode",{parentName:"p"},"dataProvider")," as parameters."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'import { useDelete } from "@refinedev/core";\n\nconst { mutate } = useDelete();\n\nmutate({\n  resource: "products",\n  id: 1,\n});\n'))),(0,a.yg)("h2",{id:"realtime-updates"},"Realtime Updates"),(0,a.yg)(c,{id:"realtime-updates",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"This feature is only available if you use a ",(0,a.yg)("a",{parentName:"p",href:"/docs/realtime/live-provider"},"Live Provider"),".")),(0,a.yg)("p",null,"When the ",(0,a.yg)("inlineCode",{parentName:"p"},"useDelete")," mutation runs successfully, it will call the ",(0,a.yg)("inlineCode",{parentName:"p"},"publish")," method from ",(0,a.yg)("inlineCode",{parentName:"p"},"liveProvider")," with some parameters such as ",(0,a.yg)("inlineCode",{parentName:"p"},"channel"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"type")," etc. This is useful when you want to publish the changes to the subscribers on the client side.")),(0,a.yg)("h2",{id:"invalidating-queries"},"Invalidating Queries"),(0,a.yg)(c,{id:"invalidating-queries",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("p",null,"When the ",(0,a.yg)("inlineCode",{parentName:"p"},"useDelete")," mutation runs successfully, it will invalidate the following queries from the current ",(0,a.yg)("inlineCode",{parentName:"p"},"resource"),": ",(0,a.yg)("inlineCode",{parentName:"p"},'"list"')," and ",(0,a.yg)("inlineCode",{parentName:"p"},'"many"')," by default. Which means that, if you use ",(0,a.yg)("inlineCode",{parentName:"p"},"useList")," or ",(0,a.yg)("inlineCode",{parentName:"p"},"useMany")," hooks on the same page, they will refetch the data after the mutation is completed. You can change this behavior by passing ",(0,a.yg)("a",{parentName:"p",href:"#invalidates"},(0,a.yg)("inlineCode",{parentName:"a"},"invalidates"))," prop."),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"For more information, refer to the ",(0,a.yg)("a",{parentName:"p",href:"https://tanstack.com/query/v4/docs/react/guides/query-invalidation"},"invalidation documentation ","\u2192")))),(0,a.yg)("h2",{id:"audit-logs"},"Audit Logs"),(0,a.yg)(c,{id:"audit-logs",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"This feature is only available if you use a ",(0,a.yg)("a",{parentName:"p",href:"/docs/audit-logs/audit-log-provider"},"Audit Log Provider"),".")),(0,a.yg)("p",null,"When the ",(0,a.yg)("inlineCode",{parentName:"p"},"useDelete")," mutation runs successfully, it will call the ",(0,a.yg)("inlineCode",{parentName:"p"},"log")," method from ",(0,a.yg)("inlineCode",{parentName:"p"},"auditLogProvider")," with some parameters such as ",(0,a.yg)("inlineCode",{parentName:"p"},"resource"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"action"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"data"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"previousData")," etc. This is useful when you want to log the changes to the database.")),(0,a.yg)("h2",{id:"properties"},"Properties"),(0,a.yg)("h3",{id:"mutationoptions"},"mutationOptions"),(0,a.yg)(c,{id:"mutationoptions",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"mutationOptions")," is used to pass options to the ",(0,a.yg)("inlineCode",{parentName:"p"},"useMutation")," hook. It is useful when you want to pass additional options to the ",(0,a.yg)("inlineCode",{parentName:"p"},"useMutation")," hook."),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://tanstack.com/query/v4/docs/react/reference/useMutation"},"Refer to the ",(0,a.yg)("inlineCode",{parentName:"a"},"useMutation")," documentation for more information ","\u2192")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},"useDelete({\n  mutationOptions: {\n    retry: 3,\n  },\n});\n")),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"mutationOptions")," does not support ",(0,a.yg)("inlineCode",{parentName:"p"},"onSuccess")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"onError")," props because they override the default ",(0,a.yg)("inlineCode",{parentName:"p"},"onSuccess")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"onError")," functions. If you want to use these props, you can pass them to mutate functions like this:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'const { mutate } = useDelete();\n\nmutate(\n  {\n    resource: "products",\n    id: 1,\n  },\n  {\n    onError: (error, variables, context) => {\n      // An error occurred!\n    },\n    onSuccess: (data, variables, context) => {\n      // Let\'s celebrate!\n    },\n  },\n);\n'))),(0,a.yg)("h3",{id:"overtimeoptions"},"overtimeOptions"),(0,a.yg)(c,{id:"overtimeoptions",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("p",null,"If you want loading overtime for the request, you can pass the ",(0,a.yg)("inlineCode",{parentName:"p"},"overtimeOptions")," prop to the this hook. It is useful when you want to show a loading indicator when the request takes too long.\n",(0,a.yg)("inlineCode",{parentName:"p"},"interval")," is the time interval in milliseconds. ",(0,a.yg)("inlineCode",{parentName:"p"},"onInterval")," is the function that will be called on each interval."),(0,a.yg)("p",null,"Return ",(0,a.yg)("inlineCode",{parentName:"p"},"overtime")," object from this hook. ",(0,a.yg)("inlineCode",{parentName:"p"},"elapsedTime")," is the elapsed time in milliseconds. It becomes ",(0,a.yg)("inlineCode",{parentName:"p"},"undefined")," when the request is completed."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},"const { overtime } = useDelete({\n  //...\n  overtimeOptions: {\n    interval: 1000,\n    onInterval(elapsedInterval) {\n      console.log(elapsedInterval);\n    },\n  },\n});\n\nconsole.log(overtime.elapsedTime); // undefined, 1000, 2000, 3000 4000, ...\n\n// You can use it like this:\n{\n  elapsedTime >= 4000 && <div>this takes a bit longer than expected</div>;\n}\n"))),(0,a.yg)("h2",{id:"mutation-parameters"},"Mutation Parameters"),(0,a.yg)("h3",{id:"resource-"},"resource ",(0,a.yg)(g,{required:!0,mdxType:"PropTag"})),(0,a.yg)(c,{id:"resource-",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("p",null,"This parameter will be passed to the ",(0,a.yg)("inlineCode",{parentName:"p"},"deleteOne")," method from the ",(0,a.yg)("inlineCode",{parentName:"p"},"dataProvider")," as a parameter. It is usually used as an API endpoint path but it all depends on how you handle the ",(0,a.yg)("inlineCode",{parentName:"p"},"resource")," in the ",(0,a.yg)("inlineCode",{parentName:"p"},"deleteOne")," method."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'const { mutate } = useDelete();\n\nmutate({\n  resource: "categories",\n});\n')),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"For more information, refer to the ",(0,a.yg)("a",{parentName:"p",href:"/docs/data/data-provider"},"creating a data provider tutorial ","\u2192"))),(0,a.yg)("p",null,"If you have multiple resources with the same name, you can pass the ",(0,a.yg)("inlineCode",{parentName:"p"},"identifier")," instead of the ",(0,a.yg)("inlineCode",{parentName:"p"},"name")," of the resource. It will only be used as the main matching key for the resource, data provider methods will still work with the ",(0,a.yg)("inlineCode",{parentName:"p"},"name")," of the resource defined in the ",(0,a.yg)("inlineCode",{parentName:"p"},"<Refine/>")," component."),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"For more information, refer to the ",(0,a.yg)("a",{parentName:"p",href:"/docs/core/refine-component#identifier"},(0,a.yg)("inlineCode",{parentName:"a"},"identifier")," of the ",(0,a.yg)("inlineCode",{parentName:"a"},"<Refine/>")," component documentation ","\u2192")))),(0,a.yg)("h3",{id:"id-"},"id ",(0,a.yg)(g,{required:!0,mdxType:"PropTag"})),(0,a.yg)(c,{id:"id-",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("p",null,"This parameter will be passed to the ",(0,a.yg)("inlineCode",{parentName:"p"},"deleteOne")," method from the ",(0,a.yg)("inlineCode",{parentName:"p"},"dataProvider")," as a parameter. It is used to determine which record to delete."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},"const { mutate } = useDelete();\n\nmutate({\n  id: 123,\n});\n"))),(0,a.yg)("h3",{id:"mutationmode"},"mutationMode"),(0,a.yg)(c,{id:"mutationmode",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("p",null,"Mutation mode determines which mode the mutation runs with. Mutations can run under three different modes: ",(0,a.yg)("inlineCode",{parentName:"p"},"pessimistic"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"optimistic"),", and ",(0,a.yg)("inlineCode",{parentName:"p"},"undoable"),". The default mode is ",(0,a.yg)("inlineCode",{parentName:"p"},"pessimistic"),".\nEach mode corresponds to a different type of user experience."),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"For more information, refer to the ",(0,a.yg)("a",{parentName:"p",href:"/docs/advanced-tutorials/mutation-mode"},"mutation mode documentation ","\u2192"))),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'const { mutate } = useDelete();\n\nmutate({\n  mutationMode: "undoable",\n});\n'))),(0,a.yg)("h3",{id:"undoabletimeout"},"undoableTimeout"),(0,a.yg)(c,{id:"undoabletimeout",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("p",null,"When ",(0,a.yg)("inlineCode",{parentName:"p"},"mutationMode")," is set to ",(0,a.yg)("inlineCode",{parentName:"p"},"undoable"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"undoableTimeout")," is used to determine the duration to wait before executing the mutation. The default value is ",(0,a.yg)("inlineCode",{parentName:"p"},"5000")," milliseconds."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'const { mutate } = useDelete();\n\nmutate({\n  mutationMode: "undoable",\n  undoableTimeout: 10000,\n});\n'))),(0,a.yg)("h3",{id:"oncancel"},"onCancel"),(0,a.yg)(c,{id:"oncancel",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"onCancel")," property can be utilized when the ",(0,a.yg)("inlineCode",{parentName:"p"},"mutationMode")," is set to ",(0,a.yg)("inlineCode",{parentName:"p"},'"undoable"'),". It provides a function that can be used to cancel the ongoing mutation."),(0,a.yg)("p",null,"By defining ",(0,a.yg)("inlineCode",{parentName:"p"},"onCancel"),", undoable notification will not be shown automatically. This gives you the flexibility to handle the cancellation process in your own way, such as showing a custom notification or implementing any other desired behavior to allow users to cancel the mutation."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'import { useRef } from "react";\nimport { useDelete } from "@refinedev/core";\n\nconst MyComponent = () => {\n  const { mutate } = useDelete();\n  const cancelRef = useRef<(() => void) | null>(null);\n\n  const deleteItem = () => {\n    mutate({\n      //...\n      mutationMode: "undoable",\n      onCancel: (cancelMutation) => {\n        cancelRef.current = cancelMutation;\n      },\n    });\n  };\n\n  const cancelDelete = () => {\n    cancelRef.current?.();\n  };\n\n  return (\n    <>\n      <button onClick={deleteItem}>Delete</button>\n      <button onClick={cancelDelete}>Cancel</button>\n    </>\n  );\n};\n'))),(0,a.yg)("h3",{id:"successnotification"},"successNotification"),(0,a.yg)(c,{id:"successnotification",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},(0,a.yg)("a",{parentName:"p",href:"/docs/notification/notification-provider"},(0,a.yg)("inlineCode",{parentName:"a"},"NotificationProvider"))," is required for this prop to work.")),(0,a.yg)("p",null,"This prop allows you to customize the success notification that shows up when the data is fetched successfully and ",(0,a.yg)("inlineCode",{parentName:"p"},"useDelete")," calls the ",(0,a.yg)("inlineCode",{parentName:"p"},"open")," function from ",(0,a.yg)("inlineCode",{parentName:"p"},"NotificationProvider"),":"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'const { mutate } = useDelete();\n\nmutate({\n  successNotification: (data, id, resource) => {\n    return {\n      message: `${data.title} Successfully fetched.`,\n      description: "Success with no errors",\n      type: "success",\n    };\n  },\n});\n'))),(0,a.yg)("h3",{id:"errornotification"},"errorNotification"),(0,a.yg)(c,{id:"errornotification",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},(0,a.yg)("a",{parentName:"p",href:"/docs/notification/notification-provider"},(0,a.yg)("inlineCode",{parentName:"a"},"NotificationProvider"))," is required for this prop to work.")),(0,a.yg)("p",null,"This prop allows you to customize the error notification that shows up when the data fetching fails and the ",(0,a.yg)("inlineCode",{parentName:"p"},"useDelete")," calls the ",(0,a.yg)("inlineCode",{parentName:"p"},"open")," function from ",(0,a.yg)("inlineCode",{parentName:"p"},"NotificationProvider"),":"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'const { mutate } = useDelete();\n\nmutate({\n  errorNotification: (data, id, resource) => {\n    return {\n      message: `Something went wrong when getting ${data.id}`,\n      description: "Error",\n      type: "error",\n    };\n  },\n});\n'))),(0,a.yg)("h3",{id:"meta"},"meta"),(0,a.yg)(c,{id:"meta",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"meta")," is a special property that can be used to pass additional information to data provider methods for the following purposes:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Customizing the data provider methods for specific use cases."),(0,a.yg)("li",{parentName:"ul"},"Generating GraphQL queries using plain JavaScript Objects (JSON).")),(0,a.yg)("p",null,"In the following example, we pass the ",(0,a.yg)("inlineCode",{parentName:"p"},"headers")," property in the ",(0,a.yg)("inlineCode",{parentName:"p"},"meta")," object to the ",(0,a.yg)("inlineCode",{parentName:"p"},"deleteOne")," method. You can pass any properties to specifically handle the data provider methods with similar logic."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'const { mutate } = useDelete();\n\nmutate({\n  // highlight-start\n  meta: {\n    headers: { "x-meta-data": "true" },\n  },\n  // highlight-end\n});\n\nconst myDataProvider = {\n  //...\n  deleteOne: async ({\n    resource,\n    id,\n    // highlight-next-line\n    meta,\n  }) => {\n    // highlight-next-line\n    const headers = meta?.headers ?? {};\n    const url = `${apiUrl}/${resource}/${id}`;\n\n    //...\n    //...\n\n    // highlight-next-line\n    const { data } = await httpClient.delete(url, undefined, { headers });\n\n    return {\n      data,\n    };\n  },\n  //...\n};\n')),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"For more information, refer to the ",(0,a.yg)("a",{parentName:"p",href:"/docs/guides-concepts/general-concepts/#meta-concept"},(0,a.yg)("inlineCode",{parentName:"a"},"meta")," section of the General Concepts documentation","\u2192")))),(0,a.yg)("h3",{id:"dataprovidername"},"dataProviderName"),(0,a.yg)(c,{id:"dataprovidername",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("p",null,"This prop allows you to specify which ",(0,a.yg)("inlineCode",{parentName:"p"},"dataProvider")," if you have more than one. Just pass it like in the example:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'const { mutate } = useDelete();\n\nmutate({\n  dataProviderName: "second-data-provider",\n});\n'))),(0,a.yg)("h3",{id:"invalidates"},"invalidates"),(0,a.yg)(c,{id:"invalidates",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"invalidates")," is used to specify which queries should be invalidated after the mutation is completed."),(0,a.yg)("p",null,"By default, it invalidates the following queries from the current ",(0,a.yg)("inlineCode",{parentName:"p"},"resource"),": ",(0,a.yg)("inlineCode",{parentName:"p"},'"list"')," and ",(0,a.yg)("inlineCode",{parentName:"p"},'"many"'),". That means, if you use ",(0,a.yg)("inlineCode",{parentName:"p"},"useList")," or ",(0,a.yg)("inlineCode",{parentName:"p"},"useMany")," hooks on the same page, they will refetch the data after the mutation is completed."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'const { mutate } = useDelete();\n\nmutate({\n  invalidates: ["list", "many"],\n});\n'))),(0,a.yg)("h2",{id:"return-values"},"Return Values"),(0,a.yg)(c,{id:"return-values",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("p",null,"Returns an object with TanStack Query's ",(0,a.yg)("inlineCode",{parentName:"p"},"useMutation")," return values."),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"For more information, refer to the ",(0,a.yg)("a",{parentName:"p",href:"https://tanstack.com/query/v4/docs/react/reference/useMutation"},(0,a.yg)("inlineCode",{parentName:"a"},"useMutation")," documentation ","\u2192")))),(0,a.yg)("h3",{id:"additional-values"},"Additional Values"),(0,a.yg)("h4",{id:"overtime"},"overtime"),(0,a.yg)(c,{id:"overtime",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"overtime")," object is returned from this hook. ",(0,a.yg)("inlineCode",{parentName:"p"},"elapsedTime")," is the elapsed time in milliseconds. It becomes ",(0,a.yg)("inlineCode",{parentName:"p"},"undefined")," when the request is completed."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},"const { overtime } = useDelete();\n\nconsole.log(overtime.elapsedTime); // undefined, 1000, 2000, 3000 4000, ...\n"))),(0,a.yg)("h2",{id:"api-reference"},"API Reference"),(0,a.yg)("h3",{id:"mutation-parameters-1"},"Mutation Parameters"),(0,a.yg)(c,{id:"mutation-parameters-1",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Property"),(0,a.yg)("th",{parentName:"tr",align:null},"Description"),(0,a.yg)("th",{parentName:"tr",align:null},"Type"),(0,a.yg)("th",{parentName:"tr",align:null},"Default"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"resource ",(0,a.yg)(g,{asterisk:!0,mdxType:"PropTag"})),(0,a.yg)("td",{parentName:"tr",align:null},"Resource name for API data interactions"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"string")),(0,a.yg)("td",{parentName:"tr",align:null})),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"id ",(0,a.yg)(g,{asterisk:!0,mdxType:"PropTag"})),(0,a.yg)("td",{parentName:"tr",align:null},"id for mutation function"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"/docs/core/interface-references#basekey"},(0,a.yg)("inlineCode",{parentName:"a"},"BaseKey"))),(0,a.yg)("td",{parentName:"tr",align:null})),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"mutationMode"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"/docs/advanced-tutorials/mutation-mode"},"Determines when mutations are executed")),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},' "pessimistic')," ","|"," ",(0,a.yg)("inlineCode",{parentName:"td"},'"optimistic')," ","|"," ",(0,a.yg)("inlineCode",{parentName:"td"},'"undoable"')),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},'"pessimistic"'),"*")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"undoableTimeout"),(0,a.yg)("td",{parentName:"tr",align:null},"Duration to wait before executing the mutation when ",(0,a.yg)("inlineCode",{parentName:"td"},'mutationMode = "undoable"')),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"number")),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"5000ms"),"*")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"onCancel"),(0,a.yg)("td",{parentName:"tr",align:null},"Provides a function to cancel the mutation when ",(0,a.yg)("inlineCode",{parentName:"td"},'mutationMode = "undoable"')),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"(cancelMutation: () => void) => void")),(0,a.yg)("td",{parentName:"tr",align:null})),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"successNotification"),(0,a.yg)("td",{parentName:"tr",align:null},"Successful Mutation notification"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"/docs/core/interface-references#successerrornotification"},(0,a.yg)("inlineCode",{parentName:"a"},"SuccessErrorNotification"))),(0,a.yg)("td",{parentName:"tr",align:null},'"Successfully deleted a ',(0,a.yg)("inlineCode",{parentName:"td"},"resource"),'"')),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"errorNotification"),(0,a.yg)("td",{parentName:"tr",align:null},"Unsuccessful Mutation notification"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"/docs/core/interface-references#successerrornotification"},(0,a.yg)("inlineCode",{parentName:"a"},"SuccessErrorNotification"))),(0,a.yg)("td",{parentName:"tr",align:null},'"Error (status code: ',(0,a.yg)("inlineCode",{parentName:"td"},"status"),'"')),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"meta"),(0,a.yg)("td",{parentName:"tr",align:null},"Meta data query for ",(0,a.yg)("inlineCode",{parentName:"td"},"dataProvider")),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"/docs/core/interface-references#metaquery"},(0,a.yg)("inlineCode",{parentName:"a"},"MetaDataQuery"))),(0,a.yg)("td",{parentName:"tr",align:null},"{}")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"dataProviderName"),(0,a.yg)("td",{parentName:"tr",align:null},"If there is more than one ",(0,a.yg)("inlineCode",{parentName:"td"},"dataProvider"),", you should use the ",(0,a.yg)("inlineCode",{parentName:"td"},"dataProviderName")," that you will use."),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"string")),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"default"))),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"invalidates"),(0,a.yg)("td",{parentName:"tr",align:null},"You can use it to manage the invalidations that will occur at the end of the mutation."),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"all"),", ",(0,a.yg)("inlineCode",{parentName:"td"},"resourceAll"),", ",(0,a.yg)("inlineCode",{parentName:"td"},"list"),", ",(0,a.yg)("inlineCode",{parentName:"td"},"many"),", ",(0,a.yg)("inlineCode",{parentName:"td"},"detail"),", ",(0,a.yg)("inlineCode",{parentName:"td"},"false")),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},'["list", "many"]'))))),(0,a.yg)("admonition",{title:"Global Configuration",type:"simple"},(0,a.yg)("p",{parentName:"admonition"},"These props have default values in ",(0,a.yg)("inlineCode",{parentName:"p"},"RefineContext")," and can also be set on ",(0,a.yg)("a",{parentName:"p",href:"/docs/core/refine-component"},(0,a.yg)("inlineCode",{parentName:"a"},"<Refine>"))," component. ",(0,a.yg)("inlineCode",{parentName:"p"},"useDelete")," will use what is passed to ",(0,a.yg)("inlineCode",{parentName:"p"},"<Refine>")," as default but a local value will override it."))),(0,a.yg)("h3",{id:"type-parameters"},"Type Parameters"),(0,a.yg)(c,{id:"type-parameters",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Property"),(0,a.yg)("th",{parentName:"tr",align:null},"Description"),(0,a.yg)("th",{parentName:"tr",align:null},"Type"),(0,a.yg)("th",{parentName:"tr",align:null},"Default"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"TData"),(0,a.yg)("td",{parentName:"tr",align:null},"Result data of the mutation. Extends ",(0,a.yg)("a",{parentName:"td",href:"/docs/core/interface-references#baserecord"},(0,a.yg)("inlineCode",{parentName:"a"},"BaseRecord"))),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"/docs/core/interface-references#baserecord"},(0,a.yg)("inlineCode",{parentName:"a"},"BaseRecord"))),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"/docs/core/interface-references#baserecord"},(0,a.yg)("inlineCode",{parentName:"a"},"BaseRecord")))),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"TError"),(0,a.yg)("td",{parentName:"tr",align:null},"Custom error object that extends ",(0,a.yg)("a",{parentName:"td",href:"/docs/core/interface-references#httperror"},(0,a.yg)("inlineCode",{parentName:"a"},"HttpError"))),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"/docs/core/interface-references#httperror"},(0,a.yg)("inlineCode",{parentName:"a"},"HttpError"))),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"/docs/core/interface-references#httperror"},(0,a.yg)("inlineCode",{parentName:"a"},"HttpError")))),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"TVariables"),(0,a.yg)("td",{parentName:"tr",align:null},"Values for mutation function"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"{}")),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"{}")))))),(0,a.yg)("h3",{id:"return-value"},"Return value"),(0,a.yg)(c,{id:"return-value",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Description"),(0,a.yg)("th",{parentName:"tr",align:null},"Type"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Result of the TanStack Query's useMutation"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"https://tanstack.com/query/v4/docs/react/reference/useMutation"},(0,a.yg)("inlineCode",{parentName:"a"},"UseMutationResult<{ data: TData }, TError, { id: BaseKey; }, DeleteContext>")))),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"overtime"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"{ elapsedTime?: number }")))))))}f.isMDXComponent=!0}}]);