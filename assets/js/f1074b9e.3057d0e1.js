"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[32379],{58860:(e,t,n)=>{n.d(t,{xA:()=>g,yg:()=>p});var o=n(37953);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},g=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,g=s(e,["components","mdxType","originalType","parentName"]),m=l(n),u=r,p=m["".concat(c,".").concat(u)]||m[u]||d[u]||a;return n?o.createElement(p,i(i({ref:t},g),{},{components:n})):o.createElement(p,i({ref:t},g))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[m]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},583:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>c,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>m});n(37953);var o=n(58860);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const s={title:"Introduction to Docker Networking",description:"We'll go over the basics of Docker networking, including the default networks, bridge networking, host networking, overlay networking, Macvlan networking, and custom bridge networking.",slug:"docker-networking",authors:"muhammad_khabbab",tags:["docker","dev-tools"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-10-18-docker-networking/social.png",hide_table_of_contents:!1},c=void 0,l={permalink:"/blog/docker-networking",source:"@site/blog/2023-10-18-docker-networking.md",title:"Introduction to Docker Networking",description:"We'll go over the basics of Docker networking, including the default networks, bridge networking, host networking, overlay networking, Macvlan networking, and custom bridge networking.",date:"2023-10-18T00:00:00.000Z",formattedDate:"October 18, 2023",tags:[{label:"docker",permalink:"/blog/tags/docker"},{label:"dev-tools",permalink:"/blog/tags/dev-tools"}],readingTime:8.925,hasTruncateMarker:!1,authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],frontMatter:{title:"Introduction to Docker Networking",description:"We'll go over the basics of Docker networking, including the default networks, bridge networking, host networking, overlay networking, Macvlan networking, and custom bridge networking.",slug:"docker-networking",authors:"muhammad_khabbab",tags:["docker","dev-tools"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-10-18-docker-networking/social.png",hide_table_of_contents:!1},prevItem:{title:"A complete guide to Kubectl exec",permalink:"/blog/kubectl-exec-command"},nextItem:{title:"React Design Patterns",permalink:"/blog/react-design-patterns"},relatedPosts:[{title:"kubectl port-forward - Kubernetes Port Forwarding Explained",description:"We'll see how to use kubectl port-forward to access internal Kubernetes services from outside the cluster.",permalink:"/blog/kubectl-port-forward",formattedDate:"November 5, 2023",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:11.64,date:"2023-11-05T00:00:00.000Z"},{title:"React Design Patterns",description:"We'll explore React design patterns and examine how they might improve the development of React applications.",permalink:"/blog/react-design-patterns",formattedDate:"October 17, 2023",authors:[{name:"Peter Osah",title:"Web Developer",imageURL:"/img/generic-profile.png",key:"peter_osah"}],readingTime:10.365,date:"2023-10-17T00:00:00.000Z"},{title:"How to Create a GraphQL API with Python and Django",description:"We will discuss how to create a GraphQL API with Python.",permalink:"/blog/graphql-with-python",formattedDate:"May 7, 2024",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:7.395,date:"2024-05-07T00:00:00.000Z"}],authorPosts:[{title:"Kubernetes Persistent Volumes - Best Practices and Use Cases",description:"Kubernetes Persistent Volumes (PVs) and Persistent Volume Claims (PVCs) are key tools for storing data in containerized environments.",permalink:"/blog/kubernetes-persistent-volumes",formattedDate:"December 14, 2023",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:7.32,date:"2023-12-14T00:00:00.000Z"},{title:"Docker Cheat Sheet - Most Commonly Used Commands",description:"A reference guide highlighting essential Docker commands to streamline container management tasks efficiently.",permalink:"/blog/docker-cheat-sheet",formattedDate:"February 12, 2024",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:7.675,date:"2024-02-12T00:00:00.000Z"},{title:"Django REST Framework - How to use it to create APIs?",description:"Explore the Django REST Framework and learn how to create APIs using it.",permalink:"/blog/django-rest-framework",formattedDate:"April 3, 2024",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:7.68,date:"2024-04-03T00:00:00.000Z"}]},g={authorsImageUrls:[void 0]},m=[{value:"Brief overview of what Docker networking is and its significance",id:"brief-overview-of-what-docker-networking-is-and-its-significance",level:2},{value:"Docker&#39;s Default Networks",id:"dockers-default-networks",level:2},{value:"Bridge (docker0)",id:"bridge-docker0",level:3},{value:"Host",id:"host",level:3},{value:"None",id:"none",level:3},{value:"Bridge Networking",id:"bridge-networking",level:2},{value:"Host Networking",id:"host-networking",level:2},{value:"Overlay Networking",id:"overlay-networking",level:2},{value:"Macvlan Networking",id:"macvlan-networking",level:2},{value:"Custom Bridge Networks",id:"custom-bridge-networks",level:2},{value:"Networking Tools and Commands",id:"networking-tools-and-commands",level:2},{value:"Conclusion and Best Practices",id:"conclusion-and-best-practices",level:2}],d={toc:m},u="wrapper";function p(e){var{components:t}=e,n=i(e,["components"]);return(0,o.yg)(u,a(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){r(e,t,n[t])}))}return e}({},d,n),{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"brief-overview-of-what-docker-networking-is-and-its-significance"},"Brief overview of what Docker networking is and its significance"),(0,o.yg)("p",null,"In the world of Docker, deploying a container is not simple; properly configuring a container architecture requires strong networking capabilities. A web application with a cluster of databases, applications, and load balancers spanning numerous containers that need to communicate with one another would have a different network architecture than one designed to run on a single Docker container."),(0,o.yg)("p",null,"The web application container will also need to be accessed by clients from the outside world. To facilitate this, Docker allows communication between Docker containers on the same or different machines and with external resources through the virtual Docker network. You can create complex, scalable, and secure systems using containers by employing multiple network drivers to meet your needs, whether you want to isolate your containers, connect them across hosts, or integrate them with existing networks."),(0,o.yg)("p",null,"Steps we'll cover in this tutorial:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"#brief-overview-of-what-docker-networking-is-and-its-significance"},"Brief overview of what Docker networking is and its significance")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"#dockers-default-networks"},"Docker's Default Networks"),(0,o.yg)("ul",{parentName:"li"},(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"#bridge-docker0"},"Bridge (docker0)")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"#host"},"Host")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"#none"},"None")))),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"#bridge-networking"},"Bridge Networking")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"#host-networking"},"Host Networking")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"#overlay-networking"},"Overlay Networking")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"#macvlan-networking"},"Macvlan Networking")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"#custom-bridge-networks"},"Custom Bridge Networks")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"#networking-tools-and-commands"},"Networking Tools and Commands"))),(0,o.yg)("h2",{id:"dockers-default-networks"},"Docker's Default Networks"),(0,o.yg)("p",null,"Three network drivers/interfaces with different use cases are automatically created for you when you install Docker:"),(0,o.yg)("h3",{id:"bridge-docker0"},"Bridge (docker0)"),(0,o.yg)("p",null,"A container connects to this network when it starts running without specifying a network. Containers connected to the bridge network are given an internal IP address to communicate with each other."),(0,o.yg)("h3",{id:"host"},"Host"),(0,o.yg)("p",null,"A container shares the networking namespace of the host when using the host network mode. As a result, the host's IP address and port will be used by the container to isolate and execute the process directly on the host."),(0,o.yg)("h3",{id:"none"},"None"),(0,o.yg)("p",null,"As the name indicates, this mode disables the networking stack of the container. The host, other containers, and external systems are all inaccessible to containers running without network. It becomes useful when you do not require any network connectivity or complete isolation."),(0,o.yg)("p",null,"To view all networks, including the default ones, you can use the command:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"docker network ls\n")),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"The above command will return the following output:")),(0,o.yg)("div",{className:"centered-image"},(0,o.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-10-18-docker-networking/first.png",alt:"docker networking"})),(0,o.yg)("br",null),(0,o.yg)("h2",{id:"bridge-networking"},"Bridge Networking"),(0,o.yg)("p",null,"Bridge networking is Docker's default mode. When a container is built without specifying a network driver, it's automatically attached to the bridge network, known for its ease of creation, management, and troubleshooting.\nEach container on this network receives a unique IP address, typically from a default range set by Docker. These containers can communicate with one another using their private IP addresses. Although bridged to the host system, allowing them to communicate with the LAN and internet, they aren't visible as physical devices on the LAN. External communication is routed via Network Address Translation (NAT) on the host.\nTo make containers externally accessible, port mapping is Important. For example, a container running a web service on port 80, situated within the bridge network's private subnet, requires a mapping from a host system port (e.g., 8000) to the container's port 80. This enables external traffic to access the service."),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"You can specify a container to create in a bridge network by executing the following command:")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"docker run --network=bridge [IMAGE_NAME]\n")),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"The above command will return the following output:")),(0,o.yg)("div",{className:"centered-image"},(0,o.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-10-18-docker-networking/bridge-1.png",alt:"docker networking"})),(0,o.yg)("br",null),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Now, if you want to see which containers are in the bridge network and the details related to them, you can run the following command:")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"docker network inspect bridge\n")),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"The above command will return the following output:")),(0,o.yg)("div",{className:"centered-image"},(0,o.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-10-18-docker-networking/bridge-2.png",alt:"docker networking"})),(0,o.yg)("br",null),(0,o.yg)("h2",{id:"host-networking"},"Host Networking"),(0,o.yg)("p",null,"In Host Networking, the host drivers utilize the networking capabilities of the host machine. This mode removes the network isolation between the host computer (on which Docker is running) and the container. With Host Networking, Network Address Translation (NAT) is not required, and this simplifies the management of multiple ports simultaneously."),(0,o.yg)("p",null,"Let's suppose there is a scenario where port 8000 is published by a container using the host network; that port will also be published on the host system. As a result, the application running in a container that uses host networking and binds to port 80 is accessible via port 80 of the host's IP address.\nWhen running the container, we can use the ",(0,o.yg)("strong",{parentName:"p"},"--network")," flag with the value set to host in order to create a Docker container that uses the host network mode."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"docker run --network=host -d [Image_Name]\n")),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Here's how we can create an Nginx container using host networking:")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"docker run --network=host -d nginx\n")),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"The above command will show the following output:")),(0,o.yg)("div",{className:"centered-image"},(0,o.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-10-18-docker-networking/host-1.png",alt:"docker networking"})),(0,o.yg)("br",null),(0,o.yg)("h2",{id:"overlay-networking"},"Overlay Networking"),(0,o.yg)("p",null,"For multi-host network communication, like with Docker Swarm, the Overlay network can be utilized because it is a distributed network layer that makes it easier for nodes and services to communicate with one another. Overlay networking enables connected containers to communicate throughout the swarm securely and efficiently. Swarm services or standalone containers may utilize overlay networks built and controlled by the swarm manager."),(0,o.yg)("p",null,"You can either initialize your Docker daemon as a swarm manager using ",(0,o.yg)("strong",{parentName:"p"},"docker swarm init")," or join it to an existing swarm using ",(0,o.yg)("strong",{parentName:"p"},"docker swarm join")," to build an overlay network for use with swarm services.\n",(0,o.yg)("strong",{parentName:"p"},"Let's suppose we want to create/setup a custom overlay; for that purpose, we can use the following command:")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"docker network create -d overlay [NETWORK_NAME]\n")),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"The output shows that by running the command above, we have created an overlay network with the name 'my_network':")),(0,o.yg)("div",{className:"centered-image"},(0,o.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-10-18-docker-networking/overlay-1.png",alt:"docker networking"})),(0,o.yg)("br",null),(0,o.yg)("p",null,"You can connect Docker services to the overlay network once it has been set up, enabling service-to-service communication among multiple Swarm nodes.\n",(0,o.yg)("strong",{parentName:"p"},"You can use the command below with the '\u2014network' option to build a service and attach it to the overlay network:")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"docker service create --network=[NETWORK_NAME] [SERVICE_OPTIONS] [IMAGE_NAME]\n")),(0,o.yg)("p",null,"Let's say that we want to attach the '",(0,o.yg)("strong",{parentName:"p"},"nginx"),"' service to '",(0,o.yg)("strong",{parentName:"p"},"my_network"),"'. In order to achieve that purpose, we can replace ","[NETWORK_NAME]"," with '",(0,o.yg)("strong",{parentName:"p"},"my_network"),"' and ","[IMAGE_NAME]"," with '",(0,o.yg)("strong",{parentName:"p"},"nginx"),"' in the command above. We can also add ","[SERVICE_OPTIONS]"," like '",(0,o.yg)("strong",{parentName:"p"},"\u2014name"),"' or '",(0,o.yg)("strong",{parentName:"p"},"-p"),"' to assign the name or port to the service while attaching it to the network."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"docker service create --name nginx-service --network my_network -p 80:80 nginx\n")),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"The below output shows that the 'nginx' service has been attached to 'my_network':")),(0,o.yg)("div",{className:"centered-image"},(0,o.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-10-18-docker-networking/overlay-2.png",alt:"docker networking"})),(0,o.yg)("br",null),(0,o.yg)("p",null,"When we inspect the service '",(0,o.yg)("strong",{parentName:"p"},"nginx-service"),"', it will show the information about the networks that are attached to this service. This will verify that we have successfully attached our service to the overlay network. ",(0,o.yg)("strong",{parentName:"p"},"Please see the output below:")),(0,o.yg)("div",{className:"centered-image"},(0,o.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-10-18-docker-networking/overlay-3.png",alt:"docker networking"})),(0,o.yg)("br",null),(0,o.yg)("h2",{id:"macvlan-networking"},"Macvlan Networking"),(0,o.yg)("p",null,"The Macvlan network driver in Docker fills the gap between traditional network structures and container networking.\nEach container on the Macvlan network is given a unique MAC address, which makes it seem like an actual device on your network, much like a traditional virtual machine. The traffic is subsequently directed to containers based on their MAC addresses by the Docker daemon. Additionally, you will be able to assign an IP address from the same subnet as the Docker host."),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"We can create a Macvlan Network by using the following command:")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"docker network create -d macvlan [options] [name_of_network]\n")),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Let's say we want to define a subnet, gateway, and parent interface to set up a new Macvlan network called 'demo-macvlan'.In order to achieve our objective, we can utilize the command given below:")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"docker network create -d macvlan --subnet=192.168.0.0/24 --gateway=192.168.0.1 -o parent=eth0 demo-macvlan\n")),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"The output below demonstrates that the new 'demo-macvlan' network is set up with the subnet '192.168.0.0/24' gateway '192.168.0.1' and parent interface 'eth0'. Specifying 'eth0' as the parent interface indicates that the Macvlan network will use the physical network interface eth0 of the Docker host to connect to the external network:")),(0,o.yg)("div",{className:"centered-image"},(0,o.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-10-18-docker-networking/mcvilan.png",alt:"docker networking"})),(0,o.yg)("br",null),(0,o.yg)("h2",{id:"custom-bridge-networks"},"Custom Bridge Networks"),(0,o.yg)("p",null,"You can build isolated, safe networks for containers with the help of custom bridge networks. It will allow you to determine DNS resolution across containers by name or alias while at the same time giving you control of networking configurations such as subnets, gateway and IP addresses.\nYou can make use of the docker network create command with the option '",(0,o.yg)("strong",{parentName:"p"},"-d"),"' when you want to set up your custom bridge network. The name of the network also needs to be specified."),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Suppose if we want to set up a custom bridge network with the name 'my-custom-network', we can run the command below:")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"docker network create -d bridge my-custom-network\n")),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"The above command will return the following output:")),(0,o.yg)("div",{className:"centered-image"},(0,o.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-10-18-docker-networking/custom-bridge-1.png",alt:"docker networking"})),(0,o.yg)("br",null),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"We can use the '\u2014network' option of a docker run command to connect containers to this custom network. For example, we can run the command below if we want to start an 'nginx' container and connect it to 'my-custom-network', i.e., a custom bridge network that we created above:")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"docker run --network=my-custom-network nginx\n")),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"The above command will return the following output:")),(0,o.yg)("div",{className:"centered-image"},(0,o.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-10-18-docker-networking/custom-bridge-2.png",alt:"docker networking"})),(0,o.yg)("br",null),(0,o.yg)("h2",{id:"networking-tools-and-commands"},"Networking Tools and Commands"),(0,o.yg)("p",null,"The Docker system offers a number of networking tools and commands that facilitate container network management, inspection or troubleshooting.\nThe ",(0,o.yg)("strong",{parentName:"p"},"docker network inspect")," is a very useful command, which shows detailed information about the specified network, including connection containers, IP addresses and network settings.\nFor example, you can use the following command to see all information related to the '",(0,o.yg)("strong",{parentName:"p"},"my-network"),"':"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"docker network inspect my-network\n")),(0,o.yg)("p",null,"Using '",(0,o.yg)("strong",{parentName:"p"},"docker network connect"),"' or '",(0,o.yg)("strong",{parentName:"p"},"docker network disconnect"),"', you can connect and disconnect existing containers from a network. Also, if you want to test the connectivity between two hosts, you can use '",(0,o.yg)("strong",{parentName:"p"},"ping"),"' to send packets between them and measure response time. For example, if you want to test the container's ability to access the external site, you can run the command '",(0,o.yg)("em",{parentName:"p"},"ping google.com"),"' inside the container shell."),(0,o.yg)("h2",{id:"conclusion-and-best-practices"},"Conclusion and Best Practices"),(0,o.yg)("p",null,"To ensure efficient communication of containers and their integration with wider infrastructure, Docker networking plays an essential role. The system's flexibility enables it to be configured according to specific needs.\n",(0,o.yg)("strong",{parentName:"p"},"The following should be taken into consideration when selecting a network type:")),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"In the Single Host Setups, you can build custom bridge networks to improve network isolation."),(0,o.yg)("li",{parentName:"ul"},"Overlaying networks are necessary to manage multiple nodes in an orchestration with Docker Swarm."),(0,o.yg)("li",{parentName:"ul"},"Macvlan is appropriate for when containers must physically appear on a network."),(0,o.yg)("li",{parentName:"ul"},"The best performance is offered by the host network, but it sacrifices isolation.")))}p.isMDXComponent=!0}}]);