(("undefined"!=typeof globalThis?globalThis:self)["makoChunk_@antv/g6-site"]=("undefined"!=typeof globalThis?globalThis:self)["makoChunk_@antv/g6-site"]||[]).push([["f7439b2d"],{f7439b2d:function(e,a,t){"use strict";t.d(a,"__esModule",{value:!0}),t.d(a,"texts",{enumerable:!0,get:function(){return d;}}),t("d6b26428");let d=[{value:"createGraph(\n  {\n    data: {\n      nodes: [\n        { id: 'node-1', style: { x: 200, y: 100 } },\n        { id: 'node-2', style: { x: 360, y: 100 } },\n        { id: 'node-3', style: { x: 280, y: 220 } },\n      ],\n      edges: [\n        { source: 'node-1', target: 'node-2' },\n        { source: 'node-1', target: 'node-3' },\n        { source: 'node-2', target: 'node-3' },\n      ],\n    },\n    node: {\n      style: { fill: '#7e3feb' },\n      state: {\n        custom: { fill: '#ffa940' },\n      },\n    },\n    edge: {\n      stroke: '#8b9baf',\n      state: {\n        custom: { stroke: '#ffa940' },\n      },\n    },\n    behaviors: [\n      {\n        type: 'brush-select',\n        key: 'brush-select',\n      },\n    ],\n    plugins: [{ type: 'grid-line', size: 30 }],\n    animation: true,\n  },\n  { width: 600, height: 300 },\n  (gui, graph) => {\n    const options = {\n      key: 'brush-select',\n      type: 'brush-select',\n      animation: false,\n      enable: true,\n      enableElements: ['node', 'edge', 'combo'],\n      immediately: false,\n      mode: 'default',\n      state: 'selected',\n      trigger: 'shift+drag',\n    };\n    const optionFolder = gui.addFolder('BrushSelect Options');\n    optionFolder.add(options, 'type').disable(true);\n    optionFolder.add(options, 'animation');\n    optionFolder.add(options, 'enable');\n    optionFolder.add(options, 'enableElements', [\n      ['node', 'edge', 'combo'],\n      ['node', 'edge'],\n      ['node', 'combo'],\n      ['combo', 'edge'],\n      ['node'],\n      ['edge'],\n      ['combo'],\n    ]);\n    optionFolder.add(options, 'trigger', {\n      'shift+drag': ['shift'],\n      drag: [],\n    });\n    optionFolder.add(options, 'state', ['active', 'selected', 'custom']);\n    optionFolder.add(options, 'mode', ['union', 'intersect', 'diff', 'default']).onChange((e) => {\n      immediately.show(e === 'default');\n    });\n    const immediately = optionFolder.add(options, 'immediately');\n\n    optionFolder.onChange(({ property, value }) => {\n      graph.updateBehavior({\n        key: 'brush-select',\n        [property]: value,\n      });\n      graph.render();\n    });\n  },\n);\n",paraId:0},{value:"string",paraId:1,tocIndex:1},{value:"Behavior key, that is, the unique identifier",paraId:2,tocIndex:1},{value:" Used to identify the behavior for further operations",paraId:3,tocIndex:1},{value:"// Update behavior options\r\ngraph.updateBehavior({key: 'key', ...});\n",paraId:4,tocIndex:1},{value:"Required",paraId:5,tocIndex:1},{value:"string",paraId:6,tocIndex:2},{value:"Behavior type",paraId:7,tocIndex:2},{value:"boolean",paraId:8,tocIndex:3},{value:" ",paraId:8,tocIndex:3},{value:"Default:",paraId:8,tocIndex:3},{value:" ",paraId:8,tocIndex:3},{value:"false",paraId:8,tocIndex:3},{value:"Whether to enable animation.",paraId:9,tocIndex:3},{value:"boolean | ((event:",paraId:10,tocIndex:4},{value:" ",paraId:10,tocIndex:4},{value:"IPointerEvent",paraId:11,tocIndex:4},{value:") => boolean)",paraId:10,tocIndex:4},{value:" ",paraId:10,tocIndex:4},{value:"Default:",paraId:10,tocIndex:4},{value:" ",paraId:10,tocIndex:4},{value:"true",paraId:10,tocIndex:4},{value:"Whether to enable Brush select element function.",paraId:12,tocIndex:4},{value:"'node' | 'edge' | 'combo'",paraId:13,tocIndex:5},{value:"[]",paraId:13,tocIndex:5},{value:" ",paraId:13,tocIndex:5},{value:"Default:",paraId:13,tocIndex:5},{value:" ",paraId:13,tocIndex:5},{value:"['node', 'combo', 'edge']",paraId:13,tocIndex:5},{value:"Enable Elements type.",paraId:14,tocIndex:5},{value:"boolean",paraId:15,tocIndex:6},{value:" ",paraId:15,tocIndex:6},{value:"Default:",paraId:15,tocIndex:6},{value:" ",paraId:15,tocIndex:6},{value:"false",paraId:15,tocIndex:6},{value:"Whether to brush select immediately, only valid when the brush select mode is ",paraId:16,tocIndex:6},{value:"default",paraId:16,tocIndex:6},{value:"'union' | 'intersect' | 'diff' | 'default'",paraId:17,tocIndex:7},{value:" ",paraId:17,tocIndex:7},{value:"Default:",paraId:17,tocIndex:7},{value:" ",paraId:17,tocIndex:7},{value:"'default'",paraId:17,tocIndex:7},{value:"Brush select mode",paraId:18,tocIndex:7},{value:"'union'",paraId:19,tocIndex:7},{value:": Keep the current state of the selected elements and add the specified state.",paraId:19,tocIndex:7},{value:"'intersect'",paraId:20,tocIndex:7},{value:": If the selected elements already have the specified state, keep it; otherwise, clearBrush it.",paraId:20,tocIndex:7},{value:"'diff'",paraId:21,tocIndex:7},{value:": Perform a negation operation on the specified state of the selected elements.",paraId:21,tocIndex:7},{value:"'default'",paraId:22,tocIndex:7},{value:": Clear the current state of the selected elements and add the specified state.",paraId:22,tocIndex:7},{value:"(states:",paraId:23,tocIndex:8},{value:" ",paraId:23,tocIndex:8},{value:"Record",paraId:23,tocIndex:8},{value:"<",paraId:23,tocIndex:8},{value:"string",paraId:23,tocIndex:8},{value:",",paraId:23,tocIndex:8},{value:" ",paraId:23,tocIndex:8},{value:"string",paraId:23,tocIndex:8},{value:" ",paraId:23,tocIndex:8},{value:"|",paraId:23,tocIndex:8},{value:" ",paraId:23,tocIndex:8},{value:"string",paraId:23,tocIndex:8},{value:"[]>) =>",paraId:23,tocIndex:8},{value:" ",paraId:23,tocIndex:8},{value:"Record",paraId:23,tocIndex:8},{value:"<",paraId:23,tocIndex:8},{value:"string",paraId:23,tocIndex:8},{value:",",paraId:23,tocIndex:8},{value:" ",paraId:23,tocIndex:8},{value:"string",paraId:23,tocIndex:8},{value:" ",paraId:23,tocIndex:8},{value:"|",paraId:23,tocIndex:8},{value:" ",paraId:23,tocIndex:8},{value:"string",paraId:23,tocIndex:8},{value:"[]>",paraId:23,tocIndex:8},{value:"Callback when brush select elements.",paraId:24,tocIndex:8},{value:"string",paraId:25,tocIndex:9},{value:" ",paraId:25,tocIndex:9},{value:"Default:",paraId:25,tocIndex:9},{value:" ",paraId:25,tocIndex:9},{value:"'selected'",paraId:25,tocIndex:9},{value:"The state to switch to when selected.",paraId:26,tocIndex:9},{value:"RectStyleProps",paraId:27,tocIndex:10},{value:"Timely screening.",paraId:28,tocIndex:10},{value:"string[]",paraId:29,tocIndex:11},{value:" ",paraId:29,tocIndex:11},{value:"Default:",paraId:29,tocIndex:11},{value:" ",paraId:29,tocIndex:11},{value:"['shift']",paraId:29,tocIndex:11},{value:"Press this shortcut key to apply brush select with mouse click.",paraId:30,tocIndex:11},{value:" Note that setting ",paraId:31,tocIndex:11},{value:"trigger",paraId:31,tocIndex:11},{value:" to ",paraId:31,tocIndex:11},{value:"['drag']",paraId:31,tocIndex:11},{value:" will cause the ",paraId:31,tocIndex:11},{value:"drag-canvas",paraId:31,tocIndex:11},{value:" behavior to fail. The two cannot be configured at the same time.",paraId:31,tocIndex:11}];}}]);
//# sourceMappingURL=f7439b2d-async.184eab06.js.map