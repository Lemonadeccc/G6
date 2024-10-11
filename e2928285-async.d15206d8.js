(("undefined"!=typeof globalThis?globalThis:self)["makoChunk_@antv/g6-site"]=("undefined"!=typeof globalThis?globalThis:self)["makoChunk_@antv/g6-site"]||[]).push([["e2928285"],{e2928285:function(e,a,t){"use strict";t.d(a,"__esModule",{value:!0}),t.d(a,"texts",{enumerable:!0,get:function(){return n;}}),t("aa9ad7f8");let n=[{value:"When the built-in elements of G6 do not meet the requirements, you can expand the G6 element library by customizing elements. Custom elements are an important feature of G6, allowing users to extend based on existing elements through secondary inheritance and encapsulation, or to develop new elements based on ",paraId:0,tocIndex:0},{value:"G Graphics",paraId:0,tocIndex:0},{value:".",paraId:0,tocIndex:0},{value:"Before starting to customize an element, you need to understand some important properties and methods of the G6 element base class:",paraId:1,tocIndex:1},{value:"Record<string, DisplayObject>",paraId:2,tocIndex:3},{value:"The mapping table of all graphics under the current element",paraId:3,tocIndex:3},{value:"Record<string, IAnimation>",paraId:4,tocIndex:4},{value:"The mapping table of all animations under the current element",paraId:5,tocIndex:4},{value:"Create or update graphics, and automatically destroy the graphics when the element is destroyed",paraId:6,tocIndex:6},{value:"upsert(key: string, Ctor: { new (...args: any[]): DisplayObject }, style: Record<string, any>, container: DisplayObject);\n",paraId:7,tocIndex:6},{value:"Parameter",paraId:8,tocIndex:6},{value:"Type",paraId:8,tocIndex:6},{value:"Description",paraId:8,tocIndex:6},{value:"key",paraId:8,tocIndex:6},{value:"string",paraId:8,tocIndex:6},{value:"The key of the graphic, that is, the corresponding key in ",paraId:8,tocIndex:6},{value:"shapeMap",paraId:8,tocIndex:6},{value:". Built-in keys include ",paraId:8,tocIndex:6},{value:"'key'",paraId:8,tocIndex:6},{value:", ",paraId:8,tocIndex:6},{value:"'label'",paraId:8,tocIndex:6},{value:", ",paraId:8,tocIndex:6},{value:"'halo'",paraId:8,tocIndex:6},{value:", ",paraId:8,tocIndex:6},{value:"'icon'",paraId:8,tocIndex:6},{value:", ",paraId:8,tocIndex:6},{value:"'port'",paraId:8,tocIndex:6},{value:", ",paraId:8,tocIndex:6},{value:"'badge'",paraId:8,tocIndex:6},{value:"Ctor",paraId:8,tocIndex:6},{value:"{ new (...args: any[]): DisplayObject }",paraId:8,tocIndex:6},{value:"The constructor for the graphic class",paraId:8,tocIndex:6},{value:"style",paraId:8,tocIndex:6},{value:"Record<string, any>",paraId:8,tocIndex:6},{value:"The style of the graphic",paraId:8,tocIndex:6},{value:"container",paraId:8,tocIndex:6},{value:"DisplayObject",paraId:8,tocIndex:6},{value:"The container where the graphic is mounted",paraId:8,tocIndex:6},{value:"Draw the content of the element",paraId:9,tocIndex:7},{value:"render(style: Record<string, any>, container: Group): void;\n",paraId:10,tocIndex:7},{value:"Parameter",paraId:11,tocIndex:7},{value:"Type",paraId:11,tocIndex:7},{value:"Description",paraId:11,tocIndex:7},{value:"style",paraId:11,tocIndex:7},{value:"Record<string, any>",paraId:11,tocIndex:7},{value:"Element style",paraId:11,tocIndex:7},{value:"container",paraId:11,tocIndex:7},{value:"Group",paraId:11,tocIndex:7},{value:"Container",paraId:11,tocIndex:7},{value:"The element provides the following hook functions, which can be overridden as needed:",paraId:12,tocIndex:8},{value:"onCreate",paraId:13,tocIndex:8},{value:": Triggered after the element is created and the entrance animation is complete.",paraId:13,tocIndex:8},{value:"onUpdate",paraId:13,tocIndex:8},{value:": Triggered after the element is updated and the update animation is complete.",paraId:13,tocIndex:8},{value:"onDestroy",paraId:13,tocIndex:8},{value:": Triggered after the element completes the exit animation and is destroyed.",paraId:13,tocIndex:8},{value:"Use Conventional Attributes",paraId:14,tocIndex:9},{value:"The currently agreed-upon element attributes include:",paraId:15,tocIndex:9},{value:"size",paraId:16,tocIndex:9},{value:": The size of the element",paraId:16,tocIndex:9},{value:"Use the ",paraId:17,tocIndex:9},{value:"getXxxStyle",paraId:17,tocIndex:9},{value:" and ",paraId:17,tocIndex:9},{value:"drawXxxShape",paraId:17,tocIndex:9},{value:" pairing method for graphic drawing",paraId:17,tocIndex:9},{value:"getXxxStyle",paraId:18,tocIndex:9},{value:" is used to obtain the graphic style, and ",paraId:18,tocIndex:9},{value:"drawXxxShape",paraId:18,tocIndex:9},{value:" is used for drawing the graphic. Graphics created in this way support automatic animation execution.",paraId:18,tocIndex:9},{value:"The Graph context can be accessed via ",paraId:19,tocIndex:9},{value:"attributes.context",paraId:19,tocIndex:9},{value:"Inherit from Existing Nodes",paraId:20,tocIndex:11},{value:"To inherit from an existing node, you can either inherit from the base class for all nodes, ",paraId:21,tocIndex:11},{value:"BaseNode",paraId:21,tocIndex:11},{value:", or inherit from an existing node, such as ",paraId:21,tocIndex:11},{value:"Circle",paraId:21,tocIndex:11},{value:".",paraId:21,tocIndex:11},{value:"Below is an example of inheriting from ",paraId:22,tocIndex:11},{value:"BaseNode",paraId:22,tocIndex:11},{value:" to implement a circular node:",paraId:22,tocIndex:11},{value:"import { BaseNode } from '@antv/g6';\nimport { Circle } from '@antv/g';\n\nimport type { Group } from '@antv/g';\nimport type { BaseNodeStyleProps } from '@antv/g6';\n\ninterface ExtendBaseNode extends BaseNodeStyleProps {\n  // Custom Properties\n  radius: number;\n}\n\nclass ExtendBaseNode extends BaseNode {\n  protected getKeyStyle(attributes: Required<ExtendBaseNode>) {\n    return { ...super.getKeyStyle(attributes), r: attributes.radius };\n  }\n\n  // Override Methods\n  protected drawKeyShape(attributes: Required<ExtendBaseNode>, container: Group) {\n    // Custom Drawing Logic, Create a G.Circle\n    return this.upsert('key', Circle, this.getKeyStyle(attributes), container);\n  }\n}\n",paraId:23,tocIndex:11},{value:"Below is an example that inherits from ",paraId:24,tocIndex:11},{value:"Circle",paraId:24,tocIndex:11},{value:", adding a text segment to the circular node:",paraId:24,tocIndex:11},{value:"import { Circle, subStyleProps } from '@antv/g6';\nimport { Text } from '@antv/g';\n\nimport type { Group } from '@antv/g';\nimport type { CircleStyleProps } from '@antv/g6';\n\ninterface ExtendCircleStyleProps extends CircleStyleProps {\n  // Custom Properties\n  paragraph: string;\n}\n\nclass ExtendCircle extends Circle {\n  protected getTextStyle(attributes: Required<ExtendCircleStyleProps>) {\n    // Obtain style properties that start with 'paragraph', such as 'paragraphFontSize'\n    const paragraphStyle = subStyleProps(attributes, 'paragraph');\n    return { ...paragraphStyle, text: attributes.paragraph };\n  }\n\n  protected drawTextShape(attributes: Required<ExtendCircleStyleProps>, container: Group) {\n    // Custom drawing logic, create a G.Text\n    return this.upsert('text', Text, this.getTextStyle(attributes), container);\n  }\n\n  protected render(attrs: Required<ExtendCircleStyleProps>, container: Group) {\n    super.render(attrs, container);\n    // Invoke custom drawing logic\n    this.drawTextShape(attrs, container);\n  }\n}\n",paraId:25,tocIndex:11},{value:"New Development",paraId:26,tocIndex:11},{value:"If you want to develop a new node based on the G graph, you can directly inherit from ",paraId:27,tocIndex:11},{value:"G.Shape",paraId:27,tocIndex:11},{value:".",paraId:27,tocIndex:11},{value:"To adopt a new development approach, you need to fully understand the implementation logic of G6 elements and manage the lifecycle, animations, and other aspects of the elements yourself.\nThe customization process is relatively complex, so it is recommended to first consider extending existing nodes.",paraId:28},{value:"Here is a simple example of inheriting from",paraId:29},{value:" G.Shape",paraId:29},{value:" to implement a circular node:",paraId:29},{value:" \n",paraId:30},{value:"Example",paraId:30},{value:"import { CustomElement, Circle } from '@antv/g';\n\nimport type { BaseStyleProps, DisplayObjectConfig } from '@antv/g';\n\ninterface CustomCircleStyleProps extends BaseStyleProps {\n  radius: number;\n}\n\nclass CustomCircle extends CustomElement {\n  constructor(options: DisplayObjectConfig<CustomCircleStyleProps>) {\n    super(options);\n    this.render();\n  }\n\n  protected render() {\n    const { radius } = this.attributes;\n    const circle = new Circle({\n      style: {\n        ...this.attributes,\n        x: 0,\n        y: 0,\n        r: radius,\n      },\n    });\n    this.appendChild(circle);\n  }\n}\n",paraId:31},{value:"To implement graphical animation, you need to override the ",paraId:32},{value:"animate",paraId:32},{value:" method to perform the animation operations on the ",paraId:32},{value:"CustomCircle",paraId:32},{value:" onto the ",paraId:32},{value:"Circle",paraId:32},{value:" graphic:",paraId:32},{value:"import type {} from '@antv/g';\n\nclass CustomCircle extends CustomElement {\n  // ...Other logic.\n\n  // Overriding the `animate` method.\n  // Here, the animation of the `r` attribute on the `circle` is implemented\n  animate(keyframes: Keyframe[], options?: number | KeyframeAnimationOptions): IAnimation | null {\n    const circle = this.children[0] as Circle;\n    const circleKeyframes = keyframes.map(({ radius }) => ({ r: radius }));\n    circle.animate(circleKeyframes, options);\n  }\n}\n",paraId:33},{value:"You can register by using the ",paraId:34,tocIndex:12},{value:"register",paraId:34,tocIndex:12},{value:" method provided by G6.For more details",paraId:34,tocIndex:12},{value:"Register Node",paraId:35,tocIndex:12},{value:"Custom nodes can be used and configured in ",paraId:36,tocIndex:13},{value:"data",paraId:36,tocIndex:13},{value:" or ",paraId:36,tocIndex:13},{value:"node style mapping",paraId:36,tocIndex:13},{value:".For more details,",paraId:36,tocIndex:13},{value:"Configure Node",paraId:37,tocIndex:13},{value:"Customizing edges is similar to customizing nodes. You can either inherit existing edges or develop a completely new edge based on the G graph.",paraId:38,tocIndex:15},{value:"Here is an example of implementing a custom straight-line edge by inheriting from ",paraId:39,tocIndex:15},{value:"BaseEdge",paraId:39,tocIndex:15},{value:":",paraId:39,tocIndex:15},{value:"import { BaseEdge } from '@antv/g6';\nimport { Line } from '@antv/g';\n\nimport type { BaseNodeStyleProps } from '@antv/g6';\n\nclass ExtendBaseEdge extends BaseEdge {\n  // Override the getKeyStyle method\n  protected getKeyStyle(attributes: Required<BaseNodeStyleProps>) {\n    return { ...super.getKeyStyle(attributes), lineWidth: 2, stroke: '#000' };\n  }\n\n  // Implement the getKeyPath method\n  protected getKeyPath(attributes) {\n    const { sourceNode, targetNode } = this;\n    const [x1, y1] = sourceNode.getPosition();\n    const [x2, y2] = targetNode.getPosition();\n\n    return [\n      ['M', x1, y1],\n      ['L', x2, y2],\n    ];\n  }\n}\n",paraId:40,tocIndex:15},{value:"You can register by using the ",paraId:41,tocIndex:16},{value:"register",paraId:41,tocIndex:16},{value:" method provided by G6. For more details, see ",paraId:41,tocIndex:16},{value:"Register Edge",paraId:42,tocIndex:16},{value:".",paraId:41,tocIndex:16},{value:"Custom edges can be used and configured in ",paraId:43,tocIndex:17},{value:"data",paraId:43,tocIndex:17},{value:" or ",paraId:43,tocIndex:17},{value:"edge style mapping",paraId:43,tocIndex:17},{value:". For more details, see ",paraId:43,tocIndex:17},{value:"Configure Edge",paraId:44,tocIndex:17},{value:".",paraId:43,tocIndex:17},{value:"Combo in G6 inherit from ",paraId:45,tocIndex:18},{value:"BaseNode",paraId:45,tocIndex:18},{value:", but there are certain differences: Combo have two states, namely expanded (",paraId:45,tocIndex:18},{value:"Expanded",paraId:45,tocIndex:18},{value:") and collapsed (",paraId:45,tocIndex:18},{value:"Collapsed",paraId:45,tocIndex:18},{value:"), and thus the implementation is also different.",paraId:45,tocIndex:18},{value:"The way to customize Combo is similar to customizing nodes. You can either inherit from existing Combo or develop entirely new Combo based on G Graphics.",paraId:46,tocIndex:19},{value:"Here is an example that inherits from ",paraId:47,tocIndex:19},{value:"BaseCombo",paraId:47,tocIndex:19},{value:" to implement a custom rectangular combo:",paraId:47,tocIndex:19},{value:"import { BaseCombo } from '@antv/g6';\nimport { Rect } from '@antv/g';\n\nimport type { BaseComboStyleProps } from '@antv/g6';\n\nclass ExtendBaseCombo extends BaseCombo {\n  protected getKeyStyle(attributes: Required<BaseComboStyleProps>) {\n    const [width, height] = this.getKeySize(attributes);\n    return { ...super.getKeyStyle(attributes), anchor: [0.5, 0.5], width, height };\n  }\n\n  // Implement the drawKeyShape method\n  protected drawKeyShape(attributes: Required<BaseComboStyleProps>, container: Group) {\n    return this.upsert('key', Rect, this.getKeyStyle(attributes), container);\n  }\n}\n",paraId:48,tocIndex:19},{value:"You can register by using the ",paraId:49,tocIndex:20},{value:"register",paraId:49,tocIndex:20},{value:" method provided by G6. For more details, see ",paraId:49,tocIndex:20},{value:"Register Combo",paraId:50,tocIndex:20},{value:"Custom Combo can be used and configured in ",paraId:51,tocIndex:21},{value:"data",paraId:51,tocIndex:21},{value:" or ",paraId:51,tocIndex:21},{value:"combo style mapping",paraId:51,tocIndex:21},{value:". For more details, see ",paraId:51,tocIndex:21},{value:"Configure Combo",paraId:52,tocIndex:21}];}}]);
//# sourceMappingURL=e2928285-async.d15206d8.js.map