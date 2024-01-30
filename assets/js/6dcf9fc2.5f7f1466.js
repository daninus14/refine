"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[40026],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,h=u["".concat(l,".").concat(d)]||u[d]||p[d]||o;return n?r.createElement(h,i(i({ref:t},m),{},{components:n})):r.createElement(h,i({ref:t},m))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},28579:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>c,toc:()=>p});n(67294);var r=n(3905);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const s={title:"How to Use Docker EntryPoint",description:"We'll discuss how to use Docker ENTRYPOINT instruction to configure the executables run after the container is initiated.",slug:"docker-entrypoint",authors:"muhammad_khabbab",tags:["docker","dev-tools"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-01-10-docker-entrypoint/social.png",hide_table_of_contents:!1},l=void 0,c={permalink:"/blog/docker-entrypoint",source:"@site/blog/2023-01-10-docker-entrypoint.md",title:"How to Use Docker EntryPoint",description:"We'll discuss how to use Docker ENTRYPOINT instruction to configure the executables run after the container is initiated.",date:"2023-01-10T00:00:00.000Z",formattedDate:"January 10, 2023",tags:[{label:"docker",permalink:"/blog/tags/docker"},{label:"dev-tools",permalink:"/blog/tags/dev-tools"}],readingTime:7.1,hasTruncateMarker:!1,authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],frontMatter:{title:"How to Use Docker EntryPoint",description:"We'll discuss how to use Docker ENTRYPOINT instruction to configure the executables run after the container is initiated.",slug:"docker-entrypoint",authors:"muhammad_khabbab",tags:["docker","dev-tools"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-01-10-docker-entrypoint/social.png",hide_table_of_contents:!1},prevItem:{title:"Building a Complete React CRUD App with Airtable",permalink:"/blog/react-crud-app-airtable"},nextItem:{title:"The refine Open Source Hackathon",permalink:"/blog/refine-hackathon"},relatedPosts:[{title:"A Complete Guide to Listing Docker Containers",description:"We'll discuss the importance of listing docker containers, how to list running and stopped containers, listing the latest containers, and how to disable truncation of container names.",permalink:"/blog/docker-list-containers",formattedDate:"June 6, 2023",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:9.265,date:"2023-06-06T00:00:00.000Z"},{title:"Kubernetes vs Docker - A Detailed Comparison",description:"Explore an in-depth comparison between Docker and Kubernetes, focusing on their unique features, advantages, and ideal use scenarios.",permalink:"/blog/kubernetes-vs-docker",formattedDate:"January 26, 2024",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:14.365,date:"2024-01-26T00:00:00.000Z"},{title:"Check Kubernetes Version - Advanced Use Cases with kubectl version",description:"Kubectl version is a very basic command, however, you might still face some errors like connection issues, version mismatches, or configuration problems. Here are some steps to debug these common errors.",permalink:"/blog/kubectl-version",formattedDate:"January 5, 2024",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:6.98,date:"2024-01-05T00:00:00.000Z"}],authorPosts:[{title:"Kubernetes Operators",description:"This article digs deep into the essence of Kubernetes operators, explaining their purpose, functionality, and how they are actually implemented.",permalink:"/blog/kubernetes-operators",formattedDate:"January 12, 2024",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:9.425,date:"2024-01-12T00:00:00.000Z"},{title:"Using kubectl logs - DevOps Guide",description:"Kubernetes pod logs show container operations and events in real-time. Containers in Kubernetes pods log their stdout and stderr streams. Debugging and monitoring Kubernetes cluster applications requires these logs.",permalink:"/blog/kubectl-logs",formattedDate:"December 28, 2023",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:8.435,date:"2023-12-28T00:00:00.000Z"},{title:"Kubernetes Persistent Volumes - Best Practices and Use Cases",description:"Kubernetes Persistent Volumes (PVs) and Persistent Volume Claims (PVCs) are key tools for storing data in containerized environments.",permalink:"/blog/kubernetes-persistent-volumes",formattedDate:"December 14, 2023",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:7.32,date:"2023-12-14T00:00:00.000Z"}]},m={authorsImageUrls:[void 0]},p=[{value:"Introduction",id:"introduction",level:2},{value:"How does docker ENTRYPOINT work?",id:"how-does-docker-entrypoint-work",level:2},{value:"Docker entrypoint example commands",id:"docker-entrypoint-example-commands",level:2},{value:"Difference between ENTRYPOINT and CMD",id:"difference-between-entrypoint-and-cmd",level:2},{value:"When to use docker ENTRYPOINT vs CMD",id:"when-to-use-docker-entrypoint-vs-cmd",level:2},{value:"How to use a script as ENTRYPOINT",id:"how-to-use-a-script-as-entrypoint",level:2}],u={toc:p};function d(e){var{components:t}=e,n=i(e,["components"]);return(0,r.kt)("wrapper",o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){a(e,t,n[t])}))}return e}({},u,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"ENTRYPOINT is one of the many instructions you can write in a dockerfile. The ENTRYPOINT instruction is used to configure the executables that will always run after the container is initiated. For example, you can mention a script to run as soon as the container is started. Note that the ENTRYPOINT commands cannot be overridden or ignored, even when you run the container with command line arguments.  "),(0,r.kt)("p",null,"Docker ENTRYPOINT instructions can be written in both shell and exec forms, such as the following example below:"),(0,r.kt)("p",null,"\u2022\tShell form: ENTRYPOINT node app.js\n\u2022\tExec form: ENTRYPOINT ",'["node", "app.js"]'),(0,r.kt)("p",null,"Steps we'll cover:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#how-does-docker-entrypoint-work"},"How does docker ENTRYPOINT work?")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#docker-entrypoint-example-commands"},"Docker entrypoint example commands")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#difference-between-entrypoint-and-cmd"},"Difference between ENTRYPOINT and CMD")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#when-to-use-docker-entrypoint-vs-cmd"},"When to use docker ENTRYPOINT vs CMD")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#how-to-use-a-script-as-entrypoint"},"How to use a script as ENTRYPOINT"))),(0,r.kt)("h2",{id:"how-does-docker-entrypoint-work"},"How does docker ENTRYPOINT work?"),(0,r.kt)("p",null,"Both forms of Docker entrypoint work differently when you specify any command at run time. The major difference between the two is whether the specified command is invoked inside a shell or not. Let's discuss both in detail:"),(0,r.kt)("p",null,"\u2022\tWhen you specify the command line arguments to the ",(0,r.kt)("inlineCode",{parentName:"p"},"docker run")," command through ",(0,r.kt)("inlineCode",{parentName:"p"},"exec")," form, these arguments are appended to the end of all elements of the ",(0,r.kt)("inlineCode",{parentName:"p"},"exec")," form, so the specified commands will run after the executables mentioned in entrypoint. For example, if you pass the '-d' argument to the 'docker run' command, the Docker will consider these arguments as the arguments of entrypoint and will execute them in the background. By doing this, you can turn your container into an executable. You can even add additional arguments to the entrypoint to convert a complex command line tool into a single argument docker container. The ",(0,r.kt)("inlineCode",{parentName:"p"},"exec")," form just runs the binary you provide with the arguments you include but without any features of the shell parsing. "),(0,r.kt)("p",null,"\u2022\tThe ",(0,r.kt)("inlineCode",{parentName:"p"},"shell")," form will execute the shell parameters as parameters to ",(0,r.kt)("inlineCode",{parentName:"p"},"/bin/sh \u2013c"),". That allows you to expand variables, piping output, subcommands, chaining commands together, and other shell features. You cannot use ",(0,r.kt)("inlineCode",{parentName:"p"},"shell")," form to specify any command or the ",(0,r.kt)("inlineCode",{parentName:"p"},"docker run")," command-line arguments while starting the container because the ENTRYPOINT command runs as a subcommand of ",(0,r.kt)("inlineCode",{parentName:"p"},"/bin/sh \u2013c"),". The executable has a different process ID than the container's 'PID 1'. If we pass any Unix signals like SIGTERM from the ",(0,r.kt)("inlineCode",{parentName:"p"},"docker stop")," command, the executable will receive it."),(0,r.kt)("p",null,"You can override the entrypoint instruction when initiating the container using the ",(0,r.kt)("inlineCode",{parentName:"p"},"\u2013entrypoint")," flag. Note that if you have mentioned multiple ENTRYPOINT instructions in the Dockerfile, then the last entrypoint will be executed. The recommended forms to use are:"),(0,r.kt)("p",null,"\u2022\tENTRYPOINT: exec form\n\u2022\tRUN: shell form\n\u2022\tCMD: exec form"),(0,r.kt)("h2",{id:"docker-entrypoint-example-commands"},"Docker entrypoint example commands"),(0,r.kt)("p",null,'The following example shows an entrypoint instruction that launches the benchmarking tool to evaluate the Google website. Note that the website URL of "Google.com" is hardcoded inside the dockerfile. We will also show an example where the URL will be passed from the ',(0,r.kt)("inlineCode",{parentName:"p"},"Docker run")," command as an argument. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'FROM centos:7\nMAINTAINER Devopscube\nRUN yum -y update && \\\n    yum -y install httpd-tools && \\\n    yum clean all\nENTRYPOINT ["ab" , "http://google.com/" ]\n')),(0,r.kt)("p",null,'The next step is to build the image from this docker file. Assume the name of the above docker file is "Dockerfile". The image name can be specified with "-t" parameter. In this example, the image name provided is "testentrypoint". The parameter "directoryName" is the folder having the default Dockerfile. '),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"docker build  <directoryName>  \u2013t testentrypoint\n")),(0,r.kt)("div",{className:"centered-image"},(0,r.kt)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-01-10-docker-entrypoint/image1.png",alt:"docker entrypoint"})),(0,r.kt)("br",null),(0,r.kt)("p",null,"During building the container image, the docker daemon will look for the entrypoint instruction and will specify it as a default program that will always run whether the command line input is added or not upon container start.\nNow that the image has been created, the next step is to run the container. Just mention the image name in the ",(0,r.kt)("inlineCode",{parentName:"p"},"docker run")," command. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Docker run testentrypoint\n")),(0,r.kt)("div",{className:"centered-image"},(0,r.kt)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-01-10-docker-entrypoint/image2.png",alt:"docker entrypoint"})),(0,r.kt)("br",null),(0,r.kt)("p",null,"You can see the benchmarking tool \u201cAb\u201d executing upon container start. "),(0,r.kt)("h2",{id:"difference-between-entrypoint-and-cmd"},"Difference between ENTRYPOINT and CMD"),(0,r.kt)("p",null,"Before we discuss the differences, let's look at some of the similarities between these two:"),(0,r.kt)("p",null,"\u2022\tBoth the commands are executed during ",(0,r.kt)("inlineCode",{parentName:"p"},"docker run"),".\n\u2022\tBoth CMD and ENTRYPOINT instructions define the commands which will be executed upon running a container\n\u2022\tYou can override both commands by passing an argument during ",(0,r.kt)("inlineCode",{parentName:"p"},"docker run"),".\n\u2022\tIf multiple declarations are made, only the last CMD and ENTRYPOINT will be valid."),(0,r.kt)("p",null,"Both commands are different in the following aspects:"),(0,r.kt)("p",null,"\u2022\tCMD command is ignored by Docker daemon if you specify parameters within the docker run command. ENTRYPOINT, on the other hand, is not ignored; instead, it is appended as command line parameters by considering those as arguments of the command.\n\u2022\tENTRYPOINT specifies the executable to be invoked when the container is started. Whereas CMD specifies the arguments that are passed to the ENTRYPOINT (for arguments). "),(0,r.kt)("p",null,"Here is a quick summary table that clarifies the behavior of using CMD and ENTRYPOINT:"),(0,r.kt)("div",{className:"centered-image"},(0,r.kt)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-01-10-docker-entrypoint/image3.png",alt:"docker entrypoint"})),(0,r.kt)("br",null),(0,r.kt)("p",null,"Let's extend the above entrypoint example to CMD. The below example will work the same way as the above example of entrypoint, however, this time using CMD."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'FROM centos:7\nMAINTAINER Devopscube\nRUN yum -y update && \\\n    yum -y install httpd-tools && \\\n    yum clean all\nCMD ["ab"] ["http://google.com/"]\n')),(0,r.kt)("p",null,"However, if you run ",(0,r.kt)("inlineCode",{parentName:"p"},"docker run testentrypoint ab http://bing.com/ ")," then the whole CMD command inside the dockerfile will be ignored, and the command arguments passed through the ",(0,r.kt)("inlineCode",{parentName:"p"},"docker run")," command will be given preference. That is not the case with entrypoint instruction. Whatever you provide through entrypoint actually appends to the existing entrypoint instruction in the dockerfile. Let's look at the example below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'FROM centos:7\nMAINTAINER Devopscube\nRUN yum -y update && \\\n    yum -y install httpd-tools && \\\n    yum clean all\nENTRYPOINT ["ab"]\n')),(0,r.kt)("p",null,"Now you can run ",(0,r.kt)("inlineCode",{parentName:"p"},"docker run testentrypoint http://bing.com/ ")," to achieve the same results because the arguments to ",(0,r.kt)("inlineCode",{parentName:"p"},"docker run")," will be appended to the instruction present in dockerfile and will not be overridden. "),(0,r.kt)("p",null,"We can combine both CMD and entrypoint in the same image too. Look at the example below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'FROM centos:7\nMAINTAINER Devopscube\nRUN yum -y update && \\\n    yum -y install httpd-tools && \\\n    yum clean all\nENTRYPOINT ["ab"]\nCMD ["http://bing.com"]\n')),(0,r.kt)("p",null,"Note that when ENTRYPOINT and CMD are both used in the same Dockerfile, everything specified in the CMD will be appended to the ENTRYPOINT as an argument."),(0,r.kt)("h2",{id:"when-to-use-docker-entrypoint-vs-cmd"},"When to use docker ENTRYPOINT vs CMD"),(0,r.kt)("p",null,"ENTRYPOINT instructions can be used for both single-purpose and multi-mode docker images where you want a specific command to run upon the container start. You can also use it to build wrapper container images that encapsulate legacy programs for containerization, ensuring that the program will always run. "),(0,r.kt)("p",null,"The optimal use case for CMD instruction is to specify default programs that should run if you do not provide any input arguments in the command line."),(0,r.kt)("p",null,"To conclude:\n\u2022\tUse ENTRYPOINT instructions when creating an executable Docker image with commands that must always be executed.\n\u2022\tUse CMD instructions for an additional set of arguments that will serve as default instructions in case there is an explicit command line argument provided when the container runs."),(0,r.kt)("br",null),(0,r.kt)("div",null,(0,r.kt)("a",{href:"https://discord.gg/refine"},(0,r.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/discord_big_blue.png",alt:"discord banner"}))),(0,r.kt)("h2",{id:"how-to-use-a-script-as-entrypoint"},"How to use a script as ENTRYPOINT"),(0,r.kt)("p",null,"Using a custom shell script inside the docker container is another use case for entrypoint. Here are the steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Create a script file e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"script.sh")," and put it in the same folder as the dockerfile"),(0,r.kt)("li",{parentName:"ol"},"Create the dockerfile as below. This will copy the script to the container and will run it as part of the ENTRYPOINT using the arguments from CMD. Assume the script expects to receive two input parameters upon its execution. ")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'FROM centos:7\nMAINTAINER Devopscube\nRUN yum -y update && \\\nyum -y install httpd && \\\nyum clean all\nCOPY ./script.sh /\nRUN chmod +x /script.sh\nENTRYPOINT ["/script.sh"]\nCMD ["param1", "param2"]\n')),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Build the docker file ",(0,r.kt)("inlineCode",{parentName:"p"},"docker build -t <imageName>"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Now run the container passing the parameters:\na.\t",(0,r.kt)("inlineCode",{parentName:"p"},"docker run --name <containerName> -d <imageName>"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"You can even pass the CMD arguments through ",(0,r.kt)("inlineCode",{parentName:"p"},"docker run")," command. It will override the arguments present in the Dockerfile. See below example:"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"docker run --name <containerName> -d <imageName> <param1> <param2>\n")))}d.isMDXComponent=!0}}]);