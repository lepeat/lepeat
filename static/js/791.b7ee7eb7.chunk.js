"use strict";(self.webpackChunktest_fe=self.webpackChunktest_fe||[]).push([[791],{3791:(e,t,n)=>{n.r(t),n.d(t,{default:()=>N});var r=n(2791),a=n(734),i=n(8335),s=n(3585),o=n(9405);var l=n(5471),c=n(5087),u=n(7618),g=n(6265),d=n(5265),m=n(9290),f=n(2618),h=n(5049);function p(e){return"".concat(e,1===e?" term":" terms")}var b=n(7689),w=n(1159),k=n(184);const x=e=>{let{training:t,profile:n}=e;const a=(0,b.s0)(),i=(e,t)=>{a("/training_session",{state:{trainingName:e,trainingType:t}})};let{overallStatistics:x,thisTimeStatistics:N,minimalTimeToUpdate:y}=function(e,t){var n;const r=new Array(e.repetitionIntervals.length+1).fill(0),a=new Array(e.repetitionIntervals.length+1).fill(0);let i=Number.MAX_SAFE_INTEGER;const l=t.trainingProgresses.get(e),c=Date.now(),u=null!==(n=null===l||void 0===l?void 0:l.progress)&&void 0!==n?n:new Map,g=t.terms.filter((e=>!e.isBacklog)).filter((t=>e.configuration.has(t.termDefinition)));for(const m of g){const t=u.get(m);if(t){const{doNeed:n,remainingDelayBeforeStart:a}=(0,s.Ax)(t,e,c);switch(t.status){case o.q.Learning:case o.q.Relearning:d(0,n,a);break;case o.q.Repetition:d(Math.min(Math.max(0,t.iterationNumber),r.length-2)+1,n,a)}}else r[0]+=1,a[0]+=1}return{overallStatistics:r,thisTimeStatistics:a,minimalTimeToUpdate:i};function d(e,t,n){r[e]+=1,t?a[e]+=1:i=Math.min(i,n)}}(t,n);const q=N.slice(1).reduce(((e,t)=>e+t),0),R=x.reduce(((e,t)=>e+t),0),D=N[0],[,v]=(0,r.useReducer)((e=>e+1),0);return(0,r.useEffect)((()=>{if(y>2147483647)return()=>{};y=Math.max(y,1e4),y=Math.min(y,12e4);const e=setTimeout((()=>{v()}),y);return()=>{clearTimeout(e)}})),(0,k.jsx)(l.b,{sm:6,xl:4,xxl:3,children:(0,k.jsxs)(c.x,{className:"mb-4",children:[(0,k.jsx)(u.b,{children:(0,k.jsx)(h.nc,{data:{labels:["Learning"].concat(Array.from({length:x.length-1},((e,t)=>"".concat(t+1," iteration")))),datasets:[{label:"Terms to train now",backgroundColor:"rgba(255, 99, 132, 0.2)",borderColor:"rgba(255, 99, 132, 1)",pointBackgroundColor:"rgba(255, 99, 132, 1)",pointBorderColor:"#fff",pointHighlightFill:"#fff",pointHighlightStroke:"rgba(151, 187, 205, 1)",data:N},{label:"Terms on iteration",backgroundColor:"rgba(151, 187, 205, 0.2)",borderColor:"rgba(151, 187, 205, 1)",pointBackgroundColor:"rgba(151, 187, 205, 1)",pointBorderColor:"#fff",pointHighlightFill:"#fff",pointHighlightStroke:"rgba(220, 220, 220, 1)",data:x}]},options:{scales:{r:{ticks:{showLabelBackdrop:!1,precision:0,z:1}}}}})}),(0,k.jsxs)(g.s,{children:[(0,k.jsx)(d.t,{children:t.name}),(0,k.jsxs)(m.u,{children:["You have ",p(D)," to learn and ",p(q)," to repeat ouf of ",R,"."]}),(0,k.jsx)("div",{className:"d-grid gap-2 col-10 mx-auto",children:D>0&&q>0?(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(f.u,{color:"primary",onClick:()=>i(t.name,s.Pt.All),children:"Start training"}),(0,k.jsx)(f.u,{color:"primary",onClick:()=>i(t.name,s.Pt.OnlyNew),children:"Only learn new terms"}),(0,k.jsx)(f.u,{color:"primary",onClick:()=>i(t.name,s.Pt.OnlyRepeat),children:"Only repeat terms"})]}):D>0?(0,k.jsx)(f.u,{color:"primary",onClick:()=>i(t.name,s.Pt.OnlyNew),children:"Learn new terms"}):q>0?(0,k.jsx)(f.u,{color:"primary",onClick:()=>i(t.name,s.Pt.OnlyRepeat),children:"Repeat terms"}):(0,k.jsxs)(f.u,{color:"primary",disabled:!0,children:["Next training in ",(0,w.B)(Date.now(),new Date(Date.now()+y),{includeSeconds:!1})]})})]})]})},t.name)},N=()=>{const{profile:e}=(0,r.useContext)(i.Z);return(0,k.jsx)(k.Fragment,{children:(0,k.jsx)(a.r,{className:"mb-4",xs:{gutter:4},children:e.trainingDefinitions.map((t=>(0,k.jsx)(x,{training:t,profile:e},t.id)))})})}},3585:(e,t,n)=>{n.d(t,{Ax:()=>h,HZ:()=>l,Pt:()=>o,bV:()=>d,f5:()=>f,ot:()=>u,wP:()=>m,yZ:()=>c,zd:()=>g});var r=n(9405),a=n(7758),i=n(4261);const s=!1;let o=function(e){return e.OnlyNew="onlyNew",e.OnlyRepeat="onlyRepeat",e.All="all",e}({});function l(e,t){switch(e.status){case r.q.Relearning:throw new Error("Unexpected `easy` action for relearning step");case r.q.Learning:e.status=r.q.Repetition,e.iterationNumber=0;break;case r.q.Repetition:e.iterationNumber+=2;break;default:throw new Error("Unknown status: ".concat(e.status))}e.lastEditDate=Date.now(),(0,a.kO)(t)}function c(e,t){if(e.status===r.q.Relearning)throw new Error("Unexpected `hard` action for relearning step");e.lastEditDate=Date.now(),(0,a.kO)(t)}function u(e,t,n){const i=e.iterationNumber;switch(e.status){case r.q.Relearning:e.status=r.q.Repetition,e.iterationNumber=Math.max(0,e.iterationNumber-1);break;case r.q.Learning:i+1>=t.learningIntervals.length?(e.status=r.q.Repetition,e.iterationNumber=0):e.iterationNumber+=1;break;case r.q.Repetition:e.iterationNumber+=1;break;default:throw new Error("Unknown status: ".concat(e.status))}e.lastEditDate=Date.now(),(0,a.kO)(n)}function g(e,t){switch(e.status){case r.q.Relearning:e.status=r.q.Learning,e.iterationNumber=0;break;case r.q.Learning:e.iterationNumber=0;break;case r.q.Repetition:e.status=r.q.Relearning;break;default:throw new Error("Unknown status: ".concat(e.status))}e.lastEditDate=Date.now(),(0,a.kO)(t)}function d(e){return{...e}}function m(e,t,n){t.status=e.status,t.lastEditDate=e.lastEditDate,t.iterationNumber=e.iterationNumber,(0,a.kO)(n)}function f(e,t,n){let a=e.trainingProgresses.get(t);a||(a={progress:new Map},e.trainingProgresses.set(t,a));let s=a.progress,l=Date.now();return e.terms.filter((e=>!e.isBacklog)).filter((e=>t.configuration.has(e.termDefinition))).map((e=>{let t=s.get(e);return t||(t={id:(0,i.Z)(),status:r.q.Learning,term:e,iterationNumber:0,lastEditDate:void 0},s.set(e,t)),t})).filter((e=>{switch(n){case o.OnlyNew:return e.status===r.q.Learning||e.status===r.q.Relearning;case o.OnlyRepeat:return e.status===r.q.Repetition}return!0})).filter((e=>h(e,t,l).doNeed))}function h(e,t,n){const a=e.lastEditDate;if(!a)return{doNeed:!0,remainingDelayBeforeStart:0};let i=function(e,t){var n;switch(t.status){case r.q.Relearning:return p(null!==(n=e.learningIntervals[e.learningIntervals.length-1])&&void 0!==n?n:0);case r.q.Learning:return p(b(e.learningIntervals,t.iterationNumber));case r.q.Repetition:return function(e){if(s)return 6e4;return 1e3*e*60*60*24}(b(e.repetitionIntervals,t.iterationNumber))}}(t,e);const o=a+i-n;return{doNeed:o<=0,remainingDelayBeforeStart:o}}function p(e){return s?3e4:1e3*e*60}function b(e,t){return 0===e.length?0:t<0?e[0]:t>=e.length?e[e.length-1]:e[t]}}}]);
//# sourceMappingURL=791.b7ee7eb7.chunk.js.map