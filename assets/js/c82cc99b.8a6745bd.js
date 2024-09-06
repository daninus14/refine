"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[2714],{58860:(e,n,a)=>{a.d(n,{xA:()=>m,yg:()=>u});var t=a(37953);function l(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function p(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?p(Object(a),!0).forEach((function(n){l(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function i(e,n){if(null==e)return{};var a,t,l=function(e,n){if(null==e)return{};var a,t,l={},p=Object.keys(e);for(t=0;t<p.length;t++)a=p[t],n.indexOf(a)>=0||(l[a]=e[a]);return l}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(t=0;t<p.length;t++)a=p[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var r=t.createContext({}),s=function(e){var n=t.useContext(r),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},m=function(e){var n=s(e.components);return t.createElement(r.Provider,{value:n},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var a=e.components,l=e.mdxType,p=e.originalType,r=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=s(a),d=l,u=c["".concat(r,".").concat(d)]||c[d]||g[d]||p;return a?t.createElement(u,o(o({ref:n},m),{},{components:a})):t.createElement(u,o({ref:n},m))}));function u(e,n){var a=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var p=a.length,o=new Array(p);o[0]=d;var i={};for(var r in n)hasOwnProperty.call(n,r)&&(i[r]=n[r]);i.originalType=e,i[c]="string"==typeof e?e:l,o[1]=i;for(var s=2;s<p;s++)o[s]=a[s];return t.createElement.apply(null,o)}return t.createElement.apply(null,a)}d.displayName="MDXCreateElement"},7945:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>m,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});a(37953);var t=a(58860);function l(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function p(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})),e}function o(e,n){if(null==e)return{};var a,t,l=function(e,n){if(null==e)return{};var a,t,l={},p=Object.keys(e);for(t=0;t<p.length;t++)a=p[t],n.indexOf(a)>=0||(l[a]=e[a]);return l}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(t=0;t<p.length;t++)a=p[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}const i={title:"A Complete guide to pnpm",description:"We'll explore pnpm, an efficient alternative to npm.",slug:"how-to-use-pnpm",authors:"joseph_mawa",tags:["javascript","dev-tools"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-11-27-pnpm-guide/social.jpg",hide_table_of_contents:!1},r=void 0,s={permalink:"/blog/how-to-use-pnpm",source:"@site/blog/2023-11-27-pnpm-guide.md",title:"A Complete guide to pnpm",description:"We'll explore pnpm, an efficient alternative to npm.",date:"2023-11-27T00:00:00.000Z",formattedDate:"November 27, 2023",tags:[{label:"javascript",permalink:"/blog/tags/javascript"},{label:"dev-tools",permalink:"/blog/tags/dev-tools"}],readingTime:8.995,hasTruncateMarker:!1,authors:[{name:"Joseph Mawa",title:"Web Developer",url:"https://github.com/nibble0101",imageURL:"/img/generic-profile.png",key:"joseph_mawa"}],frontMatter:{title:"A Complete guide to pnpm",description:"We'll explore pnpm, an efficient alternative to npm.",slug:"how-to-use-pnpm",authors:"joseph_mawa",tags:["javascript","dev-tools"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-11-27-pnpm-guide/social.jpg",hide_table_of_contents:!1},prevItem:{title:"Getting Started with Terraform on AWS",permalink:"/blog/terraform-aws"},nextItem:{title:"Understanding Virtual DOM in React",permalink:"/blog/react-virtual-dom"},relatedPosts:[{title:"git diff - Comparing Changes in Git",description:"We'll explore Git's 'git diff' which helps you track changes throughout your working directory, commits, and branches.",permalink:"/blog/git-diff-command",formattedDate:"July 29, 2024",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:13.765,date:"2024-07-29T00:00:00.000Z"},{title:"Introduction to HTMX",description:"We will explore what HTMX is and its capabilities.",permalink:"/blog/what-is-htmx",formattedDate:"September 6, 2024",authors:[{name:"Peter Osah",title:"Web Developer",imageURL:"/img/generic-profile.png",key:"peter_osah"}],readingTime:20.24,date:"2024-09-06T00:00:00.000Z"},{title:"How to Use JavaScript Array Splice",description:"This post is about various uses of the splice() method in JavaScript.",permalink:"/blog/javascript-splice-method",formattedDate:"September 5, 2024",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:16.41,date:"2024-09-05T00:00:00.000Z"}],authorPosts:[{title:"How to Build a Web App in 10 steps in 2024",description:"In this article, we will explore some steps you can follow when building a web app.",permalink:"/blog/how-to-build-a-web-app",formattedDate:"December 26, 2023",authors:[{name:"Joseph Mawa",title:"Web Developer",url:"https://github.com/nibble0101",imageURL:"/img/generic-profile.png",key:"joseph_mawa"}],readingTime:9.43,date:"2023-12-26T00:00:00.000Z"},{title:"Create charts using Recharts",description:"We'll explore how to create charts in a Refine project using Recharts.",permalink:"/blog/recharts",formattedDate:"February 23, 2024",authors:[{name:"Joseph Mawa",title:"Web Developer",url:"https://github.com/nibble0101",imageURL:"/img/generic-profile.png",key:"joseph_mawa"}],readingTime:20.43,date:"2024-02-23T00:00:00.000Z"},{title:"How to use the useParams hook in React Router",description:"We'll discover how to access the parameters of the current route with the useParams hook in React Router.",permalink:"/blog/react-router-useparams",formattedDate:"September 24, 2022",authors:[{name:"Joseph Mawa",title:"Web Developer",url:"https://github.com/nibble0101",imageURL:"/img/generic-profile.png",key:"joseph_mawa"}],readingTime:4.445,date:"2022-09-24T00:00:00.000Z"}]},m={authorsImageUrls:[void 0]},c=[{value:"Introduction",id:"introduction",level:2},{value:"What is pnpm",id:"what-is-pnpm",level:2},{value:"How to install pnpm",id:"how-to-install-pnpm",level:2},{value:"Install pnpm as standalone script",id:"install-pnpm-as-standalone-script",level:3},{value:"Install pnpm using Corepack",id:"install-pnpm-using-corepack",level:3},{value:"Install pnpm using npm",id:"install-pnpm-using-npm",level:3},{value:"How to uninstall pnpm",id:"how-to-uninstall-pnpm",level:2},{value:"How to use pnpm",id:"how-to-use-pnpm",level:2},{value:"Install packages with pnpm",id:"install-packages-with-pnpm",level:3},{value:"Uninstall packages with pnpm",id:"uninstall-packages-with-pnpm",level:3},{value:"Update packages with pnpm",id:"update-packages-with-pnpm",level:3},{value:"Patch packages with pnpm",id:"patch-packages-with-pnpm",level:3},{value:"Run scripts with pnpm",id:"run-scripts-with-pnpm",level:3},{value:"Comparing npm and pnpm",id:"comparing-npm-and-pnpm",level:2},{value:"Package storage on disk",id:"package-storage-on-disk",level:3},{value:"Package installation time",id:"package-installation-time",level:3},{value:"Node version management",id:"node-version-management",level:3},{value:"Support for workspaces and monorepos",id:"support-for-workspaces-and-monorepos",level:3},{value:"Conclusion",id:"conclusion",level:2}],g={toc:c},d="wrapper";function u(e){var{components:n}=e,a=o(e,["components"]);return(0,t.yg)(d,p(function(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{},t=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),t.forEach((function(n){l(e,n,a[n])}))}return e}({},g,a),{components:n,mdxType:"MDXLayout"}),(0,t.yg)("h2",{id:"introduction"},"Introduction"),(0,t.yg)("p",null,"When working with Node, npm is the default package manager. It is bundled with modern, official versions of Node. However, there are several alternatives to npm. Some of these alternatives include pnpm and yarn."),(0,t.yg)("p",null,"pnpm is a popular and efficient alternative to npm. It works by installing packages in a global content-addressable store. Your projects can access these packages in the global store via hard links."),(0,t.yg)("p",null,"This makes pnpm more efficient than npm. With pnpm, you can install packages quickly, and the installed packages take up a lot less disk space."),(0,t.yg)("p",null,"In this article, we will take a deep dive into pnpm. We will explore its usage, pros, and cons and compare it with npm, the default package manager in Node."),(0,t.yg)("p",null,"What we will cover:"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"#what-is-pnpm"},"What is pnpm")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"#how-to-install-pnpm"},"How to install pnpm")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"#how-to-uninstall-pnpm"},"How to uninstall pnpm")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"#how-to-use-pnpm"},"How to use pnpm")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"#comparing-npm-and-pnpm"},"Comparing npm and pnpm"))),(0,t.yg)("h2",{id:"what-is-pnpm"},"What is pnpm"),(0,t.yg)("p",null,"pnpm, also known as performant npm in full, is an efficient, popular, open-source, MIT-licensed Node package manager. Unlike npm, the default package manager in Node, you need to install pnpm before using it."),(0,t.yg)("p",null,"Ordinarily, when using npm, each Node project will install its dependencies from the package registry and store them on disk. Each package installation involves writing the dependencies to disk in the ",(0,t.yg)("inlineCode",{parentName:"p"},"node_modules")," directory on a per-project basis. Therefore, if you have multiple projects with the same dependency, each project will have its copy of the dependency stored on disk."),(0,t.yg)("p",null,"On the other hand, when using pnpm, the packages are installed in a content-addressable global store. Any project can access the dependencies in the store via hard links without having to install and save the dependencies separately on a per-project basis."),(0,t.yg)("p",null,"This feature of pnpm makes it more efficient than npm. With pnpm, your project dependencies will install faster and take up a lot less disk space because project dependencies are installed in a global store and shared among your projects."),(0,t.yg)("p",null,"When installing a different version of a package available in the global store, pnpm will only install the file that has changed. It won't install an entire copy of the new package version."),(0,t.yg)("h2",{id:"how-to-install-pnpm"},"How to install pnpm"),(0,t.yg)("p",null,"There are various options for installing pnpm. You can install it as a standalone script or use Corepack, npm, homebrew, Winget, or any other supported installer. We will explore how to install pnpm using some of the mentioned options."),(0,t.yg)("h3",{id:"install-pnpm-as-standalone-script"},"Install pnpm as standalone script"),(0,t.yg)("p",null,"You can install pnpm as a standalone script even if you haven't installed Node. Depending on your operating system or the installer available, you can use one of the commands below to install pnpm as a standalone script."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sh"},"# Using iwr on windows\niwr https://get.pnpm.io/install.ps1 -useb | iex\n\n# Using curl on POSIX systems\ncurl -fsSL https://get.pnpm.io/install.sh | sh -\n\n# Using wget on POSIX systems\nwget -qO- https://get.pnpm.io/install.sh | sh -\n\n")),(0,t.yg)("h3",{id:"install-pnpm-using-corepack"},"Install pnpm using Corepack"),(0,t.yg)("p",null,"This is the fastest way to install pnpm if you use an official modern version of Node that ships with Corepack. Corepack is an experimental tool for managing versions of package managers in Node."),(0,t.yg)("p",null,"Because it is still an experimental tool, you enable Corepack before using it."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sh"},"corepack enable\n")),(0,t.yg)("p",null,"Some third-party Node distributions may not bundle Corepack out of the box. If that's the case for you, you may need to install Corepack before enabling it using the command above."),(0,t.yg)("p",null,"After that, you can install the latest version of pnpm using the command below."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sh"},"corepack prepare pnpm@latest --activate\n")),(0,t.yg)("h3",{id:"install-pnpm-using-npm"},"Install pnpm using npm"),(0,t.yg)("p",null,"You can also use npm to install either the ordinary version of ",(0,t.yg)("inlineCode",{parentName:"p"},"pnpm")," or ",(0,t.yg)("inlineCode",{parentName:"p"},"@pnpm/exe"),", the executable version of pnpm. The ordinary version of ",(0,t.yg)("inlineCode",{parentName:"p"},"pnpm")," requires you to install Node in your system for it to work."),(0,t.yg)("p",null,"On the other hand, the executable version of pnpm is bundled with Node into an executable. Therefore, you don't need to first install Node before using it. Use one of the commands below to install the version you want."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sh"},"# ordinary version\nnpm install -g pnpm\n\n# executable version\nnpm install -g @pnpm/exe\n")),(0,t.yg)("p",null,"Check the pnpm documentation to learn how to install pnpm using other supported installers I have not highlighted here."),(0,t.yg)("h2",{id:"how-to-uninstall-pnpm"},"How to uninstall pnpm"),(0,t.yg)("p",null,"It is advisable to uninstall the global packages you installed using pnpm before uninstalling the pnpm CLI. Use the command below to view the list of pnpm's global package installations."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sh"},"pnpm ls -g\n")),(0,t.yg)("p",null,"After that, you can remove one package at a time using the command below."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sh"},"pnpm rm -g <package-name>\n")),(0,t.yg)("p",null,"Removing one package at a time can become tedious and laborious. You can use the command below to determine the path to the global package directory and remove all the installed packages by manually deleting the directory."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sh"},"pnpm root -g\n")),(0,t.yg)("p",null,"After removing the global package installations, you can uninstall the pnpm CLI. If you installed pnpm using the standalone script, remove the pnpm home directory to uninstall the pnpm CLI."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sh"},"rm -rf $PNPM_HOME\n")),(0,t.yg)("p",null,"After removing the pnpm home directory, be sure to also remove the ",(0,t.yg)("inlineCode",{parentName:"p"},"PNPM_HOME"),"\xa0environment variable in your shell configuration file."),(0,t.yg)("p",null,"On the other hand, if you used npm to install pnpm, be sure to also use npm to uninstall pnpm."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sh"},"npm rm -g pnpm\n")),(0,t.yg)("p",null,"As explained above, pnpm installs packages in a content-addressable global store. After removing pnpm, be sure to remove the global store. You can remove it manually or use the command below."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sh"},"rm -rf $(path to global store)\n")),(0,t.yg)("h2",{id:"how-to-use-pnpm"},"How to use pnpm"),(0,t.yg)("p",null,"The pnpm CLI has several commands to manage dependencies, run scripts, and manage the global store. A typical pnpm command takes the form below."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sh"},"pnpm [command] [flags]\npnpm [ -h | --help | -v | --version ]\n")),(0,t.yg)("p",null,"Let us explore some of the commands in the subsections below."),(0,t.yg)("h3",{id:"install-packages-with-pnpm"},"Install packages with pnpm"),(0,t.yg)("p",null,"The ",(0,t.yg)("inlineCode",{parentName:"p"},"add")," command will install a package and its dependencies. It installs the package as a production dependency by default."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sh"},"# Install as a production dependency\npnpm add @refinedev/react-table\n\n# Install as a development dependency\npnpm add -D @refinedev/react-table\n\n# Install as an optional dependency\npnpm add -O @refinedev/react-table\n\n# Install the package globally\npnpm add -g @refinedev/react-table\n")),(0,t.yg)("p",null,"The above commands will install the ",(0,t.yg)("inlineCode",{parentName:"p"},"@refinedev/react-table")," package from the npm package registry. You can also use the ",(0,t.yg)("inlineCode",{parentName:"p"},"add")," command to install a package from the local file system, a git repository, or a remote tarball."),(0,t.yg)("p",null,"If you already have a Node project, you can install all its dependencies using the ",(0,t.yg)("inlineCode",{parentName:"p"},"install")," command. The alias of the ",(0,t.yg)("inlineCode",{parentName:"p"},"install")," command is ",(0,t.yg)("inlineCode",{parentName:"p"},"i"),"."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sh"},"# Install all the packages in a project\npnpm install\n\n# Same as above\npnpm i\n")),(0,t.yg)("h3",{id:"uninstall-packages-with-pnpm"},"Uninstall packages with pnpm"),(0,t.yg)("p",null,"You can use the ",(0,t.yg)("inlineCode",{parentName:"p"},"remove")," command to remove a package from the ",(0,t.yg)("inlineCode",{parentName:"p"},"node_modules")," directory and the ",(0,t.yg)("inlineCode",{parentName:"p"},"package.json")," file. Its aliases are ",(0,t.yg)("inlineCode",{parentName:"p"},"uninstall"),", ",(0,t.yg)("inlineCode",{parentName:"p"},"rm"),", and ",(0,t.yg)("inlineCode",{parentName:"p"},"un"),"."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sh"},"# Uninstall a package\npnpm remove @refinedev/react-table\n\n# Alternative to the uninstall command\npnpm rm @refinedev/react-table\n\n# Alternative to the uninstall command\npnpm un @refinedev/react-table\n")),(0,t.yg)("h3",{id:"update-packages-with-pnpm"},"Update packages with pnpm"),(0,t.yg)("p",null,"You can update installed packages to their latest version using the ",(0,t.yg)("inlineCode",{parentName:"p"},"update")," command. This command adheres to the ranges specified in the ",(0,t.yg)("inlineCode",{parentName:"p"},"package.json")," file. Its aliases are ",(0,t.yg)("inlineCode",{parentName:"p"},"up")," and \xa0",(0,t.yg)("inlineCode",{parentName:"p"},"upgrade"),"."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sh"},"# Update package\npnpm update @refinedev/react-table\n\n# Alternative to the update command\npnpm upgrade @refinedev/react-table\n\n# Alternative to the update command\npnpm up @refinedev/react-table\n")),(0,t.yg)("h3",{id:"patch-packages-with-pnpm"},"Patch packages with pnpm"),(0,t.yg)("p",null,"With pnpm, you can extract a package you want to patch to a temporary editable directory. You can modify the package and use the command below to generate the patch file and register it in the ",(0,t.yg)("inlineCode",{parentName:"p"},"patchedDependencies"),"\xa0field of the top-level manifest."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sh"},"pnpm patch <package name>@<package version>\n")),(0,t.yg)("h3",{id:"run-scripts-with-pnpm"},"Run scripts with pnpm"),(0,t.yg)("p",null,"You can use the ",(0,t.yg)("inlineCode",{parentName:"p"},"run")," command to run scripts declared in the ",(0,t.yg)("inlineCode",{parentName:"p"},"package.json")," file. Its alias is ",(0,t.yg)("inlineCode",{parentName:"p"},"run-script"),". Therefore, you can use both commands interchangeably."),(0,t.yg)("p",null,"If the ",(0,t.yg)("inlineCode",{parentName:"p"},"scripts")," field of your ",(0,t.yg)("inlineCode",{parentName:"p"},"package.json")," file has the script below, you can use the ",(0,t.yg)("inlineCode",{parentName:"p"},"pnpm run build")," command to run the ",(0,t.yg)("inlineCode",{parentName:"p"},"build")," script."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "scripts": {\n    "build": "vite build"\n  }\n}\n')),(0,t.yg)("h2",{id:"comparing-npm-and-pnpm"},"Comparing npm and pnpm"),(0,t.yg)("p",null,"As hinted above, pnpm is an efficient alternative to npm. In this section, we will draw some parallels between npm and pnpm by exploring their differences and similarities."),(0,t.yg)("h3",{id:"package-storage-on-disk"},"Package storage on disk"),(0,t.yg)("p",null,"One of the main differences between npm and pnpm is the way installed packages are stored on disk. When using npm, packages are installed on disk on a per-project basis."),(0,t.yg)("p",null,"If you create a project with ten dependencies, npm will install and save them on disk in the project's ",(0,t.yg)("inlineCode",{parentName:"p"},"node_modules")," directory. Creating another project with the same dependencies will fetch and store the packages on disk again."),(0,t.yg)("p",null,"On the other hand, pnpm installs dependencies and saves them on disk in a content-addressable global store. Your projects can access the packages in the store via hard links. Therefore, pnpm is more space-efficient than npm."),(0,t.yg)("h3",{id:"package-installation-time"},"Package installation time"),(0,t.yg)("p",null,"Traditionally, dependency installation has three stages. These stages are:"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"Resolving dependencies"),(0,t.yg)("li",{parentName:"ul"},"Fetching dependencies"),(0,t.yg)("li",{parentName:"ul"},"Linking dependencies")),(0,t.yg)("p",null,"These stages are sequential and blocking when using npm. One stage must end before the next one starts. On the other hand, these phases run separately and independently for each dependency when using pnpm. Therefore, pnpm has a faster installation speed than npm."),(0,t.yg)("h3",{id:"node-version-management"},"Node version management"),(0,t.yg)("p",null,"pnpm has a built-in feature for managing Node.js versions while, npm doesn't have such a feature. With pnpm, you can use one of the commands below to install and activate any Node.js version."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sh"},"# Install the LTS version of Node\npnpm env use --global lts\n\n# Install Node version 20\npnpm env use --global 20\n\n# Install the pre-release Node version\npnpm env use --global nightly\n\n# Install the latest Node version\npnpm env use --global latest\n")),(0,t.yg)("p",null,"Check the pnpm documentation for other commands you can use to manage installed Node versions."),(0,t.yg)("h3",{id:"support-for-workspaces-and-monorepos"},"Support for workspaces and monorepos"),(0,t.yg)("p",null,"Both npm and pnpm have built-in support for workspaces. The workspace feature in npm and pnpm has capabilities for managing monorepos."),(0,t.yg)("h2",{id:"conclusion"},"Conclusion"),(0,t.yg)("p",null,"pnpm is one of the package managers in the Node ecosystem. Though it's not the default, you can install it easily using Corepack, npm, and install it as a standalone script."),(0,t.yg)("p",null,"pnpm stores installed packages in a content-addressable global store. A package is installed once into the global store, and all your projects can access it via hard links."),(0,t.yg)("p",null,"When installing dependencies using pnpm, the resolving, fetching, and linking phases run independently for each package and in a non-blocking way."),(0,t.yg)("p",null,"These features make pnpm a more efficient alternative to npm. Packages install quickly, and the installed packages take up less disk space."))}u.isMDXComponent=!0}}]);