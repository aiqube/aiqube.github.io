"use strict";(self.webpackChunkaiqube_github_io=self.webpackChunkaiqube_github_io||[]).push([[8164],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),p=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(a),m=n,b=d["".concat(i,".").concat(m)]||d[m]||c[m]||l;return a?r.createElement(b,o(o({ref:t},u),{},{components:a})):r.createElement(b,o({ref:t},u))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var p=2;p<l;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>o});var r=a(7294),n=a(6010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:a,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(l,o),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>m});var r=a(7462),n=a(7294),l=a(6010),o=a(2389),s=a(7392),i=a(7094),p=a(2466);const u="tabList__CuJ",c="tabItem_LNqP";function d(e){var t;const{lazy:a,block:o,defaultValue:d,values:m,groupId:b,className:h}=e,f=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=m??f.map((e=>{let{props:{value:t,label:a,attributes:r}}=e;return{value:t,label:a,attributes:r}})),y=(0,s.l)(v,((e,t)=>e.value===t.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===d?d:d??(null==(t=f.find((e=>e.props.default)))?void 0:t.props.value)??f[0].props.value;if(null!==g&&!v.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:P}=(0,i.U)(),[O,T]=(0,n.useState)(g),N=[],{blockElementScrollPositionUntilNextRender:E}=(0,p.o5)();if(null!=b){const e=k[b];null!=e&&e!==O&&v.some((t=>t.value===e))&&T(e)}const w=e=>{const t=e.currentTarget,a=N.indexOf(t),r=v[a].value;r!==O&&(E(t),T(r),null!=b&&P(b,String(r)))},x=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{const t=N.indexOf(e.currentTarget)+1;a=N[t]??N[0];break}case"ArrowLeft":{const t=N.indexOf(e.currentTarget)-1;a=N[t]??N[N.length-1];break}}null==(t=a)||t.focus()};return n.createElement("div",{className:(0,l.Z)("tabs-container",u)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":o},h)},v.map((e=>{let{value:t,label:a,attributes:o}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:e=>N.push(e),onKeyDown:x,onFocus:w,onClick:w},o,{className:(0,l.Z)("tabs__item",c,null==o?void 0:o.className,{"tabs__item--active":O===t})}),a??t)}))),a?(0,n.cloneElement)(f.filter((e=>e.props.value===O))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==O})))))}function m(e){const t=(0,o.Z)();return n.createElement(d,(0,r.Z)({key:String(t)},e))}},9830:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>p,toc:()=>c});var r=a(7462),n=(a(7294),a(3905)),l=a(5488),o=a(5162);const s={sidebar_position:5},i="OCR - Passport",p={unversionedId:"API/ocr-passport",id:"API/ocr-passport",title:"OCR - Passport",description:"OCR - Passport",source:"@site/docs/API/ocr-passport.md",sourceDirName:"API",slug:"/API/ocr-passport",permalink:"/API/ocr-passport",draft:!1,editUrl:"https://github.com/aiqube/aiqube.github.io/tree/main/docs/API/ocr-passport.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"OCR - Thai ID Card",permalink:"/API/ocr-thai-id-card"},next:{title:"Thai address utility",permalink:"/API/thai-address-util"}},u={},c=[{value:"OCR - Passport",id:"ocr---passport-1",level:2},{value:"HTTP Request",id:"http-request",level:3},{value:"HTTP Header",id:"http-header",level:3},{value:"POST data example",id:"post-data-example",level:3},{value:"POST data parameter",id:"post-data-parameter",level:3},{value:"Example request",id:"example-request",level:3}],d={toc:c};function m(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"ocr---passport"},"OCR - Passport"),(0,n.kt)("h2",{id:"ocr---passport-1"},"OCR - Passport"),(0,n.kt)("p",null,"OCR Passport API service that can Extract information from passport."),(0,n.kt)("h3",{id:"http-request"},"HTTP Request"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"POST /aiqube/passport-ocr/v1/passport")),(0,n.kt)("h3",{id:"http-header"},"HTTP Header"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"X-API-KEY"),(0,n.kt)("td",{parentName:"tr",align:null},"API key authentication")))),(0,n.kt)("h3",{id:"post-data-example"},"POST data example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "encoded_img": base64_encoded(data)\n}\n')),(0,n.kt)("h3",{id:"post-data-parameter"},"POST data parameter"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"image"),(0,n.kt)("td",{parentName:"tr",align:null},"image contain passport that encode with ",(0,n.kt)("inlineCode",{parentName:"td"},"base64")," method")))),(0,n.kt)("h3",{id:"example-request"},"Example request"),(0,n.kt)(l.Z,{mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"import base64\nimport requests\n\nwith open(\"image.jpg\", \"rb\") as image_file:\n    img_data = base64.b64encode(image_file.read())\n\nheaders = {\n  'X-API-KEY': 'XXXX',\n  'Content-Type': 'application/json'\n}\nurl = API_ENDPOINT\n\npayload = {'encoded_img': img_data.decode('utf-8')}\nresponse = requests.request(\"POST\", url, headers=headers, json=payload)\ndata = response.json()\n")))))}m.isMDXComponent=!0}}]);