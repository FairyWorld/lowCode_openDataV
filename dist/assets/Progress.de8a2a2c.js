var W=(b,y,r)=>new Promise((u,n)=>{var c=s=>{try{i(r.next(s))}catch(_){n(_)}},m=s=>{try{i(r.throw(s))}catch(_){n(_)}},i=s=>s.done?u(s.value):Promise.resolve(s.value).then(c,m);i((r=r.apply(b,y)).next())});import{h as R}from"./index.93557bb7.js";import{u as F}from"./useProp.afe31ed3.js";import{d as H,r as g,h as N,a as T,i as o,w as E,o as p,c as f,b as v,F as $,e as z,u as t,t as L,l as j,f as M,_ as O}from"./index.ba5671ee.js";import{u as X}from"./useEventBus.2a613ea3.js";const q={class:"dv-percent-pond"},A=["id"],J=["offset","stop-color"],K=["id","x2"],Q=["offset","stop-color"],U=["x","y","rx","ry","stroke-width","stroke","width","height"],Y=["stroke-width","stroke-dasharray","stroke","points"],Z=["stroke","fill","x","y"],ee=H({__name:"Progress",props:{component:null},setup(b){const y=b,{propValue:r}=F(y.component),u=g(150),n=g(150),c=g(60),m=g(`percent-pond-gradientId1-${N()}`),i=g(`percent-pond-gradientId2-${N()}`),s=a=>{const h=a[0].contentRect;u.value=h.width,n.value=h.height},_=a=>{const l=a;r.data.datatag&&l.TagName===r.data.datatag&&(c.value=Number((Number(l.TagValue)*100/Number(r.data.maxValue)).toFixed(2)))};T(()=>W(this,null,function*(){yield S()}));const S=()=>W(this,null,function*(){if(r.data.history)try{const a=yield R.post({url:r.data.history,data:[r.data.datatag]});a.status===200&&(c.value=(Number(a.data.TagValue)||0)*100/Number(r.data.maxValue))}catch(a){console.log(a.message||a)}}),e=o(()=>({colors:[r.attr.color1,r.attr.color2],borderWidth:Number(r.attr.borderWidth),borderGap:Number(r.attr.borderGap),lineDash:r.attr.lineDash,gapWeight:r.attr.gapWeight,textColor:r.attr.textColor,fontSize:Number(r.attr.fontSize),borderRadius:Number(r.attr.borderRadius),localGradient:Boolean(r.attr.localGradient),formatter:r.attr.formatter})),k=o(()=>e.value.borderWidth?u.value-e.value.borderWidth:0),G=o(()=>e.value.borderWidth?n.value-e.value.borderWidth:0),D=o(()=>e.value?n.value-(e.value.borderWidth+e.value.borderGap)*2:0),V=o(()=>e.value&&e.value.localGradient?m.value:i.value),C=o(()=>{const a=n.value/2;if(!e.value)return`0, ${a} 0, ${a}`;const l=(u.value-(e.value.borderWidth+e.value.borderGap)*2)/100*c.value;return`
        ${e.value.borderWidth+e.value.borderGap}, ${a}
        ${e.value.borderWidth+e.value.borderGap+l}, ${a+.001}`}),w=o(()=>{if(!e.value.colors)return[];const a=e.value.colors.length,l=100/(a-1);return e.value.colors.map((h,d)=>[l*d,h])}),B=o(()=>e.value?"200%":"100%"),I=o(()=>e.value.formatter?e.value.formatter.replace("{value}",c.value.toString()):""),P=o(()=>({fontSize:(r.attr.fontSize||12)+"px"}));return X("actual",_),(a,l)=>{const h=M("resize");return E((p(),f("div",q,[(p(),f("svg",null,[v("defs",null,[v("linearGradient",{id:m.value,x1:"0%",y1:"0%",x2:"100%",y2:"0%"},[(p(!0),f($,null,z(t(w),(d,x)=>(p(),f("stop",{key:x,offset:`${d[0]}%`,"stop-color":d[1]},null,8,J))),128))],8,A),v("linearGradient",{id:i.value,x1:"0%",y1:"0%",x2:t(B),y2:"0%"},[(p(!0),f($,null,z(t(w),(d,x)=>(p(),f("stop",{key:x,offset:`${d[0]}%`,"stop-color":d[1]},null,8,Q))),128))],8,K)]),v("rect",{x:t(e)?t(e).borderWidth/2:"0",y:t(e)?t(e).borderWidth/2:"0",rx:t(e)?t(e).borderRadius:"0",ry:t(e)?t(e).borderRadius:"0",fill:"transparent","stroke-width":t(e)?t(e).borderWidth:"0",stroke:`url(#${m.value})`,width:t(k)>0?t(k):0,height:t(G)>0?t(G):0},null,8,U),v("polyline",{"stroke-width":t(D),"stroke-dasharray":t(e)?[t(e).lineDash,t(e).gapWeight].join(","):"0",stroke:`url(#${t(V)})`,points:t(C)},null,8,Y),v("text",{style:j(t(P)),stroke:t(e)?t(e).textColor:"#fff",fill:t(e)?t(e).textColor:"#fff",x:u.value/2,y:n.value/2},L(t(I)),13,Z)]))])),[[h,s]])}}});const ne=O(ee,[["__scopeId","data-v-a67e5d49"]]);export{ne as default};
