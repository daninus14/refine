"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[77400],{15680:(e,r,t)=>{t.d(r,{xA:()=>c,yg:()=>y});var n=t(96540);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),p=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},c=function(e){var r=p(e.components);return n.createElement(l.Provider,{value:r},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(t),m=o,y=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return t?n.createElement(y,a(a({ref:r},c),{},{components:t})):n.createElement(y,a({ref:r},c))}));function y(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=m;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s[u]="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=t[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},96737:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>l,default:()=>f,frontMatter:()=>s,metadata:()=>p,toc:()=>u});t(96540);var n=t(15680);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){return r=null!=r?r:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):function(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})),e}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}const s={title:"useSubscription",source:"packages/core/src/hooks/live/useSubscription/index.ts"},l=void 0,p={unversionedId:"realtime/hooks/use-subscription/index",id:"realtime/hooks/use-subscription/index",title:"useSubscription",description:"useSubscription calls the subscribe method from liveProvider when mounted. It is useful when you want to subscribe to a Realtime channel.",source:"@site/docs/realtime/hooks/use-subscription/index.md",sourceDirName:"realtime/hooks/use-subscription",slug:"/realtime/hooks/use-subscription/",permalink:"/docs/realtime/hooks/use-subscription/",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/realtime/hooks/use-subscription/index.md",tags:[],version:"current",lastUpdatedBy:"Ali Emir \u015een",lastUpdatedAt:1714999131,formattedLastUpdatedAt:"May 6, 2024",frontMatter:{title:"useSubscription",source:"packages/core/src/hooks/live/useSubscription/index.ts"},sidebar:"mainSidebar",previous:{title:"usePublish",permalink:"/docs/realtime/hooks/use-publish/"},next:{title:"Ably",permalink:"/docs/examples/live-provider/ably"}},c={},u=[{value:"Usage",id:"usage",level:2},{value:"Properties",id:"properties",level:3},{value:"channel <PropTag required/>",id:"channel-",level:3},{value:"onLiveEvent <PropTag required/>",id:"onliveevent-",level:3},{value:"types",id:"types",level:3},{value:"enabled",id:"enabled",level:3},{value:"params",id:"params",level:3},{value:"dataProviderName",id:"dataprovidername",level:3},{value:"API Reference",id:"api-reference",level:2},{value:"Properties",id:"properties-1",level:3}],d=e=>function(r){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.yg)("div",r)},m=d("DocThumbsUpDownFeedbackWidget"),y=d("PropTag"),b=d("PropsTable"),g={toc:u},v="wrapper";function f(e){var{components:r}=e,t=a(e,["components"]);return(0,n.yg)(v,i(function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(r){o(e,r,t[r])}))}return e}({},g,t),{components:r,mdxType:"MDXLayout"}),(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"useSubscription")," calls the ",(0,n.yg)("a",{parentName:"p",href:"/docs/realtime/live-provider#subscribe"},(0,n.yg)("inlineCode",{parentName:"a"},"subscribe"))," method from ",(0,n.yg)("a",{parentName:"p",href:"/docs/realtime/live-provider"},(0,n.yg)("inlineCode",{parentName:"a"},"liveProvider"))," when mounted. It is useful when you want to subscribe to a Realtime channel."),(0,n.yg)("p",null,"Refine uses this hook internally in data hooks to ",(0,n.yg)("inlineCode",{parentName:"p"},"subscribe")," Realtime data. You can refer liveProvider's ",(0,n.yg)("a",{parentName:"p",href:"/docs/realtime/live-provider#integrated-hooks"},"Integrated Hooks")," section for more information."),(0,n.yg)("h2",{id:"usage"},"Usage"),(0,n.yg)(m,{id:"usage",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-tsx"},'import { useSubscription } from "@refinedev/core";\n\nuseSubscription({\n    channel: "channel-name",\n    types: ["event-name", "another-event-name"]\n    onLiveEvent: (event) => {},\n    dataProviderName: "default",\n});\n\n'))),(0,n.yg)("h3",{id:"properties"},"Properties"),(0,n.yg)(m,{id:"properties",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"useSubscription")," will be passed to the ",(0,n.yg)("a",{parentName:"p",href:"/docs/realtime/live-provider#subscribe"},"subscribe")," method from the ",(0,n.yg)("a",{parentName:"p",href:"/docs/realtime/live-provider"},"liveProvider")," as a parameter. You can use the following properties of this method while subscribing to a channel.")),(0,n.yg)("h3",{id:"channel-"},"channel ",(0,n.yg)(y,{required:!0,mdxType:"PropTag"})),(0,n.yg)(m,{id:"channel-",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("p",null,"Channel name to subscribe to.")),(0,n.yg)("h3",{id:"onliveevent-"},"onLiveEvent ",(0,n.yg)(y,{required:!0,mdxType:"PropTag"})),(0,n.yg)(m,{id:"onliveevent-",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("p",null,"Callback that is run when new events from the subscription arrive.")),(0,n.yg)("h3",{id:"types"},"types"),(0,n.yg)(m,{id:"types",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("p",null,"Type of events to subscribe. ",(0,n.yg)("inlineCode",{parentName:"p"},'"\\*"')," means all events. By default, it subscribes to all events.")),(0,n.yg)("h3",{id:"enabled"},"enabled"),(0,n.yg)(m,{id:"enabled",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("p",null,"You can disable the subscription by setting this prop to ",(0,n.yg)("inlineCode",{parentName:"p"},"false")," and vice versa. By default, it is enabled.")),(0,n.yg)("h3",{id:"params"},"params"),(0,n.yg)(m,{id:"params",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("p",null,"You can pass any additional parameters to the ",(0,n.yg)("a",{parentName:"p",href:"/docs/realtime/live-provider"},(0,n.yg)("inlineCode",{parentName:"a"},"liveProvider")),"'s ",(0,n.yg)("a",{parentName:"p",href:"/docs/realtime/live-provider#subscribe"},(0,n.yg)("inlineCode",{parentName:"a"},"subscribe"))," method."),(0,n.yg)("p",null,"Hooks that use ",(0,n.yg)("inlineCode",{parentName:"p"},"useSubscription")," internally send the query's parameters' (pagination, meta, sort, filters, etc.) information along with this prop."),(0,n.yg)("blockquote",null,(0,n.yg)("p",{parentName:"blockquote"},"For more information on which hooks use ",(0,n.yg)("inlineCode",{parentName:"p"},"useSubscription")," internally, refer to the ",(0,n.yg)("a",{parentName:"p",href:"/docs/realtime/live-provider#integrated-hooks"},'LiveProvider\'s "Integrated Hooks" section',"\u2192")))),(0,n.yg)("h3",{id:"dataprovidername"},"dataProviderName"),(0,n.yg)(m,{id:"dataprovidername",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("p",null,"You can pass the name of the data provider to use for the subscription. By default, it uses the ",(0,n.yg)("inlineCode",{parentName:"p"},'"default"')," data provider.")),(0,n.yg)("h2",{id:"api-reference"},"API Reference"),(0,n.yg)("h3",{id:"properties-1"},"Properties"),(0,n.yg)(m,{id:"properties-1",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)(b,{module:"@refinedev/core/useSubscription",mdxType:"PropsTable"})))}f.isMDXComponent=!0}}]);