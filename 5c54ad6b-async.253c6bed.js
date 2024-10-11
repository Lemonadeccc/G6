(("undefined"!=typeof globalThis?globalThis:self)["makoChunk_@antv/g6-site"]=("undefined"!=typeof globalThis?globalThis:self)["makoChunk_@antv/g6-site"]||[]).push([["5c54ad6b"],{"5c54ad6b":function(e,a,o){"use strict";o.d(a,"__esModule",{value:!0}),o.d(a,"texts",{enumerable:!0,get:function(){return n;}}),o("363c1fa5");let n=[{value:"createGraph(\n  {\n    data: { nodes: [{ id: 'node-1' }] },\n    layout: { type: 'force' },\n    behaviors: [\n      {\n        type: 'zoom-canvas',\n        key: 'zoom-canvas',\n      },\n    ],\n    node: { style: { fill: '#873bf4' } },\n    edge: { style: { stroke: '#8b9baf' } },\n    plugins: [{ type: 'grid-line', size: 30 }],\n  },\n  { width: 600, height: 300 },\n  (gui, graph) => {\n    const options = {\n      key: 'zoom-canvas',\n      type: 'zoom-canvas',\n      animation: true,\n      enable: true,\n      sensitivity: 1,\n      trigger: 'Use wheel by default',\n    };\n    const optionFolder = gui.addFolder('ZoomCanvas Options');\n    optionFolder.add(options, 'type').disable(true);\n    optionFolder.add(options, 'animation');\n    optionFolder.add(options, 'enable');\n    optionFolder.add(options, 'sensitivity', 0, 10, 1);\n    optionFolder.add(options, 'trigger', {\n      'Use wheel by default': [],\n      'Control+Wheel': ['Control'],\n      'zoomIn:Ctrl+1 zoomOut:Ctrl+2 reset:Ctrl+0': {\n        zoomIn: ['Control', '1'],\n        zoomOut: ['Control', '2'],\n        reset: ['Control', '0'],\n      },\n    });\n    optionFolder.onChange(({ property, value }) => {\n      graph.updateBehavior({\n        key: 'zoom-canvas',\n        [property]: value,\n      });\n      graph.render();\n    });\n  },\n);\n",paraId:0},{value:"string",paraId:1,tocIndex:1},{value:"Behavior key, that is, the unique identifier",paraId:2,tocIndex:1},{value:" Used to identify the behavior for further operations",paraId:3,tocIndex:1},{value:"// Update behavior options\r\ngraph.updateBehavior({key: 'key', ...});\n",paraId:4,tocIndex:1},{value:"Required",paraId:5,tocIndex:1},{value:"string",paraId:6,tocIndex:2},{value:"Behavior type",paraId:7,tocIndex:2},{value:"ViewportAnimationEffectTiming",paraId:8,tocIndex:3},{value:" ",paraId:9,tocIndex:3},{value:"Default:",paraId:9,tocIndex:3},{value:" ",paraId:9,tocIndex:3},{value:"' duration: 200 '",paraId:9,tocIndex:3},{value:"Whether to enable the animation of zooming",paraId:10,tocIndex:3},{value:"boolean | ((event:",paraId:11,tocIndex:4},{value:" ",paraId:11,tocIndex:4},{value:"IWheelEvent",paraId:12,tocIndex:4},{value:" ",paraId:11,tocIndex:4},{value:"|",paraId:11,tocIndex:4},{value:" ",paraId:11,tocIndex:4},{value:"IKeyboardEvent",paraId:13,tocIndex:4},{value:") => boolean)",paraId:11,tocIndex:4},{value:" ",paraId:11,tocIndex:4},{value:"Default:",paraId:11,tocIndex:4},{value:" ",paraId:11,tocIndex:4},{value:"true",paraId:11,tocIndex:4},{value:"Whether to enable the function of zooming the canvas",paraId:14,tocIndex:4},{value:"() => void",paraId:15,tocIndex:5},{value:"Callback when zooming is completed",paraId:16,tocIndex:5},{value:"boolean",paraId:17,tocIndex:6},{value:" ",paraId:17,tocIndex:6},{value:"Default:",paraId:17,tocIndex:6},{value:" ",paraId:17,tocIndex:6},{value:"true",paraId:17,tocIndex:6},{value:"Whether to prevent the default event",paraId:18,tocIndex:6},{value:"number",paraId:19,tocIndex:7},{value:" ",paraId:19,tocIndex:7},{value:"Default:",paraId:19,tocIndex:7},{value:" ",paraId:19,tocIndex:7},{value:"1",paraId:19,tocIndex:7},{value:"Zoom sensitivity",paraId:20,tocIndex:7},{value:"string[]",paraId:21,tocIndex:8},{value:" ",paraId:21,tocIndex:8},{value:"| { zoomIn:",paraId:21,tocIndex:8},{value:" ",paraId:21,tocIndex:8},{value:"string[]",paraId:21,tocIndex:8},{value:"; zoomOut:",paraId:21,tocIndex:8},{value:" ",paraId:21,tocIndex:8},{value:"string[]",paraId:21,tocIndex:8},{value:"; reset:",paraId:21,tocIndex:8},{value:" ",paraId:21,tocIndex:8},{value:"string[]",paraId:21,tocIndex:8},{value:"; }",paraId:21,tocIndex:8},{value:"The way to trigger zoom",paraId:22,tocIndex:8},{value:"ShortcutKey: Combination shortcut key, **default to zoom with the mouse wheel**, ['Control'] means zooming when holding down the Control key and scrolling the mouse wheel",paraId:23,tocIndex:8},{value:"CombinationKey: Zoom shortcut key, such as { zoomIn: ['Control', '+'], zoomOut: ['Control', '-'], reset: ['Control', '0'] }",paraId:24,tocIndex:8},{value:" Destroy zoom canvas",paraId:25,tocIndex:10},{value:"destroy(): void;\n",paraId:26,tocIndex:10}];}}]);
//# sourceMappingURL=5c54ad6b-async.253c6bed.js.map