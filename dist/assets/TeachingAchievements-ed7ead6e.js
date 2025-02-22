import{r as a,j as c,a as n}from"./index-5a747f66.js";import{s as f}from"./styles-bea25d13.js";import{S as w}from"./SectionWrapper-7e582f78.js";import{m as l}from"./motion-db14ca0f.js";/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),d=(...e)=>e.filter((t,i,s)=>!!t&&t.trim()!==""&&s.indexOf(t)===i).join(" ").trim();/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var b={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=a.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:i=2,absoluteStrokeWidth:s,className:o="",children:r,iconNode:p,...h},u)=>a.createElement("svg",{ref:u,...b,width:t,height:t,stroke:e,strokeWidth:s?Number(i)*24/Number(t):i,className:d("lucide",o),...h},[...p.map(([x,g])=>a.createElement(x,g)),...Array.isArray(r)?r:[r]]));/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m=(e,t)=>{const i=a.forwardRef(({className:s,...o},r)=>a.createElement(v,{ref:r,iconNode:t,className:d(`lucide-${y(e)}`,s),...o}));return i.displayName=`${e}`,i};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],N=m("ChevronDown",C);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],k=m("ChevronUp",S),A=[{id:1,title:"Frontend Development Instructor",duration:"3 Months",description:"Successfully taught frontend development to students, focusing on practical implementations and building real-world projects.",topicsCovered:["HTML","CSS","JavaScript","Tailwind CSS","React"],highlights:["Guided students through building responsive web applications.","Emphasized best practices in frontend development and UI/UX principles.","Introduced state management using React hooks and advanced component patterns."]}],j=({achievement:e})=>{const[t,i]=a.useState(!1);return c(l.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},className:"bg-tertiary rounded-2xl shadow-lg p-6 w-full max-w-2xl mx-auto mb-6",children:[c("h2",{className:"text-2xl font-semibold text-white mb-2 flex justify-between items-center",children:[e.title,n("button",{onClick:()=>i(!t),className:"text-white hover:text-gray-800",children:t?n(k,{size:24}):n(N,{size:24})})]}),c("p",{className:"text-white mb-4 italic",children:["Duration: ",e.duration]}),n("p",{className:"text-secondary mb-4",children:e.description}),n("div",{className:"flex flex-wrap gap-2 mb-4",children:e.topicsCovered.map((s,o)=>n("span",{className:"bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full",children:s},o))}),t&&c(l.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.3},children:[n("h3",{className:"text-lg font-semibold text-white mb-2",children:"Key Highlights:"}),n("ul",{className:"list-disc list-inside text-secondary space-y-1",children:e.highlights.map((s,o)=>n("li",{children:s},o))})]})]})},D=()=>c("div",{className:"py-10 px-4 text-white",children:[n("h2",{className:`text-center my-4 ${f.sectionHeadText}`,children:"My Achievements"}),A.map(e=>n(j,{achievement:e},e.id))]}),T=w(D,"achievements");export{T as default};
