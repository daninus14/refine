"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[50582],{58860:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>g});var i=n(37953);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),u=a,g=m["".concat(s,".").concat(u)]||m[u]||d[u]||o;return n?i.createElement(g,r(r({ref:t},c),{},{components:n})):i.createElement(g,r({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:a,r[1]=l;for(var p=2;p<o;p++)r[p]=n[p];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},38970:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>g,frontMatter:()=>l,metadata:()=>p,toc:()=>m});n(37953);var i=n(58860);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function r(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const l={title:"Introduction to Nest JS",description:"In this article, we will discuss how to create a simple web application using NestJS and its major components.",slug:"nest-js",authors:"muhammad_khabbab",tags:["dev-tools"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2024-04-29-nest-js/social-2.png",hide_table_of_contents:!1},s=void 0,p={permalink:"/blog/nest-js",source:"@site/blog/2024-04-29-nest-js.md",title:"Introduction to Nest JS",description:"In this article, we will discuss how to create a simple web application using NestJS and its major components.",date:"2024-04-29T00:00:00.000Z",formattedDate:"April 29, 2024",tags:[{label:"dev-tools",permalink:"/blog/tags/dev-tools"}],readingTime:9.14,hasTruncateMarker:!1,authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],frontMatter:{title:"Introduction to Nest JS",description:"In this article, we will discuss how to create a simple web application using NestJS and its major components.",slug:"nest-js",authors:"muhammad_khabbab",tags:["dev-tools"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2024-04-29-nest-js/social-2.png",hide_table_of_contents:!1},prevItem:{title:"How to Use Nodemon to Automatically Restart Node.js Applications",permalink:"/blog/nodemon"},nextItem:{title:"4 Ways to Generate UUIDs in Node.js",permalink:"/blog/node-js-uuid"},relatedPosts:[{title:"Django REST Framework - How to use it to create APIs?",description:"Explore the Django REST Framework and learn how to create APIs using it.",permalink:"/blog/django-rest-framework",formattedDate:"April 3, 2024",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:7.68,date:"2024-04-03T00:00:00.000Z"},{title:"esbuild - Next-generation JavaScript bundler",description:"The advantages of using esbuild and how to use it in your project.",permalink:"/blog/what-is-esbuild",formattedDate:"July 4, 2024",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:11.845,date:"2024-07-04T00:00:00.000Z"},{title:"How to use Docker Exec command?",description:"We'll go over the Docker exec command syntax, usage as well as some examples.",permalink:"/blog/docker-exec",formattedDate:"August 18, 2023",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:8.995,date:"2023-08-18T00:00:00.000Z"}],authorPosts:[{title:"Docker Swarm Mode Guide",description:"We'll cover the basics of Docker Swarm mode, including how to set up your first Swarm, join nodes to the Swarm, deploy services, scale services, and monitor services.",permalink:"/blog/docker-swarm",formattedDate:"October 5, 2023",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:9.53,date:"2023-10-05T00:00:00.000Z"},{title:"Kubernetes Operators",description:"This article digs deep into the essence of Kubernetes operators, explaining their purpose, functionality, and how they are actually implemented.",permalink:"/blog/kubernetes-operators",formattedDate:"January 12, 2024",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:9.425,date:"2024-01-12T00:00:00.000Z"},{title:"Introduction to Docker Networking",description:"We'll go over the basics of Docker networking, including the default networks, bridge networking, host networking, overlay networking, Macvlan networking, and custom bridge networking.",permalink:"/blog/docker-networking",formattedDate:"October 18, 2023",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:8.925,date:"2023-10-18T00:00:00.000Z"}]},c={authorsImageUrls:[void 0]},m=[{value:"Introduction to NestJS Framework",id:"introduction-to-nestjs-framework",level:2},{value:"Why NestJS?",id:"why-nestjs",level:2},{value:"Steps required for Installation and Setup of NestJS Project",id:"steps-required-for-installation-and-setup-of-nestjs-project",level:2},{value:"\u2022 Pre-Requisites",id:"-pre-requisites",level:3},{value:"\u2022 Installation",id:"-installation",level:3},{value:"How to create a simple web application using NestJS?",id:"how-to-create-a-simple-web-application-using-nestjs",level:2},{value:"Major Components of Application",id:"major-components-of-application",level:3},{value:"\u2022 Modules",id:"-modules",level:4},{value:"\u2022 Controllers",id:"-controllers",level:4},{value:"\u2022 Providers",id:"-providers",level:4},{value:"Step-by-Step Implementation of Components",id:"step-by-step-implementation-of-components",level:2},{value:"\u2022 Step 1: Create a Module",id:"-step-1-create-a-module",level:3},{value:"\u2022 Step 2: Define Endpoints using Controllers",id:"-step-2-define-endpoints-using-controllers",level:3},{value:"\u2022 Step 3: Create Entity",id:"-step-3-create-entity",level:3},{value:"\u2022 Step 4: Encapsulate the business logic in Provider (Service)",id:"-step-4-encapsulate-the-business-logic-in-provider-service",level:3},{value:"\u2022 Step 5: Setup Modules",id:"-step-5-setup-modules",level:3},{value:"\u2022 Step 6: Run and Test Application",id:"-step-6-run-and-test-application",level:3},{value:"Bonus: Refine\u2019s Support for NestJS",id:"bonus-refines-support-for-nestjs",level:2},{value:"Conclusion",id:"conclusion",level:2}],d={toc:m},u="wrapper";function g(e){var{components:t}=e,n=r(e,["components"]);return(0,i.yg)(u,o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},i=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),i.forEach((function(t){a(e,t,n[t])}))}return e}({},d,n),{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"introduction-to-nestjs-framework"},"Introduction to NestJS Framework"),(0,i.yg)("p",null,"Node.js is a popular environment for building complex and advanced applications. While working with Node.js on a complex application, it becomes difficult to maintain when scaling it. NestJS comes into play at this point! It is a Node.js server-side framework, which is built on the top of the typescript that allows you to efficiently build scalable and easily maintainable applications. Nest utilizes reliable HTTP Server frameworks such as Express by default, and it can be customized to use Fastify as well."),(0,i.yg)("p",null,"Steps we'll cover in this article:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"#introduction-to-nestjs-framework"},"Introduction to NestJS Framework")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"#why-nestjs"},"Why NestJS?")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"#steps-required-for-installation-and-setup-of-nestjs-project"},"Steps required for Installation and Setup of NestJS Project")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"#how-to-create-a-simple-web-application-using-nestjs"},"How to create a simple web application using NestJS?"),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"#major-components-of-application"},"Major Components of Application"),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"#modules"},"\u2022 Modules")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"#controllers"},"\u2022 Controllers")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"#providers"},"\u2022 Providers")))))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"#step-by-step-implementation-of-components"},"Step-by-Step Implementation of Components"),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"#step-1-create-a-module"},"\u2022 Step 1: Create a Module")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"#step-2-define-endpoints-using-controllers"},"\u2022 Step 2: Define Endpoints using Controllers")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"#step-3-create-entity"},"\u2022 Step 3: Create Entity")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"#step-4-encapsulate-the-business-logic-in-provider-service"},"\u2022 Step 4: Encapsulate the business logic in Provider (Service)")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"#step-5-setup-modules"},"\u2022 Step 5: Setup Modules")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"#step-6-run-and-test-application"},"\u2022 Step 6: Run and Test Application"))))),(0,i.yg)("h2",{id:"why-nestjs"},"Why NestJS?"),(0,i.yg)("p",null,"NestJS follows a modular structure, which helps you keep your code organized, and maintainable, accelerate development, and increase efficiency. Due to its modular architecture, your team, whether working on small or large projects, can work simultaneously on different features without affecting other areas. Additionally, NestJS also provides native support for monolith as well as microservices architecture, including the integration of modern concepts and technologies such as GraphQL, CRONJobs, and WebSockets."),(0,i.yg)("p",null,"It equips developers with a set of tools, such as a built-in validation system, to handle errors before they occur, enforcing validation rules and reducing the chance of errors. If you have prior experience with Angular, then NestJs is a perfect choice as it requires you to start with a small learning curve. Due to its extensive features, developers are attracted to it and are actively contributing, which helps in finding solutions for most use cases and cutting down development time."),(0,i.yg)("h2",{id:"steps-required-for-installation-and-setup-of-nestjs-project"},"Steps required for Installation and Setup of NestJS Project"),(0,i.yg)("h3",{id:"-pre-requisites"},"\u2022 Pre-Requisites"),(0,i.yg)("p",null,"Before getting started with NestJS, you will be required to install:"),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"1. NodeJS Environment"),"\n",(0,i.yg)("strong",{parentName:"p"},"2. NPM(Node Package Manager)")),(0,i.yg)("p",null,"You can download the installer from ",(0,i.yg)("strong",{parentName:"p"},(0,i.yg)("a",{parentName:"strong",href:"https://nodejs.org/en"},"NodeJS Website")),". It will install the package that includes both of the above listed items."),(0,i.yg)("div",{className:"centered-image"},(0,i.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2024-04-29-nest-js/Nest_1.png",alt:"Snapshot of completing nodejs installation wizard"})),(0,i.yg)("h3",{id:"-installation"},"\u2022 Installation"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},"Create a directory for your NestJS project and navigate to the desired location."),(0,i.yg)("li",{parentName:"ol"},"Install Nest CLI, which will help you initialize your application. To do that, run the following command: ",(0,i.yg)("inlineCode",{parentName:"li"},"npm i -g @nestjs/cli")),(0,i.yg)("li",{parentName:"ol"},"Verify the installation by typing and running \u201c",(0,i.yg)("em",{parentName:"li"},"nest"),"\u201d command in your command line interface.")),(0,i.yg)("div",{className:"centered-image"},(0,i.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2024-04-29-nest-js/Nest_2.png",alt:"Snapshot of verifying nestcli installation"})),"### \u2022 Project Setup Create your NestJS project using NestJS Cli. We are creating the project in the current directory with the name `auto-garage-nest `by using the following command:",(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"nest new auto-garage-nest")),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Note:")," ",(0,i.yg)("em",{parentName:"p"},"Choose ",(0,i.yg)("inlineCode",{parentName:"em"},"npm")," as a package manager")),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"The above command will create a basic project folder structure as below:")),(0,i.yg)("div",{className:"centered-image"},(0,i.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2024-04-29-nest-js/Nest_3.png",alt:"Snapshot of basic project folder structure created through nest command"})),(0,i.yg)("h2",{id:"how-to-create-a-simple-web-application-using-nestjs"},"How to create a simple web application using NestJS?"),(0,i.yg)("h3",{id:"major-components-of-application"},"Major Components of Application"),(0,i.yg)("h4",{id:"-modules"},"\u2022 Modules"),(0,i.yg)("p",null,"By creating these modules, you are grouping services, controllers, or any other components. All the code for a single feature will be available by just importing the FeatureModule. That means a module can encapsulate the whole functionality into it, like having modules for authentication, logging, etc."),(0,i.yg)("h4",{id:"-controllers"},"\u2022 Controllers"),(0,i.yg)("p",null,"Controllers are the entry point of your application. They receive specific HTTP requests and send back the response to the client side. Each controller is connected to different routes and their specific HTTP methods (",(0,i.yg)("inlineCode",{parentName:"p"},"GET"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"POST"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"PUT"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"DELETE"),")."),(0,i.yg)("h4",{id:"-providers"},"\u2022 Providers"),(0,i.yg)("p",null,"The providers, also known as services, contain the business logic where the code interacts with the database, processes the data, or interacts with external APIs. A provider can create an instance of a service that contains the logic and can be reused in any other component."),(0,i.yg)("h2",{id:"step-by-step-implementation-of-components"},"Step-by-Step Implementation of Components"),(0,i.yg)("h3",{id:"-step-1-create-a-module"},"\u2022 Step 1: Create a Module"),(0,i.yg)("p",null,"When we create the NestJS project above, it will automatically create ",(0,i.yg)("inlineCode",{parentName:"p"},"app.module.ts"),". AppModule is a root module that contains the reference of all modules. For effective arrangement of components, we will create a ",(0,i.yg)("inlineCode",{parentName:"p"},"vehicles")," module to group vehicle management features for the auto garage."),(0,i.yg)("p",null,"Using NestCli, we will navigate to the Nest project and then create a module with the following commands:"),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"cd auto-garage-nest")),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"nest generate module vehicles")),(0,i.yg)("p",null,"The above commands will create ",(0,i.yg)("inlineCode",{parentName:"p"},"vehicles.module.ts")," in the ",(0,i.yg)("inlineCode",{parentName:"p"},"src/vehicles")," folder and update ",(0,i.yg)("inlineCode",{parentName:"p"},"app.module.ts")," by importing vehicles."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-tsx"},'import { Module } from "@nestjs/common";\n\n@Module({})\nexport class VehiclesModule {}\n')),(0,i.yg)("h3",{id:"-step-2-define-endpoints-using-controllers"},"\u2022 Step 2: Define Endpoints using Controllers"),(0,i.yg)("p",null,"Now let\u2019s create a container to define the endpoints for vehicle management. Run the following command:"),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"nest generate controller vehicles")),(0,i.yg)("p",null,"The above command will automatically create the ",(0,i.yg)("inlineCode",{parentName:"p"},"vehicles.controller.ts")," file inside the ",(0,i.yg)("inlineCode",{parentName:"p"},"src/vehicles")," folder. We will define the ",(0,i.yg)("inlineCode",{parentName:"p"},"GE"),"T,",(0,i.yg)("inlineCode",{parentName:"p"},"POST"),",",(0,i.yg)("inlineCode",{parentName:"p"},"PUT"),",",(0,i.yg)("inlineCode",{parentName:"p"},"DELETE")," endpoints in that file like below:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-tsx"},'import {\n  Controller,\n  Get,\n  Post,\n  Put,\n  Delete,\n  Body,\n  Param,\n} from "@nestjs/common";\nimport { VehiclesService } from "./vehicles.service";\nimport { Vehicle } from "./entities/vehicle.entity";\n\n@Controller("vehicles")\nexport class VehiclesController {\n  constructor(private readonly vehiclesService: VehiclesService) {}\n\n  @Get()\n  async findAll(): Promise<Vehicle[]> {\n    return this.vehiclesService.findAll();\n  }\n\n  @Get(":id")\n  async findOne(@Param("id") id: string): Promise<Vehicle> {\n    return this.vehiclesService.findOne(+id);\n  }\n\n  @Post()\n  async create(@Body() vehicle: Vehicle): Promise<Vehicle> {\n    return this.vehiclesService.create(vehicle);\n  }\n\n  @Put(":id")\n  async update(\n    @Param("id") id: string,\n    @Body() vehicle: Vehicle,\n  ): Promise<Vehicle> {\n    return this.vehiclesService.update(+id, vehicle);\n  }\n\n  @Delete(":id")\n  async remove(@Param("id") id: string): Promise<void> {\n    return this.vehiclesService.remove(+id);\n  }\n}\n')),(0,i.yg)("h3",{id:"-step-3-create-entity"},"\u2022 Step 3: Create Entity"),(0,i.yg)("p",null,"In order to create structure in the database and to interact with it, we need to create entities. To do that, we will create ",(0,i.yg)("inlineCode",{parentName:"p"},"entities")," directory in ",(0,i.yg)("inlineCode",{parentName:"p"},"src/vehicles")," folder, and inside it, we will create a file with the name ",(0,i.yg)("inlineCode",{parentName:"p"},"vehicle.entity.ts")),(0,i.yg)("p",null,"Inside the ",(0,i.yg)("inlineCode",{parentName:"p"},"vehicle.entity.ts")," file, we will create an entity class and use the ",(0,i.yg)("inlineCode",{parentName:"p"},"typeORM")," package to convert the entity to the table in the database."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-tsx"},'import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";\n\n@Entity()\nexport class Vehicle {\n  @PrimaryGeneratedColumn()\n  id: number;\n\n  @Column()\n  make: string;\n\n  @Column()\n  model: string;\n\n  @Column()\n  year: number;\n\n  @Column()\n  color: string;\n}\n')),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Note:")," If you get an error on ",(0,i.yg)("inlineCode",{parentName:"p"},"typeorm")," package, then install it using the command below:"),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"npm install typeorm")),(0,i.yg)("p",null,"To use the SQLite database with typeORM, install the package using the following command:'"),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"npm install @nestjs/typeorm typeorm sqlite3")),(0,i.yg)("p",null,"After installing the package, create ",(0,i.yg)("inlineCode",{parentName:"p"},"ormconfig.json")," in your root config and add the configurations below:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-tsx"},'{\n    "type": "sqlite",\n    "database": "garage.sqlite",\n    "entities": ["dist/**/*.entity.js"],\n    "synchronize": true\n  }\n')),(0,i.yg)("h3",{id:"-step-4-encapsulate-the-business-logic-in-provider-service"},"\u2022 Step 4: Encapsulate the business logic in Provider (Service)"),(0,i.yg)("p",null,"We will create the services to place our business logic that will be interacting directly with the database. To do that, inside ",(0,i.yg)("inlineCode",{parentName:"p"},"src/vehicles")," folder where we have our controller and module, we will create a file with the name ",(0,i.yg)("inlineCode",{parentName:"p"},"vehicles.service.ts"),".",(0,i.yg)("br",{parentName:"p"}),"\n","Inside that file, we have placed the logic to:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Find all Vehicles"),(0,i.yg)("li",{parentName:"ul"},"Find specific vehicle"),(0,i.yg)("li",{parentName:"ul"},"Create a Vehicle"),(0,i.yg)("li",{parentName:"ul"},"Update Vehicle Details"),(0,i.yg)("li",{parentName:"ul"},"Remove a Vehicle")),(0,i.yg)("p",null,"After placing our logic, the service file for the vehicle will look like this:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-tsx"},'import { Injectable } from "@nestjs/common";\nimport { InjectRepository } from "@nestjs/typeorm";\nimport { Repository, FindOneOptions } from "typeorm"; // Import FindOneOptions\nimport { Vehicle } from "./entities/vehicle.entity";\n\n@Injectable()\nexport class VehiclesService {\n  constructor(\n    @InjectRepository(Vehicle)\n    private vehicleRepository: Repository<Vehicle>,\n  ) {}\n\n  async findAll(): Promise<Vehicle[]> {\n    return this.vehicleRepository.find();\n  }\n\n  async findOne(id: number): Promise<Vehicle> {\n    const options: FindOneOptions<Vehicle> = { where: { id } }; // Construct FindOneOptions\n    return this.vehicleRepository.findOne(options);\n  }\n\n  async create(vehicle: Vehicle): Promise<Vehicle> {\n    return this.vehicleRepository.save(vehicle);\n  }\n\n  async update(id: number, vehicle: Vehicle): Promise<Vehicle> {\n    await this.vehicleRepository.update(id, vehicle);\n    const options: FindOneOptions<Vehicle> = { where: { id } };\n    return this.vehicleRepository.findOne(options);\n  }\n\n  async remove(id: number): Promise<void> {\n    await this.vehicleRepository.delete(id);\n  }\n}\n')),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Note:")," If you face an error while importing ",(0,i.yg)("inlineCode",{parentName:"p"},"@nestjs/typeorm"),", which is a NestJS-specific module that provides integration utilities for using TypeORM within NestJS applications. Use the following command to fix this error:"),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"npm install @nestjs/typeorm ")),(0,i.yg)("h3",{id:"-step-5-setup-modules"},"\u2022 Step 5: Setup Modules"),(0,i.yg)("p",null,"In the last step, we will place all components of the vehicle feature into the module. The controller was automatically added as it was created through the command. We will add other components such as TypeORM, entities, and provide services in ",(0,i.yg)("inlineCode",{parentName:"p"},"vehicles.module.ts")," file. It will look like this:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-tsx"},'import { Module } from "@nestjs/common";\nimport { TypeOrmModule } from "@nestjs/typeorm";\nimport { Vehicle } from "./entities/vehicle.entity";\nimport { VehiclesController } from "./vehicles.controller";\nimport { VehiclesService } from "./vehicles.service";\n\n@Module({\n  imports: [TypeOrmModule.forFeature([Vehicle])],\n  controllers: [VehiclesController],\n  providers: [VehiclesService],\n})\nexport class VehiclesModule {}\n')),(0,i.yg)("p",null,"Add ",(0,i.yg)("inlineCode",{parentName:"p"},"TypeOrmModule.forRoot()")," in ",(0,i.yg)("inlineCode",{parentName:"p"},"app.module.ts")," to integrate TypeORM and create a database connection."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-tsx"},'import { Module } from "@nestjs/common";\nimport { AppController } from "./app.controller";\nimport { AppService } from "./app.service";\nimport { VehiclesModule } from "./vehicles/vehicles.module";\nimport { TypeOrmModule } from "@nestjs/typeorm";\nimport { Vehicle } from "./vehicles/entities/vehicle.entity";\n\n@Module({\n  imports: [\n    TypeOrmModule.forRoot({\n      type: "sqlite",\n      database: "garage.sqlite",\n      entities: [Vehicle],\n      synchronize: true,\n    }),\n    VehiclesModule,\n  ],\n  controllers: [AppController],\n  providers: [AppService],\n})\nexport class AppModule {}\n')),(0,i.yg)("h3",{id:"-step-6-run-and-test-application"},"\u2022 Step 6: Run and Test Application"),(0,i.yg)("p",null,"Once we have setup all components, we will run our NestJS application by running the following command:"),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"npm run start:dev")),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},(0,i.yg)("em",{parentName:"strong"},"The application will be running at"))," http://localhost:3000/"),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"We can test the CRUD operation we created by making HTTP calls through tools like Postman etc. See the example below:")),(0,i.yg)("div",{className:"centered-image"},(0,i.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2024-04-29-nest-js/Nest_4.png",alt:"Snapshot of making POST API call through postman"})),(0,i.yg)("div",{className:"centered-image"},(0,i.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2024-04-29-nest-js/Nest_5..png",alt:"Snapshot of getting the list of inserted vehicle item into the database through GET API call"})),(0,i.yg)("h2",{id:"bonus-refines-support-for-nestjs"},"Bonus: Refine\u2019s Support for NestJS"),(0,i.yg)("p",null,"Finally, as a pleasant bonus, Refine has excellent support for NestJS. More specifically, Refine has data providers for APIs implemented with ",(0,i.yg)("a",{parentName:"p",href:"https://refine.dev/docs/data/packages/nestjsx-crud"},"Nest.js CRUD")," and ",(0,i.yg)("a",{parentName:"p",href:"https://refine.dev/docs/data/packages/nestjs-query/"},"Nest.js Query")," as well. In case you do not know, Nest.js CRUD is a module to help you simplify creating CRUD RESTful APIs. With Refine\u2019s data provider, you can connect your NestJS CRUD APIs to Refine and manage your data efficiently."),(0,i.yg)("p",null,"Similarly, you can also integrate your APIs with Refine using Refine\u2019s Nest.js Query provider. With the help of Node.js powered GraphQL + TypeScript, you can make more efficient and independent APIs and connect them to Refine easily."),(0,i.yg)("h2",{id:"conclusion"},"Conclusion"),(0,i.yg)("p",null,'In this article, we have discussed NestJS, which is a powerful framework for building server-side applications. First, we understood the "what and why" of NestJS then we created a simple NestJS application step-by-step where we handled HTTP calls, applied business logic, interacted with the database, and provided the responses.'),(0,i.yg)("p",null,"Overall, we have gained knowledge about the major components of any Nest application and the benefits each one offers. Although there is still much to learn about using NestJS to develop enterprise-ready applications but in this article, we have been able to cover the fundamental concepts that will help us get started in the right direction."))}g.isMDXComponent=!0}}]);