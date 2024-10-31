"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[29365],{58860:(e,t,n)=>{n.d(t,{xA:()=>d,yg:()=>g});var a=n(37953);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=u(n),h=o,g=p["".concat(l,".").concat(h)]||p[h]||c[h]||r;return n?a.createElement(g,i(i({ref:t},d),{},{components:n})):a.createElement(g,i({ref:t},d))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var u=2;u<r;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},10950:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>g,frontMatter:()=>s,metadata:()=>u,toc:()=>p});n(37953);var a=n(58860);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const s={title:"JWT Authentication - What is JSON web token?",description:"We will focus mainly on using JWTs for securing web applications.",slug:"jwt-authentication",authors:"joseph_mawa",tags:["dev-tools"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2024-03-11-jwt-authentication/social.png",hide_table_of_contents:!1},l=void 0,u={permalink:"/blog/jwt-authentication",source:"@site/blog/2024-03-11-jwt-authentication.md",title:"JWT Authentication - What is JSON web token?",description:"We will focus mainly on using JWTs for securing web applications.",date:"2024-03-11T00:00:00.000Z",formattedDate:"March 11, 2024",tags:[{label:"dev-tools",permalink:"/blog/tags/dev-tools"}],readingTime:13.77,hasTruncateMarker:!1,authors:[{name:"Joseph Mawa",title:"Web Developer",url:"https://github.com/nibble0101",imageURL:"/img/generic-profile.png",key:"joseph_mawa"}],frontMatter:{title:"JWT Authentication - What is JSON web token?",description:"We will focus mainly on using JWTs for securing web applications.",slug:"jwt-authentication",authors:"joseph_mawa",tags:["dev-tools"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2024-03-11-jwt-authentication/social.png",hide_table_of_contents:!1},prevItem:{title:"What are Low Code Development Platforms?",permalink:"/blog/low-code"},nextItem:{title:"Developing Internal Tools in 2024",permalink:"/blog/internal-tools"},relatedPosts:[{title:"How to Create a GraphQL API with Python and Django",description:"We will discuss how to create a GraphQL API with Python.",permalink:"/blog/graphql-with-python",formattedDate:"May 7, 2024",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:7.395,date:"2024-05-07T00:00:00.000Z"},{title:"Getting Started with Terraform on AWS",description:"We'll walk through getting started with Terraform specifically for infrastructure provisioning on Amazon Web Services (AWS).",permalink:"/blog/terraform-aws",formattedDate:"September 12, 2024",authors:[{name:"Shangai Ziviku",title:"Software Developer",imageURL:"/img/generic-profile.png",key:"shingai_zivuku"}],readingTime:9.73,date:"2024-09-12T00:00:00.000Z"},{title:"How to Delete Local and Remote Git Branches",description:"We will take a look the example of deleting local and remote Git branches.",permalink:"/blog/git-delete-remote-branch-and-local-branch",formattedDate:"July 11, 2024",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:10.035,date:"2024-07-11T00:00:00.000Z"}],authorPosts:[{title:"CSS Box Shadow with 25 Examples",description:"We'll explore the CSS `box-shadow` property.",permalink:"/blog/box-shadow-css",formattedDate:"February 28, 2024",authors:[{name:"Joseph Mawa",title:"Web Developer",url:"https://github.com/nibble0101",imageURL:"/img/generic-profile.png",key:"joseph_mawa"}],readingTime:18.315,date:"2024-02-28T00:00:00.000Z"},{title:"Building a React Admin Dashboard with Tremor Library",description:"We'll build a simple React admin dashboard using Refine and Tremor.",permalink:"/blog/building-react-admin-dashboard-with-tremor",formattedDate:"July 2, 2023",authors:[{name:"Joseph Mawa",title:"Web Developer",url:"https://github.com/nibble0101",imageURL:"/img/generic-profile.png",key:"joseph_mawa"}],readingTime:23.495,date:"2023-07-02T00:00:00.000Z"},{title:"React Hook Form vs Formik - Comparing the most popular React form libraries",description:"This article will compare React Hook Form and Formik by highlighting their strengths and weaknesses.",permalink:"/blog/react-hook-form-vs-formik",formattedDate:"July 23, 2024",authors:[{name:"Joseph Mawa",title:"Web Developer",url:"https://github.com/nibble0101",imageURL:"/img/generic-profile.png",key:"joseph_mawa"}],readingTime:11.68,date:"2024-07-23T00:00:00.000Z"}]},d={authorsImageUrls:[void 0]},p=[{value:"Introduction",id:"introduction",level:2},{value:"What is JWT(JSON Web Token)",id:"what-is-jwtjson-web-token",level:2},{value:"Structure of JWT",id:"structure-of-jwt",level:2},{value:"JWT Header",id:"jwt-header",level:3},{value:"JWT Payload",id:"jwt-payload",level:3},{value:"Signature",id:"signature",level:3},{value:"How does JWT Authentication work?",id:"how-does-jwt-authentication-work",level:2},{value:"Problems JSON web tokens solve",id:"problems-json-web-tokens-solve",level:2},{value:"How to use JWT for user authorization in Express",id:"how-to-use-jwt-for-user-authorization-in-express",level:2},{value:"Create npm project",id:"create-npm-project",level:3},{value:"Install dependencies",id:"install-dependencies",level:3},{value:"Create an express server",id:"create-an-express-server",level:3},{value:"Use JSON web token to authorize users",id:"use-json-web-token-to-authorize-users",level:3},{value:"Limitations of JWTs for managing user sessions",id:"limitations-of-jwts-for-managing-user-sessions",level:2},{value:"Security",id:"security",level:3},{value:"Bandwidth and size limitation",id:"bandwidth-and-size-limitation",level:3},{value:"Revoking access and invalidating JWT",id:"revoking-access-and-invalidating-jwt",level:3},{value:"Conclusion",id:"conclusion",level:2}],c={toc:p},h="wrapper";function g(e){var{components:t}=e,n=i(e,["components"]);return(0,a.yg)(h,r(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){o(e,t,n[t])}))}return e}({},c,n),{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"introduction"},"Introduction"),(0,a.yg)("p",null,"In today's digital era, users have lots of personal and private data online. Therefore successful authentication, user authentication and authorization are inevitable. With authentication, you can validate that a user is who they claim to be. It ensures their data are kept private and secure."),(0,a.yg)("p",null,"After validating a user's identity, you need authorization to permit them to access some resources. Authorization is usually based on user role, status, or certain privileges. JSON web tokens come in handy for securing web applications."),(0,a.yg)("p",null,"Though they're mostly used for user authorization, you can also use JWTs for securely sharing any JSON data between two entities in a compact and self-contained way."),(0,a.yg)("p",null,"In this article, we will explore JSON web tokens. We will also learn how to use them for user authorization in a Node or Express project. We will focus mainly on using JWTs for securing web applications."),(0,a.yg)("p",null,"What we will cover:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#what-is-jwtjson-web-token"},"What is JWT(JSON Web Token)")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#structure-of-jwt"},"Structure of JWT")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#how-does-jwt-authentication-work"},"How does JWT Authentication work?")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#problems-json-web-tokens-solve"},"Problems JSON web tokens solve")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#how-to-use-jwt-for-user-authorization-in-express"},"How to use JWT for user authorization in Express")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#limitations-of-jwts-for-managing-user-sessions"},"Limitations of JWTs for managing user sessions"))),(0,a.yg)("h2",{id:"what-is-jwtjson-web-token"},"What is JWT(JSON Web Token)"),(0,a.yg)("p",null,"JSON Web Token, also known as JWT in short, is an open standard that defines a way for entities to securely share information as JSON objects. The information shared is usually referred to as claims."),(0,a.yg)("p",null,"The first draft of the JWT proposal was developed by the Internet Engineering Task Force in December 2010. The final draft, RFC \xa07519, was officially published in May 2015. It's the technical document that guides the development and use of JSON web tokens."),(0,a.yg)("p",null,"Though JWTs are predominantly used for authorization, their use is not limited to that. You can pretty much use it to securely share any kind of information in JSON format."),(0,a.yg)("p",null,"Because they're compact and lightweight, JWTs have been widely adopted and have become the bedrock of web security."),(0,a.yg)("h2",{id:"structure-of-jwt"},"Structure of JWT"),(0,a.yg)("p",null,"A JWT consists of three parts separated by periods. These three parts are the Header, Payload, and Signature. It looks like so:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-txt"},"Header.Payload.Signature\n")),(0,a.yg)("p",null,"Each section of a JWT is base64url-encoded and separated by a period. Let's look at each section and the information it contains in the sub-sections below."),(0,a.yg)("h3",{id:"jwt-header"},"JWT Header"),(0,a.yg)("p",null,"A JSON web token Header contains information about the token type and the encryption algorithm for creating the digital signature. A typical JSON web token header takes the shape below."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "alg": "HS256",\n  "typ": "JWT"\n}\n')),(0,a.yg)("p",null,"In the header above, the token type is ",(0,a.yg)("inlineCode",{parentName:"p"},"JWT"),", and the algorithm used for signing the token is ",(0,a.yg)("inlineCode",{parentName:"p"},"HS256"),". The header is encoded into base64 URL format to create the first part of our JWT."),(0,a.yg)("p",null,"After encoding the above header into base64 URL format, our full JSON web token structure will look like so:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-txt"},"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.Payload.Signature\n")),(0,a.yg)("p",null,"We have only encoded encrypted tokens in the header. We shall have a fully signed JSON web token when we create the payload and signature in the sub-sections below."),(0,a.yg)("h3",{id:"jwt-payload"},"JWT Payload"),(0,a.yg)("p",null,"The second part of a JSON web token is the payload. It comes after the header. The payload contains information about an entity. The information in the payload are referred to as claims."),(0,a.yg)("p",null,"A claim consists of name-value pairs. A claim name is always a string and its value is any valid JSON value. Claim names should always be unique. Claims fall into three classes. These three classes are:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Registered claims"),(0,a.yg)("li",{parentName:"ul"},"Public claims"),(0,a.yg)("li",{parentName:"ul"},"Private claims")),(0,a.yg)("p",null,"Registered claims are not mandatory. They're a set of useful and interoperable claims that you may or may not implement. They include: ",(0,a.yg)("inlineCode",{parentName:"p"},'"iss"'),", ",(0,a.yg)("inlineCode",{parentName:"p"},'"sub"'),", ",(0,a.yg)("inlineCode",{parentName:"p"},'"aud"'),", ",(0,a.yg)("inlineCode",{parentName:"p"},'"exp"'),", and several others you can look up in the ",(0,a.yg)("a",{parentName:"p",href:"https://datatracker.ietf.org/doc/html/rfc7519"},"RFC \xa07519")," technical document."),(0,a.yg)("p",null,"Public claims are defined by JWT users. To avoid collisions, you need to register public claim names in the IANA \xa0",(0,a.yg)("a",{parentName:"p",href:"https://www.iana.org/assignments/jwt/jwt.xhtml"},"JSON Web Token Registry")," or define them as a URI with collision resistant namespace."),(0,a.yg)("p",null,"Private claim like its name suggests are private. A producer and consumer of JWT may decide to use claims that are neither registered nor public. Be aware that private claims are subject to collision. Therefore, use them with caution."),(0,a.yg)("p",null,"The JWT payload below has three claims. The claim names are ",(0,a.yg)("inlineCode",{parentName:"p"},"sub"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"name"),", and ",(0,a.yg)("inlineCode",{parentName:"p"},"iat"),". Their respective values are ",(0,a.yg)("inlineCode",{parentName:"p"},'"1234567890"'),", ",(0,a.yg)("inlineCode",{parentName:"p"},'"John Doe"'),", and ",(0,a.yg)("inlineCode",{parentName:"p"},"1516239022"),". Both ",(0,a.yg)("inlineCode",{parentName:"p"},"sub"),"(Subject) and ",(0,a.yg)("inlineCode",{parentName:"p"},"iat"),"(Issue at) are registered claims while ",(0,a.yg)("inlineCode",{parentName:"p"},"name")," is a public claim."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "sub": "1234567890",\n  "name": "John Doe",\n  "iat": 1516239022\n}\n')),(0,a.yg)("p",null,"We can encode the above payload into a Base64 URL format so that our JSON web token looks like the code below. We have now encoded both the header and payload in base64 URL format. We are left with the Signature."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-txt"},"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.Signature\n")),(0,a.yg)("p",null,"Let's explore how to use an algorithm and a secret key to digitally sign the JWT."),(0,a.yg)("h3",{id:"signature"},"Signature"),(0,a.yg)("p",null,"The third part of a JSON web token is the digital signature. You can use the algorithm specified in the header with the base64url-encoded header, base64url-encoded payload, and a secret to create a JWT signature for signed tokens."),(0,a.yg)("p",null,"As an example, if you're using the HMAC SHA256 algorithm, you can create the signature like so:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},'HMACSHA256(base64UrlEncode(header) + "." + base64UrlEncode(payload), secret);\n')),(0,a.yg)("p",null,"The digital signature generated will constitute the last part of the JSON web token. It's used to verify that the message has not been tampered with. Depending on the secret you've used, the JWT will now look like so:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-txt"},"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.cThIIoDvwdueQB468K5xDc5633seEFoqwxjF_xSJyQQ\n")),(0,a.yg)("p",null,"You can now pass the above JWT to HTML or HTTP environments because it's compact and lightweight. There is a handy ",(0,a.yg)("a",{parentName:"p",href:"https://jwt.io/#debugger-io"},"online tool")," that you can also use to decode, verify, generate, and debug JWTs."),(0,a.yg)("p",null,"Be aware that encoding information in base64 URL format doesn't conceal it. Anybody can decode and read the information. Be sure not to include sensitive credentials such as usernames, emails, and passwords in a signed JSON web token payload."),(0,a.yg)("h2",{id:"how-does-jwt-authentication-work"},"How does JWT Authentication work?"),(0,a.yg)("p",null,"Depending on the application's authentication strategy, a user can log in using credentials such as email, username, and password. To keep the user logged in during that particular session, the server sends back a JSON web token."),(0,a.yg)("p",null,"In subsequent requests, the user agent will send the JSON web token to access protected resources on the server. You can use the Authorization header to pass the JWT like so:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},"Authorization: Bearer <Token>\n")),(0,a.yg)("p",null,"The server then checks for the ",(0,a.yg)("inlineCode",{parentName:"p"},"Authorization")," header in the request. If present, the server verifies the validity of the JSON web token before granting access to some resources."),(0,a.yg)("h2",{id:"problems-json-web-tokens-solve"},"Problems JSON web tokens solve"),(0,a.yg)("p",null,"HTTP is a stateless protocol by design. An HTTP server doesn't remember anything about previous requests from the same user. Each request is considered a new interaction and is independent of the others. Therefore, each request must have all the information the server needs to complete the request."),(0,a.yg)("p",null,"The stateless design makes it easy to implement and scale HTTP servers. However, it becomes a problem if each user needs customized content. You need to persist state to serve customized content."),(0,a.yg)("p",null,"Traditionally, before JWTs, session IDs(also known as session tokens) were used to persist state and secure web apps."),(0,a.yg)("p",null,"With session IDs, the server creates a new session, stores the session token, and sends the session ID back to the browser after authenticating a user."),(0,a.yg)("p",null,"The browser sends the session ID in subsequent requests so that the server can use it for authorization. However, this has a drawback. It introduces session ID lookup overhead."),(0,a.yg)("p",null,"Unlike session tokens, you don't need to persist JSON web tokens on the server. After user authentication, the server creates a digitally signed JWT as described above and sends it to the browser."),(0,a.yg)("p",null,"The browser sends the token in subsequent requests. The server validates the JWT to make sure it has not been tampered with. The JWT has all the information needed to verify the user's identity. JWTs remove the need to persist tokens on the server and query the database on every request."),(0,a.yg)("p",null,"In this section, you will learn how to use JWTs for user authorization in a simple Express server. It will give you an idea of how JWTs work. Before starting, be sure you have installed the Node runtime environment and a text editor like VS Code."),(0,a.yg)("h2",{id:"how-to-use-jwt-for-user-authorization-in-express"},"How to use JWT for user authorization in Express"),(0,a.yg)("p",null,"In this section, you will learn how to use JWTs for user authorization in a simple Express server. It will give you an idea of how JWTs work. Before starting, be sure you have installed the Node runtime environment and a text editor like VS Code."),(0,a.yg)("h3",{id:"create-npm-project"},"Create npm project"),(0,a.yg)("p",null,"Use the command below to create a new project directory. I'm naming it learn-jwt. You can give it any name."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sh"},"mkdir learn-jwt\n")),(0,a.yg)("p",null,"After creating it, open the directory in VS code or any other text editor. Use the command below to initialize an npm project."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sh"},"npm init -y\n")),(0,a.yg)("p",null,"After successfully initializing an npm project, you should now see a ",(0,a.yg)("inlineCode",{parentName:"p"},"package.json")," file at the root of your project directory."),(0,a.yg)("h3",{id:"install-dependencies"},"Install dependencies"),(0,a.yg)("p",null,"Let us now install dependencies. Will will install express, jsonwebtoken, and dotenv from the npm package registry."),(0,a.yg)("p",null,"Jsonwebtoken is an implementation of JWT for Node. We will use dotenv for loading environment variables from .",(0,a.yg)("inlineCode",{parentName:"p"},"env")," file into the ",(0,a.yg)("inlineCode",{parentName:"p"},"process.env")," object."),(0,a.yg)("p",null,"Run the command below to install the project dependencies."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sh"},"npm i express jsonwebtoken dotenv\n")),(0,a.yg)("p",null,"After successfully installing the above packages, you should see a ",(0,a.yg)("inlineCode",{parentName:"p"},"node_modules")," directory at the root of your project directory."),(0,a.yg)("h3",{id:"create-an-express-server"},"Create an express server"),(0,a.yg)("p",null,"Let's implement a simple express server in this section. Create the ",(0,a.yg)("inlineCode",{parentName:"p"},"index.js")," file. Copy and paste the code below into it."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js",metastring:'title="index.js"',title:'"index.js"'},'const express = require("express");\nconst app = express();\n\nconst PORT = process.env.PORT || 3000;\n\napp.get("/", (req, res) => {\n  res.send("Hello world!");\n});\n\napp.listen(PORT, () => console.log(`Your app is listening on port ${PORT}`));\n')),(0,a.yg)("p",null,"Use the command below to start the development server. It will launch the server in watch mode. Be aware that watch mode is still an experimental feature at the time of writing this article. Therefore, you will get some warning on the command line."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sh"},"node --watch index.js\n")),(0,a.yg)("p",null,'The server should now return the "Hello world!" text when you navigate to the index(',(0,a.yg)("inlineCode",{parentName:"p"},"/"),") route."),(0,a.yg)("p",null,"As explained above, you need a secret key to create JSON web tokens. We will create a secret key using Node's built-in crypto module. Use the ",(0,a.yg)("inlineCode",{parentName:"p"},"node")," command to launch a Node REPL session."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sh"},"node\n")),(0,a.yg)("p",null,"After generating a secret key, create the .env file at the root of your project directory. Copy and paste the code below into it. Replace the value of the JWT_SECRET environment variable with the secret key you created above."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},'require("crypto").randomBytes(64).toString("hex");\n')),(0,a.yg)("p",null,"After generating a secret key, create the ",(0,a.yg)("inlineCode",{parentName:"p"},".env")," file at the root of your project directory. Copy and paste the code below into it. Replace the value of the ",(0,a.yg)("inlineCode",{parentName:"p"},"JWT_SECRET")," environment variable with the secret key you created above."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-txt"},"JWT_SECRET=b19bf1083751c05208ca2ce389af1e92de78cf9c8d56b00952e24cbd67510dd90f2a94605ea30f26510ad55d880dd1606d2910d6c1433c97ad97f5e922d92bcb\n")),(0,a.yg)("h3",{id:"use-json-web-token-to-authorize-users"},"Use JSON web token to authorize users"),(0,a.yg)("p",null,"Let's implement a simple user authorization with JWTs. Add the changes below to the ",(0,a.yg)("inlineCode",{parentName:"p"},"index.js")," file you created above."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js",metastring:'title="index.js"',title:'"index.js"'},'//highlight-start\nrequire("dotenv").config();\nconst jwt = require("jsonwebtoken");\n//highlight-end\nconst express = require("express");\nconst app = express();\n\n//highlight-next-line\napp.use(express.json());\n\nconst PORT = process.env.PORT || 3000;\n\n//highlight-start\napp.post("/login", (req, res) => {\n  // Authorize user\n  const username = req.body.username;\n  const password = req.body.password;\n\n  const accessToken = jwt.sign({ username, password }, process.env.JWT_SECRET);\n  res.json({ accessToken });\n});\n//highlight-end\n\napp.get("/", (req, res) => {\n  res.send("Hello world!");\n});\n\napp.listen(PORT, () => console.log(`Your app is listening on port ${PORT}`));\n')),(0,a.yg)("p",null,"In the code above, we configured the ",(0,a.yg)("inlineCode",{parentName:"p"},"dotenv")," package to load our secret key from the ",(0,a.yg)("inlineCode",{parentName:"p"},".env")," file. We also mounted the built-in ",(0,a.yg)("inlineCode",{parentName:"p"},"express.json()")," middleware. It is for parsing incoming requests with JSON payloads."),(0,a.yg)("p",null,"We added a simple ",(0,a.yg)("inlineCode",{parentName:"p"},"/login")," route. Ordinarily, you send login credentials in a post request. During login, you authenticate a user before generating a JWT. The code above assumes the user has already been authenticated."),(0,a.yg)("p",null,"We accessed the user credentials (username and password) and used the secret key to generate a signed JWT. We're sending the JWT to the user agent as a JSON object."),(0,a.yg)("p",null,"When you make a POST request to the ",(0,a.yg)("inlineCode",{parentName:"p"},"/login")," route with user credentials in the request body, the server will create a JWT, which looks like the code below."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-JSON"},'{\n  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkphbmUgRG9lIiwicGFzc3dvcmQiOiIxMjM0NSIsImlhdCI6MTcwOTc5OTc3OX0.xOLRUSytjjXnzC4-ZPY2gohmozhKkWSIS328bf0TmM4"\n}\n')),(0,a.yg)("p",null,"Let's create a protected route that users can only access after verifying their JWT. Add the changes below to the ",(0,a.yg)("inlineCode",{parentName:"p"},"index.js")," file."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js",metastring:'title="index.js"',title:'"index.js"'},'require("dotenv").config();\nconst jwt = require("jsonwebtoken");\nconst express = require("express");\nconst app = express();\n\napp.use(express.json());\n\nconst PORT = process.env.PORT || 3000;\n\napp.post("/login", (req, res) => {\n  // Authorize user\n  const username = req.body.username;\n  const password = req.body.password;\n\n  const accessToken = jwt.sign({ username, password }, process.env.JWT_SECRET);\n  res.json({ accessToken });\n});\n\n//highlight-start\napp.get("/posts", verifyToken, (req, res) => {\n  const posts = [\n    {\n      username: "jane_doe",\n      title: "Post 1",\n    },\n    {\n      username: "john_doe",\n      title: "Post 2",\n    },\n  ];\n\n  res.json(posts.filter((post) => post.username === req.user.username));\n});\n//highlight-end\n\napp.get("/", (req, res) => {\n  res.send("Hello world!");\n});\n\n//highlight-start\nfunction verifyToken(req, res, next) {\n  const authHeader = req.headers["authorization"];\n\n  const token = authHeader && authHeader.split(" ")[1];\n  if (token === null) return res.sendStatus(401);\n\n  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {\n    if (err) return res.sendStatus(403);\n    req.user = user;\n    next();\n  });\n}\n//highlight-end\n\napp.listen(PORT, () => console.log(`Your app is listening on port ${PORT}`));\n')),(0,a.yg)("p",null,"In the code above, we added a simple ",(0,a.yg)("inlineCode",{parentName:"p"},"/posts")," route, which you can access using a GET request. We also declared a ",(0,a.yg)("inlineCode",{parentName:"p"},"verifyToken")," middleware and mounted it on the ",(0,a.yg)("inlineCode",{parentName:"p"},"/posts")," route."),(0,a.yg)("p",null,"The middleware checks for the JWT in the Authorization header. If present, it verifies the JWT. As explained above, only the secret token is required for verifying the JWT. The user will only access the posts after the JWT has been successfully verified."),(0,a.yg)("p",null,"To test the above implementation, you can use an HTTP client like Postman. I prefer the REST client Visual Studio Code extension. You can use it to make HTTP requests to a RESTful service or GraphQL API inside VS Code."),(0,a.yg)("p",null,"When testing the above implementation, send a post request to the ",(0,a.yg)("inlineCode",{parentName:"p"},"/login")," route with user credentials in the request body. It will generate a signed JWT and send it back to the client."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-txt"},'POST  /login\nContent-Type: application/json\n{\n    "username": "jane_doe",\n    "password": "12345"\n}\n')),(0,a.yg)("p",null,"After that, send a GET request to the ",(0,a.yg)("inlineCode",{parentName:"p"},"/posts")," route. Be sure to include the JWT in the Authorization header, as in the example below."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-txt"},"GET /posts\nAuthorization: Bearer <token>\n")),(0,a.yg)("p",null,"You can also modify the JWT to check whether a modified token can be used to access a resource."),(0,a.yg)("h2",{id:"limitations-of-jwts-for-managing-user-sessions"},"Limitations of JWTs for managing user sessions"),(0,a.yg)("p",null,"As hinted above, JWTs are mainly used for managing user sessions. They've become ubiquitous for web security. However, JWTs also have drawbacks. Below are some of them."),(0,a.yg)("h3",{id:"security"},"Security"),(0,a.yg)("p",null,"As explained above, the data you send in a signed JWT payload is base64url-encoded. Anybody who gains access to the JWT can decode its contents. Be sure to always transmit JSON web tokens over secure HTTPS."),(0,a.yg)("h3",{id:"bandwidth-and-size-limitation"},"Bandwidth and size limitation"),(0,a.yg)("p",null,"Sometimes, the nature of the application may require storing lots of data in the JWT payload. This has the downside of increasing bandwidth if you use the JWT with cookies because the token is added to each request."),(0,a.yg)("p",null,"Similarly, cookies have a maximum size of 4kB. This might be a limitation if you want to pass more data in the JWT payload."),(0,a.yg)("h3",{id:"revoking-access-and-invalidating-jwt"},"Revoking access and invalidating JWT"),(0,a.yg)("p",null,"Sometimes, you may want to revoke user privileges due to security concerns. Invalidating JWTs may not be trivial and straightforward. Once you issue a JWT, there is no straightforward mechanism for revocation of access token."),(0,a.yg)("h2",{id:"conclusion"},"Conclusion"),(0,a.yg)("p",null,"JSON web tokens provide a simple and compact mechanism for sharing information between entities. Most programming languages, runtimes, and web frameworks have libraries for implementing JWT in a web application."),(0,a.yg)("p",null,"A JWT consists of a header, payload, and a digital signature. The header and payload are base64url-encoded and are used with a secret key to generate a digital signature."),(0,a.yg)("p",null,"The server sends the JWT to the browser after user authentication. The browser sends the JWT in subsequent requests so that the server can use it to verify the user's identity."),(0,a.yg)("p",null,"Though the commonest use case of JWT is user authorization, it's by no means the only one. You can use JWT to share information between two entities simply and compactly."))}g.isMDXComponent=!0}}]);