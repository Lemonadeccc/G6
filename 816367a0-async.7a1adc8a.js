(("undefined"!=typeof globalThis?globalThis:self)["makoChunk_@antv/g6-site"]=("undefined"!=typeof globalThis?globalThis:self)["makoChunk_@antv/g6-site"]||[]).push([["816367a0"],{"816367a0":function(n,e,t){"use strict";t.d(e,"__esModule",{value:!0}),t.d(e,"texts",{enumerable:!0,get:function(){return a;}}),t("74dddafc");let a=[{value:"\u53C2\u8003\u4E0B\u9762\u7684\u793A\u4F8B\uFF0C\u4F60\u53EF\u4EE5\u5728 Vue \u4E2D\u4F7F\u7528 G6\uFF0C\u4E5F\u53EF\u4EE5\u67E5\u770B ",paraId:0},{value:"\u5728\u7EBF\u793A\u4F8B",paraId:0},{value:"\u3002",paraId:0},{value:"<template>\n  <div id=\"container\"></div>\n</template>\n\n<script setup>\n  import { onMounted } from 'vue';\n  import { Graph } from '@antv/g6';\n\n  onMounted(() => {\n    const graph = new Graph({\n      container: document.getElementById('container'),\n      width: 500,\n      height: 500,\n      data: {\n        nodes: [\n          {\n            id: 'node-1',\n            style: { x: 50, y: 100 },\n          },\n          {\n            id: 'node-2',\n            style: { x: 150, y: 100 },\n          },\n        ],\n        edges: [{ id: 'edge-1', source: 'node-1', target: 'node-2' }],\n      },\n    });\n\n    graph.render();\n  });\n</script>\n",paraId:1}];}}]);
//# sourceMappingURL=816367a0-async.7a1adc8a.js.map