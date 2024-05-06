"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[8510],{2359:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>v,frontMatter:()=>d,metadata:()=>p,toc:()=>m});a(96540);var t=a(15680),r=a(5063),o=a(15947);function i(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function s(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})),e}function l(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const d={id:"faq",title:"FAQ"},c=void 0,p={unversionedId:"faq",id:"version-3.xx.xx/faq",title:"FAQ",description:"How can I change the form data before submitting it to the API?",source:"@site/versioned_docs/version-3.xx.xx/faq.md",sourceDirName:".",slug:"/faq",permalink:"/docs/3.xx.xx/faq",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/faq.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Ali Emir \u015een",lastUpdatedAt:1714999131,formattedLastUpdatedAt:"May 6, 2024",frontMatter:{id:"faq",title:"FAQ"},sidebar:"someSidebar",previous:{title:"Comparison | Refine vs React-Admin vs AdminBro vs Retool vs Redwood",permalink:"/docs/3.xx.xx/comparison"},next:{title:"Contributing",permalink:"/docs/3.xx.xx/contributing"}},u={},m=[{value:"How can I change the form data before submitting it to the API?",id:"how-can-i-change-the-form-data-before-submitting-it-to-the-api",level:2},{value:"How can I refetch data?",id:"how-can-i-refetch-data",level:2},{value:"How can I request an API with nested route?",id:"how-can-i-request-an-api-with-nested-route",level:2},{value:"How can I ensure a query is only run after a certain variable is available and not on load?",id:"how-can-i-ensure-a-query-is-only-run-after-a-certain-variable-is-available-and-not-on-load",level:2},{value:"Can I work with JavaScript?",id:"can-i-work-with-javascript",level:2},{value:"How I can override specific function of Data Providers?",id:"how-i-can-override-specific-function-of-data-providers",level:2},{value:"Why are API calls triggering twice",id:"why-are-api-calls-triggering-twice",level:2}],y=(g="DocThumbsUpDownFeedbackWidget",function(e){return console.warn("Component "+g+" was not imported, exported, or provided by MDXProvider as global scope"),(0,t.yg)("div",e)});var g;const f={toc:m},h="wrapper";function v(e){var{components:n}=e,a=l(e,["components"]);return(0,t.yg)(h,s(function(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{},t=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),t.forEach((function(n){i(e,n,a[n])}))}return e}({},f,a),{components:n,mdxType:"MDXLayout"}),(0,t.yg)("h2",{id:"how-can-i-change-the-form-data-before-submitting-it-to-the-api"},"How can I change the form data before submitting it to the API?"),(0,t.yg)(y,{id:"how-can-i-change-the-form-data-before-submitting-it-to-the-api",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,t.yg)("p",null,"You may need to modify the form data before it is sent to the API."),(0,t.yg)("p",null,"For example, Let's send the values we received from the user in two separate inputs, ",(0,t.yg)("inlineCode",{parentName:"p"},"name")," and ",(0,t.yg)("inlineCode",{parentName:"p"},"surname"),", to the API as ",(0,t.yg)("inlineCode",{parentName:"p"},"fullName"),"."),(0,t.yg)(r.A,{defaultValue:"core",values:[{label:"Core Form",value:"core"},{label:"Ant Design Form",value:"antd"},{label:"React Hook Form",value:"react-hook-form"}],mdxType:"Tabs"},(0,t.yg)(o.A,{value:"core",mdxType:"TabItem"},(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-tsx"},'import React, { useState } from "react";\nimport { useForm } from "@pankod/refine-core";\n\nexport const UserCreate: React.FC = () => {\n  const [name, setName] = useState();\n  const [surname, setSurname] = useState();\n\n  const { onFinish } = useForm();\n\n  const onSubmit = (e) => {\n    e.preventDefault();\n    const fullName = `${name} ${surname}`;\n    onFinish({\n      fullName: fullName,\n      name,\n      surname,\n    });\n  };\n\n  return (\n    <form onSubmit={onSubmit}>\n      <input onChange={(e) => setName(e.target.value)} />\n      <input onChange={(e) => setSurname(e.target.value)} />\n      <button type="submit">Submit</button>\n    </form>\n  );\n};\n'))),(0,t.yg)(o.A,{value:"antd",mdxType:"TabItem"},(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-tsx"},'import React from "react";\nimport { useForm, Form, Input } from "@pankod/refine-antd";\n\nexport const UserCreate: React.FC = () => {\n  const { formProps } = useForm();\n\n  return (\n    <Form\n      {...formProps}\n      onFinish={(values) => {\n        const { name, surname } = values;\n        const fullName = `${name} ${surname}`;\n\n        return (\n          formProps.onFinish &&\n          formProps.onFinish({\n            ...values,\n            fullName,\n          })\n        );\n      }}\n    >\n      <Form.Item label="Name" name="name">\n        <Input />\n      </Form.Item>\n      <Form.Item label="Surname" name="surname">\n        <Input />\n      </Form.Item>\n    </Form>\n  );\n};\n'))),(0,t.yg)(o.A,{value:"react-hook-form",mdxType:"TabItem"},(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-tsx"},'import React from "react";\nimport { useForm } from "@pankod/refine-react-hook-form";\n\nexport const UserCreate: React.FC = () => {\n  const {\n    refineCore: { onFinish, formLoading },\n    register,\n    handleSubmit,\n  } = useForm();\n\n  const handleSubmitPostCreate = (values) => {\n    const { name, surname } = values;\n    const fullName = `${name} ${surname}`;\n    onFinish({\n      ...value,\n      fullName,\n    });\n  };\n\n  return (\n    <form onSubmit={handleSubmit(handleSubmitPostCreate)}>\n      <input {...register("name")} />\n      <input {...register("surname")} />\n    </form>\n  );\n};\n'))))),(0,t.yg)("h2",{id:"how-can-i-refetch-data"},"How can I refetch data?"),(0,t.yg)(y,{id:"how-can-i-refetch-data",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Refine")," automatically invalidates the affected resources after mutations. However, in some cases you may want to refetch manually."),(0,t.yg)(r.A,{defaultValue:"refetch",values:[{label:"React Query Refetch",value:"refetch"},{label:"useInvalidate Hook",value:"useinvalidate"}],mdxType:"Tabs"},(0,t.yg)(o.A,{value:"refetch",mdxType:"TabItem"},(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-tsx"},'import { useTable, useForm, useShow } from "@pankod/refine-core";\n\n// All "data" related hooks provided by Refine can use queryResult\' refetch function\nconst { tableQueryResult: { refetch } } = useTable();\nconst { queryResult: { refetch } } = useForm();\n...\n...\nconst { queryResult: { refetch } } = useShow();\n...\n...\n'))),(0,t.yg)(o.A,{value:"useinvalidate",mdxType:"TabItem"},(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-tsx"},'import { useInvalidate } from "@pankod/refine-core";\n\nconst invalidate = useInvalidate();\n\n// To invalidate the list and many states of the Posts resource\ninvalidate({\n  resource: "posts",\n  invalidates: ["list", "many"],\n});\n\n// To invalidate the state of a Posts with an id of 1\ninvalidate({\n  resource: "posts",\n  invalidates: ["detail"],\n  id: 1,\n});\n\n// To invalidate the list and many states of the Posts resource of the dataProvider named "second-data-provider"\ninvalidate({\n  resource: "posts",\n  dataProviderName: "second-data-provider",\n  invalidates: ["list"],\n});\n\n// To invalidate all states of dataprovider named "second-data-provider"\ninvalidate({\n  dataProviderName: "second-data-provider",\n  invalidates: ["all"],\n});\n')),(0,t.yg)("p",null,(0,t.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/hooks/invalidate/useInvalidate"},"Refer to the ",(0,t.yg)("strong",{parentName:"a"},"refine")," useInvalidate hook documentation for more information. \u2192"))))),(0,t.yg)("h2",{id:"how-can-i-request-an-api-with-nested-route"},"How can I request an API with nested route?"),(0,t.yg)(y,{id:"how-can-i-request-an-api-with-nested-route",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Refine"),"'s way of doing this is with the ",(0,t.yg)("inlineCode",{parentName:"p"},"resource")," property on all data hooks. You can think of the ",(0,t.yg)("inlineCode",{parentName:"p"},"resource")," property as the URL."),(0,t.yg)("p",null,"For example, If you want to make a request of the URL ",(0,t.yg)("inlineCode",{parentName:"p"},"/user/1/posts"),"."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-tsx"},'import { useTable, useOne } from "@pankod/refine-core";\n\nuseTable({\n  resource: "/users/1/posts",\n});\n'))),(0,t.yg)("h2",{id:"how-can-i-ensure-a-query-is-only-run-after-a-certain-variable-is-available-and-not-on-load"},"How can I ensure a query is only run after a certain variable is available and not on load?"),(0,t.yg)(y,{id:"how-can-i-ensure-a-query-is-only-run-after-a-certain-variable-is-available-and-not-on-load",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,t.yg)("p",null,"Note that ",(0,t.yg)("inlineCode",{parentName:"p"},"data")," related hooks (",(0,t.yg)("inlineCode",{parentName:"p"},"useMany"),", ",(0,t.yg)("inlineCode",{parentName:"p"},"useOne"),", etc.) can also accept all ",(0,t.yg)("inlineCode",{parentName:"p"},"useQuery")," options, which allows you to implement dependent queries whereby a query is only run after a certain data is available. This is particularly useful if you want ",(0,t.yg)("inlineCode",{parentName:"p"},"useMany")," to only run after a certain data is available and not on load."),(0,t.yg)("p",null,(0,t.yg)("a",{parentName:"p",href:"https://react-query.tanstack.com/guides/dependent-queries"},"Refer to react-query docs on ",(0,t.yg)("strong",{parentName:"a"},"dependent queries")," for more information \u2192 ")),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"Suppose you want this query to run after ",(0,t.yg)("inlineCode",{parentName:"li"},"categoryIds")," is fetched by a preceding query, you can set ",(0,t.yg)("inlineCode",{parentName:"li"},"enabled")," to ",(0,t.yg)("inlineCode",{parentName:"li"},"categoryIds.length > 0"),". This will ensure that ",(0,t.yg)("inlineCode",{parentName:"li"},"useMany")," is only run after ",(0,t.yg)("inlineCode",{parentName:"li"},"categoryIds")," is fetched.")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-tsx"},'useMany({\n  resource: "categories",\n  ids: categoryIds,\n  // highlight-next-line\n  queryOptions: { enabled: categoryIds.length > 0 },\n});\n'))),(0,t.yg)("h2",{id:"can-i-work-with-javascript"},"Can I work with JavaScript?"),(0,t.yg)(y,{id:"can-i-work-with-javascript",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Yes!")," You can work with JavaScript!"),(0,t.yg)("p",null,(0,t.yg)("a",{parentName:"p",href:"https://github.com/refinedev/refine/tree/v3/examples/with-javascript"},"Refer to ",(0,t.yg)("strong",{parentName:"a"},"Refine JavaScript")," example \u2192 "))),(0,t.yg)("h2",{id:"how-i-can-override-specific-function-of-data-providers"},"How I can override specific function of Data Providers?"),(0,t.yg)(y,{id:"how-i-can-override-specific-function-of-data-providers",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,t.yg)("p",null,"In some cases, you may need to override functions of Refine data providers. The simplest way to do this is to use the ",(0,t.yg)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax"},"Spread syntax")),(0,t.yg)("p",null,"For example, Let's override the ",(0,t.yg)("inlineCode",{parentName:"p"},"update")," function of the ",(0,t.yg)("a",{parentName:"p",href:"https://github.com/refinedev/refine/tree/v3/packages/simple-rest"},(0,t.yg)("inlineCode",{parentName:"a"},"@pankod/refine-simple-rest")),". ",(0,t.yg)("inlineCode",{parentName:"p"},"@pankod/refine-simple-rest")," uses the ",(0,t.yg)("inlineCode",{parentName:"p"},"PATCH")," HTTP method for ",(0,t.yg)("inlineCode",{parentName:"p"},"update"),", let's change it to ",(0,t.yg)("inlineCode",{parentName:"p"},"PUT")," without forking the whole data provider."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-tsx"},'import dataProvider from "@pankod/refine-simple-rest";\n\nconst simpleRestProvider = dataProvider("API_URL");\nconst myDataProvider = {\n  ...simpleRestProvider,\n  update: async ({ resource, id, variables }) => {\n    const url = `${apiUrl}/${resource}/${id}`;\n\n    const { data } = await httpClient.put(url, variables);\n\n    return {\n      data,\n    };\n  },\n};\n\n<Refine dataProvider={myDataProvider} />;\n')),(0,t.yg)("p",null,"What if we want to select ",(0,t.yg)("inlineCode",{parentName:"p"},"PUT")," or ",(0,t.yg)("inlineCode",{parentName:"p"},"PATCH")," on a request basis?"),(0,t.yg)("p",null,"\ud83d\udca5 We can use ",(0,t.yg)("inlineCode",{parentName:"p"},"metaData")," for this. Remember, ",(0,t.yg)("inlineCode",{parentName:"p"},"metaData")," can be used in all ",(0,t.yg)("inlineCode",{parentName:"p"},"data"),", ",(0,t.yg)("inlineCode",{parentName:"p"},"form")," and ",(0,t.yg)("inlineCode",{parentName:"p"},"table")," hooks"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-tsx"},'// PATCH Request\nuseUpdate({\n  resource: "this-is-patch",\n  id: 1,\n  variables: {\n    foo: "bar",\n  },\n  metaData: {\n    httpMethod: "patch",\n  },\n});\n\n// PUT Request\nuseUpdate({\n  resource: "this-is-put",\n  id: 1,\n  variables: {\n    foo: "bar",\n  },\n  metaData: {\n    httpMethod: "put",\n  },\n});\n\nconst simpleRestProvider = dataProvider("API_URL");\nconst myDataProvider = {\n  ...simpleRestProvider,\n  update: async ({ resource, id, variables, metaData }) => {\n    const method = metaData.httpMethod ?? "patch";\n\n    const url = `${apiUrl}/${resource}/${id}`;\n\n    const { data } = await httpClient[method](url, variables);\n\n    return {\n      data,\n    };\n  },\n};\n'))),(0,t.yg)("h2",{id:"why-are-api-calls-triggering-twice"},"Why are API calls triggering twice"),(0,t.yg)(y,{id:"why-are-api-calls-triggering-twice",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,t.yg)("p",null,"This is the expected behavior if you use ",(0,t.yg)("a",{parentName:"p",href:"https://beta.reactjs.org/reference/react/StrictMode"},(0,t.yg)("inlineCode",{parentName:"a"},"<React.StrictMode>")),". In this mode, React will render the components twice in development mode to identify unsafe life cycles, unexpected side effects, and legacy or deprecated APIs. It's used for highlighting possible problems."),(0,t.yg)("admonition",{title:"note",type:"caution"},(0,t.yg)("p",{parentName:"admonition"},(0,t.yg)("a",{parentName:"p",href:"https://beta.reactjs.org/reference/react/StrictMode"},(0,t.yg)("inlineCode",{parentName:"a"},"<React.StrictMode>"))," checks are run in development mode only; they do not impact the production build.")),(0,t.yg)("blockquote",null,(0,t.yg)("p",{parentName:"blockquote"},"Refer to ",(0,t.yg)("a",{parentName:"p",href:"https://beta.reactjs.org/reference/react/StrictMode"},(0,t.yg)("inlineCode",{parentName:"a"},"<React.StrictMode>")," documentation")," for more information. ","\u2192")),(0,t.yg)("blockquote",null,(0,t.yg)("p",{parentName:"blockquote"},"Refer to ",(0,t.yg)("a",{parentName:"p",href:"https://github.com/TanStack/query/issues/3633"},"TanStack Query issue")," for more information. ","\u2192"))))}v.isMDXComponent=!0}}]);