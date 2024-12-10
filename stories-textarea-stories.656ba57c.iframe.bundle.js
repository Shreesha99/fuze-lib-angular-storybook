(self.webpackChunkfuze_lib_storybook=self.webpackChunkfuze_lib_storybook||[]).push([[605],{"./node_modules/css-loader/dist/runtime/api.js":module=>{"use strict";module.exports=function(cssWithMappingToString){var list=[];return list.toString=function toString(){return this.map((function(item){var content="",needLayer=void 0!==item[5];return item[4]&&(content+="@supports (".concat(item[4],") {")),item[2]&&(content+="@media ".concat(item[2]," {")),needLayer&&(content+="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {")),content+=cssWithMappingToString(item),needLayer&&(content+="}"),item[2]&&(content+="}"),item[4]&&(content+="}"),content})).join("")},list.i=function i(modules,media,dedupe,supports,layer){"string"==typeof modules&&(modules=[[null,modules,void 0]]);var alreadyImportedModules={};if(dedupe)for(var k=0;k<this.length;k++){var id=this[k][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _k=0;_k<modules.length;_k++){var item=[].concat(modules[_k]);dedupe&&alreadyImportedModules[item[0]]||(void 0!==layer&&(void 0===item[5]||(item[1]="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {").concat(item[1],"}")),item[5]=layer),media&&(item[2]?(item[1]="@media ".concat(item[2]," {").concat(item[1],"}"),item[2]=media):item[2]=media),supports&&(item[4]?(item[1]="@supports (".concat(item[4],") {").concat(item[1],"}"),item[4]=supports):item[4]="".concat(supports)),list.push(item))}},list}},"./node_modules/css-loader/dist/runtime/noSourceMaps.js":module=>{"use strict";module.exports=function(i){return i[1]}},"./src/stories/textarea.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>textarea_stories});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var textarea_componentngResource=__webpack_require__("./src/stories/textarea/textarea.component.css?ngResource"),textarea_componentngResource_default=__webpack_require__.n(textarea_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs");let TextareaComponent=class TextareaComponent{backgroundColor="#ffffff";borderRadius="5px";width="100%";height="100px";placeholder="Enter your text here...";maxLength=500;resizable=!0;textAlign="left";showCharCount=!0;textContent="";ngOnChanges(changes){changes.maxLength&&this.textContent.length>this.maxLength&&(this.textContent=this.textContent.substring(0,this.maxLength))}onTextInput(event){const target=event.target;this.textContent=target.value}static propDecorators={backgroundColor:[{type:core.Input}],borderRadius:[{type:core.Input}],width:[{type:core.Input}],height:[{type:core.Input}],placeholder:[{type:core.Input}],maxLength:[{type:core.Input}],resizable:[{type:core.Input}],textAlign:[{type:core.Input}],showCharCount:[{type:core.Input}]}};TextareaComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"lib-textarea",standalone:!0,imports:[common.CommonModule],template:'<div class="textarea-wrapper" [style.width]="width">\r\n    <textarea\r\n      class="textarea"\r\n      [ngStyle]="{\r\n        backgroundColor: backgroundColor,\r\n        borderRadius: borderRadius,\r\n        height: height,\r\n        textAlign: textAlign,\r\n        resize: resizable ? \'both\' : \'none\'\r\n      }"\r\n      [placeholder]="placeholder"\r\n      maxlength="maxLength"\r\n      (input)="onTextInput($event)"\r\n    ></textarea>\r\n    <div *ngIf="showCharCount" class="char-count">\r\n      {{ textContent.length }}/{{ maxLength }}\r\n    </div>\r\n  </div>\r\n  ',styles:[textarea_componentngResource_default()]})],TextareaComponent);const textarea_stories={title:"Form Controls/Textarea",component:TextareaComponent,tags:["autodocs"],parameters:{docs:{description:{component:'\nThe **Textarea Component** provides a customizable text input area with dynamic styling and features. \n\n### Features\n- **Dynamic styling**:\n  - `backgroundColor`: Sets the background color of the textarea.\n  - `height` and `width`: Control the dimensions of the textarea.\n  - `borderRadius`: Adjusts the corner rounding of the textarea.\n- **Character limit**:\n  - `maxLength` sets the maximum number of characters allowed.\n  - Displays the character count dynamically.\n- **Placeholder support**: Set placeholder text for guidance.\n- **Event handling**: Emits text changes through the `textChange` event for integration.\n- **Focus state**: Highlights the textarea with a glow effect when focused.\n\n### Usage Example\n```html\n<lib-textarea\n  [height]="\'150px\'"\n  [width]="\'100%\'"\n  [backgroundColor]="\'#DC3E4E\'"\n  [borderRadius]="\'5px\'"\n  [maxLength]="200"\n  [placeholder]="\'Type your text here...\'"\n  (textChange)="handleTextChange($event)">\n</lib-textarea>\n```\n        '}}}},Default=(args=>({component:TextareaComponent,props:args})).bind({});Default.args={height:"150px",width:"100%",backgroundColor:"#fff",borderRadius:"5px",maxLength:200,placeholder:"Type your text here..."};const __namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => ({\n  component: TextareaComponent,\n  props: args\n})",...Default.parameters?.docs?.source}}}},"./src/stories/textarea/textarea.component.css?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,"/* Wrapper for Textarea */\n.textarea-wrapper {\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n    font-family: 'Montserrat', 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  }\n  \n  /* Textarea Styling */\n  .textarea {\n    width: 100%;\n    padding: 10px;\n    font-family: inherit;\n    font-size: 14px;\n    color: #000; /* White text color to match accordion theme */\n    background-color: #DC3E4E; /* Match accordion header background */\n    border: 1px solid #ddd; /* Subtle border */\n    border-radius: 5px; /* Match accordion item border radius */\n    outline: none;\n    transition: all 0.3s ease-in-out;\n    resize: vertical; /* Allow vertical resizing only */\n    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n    text-align: left;\n  }\n  \n  /* Textarea Focus */\n  .textarea:focus {\n    border-color: #DC3E4E; /* Highlight with a blue border */\n    box-shadow: 0 0 5px rgb(220, 62, 78); /* Blue focus glow */\n  }\n  \n  /* Placeholder Text */\n  .textarea::placeholder {\n    color: #000; /* Placeholder color matches text color */\n    opacity: 0.7; /* Slightly faded */\n  }\n  \n  /* Character Count Display */\n  .char-count {\n    font-size: 12px;\n    color: #000; /* Match the accordion header text color */\n    text-align: right;\n  }\n  ",""]),module.exports=___CSS_LOADER_EXPORT___.toString()}}]);