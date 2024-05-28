"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[35130],{58860:(e,t,n)=>{n.d(t,{xA:()=>d,yg:()=>g});var a=n(37953);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,g=u["".concat(l,".").concat(m)]||u[m]||c[m]||o;return n?a.createElement(g,i(i({ref:t},d),{},{components:n})):a.createElement(g,i({ref:t},d))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[u]="string"==typeof e?e:r,i[1]=p;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},51778:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>N,frontMatter:()=>p,metadata:()=>s,toc:()=>u});n(37953);var a=n(58860);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const p={title:"useImport",description:"useImport hook API references of @refinedev/core"},l=void 0,s={unversionedId:"core/hooks/utilities/use-import/index",id:"core/hooks/utilities/use-import/index",title:"useImport",description:"useImport hook API references of @refinedev/core",source:"@site/docs/core/hooks/utilities/use-import/index.md",sourceDirName:"core/hooks/utilities/use-import",slug:"/core/hooks/utilities/use-import/",permalink:"/docs/core/hooks/utilities/use-import/",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/core/hooks/utilities/use-import/index.md",tags:[],version:"current",lastUpdatedBy:"Necati \xd6zmen",lastUpdatedAt:1716879465,formattedLastUpdatedAt:"May 28, 2024",frontMatter:{title:"useImport",description:"useImport hook API references of @refinedev/core"},sidebar:"mainSidebar",previous:{title:"useBreadcrumb",permalink:"/docs/core/hooks/utilities/use-breadcrumb/"},next:{title:"useExport",permalink:"/docs/core/hooks/utilities/use-export/"}},d={},u=[{value:"Usage",id:"usage",level:2},{value:"Properties",id:"properties",level:2},{value:"resource",id:"resource",level:3},{value:"mapData",id:"mapdata",level:3},{value:"paparseOptions",id:"paparseoptions",level:3},{value:"batchSize",id:"batchsize",level:3},{value:"onFinish",id:"onfinish",level:3},{value:"meta",id:"meta",level:3},{value:"onProgress",id:"onprogress",level:3},{value:"dataProviderName",id:"dataprovidername",level:3},{value:"<del>resourceName</del> <PropTag deprecated />",id:"resourcename-",level:3},{value:"Return Values",id:"return-values",level:2},{value:"inputProps",id:"inputprops",level:3},{value:"type",id:"type",level:4},{value:"accept",id:"accept",level:4},{value:"onChange",id:"onchange",level:4},{value:"handleChange",id:"handlechange",level:3},{value:"isLoading",id:"isloading",level:3},{value:"mutationResult",id:"mutationresult",level:3},{value:"FAQ",id:"faq",level:2},{value:"Handling Relational Data",id:"handling-relational-data",level:3},{value:"API Reference",id:"api-reference",level:2},{value:"Properties",id:"properties-1",level:3},{value:"Return Values",id:"return-values-1",level:3},{value:"Type Parameters",id:"type-parameters",level:3},{value:"Example",id:"example",level:2}],c=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.yg)("div",t)},m=c("DocThumbsUpDownFeedbackWidget"),g=c("PropTag"),y=c("PropsTable"),h=c("CodeSandboxExample"),f={toc:u},b="wrapper";function N(e){var{components:t}=e,n=i(e,["components"]);return(0,a.yg)(b,o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){r(e,t,n[t])}))}return e}({},f,n),{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"useImport")," hook allows you to import data from a ",(0,a.yg)("inlineCode",{parentName:"p"},"CSV")," file. For each row in the file, it calls the ",(0,a.yg)("inlineCode",{parentName:"p"},"create")," or ",(0,a.yg)("inlineCode",{parentName:"p"},"createMany")," method of your data provider according to your configuration."),(0,a.yg)("p",null,"Internally, it uses ",(0,a.yg)("a",{parentName:"p",href:"https://www.papaparse.com/"},"Papa Parse")," to parse the file contents."),(0,a.yg)("h2",{id:"usage"},"Usage"),(0,a.yg)(m,{id:"usage",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("p",null,"Here is a basic usage example of the ",(0,a.yg)("inlineCode",{parentName:"p"},"useImport")," hook:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'import { useImport } from "@refinedev/core";\n\ninterface IPostFile {\n  title: string;\n  categoryId: string;\n}\n\nexport const PostList: React.FC = () => {\n  const { inputProps } = useImport<IPostFile>();\n\n  return <input {...inputProps} />;\n};\n'))),(0,a.yg)("h2",{id:"properties"},"Properties"),(0,a.yg)("h3",{id:"resource"},"resource"),(0,a.yg)(m,{id:"resource",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("p",null,"Determines which resource is passed to the ",(0,a.yg)("inlineCode",{parentName:"p"},"create")," or ",(0,a.yg)("inlineCode",{parentName:"p"},"createMany")," method of your data provider. By default, it reads the resource name from the current route."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts"},'useImport({\n  resource: "posts",\n});\n')),(0,a.yg)("p",null,"If you have multiple resources with the same name, you can pass the ",(0,a.yg)("inlineCode",{parentName:"p"},"identifier")," instead of the ",(0,a.yg)("inlineCode",{parentName:"p"},"name")," of the resource. It will only be used as the main matching key for the resource, data provider methods will still work with the ",(0,a.yg)("inlineCode",{parentName:"p"},"name")," of the resource defined in the ",(0,a.yg)("inlineCode",{parentName:"p"},"<Refine/>")," component."),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"For more information, refer to the ",(0,a.yg)("a",{parentName:"p",href:"/docs/core/refine-component#identifier"},(0,a.yg)("inlineCode",{parentName:"a"},"identifier")," of the ",(0,a.yg)("inlineCode",{parentName:"a"},"<Refine/>")," component documentation ","\u2192")))),(0,a.yg)("h3",{id:"mapdata"},"mapData"),(0,a.yg)(m,{id:"mapdata",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("p",null,"If you want to map the data before sending it to a data provider method, you can use the ",(0,a.yg)("inlineCode",{parentName:"p"},"mapData")," property."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts"},"useImport({\n  mapData: (data) => ({\n    ...data,\n    category: {\n      id: data.categoryId,\n    },\n  }),\n});\n"))),(0,a.yg)("h3",{id:"paparseoptions"},"paparseOptions"),(0,a.yg)(m,{id:"paparseoptions",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("p",null,"You can pass any Papa Parse ",(0,a.yg)("a",{parentName:"p",href:"https://www.papaparse.com/docs#config"},"options")," to the ",(0,a.yg)("inlineCode",{parentName:"p"},"paparseOptions")," property."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts"},"useImport({\n  paparseOptions: {\n    header: true,\n  },\n});\n"))),(0,a.yg)("h3",{id:"batchsize"},"batchSize"),(0,a.yg)(m,{id:"batchsize",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("p",null,"If you want to send the data in batches, you can use the ",(0,a.yg)("inlineCode",{parentName:"p"},"batchSize")," property. When the ",(0,a.yg)("inlineCode",{parentName:"p"},"batchSize")," is 1, it calls the ",(0,a.yg)("inlineCode",{parentName:"p"},"create")," method of your data provider for each row in the file. When the ",(0,a.yg)("inlineCode",{parentName:"p"},"batchSize")," is greater than 1, it calls the ",(0,a.yg)("inlineCode",{parentName:"p"},"createMany")," method of your data provider for each batch. By default, it is set to ",(0,a.yg)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER"},(0,a.yg)("inlineCode",{parentName:"a"},"Number.MAX_SAFE_INTEGER"))),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts"},"useImport({\n  batchSize: 1,\n});\n"))),(0,a.yg)("h3",{id:"onfinish"},"onFinish"),(0,a.yg)(m,{id:"onfinish",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("p",null,"If you want to do something after the import is finished, you can use the ",(0,a.yg)("inlineCode",{parentName:"p"},"onFinish")," property. It returns an object with two properties: ",(0,a.yg)("inlineCode",{parentName:"p"},"succeeded")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"errored"),", which contain the responses of the successful and failed requests."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts"},"useImport({\n  onFinish: (result) => {\n    // success requests response\n    result.succeeded.forEach((item) => {\n      console.log(item);\n    });\n\n    // failed requests response\n    result.errored.forEach((item) => {\n      console.log(item);\n    });\n  },\n});\n"))),(0,a.yg)("h3",{id:"meta"},"meta"),(0,a.yg)(m,{id:"meta",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("p",null,"If you want to send additional data to the ",(0,a.yg)("inlineCode",{parentName:"p"},"create")," or ",(0,a.yg)("inlineCode",{parentName:"p"},"createMany")," method of your data provider, you can use the ",(0,a.yg)("inlineCode",{parentName:"p"},"meta")," property."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts"},'useImport({\n  meta: {\n    foo: "bar",\n  },\n});\n'))),(0,a.yg)("h3",{id:"onprogress"},"onProgress"),(0,a.yg)(m,{id:"onprogress",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("p",null,"A callback function that is called when the import progress changes. It returns an object with two properties: ",(0,a.yg)("inlineCode",{parentName:"p"},"totalAmount")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"processedAmount")," which contain the total amount of rows and the processed amount of rows."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts"},"useImport({\n  onProgress: ({ totalAmount, processedAmount }) => {\n    // progress percentage\n    console.log((processedAmount / totalAmount) * 100);\n  },\n});\n"))),(0,a.yg)("h3",{id:"dataprovidername"},"dataProviderName"),(0,a.yg)(m,{id:"dataprovidername",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("p",null,"If there is more than one ",(0,a.yg)("inlineCode",{parentName:"p"},"dataProvider"),", you can specify which one to use by passing the ",(0,a.yg)("inlineCode",{parentName:"p"},"dataProviderName")," prop. It is useful when you have a different data provider for different resources."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'useImport({\n  dataProviderName: "second-data-provider",\n});\n'))),(0,a.yg)("h3",{id:"resourcename-"},(0,a.yg)("del",{parentName:"h3"},"resourceName")," ",(0,a.yg)(g,{deprecated:!0,mdxType:"PropTag"})),(0,a.yg)(m,{id:"resourcename-",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("p",null,"Use ",(0,a.yg)("inlineCode",{parentName:"p"},"resource")," instead.")),(0,a.yg)("h2",{id:"return-values"},"Return Values"),(0,a.yg)("h3",{id:"inputprops"},"inputProps"),(0,a.yg)(m,{id:"inputprops",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"inputProps")," is an object that contains the props of the ",(0,a.yg)("inlineCode",{parentName:"p"},"input")," element. You can spread it to the ",(0,a.yg)("inlineCode",{parentName:"p"},"input")," element."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},"const { inputProps } = useImport();\n\nreturn <input {...inputProps} />;\n"))),(0,a.yg)("h4",{id:"type"},"type"),(0,a.yg)(m,{id:"type",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("p",null,"It is set to ",(0,a.yg)("inlineCode",{parentName:"p"},"file")," by default.")),(0,a.yg)("h4",{id:"accept"},"accept"),(0,a.yg)(m,{id:"accept",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("p",null,"It is set to ",(0,a.yg)("inlineCode",{parentName:"p"},".csv")," by default.")),(0,a.yg)("h4",{id:"onchange"},"onChange"),(0,a.yg)(m,{id:"onchange",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("p",null,"It handles the file change event. If the file exists, it will call the ",(0,a.yg)("inlineCode",{parentName:"p"},"handleChange")," method with the file as an argument.")),(0,a.yg)("h3",{id:"handlechange"},"handleChange"),(0,a.yg)(m,{id:"handlechange",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"handleChange")," is a function that handles the file change event. It accepts an object with a ",(0,a.yg)("inlineCode",{parentName:"p"},"file")," property which is the file that is selected by the user."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'const { handleChange } = useImport();\n\nreturn (\n  <input\n    type="file"\n    onChange={(event) => {\n      if (event.target.files) {\n        handleChange({\n          file: event.target.files[0],\n        });\n      }\n    }}\n  />\n);\n'))),(0,a.yg)("h3",{id:"isloading"},"isLoading"),(0,a.yg)(m,{id:"isloading",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"isLoading")," is a boolean that indicates whether the import is in progress or not.")),(0,a.yg)("h3",{id:"mutationresult"},"mutationResult"),(0,a.yg)(m,{id:"mutationresult",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("p",null,"Returns the result of either the ",(0,a.yg)("a",{parentName:"p",href:"/docs/data/hooks/use-create"},(0,a.yg)("inlineCode",{parentName:"a"},"useCreate"))," or the ",(0,a.yg)("a",{parentName:"p",href:"/docs/data/hooks/use-create"},(0,a.yg)("inlineCode",{parentName:"a"},"useCreateMany"))," hook.")),(0,a.yg)("h2",{id:"faq"},"FAQ"),(0,a.yg)("h3",{id:"handling-relational-data"},"Handling Relational Data"),(0,a.yg)(m,{id:"handling-relational-data",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("p",null,"Sometimes you need to process your parsed ",(0,a.yg)("inlineCode",{parentName:"p"},"CSV")," data for certain cases, such as when your data includes relational data and references to other data or when your backend API requires a specific data format. To handle this, you can use the ",(0,a.yg)("inlineCode",{parentName:"p"},"mapData")," option in ",(0,a.yg)("inlineCode",{parentName:"p"},"useImport")," to customize the process."),(0,a.yg)("p",null,"For example, the ",(0,a.yg)("inlineCode",{parentName:"p"},"CSV")," file is as follows:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-csv",metastring:'title="dummy.csv"',title:'"dummy.csv"'},'"title","content","status","categoryId","userId"\n"dummy title 1","dummy content 1","rejected","3","8"\n"dummy title 2","dummy content 2","draft","44","8"\n"dummy title 3","cummy content 3","published","41","10"\n')),(0,a.yg)("p",null,"Since the ",(0,a.yg)("inlineCode",{parentName:"p"},"user")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"category")," are relational fields, we store only their ",(0,a.yg)("inlineCode",{parentName:"p"},"id")," fields in the exported file as ",(0,a.yg)("inlineCode",{parentName:"p"},"userId")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"categoryId")," respectively. To create resources from this file, we need to map the data back to the required format of the backend API. To do this, we use the mapData option in ",(0,a.yg)("inlineCode",{parentName:"p"},"useImport"),". Here's an example:"),(0,a.yg)("p",null,"When creating these resources back, we should map it back to our backend API's required format. ",(0,a.yg)("inlineCode",{parentName:"p"},"mapData")," option allows us to do this. Here is an example:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts"},"useImport<IPostFile>({\n  mapData: (item) => {\n    return {\n      title: item.title,\n      content: item.content,\n      status: item.status,\n      category: {\n        id: item.categoryId,\n      },\n      user: {\n        id: item.userId,\n      },\n    };\n  },\n});\n\ninterface IPostFile {\n  title: string;\n  status: string;\n  content: string;\n  categoryId: string;\n  userId: string;\n}\n")),(0,a.yg)("p",null,"With this code, the parsed data will be mapped to conform to the API requirements.")),(0,a.yg)("h2",{id:"api-reference"},"API Reference"),(0,a.yg)("h3",{id:"properties-1"},"Properties"),(0,a.yg)(m,{id:"properties-1",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)(y,{module:"@refinedev/core/useImport",mdxType:"PropsTable"})),(0,a.yg)("h3",{id:"return-values-1"},"Return Values"),(0,a.yg)(m,{id:"return-values-1",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Property"),(0,a.yg)("th",{parentName:"tr",align:null},"Description"),(0,a.yg)("th",{parentName:"tr",align:null},"Type"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"inputProps"),(0,a.yg)("td",{parentName:"tr",align:null},"Props to that you can pass ",(0,a.yg)("inlineCode",{parentName:"td"},"<input />")," element props."),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"/docs/core/interface-references#useimportinputpropstype"},(0,a.yg)("inlineCode",{parentName:"a"},"UseImportInputPropsType")))),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"handleChange"),(0,a.yg)("td",{parentName:"tr",align:null},"Props to handle ",(0,a.yg)("inlineCode",{parentName:"td"},'<input type="file">')," element ",(0,a.yg)("inlineCode",{parentName:"td"},"onChange")),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"function"))),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"isLoading"),(0,a.yg)("td",{parentName:"tr",align:null},"It can be used to handle the ",(0,a.yg)("inlineCode",{parentName:"td"},"loading")," status for the Import operation"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"boolean"))),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"mutationResult"),(0,a.yg)("td",{parentName:"tr",align:null},"Result of the mutation/mutations of creating imported resources"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"https://tanstack.com/query/latest/docs/react/reference/useMutation"},(0,a.yg)("inlineCode",{parentName:"a"},"UseMutationResult<{ data: TData }, TError, { resource: string; values: TVariables; }, unknown>")),") ","|"," ",(0,a.yg)("a",{parentName:"td",href:"https://tanstack.com/query/latest/docs/react/reference/useMutation"},(0,a.yg)("inlineCode",{parentName:"a"},"UseMutationResult<{ data: TData[]},TError, { resource: string; values: TVariables[]; }, unknown>")),")"))))),(0,a.yg)("h3",{id:"type-parameters"},"Type Parameters"),(0,a.yg)(m,{id:"type-parameters",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Property"),(0,a.yg)("th",{parentName:"tr",align:null},"Description"),(0,a.yg)("th",{parentName:"tr",align:null},"Default"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"TItem"),(0,a.yg)("td",{parentName:"tr",align:null},"Interface of parsed csv data"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"any"))),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"TData"),(0,a.yg)("td",{parentName:"tr",align:null},"Result type of the data query type that extends ",(0,a.yg)("a",{parentName:"td",href:"/docs/core/interface-references#baserecord"},(0,a.yg)("inlineCode",{parentName:"a"},"BaseRecord"))),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"/docs/core/interface-references#baserecord"},(0,a.yg)("inlineCode",{parentName:"a"},"BaseRecord")))),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"TError"),(0,a.yg)("td",{parentName:"tr",align:null},"Custom error object that extends ",(0,a.yg)("a",{parentName:"td",href:"/docs/core/interface-references#httperror"},(0,a.yg)("inlineCode",{parentName:"a"},"HttpError"))),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"/docs/core/interface-references#httperror"},(0,a.yg)("inlineCode",{parentName:"a"},"HttpError")))),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"TVariables"),(0,a.yg)("td",{parentName:"tr",align:null},"Values for mutation function"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"any")))))),(0,a.yg)("h2",{id:"example"},"Example"),(0,a.yg)(m,{id:"example",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)(h,{path:"core-use-import",mdxType:"CodeSandboxExample"})))}N.isMDXComponent=!0}}]);