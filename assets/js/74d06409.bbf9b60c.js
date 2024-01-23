"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[12233],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),h=r,u=m["".concat(s,".").concat(h)]||m[h]||d[h]||i;return n?a.createElement(u,o(o({ref:t},c),{},{components:n})):a.createElement(u,o({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},40803:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>f,frontMatter:()=>l,metadata:()=>p,toc:()=>d});n(67294);var a=n(3905);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const l={title:"Creating a React search bar and content filtering components",description:"Article about how to create Search bar and filter component in React",slug:"react-search-bar-and-filtering",authors:"madars_biss",tags:["react","refine","tutorial"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-08-26-react-content-filtering/refine-filter-social.png",hide_table_of_contents:!1},s=void 0,p={permalink:"/blog/react-search-bar-and-filtering",source:"@site/blog/2022-08-26-react-content-filtering.md",title:"Creating a React search bar and content filtering components",description:"Article about how to create Search bar and filter component in React",date:"2022-08-26T00:00:00.000Z",formattedDate:"August 26, 2022",tags:[{label:"react",permalink:"/blog/tags/react"},{label:"refine",permalink:"/blog/tags/refine"},{label:"tutorial",permalink:"/blog/tags/tutorial"}],readingTime:13.765,hasTruncateMarker:!0,authors:[{name:"Madars Bi\u0161s",title:"Software Developer",url:"https://github.com/madzadev",imageURL:"https://github.com/madzadev.png",key:"madars_biss"}],frontMatter:{title:"Creating a React search bar and content filtering components",description:"Article about how to create Search bar and filter component in React",slug:"react-search-bar-and-filtering",authors:"madars_biss",tags:["react","refine","tutorial"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-08-26-react-content-filtering/refine-filter-social.png",hide_table_of_contents:!1},prevItem:{title:"Javascript Currying - Variadic Currying",permalink:"/blog/javascript-variadic-currying"},nextItem:{title:"Material UI Icons in React",permalink:"/blog/mui-icons-in-react"},relatedPosts:[{title:"How to Import CSV File with React",description:"In this guide, I will show you how to import CSV files using React and JavaScript.",permalink:"/blog/how-to-import-csv",formattedDate:"January 18, 2022",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:4.365,date:"2022-01-18T00:00:00.000Z"},{title:"refine vs RedwoodJS",description:"We will compare two open source React frameworks, that can be used to build CRUD applications",permalink:"/blog/refine-vs-redwood-js",formattedDate:"January 23, 2023",authors:[{name:"Madars Bi\u0161s",title:"Software Developer",url:"https://github.com/madzadev",imageURL:"https://github.com/madzadev.png",key:"madars_biss"}],readingTime:26.585,date:"2023-01-23T00:00:00.000Z"},{title:"Setting Up the Client App",description:"We'll initialize our Pixels app using refine and get familiar with the boilerplate code to be created with the create refine-app CLI tool.",permalink:"/blog/refine-pixels-2",formattedDate:"February 15, 2023",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:15.04,date:"2023-02-15T00:00:00.000Z"}],authorPosts:[{title:"refine vs Blitz.js",description:"We will take a closer look at how to set both up, what are their internal builds, how they handle the data sources, how to implement the CRUD functionality, add authentication, and how to deploy them to production.",permalink:"/blog/react-admin-frameworks-refine-vs-blitz-js",formattedDate:"March 15, 2023",authors:[{name:"Madars Bi\u0161s",title:"Software Developer",url:"https://github.com/madzadev",imageURL:"https://github.com/madzadev.png",key:"madars_biss"}],readingTime:18.95,date:"2023-03-15T00:00:00.000Z"},{title:"refine vs RedwoodJS",description:"We will compare two open source React frameworks, that can be used to build CRUD applications",permalink:"/blog/refine-vs-redwood-js",formattedDate:"January 23, 2023",authors:[{name:"Madars Bi\u0161s",title:"Software Developer",url:"https://github.com/madzadev",imageURL:"https://github.com/madzadev.png",key:"madars_biss"}],readingTime:26.585,date:"2023-01-23T00:00:00.000Z"}]},c={authorsImageUrls:[void 0]},d=[{value:"Introduction",id:"introduction",level:2},{value:"Why refine framework?",id:"why-refine-framework",level:2},{value:"App wireframe",id:"app-wireframe",level:2},{value:"Setting up the refine",id:"setting-up-the-refine",level:2},{value:"Add global styling",id:"add-global-styling",level:2},{value:"Creating the components",id:"creating-the-components",level:2},{value:"Creating a filter box",id:"creating-a-filter-box",level:3},{value:"Creating a search bar",id:"creating-a-search-bar",level:3},{value:"Content card",id:"content-card",level:3},{value:"Implementing the logic",id:"implementing-the-logic",level:2},{value:"Testing the app",id:"testing-the-app",level:2},{value:"Conclusion",id:"conclusion",level:2},{value:"Example",id:"example",level:2}],m=(h="CodeSandboxExample",function(e){return console.warn("Component "+h+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)});var h;const u={toc:d};function f(e){var{components:t}=e,n=o(e,["components"]);return(0,a.kt)("wrapper",i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){r(e,t,n[t])}))}return e}({},u,n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"Filtering systems are common for most modern web applications. They are especially useful if there are large amounts of data. They allow users to save time and easily access the information they are looking for."),(0,a.kt)("p",null,"You will often meet various implementations in e-commerce stores, human resource management systems, video/blogging platforms, and many other sites."),(0,a.kt)("p",null,"Steps we'll cover:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#why-refine-framework"},"Why refine framework?")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#app-wireframe"},"App wireframe")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#setting-up-the-refine"},"Setting up the refine")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#add-global-styling"},"Add global styling")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#creating-the-components"},"Creating the components"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#creating-a-filter-box"},"Creating a filter box")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#creating-a-search-bar"},"Creating a search bar")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#content-card"},"Content card")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#implementing-the-logic"},"Implementing the logic")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#testing-the-app"},"Testing the app")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#conclusion"},"Conclusion"))),(0,a.kt)("p",null,"Today we will be building a filtering system that will let us sort the results through filter buttons and custom search queries."),(0,a.kt)("img",{className:"border border-gray-200 rounded",src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-08-26-react-content-filtering/final-app.jpeg",alt:"Final app view"}),(0,a.kt)("p",null,"We will use the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/refinedev/refine"},"refine")," framework, which is based on React and allows users to build tools rapidly."),(0,a.kt)("h2",{id:"why-refine-framework"},"Why refine framework?"),(0,a.kt)("p",null,"Every refine project is easy to set up since it allows users to use the interactive terminal wizard. It takes less than a minute, with complete user control and no trade-offs between speed and flexibility."),(0,a.kt)("p",null,"refine includes a built-in data provider that enables users to connect to any API. The data providers come with built-in support for pagination, sorting, filtering, and other features. refine also provides some useful hooks and components that make it easier to build the app."),(0,a.kt)("p",null,"Just like data providers, refine also provides providers for authentication, authorization, and internationalization etc. These providers are optional and can be easily replaced with custom ones."),(0,a.kt)("p",null,"refine is a headless framework, meaning it does not include any UI components by default. This allows users to use any UI library they prefer or even create their own."),(0,a.kt)("h2",{id:"app-wireframe"},"App wireframe"),(0,a.kt)("p",null,"The whole application will be wrapped in the layout component."),(0,a.kt)("p",null,"We will place the filtering UI on the top section of the app. There will be separate filter buttons for different types of content and a search bar, allowing users to narrow down their searches."),(0,a.kt)("p",null,"The content cards will be listed directly below.\nWhen putting everything into the wireframe, we get the following schema:"),(0,a.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-08-26-react-content-filtering/wireframe.jpeg",alt:"wireframe"}),(0,a.kt)("h2",{id:"setting-up-the-refine"},"Setting up the refine"),(0,a.kt)("p",null,"We'll use the ",(0,a.kt)("inlineCode",{parentName:"p"},"npm create refine-app")," command to interactively initialize the project, which will let us choose the project name, package manager, and other options."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm create refine-app@latest filtering-tutorial\n")),(0,a.kt)("p",null,"Select the following optionYs when prompted:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"\u2714 Choose a project template \xb7 refine-vite\n\u2714 What would you like to name your project?: \xb7 filtering-tutorial\n\u2714 Choose your backend service to connect: \xb7 REST API\n\u2714 Do you want to use a UI Framework?: \xb7 Headless\n\u2714 Do you want to add example pages?: \xb7 No\n\u2714 Do you need any Authentication logic?: \xb7 None\n\u2714 Do you need i18n (Internationalization) support?: \xb7 No\n\u2714 Choose a package manager: \xb7 npm\n")),(0,a.kt)("p",null,"Once the setup is complete, navigate to the project folder and start your app with:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm run dev\n")),(0,a.kt)("p",null,"After the app has started, you should see the following page:"),(0,a.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-08-26-react-content-filtering/welcome.jpeg",alt:"Welcome Page"}),(0,a.kt)("h2",{id:"add-global-styling"},"Add global styling"),(0,a.kt)("p",null,"refine is a headless Framework, so it does not include any UI components by default. However, refine supports all major UI libraries, including ",(0,a.kt)("a",{parentName:"p",href:"https://ant.design/"},"Ant Design"),", ",(0,a.kt)("a",{parentName:"p",href:"https://material-ui.com/"},"Material UI"),", ",(0,a.kt)("a",{parentName:"p",href:"https://mantine.dev/"},"Mantine"),", and ",(0,a.kt)("a",{parentName:"p",href:"https://chakra-ui.com/"},"Chakra UI"),"."),(0,a.kt)("p",null,"For this tutorial, we selected headless option, so we will create our own UI components. Let's start by adding some global styles."),(0,a.kt)("p",null,"In order to create the global styles, we will replace the ",(0,a.kt)("inlineCode",{parentName:"p"},"src/App.css")," file with the following code:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="src/App.css"',title:'"src/App.css"'},'* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: "Montserrat", sans-serif;\n}\n\nbody {\n  padding: 20px;\n  height: 100vh;\n  background-color: #fee140;\n  background-image: linear-gradient(90deg, #fee140 0%, #fa709a 100%);\n}\n')),(0,a.kt)("p",null,"We don't need to import the ",(0,a.kt)("inlineCode",{parentName:"p"},"App.css")," file anywhere since it is already imported in the ",(0,a.kt)("inlineCode",{parentName:"p"},"src/index.tsx")," file by default."),(0,a.kt)("h2",{id:"creating-the-components"},"Creating the components"),(0,a.kt)("p",null,"In this section, we will create the components that will be used in the app. We will create a filter box, a search bar, and a content card."),(0,a.kt)("h3",{id:"creating-a-filter-box"},"Creating a filter box"),(0,a.kt)("p",null,"The filter box will contain the filter buttons. It will be used to select the content based on its type - draft, published, or rejected."),(0,a.kt)("p",null,"To create the component files, run the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir src/components/filter && touch src/components/filter/index.tsx src/components/filter/index.module.css\n")),(0,a.kt)("p",null,"After creating the files, we will add the following code to the ",(0,a.kt)("inlineCode",{parentName:"p"},"src/components/filter/index.tsx")," file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="src/components/filter/index.tsx"',title:'"src/components/filter/index.tsx"'},'import styles from "./index.module.css";\n\nconst capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();\n\nexport const Filter = ({\n  title,\n  isActive,\n  onClick,\n}: {\n  title: string;\n  isActive: boolean;\n  onClick: React.MouseEventHandler;\n}) => {\n  return (\n    <div className={styles.wrapper} onClick={onClick} style={{ backgroundColor: `${isActive ? "lavender" : "white"}` }}>\n      <div\n        className={styles.circle}\n        style={{\n          borderColor: `${title === "draft" ? "gold" : title === "rejected" ? "tomato" : "limegreen"}`,\n        }}\n      ></div>\n      <h3 className={styles.title}>{capitalize(title)}</h3>\n    </div>\n  );\n};\n')),(0,a.kt)("p",null,"We began by importing the style sheet file."),(0,a.kt)("p",null,"Next, we created a capitalize function that capitalizes the filter name used in the button."),(0,a.kt)("p",null,"We used the ",(0,a.kt)("inlineCode",{parentName:"p"},"isActive")," prop to determine if the filter is active and assigned the background color accordingly using JavaScript template syntax."),(0,a.kt)("p",null,"Additionally, we used the title prop to assign the filter type and give it a specific color tag. The title prop is also used for the name of the filter."),(0,a.kt)("p",null,"Finally, we used the ",(0,a.kt)("inlineCode",{parentName:"p"},"onClick")," prop to control the behavior when the filter button is pressed. We will pass it in during the later phase of the tutorial when implementing the main logic."),(0,a.kt)("p",null,"To style the component, we will add the following code to the ",(0,a.kt)("inlineCode",{parentName:"p"},"src/components/filter/index.module.css")," file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="src/components/filter/index.module.css"',title:'"src/components/filter/index.module.css"'},".wrapper {\n  display: flex;\n  padding: 10px 20px;\n  margin-bottom: 20px;\n  background-color: white;\n  align-items: center;\n  border-radius: 10px;\n  transition: transform 0.2s;\n}\n\n.wrapper:hover {\n  cursor: pointer;\n  transform: scale(1.05);\n}\n\n.title {\n  text-align: left;\n}\n\n.circle {\n  display: flex;\n  width: 20px;\n  height: 20px;\n  margin-right: 30px;\n  border-radius: 50%;\n  border-style: solid;\n  border-width: 5px;\n}\n")),(0,a.kt)("p",null,"Initially, we set the flex layout for the component, along with some padding and margin. We then set the background color of the button to white and aligned the items vertically."),(0,a.kt)("p",null,"Next, we implemented the hover effect, which zooms in the button when the user moves the cursor over it."),(0,a.kt)("p",null,"We positioned the button's title to the left for the button's contents. For the color tag, we used a flex layout, added static width and height, set some margins, and described the border parameters."),(0,a.kt)("br",null),(0,a.kt)("div",null,(0,a.kt)("a",{href:"https://github.com/refinedev/refine"},(0,a.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/github-support-banner.png",alt:"github support banner"}))),(0,a.kt)("h3",{id:"creating-a-search-bar"},"Creating a search bar"),(0,a.kt)("p",null,"The search bar will be used to filter the content based on the user's search queries."),(0,a.kt)("p",null,"To create the component files, run the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir src/components/search && touch src/components/search/index.tsx src/components/search/index.module.css\n")),(0,a.kt)("p",null,"After creating the files, we will add the following code to the ",(0,a.kt)("inlineCode",{parentName:"p"},"src/components/search/index.tsx")," file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="src/components/search/index.tsx"',title:'"src/components/search/index.tsx"'},'import styles from "./index.module.css";\n\nexport const Search = ({ onChange }: { onChange: React.ChangeEventHandler }) => {\n  return <input className={styles.search} type="text" onChange={onChange} placeholder="Search by the title ..." />;\n};\n')),(0,a.kt)("p",null,"We began by importing the style sheet."),(0,a.kt)("p",null,"Next, we set the input type to text and added placeholder text to be displayed when there is no input. We also used the ",(0,a.kt)("inlineCode",{parentName:"p"},"onChange")," prop to determine the behavior when the user enters input."),(0,a.kt)("p",null,"To style the component, we will add the following code to the ",(0,a.kt)("inlineCode",{parentName:"p"},"src/components/search/index.module.css")," file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="src/components/search/index.module.css"',title:'"src/components/search/index.module.css"'},".search {\n  width: 100%;\n  margin-bottom: 50px;\n  padding: 20px;\n  border: none;\n  border-radius: 10px;\n  font-size: 20px;\n}\n")),(0,a.kt)("p",null,"To style the search bar, we made it use all the available width of the parent wrapper, added margin and padding, removed the default border, made the search box rounded, and defined a specific font size."),(0,a.kt)("h3",{id:"content-card"},"Content card"),(0,a.kt)("p",null,"The content card will be used to display the content."),(0,a.kt)("p",null,"To create the component files, run the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir src/components/card && touch src/components/card/index.tsx src/components/card/index.module.css\n")),(0,a.kt)("p",null,"After creating the files, we will add the following code to the ",(0,a.kt)("inlineCode",{parentName:"p"},"src/components/card/index.tsx")," file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="src/components/card/index.tsx"',title:'"src/components/card/index.tsx"'},'import styles from "./index.module.css";\n\nimport { motion } from "framer-motion";\n\nexport const Card = ({ title, status }: { title: string; status: string }) => {\n  return (\n    <motion.div className={styles.wrapper} animate={{ opacity: 1 }} initial={{ opacity: 0 }} exit={{ opacity: 0 }}>\n      <div\n        className={styles.circle}\n        style={{\n          borderColor: `${status === "draft" ? "gold" : status === "rejected" ? "tomato" : "limegreen"}`,\n        }}\n      ></div>\n      <h3 className={styles.title}>{title}</h3>\n    </motion.div>\n  );\n};\n')),(0,a.kt)("p",null,"We began by importing the style sheet."),(0,a.kt)("p",null,"Next, we imported the ",(0,a.kt)("inlineCode",{parentName:"p"},"framer-motion")," library to animate the cards when the filters are applied. We passed it to the wrapper ",(0,a.kt)("inlineCode",{parentName:"p"},"div")," and set it to animate from invisible to fully visible on entry and back to invisible on exit."),(0,a.kt)("p",null,"We used the ",(0,a.kt)("inlineCode",{parentName:"p"},"status")," prop to assign a specific color tag to each card."),(0,a.kt)("p",null,"Finally, we used the ",(0,a.kt)("inlineCode",{parentName:"p"},"title")," prop to display the content of the card."),(0,a.kt)("p",null,"To style the component, we will add the following code to the ",(0,a.kt)("inlineCode",{parentName:"p"},"src/components/card/index.module.css")," file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="src/components/card/index.module.css"',title:'"src/components/card/index.module.css"'},".wrapper {\n  display: grid;\n  grid-template-columns: 50px auto;\n  padding: 20px;\n  margin-bottom: 20px;\n  background-color: white;\n  font-weight: bold;\n  align-items: center;\n  border-radius: 10px;\n}\n\n.wrapper:hover {\n  cursor: pointer;\n}\n\n.circle {\n  display: inline-block;\n  width: 20px;\n  height: 20px;\n  border-style: solid;\n  border-width: 5px;\n  border-radius: 50%;\n}\n")),(0,a.kt)("p",null,"To style the content card, we used a grid layout with two columns, added padding and margin, set the background color to white, bolded the font, centered everything vertically, and assigned slightly rounded borders."),(0,a.kt)("p",null,"We also improved the user experience by changing the cursor to a pointer when the user hovers over the content cards."),(0,a.kt)("p",null,"For the color tag, we used an ",(0,a.kt)("inlineCode",{parentName:"p"},"inline-block")," layout with specified width and height and set custom border properties."),(0,a.kt)("h2",{id:"implementing-the-logic"},"Implementing the logic"),(0,a.kt)("p",null,"Now that we have created the components, we will implement the logic of the app."),(0,a.kt)("p",null,"To do so, run the following command to create component files:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir src/pages && mkdir src/pages/posts && touch src/pages/posts/index.tsx src/pages/posts/index.module.css\n")),(0,a.kt)("p",null,"After creating the files, we will add the following code to the ",(0,a.kt)("inlineCode",{parentName:"p"},"src/pages/posts/index.tsx")," file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="src/pages/posts/index.tsx"',title:'"src/pages/posts/index.tsx"'},'import { useState } from "react";\nimport { useMany } from "@refinedev/core";\nimport { motion, AnimatePresence } from "framer-motion";\n\nimport { Filter } from "../../components/filter";\nimport { Search } from "../../components/search";\nimport { Card } from "../../components/card";\n\nimport styles from "./index.module.css";\n\nexport const Posts = () => {\n  const [inputValue, setInputValue] = useState("");\n  const [activeFilter, setActiveFilter] = useState("");\n\n  const posts = useMany<{\n    id: number;\n    title: string;\n    status: string;\n  }>({\n    resource: "posts",\n    ids: Array.from(Array(8).keys()).slice(1),\n  }).data?.data;\n\n  const filters: string[] = ["published", "draft", "rejected"];\n\n  return (\n    <motion.div>\n      <div className={styles.filters}>\n        {filters.map((filter, index) => {\n          return (\n            <Filter\n              key={index}\n              title={filter}\n              isActive={filter === activeFilter}\n              onClick={(e: React.MouseEvent) => {\n                const el = e.target as HTMLElement;\n                el.textContent?.toLowerCase() !== activeFilter ? setActiveFilter(filter) : setActiveFilter("");\n              }}\n            />\n          );\n        })}\n      </div>\n      <Search\n        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {\n          setInputValue(e.target.value);\n        }}\n      />\n      <AnimatePresence>\n        {posts\n          ?.filter((el) => el.title.toLowerCase().includes(inputValue.toLowerCase()))\n          .filter((e) => e.status.includes(activeFilter))\n          .map((post: { title: string; status: string }, index: number) => {\n            return <Card key={index} title={post.title} status={post.status} />;\n          })}\n      </AnimatePresence>\n    </motion.div>\n  );\n};\n')),(0,a.kt)("p",null,"We first imported the ",(0,a.kt)("inlineCode",{parentName:"p"},"useState")," hook to track the state of the app. Then we imported the ",(0,a.kt)("a",{parentName:"p",href:"https://refine.dev/docs/core/hooks/data/useMany/"},(0,a.kt)("inlineCode",{parentName:"a"},"useMany"))," hook from refine to access the records of the integrated data API."),(0,a.kt)("p",null,"Then we imported all the components we created in the earlier phase of the tutorial, as well as the ",(0,a.kt)("inlineCode",{parentName:"p"},"framer-motion")," library for animations and custom style rules to style the layout."),(0,a.kt)("p",null,"We used the ",(0,a.kt)("inlineCode",{parentName:"p"},"inputValue")," variable to store the current state of the search input and the ",(0,a.kt)("inlineCode",{parentName:"p"},"activeFilter")," variable to track the currently active filter."),(0,a.kt)("p",null,"Next, we accessed the ",(0,a.kt)("inlineCode",{parentName:"p"},"posts")," route of the API and made sure we fetch data from it. We also created ",(0,a.kt)("inlineCode",{parentName:"p"},"filters")," array to define the filters that we will be using."),(0,a.kt)("p",null,"We first looped through all the filter elements and displayed them using the ",(0,a.kt)("inlineCode",{parentName:"p"},"<Filter/>")," component. We passed the ",(0,a.kt)("inlineCode",{parentName:"p"},"title")," prop to show the name of the filter, the ",(0,a.kt)("inlineCode",{parentName:"p"},"isActive")," prop to show whether or not the particular filter is active, and the ",(0,a.kt)("inlineCode",{parentName:"p"},"onClick")," prop to make an inactive filter active in the case of a click event and the other way around."),(0,a.kt)("p",null,"Then we displayed the ",(0,a.kt)("inlineCode",{parentName:"p"},"<Search />")," component and passed the ",(0,a.kt)("inlineCode",{parentName:"p"},"onChange")," prop to it, which updates the ",(0,a.kt)("inlineCode",{parentName:"p"},"inputValue")," variable each time the user enters any value in the search bar."),(0,a.kt)("p",null,"Finally, we looped through the posts and used the ",(0,a.kt)("inlineCode",{parentName:"p"},"filter")," method to display only content values that include the results from the currently active search query and includes the type of currently active filter. We passed the ",(0,a.kt)("inlineCode",{parentName:"p"},"title")," prop to display the content and the ",(0,a.kt)("inlineCode",{parentName:"p"},"status")," prop to assign the type of each ",(0,a.kt)("inlineCode",{parentName:"p"},"<Card />")," component being rendered."),(0,a.kt)("p",null,"Notice that we also wrapped the whole ",(0,a.kt)("inlineCode",{parentName:"p"},"<Card />")," component into the ",(0,a.kt)("inlineCode",{parentName:"p"},"<AnimatePresence />")," tags imported from the ",(0,a.kt)("inlineCode",{parentName:"p"},"framer-motion")," library. Thanks to these tags, we will be able to provide the initial and exit transformations we assigned to the ",(0,a.kt)("inlineCode",{parentName:"p"},"<Card />")," component in the previous section."),(0,a.kt)("p",null,"And that's it! We have successfully implemented the logic of the app. Now let's add some styles to make it look better."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="src/pages/posts/index.module.css"',title:'"src/pages/posts/index.module.css"'},".filters {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 20px;\n}\n\n@media only screen and (max-width: 650px) {\n  .filters {\n    grid-template-columns: 1fr;\n    gap: 0;\n  }\n}\n")),(0,a.kt)("p",null,"To style the filter buttons, we created a grid layout with three equally wide columns and assigned some gap between them."),(0,a.kt)("p",null,"Next, we added a media rule to the layout to switch to a single column layout for smaller screens. This means that each of the filter buttons will be shown directly above each other. We also removed the gap between them since each individual filter component already comes with a margin on the bottom."),(0,a.kt)("br",null),(0,a.kt)("p",null,"Now that we have implemented the logic and added some styles, let's add the ",(0,a.kt)("inlineCode",{parentName:"p"},"<Posts />")," component as a route to the app. To do so, we will replace the content of the ",(0,a.kt)("inlineCode",{parentName:"p"},"src/App.tsx")," file with the following code:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/App.tsx"',title:'"src/App.tsx"'},'import { Refine, ErrorComponent } from "@refinedev/core";\nimport { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";\nimport dataProvider from "@refinedev/simple-rest";\nimport routerBindings, { UnsavedChangesNotifier, DocumentTitleHandler } from "@refinedev/react-router-v6";\nimport { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";\n\nimport { Posts } from "./pages/posts";\n\nimport "./App.css";\n\nfunction App() {\n  return (\n    <BrowserRouter>\n      <RefineKbarProvider>\n        <Refine\n          dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n          routerProvider={routerBindings}\n          resources={[{ name: "posts", list: "/" }]}\n          options={{\n            syncWithLocation: true,\n            warnWhenUnsavedChanges: true,\n          }}\n        >\n          <Routes>\n            <Route\n              element={\n                <div\n                  style={{\n                    maxWidth: "1000px",\n                    margin: "0 auto",\n                  }}\n                >\n                  <Outlet />\n                </div>\n              }\n            >\n              <Route index element={<Posts />} />\n              <Route path="*" element={<ErrorComponent />} />\n            </Route>\n          </Routes>\n          <RefineKbar />\n          <UnsavedChangesNotifier />\n          <DocumentTitleHandler />\n        </Refine>\n      </RefineKbarProvider>\n    </BrowserRouter>\n  );\n}\n\nexport default App;\n')),(0,a.kt)("p",null,"This is the root file of the refine app, where we passed ",(0,a.kt)("inlineCode",{parentName:"p"},"routeProvider")," for the routing, ",(0,a.kt)("inlineCode",{parentName:"p"},"dataProvider")," to access the data API, and included the resources on the ",(0,a.kt)("inlineCode",{parentName:"p"},"/")," route to use the ",(0,a.kt)("inlineCode",{parentName:"p"},"Posts")," component we created in the previous step of the tutorial."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Dataproviders are refine components making it possible to consume different API's and data services conveniently."),(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("a",{parentName:"p",href:"https://refine.dev/docs/core/providers/data-provider/"},"Refer to the dataProvider documentation for detailed usage. \u2192"))),(0,a.kt)("p",null,"Finally, we used wrapped the routes with ",(0,a.kt)("inlineCode",{parentName:"p"},"div")," tags to add some styles to the layout."),(0,a.kt)("h2",{id:"testing-the-app"},"Testing the app"),(0,a.kt)("p",null,"Check if your development server is still running in the terminal. If it is not run ",(0,a.kt)("inlineCode",{parentName:"p"},"npm run dev")," to start it again."),(0,a.kt)("p",null,"First, we will test the functionality of the filter buttons."),(0,a.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-08-26-react-content-filtering/filters.gif",alt:"filters",className:"border border-gray-200 rounded"}),(0,a.kt)("p",null,"If the filter button is pressed, only the corresponding cards of that category is filtered. If the filter is already active and is pressed again, the filter is disabled and all the records are shown."),(0,a.kt)("p",null,"Now type in some search queries in the search bar."),(0,a.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-08-26-react-content-filtering/search.gif",alt:"search",className:"border border-gray-200 rounded"}),(0,a.kt)("p",null,"Search results are fully dynamic, meaning the filtering is updated each time you add a new character to the query."),(0,a.kt)("p",null,"Finally, let's test the app on mobile screen sizes."),(0,a.kt)("div",{className:"flex justify-center"},(0,a.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-08-26-react-content-filtering/responsive.jpeg",alt:"mobile",className:"border border-gray-200 rounded",style:{height:"400px"}})),(0,a.kt)("h2",{id:"conclusion"},"Conclusion"),(0,a.kt)("p",null,"In this tutorial, we first designed the overall layout for the app, then set up the refine project and created the global style rules. Then we created the individual components, put together the logic, and passed it to the refine app."),(0,a.kt)("p",null,"Two different types of content filtering (filter buttons and search bar) were implemented. In order to improve the overall user experience, we used the Framer motion library to add some great animations."),(0,a.kt)("p",null,"Feel free to modify the app with your own custom features. Play around with different color schemes, layouts, and font families. Also, since refine comes with a rich data provider, feel free to extend the content card with description, author, dates, or even images."),(0,a.kt)("br",null),(0,a.kt)("div",null,(0,a.kt)("a",{href:"https://discord.gg/refine"},(0,a.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/discord_big_blue.png",alt:"discord banner"}))),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)(m,{path:"blog-refine-filtering",mdxType:"CodeSandboxExample"}))}f.isMDXComponent=!0}}]);