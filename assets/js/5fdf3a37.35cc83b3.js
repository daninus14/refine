"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[88690],{58860:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>d});var a=n(37953);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},g="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),g=l(n),y=i,d=g["".concat(p,".").concat(y)]||g[y]||u[y]||r;return n?a.createElement(d,o(o({ref:t},c),{},{components:n})):a.createElement(d,o({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=y;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[g]="string"==typeof e?e:i,o[1]=s;for(var l=2;l<r;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},31069:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>g});n(37953);var a=n(58860);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}const s={title:"A Guide for Next.js with TypeScript",description:"We will explain the entire process of how to use Next.js in TypeScript",slug:"next-js-with-typescript",authors:"michael",tags:["nextjs","typescript"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-09-12-next-typescript/social-3.png",hide_table_of_contents:!1},p=void 0,l={permalink:"/blog/next-js-with-typescript",source:"@site/blog/2024-06-10-next-typescript.md",title:"A Guide for Next.js with TypeScript",description:"We will explain the entire process of how to use Next.js in TypeScript",date:"2024-06-10T00:00:00.000Z",formattedDate:"June 10, 2024",tags:[{label:"nextjs",permalink:"/blog/tags/nextjs"},{label:"typescript",permalink:"/blog/tags/typescript"}],readingTime:11.765,hasTruncateMarker:!1,authors:[{name:"Michael Hungbo",title:"Software Developer",url:"https://github.com/Mich45",imageURL:"https://github.com/Mich45.png",key:"michael"}],frontMatter:{title:"A Guide for Next.js with TypeScript",description:"We will explain the entire process of how to use Next.js in TypeScript",slug:"next-js-with-typescript",authors:"michael",tags:["nextjs","typescript"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-09-12-next-typescript/social-3.png",hide_table_of_contents:!1},prevItem:{title:"Ref Forwarding with React forwardRef",permalink:"/blog/react-forwardref"},nextItem:{title:"Nextjs image optimization with examples",permalink:"/blog/using-next-image"},relatedPosts:[{title:"How Next.js Redirects Work",description:"We'll examine the concept of URL redirection in Next.js and how redirects work.",permalink:"/blog/next-js-redirect",formattedDate:"July 30, 2024",authors:[{name:"Michael Hungbo",title:"Software Developer",url:"https://github.com/Mich45",imageURL:"https://github.com/Mich45.png",key:"michael"}],readingTime:11.49,date:"2024-07-30T00:00:00.000Z"},{title:"A Guide on TypeScript Omit Type",description:"We'll dive into the TypeScript Omit utility type with examples",permalink:"/blog/typescript-omit-utility-type",formattedDate:"October 3, 2022",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:3.44,date:"2022-10-03T00:00:00.000Z"},{title:"Next.js 13 - What are the new features?",description:"Next.js 13 is out! Let's see the new features in this release.",permalink:"/blog/new-features-in-next-js-13",formattedDate:"November 12, 2022",authors:[{name:"Michael Hungbo",title:"Software Developer",url:"https://github.com/Mich45",imageURL:"https://github.com/Mich45.png",key:"michael"}],readingTime:6.125,date:"2022-11-12T00:00:00.000Z"}],authorPosts:[{title:"How Next.js Redirects Work",description:"We'll examine the concept of URL redirection in Next.js and how redirects work.",permalink:"/blog/next-js-redirect",formattedDate:"July 30, 2024",authors:[{name:"Michael Hungbo",title:"Software Developer",url:"https://github.com/Mich45",imageURL:"https://github.com/Mich45.png",key:"michael"}],readingTime:11.49,date:"2024-07-30T00:00:00.000Z"},{title:"Next.js environment variables",description:"We will take a closer look at environment variables in Next.js",permalink:"/blog/next-js-environment-variables",formattedDate:"September 7, 2022",authors:[{name:"Michael Hungbo",title:"Software Developer",url:"https://github.com/Mich45",imageURL:"https://github.com/Mich45.png",key:"michael"}],readingTime:6.465,date:"2022-09-07T00:00:00.000Z"},{title:"Using Material UI DataGrid component with Refine app",description:"How to use Material UI DataGrid component with Refine apps?",permalink:"/blog/mui-datagrid-refine",formattedDate:"August 23, 2022",authors:[{name:"Michael Hungbo",title:"Software Developer",url:"https://github.com/Mich45",imageURL:"https://github.com/Mich45.png",key:"michael"}],readingTime:15.9,date:"2022-08-23T00:00:00.000Z"}]},c={authorsImageUrls:[void 0]},g=[{value:"Introduction",id:"introduction",level:2},{value:"What is TypeScript?",id:"what-is-typescript",level:2},{value:"How to add TypeScript to your Next.js app",id:"how-to-add-typescript-to-your-nextjs-app",level:2},{value:"<code>create-next-app</code>",id:"create-next-app",level:4},{value:"Adding TypeScript to an existing project",id:"adding-typescript-to-an-existing-project",level:4},{value:"Understanding tsconfig.json in Typescript",id:"understanding-tsconfigjson-in-typescript",level:3},{value:"Compiler Options",id:"compiler-options",level:4},{value:"How to use Typescript with Next.js data fetching methods",id:"how-to-use-typescript-with-nextjs-data-fetching-methods",level:2},{value:"How to use Typescript in Next.js API routes",id:"how-to-use-typescript-in-nextjs-api-routes",level:2},{value:"How to configure absolute imports and module path aliases in tsconfig.json",id:"how-to-configure-absolute-imports-and-module-path-aliases-in-tsconfigjson",level:2},{value:"Disabling Typescript Errors in Production",id:"disabling-typescript-errors-in-production",level:2},{value:"Common Next.js TypeScript Issues and Workarounds",id:"common-nextjs-typescript-issues-and-workarounds",level:3},{value:"Debug TypeScript Errors",id:"debug-typescript-errors",level:4},{value:"Best practices of TypeScript using Next.js",id:"best-practices-of-typescript-using-nextjs",level:3},{value:"Project Organization",id:"project-organization",level:3},{value:"Writing Clean, Maintainable Code",id:"writing-clean-maintainable-code",level:4},{value:"Type Annotations",id:"type-annotations",level:3},{value:"Do Not Use <code>any</code>",id:"do-not-use-any",level:3},{value:"Implement Interfaces and Types",id:"implement-interfaces-and-types",level:3},{value:"Make Functions Small",id:"make-functions-small",level:3},{value:"Conclusion",id:"conclusion",level:2}],u={toc:g},y="wrapper";function d(e){var{components:t}=e,n=o(e,["components"]);return(0,a.yg)(y,r(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){i(e,t,n[t])}))}return e}({},u,n),{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("em",{parentName:"strong"},"This article was last updated on Jun 10, 2024 to add new section for tsconfig.json and add some tips on usage with Next.js"))),(0,a.yg)("h2",{id:"introduction"},"Introduction"),(0,a.yg)("p",null,"Next.js is an open source React framework for building single-page web applications. It comes with numerous out-of-the-box functionalities that make developing web applications faster and more interesting, thereby providing refined and elegant developer and user experiences."),(0,a.yg)("p",null,"Combining ",(0,a.yg)("strong",{parentName:"p"},"Next.js and TypeScript")," gives us superpowers to rapidly create applications with a good developer and user experiences. Every developer hates bugs. Especially pesky ones such as typos or trying to use or access undeclared variables. ",(0,a.yg)("strong",{parentName:"p"},"TypeScript")," helps catch these types of bugs early during development, and this is one of the many features that make integrating it with a tool like Next.js fantastic."),(0,a.yg)("p",null,"In this article, we'll look at how you can integrate TypeScript in your Next.js apps. We'll also explore reasons why you should consider using this tool in your Next.js projects and also talk about its benefits."),(0,a.yg)("p",null,"Steps we'll cover:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#what-is-typescript"},"What is TypeScript?")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#how-to-add-typescript-to-your-nextjs-app"},"How to add TypeScript to your Next.js app")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#how-to-use-typescript-in-nextjs-api-routes"},"How to use Typescript in Next.js API routes")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#disabling-typescript-errors-in-production"},"Disabling Typescript Errors in Production"))),(0,a.yg)("h2",{id:"what-is-typescript"},"What is TypeScript?"),(0,a.yg)("p",null,"It's a strict JavaScript superset used for large enterprise projects and writing programs that scale. In the end, TypeScript transpiles to plain JavaScript and can be used for developing applications on the client-side and server-side."),(0,a.yg)("p",null,"TypeScript is an object-oriented programming language that provides all JavaScript features and extra useful capabilities. These capabilities include static or dynamic type checking, error checking during compilation, type inference, and so on."),(0,a.yg)("h2",{id:"how-to-add-typescript-to-your-nextjs-app"},"How to add TypeScript to your Next.js app"),(0,a.yg)("p",null,"Next.js provides integrated support for TypeScript with built-in types for pages, API routes, the three data fetching methods, etc."),(0,a.yg)("p",null,"Basically, there are two ways in which we can add TypeScript to our project. The first is with ",(0,a.yg)("inlineCode",{parentName:"p"},"create-next-app"),", and the second is by adding TypeScript manually to an existing project."),(0,a.yg)("h4",{id:"create-next-app"},(0,a.yg)("inlineCode",{parentName:"h4"},"create-next-app")),(0,a.yg)("p",null,"We can bootstrap a Next.js application with TypeScript by adding a ",(0,a.yg)("inlineCode",{parentName:"p"},"--typescript")," or ",(0,a.yg)("inlineCode",{parentName:"p"},"--ts")," flag to the ",(0,a.yg)("inlineCode",{parentName:"p"},"create-next-app")," command like below:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"npx create-next-app@latest --ts\n# or\nnpx create-next-app@latest --typescript\n")),(0,a.yg)("h4",{id:"adding-typescript-to-an-existing-project"},"Adding TypeScript to an existing project"),(0,a.yg)("p",null,"Alternatively, we can also add TypeScript manually to an existing Next.js project."),(0,a.yg)("p",null,"First, you'll need to create a ",(0,a.yg)("inlineCode",{parentName:"p"},"tsconfig.json")," file in your project root folder. This file specifies the root files and the compiler options required to compile the project and is populated automatically by Next.js with default values."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"touch tsconfig.json\n")),(0,a.yg)("p",null,"Next, run ",(0,a.yg)("inlineCode",{parentName:"p"},"npm run dev")," or ",(0,a.yg)("inlineCode",{parentName:"p"},"yarn dev")," (if you use Yarn) to start the application development server."),(0,a.yg)("p",null,"Next.js will emit a message in the terminal with the following content and try to install the necessary TypeScript related packages:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"It looks like you're trying to use TypeScript but do not have the required package(s) installed.\nInstalling dependencies\n\nIf you are not trying to use TypeScript, please remove the tsconfig.json file from your package root (and any TypeScript files in your pages directory).\n\n\nInstalling devDependencies (yarn):\n- typescript\n- @types/react\n- @types/node\n\n[1/4] Resolving packages...\n[2/4] Fetching packages...\n\n")),(0,a.yg)("p",null,"When the installation is complete, open ",(0,a.yg)("inlineCode",{parentName:"p"},"tsconfig.json")," and you'll see it populated with values like below:"),(0,a.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-09-12-next-typescript/tsconfig.png",alt:"tsconfig"}),(0,a.yg)("br",null),(0,a.yg)("p",null,"If you noticed, Next.js also created a new file, ",(0,a.yg)("inlineCode",{parentName:"p"},"next-env.d.ts")," in the project root. This file ensures Next.js types are picked up by the compiler and should ",(0,a.yg)("strong",{parentName:"p"},"not")," be edited or deleted. Also, ensure the file is added to ",(0,a.yg)("inlineCode",{parentName:"p"},".gitignore")," to prevent it from being committed by version control like Git."),(0,a.yg)("p",null,"With this, you can now start creating files with ",(0,a.yg)("inlineCode",{parentName:"p"},".ts")," and ",(0,a.yg)("inlineCode",{parentName:"p"},".tsx")," extensions in your application."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Usage example")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'import React from "react";\n\ntype ProfileProps = {\n  profile: {\n    firstName: string;\n    lastName: string;\n    age: number;\n  };\n};\n\nconst Profile: React.FunctionComponent<ProfileProps> = ({\n  profile,\n}): JSX.Element => {\n  return (\n    <>\n      <p>Profile</p>\n      <div>Welcome, {profile.firstName}</div>\n    </>\n  );\n};\n\nexport default Profile;\n')),(0,a.yg)("h3",{id:"understanding-tsconfigjson-in-typescript"},"Understanding tsconfig.json in Typescript"),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"tsconfig.json")," is the main piece of configuration for TypeScript. This file contains all the compiler options and settings for the TypeScript compiler to know exactly how you want your code transpiled. Here's a structure, which the typical ",(0,a.yg)("inlineCode",{parentName:"p"},"tsconfig.json")," should have:"),(0,a.yg)("h4",{id:"compiler-options"},"Compiler Options"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("strong",{parentName:"li"}," ",(0,a.yg)("inlineCode",{parentName:"strong"}," target")," :"),' It points to the version of JavaScript that the TypeScript code compiles into. Standard settings are "es5" and "es6".')),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-json"},'"target": "es5"\n')),(0,a.yg)("ol",{start:2},(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("strong",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"strong"}," lib"),":"),' This specifies the list of library files to include in the compilation. Most of the time, this will be "dom," "dom. iterable", and "next" together for a web project.')),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-json"},'"lib": ["dom", "dom.iterable", "esnext"]\n')),(0,a.yg)("ol",{start:3},(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("strong",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"strong"},"allowJs"),":")," Allows JavaScript file compilation. This may be helpful in introducing TypeScript gradually into an existing JavaScript codebase.")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-json"},'"allowJs": true\n')),(0,a.yg)("ol",{start:4},(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("inlineCode",{parentName:"li"},"skipLibCheck"),": This will avoid the checking of declaration files (",(0,a.yg)("inlineCode",{parentName:"li"},".d.ts"),") and would consequently help in faster compiling.")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-json"},'"skipLibCheck": true\n')),(0,a.yg)("ol",{start:5},(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("strong",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"strong"},"strict")),": Enable strict option checking. This option, if true, will enable strict rules by which your code will become more resilient.")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-json"},'"strict": false\n')),(0,a.yg)("ol",{start:6},(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("strong",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"strong"},"forceConsistentCasingInFileNames"),":")," Ensures that filenames are consistently cased const.")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-json"},'"forceConsistentCasingInFileNames": true\n')),(0,a.yg)("ol",{start:7},(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("strong",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"strong"},"noEmit"),":")," The output files are not emitted by the compiler. This is a pretty useful option for projects where we are only concerned with type checking and do not want to take a look at the final JavaScript file.")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-json"},'"noEmit": true\n')),(0,a.yg)("ol",{start:8},(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("strong",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"strong"},"esModuleInterop"),":")," This sets up interoperability between CommonJS and ES Modules; thus, one can import files in CommonJS format with the ES Module syntax.")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-json"},'"esModuleInterop": true\n')),(0,a.yg)("ol",{start:9},(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("strong",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"strong"},"module"),":")," Defines how the module code should be generated. The most common values, appropriate for modern projects, are these, which include ",(0,a.yg)("inlineCode",{parentName:"li"},"esnext"),".")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-json"},'"module": "esnext"\n')),(0,a.yg)("ol",{start:10},(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("strong",{parentName:"li"}," ",(0,a.yg)("inlineCode",{parentName:"strong"},"moduleResolution"),":"),' Defines module resolution strategy: The preferred value for a Node.js application is "node."')),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-json"},'"moduleResolution": "node"\n')),(0,a.yg)("ol",{start:11},(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("strong",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"strong"},"resolveJsonModule"),":")," Enables import for JSON modules in some scenarios, e.g., while working with the configuration file or in a different manner.")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-json"},'"resolveJsonModule": true\n')),(0,a.yg)("ol",{start:12},(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("strong",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"strong"},"isolatedModules"),":")," Treat each file as a standalone module. This is likely to help in making the build faster. ```json")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'"isolatedModules": true\n\n')),(0,a.yg)("ol",{start:13},(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("strong",{parentName:"li"}," ",(0,a.yg)("inlineCode",{parentName:"strong"},"jsx"),":")," Code generation method of the JSX. When set to ",(0,a.yg)("inlineCode",{parentName:"li"},"preserve"),", JSX is kept as is and not rounded on Next.js to handle it.")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-json"},'\n"jsx": "preserve"\n')),(0,a.yg)("ol",{start:14},(0,a.yg)("li",{parentName:"ol"},"Include and Exclude")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"include"),":")," Specifies the files or directories to include in the compilation. Typically, this includes ",(0,a.yg)("inlineCode",{parentName:"p"},"next-env.d.ts")," and all ",(0,a.yg)("inlineCode",{parentName:"p"},".ts")," and ",(0,a.yg)("inlineCode",{parentName:"p"},".tsx")," files."),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-json"},'"include": ["next-env.d.ts", "**/*.ts", "**/*.tsx"]\n'))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"exclude"),":")," Specifies the files or directories to exclude from the compilation. This typically includes ",(0,a.yg)("inlineCode",{parentName:"p"},"node_modules")," to avoid unnecessary type checking of external libraries."),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-json"},'"exclude": ["node_modules"]\n')))),(0,a.yg)("h2",{id:"how-to-use-typescript-with-nextjs-data-fetching-methods"},"How to use Typescript with Next.js data fetching methods"),(0,a.yg)("p",null,"Next.js comes with built-in types for all its three data fetching methods (",(0,a.yg)("inlineCode",{parentName:"p"},"getStaticProps"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"getServerSideProps"),", and ",(0,a.yg)("inlineCode",{parentName:"p"},"getStaticPaths"),")."),(0,a.yg)("p",null,"Here's how to use them in your code:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'import { GetStaticProps, GetStaticPaths, GetServerSideProps } from "next";\n\nexport const getStaticProps: GetStaticProps = async (context) => {};\n\nexport const getStaticPaths: GetStaticPaths = async () => {};\n\nexport const getServerSideProps: GetServerSideProps = async (context) => {};\n')),(0,a.yg)("p",null,"Next.js also provides built-in types to infer the types for props from ",(0,a.yg)("inlineCode",{parentName:"p"},"getServerSideProps")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"getStaticProps"),"."),(0,a.yg)("p",null,"If you want to get inferred typings for your props, you can use ",(0,a.yg)("inlineCode",{parentName:"p"},"InferGetStaticPropsType<typeof getStaticProps>")," or ",(0,a.yg)("inlineCode",{parentName:"p"},"InferGetServerSidePropsType<typeof getServerSideProps>")," in a page component."),(0,a.yg)("p",null,"Let's say we're expecting some data from an API that we need to pre-render at build time.\nInstead of writing repetitive code like the below:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx",metastring:'title="index.tsx"',title:'"index.tsx"'},"type PostProps= {\n    userId: number,\n    id: number,\n    title: string,\n    body: string\n  }\n\nexport const getStaticProps = async () => {\n      const response = await fetch('https://jsonplaceholder.typicode.com/posts');\n      const posts: PostProps[] = await response.json();\n\n    return {\n      props: {\n        posts,\n      },\n    }\n  }\n\nfunction PostPage({ posts }: { posts: PostProps }) {\n    ...\n  }\n\nexport default PostPage;\n")),(0,a.yg)("p",null,"We can use ",(0,a.yg)("inlineCode",{parentName:"p"},"InferGetStaticPropsType")," to get inferred typings for the ",(0,a.yg)("inlineCode",{parentName:"p"},"posts")," prop. Add and refactor the code with the highlighted like below:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx",metastring:'title="index.tsx"',title:'"index.tsx"'},"//highlight-next-line\nimport { InferGetStaticPropsType } from 'next'\n\n...\n\n //highlight-next-line\nfunction PostPage({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {}\n\nexport default PostPage\n")),(0,a.yg)("p",null,"You can also use this same method when using ",(0,a.yg)("inlineCode",{parentName:"p"},"getServerSideProps"),"."),(0,a.yg)("h2",{id:"how-to-use-typescript-in-nextjs-api-routes"},"How to use Typescript in Next.js API routes"),(0,a.yg)("p",null,"Next.js also comes with built-in types for API routes. which we can access like below:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'import type { NextApiRequest, NextApiResponse } from "next";\n\nexport default (req: NextApiRequest, res: NextApiResponse) => {\n  res.status(200).json({ age: "25" });\n};\n')),(0,a.yg)("p",null,"We can also specify custom types for the response data:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-typescript"},'import type { NextApiRequest, NextApiResponse } from "next";\n\ntype Data = {\n  name: string;\n};\n\nexport default (req: NextApiRequest, res: NextApiResponse<Data>) => {\n  res.status(200).json({ age: "25" });\n};\n')),(0,a.yg)("h2",{id:"how-to-configure-absolute-imports-and-module-path-aliases-in-tsconfigjson"},"How to configure absolute imports and module path aliases in tsconfig.json"),(0,a.yg)("p",null,"Do you relate with the pain of having to do something like this?"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},"Import { fetchUserProfile } from '../../../../utils'\nImport UserProfile from '../../../UserProfile'\n")),(0,a.yg)("p",null,"How about if you could do something like?"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-typescript"},"Import { fetchUserProfile } from '/@utils'\nImport UserProfile from '@components/UserProfile'\n")),(0,a.yg)("p",null,"Well, to achieve this, we can configure path aliases in ",(0,a.yg)("inlineCode",{parentName:"p"},"tsconfig.json")," so we can conveniently import modules across our application. TypeScript path aliases allow us to create aliases or shortcuts for absolute paths in the application, which we can resolve to. Next.js also automatically supports path aliases, so we don't have to do many configurations."),(0,a.yg)("p",null,"For example, if you have a file in your project importing a module with a path structure like ",(0,a.yg)("inlineCode",{parentName:"p"},"/components/MUIComponents/ButtonGroup/"),", instead of trying to write an ugly code such as this:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'import React from "react";\nimport ButtonGroup from import ButtonGroup from "../../components/MUIComponents/ButtonGroup";\n\nconst User = () => {\n  return (\n    <>\n      <h1>User Page</h1>\n      <div>\n        <ButtonGroup />\n      </div>\n    </>\n  );\n};\n\nexport default User;\n')),(0,a.yg)("p",null,"We can create a path alias for all files in the ",(0,a.yg)("inlineCode",{parentName:"p"},"MUIComponents")," folder for easy access using the ",(0,a.yg)("inlineCode",{parentName:"p"},"baseUrl")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"path")," options in ",(0,a.yg)("inlineCode",{parentName:"p"},"tsconfig.json")," like so:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-json"},'...\n"baseUrl": ".",\n"paths": {\n    "@/MUIComponents/*": ["components/MUIComponents/*"]\n},\n...\n')),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"baseUrl")," lets us specify a root URL to use for our imports and ",(0,a.yg)("inlineCode",{parentName:"p"},"paths")," lets us configure path aliases. You can read more about module path aliases ",(0,a.yg)("a",{parentName:"p",href:"https://nextjs.org/docs/advanced-features/module-path-aliases"},"here"),"."),(0,a.yg)("admonition",{type:"note"},(0,a.yg)("p",{parentName:"admonition"},"You can use a ",(0,a.yg)("inlineCode",{parentName:"p"},"jsconfig.json")," file instead if you're not using TypeScript in your project.")),(0,a.yg)("p",null,"Now we can use the alias in our application like so:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'import ButtonGroup from "@/MUIComponents/ButtonGroup";\n\nconst User = () => {\n  return (\n    <>\n      <h1>User Page</h1>\n      <div>\n        <ButtonGroup />\n      </div>\n    </>\n  );\n};\n\nexport default User;\n')),(0,a.yg)("p",null,"This looks way better and straightforward."),(0,a.yg)("br",null),(0,a.yg)("div",null,(0,a.yg)("a",{href:"https://discord.gg/refine"},(0,a.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/discord_big_blue.png",alt:"discord banner"}))),(0,a.yg)("h2",{id:"disabling-typescript-errors-in-production"},"Disabling Typescript Errors in Production"),(0,a.yg)("p",null,"If you happen to have TypeScript errors while running ",(0,a.yg)("inlineCode",{parentName:"p"},"next build"),", Next.js will fail the build but you can disable the type checks if you wish."),(0,a.yg)("p",null,"To disable the type checking step, enable the ",(0,a.yg)("inlineCode",{parentName:"p"},"ignoreBuildErrors")," option in ",(0,a.yg)("inlineCode",{parentName:"p"},"next.config.js")," like so:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts",metastring:'title="next.config.js"',title:'"next.config.js"'},"module.exports = {\n  typescript: {\n    // !! WARN !!\n    // Dangerously allow production builds to successfully complete even if\n    // your project has type errors.\n    // !! WARN !!\n    ignoreBuildErrors: true,\n  },\n};\n")),(0,a.yg)("admonition",{type:"note"},(0,a.yg)("p",{parentName:"admonition"},"Make sure you really know what you're doing before using this option.")),(0,a.yg)("h3",{id:"common-nextjs-typescript-issues-and-workarounds"},"Common Next.js TypeScript Issues and Workarounds"),(0,a.yg)("h4",{id:"debug-typescript-errors"},"Debug TypeScript Errors"),(0,a.yg)("p",null,"When you run into a TypeScript error, the first thing you should do is read very carefully what the error message is telling you. Many times, it explains well what has gone wrong and where. Use this to pinpoint and fix issues in your code. Here are a few tips:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Check Type Definitions"),": Ensure all your types are well defined and imported."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Use Type Assertions:"),' Use type assertions to tell TypeScript, "trust me, I know what I\'m doing."'),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Update Dependencies"),": Sometimes updating TypeScript or your type definitions (",(0,a.yg)("inlineCode",{parentName:"li"},"@types/react")," for example) will make the errors go away.")),(0,a.yg)("h3",{id:"best-practices-of-typescript-using-nextjs"},"Best practices of TypeScript using Next.js"),(0,a.yg)("h3",{id:"project-organization"},"Project Organization"),(0,a.yg)("p",null,"A well-structured project allows you to actually manage and scale your application correctly. Here are some bunch of tips on how to structure your Next.js app using TypeScript:"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"Sorting Files by Attribute:"),"\nWhen organizing the directories, group the files that relate to a given feature/module together. For example: elements, modules, and templates. This makes code management much easier and file retrieval more convenient."),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre"},"/src\n  /parts\n  /pages\n  /helpers\n  /styles\n  /services\n"))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"Use a Common Naming Convention:"),"\nFollow the file and folder naming convention. One such example is the naming of files in camelCase and React component names in PascalCase."),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre"},"/components\n  header.ts\n  Profile.ts\n"))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"Make it Human:"),"\nModularize your code by separation of concerns. Put your business logic in service files and keep your components' functionality focused on the presentation."),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre"},"/services\n  userService.ts\n/parts\n  UserProfile.tsx\n")))),(0,a.yg)("h4",{id:"writing-clean-maintainable-code"},"Writing Clean, Maintainable Code"),(0,a.yg)("p",null,"Clean and maintainable code ensures better readability and less technical debt. Here are some of the best practices for writing clean TypeScript code in Next.js:"),(0,a.yg)("h3",{id:"type-annotations"},"Type Annotations"),(0,a.yg)("p",null,"Types should be declared expressly when declaring function parameters, return values, and variables. This makes your code predictable and more accessible to follow."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-typescript"},"const add = (a: number, b: number): number => {\n  return a + b;\n};\n")),(0,a.yg)("h3",{id:"do-not-use-any"},"Do Not Use ",(0,a.yg)("inlineCode",{parentName:"h3"},"any")),(0,a.yg)("p",null,"Do not use ",(0,a.yg)("inlineCode",{parentName:"p"},"any")," at all. It is the same as not using TypeScript. Better to use some types or generics."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-typescript"},"const fetchData = async (): Promise<User[]> => {\n  // Fetch user data\n};\n")),(0,a.yg)("h3",{id:"implement-interfaces-and-types"},"Implement Interfaces and Types"),(0,a.yg)("p",null,"Use interfaces and type aliases to write object shapes and function signatures. This will bring you higher reusability and readability in only one place within your code."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-typescript"},"interface User {\n  id: number;\n  name: string;\n  email: string;\n}\n")),(0,a.yg)("h3",{id:"make-functions-small"},"Make Functions Small"),(0,a.yg)("p",null,"The key is that the small functions become easily reusable, making it a breeze to test and maintain."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-typescript"},"const calculateTotal = (prices: number[]): number => {\n  return prices.reduce((total, price) => total + price, 0);\n};\n")),(0,a.yg)("h2",{id:"conclusion"},"Conclusion"),(0,a.yg)("p",null,"We covered how to get started with ",(0,a.yg)("strong",{parentName:"p"},"TypeScript in your Next.js")," applications. We also talked about the importance and benefits associated with combining TypeScript capabilities with Next.js for a faster and easier application development experience. We hope this article helps you consider integrating ",(0,a.yg)("strong",{parentName:"p"},"TypeScript and Next.js")," in your next applications."))}d.isMDXComponent=!0}}]);