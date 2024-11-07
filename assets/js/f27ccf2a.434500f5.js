"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[99161],{58860:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>h});var a=n(37953);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(n),g=i,h=p["".concat(l,".").concat(g)]||p[g]||u[g]||r;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:i,o[1]=s;for(var d=2;d<r;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},12193:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>p});n(37953);var a=n(58860);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}const s={title:"Next.js 13.4's Server Actions and Data Fetching",description:"We'll delve into the Next.js alpha feature Server actions and data fetching techniques.",slug:"next-js-server-actions-and-data-fetching",authors:"victor_uma",tags:["nextjs"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-05-29-next-js-server-actions/social-2.png",hide_table_of_contents:!1},l=void 0,d={permalink:"/blog/next-js-server-actions-and-data-fetching",source:"@site/blog/2024-08-07-next-js-server-actions.md",title:"Next.js 13.4's Server Actions and Data Fetching",description:"We'll delve into the Next.js alpha feature Server actions and data fetching techniques.",date:"2024-08-07T00:00:00.000Z",formattedDate:"August 7, 2024",tags:[{label:"nextjs",permalink:"/blog/tags/nextjs"}],readingTime:16.025,hasTruncateMarker:!1,authors:[{name:"Victor Uma",title:"Software Developer",imageURL:"https://github.com/uma-victor1.png",key:"victor_uma"}],frontMatter:{title:"Next.js 13.4's Server Actions and Data Fetching",description:"We'll delve into the Next.js alpha feature Server actions and data fetching techniques.",slug:"next-js-server-actions-and-data-fetching",authors:"victor_uma",tags:["nextjs"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-05-29-next-js-server-actions/social-2.png",hide_table_of_contents:!1},prevItem:{title:"A Guide to Using the useLayoutEffect Hook in React",permalink:"/blog/uselayouteffect-vs-useeffect"},nextItem:{title:"A Comprehensive Guide of React Unit Testing",permalink:"/blog/react-unit-testing"},relatedPosts:[{title:"How Next.js Redirects Work",description:"We'll examine the concept of URL redirection in Next.js and how redirects work.",permalink:"/blog/next-js-redirect",formattedDate:"July 30, 2024",authors:[{name:"Michael Hungbo",title:"Software Developer",url:"https://github.com/Mich45",imageURL:"https://github.com/Mich45.png",key:"michael"}],readingTime:11.49,date:"2024-07-30T00:00:00.000Z"},{title:"What is Turborepo and Why Should You Care?",description:"The advantages of using Turborepo for monorepo development.",permalink:"/blog/how-to-use-turborepo",formattedDate:"July 5, 2024",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:9.565,date:"2024-07-05T00:00:00.000Z"},{title:"A Guide for Next.js with TypeScript",description:"We will explain the entire process of how to use Next.js in TypeScript",permalink:"/blog/next-js-with-typescript",formattedDate:"June 10, 2024",authors:[{name:"Michael Hungbo",title:"Software Developer",url:"https://github.com/Mich45",imageURL:"https://github.com/Mich45.png",key:"michael"}],readingTime:11.765,date:"2024-06-10T00:00:00.000Z"}],authorPosts:[{title:"Bun vs. Node.js",description:"We'll go over the new Bun runtime that has created a buzz in the tech space lately.",permalink:"/blog/bun-js-vs-node",formattedDate:"August 12, 2024",authors:[{name:"Victor Uma",title:"Software Developer",imageURL:"https://github.com/uma-victor1.png",key:"victor_uma"}],readingTime:16.915,date:"2024-08-12T00:00:00.000Z"},{title:"What is Vite? & Vite vs Webpack",description:"We will explore what is Vite.js and compare it to Webpack.",permalink:"/blog/what-is-vite-vs-webpack",formattedDate:"July 30, 2024",authors:[{name:"Victor Uma",title:"Software Developer",imageURL:"https://github.com/uma-victor1.png",key:"victor_uma"}],readingTime:11.55,date:"2024-07-30T00:00:00.000Z"}]},c={authorsImageUrls:[void 0]},p=[{value:"Overview",id:"overview",level:2},{value:"Basics of Next.js",id:"basics-of-nextjs",level:2},{value:"Server-Side Rendering (SSR) vs. Client-Side Rendering (CSR) in Next.js",id:"server-side-rendering-ssr-vs-client-side-rendering-csr-in-nextjs",level:3},{value:"Data Fetching in Next.js",id:"data-fetching-in-nextjs",level:2},{value:"Client-Side Data Fetching",id:"client-side-data-fetching",level:2},{value:"Server-Side Data Fetching",id:"server-side-data-fetching",level:2},{value:"Server Actions in Next.js",id:"server-actions-in-nextjs",level:2},{value:"Creating an API Route:",id:"creating-an-api-route",level:3},{value:"Server Side communication using Server Actions",id:"server-side-communication-using-server-actions",level:3},{value:"How to Invoke Server Action",id:"how-to-invoke-server-action",level:3},{value:"Client-Side Communication with API Routes",id:"client-side-communication-with-api-routes",level:3},{value:"Bonus: Securing API Routes in Our Next.js App",id:"bonus-securing-api-routes-in-our-nextjs-app",level:2},{value:"Protecting API Endpoints",id:"protecting-api-endpoints",level:3},{value:"JWT Authentication",id:"jwt-authentication",level:4},{value:"Authorization Middleware",id:"authorization-middleware",level:4},{value:"Data Validation and Sanitization",id:"data-validation-and-sanitization",level:3},{value:"Validation of Data with Yup",id:"validation-of-data-with-yup",level:4},{value:"Sanitizing Data",id:"sanitizing-data",level:4},{value:"Bonus: Using SWR to Fetch Data Efficiently with Next.js",id:"bonus-using-swr-to-fetch-data-efficiently-with-nextjs",level:2},{value:"SWR (Stale-While-Revalidate)",id:"swr-stale-while-revalidate",level:3},{value:"Introduction to SWR",id:"introduction-to-swr",level:4},{value:"SWR for Data Fetching",id:"swr-for-data-fetching",level:4},{value:"Fetch User Data",id:"fetch-user-data",level:4},{value:"Managing Pagination",id:"managing-pagination",level:4},{value:"Benefits of SWR",id:"benefits-of-swr",level:4},{value:"Conclusion",id:"conclusion",level:2}],u={toc:p},g="wrapper";function h(e){var{components:t}=e,n=o(e,["components"]);return(0,a.yg)(g,r(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){i(e,t,n[t])}))}return e}({},u,n),{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"This article was last updated on August 07, 2024, to add sections on Security Considerations and SWR.")),(0,a.yg)("h2",{id:"overview"},"Overview"),(0,a.yg)("p",null,"Delivering flawless user experience and structured data retrieval is of the most important when it comes to web development. Next.js, a robust React framework, has become the go-to choice for developers seeking to optimize server-side rendering (SSR) and client-side rendering (CSR) capabilities. One crucial aspect that sets Next.js apart is its comprehensive toolkit for data fetching and server actions."),(0,a.yg)("p",null,"Understanding the fundamentals of data fetching is essential to harnessing the power of Next.js. In this tutorial, we're going to dive deep into Next.js data fetching and server actions and how we can use and manage its features in an application. Whether you're a seasoned Next.js developer or exploring the framework for the first time, this article will provide valuable insights and practical examples to supercharge your web applications."),(0,a.yg)("p",null,"Server actions are an alpha feature in Next.js, enable you to build custom server endpoints that handle specific actions and data operations. Next.js API routes offer a robust foundation to implement server actions effectively, bridging the gap between the client and server seamlessly. We'll delve into the intricacies of creating API routes, handling client-server communication, and implementing server-side functionalities."),(0,a.yg)("p",null,"Steps we'll cover:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#basics-of-nextjs"},"Basics of Next.js")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#data-fetching-in-nextjs"},"Data Fetching in Next.js")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#server-actions-in-nextjs"},"Server actions in Next.js"))),(0,a.yg)("h2",{id:"basics-of-nextjs"},"Basics of Next.js"),(0,a.yg)("p",null,"Next.js is a powerful framework built on top of React that simplifies and improves the building of modern front-end apps. It combines the best features of server-side rendering (SSR) and client-side rendering (CSR), offering developers flexibility and performance optimization."),(0,a.yg)("h3",{id:"server-side-rendering-ssr-vs-client-side-rendering-csr-in-nextjs"},"Server-Side Rendering (SSR) vs. Client-Side Rendering (CSR) in Next.js"),(0,a.yg)("p",null,"Server-side rendering involves generating the HTML for a web page on the server and sending it to the client. This approach improves initial page load time and enables search engine optimization (SEO) since search engine crawlers can easily parse the fully rendered HTML. Next.js excels at server-side rendering, allowing you to pre-render pages dynamically or statically."),(0,a.yg)("p",null,"Client-side rendering, on the other hand, relies on JavaScript to render web pages on the client's browser. This approach provides interactivity and dynamic content updates but may result in slower initial page loads. Next.js supports hybrid rendering, allowing you to select between server-side and client-side rendering according on the needs of your application."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Advantages of Next.js")),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"Simplified Setup: Next.js simplifies the setup process by providing a batteries-included framework. It comes with built-in routing, webpack configuration, and hot module replacement, saving you time and effort."),(0,a.yg)("li",{parentName:"ol"},"Automatic Code Splitting: Next.js intelligently splits your code into smaller chunks, allowing for faster initial page loads. It only loads the JavaScript required for the current page, reducing bandwidth and optimizing performance."),(0,a.yg)("li",{parentName:"ol"},"Server-Side Rendering Made Easy: Next.js makes server-side rendering seamless. With functions like ",(0,a.yg)("inlineCode",{parentName:"li"},"getStaticProps")," and ",(0,a.yg)("inlineCode",{parentName:"li"},"getServerSideProps"),", you can fetch data during the server-rendering process, ensuring your pages have the necessary data before rendering. This is particularly useful for static generation and dynamic rendering scenarios.")),(0,a.yg)("h2",{id:"data-fetching-in-nextjs"},"Data Fetching in Next.js"),(0,a.yg)("p",null,"Data fetching is a crucial aspect of web development, and Next.js provides several built-in methods to handle data fetching and rendering. These methods enable you to fetch data during the server-side rendering process or on the client-side, depending on your specific requirements. Let's explore the various data fetching techniques offered by Next.js and see how they can be implemented with code examples."),(0,a.yg)("h2",{id:"client-side-data-fetching"},"Client-Side Data Fetching"),(0,a.yg)("p",null,"Next.js offers functions that enable data fetching on the client-side, providing dynamic updates without a full page reload. The most commonly used function is ",(0,a.yg)("inlineCode",{parentName:"p"},"useEffect")," from React, which allows us to execute code after the component has rendered. Within the ",(0,a.yg)("inlineCode",{parentName:"p"},"useEffect")," hook, we can utilize the ",(0,a.yg)("inlineCode",{parentName:"p"},"fetch")," API or any other data fetching library to retrieve data from an API endpoint."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'import { useEffect, useState } from "react";\n\nfunction MyComponent() {\n  const [data, setData] = useState(null);\n\n  useEffect(() => {\n    const fetchData = async () => {\n      const response = await fetch("https://api.example.com/data");\n      const data = await response.json();\n      setData(data);\n    };\n\n    fetchData();\n  }, []);\n\n  return (\n    <div>\n      {/* Display the fetched data */}\n      {data && <p>{data.message}</p>}\n    </div>\n  );\n}\n')),(0,a.yg)("p",null,"In the code above, we define a functional component ",(0,a.yg)("inlineCode",{parentName:"p"},"MyComponent")," that fetches data from an API endpoint using the ",(0,a.yg)("inlineCode",{parentName:"p"},"fetch")," API. The fetched data is stored in the ",(0,a.yg)("inlineCode",{parentName:"p"},"data")," state variable using the ",(0,a.yg)("inlineCode",{parentName:"p"},"setData")," function. We use the ",(0,a.yg)("inlineCode",{parentName:"p"},"useEffect")," hook with an empty dependency array ",(0,a.yg)("inlineCode",{parentName:"p"},"[]")," to ensure the data fetching only occurs once when the component mounts."),(0,a.yg)("h2",{id:"server-side-data-fetching"},"Server-Side Data Fetching"),(0,a.yg)("p",null,"Next.js provides two functions, ",(0,a.yg)("inlineCode",{parentName:"p"},"getStaticProps")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"getServerSideProps"),", for server-side data fetching during the rendering process. These functions allow you to fetch data from an API or a database and pass it as props to your page components."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'export async function getStaticProps() {\n  const response = await fetch("https://api.example.com/data");\n  const data = await response.json();\n\n  return {\n    props: {\n      data,\n    },\n  };\n}\n\nfunction MyPage({ data }) {\n  return (\n    <div>\n      {/* Display the fetched data */}\n      {data && <p>{data.message}</p>}\n    </div>\n  );\n}\n\nexport default MyPage;\n')),(0,a.yg)("p",null,"In the code snippet above, we define the ",(0,a.yg)("inlineCode",{parentName:"p"},"getStaticProps")," function, which is a special function Next.js recognizes for pre-rendering. Inside ",(0,a.yg)("inlineCode",{parentName:"p"},"getStaticProps"),", we fetch data from an API and return it as the ",(0,a.yg)("inlineCode",{parentName:"p"},"data")," prop. The ",(0,a.yg)("inlineCode",{parentName:"p"},"MyPage")," component receives the fetched data as a prop and renders it accordingly."),(0,a.yg)("p",null,"It's important to note that ",(0,a.yg)("inlineCode",{parentName:"p"},"getStaticProps")," is used for static generation, where the page content is pre-rendered at build time, while ",(0,a.yg)("inlineCode",{parentName:"p"},"getServerSideProps")," is used for server-side rendering on each request. You can choose the appropriate function based on your specific use case.\nNext.js also provides other data fetching options, such as ",(0,a.yg)("inlineCode",{parentName:"p"},"getInitialProps")," for legacy support or more advanced scenarios. These options offer flexibility in handling data fetching based on your application's needs."),(0,a.yg)("p",null,"Next.js simplifies the process of data fetching by seamlessly integrating it into the rendering pipeline. Whether you need to fetch data on the client-side or during server-side rendering, Next.js provides the necessary tools to make data fetching efficient and straightforward."),(0,a.yg)("h2",{id:"server-actions-in-nextjs"},"Server Actions in Next.js"),(0,a.yg)("p",null,"Server actions are an integral part of web applications, allowing you to handle server-side logic and perform operations such as data manipulation, authentication, and more. Next.js provides a powerful feature called API routes, which enables you to create custom server endpoints to handle server actions seamlessly. Let's explore how to implement server actions using API routes in Next.js with code examples."),(0,a.yg)("h3",{id:"creating-an-api-route"},"Creating an API Route:"),(0,a.yg)("p",null,"To create an API route in Next.js, you need to create a file inside the ",(0,a.yg)("inlineCode",{parentName:"p"},"pages/api")," directory. The file should be named based on the desired endpoint, for example, ",(0,a.yg)("inlineCode",{parentName:"p"},"pages/api/users.js"),". Within this file, you can define your server action logic."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'// pages/api/users.js\n\nexport default function handler(req, res) {\n  // Perform server action\n  const myUsers = [\n    { id: 1, name: "Odioko" },\n    { id: 2, name: "Victor" },\n  ];\n\n  // Return the response\n  res.status(200).json(myUsers);\n}\n')),(0,a.yg)("p",null,"In the code snippet above, we create an API route ",(0,a.yg)("inlineCode",{parentName:"p"},"users.js")," inside the ",(0,a.yg)("inlineCode",{parentName:"p"},"pages/api")," directory. Within the ",(0,a.yg)("inlineCode",{parentName:"p"},"handler")," function, we perform the desired server action, such as retrieving a list of users. In this case, we define a simple array of users and return it as the response using ",(0,a.yg)("inlineCode",{parentName:"p"},"res.status(200).json(users)"),"."),(0,a.yg)("h3",{id:"server-side-communication-using-server-actions"},"Server Side communication using Server Actions"),(0,a.yg)("p",null,"Next.js presents a feature of Server Actions, which is still in its alpha stage. This feature is constructed upon React ",(0,a.yg)("a",{parentName:"p",href:"https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions#actions"},"Actions"),". With these actions, data alterations may be initiated on the server-side, leading to decreased client-side JavaScript, and enhanced forms that progress over time."),(0,a.yg)("p",null,"If you want to add server actions in your Next project, go into your ",(0,a.yg)("inlineCode",{parentName:"p"},"next.config.js")," file and enable the experimental ",(0,a.yg)("inlineCode",{parentName:"p"},"serverActions")," flag."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},"module.exports = {\n  experimental: {\n    serverActions: true,\n  },\n};\n")),(0,a.yg)("p",null,"After doing this, you have to creare the Server Action by defining an asynchronous function with the ",(0,a.yg)("inlineCode",{parentName:"p"},'"use server"')," directive at the top of the component function body."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'async function myServerAction() {\n  "use server";\n  // code here\n}\n')),(0,a.yg)("p",null,"Let's look at some code from the ",(0,a.yg)("a",{parentName:"p",href:"https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions#invocation"},"docs")," and explain what it's doing."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'import { cookies as nextCookies } from "next/headers";\n\nexport default function ProductCard({ productId }) {\n  async function addToCart(data) {\n    "use server";\n\n    const cartId = nextCookies().get("cartId")?.value;\n    await saveToDatabase({ cartId, data });\n  }\n\n  return (\n    <form onSubmit={addToCart}>\n      <button type="submit">Add to Cart</button>\n    </form>\n  );\n}\n')),(0,a.yg)("p",null,"The code above is a React functional component in Next.js called ",(0,a.yg)("inlineCode",{parentName:"p"},"AddToCart"),". It is responsible for rendering a form with a ",(0,a.yg)("inlineCode",{parentName:"p"},"Add to Cart")," button. Let's break down the code and understand its functionality."),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"The component is exported as the default export, meaning it can be imported and used in other files."),(0,a.yg)("li",{parentName:"ol"},"The component takes a ",(0,a.yg)("inlineCode",{parentName:"li"},"productId")," prop, which presumably represents the ID of the product being displayed on the card. This prop can be used to fetch the relevant product information or perform any necessary operations."),(0,a.yg)("li",{parentName:"ol"},"The ",(0,a.yg)("inlineCode",{parentName:"li"},"addToCart"),' function is an asynchronous function declared inside the component. It is triggered when the form is submitted (i.e., when the "Add to Cart" button is clicked). The function has access to the ',(0,a.yg)("inlineCode",{parentName:"li"},"data")," parameter, which can be passed to it when it is called."),(0,a.yg)("li",{parentName:"ol"},"Inside the ",(0,a.yg)("inlineCode",{parentName:"li"},"addToCart")," function, there is a line \"use server';`. This comment is likely indicating that the following code should be executed only on the server-side, as opposed to running on the client-side. This can be relevant if you're using Next.js and want to differentiate server-side and client-side code execution."),(0,a.yg)("li",{parentName:"ol"},"The ",(0,a.yg)("inlineCode",{parentName:"li"},"nextCookies().get('cartId')?.value")," code retrieves the value of the ",(0,a.yg)("inlineCode",{parentName:"li"},"cartId")," cookie using the ",(0,a.yg)("inlineCode",{parentName:"li"},"nextCookies")," function from the ",(0,a.yg)("inlineCode",{parentName:"li"},"next/headers")," module. The ",(0,a.yg)("inlineCode",{parentName:"li"},"?.")," operator is used for optional chaining, ensuring that the code doesn't throw an error if the cookie or its value doesn't exist."),(0,a.yg)("li",{parentName:"ol"},"The ",(0,a.yg)("inlineCode",{parentName:"li"},"await saveToDatabase({ cartId, data })")," code represents the asynchronous task of saving the ",(0,a.yg)("inlineCode",{parentName:"li"},"data")," along with the ",(0,a.yg)("inlineCode",{parentName:"li"},"cartId")," to the database. You would need to replace ",(0,a.yg)("inlineCode",{parentName:"li"},"saveToDatabase")," with your actual function that handles the database saving logic."),(0,a.yg)("li",{parentName:"ol"},"The component returns a form element with an ",(0,a.yg)("inlineCode",{parentName:"li"},"onSubmit")," event handler set to the ",(0,a.yg)("inlineCode",{parentName:"li"},"addToCart"),' function. This means that when the form is submitted (by clicking the "Add to Cart" button), the ',(0,a.yg)("inlineCode",{parentName:"li"},"addToCart")," function will be executed."),(0,a.yg)("li",{parentName:"ol"},"Inside the form, there is a single button with the text ",(0,a.yg)("inlineCode",{parentName:"li"},"Add to Cart")," that triggers the form submission when clicked.")),(0,a.yg)("h3",{id:"how-to-invoke-server-action"},"How to Invoke Server Action"),(0,a.yg)("p",null,"When working with Next.js and server actions, there are several methods available for invoking these actions. Let's explore these methods in detail:"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Using ",(0,a.yg)("inlineCode",{parentName:"strong"},"action")," prop"),": React ",(0,a.yg)("inlineCode",{parentName:"p"},"action")," prop can be used to invoke a server action on a form element as we can see from the piece of code below:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'export default function TodoApp() {\n  async function addTodoItem(data) {\n    "use server";\n\n    const todoId = getTodoId().get("todoId")?.value;\n    await saveToDb({ todoId, data });\n  }\n\n  return (\n    <form onSubmit={addTodoItem}>\n      <button type="submit">Add Todo</button>\n    </form>\n  );\n}\n')),(0,a.yg)("p",null,"In the code snippet above, ",(0,a.yg)("inlineCode",{parentName:"p"},"TodoApp")," component serves as a simple todo application. It allows users to add new todos by submitting a form. The ",(0,a.yg)("inlineCode",{parentName:"p"},"addTodoItem")," function, triggered when the form is submitted, performs server-side actions related to adding a todo item. It retrieves, a todo ID using a ",(0,a.yg)("inlineCode",{parentName:"p"},"getTodoId")," function and saves the todo item to a database using the ",(0,a.yg)("inlineCode",{parentName:"p"},"saveToDb")," function. The code provides a basic structure for a todo app, allowing users to add todos with server-side handling."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Using")," ",(0,a.yg)("inlineCode",{parentName:"p"},"formAction")," ",(0,a.yg)("strong",{parentName:"p"},"prop"),": In our Next.js code, we can handle form actions on elements such as ",(0,a.yg)("inlineCode",{parentName:"p"},"<button>")," using the ",(0,a.yg)("inlineCode",{parentName:"p"},"formAction")," prop as we can see from the code below:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'export default function Form() {\n  async function Submit() {\n    "use server";\n    // ...\n  }\n\n  async function submitFile() {\n    "use server";\n    // ...\n  }\n\n  return (\n    <form action={Submit}>\n      <input type="text" name="name" />\n      <input type="image" formAction={submitFile} />\n      <button type="submit">Submit</button>\n    </form>\n  );\n}\n')),(0,a.yg)("p",null,"In the above example, the ",(0,a.yg)("inlineCode",{parentName:"p"},"Submit")," function is invoked when the form is submitted, while the ",(0,a.yg)("inlineCode",{parentName:"p"},"submitFile")," function is invoked when the file input is clicked. The server actions are triggered by the ",(0,a.yg)("inlineCode",{parentName:"p"},"formAction")," prop."),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"startTransition")," ",(0,a.yg)("strong",{parentName:"p"},"custom invocation"),": Apart from the two ways of invoking server actions that we just listed above, there is another way we can perform a server action. This method involves using the ",(0,a.yg)("inlineCode",{parentName:"p"},"startTransition"),", provided by the React ",(0,a.yg)("inlineCode",{parentName:"p"},"useTransition")," hook, and we can use when we are not performing form server actions."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'import { useTransition } from "react";\nimport { addTodo } from "../actions";\n\nfunction TodoAppClientComponent({ id }) {\n  const [isPending, startTransition] = useTransition();\n\n  return (\n    <button onClick={() => startTransition(() => addTodo(id))}>Add Todo</button>\n  );\n}\n')),(0,a.yg)("p",null,"In the code above, the ",(0,a.yg)("inlineCode",{parentName:"p"},"startTransition")," function wraps the invocation of the ",(0,a.yg)("inlineCode",{parentName:"p"},"addTodo")," server action. When the button is clicked, the server action is executed. Using ",(0,a.yg)("inlineCode",{parentName:"p"},"startTransition")," allows you to control the timing of the server action invocation."),(0,a.yg)("h3",{id:"client-side-communication-with-api-routes"},"Client-Side Communication with API Routes"),(0,a.yg)("p",null,"Next.js makes it seamless to communicate with API routes from the client-side code. You can use the ",(0,a.yg)("inlineCode",{parentName:"p"},"fetch")," API or any other HTTP library to make requests to your API endpoints."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'import { useEffect, useState } from "react";\n\nfunction MyComponent() {\n  const [users, setUsers] = useState([]);\n\n  useEffect(() => {\n    const fetchUsers = async () => {\n      const response = await fetch("/api/users");\n      const data = await response.json();\n      setUsers(data);\n    };\n\n    fetchUsers();\n  }, []);\n\n  return (\n    <div>\n      {users.map((user) => (\n        <p key={user.id}>{user.name}</p>\n      ))}\n    </div>\n  );\n}\n')),(0,a.yg)("p",null,"In the code above, we define a component ",(0,a.yg)("inlineCode",{parentName:"p"},"MyComponent")," that fetches users from the ",(0,a.yg)("inlineCode",{parentName:"p"},"/api/users")," endpoint using the ",(0,a.yg)("inlineCode",{parentName:"p"},"fetch")," API. The fetched data is stored in the ",(0,a.yg)("inlineCode",{parentName:"p"},"users")," state variable using the ",(0,a.yg)("inlineCode",{parentName:"p"},"setUsers")," function. We use the ",(0,a.yg)("inlineCode",{parentName:"p"},"useEffect")," hook with an empty dependency array ",(0,a.yg)("inlineCode",{parentName:"p"},"[]")," to ensure the data fetching only occurs once when the component mounts."),(0,a.yg)("p",null,"Note that when making requests to API routes from the client-side code, you can use relative URLs like ",(0,a.yg)("inlineCode",{parentName:"p"},"/api/users")," since Next.js automatically routes requests to the appropriate API route.\nNext.js API routes provide a powerful mechanism to handle server actions seamlessly within your application. Whether you need to fetch data, perform data mutations, or handle authentication, API routes enable you to define custom server endpoints with ease."),(0,a.yg)("h2",{id:"bonus-securing-api-routes-in-our-nextjs-app"},"Bonus: Securing API Routes in Our Next.js App"),(0,a.yg)("p",null,"Just wanted to share some key practices in making sure our Next.js application is secure, especially with regard to the server actions and API routes."),(0,a.yg)("h3",{id:"protecting-api-endpoints"},"Protecting API Endpoints"),(0,a.yg)("p",null,"First, we need to ensure that API routes are kept safe from unauthorized access. Here's what we can do:"),(0,a.yg)("h4",{id:"jwt-authentication"},"JWT Authentication"),(0,a.yg)("p",null,"We could authenticate users through JSON Web Tokens (JWT). When a user logs in, we will issue a token for them to send along with their requests."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'import jwt from "jsonwebtoken";\n\nexport default function handler(req, res) {\n  const { method } = req;\n  if (method === "POST") {\n    const { username, password } = req.body;\n    // Verify user credentials\n    if (username === "user" && password === "pass") {\n      const token = jwt.sign({ username }, process.env.JWT_SECRET, {\n        expiresIn: "1h",\n      });\n      res.status(200).json({ token });\n    } else {\n      res.status(401).json({ message: "Invalid credentials" });\n    }\n  } else {\n    res.setHeader("Allow", ["POST"]);\n    res.status(405).end(`Method ${method} Not Allowed`);\n  }\n}\n')),(0,a.yg)("h4",{id:"authorization-middleware"},"Authorization Middleware"),(0,a.yg)("p",null,"We will write a middleware that will check these tokens before giving access to any of our routes."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'import jwt from "jsonwebtoken";\n\nexport default function handler(req, res) {\n  const { authorization } = req.headers;\n  if (!authorization) {\n    return res.status(401).json({ message: "Authorization header missing" });\n  }\n\n  const token = authorization.split(" ")[1];\n  try {\n    const decoded = jwt.verify(token, process.env.JWT_SECRET);\n    req.user = decoded;\n    // Proceed with the request\n  } catch (error) {\n    return res.status(401).json({ message: "Invalid token" });\n  }\n}\n')),(0,a.yg)("h3",{id:"data-validation-and-sanitization"},"Data Validation and Sanitization"),(0,a.yg)("p",null,"Next, it's very important to validate and sanitize incoming data so that security risks like SQL injection or XSS attacks are avoided."),(0,a.yg)("h4",{id:"validation-of-data-with-yup"},"Validation of Data with Yup"),(0,a.yg)("p",null,"The data validation can be done with the help of libraries like Yup to check for the desired type of data."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'import { object, string } from "yup";\n\nconst schema = object({\n  username: string().required().min(3).max(50),\n  password: string().required().min(6),\n});\n\nexport default async function handler(req, res) {\n  try {\n    await schema.validate(req.body);\n    // Process the validated data\n    res.status(200).json({ message: "Data is valid" });\n  } catch (error) {\n    res.status(400).json({ message: error.message });\n  }\n}\n')),(0,a.yg)("h4",{id:"sanitizing-data"},"Sanitizing Data"),(0,a.yg)("p",null,"We should also sanitize user inputs so as to exclude all injurious content."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'import { sanitize } from "dompurify";\n\nexport default function handler(req, res) {\n  const { username, password } = req.body;\n  const sanitizedUsername = sanitize(username);\n  const sanitizedPassword = sanitize(password);\n\n  // Use sanitized data\n  res.status(200).json({ message: "Data sanitized" });\n}\n')),(0,a.yg)("h2",{id:"bonus-using-swr-to-fetch-data-efficiently-with-nextjs"},"Bonus: Using SWR to Fetch Data Efficiently with Next.js"),(0,a.yg)("p",null,"This will be the time when I will introduce you to one of the greatest data-fetching tools for our Next.js projects: SWR. Using SWR, we manage data fetching efficiently, ensuring that the UI stays fast and responsive while new data is fetched."),(0,a.yg)("h3",{id:"swr-stale-while-revalidate"},"SWR (Stale-While-Revalidate)"),(0,a.yg)("h4",{id:"introduction-to-swr"},"Introduction to SWR"),(0,a.yg)("p",null,'SWR is a React Hooks library for remote data fetching. When working with this library, fetching data can be made really simple and assured that it is up-to-date with live data at any time. The acronym SWR stands for "Stale-While-Revalidate": a strategy in which the component exhibits stale data while it continues to revalidate in the background.'),(0,a.yg)("h4",{id:"swr-for-data-fetching"},"SWR for Data Fetching"),(0,a.yg)("p",null,"Below is a simple example of how we might use SWR in our components."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-javascript"},'import useSWR from "swr";\n\nconst fetcher = (url) => fetch(url).then((res) => res.json());\n\nfunction MyComponent() {\n  const { data, error } = useSWR("/api/data", fetcher);\n\n  if (error) return <div>Failed to load data</div>;\n  if (!data) return <div>Loading...</div>;\n\n  return (\n    <div>\n      <p>{data.message}</p>\n    </div>\n  );\n}\n')),(0,a.yg)("p",null,"Here the function of ",(0,a.yg)("inlineCode",{parentName:"p"},"useSWR")," is to take a key (the URL to fetch) and a fetcher function: it will automatically handle the fetch, error, and revalidation process."),(0,a.yg)("h4",{id:"fetch-user-data"},"Fetch User Data"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-javascript"},'import useSWR from "swr";\n\nconst fetcher = (url) => fetch(url).then((res) => res.json());\n\nfunction UserProfile() {\n  const { data, error } = useSWR("/api/user", fetcher);\n\n  if (error) return <div>Failed to load user data</div>;\n  if (!data) return <div>Loading user data...</div>;\n\n  return (\n    <div>\n      <h1>{data.name}</h1>\n      <p>{data.email}</p>\n    </div>\n  );\n}\n')),(0,a.yg)("h4",{id:"managing-pagination"},"Managing Pagination"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-javascript"},'import useSWR from "swr";\n\nconst fetcher = (url) => fetch(url).then((res) => res.json());\n\nconst PaginatedList = ({ page }) => {\n  const { data, error } = useSWR(`/api/items?page=${page}`, fetcher);\n\n  if (error) return <div>Failed to load items</div>;\n  if (!data) return <div>Loading items...</div>;\n\n  return (\n    <ul>\n      {data.items.map((item) => (\n        <li key={item.id}>{item.name}</li>\n      ))}\n    </ul>\n  );\n};\n')),(0,a.yg)("h4",{id:"benefits-of-swr"},"Benefits of SWR"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Automatic Caching and Revalidation"),": SWR, in the background, caches the data and automatically revalidates it, making the UI fast, live, and always updated."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Simple focus"),": Abstract away fetching data; make our code more clean and maintainable."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Error Handling"),": SWR has error handling built-in, so it's fairly trivial to deal with data fetching failures.")),(0,a.yg)("h2",{id:"conclusion"},"Conclusion"),(0,a.yg)("p",null,"We explored the basics of Next.js, simplified setup process, and advantages. We delved into data fetching, showcasing both client-side and server-side techniques with code examples. Additionally, we explored the concept of server actions using Next.js API routes, enabling custom server endpoints for handling server-side logic and operations."),(0,a.yg)("p",null,"Next.js continues to evolve and empower developers to build web applications that deliver exceptional user experiences. By embracing Next.js' data fetching and server action capabilities, developers can unlock the true potential of modern web development and stay at the forefront of the ever-changing web landscape. So, embark on your Next.js journey, explore its vast capabilities, and elevate your web development projects to new heights."))}h.isMDXComponent=!0}}]);