(("undefined"!=typeof globalThis?globalThis:self)["makoChunk_@antv/g6-site"]=("undefined"!=typeof globalThis?globalThis:self)["makoChunk_@antv/g6-site"]||[]).push([["d4a62b74"],{d4a62b74:function(n,e,t){"use strict";t.d(e,"__esModule",{value:!0}),t.d(e,"texts",{enumerable:!0,get:function(){return a;}}),t("c21cd92a");let a=[{value:"(() => {\n  const { register, Line, Graph } = window.g6;\n\n  class AntLine extends Line {\n    onCreate() {\n      this.shapeMap.key.animate([{ lineDashOffset: 20 }, { lineDashOffset: 0 }], {\n        duration: 500,\n        iterations: Infinity,\n      });\n    }\n  }\n\n  register('edge', 'ant-line', AntLine);\n\n  const container = createContainer({ width: 200, height: 50 });\n\n  const graph = new Graph({\n    container,\n    width: 200,\n    height: 50,\n    data: {\n      nodes: [\n        { id: 'node-1', style: { x: 25, y: 25 } },\n        { id: 'node-2', style: { x: 175, y: 25 } },\n      ],\n      edges: [{ source: 'node-1', target: 'node-2', style: { lineDash: [10, 10] } }],\n    },\n    edge: {\n      type: 'ant-line',\n    },\n  });\n\n  graph.draw();\n\n  return container;\n})();\n",paraId:0}];}}]);
//# sourceMappingURL=d4a62b74-async.a4931283.js.map