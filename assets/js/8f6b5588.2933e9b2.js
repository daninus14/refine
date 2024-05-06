"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[31091,89942,67561,34704,12323,418,78037,45180,22799,10894,88513,45051,67432,289,22670,55527,77908,10765,33146,24099,46480,55040,32659,10278],{15680:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>f});var n=r(96540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=c(r),y=a,f=s["".concat(u,".").concat(y)]||s[y]||d[y]||o;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=y;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[s]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},15947:(e,t,r)=>{r.d(t,{A:()=>i});var n=r(96540),a=r(20053);const o={tabItem:"tabItem_Ymn6"};function i({children:e,hidden:t,className:r}){return n.createElement("div",{role:"tabpanel",className:(0,a.A)(o.tabItem,r),hidden:t},e)}},5063:(e,t,r)=>{r.d(t,{A:()=>g});var n=r(96540),a=r(20053),o=r(52204),i=r(57631),l=r(12075);const u={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){c(e,t,r[t])}))}return e}function s(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function d({className:e,block:t,selectedValue:r,selectValue:i,tabValues:l}){const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,o.a_)(),y=e=>{const t=e.currentTarget,n=c.indexOf(t),a=l[n].value;a!==r&&(d(t),i(a))},f=e=>{let t=null;switch(e.key){case"Enter":y(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;var r;t=null!==(r=c[n])&&void 0!==r?r:c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;var n;t=null!==(n=c[r])&&void 0!==n?n:c[c.length-1];break}}null==t||t.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},e)},l.map((({value:e,label:t,attributes:o})=>n.createElement("li",s(p({role:"tab",tabIndex:r===e?0:-1,"aria-selected":r===e,key:e,ref:e=>c.push(e),onKeyDown:f,onClick:y},o),{className:(0,a.A)("tabs__item",u.tabItem,null==o?void 0:o.className,{"tabs__item--active":r===e})}),null!=t?t:e))))}function y({lazy:e,children:t,selectedValue:r}){const a=(Array.isArray(t)?t:[t]).filter(Boolean);if(e){const e=a.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function f(e){const t=(0,i.u)(e);return n.createElement("div",{className:(0,a.A)("tabs-container",u.tabList)},n.createElement(d,p({},e,t)),n.createElement(y,p({},e,t)))}function g(e){const t=(0,l.A)();return n.createElement(f,p({key:String(t)},e))}},57631:(e,t,r)=>{r.d(t,{u:()=>y});var n=r(96540),a=r(56347),o=r(57641);var i=r(14278);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function c(e){return function(e){var t,r;return null!==(r=null===(t=n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))||void 0===t?void 0:t.filter(Boolean))&&void 0!==r?r:[]}(e).map((({props:{value:e,label:t,attributes:r,default:n}})=>({value:e,label:t,attributes:r,default:n})))}function p(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=null!=t?t:c(r);return function(e){const t=function(e,t=((e,t)=>e===t)){return e.filter(((r,n)=>e.findIndex((e=>t(e,r)))!==n))}(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function s({value:e,tabValues:t}){return t.some((t=>t.value===e))}function d({queryString:e=!1,groupId:t}){const r=(0,a.W6)(),i=function({queryString:e=!1,groupId:t}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:e,groupId:t}),c=(0,o.aZ)(i),p=(0,n.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(r.location.search);t.set(i,e),r.replace(u(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){l(e,t,r[t])}))}return e}({},r.location),{search:t.toString()}))}),[i,r]);return[c,p]}function y(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,o=p(e),[l,u]=(0,n.useState)((()=>function({defaultValue:e,tabValues:t}){if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!s({value:e,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}var r;const n=null!==(r=t.find((e=>e.default)))&&void 0!==r?r:t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[c,y]=d({queryString:r,groupId:a}),[f,g]=function({groupId:e}){const t=function(e){return e?`docusaurus.tab.${e}`:null}(e),[r,a]=(0,i.Dv)(t);return[r,(0,n.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:a}),m=(()=>{const e=null!=c?c:f;return s({value:e,tabValues:o})?e:null})();(0,n.useLayoutEffect)((()=>{m&&u(m)}),[m]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!s({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);u(e),y(e),g(e)}),[y,g,o]),tabValues:o}}},84898:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>O,frontMatter:()=>c,metadata:()=>s,toc:()=>y});r(96540);var n=r(15680),a=r(5063),o=r(15947);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const c={id:"create-project",title:"3. Create your refine project",tutorial:{prev:"3.xx.xx/tutorial/getting-started/{preferredUI}/prepare-env",next:"3.xx.xx/tutorial/getting-started/{preferredUI}/generate-crud-pages"}},p=void 0,s={unversionedId:"tutorial/getting-started/chakra-ui/create-project",id:"version-3.xx.xx/tutorial/getting-started/chakra-ui/create-project",title:"3. Create your refine project",description:"Launch the refine CLI setup",source:"@site/versioned_docs/version-3.xx.xx/tutorial/1-getting-started/chakra-ui/2-create-project.md",sourceDirName:"tutorial/1-getting-started/chakra-ui",slug:"/tutorial/getting-started/chakra-ui/create-project",permalink:"/docs/3.xx.xx/tutorial/getting-started/chakra-ui/create-project",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/tutorial/1-getting-started/chakra-ui/2-create-project.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Ali Emir \u015een",lastUpdatedAt:1714999131,formattedLastUpdatedAt:"May 6, 2024",sidebarPosition:2,frontMatter:{id:"create-project",title:"3. Create your refine project",tutorial:{prev:"3.xx.xx/tutorial/getting-started/{preferredUI}/prepare-env",next:"3.xx.xx/tutorial/getting-started/{preferredUI}/generate-crud-pages"}}},d={},y=[{value:"Launch the refine CLI setup",id:"launch-the-refine-cli-setup",level:2},{value:"Open your project in VS Code",id:"open-your-project-in-vs-code",level:3},{value:"Running the dev server",id:"running-the-dev-server",level:3},{value:"Viewing a preview of your app",id:"viewing-a-preview-of-your-app",level:3}],f=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.yg)("div",t)},g=f("DocThumbsUpDownFeedbackWidget"),m=f("CreateRefineAppCommand"),b=f("Checklist"),h=f("ChecklistItem"),v={toc:y},w="wrapper";function O(e){var{components:t}=e,r=u(e,["components"]);return(0,n.yg)(w,l(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){i(e,t,r[t])}))}return e}({},v,r),{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h2",{id:"launch-the-refine-cli-setup"},"Launch the refine CLI setup"),(0,n.yg)(g,{id:"launch-the-refine-cli-setup",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("p",null,"The easiest way to create a new project is to use the ",(0,n.yg)("strong",{parentName:"p"},"refine CLI"),". This tool will help you get started quickly by generating a new project with a basic configuration and a folder structure that follows best practices."),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},"Launch your terminal and type the following command using your preferred package manager:")),(0,n.yg)(m,{args:"-o refine-chakra-ui tutorial",mdxType:"CreateRefineAppCommand"}),(0,n.yg)("ol",{start:2},(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Confirm ",(0,n.yg)("inlineCode",{parentName:"p"},"y")," to installation of ",(0,n.yg)("inlineCode",{parentName:"p"},"create-refine-app"))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"The ",(0,n.yg)("inlineCode",{parentName:"p"},"-o refine-chakra-ui")," flag in the command above tells the CLI to install the project with the ",(0,n.yg)("inlineCode",{parentName:"p"},"refine-chakra-ui")," preset. This preset selects some options for you in accordance with this tutorial."),(0,n.yg)("blockquote",{parentName:"li"},(0,n.yg)("p",{parentName:"blockquote"},"We use a preset here to sync the tutorial content with the code. Outside of the tutorial, you can skip this flag and select your own options."))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"The CLI will ask if you agree to share your selection anonymously with the ",(0,n.yg)("strong",{parentName:"p"},"refine")," team. You can choose whatever you prefer."))),(0,n.yg)("p",null,"Once the installation wizard is finished, you can close this terminal window and open VS Code to continue your journey.")),(0,n.yg)("h3",{id:"open-your-project-in-vs-code"},"Open your project in VS Code"),(0,n.yg)(g,{id:"open-your-project-in-vs-code",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Open Visual Studio Code and select the directory that was generated during your setup process.")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Make sure the terminal is open and ready to run commands. You can open it by pressing ",(0,n.yg)("inlineCode",{parentName:"p"},"Ctrl + J"),"(Windows) or ",(0,n.yg)("inlineCode",{parentName:"p"},"Cmd \u2318 + J"),"(macOS)."))),(0,n.yg)("p",null,"For the rest of this tutorial, you can use the terminal within VS Code instead of your computer's terminal.")),(0,n.yg)("h3",{id:"running-the-dev-server"},"Running the dev server"),(0,n.yg)(g,{id:"running-the-dev-server",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("p",null,"To preview your project as a web page while you work on it, the project must be running in development (dev) mode."),(0,n.yg)("h4",null,"Start the dev server"),(0,n.yg)("p",null,"To start the dev server, run the following command in your terminal:"),(0,n.yg)(a.A,{defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"pnpm",value:"pnpm"},{label:"yarn",value:"yarn"}],mdxType:"Tabs"},(0,n.yg)(o.A,{value:"npm",mdxType:"TabItem"},(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-bash"},"npm run dev\n"))),(0,n.yg)(o.A,{value:"pnpm",mdxType:"TabItem"},(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-bash"},"pnpm run dev\n"))),(0,n.yg)(o.A,{value:"yarn",mdxType:"TabItem"},(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-bash"},"yarn run dev\n")))),(0,n.yg)("p",null,"You should see confirmation in the terminal that the ",(0,n.yg)("strong",{parentName:"p"},"refine")," app is running in dev mode.")),(0,n.yg)("h3",{id:"viewing-a-preview-of-your-app"},"Viewing a preview of your app"),(0,n.yg)(g,{id:"viewing-a-preview-of-your-app",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("p",null,"Your project files contain all the code you need to run your website. To see a preview of your website in the browser:"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Click on the ",(0,n.yg)("a",{href:"http://localhost:3000",rel:"noopener noreferrer nofollow"},"localhost:3000")," link in the terminal. This will open a new browser tab with your app running in dev mode.")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"You will be redirected to the welcome page as we have not added any pages yet."),(0,n.yg)("p",{parentName:"li"},"(",(0,n.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/tutorial/getting-started/chakra-ui/generate-crud-pages"},"Next section")," will guide you through adding pages to your app.)"))),(0,n.yg)("p",null,"Here's what you should see:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live previewOnly previewHeight=450px url=http://localhost:3000",live:!0,previewOnly:!0,previewHeight:"450px",url:"http://localhost:3000"},'setInitialRoutes(["/"]);\n\nimport { Refine } from "@pankod/refine-core";\nimport routerProvider from "@pankod/refine-react-router-v6";\nimport dataProvider from "@pankod/refine-simple-rest";\nimport {\n  ChakraProvider,\n  ErrorComponent,\n  Layout,\n  refineTheme,\n  ReadyPage,\n  useNotificationProvider,\n} from "@pankod/refine-chakra-ui";\n\nconst App = () => {\n  return (\n    <ChakraProvider theme={refineTheme}>\n      <Refine\n        notificationProvider={notificationProvider()}\n        routerProvider={routerProvider}\n        dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n        Layout={Layout}\n        ReadyPage={ReadyPage}\n        catchAll={<ErrorComponent />}\n      />\n    </ChakraProvider>\n  );\n};\n\nrender(<App />);\n')),(0,n.yg)(b,{mdxType:"Checklist"},(0,n.yg)(h,{id:"getting-started-chakra",mdxType:"ChecklistItem"},"I understood how to create a new project."),(0,n.yg)(h,{id:"getting-started-chakra-2",mdxType:"ChecklistItem"},"I run the dev server and previewed my app."))))}O.isMDXComponent=!0}}]);