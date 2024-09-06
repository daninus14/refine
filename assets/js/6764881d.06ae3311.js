"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[21423],{58860:(e,t,a)=>{a.d(t,{xA:()=>m,yg:()=>y});var n=a(37953);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=p(a),u=r,y=c["".concat(l,".").concat(u)]||c[u]||g[u]||o;return a?n.createElement(y,i(i({ref:t},m),{},{components:a})):n.createElement(y,i({ref:t},m))}));function y(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},50764:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>y,frontMatter:()=>s,metadata:()=>p,toc:()=>c});a(37953);var n=a(58860);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})),e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const s={title:"The Important Differences between URI VS URL",description:"We'll be looking at the differences between URI and URL, and how they are used in web development.",slug:"uri-vs-url",authors:"deborah_emeni",tags:["javascript","comparison"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-02-01-uri-vs-url/social2.png",hide_table_of_contents:!1},l=void 0,p={permalink:"/blog/uri-vs-url",source:"@site/blog/2024-01-17-uri-vs-url.md",title:"The Important Differences between URI VS URL",description:"We'll be looking at the differences between URI and URL, and how they are used in web development.",date:"2024-01-17T00:00:00.000Z",formattedDate:"January 17, 2024",tags:[{label:"javascript",permalink:"/blog/tags/javascript"},{label:"comparison",permalink:"/blog/tags/comparison"}],readingTime:11.985,hasTruncateMarker:!1,authors:[{name:"Deborah Emeni",title:"Software Engineer",url:"https://github.com/debemenitammy",imageURL:"https://github.com/debemenitammy.png",key:"deborah_emeni"}],frontMatter:{title:"The Important Differences between URI VS URL",description:"We'll be looking at the differences between URI and URL, and how they are used in web development.",slug:"uri-vs-url",authors:"deborah_emeni",tags:["javascript","comparison"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-02-01-uri-vs-url/social2.png",hide_table_of_contents:!1},prevItem:{title:"React useMemo Hook Guide with Examples",permalink:"/blog/react-usememo"},nextItem:{title:"React Memo Guide with Examples",permalink:"/blog/react-memo-guide"},relatedPosts:[{title:"Top 6 Free Online Code Editors and IDEs with Pros and Cons",description:"We'll compare the best online IDEs and code editors for web development. We'll also look at the pros and cons of each.",permalink:"/blog/6-best-online-code-editors-comparison",formattedDate:"May 14, 2024",authors:[{name:"Joseph Mawa",title:"Web Developer",url:"https://github.com/nibble0101",imageURL:"/img/generic-profile.png",key:"joseph_mawa"}],readingTime:19.02,date:"2024-05-14T00:00:00.000Z"},{title:"refine vs Blitz.js",description:"We will take a closer look at how to set both up, what are their internal builds, how they handle the data sources, how to implement the CRUD functionality, add authentication, and how to deploy them to production.",permalink:"/blog/react-admin-frameworks-refine-vs-blitz-js",formattedDate:"March 15, 2023",authors:[{name:"Madars Bi\u0161s",title:"Software Developer",url:"https://github.com/madzadev",imageURL:"https://github.com/madzadev.png",key:"madars_biss"}],readingTime:18.935,date:"2023-03-15T00:00:00.000Z"},{title:"How to Use JavaScript Array some",description:"JavaScript some method implementation on Array with examples",permalink:"/blog/javascript-some-method",formattedDate:"February 2, 2024",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:10.92,date:"2024-02-02T00:00:00.000Z"}],authorPosts:[{title:"How to use React Strict Mode in React 18",description:"What is Strict Mode in React 18 and how to use it to find and fix bugs in your React application.",permalink:"/blog/react-strict-mode-in-react-18",formattedDate:"July 10, 2024",authors:[{name:"Deborah Emeni",title:"Software Engineer",url:"https://github.com/debemenitammy",imageURL:"https://github.com/debemenitammy.png",key:"deborah_emeni"}],readingTime:10.835,date:"2024-07-10T00:00:00.000Z"},{title:"How to use Conditional Rendering in React",description:"We'll implement Conditional Rendering in React and the various ways to use it in your React applications.",permalink:"/blog/react-conditional-rendering",formattedDate:"July 17, 2024",authors:[{name:"Deborah Emeni",title:"Software Engineer",url:"https://github.com/debemenitammy",imageURL:"https://github.com/debemenitammy.png",key:"deborah_emeni"}],readingTime:15.235,date:"2024-07-17T00:00:00.000Z"},{title:"React Slick Examples - Creating a carousel",description:"We'll see how to use React Slick in your React projects through a step-by-step guide and hands-on demo.",permalink:"/blog/react-slick",formattedDate:"October 29, 2023",authors:[{name:"Deborah Emeni",title:"Software Engineer",url:"https://github.com/debemenitammy",imageURL:"https://github.com/debemenitammy.png",key:"deborah_emeni"}],readingTime:18.155,date:"2023-10-29T00:00:00.000Z"}]},m={authorsImageUrls:[void 0]},c=[{value:"Introduction",id:"introduction",level:2},{value:"What is URI?",id:"what-is-uri",level:2},{value:"Components of URI",id:"components-of-uri",level:2},{value:"Functions and Architecture of URI",id:"functions-and-architecture-of-uri",level:2},{value:"Examples of URI",id:"examples-of-uri",level:2},{value:"Syntax Of URI",id:"syntax-of-uri",level:2},{value:"Use Case of URI",id:"use-case-of-uri",level:2},{value:"Examples of URLs",id:"examples-of-urls",level:2},{value:"Benefits of URI over URL",id:"benefits-of-uri-over-url",level:2},{value:"Coding Smarter: Using URI &amp; URL Knowledge in Development",id:"coding-smarter-using-uri--url-knowledge-in-development",level:2},{value:"Comparison Summary of URL and URI",id:"comparison-summary-of-url-and-uri",level:2}],g={toc:c},u="wrapper";function y(e){var{components:t}=e,a=i(e,["components"]);return(0,n.yg)(u,o(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),n.forEach((function(t){r(e,t,a[t])}))}return e}({},g,a),{components:t,mdxType:"MDXLayout"}),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("em",{parentName:"strong"},"This article was last updated on January 17, 2024 to provide a more detailed explanation, image and comparison table of URI VS URL."))),(0,n.yg)("h2",{id:"introduction"},"Introduction"),(0,n.yg)("p",null,'Finding a specific resource on the web can be difficult without a unique method or identifier. As a result, a man named Tim Berners-Lee coined the term "URI" to aid in identifying the location of a web resource quickly. With the introduction of URI, you can now find the location of any resource on the web regardless of where you are browsing from.'),(0,n.yg)("p",null,"The below illustration will help you get a high-level understanding of URL and URI, highlighting the difference between URL and URI."),(0,n.yg)("div",{className:"centered-image"},(0,n.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-02-01-uri-vs-url/url-vs-uri.png",alt:"url vs uri"})),(0,n.yg)("p",null,"In this article, you will learn about the concept of a URI, its components, its architecture, and how it differs from a URL."),(0,n.yg)("p",null,"Steps we'll cover:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"#what-is-uri"},"What is URI?")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"#components-of-uri"},"Components of URI")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"#functions-and-architecture-of-uri"},"Functions and Architecture of URI")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"#examples-of-uri"},"Examples of URI")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"#syntax-of-uri"},"Syntax Of URI")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"#use-case-of-uri"},"Use Case of URI")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"#what-is-url"},"What is URL?")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"#examples-of-urls"},"Examples of URLs")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"#benefits-of-uri-over-url"},"Benefits of URI over URL")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"#coding-smarter-using-uri--url-knowledge-in-development"},"Coding Smarter: Using URI & URL Knowledge in Development")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"#comparison-summary-of-url-and-uri"},"Comparison Summary of URL and URI"))),(0,n.yg)("h2",{id:"what-is-uri"},"What is URI?"),(0,n.yg)("p",null,'URI is an abbreviation for "Uniform Resource Identifier," which refers to a unique identifier composed of a string of characters that points to any resource on the internet via procedures such as name, location, or both.'),(0,n.yg)("p",null,"URLs and URNs are the two types of URIs. URLs, a type of URI, stand for Uniform Resource Locators and are commonly known as website addresses, illustrating a key aspect of the difference between URI and URL. They specify the location of a resource on the Internet and instruct a web browser on how to retrieve it."),(0,n.yg)("p",null,'For example, the URI "',(0,n.yg)("a",{parentName:"p",href:"https://www.mywebsite.com%22"},'https://www.mywebsite.com"')," specifies the location of a website and instructs a web browser to retrieve it using the HTTPS protocol."),(0,n.yg)("p",null,"Web protocols such as HTTP and HTTPS use URIs to communicate with multiple resources on the internet. The architecture of URIs is a string of characters that represents the address of a web resource, which is usually a combination of the resource's name and address. This distinction is crucial in understanding what is a URI and how it functions in contrast to a URL"),(0,n.yg)("p",null,"In essence, a URI can identify any type of resource, including web pages, images, videos, and other types of files. They are an essential component of how the Internet works and are used in various contexts, including web addresses, links, and other types of references to online resources."),(0,n.yg)("p",null,"Understanding what a URI is, including URI examples, is fundamental in grasping the URI vs URL concept"),(0,n.yg)("h2",{id:"components-of-uri"},"Components of URI"),(0,n.yg)("p",null,"The URI architecture is made up of components. Exploring the types of URI, it's clear that each component plays a crucial role. Each of these components serves a specific purpose, which includes the following:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"Protocol"),": A protocol type must be specified before a URI can access a resource. Some of the existing protocols are as follows:"),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},(0,n.yg)("em",{parentName:"strong"},"http://")),' : This is the most widely used protocol on the Internet. It is an abbreviation for "HyperText Transfer Protocol," which is used to access resources on the internet via the HTTP protocol.'),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},(0,n.yg)("em",{parentName:"strong"},"https://"))," : This is similar to http://, but it encrypts the data being transferred using a secure connection (SSL/TLS)."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},(0,n.yg)("em",{parentName:"strong"},"mailto:"))," : This protocol generates a link that launches the default email client and sends a new email message to the specified email address."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},(0,n.yg)("em",{parentName:"strong"},"file://"))," : This protocol is used to access files on the local computer."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},(0,n.yg)("em",{parentName:"strong"},"ftp://")),' :This protocol, which stands for "File Transfer Protocol," transfers files across a network.'))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"Domain name"),": This is the unique name that identifies the website on the Internet.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"Port number"),": This optional component specifies the port number used to access the resource.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"Path"),": This specifies the location of the resource on the server.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"Query string"),": This optional component specifies additional information to be sent to the server when requesting the resource."))),(0,n.yg)("h2",{id:"functions-and-architecture-of-uri"},"Functions and Architecture of URI"),(0,n.yg)("p",null,"A URI\u2019s architecture, representing a Uniform Resource Identifier, comprises several components, including the following:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"Scheme"),': The scheme, also known as the protocol, specifies the type of resource being identified and how it should be accessed. For example, "http" and "https" are common schemes for webpages, whereas "ftp" is used for file transfers.')),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"Authority"),': The authority, also known as the host, contains information about the host that serves the resource, such as the domain name or IP address. For example, in the URI "',(0,n.yg)("em",{parentName:"p"},(0,n.yg)("a",{parentName:"em",href:"http://www.mywebsite.com"},"http://www.mywebsite.com")),'" the authority is "',(0,n.yg)("em",{parentName:"p"},(0,n.yg)("a",{parentName:"em",href:"http://www.mywebsite.com"},"www.mywebsite.com")),'".')),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"Path"),": The path, also known as the location, identifies the resource's location within the authority. The path is \"",(0,n.yg)("em",{parentName:"p"},"/path/to/resource"),'" in the URI "',(0,n.yg)("em",{parentName:"p"},(0,n.yg)("a",{parentName:"em",href:"http://www.mywebsite.com/path/to/websiteresource"},"http://www.mywebsite.com/path/to/websiteresource")),'".')),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"Query"),": The ",(0,n.yg)("em",{parentName:"p"},"query"),", denoted by a '",(0,n.yg)("strong",{parentName:"p"},"?'"),' character, contains additional information passed to the resource. For example, the query is "',(0,n.yg)("em",{parentName:"p"},"q=example"),'" in the URI "',(0,n.yg)("em",{parentName:"p"},(0,n.yg)("a",{parentName:"em",href:"http://www.mywebsite.com/search?q=exampleparam"},"http://www.mywebsite.com/search?q=exampleparam")),'".'))),(0,n.yg)("h2",{id:"examples-of-uri"},"Examples of URI"),(0,n.yg)("p",null,"Look at more examples of URIs with their representations as follows:"),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"URI")," - ",(0,n.yg)("em",{parentName:"p"},(0,n.yg)("a",{parentName:"em",href:"https://www.mywebsite.com:8080/path/to/websiteresource?parameter=value"},"https://www.mywebsite.com:8080/path/to/websiteresource?parameter=value")),"\n",(0,n.yg)("strong",{parentName:"p"},"Scheme"),": ",(0,n.yg)("em",{parentName:"p"},"https"),"\n",(0,n.yg)("strong",{parentName:"p"},"Authority"),": ",(0,n.yg)("em",{parentName:"p"},(0,n.yg)("a",{parentName:"em",href:"http://www.mywebsite.com:8080"},"www.mywebsite.com:8080")),"\n",(0,n.yg)("strong",{parentName:"p"},"Path"),": ",(0,n.yg)("em",{parentName:"p"},"/path/to/websiteresource"),"\n",(0,n.yg)("strong",{parentName:"p"},"Query"),": ",(0,n.yg)("em",{parentName:"p"},"parameter=paramvalue")),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"URI")," - ",(0,n.yg)("em",{parentName:"p"},"ftp://ftp.mywebsite.com/path/to/myfile.txt"),"\n",(0,n.yg)("strong",{parentName:"p"},"Scheme"),": ",(0,n.yg)("em",{parentName:"p"},"ftp"),"\n",(0,n.yg)("strong",{parentName:"p"},"Authority"),": ",(0,n.yg)("em",{parentName:"p"},"ftp.mywebsite.com"),"\n",(0,n.yg)("strong",{parentName:"p"},"Path"),": ",(0,n.yg)("em",{parentName:"p"},"/path/to/myfile.txt"),"\n",(0,n.yg)("strong",{parentName:"p"},"Query"),": ",(0,n.yg)("em",{parentName:"p"},"None")),(0,n.yg)("p",null,"These URI examples demonstrate the practical application of what an URI is and its versatility."),(0,n.yg)("h2",{id:"syntax-of-uri"},"Syntax Of URI"),(0,n.yg)("p",null,"To better understand the components of URI, including the URI URL difference, you need to understand the syntax. The syntax of a URI usually follows the order:"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("strong",{parentName:"li"},"Scheme"),': The first part of the URI is the scheme (or protocol), followed by a colon (:). For instance, "http:" or "ftp:".'),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("strong",{parentName:"li"},"Authority"),': The next part of the URI is the authority, which can contain information about the host that serves the resource, such as the domain name or IP address. "',(0,n.yg)("a",{parentName:"li",href:"http://www.mywebsite.com%22"},'www.mywebsite.com"'),' or "192.168.1.1" are two examples.'),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("strong",{parentName:"li"},"Path"),': The path represents the location of the resource within the authority and is denoted by a forward slash (/). "/path/to/resource," for example.'),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("strong",{parentName:"li"},"Query"),': The query is represented by a question mark (?) and contains additional information passed to the resource. For example, "?parameter=value".')),(0,n.yg)("p",null,"The different parts of a URI can be combined to form a complete URI as follows:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"<scheme>://<authority><path>?<query>\n")),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Examples:")),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"http://www.mywebsite.com/path/to/resource"},"http://www.mywebsite.com/path/to/resource")),(0,n.yg)("p",null,"ftp://ftp.mywebsite.com/path/to/file.txt"),(0,n.yg)("p",null,"mailto:",(0,n.yg)("a",{parentName:"p",href:"mailto:user@mywebsite.com"},"user@mywebsite.com")),(0,n.yg)("p",null,"Tel:+837489834"),(0,n.yg)("p",null,"It's important to note that not all URIs will have all components, and some may have additional components that are specific to the scheme."),(0,n.yg)("h2",{id:"use-case-of-uri"},"Use Case of URI"),(0,n.yg)("p",null,"When considering 'whats a URI', its use cases provide clear insights. URIs play a critical role in the functioning of the Internet because they provide a standard method for computers to locate and access resources. URIs are used in many applications and protocols to identify and locate resources on the Internet. Here are a few examples of common URI applications:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"Webpages"),': One of the most common use cases of URIs is identifying Internet pages. URIs that start with "',(0,n.yg)("em",{parentName:"p"},"http"),'" or "',(0,n.yg)("em",{parentName:"p"},"https"),'" is used to access webpages and other website resources.')),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"File transfers"),': URIs that start with "ftp" are used to transfer files between computers.')),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"Email"),': URIs beginning with "mailto" are used to generate links that can be used to compose an email message.')),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"Telephone calls"),': URIs that start with "tel" generate links that can be clicked to make a phone call.')),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"Media streaming"),": URIs identify media files that can be streamed over the Internet, such as audio or video.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"Database access"),": URIs identify database resources and provide a way for programs to access them.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"Identifying resources in a distributed system"),": URIs are used to identify resources distributed across multiple servers or devices, such as files in a distributed file system or services running on a distributed computing platform."))),(0,n.yg)("h1",{id:"what-is-url"},"What is URL?"),(0,n.yg)("p",null,"A URL, standing for Uniform Resource Locator, is a specific type of URI (Uniform Resource Identifier), highlighting the URL URI relationship, used to identify a resource\u2019s location on the Internet. A URL is a string of characters that specifies how to access a resource on the Internet, typically a webpage or other file."),(0,n.yg)("p",null,'A URL comprises several components, including the scheme, domain name, path, and query. The scheme, also known as the protocol, specifies the type of resource and how it should be accessed. "http" and "https" are common schemes for webpages, "ftp" for file transfers, and "file" for files on a local computer.'),(0,n.yg)("p",null,"The domain name is the hostname or IP address of the server that hosts the resource. The path specifies the location of the resource on the server, and the query is used to provide additional information to the server."),(0,n.yg)("h2",{id:"examples-of-urls"},"Examples of URLs"),(0,n.yg)("p",null,"A good example of a URL describing its syntax is as follows:"),(0,n.yg)("p",null,(0,n.yg)("em",{parentName:"p"},'"',(0,n.yg)("a",{parentName:"em",href:"http://www.mywebsite.com/path/to/websiteresource?parameter=value#fragment%22"},'http://www.mywebsite.com/path/to/websiteresource?parameter=value#fragment"'),".")),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Scheme"),': "http"'),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Authority"),': "',(0,n.yg)("a",{parentName:"p",href:"http://www.mywebsite.com%22"},'www.mywebsite.com"')),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Path"),': "/path/to/resource"'),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Query"),': "parameter=value"'),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Fragment"),': "fragment"'),(0,n.yg)("p",null,"Other examples of a URl include:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"http://www.mywebsite.com/path/to/resource"},"http://www.mywebsite.com/path/to/resource")),(0,n.yg)("li",{parentName:"ul"},"ftp://ftp.mywebsite.com/path/to/file.txt"),(0,n.yg)("li",{parentName:"ul"},"file:///path/to/local/myfile.txt")),(0,n.yg)("p",null,"In essence, a URL is a type of URI that allows you to find and access resources on the Internet. Web browsers, servers, and other software use it to retrieve and manage Internet resources."),(0,n.yg)("h2",{id:"benefits-of-uri-over-url"},"Benefits of URI over URL"),(0,n.yg)("p",null,"URIs (Uniform Resource Identifiers) are a broader classification of identifiers than URLs (Uniform Resource Locators). They have several advantages over URLs including:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"Interoperability"),": URIs are more interoperable than URLs because they can be used across different systems and protocols. On the other hand, URLs are Internet-specific and are only used by web browsers and other Internet-based applications.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"Namespace independence"),": URLs are specific to the Internet and use a specific naming scheme, such as the domain name system, whereas URIs are not tied to a specific naming scheme or namespace (DNS). This means that URIs can identify resources in any namespace, whereas URLs can only identify resources in the Internet namespace.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"Abstraction"),": URIs are more abstract than URLs in that they identify a resource without specifying how to access it, whereas URLs do. This provides more flexibility in how the resource can be accessed.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"Flexibility"),": URIs are more flexible than URLs because they can be used to identify any resource, whereas URLs are explicitly used to identify the location of a resource on the Internet.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"Persistence"),": URIs are meant to be persistent, which means they should not change over time. However, URLs can change if the resource they refer to moves or the server's name or address changes."))),(0,n.yg)("h2",{id:"coding-smarter-using-uri--url-knowledge-in-development"},"Coding Smarter: Using URI & URL Knowledge in Development"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("strong",{parentName:"li"},"API Development"),": Developers often use URLs to define endpoints in RESTful APIs. For instance, a URL like ",(0,n.yg)("inlineCode",{parentName:"li"},"https://api.mywebsite.com/users")," can be used to handle requests related to user information. By manipulating different parts of the URL, such as the path and query parameters, developers can create a versatile and intuitive API structure."),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("strong",{parentName:"li"},"Error Handling"),": In web development, URIs can be used to handle errors elegantly. For example, redirecting users to a custom URI like ",(0,n.yg)("inlineCode",{parentName:"li"},"https://mywebsite.com/error?code=404")," can provide a user-friendly error message and logging mechanism."),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("strong",{parentName:"li"},"Resource Identification"),": URIs are crucial in uniquely identifying resources within a system, such as XML namespaces or RDF resources. A URI like ",(0,n.yg)("inlineCode",{parentName:"li"},"urn:isbn:0451450523")," can be used to uniquely identify a book in a digital library system."),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("strong",{parentName:"li"},"Routing in Web Applications"),": URLs are integral in routing within web applications. Frameworks like React or Angular use URLs to determine which component to render, for example, ",(0,n.yg)("inlineCode",{parentName:"li"},"https://mywebsite.com/about")," might route to an About page."),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("strong",{parentName:"li"},"Link Generation"),": In content management systems, URLs are dynamically generated to link to various content pieces. A blog post might be accessible through a URL like ",(0,n.yg)("inlineCode",{parentName:"li"},"https://blog.mywebsite.com/2024/01/my-first-post"),", which is automatically generated based on the post's title and date.")),(0,n.yg)("h2",{id:"comparison-summary-of-url-and-uri"},"Comparison Summary of URL and URI"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"URL"),(0,n.yg)("th",{parentName:"tr",align:"left"},"URI"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"A string of characters designed for unambiguous identification of resources and extensibility via the URI scheme"),(0,n.yg)("td",{parentName:"tr",align:"left"},"A web address that refers to a web resource that specifies its location on a computer network and a mechanism for retrieving it")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"Stands for Uniform Resource Locator"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Stands for Uniform Resource Identifier")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"A type of URI"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Superset of URL")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"Helps to identify a web resource using the location"),(0,n.yg)("td",{parentName:"tr",align:"left"},"Helps to identify a web resource either by name, location or both")))),(0,n.yg)("p",null,"The above comparison highlights the difference between URI and URL, showcasing URI's broader scope."),(0,n.yg)("p",null,"Below you can find a comparison table summarizing both the similarities and differences between URI and URL."),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Aspect"),(0,n.yg)("th",{parentName:"tr",align:null},"URL"),(0,n.yg)("th",{parentName:"tr",align:null},"URI"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Definition"),(0,n.yg)("td",{parentName:"tr",align:null},"A type of URI that identifies a resource and also provides a means to locate it."),(0,n.yg)("td",{parentName:"tr",align:null},"A string of characters to identify a name or a resource on the Internet.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Purpose"),(0,n.yg)("td",{parentName:"tr",align:null},"Mainly used to locate resources on the web."),(0,n.yg)("td",{parentName:"tr",align:null},"Used to identify a resource, which can be a URL (locating the resource) or a URN (naming the resource).")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Components"),(0,n.yg)("td",{parentName:"tr",align:null},"Mainly includes a protocol (like HTTP, HTTPS), domain, and possibly a path and query parameters."),(0,n.yg)("td",{parentName:"tr",align:null},"Can be a URL, URN, or a combination, and does not necessarily have to specify how to locate the resource.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Example"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"https://www.mywebsite.com/page")),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"https://www.mywebsite.com/page")," (as a URL) or ",(0,n.yg)("inlineCode",{parentName:"td"},"urn:isbn:0451450523")," (as a URN)")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Usage"),(0,n.yg)("td",{parentName:"tr",align:null},"Directly used in web browsers to access web pages."),(0,n.yg)("td",{parentName:"tr",align:null},"Used in various systems (like XML namespaces, RDF resources) for identification, not always for retrieval.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Protocol Specifications"),(0,n.yg)("td",{parentName:"tr",align:null},"Must specify a protocol (HTTP, FTP, etc.) to access the resource."),(0,n.yg)("td",{parentName:"tr",align:null},"Protocol specification is not necessary.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Resource Retrieval"),(0,n.yg)("td",{parentName:"tr",align:null},"specifies the ability to retrieve the resource it identifies."),(0,n.yg)("td",{parentName:"tr",align:null},"May or may not imply retrievability of the resource.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Standardization"),(0,n.yg)("td",{parentName:"tr",align:null},"A specific type of URI as per standards defined by the Internet Engineering Task Force (IETF)."),(0,n.yg)("td",{parentName:"tr",align:null},"A generalized format standardized by the IETF, covering more possibilities than just URLs.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Mutability"),(0,n.yg)("td",{parentName:"tr",align:null},"Generally mutable and can change over time."),(0,n.yg)("td",{parentName:"tr",align:null},"Can be either mutable or immutable, depending on whether it's a URL or a URN.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Similarity"),(0,n.yg)("td",{parentName:"tr",align:null},"All URLs are URIs."),(0,n.yg)("td",{parentName:"tr",align:null},"Includes URLs as a subset.")))),(0,n.yg)("h1",{id:"conclusion"},"Conclusion"),(0,n.yg)("p",null,"In summary, when considering URI vs URL, URIs are more versatile and flexible than URLs. They are designed to be more persistent and interoperable. URIs are more general-purpose identifiers that can identify any type of resource, whereas URLs are limited to identifying a resource's location on the Internet."))}y.isMDXComponent=!0}}]);