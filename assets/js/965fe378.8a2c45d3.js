"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[37114],{58860:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>f});var r=n(37953);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=o,f=u["".concat(p,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},59437:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>y,frontMatter:()=>s,metadata:()=>l,toc:()=>u});n(37953);var r=n(58860);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const s={title:"Save",swizzle:!0},p=void 0,l={unversionedId:"ui-integrations/chakra-ui/components/buttons/save-button/index",id:"ui-integrations/chakra-ui/components/buttons/save-button/index",title:"Save",description:"` uses Chakra UI's ` component. It uses it for presantation purposes only. Some of the hooks that Refine has adds features to this button.",source:"@site/docs/ui-integrations/chakra-ui/components/buttons/save-button/index.md",sourceDirName:"ui-integrations/chakra-ui/components/buttons/save-button",slug:"/ui-integrations/chakra-ui/components/buttons/save-button/",permalink:"/docs/ui-integrations/chakra-ui/components/buttons/save-button/",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/ui-integrations/chakra-ui/components/buttons/save-button/index.md",tags:[],version:"current",lastUpdatedBy:"Alican Erdurmaz",lastUpdatedAt:1716547612,formattedLastUpdatedAt:"May 24, 2024",frontMatter:{title:"Save",swizzle:!0},sidebar:"mainSidebar",previous:{title:"Refresh",permalink:"/docs/ui-integrations/chakra-ui/components/buttons/refresh-button/"},next:{title:"Show",permalink:"/docs/ui-integrations/chakra-ui/components/buttons/show-button/"}},c={},u=[{value:"Usage",id:"usage",level:2},{value:"Properties",id:"properties",level:2},{value:"hideText",id:"hidetext",level:3},{value:"API Reference",id:"api-reference",level:2},{value:"Properties",id:"properties-1",level:3}],d=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.yg)("div",t)},m=d("DocThumbsUpDownFeedbackWidget"),f=d("PropsTable"),g={toc:u},h="wrapper";function y(e){var{components:t}=e,n=a(e,["components"]);return(0,r.yg)(h,i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){o(e,t,n[t])}))}return e}({},g,n),{components:t,mdxType:"MDXLayout"}),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live shared",live:!0,shared:!0},'const { default: sharedRouterProvider } = LegacyRefineReactRouterV6;\nconst { default: simpleRest } = RefineSimpleRest;\nsetRefineProps({\n  legacyRouterProvider: sharedRouterProvider,\n  dataProvider: simpleRest("https://api.fake-rest.refine.dev"),\n  Layout: RefineChakra.Layout,\n  Sider: () => null,\n  catchAll: <RefineChakra.ErrorComponent />,\n});\n\nconst Wrapper = ({ children }) => {\n  return (\n    <ChakraUI.ChakraProvider theme={RefineChakra.refineTheme}>\n      {children}\n    </ChakraUI.ChakraProvider>\n  );\n};\n')),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"<SaveButton>")," uses Chakra UI's ",(0,r.yg)("a",{parentName:"p",href:"https://chakra-ui.com/docs/components/button/usage"},(0,r.yg)("inlineCode",{parentName:"a"},"<Button>"))," component. It uses it for presantation purposes only. Some of the hooks that Refine has adds features to this button."),(0,r.yg)("admonition",{title:"Good to know",type:"simple"},(0,r.yg)("p",{parentName:"admonition"},"You can swizzle this component to customize it with the ",(0,r.yg)("a",{parentName:"p",href:"/docs/packages/list-of-packages"},(0,r.yg)("strong",{parentName:"a"},"Refine CLI")))),(0,r.yg)("h2",{id:"usage"},"Usage"),(0,r.yg)(m,{id:"usage",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,"For example, lets add logic to the ",(0,r.yg)("inlineCode",{parentName:"p"},"<SaveButton>")," component with the ",(0,r.yg)("inlineCode",{parentName:"p"},"saveButtonProps")," returned by the ",(0,r.yg)("a",{parentName:"p",href:"/docs/packages/list-of-packages"},(0,r.yg)("inlineCode",{parentName:"a"},"useForm"))," hook."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000/posts/edit/123 previewHeight=420px hideCode",live:!0,url:"http://localhost:3000/posts/edit/123",previewHeight:"420px",hideCode:!0},'setInitialRoutes(["/posts/edit/123"]);\nimport { Refine } from "@refinedev/core";\nimport { EditButton } from "@refinedev/chakra-ui";\n\n// visible-block-start\nimport { Edit } from "@refinedev/chakra-ui";\nimport {\n  FormControl,\n  FormErrorMessage,\n  FormLabel,\n  Input,\n  Select,\n} from "@chakra-ui/react";\nimport { useSelect } from "@refinedev/core";\nimport { useForm } from "@refinedev/react-hook-form";\n\nconst PostEdit: React.FC = () => {\n  const {\n    refineCore: { formLoading, queryResult },\n    // highlight-next-line\n    saveButtonProps,\n    register,\n    formState: { errors },\n    resetField,\n  } = useForm<IPost>();\n\n  const { options } = useSelect({\n    resource: "categories",\n    defaultValue: queryResult?.data?.data.category.id,\n    queryOptions: { enabled: !!queryResult?.data?.data.category.id },\n  });\n\n  useEffect(() => {\n    resetField("category.id");\n  }, [options]);\n\n  return (\n    // highlight-next-line\n    <Edit isLoading={formLoading} saveButtonProps={saveButtonProps}>\n      <FormControl mb="3" isInvalid={!!errors?.title}>\n        <FormLabel>Title</FormLabel>\n        <Input\n          id="title"\n          type="text"\n          {...register("title", { required: "Title is required" })}\n        />\n        <FormErrorMessage>{`${errors.title?.message}`}</FormErrorMessage>\n      </FormControl>\n      <FormControl mb="3" isInvalid={!!errors?.status}>\n        <FormLabel>Status</FormLabel>\n        <Select\n          id="content"\n          placeholder="Select Post Status"\n          {...register("status", {\n            required: "Status is required",\n          })}\n        >\n          <option>published</option>\n          <option>draft</option>\n          <option>rejected</option>\n        </Select>\n        <FormErrorMessage>{`${errors.status?.message}`}</FormErrorMessage>\n      </FormControl>\n      <FormControl mb="3" isInvalid={!!errors?.categoryId}>\n        <FormLabel>Category</FormLabel>\n        <Select\n          id="ca"\n          placeholder="Select Category"\n          {...register("category.id", {\n            required: true,\n          })}\n        >\n          {options?.map((option) => (\n            <option value={option.value} key={option.value}>\n              {option.label}\n            </option>\n          ))}\n        </Select>\n        <FormErrorMessage>{`${errors.categoryId?.message}`}</FormErrorMessage>\n      </FormControl>\n    </Edit>\n  );\n};\n// visible-block-end\n\nconst App = () => {\n  return (\n    <Refine\n      notificationProvider={RefineChakra.notificationProvider()}\n      resources={[\n        {\n          name: "posts",\n          edit: PostEdit,\n          list: () => (\n            <RefineChakra.VStack alignItems="flex-start">\n              <RefineChakra.Text>This page is empty.</RefineChakra.Text>\n              <EditButton colorScheme="black" recordItemId="123">\n                Edit Item 123\n              </EditButton>\n            </RefineChakra.VStack>\n          ),\n        },\n      ]}\n    />\n  );\n};\nrender(\n  <Wrapper>\n    <App />\n  </Wrapper>,\n);\n\ninterface ICategory {\n  id: number;\n  title: string;\n}\n\ninterface IPost {\n  id: number;\n  title: string;\n  status: "published" | "draft" | "rejected";\n  category: { id: number };\n}\n'))),(0,r.yg)("h2",{id:"properties"},"Properties"),(0,r.yg)("h3",{id:"hidetext"},"hideText"),(0,r.yg)(m,{id:"hidetext",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"hideText")," is used to show and not show the text of the button. When ",(0,r.yg)("inlineCode",{parentName:"p"},"true"),", only the button icon is visible."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000 previewHeight=200px",live:!0,url:"http://localhost:3000",previewHeight:"200px"},'setInitialRoutes(["/"]);\n\nimport { Refine } from "@refinedev/core";\n\n// visible-block-start\nimport { SaveButton } from "@refinedev/chakra-ui";\n\nconst MySaveComponent = () => {\n  return <SaveButton hideText />;\n};\n// visible-block-end\n\nconst App = () => {\n  return (\n    <Refine\n      resources={[\n        {\n          name: "posts",\n          list: MySaveComponent,\n        },\n      ]}\n    />\n  );\n};\n\nrender(\n  <Wrapper>\n    <App />\n  </Wrapper>,\n);\n'))),(0,r.yg)("h2",{id:"api-reference"},"API Reference"),(0,r.yg)("h3",{id:"properties-1"},"Properties"),(0,r.yg)(m,{id:"properties-1",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)(f,{module:"@refinedev/chakra-ui/SaveButton",mdxType:"PropsTable"})))}y.isMDXComponent=!0}}]);