"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[56465],{15680:(e,n,t)=>{t.d(n,{xA:()=>d,yg:()=>h});var a=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),c=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=c(t),u=r,h=p["".concat(s,".").concat(u)]||p[u]||g[u]||o;return t?a.createElement(h,l(l({ref:n},d),{},{components:t})):a.createElement(h,l({ref:n},d))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=u;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[p]="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=t[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},93932:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>p});t(96540);var a=t(15680);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}const i={title:"Introduction to React Table - TanStack Table Adapter for React",description:"We'll explore how to use TanStack Table(React Table) in a react project. We'll also explore how to use TanStack Table with refine.",slug:"tanstack-react-table",authors:"joseph_mawa",tags:["react"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-10-31-react-table/social.png",hide_table_of_contents:!1},s=void 0,c={permalink:"/blog/tanstack-react-table",source:"@site/blog/2023-10-31-react-table.md",title:"Introduction to React Table - TanStack Table Adapter for React",description:"We'll explore how to use TanStack Table(React Table) in a react project. We'll also explore how to use TanStack Table with refine.",date:"2023-10-31T00:00:00.000Z",formattedDate:"October 31, 2023",tags:[{label:"react",permalink:"/blog/tags/react"}],readingTime:11.745,hasTruncateMarker:!1,authors:[{name:"Joseph Mawa",title:"Web Developer",url:"https://github.com/nibble0101",imageURL:"/img/generic-profile.png",key:"joseph_mawa"}],frontMatter:{title:"Introduction to React Table - TanStack Table Adapter for React",description:"We'll explore how to use TanStack Table(React Table) in a react project. We'll also explore how to use TanStack Table with refine.",slug:"tanstack-react-table",authors:"joseph_mawa",tags:["react"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-10-31-react-table/social.png",hide_table_of_contents:!1},prevItem:{title:"Unraveling the Kubernetes ImagePullBackOff Error",permalink:"/blog/kubernetes-imagepullbackoff-error"},nextItem:{title:"React Slick Examples - Creating a carousel",permalink:"/blog/react-slick"},relatedPosts:[{title:"How to use Conditional Rendering in React",description:"We'll implement Conditional Rendering in React and the various ways to use it in your React applications.",permalink:"/blog/react-conditional-rendering",formattedDate:"December 14, 2022",authors:[{name:"Deborah Emeni",title:"Software Engineer",url:"https://github.com/debemenitammy",imageURL:"https://github.com/debemenitammy.png",key:"deborah_emeni"}],readingTime:10.1,date:"2022-12-14T00:00:00.000Z"},{title:"Introduction to Chakra UI",description:"Chakra UI is a comprehensive library of React components made to make creating user interfaces easier. .",permalink:"/blog/chakra-ui",formattedDate:"December 19, 2023",authors:[{name:"Samuel Ogunleye",title:"Frontend Engineer",imageURL:"https://github.com/Sproff.png",key:"samuel_ogunleye"}],readingTime:16,date:"2023-12-19T00:00:00.000Z"},{title:"React Hook Form Validation with Complete Examples",description:"We'll implement React Hook Form custom validations and schema validations using yup.",permalink:"/blog/react-hook-form-validation-examples",formattedDate:"September 27, 2022",authors:[{name:"David Omotayo",title:"Frontend developer",url:"https://github.com/david4473",imageURL:"https://github.com/david4473.png",key:"david_omotayo"}],readingTime:19.94,date:"2022-09-27T00:00:00.000Z"}],authorPosts:[{title:"How to Build a Web App in 10 steps in 2024",description:"In this article, we will explore some steps you can follow when building a web app.",permalink:"/blog/how-to-build-a-web-app",formattedDate:"December 26, 2023",authors:[{name:"Joseph Mawa",title:"Web Developer",url:"https://github.com/nibble0101",imageURL:"/img/generic-profile.png",key:"joseph_mawa"}],readingTime:9.43,date:"2023-12-26T00:00:00.000Z"},{title:"How to use the useParams hook in React Router",description:"We'll discover how to access the parameters of the current route with the useParams hook in React Router.",permalink:"/blog/react-router-useparams",formattedDate:"September 24, 2022",authors:[{name:"Joseph Mawa",title:"Web Developer",url:"https://github.com/nibble0101",imageURL:"/img/generic-profile.png",key:"joseph_mawa"}],readingTime:4.445,date:"2022-09-24T00:00:00.000Z"},{title:"A Complete guide to pnpm",description:"We'll explore pnpm, an efficient alternative to npm.",permalink:"/blog/how-to-use-pnpm",formattedDate:"November 27, 2023",authors:[{name:"Joseph Mawa",title:"Web Developer",url:"https://github.com/nibble0101",imageURL:"/img/generic-profile.png",key:"joseph_mawa"}],readingTime:8.995,date:"2023-11-27T00:00:00.000Z"}]},d={authorsImageUrls:[void 0]},p=[{value:"Introduction",id:"introduction",level:2},{value:"What is TanStack table",id:"what-is-tanstack-table",level:2},{value:"What is React Table",id:"what-is-react-table",level:2},{value:"How to use React Table",id:"how-to-use-react-table",level:2},{value:"How to use React Table with Refine",id:"how-to-use-react-table-with-refine",level:2},{value:"Pagination",id:"pagination",level:3},{value:"Sorting",id:"sorting",level:3},{value:"Filtering",id:"filtering",level:3},{value:"Conclusion",id:"conclusion",level:2}],g={toc:p},u="wrapper";function h(e){var{components:n}=e,t=l(e,["components"]);return(0,a.yg)(u,o(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},a=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),a.forEach((function(n){r(e,n,t[n])}))}return e}({},g,t),{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"introduction"},"Introduction"),(0,a.yg)("p",null,"Most tables we use in real-world applications come with features such as filtering, sorting, and selection. Therefore, building tables from the ground up using plain markup and vanilla JavaScript can be tedious and challenging."),(0,a.yg)("p",null,"With libraries such as ",(0,a.yg)("a",{parentName:"p",href:"https://tanstack.com/table/v8"},"TanStack Table"),", you can bootstrap feature-rich tables quickly. TanStack Table is a headless, customizable, and feature-rich package for building tables and data grids."),(0,a.yg)("p",null,"Because it is headless by design, TanStack only has the table logic, state, and API for creating the UI components but doesn't implement the markup or styling."),(0,a.yg)("p",null,"You can use it with Vanilla JavaScript or popular front-end frameworks like React, Refine, Vue, Solid, and Svelte using adapters. This article will introduce you to TanStack Table and React Table, the TanStack Table adapter for react. We will also explore how to use TanStack in a Refine project."),(0,a.yg)("p",null,"What we'll cover in this article:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#what-is-tanstack-table"},"What is TanStack table")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#what-is-react-table"},"What is React Table")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#how-to-use-react-table"},"How to use React Table")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#how-to-use-react-table-with-refine"},"How to use React Table with Refine"),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#pagination"},"Pagination")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#sorting"},"Sorting")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#filtering"},"Filtering"))))),(0,a.yg)("h2",{id:"what-is-tanstack-table"},"What is TanStack table"),(0,a.yg)("p",null,"As explained above, ",(0,a.yg)("a",{parentName:"p",href:"https://tanstack.com/table/v8"},"TanStack Table")," is a headless and framework-agnostic package for building tables and data grids. It has adapters for some of the most popular front-end frameworks like React, Refine, Vue, Solid, and Svelte."),(0,a.yg)("p",null,"The core TanStack Table package exposes several APIs. You can access these APIs directly from the core TanStack API or one of the adapters for your front-end framework."),(0,a.yg)("p",null,"Some table features that TanStack Table supports out of the box include pagination, sorting, row selection, column resizing, and ordering."),(0,a.yg)("h2",{id:"what-is-react-table"},"What is React Table"),(0,a.yg)("p",null,"As highlighted above, TanStack Table is framework agnostic. You can use it with front-end frameworks like React, Vue, Svelte, and Solid via adapters. These adapters make working with the core TanStack Table API easier."),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"@tanstack/react-table")," package, referred to as React Table in short, is the TanStack table adapter for react. It wraps around the core TanStack table logic."),(0,a.yg)("p",null,"With the React Table adapter, you can manage state like in a typical react project."),(0,a.yg)("h2",{id:"how-to-use-react-table"},"How to use React Table"),(0,a.yg)("p",null,"To start using TanStack Table in a react project, you need to install the React Table adapter as a dependency from the NPM package registry using the command below. The command below assumes you are using the NPM package manager."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sh"},"npm i @tanstack/react-table\n")),(0,a.yg)("p",null,"The React Table adapter exports the ",(0,a.yg)("inlineCode",{parentName:"p"},"useReactTable")," hook. The ",(0,a.yg)("inlineCode",{parentName:"p"},"useReactTable")," hook takes an options object as argument and returns a table object."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},"const table = useReactTable(options);\n")),(0,a.yg)("p",null,"The options object has several properties, which we will not explore in detail in this article. However, you should have the data and the table column objects. The example below illustrates the basic use of the ",(0,a.yg)("inlineCode",{parentName:"p"},"useReactTable")," hook."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'import {\n  useReactTable,\n  createColumnHelper,\n  flexRender,\n  getCoreRowModel,\n} from "@tanstack/react-table";\n\nconst columnHelper = createColumnHelper();\n\nconst data = [\n  {\n    firstName: "Jane",\n    surname: "Doe",\n    age: 13,\n    gender: "Female",\n  },\n  {\n    firstName: "John",\n    surname: "Doe",\n    age: 43,\n    gender: "Male",\n  },\n  {\n    firstName: "Tom",\n    surname: "Doe",\n    age: 89,\n    gender: "Male",\n  },\n];\n\nconst columns = [\n  columnHelper.accessor((row) => `${row.firstName} ${row.surname}`, {\n    id: "fullName",\n    header: "Full Name",\n  }),\n  columnHelper.accessor("gender", {\n    header: "Gender",\n  }),\n];\n\nfunction App() {\n  const table = useReactTable({\n    data,\n    columns,\n    getCoreRowModel: getCoreRowModel(),\n  });\n\n  return (\n    <table>\n      <thead>\n        {table.getHeaderGroups().map((headerGroup) => {\n          return (\n            <tr key={headerGroup.id}>\n              {headerGroup.headers.map((header) => {\n                return (\n                  <th id={header.id}>\n                    {" "}\n                    {header.isPlaceholder\n                      ? null\n                      : flexRender(\n                          header.column.columnDef.header,\n                          header.getContext(),\n                        )}\n                  </th>\n                );\n              })}\n            </tr>\n          );\n        })}\n      </thead>\n      <tbody>\n        {table.getRowModel().rows.map((row) => {\n          return (\n            <tr key={row.id}>\n              {row.getVisibleCells().map((cell) => {\n                return (\n                  <td key={cell.id}>\n                    {flexRender(cell.column.columnDef.cell, cell.getContext())}\n                  </td>\n                );\n              })}\n            </tr>\n          );\n        })}\n      </tbody>\n    </table>\n  );\n}\n\nexport default App;\n')),(0,a.yg)("p",null,"As the example above illustrates, React Table is headless. Therefore, you are responsible for the markup and styling. You must pass the table data and table header array as arguments to the ",(0,a.yg)("inlineCode",{parentName:"p"},"useReactTable")," hook."),(0,a.yg)("p",null,"In the above example, we used the ",(0,a.yg)("inlineCode",{parentName:"p"},"createColumnHelper")," from the core TanStack Table to create accessor column definition type."),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"useReactTable")," returns an object consisting of several methods you can use to render the table. The ",(0,a.yg)("inlineCode",{parentName:"p"},"getHeaderGroups")," method returns the header group. Similarly, the ",(0,a.yg)("inlineCode",{parentName:"p"},"getRowModel")," returns the final row model. You can use the two properties to render the table UI as in the above example."),(0,a.yg)("p",null,"The table object has several other properties that you can look up in the React Table documentation."),(0,a.yg)("h2",{id:"how-to-use-react-table-with-refine"},"How to use React Table with Refine"),(0,a.yg)("p",null,"TanStack Table is framework agnostic. Therefore, you need an adapter to use it with front-end frameworks like ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/refinedev/refine/stargazers"},"Refine"),". The Refine ecosystem has the ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/refinedev/refine/tree/master/packages/react-table"},(0,a.yg)("inlineCode",{parentName:"a"},"@refinedev/react-table"))," adapter for integrating TanStack Table into your Refine application."),(0,a.yg)("p",null,"Depending on your package manager, first, install it from the NPM package registry. The command below assumes you're using the NPM package manager."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sh"},"npm i @refinedev/react-table\n")),(0,a.yg)("p",null,"Under the hood, the ",(0,a.yg)("inlineCode",{parentName:"p"},"@refinedev/react-table")," package uses Refine's ",(0,a.yg)("inlineCode",{parentName:"p"},"useList")," hook. It has out-of-the-box support for all the features of the core TanStack table package and much more."),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"@refinedev/react-table")," package exports the ",(0,a.yg)("inlineCode",{parentName:"p"},"useTable")," hook. The ",(0,a.yg)("inlineCode",{parentName:"p"},"useTable")," hook reads the resource from the URL and returns the data from the API endpoint in its basic usage."),(0,a.yg)("p",null,"The code below illustrates how to use React Table with refine. If you have a running Refine project already, use the example code below to display data from the ",(0,a.yg)("a",{parentName:"p",href:"https://api.fake-rest.refine.dev/categories"},"categories"),"resource of the ",(0,a.yg)("a",{parentName:"p",href:"https://api.fake-rest.refine.dev/"},"fake REST API")," in tabular form using the ",(0,a.yg)("inlineCode",{parentName:"p"},"@refinedev/react-table")," package."),(0,a.yg)("p",null,"The fake REST API was created by the Refine team to try out the examples in refine."),(0,a.yg)("details",null,(0,a.yg)("summary",null,"Show CategoryList component"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'import React from "react";\nimport { useNavigation } from "@refinedev/core";\nimport { useTable } from "@refinedev/react-table";\nimport { ColumnDef, flexRender } from "@tanstack/react-table";\n\nexport const CategoryList = () => {\n  const columns = React.useMemo<ColumnDef<any>[]>(\n    () => [\n      {\n        id: "id",\n        accessorKey: "id",\n        header: "Id",\n      },\n      {\n        id: "title",\n        accessorKey: "title",\n        header: "Title",\n      },\n      {\n        id: "actions",\n        accessorKey: "id",\n        header: "Actions",\n        cell: function render({ getValue }) {\n          return (\n            <div\n              style={{\n                display: "flex",\n                flexDirection: "row",\n                flexWrap: "wrap",\n                gap: "4px",\n              }}\n            >\n              <button\n                onClick={() => {\n                  show("categories", getValue() as string);\n                }}\n              >\n                Show\n              </button>\n              <button\n                onClick={() => {\n                  edit("categories", getValue() as string);\n                }}\n              >\n                Edit\n              </button>\n            </div>\n          );\n        },\n      },\n    ],\n    [],\n  );\n\n  const { edit, show } = useNavigation();\n\n  const {\n    getHeaderGroups,\n    getRowModel,\n    setOptions,\n    refineCore: {\n      tableQueryResult: { data: tableData },\n    },\n  } = useTable({\n    columns,\n  });\n\n  setOptions((prev) => ({\n    ...prev,\n    meta: {\n      ...prev.meta,\n    },\n  }));\n\n  return (\n    <div style={{ padding: "16px" }}>\n      <div\n        style={{\n          display: "flex",\n          alignItems: "center",\n          justifyContent: "space-between",\n        }}\n      >\n        <h1>Categories List</h1>\n      </div>\n      <div style={{ maxWidth: "100%", overflowY: "scroll" }}>\n        <table>\n          <thead>\n            {getHeaderGroups().map((headerGroup) => (\n              <tr key={headerGroup.id}>\n                {headerGroup.headers.map((header) => (\n                  <th key={header.id}>\n                    {!header.isPlaceholder &&\n                      flexRender(\n                        header.column.columnDef.header,\n                        header.getContext(),\n                      )}\n                  </th>\n                ))}\n              </tr>\n            ))}\n          </thead>\n          <tbody>\n            {getRowModel().rows.map((row) => (\n              <tr key={row.id}>\n                {row.getVisibleCells().map((cell) => (\n                  <td key={cell.id}>\n                    {flexRender(cell.column.columnDef.cell, cell.getContext())}\n                  </td>\n                ))}\n              </tr>\n            ))}\n          </tbody>\n        </table>\n      </div>\n    </div>\n  );\n};\n'))),(0,a.yg)("div",{class:"img-container"},(0,a.yg)("div",{class:"window"},(0,a.yg)("div",{class:"control red"}),(0,a.yg)("div",{class:"control orange"}),(0,a.yg)("div",{class:"control green"})),(0,a.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-10-31-react-table/react-table.png",alt:"react slick"})),(0,a.yg)("p",null,"As in the above example, Refine's React Table adapter exports the ",(0,a.yg)("inlineCode",{parentName:"p"},"useTable")," hook. You need to create the table column and pass it as an argument to the ",(0,a.yg)("inlineCode",{parentName:"p"},"useTable")," hook."),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"useTable")," hook returns several methods and properties that you can use to retrieve the table headers and rows and add other useful table features. Be aware that the Refine TanStack table adapter is headless. You are responsible for the markup and styling as in the above example."),(0,a.yg)("p",null,"The above example retrieves the data and displays it in a simple table. However, a typical table will need additional features such as pagination, sorting, and filtering. Let us explore how to add them in the sub-sections below."),(0,a.yg)("h3",{id:"pagination"},"Pagination"),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"useTable")," hook returns an object with several methods such as ",(0,a.yg)("inlineCode",{parentName:"p"},"setPageIndex"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"getPageCount"),", and ",(0,a.yg)("inlineCode",{parentName:"p"},"previousPage"),". You can use some of these methods to manage pagination in the table. The method names are pretty much self-explanatory."),(0,a.yg)("details",null,(0,a.yg)("summary",null,"Show CategoryList component"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'import React from "react";\nimport { useNavigation } from "@refinedev/core";\nimport { useTable } from "@refinedev/react-table";\nimport { ColumnDef, flexRender } from "@tanstack/react-table";\n\nexport const CategoryList = () => {\n  ...\n  const {\n    getHeaderGroups,\n    getRowModel,\n    setOptions,\n    refineCore: {\n      tableQueryResult: { data: tableData },\n    },\n    //highlight-start\n    getState,\n    setPageIndex,\n    getCanPreviousPage,\n    getPageCount,\n    getCanNextPage,\n    nextPage,\n    previousPage,\n    setPageSize,\n    getColumn,\n    //highlight-end\n  } = useTable({\n    columns,\n  });\n\n  setOptions((prev) => ({\n    ...prev,\n    meta: {\n      ...prev.meta,\n    },\n  }));\n\n  return (\n    <div style={{ padding: "16px" }}>\n      ...\n      //highlight-start\n      <div style={{ marginTop: "12px" }}>\n        <button\n          onClick={() => setPageIndex(0)}\n          disabled={!getCanPreviousPage()}\n        >\n          {"<<"}\n        </button>\n        <button onClick={() => previousPage()} disabled={!getCanPreviousPage()}>\n          {"<"}\n        </button>\n        <button onClick={() => nextPage()} disabled={!getCanNextPage()}>\n          {">"}\n        </button>\n        <button\n          onClick={() => setPageIndex(getPageCount() - 1)}\n          disabled={!getCanNextPage()}\n        >\n          {">>"}\n        </button>\n        <span>\n          <strong>\n            {" "}\n            {getState().pagination.pageIndex + 1} / {getPageCount()}{" "}\n          </strong>\n        </span>\n        <span>\n          | Go to page :{" "}\n          <input\n            type="number"\n            defaultValue={getState().pagination.pageIndex + 1}\n            onChange={(e) => {\n              const page = e.target.value ? +e.target.value - 1 : 0;\n              setPageIndex(page);\n            }}\n          />\n        </span>{" "}\n        <select\n          value={getState().pagination.pageSize}\n          onChange={(e) => {\n            setPageSize(Number(e.target.value));\n          }}\n        >\n          {[10, 20, 30, 40, 50].map((pageSize) => (\n            <option key={pageSize} value={pageSize}>\n              Show {pageSize}\n            </option>\n          ))}\n        </select>\n      </div>\n      //highlight-end\n    </div>\n  );\n};\n'))),(0,a.yg)("div",{class:"img-container"},(0,a.yg)("div",{class:"window"},(0,a.yg)("div",{class:"control red"}),(0,a.yg)("div",{class:"control orange"}),(0,a.yg)("div",{class:"control green"})),(0,a.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-10-31-react-table/react-table-with-pagination.png",alt:"react slick"})),(0,a.yg)("p",null,"After adding the changes above, you can now navigate to any page of the data. By default, pagination is handled on the server side. If you want pagination to be handled on the client side, set the value of the ",(0,a.yg)("inlineCode",{parentName:"p"},"pagination.mode")," property to ",(0,a.yg)("inlineCode",{parentName:"p"},'"client"')," like so:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'useTable({\n  columns,\n  refineCoreProps: {\n    pagination: {\n      mode: "client",\n    },\n  },\n});\n')),(0,a.yg)("p",null,"If you set the value of the ",(0,a.yg)("inlineCode",{parentName:"p"},"syncWithLocation")," feature to ",(0,a.yg)("inlineCode",{parentName:"p"},"true"),", the ",(0,a.yg)("inlineCode",{parentName:"p"},"useTable")," state is automatically encoded in the URL parameters. Any change in the ",(0,a.yg)("inlineCode",{parentName:"p"},"useTable")," state also updates the URL and vice versa."),(0,a.yg)("p",null,"The value of the ",(0,a.yg)("inlineCode",{parentName:"p"},"syncWithLocation")," feature is set to ",(0,a.yg)("inlineCode",{parentName:"p"},"false")," by default. You can either set its value globally using the ",(0,a.yg)("inlineCode",{parentName:"p"},"<Refine />")," component or the ",(0,a.yg)("inlineCode",{parentName:"p"},"useTable")," hook like so:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},"useTable({\n  refineCoreProps: {\n    syncWithLocation: true,\n  },\n});\n")),(0,a.yg)("h3",{id:"sorting"},"Sorting"),(0,a.yg)("p",null,"Similar to pagination, the object returned by the ",(0,a.yg)("inlineCode",{parentName:"p"},"useTable")," hook has methods you can use to manage sorting. Let's explore how to sort data in this sub-section. Add the changes below to your code."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'import React from "react";\nimport { useNavigation } from "@refinedev/core";\nimport { useTable } from "@refinedev/react-table";\nimport { ColumnDef, flexRender } from "@tanstack/react-table";\n\nexport const CategoryList = () => {\n  ...\n  return (\n    <div style={{ padding: "16px" }}>\n      <div\n        style={{\n          display: "flex",\n          alignItems: "center",\n          justifyContent: "space-between",\n        }}\n      >\n        <h1>Categories List</h1>\n      </div>\n      <div style={{ maxWidth: "100%", overflowY: "scroll" }}>\n        <table>\n          <thead>\n          //highlight-start\n            {getHeaderGroups().map((headerGroup) => (\n              <tr key={headerGroup.id}>\n                {headerGroup.headers.map((header) => (\n                  <th key={header.id}>\n                    {header.id === "title" ? (\n                      <div onClick={header.column.getToggleSortingHandler()}>\n                        {!header.isPlaceholder &&\n                          flexRender(\n                            header.column.columnDef.header,\n                            header.getContext()\n                          )}\n                        {{\n                          asc: " \ud83d\udd3c",\n                          desc: " \ud83d\udd3d",\n                        }[header.column.getIsSorted() as string] ?? null}\n                      </div>\n                    ) : (\n                      <div>\n                        {!header.isPlaceholder &&\n                          flexRender(\n                            header.column.columnDef.header,\n                            header.getContext()\n                          )}\n                      </div>\n                    )}\n                  </th>\n                ))}\n              </tr>\n            ))}\n          //highlight-end\n          </thead>\n          <tbody>\n            {getRowModel().rows.map((row) => (\n              <tr key={row.id}>\n                {row.getVisibleCells().map((cell) => (\n                  <td key={cell.id}>\n                    {flexRender(cell.column.columnDef.cell, cell.getContext())}\n                  </td>\n                ))}\n              </tr>\n            ))}\n          </tbody>\n        </table>\n      </div>\n      ...\n    </div>\n  );\n};\n')),(0,a.yg)("div",{class:"img-container"},(0,a.yg)("div",{class:"window"},(0,a.yg)("div",{class:"control red"}),(0,a.yg)("div",{class:"control orange"}),(0,a.yg)("div",{class:"control green"})),(0,a.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-10-31-react-table/react-table-with-sorting.png",alt:"react slick"})),(0,a.yg)("p",null,"You can now click the Title header to sort the table in ascending or descending order of the title."),(0,a.yg)("h3",{id:"filtering"},"Filtering"),(0,a.yg)("p",null,"Similar to pagination and sorting explained in the previous two sections, the object returned by the ",(0,a.yg)("inlineCode",{parentName:"p"},"useTable")," hook has methods for filtering."),(0,a.yg)("p",null,"When defining the table column, you can specify which columns can be filtered and specify the filter operator using the ",(0,a.yg)("inlineCode",{parentName:"p"},"filterOperator"),"\xa0property of the\xa0",(0,a.yg)("inlineCode",{parentName:"p"},"meta"),"\xa0object. The default filter operator is ",(0,a.yg)("inlineCode",{parentName:"p"},'"eq"')," for all fields."),(0,a.yg)("p",null,"Add the following changes to the code above."),(0,a.yg)("details",null,(0,a.yg)("summary",null,"Show CategoryList component"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'import React from "react";\nimport { useNavigation } from "@refinedev/core";\nimport { useTable } from "@refinedev/react-table";\nimport { ColumnDef, flexRender } from "@tanstack/react-table";\n\nexport const CategoryList = () => {\n  const columns = React.useMemo<ColumnDef<any>[]>(\n    () => [\n      {\n        id: "id",\n        accessorKey: "id",\n        header: "Id",\n      },\n      {\n        id: "title",\n        accessorKey: "title",\n        header: "Title",\n        //highlight-next-line\n        meta: {\n          filterOperator: "contains",\n        },\n      },\n      {\n        id: "actions",\n        accessorKey: "id",\n        header: "Actions",\n        cell: function render({ getValue }) {\n          return (\n            <div\n              style={{\n                display: "flex",\n                flexDirection: "row",\n                flexWrap: "wrap",\n                gap: "4px",\n              }}\n            >\n              <button\n                onClick={() => {\n                  show("categories", getValue() as string);\n                }}\n              >\n                Show\n              </button>\n              <button\n                onClick={() => {\n                  edit("categories", getValue() as string);\n                }}\n              >\n                Edit\n              </button>\n            </div>\n          );\n        },\n      },\n    ],\n    []\n  );\n  ...\n  return (\n    <div style={{ padding: "16px" }}>\n      <div\n        style={{\n          display: "flex",\n          alignItems: "center",\n          justifyContent: "space-between",\n        }}\n      >\n        <h1>Categories List</h1>\n      </div>\n      <div style={{ maxWidth: "100%", overflowY: "scroll" }}>\n        <table>\n          <thead>\n            {getHeaderGroups().map((headerGroup) => (\n              <tr key={headerGroup.id}>\n                {headerGroup.headers.map((header) => (\n                  <th key={header.id}>\n                    {header.id === "title" ? (\n                      <div onClick={header.column.getToggleSortingHandler()}>\n                        {!header.isPlaceholder &&\n                          flexRender(\n                            header.column.columnDef.header,\n                            header.getContext()\n                          )}\n                        {{\n                          asc: " \ud83d\udd3c",\n                          desc: " \ud83d\udd3d",\n                        }[header.column.getIsSorted() as string] ?? null}\n                        //highlight-start\n                        {header.column.getCanFilter() ? (\n                          <div>\n                            <input\n                              value={\n                                (header.column.getFilterValue() as string) ?? ""\n                              }\n                              onChange={(e) =>\n                                header.column.setFilterValue(e.target.value)\n                              }\n                            />\n                          </div>\n                        ) : null}\n                        //highlight-end\n                      </div>\n                    ) : (\n                      <div>\n                        {!header.isPlaceholder &&\n                          flexRender(\n                            header.column.columnDef.header,\n                            header.getContext()\n                          )}\n                      </div>\n                    )}\n                  </th>\n                ))}\n              </tr>\n            ))}\n          </thead>\n          <tbody>\n            {getRowModel().rows.map((row) => (\n              <tr key={row.id}>\n                {row.getVisibleCells().map((cell) => (\n                  <td key={cell.id}>\n                    {flexRender(cell.column.columnDef.cell, cell.getContext())}\n                  </td>\n                ))}\n              </tr>\n            ))}\n          </tbody>\n        </table>\n      </div>\n      ...\n    </div>\n  );\n};\n'))),(0,a.yg)("div",{class:"img-container"},(0,a.yg)("div",{class:"window"},(0,a.yg)("div",{class:"control red"}),(0,a.yg)("div",{class:"control orange"}),(0,a.yg)("div",{class:"control green"})),(0,a.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-10-31-react-table/react-table-with-filtering.png",alt:"react slick"})),(0,a.yg)("p",null,"You will now see a search field that you can use to search for an entry in the title field."),(0,a.yg)("div",{class:"img-container"},(0,a.yg)("div",{class:"window"},(0,a.yg)("div",{class:"control red"}),(0,a.yg)("div",{class:"control orange"}),(0,a.yg)("div",{class:"control green"})),(0,a.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-10-31-react-table/react-table-with-refine.gif",alt:"react slick"})),(0,a.yg)("p",null,"There are several features of React Table that we haven't explored in this section. Check out the documentation."),(0,a.yg)("h2",{id:"conclusion"},"Conclusion"),(0,a.yg)("p",null,"TanStack table is a headless, framework-agnostic library for managing data and data grids. Because it's framework-independent, you can use it with the most popular front-end frameworks like React, Vue, Svelte, Solid, and Refine using adapters."),(0,a.yg)("p",null,'React Table is the TanStack adapter for React. It enables you to manage your table state in a "react way." It has all the features of the core TanStack table package and much more.'),(0,a.yg)("p",null,"Refine also has an adapter that you can use to integrate TanStack table into your Refine application."))}h.isMDXComponent=!0}}]);