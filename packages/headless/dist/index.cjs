'use client'
var lo=Object.create;var E=Object.defineProperty;var uo=Object.getOwnPropertyDescriptor;var co=Object.getOwnPropertyNames;var fo=Object.getPrototypeOf,Eo=Object.prototype.hasOwnProperty;var Co=(o,t)=>{for(var e in t)E(o,e,{get:t[e],enumerable:!0})},B=(o,t,e,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of co(t))!Eo.call(o,r)&&r!==e&&E(o,r,{get:()=>t[r],enumerable:!(n=uo(t,r))||n.enumerable});return o};var i=(o,t,e)=>(e=o!=null?lo(fo(o)):{},B(t||!o||!o.__esModule?E(e,"default",{value:o,enumerable:!0}):e,o)),yo=o=>B(E({},"__esModule",{value:!0}),o);var go={};Co(go,{EditorBubble:()=>T,EditorBubbleItem:()=>I,EditorCommand:()=>v,EditorCommandEmpty:()=>mo,EditorCommandItem:()=>S,EditorCommandList:()=>D,EditorContent:()=>g,EditorRoot:()=>Y,useEditor:()=>so.useCurrentEditor});module.exports=yo(go);var so=require("@tiptap/react"),Vo=require("@tiptap/core");var p=require("react"),Q=require("@tiptap/react"),G=require("jotai"),X=i(require("tunnel-rat"),1);var Po=i(require("@tiptap/starter-kit"),1),K=i(require("@tiptap/extension-horizontal-rule"),1),bo=i(require("@tiptap/extension-link"),1),Ro=i(require("@tiptap/extension-image"),1),W=i(require("@tiptap/extension-placeholder"),1),O=i(require("@tiptap/extension-underline"),1),$=i(require("@tiptap/extension-text-style"),1),q=require("@tiptap/extension-color"),ho=require("@tiptap/extension-task-item"),vo=require("@tiptap/extension-task-list"),z=require("@tiptap/core"),F=require("tiptap-markdown"),J=i(require("@tiptap/extension-highlight"),1);var M=require("@tiptap/core"),xo=M.Extension.create({name:"CustomKeymap",addCommands(){return{selectTextWithinNodeBoundaries:()=>({editor:o,commands:t})=>{let{state:e}=o,{tr:n}=e,r=n.selection.$from.start(),m=n.selection.$to.end();return t.setTextSelection({from:r,to:m})}}},addKeyboardShortcuts(){return{"Mod-a":({editor:o})=>{let{state:t}=o,{tr:e}=t,n=e.selection.from,r=e.selection.to,m=e.selection.$from.start(),s=e.selection.$to.end();return n>m||r<s?(o.chain().selectTextWithinNodeBoundaries().run(),!0):!1}}}}),k=xo;var U=i(require("tiptap-extension-global-drag-handle"),1),V=i(require("tiptap-extension-auto-joiner"),1);var R=require("jotai"),u=require("react"),C=require("cmdk");var P=require("jotai"),A=(0,P.atom)(""),b=(0,P.atom)(null);var L=require("jotai"),H=(0,L.createStore)();var a=require("react/jsx-runtime"),h=(0,u.createContext)({});var v=(0,u.forwardRef)(({children:o,className:t,...e},n)=>{let[r,m]=(0,R.useAtom)(A);return(0,a.jsx)(h.Consumer,{children:s=>(0,a.jsx)(s.In,{children:(0,a.jsxs)(C.Command,{ref:n,onKeyDown:x=>{x.stopPropagation()},id:"slash-command",className:t,...e,children:[(0,a.jsx)(C.Command.Input,{value:r,onValueChange:m,style:{display:"none"}}),o]})})})}),D=C.Command.List;v.displayName="EditorCommand";var Ao=W.default.configure({placeholder:({node:o})=>o.type.name==="heading"?`Heading ${o.attrs.level}`:"Press '/' for commands",includeChildren:!0}),_=[O.default,$.default,q.Color,J.default.configure({multicolor:!0}),F.Markdown.configure({transformPastedText:!0}),k,U.default.configure({scrollTreshold:0}),V.default],Lo=K.default.extend({addInputRules(){return[new z.InputRule({find:/^(?:---|—-|___\s|\*\*\*\s)$/u,handler:({state:o,range:t})=>{let e={},{tr:n}=o,r=t.from,m=t.to;n.insert(r-1,this.type.create(e)).delete(n.mapping.map(r),n.mapping.map(m))}})]}});var c=require("react/jsx-runtime"),Y=({children:o})=>{let t=(0,p.useRef)((0,X.default)()).current;return(0,c.jsx)(G.Provider,{store:H,children:(0,c.jsx)(h.Provider,{value:t,children:o})})},g=(0,p.forwardRef)(({className:o,children:t,initialContent:e,...n},r)=>{let m=(0,p.useMemo)(()=>[..._,...n.extensions??[]],[n.extensions]);return(0,c.jsx)("div",{ref:r,className:o,children:(0,c.jsx)(Q.EditorProvider,{...n,content:e,extensions:m,children:t})})});g.displayName="EditorContent";var l=require("@tiptap/react"),d=require("react"),N=require("react/jsx-runtime"),T=(0,d.forwardRef)(({children:o,tippyOptions:t,...e},n)=>{let{editor:r}=(0,l.useCurrentEditor)(),m=(0,d.useRef)(null);(0,d.useEffect)(()=>{!m.current||!t?.placement||(m.current.setProps({placement:t.placement}),m.current.popperInstance?.update())},[t?.placement]);let s=(0,d.useMemo)(()=>({shouldShow:({editor:f,state:ao})=>{let{selection:w}=ao,{empty:po}=w;return!(!f.isEditable||f.isActive("image")||po||(0,l.isNodeSelection)(w))},tippyOptions:{onCreate:f=>{m.current=f},moveTransition:"transform 0.15s ease-out",...t},...e}),[e,t]);return r?(0,N.jsx)("div",{ref:n,children:(0,N.jsx)(l.BubbleMenu,{editor:r,...s,children:o})}):null});T.displayName="EditorBubble";var Z=require("react"),j=require("@radix-ui/react-slot"),oo=require("@tiptap/react"),to=require("react/jsx-runtime"),I=(0,Z.forwardRef)(({children:o,asChild:t,onSelect:e,...n},r)=>{let{editor:m}=(0,oo.useCurrentEditor)(),s=t?j.Slot:"div";return m?(0,to.jsx)(s,{ref:r,...n,onClick:()=>e?.(m),children:o}):null});I.displayName="EditorBubbleItem";var eo=require("react"),y=require("cmdk"),ro=require("@tiptap/react"),no=require("jotai");var io=require("react/jsx-runtime"),S=(0,eo.forwardRef)(({children:o,onCommand:t,...e},n)=>{let{editor:r}=(0,ro.useCurrentEditor)(),m=(0,no.useAtomValue)(b);return!r||!m?null:(0,io.jsx)(y.CommandItem,{ref:n,...e,onSelect:()=>t({editor:r,range:m}),children:o})});S.displayName="EditorCommandItem";var mo=y.CommandEmpty;0&&(module.exports={EditorBubble,EditorBubbleItem,EditorCommand,EditorCommandEmpty,EditorCommandItem,EditorCommandList,EditorContent,EditorRoot,useEditor});