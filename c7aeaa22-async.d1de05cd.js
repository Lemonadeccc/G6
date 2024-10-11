(("undefined"!=typeof globalThis?globalThis:self)["makoChunk_@antv/g6-site"]=("undefined"!=typeof globalThis?globalThis:self)["makoChunk_@antv/g6-site"]||[]).push([["c7aeaa22"],{c7aeaa22:function(a,e,o){"use strict";o.d(e,"__esModule",{value:!0}),o.d(e,"texts",{enumerable:!0,get:function(){return n;}}),o("13713fe1");let n=[{value:"createGraph(\n  {\n    autoFit: 'center',\n    data: {\n      nodes: [\n        {\n          id: 'node1',\n          style: {\n            fill: '#7e3feb',\n            size: 40,\n            label: true,\n            labelText: 'node',\n            labelBackground: false,\n            icon: true,\n            iconSrc: 'https://gw.alipayobjects.com/zos/basement_prod/012bcf4f-423b-4922-8c24-32a89f8c41ce.svg',\n            donuts: [30, 30, 20, 20],\n            donutPalette: ['#1783FF', '#00C9C9', '#F08F56', '#D580FF'],\n            badge: true,\n            badges: [{ placement: 'top-right', text: 'Important', offsetX: -4 }],\n            port: true,\n            ports: [{ placement: 'left' }, { placement: 'right' }],\n            portFill: '#f9f0ff',\n            portR: 3,\n            portStroke: '#7e3feb',\n          },\n        },\n      ],\n    },\n    plugins: [{ type: 'grid-line', size: 30 }],\n  },\n  { width: 600, height: 600 },\n  (gui, graph) => {\n    const global = { type: 'circle' };\n    gui\n      .add(global, 'type', ['circle', 'diamond', 'donut', 'ellipse', 'hexagon', 'image', 'rect', 'star', 'triangle'])\n      .onChange((v) => {\n        graph.updateNodeData([{ id: 'node1', type: v }]);\n        graph.render();\n      });\n\n    const options = {\n      fill: '#7e3feb',\n      fillOpacity: 1,\n      lineWidth: 0,\n      'size[0]': 40,\n      'size[1]': 40,\n      stroke: '#000000',\n      strokeOpacity: 1,\n\n      label: true,\n      labelFill: '000000d9',\n      labelMaxWidth: '200%',\n      labelPadding: 0,\n      labelPlacement: 'bottom',\n      labelText: 'node',\n      labelWordWrap: false,\n      labelOpacity: 1,\n\n      labelBackground: true,\n      labelBackgroundFill: '#fff',\n      labelBackgroundLineDash: 0,\n      labelBackgroundLineWidth: 0,\n      labelBackgroundOpacity: 0.5,\n      labelBackgroundRadius: 0,\n      labelBackgroundStroke: '#fff',\n\n      halo: false,\n      haloLineDash: 0,\n      haloLineWidth: 12,\n      haloStrokeOpacity: 0.25,\n\n      icon: true,\n      iconFill: '#fff',\n      iconFontSize: 16,\n      iconOpacity: 1,\n      iconText: '',\n      iconSrc: 'https://gw.alipayobjects.com/zos/basement_prod/012bcf4f-423b-4922-8c24-32a89f8c41ce.svg',\n      iconWidth: 20,\n      iconHeight: 20,\n\n      badge: true,\n      badgeFill: '000000d9',\n      badgeMaxWidth: '200%',\n      badgeOpacity: 1,\n      badgePadding: 0,\n      badgePlacement: 'top-right',\n      badgeText: 'Important',\n      badgeWordWrap: false,\n\n      badgeBackground: true,\n      badgeBackgroundFill: '#fff',\n      badgeBackgroundLineDash: 0,\n      badgeBackgroundLineWidth: 0,\n      badgeBackgroundOpacity: 0.5,\n      badgeBackgroundRadius: 0,\n      badgeBackgroundStroke: '#fff',\n\n      port: true,\n      portFill: '#f9f0ff',\n      portR: 3,\n      portStroke: '#7e3feb',\n    };\n    const optionFolder = gui.addFolder('node.style');\n\n    optionFolder.add(options, 'size[0]', 0, 100).name('width(size[0])');\n    optionFolder.add(options, 'size[1]', 0, 100).name('height(size[1])');\n    optionFolder.add(options, 'lineWidth', 0, 20);\n    optionFolder.addColor(options, 'fill');\n    optionFolder.add(options, 'fillOpacity', 0, 1);\n    optionFolder.addColor(options, 'stroke');\n    optionFolder.add(options, 'strokeOpacity', 0, 1);\n\n    optionFolder.add(options, 'label').onChange((v) => {\n      [labelFill, labelMaxWidth, labelWordWrap, labelPadding, labelPlacement, labelText, labelOpacity].forEach((i) =>\n        i.show(v),\n      );\n    });\n    const labelFill = optionFolder.addColor(options, 'labelFill').hide();\n    const labelMaxWidth = optionFolder.add(options, 'labelMaxWidth', ['200%', '20px', '80%']).hide();\n    const labelWordWrap = optionFolder.add(options, 'labelWordWrap').hide();\n    const labelPadding = optionFolder.add(options, 'labelPadding', 0, 20).hide();\n    const labelPlacement = optionFolder\n      .add(options, 'labelPlacement', [\n        'left',\n        'right',\n        'top',\n        'bottom',\n        'left-top',\n        'left-bottom',\n        'right-top',\n        'right-bottom',\n        'top-left',\n        'top-right',\n        'bottom-left',\n        'bottom-right',\n        'center',\n      ])\n      .hide();\n    const labelText = optionFolder.add(options, 'labelText').hide();\n    const labelOpacity = optionFolder.add(options, 'labelOpacity', 0, 1).hide();\n\n    const labelBackground = optionFolder.add(options, 'labelBackground').onChange((v) => {\n      [\n        labelBackgroundFill,\n        labelBackgroundStroke,\n        labelBackgroundLineDash,\n        labelBackgroundLineWidth,\n        labelBackgroundOpacity,\n        labelBackgroundRadius,\n      ].forEach((i) => i.show(v));\n    });\n    const labelBackgroundFill = optionFolder.addColor(options, 'labelBackgroundFill').hide();\n    const labelBackgroundStroke = optionFolder.addColor(options, 'labelBackgroundStroke').hide();\n    const labelBackgroundLineDash = optionFolder.add(options, 'labelBackgroundLineDash', 0, 10).hide();\n    const labelBackgroundLineWidth = optionFolder.add(options, 'labelBackgroundLineWidth', 0, 10).hide();\n    const labelBackgroundOpacity = optionFolder.add(options, 'labelBackgroundOpacity', 0, 1).hide();\n    const labelBackgroundRadius = optionFolder.add(options, 'labelBackgroundRadius', 0, 30).hide();\n\n    const halo = optionFolder.add(options, 'halo').onChange((v) => {\n      [haloStrokeOpacity, haloLineDash, haloLineWidth].forEach((i) => i.show(v));\n    });\n    const haloStrokeOpacity = optionFolder.add(options, 'haloStrokeOpacity', 0, 1).hide();\n    const haloLineDash = optionFolder.add(options, 'haloLineDash', 0, 10).hide();\n    const haloLineWidth = optionFolder.add(options, 'haloLineWidth', 0, 10).hide();\n\n    const icon = optionFolder.add(options, 'icon').onChange((v) => {\n      [iconSrc, iconText, iconFill, iconFontSize, iconOpacity, iconWidth, iconHeight].forEach((i) => i.show(v));\n    });\n    const iconSrc = optionFolder.add(options, 'iconSrc').hide();\n    const iconText = optionFolder.add(options, 'iconText').hide();\n    const iconFill = optionFolder.addColor(options, 'iconFill').hide();\n    const iconFontSize = optionFolder.add(options, 'iconFontSize', 12, 20, 1).hide();\n    const iconOpacity = optionFolder.add(options, 'iconOpacity', 0, 1).hide();\n    const iconWidth = optionFolder.add(options, 'iconWidth', 0, 100, 1).hide();\n    const iconHeight = optionFolder.add(options, 'iconHeight', 0, 100, 1).hide();\n\n    const badge = optionFolder.add(options, 'badge').onChange((v) => {\n      [badgeFill, badgeMaxWidth, badgeWordWrap, badgePadding, badgePlacement, badgeText, badgeOpacity].forEach((i) =>\n        i.show(v),\n      );\n    });\n    const badgeFill = optionFolder.addColor(options, 'badgeFill').hide();\n    const badgeMaxWidth = optionFolder.add(options, 'badgeMaxWidth', ['200%', '20px', '80%']).hide();\n    const badgeWordWrap = optionFolder.add(options, 'badgeWordWrap').hide();\n    const badgePadding = optionFolder.add(options, 'badgePadding', 0, 20).hide();\n    const badgePlacement = optionFolder\n      .add(options, 'badgePlacement', [\n        'left',\n        'right',\n        'top',\n        'bottom',\n        'left-top',\n        'left-bottom',\n        'right-top',\n        'right-bottom',\n        'top-left',\n        'top-right',\n        'bottom-left',\n        'bottom-right',\n      ])\n      .hide();\n    const badgeText = optionFolder.add(options, 'badgeText').hide();\n    const badgeOpacity = optionFolder.add(options, 'badgeOpacity', 0, 1).hide();\n\n    const badgeBackground = optionFolder.add(options, 'badgeBackground').onChange((v) => {\n      [\n        badgeBackgroundFill,\n        badgeBackgroundStroke,\n        badgeBackgroundLineDash,\n        badgeBackgroundLineWidth,\n        badgeBackgroundOpacity,\n        badgeBackgroundRadius,\n      ].forEach((i) => i.show(v));\n    });\n    const badgeBackgroundFill = optionFolder.addColor(options, 'badgeBackgroundFill').hide();\n    const badgeBackgroundStroke = optionFolder.addColor(options, 'badgeBackgroundStroke').hide();\n    const badgeBackgroundLineDash = optionFolder.add(options, 'badgeBackgroundLineDash', 0, 10).hide();\n    const badgeBackgroundLineWidth = optionFolder.add(options, 'badgeBackgroundLineWidth', 0, 10).hide();\n    const badgeBackgroundOpacity = optionFolder.add(options, 'badgeBackgroundOpacity', 0, 1).hide();\n    const badgeBackgroundRadius = optionFolder.add(options, 'badgeBackgroundRadius', 0, 30).hide();\n\n    const port = optionFolder.add(options, 'port').onChange((v) => {\n      [portR, portFill, portStroke].forEach((i) => i.show(v));\n    });\n    const portR = optionFolder.add(options, 'portR', 0, 20, 1).hide();\n    const portFill = optionFolder.addColor(options, 'portFill').hide();\n    const portStroke = optionFolder.addColor(options, 'portStroke').hide();\n\n    optionFolder.onChange(({ property, value, object }) => {\n      let updateStyle = { [property]: value };\n      if (['size[0]', 'size[1]'].includes(property)) {\n        updateStyle.size = [object['size[0]'], object['size[1]']];\n      } else if (['badgePlacement', 'badgeText'].includes(property)) {\n        const nodeData = graph.getNodeData('node1').badges;\n        updateStyle.badges = [{ text: object.badgeText, placement: object.badgePlacement }];\n      }\n      graph.updateNodeData([{ id: 'node1', style: updateStyle }]);\n      graph.render();\n    });\n  },\n);\n",paraId:0},{value:"boolean",paraId:1,tocIndex:0},{value:" ",paraId:1,tocIndex:0},{value:"Default:",paraId:1,tocIndex:0},{value:" ",paraId:1,tocIndex:0},{value:"true",paraId:1,tocIndex:0},{value:"\u662F\u5426\u663E\u793A\u8282\u70B9\u5FBD\u6807",paraId:2,tocIndex:0},{value:"string[]",paraId:3,tocIndex:1},{value:"\u5FBD\u6807\u7684\u80CC\u666F\u8272\u677F",paraId:4,tocIndex:1},{value:"NodeBadgeStyleProps",paraId:5,tocIndex:2},{value:"[]",paraId:6,tocIndex:2},{value:"\u5FBD\u6807",paraId:7,tocIndex:2},{value:"\u793A\u4F8B",paraId:8,tocIndex:2},{value:'{\r\n  "badge": true,\r\n  "badges": [\r\n    { "text": "A", "placement": "right-top" },\r\n    { "text": "Important", "placement": "right" },\r\n    { "text": "Notice", "placement": "right-bottom" }\r\n  ],\r\n  "badgePalette": ["#7E92B5", "#F4664A", "#FFBE3A"]\r\n}\n',paraId:9,tocIndex:2},{value:"NodeData",paraId:10,tocIndex:3},{value:"[]",paraId:11,tocIndex:3},{value:"\u5B50\u8282\u70B9\u6570\u636E",paraId:12,tocIndex:3},{value:" \u4EC5\u5728\u6811\u56FE\u4E2D\u751F\u6548\u3002\u5982\u679C\u5F53\u524D\u8282\u70B9\u4E3A\u6536\u8D77\u72B6\u6001\uFF0Cchildren \u53EF\u80FD\u4E3A\u7A7A\uFF0C\u901A\u8FC7 childrenData \u80FD\u591F\u83B7\u53D6\u5B8C\u6574\u7684\u5B50\u5143\u7D20\u6570\u636E",paraId:13,tocIndex:3},{value:"string",paraId:14,tocIndex:4},{value:"[]",paraId:14,tocIndex:4},{value:"\u5B50\u8282\u70B9\u5B9E\u4F8B",paraId:15,tocIndex:4},{value:" \u4EC5\u5728\u6811\u56FE\u4E2D\u751F\u6548",paraId:16,tocIndex:4},{value:"boolean",paraId:17,tocIndex:5},{value:"\u5F53\u524D\u8282\u70B9/\u7EC4\u5408\u662F\u5426\u5C55\u5F00",paraId:18,tocIndex:5},{value:"boolean",paraId:19,tocIndex:6},{value:" ",paraId:19,tocIndex:6},{value:"Default:",paraId:19,tocIndex:6},{value:" ",paraId:19,tocIndex:6},{value:"false",paraId:19,tocIndex:6},{value:"\u662F\u5426\u663E\u793A\u8282\u70B9\u5149\u6655",paraId:20,tocIndex:6},{value:"boolean",paraId:21,tocIndex:7},{value:" ",paraId:21,tocIndex:7},{value:"Default:",paraId:21,tocIndex:7},{value:" ",paraId:21,tocIndex:7},{value:"true",paraId:21,tocIndex:7},{value:"\u662F\u5426\u663E\u793A\u8282\u70B9\u56FE\u6807",paraId:22,tocIndex:7},{value:"boolean",paraId:23,tocIndex:8},{value:" ",paraId:23,tocIndex:8},{value:"Default:",paraId:23,tocIndex:8},{value:" ",paraId:23,tocIndex:8},{value:"true",paraId:23,tocIndex:8},{value:"\u662F\u5426\u663E\u793A\u8282\u70B9\u6807\u7B7E",paraId:24,tocIndex:8},{value:"boolean",paraId:25,tocIndex:9},{value:" ",paraId:25,tocIndex:9},{value:"Default:",paraId:25,tocIndex:9},{value:" ",paraId:25,tocIndex:9},{value:"true",paraId:25,tocIndex:9},{value:"\u662F\u5426\u663E\u793A\u8FDE\u63A5\u6869",paraId:26,tocIndex:9},{value:"NodePortStyleProps",paraId:27,tocIndex:10},{value:"[]",paraId:28,tocIndex:10},{value:"\u8FDE\u63A5\u6869\u914D\u7F6E\u9879\uFF0C\u652F\u6301\u914D\u7F6E\u591A\u4E2A\u8FDE\u63A5\u6869",paraId:29,tocIndex:10},{value:"\u793A\u4F8B",paraId:30,tocIndex:10},{value:'{\r\n  "port": true,\r\n  "ports": [\r\n    {\r\n      "key": "top",\r\n      "placement": [0.5, 0],\r\n      "r": 4,\r\n      "stroke": "#31d0c6",\r\n      "fill": "#fff"\r\n    },\r\n    {\r\n      "key": "bottom",\r\n      "placement": [0.5, 1],\r\n      "r": 4,\r\n      "stroke": "#31d0c6",\r\n      "fill": "#fff"\r\n    }\r\n  ]\r\n}\n',paraId:31,tocIndex:10},{value:"number | [number, number] | Float32Array | [number, number, number]",paraId:32,tocIndex:11},{value:"\u8282\u70B9\u5927\u5C0F\uFF0C\u5FEB\u6377\u8BBE\u7F6E\u8282\u70B9\u5BBD\u9AD8",paraId:33,tocIndex:11},{value:"\u82E5\u503C\u4E3A\u6570\u5B57\uFF0C\u5219\u8868\u793A\u8282\u70B9\u7684\u5BBD\u5EA6\u3001\u9AD8\u5EA6\u4EE5\u53CA\u6DF1\u5EA6\u76F8\u540C\u4E3A\u6307\u5B9A\u503C",paraId:34,tocIndex:11},{value:"\u82E5\u503C\u4E3A\u6570\u7EC4\uFF0C\u5219\u6309\u6570\u7EC4\u5143\u7D20\u4F9D\u6B21\u8868\u793A\u8282\u70B9\u7684\u5BBD\u5EA6\u3001\u9AD8\u5EA6\u4EE5\u53CA\u6DF1\u5EA6",paraId:35,tocIndex:11},{value:"number",paraId:36,tocIndex:12},{value:"x \u5750\u6807",paraId:37,tocIndex:12},{value:"number",paraId:38,tocIndex:13},{value:"y \u5750\u6807",paraId:39,tocIndex:13},{value:"number",paraId:40,tocIndex:14},{value:"z \u5750\u6807",paraId:41,tocIndex:14},{value:"TextStyleProps",paraId:42},{value:"\u5F62\u5982 icon{TextStyleProps} \u7684\u8868\u8FBE\u5F0F\u8868\u793A\u5728 TextStyleProps \u5C5E\u6027\u540D\u524D\u4EE5\u5C0F\u9A7C\u5CF0\u5F62\u5F0F\u52A0\u4E0A icon \u524D\u7F00",paraId:42},{value:"TextStyleProps \u5305\u542B\u4EE5\u4E0B\u5C5E\u6027\uFF1A",paraId:43,tocIndex:16},{value:"fill",paraId:44,tocIndex:16},{value:"fontSize",paraId:44,tocIndex:16},{value:"fontWeight",paraId:44,tocIndex:16},{value:"...",paraId:44,tocIndex:16},{value:"icon{TextStyleProps} \u8868\u793A\u4F60\u9700\u8981\u4F7F\u7528\u4EE5\u4E0B\u5C5E\u6027\u540D\uFF1A",paraId:45,tocIndex:16},{value:"iconFill",paraId:46,tocIndex:16},{value:"iconFontSize",paraId:46,tocIndex:16},{value:"iconFontWeight",paraId:46,tocIndex:16},{value:"...",paraId:46,tocIndex:16},{value:"string | number",paraId:47,tocIndex:17},{value:" ",paraId:47,tocIndex:17},{value:"Default:",paraId:47,tocIndex:17},{value:" ",paraId:47,tocIndex:17},{value:"'200%'",paraId:47,tocIndex:17},{value:"\u6807\u7B7E\u6700\u5927\u5BBD\u5EA6",paraId:48,tocIndex:17},{value:"string: \u8868\u793A\u4EE5\u76F8\u5BF9\u4E8E\u8282\u70B9\u5BBD\u5EA6\u7684\u767E\u5206\u6BD4\u5F62\u5F0F\u5B9A\u4E49\u6700\u5927\u5BBD\u5EA6\u3002\u4F8B\u5982 ",paraId:49,tocIndex:17},{value:'"50%"',paraId:49,tocIndex:17},{value:" \u8868\u793A\u6807\u7B7E\u5BBD\u5EA6\u4E0D\u8D85\u8FC7\u8282\u70B9\u5BBD\u5EA6\u7684\u4E00\u534A",paraId:49,tocIndex:17},{value:"number: \u8868\u793A\u4EE5\u50CF\u7D20\u503C\u4E3A\u5355\u4F4D\u5B9A\u4E49\u6700\u5927\u5BBD\u5EA6\u3002\u4F8B\u5982 ",paraId:50,tocIndex:17},{value:"100",paraId:50,tocIndex:17},{value:" \u8868\u793A\u6807\u7B7E\u7684\u6700\u5927\u5BBD\u5EA6\u4E3A 100 \u50CF\u7D20",paraId:50,tocIndex:17},{value:"number",paraId:51,tocIndex:18},{value:"\u6807\u7B7E\u5728 x \u8F74\u65B9\u5411\u4E0A\u7684\u504F\u79FB\u91CF",paraId:52,tocIndex:18},{value:"number",paraId:53,tocIndex:19},{value:"\u6807\u7B7E\u5728 y \u8F74\u65B9\u5411\u4E0A\u7684\u504F\u79FB\u91CF",paraId:54,tocIndex:19},{value:"'left' | 'right' | 'top' | 'bottom' | 'left-top' | 'left-bottom' | 'right-top' | 'right-bottom' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'center'",paraId:55,tocIndex:20},{value:" ",paraId:55,tocIndex:20},{value:"Default:",paraId:55,tocIndex:20},{value:" ",paraId:55,tocIndex:20},{value:"'bottom'",paraId:55,tocIndex:20},{value:"\u6807\u7B7E\u76F8\u5BF9\u4E8E\u8282\u70B9\uFF08keyShape\uFF09\u7684\u4F4D\u7F6E",paraId:56,tocIndex:20},{value:"boolean",paraId:57,tocIndex:21},{value:"\u662F\u5426\u663E\u793A\u80CC\u666F",paraId:58,tocIndex:21},{value:"number | number[]",paraId:59,tocIndex:22},{value:" ",paraId:59,tocIndex:22},{value:"Default:",paraId:59,tocIndex:22},{value:" ",paraId:59,tocIndex:22},{value:"0",paraId:59,tocIndex:22},{value:"\u6807\u7B7E\u5185\u8FB9\u8DDD",paraId:60,tocIndex:22},{value:"RectStyleProps",paraId:42},{value:"\u5F62\u5982 icon{TextStyleProps} \u7684\u8868\u8FBE\u5F0F\u8868\u793A\u5728 TextStyleProps \u5C5E\u6027\u540D\u524D\u4EE5\u5C0F\u9A7C\u5CF0\u5F62\u5F0F\u52A0\u4E0A icon \u524D\u7F00",paraId:42},{value:"TextStyleProps \u5305\u542B\u4EE5\u4E0B\u5C5E\u6027\uFF1A",paraId:61,tocIndex:24},{value:"fill",paraId:62,tocIndex:24},{value:"fontSize",paraId:62,tocIndex:24},{value:"fontWeight",paraId:62,tocIndex:24},{value:"...",paraId:62,tocIndex:24},{value:"icon{TextStyleProps} \u8868\u793A\u4F60\u9700\u8981\u4F7F\u7528\u4EE5\u4E0B\u5C5E\u6027\u540D\uFF1A",paraId:63,tocIndex:24},{value:"iconFill",paraId:64,tocIndex:24},{value:"iconFontSize",paraId:64,tocIndex:24},{value:"iconFontWeight",paraId:64,tocIndex:24},{value:"...",paraId:64,tocIndex:24},{value:"BaseStyleProps",paraId:42},{value:"\u5F62\u5982 icon{TextStyleProps} \u7684\u8868\u8FBE\u5F0F\u8868\u793A\u5728 TextStyleProps \u5C5E\u6027\u540D\u524D\u4EE5\u5C0F\u9A7C\u5CF0\u5F62\u5F0F\u52A0\u4E0A icon \u524D\u7F00",paraId:42},{value:"TextStyleProps \u5305\u542B\u4EE5\u4E0B\u5C5E\u6027\uFF1A",paraId:65,tocIndex:26},{value:"fill",paraId:66,tocIndex:26},{value:"fontSize",paraId:66,tocIndex:26},{value:"fontWeight",paraId:66,tocIndex:26},{value:"...",paraId:66,tocIndex:26},{value:"icon{TextStyleProps} \u8868\u793A\u4F60\u9700\u8981\u4F7F\u7528\u4EE5\u4E0B\u5C5E\u6027\u540D\uFF1A",paraId:67,tocIndex:26},{value:"iconFill",paraId:68,tocIndex:26},{value:"iconFontSize",paraId:68,tocIndex:26},{value:"iconFontWeight",paraId:68,tocIndex:26},{value:"...",paraId:68,tocIndex:26},{value:"BaseStyleProps",paraId:42},{value:"\u5F62\u5982 icon{TextStyleProps} \u7684\u8868\u8FBE\u5F0F\u8868\u793A\u5728 TextStyleProps \u5C5E\u6027\u540D\u524D\u4EE5\u5C0F\u9A7C\u5CF0\u5F62\u5F0F\u52A0\u4E0A icon \u524D\u7F00",paraId:42},{value:"TextStyleProps \u5305\u542B\u4EE5\u4E0B\u5C5E\u6027\uFF1A",paraId:69,tocIndex:28},{value:"fill",paraId:70,tocIndex:28},{value:"fontSize",paraId:70,tocIndex:28},{value:"fontWeight",paraId:70,tocIndex:28},{value:"...",paraId:70,tocIndex:28},{value:"icon{TextStyleProps} \u8868\u793A\u4F60\u9700\u8981\u4F7F\u7528\u4EE5\u4E0B\u5C5E\u6027\u540D\uFF1A",paraId:71,tocIndex:28},{value:"iconFill",paraId:72,tocIndex:28},{value:"iconFontSize",paraId:72,tocIndex:28},{value:"iconFontWeight",paraId:72,tocIndex:28},{value:"...",paraId:72,tocIndex:28},{value:"TextStyleProps",paraId:42},{value:"\u5F62\u5982 icon{TextStyleProps} \u7684\u8868\u8FBE\u5F0F\u8868\u793A\u5728 TextStyleProps \u5C5E\u6027\u540D\u524D\u4EE5\u5C0F\u9A7C\u5CF0\u5F62\u5F0F\u52A0\u4E0A icon \u524D\u7F00",paraId:42},{value:"TextStyleProps \u5305\u542B\u4EE5\u4E0B\u5C5E\u6027\uFF1A",paraId:73,tocIndex:29},{value:"fill",paraId:74,tocIndex:29},{value:"fontSize",paraId:74,tocIndex:29},{value:"fontWeight",paraId:74,tocIndex:29},{value:"...",paraId:74,tocIndex:29},{value:"icon{TextStyleProps} \u8868\u793A\u4F60\u9700\u8981\u4F7F\u7528\u4EE5\u4E0B\u5C5E\u6027\u540D\uFF1A",paraId:75,tocIndex:29},{value:"iconFill",paraId:76,tocIndex:29},{value:"iconFontSize",paraId:76,tocIndex:29},{value:"iconFontWeight",paraId:76,tocIndex:29},{value:"...",paraId:76,tocIndex:29},{value:"ImageStyleProps",paraId:42},{value:"\u9664\u4E86 z",paraId:77,tocIndex:30},{value:"\u5F62\u5982 icon{TextStyleProps} \u7684\u8868\u8FBE\u5F0F\u8868\u793A\u5728 TextStyleProps \u5C5E\u6027\u540D\u524D\u4EE5\u5C0F\u9A7C\u5CF0\u5F62\u5F0F\u52A0\u4E0A icon \u524D\u7F00",paraId:42},{value:"TextStyleProps \u5305\u542B\u4EE5\u4E0B\u5C5E\u6027\uFF1A",paraId:78,tocIndex:30},{value:"fill",paraId:79,tocIndex:30},{value:"fontSize",paraId:79,tocIndex:30},{value:"fontWeight",paraId:79,tocIndex:30},{value:"...",paraId:79,tocIndex:30},{value:"icon{TextStyleProps} \u8868\u793A\u4F60\u9700\u8981\u4F7F\u7528\u4EE5\u4E0B\u5C5E\u6027\u540D\uFF1A",paraId:80,tocIndex:30},{value:"iconFill",paraId:81,tocIndex:30},{value:"iconFontSize",paraId:81,tocIndex:30},{value:"iconFontWeight",paraId:81,tocIndex:30},{value:"...",paraId:81,tocIndex:30},{value:"TextStyleProps",paraId:42},{value:"\u5F62\u5982 icon{TextStyleProps} \u7684\u8868\u8FBE\u5F0F\u8868\u793A\u5728 TextStyleProps \u5C5E\u6027\u540D\u524D\u4EE5\u5C0F\u9A7C\u5CF0\u5F62\u5F0F\u52A0\u4E0A icon \u524D\u7F00",paraId:42},{value:"TextStyleProps \u5305\u542B\u4EE5\u4E0B\u5C5E\u6027\uFF1A",paraId:82,tocIndex:32},{value:"fill",paraId:83,tocIndex:32},{value:"fontSize",paraId:83,tocIndex:32},{value:"fontWeight",paraId:83,tocIndex:32},{value:"...",paraId:83,tocIndex:32},{value:"icon{TextStyleProps} \u8868\u793A\u4F60\u9700\u8981\u4F7F\u7528\u4EE5\u4E0B\u5C5E\u6027\u540D\uFF1A",paraId:84,tocIndex:32},{value:"iconFill",paraId:85,tocIndex:32},{value:"iconFontSize",paraId:85,tocIndex:32},{value:"iconFontWeight",paraId:85,tocIndex:32},{value:"...",paraId:85,tocIndex:32},{value:"boolean",paraId:86,tocIndex:33},{value:"\u662F\u5426\u663E\u793A\u80CC\u666F",paraId:87,tocIndex:33},{value:"number | number[]",paraId:88,tocIndex:34},{value:" ",paraId:88,tocIndex:34},{value:"Default:",paraId:88,tocIndex:34},{value:" ",paraId:88,tocIndex:34},{value:"0",paraId:88,tocIndex:34},{value:"\u6807\u7B7E\u5185\u8FB9\u8DDD",paraId:89,tocIndex:34},{value:"RectStyleProps",paraId:42},{value:"\u5F62\u5982 icon{TextStyleProps} \u7684\u8868\u8FBE\u5F0F\u8868\u793A\u5728 TextStyleProps \u5C5E\u6027\u540D\u524D\u4EE5\u5C0F\u9A7C\u5CF0\u5F62\u5F0F\u52A0\u4E0A icon \u524D\u7F00",paraId:42},{value:"TextStyleProps \u5305\u542B\u4EE5\u4E0B\u5C5E\u6027\uFF1A",paraId:90,tocIndex:36},{value:"fill",paraId:91,tocIndex:36},{value:"fontSize",paraId:91,tocIndex:36},{value:"fontWeight",paraId:91,tocIndex:36},{value:"...",paraId:91,tocIndex:36},{value:"icon{TextStyleProps} \u8868\u793A\u4F60\u9700\u8981\u4F7F\u7528\u4EE5\u4E0B\u5C5E\u6027\u540D\uFF1A",paraId:92,tocIndex:36},{value:"iconFill",paraId:93,tocIndex:36},{value:"iconFontSize",paraId:93,tocIndex:36},{value:"iconFontWeight",paraId:93,tocIndex:36},{value:"...",paraId:93,tocIndex:36},{value:"CircleStyleProps",paraId:42},{value:"\u9664\u4E86 r",paraId:94,tocIndex:38},{value:"\u5F62\u5982 icon{TextStyleProps} \u7684\u8868\u8FBE\u5F0F\u8868\u793A\u5728 TextStyleProps \u5C5E\u6027\u540D\u524D\u4EE5\u5C0F\u9A7C\u5CF0\u5F62\u5F0F\u52A0\u4E0A icon \u524D\u7F00",paraId:42},{value:"TextStyleProps \u5305\u542B\u4EE5\u4E0B\u5C5E\u6027\uFF1A",paraId:95,tocIndex:38},{value:"fill",paraId:96,tocIndex:38},{value:"fontSize",paraId:96,tocIndex:38},{value:"fontWeight",paraId:96,tocIndex:38},{value:"...",paraId:96,tocIndex:38},{value:"icon{TextStyleProps} \u8868\u793A\u4F60\u9700\u8981\u4F7F\u7528\u4EE5\u4E0B\u5C5E\u6027\u540D\uFF1A",paraId:97,tocIndex:38},{value:"iconFill",paraId:98,tocIndex:38},{value:"iconFontSize",paraId:98,tocIndex:38},{value:"iconFontWeight",paraId:98,tocIndex:38},{value:"...",paraId:98,tocIndex:38},{value:"boolean",paraId:99,tocIndex:39},{value:" ",paraId:99,tocIndex:39},{value:"Default:",paraId:99,tocIndex:39},{value:" ",paraId:99,tocIndex:39},{value:"false",paraId:99,tocIndex:39},{value:"\u8FB9\u662F\u5426\u8FDE\u63A5\u5230\u8FDE\u63A5\u6869\u7684\u4E2D\u5FC3",paraId:100,tocIndex:39},{value:"\u82E5\u4E3A ",paraId:101,tocIndex:39},{value:"true",paraId:101,tocIndex:39},{value:"\uFF0C\u5219\u8FB9\u8FDE\u63A5\u5230\u8FDE\u63A5\u6869\u7684\u4E2D\u5FC3",paraId:101,tocIndex:39},{value:"\u82E5\u4E3A ",paraId:102,tocIndex:39},{value:"false",paraId:102,tocIndex:39},{value:"\uFF0C\u5219\u8FB9\u8FDE\u63A5\u5230\u8FDE\u63A5\u6869\u7684\u8FB9\u7F18",paraId:102,tocIndex:39},{value:"number",paraId:103,tocIndex:40},{value:"\u8FDE\u63A5\u6869\u534A\u5F84",paraId:104,tocIndex:40},{value:"\u5982\u679C\u8BBE\u7F6E\u4E3A ",paraId:105,tocIndex:40},{value:"undefined",paraId:105,tocIndex:40},{value:"\uFF0C\u5219\u8FDE\u63A5\u6869\u88AB\u89C6\u4E3A\u4E00\u4E2A\u70B9\uFF0C\u4E0D\u5728\u753B\u5E03\u4E0A\u663E\u793A\u4F46\u5B58\u5728\uFF0C\u8FB9\u4F1A\u4F18\u5148\u8FDE\u63A5\u5230\u6700\u8FD1\u7684\u8FDE\u63A5\u6869",paraId:105,tocIndex:40},{value:"\u5982\u679C\u8BBE\u7F6E\u4E3A\u6570\u5B57\uFF0C\u5219\u8FDE\u63A5\u6869\u88AB\u89C6\u4E3A\u4E00\u4E2A\u5706\uFF0C\u5706\u7684\u534A\u5F84\u7531\u6B64\u5904\u6307\u5B9A",paraId:106,tocIndex:40}];}}]);
//# sourceMappingURL=c7aeaa22-async.d1de05cd.js.map