(("undefined"!=typeof globalThis?globalThis:self)["makoChunk_@antv/g6-site"]=("undefined"!=typeof globalThis?globalThis:self)["makoChunk_@antv/g6-site"]||[]).push([["5e65e7d4"],{"5e65e7d4":function(e,n,a){"use strict";a.d(n,"__esModule",{value:!0}),a.d(n,"texts",{enumerable:!0,get:function(){return d;}}),a("c1711556");let d=[{value:" \u7279\u522B\u6CE8\u610F\uFF0C\u8BA1\u7B97\u63A7\u5236\u70B9\u65F6\u4E3B\u8981\u8003\u8651 y \u8F74\u4E0A\u7684\u8DDD\u79BB\uFF0C\u5FFD\u7565 x \u8F74\u7684\u53D8\u5316",paraId:0},{value:"createGraph(\n  {\n    autoFit: 'center',\n    data: {\n      nodes: [{ id: 'node1' }, { id: 'node2' }, { id: 'node3' }, { id: 'node4' }, { id: 'node5' }, { id: 'node6' }],\n      edges: [\n        { source: 'node1', target: 'node2' },\n        { source: 'node1', target: 'node3' },\n        { source: 'node1', target: 'node4', text: 'cubic-vertical' },\n        { source: 'node1', target: 'node5' },\n        { source: 'node1', target: 'node6' },\n      ],\n    },\n    node: {\n      style: {\n        fill: '#f8f8f8',\n        stroke: '#8b9baf',\n        lineWidth: 1,\n        port: true,\n        ports: [{ placement: 'top' }, { placement: 'bottom' }],\n      },\n    },\n    edge: {\n      type: 'cubic-vertical',\n      style: {\n        stroke: '#7e3feb',\n        lineWidth: 2,\n        labelText: (d) => d.text,\n        labelBackground: true,\n        labelBackgroundFill: '#f9f0ff',\n        labelBackgroundOpacity: 1,\n        labelBackgroundLineWidth: 2,\n        labelBackgroundStroke: '#7e3feb',\n        labelPadding: [1, 10],\n        labelBackgroundRadius: 4,\n      },\n    },\n    behaviors: ['drag-canvas', 'drag-element'],\n    layout: {\n      type: 'antv-dagre',\n      rankdir: 'TB',\n      nodesep: 25,\n      ranksep: 80,\n    },\n    plugins: [{ type: 'grid-line', size: 30 }],\n  },\n  { width: 600, height: 300 },\n  (gui, graph) => {\n    gui.add({ type: 'cubic-vertical' }, 'type').disable();\n\n    const options = {\n      curveOffset: 20,\n      curvePosition: 0.5,\n    };\n    const optionFolder = gui.addFolder('cubic-vertical.style');\n    optionFolder.add(options, 'curveOffset', 0, 100);\n    optionFolder.add(options, 'curvePosition', 0, 1);\n\n    optionFolder.onChange(({ property, value }) => {\n      graph.updateEdgeData((prev) => prev.map((edge) => ({ ...edge, style: { [property]: value } })));\n      graph.render();\n    });\n  },\n);\n",paraId:1},{value:"\u5982\u679C\u5143\u7D20\u6709\u5176\u7279\u5B9A\u7684\u5C5E\u6027\uFF0C\u6211\u4EEC\u5C06\u5728\u4E0B\u9762\u5217\u51FA\u3002\u5BF9\u4E8E\u6240\u6709\u7684\u901A\u7528\u6837\u5F0F\u5C5E\u6027\uFF0C\u89C1",paraId:2},{value:"BaseEdge",paraId:3},{value:"number | [number, number]",paraId:4,tocIndex:0},{value:" ",paraId:4,tocIndex:0},{value:"Default:",paraId:4,tocIndex:0},{value:" ",paraId:4,tocIndex:0},{value:"[0, 0]",paraId:4,tocIndex:0},{value:"\u63A7\u5236\u70B9\u8DDD\u79BB\u4E24\u7AEF\u70B9\u8FDE\u7EBF\u7684\u8DDD\u79BB\uFF0C\u53EF\u7406\u89E3\u4E3A\u63A7\u5236\u8FB9\u7684\u5F2F\u66F2\u7A0B\u5EA6",paraId:5,tocIndex:0},{value:"number | [number, number]",paraId:6,tocIndex:1},{value:" ",paraId:6,tocIndex:1},{value:"Default:",paraId:6,tocIndex:1},{value:" ",paraId:6,tocIndex:1},{value:"[0.5, 0.5]",paraId:6,tocIndex:1},{value:"\u63A7\u5236\u70B9\u5728\u4E24\u7AEF\u70B9\u8FDE\u7EBF\u4E0A\u7684\u76F8\u5BF9\u4F4D\u7F6E\uFF0C\u8303\u56F4\u4E3A",paraId:7,tocIndex:1},{value:"0-1",paraId:7,tocIndex:1}];}}]);
//# sourceMappingURL=5e65e7d4-async.ed1ff015.js.map