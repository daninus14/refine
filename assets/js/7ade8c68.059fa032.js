"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[67949],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(t),m=o,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return t?r.createElement(f,i(i({ref:n},p),{},{components:t})):r.createElement(f,i({ref:n},p))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},93602:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>c,metadata:()=>s,toc:()=>u});t(67294);var r=t(3905);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}const c={id:"layout",title:"Layout",swizzle:!0},l=void 0,s={unversionedId:"api-reference/chakra-ui/customization/layout",id:"version-3.xx.xx/api-reference/chakra-ui/customization/layout",title:"Layout",description:"You can create custom layouts using ` and ` components.",source:"@site/versioned_docs/version-3.xx.xx/api-reference/chakra-ui/customization/layout.md",sourceDirName:"api-reference/chakra-ui/customization",slug:"/api-reference/chakra-ui/customization/layout",permalink:"/docs/3.xx.xx/api-reference/chakra-ui/customization/layout",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/api-reference/chakra-ui/customization/layout.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"dzcpy",lastUpdatedAt:1701673806,formattedLastUpdatedAt:"Dec 4, 2023",frontMatter:{id:"layout",title:"Layout",swizzle:!0},sidebar:"someSidebar",previous:{title:"Theme",permalink:"/docs/3.xx.xx/api-reference/chakra-ui/customization/theme"},next:{title:"Sider",permalink:"/docs/3.xx.xx/api-reference/chakra-ui/customization/sider"}},p={},u=[{value:"Creating a Custom Layout",id:"creating-a-custom-layout",level:2}],d={toc:u};function m(e){var{components:n}=e,t=i(e,["components"]);return(0,r.kt)("wrapper",a(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){o(e,n,t[n])}))}return e}({},d,t),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"You can create custom layouts using ",(0,r.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/components/refine-config"},(0,r.kt)("inlineCode",{parentName:"a"},"<Refine>"))," and ",(0,r.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/components/layout-wrapper"},(0,r.kt)("inlineCode",{parentName:"a"},"<LayoutWrapper>"))," components."),(0,r.kt)("p",null,"Both of these components can accept the listed props for customization. ",(0,r.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/components/refine-config"},(0,r.kt)("inlineCode",{parentName:"a"},"<Refine>"))," being for global customization and the ",(0,r.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/components/layout-wrapper"},(0,r.kt)("inlineCode",{parentName:"a"},"<LayoutWrapper>"))," being for local."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/3.xx.xx/api-reference/core/components/refine-config#layout"},(0,r.kt)("inlineCode",{parentName:"a"},"Layout"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/3.xx.xx/api-reference/core/components/refine-config#sider"},(0,r.kt)("inlineCode",{parentName:"a"},"Sider"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/3.xx.xx/api-reference/core/components/refine-config#footer"},(0,r.kt)("inlineCode",{parentName:"a"},"Footer"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/3.xx.xx/api-reference/core/components/refine-config#header"},(0,r.kt)("inlineCode",{parentName:"a"},"Header"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/3.xx.xx/api-reference/core/components/refine-config#offlayoutarea"},(0,r.kt)("inlineCode",{parentName:"a"},"OffLayoutArea"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/3.xx.xx/api-reference/core/components/refine-config#title"},(0,r.kt)("inlineCode",{parentName:"a"},"Title")))),(0,r.kt)("admonition",{title:"Swizzle",type:"info-tip"},(0,r.kt)("p",{parentName:"admonition"},"You can swizzle this component to customize it with the ",(0,r.kt)("a",{parentName:"p",href:"/docs/packages/documentation/cli"},(0,r.kt)("strong",{parentName:"a"},"refine CLI")))),(0,r.kt)("h2",{id:"creating-a-custom-layout"},"Creating a Custom Layout"),(0,r.kt)("p",null,"Let's start with creating a ",(0,r.kt)("inlineCode",{parentName:"p"},"<CustomLayout/>")," component using ",(0,r.kt)("inlineCode",{parentName:"p"},"LayoutProps")," from ",(0,r.kt)("inlineCode",{parentName:"p"},"@pankod/refine-core")," with the following code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000 previewHeight=420px",live:!0,url:"http://localhost:3000",previewHeight:"420px"},'setInitialRoutes(["/posts"]);\nimport { useNavigation } from "@pankod/refine-core";\nimport {\n    List,\n    Text,\n    Code,\n    TableContainer,\n    Table,\n    Thead,\n    Tbody,\n    Tr,\n    Th,\n    Td,\n} from "@pankod/refine-chakra-ui";\nimport { useTable, ColumnDef, flexRender } from "@pankod/refine-react-table";\n\nconst PostList: React.FC = () => {\n    const columns = React.useMemo<ColumnDef<IPost>[]>(\n        () => [\n            {\n                id: "id",\n                header: "ID",\n                accessorKey: "id",\n            },\n            {\n                id: "title",\n                header: "Title",\n                accessorKey: "title",\n            },\n        ],\n        [],\n    );\n\n    const { getHeaderGroups, getRowModel } = useTable({\n        columns,\n        refineCoreProps: {\n            initialPageSize: 5,\n        },\n    });\n\n    return (\n        <List>\n            <TableContainer whiteSpace="pre-line">\n                <Table variant="simple">\n                    <Thead>\n                        {getHeaderGroups().map((headerGroup) => (\n                            <Tr key={headerGroup.id}>\n                                {headerGroup.headers.map((header) => (\n                                    <Th key={header.id}>\n                                        {!header.isPlaceholder && (\n                                            <Text>\n                                                {flexRender(\n                                                    header.column.columnDef\n                                                        .header,\n                                                    header.getContext(),\n                                                )}\n                                            </Text>\n                                        )}\n                                    </Th>\n                                ))}\n                            </Tr>\n                        ))}\n                    </Thead>\n                    <Tbody>\n                        {getRowModel().rows.map((row) => (\n                            <Tr key={row.id}>\n                                {row.getVisibleCells().map((cell) => (\n                                    <Td key={cell.id}>\n                                        {flexRender(\n                                            cell.column.columnDef.cell,\n                                            cell.getContext(),\n                                        )}\n                                    </Td>\n                                ))}\n                            </Tr>\n                        ))}\n                    </Tbody>\n                </Table>\n            </TableContainer>\n        </List>\n    );\n};\n\nconst DummyListPage = () => {\n    const { list } = useNavigation();\n    const params = RefineCore.useRouterContext().useParams();\n\n    return (\n        <List>\n            <Text as="i" color="dimmed" fontSize="sm">\n                URL Parameters:\n            </Text>\n            <Code>{JSON.stringify(params)}</Code>\n        </List>\n    );\n};\n\nconst IconList = () => (\n    <svg\n        xmlns="http://www.w3.org/2000/svg"\n        className="icon icon-tabler icon-tabler-list"\n        width={18}\n        height={18}\n        viewBox="0 0 24 24"\n        stroke-width={2}\n        stroke="currentColor"\n        fill="none"\n        strokeLinecap="round"\n        strokeLinejoin="round"\n    >\n        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>\n        <line x1={9} y1={6} x2={20} y2={6}></line>\n        <line x1={9} y1={12} x2={20} y2={12}></line>\n        <line x1={9} y1={18} x2={20} y2={18}></line>\n        <line x1={5} y1={6} x2={5} y2="6.01"></line>\n        <line x1={5} y1={12} x2={5} y2="12.01"></line>\n        <line x1={5} y1={18} x2={5} y2="18.01"></line>\n    </svg>\n);\n\nconst IconCategory = () => (\n    <svg\n        xmlns="http://www.w3.org/2000/svg"\n        className="icon icon-tabler icon-tabler-category"\n        width={18}\n        height={18}\n        viewBox="0 0 24 24"\n        stroke-width={2}\n        stroke="currentColor"\n        fill="none"\n        strokeLinecap="round"\n        strokeLinejoin="round"\n    >\n        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>\n        <path d="M4 4h6v6h-6z"></path>\n        <path d="M14 4h6v6h-6z"></path>\n        <path d="M4 14h6v6h-6z"></path>\n        <circle cx={17} cy={17} r={3}></circle>\n    </svg>\n);\n\nconst IconUsers = () => (\n    <svg\n        xmlns="http://www.w3.org/2000/svg"\n        className="icon icon-tabler icon-tabler-users"\n        width={18}\n        height={18}\n        viewBox="0 0 24 24"\n        stroke-width={2}\n        stroke="currentColor"\n        fill="none"\n        strokeLinecap="round"\n        strokeLinejoin="round"\n    >\n        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>\n        <circle cx={9} cy={7} r={4}></circle>\n        <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>\n        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>\n        <path d="M21 21v-2a4 4 0 0 0 -3 -3.85"></path>\n    </svg>\n);\n\n// visible-block-start\n// highlight-start\nimport {\n    Refine,\n    LayoutProps,\n    useMenu,\n    useRouterContext,\n} from "@pankod/refine-core";\n// highlight-end\nimport routerProvider from "@pankod/refine-react-router-v6";\nimport dataProvider from "@pankod/refine-simple-rest";\nimport {\n    ChakraProvider,\n    ErrorComponent,\n    ReadyPage,\n    notificationProvider,\n    refineTheme,\n    // highlight-start\n    Box,\n    HStack,\n    Button,\n    // highlight-end\n} from "@pankod/refine-chakra-ui";\n\nimport { PostCreate, PostEdit, PostList } from "./pages";\n\n// highlight-start\nconst CustomLayout: React.FC<LayoutProps> = ({ children }) => {\n    const { menuItems, selectedKey } = useMenu();\n    const { Link } = useRouterContext();\n\n    return (\n        <Box display="flex" flexDirection="column">\n            <Box\n                pt="2"\n                px="4"\n                bg="chakra-body-bg"\n                borderBottom="1px"\n                borderColor="gray.200"\n            >\n                <HStack>\n                    {menuItems.map(({ route, label, icon }) => (\n                        <Box key={route}>\n                            <Button\n                                as={Link}\n                                to={route}\n                                label={label}\n                                variant="ghost"\n                                colorScheme="green"\n                                leftIcon={\n                                    icon ?? ((<IconList size={20} />) as any)\n                                }\n                                isActive={route === selectedKey}\n                                borderBottomLeftRadius="0"\n                                borderBottomRightRadius="0"\n                            >\n                                {label}\n                            </Button>\n                        </Box>\n                    ))}\n                </HStack>\n            </Box>\n            <Box>{children}</Box>\n        </Box>\n    );\n};\n// highlight-end\n\nconst App = () => {\n    return (\n        <ChakraProvider theme={refineTheme}>\n            <Refine\n                routerProvider={routerProvider}\n                dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n                notificationProvider={notificationProvider()}\n                ReadyPage={ReadyPage}\n                // highlight-next-line\n                Layout={CustomLayout}\n                resources={[\n                    {\n                        name: "posts",\n                        list: PostList,\n                    },\n                    {\n                        name: "categories",\n                        list: DummyListPage,\n                        icon: <IconCategory />,\n                    },\n                    {\n                        name: "users",\n                        list: DummyListPage,\n                        icon: <IconUsers />,\n                    },\n                ]}\n            />\n        </ChakraProvider>\n    );\n};\n// visible-block-end\nrender(<App />);\n')),(0,r.kt)("p",null,"We used ",(0,r.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/hooks/ui/useMenu"},(0,r.kt)("inlineCode",{parentName:"a"},"useMenu"))," hook to get the list of current resources and print it. We also use ",(0,r.kt)("inlineCode",{parentName:"p"},"useRouterContext")," hook to get the router context and use it to create a link."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"This example demonstrated how to configure a global layout. To learn how to use global layout in custom pages and make local modifications per page, ",(0,r.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/components/layout-wrapper"},"refer to the ",(0,r.kt)("inlineCode",{parentName:"a"},"<LayoutWrapper>")," docs. ","\u2192"))))}m.isMDXComponent=!0}}]);