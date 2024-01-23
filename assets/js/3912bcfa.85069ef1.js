"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[99365],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),d=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},l=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),l=d(n),f=o,g=l["".concat(c,".").concat(f)]||l[f]||p[f]||a;return n?r.createElement(g,s(s({ref:t},u),{},{components:n})):r.createElement(g,s({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=l;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var d=2;d<a;d++)s[d]=n[d];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}l.displayName="MDXCreateElement"},1220:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>f,frontMatter:()=>i,metadata:()=>d,toc:()=>p});n(67294);var r=n(3905);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const i={},c=void 0,d={unversionedId:"guides-concepts/data-fetching/data-provider-interface",id:"guides-concepts/data-fetching/data-provider-interface",title:"data-provider-interface",description:"",source:"@site/docs/guides-concepts/data-fetching/data-provider-interface.md",sourceDirName:"guides-concepts/data-fetching",slug:"/guides-concepts/data-fetching/data-provider-interface",permalink:"/docs/guides-concepts/data-fetching/data-provider-interface",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/guides-concepts/data-fetching/data-provider-interface.md",tags:[],version:"current",lastUpdatedBy:"Batuhan Wilhelm",lastUpdatedAt:1706004489,formattedLastUpdatedAt:"Jan 23, 2024",frontMatter:{}},u={},p=[],l={toc:p};function f(e){var{components:t}=e,n=s(e,["components"]);return(0,r.kt)("wrapper",a(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){o(e,t,n[t])}))}return e}({},l,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import { DataProvider, HttpError, Pagination, CrudSorting, CrudFilters, CrudOperators } from "@refinedev/core";\nimport { stringify } from "query-string";\nimport axios, { AxiosInstance } from "axios";\n\ntype MethodTypes = "get" | "delete" | "head" | "options";\ntype MethodTypesWithBody = "post" | "put" | "patch";\n\nconst axiosInstance = axios.create();\n\nexport const dataProvider = (\n  apiUrl: string,\n  // get axios instance from user or use default one.\n  httpClient: AxiosInstance = axiosInstance,\n): DataProvider => ({\n  getOne: async ({ resource, id, meta }) => {\n    const url = `${apiUrl}/${resource}/${id}`;\n\n    const { headers, method } = meta ?? {};\n    const requestMethod = (method as MethodTypes) ?? "get";\n\n    const { data } = await httpClient[requestMethod](url, { headers });\n\n    return {\n      data,\n    };\n  },\n\n  update: async ({ resource, id, variables, meta }) => {\n    const url = `${apiUrl}/${resource}/${id}`;\n\n    const { headers, method } = meta ?? {};\n    const requestMethod = (method as MethodTypesWithBody) ?? "patch";\n\n    const { data } = await httpClient[requestMethod](url, variables, {\n      headers,\n    });\n\n    return {\n      data,\n    };\n  },\n\n  create: async ({ resource, variables, meta }) => {\n    const url = `${apiUrl}/${resource}`;\n\n    const { headers, method } = meta ?? {};\n    const requestMethod = (method as MethodTypesWithBody) ?? "post";\n\n    const { data } = await httpClient[requestMethod](url, variables, {\n      headers,\n    });\n\n    return {\n      data,\n    };\n  },\n\n  deleteOne: async ({ resource, id, variables, meta }) => {\n    const url = `${apiUrl}/${resource}/${id}`;\n\n    const { headers, method } = meta ?? {};\n    const requestMethod = (method as MethodTypesWithBody) ?? "delete";\n\n    const { data } = await httpClient[requestMethod](url, {\n      data: variables,\n      headers,\n    });\n\n    return {\n      data,\n    };\n  },\n\n  getList: async ({ resource, pagination, sorters, filters, meta }) => {\n    const url = `${apiUrl}/${resource}`;\n\n    const { headers: headersFromMeta, method } = meta ?? {};\n    const requestMethod = (method as MethodTypes) ?? "get";\n\n    // init query object for pagination and sorting\n    const query: {\n      _start?: number;\n      _end?: number;\n      _sort?: string;\n      _order?: string;\n    } = {};\n\n    const generatedPagination = generatePagination(pagination);\n    if (generatedPagination) {\n      const { _start, _end } = generatedPagination;\n      query._start = _start;\n      query._end = _end;\n    }\n\n    const generatedSort = generateSort(sorters);\n    if (generatedSort) {\n      const { _sort, _order } = generatedSort;\n      query._sort = _sort.join(",");\n      query._order = _order.join(",");\n    }\n\n    const queryFilters = generateFilter(filters);\n\n    const { data, headers } = await httpClient[requestMethod](`${url}?${stringify(query)}&${stringify(queryFilters)}`, {\n      headers: headersFromMeta,\n    });\n\n    const total = +headers["x-total-count"];\n\n    return {\n      data,\n      total: total || data.length,\n    };\n  },\n\n  getApiUrl: () => apiUrl,\n});\n\n// Convert axios errors to HttpError on every response.\naxiosInstance.interceptors.response.use(\n  (response) => {\n    return response;\n  },\n  (error) => {\n    const customError: HttpError = {\n      ...error,\n      message: error.response?.data?.message,\n      statusCode: error.response?.status,\n    };\n\n    return Promise.reject(customError);\n  },\n);\n\n// convert Refine CrudOperators to the format that API accepts.\nconst mapOperator = (operator: CrudOperators): string => {\n  switch (operator) {\n    case "ne":\n    case "gte":\n    case "lte":\n      return `_${operator}`;\n    case "contains":\n      return "_like";\n    case "eq":\n    default:\n      return "";\n  }\n};\n\n// generate query string from Refine CrudFilters to the format that API accepts.\nconst generateFilter = (filters?: CrudFilters) => {\n  const queryFilters: { [key: string]: string } = {};\n\n  if (filters) {\n    filters.map((filter) => {\n      if (filter.operator === "or" || filter.operator === "and") {\n        throw new Error(`[@refinedev/simple-rest]: /docs/data/data-provider#creating-a-data-provider`);\n      }\n\n      if ("field" in filter) {\n        const { field, operator, value } = filter;\n\n        if (field === "q") {\n          queryFilters[field] = value;\n          return;\n        }\n\n        const mappedOperator = mapOperator(operator);\n        queryFilters[`${field}${mappedOperator}`] = value;\n      }\n    });\n  }\n\n  return queryFilters;\n};\n\n// generate query string from Refine CrudSorting to the format that API accepts.\nconst generateSort = (sorters?: CrudSorting) => {\n  if (sorters && sorters.length > 0) {\n    const _sort: string[] = [];\n    const _order: string[] = [];\n\n    sorters.map((item) => {\n      _sort.push(item.field);\n      _order.push(item.order);\n    });\n\n    return {\n      _sort,\n      _order,\n    };\n  }\n\n  return;\n};\n\n// generate query string from Refine Pagination to the format that API accepts.\nconst generatePagination = (pagination?: Pagination) => {\n  // pagination is optional on data hooks, so we need to set default values.\n  const { current = 1, pageSize = 10, mode = "server" } = pagination ?? {};\n\n  const query: {\n    _start?: number;\n    _end?: number;\n  } = {};\n\n  if (mode === "server") {\n    query._start = (current - 1) * pageSize;\n    query._end = current * pageSize;\n  }\n\n  return query;\n};\n')))}f.isMDXComponent=!0}}]);