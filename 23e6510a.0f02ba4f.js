(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{60:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return b})),t.d(n,"default",(function(){return l}));var a=t(2),r=t(6),o=(t(0),t(87)),i={title:"Persistence",id:"persistence"},c={unversionedId:"advanced/persistence",id:"advanced/persistence",isDocsHomePage:!1,title:"Persistence",description:"Each Bee node is configured to reserve a certain amount of memory on your computer's hard drive to store and serve chunks within their neighbourhood of responsibility for other nodes in the Swarm network. Once this alloted space has been filled, each Bee node delete older chunks to make way for newer ones as they are uploaded by the network.",source:"@site/docs/advanced/persistence.md",permalink:"/docs/advanced/persistence",editUrl:"https://github.com/ethersphere/docs.github.io/blob/master/docs/advanced/persistence.md",sidebar:"Balls",previous:{title:"Track Upload Status",permalink:"/docs/advanced/tags"},next:{title:"SWAP Bandwidth Accounting",permalink:"/docs/advanced/swap"}},b=[{value:"Local Pinning",id:"local-pinning",children:[{value:"Pin During Upload",id:"pin-during-upload",children:[]},{value:"Administrating Pinned Content",id:"administrating-pinned-content",children:[]}]},{value:"Global Pinning",id:"global-pinning",children:[]}],s={rightToc:b};function l(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Each Bee node is configured to reserve a certain amount of memory on your computer's hard drive to store and serve chunks within their ",Object(o.b)("em",{parentName:"p"},"neighbourhood of responsibility")," for other nodes in the Swarm network. Once this alloted space has been filled, each Bee node delete older chunks to make way for newer ones as they are uploaded by the network."),Object(o.b)("p",null,"Each time a chunk is accessed, it is moved back to the end of the deletion queue, so that regularly accessed content stays alive in the network and is not deleted by a node's garbage collection routine."),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"While pinning files is a great solution for maintaining the persistence of your files in the network, Swarm will soon include storage incentives where files can be persisted simply by rewarding storer nodes with BZZ. Stay in touch for exciting developments soon!"))),Object(o.b)("p",null,"This, however, presents a problem for content which is important, but accessed seldom requested. In order to keep this content alive, Bee nodes provide a facility to ",Object(o.b)("strong",{parentName:"p"},"pin")," important content so that it is not deleted."),Object(o.b)("p",null,"There are two flavours of pinning, ",Object(o.b)("em",{parentName:"p"},"local")," and ",Object(o.b)("em",{parentName:"p"},"global"),"."),Object(o.b)("h2",{id:"local-pinning"},"Local Pinning"),Object(o.b)("p",null,"If a node operator wants to keep content so that it can be accessed only by local users of that node, via the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api-reference/api-reference"}),"APIs")," or ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/advanced/gateway"}),"Gateway"),", chunks can be ",Object(o.b)("em",{parentName:"p"},"pinned")," either during upload, or retrospectively using the Swarm reference."),Object(o.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Files pinned using local pinning will still not necessarily be available to the rest of the network. Read ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:""}),"global pinning")," to find out how to keep your files available to the whole of the swarm."))),Object(o.b)("h3",{id:"pin-during-upload"},"Pin During Upload"),Object(o.b)("p",null,"To store content so that it will persist even when Bee's garbage collection routine is deleting old chunks, we simply pass the ",Object(o.b)("inlineCode",{parentName:"p"},"Swarm-Pin")," header set to ",Object(o.b)("inlineCode",{parentName:"p"},"true")," when uploading."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),'curl -H "swarm-pin: true" --data-binary @bee.mp4 localhost:1633/files\\?bee.mp4\n')),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{"reference":"7b344ea68c699b0eca8bb4cfb3a77eb24f5e4e8ab50d38165e0fb48368350e8f"}\n')),Object(o.b)("h3",{id:"administrating-pinned-content"},"Administrating Pinned Content"),Object(o.b)("p",null,"Let's check to make sure this content was indeed pinned by querying the chunks api for the swarm reference to see whether the root chunk is currently pinned."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"curl http://localhost:1633/pin/chunks/7b344ea68c699b0eca8bb4cfb3a77eb24f5e4e8ab50d38165e0fb48368350e8f\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{"address":"7b344ea68c699b0eca8bb4cfb3a77eb24f5e4e8ab50d38165e0fb48368350e8f","pinCounter":1}\n')),Object(o.b)("p",null,"Success! Our pin counter is set to ",Object(o.b)("inlineCode",{parentName:"p"},"1"),"!"),Object(o.b)("h4",{id:"unpinning-files"},"Unpinning Files"),Object(o.b)("p",null,"If we later decide our content is no longer worth keeping, we can simply unpin it by sending a ",Object(o.b)("inlineCode",{parentName:"p"},"DELETE")," request to the files pinning endpoint using the same reference."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),'curl -XDELETE http://localhost:1633/pin/files/7b344ea68c699b0eca8bb4cfb3a77eb24f5e4e8ab50d38165e0fb48368350e8f\n``\n\n```json\n{"message":"OK","code":200}\n')),Object(o.b)("p",null,"Now, if we check again, we'll get a ",Object(o.b)("inlineCode",{parentName:"p"},"404")," error as the content is no longer pinned."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"curl http://localhost:1633/pin/chunks/7b344ea68c699b0eca8bb4cfb3a77eb24f5e4e8ab50d38165e0fb48368350e8f\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{"message":"Not Found","code":404}\n')),Object(o.b)("h4",{id:"pinning-already-uploaded-content"},"Pinning Already Uploaded Content"),Object(o.b)("p",null,"Content which already exists on the node can be repinned if it has not yet been garbage collected."),Object(o.b)("p",null,"To pin content existing on our node, we can send a ",Object(o.b)("inlineCode",{parentName:"p"},"POST")," request including the swarm reference to the files pinning endpoint."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),'curl -XPOST http://localhost:1633/pin/files/7b344ea68c699b0eca8bb4cfb3a77eb24f5e4e8ab50d38165e0fb48368350e8f\n``\n\n```json\n{"message":"OK","code":200}\n')),Object(o.b)("p",null,"Now, if we query our files pinning endpoint again, the pin counter will once again have been incremented."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"curl http://localhost:1633/pin/chunks/7b344ea68c699b0eca8bb4cfb3a77eb24f5e4e8ab50d38165e0fb48368350e8f\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{"address":"7b344ea68c699b0eca8bb4cfb3a77eb24f5e4e8ab50d38165e0fb48368350e8f","pinCounter":1}\n')),Object(o.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"warning")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"We recommended that content is pinned during upload for reliable pinning behaviour, as there is a chance some or all of your chunks may be deleted to free up space between uploading and pinning if pinned retrospectively."))),Object(o.b)("h2",{id:"global-pinning"},"Global Pinning"),Object(o.b)("p",null,"While ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:""}),"local pinning")," ensures that your own node does not delete files you have uploaded, nodes which store your chunks because they fall within their ",Object(o.b)("em",{parentName:"p"},"neighbourhood of responsibility")," may have deleted content which has not been recently accessed to make way for new chunks."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-info"}),"For more info on how chunks are distributed, persisted and stored within the network, read\n[The Book of Swarm](https://swarm-gateways.net/bzz:/latest.bookofswarm.eth/the-book-of-swarm.pdf).\n")),Object(o.b)("p",null,"To keep this content alive, your Bee node can be configured to refresh this content when it requested by other nodes in the network, using ",Object(o.b)("strong",{parentName:"p"},"global pinning"),"."),Object(o.b)("p",null,"First, we must start up our node with the ",Object(o.b)("inlineCode",{parentName:"p"},"global-pinning-enable")," flag set."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"bee start\\\n  --verbosity 5 \\\n  --swap-endpoint https://rpc.slock.it/goerli \\\n  --global-pinning-enable \\\n  --debug-api-enable\n")),Object(o.b)("p",null,"Next, we pin our file locally, as shown above."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),'curl -H "swarm-pin: true" --data-binary @bee.mp4 localhost:1633/files\\?bee.mp4\n')),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{"reference":"7b344ea68c699b0eca8bb4cfb3a77eb24f5e4e8ab50d38165e0fb48368350e8f"}\n')),Object(o.b)("p",null,"Now, when we distribute links to our files, we must also include the first two bytes of our overlay address as the ",Object(o.b)("em",{parentName:"p"},"target"),". If a chunk that has already been garbage collected by it's storer nodes is requested, the storer node will send a message using ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/advanced/pss"}),"PSS")," to the Swarm neighbourhood defined by this prefix, of which our node is a member."),Object(o.b)("p",null,"Let's use the addresses API endpoint to find out our target prefix."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"curl -s http://localhost:1635/addresses | jq .overlay\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),'"320ed0e01e6e3d06cab44c5ef85a0898e68f925a7ba3dc80ee614064bb7f9392"\n')),Object(o.b)("p",null,"Finally, we take the first two bytes of our overlay address, ",Object(o.b)("inlineCode",{parentName:"p"},"320e")," and include this when referencing our chunk."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"curl http://localhost:1633/files/7b344ea68c699b0eca8bb4cfb3a77eb24f5e4e8ab50d38165e0fb48368350e8f?targets=320e\n")),Object(o.b)("p",null,"Now, even if our chunks are deleted, they will be repaired in the network by our local Bee node and will always be available to the whole swarm!"))}l.isMDXComponent=!0},87:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return h}));var a=t(0),r=t.n(a);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function b(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=r.a.createContext({}),l=function(e){var n=r.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},d=function(e){var n=l(e.components);return r.a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},u=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=b(e,["components","mdxType","originalType","parentName"]),d=l(t),u=a,h=d["".concat(i,".").concat(u)]||d[u]||p[u]||o;return t?r.a.createElement(h,c(c({ref:n},s),{},{components:t})):r.a.createElement(h,c({ref:n},s))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=u;var c={};for(var b in n)hasOwnProperty.call(n,b)&&(c[b]=n[b]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=t[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);