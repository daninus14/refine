"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[99539],{58860:(e,n,t)=>{t.d(n,{xA:()=>l,yg:()=>u});var r=t(37953);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),d=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},l=function(e){var n=d(e.components);return r.createElement(s.Provider,{value:n},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},y=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),c=d(t),y=a,u=c["".concat(s,".").concat(y)]||c[y]||m[y]||i;return t?r.createElement(u,o(o({ref:n},l),{},{components:t})):r.createElement(u,o({ref:n},l))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=y;var p={};for(var s in n)hasOwnProperty.call(n,s)&&(p[s]=n[s]);p.originalType=e,p[c]="string"==typeof e?e:a,o[1]=p;for(var d=2;d<i;d++)o[d]=t[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},13629:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>p,metadata:()=>d,toc:()=>c});t(37953);var r=t(58860);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}const p={id:"inferencer",title:"Inferencer"},s=void 0,d={unversionedId:"packages/documentation/inferencer",id:"version-3.xx.xx/packages/documentation/inferencer",title:"Inferencer",description:"@pankod/refine-inferencer is a package that provides a way to automatically generate views for resources based on the data structure. The aim is to reduce the amount of time spent on creating views for resources by generating the code automatically that can be customized easily.",source:"@site/versioned_docs/version-3.xx.xx/packages/documentation/inferencer.md",sourceDirName:"packages/documentation",slug:"/packages/documentation/inferencer",permalink:"/docs/3.xx.xx/packages/documentation/inferencer",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/packages/documentation/inferencer.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Batuhan Wilhelm",lastUpdatedAt:1716808447,formattedLastUpdatedAt:"May 27, 2024",frontMatter:{id:"inferencer",title:"Inferencer"},sidebar:"someSidebar",previous:{title:"useStepsForm",permalink:"/docs/3.xx.xx/packages/documentation/react-hook-form/useStepsForm"},next:{title:"RealWorld Example",permalink:"/docs/3.xx.xx/examples/real-world-refine-example"}},l={},c=[{value:"Installation",id:"installation",level:2},{value:"Available UI Inferencers",id:"available-ui-inferencers",level:2},{value:"How it works?",id:"how-it-works",level:2},{value:"How the data is obtained?",id:"how-the-data-is-obtained",level:3},{value:"How the fields are inferred?",id:"how-the-fields-are-inferred",level:3},{value:"How the relations are determined?",id:"how-the-relations-are-determined",level:3},{value:"How the components are rendered and the code is generated?",id:"how-the-components-are-rendered-and-the-code-is-generated",level:3},{value:"Modifying the inferred fields",id:"modifying-the-inferred-fields",level:3}],m=e=>function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.yg)("div",n)},y=m("DocThumbsUpDownFeedbackWidget"),u=m("InstallPackagesCommand"),f={toc:c},g="wrapper";function h(e){var{components:n}=e,t=o(e,["components"]);return(0,r.yg)(g,i(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){a(e,n,t[n])}))}return e}({},f,t),{components:n,mdxType:"MDXLayout"}),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"@pankod/refine-inferencer")," is a package that provides a way to automatically generate views for resources based on the data structure. The aim is to reduce the amount of time spent on creating views for resources by generating the code automatically that can be customized easily."),(0,r.yg)("p",null,"The package exports components for ",(0,r.yg)("strong",{parentName:"p"},"List"),", ",(0,r.yg)("strong",{parentName:"p"},"Show"),", ",(0,r.yg)("strong",{parentName:"p"},"Create")," and ",(0,r.yg)("strong",{parentName:"p"},"Edit")," views inside UI package scopes. For example, ",(0,r.yg)("inlineCode",{parentName:"p"},"@pankod/refine-inferencer/antd")," exports components for ",(0,r.yg)("inlineCode",{parentName:"p"},"@pankod/refine-antd")," package."),(0,r.yg)("h2",{id:"installation"},"Installation"),(0,r.yg)(y,{id:"installation",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)(u,{args:"@pankod/refine-inferencer",mdxType:"InstallPackagesCommand"})),(0,r.yg)("h2",{id:"available-ui-inferencers"},"Available UI Inferencers"),(0,r.yg)(y,{id:"available-ui-inferencers",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/docs/3.xx.xx/api-reference/antd/components/inferencer"},"Ant Design")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/docs/3.xx.xx/api-reference/mui/components/inferencer"},"Material UI")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/docs/3.xx.xx/api-reference/mantine/components/inferencer"},"Mantine")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/docs/3.xx.xx/api-reference/chakra-ui/components/inferencer"},"Chakra UI")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/docs/3.xx.xx/api-reference/core/components/inferencer"},"Headless"))),(0,r.yg)("admonition",{type:"info"},(0,r.yg)("p",{parentName:"admonition"},(0,r.yg)("inlineCode",{parentName:"p"},"@pankod/refine-inferencer")," is an experimental package and it is now in the early stages of development. We are working on improving the package and adding new features."),(0,r.yg)("p",{parentName:"admonition"},"If you have any suggestions or feedback, please let us know in the ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/refinedev/refine/discussions/3046"},(0,r.yg)("strong",{parentName:"a"},"GitHub Discussions")))),(0,r.yg)("admonition",{title:"Warning",type:"caution"},(0,r.yg)("p",{parentName:"admonition"},(0,r.yg)("inlineCode",{parentName:"p"},"@pankod/refine-inferencer")," components are meant to be used in development environments. They are not meant to be used in production environments."))),(0,r.yg)("h2",{id:"how-it-works"},"How it works?"),(0,r.yg)(y,{id:"how-it-works",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,"Simply, ",(0,r.yg)("inlineCode",{parentName:"p"},"@pankod/refine-inferencer")," generates views and codes based on the data structure of the resource by fetching it using the ",(0,r.yg)("inlineCode",{parentName:"p"},"dataProvider")," of ",(0,r.yg)("inlineCode",{parentName:"p"},"<Refine/>")," component.")),(0,r.yg)("h3",{id:"how-the-data-is-obtained"},"How the data is obtained?"),(0,r.yg)(y,{id:"how-the-data-is-obtained",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,"For, ",(0,r.yg)("inlineCode",{parentName:"p"},"edit")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"show")," actions, we send the request with ",(0,r.yg)("inlineCode",{parentName:"p"},"resource")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"id"),". For ",(0,r.yg)("inlineCode",{parentName:"p"},"list")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"create")," actions, we send a list request with ",(0,r.yg)("inlineCode",{parentName:"p"},"resource")," and use one of the items to generate the view. These actions will take place in your app.")),(0,r.yg)("h3",{id:"how-the-fields-are-inferred"},"How the fields are inferred?"),(0,r.yg)(y,{id:"how-the-fields-are-inferred",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,"While inferring the field types, we use a set of functions that each checks the field for a specific type and returns the inferred type. These functions also can return a ",(0,r.yg)("inlineCode",{parentName:"p"},"priority")," field that is used to determine the type of the field. For example, if we have a ",(0,r.yg)("inlineCode",{parentName:"p"},"created_at")," property with a string value, we can infer it as a ",(0,r.yg)("inlineCode",{parentName:"p"},"date")," type and a ",(0,r.yg)("inlineCode",{parentName:"p"},"text")," type. In this case, we use the ",(0,r.yg)("inlineCode",{parentName:"p"},"priority")," field to determine the type of the field. The higher the priority, the more accurate the type of the field."),(0,r.yg)("p",null,"Properties with multiple values are identified as ",(0,r.yg)("inlineCode",{parentName:"p"},"array")," type but also repeats the same process for their values to determine the type of the values. Same also happens for ",(0,r.yg)("inlineCode",{parentName:"p"},"object")," type properties. Both can have ",(0,r.yg)("inlineCode",{parentName:"p"},"accessor")," field in return value to access the values of the property which is used when creating the view and the code."),(0,r.yg)("p",null,"If the property is an ",(0,r.yg)("inlineCode",{parentName:"p"},"object")," type, we try to pick a key to represent that property. For example, if we have a ",(0,r.yg)("inlineCode",{parentName:"p"},"category")," field with ",(0,r.yg)("inlineCode",{parentName:"p"},"{ label: string; id: string; }")," type, we pick ",(0,r.yg)("inlineCode",{parentName:"p"},"label")," as the key to represent the property. These ",(0,r.yg)("inlineCode",{parentName:"p"},"object")," fields with keys to represent them have the property ",(0,r.yg)("inlineCode",{parentName:"p"},"fieldable")," set to ",(0,r.yg)("inlineCode",{parentName:"p"},"true")," in the return value."),(0,r.yg)("admonition",{title:"Available field types and functions",type:"tip"},(0,r.yg)("pre",{parentName:"admonition"},(0,r.yg)("code",{parentName:"pre"},'"relation" | "array" | "object" | "date" | "email" | "image" | "url" | "richtext" | "text" | "number" | "boolean" | "unknown" | "custom_{string}"\n'))),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("mdxAdmonitionTitle",{parentName:"admonition"},"List of keys that can be used to represent an ",(0,r.yg)("inlineCode",{parentName:"mdxAdmonitionTitle"},"object")," type property"),(0,r.yg)("pre",{parentName:"admonition"},(0,r.yg)("code",{parentName:"pre"},'"name" | "label" | "title" | "count" | "content" | "username" | "nickname" | "login" | "firstName" | "lastName" | "url"\n'))),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("p",{parentName:"admonition"},(0,r.yg)("inlineCode",{parentName:"p"},"custom_${string}")," is used by the inferencer components of UI packages when they have custom representations, for now users can't pass custom types and functions to the inferencer components."))),(0,r.yg)("h3",{id:"how-the-relations-are-determined"},"How the relations are determined?"),(0,r.yg)(y,{id:"how-the-relations-are-determined",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,"There are some conditions we look for before determining if a field is can be a ",(0,r.yg)("inlineCode",{parentName:"p"},"relation"),". These won't trigger any API calls to the resources."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"If the property name ends with ",(0,r.yg)("inlineCode",{parentName:"li"},"id")," or ",(0,r.yg)("inlineCode",{parentName:"li"},"ids"),". camelCase, PascalCase, snake_case, kebab-case, UPPER_CASE, lower_case are all supported with or without array brackets([])."),(0,r.yg)("li",{parentName:"ul"},"If the property is an object with a single property ",(0,r.yg)("inlineCode",{parentName:"li"},"id"),"."),(0,r.yg)("li",{parentName:"ul"},"If the property is an array of objects with a single property ",(0,r.yg)("inlineCode",{parentName:"li"},"id")," or UUID compatible strings or numbers."),(0,r.yg)("li",{parentName:"ul"},"If the property is a string or number and the property name matches with one of the known resources (singular or plural).")),(0,r.yg)("p",null,"If one of these conditions is met, we consider the property as a ",(0,r.yg)("inlineCode",{parentName:"p"},"relation")," type and try to determine the related resource."),(0,r.yg)("p",null,"To determine the relations;"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"First, we try to find a resource that matches with the property name (singular or plural)."),(0,r.yg)("li",{parentName:"ul"},"If a resource is found in the ",(0,r.yg)("inlineCode",{parentName:"li"},"resources")," array with a match, we use that resource as the related resource."),(0,r.yg)("li",{parentName:"ul"},"If no resource is found, we send two requests to the ",(0,r.yg)("inlineCode",{parentName:"li"},"default")," ",(0,r.yg)("inlineCode",{parentName:"li"},"dataProvider")," one with singular property name and one with plural property name, both stripped from the ",(0,r.yg)("inlineCode",{parentName:"li"},"id")," suffixes if there are any."),(0,r.yg)("li",{parentName:"ul"},"If a resource is found we use that resource and its ",(0,r.yg)("inlineCode",{parentName:"li"},"dataProvider")," (if specified) and make the API call with the property value."),(0,r.yg)("li",{parentName:"ul"},"If any of these requests succeed with ",(0,r.yg)("inlineCode",{parentName:"li"},"200")," status code, we consider the property as a ",(0,r.yg)("inlineCode",{parentName:"li"},"relation")," type and set the resource as the related resource."),(0,r.yg)("li",{parentName:"ul"},"If none of these requests succeed, we remove the ",(0,r.yg)("inlineCode",{parentName:"li"},"relation")," mark from the property and consider it as a normal field. If it's an ",(0,r.yg)("inlineCode",{parentName:"li"},"object")," type, then we will try to find the best suitable property to represent it.")),(0,r.yg)("admonition",{title:"Manually setting relations and resources",type:"tip"},(0,r.yg)("p",{parentName:"admonition"},"If your ",(0,r.yg)("inlineCode",{parentName:"p"},"dataProvider")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"resources")," has a different way of work that makes it impossible for Inferencer to find the ",(0,r.yg)("inlineCode",{parentName:"p"},"relation")," resources. You can manually modify the inferred fields by using the ",(0,r.yg)("inlineCode",{parentName:"p"},"fieldTransformer")," function. You can find more information about it in the ",(0,r.yg)("a",{parentName:"p",href:"#modifying-the-inferred-fields"},(0,r.yg)("strong",{parentName:"a"},"Modifying the inferred fields"))," section."))),(0,r.yg)("h3",{id:"how-the-components-are-rendered-and-the-code-is-generated"},"How the components are rendered and the code is generated?"),(0,r.yg)(y,{id:"how-the-components-are-rendered-and-the-code-is-generated",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("admonition",{title:"rendering",type:"tip"},(0,r.yg)("p",{parentName:"admonition"},"To render the components we use a ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/aliemir/react-live"},"fork")," of ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/FormidableLabs/react-live"},(0,r.yg)("inlineCode",{parentName:"a"},"react-live"))," package with Typescript support.")),(0,r.yg)("p",null,"After the fields are determined, we use the ",(0,r.yg)("inlineCode",{parentName:"p"},"renderer")," functions to create the code for the components and also use the same code to render the components in the view. ",(0,r.yg)("inlineCode",{parentName:"p"},"renderer")," functions are constructed per action type and the UI package. This means, ",(0,r.yg)("inlineCode",{parentName:"p"},"@pankod/refine-inferencer/antd")," and other UI scopes has different ",(0,r.yg)("inlineCode",{parentName:"p"},"renderer")," functions for ",(0,r.yg)("inlineCode",{parentName:"p"},"list"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"show"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"edit")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"create")," actions."),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"renderer")," function returns a ",(0,r.yg)("inlineCode",{parentName:"p"},"string")," that includes the code for the component which is presented to user to copy and paste to their project. The same code is also used to render the component in the view."),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("p",{parentName:"admonition"},"Component name is determined by the active ",(0,r.yg)("inlineCode",{parentName:"p"},"resource")," element and the active action. If the resource has ",(0,r.yg)("inlineCode",{parentName:"p"},"option.label")," field, it will be used as the part of the component name. Otherwise, the ",(0,r.yg)("inlineCode",{parentName:"p"},"resource.name")," will be used. For example, if the resource name is ",(0,r.yg)("inlineCode",{parentName:"p"},"categories")," and the action is ",(0,r.yg)("inlineCode",{parentName:"p"},"list"),", the component name will be ",(0,r.yg)("inlineCode",{parentName:"p"},"CategoryList"),"."))),(0,r.yg)("h3",{id:"modifying-the-inferred-fields"},"Modifying the inferred fields"),(0,r.yg)(y,{id:"modifying-the-inferred-fields",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,"If you want to customize the output of the Inferencer such as setting a custom ",(0,r.yg)("inlineCode",{parentName:"p"},"accessor")," property for ",(0,r.yg)("inlineCode",{parentName:"p"},"object")," type fields or changing the ",(0,r.yg)("inlineCode",{parentName:"p"},"type")," of a field, or changing the ",(0,r.yg)("inlineCode",{parentName:"p"},"resource")," for a ",(0,r.yg)("inlineCode",{parentName:"p"},"relation")," type, you can use",(0,r.yg)("inlineCode",{parentName:"p"},"fieldTransformer")," prop in Inferencer components. It is a function that takes the field as an argument and returns the modified field. If ",(0,r.yg)("inlineCode",{parentName:"p"},"undefined | false | null")," is returned, the field will be removed from the output, both for the preview and the code.")))}h.isMDXComponent=!0}}]);