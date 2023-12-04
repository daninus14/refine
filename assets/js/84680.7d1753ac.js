"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[84680],{84680:e=>{e.exports=JSON.parse('{"filePath":"/home/runner/work/refine/refine/packages/antd/src/index.tsx","description":"`useImport` hook allows you to handle your csv import logic easily.","displayName":"useImport","props":{"resourceName":{"defaultValue":{"value":"Resource name that it reads from route"},"description":"Resource name for API data interactions.","name":"resourceName","required":false,"type":{"name":"string"},"tags":{"default":"Resource name that it reads from route","deprecated":"`resourceName` is deprecated. Use `resource` instead."}},"resource":{"defaultValue":{"value":"Resource name that it reads from route"},"description":"Resource name for API data interactions.","name":"resource","required":false,"type":{"name":"string"},"tags":{"default":"Resource name that it reads from route"}},"mapData":{"defaultValue":{"value":"(item) => item as unknown as TVariables"},"description":"A mapping function that runs for every record. Mapped data will be included in the file contents.","name":"mapData","required":false,"type":{"name":"MapDataFn<TItem, TVariables>"},"tags":{}},"paparseOptions":{"defaultValue":null,"description":"Custom Papa Parse options.","name":"paparseOptions","required":false,"type":{"name":"[`ParseConfig`](https://www.papaparse.com/docs)"},"tags":{"type":"[`ParseConfig`] (https://www.papaparse.com/docs)"}},"batchSize":{"defaultValue":{"value":"Number.MAX_SAFE_INTEGER"},"description":"Requests batch size. If it is 1, all records are sent one by one. By default, it is [`Number.MAX_SAFE_INTEGER`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER) to send all records in one batch. If it is more than 1, `createMany` should be implemented on DataProvider.","name":"batchSize","required":false,"type":{"name":"number"},"tags":{}},"onFinish":{"defaultValue":null,"description":"Called with errors and successful responses when all requests are sent.","name":"onFinish","required":false,"type":{"name":"((results: OnFinishParams<TVariables, TData>) => void)"},"tags":{}},"meta":{"defaultValue":null,"description":"Metadata query for `dataProvider`","name":"meta","required":false,"type":{"name":"MetaQuery"},"tags":{}},"metaData":{"defaultValue":null,"description":"Metadata query for `dataProvider`","name":"metaData","required":false,"type":{"name":"MetaQuery"},"tags":{"deprecated":"`metaData` is deprecated with refine@4, refine will pass `meta` instead, however, we still support `metaData` for backward compatibility."}},"onProgress":{"defaultValue":null,"description":"A callback function that returns a current state of uploading process.\\n\\nEx: `percentage = onProgressParams.processedAmount / onProgressParams.totalAmount * 100`","name":"onProgress","required":false,"type":{"name":"((onProgressParams: OnProgressParams) => void)"},"tags":{}},"dataProviderName":{"defaultValue":null,"description":"If there is more than one `dataProvider`, you should use the `dataProviderName` that you will use.","name":"dataProviderName","required":false,"type":{"name":"string"},"tags":{}}},"generatedAt":1701674822882}')}}]);