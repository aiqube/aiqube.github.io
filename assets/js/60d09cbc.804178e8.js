"use strict";(self.webpackChunkaiqube_github_io=self.webpackChunkaiqube_github_io||[]).push([[968],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),d=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=d(a),m=n,h=p["".concat(s,".").concat(m)]||p[m]||c[m]||i;return a?r.createElement(h,l(l({ref:t},u),{},{components:a})):r.createElement(h,l({ref:t},u))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var d=2;d<i;d++)l[d]=a[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>l});var r=a(7294),n=a(6010);const i="tabItem_Ymn6";function l(e){let{children:t,hidden:a,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(i,l),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>m});var r=a(7462),n=a(7294),i=a(6010),l=a(2389),o=a(7392),s=a(7094),d=a(2466);const u="tabList__CuJ",c="tabItem_LNqP";function p(e){var t;const{lazy:a,block:l,defaultValue:p,values:m,groupId:h,className:b}=e,f=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=m??f.map((e=>{let{props:{value:t,label:a,attributes:r}}=e;return{value:t,label:a,attributes:r}})),k=(0,o.l)(v,((e,t)=>e.value===t.value));if(k.length>0)throw new Error(`Docusaurus error: Duplicate values "${k.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===p?p:p??(null==(t=f.find((e=>e.props.default)))?void 0:t.props.value)??f[0].props.value;if(null!==g&&!v.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:T}=(0,s.U)(),[N,O]=(0,n.useState)(g),P=[],{blockElementScrollPositionUntilNextRender:C}=(0,d.o5)();if(null!=h){const e=y[h];null!=e&&e!==N&&v.some((t=>t.value===e))&&O(e)}const I=e=>{const t=e.currentTarget,a=P.indexOf(t),r=v[a].value;r!==N&&(C(t),O(r),null!=h&&T(h,String(r)))},E=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{const t=P.indexOf(e.currentTarget)+1;a=P[t]??P[0];break}case"ArrowLeft":{const t=P.indexOf(e.currentTarget)-1;a=P[t]??P[P.length-1];break}}null==(t=a)||t.focus()};return n.createElement("div",{className:(0,i.Z)("tabs-container",u)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":l},b)},v.map((e=>{let{value:t,label:a,attributes:l}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>P.push(e),onKeyDown:E,onFocus:I,onClick:I},l,{className:(0,i.Z)("tabs__item",c,null==l?void 0:l.className,{"tabs__item--active":N===t})}),a??t)}))),a?(0,n.cloneElement)(f.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function m(e){const t=(0,l.Z)();return n.createElement(p,(0,r.Z)({key:String(t)},e))}},865:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>d,toc:()=>c});var r=a(7462),n=(a(7294),a(3905)),i=a(5488),l=a(5162);const o={sidebar_position:4},s="OCR - Thai ID Card",d={unversionedId:"API/ocr-thai-id-card",id:"API/ocr-thai-id-card",title:"OCR - Thai ID Card",description:"OCR - Thai ID Card",source:"@site/docs/API/ocr-thai-id-card.md",sourceDirName:"API",slug:"/API/ocr-thai-id-card",permalink:"/API/ocr-thai-id-card",draft:!1,editUrl:"https://github.com/aiqube/aiqube.github.io/tree/main/docs/API/ocr-thai-id-card.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Face Recognition",permalink:"/API/face-recognition"},next:{title:"OCR - Passport",permalink:"/API/ocr-passport"}},u={},c=[{value:"OCR - Thai ID Card",id:"ocr---thai-id-card-1",level:2},{value:"HTTP Request",id:"http-request",level:3},{value:"HTTP Header",id:"http-header",level:3},{value:"POST data example",id:"post-data-example",level:3},{value:"POST data parameter",id:"post-data-parameter",level:3},{value:"Example request",id:"example-request",level:3}],p={toc:c};function m(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"ocr---thai-id-card"},"OCR - Thai ID Card"),(0,n.kt)("h2",{id:"ocr---thai-id-card-1"},"OCR - Thai ID Card"),(0,n.kt)("p",null,"OCR Thaiid API service that can Extract information from Thai id photo both front and back side."),(0,n.kt)("h3",{id:"http-request"},"HTTP Request"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"POST /aiqube/thaiid-ocr/v1/thaiid")),(0,n.kt)("h3",{id:"http-header"},"HTTP Header"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"X-API-KEY"),(0,n.kt)("td",{parentName:"tr",align:null},"API key authentication")))),(0,n.kt)("h3",{id:"post-data-example"},"POST data example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "image": base64_encoded(data),\n  "side": "front"\n}\n')),(0,n.kt)("h3",{id:"post-data-parameter"},"POST data parameter"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"image"),(0,n.kt)("td",{parentName:"tr",align:null},"image contain thai id card that encode with ",(0,n.kt)("inlineCode",{parentName:"td"},"base64")," method")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"side"),(0,n.kt)("td",{parentName:"tr",align:null},"Specific side for recognition ",(0,n.kt)("inlineCode",{parentName:"td"},"front")," for font side, ",(0,n.kt)("inlineCode",{parentName:"td"},"back")," for back side (default is ",(0,n.kt)("inlineCode",{parentName:"td"},"front"),")")))),(0,n.kt)("h3",{id:"example-request"},"Example request"),(0,n.kt)(i.Z,{mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"import base64\nimport requests\n\nwith open(\"image.jpg\", \"rb\") as image_file:\n    img_data = base64.b64encode(image_file.read())\n\nheaders = {\n  'X-API-KEY': 'XXXX',\n  'Content-Type': 'application/json'\n}\nurl = API_ENDPOINT\n\npayload = {'image': img_data.decode('utf-8'), 'side': 'front'}\nresponse = requests.request(\"POST\", url, headers=headers, json=payload)\ndata = response.json()\n")))))}m.isMDXComponent=!0}}]);